import service.BrowserService;
import java.awt.Desktop;
import java.net.URI;
import javax.swing.*;

/**
 * 专门测试浏览器打开功能
 */
public class TestBrowserOpen {
    public static void main(String[] args) {
        System.out.println("=== 测试浏览器打开功能 ===");
        
        // 测试链接
        String testUrl = "https://www.bilibili.com/video/BV1Py4y1S7EF";
        
        System.out.println("测试链接: " + testUrl);
        System.out.println("Desktop支持: " + Desktop.isDesktopSupported());
        
        if (Desktop.isDesktopSupported()) {
            Desktop desktop = Desktop.getDesktop();
            System.out.println("浏览器支持: " + desktop.isSupported(Desktop.Action.BROWSE));
        }
        
        // 方法1: 直接使用Desktop API
        System.out.println("\n=== 方法1: 直接使用Desktop API ===");
        try {
            Desktop.getDesktop().browse(new URI(testUrl));
            System.out.println("✅ Desktop.browse() 调用成功");
        } catch (Exception e) {
            System.out.println("❌ Desktop.browse() 失败: " + e.getMessage());
        }
        
        // 等待3秒
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        // 方法2: 使用我们的BrowserService
        System.out.println("\n=== 方法2: 使用BrowserService ===");
        BrowserService.openBilibiliVideo(testUrl);
        
        // 方法3: 使用系统命令
        System.out.println("\n=== 方法3: 使用系统命令 ===");
        try {
            String os = System.getProperty("os.name").toLowerCase();
            String command;
            
            if (os.contains("win")) {
                command = "rundll32 url.dll,FileProtocolHandler " + testUrl;
            } else if (os.contains("mac")) {
                command = "open " + testUrl;
            } else {
                command = "xdg-open " + testUrl;
            }
            
            System.out.println("执行命令: " + command);
            Runtime.getRuntime().exec(command);
            System.out.println("✅ 系统命令执行成功");
        } catch (Exception e) {
            System.out.println("❌ 系统命令失败: " + e.getMessage());
        }
        
        // 显示GUI测试
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("浏览器测试");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setSize(400, 200);
            frame.setLocationRelativeTo(null);
            
            JPanel panel = new JPanel();
            
            JButton btn1 = new JButton("测试Desktop.browse()");
            btn1.addActionListener(e -> {
                try {
                    Desktop.getDesktop().browse(new URI(testUrl));
                    JOptionPane.showMessageDialog(frame, "已调用Desktop.browse()");
                } catch (Exception ex) {
                    JOptionPane.showMessageDialog(frame, "失败: " + ex.getMessage());
                }
            });
            
            JButton btn2 = new JButton("测试BrowserService");
            btn2.addActionListener(e -> BrowserService.openBilibiliVideo(testUrl));
            
            JButton btn3 = new JButton("测试系统命令");
            btn3.addActionListener(e -> {
                try {
                    String os = System.getProperty("os.name").toLowerCase();
                    String command;
                    
                    if (os.contains("win")) {
                        command = "rundll32 url.dll,FileProtocolHandler " + testUrl;
                    } else if (os.contains("mac")) {
                        command = "open " + testUrl;
                    } else {
                        command = "xdg-open " + testUrl;
                    }
                    
                    Runtime.getRuntime().exec(command);
                    JOptionPane.showMessageDialog(frame, "已执行系统命令");
                } catch (Exception ex) {
                    JOptionPane.showMessageDialog(frame, "失败: " + ex.getMessage());
                }
            });
            
            panel.add(btn1);
            panel.add(btn2);
            panel.add(btn3);
            
            frame.add(panel);
            frame.setVisible(true);
        });
    }
}
