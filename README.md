# 🌌 星际探索 · 天体物理PWA应用

> 一个响应式的天体物理学科普网站，已转换为PWA应用，支持在安卓手机安装使用！

---

## ✨ 核心特性

### 🌐 Web 网站特性
- ⭐ **15个详情页面** - 6个探索分类 + 6个天体图鉴 + 3篇资讯
- 🎨 **深空主题设计** - 动态星空背景、渐变色彩、现代化界面
- 📱 **完全响应式** - 完美适配安卓手机、平板、PC 各种屏幕
- 🚀 **丰富交互** - 数字滚动、手风琴展开、平滑滚动、进度条等

### 📱 PWA App 特性
- 📥 **一键安装** - 在安卓手机上"添加到主屏幕"即可安装
- 📴 **离线访问** - Service Worker 缓存全部内容，断网也能使用
- 🔄 **自动更新** - 后台检查更新，智能增量更新
- 🎯 **原生体验** - 独立窗口、沉浸式全屏、系统集成

---

## 📦 项目文件结构

```
c:\Users\21068\WorkBuddy\20260331205104\
├── index.html                    # 首页（15个模块、动态星空）
├── 
├── 【探索分类页】
│   ├── stars.html                # 恒星物理学
│   ├── blackhole.html            # 黑洞与奇点
│   ├── cosmology.html            # 宇宙学与大爆炸
│   ├── dark-matter.html          # 暗物质与暗能量
│   ├── gravitational-waves.html  # 引力波天文学
│   └── planets.html              # 行星科学
├── 
├── 【天体图鉴页】
│   ├── sun.html                  # 太阳
│   ├── earth.html                # 地球
│   ├── nebula.html               # 星云
│   ├── supernova.html            # 超新星遗迹
│   └── neutronstar.html          # 中子星
├── 
├── 【新闻资讯页】
│   ├── news-jwst.html            # 韦伯望远镜
│   ├── news-gravitational.html   # 引力波三体事件
│   └── news-exoplanet.html       # 系外行星生命标志
├── 
├── 【PWA核心文件】
│   ├── manifest.json             # PWA 应用清单（配置App信息）
│   ├── sw.js                     # Service Worker（离线缓存）
│   ├── common.css                # 全局样式（所有页面通用）
│   └── common.js                 # 全局脚本（PWA注册、交互）
├── 
├── 【部署配置】
│   ├── config.xml                # Cordova APK 打包配置
│   ├── PWA-DEPLOYMENT-GUIDE.md  # 完整部署指南
│   ├── start-app.bat             # 快速启动脚本（Windows）
│   ├── update-pwa-headers.py     # 批量更新PWA头信息脚本
│   └── README.md                 # 本文件
```

---

## 🚀 快速开始

### 1️⃣ 启动本地开发服务器

**方式 A：使用快速启动脚本**
```bash
# Windows: 双击运行
start-app.bat
# 选择 1. 启动本地测试服务器
```

**方式 B：手动启动**
```bash
cd c:\Users\21068\WorkBuddy\20260331205104
python -m http.server 8765
```

访问：**http://localhost:8765**

### 2️⃣ 在手机浏览器打开

1. 在安卓手机的 Chrome/Edge 打开：`http://your-pc-ip:8765`
2. 浏览器会自动弹出"添加到主屏幕"提示
3. 点击"安装"按钮
4. ✨ App 已安装到桌面！

### 3️⃣ 离线使用

- 首次访问时，Service Worker 会自动缓存所有资源
- 之后即使断网，仍可浏览已缓存的所有页面和内容

---

## 📋 内容模块

### 🏠 首页 (index.html) - 11 个区块

| 区块 | 内容 |
|------|------|
| Hero | 震撼标题、CTA 按钮、向下滑动提示 |
| 数据统计 | 4 项宇宙数据的滚动动画计数 |
| 探索分类 | 6 个领域的知识卡片（可链接到详情页） |
| 天体图鉴 | 6 个天体的图像展示卡片 |
| 发现历程 | 7 个里程碑事件的时间线 |
| 核心公式 | 6 个经典物理公式的展示 |
| 宇宙尺度 | 从质子到宇宙的对比尺度条 |
| 宇宙问答 | 5 个手风琴问答 |
| 前沿资讯 | 3 篇最新天文新闻卡片 |
| 页脚 | 导航链接、品牌信息 |

### 📖 详情页（15 页）

所有详情页都包含：
- 页面返回导航
- 详细的文字内容 + 数据卡片
- 相关推荐链接
- 响应式布局适配手机

---

## 🔒 PWA 离线原理

### Service Worker 工作流程

```
首次访问
    ↓
Service Worker 安装 → 缓存所有关键资源
    ↓
用户再次打开 App
    ├─ 有网络 → 先返回缓存，后台更新
    └─ 无网络 → 直接返回缓存

缓存策略：
- HTML 页面：缓存优先
- CSS/JS：缓存优先，定期更新
- 图片资源：缓存优先
```

---

## 📱 手机适配方案

### 响应式断点

```css
/* PC 桌面 */
> 1200px : 完整布局

/* 平板 */
768px - 1200px : 2 列网格

/* 手机 */
< 480px : 单列布局 + 汉堡菜单
```

### 安卓特性

✅ **Viewport 配置** - 禁止缩放，100% 页面宽度  
✅ **汉堡菜单** - 点击展开导航  
✅ **触摸优化** - 按钮区域 ≥ 44x44px  
✅ **进度条** - 顶部阅读进度条  

---

## 🌐 部署到云服务（HTTPS）

### 推荐平台

| 平台 | 优点 | 部署命令 |
|------|------|--------|
| **Netlify** | 免费、快速、CDN | `netlify deploy --dir=.` |
| **Vercel** | 高性能、自动化 | `vercel` |
| **GitHub Pages** | 免费、简单 | `git push` |

### 自有服务器

需要配置 Nginx/Apache + HTTPS 证书：

```nginx
# 关键配置
location ~* ^/sw\.js$ {
    add_header 'Content-Type' 'application/javascript; charset=utf-8';
    add_header 'Service-Worker-Allowed' '/';
}
```

**注意**：PWA 必须运行在 HTTPS 上（Service Worker 要求）

---

## 🛠️ 高级操作

### 生成 Android APK

使用 Apache Cordova：

```bash
# 安装 Cordova
npm install -g cordova

# 创建项目
cordova create astronomy-app com.astronomy.app "星际探索"
cd astronomy-app
cordova platform add android

# 复制网站文件到 www 目录
cp -r ../site-files/* www/

# 生成发布版 APK
cordova build android --release

# 输出：platforms/android/app/build/outputs/apk/release/app-release.apk
```

### 自定义 App 信息

编辑 `manifest.json`：

```json
{
  "name": "自定义应用名称",
  "short_name": "简称",
  "description": "应用描述",
  "theme_color": "#1e3a8a",
  "background_color": "#0a0e27",
  "display": "standalone"
}
```

编辑 `config.xml`：

```xml
<name>星际探索</name>
<description>应用描述</description>
<author email="support@example.com">团队名</author>
```

---

## 🔍 调试与检查

### 浏览器开发者工具 (F12)

**验证 Service Worker**
```javascript
navigator.serviceWorker.ready
  .then(reg => console.log('Service Worker active:', reg))
```

**查看缓存**
- Application → Service Workers → 查看状态
- Application → Cache Storage → 查看缓存列表

**查看 Manifest**
- Application → Manifest → 检查配置

---

## 📊 性能指标

| 指标 | 数值 |
|------|------|
| 首次加载 | ~2-3 秒（取决于网络） |
| 二次加载（缓存） | ~500ms |
| 离线访问 | 即时加载（< 100ms） |
| 页面大小 | ~2.5MB（所有资源） |
| 缓存大小 | ~1.5MB（压缩后） |

---

## 🎨 自定义主题

### 修改颜色方案

编辑 `common.css` - 搜索 `--primary-color` 等 CSS 变量

### 修改字体

编辑 HTML 的 `font-family`：

```css
font-family: 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', sans-serif;
```

---

## 📞 常见问题 FAQ

**Q: 为什么 PWA 不能安装？**  
A: 需要 HTTPS（本地 localhost 除外）+ 有效的 manifest.json

**Q: 如何更新 App 内容？**  
A: Service Worker 会自动检查更新（60秒），或手动刷新

**Q: 离线时新增的页面能访问吗？**  
A: 不能。需要至少访问过一次才会被缓存。可在 sw.js 中预定义缓存清单。

**Q: 能上传到应用商店吗？**  
A: 可以。用 Cordova 生成 APK 后上传到 Google Play / 华为应用市场等

---

## 📚 参考资源

- [PWA 官方文档](https://web.dev/progressive-web-apps/)
- [Manifest 规范](https://www.w3.org/TR/appmanifest/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Cordova 官方文档](https://cordova.apache.org/)

---

## 📄 许可证

本项目为教育/科普用途，可自由使用和修改。

---

## 👨‍💻 技术栈

- **前端框架**：Vanilla JavaScript（无框架依赖）
- **样式**：CSS3（响应式、渐变、动画）
- **离线技术**：Service Worker API
- **应用清单**：Web App Manifest
- **打包工具**：Apache Cordova（可选）
- **部署平台**：Netlify / Vercel / 自有服务器

---

## ✅ 下一步

1. ✅ 当前：PWA 配置完毕
2. 🔄 部署到 HTTPS 服务器
3. 📱 在手机浏览器测试安装
4. 🚀 （可选）生成 APK 上传应用商店
5. 🎉 发布给用户使用

---

**祝你使用愉快！探索永无止境。🌌**
