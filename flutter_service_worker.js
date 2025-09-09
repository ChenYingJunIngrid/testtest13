'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "05cf9aba378ce99a89032b0dd69d52cb",
"assets/AssetManifest.bin.json": "b978c870590aef343afc257ac7f3467f",
"assets/AssetManifest.json": "23f4301ae31ce73445b82c4d39226c94",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "85678ad1ff93b2ec515531ca0b48a5cb",
"assets/images/abandon.jpg": "11fa589e2ba8344300b9afd8b2066653",
"assets/images/abandon.mp3": "9c33a04c04163144baf18dc96be1eec9",
"assets/images/ability.jpg": "f1fd8c1afb2123dda05765f4a23c99a5",
"assets/images/ability.mp3": "5c1a09f2201dcf67882f0a254b0e3932",
"assets/images/able.jpg": "a8a8c533ea1ffed1370726141b823339",
"assets/images/able.mp3": "280f77cf7e1c759ac70d2610f2aaa2e7",
"assets/images/aboard.jpg": "80246750094a96c7efe19f8a35e06d13",
"assets/images/aboard.mp3": "f54c9919329a6ebacded89fd2f42a8b6",
"assets/images/abounding.jpg": "01be9b6178fc5875a7f6547edbc8a6d2",
"assets/images/abounding.mp3": "6dd8c7d692b1a79a99b7c40af01c10a9",
"assets/images/about.jpg": "4f0176d59ff64069abb97e6a0a85f090",
"assets/images/about.mp3": "c777ed9fe653cae1b93a2df084fe14bd",
"assets/images/above.jpg": "5a3b0540dcab2f92f4cf01db478944b9",
"assets/images/above.mp3": "a41f37d67bc3d9a37e59af3edbd328d9",
"assets/images/abroad.jpg": "6323441e3e1fd5431ec290376ee30242",
"assets/images/abroad.mp3": "74a1e1f1ebd65fee9c5d49ba01f4d5a6",
"assets/images/absent.jpg": "0e3eba46f861c2bb92ed13f46d95e119",
"assets/images/absent.mp3": "90b37c11b343f7fb46af646b9b029407",
"assets/images/absorb.jpg": "15a5909ef0f600d486cc72864e4a6922",
"assets/images/absorb.mp3": "ea822877c0efa62884d71cdd816edf0d",
"assets/images/accent.jpg": "a7c3536cc7cf044b0cb068be1f41b74f",
"assets/images/accept.jpg": "0b8831ac3c32217f26136f9922db79fd",
"assets/images/acceptant.jpg": "286d9762fc35ea3985083a5cbd07ca92",
"assets/images/accident.jpg": "dddd85de8d2bd37787805004a2802cb3",
"assets/images/accord.jpg": "86e0372d02284f9d0479021552709707",
"assets/images/account.jpg": "f3f2bea8f233c2e713a76ef201fd2b74",
"assets/images/accountant.jpg": "34b49ac55e03e5b31a3d74909e8b3534",
"assets/images/accurate.jpg": "7f73318da478bd5652c40df197328bbd",
"assets/images/achieve.jpg": "dde8bcba7a00ae1693207d84db45dca3",
"assets/images/achievement.jpg": "f999c79d4f7e3aca3b403a48e2567da7",
"assets/images/across.jpg": "68601287fc1ebe489775af7a3c41916b",
"assets/images/act.jpg": "4499b6721399b719df0a6b4b9b76e2b8",
"assets/images/action.jpg": "c3fae240b458a0704a0115bb79cd703a",
"assets/images/active.jpg": "baa6c4518176527589c71a574d9e48aa",
"assets/images/activity.jpg": "5501656f999bc0ca8df35a665caafcc8",
"assets/images/actor.jpg": "3d807b2fd9128234b6761479b9138b33",
"assets/images/actress.jpg": "60c3dce9edd6750e24524645877744c4",
"assets/images/actual.jpg": "5786fa227cd6892ec226af793f723417",
"assets/images/actually.jpg": "87109838468d3cdccf1ecb4c35032b59",
"assets/images/adapt.jpg": "0c72e6c91d8bd4603562db592e8d8ad9",
"assets/images/add.jpg": "d40ebbe1923216e0714f0739f90a6607",
"assets/images/address.jpg": "bd97807f8334f223bd74379324edf9ac",
"assets/images/admire.jpg": "7fc6d221ab00062aac30c952daac01a2",
"assets/images/admit.jpg": "5038b4a4c3506c7fc6581bd3e2df9ebf",
"assets/images/adopt.jpg": "977436ef5e30f6cf73599ad2014b3c34",
"assets/images/advance.jpg": "eeaab464e9caf68c459e06c0dbdba2af",
"assets/images/advantage.jpg": "5a1d008c4cbdec470f089effca4dd9e1",
"assets/images/advertise.jpg": "0464900c7fbbae6029b6b60171ac6f84",
"assets/images/advertisement.jpg": "db0efa48148173f3b1636757d915b5bc",
"assets/images/advice.jpg": "df97f3d1bbb7665679f71d423ed957e7",
"assets/images/advise.jpg": "14928820d77d4368338e1c66f4bb7a3e",
"assets/images/affair.jpg": "ba748606fa0608a4d9c6df1519a507f9",
"assets/images/affect.jpg": "b94b284a7ec991e5c023c6490c92aa39",
"assets/images/after.jpg": "cb56ac9416897235a6196f5a70f20e11",
"assets/images/again.jpg": "bb05b1b67ac495fbdd21d3239df14272",
"assets/images/against.jpg": "e67601899f0fb29b30fc7fbd9e5b4fce",
"assets/images/age.jpg": "3032e51ef348911338d0d6ddd0240d14",
"assets/images/ago.jpg": "fcdfa3ecf5f183ef9b47a451421f3092",
"assets/images/Courgette-Regular.ttf": "cbd252f5c26cd61243888be1891f9921",
"assets/images/nextpage.png": "14ce69fb3193187d058f6c049691fac2",
"assets/images/person%2520holding%2520a%2520book.png": "f6e04680bbd0a107baf82121bb106b8d",
"assets/images/person%2520holding%2520an%2520orange%2520book.png": "fe60d378ea549be3202c400b9eee87f8",
"assets/images/personalresult.jpg": "e8d6fcb46b987888bc3539e5171c1d61",
"assets/images/personalresult.png": "da3afe10cde5924c8e155394458b5998",
"assets/NOTICES": "4dd1f0aae804254498efa642f22c421f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "ad14b19f70a226f466bc616821cbacfa",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "08b2a32556519b460b8459fce93a58f9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e33e51e367f1d11d6303ff9526d27d71",
"/": "e33e51e367f1d11d6303ff9526d27d71",
"main.dart.js": "555e5221cdaae1b6b9e37c45169e2d52",
"manifest.json": "c1fcbe0f1e9efb095c9f7e6cafc1a0e8",
"version.json": "eb07d680f1daafc34fb8f35e684b0c1b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
