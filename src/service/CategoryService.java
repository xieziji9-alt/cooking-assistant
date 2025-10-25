package service;

import model.Ingredient;
import model.Cookware;
import java.util.*;
import java.util.stream.Collectors;

/**
 * 分类服务类 - 管理食材和厨具的分类
 */
public class CategoryService {
    private RecipeDataService dataService;
    
    public CategoryService(RecipeDataService dataService) {
        this.dataService = dataService;
    }
    
    /**
     * 获取所有食材分类
     * @return 食材分类列表
     */
    public List<String> getIngredientCategories() {
        return dataService.getAllIngredients().stream()
                .map(Ingredient::getCategory)
                .distinct()
                .sorted()
                .collect(Collectors.toList());
    }
    
    /**
     * 获取指定分类的食材
     * @param category 分类名称
     * @return 该分类下的食材列表
     */
    public List<Ingredient> getIngredientsByCategory(String category) {
        return dataService.getAllIngredients().stream()
                .filter(ingredient -> category.equals(ingredient.getCategory()))
                .collect(Collectors.toList());
    }
    
    /**
     * 获取所有厨具类型
     * @return 厨具类型列表
     */
    public List<String> getCookwareTypes() {
        return dataService.getAllCookware().stream()
                .map(Cookware::getType)
                .distinct()
                .sorted()
                .collect(Collectors.toList());
    }
    
    /**
     * 获取指定类型的厨具
     * @param type 厨具类型
     * @return 该类型下的厨具列表
     */
    public List<Cookware> getCookwareByType(String type) {
        return dataService.getAllCookware().stream()
                .filter(cookware -> type.equals(cookware.getType()))
                .collect(Collectors.toList());
    }
    
    /**
     * 获取所有食材（按分类分组）
     * @return 按分类分组的食材Map
     */
    public Map<String, List<Ingredient>> getIngredientsGroupedByCategory() {
        return dataService.getAllIngredients().stream()
                .collect(Collectors.groupingBy(Ingredient::getCategory));
    }
    
    /**
     * 获取所有厨具（按类型分组）
     * @return 按类型分组的厨具Map
     */
    public Map<String, List<Cookware>> getCookwareGroupedByType() {
        return dataService.getAllCookware().stream()
                .collect(Collectors.groupingBy(Cookware::getType));
    }
}
