(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{398:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return c}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var r=a(106),n=a(430);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var i={},s={_frontmatter:i},l=n.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(r.b)(l,o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("hr",null),Object(r.b)("h2",{id:"title-artifactory-setup"},"title: Artifactory Setup"),Object(r.b)("h2",{id:"what-is-continuous-deployment"},"What is Continuous Deployment"),Object(r.b)("h2",{id:"common-tools"},"Common tools"),Object(r.b)("h3",{id:"what-is-argocd"},"What is ArgoCD"),Object(r.b)("h3",{id:"what-is-artifactory"},"What is Artifactory"),Object(r.b)("p",null,"Artifactory is a product by JFrog that serves as a binary repository manager."),Object(r.b)("p",null,"The binary repository is a natural extension to the source code repository, in that it will store the outcome of your build process, often denoted as artifacts. Most of the times one would not use the binary repository directly but through a package manager that comes with the chosen technology."),Object(r.b)("p",null,"In most cases these will store individual application components that can later be assembled into a full product - thus allowing a build to be broken in smaller chunks, making more efficient use of resources, reducing build times, better tracking of binary debug databases etc."),Object(r.b)("p",null,"Here are some of the most popular package managers that can be managed using a binary repository:"),Object(r.b)("p",null,"Java: jar, ear, war etc has Maven and the official MavenCentral. There are many other package managers that will use the maven binary repository format as well (ivy, gradle etc).\nIn JavaScript: we have npm which is one of the most popular, will require nodejs.\nIn python: there is pip and the official package index pypi, which one can also create a local instance through binary repository that will support the format.\nThis list is far from complete, just gives an idea of what’s out there."),Object(r.b)("p",null,"The binary repository can allow to host all of these under one roof,\nmaking their management much simpler for teams.\nNote that you do not need a very large team to start reaping benefits from binary package management. The initial investment is not very large and the benefits are felt immediately. Especially now that more and more platforms, frameworks and languages are integrating this dependency management directly in them. Their biggest advantage I have found however was to create an environment that your programmers will find natural and comfortable making it essential. It helps you as a devops creating a solid tool-chain and it helps them making the overall experience fit naturally in their stack of choice."))}c.isMDXComponent=!0},428:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},429:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},430:function(e,t,a){"use strict";a(32),a(28);var r=a(1),n=a(428),o=a(0),i=a.n(o),s=a(105),l=a.n(s),c=a(195),b=a(127),p=a(3),u=a.n(p),h=a(384),m=function(e){var t,a=e.title,n=e.tabs,o=void 0===n?[]:n;return Object(r.b)("div",{className:u()(h.pageHeader,(t={},t[h.withTabs]=o.length,t))},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12"},Object(r.b)("h1",{id:"page-title",className:h.text},a)))))},d=a(429),g=a(385),f=function(e){var t=e.relativePagePath,a=e.repository,n=d.data.site.siteMetadata.repository,o=a||n,i=o.baseUrl,s=o.subDirectory,l=i+"/edit/"+o.branch+s+"/src/pages"+t;return i?Object(r.b)("div",{className:"bx--row "+g.row},Object(r.b)("div",{className:"bx--col"},Object(r.b)("a",{className:g.link,href:l},"Edit this page on GitHub"))):null},y=a(193),v=(a(59),a(26)),O=a(386);var j=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=l()(e,{lower:!0}),i=o===n,s=new RegExp(n+"(?!-)"),c=a.replace(s,o);return Object(r.b)("li",{key:e,className:u()((t={},t[O.selectedItem]=i,t),O.listItem)},Object(r.b)(v.Link,{className:O.link,to:""+c},e))}));return Object(r.b)("div",{className:O.tabsContainer},Object(r.b)("div",{className:"bx--grid"},Object(r.b)("div",{className:"bx--row"},Object(r.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(r.b)("nav",null,Object(r.b)("ul",{className:O.list},o))))))},n}(i.a.Component),w=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,s=t.frontmatter,p=void 0===s?{}:s,u=t.relativePagePath,h=t.titleType,d=p.tabs,g=p.title,v=p.theme,O=p.description,k=p.keywords,x=n.data.site.pathPrefix,N=x?o.pathname.replace(x,""):o.pathname,T=d?N.split("/").slice(-1)[0]||l()(d[0],{lower:!0}):"";return Object(r.b)(b.a,{homepage:!1,theme:v,pageTitle:g,pageDescription:O,pageKeywords:k,titleType:h},Object(r.b)(m,{title:i?Object(r.b)(i,null):g,label:"label",tabs:d}),d&&Object(r.b)(j,{slug:N,tabs:d,currentTab:T}),Object(r.b)(w.a,{padded:!0},a,Object(r.b)(f,{relativePagePath:u})),Object(r.b)(y.a,{pageContext:t,location:o,slug:N,tabs:d,currentTab:T}),Object(r.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-continuous-deployment-index-mdx-6e0b54a538cca5d4dabe.js.map