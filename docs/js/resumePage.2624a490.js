(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["resumePage"],{"0215":function(t,e,s){},"0a5c":function(t,e,s){"use strict";var n=s("8129"),a=s.n(n);a.a},"16d4":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"logo",attrs:{id:"Logo"}},[n("div",{staticClass:"logo"},[n("h1",{staticClass:"Chloe"},[n("svg",{attrs:{viewBox:"0 0 160 29",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("image",{attrs:{"xlink:href":s("7f37"),x:"0",y:"0",width:"160",height:"29"}})])]),n("h1",{staticClass:"Guo"},[n("svg",{attrs:{viewBox:"0 0 98 29",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("image",{attrs:{"xlink:href":s("002e"),x:"0",y:"0",width:"98",height:"29"}})])])])])},a=[],r={data:function(){return{}},methods:{logo_style:function(t){this.$refs.logo.classList.add(t)}}},o=r,i=(s("0a5c"),s("2877")),l=Object(i["a"])(o,n,a,!1,null,"98b4b190",null);e["a"]=l.exports},"47a3":function(t,e,s){"use strict";var n=s("9d20"),a=s.n(n);a.a},"65f0":function(t,e,s){var n=s("861d"),a=s("e8b5"),r=s("b622"),o=r("species");t.exports=function(t,e){var s;return a(t)&&(s=t.constructor,"function"!=typeof s||s!==Array&&!a(s.prototype)?n(s)&&(s=s[o],null===s&&(s=void 0)):s=void 0),new(void 0===s?Array:s)(0===e?0:e)}},"7db0":function(t,e,s){"use strict";var n=s("23e7"),a=s("b727").find,r=s("44d2"),o=s("ae40"),i="find",l=!0,c=o(i);i in[]&&Array(1)[i]((function(){l=!1})),n({target:"Array",proto:!0,forced:l||!c},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(i)},8129:function(t,e,s){},"9d20":function(t,e,s){},a63b:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"page",attrs:{id:"ResumePage"}},[s("Navbar",{ref:"navbar"}),s("div",{ref:"background_color",staticClass:"background-color"},[s("div",{staticClass:"resume"},[t._l(t.resumePages,(function(e){return s("div",{key:e.slug,staticClass:"resume-list"},[s("h2",{staticClass:"main-title",attrs:{id:e.slug},domProps:{innerHTML:t._s(e.slug)}}),s("div",{staticClass:"resume-item"},t._l(e.content,(function(e){return s("div",{key:e.number,staticClass:"content"},[s("h3",{staticClass:"number"},[t._v(t._s(e.number))]),s("h3",{staticClass:"title",domProps:{innerHTML:t._s(e.title)}}),s("ResumeContent",{staticClass:"ResumeContent",attrs:{content:e}})],1)})),0)])})),s("div",{ref:"footer",staticClass:"footer"},[s("Footer")],1)],2),s("div",{staticClass:"logo"},[s("Logo",{ref:"logo"})],1)]),s("LayoutEnterScroll")],1)},a=[],r=(s("7db0"),s("1ca9")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"ResumeContent"}},["01"===t.content.number?s("div",{staticClass:"content"},[s("img",{staticClass:"my-photo",attrs:{src:t.content.myPhoto,alt:""}}),s("div",{staticClass:"name"},[s("h4",{staticClass:"chinese-name"},[t._v(t._s(t.content.chineseName))]),s("h6",{staticClass:"english-name"},[t._v(t._s(t.content.englishName))])]),s("h5",{staticClass:"profession"},[t._v(t._s(t.content.profession))]),s("div",{staticClass:"introduction"},t._l(t.content.introduction,(function(e,n){return s("p",{key:n},[t._v(" "+t._s(e)+" ")])})),0)]):t._e(),"02"===t.content.number?s("div",{staticClass:"content"},[s("ul",{staticClass:"experiences"},t._l(t.content.experienceLists,(function(e,n){return s("li",{key:n,staticClass:"experience-list"},[e.sort?s("span",{staticClass:"sort"},[t._v(t._s(e.sort))]):t._e(),e.dateStart?s("span",{staticClass:"date"},[t._v(t._s(e.dateStart)+" - "+t._s(e.dateEnd))]):t._e(),e.job?s("span",{staticClass:"job"},[t._v(t._s(e.job))]):t._e(),e.dot?s("img",{staticClass:"dot",attrs:{src:e.dot,alt:""}}):t._e()])})),0)]):t._e(),"03"===t.content.number?s("div",{staticClass:"content"},[s("ul",t._l(t.content.programmingSkills,(function(e,n){return s("li",{key:n,staticClass:"programming-skill-list"},[t._v(" "+t._s(e)+" ")])})),0)]):t._e(),"04"===t.content.number?s("div",{staticClass:"content design-skills"},[s("ul",t._l(t.content.designSkills,(function(e,n){return s("li",{key:n,staticClass:"design-skill-list"},[s("div",{staticClass:"level"},[s("div",{staticClass:"background"},[s("div",{staticClass:"line"},[s("div",{staticClass:"before"}),s("div",{staticClass:"after",style:{transform:"rotateZ("+360*(e.level-.5)+"deg)"}})])])]),s("span",{staticClass:"skill-name"},[t._v(t._s(e.skillName))])])})),0)]):t._e()])},i=[],l={props:{content:Object}},c=l,u=(s("47a3"),s("2877")),f=Object(u["a"])(c,o,i,!1,null,"4662f1f8",null),d=f.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{attrs:{id:"Footer"}},[s("ul",{staticClass:"resume-menu"},t._l(t.resumePage,(function(e){return s("li",{key:e.slug,staticClass:"resume-menu-item"},[s("a",{staticClass:"resume-menu-link",attrs:{href:"javascript:;"},on:{click:function(s){return t.scroll_to_hash(e.slug)}}},[t._v(t._s(e.slug))])])})),0),s("ul",{staticClass:"page-menu"},[t._l(t.worksHomePage,(function(e){return s("li",{key:e.slug,staticClass:"page-menu-item"},[s("router-link",{staticClass:"page-menu-link",attrs:{to:{name:"worksHomePage",params:{slug:e.slug}}}},[t._v(" "+t._s(e.slug)+" ")])],1)})),t._l(t.contactPage,(function(e){return s("li",{key:e.slug,staticClass:"page-menu-item"},[s("router-link",{staticClass:"page-menu-link",attrs:{to:{name:"contactPage",params:{slug:e.slug}}}},[t._v(" "+t._s(e.slug)+" ")])],1)}))],2),s("p",{staticClass:"all-right-reserved"},[t._v(t._s(t.allRightReserved))])])},m=[],v={data:function(){return{worksHomePage:r["a"].worksHomePage,resumePage:r["a"].resumePage,contactPage:r["a"].contactPage,allRightReserved:r["a"].allRightReserved}},methods:{scroll_to_hash:function(t){document.querySelector("#"+t).scrollIntoView({behavior:"smooth",block:"center"})}}},h=v,_=(s("fd3f"),Object(u["a"])(h,g,m,!1,null,"1553a508",null)),p=_.exports,b=s("16d4"),C=s("7106"),k=s("fc47"),w={components:{ResumeContent:d,Footer:p,Logo:b["a"],Navbar:C["a"],LayoutEnterScroll:k["a"]},data:function(){return{resumePages:r["a"].resumePage,MenuButtonFontColor:"#000000",logoAddress:s("e347"),hash:""}},computed:{resumePage:function(){var t=this;return r["a"].resumePage.find((function(e){return e.slug===t.$route.params.slug}))}},mounted:function(){this.$refs.navbar.menu_style(this.MenuButtonFontColor,1),this.$refs.navbar.logo_style(this.logoAddress,"logo_still_hide"),this.$refs.logo.logo_style("logo_mobile_show"),this.hash=this.$route.fullPath.substr(7),""!=this.hash&&document.querySelector(this.hash).scrollIntoView({block:"center"})},created:function(){window.addEventListener("scroll",this.page_scroll,!0)},destroyed:function(){window.removeEventListener("scroll",this.page_scroll,!0)},methods:{page_scroll:function(){this.$refs.background_color.scrollTop>=this.$refs.footer.offsetTop?this.$refs.background_color.classList.add("orange_background"):this.$refs.background_color.classList.remove("orange_background")}}},y=w,x=(s("b934"),Object(u["a"])(y,n,a,!1,null,"28d85eec",null));e["default"]=x.exports},ae40:function(t,e,s){var n=s("83ab"),a=s("d039"),r=s("5135"),o=Object.defineProperty,i={},l=function(t){throw t};t.exports=function(t,e){if(r(i,t))return i[t];e||(e={});var s=[][t],c=!!r(e,"ACCESSORS")&&e.ACCESSORS,u=r(e,0)?e[0]:l,f=r(e,1)?e[1]:void 0;return i[t]=!!s&&!a((function(){if(c&&!n)return!0;var t={length:-1};c?o(t,1,{enumerable:!0,get:l}):t[1]=1,s.call(t,u,f)}))}},b727:function(t,e,s){var n=s("0366"),a=s("44ad"),r=s("7b0b"),o=s("50c4"),i=s("65f0"),l=[].push,c=function(t){var e=1==t,s=2==t,c=3==t,u=4==t,f=6==t,d=5==t||f;return function(g,m,v,h){for(var _,p,b=r(g),C=a(b),k=n(m,v,3),w=o(C.length),y=0,x=h||i,P=e?x(g,w):s?x(g,0):void 0;w>y;y++)if((d||y in C)&&(_=C[y],p=k(_,y,b),t))if(e)P[y]=p;else if(p)switch(t){case 3:return!0;case 5:return _;case 6:return y;case 2:l.call(P,_)}else if(u)return!1;return f?-1:c||u?u:P}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},b934:function(t,e,s){"use strict";var n=s("fbc5"),a=s.n(n);a.a},d7c7:function(t,e,s){},e8b5:function(t,e,s){var n=s("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}},fbc5:function(t,e,s){},fc47:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{ref:"background",staticClass:"background",attrs:{id:"LayoutEnterScroll"}})},a=[],r={mounted:function(){var t=this;setTimeout((function(){t.$refs.background.style.pointerEvents="none"}),1600)}},o=r,i=(s("fe86"),s("2877")),l=Object(i["a"])(o,n,a,!1,null,"0f114993",null);e["a"]=l.exports},fd3f:function(t,e,s){"use strict";var n=s("d7c7"),a=s.n(n);a.a},fe86:function(t,e,s){"use strict";var n=s("0215"),a=s.n(n);a.a}}]);
//# sourceMappingURL=resumePage.2624a490.js.map