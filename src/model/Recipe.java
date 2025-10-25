package model;

import java.util.List;

/**
 * 菜谱类 - 表示一个菜谱的基本信息
 */
public class Recipe {
    private String name;           // 菜名
    private String description;    // 菜谱描述
    private List<String> ingredients;  // 所需食材
    private List<String> cookware;     // 所需厨具
    private String difficulty;     // 难度等级
    private int cookingTime;       // 烹饪时间（分钟）
    private String bilibiliUrl;    // B站教学视频链接
    private String category;       // 菜系分类
    
    public Recipe() {}
    
    public Recipe(String name, String description, List<String> ingredients, 
                  List<String> cookware, String difficulty, int cookingTime, 
                  String bilibiliUrl, String category) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.cookware = cookware;
        this.difficulty = difficulty;
        this.cookingTime = cookingTime;
        this.bilibiliUrl = bilibiliUrl;
        this.category = category;
    }
    
    // Getter和Setter方法
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    
    public List<String> getIngredients() { return ingredients; }
    public void setIngredients(List<String> ingredients) { this.ingredients = ingredients; }
    
    public List<String> getCookware() { return cookware; }
    public void setCookware(List<String> cookware) { this.cookware = cookware; }
    
    public String getDifficulty() { return difficulty; }
    public void setDifficulty(String difficulty) { this.difficulty = difficulty; }
    
    public int getCookingTime() { return cookingTime; }
    public void setCookingTime(int cookingTime) { this.cookingTime = cookingTime; }
    
    public String getBilibiliUrl() { return bilibiliUrl; }
    public void setBilibiliUrl(String bilibiliUrl) { this.bilibiliUrl = bilibiliUrl; }
    
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    
    @Override
    public String toString() {
        return "Recipe{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", difficulty='" + difficulty + '\'' +
                ", cookingTime=" + cookingTime +
                ", category='" + category + '\'' +
                '}';
    }
}
