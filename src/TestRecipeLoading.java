import service.RecipeDataService;
import service.BrowserService;
import model.Recipe;
import java.util.List;

/**
 * 测试菜谱数据加载和链接功能
 */
public class TestRecipeLoading {
    public static void main(String[] args) {
        System.out.println("=== 测试菜谱数据加载 ===");
        
        // 初始化数据服务
        RecipeDataService dataService = new RecipeDataService();
        
        // 获取所有菜谱
        List<Recipe> recipes = dataService.getAllRecipes();
        
        System.out.println("总菜谱数量: " + recipes.size());
        
        if (recipes.isEmpty()) {
            System.out.println("❌ 没有加载到任何菜谱！");
            System.out.println("请检查 data/recipes.csv 文件是否存在且格式正确。");
            return;
        }
        
        System.out.println("✅ 成功加载菜谱数据");
        
        // 检查前10个菜谱的链接
        System.out.println("\n=== 检查前10个菜谱的B站链接 ===");
        int checkCount = Math.min(10, recipes.size());
        int validLinks = 0;
        
        for (int i = 0; i < checkCount; i++) {
            Recipe recipe = recipes.get(i);
            String url = recipe.getBilibiliUrl();
            
            System.out.printf("%d. %s\n", i + 1, recipe.getName());
            System.out.printf("   链接: %s\n", url);
            
            if (url != null && !url.trim().isEmpty() && url.contains("bilibili.com")) {
                validLinks++;
                System.out.println("   状态: ✅ 有效");
            } else {
                System.out.println("   状态: ❌ 无效或为空");
            }
            System.out.println();
        }
        
        System.out.printf("链接检查结果: %d/%d 有效\n", validLinks, checkCount);
        
        // 测试链接格式化功能
        System.out.println("\n=== 测试链接格式化功能 ===");
        String testUrl = "BV1Py4y1S7EF";
        String formattedUrl = BrowserService.formatBilibiliUrl(testUrl);
        System.out.println("原始链接: " + testUrl);
        System.out.println("格式化后: " + formattedUrl);
        
        // 提示用户测试
        System.out.println("\n=== 测试建议 ===");
        System.out.println("1. 运行主程序: java -cp out Main");
        System.out.println("2. 点击任意菜名按钮");
        System.out.println("3. 应该会弹出对话框并尝试打开浏览器");
        System.out.println("4. 如果无法自动打开，会显示链接供手动复制");
        
        if (validLinks == checkCount) {
            System.out.println("\n🎉 所有检查的菜谱都有有效的B站链接！");
        } else {
            System.out.println("\n⚠️ 部分菜谱缺少有效链接，请检查数据文件。");
        }
    }
}
