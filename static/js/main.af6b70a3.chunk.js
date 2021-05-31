(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(4),r=a.n(n),i=(a(9),a(2)),l=(a(10),a(0)),j=function(){return Object(l.jsxs)("div",{className:"loading",children:[Object(l.jsx)("i",{className:"fas fa-cloud"}),Object(l.jsx)("i",{className:"fas fa-bolt"}),Object(l.jsx)("i",{className:"fas fa-sun"}),Object(l.jsx)("i",{className:"fas fa-cloud-showers-heavy"}),Object(l.jsx)("p",{className:"loading__text",children:"Loading ..."})]})},o=function(e){var t=e.lat,a=e.lon,s=Object(c.useState)([]),n=Object(i.a)(s,2),r=n[0],j=n[1];return Object(c.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(a,"&exclude=hourly&appid=7e370e3dd7190049ec2699d522a30847&units=metric")).then((function(e){return e.json()})).then((function(e){return j(e.daily)}))}),[]),Object(l.jsx)(l.Fragment,{children:r.map((function(e){return e.weather.map((function(t,a){var c=t.main,s=t.icon;return Object(l.jsxs)("div",{className:"next-day",children:[Object(l.jsx)("p",{className:"next-day__date",children:new Date(1e3*e.dt).toLocaleDateString()}),Object(l.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(s,".png")}),Object(l.jsxs)("p",{className:"next-day__temp",children:[e.temp.day.toFixed(0),"\xb0 C"]}),Object(l.jsx)("p",{className:"next-day__description",children:c})]},a)}))}))})},d=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],h=function(e){var t=e.weather;return Object(l.jsxs)("div",{className:"weather__details",children:[Object(l.jsxs)("div",{className:"weather__info",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:"weather__details-main",children:[t.main.temp_min,"\xb0 C"]}),Object(l.jsx)("p",{className:"weather__details-description",children:"Temperature min"})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:"weather__details-main",children:[t.wind.speed," km / h"]}),Object(l.jsx)("p",{className:"weather__details-description",children:"Wind speed"})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:"weather__details-main",children:[t.main.humidity,"%"]}),Object(l.jsx)("p",{className:"weather__details-description",children:"Humidity"})]})]}),Object(l.jsxs)("div",{className:"weather__info weather__info--lower",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:"weather__details-main",children:[t.main.temp_max,"\xb0 C"]}),Object(l.jsx)("p",{className:"weather__details-description",children:"Temperature max"})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:"weather__details-main",children:[t.main.pressure,"hPa"]}),Object(l.jsx)("p",{className:"weather__details-description",children:"Pressure"})]}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:"weather__details-main",children:[t.main.feels_like,"\xb0 C"]}),Object(l.jsx)("p",{className:"weather__details-description",children:"Feels like"})]})]})]})},m=function(e){var t=e.weather,a=Object(c.useState)(""),s=Object(i.a)(a,2),n=s[0],r=s[1],j=Object(c.useState)(0),m=Object(i.a)(j,2),u=m[0],p=m[1];return Object(c.useEffect)((function(){!function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,c=e.getFullYear();p(e.getDay()-1),t<10&&(t="0".concat(t)),a<10&&(a="0".concat(a)),r("".concat(t,"/").concat(a,"/").concat(c))}()}),[]),Object(l.jsx)(l.Fragment,{children:t&&Object(l.jsxs)("div",{className:"weather",children:[Object(l.jsxs)("div",{className:"weather__city",children:[Object(l.jsxs)("h3",{children:[t.name,", ",Object(l.jsx)("span",{className:"weather__country"}),t.sys.country]}),Object(l.jsxs)("p",{className:"weather__date",children:[d[u]," ",n]})]}),Object(l.jsx)("div",{className:"weather__current",children:t.weather.map((function(e,a){var c=e.main,s=e.icon;return Object(l.jsxs)("div",{className:"weather__container",children:[Object(l.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(s,"@2x.png")}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{className:"weather__temperature",children:[t.main.temp.toFixed(0),"\xb0 C"]}),Object(l.jsx)("p",{className:"weather__description",children:c})]})]},a)}))}),Object(l.jsx)(h,{weather:t}),Object(l.jsxs)("p",{className:"weather__heading",children:["Approximate weather for next days for"," ",Object(l.jsx)("span",{className:"weather__marked",children:t.name})]}),Object(l.jsx)("div",{className:"weather__next-days",children:Object(l.jsx)(o,{lat:t.coord.lat,lon:t.coord.lon})})]})})},u=new(window.SpeechRecognition||window.webkitSpeechRecognition);u.continuos=!0,u.interimResults=!0,u.lang="en-US";var p=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)({}),r=Object(i.a)(n,2),o=r[0],d=r[1],h=Object(c.useState)(!1),p=Object(i.a)(h,2),b=p[0],O=p[1],x=Object(c.useState)(!1),_=Object(i.a)(x,2),f=_[0],w=_[1],N=Object(c.useState)(!1),g=Object(i.a)(N,2),v=g[0],y=g[1],S=Object(c.useState)(null),k=Object(i.a)(S,2),C=k[0],F=k[1],D=Object(c.useState)(!1),E=Object(i.a)(D,2),J=E[0],T=E[1],I=Object(c.useState)([]),M=Object(i.a)(I,2),P=M[0],R=M[1];Object(c.useEffect)((function(){L(),R(JSON.parse(localStorage.getItem("recent-search")))}),[b]);var A=function(e){if(function(e){var t=JSON.parse(localStorage.getItem("recent-search"));t.length>10&&t.shift();var a=t.indexOf((function(t){return t===e}));""!==e&&-1===a&&t.push(e),localStorage.setItem("recent-search",JSON.stringify(t))}(e),e.length>1)return T(!1),w(!0),y(!1),void fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=7e370e3dd7190049ec2699d522a30847&units=metric")).then((function(e){return e.json()})).then((function(e){"404"===e.cod?(w(!1),y(!1),F(!0)):(d(e),w(!1),y(!0),F(!1))}));F(!0)},L=function(){b?(a.length>0&&s(""),u.start()):u.stop(),u.onresult=function(e){var t=Array.from(e.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");t.length>0&&(s(t),u.stop(),O(!1),b||setTimeout((function(){A(t)}),1e3)),u.onerror=function(e){console.log(e.error)}}};return Object(l.jsxs)("div",{className:"app ".concat(v?o.weather[0].main:null),children:[Object(l.jsxs)("div",{className:"app__search-container",children:[Object(l.jsxs)("label",{className:"app__label",children:[Object(l.jsx)("button",{onClick:function(){return A(a)},className:"app__btn-search",children:Object(l.jsx)("i",{className:"fas fa-search"})}),Object(l.jsx)("input",{onFocus:function(){return T(!0)},onKeyDown:function(e){"Enter"===e.code&&A(a)},onChange:function(e){return s(e.target.value)},value:a,className:"app__search",type:"text",placeholder:"San Francisco"}),b&&Object(l.jsx)("i",{className:"fas fa-circle"}),Object(l.jsxs)("button",{className:"app__mic",onClick:function(){return O(!0)},children:[!b&&Object(l.jsx)("i",{className:"fas fa-microphone"}),b&&Object(l.jsx)("i",{className:"fas fa-microphone-slash"})]})]}),J&&P.length>0&&Object(l.jsx)("div",{className:"app__recent",children:function(){if(P)return P.map((function(e,t){return Object(l.jsx)("p",{onClick:function(){return A(e)},className:"app__recent-name",children:e},t)}))}()})]}),!f&&v&&Object(l.jsx)(m,{weather:o}),f&&Object(l.jsx)(j,{}),C&&Object(l.jsx)("p",{className:"app__error",children:"City not found. Please enter a valid name of city and remember name of city must be at least 3 words!"})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.af6b70a3.chunk.js.map