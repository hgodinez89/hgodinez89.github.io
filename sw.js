/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "10-6bed93ef3740e86eda00.js"
  },
  {
    "url": "10-6bed93ef3740e86eda00.js.map",
    "revision": "dd71b3fbe80c09fc9ff83ea49b6ba612"
  },
  {
    "url": "404.html",
    "revision": "e86bb6f2f7429b537574a7fe45192fdc"
  },
  {
    "url": "404/index.html",
    "revision": "9e9de72f30666575915f78599dca5a1a"
  },
  {
    "url": "4b8909ecb8821892ee8b820c955d702bb7be4976-37207624156e82da1835.js"
  },
  {
    "url": "4b8909ecb8821892ee8b820c955d702bb7be4976-37207624156e82da1835.js.map",
    "revision": "c4e6997fcb90f4087e52f524d628de08"
  },
  {
    "url": "837e247a-3947e72b9538f3878b04.js"
  },
  {
    "url": "837e247a-3947e72b9538f3878b04.js.map",
    "revision": "d44b86152f11ec98360e1232e776c684"
  },
  {
    "url": "app-44023d8c752df2bf0c3b.js"
  },
  {
    "url": "app-44023d8c752df2bf0c3b.js.map",
    "revision": "fa934d17adf730d6a0802d48b0888bb0"
  },
  {
    "url": "chunk-map.json",
    "revision": "11764372a8e237bd271021885ab9aaf6"
  },
  {
    "url": "CNAME",
    "revision": "08ad3a0c695714811439a2c3e362b606"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js.map",
    "revision": "73fab470230271ac23de3b660b41bd46"
  },
  {
    "url": "component---src-pages-404-js-9eee1ac5bd9232aef6c9.js"
  },
  {
    "url": "component---src-pages-404-js-9eee1ac5bd9232aef6c9.js.map",
    "revision": "51243124c959cffec87b1c7e37b7602f"
  },
  {
    "url": "component---src-pages-index-en-js-c4b46a60b6ff5c6d2a36.js"
  },
  {
    "url": "component---src-pages-index-en-js-c4b46a60b6ff5c6d2a36.js.map",
    "revision": "689fb2088f33dfca2b53b7b7d8fd69f8"
  },
  {
    "url": "component---src-pages-index-es-js-21eed512c8ec8f62a56b.js"
  },
  {
    "url": "component---src-pages-index-es-js-21eed512c8ec8f62a56b.js.map",
    "revision": "2738075521c620759e259da5cd2beb9d"
  },
  {
    "url": "es/index.html",
    "revision": "656a92b024308d6063a0373207bedb49"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "772422877f7d3b22c841218597d5580c"
  },
  {
    "url": "framework-5fc6169171e885c3b522.js"
  },
  {
    "url": "framework-5fc6169171e885c3b522.js.map",
    "revision": "c66b0f66f19233f0c0c1dd849114f25e"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "ca0a868c68d272a9775efdeb00d32a7c"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "520cf5efc5b378cfc59b8bd5be657a7b"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "42af6b8d4dc0384bf15b074d81c7687b"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "fc18b172aa4b005d178f82b4b344fa44"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "bbc0e100923188094fa54017ba3cd530"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "e02c9642d875da03c4641fe3928000c5"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "f72fb02a81e0463387234aa74ada1d63"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "298eac110d772671d66aa29c686c4830"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "95c6eafd1f91a203ba59f32a2a0a3cfa"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "7b4e9e0e833fd7b76e76c3d51c173062"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9dadcc2db8948ffaed542e420b0f3abe"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "5f6538754d86930b49649d5199954c71"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "8811a692a6d17cfb18d57c4e24f18a7d"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "f549a0e343b314157668223a10c54b1b"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "11386f247438a10c4d80a3acaac134d1"
  },
  {
    "url": "page-data/es/page-data.json",
    "revision": "9580780e9e8c61cfb8dc40fb7b292b3b"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "2b0796008fd7f23b7894e412b2770ba8"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "README.md",
    "revision": "505af86ed400c997b0515d834b8f1374"
  },
  {
    "url": "robots.txt",
    "revision": "50d8a018e8ae96732c8a2ba663c61d4e"
  },
  {
    "url": "static/404-916debddee48c69224fb6d423f1ae132.jpg"
  },
  {
    "url": "static/avatar-2ce074d716233f540e0847d247c7d5d6.jpg"
  },
  {
    "url": "static/d/2202511578.json"
  },
  {
    "url": "static/profileDay-a2ddfab49cfafd2001eabe59a42df44e.jpg"
  },
  {
    "url": "static/profileNight-591f4e5fe0fac368caa228d1ae2097ef.jpg"
  },
  {
    "url": "static/unsplash_low-9ed76aa9bc85f65db8e8e27ae496a9fb.jpg"
  },
  {
    "url": "static/unsplash-e2a2282abffd6899a49c744eeffb0b3a.jpg"
  },
  {
    "url": "styles-cd63080e784be7b7e7cf.js"
  },
  {
    "url": "styles-cd63080e784be7b7e7cf.js.map",
    "revision": "49716f650c17b5f79dd576de2e5845e0"
  },
  {
    "url": "styles.56d66d43639d26cde699.css"
  },
  {
    "url": "webpack-runtime-f7929c2acca6832d7d5b.js"
  },
  {
    "url": "webpack-runtime-f7929c2acca6832d7d5b.js.map",
    "revision": "792c876711f903ef95a2ec872bf9e139"
  },
  {
    "url": "webpack.stats.json",
    "revision": "cc3494f28a40c83363e3d613366f9e6d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-44023d8c752df2bf0c3b.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
