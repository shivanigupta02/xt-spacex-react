(this["webpackJsonpxt-react-assignment"]=this["webpackJsonpxt-react-assignment"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),i=n.n(a),r=(n(13),n(2)),l=n(5),d=n(6),u=n(8),j=n(7);function o(e){var t=new URLSearchParams(window.location.search);return e.map((function(e){var n=t.get(e.name);return n&&(n=isNaN(n)?n:parseInt(n),e.selectedIndex=e.filters.indexOf(n)),e}))}n(14);var h=n(0);function f(e){var t=e.title,n=e.selectedIndex,c=e.filters;return Object(h.jsxs)("div",{className:"xt-filter",children:[Object(h.jsx)("h4",{className:"xt-filter-title",children:t}),Object(h.jsx)("ul",{className:"xt-filter-list",children:c.map((function(t,c){return Object(h.jsx)("li",{className:n===c?"selected":"",onClick:function(){return e.updateSelectedFilter(n!==c&&c)},children:t},c)}))})]})}n(16);function x(e){var t=e.filters,n=e.updateSelectedFilter;return Object(h.jsxs)("aside",{className:"xt-filters",children:[Object(h.jsx)("div",{className:"xt-filters-heading",children:"Filters"}),t.map((function(e,t){return Object(h.jsx)(f,Object(r.a)(Object(r.a)({},e),{},{updateSelectedFilter:function(e){return n(t,e)}}),t)}))]})}n(17);function b(e){var t=e.mission_name,n=e.flight_number,c=e.launch_year,s=e.launch_success,a=void 0===s?"":s,i=e.launch_landing,r=e.mission_id,l=void 0===r?[]:r,d=e.details,u=e.links.mission_patch_small;return Object(h.jsxs)("div",{className:"xt-card",children:[Object(h.jsx)("img",{src:u,alt:d}),Object(h.jsxs)("h3",{children:[t," #",n," "]}),Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Mission Ids:"})," ",l.join(", ")]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Launch Year:"})," ",c]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Successful Launch:"})," ",a?a.toString():""]}),Object(h.jsxs)("li",{children:[Object(h.jsx)("strong",{children:"Successful Landing:"})," ",i]})]})]})}var O=[{title:"Launch Year",name:"launch_year",selectedIndex:!1,filters:[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]},{title:"Successful Launch",name:"launch_success",selectedIndex:!1,filters:["true","false"]},{title:"Successful Landing",name:"land_success",selectedIndex:!1,filters:["true","false"]}],m=(n(18),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).fetchSpacexdata=function(e){var t="https://api.spacexdata.com/v3/launches?limit=100",n=[];c.state.filters.map((function(e){var t=e.selectedIndex,c=e.name,s=e.filters;!1!==t&&n.push("".concat(c,"=").concat(s[t]))})),n.length>0&&(t+="&"+n.join("&"),window.history.pushState("","","?"+n.join("&"))),fetch(t).then((function(e){return e.json()})).then((function(e){return c.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},{spacexdata:e})}))}))},c.updateSelectedFilter=function(e,t){c.setState((function(n){var c=n.filters;return c[e].selectedIndex=t,Object(r.a)(Object(r.a)({},n),{},{filters:c})}),(function(){c.fetchSpacexdata()}))},c.state={filters:o(O),spacexdata:[]},c}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.fetchSpacexdata()}},{key:"render",value:function(){var e=this.state,t=e.filters,n=e.spacexdata;return Object(h.jsxs)("div",{className:"xt-app",children:[Object(h.jsx)("div",{className:"heading",children:"SpaceX Launch Programs"}),Object(h.jsxs)("section",{className:"xt-app-container",children:[Object(h.jsx)(x,{filters:t,updateSelectedFilter:this.updateSelectedFilter}),Object(h.jsx)("main",{className:"xt-app-content",children:n.map((function(e,t){return Object(c.createElement)(b,Object(r.a)(Object(r.a)({},e),{},{key:t}))}))})]}),Object(h.jsxs)("footer",{children:[Object(h.jsx)("b",{children:"Developed by:"}),Object(h.jsx)("br",{})," Shivani"]})]})}}]),n}(s.a.Component));i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.5793b507.chunk.js.map