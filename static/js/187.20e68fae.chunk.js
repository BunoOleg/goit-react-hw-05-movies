"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[187],{6187:function(t,n,e){e.r(n),e.d(n,{default:function(){return b}});var r,a,u,i,o=e(5861),c=e(885),s=e(7757),p=e.n(s),f=e(2791),l=e(7324),v=e(168),d=e(6444),m=d.ZP.div(r||(r=(0,v.Z)(["\n\tpadding: 20px;\n"]))),h=d.ZP.ul(a||(a=(0,v.Z)(["\n\tfont-size: 18px;\n"]))),g=d.ZP.li(u||(u=(0,v.Z)(["\n\t&:not(:last-of-type) {\n\t\tmargin-bottom: 20px;\n\t}\n"]))),x=d.ZP.p(i||(i=(0,v.Z)(["\n\tfont-size: 18px;\n\t&:not(:last-of-type) {\n\t\tmargin-bottom: 10px;\n\t}\n\n\t&:first-of-type {\n\t\tfont-weight: 600;\n\t}\n\n\t&:nth-of-type(2) {\n\t\tfont-size: 14px;\n\t}\n\n\t&:nth-of-type(3) {\n\t\ttext-indent: 30px;\n\t}\n"]))),y=e(6871),w=e(184),b=function(){var t=(0,f.useState)([]),n=(0,c.Z)(t,2),e=n[0],r=n[1],a=(0,y.UO)().movieId;return(0,f.useEffect)((function(){var t=function(){var t=(0,o.Z)(p().mark((function t(){var n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.sv)(Number(a));case 3:n=t.sent,r(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[a]),(0,w.jsx)(m,{children:0!==e.length?(0,w.jsx)(h,{children:e&&e.map((function(t){var n=t.content,e=t.author_details,r=t.id;return(0,w.jsxs)(g,{"data-id":r,children:[(0,w.jsxs)(x,{children:["Author:"," ",e.name?e.name:"Anonymous"]}),(0,w.jsxs)(x,{children:["Rating: ",e.rating]}),(0,w.jsx)(x,{children:n})]},r)}))}):(0,w.jsx)(x,{children:"We don't have any reviews for this movie"})})}},756:function(t,n,e){e.d(n,{aE:function(){return o},Lu:function(){return s},pI:function(){return p}});var r={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},a=e(2075),u=function(t){return t.map((function(t){return r["".concat(t)]})).join(", ")},i=function(t){return t.map((function(t){return t.name})).join(", ")},o=function(t){return t?"https://image.tmdb.org/t/p/w500/".concat(t):"".concat(a)},c=function(t){return t?t.slice(0,4):t},s=function(t){return t.map((function(t){var n=t.genres,e=void 0===n?null:n,r=t.genre_ids,a=void 0===r?null:r,s=t.id,p=t.original_title,f=t.name,l=t.overview,v=t.popularity,d=t.poster_path,m=t.release_date,h=t.vote_average,g=t.vote_count;return{genre:a?u(a):i(e),id:s,title:p||f,about:l,popularity:v,img:o(d),releaseDate:m?c(m):"",vote:h,votes:g}}))},p=function(t){var n=t.poster_path,e=t.title,r=t.original_title,a=t.vote_average,u=t.overview,s=t.genres,p=t.release_date;return{genre:i(s),title:r||e,about:u,img:o(n),releaseDate:p?c(p):"",vote:a}}},7324:function(t,n,e){e.d(n,{BG:function(){return p},FE:function(){return f},fU:function(){return l},sv:function(){return v},wr:function(){return s}});var r=e(5861),a=e(7757),u=e.n(a),i=e(4569),o=e.n(i),c=e(756);o().defaults.baseURL="https://api.themoviedb.org/3",o().defaults.params={api_key:"8d4e280172e5816e08e3244a8fffe008",include_adult:!1,language:"en-US"};var s=function(){var t=(0,r.Z)(u().mark((function t(){var n,e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/trending/all/day?");case 2:return n=t.sent,e=n.data,r=(0,c.Lu)(e.results),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/movie/".concat(n,"?"));case 2:return e=t.sent,r=e.data,a=(0,c.pI)(r),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/search/movie?query=".concat(n,"&page=1"));case 2:return e=t.sent,r=e.data,a=(0,c.Lu)(r.results),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/movie/".concat(n,"/credits?"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.cast);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/movie/".concat(n,"/reviews?"));case 2:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},2075:function(t,n,e){t.exports=e.p+"static/media/noImageAvailable.ac3b9d7ddc9aab861b22.jpg"}}]);
//# sourceMappingURL=187.20e68fae.chunk.js.map