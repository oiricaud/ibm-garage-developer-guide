(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{412:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return u}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),n=a(439);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var i={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=s("Tabs"),b=s("Tab"),l={_frontmatter:i},p=n.a;function u(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(p,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"Tabs"},Object(r.b)(b,{label:"Pre-requisites",mdxType:"Tab"},Object(r.b)("h2",{id:"coming-soon-"},"Coming Soon …"))))}u.isMDXComponent=!0},437:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},438:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},439:function(e,t,a){"use strict";a(32),a(28);var r=a(1),n=a(437),o=a(0),i=a.n(o),s=a(105),c=a.n(s),b=a(195),l=a(127),p=a(3),u=a.n(p),d=a(384),m=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(r.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:d.text},a)))))},O=a(438),v=a(385),j=function(e){var t=e.relativePagePath,a=e.repository,n=O.data.site.siteMetadata.repository,o=a||n,i=o.baseUrl,s=o.subDirectory,c=i+"/edit/"+o.branch+s+"/src/pages"+t;return i?Object(r.b)("div",{className:"bx--row "+v.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:v.link,href:c},"Edit this page on GitHub"))):null},f=a(193),g=(a(59),a(26)),h=a(386);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=c()(e,{lower:!0}),i=o===n,s=new RegExp(n+"(?!-)"),b=a.replace(s,o);return Object(r.b)("li",{key:e,className:u()((t={},t[h.selectedItem]=i,t),h.listItem)},Object(r.b)(g.Link,{className:h.link,to:""+b},e))}));return Object(r.b)("div",{className:h.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:h.list},o))))))},n}(i.a.Component),x=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,s=t.frontmatter,p=void 0===s?{}:s,u=t.relativePagePath,d=t.titleType,O=p.tabs,v=p.title,g=p.theme,h=p.description,w=p.keywords,N=n.data.site.pathPrefix,T=N?o.pathname.replace(N,""):o.pathname,P=O?T.split("/").slice(-1)[0]||c()(O[0],{lower:!0}):"";return Object(r.b)(l.a,{homepage:!1,theme:g,pageTitle:v,pageDescription:h,pageKeywords:w,titleType:d},Object(r.b)(m,{title:i?Object(r.b)(i,null):v,label:"label",tabs:O}),O&&Object(r.b)(y,{slug:T,tabs:O,currentTab:P}),Object(r.b)(x.a,{padded:!0},a,Object(r.b)(j,{relativePagePath:u})),Object(r.b)(f.a,{pageContext:t,location:o,slug:T,tabs:O,currentTab:P}),Object(r.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-installation-crc-index-mdx-1710d321d5e6121d2814.js.map