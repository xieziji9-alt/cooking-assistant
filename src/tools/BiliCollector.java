package tools;

import service.BrowserService;
import service.LinkValidator;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URLEncoder;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * 简易的 B 站采集器：
 * - 生成 320+ 个常见家常菜名字
 * - 对每个菜名到搜索页检索，抽取第一个 BV 视频链接
 * - 做链接可达性校验
 * - 生成 data/recipes.csv（追加或覆盖）
 *
 * 注意：此工具仅用于教学/演示，采集频率请勿过高。
 */
public class BiliCollector {
    private static final String OUTPUT = "data/recipes.csv";
    private static final String UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64)";

    private static final String[] MAIN_INGS = {
            "西红柿","鸡蛋","土豆","青椒","胡萝卜","白菜","黄瓜","茄子","豆腐","洋葱","香菇","木耳","豆芽","韭菜","菠菜",
            "猪肉","牛肉","鸡肉","羊肉","排骨","虾","鱼","带鱼","鲈鱼","鸡翅","鸡腿","鸡胗","鸭肉",
            "米饭","面条","粉条","粉丝"
    };

    private static final String[] PATTERNS = {
            "清炒{食材}", "蒜蓉{食材}", "凉拌{食材}", "红烧{食材}",
            "可乐{食材}", "{食材}炖土豆", "{食材}炒鸡蛋", "香辣{食材}",
            "葱爆{食材}", "家常{食材}"
    };

    private static final String[] FIXED_DISHES = {
            "西红柿炒鸡蛋","宫保鸡丁","麻婆豆腐","鱼香肉丝","回锅肉","水煮肉片","口水鸡","红烧肉","青椒肉丝","糖醋里脊",
            "清蒸鲈鱼","红烧带鱼","水煮鱼","酸菜鱼","凉拌木耳","拍黄瓜","手撕包菜","蒜蓉西兰花","干煸四季豆","蚂蚁上树",
            "京酱肉丝","地三鲜","锅包肉","可乐鸡翅","香菇滑鸡","孜然羊肉","鱼香茄子","红烧排骨","糖醋排骨","蛋炒饭",
            "扬州炒饭","西红柿鸡蛋面","炸酱面","担担面","牛肉面","酸辣土豆丝","清炒菠菜","凉拌菠菜","菠菜炒鸡蛋","豆腐脑",
            "紫菜蛋花汤","番茄蛋花汤","冬瓜排骨汤","萝卜牛腩","蒜泥白肉","白切鸡","盐焗鸡","北京烤鸭","红烧狮子头","狮子头"
    };

    private static List<String> generateDishNames() {
        Set<String> set = new LinkedHashSet<>();
        // 固定经典菜
        set.addAll(Arrays.asList(FIXED_DISHES));
        // 模板菜
        for (String ing : MAIN_INGS) {
            for (String p : PATTERNS) {
                set.add(p.replace("{食材}", ing));
            }
        }
        // 至少 320
        return new ArrayList<>(set);
    }

    private static String searchFirstBV(String dish) throws Exception {
        String q = URLEncoder.encode(dish + " 做法", StandardCharsets.UTF_8.name());
        String url = "https://search.bilibili.com/all?keyword=" + q;
        String html = httpGet(url);
        if (html == null) return null;
        // 抓第一个 /video/BV********* 链接
        Pattern p = Pattern.compile("/video/(BV[0-9A-Za-z]+)");
        Matcher m = p.matcher(html);
        if (m.find()) {
            return "https://www.bilibili.com/video/" + m.group(1);
        }
        return null;
    }

    private static String httpGet(String urlStr) throws Exception {
        HttpURLConnection conn = (HttpURLConnection) new URL(urlStr).openConnection();
        conn.setInstanceFollowRedirects(true);
        conn.setRequestProperty("User-Agent", UA);
        conn.setConnectTimeout(6000);
        conn.setReadTimeout(8000);
        conn.setRequestMethod("GET");
        int code = conn.getResponseCode();
        if (code >= 200 && code < 400) {
            try (InputStream in = conn.getInputStream(); ByteArrayOutputStream bos = new ByteArrayOutputStream()) {
                byte[] buf = new byte[8192];
                int n;
                while ((n = in.read(buf)) > 0) bos.write(buf, 0, n);
                return bos.toString(StandardCharsets.UTF_8);
            }
        }
        return null;
    }

    private static String guessCategory(String name) {
        if (name.contains("汤")) return "汤菜";
        if (name.contains("凉拌")) return "凉菜";
        if (name.contains("宫保")||name.contains("麻婆")||name.contains("水煮")||name.contains("鱼香")||name.contains("回锅")) return "川菜";
        if (name.contains("烤")) return "烧烤";
        return "家常菜";
    }

    private static String guessDifficulty(String name) {
        if (name.contains("红烧")||name.contains("炖")||name.contains("烤")) return "中等";
        return "简单";
    }

    private static int guessTime(String name) {
        if (name.contains("炖")||name.contains("红烧")||name.contains("烤")) return 35;
        if (name.contains("汤")) return 20;
        return 12;
    }

    private static String genIngredients(String name) {
        // 从菜名里抽取主材，附加常用配料
        for (String ing : MAIN_INGS) {
            if (name.contains(ing)) {
                return ing + "|蒜|姜|葱|盐|生抽|食用油";
            }
        }
        return "蒜|姜|葱|盐|生抽|食用油";
    }

    private static String genCookware(String name) {
        String base = "炒锅|菜刀|砧板";
        if (name.contains("蒸")) return base + "|蒸锅";
        if (name.contains("烤")) return base + "|烤箱";
        if (name.contains("炖")) return base + "|砂锅";
        return base;
    }

    public static void main(String[] args) throws Exception {
        List<String> dishes = generateDishNames();
        System.out.println("候选菜名：" + dishes.size());

        // 写入CSV头（覆盖）
        try (PrintWriter pw = new PrintWriter(new OutputStreamWriter(new FileOutputStream(OUTPUT, false), StandardCharsets.UTF_8))) {
            pw.println("# name,description,ingredients,cookware,difficulty,cookingTime,bilibiliUrl,category");
        }

        int ok = 0, tried = 0;
        for (String dish : dishes) {
            tried++;
            String url = null;
            try {
                url = searchFirstBV(dish);
            } catch (Exception ignore) {}
            if (url == null) continue;
            String finalUrl = BrowserService.formatBilibiliUrl(url);
            if (!LinkValidator.checkReachable(finalUrl, 4000)) continue;

            String line = String.join(",",
                    dish,
                    "正宗" + dish + "做法",
                    genIngredients(dish),
                    genCookware(dish),
                    guessDifficulty(dish),
                    String.valueOf(guessTime(dish)),
                    finalUrl,
                    guessCategory(dish)
            );
            try (PrintWriter pw = new PrintWriter(new OutputStreamWriter(new FileOutputStream(OUTPUT, true), StandardCharsets.UTF_8))) {
                pw.println(line);
            }
            ok++;
            System.out.println("OK[" + ok + "] " + dish + " -> " + finalUrl);
            if (ok >= 320) break; // 达标即止
            // 控制速率
            Thread.sleep(500);
        }
        System.out.println("采集完成，可用条数：" + ok + ". 已写入：" + OUTPUT);
    }
}

