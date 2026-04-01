# 🚀 星际探索 · 天体物理应用 - PWA App 部署指南

## 📱 项目介绍

已成功将**星际探索天体物理网站**转换为 **PWA（Progressive Web App）**，可在安卓手机上安装使用，具备离线访问能力。

---

## 🔧 核心文件说明

| 文件 | 功能 |
|------|------|
| `manifest.json` | PWA 应用配置清单（App 名称、图标、启动页面） |
| `sw.js` | Service Worker（离线缓存、后台同步） |
| `index.html` 等所有页面 | 已集成 PWA 注册代码 + 安装提示 |

---

## 📥 安装方式（三选一）

### 方案 1️⃣：直接安装（推荐 - 无需额外工具）

**在安卓手机上：**

1. **打开浏览器**（Chrome / Edge / Firefox）
2. **访问网站**：`http://your-server-ip:8765` 或已部署的域名
3. **等待安装提示**：浏览器会自动弹出"添加到主屏幕"提示
4. **点击"安装"按钮** 或 **菜单 → "安装应用"**
5. ✅ App 已安装到桌面！

**原理**：PWA 自动检测 `manifest.json`，浏览器会提示用户安装

---

### 方案 2️⃣：使用 Cordova 打包 APK（可上架应用商店）

**需要工具**：Node.js + Apache Cordova

```bash
# 1. 全局安装 Cordova
npm install -g cordova

# 2. 创建项目
cordova create astronomy-app com.astronomy.app "星际探索"

# 3. 添加 Android 平台
cd astronomy-app
cordova platform add android

# 4. 复制文件到 www 目录
cp -r ../site-files/* www/

# 5. 生成 APK
cordova build android --release

# 输出：astronomy-app/platforms/android/app/build/outputs/apk/release/app-release.apk
```

---

### 方案 3️⃣：使用 PWA Builder（在线工具）

**无需本地开发环境**，最简单快速：

1. 访问 [PWABuilder.com](https://www.pwabuilder.com)
2. 输入网站 URL（你的服务器地址）
3. 自动生成 Android APK
4. 下载 APK 文件
5. 在安卓手机上直接安装

---

## 🌐 部署服务器

### 本地测试（已配置）

```bash
cd c:\Users\21068\WorkBuddy\20260331205104
python -m http.server 8765
```

访问：`http://localhost:8765`

### 生产环境部署（推荐）

需要 **HTTPS**（PWA 必须）

**选项 A：使用 Netlify**
```bash
npm install -g netlify-cli
netlify deploy --dir=.
```

**选项 B：使用 Vercel**
```bash
npm install -g vercel
vercel
```

**选项 C：自有服务器 + Nginx**
```nginx
server {
    listen 443 ssl http2;
    server_name astronomy.example.com;
    
    root /var/www/astronomy-app;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # 必须有 Service Worker 正确的 Content-Type
    location ~* ^/sw\.js$ {
        add_header 'Content-Type' 'application/javascript; charset=utf-8';
        add_header 'Service-Worker-Allowed' '/';
    }
    
    # 缓存策略
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 7d;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 📦 离线功能

- ✅ **自动缓存** - 首次访问后，所有页面和资源自动离线缓存
- ✅ **离线访问** - 无网络时仍可浏览已缓存内容
- ✅ **后台更新** - Service Worker 定期检查更新
- ✅ **智能回源** - 网络恢复自动获取最新资源

---

## 🎯 App 特性

| 特性 | 状态 |
|------|------|
| 桌面图标 | ✅ 自定义 SVG 图标 |
| 启动画面 | ✅ 已配置 |
| 全屏模式 | ✅ `standalone` 显示 |
| 推送通知 | ⚙️ 可选扩展 |
| 文件访问 | ⚙️ 可选扩展 |
| 离线使用 | ✅ 完全支持 |

---

## 🔍 验证 PWA 安装条件

在浏览器开发者工具（F12）检查：

```javascript
// 在 Console 检查
navigator.serviceWorker.controller  // 应输出 ServiceWorkerContainer
```

或访问 `chrome://apps` 查看已安装的 PWA

---

## 📋 推荐流程

```
1. ✅ 当前：PWA 已配置完毕
   ↓
2. 部署到 HTTPS 服务器
   ↓
3. 在安卓手机浏览器打开
   ↓
4. 点击"安装应用"（系统会自动弹提示）
   ↓
5. 查看主屏幕，App 已安装 ✨
```

---

## 📞 故障排除

| 问题 | 解决方案 |
|------|--------|
| "安装应用"按钮不出现 | 确保使用 HTTPS + manifest.json 有效 |
| Service Worker 未注册 | 检查控制台错误，刷新页面试试 |
| 离线访问失败 | 确保首次在线访问过页面（缓存需初始化） |
| 图标显示不正确 | manifest.json 中的图标路径是否正确 |

---

## 📱 在安卓系统特性

- **无需 Google Play**：直接安装 APK 或通过浏览器安装
- **原生应用体验**：独立于浏览器，有桌面图标和启动屏
- **后台运行**：Service Worker 在后台同步数据
- **推送通知**：可集成 Web Push API（可选）

---

## 🎨 自定义

**修改 App 名称**：编辑 `manifest.json`
```json
{
  "name": "自定义应用名称",
  "short_name": "简称"
}
```

**修改 App 颜色**：编辑 `manifest.json`
```json
{
  "theme_color": "#1e3a8a",
  "background_color": "#0a0e27"
}
```

---

## 📞 技术支持信息

- PWA 官方文档：https://web.dev/progressive-web-apps/
- Manifest 规范：https://www.w3.org/TR/appmanifest/
- Service Worker：https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API

---

## ✨ 总结

你的**天体物理网站**已成功转换为完整的 PWA 应用，支持：

✅ 在安卓手机安装（无需应用商店）  
✅ 完全离线工作  
✅ 原生 App 体验  
✅ 自动更新  
✅ 推送通知（可选）  

**下一步**：部署到 HTTPS 服务器，在手机上安装测试！ 🚀
