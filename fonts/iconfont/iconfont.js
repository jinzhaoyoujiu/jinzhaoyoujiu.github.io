(function(window){var svgSprite='<svg><symbol id="anticon-guding" viewBox="0 0 1024 1024"><path d="M292.949333 150.357333c0.938667 6.997333 1.365333 14.250667 1.152 21.504l-1.152 38.016 29.696 23.637334 225.109334 178.602666 31.829333 25.173334 38.656-12.586667a305.066667 305.066667 0 0 1 194.048 1.706667c18.773333 6.485333 36.821333 14.933333 53.930667 24.874666l-177.749334 178.56-45.056 45.269334-13.312 13.482666-177.962666 178.773334a303.872 303.872 0 0 1-27.306667-249.173334l12.586667-38.656-25.173334-31.829333L233.685333 322.56l-23.637333-29.738667-37.973333 1.152-3.925334 0.085334c-5.973333 0-11.946667-0.426667-17.834666-1.28l142.592-142.378667zM308.309333 42.666667c-8.96 0-18.005333 3.370667-24.917333 10.282666l-230.4 229.973334c-15.701333 15.744-13.226667 41.984 5.504 54.186666 33.28 21.632 71.509333 32.426667 109.696 32.426667 2.133333 0 4.224 0 6.314667-0.085333l178.474666 225.237333a379.136 379.136 0 0 0 65.834667 356.693333 36.181333 36.181333 0 0 0 53.589333 2.730667l216.277334-217.216 234.368 234.453333a34.176 34.176 0 1 0 48.298666-48.426666l-234.496-234.453334 216.32-217.216a36.181333 36.181333 0 0 0-2.944-53.589333 377.472 377.472 0 0 0-237.397333-83.712c-39.893333 0-79.701333 6.314667-118.016 18.773333L369.706667 174.208a200.832 200.832 0 0 0-32.128-115.626667A34.858667 34.858667 0 0 0 308.266667 42.666667z" fill="#797979" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)