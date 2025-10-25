import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.net.URI;

/**
 * 专门测试B站链接是否能正常打开
 */
public class LinkTester extends JFrame {
    private String[] testLinks = {
        "https://www.bilibili.com/video/BV1Py4y1S7EF", // 西红柿炒蛋
        "https://www.bilibili.com/video/BV1Xt411Z7z8", // 宫保鸡丁  
        "https://www.bilibili.com/video/BV1Us411H7Nw", // 红烧肉
        "https://www.bilibili.com/video/BV1gb411J7cR", // 酸辣土豆丝
        "https://www.bilibili.com/video/BV1GM41157Hz"  // 青椒肉丝
    };
    
    private String[] dishNames = {
        "西红柿炒蛋", "宫保鸡丁", "红烧肉", "酸辣土豆丝", "青椒肉丝"
    };
    
    public LinkTester() {
        setTitle("B站链接测试工具");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(600, 400);
        setLocationRelativeTo(null);
        
        JPanel mainPanel = new JPanel(new BorderLayout());
        
        // 标题
        JLabel titleLabel = new JLabel("点击按钮测试B站链接是否能正常打开", JLabel.CENTER);
        titleLabel.setFont(new Font("微软雅黑", Font.BOLD, 16));
        titleLabel.setBorder(BorderFactory.createEmptyBorder(20, 0, 20, 0));
        mainPanel.add(titleLabel, BorderLayout.NORTH);
        
        // 按钮面板
        JPanel buttonPanel = new JPanel(new GridLayout(testLinks.length + 2, 1, 10, 10));
        buttonPanel.setBorder(BorderFactory.createEmptyBorder(0, 50, 0, 50));
        
        // 系统信息
        JLabel sysInfo = new JLabel("系统: " + System.getProperty("os.name") + 
                                   " | Java: " + System.getProperty("java.version") + 
                                   " | Desktop支持: " + Desktop.isDesktopSupported(), JLabel.CENTER);
        sysInfo.setFont(new Font("微软雅黑", Font.PLAIN, 12));
        buttonPanel.add(sysInfo);
        
        // 为每个链接创建测试按钮
        for (int i = 0; i < testLinks.length; i++) {
            final int index = i;
            JButton testButton = new JButton(dishNames[i] + " - 测试链接");
            testButton.setFont(new Font("微软雅黑", Font.PLAIN, 14));
            
            testButton.addActionListener(new ActionListener() {
                @Override
                public void actionPerformed(ActionEvent e) {
                    testLink(testLinks[index], dishNames[index]);
                }
            });
            
            buttonPanel.add(testButton);
        }
        
        // 全部测试按钮
        JButton testAllButton = new JButton("🚀 测试所有链接");
        testAllButton.setFont(new Font("微软雅黑", Font.BOLD, 14));
        testAllButton.setBackground(new Color(102, 102, 255));
        testAllButton.setForeground(Color.WHITE);
        testAllButton.addActionListener(e -> testAllLinks());
        buttonPanel.add(testAllButton);
        
        mainPanel.add(buttonPanel, BorderLayout.CENTER);
        
        // 说明文字
        JLabel infoLabel = new JLabel("<html><center>如果链接能正常打开浏览器并跳转到B站视频，说明功能正常<br>如果无法打开，会显示错误信息</center></html>", JLabel.CENTER);
        infoLabel.setFont(new Font("微软雅黑", Font.PLAIN, 12));
        infoLabel.setBorder(BorderFactory.createEmptyBorder(20, 0, 20, 0));
        mainPanel.add(infoLabel, BorderLayout.SOUTH);
        
        add(mainPanel);
    }
    
    private void testLink(String url, String dishName) {
        System.out.println("测试链接: " + dishName + " -> " + url);
        
        try {
            // 方法1: Desktop API
            if (Desktop.isDesktopSupported() && Desktop.getDesktop().isSupported(Desktop.Action.BROWSE)) {
                Desktop.getDesktop().browse(new URI(url));
                showResult(dishName, "✅ Desktop API成功", "链接: " + url, true);
            } else {
                // 方法2: 系统命令
                trySystemCommand(url, dishName);
            }
        } catch (Exception e) {
            // 方法2: 系统命令备用
            trySystemCommand(url, dishName);
        }
    }
    
    private void trySystemCommand(String url, String dishName) {
        try {
            String os = System.getProperty("os.name").toLowerCase();
            String command;
            
            if (os.contains("win")) {
                command = "rundll32 url.dll,FileProtocolHandler " + url;
            } else if (os.contains("mac")) {
                command = "open " + url;
            } else {
                command = "xdg-open " + url;
            }
            
            Runtime.getRuntime().exec(command);
            showResult(dishName, "✅ 系统命令成功", "命令: " + command, true);
        } catch (Exception e) {
            showResult(dishName, "❌ 打开失败", "错误: " + e.getMessage() + "\n链接: " + url, false);
        }
    }
    
    private void testAllLinks() {
        for (int i = 0; i < testLinks.length; i++) {
            testLink(testLinks[i], dishNames[i]);
            try {
                Thread.sleep(1000); // 间隔1秒
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }
    }
    
    private void showResult(String dishName, String result, String details, boolean success) {
        int messageType = success ? JOptionPane.INFORMATION_MESSAGE : JOptionPane.ERROR_MESSAGE;
        JOptionPane.showMessageDialog(this, 
            "菜谱: " + dishName + "\n结果: " + result + "\n详情: " + details, 
            success ? "测试成功" : "测试失败", 
            messageType);
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            try {
                UIManager.setLookAndFeel(UIManager.getSystemLookAndFeel());
            } catch (Exception e) {
                e.printStackTrace();
            }
            new LinkTester().setVisible(true);
        });
    }
}
