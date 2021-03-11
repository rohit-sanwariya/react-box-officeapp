(this["webpackJsonpreact-box-officeapp"]=this["webpackJsonpreact-box-officeapp"]||[]).push([[0],{35:function(n,e,t){},49:function(n,e,t){"use strict";t.r(e);var r,c,i,a,s,o,d,l,p,b,j,u,x,h,m,g,f,O,v,A,w,C=t(1),y=t.n(C),B=t(25),D=t.n(B),R=t(11),S=(t(35),t(4)),E=t(9),N=t.n(E),V=t(12),F=t(6),z=t(3),I=t(2),k=I.b.ul(r||(r=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0 0 30px;\n  padding: 0;\n"]))),Q=Object(I.b)(R.b)(c||(c=Object(z.a)(["\n  margin: 0 10px;\n  padding: 3px 15px;\n  position: relative;\n  text-decoration: none;\n  color: ",";\n  &.active {\n    color: ",";\n    &:after {\n      content: '';\n      position: absolute;\n      display: block;\n      height: 2px;\n      left: 0%;\n      bottom: 0;\n      background-color: ",";\n      animation: slide-in 0.3s ease-in forwards;\n      @keyframes slide-in {\n        from {\n          left: 50%;\n          width: 0;\n        }\n        to {\n          left: 0%;\n          width: 100%;\n        }\n      }\n    }\n  }\n"])),(function(n){return n.theme.mainColors.gray}),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.blue})),W=t(0),U=[{to:"/",text:"Home"},{to:"/starred",text:"Starred"}],P=function(){var n=Object(S.f)();return Object(W.jsx)("div",{children:Object(W.jsx)(k,{style:{},children:U.map((function(e,t){return Object(W.jsx)("li",{children:Object(W.jsx)(Q,{style:e.to===n.pathname?{color:"#2400ff",borderBottom:"#2400ff solid 1px"}:{color:"#c6c6c6"},to:e.to,children:e.text})},t)}))})})},H=I.b.div(i||(i=Object(z.a)(["\n  text-align: center;\n  margin: 0 0 40px;\n\n  h1 {\n    color: ",";\n    letter-spacing: 10px;\n    text-transform: uppercase;\n    margin: 0 0 10px;\n  }\n\n  p {\n    color: ",";\n    margin: 0;\n  }\n"])),(function(n){return n.theme.mainColors.blue}),(function(n){return n.theme.mainColors.dark})),q=function(n){var e=n.title,t=n.subtitle;return Object(W.jsxs)(H,{children:[Object(W.jsx)("h1",{children:e}),Object(W.jsx)("p",{children:t})]})},M=function(n){var e=n.children;return Object(W.jsxs)("div",{children:[Object(W.jsx)(q,{title:"Box Office",subtitle:"Are you Looking for an movie or an Actor? "}),Object(W.jsx)(P,{}),e]})},J=function(){var n=Object(V.a)(N.a.mark((function n(e){var t;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,fetch("".concat("https://api.tvmaze.com/").concat(e,"}"));case 3:return n.next=5,n.sent.json();case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),X=t(29),L=t.n(X),Y=Object(I.b)(L.a)(a||(a=Object(z.a)(["\ndisplay: flex;\njustify-content:center;\nflex-wrap:wrap;\n"]))),K=I.b.div(s||(s=Object(z.a)(["\nwidth: 300px;\nheight: 100%;\nmargin: 0 15px 40px;\n.img-wrapper{\n    width:100%;\n    border-radius:40px;\n    height:420px;\n    overflow: hidden;\n    border: 1px solid #ddd;\n    img{\n    object-fit:cover;\n    height: 100%;\n    width: 100%;\n}\n}\nh1{\n    margin: 10px 0;\n    font-size:21px\n}\np{\n    margin:0;\n}\n"]))),Z=I.b.div(o||(o=Object(z.a)(["\ndisplay:inline-block;\nwidth:18px;\nheight:18px;\nmargin-left: 10px;\nbackground-color:#ffc806;\nclip-path: polygon(50% 0%,\n 61% 35%, \n 98% 35%, \n 68% 57%, \n 79% 91%,\n  50% 70%, \n 21% 91%,\n  32% 57%,\n  2% 35%,\n  39% 35%);\n"]))),T=I.b.div(d||(d=Object(z.a)(["\ndisplay:inline-block;\nwidth:18px;\nheight:18px;\nmargin-left: 10px;\nbackground-color:#ddd;\n\nclip-path: polygon(50% 0%,\n 61% 35%, \n 98% 35%, \n 68% 57%, \n 79% 91%,\n  50% 70%, \n 21% 91%,\n  32% 57%,\n  2% 35%,\n  39% 35%);\n"]))),G=(I.b.div(l||(l=Object(z.a)(["\ndisplay:inline-block;\nwidth:18px;\nheight:18px;\nbackground-color:#ffc806;\nclip-path: polygon(50% 0%,\n 61% 35%, \n 98% 35%, \n 68% 57%, \n 79% 91%,\n  50% 70%, \n 21% 91%,\n  32% 57%,\n  2% 35%,\n  39% 35%);\n"]))),I.b.div(p||(p=Object(z.a)(["\npadding:0 20px;\n\n@media only screen and (min-width: 516px){\n    padding: 0 40px;\n}\n@media only screen and (min-width: 768px){\n    padding: 0 60px;\n}\n@media only screen and (min-width: 992px){\n    padding: 0 80px;\n}"])))),_=I.b.div(b||(b=Object(z.a)(["\nmargin-bottom:40px;\nh2{\n    margin:0;\n    margin-bottom:30px;\n    font-size: 22px;\n}"]))),$=I.b.div(j||(j=Object(z.a)(["\ndisplay:flex;\nmargin-bottom:40px;\nimg{\n    min-width:250px;\n    width:300px;\n    margin-right:30px\n\n}\n"]))),nn=I.b.div(u||(u=Object(z.a)(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n\n  h1 {\n    margin: 0;\n    border-right: 1px solid #ddd;\n    padding-right: 25px;\n    margin-right: 20px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    span {\n      margin-left: 10px;\n    }\n  }\n"]))),en=I.b.div(x||(x=Object(z.a)(["\n  display: inline-flex;\n  flex-wrap: wrap;\n\n  span {\n    margin: 6px;\n    margin-bottom: 0;\n    color: blue;\n    background-color: #d0c9ff;\n     \n   padding:12px;\n    border-radius: 25px;\n    font-size: 14px;\n    text-align: center;\n  }\n"]))),tn=I.b.div(h||(h=Object(z.a)(["\np{\n    margin : 5px 0;\n    span{\n        font-weight:bold;\n    }\n}\n"]))),rn=I.b.div(m||(m=Object(z.a)(["\n  p {\n    margin: 5px 0;\n  }\n\n  span {\n    font-weight: 700;\n  }\n"]))),cn=I.b.div(g||(g=Object(z.a)(["\n  display: flex;\n  flex-direction: column;\n\n  .season-item {\n    display: flex;\n    align-items: center;\n    margin: 10px 0;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    .left {\n      flex: 0 0 30%;\n      border-right: 1px solid #b0b0b0;\n      padding-right: 20px;\n    }\n\n    .right {\n      padding-left: 20px;\n      flex: 1;\n    }\n  }\n"]))),an=I.b.div(f||(f=Object(z.a)(["\n  display: flex;\n  flex-wrap: wrap;\n\n  .cast-item {\n    flex: 1 0 50%;\n    display: flex;\n    margin-bottom: 20px;\n    align-items: center;\n\n    @media only screen and (max-width: 768px) {\n      flex: 1 0 100%;\n    }\n  }\n\n  .pic-wrapper {\n    width: 50px;\n    min-width: 50px;\n    height: 50px;\n    overflow: hidden;\n    border-radius: 50%;\n    img {\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n  }\n\n  .actor {\n    margin-left: 25px;\n\n    .bold {\n      font-weight: bold;\n    }\n  }\n"]))),sn=function(n){var e=n.id,t=n.name,r=n.image,c=n.summary,i=n.onStarClick,a=n.istarred,s=c?"".concat(c.split(" ").slice(0,10).join(" ").replace(/<.+?>/,""),".."):"No description",o=c?s.replace(/<b>/g,"").replace(/<\/b>/,""):"No description";return Object(W.jsxs)(K,{children:[Object(W.jsx)("div",{className:"img-wrapper",children:Object(W.jsx)("img",{src:r,alt:""})}),Object(W.jsx)("h1",{children:t}),Object(W.jsx)("p",{children:o}),Object(W.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(W.jsx)(R.b,{style:{marginTop:"5px"},to:"show/".concat(e),children:"Read More"}),Object(W.jsx)("button",{style:on,onClick:i,type:"button",children:a?Object(W.jsx)(Z,{}):Object(W.jsx)(T,{})})]})]})},on={borderBottom:"1px solid black",background:"#fff",borderRadius:"12px",margin:"0",padding:"1px 7px 0 0",outline:"none"},dn="data:image/png;base64,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",ln=t(30),pn=function(n,e){switch(e.type){case"ADD":return[].concat(Object(ln.a)(n),[e.showId]);case"REMOVE":return n.filter((function(n){return n!==e.showId}));default:return n}},bn=function(n,e,t){var r=Object(C.useReducer)(n,e,(function(n){var e=localStorage.getItem(t);return e?JSON.parse(e):n})),c=Object(F.a)(r,2),i=c[0],a=c[1];return Object(C.useEffect)((function(){localStorage.setItem(t,JSON.stringify(i))}),[i,t]),[i,a]},jn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"shows";return bn(pn,[],n)},un=function(n){var e=n.results,t=jn(),r=Object(F.a)(t,2),c=r[0],i=r[1];return Object(W.jsxs)(Y,{children:[" ",e.map((function(n,e){var t=n.show,r=c.includes(t.id);return Object(W.jsx)(sn,{onStarClick:function(){i(r?{type:"REMOVE",showId:t.id}:{type:"ADD",showId:t.id})},istarred:r,name:t.name,id:t.id,image:t.image?t.image.medium:dn,summary:t.summary},t.id)}))," "]})},xn=Object(I.b)(K)(O||(O=Object(z.a)(["\n.deathday{\n    margin:0;\n    margin-top: 15px;\n    font-weight: bold;\n}\n"]))),hn=function(n){var e=n.id,t=n.name,r=n.image,c=n.summary,i=n.country,a=n.birthday,s=n.deathday,o=n.gender;c&&"".concat(c.split(" ").slice(0,10).join(" ").replace(/<.+?>/g,""),"..");return Object(W.jsxs)(xn,{children:[Object(W.jsx)("div",{children:Object(W.jsx)("img",{className:"img-wrapper",src:r,alt:""})}),Object(W.jsxs)("h1",{children:[t," ",o?"".concat(o):null]}),Object(W.jsx)("p",{children:i?"Comes from ".concat(i):"No country known"}),a?Object(W.jsxs)("p",{children:["Born: ",a]}):null,Object(W.jsx)("p",{className:"deathday",children:s?"Died: ".concat(s):"Alive"}),Object(W.jsxs)("div",{children:[Object(W.jsx)(R.b,{to:"actor/".concat(e),children:"Read More"}),Object(W.jsx)("button",{type:"button",children:"Star Me."})]})]})},mn=function(n){var e=n.results;return Object(W.jsxs)(Y,{children:[" ",e.map((function(n,e){var t=n.person;return console.log(t),Object(W.jsx)(hn,{name:t.name,country:t.country?t.country.name:null,birthday:t.birthday,deathday:t.deathday,gender:t.gender,id:t.id,image:t.image?t.image.medium:dn,summary:t.summary},t.id)}))," "]})},gn=I.b.input(v||(v=Object(z.a)(["\n  display: block;\n  font-family: 'Roboto', sans-serif;\n  width: 200px;\n  margin: auto;\n  outline: none;\n  padding: 13px 15px;\n  border: 1px solid #dbdbdb;\n  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);\n  font-size: 14px;\n  border-radius: 12px;\n  color: #8d8d8d;\n\n  &::placeholder {\n    font-weight: 300;\n    color: #8d8d8d;\n  }\n"]))),fn=I.b.div(A||(A=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 20px 0;\n\n  div {\n    margin: 0 15px;\n  }\n"]))),On=I.b.div(w||(w=Object(z.a)(["\n  text-align: center;\n  margin-bottom: 35px;\n\n  button {\n    color: #fff;\n    background-color: ",";\n    margin: auto;\n    padding: 10px 50px;\n    font-size: 15px;\n    border: none;\n    outline: none;\n    border-radius: 12px;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"])),(function(n){return n.theme.mainColors.blue})),vn=function(){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"lastQuery",e=Object(C.useState)((function(){var e=sessionStorage.getItem(n);return e?JSON.parse(e):" "})),t=Object(F.a)(e,2),r=t[0],c=t[1];return[r,function(e){c(e),sessionStorage.setItem(n,JSON.stringify(e))}]}(),e=Object(F.a)(n,2),t=e[0],r=e[1],c=Object(C.useState)(null),i=Object(F.a)(c,2),a=i[0],s=i[1],o=Object(C.useState)("shows"),d=Object(F.a)(o,2),l=d[0],p=d[1],b="shows"===l,j=function(){var n=Object(V.a)(N.a.mark((function n(e){var r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,J("search/".concat(l,"?q=").concat(t));case 2:r=n.sent,s(r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(n){p(n.target.value)};return Object(W.jsxs)(M,{children:[Object(W.jsx)(gn,{onChange:function(n){r(n.target.value)},value:t,type:"text",onKeyDown:function(n){13===n.keyCode&&j()}}),Object(W.jsxs)(fn,{children:[Object(W.jsx)("div",{children:Object(W.jsxs)("label",{style:An,htmlFor:"shows-search",children:[Object(W.jsx)("input",{checked:b,value:"shows",onChange:u,type:"radio",name:"",id:"shows-search"}),"Shows"]})}),Object(W.jsxs)("div",{children:[Object(W.jsxs)("label",{style:An,htmlFor:"actors-search",children:[Object(W.jsx)("input",{checked:!b,value:"people",onChange:u,type:"radio",name:"",id:"actors-search"}),"Actor"]})," "]})]}),Object(W.jsx)(On,{children:Object(W.jsx)("button",{type:"button",onClick:j,children:"Search "})}),a&&0===a.length?Object(W.jsx)("div",{style:{fontWeight:"bolder",fontSize:34,padding:" 24px 0"},children:"No results"}):a&&a.length>0?a[0].show?Object(W.jsx)(un,{results:a}):Object(W.jsx)(mn,{results:a}):null]})},An={display:"block",position:"relative",paddingLeft:"20px",cursor:"pointer",fontSize:"16px",font:"Roboto",userSelect:"none"},wn=function(){var n=jn(),e=Object(F.a)(n,1)[0],t=Object(C.useState)(null),r=Object(F.a)(t,2),c=r[0],i=r[1],a=Object(C.useState)(!0),s=Object(F.a)(a,2),o=s[0],d=s[1],l=Object(C.useState)(null),p=Object(F.a)(l,2),b=p[0],j=p[1];return Object(C.useEffect)((function(){var n=!0;if(e&&e.length>0&&n){var t=e.map(function(){var n=Object(V.a)(N.a.mark((function n(e){return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.tvmaze.com/shows/".concat(e));case 2:return n.abrupt("return",n.sent.json());case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());Promise.all(t).then((function(n){return n.map((function(n){return{show:n}}))})).then((function(n){i(n),d(!1)})).catch((function(n){j(n.message),d(!1)}))}else d(!1);return function(){n=!1}}),[e]),Object(W.jsxs)(M,{children:[o&&Object(W.jsx)("div",{children:"Shows are still loading"}),b&&Object(W.jsxs)("div",{children:["Error occured: ",b]}),!c&&!o&&Object(W.jsx)("div",{children:"No Shows."}),c&&!o&&!b&&Object(W.jsx)(un,{results:c})]})},Cn=t(17),yn=function(n){var e=n.cast;return Object(W.jsx)(an,{children:e.map((function(n,e){var t=n.person,r=n.character,c=n.voice;return Object(W.jsxs)("div",{className:"cast-item",children:[Object(W.jsx)("div",{className:"pic-wrapper",children:Object(W.jsx)("img",{src:t.image?t.image.medium:dn,alt:"",className:""})}),Object(W.jsx)("div",{className:"actor",children:Object(W.jsxs)("span",{children:[Object(W.jsx)("span",{className:" bold",children:t.name})," | ",r.name," ",c?"| Voice":" "]})})]},e)}))})},Bn={margin:"5px 0"},Dn=function(n){var e=n.status,t=n.premiered,r=n.network;return Object(W.jsxs)(tn,{children:[Object(W.jsxs)("p",{className:Bn,children:["Status: ",Object(W.jsx)("span",{children:e})]}),Object(W.jsxs)("p",{className:Bn,children:["Premiered ",t," ",r?" on ".concat(r.name):null]})]})},Rn=function(n){var e=n.seasons;return Object(W.jsxs)(rn,{children:[Object(W.jsxs)("p",{children:["Seasons in total : ",Object(W.jsx)("span",{children:e.length})]}),Object(W.jsxs)("p",{children:["Episode in total: "," ",Object(W.jsx)("span",{children:e.reduce((function(n,e){return n+e.episodeOrder}),0)})]}),Object(W.jsx)(cn,{children:e.map((function(n){return Object(W.jsxs)("div",{className:"season-item",children:[Object(W.jsxs)("div",{className:"left",children:[Object(W.jsxs)("p",{children:["Season ",n.number]}),Object(W.jsxs)("p",{children:["Episodes : ",Object(W.jsx)("span",{children:n.episodeOrder})]})]}),Object(W.jsxs)("div",{className:"right",children:["Aired : "," ",Object(W.jsxs)("span",{children:[n.premiereDate,"-",n.endDate]})]})]},n.id)}))})]})},Sn=function(n){var e=n.image,t=n.rating,r=n.summary,c=n.tags,i=n.name;return Object(W.jsxs)($,{children:[Object(W.jsx)("img",{src:e?e.original:dn,alt:"show-cover"}),Object(W.jsxs)("div",{className:"text-side",children:[Object(W.jsxs)(nn,{children:[Object(W.jsx)("h1",{children:i})," "," ",Object(W.jsxs)("span",{children:[" ",t.average||"N/A"," "]})," ",Object(W.jsx)(Z,{})]}),Object(W.jsx)("div",{className:"summary",dangerouslySetInnerHTML:{__html:r}}),Object(W.jsxs)(en,{children:[Object(W.jsx)("p",{children:" Tags: "}),c.map((function(n,e){return Object(W.jsxs)("span",{children:[n," "]},e)}))]})]})]})},En={result:null,isloading:!0,error:null},Nn=function(n,e){switch(e.type){case"FETCH_SUCCESS":return Object(Cn.a)(Object(Cn.a)({},n),{},{isloading:!1,error:null,result:e.result});case"FETCH_FAILED":return Object(Cn.a)(Object(Cn.a)({},n),{},{isloading:!1,error:e.error});default:return n}},Vn=function(){var n=Object(S.g)().id,e=function(){var e=Object(V.a)(N.a.mark((function e(){var t,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tvmaze.com/shows/".concat(n,"?embed[]=seasons&embed[]=cast"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.next=8,r;case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=Object(C.useReducer)(Nn,En),r=Object(F.a)(t,2),c=r[0],i=r[1],a=c.result;return Object(C.useEffect)((function(){var n=!0;return n&&e().then((function(n){i({type:"FETCH_SUCCESS",result:n})})).catch((function(n){i({type:"FETCH_FAILED",error:n.message})})),function(){n=!1}}),[n]),c.isloading?Object(W.jsx)("div",{children:"Data is Loading ....."}):c.error?Object(W.jsx)("div",{children:"error"}):Object(W.jsxs)(G,{children:[Object(W.jsx)(Sn,{image:a.image,rating:a.rating,name:a.name,summary:a.summary,tags:a.genres}),Object(W.jsxs)(_,{children:[Object(W.jsx)("h2",{children:"Details"}),Object(W.jsx)(Dn,{status:a.status,network:a.network,premiered:a.premiered})]}),Object(W.jsxs)(_,{children:[Object(W.jsx)("h2",{children:"Season"}),Object(W.jsx)(Rn,{seasons:a._embedded.seasons})]}),Object(W.jsxs)(_,{children:[Object(W.jsx)("h2",{children:"Cast"}),Object(W.jsx)(yn,{cast:a._embedded.cast})]})]})},Fn={mainColors:{blue:"#2400ff",gray:"#c6c6c6",dark:"#353535"}};var zn=function(){return Object(W.jsx)(I.a,{theme:Fn,children:Object(W.jsxs)(S.c,{children:[Object(W.jsx)(S.a,{exact:!0,path:"/",children:Object(W.jsx)(vn,{})}),Object(W.jsx)(S.a,{exact:!0,path:"/starred",children:Object(W.jsx)(wn,{})}),Object(W.jsx)(S.a,{exact:!0,path:"/show/:id",children:Object(W.jsx)(Vn,{})}),Object(W.jsx)(S.a,{children:Object(W.jsx)("h1",{style:{color:"#e32755"},children:"404! Page Not found"})})]})})};D.a.render(Object(W.jsx)(R.a,{children:Object(W.jsx)(y.a.StrictMode,{children:Object(W.jsx)(zn,{})})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.29b215f0.chunk.js.map