package service;

import model.Recipe;
import model.Ingredient;
import model.Cookware;
import java.util.*;
import java.io.*;
import java.nio.charset.StandardCharsets;

/**
 * 菜谱数据服务类 - 管理所有菜谱数据
 */
public class RecipeDataService {
    private List<Recipe> recipes;
    private List<Ingredient> ingredients;
    private List<Cookware> cookware;
    
    public RecipeDataService() {
        initializeData();
    }
    
    /**
     * 初始化数据 - 添加一些示例菜谱
     */
    private void initializeData() {
        recipes = new ArrayList<>();
        ingredients = new ArrayList<>();
        cookware = new ArrayList<>();
        
        // 初始化食材数据
        initializeIngredients();
        
        // 初始化厨具数据
        initializeCookware();
        
        // 初始化菜谱数据（优先从验证过的数据文件加载）
        if (!loadRecipesFromCsv("data/recipes_verified.csv")) {
            if (!loadRecipesFromCsv("data/recipes.csv")) {
                initializeRecipes();
            }
        }
    }
    
    private void initializeIngredients() {
        // 蔬菜类
        ingredients.add(new Ingredient("土豆", "蔬菜", "#90EE90"));
        ingredients.add(new Ingredient("胡萝卜", "蔬菜", "#90EE90"));
        ingredients.add(new Ingredient("白菜", "蔬菜", "#90EE90"));
        ingredients.add(new Ingredient("青椒", "蔬菜", "#90EE90"));
        ingredients.add(new Ingredient("洋葱", "蔬菜", "#90EE90"));
        ingredients.add(new Ingredient("西红柿", "蔬菜", "#90EE90"));
        ingredients.add(new Ingredient("黄瓜", "蔬菜", "#90EE90"));
        
        // 肉类
        ingredients.add(new Ingredient("猪肉", "肉类", "#FFB6C1"));
        ingredients.add(new Ingredient("牛肉", "肉类", "#FFB6C1"));
        ingredients.add(new Ingredient("鸡肉", "肉类", "#FFB6C1"));
        ingredients.add(new Ingredient("鱼肉", "肉类", "#FFB6C1"));
        ingredients.add(new Ingredient("虾", "肉类", "#FFB6C1"));
        
        // 主食
        ingredients.add(new Ingredient("米饭", "主食", "#F0E68C"));
        ingredients.add(new Ingredient("面条", "主食", "#F0E68C"));
        ingredients.add(new Ingredient("饺子皮", "主食", "#F0E68C"));
        ingredients.add(new Ingredient("馒头", "主食", "#F0E68C"));
    }
    
    private void initializeCookware() {
        cookware.add(new Cookware("炒锅", "锅具", "#DDA0DD"));
        cookware.add(new Cookware("蒸锅", "锅具", "#DDA0DD"));
        cookware.add(new Cookware("电饭煲", "电器", "#87CEEB"));
        cookware.add(new Cookware("微波炉", "电器", "#87CEEB"));
        cookware.add(new Cookware("烤箱", "电器", "#87CEEB"));
        cookware.add(new Cookware("菜刀", "工具", "#F4A460"));
        cookware.add(new Cookware("砧板", "工具", "#F4A460"));
        cookware.add(new Cookware("锅铲", "工具", "#F4A460"));
    }
    
    private void initializeRecipes() {
        // 仅作为后备的少量演示数据（真实数据请放在 data/recipes.csv）
        recipes.add(new Recipe(
            "西红柿炒蛋",
            "最经典的家常菜之一",
            Arrays.asList("西红柿", "鸡蛋"),
            Arrays.asList("炒锅", "菜刀", "砧板"),
            "简单", 10,
            "https://www.bilibili.com/video/BV1Py4y1S7EF", "家常菜"));

        recipes.add(new Recipe(
            "宫保鸡丁",
            "川菜经典，麻辣鲜香",
            Arrays.asList("鸡肉", "花生米", "青椒"),
            Arrays.asList("炒锅", "菜刀", "砧板"),
            "中等", 20,
            "https://www.bilibili.com/video/BV1Xt411Z7z8", "川菜"));
    }
    
    // 从CSV加载：name,description,ingredients|分隔,cookware|分隔,difficulty,cookingTime,bilibiliUrl,category
    private boolean loadRecipesFromCsv(String path) {
        File file = new File(path);
        if (!file.exists()) return false;
        int loaded = 0;
        try (BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(file), StandardCharsets.UTF_8))) {
            String line;
            while ((line = br.readLine()) != null) {
                if (line.trim().isEmpty()) continue;
                if (line.startsWith("#")) continue; // 允许注释
                String[] parts = line.split(",", -1);
                if (parts.length < 8) continue;
                String name = parts[0].trim();
                String desc = parts[1].trim();
                List<String> ings = parts[2].trim().isEmpty() ? Collections.emptyList() : Arrays.asList(parts[2].split("\\|"));
                List<String> cws = parts[3].trim().isEmpty() ? Collections.emptyList() : Arrays.asList(parts[3].split("\\|"));
                String diff = parts[4].trim();
                int time = 0; try { time = Integer.parseInt(parts[5].trim()); } catch (Exception ignore) {}
                String url = parts[6].trim();
                String cat = parts[7].trim();
                // 校验B站链接格式（移除网络可达性检查以提高加载速度）
                if (!LinkValidator.isBilibiliVideoLike(url)) {
                    System.out.println("跳过无效链接: " + name + " -> " + url);
                    continue;
                }
                String finalUrl = BrowserService.formatBilibiliUrl(url);
                recipes.add(new Recipe(name, desc, ings, cws, diff, time, finalUrl, cat));
                loaded++;
                if (loaded <= 5) { // 只显示前5个加载的菜谱信息
                    System.out.println("加载菜谱: " + name + " -> " + finalUrl);
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        System.out.println("Loaded recipes from CSV: " + loaded);
        return loaded > 0;
    }

    // Getter方法
    public List<Recipe> getAllRecipes() { return new ArrayList<>(recipes); }
    public List<Ingredient> getAllIngredients() { return new ArrayList<>(ingredients); }
    public List<Cookware> getAllCookware() { return new ArrayList<>(cookware); }
}
