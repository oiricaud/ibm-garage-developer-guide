(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{362:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return p}));a(11),a(6),a(7),a(4),a(10),a(0);var n=a(106),r=a(415);a(1);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l,i={},s=(l="PageDescription",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),c={_frontmatter:i},b=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,o({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use the Cloud Developer Tools environment to delete itself when it’s no longer needed.")),Object(n.b)("p",null,"The Cloud Developer Tools environment can not only install itself, it can also delete itself. The\nenvironment is installed using Terraform, which stores the state of the creation in the ",Object(n.b)("inlineCode",{parentName:"p"},"workspace")," folder.\nTerraform can use that state to delete what it installed."),Object(n.b)("p",null,"It is is possible to destory the development environment following these steps."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Run the following command to launch a IBM Garage ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.ibm.com/garage-catalyst/client-tools-image"}),"Developer Tools CLI Tools Docker container"),"."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"./launch.sh\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the container, change to the ",Object(n.b)("inlineCode",{parentName:"p"},"workspace")," directory."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"cd workspace\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the container, run the Terraform tool with the ",Object(n.b)("inlineCode",{parentName:"p"},"destroy")," option."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"terraform destroy\n")))),Object(n.b)("p",null,"This will remove the development cluster and all the services that were created previously."))}p.isMDXComponent=!0},413:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},414:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},415:function(e,t,a){"use strict";a(30),a(26);var n=a(413),r=a(0),o=a.n(r),l=a(105),i=a.n(l),s=a(190),c=a(126),b=a(3),p=a.n(b),u=a(352),d=a(1),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},h=a(414),O=a(353),j=function(e){var t=e.relativePagePath,a=e.repository,n=h.data.site.siteMetadata.repository,r=a||n,o=r.baseUrl,l=r.subDirectory,i=o+"/edit/"+r.branch+l+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:i},"Edit this page on GitHub"))):null},g=a(188),v=(a(56),a(23)),f=a(354);var N=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0}),o=r===n,l=new RegExp(n+"(?!-)"),s=a.replace(l,r);return Object(d.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(d.b)(v.Link,{className:f.link,to:""+s},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},r))))))},n}(o.a.Component),w=a(189);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,l=t.frontmatter,b=void 0===l?{}:l,p=t.relativePagePath,u=t.titleType,h=b.tabs,O=b.title,v=b.theme,f=b.description,y=b.keywords,x=n.data.site.pathPrefix,T=x?r.pathname.replace(x,""):r.pathname,k=h?T.split("/").slice(-1)[0]||i()(h[0],{lower:!0}):"";return Object(d.b)(c.a,{tabs:h,homepage:!1,theme:v,pageTitle:O,pageDescription:f,pageKeywords:y,titleType:u},Object(d.b)(m,{title:o?Object(d.b)(o,null):O,label:"label",tabs:h}),h&&Object(d.b)(N,{slug:T,tabs:h,currentTab:k}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:p})),Object(d.b)(g.a,{pageContext:t,location:r,slug:T,tabs:h,currentTab:k}),Object(d.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-admin-destroying-index-mdx-ee47e16a0cb81659e085.js.map