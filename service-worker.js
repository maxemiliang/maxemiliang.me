"use strict";var precacheConfig=[["./Webp.profile.8081511b.jpg","65cf923ba357af3ee2287970b9b9704a"],["./android-chrome-192x192.e912651b.png","be1152bf36c0e229aacf88134177a930"],["./android-chrome-512x512.3daf368e.png","969610e6281e5ed0a51a45dc20a3f50c"],["./apple-touch-icon.17287b09.png","08896c20b2aec7b0d9be81de95962bb1"],["./arrow-down-light.2f778e1c.js","b211ee1767cf8305f0122f7040e046e2"],["./arrow-down-light.2f778e1c.svg","ee10fdb9444872b8e543951227afc720"],["./arrow-down.96dab5ec.js","0a55f6e10bebaedbd36898e4424f696e"],["./arrow-down.96dab5ec.svg","1a81b00359635e8e0b79df2a2320228a"],["./favicon-16x16.0204f5d6.png","3a6fefa27c35e9b1278064ecae671f89"],["./favicon-32x32.003c6481.png","103af9bcb5348574cdafe5b352d7549f"],["./index.html","76eeb623457dc5841ba7139dc16b1c63"],["./polyfills.ab998811.js","f88fd79a67f16f531195d55d67eb34b4"],["./script.e40bda7c.js","df65cf6d818382a5d5e2569ca4d0c373"],["./style.4680996e.css","5ef7085e6ad461c71067ee48a49e22f8"]],cacheName="sw-precache-v3-maxemilian_portfolio-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),a.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],r=new URL(n,self.location),a=createCacheKey(r,hashParamName,t,/\.\w{8}\./);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("./index.html",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});