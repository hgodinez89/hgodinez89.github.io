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
    "url": "11-40a21f3115125295912a.js"
  },
  {
    "url": "11-40a21f3115125295912a.js.map",
    "revision": "f5e6c18cbdccb325035ed2d184016040"
  },
  {
    "url": "404.html",
    "revision": "ac670888f5657fc577a050ab370713e3"
  },
  {
    "url": "404/index.html",
    "revision": "bc5966a8bac95fc0bf776b0ca15e8c56"
  },
  {
    "url": "4b8909ecb8821892ee8b820c955d702bb7be4976-9f4a10b8f40403e705b7.js"
  },
  {
    "url": "4b8909ecb8821892ee8b820c955d702bb7be4976-9f4a10b8f40403e705b7.js.map",
    "revision": "d27bfc9307ccba61b0e693e53f12c109"
  },
  {
    "url": "7e8084bd1db5a7ca281eee90916867f39450e9ec-587b9188c676cdf9842a.js"
  },
  {
    "url": "7e8084bd1db5a7ca281eee90916867f39450e9ec-587b9188c676cdf9842a.js.map",
    "revision": "b935735458171cb547f48de885449f50"
  },
  {
    "url": "837e247a-20149b519f9584620d1a.js"
  },
  {
    "url": "837e247a-20149b519f9584620d1a.js.map",
    "revision": "090834463851c6a2d22fe6e1c6895a58"
  },
  {
    "url": "app-1da6ea97024c780736c3.js"
  },
  {
    "url": "app-1da6ea97024c780736c3.js.map",
    "revision": "d0a89340471027bc17973ec6e62952dd"
  },
  {
    "url": "chunk-map.json",
    "revision": "9b3b941fe4c9a2134f7beefc575c07df"
  },
  {
    "url": "CNAME",
    "revision": "08ad3a0c695714811439a2c3e362b606"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e5cb9e0c77a823b86dc2.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-e5cb9e0c77a823b86dc2.js.map",
    "revision": "ffad71d20086cc3decaa1bc515572407"
  },
  {
    "url": "component---src-pages-404-js-955ef29f6f56608e5716.js"
  },
  {
    "url": "component---src-pages-404-js-955ef29f6f56608e5716.js.map",
    "revision": "51ecb51c7a0c998ff2ea5d5eb69a92e9"
  },
  {
    "url": "component---src-pages-index-en-js-082fc008d94dd5628057.js"
  },
  {
    "url": "component---src-pages-index-en-js-082fc008d94dd5628057.js.map",
    "revision": "98af2b10c5dc82159d5dddee1e8940c3"
  },
  {
    "url": "component---src-pages-index-es-js-3ccddedf594bb1ceb4de.js"
  },
  {
    "url": "component---src-pages-index-es-js-3ccddedf594bb1ceb4de.js.map",
    "revision": "7e2c5b4d80f89a45474886c816db1fee"
  },
  {
    "url": "es/index.html",
    "revision": "2d0a2b74812e7c0258df6bdb220b4f1d"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "772422877f7d3b22c841218597d5580c"
  },
  {
    "url": "framework-93d3a746c3cf42acdafc.js"
  },
  {
    "url": "framework-93d3a746c3cf42acdafc.js.map",
    "revision": "2966a44ea3d59a1d215c75be8c39dcc6"
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
    "revision": "e9f7794de75d9f17505717b4eb65c93a"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "7b4e9e0e833fd7b76e76c3d51c173062"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "28ada6d366844fbd605d275a5158765f"
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
    "revision": "5a7d487993a9b356162a8771b53c4982"
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
    "url": "sitemap.xml",
    "revision": "9ed27cb088b7017f27a3a5127ba39c57"
  },
  {
    "url": "static/2ce074d716233f540e0847d247c7d5d6/3b304/avatar.jpg"
  },
  {
    "url": "static/2ce074d716233f540e0847d247c7d5d6/79d29/avatar.jpg"
  },
  {
    "url": "static/2ce074d716233f540e0847d247c7d5d6/f9030/avatar.jpg"
  },
  {
    "url": "static/591f4e5fe0fac368caa228d1ae2097ef/bc69a/profileNight.jpg"
  },
  {
    "url": "static/591f4e5fe0fac368caa228d1ae2097ef/bcc72/profileNight.jpg"
  },
  {
    "url": "static/591f4e5fe0fac368caa228d1ae2097ef/cd84f/profileNight.jpg"
  },
  {
    "url": "static/916debddee48c69224fb6d423f1ae132/06695/404.jpg"
  },
  {
    "url": "static/916debddee48c69224fb6d423f1ae132/1003a/404.jpg"
  },
  {
    "url": "static/916debddee48c69224fb6d423f1ae132/1790d/404.jpg"
  },
  {
    "url": "static/a2ddfab49cfafd2001eabe59a42df44e/bc69a/profileDay.jpg"
  },
  {
    "url": "static/a2ddfab49cfafd2001eabe59a42df44e/bcc72/profileDay.jpg"
  },
  {
    "url": "static/a2ddfab49cfafd2001eabe59a42df44e/cd84f/profileDay.jpg"
  },
  {
    "url": "static/d/2050218424.json"
  },
  {
    "url": "static/d/2202511578.json"
  },
  {
    "url": "static/d/2917302331.json"
  },
  {
    "url": "static/d/4125954334.json"
  },
  {
    "url": "styles-c2fe8482057191dca484.js"
  },
  {
    "url": "styles-c2fe8482057191dca484.js.map",
    "revision": "aca5b7feab278569bad07d62a5da3185"
  },
  {
    "url": "styles.c92439e2f57b3f37f0c8.css"
  },
  {
    "url": "webpack-runtime-446234b65958ac1fd6ba.js"
  },
  {
    "url": "webpack-runtime-446234b65958ac1fd6ba.js.map",
    "revision": "e9f4a20b7a352b6921f78ffff64829de"
  },
  {
    "url": "webpack.stats.json",
    "revision": "53c24c631f24380a55f7caf814fdd047"
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
  if (!resources || !(await caches.match(`/app-1da6ea97024c780736c3.js`))) {
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
