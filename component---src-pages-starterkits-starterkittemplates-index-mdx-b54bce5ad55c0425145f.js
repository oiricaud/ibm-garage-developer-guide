(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{432:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return s})),r.d(t,"default",(function(){return p}));r(11),r(5),r(6),r(4),r(10),r(1),r(0);var o=r(106),a=r(439);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}var s={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=i("Row"),n=i("Column"),b=i("ArticleCard"),d={_frontmatter:s},u=a.a;function p(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,["components"]);return Object(o.b)(u,l({},d,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"test"},"Test"),Object(o.b)(c,{mdxType:"Row"},Object(o.b)(n,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(b,{color:"light",title:"Installation",subTitle:"Follow the steps to install the Developer Tools",href:"/getting-started/installation",mdxType:"ArticleCard"},Object(o.b)("img",{src:"resources/images/v10.7-release.png",alt:null}))),Object(o.b)(n,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(b,{color:"light",title:"Guides",subTitle:"Read the developer guides on how to use the installed tools",href:"/guides/overview",mdxType:"ArticleCard"},Object(o.b)("img",{src:"resources/images/hacktoberfest.png",alt:null}))),Object(o.b)(n,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(b,{color:"light",title:"Starter Kits Templates",subTitle:"Get some code to get your started",href:"/starterkits/overview",mdxType:"ArticleCard"},Object(o.b)("img",{src:"/resources/images/because-colors.png",alt:null})))),Object(o.b)(c,{mdxType:"Row"},Object(o.b)(n,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(b,{color:"light",title:"Installation",subTitle:"Follow the steps to install the Developer Tools",href:"/getting-started/installation",mdxType:"ArticleCard"},Object(o.b)("img",{src:"resources/images/v10.7-release.png",alt:null}))),Object(o.b)(n,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(b,{color:"light",title:"Guides",subTitle:"Read the developer guides on how to use the installed tools",href:"/guides/overview",mdxType:"ArticleCard"},Object(o.b)("img",{src:"resources/images/hacktoberfest.png",alt:null}))),Object(o.b)(n,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(b,{color:"light",title:"Starter Kits Templates",subTitle:"Get some code to get your started",href:"/starterkits/overview",mdxType:"ArticleCard"},Object(o.b)("img",{src:"/resources/images/because-colors.png",alt:null})))))}p.isMDXComponent=!0},437:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},438:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},439:function(e,t,r){"use strict";r(32),r(28);var o=r(1),a=r(437),l=r(0),s=r.n(l),i=r(105),c=r.n(i),n=r(195),b=r(127),d=r(3),u=r.n(d),p=r(384),m=function(e){var t,r=e.title,a=e.tabs,l=void 0===a?[]:a;return Object(o.b)("div",{className:u()(p.pageHeader,(t={},t[p.withTabs]=l.length,t))},Object(o.b)("div",{className:"bx--grid"},Object(o.b)("div",{className:"bx--row"},Object(o.b)("div",{className:"bx--col-lg-12"},Object(o.b)("h1",{id:"page-title",className:p.text},r)))))},g=r(438),O=r(385),h=function(e){var t=e.relativePagePath,r=e.repository,a=g.data.site.siteMetadata.repository,l=r||a,s=l.baseUrl,i=l.subDirectory,c=s+"/edit/"+l.branch+i+"/src/pages"+t;return s?Object(o.b)("div",{className:"bx--row "+O.row},Object(o.b)("div",{className:"bx--col"},Object(o.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},j=r(193),v=(r(59),r(26)),f=r(386);var y=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.tabs,r=e.slug,a=r.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var t,l=c()(e,{lower:!0}),s=l===a,i=new RegExp(a+"(?!-)"),n=r.replace(i,l);return Object(o.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=s,t),f.listItem)},Object(o.b)(v.Link,{className:f.link,to:""+n},e))}));return Object(o.b)("div",{className:f.tabsContainer},Object(o.b)("div",{className:"bx--grid"},Object(o.b)("div",{className:"bx--row"},Object(o.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(o.b)("nav",null,Object(o.b)("ul",{className:f.list},l))))))},a}(s.a.Component),x=r(194);t.a=function(e){var t=e.pageContext,r=e.children,l=e.location,s=e.Title,i=t.frontmatter,d=void 0===i?{}:i,u=t.relativePagePath,p=t.titleType,g=d.tabs,O=d.title,v=d.theme,f=d.description,T=d.keywords,w=a.data.site.pathPrefix,C=w?l.pathname.replace(w,""):l.pathname,M=g?C.split("/").slice(-1)[0]||c()(g[0],{lower:!0}):"";return Object(o.b)(b.a,{homepage:!1,theme:v,pageTitle:O,pageDescription:f,pageKeywords:T,titleType:p},Object(o.b)(m,{title:s?Object(o.b)(s,null):O,label:"label",tabs:g}),g&&Object(o.b)(y,{slug:C,tabs:g,currentTab:M}),Object(o.b)(x.a,{padded:!0},r,Object(o.b)(h,{relativePagePath:u})),Object(o.b)(j.a,{pageContext:t,location:l,slug:C,tabs:g,currentTab:M}),Object(o.b)(n.a,null))}}}]);
//# sourceMappingURL=component---src-pages-starterkits-starterkittemplates-index-mdx-b54bce5ad55c0425145f.js.map