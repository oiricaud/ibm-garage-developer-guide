(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{409:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return b}));n(11),n(5),n(7),n(4),n(10),n(1),n(0);var a=n(101),o=n(377);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r,c={},l=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),s={_frontmatter:c},p=o.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(p,i({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l,{mdxType:"PageDescription"},Object(a.b)("p",null,"This project is a ",Object(a.b)("a",i({parentName:"p"},{href:"https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/"}),"Gatsby theme")," that empowers developers, writers, and designers to create fast, accessible sites that look and feel like Carbon. Follow along to start creating your own site.")),Object(a.b)("h1",{id:"argo-cd-configuration"},"Argo CD Configuration"),Object(a.b)("p",null,"To enable Argo CD to work seamlessly with the ",Object(a.b)("a",i({parentName:"p"},{href:"https://github.ibm.com/garage-catalyst/iteration-zero-ibmcloud"}),"Iteration Zero Tools")," installation you need to configure Artifactory to be used as a Helm Chart Repository. This will enable the use of Helm charts that are included in the applications to be de-coupled from the image that is build with the CI pipeline with Jenkins. There is an sample in this repository that directly references the image from the IBM Cloud Image Registry if you do not want to use helm charts from a registery."),Object(a.b)("h3",{id:"update-config-map-for-argo-cd"},"Update Config Map for Argo CD"),Object(a.b)("p",null,"In the ",Object(a.b)("inlineCode",{parentName:"p"},"config")," directory there is a ",Object(a.b)("inlineCode",{parentName:"p"},"yaml")," file called ",Object(a.b)("inlineCode",{parentName:"p"},"argocd-helm-repo.yaml"),". Edit this file and modify the ",Object(a.b)("inlineCode",{parentName:"p"},"- url:")," to point to the URL of the Artificatory Repository. "),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: argocd-cm\n  namespace: tools\ndata:\n  helm.repositories: |\n    - url: http://artifactory.catalyst-team-iks-cluster.us-east.containers.appdomain.cloud/artifactory/generic-local/catalyst-team/\n      name: catalyst-team\n")),Object(a.b)("p",null,"If you have configured the Artifactory instance to store Helm charts from your CI pipeline with Jenkins. You can easily get this value by Logging into Artifactory and clicking on ",Object(a.b)("inlineCode",{parentName:"p"},"Setup Me Up")," tile and click on the repository ",Object(a.b)("inlineCode",{parentName:"p"},"generic-local")," "),Object(a.b)("img",{src:"./images/setupartifactory.png",alt:"Setup",title:"Setup Screen"}),Object(a.b)("p",null,"This will open the detailed setup view and from here you can copy the URL from the setup screen."),Object(a.b)("img",{src:"./images/artifactoryurlsetup.png",alt:"Setup",title:"Setup Screen"}),Object(a.b)("h3",{id:"run-the-kubectl-command"},"Run the Kubectl Command"),Object(a.b)("p",null,"Now you have edited the yamp you need to make sure you logged into the Command Line with either IBM Kubernetes Service or Red Hat OpenShift instructions. "),Object(a.b)("p",null,"You can test this by running the following commands :"),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-bash"}),"kubectl get nodes | oc get nodes\n")),Object(a.b)("p",null,"There is a helper shell script that you can run call ",Object(a.b)("inlineCode",{parentName:"p"},"updateArgo.sh")," this runs the following command to add the details of the Helm Registry with ArgoCD Config map."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{}),"#!/bin/bash\nkubectl apply -f argocd-helm-repo.yaml\n")),Object(a.b)("p",null,"Once this is complete you can validate the configuration by opening the Config Map in the IKS Console or OpenShift Cluster Console. Navigate to the ",Object(a.b)("inlineCode",{parentName:"p"},"tools")," namespace and view the ",Object(a.b)("inlineCode",{parentName:"p"},"Config Maps")," open up the config map called ",Object(a.b)("inlineCode",{parentName:"p"},"argocd-cm")," and validate the the ",Object(a.b)("inlineCode",{parentName:"p"},"Data")," section now has a ",Object(a.b)("inlineCode",{parentName:"p"},"helm.repositorys")," entry that is referencing Artifactory.  "))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-continuous-deployment-index-mdx-8189eeaea4ee15c2eb16.js.map