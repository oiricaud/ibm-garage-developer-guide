(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{403:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(109),r=a(454);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var c,o={},s=(c="PageDescription",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),l={_frontmatter:o},b=r.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(b,i({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Within the created Kubernetes or OpenShift cluster there are a number secrets\nand config maps that are either provided by the IBM Cloud public environment and\nutilized by the Terraform scripts or are created during the Terraform provisioning\nprocess.")),Object(n.b)("h2",{id:"namespaces"},"Namespaces"),Object(n.b)("p",null,"The Iteration Zero scripts create four namespaces that are used by the components deployed into the cluster: ",Object(n.b)("inlineCode",{parentName:"p"},"tools"),",\n",Object(n.b)("inlineCode",{parentName:"p"},"dev"),", ",Object(n.b)("inlineCode",{parentName:"p"},"test"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"staging"),". The actual names used for the namespaces are provided in Terraform variables with the\ndefaults being those listed. The variables are then passed into the namespaces module in ",Object(n.b)("inlineCode",{parentName:"p"},"stage1-namespaces.tf"),"."),Object(n.b)("h2",{id:"provided-resources"},"Provided resources"),Object(n.b)("h3",{id:"tls-secret"},"TLS secret"),Object(n.b)("p",null,"When the cluster is created, a secret containing the TLS certs for the ingress subdomain is provided in the\n",Object(n.b)("inlineCode",{parentName:"p"},"default")," namespace. The the name of the secret is based off of the cluster name with some rules applied to limit the\nlength and replace disallowed characters."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," To avoid issues with the naming conventions for the secret, the Iteration Zero scripts look for the secret\nthat has a ",Object(n.b)("inlineCode",{parentName:"p"},"tls.key")," value: ",Object(n.b)("inlineCode",{parentName:"p"},"kubectl get secrets -o jsonpath='{.items[?(@.data.tls\\.key != \"\")].metadata.name}'"),".\nIdeally this would be identified using a label and a selector…"),Object(n.b)("p",null,"During the Iteration Zero process, the TLS secret is copied into each of the four namespaces created and used by the\nIteration Zero processes."),Object(n.b)("h3",{id:"pull-secrets"},"Pull secrets"),Object(n.b)("p",null,"Pull secrets for the IBM Cloud Image Registry are generated in the cluster as part of the Iteration Zero process to\nprepare the namespaces. The secrets are initially created in the ",Object(n.b)("inlineCode",{parentName:"p"},"default")," namespace with the following names:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"default-icr-io")," "),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"default-{region}-icr-io")," ")),Object(n.b)("p",null,"During the namespace preparation process, the pull secrets are copied into the different namespaces with ",Object(n.b)("inlineCode",{parentName:"p"},"default-"),"\nprefix dropped. E.g."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"icr-io")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"{region}-icr-io"))),Object(n.b)("p",null,"The pull secrets are also added to the ",Object(n.b)("inlineCode",{parentName:"p"},"default")," service account in each of the namespaces. As a result, it is not\nnecessary to directly reference the pull secret as long as the pod runs under the default service account."),Object(n.b)("h2",{id:"created-resources"},"Created resources"),Object(n.b)("p",null,"The following resources are all created during the Iteration Zero provisioning process. These resources\nare used generally to expose the config of the installed tools but specifically used by the CI pipeline (",Object(n.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration"}),"Jenkins"),", ",Object(n.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration-tekton"}),"Tekton"),", etc.) to interact with the deployed tools. The resources are bound as optional environment variables\nin the containers used within the pipeline so if a particular tool has not been installed the\nassociated environment variables won’t be set. For example:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml"}),"  envFrom:\n    - configMapRef:\n        name: pactbroker-config\n        optional: true\n    - configMapRef:\n        name: sonarqube-config\n        optional: true\n    - secretRef:\n        name: sonarqube-access\n        optional: true\n")),Object(n.b)("h3",{id:"ibm-cloud-config"},"IBM Cloud config"),Object(n.b)("p",null,"The Iteration Zero script creates a config map and secret named ",Object(n.b)("inlineCode",{parentName:"p"},"ibmcloud-config")," and ",Object(n.b)("inlineCode",{parentName:"p"},"ibmcloud-access"),"\nin the ",Object(n.b)("inlineCode",{parentName:"p"},"default")," namespace that contains the relevant configuration values for the cluster within the IBM\nCloud account. The config map and secret are copied into each of the Iteration Zero namespaces as the\nnamespaces are created."),Object(n.b)("h4",{id:"ibmcloud-config-config-map"},Object(n.b)("inlineCode",{parentName:"h4"},"ibmcloud-config")," config map"),Object(n.b)("p",null,"The following values are collected:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"CLUSTER_TYPE - the type of cluster (kubernetes or openshift)"),Object(n.b)("li",{parentName:"ul"},"APIURL - the api url used to connect to the IBM Cloud environment"),Object(n.b)("li",{parentName:"ul"},"SERVER_URL - the server url used to connect to the cluster, particularly for OpenShift"),Object(n.b)("li",{parentName:"ul"},"RESOURCE_GROUP - the IBM Cloud resource group where the cluster has been installed"),Object(n.b)("li",{parentName:"ul"},"REGISTRY_URL - the url to the image registry"),Object(n.b)("li",{parentName:"ul"},"REGISTRY_NAMESPACE - the namespace within the image registry where images will be stored"),Object(n.b)("li",{parentName:"ul"},"REGION - the IBM Cloud region where where the cluster has been installed"),Object(n.b)("li",{parentName:"ul"},"CLUSTER_NAME - the name of the cluster"),Object(n.b)("li",{parentName:"ul"},"INGRESS_SUBDOMAIN - the subdomain for the cluster to use in building ingress urls"),Object(n.b)("li",{parentName:"ul"},"TLS_SECRET_NAME - the name of the secret that contains the TLS certificate information")),Object(n.b)("h4",{id:"ibmcloud-access-secret"},Object(n.b)("inlineCode",{parentName:"h4"},"ibmcloud-access")," secret"),Object(n.b)("p",null,"The following values are collected:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"APIKEY - the IBM Cloud apikey used to access the environment")),Object(n.b)("h3",{id:"argocd-config"},"ArgoCD config"),Object(n.b)("h4",{id:"argocd-config-config-map"},Object(n.b)("inlineCode",{parentName:"h4"},"argocd-config")," config map"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ARGOCD_URL - the url of the ArgoCD ingress")),Object(n.b)("h4",{id:"argocd-access-secret"},Object(n.b)("inlineCode",{parentName:"h4"},"argocd-access")," secret"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ARGOCD_PASSWORD - the password for the argocd user"),Object(n.b)("li",{parentName:"ul"},"ARGOCD_USER - the user id of the argocd user")),Object(n.b)("h3",{id:"artifactory-config"},"Artifactory config"),Object(n.b)("h4",{id:"artifactory-config-config-map"},Object(n.b)("inlineCode",{parentName:"h4"},"artifactory-config")," config map"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ARTIFACTORY_URL - the url for the Artifactory ingress")),Object(n.b)("h4",{id:"artifactory-access-config-map"},Object(n.b)("inlineCode",{parentName:"h4"},"artifactory-access")," config map"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ARTIFACTORY_USER - the user name of the admin user"),Object(n.b)("li",{parentName:"ul"},"ARTIFACTORY_PASSWORD - the password for the admin user"),Object(n.b)("li",{parentName:"ul"},"ARTIFACTORY_ENCRPT - the encrypted password for the admin user. This value is initially blank\nand must be updated after the value is generated in the UI"),Object(n.b)("li",{parentName:"ul"},"ARTIFACTORY_ADMIN_ACCESS_USER - the admin access user"),Object(n.b)("li",{parentName:"ul"},"ARTIFACTORY_ADMIN_ACCESS_PASSWORD - the admin access password")),Object(n.b)("h3",{id:"jenkins-config"},"Jenkins config"),Object(n.b)("h4",{id:"jenkins-config-config-map"},Object(n.b)("inlineCode",{parentName:"h4"},"jenkins-config")," config map"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"JENKINS_HOST - the host name of the Jenkins ingress"),Object(n.b)("li",{parentName:"ul"},"JENKINS_URL - the url of the Jenkins ingress")),Object(n.b)("h4",{id:"jenkins-access-secret"},Object(n.b)("inlineCode",{parentName:"h4"},"jenkins-access")," secret"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"api_token - the Jenkins api token"),Object(n.b)("li",{parentName:"ul"},"host - the host name of the Jenkins ingress"),Object(n.b)("li",{parentName:"ul"},"url - the url of the Jenkins ingress"),Object(n.b)("li",{parentName:"ul"},"username - the Jenkins user name"),Object(n.b)("li",{parentName:"ul"},"password - the Jenkins password")),Object(n.b)("h3",{id:"pactbroker-config"},"PactBroker config"),Object(n.b)("h4",{id:"pactbroker-config-config-map"},Object(n.b)("inlineCode",{parentName:"h4"},"pactbroker-config")," config map"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"PACTBROKER_URL - the url of the Pact Broker ingress")),Object(n.b)("h3",{id:"sonarqube-config"},"SonarQube config"),Object(n.b)("h4",{id:"sonarqube-config-config-map"},Object(n.b)("inlineCode",{parentName:"h4"},"sonarqube-config")," config map"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"SONARQUBE_URL - the url of the SonarQube ingress")),Object(n.b)("h4",{id:"sonarqube-access-secret"},Object(n.b)("inlineCode",{parentName:"h4"},"sonarqube-access")," secret"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"SONARQUBE_USER - the user name of the SonarQube user"),Object(n.b)("li",{parentName:"ul"},"SONARQUBE_PASSWORD - the password of the SonarQube user")))}p.isMDXComponent=!0},452:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},453:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},454:function(e,t,a){"use strict";a(31),a(28);var n=a(1),r=a(452),i=a(0),c=a.n(i),o=a(108),s=a.n(o),l=a(196),b=a(130),p=a(3),u=a.n(p),d=a(391),h=function(e){var t,a=e.title,r=e.tabs,i=void 0===r?[]:r;return Object(n.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:d.text},a)))))},m=a(453),O=a(392),f=function(e){var t=e.relativePagePath,a=e.repository,r=m.data.site.siteMetadata.repository,i=a||r,c=i.baseUrl,o=i.subDirectory,s=c+"/edit/"+i.branch+o+"/src/pages"+t;return c?Object(n.b)("div",{className:"bx--row "+O.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},j=a(195),g=(a(59),a(26)),N=a(393);var v=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=s()(e,{lower:!0}),c=i===r,o=new RegExp(r+"(?!-)"),l=a.replace(o,i);return Object(n.b)("li",{key:e,className:u()((t={},t[N.selectedItem]=c,t),N.listItem)},Object(n.b)(g.Link,{className:N.link,to:""+l},e))}));return Object(n.b)("div",{className:N.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:N.list},i))))))},r}(c.a.Component),C=a(197);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,c=e.Title,o=t.frontmatter,p=void 0===o?{}:o,u=t.relativePagePath,d=t.titleType,m=p.tabs,O=p.title,g=p.theme,N=p.description,R=p.keywords,y=r.data.site.pathPrefix,T=y?i.pathname.replace(y,""):i.pathname,w=m?T.split("/").slice(-1)[0]||s()(m[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:g,pageTitle:O,pageDescription:N,pageKeywords:R,titleType:d},Object(n.b)(h,{title:c?Object(n.b)(c,null):O,label:"label",tabs:m}),m&&Object(n.b)(v,{slug:T,tabs:m,currentTab:w}),Object(n.b)(C.a,{padded:!0},a,Object(n.b)(f,{relativePagePath:u})),Object(n.b)(j.a,{pageContext:t,location:i,slug:T,tabs:m,currentTab:w}),Object(n.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-admin-cluster-configuration-index-mdx-4a53b7a0797df5d0852d.js.map