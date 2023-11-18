'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "da99e5c31ef7ccbdd0537f4a8deb9c3c",
"assets/AssetManifest.bin.json": "e68a9ff5ded9227953d89663c4379868",
"assets/AssetManifest.json": "cd21457b87aeaeeec504d52a103e3f2d",
"assets/assets/fonts/Agbalumo.ttf": "27cd170665cbb75101c35073b6e642ca",
"assets/assets/fonts/DancingScript.ttf": "d58bb592345e95e81157b07c2db7bc00",
"assets/assets/fonts/DMSans.ttf": "a40265e20189d6b500bcebf33efe110b",
"assets/assets/fonts/GlassAntiqua.ttf": "77637724d6e3e1bbfa7053cdeb8179fc",
"assets/assets/fonts/Kanit.ttf": "ba95370355da928d1c09da6a0a49a1d6",
"assets/assets/fonts/Pacifico.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/fonts/PlayFair.ttf": "9262890da570b6e8d1741d0e88138b9c",
"assets/assets/fonts/PTSans.ttf": "5b127e9e1cedad57860a5bb8b2cc9d61",
"assets/assets/images/1.jpeg": "a2d743cdf1c8d483b0b29dbd662c98bc",
"assets/assets/images/10.png": "67738d3c65841d875dc895932c3f5a85",
"assets/assets/images/11.png": "a51cd6b17a258d9a310f083fe8512a08",
"assets/assets/images/12.png": "bbc32a98900472f6ccda2341c5abd07b",
"assets/assets/images/13.png": "181a2520bdd74036492ecb35f462ee12",
"assets/assets/images/14.png": "9c1df9c96527fb60329704d161ad0e21",
"assets/assets/images/15.jpeg": "fb8fb293cd13c73caf49931c45f5fde4",
"assets/assets/images/16.jpeg": "dc7f4c28590d852f24036090113357e1",
"assets/assets/images/17.jpeg": "e28019072d438481ee9c2a90c8b38938",
"assets/assets/images/18.jpeg": "50e3200276bf01b9754b97f4e0d6d209",
"assets/assets/images/19.jpeg": "aa3f507c8a73f613f416597e8e9a99b9",
"assets/assets/images/2.jpeg": "4f07226060e3676bc750156934c631ab",
"assets/assets/images/20.jpeg": "8e746cae8a04ccd7696bd1e9eecf4a5d",
"assets/assets/images/21.jpeg": "589412501269751589485391f6eb4d8f",
"assets/assets/images/22.jpeg": "4c203eaf582edb774bbe7558d0b3a542",
"assets/assets/images/23.jpeg": "0e72ca8994f2feccbe021d2f9b98f7c5",
"assets/assets/images/3.jpeg": "64ee09912c1244646184d22f496e4dc7",
"assets/assets/images/4.jpeg": "fceca56b8b06e9c5e79b672ade916b3e",
"assets/assets/images/5.jpeg": "e425332c59ecb4b345cff47b9cb4d4bb",
"assets/assets/images/6.jpeg": "1800cec3ad3b303053385a7bcfad358d",
"assets/assets/images/7.jpeg": "acb53d65900ca1ae041cb2f2ed3cb0c4",
"assets/assets/images/8.jpeg": "48ed0ad2c691386cf9b6a980bc7e7091",
"assets/assets/images/9.png": "42048c1ef903fd816aaff20dabf33324",
"assets/assets/images/brands.png": "b6decb1b836a0227ca772040a1d04b0d",
"assets/assets/images/facebook.png": "c514091ebce6ddcc5c629eac2de760f4",
"assets/assets/images/google.png": "876611ac2782c3006740745b8c305005",
"assets/FontManifest.json": "e20b42fbcbc43063b7e80941ed3eca03",
"assets/fonts/MaterialIcons-Regular.otf": "4b2544ff51fe2c31cefbbdf2a6409524",
"assets/NOTICES": "d04822a72a3d5465360b305c187f199d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f9394edb1318e57922611fc75d7a454c",
"/": "f9394edb1318e57922611fc75d7a454c",
"main.dart.js": "aa62fc4d4fd8d264a9a082ef463b6ee6",
"manifest.json": "b75bb1c61dec45000379ade6ea5bcb5c",
"version.json": "b08830a808a4212bc2be3ab520eb3874"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
