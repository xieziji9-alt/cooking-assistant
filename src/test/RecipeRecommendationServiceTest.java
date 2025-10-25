package test;

import service.RecipeDataService;
import service.RecipeRecommendationService;
import model.Recipe;
import java.util.*;

/**
 * 菜谱推荐服务测试类
 */
public class RecipeRecommendationServiceTest {
    
    public static void main(String[] args) {
        RecipeRecommendationServiceTest test = new RecipeRecommendationServiceTest();
        test.runAllTests();
    }
    
    public void runAllTests() {
        System.out.println("=== 菜谱推荐服务测试开始 ===");
        
        RecipeDataService dataService = new RecipeDataService();
        RecipeRecommendationService recommendationService = new RecipeRecommendationService(dataService);
        
        testRandomRecommendation(recommendationService);
        testIngredientBasedRecommendation(recommendationService);
        testCookwareBasedRecommendation(recommendationService);
        testCombinedRecommendation(recommendationService);
        testCategoryBasedRecommendation(recommendationService);
        testDifficultyBasedRecommendation(recommendationService);
        
        System.out.println("=== 菜谱推荐服务测试完成 ===");
    }
    
    private void testRandomRecommendation(RecipeRecommendationService service) {
        System.out.println("\n--- 测试随机推荐功能 ---");
        
        List<Recipe> randomRecipes = service.getRandomRecipes(3);
        System.out.println("随机推荐3个菜谱：");
        for (Recipe recipe : randomRecipes) {
            System.out.println("- " + recipe.getName() + " (" + recipe.getCategory() + ")");
        }
        
        // 测试边界情况
        List<Recipe> allRecipes = service.getRandomRecipes(100);
        System.out.println("请求100个菜谱，实际返回：" + allRecipes.size() + "个");
        
        List<Recipe> zeroRecipes = service.getRandomRecipes(0);
        System.out.println("请求0个菜谱，实际返回：" + zeroRecipes.size() + "个");
    }
    
    private void testIngredientBasedRecommendation(RecipeRecommendationService service) {
        System.out.println("\n--- 测试基于食材的推荐功能 ---");
        
        // 测试单个食材
        List<String> ingredients1 = Arrays.asList("土豆");
        List<Recipe> recipes1 = service.getRecipesByIngredients(ingredients1);
        System.out.println("包含土豆的菜谱：");
        for (Recipe recipe : recipes1) {
            System.out.println("- " + recipe.getName());
        }
        
        // 测试多个食材
        List<String> ingredients2 = Arrays.asList("鸡肉", "青椒");
        List<Recipe> recipes2 = service.getRecipesByIngredients(ingredients2);
        System.out.println("包含鸡肉或青椒的菜谱：");
        for (Recipe recipe : recipes2) {
            System.out.println("- " + recipe.getName());
        }
        
        // 测试不存在的食材
        List<String> ingredients3 = Arrays.asList("不存在的食材");
        List<Recipe> recipes3 = service.getRecipesByIngredients(ingredients3);
        System.out.println("包含不存在食材的菜谱数量：" + recipes3.size());
    }
    
    private void testCookwareBasedRecommendation(RecipeRecommendationService service) {
        System.out.println("\n--- 测试基于厨具的推荐功能 ---");
        
        List<String> cookware1 = Arrays.asList("炒锅", "菜刀", "砧板");
        List<Recipe> recipes1 = service.getRecipesByCookware(cookware1);
        System.out.println("使用炒锅、菜刀、砧板的菜谱：");
        for (Recipe recipe : recipes1) {
            System.out.println("- " + recipe.getName());
        }
        
        List<String> cookware2 = Arrays.asList("蒸锅");
        List<Recipe> recipes2 = service.getRecipesByCookware(cookware2);
        System.out.println("只需要蒸锅的菜谱：");
        for (Recipe recipe : recipes2) {
            System.out.println("- " + recipe.getName());
        }
    }
    
    private void testCombinedRecommendation(RecipeRecommendationService service) {
        System.out.println("\n--- 测试综合推荐功能 ---");
        
        List<String> ingredients = Arrays.asList("鸡肉", "青椒");
        List<String> cookware = Arrays.asList("炒锅", "菜刀", "砧板");
        List<Recipe> recipes = service.getRecipesByIngredientsAndCookware(ingredients, cookware);
        System.out.println("同时满足食材和厨具要求的菜谱：");
        for (Recipe recipe : recipes) {
            System.out.println("- " + recipe.getName());
        }
    }
    
    private void testCategoryBasedRecommendation(RecipeRecommendationService service) {
        System.out.println("\n--- 测试基于分类的推荐功能 ---");
        
        List<Recipe> homeRecipes = service.getRecipesByCategory("家常菜");
        System.out.println("家常菜分类的菜谱：");
        for (Recipe recipe : homeRecipes) {
            System.out.println("- " + recipe.getName());
        }
    }
    
    private void testDifficultyBasedRecommendation(RecipeRecommendationService service) {
        System.out.println("\n--- 测试基于难度的推荐功能 ---");
        
        List<Recipe> easyRecipes = service.getRecipesByDifficulty("简单");
        System.out.println("简单难度的菜谱：");
        for (Recipe recipe : easyRecipes) {
            System.out.println("- " + recipe.getName() + " (烹饪时间：" + recipe.getCookingTime() + "分钟)");
        }
    }
}
