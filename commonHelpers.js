import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as D,i as C}from"./assets/vendor-77e16229.js";let c,s=!1;const m=document.querySelector("input#datetime-picker"),u=document.querySelector("[data-days]"),d=document.querySelector("[data-hours]"),i=document.querySelector("[data-minutes]"),l=document.querySelector("[data-seconds]"),S={enableTime:!0,time_24hr:!0,defaultDate:new Date,onClose:function(t){t[0]<=new Date?(document.querySelector("button[data-start]").disabled=!0,C.error({title:"Error",message:"Please choose a date in the future",position:"topCenter"})):document.querySelector("button[data-start]").disabled=!1}};D(m,S);const r=document.querySelector("button[data-start]");r.disabled=!0;r.addEventListener("click",function(){if(s)return;s=!0;const t=new Date(m.value);c=setInterval(function(){const n=t-new Date;if(n<=0){clearInterval(c),u.textContent="00",d.textContent="00",i.textContent="00",l.textContent="00",s=!1,r.disabled=!0;return}const e=b(n);u.textContent=o(e.days),d.textContent=o(e.hours),i.textContent=o(e.minutes),l.textContent=o(e.seconds)},1e3),this.disabled=!0});function b(t){const y=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),p=Math.floor(t%864e5%36e5%6e4/1e3);return{days:y,hours:f,minutes:h,seconds:p}}function o(t){return t<10?"0"+t:t.toString()}
//# sourceMappingURL=commonHelpers.js.map
