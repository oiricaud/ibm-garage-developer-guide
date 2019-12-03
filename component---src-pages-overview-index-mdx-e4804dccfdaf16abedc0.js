(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{422:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return m}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),r=a(436);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},b=l("PageDescription"),c=l("AnchorLinks"),s=l("AnchorLink"),p={_frontmatter:i},d=r.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(d,o({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Get familiar with using the IBM Garage for Cloud Developer Tools")),Object(n.b)("h2",{id:"developer-tools"},"Developer Tools"),Object(n.b)("p",null,"The IBM Garage for Cloud Developer Tools is an environment for developing cloud-native applications for deployment\nto Kubernetes and Red Hat OpenShift. It embodies IBM Garage Method principles and practices for consistently developed\napplications incorporating best practices that increase developer velocity for efficient delivery of business value."),Object(n.b)("h3",{id:"overview"},"Overview"),Object(n.b)("p",null,"A short video introducing the concepts of DevOps with Red Hat OpenShift"),Object(n.b)("iframe",{width:"80%",height:"500",src:"https://www.youtube.com/embed/GOPWObjFTsI",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(n.b)("p",null),Object(n.b)("p",null,"Each development team installs its own copy of the Developer Tools environment into the team’s account.\nThe environment includes several features that support IBM Garage Method best practices for consistent and rapid development of cloud-native applications:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Installation"),": The Developer Tools are able to install themselves as a new environment "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Cluster"),": A Kubernetes or OpenShift cluster that both hosts the tools and itself is a deployment target for application builds"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"SDLC"),": Deployment target environments that support the application development lifecycle: ",Object(n.b)("em",{parentName:"li"},"dev"),", ",Object(n.b)("em",{parentName:"li"},"test"),", and ",Object(n.b)("em",{parentName:"li"},"staging")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Backend services"),": Cloud services commonly required by cloud-native applications for monitoring, security, and persistence"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"CI/CD"),": A prebuilt, ready-to-run continuous delivery pipeline incorporating best-of-breed open source software tools"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Starter Kits"),": Prebuilt code templates for common application components and tasks incorporating best practices that developers can add to their codebase as needed"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Dashboard"),": A centralized tool to help developers use the environment’s other tools, Starter Kits, and so on"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Red Hat CRC"),": The tools can be installed into the RedHat CodeReady Containers environment")),Object(n.b)("p",null,"Some of the tools are sourced from the ",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/catalog?search=label%3Ahelm#software"}),"IBM Bitnami Software Catalog")," that can be found in the IBM Cloud. This approach helps assemble these reliable open source development tools into an end-to-end developer experience that is fully integrated with IBM Cloud’s managed container services."),Object(n.b)("p",null,"Typically a ",Object(n.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/admin/overview"}),"Cloud System Admin")," or ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/culture/practice-building-effective-squads/"}),"squad leader")," installs and sets up a new Developer Tools environment after the ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/think/inception"}),"initial inception workshop"),",\nproviding a place for the developers to start developing the\n",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/think/inception/practice_minimum_viable_product"}),"minimum viable product (MVP)"),".\nThe objective is to reduce the time required for a team to configure and prepare their development environment.\nThe key benefit is to make the end-to-end\n",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/deliver/practice_continuous_delivery/"}),"CI/CD development lifecycle"),"\nconsistent across each platform and make the out-of-the-box developer experience as simple as possible."),Object(n.b)("p",null,"The installation is performed using ",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/terraform"}),"Terraform"),",\nwith a ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/garage-terraform-modules"}),"modular configuration")," so unneeded tools can be easily disabled or new tools added.\nThe combination of tools selected are proven in the industry to deliver real value for modern cloud-native development."),Object(n.b)("p",null,Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/rht-labs/labs-ci-cd"}),"Red Hat Open Innovation Labs CI/CD components")," embodies a very similar approach to how they deliver success with OpenShift."),Object(n.b)("h3",{id:"environment-components"},"Environment components"),Object(n.b)("p",null,"After installation, the Developer Tools environment consists of the following components and development tools:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"A development cluster"),Object(n.b)("li",{parentName:"ul"},"A set of backend services"),Object(n.b)("li",{parentName:"ul"},"A set of continuous delivery tools")),Object(n.b)("p",null,"This diagram illustrates the Development Tools environment:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"761px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"79.23784494086729%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAAC4UlEQVQ4y5VUXU8TQRTtb/Jf+OxfMP4AEx8MPhjxkUjwQfHFF8HwEcNLiRiNRZGIikCA0kJboIV+sW33c2ZnZ2b3eGdaEqIG4yQ3e/fuzL33nHtmc3EcgzEGKSWcbgcnpSKUTNDptFCtVqCVBKc98T/M7uEcuSRJkGYZzCoFCe4feNDkL28wTOdd/O+yCaVSQJbilCk82O8h1hKr2yFev+9QWENpTZ0qpGkKRU9t3smU0va7Fymcdamx6vEwIecMrufTk9r2PURRRO2HiAIXAfk8FmAEyff9ITyCZowxDi05yg2Gla8DyC/rlwk5giAAnx2DWJ2BJAYEi2CI0PsFiIVHCPoXiEVyLVwmBHKSEpqhmMPB4gSiT3OQ5CcpbMzdLoAtTSAc9IYFRnD/tNTmsR0aR6UKh+1DhHSKrS3iYmkKEVHghRESikniKyDIRg3mzO9m4qOEAkmscebu49XObTj6HIOFJ6hO3rFSSLUCJ/ie51n+rlv8UjZCkAYHTbzZeIFe7FvIYgTZmKlszCwz6b9BNvErkAkWiY+XdxHurYPXdsCrW+D1ElSjiEQqK5dez6HiwvoG4lUzMduhHUoYQplB5CfB5x5C5J8iXniM+O0zsPlxgiosZI841NSJWRldhoy0O3xmIyQjyNzCydBv1nHRqGHQOkO7UoTXbcFpN2wxI6tLDsxFSHVmfSNuI3oKWK5zpl2fJlmqNRAyutektWbA4JEfE1S/XEFwWrccVfoOtqiIpD1u6ODU2bWXIqTOioMQLqkiZ8p8Lx5jav4DGm0HnBCNL+9hrxNaaM7dMbjPX1r/3t4GbhSWrH/UL2D65y0I1UadAzdn8vh43kPOkNztDbD2Y5dugrA/is8HJ+h6o4TfNuGVj6y/3WlipXZofTfqYrPyjjqnvxEhmV1dR8v1kAtpIHHMkZHejCZNgUwKgiXsMOiNJKSHGkykIZAKx0hIappuoplBRDkCUkBEPP8Ckai9HMiwg2YAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Provisioned environment",title:"Provisioned environment",src:"/ibm-garage-developer-guide/static/85224f4a32afac650e4f1512936ff1b8/ae9fb/catalyst-provisioned-environment.png",srcSet:["/ibm-garage-developer-guide/static/85224f4a32afac650e4f1512936ff1b8/d6747/catalyst-provisioned-environment.png 288w","/ibm-garage-developer-guide/static/85224f4a32afac650e4f1512936ff1b8/09548/catalyst-provisioned-environment.png 576w","/ibm-garage-developer-guide/static/85224f4a32afac650e4f1512936ff1b8/ae9fb/catalyst-provisioned-environment.png 761w"],sizes:"(max-width: 761px) 100vw, 761px",loading:"lazy"})),"\n    "),Object(n.b)("p",null,"The diagram shows the components in the environment: the cluster, the deployment target environments, the cloud services, and the tools."),Object(n.b)("h4",{id:"development-cluster"},"Development cluster"),Object(n.b)("p",null,"The heart of the the Developer Tools environment is a cluster:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"An ",Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/cloud/container-service"}),"IBM Cloud Kubernetes Service"),"\nor ",Object(n.b)("a",o({parentName:"li"},{href:"https://www.ibm.com/cloud/openshift"}),"Red Hat OpenShift on IBM Cloud")," 3-node cluster"),Object(n.b)("li",{parentName:"ul"},"Cluster namespace that encapsulates the tooling installed in the cluster: ",Object(n.b)("em",{parentName:"li"},"tools")),Object(n.b)("li",{parentName:"ul"},"Cluster namespaces for deployment target environments: ",Object(n.b)("em",{parentName:"li"},"dev"),", ",Object(n.b)("em",{parentName:"li"},"test"),", and ",Object(n.b)("em",{parentName:"li"},"staging"))),Object(n.b)("h4",{id:"backend-services"},"Backend services"),Object(n.b)("p",null,"The following IBM Cloud services are created and bound to the cluster:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Capability"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Service"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Logging"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/Log-Analysis-with-LogDNA?topic=LogDNA-getting-started"}),"LogDNA Logging")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Manage app logging LogDNA")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Monitoring"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-getting-started"}),"SysDig Monitoring")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Manage monitoring of apps with SysDig")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"AppID"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/appid?topic=appid-service-access-management"}),"AppID Application Authentication")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Secure your apps, APIs and Kubernetes Ingress end points")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Cloudant"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/Cloudant?topic=cloudant-getting-started"}),"Cloudant NoSQL Database")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"NoSQL Database commonly used for data persistence")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Cloud Object Storage"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/cloud-object-storage?topic=cloud-object-storage-getting-started"}),"Cloud Object Storage Storage")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Storage service commonly used for binary content")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"PostreSQL"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://cloud.ibm.com/docs/services/databases-for-postgresql?topic=databases-for-postgresql-about"}),"PostgreSQL")," (used by SonarQube)"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"SQL Database used for structure data persistence")))),Object(n.b)("h4",{id:"continuous-delivery-tools"},"Continuous delivery tools"),Object(n.b)("p",null,"The following best-of-breed open source software tools are installed in the cluster’s ",Object(n.b)("em",{parentName:"p"},"tools")," namespace:"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Capability"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Tool"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Bitnami"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Continuous Integration"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://jenkins.io/"}),"Jenkins CI")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Yes"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Jenkins is a common tool for Continuous Integration")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Continuous Integration"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://tekton.dev/"}),"Tekton CI")),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Tekton is an emerging tool for Continuous Integration with Kubernetes and OpenShift")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Code Analysis"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://www.sonarqube.org/"}),"SonarQube")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Yes"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"SonarQube can scan code and display the results in a dashboard")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Artifact and Helm Storage"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://jfrog.com/open-source/"}),"Artifactory")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Yes"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Artifactory is an artifact storage and Helm chart repository")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Continuous Deployment"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://argoproj.github.io/argo-cd/"}),"ArgoCD")),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),"ArgoCD support Continuous Delivery with GitOps")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Contract API Testing"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://docs.pact.io/"}),"Pact")),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Pact enables API contract testing")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Web IDE"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://www.eclipse.org/che/"}),"Eclipse CHE")),Object(n.b)("td",o({parentName:"tr"},{align:null})),Object(n.b)("td",o({parentName:"tr"},{align:null}),"IDE for editing and managing code in a web browser")))),Object(n.b)("h2",{id:"getting-started"},"Getting Started"),Object(n.b)("p",null,"Get to know the Developer Tools environment:"),Object(n.b)(c,{mdxType:"AnchorLinks"},Object(n.b)(s,{to:"/ibm-garage-developer-guide/getting-started/overview",mdxType:"AnchorLink"},"Getting Started"),Object(n.b)(s,{to:"../getting-started/deploy-app",mdxType:"AnchorLink"},"Deploy Your First App"),Object(n.b)(s,{to:"../guides/overview",mdxType:"AnchorLink"},"Guides"),Object(n.b)(s,{to:"../starterkits/overview",mdxType:"AnchorLink"},"Starter Kit Templates"),Object(n.b)(s,{to:"../admin/overview",mdxType:"AnchorLink"},"Installation")))}m.isMDXComponent=!0},434:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},435:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},436:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(434),o=a(0),i=a.n(o),l=a(105),b=a.n(l),c=a(195),s=a(127),p=a(3),d=a.n(p),m=a(384),u=function(e){var t,a=e.title,r=e.tabs,o=void 0===r?[]:r;return Object(n.b)("div",{className:d()(m.pageHeader,(t={},t[m.withTabs]=o.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},g=a(435),h=a(385),O=function(e){var t=e.relativePagePath,a=e.repository,r=g.data.site.siteMetadata.repository,o=a||r,i=o.baseUrl,l=o.subDirectory,b=i+"/edit/"+o.branch+l+"/src/pages"+t;return i?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},j=a(193),f=(a(59),a(26)),v=a(386);var N=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=b()(e,{lower:!0}),i=o===r,l=new RegExp(r+"(?!-)"),c=a.replace(l,o);return Object(n.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(n.b)(f.Link,{className:v.link,to:""+c},e))}));return Object(n.b)("div",{className:v.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:v.list},o))))))},r}(i.a.Component),y=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,l=t.frontmatter,p=void 0===l?{}:l,d=t.relativePagePath,m=t.titleType,g=p.tabs,h=p.title,f=p.theme,v=p.description,w=p.keywords,A=r.data.site.pathPrefix,C=A?o.pathname.replace(A,""):o.pathname,k=g?C.split("/").slice(-1)[0]||b()(g[0],{lower:!0}):"";return Object(n.b)(s.a,{homepage:!1,theme:f,pageTitle:h,pageDescription:v,pageKeywords:w,titleType:m},Object(n.b)(u,{title:i?Object(n.b)(i,null):h,label:"label",tabs:g}),g&&Object(n.b)(N,{slug:C,tabs:g,currentTab:k}),Object(n.b)(y.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:d})),Object(n.b)(j.a,{pageContext:t,location:o,slug:C,tabs:g,currentTab:k}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-overview-index-mdx-e4804dccfdaf16abedc0.js.map