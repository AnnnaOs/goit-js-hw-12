import{i as d,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",h="46793755-9d28ad9f5c835a0a0339cf9e7";function p(o){const s=new URLSearchParams({key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${m}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function y(o){return o.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:a,downloads:u})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${s}"
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
              <p class="amount">${t}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${a}</p>
            </div>
            <div class="gallery-info-item">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${u}</p>
            </div>
          </div>
        </li>`).join("")}const c=document.querySelector(".search-form"),g=document.querySelector(".search-input"),l=document.querySelector(".gallery"),n=document.querySelector(".loader");n.style.display="none";c.addEventListener("submit",v);function v(o){o.preventDefault(),l.innerHTML="",n.style.display="block";const s=g.value;p(s).then(r=>{n.style.display="none",r.hits.length||d.error({maxWidth:432,position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l.innerHTML=y(r.hits),new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),c.reset()}).catch(r=>{n.style.display="none",console.log(r)})}
//# sourceMappingURL=index.js.map
