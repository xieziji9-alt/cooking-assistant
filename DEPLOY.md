# 🚀 Netlify部署指南

## 快速部署步骤

### 1. 在Netlify上添加新项目

1. 访问 [Netlify](https://app.netlify.com/)
2. 点击 **"Add new project"** 按钮
3. 选择 **"Import from Git"**

### 2. 连接GitHub仓库

1. 选择 **"GitHub"**
2. 如果是第一次使用，需要授权Netlify访问您的GitHub账号
3. 在仓库列表中找到并选择 **`xieziji9-alt/cooking-assistant`**

### 3. 配置构建设置

Netlify会自动检测到 `netlify.toml` 配置文件，您只需要确认以下设置：

- **Branch to deploy**: `master`
- **Build command**: （留空）
- **Publish directory**: `.` 或 `/`

### 4. 部署

1. 点击 **"Deploy site"** 按钮
2. 等待几秒钟，Netlify会自动部署您的网站
3. 部署完成后，您会获得一个类似 `https://random-name-123456.netlify.app` 的URL

### 5. 自定义域名（可选）

1. 在Netlify项目设置中，点击 **"Domain settings"**
2. 点击 **"Add custom domain"**
3. 输入您想要的域名（例如：`cooking-assistant.netlify.app`）
4. 或者使用您自己的域名

---

## ✨ 自动部署

配置完成后，每次您推送代码到GitHub的 `master` 分支，Netlify会自动：

1. 检测到新的提交
2. 自动重新部署网站
3. 几秒钟后，新版本就会上线

---

## 📊 当前项目信息

- **项目名称**: 做菜小助手
- **GitHub仓库**: https://github.com/xieziji9-alt/cooking-assistant
- **GitHub Pages**: https://xieziji9-alt.github.io/cooking-assistant
- **菜谱数量**: 20道精选菜谱
- **技术栈**: 纯HTML + CSS + JavaScript（无需构建）

---

## 🔧 Netlify配置说明

项目已包含 `netlify.toml` 配置文件，提供以下优化：

- ✅ 自动路由重定向
- ✅ HTTP安全头
- ✅ 静态资源缓存优化
- ✅ CSV文件正确的Content-Type

---

## 🆘 常见问题

### Q: 部署后网站显示404？
A: 检查 `netlify.toml` 文件是否正确提交到GitHub。

### Q: 如何查看部署日志？
A: 在Netlify项目页面，点击 "Deploys" 标签，然后点击具体的部署记录。

### Q: 如何回滚到之前的版本？
A: 在 "Deploys" 页面，找到之前的部署记录，点击 "Publish deploy"。

---

## 📝 下一步

部署完成后，您可以：

1. 分享Netlify URL给朋友测试
2. 配置自定义域名
3. 在Netlify设置中启用HTTPS（默认已启用）
4. 查看网站访问统计

