import{a as u,S as f,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();u.defaults.baseURL="https://pixabay.com/api/";function m(s){return u("",{params:{q:s,key:"50250137-e72b1c1fd22aec0efc68e5be3",image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>t)}let p=new f(".gallery a");function h(s){const t=s.map(r=>`
    <li>
      <a href="${r.largeImageURL}">
        <img src="${r.webformatURL}" alt="${r.tags}" />
      </a>
      <div>
        <p>Likes: ${r.likes}</p>
        <p>Views: ${r.views}</p>
        <p>Comments: ${r.comments}</p>
        <p>Downloads: ${r.downloads}</p>
      </div>
    </li>
  `).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",t),p.refresh()}function y(){document.querySelector(".gallery").innerHTML=""}function g(s){s.classList.remove("hidden")}function l(s){s.classList.add("hidden")}const d=document.querySelector(".form"),L=d.elements["search-text"],i=document.querySelector(".loader");d.addEventListener("submit",async s=>{s.preventDefault();const t=L.value.trim();if(!t){a.error({message:"Please enter a search query!"});return}y(),g(i);try{const r=await m(t);l(i),r.hits.length===0?a.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):h(r.hits)}catch(r){l(i),a.error({message:"An error occurred while fetching images."}),console.error(r)}});
//# sourceMappingURL=index.js.map
