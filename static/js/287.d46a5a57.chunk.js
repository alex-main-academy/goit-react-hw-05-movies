"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[287],{287:function(e,i,n){n.r(i),n.d(i,{default:function(){return h}});var t,a=n(439),s=n(791),l=n(87),r=n(689),o={details__button:"MovieDetails_details__button__da+Ht",details__wrapper:"MovieDetails_details__wrapper__Ivzr3",details__image:"MovieDetails_details__image__gX2vt",details__info:"MovieDetails_details__info__+B8ON",details__name:"MovieDetails_details__name__aL4gU",info__list:"MovieDetails_info__list__lbFXV"},c=n(168),_=(0,n(444).ZP)(l.OL)(t||(t=(0,c.Z)(["\n  display: block;\n  text-decoration: none;\n  font-weight: bold;\n  padding: 7px 15px;\n  font-size: 15px;\n  color: black;\n  border-radius: 10px;\n  transition-duration: 300ms;\n\n  &.active {\n    background-color: rgb(28, 165, 190);\n    color: white;\n  }\n\n  :hover:not(.active) {\n    color: rgb(28, 165, 190);\n  }\n"]))),d=n(184),h=function(){var e=(0,r.UO)().movieId,i=(0,s.useState)(null),n=(0,a.Z)(i,2),t=n[0],c=n[1],h=(0,s.useState)({}),u=(0,a.Z)(h,2),f=u[0],m=u[1],p=(0,r.TH)();if((0,s.useEffect)((function(){fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(e.toString(),"?api_key=").concat("40e5fb6b16c3c0f0cef94ac33091be49","&language=en-US")).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then(c).catch((function(e){return console.log(e)})),m(p)}),[e,p]),!t)return null;var v=t.title,x=t.poster_path,j=t.overview,b=t.genres;return(0,d.jsxs)("section",{children:[(0,d.jsx)(l.rU,{to:f.state?f.state.from:"/",className:o.details__button,children:"Go back"}),(0,d.jsxs)("div",{className:o.details__wrapper,children:[(0,d.jsx)("div",{className:o.details__image,children:(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(x),alt:"film descr"})}),(0,d.jsxs)("div",{className:o.details__info,children:[(0,d.jsx)("h2",{children:v}),(0,d.jsx)("p",{className:o.details__name,children:"Overview:"}),(0,d.jsx)("p",{children:j}),(0,d.jsx)("p",{className:o.details__name,children:"Genres:"}),(0,d.jsx)("ul",{children:b.map((function(e){var i=e.id,n=e.name;return(0,d.jsx)("li",{children:n},i)}))})]})]}),(0,d.jsx)("p",{children:"Additional information"}),(0,d.jsxs)("ul",{className:o.info__list,children:[(0,d.jsx)("li",{children:(0,d.jsx)(_,{to:"cast",className:o.info__link,children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(_,{to:"reviews",className:o.info__link,children:"Reviews"})})]}),(0,d.jsx)(s.Suspense,{fallback:(0,d.jsx)("p",{children:"Loading..."}),children:(0,d.jsx)(r.j3,{})})]})}}}]);
//# sourceMappingURL=287.d46a5a57.chunk.js.map