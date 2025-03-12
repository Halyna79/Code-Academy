import{A as g,S as y,i as h,a as w}from"./assets/vendor-CU_p4DQ2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".nav-menu"),t=document.querySelector(".nav-item"),o=document.getElementById("submenu");document.getElementById("scroll-to-footer"),document.getElementById("footer"),e.addEventListener("click",function(s){s.preventDefault();const n=t.classList.toggle("active");e.setAttribute("aria-expanded",n),o.hidden=!n}),document.addEventListener("click",function(s){!t.contains(s.target)&&!e.contains(s.target)&&(t.classList.remove("active"),o.hidden=!0,e.setAttribute("aria-expanded","false"))}),document.querySelectorAll(".submenu a").forEach(s=>{s.addEventListener("click",function(n){this.getAttribute("href").substring(1),t.classList.remove("active"),o.hidden=!0,e.setAttribute("aria-expanded","false")})})});const E=document.querySelector(".burger"),S=document.querySelector(".close"),u=document.querySelector(".mobile-box"),c=document.body;E.addEventListener("click",function(){c.classList.add("menu-open"),u.style.transform="translateX(0)",c.classList.add("no-scroll")});S.addEventListener("click",function(){c.classList.remove("menu-open"),u.style.transform="translateX(-100%)",c.classList.remove("no-scroll")});document.querySelectorAll(".mob-nav a").forEach(e=>{e.addEventListener("click",function(){c.classList.remove("menu-open"),u.style.transform="translateX(-100%)",c.classList.remove("no-scroll");const t=this.getAttribute("href").substring(1),o=document.getElementById(t);o&&window.scrollTo({top:o.offsetTop,behavior:"smooth"})})});document.getElementById("mobile-order").addEventListener("click",function(){c.classList.remove("menu-open"),u.style.transform="translateX(-100%)",c.classList.remove("no-scroll");const e=document.getElementById("footer");e&&window.scrollTo({top:e.offsetTop,behavior:"smooth"})});document.addEventListener("DOMContentLoaded",function(){new g(".about-me-info-list",{duration:400,openOnInit:[0],showMultiple:!0,onOpen:t=>{setTimeout(()=>{e(t,"open")},0)},onClose:t=>{setTimeout(()=>{e(t,"close")},0)}});function e(t,o){const s=t.querySelector(".accordion-close-icon use");s&&s.setAttribute("href",o==="open"?"/img/icons.svg#icon-accordion-opensvg":"/img/icons.svg#icon-accordion-closesvg")}document.querySelectorAll(".about-me-info-item").forEach((t,o)=>{e(t,o===0?"open":"close")})});//! === swiper ===
const q=document.querySelector(".project-swiper"),l=new y(q,{speed:400,spaceBetween:100}),m=document.querySelector(".next"),d=document.querySelector(".back");m.addEventListener("click",()=>{l.slideNext(),l.isEnd&&m.setAttribute("disabled","disabled"),l.isBeginning||d.removeAttribute("disabled")});d.addEventListener("click",()=>{l.slidePrev(),l.isEnd||m.removeAttribute("disabled"),l.isBeginning&&d.setAttribute("disabled","disabled")});l.isBeginning&&d.setAttribute("disabled","disabled");document.addEventListener("DOMContentLoaded",()=>{new g(".list-qestions",{duration:500,showMultiple:!0}),document.querySelectorAll(".button-accordion").forEach(t=>{const o=t.closest(".topic-button"),s=o==null?void 0:o.nextElementSibling,n=t.querySelector("use");s&&t.addEventListener("click",()=>{s.classList.toggle("open"),s.classList.contains("open")?n.setAttribute("href","/Code-Academy/assets/icons-BXQt0PIq.svg#icon-accordion-opensvg"):n.setAttribute("href","/Code-Academy/assets/icons-BXQt0PIq.svg#icon-accordion-closesvg")})})});const L=document.querySelector(".covers-container"),A=new IntersectionObserver(e=>{e.forEach(t=>{L.querySelectorAll(".covers-inner-list").forEach(s=>{t.isIntersecting?s.classList.add("covers-start-animation"):s.classList.remove("covers-start-animation")})})},{threshold:.05});A.observe(L);async function B(){try{const{data:e}=await w.get("https://portfolio-js.b.goit.study/api/reviews");return e}catch(e){console.error("Error: ",e)}}function I(e){return e.map(({_id:t,author:o,avatar_url:s,review:n})=>`
		<li class="swiper-slide review-card">
		  <img src="${s}" alt="${o}"/>
			<div class="review-info">
			  <h4>${o}</h4>
				<p>${n}</p>
			</div>
		</li>
		`).join("")}const O=document.querySelector(".reviews-container"),k=document.querySelector(".reviews-list"),v=document.querySelector(".reviews-error"),x=document.querySelector(".reviews-button-prev"),p=document.querySelector(".reviews-button-next"),C=document.querySelector(".reviews-can-see");let f=!1;document.addEventListener("DOMContentLoaded",async()=>{try{let o=function(){x.toggleAttribute("disabled",t.isBeginning),p.toggleAttribute("disabled",t.isEnd)};const e=await B();if(!e||e.length===0){v.classList.remove("hidden"),v.classList.add("css-err-mes"),p.setAttribute("disabled","true"),f=!0;return}k.innerHTML=I(e);const t=new y(C,{direction:"horizontal",loop:!1,spaceBetween:16,navigation:{nextEl:".reviews-button-next",prevEl:".reviews-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},resizeObserver:!0,slidesPerView:1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});t.on("slideChange",o),o()}catch(e){f=!0,console.error(e)}});const P=new IntersectionObserver(e=>{e.forEach(t=>{f&&t.isIntersecting&&h.error({title:"Error",message:"No feedback data about reviews. We are solving the problem",position:"topRight"})})},{threshold:.2});P.observe(O);const b=document.querySelector(".footer-form"),T=document.querySelector(".btn-close-res"),a=document.querySelector(".modal-window"),M=document.body,j="https://portfolio-js.b.goit.study/api",D="/requests";b.addEventListener("submit",async e=>{e.preventDefault();try{const t=e.currentTarget.elements.email.value.trim(),o=e.currentTarget.elements.comments.value.trim(),s=JSON.stringify({email:t,comment:o}),n=j+D,r=await w.post(n,s,{headers:{accept:"application/json","Content-Type":"application/json"}});a.classList.add("show"),b.reset(),M.classList.add("disable-scroll"),a.addEventListener("click",i=>{i.target===i.currentTarget&&a.classList.remove("show")}),document.addEventListener("keydown",i=>{i.key==="Escape"&&a.classList.remove("show")}),T.addEventListener("click",i=>{a.classList.remove("show")})}catch{h.show({backgroundColor:"RGBA(237, 59, 68, 1)",messageColor:"rgba(255, 255, 255, 1)",close:"false",position:"topRight",message:"Error. Please, try again later"})}});"scrollBehavior"in document.documentElement.style||document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=document.querySelector(this.getAttribute("href"));o&&(o.scrollIntoView({behavior:"smooth"}),history.pushState(null,null,this.getAttribute("href")))})});
//# sourceMappingURL=index.js.map
