package ui;

import service.*;
import model.*;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.*;
import java.util.List;

/**
 * 做菜小程序主界面
 */
public class CookingApp extends JFrame {
    private RecipeDataService dataService;
    private RecipeRecommendationService recommendationService;
    private CategoryService categoryService;

    private JPanel mainPanel;
    private JTabbedPane tabbedPane;

    private JLabel statusLabel; // 底部状态栏：显示已加载菜谱数量

    // 随机推荐面板组件
    private JSpinner recipeCountSpinner;
    private JButton randomRecommendButton;
    private JPanel randomResultPanel;

    // 食材选择面板组件
    private JPanel ingredientPanel;
    private JPanel cookwarePanel;
    private JButton ingredientRecommendButton;
    private JPanel ingredientResultPanel;
    private Set<String> selectedIngredients;
    private Set<String> selectedCookware;

    public CookingApp() {
        initializeServices();
        initializeComponents();
        updateStatusBar();

        setupLayout();
        setupEventHandlers();

        setTitle("做菜小程序");
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setSize(800, 600);
        setLocationRelativeTo(null);
        setVisible(true);
    }

    private void initializeServices() {
        dataService = new RecipeDataService();
        recommendationService = new RecipeRecommendationService(dataService);
        categoryService = new CategoryService(dataService);
        selectedIngredients = new HashSet<>();
        selectedCookware = new HashSet<>();
    }

    private void initializeComponents() {
        mainPanel = new JPanel(new BorderLayout());
        tabbedPane = new JTabbedPane();

        // 创建随机推荐面板
        createRandomRecommendPanel();

        // 创建食材选择面板
        createIngredientSelectionPanel();

        tabbedPane.addTab("随机推荐", createRandomPanel());
        tabbedPane.addTab("食材选择", createIngredientPanel());
        // 底部状态栏
        statusLabel = new JLabel();
        statusLabel.setBorder(BorderFactory.createEmptyBorder(6, 12, 6, 12));
        mainPanel.add(statusLabel, BorderLayout.SOUTH);


        mainPanel.add(tabbedPane, BorderLayout.CENTER);
    }

    private JPanel createRandomPanel() {
        JPanel panel = new JPanel(new BorderLayout());
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        // 顶部控制面板
        JPanel controlPanel = new JPanel(new FlowLayout());
        controlPanel.add(new JLabel("想要几个菜："));

        recipeCountSpinner = new JSpinner(new SpinnerNumberModel(3, 1, 10, 1));
        controlPanel.add(recipeCountSpinner);

        randomRecommendButton = new JButton("随机推荐");
        controlPanel.add(randomRecommendButton);

        panel.add(controlPanel, BorderLayout.NORTH);

        // 结果显示面板
        randomResultPanel = new JPanel();
        randomResultPanel.setLayout(new BoxLayout(randomResultPanel, BoxLayout.Y_AXIS));
        JScrollPane scrollPane = new JScrollPane(randomResultPanel);
        scrollPane.setPreferredSize(new Dimension(750, 400));
        panel.add(scrollPane, BorderLayout.CENTER);

        return panel;
    }

    private JPanel createIngredientPanel() {
        JPanel panel = new JPanel(new BorderLayout());
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));

        // 顶部选择面板
        JPanel selectionPanel = new JPanel(new BorderLayout());

        // 食材选择
        JPanel ingredientSection = new JPanel(new BorderLayout());
        ingredientSection.setBorder(BorderFactory.createTitledBorder("选择食材"));
        ingredientPanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
        createIngredientButtons();
        ingredientSection.add(new JScrollPane(ingredientPanel), BorderLayout.CENTER);

        // 厨具选择
        JPanel cookwareSection = new JPanel(new BorderLayout());
        cookwareSection.setBorder(BorderFactory.createTitledBorder("选择厨具"));
        cookwarePanel = new JPanel(new FlowLayout(FlowLayout.LEFT));
        createCookwareButtons();
        cookwareSection.add(new JScrollPane(cookwarePanel), BorderLayout.CENTER);

        selectionPanel.add(ingredientSection, BorderLayout.NORTH);
        selectionPanel.add(cookwareSection, BorderLayout.CENTER);

        // 推荐按钮
        JPanel buttonPanel = new JPanel(new FlowLayout());
        ingredientRecommendButton = new JButton("根据选择推荐菜谱");
        buttonPanel.add(ingredientRecommendButton);
        selectionPanel.add(buttonPanel, BorderLayout.SOUTH);

        panel.add(selectionPanel, BorderLayout.NORTH);

        // 结果显示面板
        ingredientResultPanel = new JPanel();
        ingredientResultPanel.setLayout(new BoxLayout(ingredientResultPanel, BoxLayout.Y_AXIS));
        JScrollPane scrollPane = new JScrollPane(ingredientResultPanel);
        scrollPane.setPreferredSize(new Dimension(750, 300));
        panel.add(scrollPane, BorderLayout.CENTER);

        return panel;
    }

    private void createRandomRecommendPanel() {
        // 这个方法在createRandomPanel中已经实现
    }

    private void createIngredientSelectionPanel() {
        // 这个方法在createIngredientPanel中已经实现
    }

    private void createIngredientButtons() {
        Map<String, List<Ingredient>> groupedIngredients = categoryService.getIngredientsGroupedByCategory();

        for (Map.Entry<String, List<Ingredient>> entry : groupedIngredients.entrySet()) {
            String category = entry.getKey();
            List<Ingredient> ingredients = entry.getValue();

            // 添加分类标签
            JLabel categoryLabel = new JLabel(category + "：");
            categoryLabel.setFont(new Font("微软雅黑", Font.BOLD, 12));
            ingredientPanel.add(categoryLabel);

            // 添加该分类下的食材按钮
            for (Ingredient ingredient : ingredients) {
                JToggleButton button = new JToggleButton(ingredient.getName());
                button.setBackground(Color.decode(ingredient.getColor()));
                button.addActionListener(e -> {
                    if (button.isSelected()) {
                        selectedIngredients.add(ingredient.getName());
                    } else {
                        selectedIngredients.remove(ingredient.getName());
                    }
                });
                ingredientPanel.add(button);
            }
        }
    }

    private void createCookwareButtons() {
        Map<String, List<Cookware>> groupedCookware = categoryService.getCookwareGroupedByType();

        for (Map.Entry<String, List<Cookware>> entry : groupedCookware.entrySet()) {
            String type = entry.getKey();
            List<Cookware> cookwareList = entry.getValue();

            // 添加类型标签
            JLabel typeLabel = new JLabel(type + "：");
            typeLabel.setFont(new Font("微软雅黑", Font.BOLD, 12));
            cookwarePanel.add(typeLabel);

            // 添加该类型下的厨具按钮
            for (Cookware cookware : cookwareList) {
                JToggleButton button = new JToggleButton(cookware.getName());
                button.setBackground(Color.decode(cookware.getColor()));
                button.addActionListener(e -> {
                    if (button.isSelected()) {
                        selectedCookware.add(cookware.getName());
                    } else {
                        selectedCookware.remove(cookware.getName());
                    }
                });
                cookwarePanel.add(button);
            }
        }
    }

    private void setupLayout() {
        setContentPane(mainPanel);
    }

    private void setupEventHandlers() {
        // 随机推荐按钮事件
        randomRecommendButton.addActionListener(e -> {
            int count = (Integer) recipeCountSpinner.getValue();
            List<Recipe> recipes = recommendationService.getRandomRecipes(count);
            displayRecipes(recipes, randomResultPanel);
        });

        // 食材推荐按钮事件
        ingredientRecommendButton.addActionListener(e -> {
            List<String> ingredients = new ArrayList<>(selectedIngredients);
            List<String> cookware = new ArrayList<>(selectedCookware);
            List<Recipe> recipes = recommendationService.getRecipesByIngredientsAndCookware(ingredients, cookware);
            displayRecipes(recipes, ingredientResultPanel);
        });
    }

    private void displayRecipes(List<Recipe> recipes, JPanel resultPanel) {
        resultPanel.removeAll();

        if (recipes.isEmpty()) {
            JLabel noResultLabel = new JLabel("没有找到匹配的菜谱，请尝试其他选择");
            noResultLabel.setHorizontalAlignment(SwingConstants.CENTER);
            resultPanel.add(noResultLabel);
        } else {
            for (Recipe recipe : recipes) {
                JPanel recipePanel = createRecipePanel(recipe);
                resultPanel.add(recipePanel);
                resultPanel.add(Box.createVerticalStrut(10));
            }
        }

        resultPanel.revalidate();
        resultPanel.repaint();
    }

    private JPanel createRecipePanel(Recipe recipe) {
        JPanel panel = new JPanel(new BorderLayout());
        panel.setBorder(BorderFactory.createEtchedBorder());
        panel.setMaximumSize(new Dimension(Integer.MAX_VALUE, 100));

        // 左侧信息
        JPanel infoPanel = new JPanel(new GridLayout(3, 1));

        JButton nameButton = new JButton(recipe.getName());
        nameButton.setFont(new Font("微软雅黑", Font.BOLD, 16));
        nameButton.setHorizontalAlignment(SwingConstants.LEFT);
        nameButton.addActionListener(e -> {
            String url = recipe.getBilibiliUrl();
            System.out.println("点击菜谱: " + recipe.getName() + ", URL: " + url);
            if (url == null || url.trim().isEmpty()) {
                JOptionPane.showMessageDialog(this,
                    "该菜谱暂时没有教学视频链接",
                    "提示",
                    JOptionPane.INFORMATION_MESSAGE);
            } else {
                BrowserService.openBilibiliVideo(url);
            }
        });

        JLabel descLabel = new JLabel(recipe.getDescription());
        JLabel detailLabel = new JLabel(String.format("难度：%s | 时间：%d分钟 | 分类：%s",
                recipe.getDifficulty(), recipe.getCookingTime(), recipe.getCategory()));

        infoPanel.add(nameButton);
        infoPanel.add(descLabel);
        infoPanel.add(detailLabel);

        // 右侧食材和厨具信息
        JPanel requirementPanel = new JPanel(new GridLayout(2, 1));
        JLabel ingredientLabel = new JLabel("食材：" + String.join(", ", recipe.getIngredients()));
        JLabel cookwareLabel = new JLabel("厨具：" + String.join(", ", recipe.getCookware()));
        requirementPanel.add(ingredientLabel);
        requirementPanel.add(cookwareLabel);

        panel.add(infoPanel, BorderLayout.CENTER);
        panel.add(requirementPanel, BorderLayout.EAST);

        return panel;
    }

    private void updateStatusBar() {
        int total = dataService.getAllRecipes().size();
        statusLabel.setText("已加载菜谱：" + total + " 条（仅展示带B站教程的菜谱）");
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            try {
                UIManager.setLookAndFeel(UIManager.getSystemLookAndFeel());
            } catch (Exception e) {
                e.printStackTrace();
            }
            new CookingApp();
        });
    }
}
