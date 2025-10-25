package service;

import java.awt.Desktop;
import java.net.URI;
import javax.swing.JOptionPane;

/**
 * 浏览器服务类 - 处理外部链接跳转
 */
public class BrowserService {
    
    /**
     * 打开B站视频链接
     * @param url B站视频URL
     */
    public static void openBilibiliVideo(String url) {
        if (url == null || url.trim().isEmpty()) {
            JOptionPane.showMessageDialog(null,
                "抱歉，该菜谱暂时没有教学视频链接",
                "提示",
                JOptionPane.INFORMATION_MESSAGE);
            return;
        }

        String formattedUrl = formatBilibiliUrl(url);
        System.out.println("正在打开B站链接: " + formattedUrl);

        // 尝试多种方法打开链接
        boolean success = false;

        // 方法1: 使用Desktop API
        success = tryDesktopBrowse(formattedUrl);

        // 方法2: 如果Desktop失败，尝试系统命令
        if (!success) {
            success = trySystemCommand(formattedUrl);
        }

        // 方法3: 如果都失败，显示链接供手动复制
        if (!success) {
            showFallbackMessage(formattedUrl);
        } else {
            System.out.println("✅ 成功打开链接: " + formattedUrl);
        }
    }

    /**
     * 尝试使用Desktop API打开链接
     */
    private static boolean tryDesktopBrowse(String url) {
        try {
            if (Desktop.isDesktopSupported()) {
                Desktop desktop = Desktop.getDesktop();
                if (desktop.isSupported(Desktop.Action.BROWSE)) {
                    URI uri = new URI(url);
                    desktop.browse(uri);
                    System.out.println("✅ Desktop.browse() 成功");
                    return true;
                }
            }
        } catch (Exception e) {
            System.out.println("❌ Desktop.browse() 失败: " + e.getMessage());
        }
        return false;
    }

    /**
     * 尝试使用系统命令打开链接
     */
    private static boolean trySystemCommand(String url) {
        try {
            String os = System.getProperty("os.name").toLowerCase();
            String command;

            if (os.contains("win")) {
                // Windows
                command = "rundll32 url.dll,FileProtocolHandler " + url;
            } else if (os.contains("mac")) {
                // macOS
                command = "open " + url;
            } else {
                // Linux
                command = "xdg-open " + url;
            }

            System.out.println("执行系统命令: " + command);
            Process process = Runtime.getRuntime().exec(command);

            // 等待一小段时间检查是否成功
            Thread.sleep(500);

            if (process.isAlive() || process.exitValue() == 0) {
                System.out.println("✅ 系统命令执行成功");
                return true;
            }
        } catch (Exception e) {
            System.out.println("❌ 系统命令失败: " + e.getMessage());
        }
        return false;
    }
    
    /**
     * 显示备用消息（当无法自动打开浏览器时）
     * @param url 要打开的URL
     */
    private static void showFallbackMessage(String url) {
        // 创建一个可选择的文本区域，方便用户复制
        javax.swing.JTextArea textArea = new javax.swing.JTextArea(3, 50);
        textArea.setText(url);
        textArea.setEditable(false);
        textArea.setBackground(null);
        textArea.setFont(new java.awt.Font("Monospaced", java.awt.Font.PLAIN, 12));

        JOptionPane.showMessageDialog(null,
            new Object[]{"系统无法自动打开浏览器，请手动复制以下链接到浏览器中打开：", textArea},
            "请手动打开B站视频链接",
            JOptionPane.INFORMATION_MESSAGE);
    }
    
    /**
     * 验证URL格式是否正确
     * @param url 要验证的URL
     * @return 是否为有效的URL
     */
    public static boolean isValidUrl(String url) {
        try {
            new URI(url);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
    
    /**
     * 格式化B站链接（确保是完整的URL）
     * @param url 原始URL
     * @return 格式化后的URL
     */
    public static String formatBilibiliUrl(String url) {
        if (url == null || url.trim().isEmpty()) {
            return url;
        }
        
        url = url.trim();
        
        // 如果不是以http开头，添加https://
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            if (url.startsWith("www.bilibili.com") || url.startsWith("bilibili.com")) {
                url = "https://" + url;
            } else if (url.startsWith("BV")) {
                // 如果是BV号，构造完整链接
                url = "https://www.bilibili.com/video/" + url;
            }
        }
        
        return url;
    }
}
