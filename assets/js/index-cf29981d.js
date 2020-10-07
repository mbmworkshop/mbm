function addEvent(e,t,n){e.addEventListener?e.addEventListener(t,function(e){n(e,e.target)},!1):e.attachEvent&&e.attachEvent("on"+t,function(e){n(e,e.srcElement)})}function addClass(e,t){e.classList.contains(t)||e.classList.add(t)}function removeClass(e,t){for(;e.classList.contains(t);)e.classList.remove(t)}function select(e){return document.querySelector(e)}function selectAll(e){return document.querySelectorAll(e)}function toggleLabelValidity(e,t){t?(removeClass(e,"form-label-invalid"),addClass(e,"form-label-valid")):(addClass(e,"form-label-invalid"),removeClass(e,"form-label-valid"))}var serialize=function(e){for(var t=[],n=0;n<e.elements.length;n++){var a=e.elements[n];if(a.name&&!a.disabled&&"file"!==a.type&&"reset"!==a.type&&"submit"!==a.type&&"button"!==a.type)if("select-multiple"===a.type)for(var o=0;o<a.options.length;o++)a.options[o].selected&&t.push(encodeURIComponent(a.name)+"="+encodeURIComponent(a.options[o].value));else("checkbox"!==a.type&&"radio"!==a.type||a.checked)&&t.push(encodeURIComponent(a.name)+"="+encodeURIComponent(a.value))}return t.join("&")};function ready(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}function toggleNav(){var e=select("#nav-collapsable");e.classList.toggle("h-0"),e.classList.toggle("h-auto")}ready(function(){selectAll(".external").forEach(function(e){e.querySelectorAll("a").forEach(function(e){e.setAttribute("rel","noreferrer noopener"),e.setAttribute("target","_blank")})})}),ready(function(){addEvent(window.matchMedia("(min-width: 1024px)"),"change",function(e){var t=select("#nav-collapsable");t.classList.contains("h-auto")&&t.classList.remove("h-auto"),t.classList.add("h-0")}),selectAll(".nav-item").forEach(function(e){addEvent(e,"click",function(e){select("#nav-collapsable").classList.contains("h-auto")&&toggleNav()})})});
//# sourceMappingURL=index.js.map
