(function(t){function e(e){for(var r,s,o=e[0],i=e[1],d=e[2],l=0,u=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&u.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(u.length)u.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},c=[];function s(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-eefc40aa":"c065d00c"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.src=s(t);var d=new Error;c=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}a[t]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/parallax-demo/",o.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=d;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("div",{staticClass:"main-placeholder",class:{hide:t.scrollTop>t.bannerHeight},style:{height:t.placeholderHeihgt+"px"}}),n("div",{staticClass:"main-container",class:t.scrollTop>t.bannerHeight?"show":"fixed"},[t._m(1),t._m(2)])])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"main-banner"},[n("h1",{staticStyle:{"margin-top":"0","padding-top":"20px"}},[t._v("Scroll down ⬇")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"section1"}},[n("div",{staticClass:"c1"},[n("img",{attrs:{src:"https://www1.djicdn.com/dps/eaa83b0faa6c24fbd917d7885bec683f.png","data-0":"transform[swing]: translate3d(0, -20%, 0);","data--100p-top-bottom":"transform[swing]: translate3d(0, 0%, 0);"}})]),n("div",{staticClass:"c2"},[n("img",{attrs:{src:"https://www1.djicdn.com/dps/493bbfbf0610fabef8fa84a47a6fda85.png","data-0":"transform[swing]: translate3d(0, 40%, 0);","data--100p-top-bottom":"transform[swing]: translate3d(0, -20%, 0);"}})]),n("div",{staticClass:"c3"},[n("img",{attrs:{src:"https://www1.djicdn.com/dps/424a2c2500a1b4bbdd6b68bc597ad0aa.svg"}})]),n("div",{staticClass:"c4"},[n("div",{staticClass:"feature"},[n("img",{attrs:{src:"https://www1.djicdn.com/dps/c7a5f451b4904a10b44b43083205ea3e.svg"}}),n("p",[t._v("双彩屏")])]),n("div",{staticClass:"feature"},[n("img",{attrs:{src:"https://www1.djicdn.com/dps/d6249c1c3777464e4fec78f27e9101d8.svg"}}),n("p",[t._v("超强增稳")])]),n("div",{staticClass:"feature"},[n("img",{attrs:{src:"https://www1.djicdn.com/dps/af664bcedcc3a9c078ea609089be61f2.svg"}}),n("p",[t._v("4K HDR 视频")])]),n("div",{staticClass:"feature"},[n("img",{attrs:{src:"https://www1.djicdn.com/dps/3af21901acdc0ab89893c03c0c04c437.svg"}}),n("p",[t._v("8 倍慢动作")])]),n("div",{staticClass:"feature"},[n("img",{attrs:{src:"https://www1.djicdn.com/dps/ad0f76b0fd0b411f35c2f201da9c3f52.svg"}}),n("p",[t._v("超清画质")])]),n("div",{staticClass:"feature"},[n("img",{attrs:{src:"https://www1.djicdn.com/dps/309e3e0cc17b50898822d4b124450912.svg"}}),n("p",[t._v("裸机防水")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"section2"}},[n("h1",{staticStyle:{"margin-top":"0","padding-top":"20px"}},[t._v("Bottom")])])}],s={name:"app",data:function(){return{bannerHeight:0,placeholderHeihgt:0,scrollTop:0}},mounted:function(){var t=this;n.e("chunk-eefc40aa").then((function(){var e=[n("5ec8")];(function(e){var n=e.init({smoothScrolling:!0});console.log("s",n),t.bannerHeight=document.querySelector(".main-banner").offsetHeight,t.placeholderHeihgt=document.querySelector(".main-container").offsetHeight,document.addEventListener("scroll",(function(){t.scrollTop=n.getScrollTop()}))}).apply(null,e)})).catch(n.oe)}},o=s,i=(n("7faf"),n("2877")),d=Object(i["a"])(o,a,c,!1,null,null,null),l=d.exports;n("acb4"),n("f5df1"),n("77ed");r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(l)}}).$mount("#app")},"7faf":function(t,e,n){"use strict";var r=n("b8ff"),a=n.n(r);a.a},acb4:function(t,e,n){},b8ff:function(t,e,n){}});