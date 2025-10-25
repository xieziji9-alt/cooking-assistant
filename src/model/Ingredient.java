package model;

/**
 * 食材类 - 表示食材的基本信息
 */
public class Ingredient {
    private String name;        // 食材名称
    private String category;    // 食材分类（蔬菜、肉类、主食等）
    private String color;       // 标签颜色（用于UI显示）
    
    public Ingredient() {}
    
    public Ingredient(String name, String category, String color) {
        this.name = name;
        this.category = category;
        this.color = color;
    }
    
    // Getter和Setter方法
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }
    
    public String getColor() { return color; }
    public void setColor(String color) { this.color = color; }
    
    @Override
    public String toString() {
        return name;
    }
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
        Ingredient that = (Ingredient) obj;
        return name != null ? name.equals(that.name) : that.name == null;
    }
    
    @Override
    public int hashCode() {
        return name != null ? name.hashCode() : 0;
    }
}
