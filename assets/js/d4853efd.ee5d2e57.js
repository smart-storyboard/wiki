"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[78],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),g=i,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9712:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},s="Course Settings (Admin)",o={unversionedId:"admin/course-settings",id:"admin/course-settings",title:"Course Settings (Admin)",description:"Admin users can view and modify course configuration settings in the Course Config view. Here, the Course Readings list link can also be added and edited, which provides all users with a hyperlink to the Course Readings from the Dashboard.",source:"@site/docs/admin/course-settings.md",sourceDirName:"admin",slug:"/admin/course-settings",permalink:"/wiki/admin/course-settings",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"The Dashboard",permalink:"/wiki/admin/dashboard"},next:{title:"Workflow using the Tasks View",permalink:"/wiki/admin/workflow"}},l={},d=[{value:"Tags",id:"tags",level:2},{value:"Configs",id:"configs",level:2},{value:"Structure",id:"structure",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"course-settings-admin"},"Course Settings (Admin)"),(0,i.kt)("p",null,"Admin users can view and modify course configuration settings in the Course Config view. Here, the Course Readings list link can also be added and edited, which provides all users with a hyperlink to the Course Readings from the Dashboard."),(0,i.kt)("h2",{id:"tags"},"Tags"),(0,i.kt)("p",null,"Admin users can create/edit/remove tags under the Tags tab in the Course Settings view. Each tag can have a display name and a colour assigned to it. Enrolled users can then attach existing tags to blocks."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"settings-tags.png",src:n(8649).Z,width:"1564",height:"613"}))),(0,i.kt)("h2",{id:"configs"},"Configs"),(0,i.kt)("p",null,"Course-level configurations can be viewed and modified under the Config tab. Here, admin users can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"change the default budget time per module")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"change duration type (Module, Week, Section)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"change lesson display name (Lesson, Activity, Part, Page, Topic)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"show/hide Orientation (Module 0)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"show/hide Welcome (Lesson 0)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"add/edit the Course Readings list link, which provides all users with a hyperlink to the Course Readings from the Dashboard."))),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"settings-configs.png",src:n(4795).Z,width:"1570",height:"946"}))),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("p",null,"From the Structure tab in Course Settings, the Admin can add lessons, edit the names of modules/lessons, and override budget time for specific modules with the ",(0,i.kt)("strong",{parentName:"p"},"Add/Edit mode"),"; and when switched to ",(0,i.kt)("strong",{parentName:"p"},"Reorder mode"),", lessons can be dragged and dropped into other Modules."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"settings-structure.png",src:n(5518).Z,width:"1562",height:"1245"}))))}p.isMDXComponent=!0},4795:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings-configs-de089a4d0643899b62e37b3a44f3abaf.png"},5518:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings-structure-dea1f2cbefd954a7217590964f7e839c.png"},8649:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings-tags-414dffbec9f7b21ba38b7dbfe4fbb02c.png"}}]);