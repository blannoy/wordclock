(function(e){function t(t){for(var a,i,n=t[0],l=t[1],u=t[2],d=0,m=[];d<n.length;d++)i=n[d],o[i]&&m.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(m.length)m.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,n=1;n<s.length;n++){var l=s[n];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=s[0]))}return e}var a={},o={app:0},r=[];function i(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=a,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(s,a,function(t){return e[t]}.bind(null,a));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var u=0;u<n.length;u++)t(n[u]);var c=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"3d9e":function(e,t,s){"use strict";var a=s("46cb"),o=s.n(a);o.a},4432:function(e,t,s){"use strict";var a=s("dfa7"),o=s.n(a);o.a},"46cb":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("097d");var a=s("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-container",[a("b-navbar",{attrs:{toggleable:"md"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),a("b-navbar-brand",{attrs:{href:"#"}},[a("img",{attrs:{alt:"Bitlair logo",src:s("6977"),height:"30"}})]),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",{staticClass:"mr-auto"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[e._v("Kleuren")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/wifi"}},[e._v("WiFi")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/advanced"}},[e._v("Geavanceerd")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[e._v("Informatie")])],1)]),a("b-nav-text",[e._v("Woordklok")])],1)],1),a("wifi-warning"),a("router-view")],1)],1)},r=[],i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return"connected"!==e.wifi.status?s("div",{staticClass:"alert alert-warning",attrs:{role:"alert",id:"wifialert"}},[e._v("\n  Let op! Op dit moment is de woordklok niet verbonden met een WiFi netwerk. Dit betekent dat de juiste tijd \n  niet opgehaald kan worden. Hierdoor kunnen ook functies als het instellen van kleuren niet goed werken. Ga\n  naar de pagina "),s("router-link",{attrs:{to:"/wifi"}},[e._v("WiFi instellingen")]),e._v(" om verbinding te maken.\n")],1):e._e()},n=[],l=s("2f62"),u={name:"WifiWarning",computed:Object(l["b"])(["wifi"])},c=u,d=s("2877"),m=Object(d["a"])(c,i,n,!1,null,null,null);m.options.__file="WifiWarning.vue";var f=m.exports,p={name:"App",computed:Object(l["b"])(["wifi"]),components:{WifiWarning:f}},v=p,h=(s("7c55"),Object(d["a"])(v,o,r,!1,null,null,null));h.options.__file="App.vue";var b=h.exports,g=s("8c4f"),w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"colors"},[s("h1",[e._v("Kleurinstellingen")]),s("p",[e._v("Je kan de woordklok op allerlei verschillende kleuren instellen. De volgende manieren\n    worden ondersteund:")]),s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],staticClass:"form-check-input",attrs:{type:"radio",id:"single",value:"single"},domProps:{checked:e._q(e.mode,"single")},on:{change:function(t){e.mode="single"}}}),s("label",{staticClass:"form-check-label",attrs:{for:"single"}},[e._v("Enkele kleur")])]),s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],staticClass:"form-check-input",attrs:{type:"radio",id:"rainbow",value:"rainbow"},domProps:{checked:e._q(e.mode,"rainbow")},on:{change:function(t){e.mode="rainbow"}}}),s("label",{staticClass:"form-check-label",attrs:{for:"rainbow"}},[e._v("Regenboog")])]),s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],staticClass:"form-check-input",attrs:{type:"radio",id:"words",value:"words"},domProps:{checked:e._q(e.mode,"words")},on:{change:function(t){e.mode="words"}}}),s("label",{staticClass:"form-check-label",attrs:{for:"words"}},[e._v("Per woord")])]),s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.mode,expression:"mode"}],staticClass:"form-check-input",attrs:{type:"radio",id:"hourly",value:"hourly"},domProps:{checked:e._q(e.mode,"hourly")},on:{change:function(t){e.mode="hourly"}}}),s("label",{staticClass:"form-check-label",attrs:{for:"hourly"}},[e._v("Per uur")])]),s("div",{staticClass:"settings"},["single"===e.mode?s("colors-single"):e._e(),"rainbow"===e.mode?[e._v("\n      In regenboogstand zal de woordklok automatisch geleidelijk van kleur veranderen. \n      Er zijn in deze stand geen kleur instellingen mogelijk.\n    ")]:e._e(),"words"===e.mode?s("colors-words"):e._e(),"hourly"===e.mode?s("colors-hourly"):e._e()],2)])},_=[],C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v("\n  In deze stand is de woordklok altijd dezelfde kleur. \n  "),s("hue-slider",{model:{value:e.singleHue,callback:function(t){e.singleHue=t},expression:"singleHue"}}),s("br"),s("br"),s("br"),s("button",{on:{click:e.save}},[e._v("Opslaan")])],1)},k=[],x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hueSlider"},[s("input",{staticClass:"hue",attrs:{type:"range",min:"0",max:"255",id:"formControlRange"},domProps:{value:e.value},on:{change:function(t){e.$emit("input",t.target.value)}}}),e._v(" "+e._s(e.value)+"\n")])},H=[],y={name:"HueSlider",props:["value"]},j=y,W=(s("87bb"),Object(d["a"])(j,x,H,!1,null,null,null));W.options.__file="HueSlider.vue";var $=W.exports,T={name:"ColorsSingle",computed:{singleHue:{get:function(){return this.$store.state.leds.singleHue},set:function(e){this.axios.get("/api/led/test",{params:{hue:e}}),this.$store.commit("singleHue",e)}}},components:{HueSlider:$},methods:{save:function(){this.axios.get("api/led/singleColor",{params:{hue:this.$store.state.leds.singleHue}})}}},O=T,S=Object(d["a"])(O,C,k,!1,null,null,null);S.options.__file="Colors-Single.vue";var P=S.exports,B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v("\n  In deze stand is het mogelijk om ieder woord van een aparte kleur te voorzien.\n  "),s("br"),s("br"),s("form",[s("h3",[e._v("Algemeen")]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Het")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[0]},on:{input:function(t){e.updateWordHue(0,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Is")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[1]},on:{input:function(t){e.updateWordHue(1,t)}}})],1),s("h3",[e._v("Minuten")]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Vijf")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[2]},on:{input:function(t){e.updateWordHue(2,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Tien")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[3]},on:{input:function(t){e.updateWordHue(3,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Kwart")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[4]},on:{input:function(t){e.updateWordHue(4,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Voor")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[6]},on:{input:function(t){e.updateWordHue(6,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Over")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[5]},on:{input:function(t){e.updateWordHue(5,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Half")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[8]},on:{input:function(t){e.updateWordHue(8,t)}}})],1),s("h3",[e._v("Stippen")]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Een minuut ")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[9]},on:{input:function(t){e.updateWordHue(9,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Twee minuten")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[10]},on:{input:function(t){e.updateWordHue(10,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Drie minuten")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[11]},on:{input:function(t){e.updateWordHue(11,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Vier minuten")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[12]},on:{input:function(t){e.updateWordHue(12,t)}}})],1),s("h3",[e._v("Uren")]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Heel uur")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[7]},on:{input:function(t){e.updateWordHue(7,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Een uur")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[13]},on:{input:function(t){e.updateWordHue(13,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Twee uur")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[14]},on:{input:function(t){e.updateWordHue(14,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Drie uur")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[15]},on:{input:function(t){e.updateWordHue(15,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Vier uur")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[16]},on:{input:function(t){e.updateWordHue(16,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Vijf uur")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[17]},on:{input:function(t){e.updateWordHue(17,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Zes uur")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[18]},on:{input:function(t){e.updateWordHue(18,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Zeven uur")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[19]},on:{input:function(t){e.updateWordHue(19,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Acht uur")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[20]},on:{input:function(t){e.updateWordHue(20,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Negen uur")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[21]},on:{input:function(t){e.updateWordHue(21,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Tien uur")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[22]},on:{input:function(t){e.updateWordHue(22,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Elf uur")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[23]},on:{input:function(t){e.updateWordHue(23,t)}}})],1),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Twaalf uur")]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.leds.wordHues[24]},on:{input:function(t){e.updateWordHue(24,t)}}})],1),s("br"),s("br"),s("br"),s("button",{staticClass:"btn btn-primary",on:{click:e.save}},[e._v("Opslaan")])])])},E=[],N=s("5d73"),z=s.n(N),D={name:"ColorsWords",computed:Object(l["b"])(["leds"]),components:{HueSlider:$},methods:{updateWordHue:function(e,t){this.axios.get("/api/led/testWord",{params:{hue:t,word:e}}),this.$store.commit("wordHue",{index:e,hue:t})},save:function(){var e={},t=0,s=!0,a=!1,o=void 0;try{for(var r,i=z()(this.leds.wordHues);!(s=(r=i.next()).done);s=!0){var n=r.value;e["w"+t]=n,t++}}catch(l){a=!0,o=l}finally{try{s||null==i.return||i.return()}finally{if(a)throw o}}this.axios.get("/api/led/wordColors",{params:e})}}},I=D,M=Object(d["a"])(I,B,E,!1,null,null,null);M.options.__file="Colors-Words.vue";var V=M.exports,q=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._v("\n  In deze stand verandert de woord klok ieder uur naar een andere kleur. \n\n  "),e._l(e.hours,function(t,a){return s("div",{key:a,staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label"},[e._v(e._s(t))]),s("hue-slider",{staticClass:"col-sm-10",attrs:{value:e.hourlyHues[a]},on:{input:function(t){e.updateHourlyHue(a,t)}}})],1)}),s("br"),s("br"),s("br"),s("button",{staticClass:"btn btn-primary",on:{click:e.save}},[e._v("Opslaan")])],2)},A=[],K={name:"ColorsHourly",computed:{hourlyHues:{get:function(){return this.$store.state.leds.hourlyHues}},hours:{get:function(){return["00:xx","01:xx","02:xx","03:xx","04:xx","05:xx","06:xx","07:xx","08:xx","09:xx","10:xx","11:xx","12:xx","13:xx","14:xx","15:xx","16:xx","17:xx","18:xx","19:xx","20:xx","21:xx","22:xx","23:xx"]}}},components:{HueSlider:$},methods:{updateHourlyHue:function(e,t){this.axios.get("/api/led/test",{params:{hue:t}}),this.$store.commit("hourlyHue",{index:e,hue:t})},save:function(){var e={},t=0,s=!0,a=!1,o=void 0;try{for(var r,i=z()(this.hourlyHues);!(s=(r=i.next()).done);s=!0){var n=r.value;e["h"+t]=n,t++}}catch(l){a=!0,o=l}finally{try{s||null==i.return||i.return()}finally{if(a)throw o}}this.axios.get("/api/led/hourlyColors",{params:e})}}},G=K,F=Object(d["a"])(G,q,A,!1,null,null,null);F.options.__file="Colors-Hourly.vue";var J=F.exports,L={name:"home",computed:{mode:{get:function(){return this.$store.state.leds.mode},set:function(e){this.$store.commit("ledMode",e),this.axios.get("/api/led/mode",{params:{mode:e}})}}},components:{ColorsSingle:P,ColorsWords:V,ColorsHourly:J}},R=L,U=(s("4432"),Object(d["a"])(R,w,_,!1,null,null,null));U.options.__file="Colors.vue";var Z=U.exports,Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("h1",[e._v("Over de woordklok")]),s("p",[e._v("\n  Deze woordklok is bij Hackerspace Bitlair gebouwd.\n  Voor meer informatie over Bitlair (eerst met wifi netwerk verbinden) "),s("a",{attrs:{href:"https://github.com/bitlair"}},[e._v("Bitlair")])]),s("p",[e._v("        \n  Meer over de klok zelf: "),s("a",{attrs:{href:"https://github.com/bitlair/wordclock"}},[e._v("https://github.com/bitlair/wordclock")])]),s("h1",[e._v("Credits")]),e._v("\n  Deze klok is een uitbreiding op de vorige Bitlair wordklok door voormalig Bitlair member Kartoffel (Niek):        \n  "),s("a",{attrs:{href:"https://github.com/niekproductions/word-clock"}},[e._v("Niekproductions")]),e._v("."),s("br"),e._v("\n  Dit was een uitbreiding van "),s("a",{attrs:{href:"https://bitbucket.org/sjoerdtimmer/ledclock"}},[e._v("de Randomdata klok")]),e._v(","),s("br"),e._v("\n  wat weer een uitbreiding was van "),s("a",{attrs:{href:"https://bitbucket.org/vdham/wordclock.git"}},[e._v(" Sjoerd")])])}],Y={},ee=Object(d["a"])(Y,Q,X,!1,null,null,null);ee.options.__file="About.vue";var te=ee.exports,se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("h1",[e._v("Netwerkconfiguratie")]),"connected"===e.wifi.status?s("b-alert",{attrs:{variant:"success",show:""}},[e._v("\n    De woordklok is op dit moment verbonden met het WiFi-netwerk '"+e._s(e.wifi.ssid)+"'\n  ")]):e._e(),s("h3",[e._v("Beschikbare netwerken")]),s("b-table",{attrs:{striped:"",hover:"",items:e.networks,fields:e.fields},scopedSlots:e._u([{key:"connect",fn:function(t){return[s("button",{on:{click:function(s){e.select(t.item)}}},[e._v("selecteer")])]}}])}),s("br"),s("br"),s("h3",[e._v("Verbinden met netwerk")]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"ssid"}},[e._v("SSID")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.ssid,expression:"ssid"}],staticClass:"col-sm-10 form-control",attrs:{type:"text",id:"ssid"},domProps:{value:e.ssid},on:{input:function(t){t.target.composing||(e.ssid=t.target.value)}}})]),s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"password"}},[e._v("Wachtwoord")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"col-sm-10 form-control",attrs:{type:"password",id:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),s("br"),s("button",{staticClass:"btn btn-primary",on:{click:e.connect}},[e._v("Verbinden")]),s("br")],1)},ae=[],oe={name:"Wifi",computed:Object(l["b"])(["wifi"]),data:function(){return{networks:[],fields:[{key:"ssid",label:"SSID"},{key:"rssi",label:"Signaalsterkte"},{key:"channel",label:"Kanaal"},{key:"encryption",label:"Beveiliging"},{key:"connect",label:"Verbinden"}],ssid:"",password:""}},methods:{updateNetworks:function(){var e=this;this.axios.get("/api/wifi/networks").then(function(t){e.networks=t.data})},select:function(e){this.ssid=e.ssid},connect:function(){this.ssid.length&&this.axios.get("/api/wifi/connect",{params:{ssid:this.ssid,password:this.password}})}},beforeDestroy:function(){clearInterval(this.polling)},created:function(){var e=this;this.polling=setInterval(function(){e.updateNetworks()},6e4),this.updateNetworks()}},re=oe,ie=Object(d["a"])(re,se,ae,!1,null,null,null);ie.options.__file="Wifi.vue";var ne=ie.exports,le=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("h1",[e._v("Geavanceerde instellingen")]),s("h3",[e._v("Lichtsterkte")]),s("div",{staticClass:"advancedGroup"},[s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.brightnessType,expression:"brightnessType"}],staticClass:"form-check-input",attrs:{type:"radio",id:"fixed",value:"fixed"},domProps:{checked:e._q(e.brightnessType,"fixed")},on:{change:function(t){e.brightnessType="fixed"}}}),s("label",{staticClass:"form-check-label",attrs:{for:"fixed"}},[e._v("Vaste lichtsterkte")])]),s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.brightnessType,expression:"brightnessType"}],staticClass:"form-check-input",attrs:{type:"radio",id:"ldr",value:"ldr"},domProps:{checked:e._q(e.brightnessType,"ldr")},on:{change:function(t){e.brightnessType="ldr"}}}),s("label",{staticClass:"form-check-label",attrs:{for:"ldr"}},[e._v("Op basis van lichtsensor")])]),s("div",{staticClass:"form-check"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.brightnessType,expression:"brightnessType"}],staticClass:"form-check-input",attrs:{type:"radio",id:"time",value:"time"},domProps:{checked:e._q(e.brightnessType,"time")},on:{change:function(t){e.brightnessType="time"}}}),s("label",{staticClass:"form-check-label",attrs:{for:"time"}},[e._v("Op tijd")])]),s("br"),"fixed"===e.brightnessType?s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"fixedBrightness"}},[e._v("Lichtsterkte")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.max,expression:"max"}],staticClass:"col-sm-10 form-control",attrs:{type:"range",min:"0",max:"255",id:"fixedBrightness"},domProps:{value:e.max},on:{__r:function(t){e.max=t.target.value}}})]):e._e(),"time"===e.brightnessType?s("div",{staticClass:"form-row"},[s("div",{staticClass:"form-group col-md-6"},[s("label",{attrs:{for:"startTime"}},[e._v("Starttijd (naar maximum)")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.startHour,expression:"startHour"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"23",id:"startTime"},domProps:{value:e.startHour},on:{input:function(t){t.target.composing||(e.startHour=t.target.value)}}})]),s("div",{staticClass:"form-group col-md-6"},[s("label",{attrs:{for:"endTime"}},[e._v("Eindtijd (naar minimum)")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.endHour,expression:"endHour"}],staticClass:"form-control",attrs:{type:"number",min:"0",max:"23",id:"endTime"},domProps:{value:e.endHour},on:{input:function(t){t.target.composing||(e.endHour=t.target.value)}}})])]):e._e(),"ldr"===e.brightnessType||"time"===e.brightnessType?s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"minBrightness"}},[e._v("Minimum (donker)")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.min,expression:"min"}],staticClass:"col-sm-10 form-control",attrs:{type:"range",min:"0",max:"255",id:"minBrightness"},domProps:{value:e.min},on:{__r:function(t){e.min=t.target.value}}})]):e._e(),"ldr"===e.brightnessType||"time"===e.brightnessType?s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"maxBrightness"}},[e._v("Maximum (licht)")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.max,expression:"max"}],staticClass:"col-sm-10 form-control",attrs:{type:"range",min:"0",max:"255",id:"maxBrightness"},domProps:{value:e.max},on:{__r:function(t){e.max=t.target.value}}})]):e._e(),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"},on:{click:e.saveBrightness}},[e._v("Opslaan")])]),s("br"),s("br"),s("h3",[e._v("Software updates")]),s("p",[e._v("De software voor de woordklok bestaat uit twee delen, namelijk de firmware voor de klok zelf en de gebruikers interface. Deze moeten als afzonderlijke bestanden worden geupload.")]),s("b-alert",{attrs:{variant:"warning",show:""}},[e._v("\n  Volg altijd de bij de software geleverde instructies, anders is er een kans dat je woordklok niet meer werkt. Mocht dit gebeuren dan kan je altijd via de Arduino IDE nieuwe software uploaden, of langskomen bij Bitlair.")]),e._m(0)],1)},ue=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"advancedGroup"},[s("h5",[e._v("Firmware")]),s("form",{attrs:{method:"post",action:"/api/update/flash",enctype:"multipart/form-data"}},[s("div",{staticClass:"custom-file"},[s("input",{staticClass:"custom-file-input",attrs:{type:"file",name:"update",id:"flashfile",required:""}}),s("label",{staticClass:"custom-file-label",attrs:{for:"flashfile"}},[e._v("Kies bestand")])]),s("br"),s("br"),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Uploaden")])]),s("br"),s("br"),s("h5",[e._v("Gebruikersinterface")]),s("form",{attrs:{method:"post",action:"/api/update/spiffs",enctype:"multipart/form-data"}},[s("div",{staticClass:"custom-file"},[s("input",{staticClass:"custom-file-input",attrs:{type:"file",name:"update",id:"flashfile",required:""}}),s("label",{staticClass:"custom-file-label",attrs:{for:"flashfile"}},[e._v("Kies bestand")])]),s("br"),s("br"),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Uploaden")])])])}],ce={name:"Advanced",computed:{brightnessType:{get:function(){return this.$store.state.leds.brightness.mode},set:function(e){this.$store.commit("brightnessType",e)}},min:{get:function(){return this.$store.state.leds.brightness.min},set:function(e){this.$store.commit("minBrightness",e)}},max:{get:function(){return this.$store.state.leds.brightness.max},set:function(e){this.$store.commit("maxBrightness",e)}},startHour:{get:function(){return this.$store.state.leds.brightness.startHour},set:function(e){this.$store.commit("brightnessStartHour",e)}},endHour:{get:function(){return this.$store.state.leds.brightness.endHour},set:function(e){this.$store.commit("brightnessEndHour",e)}},hostname:{get:function(){return this.$store.state.hostname},set:function(e){this.$store.commit("hostname",e)}}},methods:{saveBrightness:function(){this.axios.get("/api/led/brightness",{params:{type:this.$store.state.leds.brightness.mode,min:this.$store.state.leds.brightness.min,max:this.$store.state.leds.brightness.max,startHour:this.$store.state.leds.brightness.startHour,endHour:this.$store.state.leds.brightness.endHour}})},setHostname:function(){this.axios.get("/api/hostname",{params:{hostname:this.$store.state.hostname}})}}},de=ce,me=(s("3d9e"),Object(d["a"])(de,le,ue,!1,null,null,null));me.options.__file="Advanced.vue";var fe=me.exports;a["a"].use(g["a"]);var pe=new g["a"]({routes:[{path:"/",name:"colors",component:Z},{path:"/about",name:"about",component:te},{path:"/wifi",name:"wifi",component:ne},{path:"/advanced",name:"advanced",component:fe}]}),ve=s("bc3a"),he=s.n(ve),be=s("a7fe"),ge=s.n(be),we=s("9f7b");s("f9e3"),s("2dd8"),s("e6e8");a["a"].use(l["a"]),a["a"].use(ge.a,he.a),a["a"].use(we["a"]),a["a"].config.productionTip=!1,a["a"].axios.get("/api/status").then(function(e){var t=new l["a"].Store({state:e.data,mutations:{ledMode:function(e,t){e.leds.mode=t},singleHue:function(e,t){e.leds.singleHue=t},wordHue:function(e,t){e.leds.wordHues[t.index]=t.hue},hourlyHue:function(e,t){e.leds.hourlyHues[t.index]=t.hue},maxBrightness:function(e,t){e.leds.brightness.max=t},minBrightness:function(e,t){e.leds.brightness.min=t},brightnessType:function(e,t){e.leds.brightness.mode=t},brightnessStartHour:function(e,t){e.leds.brightness.startHour=t},brightnessEndHour:function(e,t){e.leds.brightness.endHour=t},hostname:function(e,t){e.hostname=t}}});new a["a"]({el:"#app",router:pe,store:t,render:function(e){return e(b)}})})},"5c48":function(e,t,s){},6977:function(e,t,s){e.exports=s.p+"img/bitlair.2949e8f5.svg"},"7c55":function(e,t,s){"use strict";var a=s("5c48"),o=s.n(a);o.a},"87bb":function(e,t,s){"use strict";var a=s("91d3"),o=s.n(a);o.a},"91d3":function(e,t,s){},dfa7:function(e,t,s){}});
//# sourceMappingURL=app.2b35ff0f.js.map