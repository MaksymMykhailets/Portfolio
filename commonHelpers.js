import{a,A as l,S as u}from"./assets/vendor-1b66fce6.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const d="https://portfolio-js.b.goit.study/api/reviews";async function p(){const{data:t}=await a.get(`${d}`,{headers:{Accept:"application/json"},method:"Get"});return t}document.addEventListener("DOMContentLoaded",function(){const t=Array.from(document.querySelectorAll(".accordion-container"));new l(t,{duration:400,openOnInit:"all",showMultiple:!0,onOpen:function(r){r.querySelector("use[href]").setAttribute("href","../img/icons.svg#icon-arrow-up")},onClose:function(r){r.querySelector("use[href]").setAttribute("href","../img/icons.svg#icon-arrow-down")}})});const f=document.querySelector(".swiper-container"),m=new u(f,{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});console.log(m);document.getElementById("animation");function g(t){let r=t.getBoundingClientRect();return r.top>=0&&r.bottom<=window.innerHeight||r.bottom>=0&&r.top<=window.innerHeight}function c(){let t=document.querySelector(".marquee");g(t)?t.querySelectorAll(".marquee__line").forEach(function(n){n.classList.add("animate-covers")}):t.querySelectorAll(".marquee__line").forEach(function(n){n.classList.remove("animate-covers")})}document.addEventListener("DOMContentLoaded",c);window.addEventListener("scroll",c);const w=document.querySelector(".swiper-wrapper");async function y(){try{const t=await p();w.insertAdjacentHTML("beforeend",h(t))}catch(t){console.log(t.message)}}function h(t){return t.map(({id:r,author:n,avatar_url:i,review:e})=>`
    <div class="swiper-slide">
    <li class="card" data-id ="${r}">
    <img class="card_img" src="${i}" alt="photo">
    <h3 class="card_title">${n}</h3>
    <p class="card_text">${e}</p> 
    </li>
    </div>
    `).join("")}y();
//# sourceMappingURL=commonHelpers.js.map
