(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{11:function(t,e,c){},13:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),i=c(4),s=c(1),d=(c(9),c(10),c(11),c(0)),b=function(t){var e=t.tabs,c=t.selectedTabId,a=t.onTabSelected,n=t.selectedTab;return Object(d.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(d.jsx)("div",{className:"tabs is-boxed",children:Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{className:c===t.id&&"is-active","data-cy":"Tab",children:Object(d.jsx)("a",{href:"#".concat(t.id),"data-cy":"TabLink",onClick:function(){c!==t.id&&a(t.id)},children:t.title})},t.id)}))})}),Object(d.jsx)("div",{className:"block","data-cy":"TabContent",children:n.content})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var t=Object(s.useState)(l[0].id),e=Object(i.a)(t,2),c=e[0],a=e[1],n=l.find((function(t){return t.id===c}));return Object(d.jsxs)("div",{className:"section",children:[Object(d.jsx)("h1",{className:"title",children:"Selected tab is ".concat(n.title)}),Object(d.jsx)(b,{tabs:l,selectedTabId:c,onTabSelected:a,selectedTab:n})]})};n.a.render(Object(d.jsx)(o,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.0351df5c.chunk.js.map