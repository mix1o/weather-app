(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c,s=a(1),n=a.n(s),r=a(11),i=a.n(r),l=(a(22),a(5)),o=a(2),d=(a(23),a(7)),j=a.n(d),h=a(12),u=a(13),m=a(14),b="ADD NEW",p="SET DEFAULT",O=a(0),x=m.a.div(c||(c=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  background: #d3d3d3;\n  width: 80%;\n  z-index: 10;\n  transform: ",";\n  transition: transform 0.3s ease-in-out;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-direction: column;\n"])),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),_=function(e){var t=e.dispatch,a=e.userData,c=e.getWeather,n=e.setCity,r=Object(s.useState)(!1),i=Object(o.a)(r,2),l=i[0],d=i[1],u=Object(s.useState)(""),m=Object(o.a)(u,2),b=m[0],_=m[1];return Object(O.jsxs)("div",{className:"hamburger",children:[Object(O.jsxs)("div",{className:"hamburger__header",children:[Object(O.jsx)("p",{className:"hamburger__heading",children:"Weather App"}),Object(O.jsxs)("button",{className:"hamburger__icon",children:[!l&&Object(O.jsx)("i",{onClick:function(){return d(!0)},className:"fas fa-bars"}),l&&Object(O.jsx)("i",{onClick:function(){return d(!1)},className:"fas fa-times"})]})]}),Object(O.jsxs)(x,{open:l,children:[Object(O.jsxs)("div",{className:"hamburger__recent",children:[Object(O.jsxs)("h4",{className:"hamburger__main-heading",children:["Your recent searches ",Object(O.jsx)("i",{className:"fas fa-search"})]}),Object(O.jsx)("p",{className:"hamburger__description",children:"Click one of them to see weather"}),Object(O.jsx)("div",{className:"hamburger__container-recent",children:a.slice(1).map((function(e,t){return Object(O.jsx)("p",{onClick:function(){c(e),d(!1),n(e)},className:"hamburger__recent-words",children:e},t)}))})]}),Object(O.jsxs)("div",{className:"hamburger__user-default-city",children:[Object(O.jsxs)("h4",{className:"hamburger__main-heading",children:["Set your city ",Object(O.jsx)("i",{className:"fas fa-home"})]}),Object(O.jsx)("p",{className:"hamburger__description",children:"You can see your city as default."}),Object(O.jsxs)("label",{className:"hamburger__label",children:[Object(O.jsx)("input",{className:"hamburger__input",defaultValue:a[0].defaultCity,onChange:function(e){return _(e.target.value)},type:"text"}),Object(O.jsx)("button",{onClick:Object(h.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t({type:p,payload:{city:b}});case 2:e.sent,window.location.reload();case 4:case"end":return e.stop()}}),e)}))),className:"hamburger__btn",children:"SET"})]})]}),Object(O.jsxs)("div",{className:"hamburger__rights",children:[Object(O.jsx)("p",{className:"hamburger__footer-text",children:"WeatherApp by mix1o"}),Object(O.jsx)("p",{className:"hamburger__footer-text",children:"All rights reserved \xa9"})]})]})]})},f=function(){return Object(O.jsxs)("div",{className:"loading",children:[Object(O.jsx)("i",{className:"fas fa-cloud"}),Object(O.jsx)("i",{className:"fas fa-bolt"}),Object(O.jsx)("i",{className:"fas fa-sun"}),Object(O.jsx)("i",{className:"fas fa-cloud-showers-heavy"}),Object(O.jsx)("p",{className:"loading__text",children:"Loading ..."})]})},N=function(e){var t=e.lat,a=e.lon,c=Object(s.useState)([]),n=Object(o.a)(c,2),r=n[0],i=n[1];return Object(s.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t,"&lon=").concat(a,"&exclude=hourly&appid=").concat("7e370e3dd7190049ec2699d522a30847","&units=metric")).then((function(e){return e.json()})).then((function(e){return i(e.daily)}))}),[]),Object(O.jsx)(O.Fragment,{children:r.map((function(e){return e.weather.map((function(t,a){var c=t.main,s=t.icon;return Object(O.jsxs)("div",{className:"next-day",children:[Object(O.jsx)("p",{className:"next-day__date",children:new Date(1e3*e.dt).toLocaleDateString()}),Object(O.jsx)("img",{alt:"Image weather",src:"http://openweathermap.org/img/wn/".concat(s,".png")}),Object(O.jsxs)("p",{className:"next-day__temp",children:[e.temp.day.toFixed(0),"\xb0 C"]}),Object(O.jsx)("p",{className:"next-day__description",children:c})]},a)}))}))})},g=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],w=function(e){var t=e.weather;return Object(O.jsxs)("div",{className:"weather__details",children:[Object(O.jsxs)("div",{className:"weather__info",children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{className:"weather__details-main",children:[t.main.temp_min.toFixed(0),"\xb0 C"]}),Object(O.jsx)("p",{className:"weather__details-description",children:"Temperature min"})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{className:"weather__details-main",children:[t.wind.speed," km / h"]}),Object(O.jsx)("p",{className:"weather__details-description",children:"Wind speed"})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{className:"weather__details-main",children:[t.main.humidity,"%"]}),Object(O.jsx)("p",{className:"weather__details-description",children:"Humidity"})]})]}),Object(O.jsxs)("div",{className:"weather__info weather__info--lower",children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{className:"weather__details-main",children:[t.main.temp_max.toFixed(0),"\xb0 C"]}),Object(O.jsx)("p",{className:"weather__details-description",children:"Temperature max"})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{className:"weather__details-main",children:[t.main.pressure,"hPa"]}),Object(O.jsx)("p",{className:"weather__details-description",children:"Pressure"})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{className:"weather__details-main",children:[t.main.feels_like,"\xb0 C"]}),Object(O.jsx)("p",{className:"weather__details-description",children:"Feels like"})]})]})]})},y=function(e){var t=e.weather,a=Object(s.useState)(""),c=Object(o.a)(a,2),n=c[0],r=c[1],i=Object(s.useState)(0),l=Object(o.a)(i,2),d=l[0],j=l[1];return Object(s.useEffect)((function(){!function(){var e=new Date,t=e.getDate(),a=e.getMonth()+1,c=e.getFullYear();j(e.getDay()-1),t<10&&(t="0".concat(t)),a<10&&(a="0".concat(a)),r("".concat(t,"/").concat(a,"/").concat(c))}()}),[]),Object(O.jsx)(O.Fragment,{children:t&&Object(O.jsxs)("div",{className:"weather",children:[Object(O.jsxs)("div",{className:"weather__city",children:[Object(O.jsxs)("h3",{children:[t.name,", ",Object(O.jsx)("span",{className:"weather__country"}),t.sys.country]}),Object(O.jsxs)("p",{className:"weather__date",children:[g[d]," ",n]})]}),Object(O.jsx)("div",{className:"weather__current",children:t.weather.map((function(e,a){var c=e.main,s=e.icon;return Object(O.jsxs)("div",{className:"weather__container",children:[Object(O.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(s,"@2x.png"),alt:"Image weather"}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("p",{className:"weather__temperature",children:[t.main.temp.toFixed(0),"\xb0 C"]}),Object(O.jsx)("p",{className:"weather__description",children:c})]})]},a)}))}),Object(O.jsx)(w,{weather:t}),Object(O.jsxs)("p",{className:"weather__heading",children:["Approximate weather for next days for"," ",Object(O.jsx)("span",{className:"weather__marked",children:t.name})]}),Object(O.jsx)("div",{className:"weather__next-days",children:Object(O.jsx)(N,{lat:t.coord.lat,lon:t.coord.lon})})]})})},v=function(){return Object(O.jsxs)("div",{className:"main",children:[Object(O.jsxs)("div",{className:"main__box",children:[Object(O.jsx)("h3",{className:"main__heading-3",children:"Search weather for any city"}),Object(O.jsx)("p",{className:"main__description",children:"Weather App gives you ability to see current weather for specific city."})]}),Object(O.jsxs)("div",{className:"main__box",children:[Object(O.jsx)("h3",{className:"main__heading-3",children:"Your favorite cities"}),Object(O.jsx)("p",{className:"main__description",children:"Your recent search city are saved. Just click of them in hamburger."})]}),Object(O.jsxs)("div",{className:"main__box",children:[Object(O.jsx)("h3",{className:"main__heading-3",children:"Save your current city"}),Object(O.jsx)("p",{className:"main__description",children:"In hamburger you can pass name of your current city. When you be on page it be as default."})]}),Object(O.jsx)("p",{className:"main__info",children:"Here will appear results"})]})},S=new(window.SpeechRecognition||window.webkitSpeechRecognition);S.continuos=!0,S.interimResults=!0,S.lang="en-US";var C=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)({}),r=Object(o.a)(n,2),i=r[0],d=r[1],j=Object(s.useState)(!1),h=Object(o.a)(j,2),u=h[0],m=h[1],x=Object(s.useState)(!1),N=Object(o.a)(x,2),g=N[0],w=N[1],C=Object(s.useState)(!1),k=Object(o.a)(C,2),D=k[0],F=k[1],E=Object(s.useState)(null),W=Object(o.a)(E,2),A=W[0],T=W[1],I=Object(s.useState)(!0),J=Object(o.a)(I,2),L=J[0],Y=J[1];Object(s.useEffect)((function(){M()}),[u]),console.log(A);var R=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e.length>0)return t&&q({type:b,payload:{name:e}}),w(!0),F(!1),void fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("7e370e3dd7190049ec2699d522a30847","&units=metric")).then((function(e){return e.json()})).then((function(e){console.log(e),"404"===e.cod?(w(!1),F(!1),T(!0)):(d(e),w(!1),F(!0),T(!1),Y(!1))}));T(!0)},M=function(){u?S.start():S.stop(),S.onresult=function(e){var t=Array.from(e.results).map((function(e){return e[0]})).map((function(e){return e.transcript})).join("");t.length>0&&(c(t),S.stop(),m(!1),u||setTimeout((function(){R(t)}),1e3)),S.onerror=function(e){console.log(e.error)}}},P=Object(s.useCallback)((function(e,t){switch(t.type){case b:var a=e.slice(1).findIndex((function(e){return e.toLowerCase()===t.payload.name.toLowerCase()}));return 16===e.length&&e.splice(1,1),-1===a&&e.length<=16?[].concat(Object(l.a)(e),[t.payload.name]):Object(l.a)(e);case p:return e[0].defaultCity=t.payload.city,Object(l.a)(e)}}),[]),H=Object(s.useReducer)(P,[{defaultCity:""}],(function(){var e=localStorage.getItem("user-data");return e?JSON.parse(e):[{defaultCity:""}]})),U=Object(o.a)(H,2),X=U[0],q=U[1];return Object(s.useEffect)((function(){if(window.localStorage.setItem("user-data",JSON.stringify(X)),""!==X[0].defaultCity&&!D&&L){var e=X[0].defaultCity;R(e,!1)}}),[X]),Object(O.jsxs)("div",{className:"app ".concat(D?i.weather[0].main:null),children:[Object(O.jsx)(_,{getWeather:R,userData:X,dispatch:q,setCity:c}),Object(O.jsx)("div",{className:"app__search-container",children:Object(O.jsxs)("label",{className:"app__label",children:[Object(O.jsx)("button",{onClick:function(){return R(a)},className:"app__btn-search",children:Object(O.jsx)("i",{className:"fas fa-search"})}),Object(O.jsx)("input",{onKeyDown:function(e){"Enter"===e.key&&R(a)},onChange:function(e){return c(e.target.value)},value:a,className:"app__search",type:"text",placeholder:"San Francisco"}),u&&Object(O.jsx)("i",{className:"fas fa-circle"}),Object(O.jsxs)("button",{className:"app__mic",onClick:function(){return m((function(e){return!e}))},children:[!u&&Object(O.jsx)("i",{className:"fas fa-microphone"}),u&&Object(O.jsx)("i",{className:"fas fa-microphone-slash"})]})]})}),!D&&""===X[0].defaultCity&&Object(O.jsx)(v,{}),!g&&D&&Object(O.jsx)(y,{weather:i}),g&&Object(O.jsx)(f,{}),A&&Object(O.jsx)("p",{className:"app__error",children:"City not found. Please enter a valid name of city and remember name of city must be at least 3 words!"})]})};a(30);i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.78d83b85.chunk.js.map