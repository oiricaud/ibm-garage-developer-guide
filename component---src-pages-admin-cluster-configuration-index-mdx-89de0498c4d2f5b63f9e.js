(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{361:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));a(11),a(6),a(7),a(4),a(10),a(0);var n=a(106),r=a(415);a(1);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c,o={},s=(c="PageDescription",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),l={_frontmatter:o},b=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,i({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Within the created Kubernetes or OpenShift cluster there are a number secrets\nand config maps that are either provided by the IBM Cloud public environment and\nutilized by the Terraform scripts or are created during the Terraform provisioning\nprocess.")),Object(n.b)("h2",{id:"namespaces"},"Namespaces"),Object(n.b)("p",null,"The Iteration Zero scripts create four namespaces that are used by the components deployed into the cluster: ",Object(n.b)("inlineCode",{parentName:"p"},"tools"),",\n",Object(n.b)("inlineCode",{parentName:"p"},"dev"),", ",Object(n.b)("inlineCode",{parentName:"p"},"test"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"staging"),". The actual names used for the namespaces are provided in Terraform variables with the\ndefaults being those listed. The variables are then passed into the namespaces module in ",Object(n.b)("inlineCode",{parentName:"p"},"stage1-namespaces.tf"),"."),Object(n.b)("h2",{id:"provided-resources"},"Provided resources"),Object(n.b)("h3",{id:"tls-secret"},"TLS secret"),Object(n.b)("p",null,"When the cluster is created, a secret containing the TLS certs for the ingress subdomain is provided in the\n",Object(n.b)("inlineCode",{parentName:"p"},"default")," namespace. The the name of the secret is based off of the cluster name with some rules applied to limit the\nlength and replace disallowed characters."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," To avoid issues with the naming conventions for the secret, the Iteration Zero scripts look for the secret\nthat has a ",Object(n.b)("inlineCode",{parentName:"p"},"tls.key")," value: ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl get secrets -o jsonpath='{.items[?(@.data.tls\\.key != \"\")].metadata.name}'"),".\nIdeally this would be identified using a label and a selector…"),Object(n.b)("p",null,"During the Iteration Zero process, the TLS secret is copied into each of the four namespaces created and used by the\nIteration Zero processes."),Object(n.b)("h3",{id:"pull-secrets"},"Pull secrets"),Object(n.b)("p",null,"Pull secrets for the IBM Cloud Image Registry are generated in the cluster as part of the Iteration Zero process to\nprepare the namespaces. The secrets are initially created in the ",Object(n.b)("inlineCode",{parentName:"p"},"default")," namespace with the following names:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"default-icr-io")," "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"default-{region}-icr-io")," ")),Object(n.b)("p",null,"During the namespace preparation process, the pull secrets are copied into the different namespaces with ",Object(n.b)("inlineCode",{parentName:"p"},"default-"),"\nprefix dropped. E.g."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"icr-io")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"{region}-icr-io"))),Object(n.b)("p",null,"The pull secrets are also added to the ",Object(n.b)("inlineCode",{parentName:"p"},"default")," service account in each of the namespaces. As a result, it is not\nnecessary to directly reference the pull secret as long as the pod runs under the default service account."),Object(n.b)("h2",{id:"created-resources"},"Created resources"),Object(n.b)("p",null,"The following resources are all created during the Iteration Zero provisioning process. These resources\nare used generally to expose the config of the installed tools but specifically used by the CI pipeline (",Object(n.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration"}),"Jenkins"),", ",Object(n.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration-tekton"}),"Tekton"),", etc.) to interact with the deployed tools. The resources are bound as optional environment variables\nin the containers used within the pipeline so if a particular tool has not been installed the\nassociated environment variables won’t be set. For example:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"  envFrom:\n    - configMapRef:\n        name: pactbroker-config\n        optional: true\n    - configMapRef:\n        name: sonarqube-config\n        optional: true\n    - secretRef:\n        name: sonarqube-access\n        optional: true\n")),Object(n.b)("h3",{id:"ibm-cloud-config"},"IBM Cloud config"),Object(n.b)("p",null,"The Iteration Zero script creates a config map and secret named ",Object(n.b)("inlineCode",{parentName:"p"},"ibmcloud-config")," and ",Object(n.b)("inlineCode",{parentName:"p"},"ibmcloud-access"),"\nin the ",Object(n.b)("inlineCode",{parentName:"p"},"default")," namespace that contains the relevant configuration values for the cluster within the IBM\nCloud account. The config map and secret are copied into each of the Iteration Zero namespaces as the\nnamespaces are created."),Object(n.b)("h4",{id:"ibmcloud-config-config-map"},Object(n.b)("inlineCode",{parentName:"h4"},"ibmcloud-config")," config map"),Object(n.b)("p",null,"The following values are collected:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"CLUSTER_TYPE - the type of cluster (kubernetes or openshift)"),Object(n.b)("li",{parentName:"ul"},"APIURL - the api url used to connect to the IBM Cloud environment"),Object(n.b)("li",{parentName:"ul"},"SERVER_URL - the server url used to connect to the cluster, particularly for OpenShift"),Object(n.b)("li",{parentName:"ul"},"RESOURCE_GROUP - the IBM Cloud resource group where the cluster has been installed"),Object(n.b)("li",{parentName:"ul"},"REGISTRY_URL - the url to the image registry"),Object(n.b)("li",{parentName:"ul"},"REGISTRY_NAMESPACE - the namespace within the image registry where images will be stored"),Object(n.b)("li",{parentName:"ul"},"REGION - the IBM Cloud region where where the cluster has been installed"),Object(n.b)("li",{parentName:"ul"},"CLUSTER_NAME - the name of the cluster"),Object(n.b)("li",{parentName:"ul"},"INGRESS_SUBDOMAIN - the subdomain for the cluster to use in building ingress urls"),Object(n.b)("li",{parentName:"ul"},"TLS_SECRET_NAME - the name of the secret that contains the TLS certificate information")),Object(n.b)("h4",{id:"ibmcloud-access-secret"},Object(n.b)("inlineCode",{parentName:"h4"},"ibmcloud-access")," secret"),Object(n.b)("p",null,"The following values are collected:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"APIKEY - the IBM Cloud apikey used to access the environment")),Object(n.b)("h3",{id:"argocd-config"},"ArgoCD config"),Object(n.b)("h4",{id:"argocd-config-config-map"},Object(n.b)("inlineCode",{parentName:"h4"},"argocd-config")," config map"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ARGOCD_URL - the url of the ArgoCD ingress")),Object(n.b)("h4",{id:"argocd-access-secret"},Object(n.b)("inlineCode",{parentName:"h4"},"argocd-access")," secret"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ARGOCD_PASSWORD - the password for the argocd user"),Object(n.b)("li",{parentName:"ul"},"ARGOCD_USER - the user id of the argocd user")),Object(n.b)("h3",{id:"artifactory-config"},"Artifactory config"),Object(n.b)("h4",{id:"artifactory-config-config-map"},Object(n.b)("inlineCode",{parentName:"h4"},"artifactory-config")," config map"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ARTIFACTORY_URL - the url for the Artifactory ingress")),Object(n.b)("h4",{id:"artifactory-access-config-map"},Object(n.b)("inlineCode",{parentName:"h4"},"artifactory-access")," config map"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ARTIFACTORY_USER - the user name of the admin user"),Object(n.b)("li",{parentName:"ul"},"ARTIFACTORY_PASSWORD - the password for the admin user"),Object(n.b)("li",{parentName:"ul"},"ARTIFACTORY_ENCRPT - the encrypted password for the admin user. This value is initially blank\nand must be updated after the value is generated in the UI"),Object(n.b)("li",{parentName:"ul"},"ARTIFACTORY_ADMIN_ACCESS_USER - the admin access user"),Object(n.b)("li",{parentName:"ul"},"ARTIFACTORY_ADMIN_ACCESS_PASSWORD - the admin access password")),Object(n.b)("h3",{id:"jenkins-config"},"Jenkins config"),Object(n.b)("h4",{id:"jenkins-config-config-map"},Object(n.b)("inlineCode",{parentName:"h4"},"jenkins-config")," config map"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"JENKINS_HOST - the host name of the Jenkins ingress"),Object(n.b)("li",{parentName:"ul"},"JENKINS_URL - the url of the Jenkins ingress")),Object(n.b)("h4",{id:"jenkins-access-secret"},Object(n.b)("inlineCode",{parentName:"h4"},"jenkins-access")," secret"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"api_token - the Jenkins api token"),Object(n.b)("li",{parentName:"ul"},"host - the host name of the Jenkins ingress"),Object(n.b)("li",{parentName:"ul"},"url - the url of the Jenkins ingress"),Object(n.b)("li",{parentName:"ul"},"username - the Jenkins user name"),Object(n.b)("li",{parentName:"ul"},"password - the Jenkins password")),Object(n.b)("h3",{id:"pactbroker-config"},"PactBroker config"),Object(n.b)("h4",{id:"pactbroker-config-config-map"},Object(n.b)("inlineCode",{parentName:"h4"},"pactbroker-config")," config map"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"PACTBROKER_URL - the url of the Pact Broker ingress")),Object(n.b)("h3",{id:"sonarqube-config"},"SonarQube config"),Object(n.b)("h4",{id:"sonarqube-config-config-map"},Object(n.b)("inlineCode",{parentName:"h4"},"sonarqube-config")," config map"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"SONARQUBE_URL - the url of the SonarQube ingress")),Object(n.b)("h4",{id:"sonarqube-access-secret"},Object(n.b)("inlineCode",{parentName:"h4"},"sonarqube-access")," secret"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"SONARQUBE_USER - the user name of the SonarQube user"),Object(n.b)("li",{parentName:"ul"},"SONARQUBE_PASSWORD - the password of the SonarQube user")))}p.isMDXComponent=!0},413:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},414:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},415:function(e,t,a){"use strict";a(30),a(26);var n=a(413),r=a(0),i=a.n(r),c=a(105),o=a.n(c),s=a(190),l=a(126),b=a(3),p=a.n(b),u=a(352),d=a(1),h=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},m=a(414),O=a(353),f=function(e){var t=e.relativePagePath,a=e.repository,n=m.data.site.siteMetadata.repository,r=a||n,i=r.baseUrl,c=r.subDirectory,o=i+"/edit/"+r.branch+c+"/src/pages"+t;return i?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:o},"Edit this page on GitHub"))):null},j=a(188),g=(a(56),a(23)),N=a(354);var v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=o()(e,{lower:!0}),i=r===n,c=new RegExp(n+"(?!-)"),s=a.replace(c,r);return Object(d.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=i,t),N.listItem)},Object(d.b)(g.Link,{className:N.link,to:""+s},e))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:N.list},r))))))},n}(i.a.Component),C=a(189);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,i=e.Title,c=t.frontmatter,b=void 0===c?{}:c,p=t.relativePagePath,u=t.titleType,m=b.tabs,O=b.title,g=b.theme,N=b.description,R=b.keywords,y=n.data.site.pathPrefix,T=y?r.pathname.replace(y,""):r.pathname,w=m?T.split("/").slice(-1)[0]||o()(m[0],{lower:!0}):"";return Object(d.b)(l.a,{tabs:m,homepage:!1,theme:g,pageTitle:O,pageDescription:N,pageKeywords:R,titleType:u},Object(d.b)(h,{title:i?Object(d.b)(i,null):O,label:"label",tabs:m}),m&&Object(d.b)(v,{slug:T,tabs:m,currentTab:w}),Object(d.b)(C.a,{padded:!0},a,Object(d.b)(f,{relativePagePath:p})),Object(d.b)(j.a,{pageContext:t,location:r,slug:T,tabs:m,currentTab:w}),Object(d.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-admin-cluster-configuration-index-mdx-89de0498c4d2f5b63f9e.js.map