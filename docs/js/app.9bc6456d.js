(function(t){function a(a){for(var e,r,l=a[0],c=a[1],o=a[2],u=0,m=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);f&&f(a);while(m.length)m.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,a=0;a<n.length;a++){for(var s=n[a],e=!0,l=1;l<s.length;l++){var c=s[l];0!==i[c]&&(e=!1)}e&&(n.splice(a--,1),t=r(r.s=s[0]))}return t}var e={},i={app:0},n=[];function r(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=e,r.d=function(t,a,s){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(s,e,function(a){return t[a]}.bind(null,e));return s},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/portfolio2/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var o=0;o<l.length;o++)a(l[o]);var f=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"340e":function(t,a,s){},3602:function(t,a,s){},"38f7":function(t,a,s){"use strict";var e=s("44bc"),i=s.n(e);i.a},"44bc":function(t,a,s){},"46c8":function(t,a,s){t.exports=s.p+"img/path.6ef62aad.png"},"47a6":function(t,a,s){"use strict";var e=s("8c41"),i=s.n(e);i.a},"4e74":function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("header",{staticClass:"top_header"},[t._m(0),s("div",{staticClass:"header_bottom"},[s("div",{staticClass:"header_left"},[s("span",{staticClass:"manage"},[t._v(t._s(t.menu))])]),s("div",{staticClass:"header_center"},[s("span",[t._v(t._s(t.title))]),t._v(" "),s("span",{staticClass:"y_number"},[t._v(t._s(t.num))])]),s("div",{staticClass:"header_right"},[s("span",[s("i",{class:t.icon})])])])]),s("router-view"),s("nav",{staticClass:"tabMenu"},[s("router-link",{attrs:{to:"/friends"}},[s("i",{staticClass:"fas fa-user"}),s("span",[t._v("Friends")])]),s("router-link",{attrs:{to:"/chats"}},[s("i",{staticClass:"fas fa-comments"}),s("span",[t._v("Chats")])]),s("router-link",{attrs:{to:"/find"}},[s("i",{staticClass:"fas fa-search"}),s("span",[t._v("Find")])]),s("router-link",{attrs:{to:"/more"}},[s("i",{staticClass:"fas fa-ellipsis-h"}),s("span",[t._v("More")])])],1)],1)},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"header_top"},[s("div",{staticClass:"header_left"},[s("span",[s("i",{staticClass:"fas fa-plane"})]),s("span",[s("i",{staticClass:"fas fa-wifi"})])]),s("div",{staticClass:"header_center"},[s("span",{staticClass:"time"},[t._v("17:33")])]),s("div",{staticClass:"header_right"},[s("span",[s("i",{staticClass:"fas fa-moon"})]),s("span",[s("i",{staticClass:"fab fa-bluetooth-b"})]),s("span",{staticClass:"battery"},[t._v("100%")]),s("span",[s("i",{staticClass:"fas fa-battery-full"})])])])}],r={name:"App",components:{},data:function(){return{menu:"",title:"",num:"",icon:""}},destroy:function(){this.$off("changeData")},created:function(){var t=this;this.$on("changeData",(function(a,s,e,i){t.menu=a,t.title=s,t.num=e,t.icon=i}))}},l=r,c=(s("94de"),s("2877")),o=Object(c["a"])(l,i,n,!1,null,null,null),f=o.exports,u=s("8c4f"),m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("main",[t._m(0),s("ul",{staticClass:"chat_list"},t._l(t.chatlist,(function(t,a){return s("chat-list",{key:a,attrs:{list:t}})})),1),t._m(1)])},d=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"search_box"},[s("i",{staticClass:"fas fa-search"}),s("input",{staticClass:"index_input",attrs:{type:"text",placeholder:"Find friends, chats, Plus Friends"}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"chat_icon"},[s("i",{staticClass:"fas fa-comments"})])}],p=[{username:"Alesso",usermessage:"Hello! This is a test message!",userimage:"http://kmang89.dothome.co.kr/images/alesso.jpeg",time:"17:33"},{username:"DVLM",usermessage:"Hello! This is a test message!",userimage:"http://kmang89.dothome.co.kr/images/DVLM.jpg",time:"16:10"},{username:"Alison wonderland",usermessage:"Hello! This is a test message!",userimage:"http://kmang89.dothome.co.kr/images/alison-wonderland-smf-2019-rukes.jpg",time:"15:40"},{username:"John Doe",usermessage:"Hello! This is a test message!",userimage:"http://kmang89.dothome.co.kr/images/32575630017_7a91a91b24_o.jpg",time:"15:15"}],_=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("li",{staticClass:"chat"},[s("a",{attrs:{href:"chatting.html"}},[s("div",{staticClass:"chat_user"},[s("img",{attrs:{src:t.list.userimage,alt:"프로필사진"}}),s("div",{staticClass:"chat_preview"},[s("p",{staticClass:"user_name"},[t._v(t._s(t.list.username))]),s("span",{staticClass:"message_preview"},[t._v(t._s(t.list.usermessage))])])]),s("span",{staticClass:"chat_time"},[t._v(t._s(t.list.time))])])])},v=[],h={name:"chatlist",props:{list:Object}},g=h,C=(s("38f7"),Object(c["a"])(g,_,v,!1,null,null,null)),b=C.exports,y={name:"chats",data:function(){return{title:"chats",chatlist:p}},mounted:function(){this.$parent.$emit("changeData","Edit","Chats","","")},components:{"chat-list":b}},k=y,j=Object(c["a"])(k,m,d,!1,null,null,null),x=j.exports,$=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("main",[s("div",{staticClass:"find_menus"},[s("div",{staticClass:"find_menu"},[s("i",{staticClass:"fas fa-address-book"}),s("span",{staticClass:"find_text"},[t._v("Find")])]),s("div",{staticClass:"find_menu"},[s("i",{staticClass:"fas fa-qrcode"}),s("span",{staticClass:"find_text"},[t._v("QR Code")])]),s("div",{staticClass:"find_menu"},[s("i",{staticClass:"fas fa-mobile-alt"}),s("span",{staticClass:"find_text"},[t._v("Shake")])]),s("div",{staticClass:"find_menu"},[s("i",{staticClass:"far fa-envelope"}),s("span",{staticClass:"find_text"},[t._v("Invite via SMS")])])]),s("p",{staticClass:"recommended_friends_text"},[t._v("Recommended Friends")]),s("div",{staticClass:"recommended_friends"},[s("span",[t._v("You have no recommended friends.")])])])}],O={name:"find",data:function(){return{title:"find"}},mounted:function(){this.$parent.$emit("changeData","Edit","Find","","")}},M=O,E=(s("47a6"),Object(c["a"])(M,$,w,!1,null,null,null)),F=E.exports,S=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("main",[s("div",{staticClass:"search_box"},[s("i",{staticClass:"fas fa-search"}),s("input",{staticClass:"index_input",attrs:{type:"text",placeholder:"Find friends, chats, Plus Friends"}})]),s("div",{staticClass:"my_profile"},[s("p",[t._v("My Profile")]),s("div",{staticClass:"user_profile"},[s("div",{staticClass:"user_image"},[s("img",{attrs:{src:"http://kmang89.dothome.co.kr/images/profile.jpg",alt:"프로필사진"}}),s("a",{attrs:{href:"profile.html"}},[t._v("김명진")])])]),s("div",{staticClass:"user_profile"},[s("div",{staticClass:"user_image"},[s("img",{attrs:{src:"http://kmang89.dothome.co.kr/images/alesso.jpeg",alt:"프로필사진"}}),s("a",{attrs:{href:"#"}},[t._v("Alesso")])])])]),s("div",{staticClass:"friends"},[s("p",[t._v("Friends")]),s("div",{staticClass:"user_profile"},[s("div",{staticClass:"user_image"},[s("img",{attrs:{src:"http://kmang89.dothome.co.kr/images/DVLM.jpg",alt:"프로필사진"}}),s("a",{attrs:{href:"#"}},[t._v("DVLM")])]),s("span",[t._v("Have a good day. See you soon.")])]),s("div",{staticClass:"user_profile"},[s("div",{staticClass:"user_image"},[s("img",{attrs:{src:"http://kmang89.dothome.co.kr/images/alison-wonderland-smf-2019-rukes.jpg",alt:"프로필사진"}}),s("a",{attrs:{href:"#"}},[t._v("Alison wonderland")])]),s("span",[t._v("Have a good day. See you soon.")])]),s("div",{staticClass:"user_profile"},[s("div",{staticClass:"user_image"},[s("img",{attrs:{src:"http://kmang89.dothome.co.kr/images/marsh.jpg",alt:"프로필사진"}}),s("a",{attrs:{href:"#"}},[t._v("Marshmello")])]),s("span",[t._v("Have a good day. See you soon.")])]),s("div",{staticClass:"user_profile"},[s("div",{staticClass:"user_image"},[s("img",{attrs:{src:"http://kmang89.dothome.co.kr/images/32575630017_7a91a91b24_o.jpg",alt:"프로필사진"}}),s("a",{attrs:{href:"#"}},[t._v("John Doe")])]),s("span",[t._v("Have a good day. See you soon.")])])])])}],D={name:"friends",data:function(){return{title:"friends"}},mounted:function(){this.$parent.$emit("changeData","Manage","Friends","1","fa fa-cog fa-lg")}},A=D,T=(s("5a52"),Object(c["a"])(A,S,P,!1,null,null,null)),H=T.exports,L=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("main",[e("div",{staticClass:"my_info"},[e("div",{staticClass:"my_info_left"},[e("img",{attrs:{src:"http://kmang89.dothome.co.kr/images/profile.jpg",alt:"프로필사진"}}),e("div",{staticClass:"my_info_name"},[e("span",[t._v("김명진")]),e("span",[t._v("steha7777@gmail.com")])])]),e("div",{staticClass:"my_info_right"},[e("i",{staticClass:"fas fa-comments"})])]),e("div",{staticClass:"more_menu1"},[e("div",{staticClass:"more_menu1_list"},[e("i",{staticClass:"far fa-grin-alt"}),e("span",[t._v("Emoticons")])]),e("div",{staticClass:"more_menu1_list"},[e("i",{staticClass:"fas fa-paint-brush"}),e("span",[t._v("Themes")])]),e("div",{staticClass:"more_menu1_list"},[e("i",{staticClass:"far fa-hand-peace"}),e("span",[t._v("Plus Friend")])]),e("div",{staticClass:"more_menu1_list"},[e("i",{staticClass:"fas fa-user-circle"}),e("span",[t._v("Account")])])]),e("div",{staticClass:"plus_friends"},[e("p",[t._v("Plus Friends")]),e("div",{staticClass:"learn_more"},[e("i",{staticClass:"fas fa-info-circle"}),e("span",[t._v("Learn More")])])]),e("ul",{staticClass:"more_menu2"},[e("li",[e("i",{staticClass:"fas fa-utensils"}),e("span",[t._v("Order")])]),e("li",[e("i",{staticClass:"fas fa-home"}),e("span",[t._v("Store")])]),e("li",[e("i",{staticClass:"fas fa-tv"}),e("span",[t._v("TV Channel/Radio")])]),e("li",[e("i",{staticClass:"fas fa-pencil-alt"}),e("span",[t._v("Creation")])]),e("li",[e("i",{staticClass:"fas fa-graduation-cap"}),e("span",[t._v("Education")])]),e("li",[e("i",{staticClass:"fas fa-university"}),e("span",[t._v("Politics/Society")])]),e("li",[e("i",{staticClass:"fas fa-won-sign"}),e("span",[t._v("Finance")])]),e("li",[e("i",{staticClass:"fas fa-video"}),e("span",[t._v("Movies/Music")])])]),e("ul",{staticClass:"more_menu3"},[e("li",[e("img",{attrs:{src:s("b564"),alt:"카카오스토리"}}),e("span",[t._v("Kakao Story")])]),e("li",[e("img",{attrs:{src:s("46c8"),alt:"path"}}),e("span",[t._v("Path")])]),e("li",[e("img",{attrs:{src:s("a325"),alt:"카카오프렌즈"}}),e("span",[t._v("Kakao Friends")])])])])}],J={name:"more",data:function(){return{title:"chats"}},mounted:function(){this.$parent.$emit("changeData","","More","","fa fa-cog fa-lg")}},R=J,K=(s("dc51"),Object(c["a"])(R,L,V,!1,null,null,null)),q=K.exports;e["a"].use(u["a"]);var I=[{path:"/",name:"App",component:f},{path:"/friends",component:H,name:"friends"},{path:"/chats",component:x,name:"chats"},{path:"/find",component:F,name:"find"},{path:"/more",component:q,name:"more"},{path:"/profile",component:q,name:"profile"},{path:"/chatting",component:q,name:"chatting"}],Q=new u["a"]({mode:"history",base:"/portfolio2/",routes:I,linkActiveClass:"selected",linkExactActiveClass:""}),Y=Q;e["a"].config.productionTip=!1,new e["a"]({router:Y,render:function(t){return t(f)}}).$mount("#app")},"5a52":function(t,a,s){"use strict";var e=s("340e"),i=s.n(e);i.a},"8c41":function(t,a,s){},"94de":function(t,a,s){"use strict";var e=s("3602"),i=s.n(e);i.a},a325:function(t,a,s){t.exports=s.p+"img/kakaofriends.32331b01.png"},b564:function(t,a,s){t.exports=s.p+"img/kakaostory.2be26e74.png"},dc51:function(t,a,s){"use strict";var e=s("4e74"),i=s.n(e);i.a}});
//# sourceMappingURL=app.9bc6456d.js.map