"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[174],{6089:function(t,e,n){n.d(e,{Bt:function(){return d},Y5:function(){return f},d5:function(){return _},rQ:function(){return u},zk:function(){return m}});var r=n(5861),a=n(4687),o=n.n(a),c=n(1243),i="ab2cf7e1a236e63f2cc161486f07b55f",s="https://api.themoviedb.org/3";function u(){return l.apply(this,arguments)}function l(){return l=(0,r.Z)(o().mark((function t(){var e,n,r=arguments;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.length>0&&void 0!==r[0]?r[0]:1,t.next=3,c.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(i,"&language=en-US&page=").concat(e));case 3:return n=t.sent,t.abrupt("return",n.data);case 5:case"end":return t.stop()}}),t)}))),l.apply(this,arguments)}function m(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"/search/movie?api_key=").concat(i,"&query=").concat(e,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"/movie/").concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"/movie/").concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(o().mark((function t(e){var n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(s,"/movie/").concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},5658:function(t,e,n){n.d(e,{Z:function(){return u}});var r=n(7689),a=n(1087),o="movieList_movieList__vnqzm",c="movieList_movieListComponent__bWYIR",i="movieList_link__I+0hB",s=n(184);var u=function(t){var e=t.movie,n=(0,r.TH)();return(0,s.jsx)("div",{children:(0,s.jsx)("ul",{className:o,children:e.map((function(t){var e=t.id,r=t.original_title;return(0,s.jsx)("li",{className:c,children:(0,s.jsx)(a.rU,{className:i,to:"/movies/".concat(e),state:{from:n},children:r},e)},e)}))})})}},4174:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r=n(5861),a=n(9439),o=n(4687),c=n.n(o),i=n(2791),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},u=i.createContext&&i.createContext(s),l=function(){return l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},l.apply(this,arguments)},m=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n};function p(t){return t&&t.map((function(t,e){return i.createElement(t.tag,l({key:e},t.attr),p(t.child))}))}function f(t){return function(e){return i.createElement(v,l({attr:l({},t.attr)},e),p(t.child))}}function v(t){var e=function(e){var n,r=t.attr,a=t.size,o=t.title,c=m(t,["attr","size","title"]),s=a||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,c,{className:n,style:l(l({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),o&&i.createElement("title",null,o),t.children)};return void 0!==u?i.createElement(u.Consumer,null,(function(t){return e(t)})):e(s)}function _(t){return f({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]})(t)}var h=n(6089),d=n(7596),y=n(1087),b=n(5658),g=n(1326),x=n(184),w=function(){var t=(0,i.useState)([]),e=(0,a.Z)(t,2),n=e[0],o=e[1],s=(0,y.lr)(),u=(0,a.Z)(s,2),l=u[0],m=u[1],p=(0,i.useState)("idle"),f=(0,a.Z)(p,2),v=f[0],w=f[1],k=l.get("query")||"";function Z(){return Z=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w("pending"),t.next=4,(0,h.zk)(e);case 4:n=t.sent,o(n.results),w("resolved"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),w("rejected");case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),Z.apply(this,arguments)}return(0,i.useEffect)((function(){!function(t){Z.apply(this,arguments)}(k)}),[k]),(0,x.jsxs)("div",{className:g.Z.searchContainer,children:[(0,x.jsx)("h2",{children:"Search movies:"}),(0,x.jsxs)("form",{className:g.Z.form,onSubmit:function(t){t.preventDefault();var e=t.target.movie.value;e||(0,d.Am)("Enter please a movie name.",{}),m(""!==e?{query:e}:{})},children:[(0,x.jsx)("button",{className:g.Z.btnSubmit,type:"submit",children:(0,x.jsx)(_,{size:"2rem"})}),(0,x.jsx)("input",{defaultValue:k,name:"movie",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search name"})]}),"resolved"===v&&(0,x.jsx)("div",{children:n.length>0&&(0,x.jsx)(b.Z,{movie:n,Title:"Resoult movies: ".concat(k)})})]})}},1326:function(t,e){e.Z={titleHome:"Home_titleHome__Pl6f7",btnBack:"Home_btnBack__9OT62",btnLink:"Home_btnLink__5LLr-",movieDetails:"Home_movieDetails__ZPn0n",movieListDetails:"Home_movieListDetails__HVsBe",mainCont:"Home_mainCont__mFIDs",userScore:"Home_userScore__Bl1yj",btnList:"Home_btnList__3orfV",btnRevue:"Home_btnRevue__FmOZH",btnList_Reviews:"Home_btnList_Reviews__EykJn",searchContainer:"Home_searchContainer__NhX1q",form:"Home_form__sX7YN",btnSubmit:"Home_btnSubmit__UFF27"}}}]);
//# sourceMappingURL=174.d8fa0263.chunk.js.map