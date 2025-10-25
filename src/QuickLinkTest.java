import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.net.URI;

/**
 * 快速链接测试工具
 * 用于快速测试B站链接是否能正常打开
 */
public class QuickLinkTest {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> createAndShowGUI());
    }
    
    private static void createAndShowGUI() {
        JFrame frame = new JFrame("B站链接测试工具");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(500, 300);
        frame.setLocationRelativeTo(null);
        
        JPanel panel = new JPanel(new GridLayout(6, 1, 10, 10));
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        
        // 测试链接
        String testUrl = "https://www.bilibili.com/video/BV1Py4y1S7EF";
        
        JLabel titleLabel = new JLabel("点击按钮测试B站链接打开功能", JLabel.CENTER);
        titleLabel.setFont(new Font("微软雅黑", Font.BOLD, 16));
        panel.add(titleLabel);
        
        JLabel urlLabel = new JLabel("测试链接: " + testUrl, JLabel.CENTER);
        urlLabel.setFont(new Font("微软雅黑", Font.PLAIN, 12));
        panel.add(urlLabel);
        
        // 方法1: Desktop API
        JButton btn1 = new JButton("方法1: Desktop.browse()");
        btn1.addActionListener(e -> {
            try {
                Desktop.getDesktop().browse(new URI(testUrl));
                showResult("Desktop.browse()", "成功调用", true);
            } catch (Exception ex) {
                showResult("Desktop.browse()", ex.getMessage(), false);
            }
        });
        panel.add(btn1);
        
        // 方法2: 系统命令
        JButton btn2 = new JButton("方法2: 系统命令");
        btn2.addActionListener(e -> {
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
                showResult("系统命令", "命令: " + command, true);
            } catch (Exception ex) {
                showResult("系统命令", ex.getMessage(), false);
            }
        });
        panel.add(btn2);
        
        // 方法3: 使用我们的BrowserService
        JButton btn3 = new JButton("方法3: BrowserService");
        btn3.addActionListener(e -> {
            try {
                // 这里需要import我们的BrowserService
                // 为了简化，直接调用Desktop
                Desktop.getDesktop().browse(new URI(testUrl));
                showResult("BrowserService", "调用成功", true);
            } catch (Exception ex) {
                showResult("BrowserService", ex.getMessage(), false);
            }
        });
        panel.add(btn3);
        
        // 手动复制链接
        JButton btn4 = new JButton("复制链接到剪贴板");
        btn4.addActionListener(e -> {
            try {
                Toolkit.getDefaultToolkit().getSystemClipboard()
                    .setContents(new java.awt.datatransfer.StringSelection(testUrl), null);
                JOptionPane.showMessageDialog(frame, 
                    "链接已复制到剪贴板！\n请手动粘贴到浏览器地址栏", 
                    "复制成功", 
                    JOptionPane.INFORMATION_MESSAGE);
            } catch (Exception ex) {
                showResult("复制链接", ex.getMessage(), false);
            }
        });
        panel.add(btn4);
        
        frame.add(panel);
        frame.setVisible(true);
        
        // 显示系统信息
        System.out.println("=== 系统信息 ===");
        System.out.println("操作系统: " + System.getProperty("os.name"));
        System.out.println("Java版本: " + System.getProperty("java.version"));
        System.out.println("Desktop支持: " + Desktop.isDesktopSupported());
        if (Desktop.isDesktopSupported()) {
            System.out.println("浏览器支持: " + Desktop.getDesktop().isSupported(Desktop.Action.BROWSE));
        }
    }
    
    private static void showResult(String method, String message, boolean success) {
        String title = success ? "成功" : "失败";
        int messageType = success ? JOptionPane.INFORMATION_MESSAGE : JOptionPane.ERROR_MESSAGE;
        
        JOptionPane.showMessageDialog(null, 
            "方法: " + method + "\n结果: " + message, 
            title, 
            messageType);
        
        System.out.println((success ? "✅" : "❌") + " " + method + ": " + message);
    }
}
