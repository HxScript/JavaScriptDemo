webpackJsonp([6,23],{1270:function(e,t){},1289:function(e,t){},1423:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return t("div",{staticClass:"u-full-container"},[t("plugin-slide",{staticClass:"PagePresent-pageSlide","class":e.slideClass,attrs:{slide:e.slide,type:"present"}})," ",e.showPanel&&e.needPanel?t("div",{staticClass:"u-full-container PagePresent-shadow"}):e._e()," ",e.needPanel?t("div",{staticClass:"PagePresent-panel","class":e.panelClass},[t("page-header",{staticClass:"PagePresent-pageHeader",attrs:{myself:e.myself}})," ",t("dl",{staticClass:"PagePresent-console"},[t("h2",["演讲控制选项"])," ",t("dd",[t("h3",["演讲者模式"])," ",t("p",["启用演讲者模式后，你可以在系统打开的演讲者窗口中，看到当前页的演讲笔记，及下一页文稿的预览画面。"])," ",t("button",{staticClass:"Button--secondary Button--medium Button--outline PagePresent-button",on:{click:e.openSpeakerView}},["演讲者模式"])])," ",t("dd",[t("h3",["选项"])," ",t("label",{staticClass:"PagePresent-option",attrs:{"for":"fullscreen-opt"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.fullscreen,expression:"fullscreen"}],staticClass:"PagePresent-input",attrs:{id:"fullscreen-opt",type:"checkbox",name:"option"},domProps:{checked:Array.isArray(e.fullscreen)?e._i(e.fullscreen,null)>-1:e._q(e.fullscreen,!0)},on:{change:function(t){var n=e.fullscreen,r=t.target,i=r.checked?!0:!1;if(Array.isArray(n)){var s=null,o=e._i(n,s);i?o<0&&(e.fullscreen=n.concat(s)):o>-1&&(e.fullscreen=n.slice(0,o).concat(n.slice(o+1)))}else e.fullscreen=i}}})," ",t("span",{staticClass:"PagePresent-option-text"},["全屏播放"])])])])," ",t("footer",{staticClass:"PagePresent-footer"},[t("button",{staticClass:"Button--primary Button--big",on:{click:e.closePanel}},["开始演讲"])])]):e._e()," ",e.needPanel?t("div",{staticClass:"PagePresent-panel-expander"},[t("div",{staticClass:"PagePresent-panel-expander-button",on:{click:e.openPanel}},[t("i",{staticClass:"icon-right-small"})])]):e._e()])},staticRenderFns:[]},e.exports.render._withStripped=!0},1445:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return t("header",{staticClass:"Header"},[t("div",{staticClass:"u-container Header-inner"},[e._m(0)," ",t("div",{staticClass:"Header-userMenu",on:{click:function(t){e.navigateTo("/usercenter")}}},[e.myself?t("div",{staticClass:"UserMenu Popout"},[t("img",{staticClass:"UserMenu-avatar",attrs:{src:e.myself.user_avatar,alt:"portrait"}})," ",t("span",{staticClass:"UserMenu-name"},[e._s(e.myself.user_name)])," ",t("i",{staticClass:"UserMenu-menuIcon icon-menu"})," ",e._m(1)]):t("a",{staticClass:"Header-loginBtn",attrs:{href:"/login"}},["登录"])," "])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return t("a",{attrs:{href:"/"}},[t("img",{staticClass:"Header-logo",attrs:{src:n(433),alt:"logo"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return t("ul",{staticClass:"UserMenu-list Popout-content Popout-content--below "},[t("li",[t("a",{attrs:{href:"/usercenter"}},["个人中心",t("i",{staticClass:"icon-user"})])])," ",t("li",[t("a",{attrs:{href:"/editor"}},["新建演示",t("i",{staticClass:"icon-plus"})])])," ",t("li",[t("a",{attrs:{href:"/usersetting"}},["帐户设置",t("i",{staticClass:"icon-pencil"})])])," ",t("li",[t("a",{attrs:{href:"/home/oauth/signout"}},["退出登录",t("i",{staticClass:"icon-logout"})])])])}]},e.exports.render._withStripped=!0},1516:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(97),i=n(28),s=n.n(i),o=n(5),u=n(54),a=n(890),f=n.n(a),l=n(179),c=n(885),h=n.n(c),p=n(165),d=n(178),v=function(){function e(e,t){var n=[],r=!0,i=!1,s=undefined;try{for(var o=e[Symbol.iterator](),u;!(r=(u=o.next()).done);r=!0){n.push(u.value);if(t&&n.length===t)break}}catch(a){i=!0,s=a}finally{try{!r&&o["return"]&&o["return"]()}finally{if(i)throw s}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();o.inBrowser&&location.hash.match(/#pageIndex=(\d+)/)&&(location.hash="#/"+location.hash.match(/#pageIndex=(\d+)/)[1]),s.a.component("mount-vessel",f.a),s.a.component("page-header",h.a);var m=new s.a(f.a);o.inBrowser&&Promise.all([p.a.getLatestSlide(),new Promise(function(e){return d.user.detail().then(e,function(){return e()})}),p.a.getSlideInfo()]).then(function(e){var t=v(e,3),n=t[0],r=t[1],i=t[2];m.preFetch({slide:n,myself:r}).then(function(){m.$mount(u.isLogin?'[server-rendered="true"]':'[no-login="true"]'),u.isLogin||(document.title="演讲 | "+i.slide_title)})}),t["default"]=function(e){return m.preFetch({slide:JSON.parse(e.slide.slide_config),myself:e.myself}).then(function(){return m})}},885:function(e,t,n){n(1289);var r=n(11)("main",n(963),n(1445),null,null);r.options.__file="/Users/verymuch/devspace/qiwoo_baomitu_chuandao/fesrc/view/inc/page-header/main.vue",r.options.functional&&console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},890:function(e,t,n){var r=n(11)("main",n(968),n(1423),null,null);r.options.__file="/Users/verymuch/devspace/qiwoo_baomitu_chuandao/fesrc/view/slide/index_present/main.vue",r.options.functional&&console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},963:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{myself:{required:!0}},methods:{navigateTo:function(t){window.location.href=t}}}},968:function(e,t,n){"use strict";function h(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),n(1270);var r=n(977),i=h(r),s=n(5),o=n(119),u=h(o),a=n(95),f=h(a),l=n(66),c=h(l);t.default={data:function(){return{showPanel:!0,fullscreen:!1,needPanel:!0}},computed:{panelClass:function(){return this.showPanel?{}:{"PagePresent-panel--hidden":!0}},slideClass:function(){return this.showPanel?{"PagePresent-pageSlide--frozen":!0}:{}}},mounted:function(){this.bindEvents(),setTimeout(s.removeLoader,1e4),window.top!==window&&(this.needPanel=!1,this.showPanel=!1,this.checkIframe())},beforeDestroy:function(){this.bindEvents(!0)},methods:{preFetch:function(t){var n=t.slide,r=t.myself;return this.slide=n,this.myself=r,Promise.resolve()},bindEvents:function(t){var n=t?"removeEventListener":"addEventListener";f.default[n]("ready",this.revealReady),document[n]("webkitfullscreenchange",this.fullScreenUnchecked),document[n]("mozfullscreenchange",this.fullScreenUnchecked),document[n]("fullscreenchange",this.fullScreenUnchecked)},checkIframe:function(){var t=this;return new Promise(function(e){var n=t.slide.pages;location.protocol.match(/https/)?(0,s.hasIframe)(n,"http://")?c.default.confirm("您观看的幻灯片中包含http协议的iframe，https模式下无法观看，是否需要进行跳转？",function(t){t?location.protocol="http:":e()}):e():e()})},closePanel:function(){this.showPanel=!1},fullScreenUnchecked:function(t){!document.webkitFullscreenElement&&!document.mozFullScreenElement&&!document.fullscreenElement&&(this.fullscreen=!1)},openPanel:function(){this.showPanel=!0},openSpeakerView:function(t){t.preventDefault();var n=document.querySelector("#speakerSrc").getAttribute("src");i.default.open(n)},revealReady:function(){f.default.configure({history:!0}),(0,s.removeLoader)(),u.default.add("tti")}},watch:{fullscreen:function(t){t?(0,s.launchIntoFullscreen)(this.$el):(0,s.exitFullscreen)()}}}},977:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(5),i=n(95),s=n.n(i),o=function(){function e(e){function r(){var e=setInterval(function(){n.postMessage(JSON.stringify({namespace:"reveal-notes",type:"connect",url:window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,state:s.a.getState()}),"*")},500);window.addEventListener("message",function(t){var n=JSON.parse(t.data);n&&n.namespace==="reveal-notes"&&n.type==="connected"&&(clearInterval(e),o())})}function i(){var e=s.a.getCurrentSlide(),t=e.querySelector("aside.notes"),r={namespace:"reveal-notes",type:"state",notes:"",markdown:!1,whitespace:"normal",state:s.a.getState()};e.hasAttribute("data-notes")&&(r.notes=e.getAttribute("data-notes"),r.whitespace="pre-wrap"),t&&(r.notes=t.innerHTML,r.markdown=typeof t.getAttribute("data-markdown")=="string"),n.postMessage(JSON.stringify(r),"*")}function o(){s.a.addEventListener("slidechanged",i),s.a.addEventListener("fragmentshown",i),s.a.addEventListener("fragmenthidden",i),s.a.addEventListener("overviewhidden",i),s.a.addEventListener("overviewshown",i),s.a.addEventListener("paused",i),s.a.addEventListener("resumed",i),i()}if(!e){var t=document.querySelector('script[src$="notes.js"]').src;t=t.replace(/notes\.js(\?.*)?$/,""),e=t+"notes.html"}var n=window.open(e,"reveal.js - Notes","width=1100,height=700");console.log(e,n),r()}if(!r.inBrowser)return;return/receiver/i.test(window.location.search)||(window.location.search.match(/(\?|\&)notes/gi)!==null&&e(),document.addEventListener("keydown",function(t){if(document.querySelector(":focus")!==null||t.shiftKey||t.altKey||t.ctrlKey||t.metaKey)return;if(s.a.getConfig().keyboard===!1)return;t.keyCode===83&&(t.preventDefault(),e())},!1),window.Reveal&&s.a.registerKeyboardShortcut("S","Speaker notes view")),{open:e}}();t["default"]=o}},[1516]);