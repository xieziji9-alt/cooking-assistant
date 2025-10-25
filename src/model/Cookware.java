package model;

/**
 * 厨具类 - 表示厨具的基本信息
 */
public class Cookware {
    private String name;        // 厨具名称
    private String type;        // 厨具类型
    private String color;       // 标签颜色（用于UI显示）
    
    public Cookware() {}
    
    public Cookware(String name, String type, String color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
    
    // Getter和Setter方法
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    
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
        Cookware cookware = (Cookware) obj;
        return name != null ? name.equals(cookware.name) : cookware.name == null;
    }
    
    @Override
    public int hashCode() {
        return name != null ? name.hashCode() : 0;
    }
}
