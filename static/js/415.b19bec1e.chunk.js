"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{415:function(e,t,r){r.r(t);var n=r(439),s=r(791),i=r(689),u=r(87),c=r(222),a=r(531),l=r(184),o=new a.Z;t.default=function(){document.title="Trending";var e=(0,c.Z)(),t=e.base_url,r=e.poster_sizes,a=(0,s.useState)(null),f=(0,n.Z)(a,2),h=f[0],p=f[1],d=(0,i.TH)();if((0,s.useEffect)((function(){o.getMovie("trending").then((function(e){var t=e.results;return p(t)}))}),[]),h)return(0,l.jsx)("ul",{children:h.map((function(e){var n=e.id,s=e.poster_path,i=e.title;return(0,l.jsx)("li",{children:(0,l.jsxs)(u.rU,{to:"movies/".concat(n),state:{from:d},children:[(0,l.jsx)("img",{src:t+r[3]+s,alt:i}),(0,l.jsx)("p",{children:i})]})},n)}))})}}}]);
//# sourceMappingURL=415.b19bec1e.chunk.js.map