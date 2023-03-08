/* eslint-disable no-restricted-globals */
const cacheName = "fantasy-football-cache";
const staticAssets = [
  "./",
  "./components/account/Account.jsx",
  "./components/account/Avatar.jsx",
  "./components/account/InputBox.jsx",
  "./components/account/UserInfo.jsx",
  "./components/account/Webcam.jsx",
  "./components/home/loggedIn/HomeLoggedIn.jsx",
  "./components/home/notLoggedIn/HomeNotLoggedIn.jsx",
  "./components/home/SignUp.jsx",
  "./components/modal/Modal.jsx",
  "./components/team-stats/TeamStats.jsx",
  "./components/your-team/YourTeam.jsx",
  "./components/user-league-table/UserLeagueTable.jsx",
  "..//public/manifest.json",
  "./App.js",
  "./index.js",
  "./App.css",
  "./IsOffline.jsx",
  "./index.css",
  "..//public/index.html",
  "localhost:3003",
];

self.addEventListener("install", async (e) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(staticAssets);
  return self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  self.clients.claim();
});

// self.addEventListener("fetch", async (e) => {
//   const req = e.request;
//   const url = new URL(req.url);

//   if (url.origin === location.origin) {
//     e.respondWith(cacheFirst(req));
//   } else {
//     e.respondWith(networkAndCache(req));
//   }
// });
async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}
