(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{417:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),n=a(438);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var i,s={},c=(i="PageDescription",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),l={_frontmatter:s},b=n.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(b,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"PageDescription"},"This guide will help you uderstand how to manage logging for your apps with LogDNA"),Object(r.b)("h3",{id:"setup-operations"},"Setup Operations"),Object(r.b)("p",null,"Now that your development cluster is configured you can now register ",Object(r.b)("inlineCode",{parentName:"p"},"LogDNA")," and ",Object(r.b)("inlineCode",{parentName:"p"},"SysDig")," service instances with your Kubernetes cluster. "),Object(r.b)("p",null,"Navigate to the Observability menu from the main console menu and then click on the ",Object(r.b)("inlineCode",{parentName:"p"},"Edit Sources")," and follow the instructions to configure the log agent and montitoring agents for you development cluster. "))}p.isMDXComponent=!0},436:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},437:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":""}}}}}')},438:function(e,t,a){"use strict";a(32),a(28);var r=a(1),n=a(436),o=a(0),i=a.n(o),s=a(105),c=a.n(s),l=a(195),b=a(127),p=a(3),u=a.n(p),d=a(383),g=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(r.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:d.text},a)))))},m=a(437),O=a(384),v=function(e){var t=e.relativePagePath,a=e.repository,n=m.data.site.siteMetadata.repository,o=a||n,i=o.baseUrl,s=i+"/tree/master"+o.subDirectory+"/src/pages"+t;return i?Object(r.b)("div",{className:"bx--row "+O.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},f=a(193),h=(a(59),a(26)),j=a(385);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=c()(e,{lower:!0}),i=o===n,s=new RegExp(n+"(?!-)"),l=a.replace(s,o);return Object(r.b)("li",{key:e,className:u()((t={},t[j.selectedItem]=i,t),j.listItem)},Object(r.b)(h.Link,{className:j.link,to:""+l},e))}));return Object(r.b)("div",{className:j.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:j.list},o))))))},n}(i.a.Component),w=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,s=t.frontmatter,p=void 0===s?{}:s,u=t.relativePagePath,d=t.titleType,m=p.tabs,O=p.title,h=p.theme,j=p.description,N=p.keywords,x=n.data.site.pathPrefix,P=x?o.pathname.replace(x,""):o.pathname,D=m?P.split("/").slice(-1)[0]||c()(m[0],{lower:!0}):"";return Object(r.b)(b.a,{homepage:!1,theme:h,pageTitle:O,pageDescription:j,pageKeywords:N,titleType:d},Object(r.b)(g,{title:i?Object(r.b)(i,null):O,label:"label",tabs:m}),m&&Object(r.b)(y,{slug:P,tabs:m,currentTab:D}),Object(r.b)(w.a,{padded:!0},a,Object(r.b)(v,{relativePagePath:u})),Object(r.b)(f.a,{pageContext:t,location:o,slug:P,tabs:m,currentTab:D}),Object(r.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-log-management-index-mdx-29b576856f525d10ef5f.js.map