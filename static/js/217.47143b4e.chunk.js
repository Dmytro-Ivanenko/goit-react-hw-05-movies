"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[217],{217:function(t,e,r){r.r(e),r.d(e,{default:function(){return v}});var n=r(5861),a=r(9439),c=r(7757),s=r.n(c),u=r(2791),i=r(7689),o=r(2743),p="castList_castList__Nczgk",f="castList_img__Du80H",l=r(184),h=function(t){var e=t.cast;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h3",{children:"Cast"}),(0,l.jsx)("ul",{className:p,children:null===e||void 0===e?void 0:e.map((function(t){var e=t.id,r=t.name,n=t.character,a=t.profile_path;return(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{className:"".concat(f),src:null===a?"https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-20.jpg":"https://image.tmdb.org/t/p/w500".concat(a),alt:r}),(0,l.jsxs)("p",{children:["Name: ",r]}),(0,l.jsxs)("p",{children:["Character: ",n]})]},e)}))})]})},d=r(3793),v=function(){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),r=e[0],c=e[1],p=(0,u.useState)(!1),f=(0,a.Z)(p,2),v=f[0],m=f[1],x=(0,u.useState)(null),g=(0,a.Z)(x,2),b=g[0],w=g[1],_=(0,i.UO)().movieId;return(0,u.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,m(!0),t.next=4,(0,d._4)(_,"/credits");case 4:e=t.sent,c(e.cast),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),w(t.t0.message);case 11:return t.prev=11,m(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,l.jsxs)("div",{children:[v&&(0,l.jsx)(o.Z,{}),b&&(0,l.jsx)("p",{children:b.massage}),(0,l.jsx)(h,{cast:r})]})}},3793:function(t,e,r){r.d(e,{Rw:function(){return i},_4:function(){return o},z1:function(){return u}});var n=r(5861),a=r(7757),c=r.n(a),s=r(3263).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"d80261a2a92a1b96bfd0993be732c39d"}}),u=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/search/movie",{params:{query:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(){var e,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.get("/trending/movie/day");case 2:return e=t.sent,r=e.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(e){var r,n,a,u=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:"",t.next=3,s.get("/movie/".concat(e).concat(r));case 3:return n=t.sent,a=n.data,t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=217.47143b4e.chunk.js.map