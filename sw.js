// Service Worker - 离线缓存管理
const CACHE_VERSION = 'astronomy-app-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/stars.html',
  '/blackhole.html',
  '/cosmology.html',
  '/dark-matter.html',
  '/gravitational-waves.html',
  '/planets.html',
  '/sun.html',
  '/earth.html',
  '/nebula.html',
  '/supernova.html',
  '/neutronstar.html',
  '/news-jwst.html',
  '/news-gravitational.html',
  '/news-exoplanet.html',
  '/common.css',
  '/common.js',
  '/manifest.json'
];

// 安装事件 - 缓存资源
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      console.log('[Service Worker] Caching app shell');
      return cache.addAll(URLS_TO_CACHE).catch((error) => {
        console.warn('[Service Worker] Cache failed for some items:', error);
        // 部分资源失败不阻止安装
      });
    })
  );
  self.skipWaiting(); // 立即激活
});

// 激活事件 - 清理旧缓存
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_VERSION)
          .map((cacheName) => {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          })
      );
    })
  );
  self.clients.claim(); // 立即接管
});

// 获取事件 - 缓存优先策略
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 只处理本域的请求
  if (url.origin !== location.origin) {
    return;
  }

  // 不缓存 POST 请求
  if (request.method !== 'GET') {
    event.respondWith(fetch(request));
    return;
  }

  event.respondWith(
    caches.match(request).then((response) => {
      if (response) {
        console.log('[Service Worker] Serving from cache:', request.url);
        return response;
      }

      return fetch(request)
        .then((response) => {
          // 检查响应是否有效
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }

          // 克隆响应以便缓存
          const responseToCache = response.clone();
          caches.open(CACHE_VERSION).then((cache) => {
            cache.put(request, responseToCache);
          });

          return response;
        })
        .catch((error) => {
          console.warn('[Service Worker] Fetch failed:', request.url, error);
          // 离线时返回缓存的首页
          return caches.match('/index.html');
        });
    })
  );
});

// 处理后台同步（可选）
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(
      // 可在此实现后台同步逻辑
      Promise.resolve()
    );
  }
});

console.log('[Service Worker] Loaded');
