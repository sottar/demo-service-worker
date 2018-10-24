console.info('worker');

const ver = 2;

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
  let path = new URL(e.request.url).pathname;
  console.log(path);
  if (path === '/test') {
    e.respondWith(new Response('test'));
  }
  if (path === '/test2') {
    e.respondWith(new Response('test2'));
  }
  return;
});
