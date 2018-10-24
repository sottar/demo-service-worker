console.info('worker');

const ver = 3;

self.addEventListener('install', e => {
  // db/cache new schema ready
  console.info(` install${ver}`, e);
  e.waitUntil(skipWaiting());
});

self.addEventListener('activate', e => {
  // remove old db/cache clean
  console.info(` activate${ver}`, e);
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  // Persistence
  saveRequest(e.request); // 的な関数
  self.addEventListener('sync', e => {
    fetch(getRequest(e.request)); // Persistence したものを取り出す
  });

  e.respondWith(/*dummy*/);
});

self.addEventListener('sync', e => {
  console.log('sync', e);
});
