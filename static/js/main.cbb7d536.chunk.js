(this.webpackJsonpappclima=this.webpackJsonpappclima||[]).push([[0],{15:function(e,a,t){},19:function(e,a,t){"use strict";t.r(a);var s=t(0),c=t(1),i=t.n(c),n=t(7),r=t.n(n),d=(t(15),t(5)),o=t.n(d),l=t(8),j=t(2),u=function(){return Object(s.jsx)("header",{className:"header",children:Object(s.jsx)("h1",{children:"El Clima en tu Ciudad"})})},m=t(3),b=t(6),p=t(9),h=function(e){var a=e.mensaje;return Object(s.jsx)("div",{className:"error",children:Object(s.jsx)("p",{children:a})})};h.ptopTypes={mensaje:t.n(p).a.string.isRequired};var g=h,O=function(e){var a=e.busqueda,t=e.guardarBusqueda,i=e.guardarConsultar,n=Object(c.useState)(!1),r=Object(j.a)(n,2),d=r[0],o=r[1],l=a.ciudad,u=a.pais,p=function(e){t(Object(b.a)(Object(b.a)({},a),{},Object(m.a)({},e.target.name,e.target.value)))};return Object(s.jsxs)("form",{className:"Secciones",onSubmit:function(e){e.preventDefault(),""!==l.trim()&&""!==u.trim()?(o(!1),i(!0)):o(!0)},children:[Object(s.jsx)("h2",{children:"Coloca tu Ciudad y Pa\xeds"}),Object(s.jsx)("label",{children:"Ciudad:"}),Object(s.jsx)("input",{type:"text",name:"ciudad",placeholder:"Ej. Guadalajara",className:"input",value:l,onChange:p}),Object(s.jsx)("label",{children:"Pa\xeds:"}),Object(s.jsxs)("select",{className:"input",name:"pais",value:u,onChange:p,children:[Object(s.jsx)("option",{disabled:!0,value:"",children:"--Seleccione--"}),Object(s.jsx)("option",{value:"US",children:"Estados Unidos"}),Object(s.jsx)("option",{value:"MX",children:"M\xe9xico"}),Object(s.jsx)("option",{value:"AR",children:"Argentina"}),Object(s.jsx)("option",{value:"CO",children:"Colombia"}),Object(s.jsx)("option",{value:"CR",children:"Costa Rica"}),Object(s.jsx)("option",{value:"ES",children:"Espa\xf1a"}),Object(s.jsx)("option",{value:"PE",children:"Per\xfa"}),Object(s.jsx)("option",{value:"CA",children:"Canada"}),Object(s.jsx)("option",{value:"FR",children:"Francia"}),Object(s.jsx)("option",{value:"BR",children:"Brasil"})]}),d?Object(s.jsx)(g,{mensaje:"Todos los campos son obligatorios"}):null,Object(s.jsx)("input",{type:"submit",className:"boton",value:"Ver Clima"})]})},x=t.p+"static/media/sun.1479797b.svg",v=t.p+"static/media/fewClouds.f67397d4.svg",f=t.p+"static/media/cloud.f4ed4d6a.svg",C=t.p+"static/media/fog.39c0ab08.svg",w=t.p+"static/media/snow.bdd5c690.svg",N=t.p+"static/media/heavyRain.b1d8fd66.svg",y=t.p+"static/media/lightRain.d8978402.svg",S=t.p+"static/media/showerRain.f9bc81c4.svg",k=t.p+"static/media/thunderstorm.3a373f25.svg",F=t.p+"static/media/rain.d1a4f872.svg",R=t.p+"static/media/freezingRain.d910222b.svg",E={img1:x,img2:v,img3:f,img4:t.p+"static/media/scatteredClouds.28be0a43.svg",img5:C,img6:w,img7:N,img8:y,img9:S,img10:k,img11:F,img12:R,img13:t.p+"static/media/brokenClouds.48039e73.svg"},q=function(e){var a,t=e.resultado.weather;switch("thunderstorm"===t[0].main&&(a=E.img10),"Drizzle"===t[0].main&&(a=E.img9),"Snow"===t[0].main&&(a=E.img6),"Clear"===t[0].main&&(a=E.img1),"50n"===t[0].icon&&(a=E.img5),t[0].description){case"light rain":case"moderate rain":case"heavy intensity rain":a=E.img8;break;case"very heavy rain":case"extreme rain":a=E.img7;break;case"freezing rain":a=E.img12;break;case"light intensity shower rain":case"shower rain":case"heavy intensity shower rain":case"ragged shower rain":a=E.img9}switch(t[0].description){case"few clouds":a=E.img2;break;case"scattered clouds":a=E.img4;break;case"broken clouds":case"overcast clouds":a=E.img13}return Object(s.jsx)("img",{src:a,alt:"iconos clima"})},T=function(e){var a=e.resultado,t=a.name,c=a.main,i=a.sys,n=a.weather;if(!t)return null;var r=273.15;return Object(s.jsxs)("div",{className:"Secciones resultado",children:[Object(s.jsxs)("h2",{children:[t," - ",i.country]}),Object(s.jsxs)("div",{className:"resultados",children:[Object(s.jsxs)("p",{children:["Temperatura Actual: ",Object(s.jsxs)("span",{className:"grados",children:[parseFloat(c.temp-r,10).toFixed(2),"\xb0"]})]}),Object(s.jsxs)("p",{children:["Temperatura Minima: ",Object(s.jsxs)("span",{className:"grados",children:[parseFloat(c.temp_min-r,10).toFixed(2),"\xb0"]})]}),Object(s.jsxs)("p",{children:["Temperatura M\xe1xima: ",Object(s.jsxs)("span",{className:"grados",children:[parseFloat(c.temp_max-r,10).toFixed(2),"\xb0"]})]}),Object(s.jsxs)("p",{children:["Humedad: ",Object(s.jsxs)("span",{className:"grados",children:[c.humidity,"%"]})]})]}),Object(s.jsxs)("div",{className:"info-actual",children:[Object(s.jsx)("div",{className:"icono",children:Object(s.jsx)(q,{resultado:a})}),Object(s.jsx)("div",{className:"desc-actual",children:Object(s.jsxs)("p",{children:[" ",Object(s.jsx)("span",{children:n[0].description})]})})]})]})};var B=function(){var e,a=Object(c.useState)({ciudad:"",pais:""}),t=Object(j.a)(a,2),i=t[0],n=t[1],r=Object(c.useState)(!1),d=Object(j.a)(r,2),m=d[0],b=d[1],p=i.ciudad,h=i.pais,x=Object(c.useState)({}),v=Object(j.a)(x,2),f=v[0],C=v[1],w=Object(c.useState)(!1),N=Object(j.a)(w,2),y=N[0],S=N[1];return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var a,t,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!m){e.next=18;break}return e.prev=1,"2b44ad8d31374aa776c31063daf17871",a="https://api.openweathermap.org/data/2.5/weather?q=".concat(p,",").concat(h,"&appid=").concat("2b44ad8d31374aa776c31063daf17871"),e.next=6,fetch(a);case 6:return t=e.sent,e.next=9,t.json();case 9:s=e.sent,b(!1),C(s),"404"===s.cod?S(!0):S(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}})()()}),[m,p,h]),e=y?Object(s.jsx)(g,{mensaje:"No hay resultados, intente con otra b\xfasqueda"}):Object(s.jsx)(T,{resultado:f}),Object(s.jsxs)("div",{className:"hero",children:[Object(s.jsx)(u,{}),Object(s.jsx)("div",{className:"contenedor",children:Object(s.jsxs)("div",{className:"contenido",children:[Object(s.jsx)(O,{busqueda:i,guardarBusqueda:n,guardarConsultar:b}),e]})})]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,20)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,i=a.getLCP,n=a.getTTFB;t(e),s(e),c(e),i(e),n(e)}))};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(B,{})}),document.getElementById("root")),P()}},[[19,1,2]]]);
//# sourceMappingURL=main.cbb7d536.chunk.js.map