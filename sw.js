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
    "url": "4b8909ecb8821892ee8b820c955d702bb7be4976-574ddf6549a3ea025f7b.js"
  },
  {
    "url": "4b8909ecb8821892ee8b820c955d702bb7be4976-574ddf6549a3ea025f7b.js.map",
    "revision": "2d1c01bbe5537c9e9924021fa07b94f6"
  },
  {
    "url": "4b8909ecb8821892ee8b820c955d702bb7be4976-f3a9459a7df449df9ac6.js"
  },
  {
    "url": "4b8909ecb8821892ee8b820c955d702bb7be4976-f3a9459a7df449df9ac6.js.map",
    "revision": "6530cd8294e178d0046504c0065a65c6"
  },
  {
    "url": "4b8909ecb8821892ee8b820c955d702bb7be4976-fac9c852a772fbada220.js"
  },
  {
    "url": "4b8909ecb8821892ee8b820c955d702bb7be4976-fac9c852a772fbada220.js.map",
    "revision": "d45a8ffaa2eb14624bc8824d32718daf"
  },
  {
    "url": "7-97e497abb72cee47f8e6.js"
  },
  {
    "url": "7-97e497abb72cee47f8e6.js.map",
    "revision": "fba795703a2fa2bc1e198d0b8165a05f"
  },
  {
    "url": "7-aa266adfd028840fc368.js"
  },
  {
    "url": "7-aa266adfd028840fc368.js.map",
    "revision": "bc0c3d9e5bcee24e9213e4d822b7c2e9"
  },
  {
    "url": "7-cef2bcd1da88fde99067.js"
  },
  {
    "url": "7-cef2bcd1da88fde99067.js.map",
    "revision": "461e5d5244f2a4c6a4c0b64c41ebbcfe"
  },
  {
    "url": "837e247a-3947e72b9538f3878b04.js"
  },
  {
    "url": "837e247a-3947e72b9538f3878b04.js.map",
    "revision": "d44b86152f11ec98360e1232e776c684"
  },
  {
    "url": "9-57182000af9fd4714364.js"
  },
  {
    "url": "9-57182000af9fd4714364.js.map",
    "revision": "7341ebd540a8b08fa7efd4fc1e8f7e61"
  },
  {
    "url": "app-3b0b7a7a7437dd03096e.js"
  },
  {
    "url": "app-3b0b7a7a7437dd03096e.js.map",
    "revision": "adf68a974cf16933b1c873b33288b532"
  },
  {
    "url": "app-44023d8c752df2bf0c3b.js"
  },
  {
    "url": "app-44023d8c752df2bf0c3b.js.map",
    "revision": "fa934d17adf730d6a0802d48b0888bb0"
  },
  {
    "url": "app-6b457db4b169ac5f4dbf.js"
  },
  {
    "url": "app-6b457db4b169ac5f4dbf.js.map",
    "revision": "fa610d996bc919df9d2ebd03141a4741"
  },
  {
    "url": "app-8326ca7c184177736ecd.js"
  },
  {
    "url": "app-8326ca7c184177736ecd.js.map",
    "revision": "f3b6dfdc03a44fb3ce0f7d505b41febe"
  },
  {
    "url": "app-cd629c2c00c609a34469.js"
  },
  {
    "url": "app-cd629c2c00c609a34469.js.map",
    "revision": "8c4169ac19512271728a791a21c1a842"
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
    "url": "commons-05e813275293e286d504.js"
  },
  {
    "url": "commons-05e813275293e286d504.js.map",
    "revision": "af5075c9434d0bdb6443215d8a9feaa8"
  },
  {
    "url": "commons-060c8f96ab19bf32a699.js"
  },
  {
    "url": "commons-060c8f96ab19bf32a699.js.map",
    "revision": "4557763cee2a89ae7354a0bb6172bc77"
  },
  {
    "url": "commons-102e69d7885bebf6dd79.js"
  },
  {
    "url": "commons-102e69d7885bebf6dd79.js.map",
    "revision": "e1a63ff40a9d2eb68b1970516ff69488"
  },
  {
    "url": "commons-1fd75ac8288182c33523.js"
  },
  {
    "url": "commons-1fd75ac8288182c33523.js.map",
    "revision": "474b3557ac23430264d188a156a616a3"
  },
  {
    "url": "commons-2d053ec011bb2cb9c20e.js"
  },
  {
    "url": "commons-2d053ec011bb2cb9c20e.js.map",
    "revision": "9ca613aae83792d69b8b13fc7b326cb7"
  },
  {
    "url": "commons-39de06bd9d3001a608a7.js"
  },
  {
    "url": "commons-39de06bd9d3001a608a7.js.map",
    "revision": "5f06ba5846074e4e0a3e9f551a9f078b"
  },
  {
    "url": "commons-52dbe826e54fd7fb2c8a.js"
  },
  {
    "url": "commons-52dbe826e54fd7fb2c8a.js.map",
    "revision": "b041645ccde35ffc3d9f32fbb4ffc8d3"
  },
  {
    "url": "commons-5c3e4a44786a5d974041.js"
  },
  {
    "url": "commons-5c3e4a44786a5d974041.js.map",
    "revision": "546dbf1c2a738bc0964252c751f2e72a"
  },
  {
    "url": "commons-6448b37a9d4fc0e70feb.js"
  },
  {
    "url": "commons-6448b37a9d4fc0e70feb.js.map",
    "revision": "e8ed0c3b888bea251a8427e0a98556ad"
  },
  {
    "url": "commons-77f742522b8fb6847b47.js"
  },
  {
    "url": "commons-77f742522b8fb6847b47.js.map",
    "revision": "c27c828b8c05ff03c4fe05fffa8d154f"
  },
  {
    "url": "commons-7b03596852c4210fae73.js"
  },
  {
    "url": "commons-7b03596852c4210fae73.js.map",
    "revision": "397394bfe1f1bb3de07ddca9e13b3e84"
  },
  {
    "url": "commons-9c88d93287265945c45d.js"
  },
  {
    "url": "commons-9c88d93287265945c45d.js.map",
    "revision": "40a9816b148a7aecb40829b0ae188d7f"
  },
  {
    "url": "commons-a18c9b77cc9dca4940d3.js"
  },
  {
    "url": "commons-a18c9b77cc9dca4940d3.js.map",
    "revision": "48445765a0b08e7aaf464347c80aa40f"
  },
  {
    "url": "commons-a94d46ee1dba158b0274.js"
  },
  {
    "url": "commons-a94d46ee1dba158b0274.js.map",
    "revision": "5c962c50df2a7dac2f24ebb98ec4e05e"
  },
  {
    "url": "commons-bf1c85d0816fa1855589.js"
  },
  {
    "url": "commons-bf1c85d0816fa1855589.js.map",
    "revision": "6150d5f198bbb67999e07aacb526b7be"
  },
  {
    "url": "commons-c416748015af191efa29.js"
  },
  {
    "url": "commons-c416748015af191efa29.js.map",
    "revision": "d3b93669ce24cd7114127a07bc61394a"
  },
  {
    "url": "commons-c50efc59c0db261f97ef.js"
  },
  {
    "url": "commons-c50efc59c0db261f97ef.js.map",
    "revision": "c9cc41567181b1f66b04917b446190f4"
  },
  {
    "url": "commons-cca2a1780d8e26233c4d.js"
  },
  {
    "url": "commons-cca2a1780d8e26233c4d.js.map",
    "revision": "a598ea4ab6c2a61cfa8fd091b62ddf11"
  },
  {
    "url": "commons-d250ac23792e04588254.js"
  },
  {
    "url": "commons-d250ac23792e04588254.js.map",
    "revision": "3cb1bce868c9809ffa940ebcb206ed95"
  },
  {
    "url": "commons-dbdb55de8374156afa7a.js"
  },
  {
    "url": "commons-dbdb55de8374156afa7a.js.map",
    "revision": "2c8fd88818da90dda8e03ea01a819edd"
  },
  {
    "url": "commons-e664fe5664da6533c9e1.js"
  },
  {
    "url": "commons-e664fe5664da6533c9e1.js.map",
    "revision": "9b471f9c7b6619952a6bc2d9d0d575ad"
  },
  {
    "url": "commons-e74449248670f1dcf5ed.js"
  },
  {
    "url": "commons-e74449248670f1dcf5ed.js.map",
    "revision": "940c4ef4170117e3ce186dd3d4c42806"
  },
  {
    "url": "commons-e83a043584c1335de72c.js"
  },
  {
    "url": "commons-e83a043584c1335de72c.js.map",
    "revision": "858b35391cbbdf24f787851237854864"
  },
  {
    "url": "commons-eb2c11ebd9d33b1a481d.js"
  },
  {
    "url": "commons-eb2c11ebd9d33b1a481d.js.map",
    "revision": "1eeee438f1fb157dcb8d1d151e184c3c"
  },
  {
    "url": "commons-eccbbcffe691c93c46c3.js"
  },
  {
    "url": "commons-eccbbcffe691c93c46c3.js.map",
    "revision": "9c8fd5e1fb272fc807591d5462256b39"
  },
  {
    "url": "commons-f4f13068dc3ed10ccbbe.js"
  },
  {
    "url": "commons-f4f13068dc3ed10ccbbe.js.map",
    "revision": "5556b0505695d27cf5baea77b14dedfb"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js.map",
    "revision": "73fab470230271ac23de3b660b41bd46"
  },
  {
    "url": "component---src-pages-404-js-1ce944af8252e8cdc484.js"
  },
  {
    "url": "component---src-pages-404-js-1ce944af8252e8cdc484.js.map",
    "revision": "fef4f81d07509b4b30caa70a6f55d05e"
  },
  {
    "url": "component---src-pages-404-js-9eee1ac5bd9232aef6c9.js"
  },
  {
    "url": "component---src-pages-404-js-9eee1ac5bd9232aef6c9.js.map",
    "revision": "51243124c959cffec87b1c7e37b7602f"
  },
  {
    "url": "component---src-pages-404-js-ac4ac98c66f6c011b308.js"
  },
  {
    "url": "component---src-pages-404-js-ac4ac98c66f6c011b308.js.map",
    "revision": "61fb3fe06d9376a39f4df55d87f00362"
  },
  {
    "url": "component---src-pages-404-js-c97648139aae1a04dfdf.js"
  },
  {
    "url": "component---src-pages-404-js-c97648139aae1a04dfdf.js.map",
    "revision": "a864b9d38f6e650ae8a7e7433997450a"
  },
  {
    "url": "component---src-pages-index-en-js-4cc6fad2993e942ee5de.js"
  },
  {
    "url": "component---src-pages-index-en-js-4cc6fad2993e942ee5de.js.map",
    "revision": "a1bbb64a34713882857d504c22fc96b6"
  },
  {
    "url": "component---src-pages-index-en-js-62906b01cc10fa5782a9.js"
  },
  {
    "url": "component---src-pages-index-en-js-62906b01cc10fa5782a9.js.map",
    "revision": "afe2dd3ac438823e2f5e17d3a6f28619"
  },
  {
    "url": "component---src-pages-index-en-js-66a568cc7a76c9ad39f7.js"
  },
  {
    "url": "component---src-pages-index-en-js-66a568cc7a76c9ad39f7.js.map",
    "revision": "49931173568d09c117c7841826c517dc"
  },
  {
    "url": "component---src-pages-index-en-js-727b3cf2b8cc48af2246.js"
  },
  {
    "url": "component---src-pages-index-en-js-727b3cf2b8cc48af2246.js.map",
    "revision": "1949a81e692a50135de42afdc0c62a10"
  },
  {
    "url": "component---src-pages-index-en-js-788ca5319c5b4cdd5142.js"
  },
  {
    "url": "component---src-pages-index-en-js-788ca5319c5b4cdd5142.js.map",
    "revision": "026e87fa123d433c051e529407f251d0"
  },
  {
    "url": "component---src-pages-index-en-js-7c20c829a9f08f5686da.js"
  },
  {
    "url": "component---src-pages-index-en-js-7c20c829a9f08f5686da.js.map",
    "revision": "ce7f2a5139fa60ec7fd3d582a9d0b822"
  },
  {
    "url": "component---src-pages-index-en-js-89aa76b267acb621c398.js"
  },
  {
    "url": "component---src-pages-index-en-js-89aa76b267acb621c398.js.map",
    "revision": "c37f05fe87adad24086b87d054702e01"
  },
  {
    "url": "component---src-pages-index-en-js-ac9815d56d56f23b68f1.js"
  },
  {
    "url": "component---src-pages-index-en-js-ac9815d56d56f23b68f1.js.map",
    "revision": "e84b3b83a8f39c6448be364de72a2e49"
  },
  {
    "url": "component---src-pages-index-en-js-b0769e98d2eba1c068f6.js"
  },
  {
    "url": "component---src-pages-index-en-js-b0769e98d2eba1c068f6.js.map",
    "revision": "1c6299054a00b170619027a7bf8676ba"
  },
  {
    "url": "component---src-pages-index-en-js-c4b46a60b6ff5c6d2a36.js"
  },
  {
    "url": "component---src-pages-index-en-js-c4b46a60b6ff5c6d2a36.js.map",
    "revision": "689fb2088f33dfca2b53b7b7d8fd69f8"
  },
  {
    "url": "component---src-pages-index-en-js-c7384d703818663dde4b.js"
  },
  {
    "url": "component---src-pages-index-en-js-c7384d703818663dde4b.js.map",
    "revision": "91cdd8d8ecaf9950059554d7a7fc7d44"
  },
  {
    "url": "component---src-pages-index-en-js-c7785d03e31a29392189.js"
  },
  {
    "url": "component---src-pages-index-en-js-c7785d03e31a29392189.js.map",
    "revision": "36aa185978201228e1ad10f8897c6abd"
  },
  {
    "url": "component---src-pages-index-en-js-ca563dc976966f38c8d0.js"
  },
  {
    "url": "component---src-pages-index-en-js-ca563dc976966f38c8d0.js.map",
    "revision": "058b0804e3d3aec670eef0d66ecbadab"
  },
  {
    "url": "component---src-pages-index-en-js-d1f17fd04a7d24259f6c.js"
  },
  {
    "url": "component---src-pages-index-en-js-d1f17fd04a7d24259f6c.js.map",
    "revision": "1c20225235ab76a20385be2be0ac42b4"
  },
  {
    "url": "component---src-pages-index-en-js-ebe17f5651b5831aa8dd.js"
  },
  {
    "url": "component---src-pages-index-en-js-ebe17f5651b5831aa8dd.js.map",
    "revision": "a34e3cb1bb49c1fc4351506bd5b590b9"
  },
  {
    "url": "component---src-pages-index-en-js-eccf015e300f3dcf6a5c.js"
  },
  {
    "url": "component---src-pages-index-en-js-eccf015e300f3dcf6a5c.js.map",
    "revision": "6212163bc6948bace728b2a8fe75ea8d"
  },
  {
    "url": "component---src-pages-index-en-js-f336ec672179b7048255.js"
  },
  {
    "url": "component---src-pages-index-en-js-f336ec672179b7048255.js.map",
    "revision": "a5769fe1645dfedfdf6ce796fb8f22cf"
  },
  {
    "url": "component---src-pages-index-en-js-f71fe23bc7c331e62dc9.js"
  },
  {
    "url": "component---src-pages-index-en-js-f71fe23bc7c331e62dc9.js.map",
    "revision": "cbc1d587505387d70768d993d5072e6a"
  },
  {
    "url": "component---src-pages-index-en-js-fbe499036f898276bd00.js"
  },
  {
    "url": "component---src-pages-index-en-js-fbe499036f898276bd00.js.map",
    "revision": "681f9836ea5ab2cee92d7ecb336db15d"
  },
  {
    "url": "component---src-pages-index-es-js-21eed512c8ec8f62a56b.js"
  },
  {
    "url": "component---src-pages-index-es-js-21eed512c8ec8f62a56b.js.map",
    "revision": "2738075521c620759e259da5cd2beb9d"
  },
  {
    "url": "component---src-pages-index-es-js-3fb8328cadf173e7a63a.js"
  },
  {
    "url": "component---src-pages-index-es-js-3fb8328cadf173e7a63a.js.map",
    "revision": "dc809e2c4e4a4a6c42fa3bb723c827ac"
  },
  {
    "url": "component---src-pages-index-es-js-9d37cde369eb020ba505.js"
  },
  {
    "url": "component---src-pages-index-es-js-9d37cde369eb020ba505.js.map",
    "revision": "ef3060c418ac08c419cbbdb03e433a30"
  },
  {
    "url": "component---src-pages-index-es-js-bec2ae81fa9f80576263.js"
  },
  {
    "url": "component---src-pages-index-es-js-bec2ae81fa9f80576263.js.map",
    "revision": "e715ef411f96b523e9961e59b8582295"
  },
  {
    "url": "component---src-pages-index-es-js-eda9f42258ecee9d400b.js"
  },
  {
    "url": "component---src-pages-index-es-js-eda9f42258ecee9d400b.js.map",
    "revision": "795c10a6762edafd00d11c75962c9a37"
  },
  {
    "url": "css.worker.js"
  },
  {
    "url": "css.worker.js.map",
    "revision": "6f3c6ae3478ece67d8996f642f975899"
  },
  {
    "url": "detectIE.js"
  },
  {
    "url": "editor.worker.js"
  },
  {
    "url": "editor.worker.js.map",
    "revision": "1dc7746680060821f98593031fe7fb8c"
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
    "url": "favicon.ico",
    "revision": "3a318e3ceb32f2e06b497c0795ae14cb"
  },
  {
    "url": "framework-5fc6169171e885c3b522.js"
  },
  {
    "url": "framework-5fc6169171e885c3b522.js.map",
    "revision": "c66b0f66f19233f0c0c1dd849114f25e"
  },
  {
    "url": "framework-868c53fff4771b0bde98.js"
  },
  {
    "url": "framework-868c53fff4771b0bde98.js.map",
    "revision": "55c98cd6f6383ca6d95d27edaee551d1"
  },
  {
    "url": "html.worker.js"
  },
  {
    "url": "html.worker.js.map",
    "revision": "1c4e35e1cdba927dbfcff7d63e799083"
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
    "url": "json.worker.js"
  },
  {
    "url": "json.worker.js.map",
    "revision": "0478438163f994994b0f5b87131f1a47"
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
    "url": "sitemap.xml",
    "revision": "9ed27cb088b7017f27a3a5127ba39c57"
  },
  {
    "url": "static/404-916debddee48c69224fb6d423f1ae132.jpg"
  },
  {
    "url": "static/404-fd99797e08a82eed1e3b9c860f84e874.png"
  },
  {
    "url": "static/avatar-217d568202e105bcc08a5877490cac47.png"
  },
  {
    "url": "static/avatar-2ce074d716233f540e0847d247c7d5d6.jpg"
  },
  {
    "url": "static/avatar-6a83e351493a197dd0b9c69267c96cc4.jpg"
  },
  {
    "url": "static/d/2202511578.json"
  },
  {
    "url": "static/d/2976046623.json"
  },
  {
    "url": "static/profileDay-0ffcd9afa483156433a9c886f1b2aed9.jpg"
  },
  {
    "url": "static/profileDay-a2ddfab49cfafd2001eabe59a42df44e.jpg"
  },
  {
    "url": "static/profileDay-d053ff77f541a08477c1f12c7c4109f6.jpg"
  },
  {
    "url": "static/profileNight-591f4e5fe0fac368caa228d1ae2097ef.jpg"
  },
  {
    "url": "static/profileNight-d6741b81b03b92eb7c99e00404395a35.jpg"
  },
  {
    "url": "static/unsplash_low-9ed76aa9bc85f65db8e8e27ae496a9fb.jpg"
  },
  {
    "url": "static/unsplash-890b4f45e432bab60ef866613276c2af.jpg"
  },
  {
    "url": "static/unsplash-ae7ae1f4d581deda3fc7e67f5c7c4bc7.jpg"
  },
  {
    "url": "static/unsplash-e2a2282abffd6899a49c744eeffb0b3a.jpg"
  },
  {
    "url": "styles-4a74b4c599eac821de45.js"
  },
  {
    "url": "styles-4a74b4c599eac821de45.js.map",
    "revision": "498a3624a17fa10df189ecf503e6ccad"
  },
  {
    "url": "styles-cd63080e784be7b7e7cf.js"
  },
  {
    "url": "styles-cd63080e784be7b7e7cf.js.map",
    "revision": "49716f650c17b5f79dd576de2e5845e0"
  },
  {
    "url": "styles-d34d6d50c68384cf0a65.js"
  },
  {
    "url": "styles-d34d6d50c68384cf0a65.js.map",
    "revision": "8236b01a896fb556d1c5d0d4488443d5"
  },
  {
    "url": "styles.56d66d43639d26cde699.css"
  },
  {
    "url": "ts.worker.js"
  },
  {
    "url": "ts.worker.js.map",
    "revision": "36cb915b7f6bde73de64ade5bf630b2b"
  },
  {
    "url": "webpack-runtime-022ee39d2d0ce41d65a9.js"
  },
  {
    "url": "webpack-runtime-022ee39d2d0ce41d65a9.js.map",
    "revision": "1ca81168a4568ee98850d3e0a9e82ed1"
  },
  {
    "url": "webpack-runtime-046db7a28807a3b4d56c.js"
  },
  {
    "url": "webpack-runtime-046db7a28807a3b4d56c.js.map",
    "revision": "d24423569c9bb677dd8900ea46562162"
  },
  {
    "url": "webpack-runtime-089134843814f1185103.js"
  },
  {
    "url": "webpack-runtime-089134843814f1185103.js.map",
    "revision": "4dadcaf911dce25f5adac40917cb6aed"
  },
  {
    "url": "webpack-runtime-093a0396815d53c0e894.js"
  },
  {
    "url": "webpack-runtime-093a0396815d53c0e894.js.map",
    "revision": "f11c10c324e165ec854480e7ec087ed6"
  },
  {
    "url": "webpack-runtime-26894f5d6af3277e8e05.js"
  },
  {
    "url": "webpack-runtime-26894f5d6af3277e8e05.js.map",
    "revision": "92f234985461f4cc7e5d087e52356bb0"
  },
  {
    "url": "webpack-runtime-3069bc005b72e359d6f2.js"
  },
  {
    "url": "webpack-runtime-3069bc005b72e359d6f2.js.map",
    "revision": "ec4329db7f58e851cde3b15bb86e4469"
  },
  {
    "url": "webpack-runtime-3db6a7a1433decc4002d.js"
  },
  {
    "url": "webpack-runtime-3db6a7a1433decc4002d.js.map",
    "revision": "20f0849dfa6a9d5657b68eed8b6cac8d"
  },
  {
    "url": "webpack-runtime-41825c3c976645e36b87.js"
  },
  {
    "url": "webpack-runtime-41825c3c976645e36b87.js.map",
    "revision": "6550d74611eb395325e0b556382518f0"
  },
  {
    "url": "webpack-runtime-5288e09a24b19701cfd5.js"
  },
  {
    "url": "webpack-runtime-5288e09a24b19701cfd5.js.map",
    "revision": "f1dc149c3a471cb9de27449e5627ff93"
  },
  {
    "url": "webpack-runtime-6057b8bd2b0deef088cc.js"
  },
  {
    "url": "webpack-runtime-6057b8bd2b0deef088cc.js.map",
    "revision": "d40f91fcafcfa0d7d1ad2c4454a2c4d6"
  },
  {
    "url": "webpack-runtime-6dec3662ba4e32e0bf38.js"
  },
  {
    "url": "webpack-runtime-6dec3662ba4e32e0bf38.js.map",
    "revision": "bb7f6192db60061720fbcb4ea36479a7"
  },
  {
    "url": "webpack-runtime-6ec9784d0a4ab9297808.js"
  },
  {
    "url": "webpack-runtime-6ec9784d0a4ab9297808.js.map",
    "revision": "68e6127ac0b4ad5ad8bc3446a8db6546"
  },
  {
    "url": "webpack-runtime-8c20fac7548563257f8a.js"
  },
  {
    "url": "webpack-runtime-8c20fac7548563257f8a.js.map",
    "revision": "763282c08205b101a77c98afcb70216a"
  },
  {
    "url": "webpack-runtime-8e095a45076384577a76.js"
  },
  {
    "url": "webpack-runtime-8e095a45076384577a76.js.map",
    "revision": "74d9755d79ce8c516356f45140a6d7a3"
  },
  {
    "url": "webpack-runtime-a51cfcbc3b13a9a4290e.js"
  },
  {
    "url": "webpack-runtime-a51cfcbc3b13a9a4290e.js.map",
    "revision": "2eb1d745ff35cba9f35fff7784b796e4"
  },
  {
    "url": "webpack-runtime-aa67f8f2be02bea4b1fb.js"
  },
  {
    "url": "webpack-runtime-aa67f8f2be02bea4b1fb.js.map",
    "revision": "f7f9e4112c24ea53db6aeb4fa87647dd"
  },
  {
    "url": "webpack-runtime-ab36c38492386535c849.js"
  },
  {
    "url": "webpack-runtime-ab36c38492386535c849.js.map",
    "revision": "490f1b4bf763b90e947e6dedbd04c819"
  },
  {
    "url": "webpack-runtime-becbb2ddca3687e40c91.js"
  },
  {
    "url": "webpack-runtime-becbb2ddca3687e40c91.js.map",
    "revision": "daf81f9b3faeff8e89da11d129ff4e9a"
  },
  {
    "url": "webpack-runtime-c4810ce768ec9786303e.js"
  },
  {
    "url": "webpack-runtime-c4810ce768ec9786303e.js.map",
    "revision": "0d2824548406fef1eb4fec655be5504a"
  },
  {
    "url": "webpack-runtime-dcfd42d8e0c29df19aa1.js"
  },
  {
    "url": "webpack-runtime-dcfd42d8e0c29df19aa1.js.map",
    "revision": "b1860ca833e52c03717f0c12227b510f"
  },
  {
    "url": "webpack-runtime-ef54b272223a27c720c9.js"
  },
  {
    "url": "webpack-runtime-ef54b272223a27c720c9.js.map",
    "revision": "a48ee72d282fa71e5275a83fcb9a4524"
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
