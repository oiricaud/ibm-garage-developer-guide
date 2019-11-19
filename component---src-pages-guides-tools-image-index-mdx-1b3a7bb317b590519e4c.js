(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{424:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return u}));n(11),n(5),n(6),n(4),n(10),n(1),n(0);var a=n(106),i=n(443);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},o=c("PageDescription"),s=c("InlineNotification"),b={_frontmatter:r},p=i.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(p,l({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(o,{mdxType:"PageDescription"},Object(a.b)("p",null,"The Developer Tools include the IBM Garage for Cloud (IGC) Developer Tools Client")),Object(a.b)("p",null,"The ",Object(a.b)("a",l({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cli-tools",title:"IBM Garage for Cloud Developer Tools Docker image"}),"IGC Client"),"\nis a Docker image with many useful IBM Cloud CLI tools already installed.\nRather than installing all of these tools on your local computer, you can simply pull and run this image."),Object(a.b)("h2",{id:"running-the-client"},"Running the client"),Object(a.b)(s,{mdxType:"InlineNotification"},Object(a.b)("p",null,"You must ",Object(a.b)("a",l({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"install Docker Desktop")," on your local computer to run this Docker image.")),Object(a.b)("p",null,"Start the client to use it."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To run the ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"docker run -itd --name icclient garagecatalyst/ibm-garage-cli-tools\n")),Object(a.b)("p",{parentName:"li"},"  This  assumes the image’s default name, ",Object(a.b)("inlineCode",{parentName:"p"},"ibm-garage-cli-tools"),"."))),Object(a.b)("p",null,"Once the client is running in the backgroud, use it by opening a shell in it."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To use the ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container, exec shell into it:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"docker exec -it icclient /bin/bash\n")),Object(a.b)("p",{parentName:"li"},"  Your terminal is now in the container. "))),Object(a.b)("p",null,"Use this shell to run commands using the installed tools and scripts."),Object(a.b)("p",null,"When you’re finished running commands, to exit the client."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To leave the ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container shell, as with any shell:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"exit\n")),Object(a.b)("p",{parentName:"li"},"  The container will keep running after you exit its shell."))),Object(a.b)("p",null,"If the client stops:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"To run the ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container again:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"docker start icclient\n")))),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"icclient")," container is just a Docker container, so all ",Object(a.b)("a",l({parentName:"p"},{href:"https://docs.docker.com/engine/reference/commandline/cli/"}),"Docker CLI commands")," work."),Object(a.b)("h2",{id:"using-the-client"},"Using the client"),Object(a.b)("p",null,"From a client shell, run ",Object(a.b)("inlineCode",{parentName:"p"},"image-help")," to get a list of available tools, scripts, and ENV properties:"),Object(a.b)("pre",null,Object(a.b)("code",l({parentName:"pre"},{className:"language-bash"}),"$ image-help\nAvailable env properties (can be overridden for individual commands):\n> BM_API_KEY - the IBM Cloud api key\n> REGION - the IBM Cloud region (e.g. us-south)\n> RESOURCE_GROUP - the IBM Cloud resource group\n> CLUSTER_NAME - the name of the kubernetes cluster in IBM Cloud\n> SL_USERNAME - the Classic Infrastructure user name or API user name (e.g. 282165_joe@us.ibm.com)\n> SL_API_KEY - the Classic Infrastructure api key\n\nAvailable tools:\n> terraform (with helm, kube, and ibm provider plugins)\n> calicoctl\n> ibmcloud (with container-service, container-registry, and cloud-databases plugins)\n> kubectl\n> kustomize\n> oc\n> helm\n> docker\n> git\n> nvm\n> node (v11.12.0 currently installed)\n> yo\n\nAvailable scripts:\n> init.sh {BM_API_KEY} {REGION} {RESOURCE_GROUP} {CLUSTER_NAME}\n> createNamespaces.sh\n> deleteNamespace.sh\n> installHelm.sh\n> cluster-pull-secret-apply.sh\n> setup-namespace-pull-secrets.sh\n> checkPodRunning.sh\n> copy-secret-to-namespace.sh\n")))}u.isMDXComponent=!0},441:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},442:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},443:function(e,t,n){"use strict";n(32),n(28);var a=n(1),i=n(441),l=n(0),r=n.n(l),c=n(105),o=n.n(c),s=n(195),b=n(127),p=n(3),u=n.n(p),m=n(384),d=function(e){var t,n=e.title,i=e.tabs,l=void 0===i?[]:i;return Object(a.b)("div",{className:u()(m.pageHeader,(t={},t[m.withTabs]=l.length,t))},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12"},Object(a.b)("h1",{id:"page-title",className:m.text},n)))))},h=n(442),O=n(385),g=function(e){var t=e.relativePagePath,n=e.repository,i=h.data.site.siteMetadata.repository,l=n||i,r=l.baseUrl,c=l.subDirectory,o=r+"/edit/"+l.branch+c+"/src/pages"+t;return r?Object(a.b)("div",{className:"bx--row "+O.row},Object(a.b)("div",{className:"bx--col"},Object(a.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},j=n(193),N=(n(59),n(26)),f=n(386);var v=function(e){var t,n;function i(){return e.apply(this,arguments)||this}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var t,l=o()(e,{lower:!0}),r=l===i,c=new RegExp(i+"(?!-)"),s=n.replace(c,l);return Object(a.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(a.b)(N.Link,{className:f.link,to:""+s},e))}));return Object(a.b)("div",{className:f.tabsContainer},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(a.b)("nav",null,Object(a.b)("ul",{className:f.list},l))))))},i}(r.a.Component),y=n(194);t.a=function(e){var t=e.pageContext,n=e.children,l=e.location,r=e.Title,c=t.frontmatter,p=void 0===c?{}:c,u=t.relativePagePath,m=t.titleType,h=p.tabs,O=p.title,N=p.theme,f=p.description,k=p.keywords,C=i.data.site.pathPrefix,w=C?l.pathname.replace(C,""):l.pathname,x=h?w.split("/").slice(-1)[0]||o()(h[0],{lower:!0}):"";return Object(a.b)(b.a,{homepage:!1,theme:N,pageTitle:O,pageDescription:f,pageKeywords:k,titleType:m},Object(a.b)(d,{title:r?Object(a.b)(r,null):O,label:"label",tabs:h}),h&&Object(a.b)(v,{slug:w,tabs:h,currentTab:x}),Object(a.b)(y.a,{padded:!0},n,Object(a.b)(g,{relativePagePath:u})),Object(a.b)(j.a,{pageContext:t,location:l,slug:w,tabs:h,currentTab:x}),Object(a.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-tools-image-index-mdx-1b3a7bb317b590519e4c.js.map