import{a as v,i as L,S as b}from"./assets/vendor-D73Uttp0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const S="https://pixabay.com/api/",q="46793755-9d28ad9f5c835a0a0339cf9e7";async function p(t,o,r){return(await v.get(S,{params:{key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:r,page:o}})).data}function m(t){return t.map(({webformatURL:o,largeImageURL:r,tags:i,likes:e,views:s,comments:a,downloads:w})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${i}"
              width="360"
            />
          </a>
          <div class="gallery-info">
            <div class="gallery-info-item">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Views</h2>
              <p class="amount">${s}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${w}</p>
            </div>
          </div>
        </li>`).join("")}function l(t){L.error({title:"",message:t,position:"topRight"})}function M(){document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".up-btn");t.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"}),document.body.classList.add("scrolling")}),window.addEventListener("scroll",function(){window.scrollY>200?t.classList.add("show"):t.classList.remove("show"),document.body.classList.contains("scrolling")&&window.scrollY===0&&document.body.classList.remove("scrolling")})})}const h=document.querySelector(".search-form"),E=document.querySelector('input[name="query"]'),y=document.querySelector(".gallery"),c=document.querySelector(".loader"),n=document.querySelector(".load-more"),g=new b(".gallery a",{captionsData:"alt",captionDelay:250}),f=15;let d=1,u="";n.style.display="none";c.style.display="none";M();h.addEventListener("submit",P);n.addEventListener("click",O);async function P(t){if(t.preventDefault(),u=E.value.trim(),!u)return l("Please enter a search query!");y.innerHTML="",c.style.display="block";try{const o=await p(u,d,f);if(!o.hits.length)return l("Sorry, there are no images matching your search query. Please try again!");o.hits.length<15?n.style.display="none":n.style.display="block",y.insertAdjacentHTML("beforeend",m(o.hits)),g.refresh()}catch{l("Sorry, but something went wrong!")}finally{c.style.display="none",h.reset()}}async function O(){d+=1,n.style.display="none",c.style.display="block";try{const t=await p(u,d,f);y.insertAdjacentHTML("beforeend",m(t.hits)),g.refresh();const o=document.querySelector(".gallery-item");if(o){const r=o.getBoundingClientRect().height;window.scrollBy({top:r*2,left:0,behavior:"smooth"})}t.totalHits<=Math.ceil(d*f)?l("We're sorry, but you've reached the end of search results."):n.style.display="block"}catch{l("Sorry, but something went wrong!")}finally{c.style.display="none"}}
//# sourceMappingURL=index.js.map
