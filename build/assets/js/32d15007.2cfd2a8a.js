"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[305],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(a),h=o,u=m["".concat(l,".").concat(h)]||m[h]||p[h]||r;return a?n.createElement(u,s(s({ref:t},c),{},{components:a})):n.createElement(u,s({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6594:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:1},s="The Dashboard",i={unversionedId:"admin/dashboard",id:"admin/dashboard",title:"The Dashboard",description:"Dashboard",source:"@site/docs/admin/dashboard.md",sourceDirName:"admin",slug:"/admin/dashboard",permalink:"/wiki/admin/dashboard",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Administration and Configuration",permalink:"/wiki/category/administration-and-configuration"},next:{title:"Course Settings (Admin)",permalink:"/wiki/admin/course-settings"}},l={},d=[{value:"Dashboard",id:"dashboard",level:2},{value:"Production",id:"production",level:3},{value:"Time on Task",id:"time-on-task",level:3},{value:"Tasks View",id:"tasks-view",level:2},{value:"Tasks",id:"tasks",level:3},{value:"Comments",id:"comments",level:3},{value:"Untagged",id:"untagged",level:3}],c={toc:d},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-dashboard"},"The Dashboard"),(0,o.kt)("h2",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"The Dashboard provides all users with a snapshot of course development progress. The ",(0,o.kt)("strong",{parentName:"p"},"Storyboard Completion %")," is a total completion of all available Blocks, while the ",(0,o.kt)("strong",{parentName:"p"},"Lesson Completion")," is a total completion of Blocks within each Lesson. The ",(0,o.kt)("strong",{parentName:"p"},"Block Status")," is a visual indicator of the status of all Blocks within each Lesson and is summarised at a Course level above."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img_38.png",src:a(8706).Z,width:"1398",height:"530"}))),(0,o.kt)("h3",{id:"production"},"Production"),(0,o.kt)("p",null,"The Production tab of the Dashboard provides a module level production status for the course. These statuses are set within the Module view."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img_37.png",src:a(1612).Z,width:"1688",height:"594"}))),(0,o.kt)("h3",{id:"time-on-task"},"Time on Task"),(0,o.kt)("p",null,"The Time on Task tab of the Dashboard provides a report of the total student Time on Task across the course."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img_36.png",src:a(3610).Z,width:"1562",height:"706"}))),(0,o.kt)("h2",{id:"tasks-view"},"Tasks View"),(0,o.kt)("p",null,"The Smart Storyboard has a view for seeing your work to do - these either take the form of blocks you are assigned to as ",(0,o.kt)("strong",{parentName:"p"},"Tasks"),"; ",(0,o.kt)("strong",{parentName:"p"},"Comments")," you have been tagged in, as well as any ",(0,o.kt)("strong",{parentName:"p"},"Unassigned")," comments that may pertain to your work."),(0,o.kt)("h3",{id:"tasks"},"Tasks"),(0,o.kt)("p",null,"Under the Tasks tab, you\u2019ll see the blocks you have assigned to you as well as how many of them there are. Clicking on a table row here will take you to that lesson."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img_35.png",src:a(9574).Z,width:"1521",height:"863"}))),(0,o.kt)("h3",{id:"comments"},"Comments"),(0,o.kt)("p",null,"The Comments tab contains a table of any comment you are tagged in as well as when that comment was last updated. As above, clicking on an entry here will take you to the lesson that contains your comment. When on that page, you should see the comments icon in red for any block that relates to you."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img_34.png",src:a(6685).Z,width:"1518",height:"707"}))),(0,o.kt)("h3",{id:"untagged"},"Untagged"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"untagged")," tab contains a list of the comments in the course that are unassigned or otherwise not tagging someone else in them. This helps to review any comments that may have meant to have tagged someone or be general thoughts or processes inside the course authoring stage."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img_33.png",src:a(2277).Z,width:"980",height:"318"}))))}p.isMDXComponent=!0},2277:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_33-8a25c43c17413298628cd1dfe3587e4e.png"},6685:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_34-2e5a4dece239093059db35deac4e7eb0.png"},9574:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_35-0f31191fed10e3ffc579a8af759991c6.png"},3610:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_36-1bdf3324436d596618c88ade48caf862.png"},1612:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_37-5cf2bba68f7f2067acb2f2ebd2f8fc37.png"},8706:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img_38-b928f0d5dea53d48a3df4014da044efa.png"}}]);