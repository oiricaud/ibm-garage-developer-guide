(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{424:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),n=a(434);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o={},c={_frontmatter:o},s=n.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(s,i({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"))}b.isMDXComponent=!0},432:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},433:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},434:function(e,t,a){"use strict";a(32),a(28);var r=a(1),n=a(432),i=a(0),o=a.n(i),c=a(105),s=a.n(c),b=a(195),l=a(127),p=a(3),u=a.n(p),d=a(384),v=function(e){var t,a=e.title,n=e.tabs,i=void 0===n?[]:n;return Object(r.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:d.text},a)))))},O=a(433),m=a(385),f=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,i=a||n,o=i.baseUrl,c=i.subDirectory,s=o+"/edit/"+i.branch+c+"/src/pages"+t;return o?Object(r.b)("div",{className:"bx--row "+m.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:m.link,href:s},"Edit this page on GitHub"))):null},j=a(193),g=(a(59),a(26)),h=a(386);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=s()(e,{lower:!0}),o=i===n,c=new RegExp(n+"(?!-)"),b=a.replace(c,i);return Object(r.b)("li",{key:e,className:u()((t={},t[h.selectedItem]=o,t),h.listItem)},Object(r.b)(g.Link,{className:h.link,to:""+b},e))}));return Object(r.b)("div",{className:h.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:h.list},i))))))},n}(o.a.Component),w=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,c=t.frontmatter,p=void 0===c?{}:c,u=t.relativePagePath,d=t.titleType,O=p.tabs,m=p.title,g=p.theme,h=p.description,x=p.keywords,N=n.data.site.pathPrefix,P=N?i.pathname.replace(N,""):i.pathname,k=O?P.split("/").slice(-1)[0]||s()(O[0],{lower:!0}):"";return Object(r.b)(l.a,{homepage:!1,theme:g,pageTitle:m,pageDescription:h,pageKeywords:x,titleType:d},Object(r.b)(v,{title:o?Object(r.b)(o,null):m,label:"label",tabs:O}),O&&Object(r.b)(y,{slug:P,tabs:O,currentTab:k}),Object(r.b)(w.a,{padded:!0},a,Object(r.b)(f,{relativePagePath:u})),Object(r.b)(j.a,{pageContext:t,location:i,slug:P,tabs:O,currentTab:k}),Object(r.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-programming-overview-index-mdx-551266542956898de635.js.map