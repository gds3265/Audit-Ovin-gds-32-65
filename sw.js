const C='audit-ovin-v1.8';
const PREFIX='audit-ovin-';
const BASE='/Audit-Ovin-gds-32-65/';
const STATIC=[
  BASE,BASE+'index.html',BASE+'manifest.webmanifest?v=1.8',
  BASE+'icon-192.png?v=1.8',BASE+'icon-512.png?v=1.8',
  BASE+'icon-maskable-512.png?v=1.8',BASE+'apple-touch-icon.png?v=1.8'
];
self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(C).then(c=>c.addAll(STATIC)).catch(()=>{}));
});
self.addEventListener('activate',e=>e.waitUntil((async()=>{
  for(const k of await caches.keys()) if(k.startsWith(PREFIX)&&k!==C) await caches.delete(k);
  await self.clients.claim();
})()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.origin!==location.origin || !u.pathname.startsWith(BASE))return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(r=>{
      const x=r.clone();caches.open(C).then(c=>c.put(BASE+'index.html',x));return r;
    }).catch(()=>caches.match(BASE+'index.html')));
    return;
  }
  e.respondWith(fetch(e.request).then(r=>{
    const x=r.clone();caches.open(C).then(c=>c.put(e.request,x));return r;
  }).catch(()=>caches.match(e.request)));
});
