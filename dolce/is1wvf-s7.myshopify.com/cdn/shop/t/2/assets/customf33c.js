function handleScroll(){var e=document.getElementsByClassName("support-floating")[0],t=document.getElementsByClassName("botaoflutuante")[0],n=document.getElementById("evolution-price-list"),o=null;t&&(o=window.getComputedStyle(t)),e&&n&&(e.style.bottom=o!=null&&o.display==="block"?"65px":"15px")}function increaseValue(){var e=parseInt(document.getElementById("number").value,10);e=isNaN(e)?0:e,e++,document.getElementById("number").value=e}function decreaseValue(){var e=parseInt(document.getElementById("number").value,10);(e=isNaN(e)?0:e)!==1&&e--,document.getElementById("number").value=e}function serialize(e){function t(e2,n2){var o2=e2.lastIndexOf("[");if(o2===-1){var a2={};return a2[e2]=n2,a2}var i2=e2.substr(0,o2),r={};return r[e2.substring(o2+1,e2.length-1)]=n2,t(i2,r)}for(var n={},o=0,a=e.elements.length;o<a;o++){var i=e.elements[o];i.name!==""&&!i.disabled&&i.name&&!i.disabled&&(i.checked||/select|textarea/i.test(i.nodeName)||/hidden|text|search|tel|url|email|password|datetime|date|month|week|time|datetime-local|number|range|color/i.test(i.type))&&(n=extend(n,t(i.name,i.value)))}return n}function extend(){for(var e={},t=0,n=function(t2){for(var n2 in t2)t2.hasOwnProperty(n2)&&(Object.prototype.toString.call(t2[n2])==="[object Object]"?e[n2]=Form.extend(e[n2],t2[n2]):e[n2]=t2[n2])};t<arguments.length;t++)n(arguments[t]);return e}window.onload=function(){if(window.matchMedia("(max-width: 768px)").matches){handleScroll(),window.onscroll=handleScroll;var e=document.getElementsByClassName("support-floating")[0],t=document.getElementsByClassName("botaoflutuante")[0],n=null;t&&(n=window.getComputedStyle(t)),e&&n!=null&&n.display==="block"&&(e.style.bottom="65px")}},$(".block-swatch__radio, .variant-swatch__radio, .product-form__single-selector").change(function(){setTimeout(function(){parcelamento()},150)}),$(".options:first-child").addClass("active"),$(".options").each(function(){$(this).on("click",function(){$(".options").removeClass("active"),$(this).addClass("active"),$("#evolution-price-list .price-promotional-wrap strong").html($(this).find(".valortot").text()),$("#evolution-price-list .price-promotional-wrap span").html($(this).find(".valorcomp").text()),$("#evolution-price-list .price-promotional-wrap .selector-desconto").remove(),$("#evolution-price-list .price-promotional-wrap").append('<p class="selector-desconto">CUPOM '+$(this).find(".saving").text()+" APLICADO</p>"),parcelamento()})}),$(".product-form").each(function(){$(this).on("click",".botaocmprar, .botaoaddcarrinho-qtd",function(e){e.stopImmediatePropagation();const t=$(this).attr("id")==="botaoaddcarrinho"||!window.theme.botaoaddcarrinho,n=[],o=parseInt($(".options.active .iddavariante").attr("val")),a=parseInt($(".options.active .iddavariante").attr("qtd"));n.push({id:o,quantity:a}),$(".buy-together-list input").each(function(){$(this).prop("checked")===!0&&n.push({id:$(this).attr("data-id"),quantity:1})});let i={items:n};fetch("".concat(window.routes.cartAddUrl,".js"),{body:JSON.stringify(i),credentials:"same-origin",method:"POST",headers:{"Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"}}).then(function(e2){if(e2.ok)if(window.theme.cartType==="drawer"&&t){document.dispatchEvent(new CustomEvent("theme:loading:end"));const e3=document.querySelector('[data-section-id="product-template"]');e3&&e3.dispatchEvent(new CustomEvent("product:added",{bubbles:!0,detail:{variant:n[1],quantity:1}}))}else setTimeout(function(){window.location.href="/cart"},500)})})});const youtubeVideos=[...document.querySelectorAll("[data-youtube]")];youtubeVideos.forEach(function(e){e.querySelector("[data-youtube-button]").addEventListener("click",function(){const e2=event.target.dataset.youtubeButton,t=event.target.parentNode,n='<iframe width="100%" src="'+e2+'?autoplay=1&showinfo=0&controls=1&rel=0&modestbranding=1" allow="autoplay;" frameborder="0" allowfullscreen></iframe>';t.style.display="none",t.insertAdjacentHTML("beforebegin",n),t.parentNode.removeChild(t)})}),$(document).ready(function(){(function(e2,t){t||(t=window.location.href),e2=e2.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e2+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null})("customer_posted")&&$(".modal--newsletter").attr("aria-hidden","false");const e=document.getElementById("copiar-cupom");e&&e.addEventListener("click",function(){var e2=document.getElementById("texto-cupom");navigator.clipboard&&navigator.clipboard.writeText(e2.innerText).then(function(){}).catch(function(e3){})})});const miniCart=document.querySelector(".mini-cart");let observer=null;function handleMutation(e,t){for(const t2 of e)if(t2.attributeName==="aria-hidden"){const e2=t2.target.getAttribute("aria-hidden")==="true";document.documentElement.style.overflow=e2?"auto":"hidden"}}function startObserver(){observer=new MutationObserver(handleMutation),observer.observe(miniCart,{attributes:!0,attributeFilter:["aria-hidden"]})}function stopObserver(){observer&&(observer.disconnect(),observer=null)}window.addEventListener("load",startObserver),window.addEventListener("resize",function(){startObserver()});
//# sourceMappingURL=/cdn/shop/t/2/assets/custom.js.map?v=178718570756129662041739792236
