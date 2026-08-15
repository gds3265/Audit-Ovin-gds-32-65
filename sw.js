const C='audit-ovin-v1.6';
const STATIC=['./','./index.html','./manifest.webmanifest?v=1.6','./icon-192.png?v=1.6','./icon-512.png?v=1.6','./icon-maskable-512.png?v=1.6','./apple-touch-icon.png?v=1.6'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(STATIC)).catch(()=>{}))});
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k!==C)await caches.delete(k);await self.clients.claim()})()));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const u=new URL(e.request.url);
 if(e.request.mode==='navigate'){
   e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(C).then(c=>c.put('./index.html',x));return r}).catch(()=>caches.match('./index.html')));return;
 }
 if(u.origin===location.origin){
   e.respondWith(fetch(e.request).then(r=>{const x=r.clone();caches.open(C).then(c=>c.put(e.request,x));return r}).catch(()=>caches.match(e.request)));return;
 }
});
