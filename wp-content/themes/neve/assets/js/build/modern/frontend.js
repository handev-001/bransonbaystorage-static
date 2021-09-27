!function(){"use strict";const e=(e,t,n)=>{(e instanceof NodeList?e:[e]).forEach(e=>e.addEventListener(t,t=>n(t,e)))},t=(e,t)=>{r(e,t,"toggle")},n=(e,t)=>{r(e,t,"add")},o=(e,t)=>{r(e,t,"remove")},r=(e,t,n)=>{const o=t.split(" ");(e instanceof NodeList?e:[e]).forEach(e=>e.classList[n].apply(e.classList,o))};let i=null,c=2;const s=()=>{const{masonryStatus:e,masonryColumns:t,blogLayout:n}=NeveProperties;"enabled"!==e||t<2||(i=document.querySelector(".nv-index-posts .posts-wrapper"),null!==i&&imagesLoaded(i,()=>{window.nvMasonry=new Masonry(i,{itemSelector:"article.layout-"+n,columnWidth:"article.layout-"+n,percentPosition:!0})}))},u=()=>{"enabled"===NeveProperties.infScroll&&null!==document.querySelector(".nv-index-posts .posts-wrapper")&&((e,t,n=.5)=>{new IntersectionObserver(o=>{if(o[0].intersectionRatio<=n)return;t();const r=setInterval(()=>{const n=e.getBoundingClientRect(),{top:o,left:i,right:c,bottom:s}=n,{innerWidth:u,innerHeight:a}=window;o>=0&&i>=0&&c<=u&&s<=a?t():clearInterval(r)},750)}).observe(e)})(document.querySelector(".infinite-scroll-trigger"),()=>{if(parent.wp.customize)return parent.wp.customize.requestChangesetUpdate().then(()=>{a()}),!1;a()})},a=()=>{const e=document.querySelector(".infinite-scroll-trigger");if(null===e)return;if(document.querySelector(".nv-loader").style.display="block",c>NeveProperties.maxPages)return e.parentNode.removeChild(e),void(document.querySelector(".nv-loader").style.display="none");const t=document.querySelector(".nv-index-posts .posts-wrapper"),n=NeveProperties.lang,o=NeveProperties.endpoint+c,r=l(n?o+"/"+n:o);c++,((e,t,n)=>{const o=new XMLHttpRequest;o.onload=()=>{4===o.readyState&&200===o.status&&t(o.response)},o.onerror=()=>{},o.open("POST",e,!0),o.setRequestHeader("Content-Type","application/json; charset=UTF-8"),o.send(n)})(r,e=>{if(t.innerHTML+=JSON.parse(e),"enabled"!==NeveProperties.masonryStatus)return!1;window.nvMasonry.reloadItems(),window.nvMasonry.layout()},NeveProperties.query)},l=e=>void 0===wp.customize?e:(e+="?customize_changeset_uuid="+wp.customize.settings.changeset.uuid+"&customize_autosaved=on","undefined"==typeof _wpCustomizeSettings?e:e+="&customize_preview_nonce="+_wpCustomizeSettings.nonce.preview),d=["dropdown-open","active","nav-clickaway-overlay"],m=()=>{p(),document.addEventListener("click",(function(e){e.target.hash&&e.target.hash.includes("#")&&window.HFG.toggleMenuSidebar(!1)})),v(),g(),w(),window.HFG.initSearch=function(){g(),v()}},p=()=>{const{isRTL:e}=NeveProperties,t=document.querySelectorAll(".sub-menu, .minimal .nv-nav-search")||[];if(0===t.length)return;const n=window.innerWidth;t.forEach(t=>{const o=t.getBoundingClientRect(),r=o.left;r<0&&(t.style.right=e?"-100%":"auto",t.style.left=e?"auto":0),r+o.width>=n&&(t.style.right=e?0:"100%",t.style.left="auto")}),"undefined"!=typeof menuCalcEvent&&window.dispatchEvent(menuCalcEvent)};function v(){const t=document.querySelectorAll(".caret-wrap");e(t,"click",y),e(t,"keyup",y)}function y(e,n){e.preventDefault(),e.stopPropagation();const o=n.parentNode.parentNode.querySelector(".sub-menu");t(n,d[0]),t(o,d[0]),b(document.querySelectorAll("."+d[0]),d[0])}let f={};function h(e){const t=f.elements||function(e=document){return f.elements=[...e.querySelectorAll('a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')].filter(e=>!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")),f.elements}(f.container),n=9===e.keyCode,o=e.shiftKey,r=27===e.keyCode,i=document.activeElement,c=t[t.length-1],s=t[0];r&&(e.preventDefault(),f.container.querySelector(f.close).click(),f.backFocus.focus(),document.dispatchEvent(new CustomEvent("nv-focus-trap-end"))),!o&&n&&c===i&&(e.preventDefault(),s.focus()),o&&n&&s===i&&(e.preventDefault(),c.focus()),n&&s===c&&e.preventDefault()}function g(){const n=document.querySelectorAll(".nv-nav-search")||[],r=document.querySelectorAll(".menu-item-nav-search")||[],i=document.querySelectorAll(".close-responsive-search")||[];e(r,"click",(e,n)=>{e.preventDefault(),e.stopPropagation(),t(n,d[1]),b(n,d[1]),document.dispatchEvent(new CustomEvent("nv-focus-trap-start",{detail:{container:n.querySelector(".nv-nav-search"),close:".close-responsive-search",firstFocus:".search-field",backFocus:n}}))}),e(n,"click",e=>{e.stopPropagation()}),e(i,"click",e=>{e.preventDefault(),o(r,d[1]);const t=document.querySelector("."+d[2]);null!==t&&t.parentNode.removeChild(t)})}function w(){const e=document.querySelector(".header--row .menu-item-nav-cart");if(null===e)return;const t=e.querySelector(".nv-nav-cart");null!==t&&(t.style.left=e.getBoundingClientRect().left<350?0:null)}function b(e,t){let r=document.querySelector("."+d[2]);null!==r&&r.parentNode.removeChild(r),r=document.createElement("div"),n(r,d[2]);const i=document.querySelector("header.header");i.parentNode.insertBefore(r,i),r.addEventListener("click",()=>{o(e,t),r.parentNode.removeChild(r)})}document.addEventListener("nv-focus-trap-start",(function(e){f=e.detail,setTimeout(()=>{f.container.querySelector(f.firstFocus).focus()},100),document.addEventListener("keydown",h)})),document.addEventListener("nv-focus-trap-end",(function(){f={},document.removeEventListener("keydown",h)})),window.addEventListener("resize",w);const S=function(){this.options={menuToggleDuration:300},this.init()};function q(){window.HFG=new S,(()=>{if(null===document.querySelector(".blog.nv-index-posts"))return!1;s(),u()})(),m()}function E(){p()}let k;S.prototype.init=function(t=!1){if(!1===t){const t=document.querySelectorAll(".close-sidebar-panel .navbar-toggle");e(t,"click",()=>{this.toggleMenuSidebar(!1)})}const n=document.querySelectorAll(".menu-mobile-toggle");e(n,"click",e=>{this.toggleMenuSidebar(!0,e.target)});const o=document.querySelector(".header-menu-sidebar-overlay");e(o,"click",function(){this.toggleMenuSidebar(!1)}.bind(this))},S.prototype.toggleMenuSidebar=function(e,t=null){const r=document.querySelectorAll(".menu-mobile-toggle");if(o(document.body,"hiding-header-menu-sidebar"),!NeveProperties.isCustomize&&document.body.classList.contains("is-menu-sidebar")||!1===e){const e=document.querySelector(".nav-clickaway-overlay");null!==e&&e.parentNode.removeChild(e),n(document.body,"hiding-header-menu-sidebar"),o(document.body,"is-menu-sidebar"),o(r,"is-active"),setTimeout(function(){o(document.body,"hiding-header-menu-sidebar")}.bind(this),1e3)}else n(document.body,"is-menu-sidebar"),n(r,"is-active"),t&&document.dispatchEvent(new CustomEvent("nv-focus-trap-start",{detail:{container:document.getElementById("header-menu-sidebar"),close:".close-sidebar-panel button",firstFocus:"a,input",backFocus:t}}))},window.addEventListener("load",()=>{q()}),window.addEventListener("resize",()=>{clearTimeout(k),k=setTimeout(E,500)})}();
