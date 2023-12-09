(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function d(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=d(t);fetch(t.href,e)}})();document.querySelector("#app").innerHTML=`
  <div class="app-container">
    <header>
      <h1>We're launching soon</h1>
    </header>
    <div class="countdownTimer-container">
      <div class="countdownTimer-timer">
        <div class="flip-card day">
          <div class="flip-card-top">14</div>
          <div class="flip-card-bottom">14</div>
        </div>
        <p class="countdownTimer-timer-time">Days</p>
      </div>
      <div class="countdownTimer-timer">
        <div class="flip-card hour">
          <div class="flip-card-top">00</div>
          <div class="flip-card-bottom">00</div>
        </div>
        <p class="countdownTimer-timer-time">Hours</p>
      </div>
      <div class="countdownTimer-timer">
        <div class="flip-card minute">
          <div class="flip-card-top">00</div>
          <div class="flip-card-bottom">00</div>
        </div>
        <p class="countdownTimer-timer-time">Minutes</p>
      </div>
      <div class="countdownTimer-timer">
        <div class="flip-card second">
          <div class="flip-card-top">00</div>
          <div class="flip-card-bottom">00</div>
        </div>
        <p class="countdownTimer-timer-time">Seconds</p>
      </div>
    </div>
    <footer>
      <a href="#"><i class="fa-brands fa-square-facebook"></i></a>
      <a href="#"><i class="fa-brands fa-pinterest"></i></a>
      <a href="#"><i class="fa-brands fa-instagram"></i></a>
    </footer>
  </div>
`;const p=document.querySelector(".flip-card.day"),v=document.querySelector(".flip-card.hour"),y=document.querySelector(".flip-card.minute"),h=document.querySelector(".flip-card.second");T();function T(){const o=new Date,n=new Date(o.getFullYear(),o.getMonth(),o.getDate()+14),d=o.getTime(),t=n.getTime()-d,e=Math.floor(t/1e3),r=Math.floor(e/60),f=Math.floor(r/60);let i=Math.floor(f/24),c=f%24,s=r%60,a=e%60;i=i<10?"0"+i:i,c=c<10?"0"+c:c,s=s<10?"0"+s:s,a=a<10?"0"+a:a,document.querySelector(".flip-card.day .flip-card-top").textContent=i,document.querySelector(".flip-card.hour .flip-card-top").textContent=c,document.querySelector(".flip-card.minute .flip-card-top").textContent=s,document.querySelector(".flip-card.second .flip-card-top").textContent=a,document.querySelector(".flip-card.day .flip-card-bottom").textContent=i,document.querySelector(".flip-card.hour .flip-card-bottom").textContent=c,document.querySelector(".flip-card.minute .flip-card-bottom").textContent=s,document.querySelector(".flip-card.second .flip-card-bottom").textContent=a}setInterval(g,1e3);function g(){const o=new Date,n=new Date(o.getFullYear(),o.getMonth(),o.getDate()+14),d=o.getTime(),t=n.getTime()-d,e=Math.floor(t/1e3),r=Math.floor(e/60),f=Math.floor(r/60);let i=Math.floor(f/24),c=f%24,s=r%60,a=e%60;i=i<10?"0"+i:i,c=c<10?"0"+c:c,s=s<10?"0"+s:s,a=a<10?"0"+a:a,u(h,a),u(y,s),u(v,c),u(p,i)}function u(o,n){const d=document.querySelector(`.${o.classList[0]}.${o.classList[1]} .flip-card-top`),l=document.querySelector(`.${o.classList[0]}.${o.classList[1]} .flip-card-bottom`),t=document.createElement("div"),e=document.createElement("div"),r=d.textContent;parseInt(n)!==parseInt(r)&&(t.textContent=r,e.textContent=r,t.classList.add("flip-top"),e.classList.add("flip-bottom"),o.append(t,e),t.addEventListener("animationstart",()=>{d.textContent=n}),t.addEventListener("animationend",()=>{t.remove()}),e.addEventListener("animationstart",()=>{e.textContent=n}),e.addEventListener("animationend",()=>{l.textContent=n,e.remove()}))}
