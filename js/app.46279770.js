(function(e){function n(n){for(var o,t,c=n[0],l=n[1],u=n[2],s=0,d=[];s<c.length;s++)t=c[s],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&d.push(i[t][0]),i[t]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);f&&f(n);while(d.length)d.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var e,n=0;n<r.length;n++){for(var a=r[n],o=!0,t=1;t<a.length;t++){var c=a[t];0!==i[c]&&(o=!1)}o&&(r.splice(n--,1),e=l(l.s=a[0]))}return e}var o={},t={app:0},i={app:0},r=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"c51c9ddc","chunk-0206bfa0":"1ec802cc","chunk-04b93936":"9bf845ce","chunk-13a6037e":"4678d61e","chunk-16015154":"7f542321","chunk-17977988":"fd9f23f9","chunk-2c06842c":"a531aff5","chunk-2d208d90":"cfe99bd7","chunk-2d21d0e2":"645ccfc9","chunk-2d22c123":"7f95b559","chunk-2e80bb9a":"73b1e89c","chunk-3145fe0f":"8801e097","chunk-328f70dd":"72c7837a","chunk-3807499c":"9716e6d1","chunk-3c94cd2f":"5a592ac6","chunk-3dc647fd":"c45dbc17","chunk-4cdd78c0":"8a83c42f","chunk-515a8379":"2834c848","chunk-53ccb27e":"3bca94b8","chunk-59974754":"65241b9c","chunk-766a929b":"7fcdd33f","chunk-839300a6":"ecaf6454","chunk-c796899c":"5f949034",comple:"b9e59979",creditos:"cacc2df2",glosario:"c4c7cba8",intro:"39edd5d8",referencias:"ec9de840",tema1:"3be49b74",tema2:"a1ef8d8d",tema3:"cf37c867"}[e]+".js"}function l(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var n=[],a={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3c94cd2f":1,"chunk-3dc647fd":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};t[e]?n.push(t[e]):0!==t[e]&&a[e]&&n.push(t[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3c94cd2f":"1dbe8d4a","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"d9a73241","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"ada38857","chunk-766a929b":"09d570ea","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"458afdbb",creditos:"1ca899a0",glosario:"e2e0ce92",intro:"0e433876",referencias:"8be20790",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",i=l.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],s=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(s===o||s===i))return n()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],s=u.getAttribute("data-href");if(s===o||s===i)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete t[e],f.parentNode.removeChild(f),a(r)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){t[e]=0})));var o=i[e];if(0!==o)if(o)n.push(o[2]);else{var r=new Promise((function(n,a){o=i[e]=[n,a]}));n.push(o[2]=r);var u,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e);var d=new Error;u=function(n){s.onerror=s.onload=null,clearTimeout(f);var a=i[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+t+")",d.name="ChunkLoadError",d.type=o,d.request=t,a[1](d)}i[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:s})}),12e4);s.onerror=s.onload=u,document.head.appendChild(s)}return Promise.all(n)},l.m=e,l.c=o,l.d=function(e,n,a){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(a,o,function(n){return e[n]}.bind(null,o));return a},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var d=0;d<u.length;d++)n(u[d]);var f=s;r.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"52e5":function(e,n,a){e.exports=a.p+"img/cc.0f3b944a.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),t=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},i=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,l=a("2877"),u=Object(l["a"])(c,t,i,!1,null,null,null),s=u.exports,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),f=a("8c4f"),m=a("ae58"),p=a("7e58");d["a"].use(f["a"]);var h=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),b=h,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Fundamentos de investigación",descripcionCurso:'La investigación formativa tiene como objetivo la apropiación de conocimientos técnicos y tecnológicos, para la identificación y solución de problemas   en contextos sociales y productivos del país.<br><br>En el desarrollo de la competencia “Orientar investigación formativa según referentes técnicos"  se pretende integrar en el proceso formativo los componentes metodológicos para la formulación básica de proyectos de investigación, partiendo desde la identificación de un problema, la generación de ideas, el planteamiento de la pregunta de investigación, la determinación de objetivos, el reconocimiento de un marco teórico y el desarrollo metodológico para un ejercicio básico de investigación.<br><br>',imagenBannerPrincipal:a("ae0a"),fondoBannerPrincipal:a("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"La importancia de investigar en el mundo del trabajo",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"¿Por qué investigar?",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"La investigación en el SENA",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"El proyecto de investigación",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Tema e idea de investigación",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Enfoques de la investigación",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"El problema y la pregunta de investigación  ",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"Objetivos y alcance de la investigación",hash:"t_2_4"},{icono:"far fa-file-alt",numero:"2.5",titulo:"Niveles de la investigación ",hash:"t_2_5"},{icono:"far fa-file-alt",numero:"2.6",titulo:"Métodos de investigación ",hash:"t_2_6"},{icono:"far fa-file-alt",numero:"2.7",titulo:"La hipótesis",hash:"t_2_7"},{icono:"far fa-file-alt",numero:"2.8",titulo:"Técnicas de recolección de información ",hash:"t_2_8"},{icono:"far fa-file-alt",numero:"2.6",titulo:"Universo y muestra",hash:"t_2_9"},{icono:"far fa-file-alt",numero:"2.10",titulo:"Conclusiones",hash:"t_2_10"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Fuentes de información",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Fuentes primarias y secundarias ",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Búsqueda de información",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Informe de investigación ",hash:"t_3_3"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Guijosa, C. (2018). 7 habilidades necesarias para los trabajos del futuro. ",link:"https://observatorio.tec.mx/edu-news/7-habilidades-necesarias-para-los-trabajos-del-futuro "},{referencia:"Hernández Sampieri, R., Fernández Collado, C., & Baptista, P. (2014). Metodología de la Investigación. Sexta Edición. Mc Graw Hill."},{referencia:"Pérez Rodríguez, G., García Batista, G., Nocedo de León, I., & García Inza, M. L. (2009). Metodología de la investigación educacional."},{referencia:"Pickers, S. (2015). ¿Cómo determinar el tamaño de una muestra?  Psyma."},{referencia:"Valero, J. A. (2002). El conocimiento: fuente y riqueza para el futuro. Economía y Desarrollo, 1(1), 99-104."}],glosario:[{termino:"Ciencia",significado:"entendimiento, inteligencia, razón natural."},{termino:"Conocimiento",significado:"conjunto de conocimientos obtenidos mediante la observación y el razonamiento, sistemáticamente estructurados y de los que se deducen principios y leyes generales con capacidad predictiva y comprobables experimentalmente."},{termino:"Fenómeno",significado:"indagar para descubrir algo. Investigar un hecho."},{termino:"Leyes",significado:"regla fija a la que está sometido un fenómeno de la naturaleza. Precepto dictado por la autoridad competente, en que se manda o prohíbe algo, en consonancia con la justicia y para el bien de los gobernados."},{termino:"Método",significado:"modo de decir o hacer con orden. Modo de obrar o proceder, hábito o costumbre que cada uno tiene y observa."},{termino:"Metodología",significado:"conjunto de métodos que se siguen en una investigación científica o en una exposición doctrinal."},{termino:"Paradigma",significado:"teoría o conjunto de teorías cuyo núcleo central se acepta sin cuestionar y que suministra la base y modelo para resolver problemas y avanzar en el conocimiento"}],complementario:[{texto:"Pregunta de investigación",tipo:"Video",link:"https://www.youtube.com/watch?v=OJPrmBjwoQA "},{texto:"¿Como determinar el universo, población y muestra?",tipo:"Video",link:"https://www.youtube.com/watch?v=3_tW-Cg4BSY "},{texto:"Cálculo del tamaño de la muestra",tipo:"Video",link:"https://www.youtube.com/watch?v=cya4JCVPc9w "}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Marisol Osorio Beltrán",cargo:"Líder Sennova",centro:"Centro de Formación en Diseño Confección y Moda Regional Antioquia"},{nombre:"Luz Mila Pacheco Fuentes",cargo:"Diseñadora instruccional",centro:"Centro de Diseño y Metrología Regional Distrito Capital"},{nombre:"Julieth Paola Vital López",cargo:"Corrección de estilo",centro:"Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital."}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:["Jorge Villamizar"],cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Camilo Andres Bolaño Rey",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Yuli Marcela Gómez Tarazona",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});o["a"].prototype.$config=v;var y=a("9224");o["a"].prototype.$package=y,new o["a"]({router:b,store:g["a"],render:function(e){return e(s)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.0.3","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,n,a){e.exports=a.p+"img/logo-sena-naranja.d8b9a0f4.svg"},a3a0:function(e,n,a){},ae0a:function(e,n,a){e.exports=a.p+"img/banner-princiapal.0ea132f4.svg"},e6b0:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.b96e7d0c.png"}});
//# sourceMappingURL=app.46279770.js.map