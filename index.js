import{A as f,S as p,i as m,a as u}from"./assets/vendor-BYUds9X1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".nav-menu"),o=document.querySelector(".nav-item");t&&o&&t.addEventListener("click",function(e){e.preventDefault(),o.classList.toggle("active")}),document.querySelectorAll(".submenu a").forEach(e=>{e.addEventListener("click",function(n){n.preventDefault();const i=this.getAttribute("href").substring(1),l=document.getElementById(i);l&&(window.scrollTo({top:l.offsetTop-80,behavior:"smooth"}),o.classList.remove("active"))})});const r=document.getElementById("scroll-to-footer"),s=document.getElementById("footer");r&&s&&r.addEventListener("click",function(){window.scrollTo({top:s.offsetTop,behavior:"smooth"})})});document.addEventListener("DOMContentLoaded",()=>{new f(".list-qestions",{duration:500,showMultiple:!0}),document.querySelectorAll(".icon-accordion-close").forEach(o=>{const r=o.closest(".topic-button"),s=r==null?void 0:r.nextElementSibling,e=o.querySelector("use");s&&o.addEventListener("click",()=>{s.style.display==="block"?(s.style.display="none",e.setAttribute("href",`${window.location.origin}/img/icons.svg#icon-accordion-closesvg`)):(s.style.display="block",e.setAttribute("href",`${window.location.origin}/img/icons.svg#icon-accordion-opensvg`))})})});async function v(){try{const{data:t}=await u.get("https://portfolio-js.b.goit.study/api/reviews");return t}catch(t){console.error("Error: ",t)}}function g(t){return t.map(({_id:o,author:r,avatar_url:s,review:e})=>`
		<li class="swiper-slide review-card">
		  <img src="${s}" alt="${r}"/>
			<div class="review-info">
			  <h4>${r}</h4>
				<p>${e}</p>
			</div>
		</li>
		`).join("")}const y=document.querySelector(".reviews-container"),w=document.querySelector(".reviews-list"),a=document.querySelector(".reviews-error"),b=document.querySelector(".swiper-button-prev"),d=document.querySelector(".swiper-button-next");let c=!1;document.addEventListener("DOMContentLoaded",async()=>{try{let r=function(){b.toggleAttribute("disabled",o.isBeginning),d.toggleAttribute("disabled",o.isEnd)};const t=await v();if(!t||t.length===0){a.classList.remove("hidden"),a.classList.add("css-err-mes"),d.setAttribute("disabled","true"),c=!0;return}w.innerHTML=g(t);const o=new p(".swiper",{direction:"horizontal",loop:!1,spaceBetween:16,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{invert:!0},resizeObserver:!0,slidesPerView:1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});o.on("slideChange",r),r()}catch(t){c=!0,console.error(t)}});const h=new IntersectionObserver(t=>{t.forEach(o=>{c&&o.isIntersecting&&m.error({title:"Error",message:"No feedback data about reviews. We are solving the problem",position:"topRight"})})},{threshold:.2});h.observe(y);const E=document.querySelector(".footer-form"),L="https://portfolio-js.b.goit.study/api",S="/requests";E.addEventListener("submit",async t=>{t.preventDefault();try{const o=t.currentTarget.elements.email.value.trim(),r=t.currentTarget.elements.comments.value.trim(),s=JSON.stringify({email:o,comment:r});alert(s);const e=L+S;alert(e);const n=await u.post(e,s,{headers:{accept:"application/json","Content-Type":"application/json"}});alert(111),alert(n.data.title)}catch(o){alert(o)}});
//# sourceMappingURL=index.js.map
