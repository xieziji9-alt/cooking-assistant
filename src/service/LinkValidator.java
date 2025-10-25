package service;

import java.net.HttpURLConnection;
import java.net.URL;

/**
 * 链接校验工具：用于在导入数据时校验B站链接是否有效
 */
public class LinkValidator {
    /**
     * 粗校验：是否像是B站视频链接
     */
    public static boolean isBilibiliVideoLike(String url) {
        if (url == null) return false;
        String u = url.trim();
        return u.startsWith("http://") || u.startsWith("https://")
                ? u.contains("bilibili.com/video/")
                : u.startsWith("BV");
    }

    /**
     * 远程校验：发起一次 HEAD/GET 请求，返回 2xx/3xx 则认为可用
     */
    public static boolean checkReachable(String urlStr, int timeoutMs) {
        HttpURLConnection conn = null;
        try {
            String u = BrowserService.formatBilibiliUrl(urlStr);
            URL url = new URL(u);
            conn = (HttpURLConnection) url.openConnection();
            conn.setInstanceFollowRedirects(true);
            conn.setRequestProperty("User-Agent", "Mozilla/5.0");
            conn.setConnectTimeout(timeoutMs);
            conn.setReadTimeout(timeoutMs);
            conn.setRequestMethod("HEAD");
            int code = conn.getResponseCode();
            if (code >= 200 && code < 400) return true;
            // 一些站点对 HEAD 不友好，回退 GET
            conn.disconnect();
            conn = (HttpURLConnection) url.openConnection();
            conn.setInstanceFollowRedirects(true);
            conn.setRequestProperty("User-Agent", "Mozilla/5.0");
            conn.setConnectTimeout(timeoutMs);
            conn.setReadTimeout(timeoutMs);
            conn.setRequestMethod("GET");
            code = conn.getResponseCode();
            return code >= 200 && code < 400;
        } catch (Exception e) {
            return false;
        } finally {
            if (conn != null) conn.disconnect();
        }
    }
}

