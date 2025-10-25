package service;

import model.Recipe;
import model.Ingredient;
import model.Cookware;
import java.util.*;
import java.util.stream.Collectors;

/**
 * 菜谱推荐服务类 - 提供各种菜谱推荐功能
 */
public class RecipeRecommendationService {
    private RecipeDataService dataService;
    private Random random;
    
    public RecipeRecommendationService(RecipeDataService dataService) {
        this.dataService = dataService;
        this.random = new Random();
    }
    
    /**
     * 随机推荐指定数量的菜谱
     * @param count 推荐菜谱数量
     * @return 推荐的菜谱列表
     */
    public List<Recipe> getRandomRecipes(int count) {
        List<Recipe> allRecipes = dataService.getAllRecipes();
        // 只保留有有效B站链接的菜谱
        List<Recipe> filtered = allRecipes.stream()
                .filter(r -> r.getBilibiliUrl() != null && !r.getBilibiliUrl().trim().isEmpty())
                .collect(Collectors.toList());
        if (filtered.size() <= count) {
            return new ArrayList<>(filtered);
        }
        List<Recipe> shuffled = new ArrayList<>(filtered);
        Collections.shuffle(shuffled, random);
        return shuffled.subList(0, count);
    }
    
    /**
     * 根据选择的食材推荐菜谱
     * @param selectedIngredients 用户选择的食材列表
     * @return 匹配的菜谱列表，按匹配度排序
     */
    public List<Recipe> getRecipesByIngredients(List<String> selectedIngredients) {
        if (selectedIngredients == null || selectedIngredients.isEmpty()) {
            return new ArrayList<>();
        }
        
        List<Recipe> allRecipes = dataService.getAllRecipes().stream()
                .filter(r -> r.getBilibiliUrl() != null && !r.getBilibiliUrl().trim().isEmpty())
                .collect(Collectors.toList());
        List<RecipeMatch> matches = new ArrayList<>();
        
        for (Recipe recipe : allRecipes) {
            int matchCount = 0;
            for (String ingredient : recipe.getIngredients()) {
                if (selectedIngredients.contains(ingredient)) {
                    matchCount++;
                }
            }
            
            if (matchCount > 0) {
                double matchRatio = (double) matchCount / recipe.getIngredients().size();
                matches.add(new RecipeMatch(recipe, matchCount, matchRatio));
            }
        }
        
        // 按匹配度排序（匹配数量优先，然后是匹配比例）
        matches.sort((a, b) -> {
            int countCompare = Integer.compare(b.matchCount, a.matchCount);
            if (countCompare != 0) return countCompare;
            return Double.compare(b.matchRatio, a.matchRatio);
        });
        
        return matches.stream()
                .map(match -> match.recipe)
                .collect(Collectors.toList());
    }
    
    /**
     * 根据选择的厨具推荐菜谱
     * @param selectedCookware 用户选择的厨具列表
     * @return 匹配的菜谱列表
     */
    public List<Recipe> getRecipesByCookware(List<String> selectedCookware) {
        if (selectedCookware == null || selectedCookware.isEmpty()) {
            return new ArrayList<>();
        }
        
        List<Recipe> allRecipes = dataService.getAllRecipes().stream()
                .filter(r -> r.getBilibiliUrl() != null && !r.getBilibiliUrl().trim().isEmpty())
                .collect(Collectors.toList());
        return allRecipes.stream()
                .filter(recipe -> selectedCookware.containsAll(recipe.getCookware()))
                .collect(Collectors.toList());
    }
    
    /**
     * 综合推荐：根据食材和厨具推荐菜谱
     * @param selectedIngredients 选择的食材
     * @param selectedCookware 选择的厨具
     * @return 推荐的菜谱列表
     */
    public List<Recipe> getRecipesByIngredientsAndCookware(List<String> selectedIngredients, 
                                                          List<String> selectedCookware) {
        List<Recipe> ingredientMatches = getRecipesByIngredients(selectedIngredients);
        List<Recipe> cookwareMatches = getRecipesByCookware(selectedCookware);
        
        if (selectedIngredients.isEmpty()) {
            return cookwareMatches;
        }
        if (selectedCookware.isEmpty()) {
            return ingredientMatches;
        }
        
        // 取交集，返回既匹配食材又匹配厨具的菜谱
        return ingredientMatches.stream()
                .filter(cookwareMatches::contains)
                .collect(Collectors.toList());
    }
    
    /**
     * 根据菜系分类获取菜谱
     * @param category 菜系分类
     * @return 该分类下的菜谱列表
     */
    public List<Recipe> getRecipesByCategory(String category) {
        return dataService.getAllRecipes().stream()
                .filter(recipe -> category.equals(recipe.getCategory()))
                .collect(Collectors.toList());
    }
    
    /**
     * 根据难度获取菜谱
     * @param difficulty 难度等级
     * @return 该难度的菜谱列表
     */
    public List<Recipe> getRecipesByDifficulty(String difficulty) {
        return dataService.getAllRecipes().stream()
                .filter(recipe -> difficulty.equals(recipe.getDifficulty()))
                .collect(Collectors.toList());
    }
    
    /**
     * 内部类：用于存储菜谱匹配信息
     */
    private static class RecipeMatch {
        Recipe recipe;
        int matchCount;
        double matchRatio;
        
        RecipeMatch(Recipe recipe, int matchCount, double matchRatio) {
            this.recipe = recipe;
            this.matchCount = matchCount;
            this.matchRatio = matchRatio;
        }
    }
}
