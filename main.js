(()=>{"use strict";function e(e,t,n,d){const a=document.createElement("div"),c=document.createElement("img"),o=document.createElement("h2"),i=document.createElement("p");return a.id=e,a.setAttribute("class","find-us-comlumns"),c.src=t,c.setAttribute("class","icons"),o.textContent=n,i.textContent=d,a.appendChild(c),a.appendChild(o),a.appendChild(i),a}function t(e,t,n){const d=document.createElement("div"),a=document.createElement("h3");a.id="dish-name";const c=document.createElement("p");c.id="dish-price";const o=document.createElement("p");return a.innerHTML=e,c.textContent=t,o.textContent=n,d.appendChild(a),d.appendChild(o),d.appendChild(c),d}!function(){const e=document.querySelector("#content"),t=function(){const e=document.createElement("footer"),t=document.createElement("h3");return t.textContent="Food for Thought",t.id="slogan",e.appendChild(t),e}(),n=function(){const e=document.createElement("header"),t=document.createElement("h1");t.id="restaurant-name",t.textContent="Le Odin!";const n=function(){const e=document.createElement("div");e.id="nav";const t=document.createElement("button");t.setAttribute("class","nav-tab"),t.id="home",t.textContent="Home";const n=document.createElement("button");n.setAttribute("class","nav-tab"),n.id="contact",n.textContent="Contact";const d=document.createElement("button");return d.setAttribute("class","nav-tab"),d.id="menu",d.textContent="Menu",e.appendChild(t),e.appendChild(d),e.appendChild(n),e}();return e.appendChild(t),e.appendChild(n),e}();e.appendChild(n),e.appendChild(t)}();const n=document.createElement("div");n.id="subcontent",document.querySelector("#content").appendChild(n);const d=function(){document.querySelector("#content");const t=document.createElement("div");t.id="find-us-div";const n=e("address-div","img/map.jpeg","ADDRESS","Programming Street, 75"),d=e("phone-div","/src/modules/img/phone.jpeg","PHONE","+351998877532"),a=e("social-div","/src/modules/img/instagram.jpeg","SOCIAL MEDIA","Follow us on Instagram!");return t.appendChild(n),t.appendChild(d),t.appendChild(a),t}(),a=function(){const e=document.createElement("div");e.id="menu-div";const n=document.createElement("h2");n.textContent="Menu",n.id="menu-tittle";const d=function(){const e=document.createElement("div");e.id="menu-dishes-div";const n=t('<span id="extra">{</span> Pasta à La CSS <span id="extra">}</span>',"€ 7.","The pasta is just ok but it looks fantastic"),d=t('<span id="extra"><</span> HTML Soup <span id="extra">></span>',"€ 3.5","<strong> flavor"),a=t('<span id="extra">(</span> Javascript<span id="extra">[</span>Chicken<span id="extra">] )</span>',"€ 9","The food preparation method is a bit hard to explain but it works.");return e.appendChild(d),e.appendChild(n),e.appendChild(a),e}();return e.appendChild(n),e.appendChild(d),e}(),c=function(){const e=document.createElement("div");e.id="home-div";const t=document.createElement("p"),n=document.createElement("button");return n.id="check-menu",n.textContent="Check our Menu",t.id="home-text",t.textContent="Welcome to Le Odin! restaurant",e.appendChild(t),e.appendChild(n),e}();n.appendChild(c);const o=document.querySelectorAll(".nav-tab"),i=document.querySelector("#check-menu");function r(){switch(n.lastChild&&n.removeChild(n.lastChild),this.id){case"home":n.appendChild(c);break;case"menu":n.appendChild(a);break;case"contact":n.appendChild(d);break;default:n.appendChild(c)}}o.forEach((e=>e.addEventListener("click",r))),i.addEventListener("click",(()=>{n.lastChild&&n.removeChild(n.lastChild),n.appendChild(a)}))})();