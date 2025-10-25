import service.BrowserService;
import service.RecipeDataService;
import model.Recipe;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.net.URI;
import java.util.List;

/**
 * B站链接验证器 - 测试所有链接是否能正常打开
 */
public class LinkVerifier extends JFrame {
    private RecipeDataService dataService;
    private List<Recipe> recipes;
    private JTextArea logArea;
    private JProgressBar progressBar;
    
    public LinkVerifier() {
        dataService = new RecipeDataService();
        recipes = dataService.getAllRecipes();
        
        setTitle("B站链接验证器 - 共" + recipes.size() + "道菜谱");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(800, 600);
        setLocationRelativeTo(null);
        
        initComponents();
    }
    
    private void initComponents() {
        setLayout(new BorderLayout());
        
        // 顶部信息面板
        JPanel topPanel = new JPanel(new GridLayout(3, 1));
        topPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        
        JLabel titleLabel = new JLabel("B站链接验证器", JLabel.CENTER);
        titleLabel.setFont(new Font("微软雅黑", Font.BOLD, 18));
        topPanel.add(titleLabel);
        
        JLabel infoLabel = new JLabel("共加载 " + recipes.size() + " 道菜谱，点击下方按钮测试链接", JLabel.CENTER);
        infoLabel.setFont(new Font("微软雅黑", Font.PLAIN, 14));
        topPanel.add(infoLabel);
        
        // 系统信息
        String sysInfo = "系统: " + System.getProperty("os.name") + 
                        " | Java: " + System.getProperty("java.version") + 
                        " | Desktop支持: " + Desktop.isDesktopSupported();
        if (Desktop.isDesktopSupported()) {
            sysInfo += " | 浏览器支持: " + Desktop.getDesktop().isSupported(Desktop.Action.BROWSE);
        }
        JLabel sysLabel = new JLabel(sysInfo, JLabel.CENTER);
        sysLabel.setFont(new Font("微软雅黑", Font.PLAIN, 12));
        topPanel.add(sysLabel);
        
        add(topPanel, BorderLayout.NORTH);
        
        // 中间日志区域
        logArea = new JTextArea();
        logArea.setFont(new Font("Consolas", Font.PLAIN, 12));
        logArea.setEditable(false);
        JScrollPane scrollPane = new JScrollPane(logArea);
        scrollPane.setBorder(BorderFactory.createTitledBorder("验证日志"));
        add(scrollPane, BorderLayout.CENTER);
        
        // 底部按钮面板
        JPanel bottomPanel = new JPanel(new BorderLayout());
        bottomPanel.setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        
        // 进度条
        progressBar = new JProgressBar(0, recipes.size());
        progressBar.setStringPainted(true);
        progressBar.setString("准备就绪");
        bottomPanel.add(progressBar, BorderLayout.NORTH);
        
        // 按钮面板
        JPanel buttonPanel = new JPanel(new GridLayout(1, 4, 10, 0));
        
        JButton testAllButton = new JButton("🚀 测试所有链接");
        testAllButton.setFont(new Font("微软雅黑", Font.BOLD, 14));
        testAllButton.addActionListener(e -> testAllLinks());
        buttonPanel.add(testAllButton);
        
        JButton testFirstButton = new JButton("🔍 测试前5个");
        testFirstButton.addActionListener(e -> testFirstFive());
        buttonPanel.add(testFirstButton);
        
        JButton clearLogButton = new JButton("🗑️ 清空日志");
        clearLogButton.addActionListener(e -> logArea.setText(""));
        buttonPanel.add(clearLogButton);
        
        JButton openMainButton = new JButton("📱 打开主程序");
        openMainButton.addActionListener(e -> openMainApp());
        buttonPanel.add(openMainButton);
        
        bottomPanel.add(buttonPanel, BorderLayout.SOUTH);
        add(bottomPanel, BorderLayout.SOUTH);
        
        // 初始化日志
        logToArea("=== B站链接验证器启动 ===");
        logToArea("已加载 " + recipes.size() + " 道菜谱");
        logToArea("点击按钮开始测试...\n");
    }
    
    private void testAllLinks() {
        new Thread(() -> {
            SwingUtilities.invokeLater(() -> {
                logArea.setText("");
                logToArea("=== 开始测试所有链接 ===\n");
                progressBar.setValue(0);
                progressBar.setString("测试中...");
            });
            
            int success = 0;
            int failed = 0;
            
            for (int i = 0; i < recipes.size(); i++) {
                Recipe recipe = recipes.get(i);
                final int index = i + 1;
                
                SwingUtilities.invokeLater(() -> {
                    progressBar.setValue(index);
                    progressBar.setString("测试 " + index + "/" + recipes.size());
                });
                
                boolean result = testSingleLink(recipe, index);
                if (result) success++;
                else failed++;
                
                try {
                    Thread.sleep(500); // 避免过快请求
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                    break;
                }
            }
            
            final int finalSuccess = success;
            final int finalFailed = failed;
            SwingUtilities.invokeLater(() -> {
                progressBar.setString("完成");
                logToArea("\n=== 测试完成 ===");
                logToArea("成功: " + finalSuccess + " 个");
                logToArea("失败: " + finalFailed + " 个");
                logToArea("成功率: " + (finalSuccess * 100 / recipes.size()) + "%");
            });
        }).start();
    }
    
    private void testFirstFive() {
        logArea.setText("");
        logToArea("=== 测试前5个链接 ===\n");
        
        int testCount = Math.min(5, recipes.size());
        for (int i = 0; i < testCount; i++) {
            testSingleLink(recipes.get(i), i + 1);
        }
        logToArea("\n前5个链接测试完成");
    }
    
    private boolean testSingleLink(Recipe recipe, int index) {
        String url = recipe.getBilibiliUrl();
        String name = recipe.getName();
        
        SwingUtilities.invokeLater(() -> {
            logToArea(index + ". " + name);
            logToArea("   链接: " + url);
        });
        
        if (url == null || url.trim().isEmpty()) {
            SwingUtilities.invokeLater(() -> logToArea("   结果: ❌ 无链接\n"));
            return false;
        }
        
        try {
            // 尝试打开链接
            if (Desktop.isDesktopSupported() && Desktop.getDesktop().isSupported(Desktop.Action.BROWSE)) {
                Desktop.getDesktop().browse(new URI(url));
                SwingUtilities.invokeLater(() -> logToArea("   结果: ✅ 已尝试打开浏览器\n"));
                return true;
            } else {
                SwingUtilities.invokeLater(() -> logToArea("   结果: ⚠️ 系统不支持自动打开浏览器\n"));
                return false;
            }
        } catch (Exception e) {
            SwingUtilities.invokeLater(() -> logToArea("   结果: ❌ 打开失败: " + e.getMessage() + "\n"));
            return false;
        }
    }
    
    private void openMainApp() {
        try {
            // 启动主程序
            ProcessBuilder pb = new ProcessBuilder("java", "-cp", "out", "Main");
            pb.start();
            logToArea("✅ 主程序已启动");
        } catch (Exception e) {
            logToArea("❌ 启动主程序失败: " + e.getMessage());
        }
    }
    
    private void logToArea(String message) {
        SwingUtilities.invokeLater(() -> {
            logArea.append(message + "\n");
            logArea.setCaretPosition(logArea.getDocument().getLength());
        });
    }
    
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            try {
                UIManager.setLookAndFeel(UIManager.getSystemLookAndFeel());
            } catch (Exception e) {
                e.printStackTrace();
            }
            new LinkVerifier().setVisible(true);
        });
    }
}
