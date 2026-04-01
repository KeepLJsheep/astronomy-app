# 🚀 PWA 应用快速参考卡

## ⚡ 5秒快速开始

### 本地测试
```bash
# 双击 start-app.bat（Windows）
# 或手动执行：
python -m http.server 8765
# 浏览：http://localhost:8765
```

### 手机安装（无需工具）
1. 手机浏览器打开网站
2. 点击浏览器菜单 → "安装应用"
3. 确认安装 ✅

---

## 📦 核心文件速查

| 文件 | 用途 | 修改建议 |
|------|------|--------|
| `manifest.json` | App配置 | 改名称、颜色、图标 |
| `sw.js` | 离线缓存 | 调整缓存策略 |
| `common.js` | 全局脚本 | 加PWA功能 |
| `index.html` | 首页 | 15个模块 |

---

## 🌐 部署到服务器

### 必须条件
✅ HTTPS 加密  
✅ manifest.json 有效  
✅ Service Worker 可访问

### 一行部署命令

```bash
# Netlify
netlify deploy --dir=.

# Vercel  
vercel

# GitHub Pages
git push
```

---

## 📱 App 特性速查表

| 特性 | 状态 | 说明 |
|------|------|------|
| 离线使用 | ✅ | Service Worker 自动缓存 |
| 自动更新 | ✅ | 60秒检查一次 |
| 桌面图标 | ✅ | 自定义 SVG 图标 |
| 全屏模式 | ✅ | 沉浸式体验 |
| 推送通知 | ⚙️ | 可选扩展 |
| APK生成 | ⚙️ | 需要 Cordova |

---

## 🛠️ 常用命令

```bash
# 启动服务
python -m http.server 8765

# 验证 manifest
curl http://localhost:8765/manifest.json

# 检查 Service Worker
curl http://localhost:8765/sw.js

# 生成 APK（需要 Cordova）
cordova build android --release
```

---

## 🎨 自定义 5 分钟教程

### 改 App 名称
编辑 `manifest.json`：
```json
"name": "你的应用名"
```

### 改 App 颜色
编辑 `manifest.json`：
```json
"theme_color": "#你的颜色代码"
```

### 改首页内容
编辑 `index.html` Hero 部分

### 改页脚链接
编辑 `index.html` footer

---

## 📊 测试清单

- [ ] 本地打开网站（http://localhost:8765）
- [ ] 浏览所有 15 个页面
- [ ] 测试响应式（PC / 手机模式）
- [ ] 检查 Service Worker（F12 → Application）
- [ ] 验证离线访问（禁用网络）
- [ ] 在真实手机安装 App

---

## 🆘 快速故障排除

**Q: "安装应用"按钮不出现？**  
A: 需要 HTTPS（或 localhost）+ 有效 manifest.json

**Q: Service Worker 未激活？**  
A: F12 刷新 → Application → Service Workers → 检查状态

**Q: 离线访问不工作？**  
A: 需要至少访问过一次（缓存初始化）

**Q: 手机版显示混乱？**  
A: 检查 viewport meta 标签

---

## 📞 支持资源

| 资源 | 链接 |
|------|------|
| 详细指南 | `PWA-DEPLOYMENT-GUIDE.md` |
| 完整说明 | `README.md` |
| 快速启动 | `start-app.bat` |

---

## ✨ 已实现功能清单

✅ 15 个详情页面（6+6+3）  
✅ 响应式设计（PC+平板+手机）  
✅ 动态星空背景  
✅ 离线访问（Service Worker）  
✅ PWA 安装（manifest.json）  
✅ 自定义图标（SVG）  
✅ 汉堡菜单（移动端）  
✅ 进度条动画  
✅ FAQ 手风琴  
✅ 时间线展示  
✅ 公式展示  
✅ 数据滚动  
✅ 页脚导航  

---

## 🎯 下一步建议

1. **立即**: 双击 `start-app.bat` 启动本地测试
2. **本周**: 部署到 HTTPS 服务器（Netlify/Vercel）
3. **可选**: 用 Cordova 生成 APK 上传应用商店
4. **推广**: 分享给朋友通过浏览器安装

---

**祝你的应用大火！🚀**
