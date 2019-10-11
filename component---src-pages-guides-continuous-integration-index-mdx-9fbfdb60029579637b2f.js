(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{411:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));n(11),n(5),n(7),n(4),n(10),n(1),n(0);var a=n(101),i=n(377);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s,l={},p=(s="PageDescription",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),r={_frontmatter:l},c=i.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(c,o({},r,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(p,{mdxType:"PageDescription"},Object(a.b)("p",null,"This guide will explain how to use Jenkins to manage your Continuous Integration process")),Object(a.b)("h2",{id:"what-is-jenkins"},"What is Jenkins"),Object(a.b)("p",null,"Jenkins is a self-contained, open source automation server which can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software."),Object(a.b)("p",null,"Jenkins Pipeline (or simply “Pipeline”) is a suite of plugins which supports implementing and integrating continuous delivery pipelines into Jenkins."),Object(a.b)("p",null,"A continuous delivery pipeline is an automated expression of your process for getting software from version control right through to your users and customers."),Object(a.b)("p",null,"Jenkins Pipeline provides an extensible set of tools for modeling simple-to-complex delivery pipelines “as code”. The definition of a Jenkins Pipeline is typically written into a text file (called a ",Object(a.b)("a",o({parentName:"p"},{href:"https://jenkins.io/doc/pipeline/tour/hello-world/"}),"Jenkinsfile"),") which in turn is checked into a project’s source control repository."),Object(a.b)("h2",{id:"deploying-code-into-pipelines"},"Deploying Code into Pipelines"),Object(a.b)("p",null,"Now you have a working development environment that includes Jenkins on the IBM Public Cloud. You can now start working with code to deploy into your cluster using Jenkins pipelines. The following instructions help describe this process."),Object(a.b)("p",null,"You can click on the ",Object(a.b)("inlineCode",{parentName:"p"},"Starter Kit Templates")," tab on the Development Cluster Dashboard and follow the instructions for provisioning a new microservice into your development cluster. You can easily create an microservice by using the github templates listed below:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/template-node-react"}),"12 UI Patterns with React and Node.js")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/template-node-typescript"}),"TypeScript Microservice or BFF with Node.js")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/template-graphql-typescript"}),"GraphQL BFF with Node.js")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/template-java-spring"}),"Spring Boot Java Microservice"))),Object(a.b)("p",null,"Click on the ",Object(a.b)("inlineCode",{parentName:"p"},"Use this template")," button to create a repo in your git organisation. Then follow the pipeline registration instructions below: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You will need to be logged into the OpenShift Console or IKS clusters on the command line. ")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"You will also need a ",Object(a.b)("a",o({parentName:"p"},{href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line"}),"Personal Access Token")," from your git organistaion."))),Object(a.b)("p",null,"The following steps will enable you to register the template with OpenShift or IKS instance of Jenkins Pipelines."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),'git clone <generated start kit template>\ncd <generated start kit template>\nvi package.json ! rename the template\ngit add .\ngit commit -m "Rename project"\ngit push\n')),Object(a.b)("p",null,"The following steps will help you create a pipeline with Jenkins using the ",Object(a.b)("inlineCode",{parentName:"p"},"CLI"),"."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"igc pipeline \n? Please provide the username for https://github.com/mjperrins/hello-world-bff.git: mperrins\n? Please provide your password/personal access token: [hidden]\n? Please provide the branch the pipeline should use: master\nCreating git secret\nCopying 'ibmcloud-apikey' secret to dev\nRegistering pipeline\n? The build pipeline (mjperrins.hello-world-bff) already exists. Do you want to update it? (Y/n)\n")),Object(a.b)("p",null,"The pipeline will be created in the ",Object(a.b)("inlineCode",{parentName:"p"},"dev")," namespace in OpenShift and ",Object(a.b)("inlineCode",{parentName:"p"},"tools")," name space on IKS . The registration will copy the necessary secrets required to run the pipeline and expose the secrets to the ",Object(a.b)("inlineCode",{parentName:"p"},"Jenkinsfile"),". The app docker image will be stored in the IBM Container Registry and deployed into the ",Object(a.b)("inlineCode",{parentName:"p"},"dev")," name space. "),Object(a.b)("p",null,"This is screen shot of a Jenkins pipeline, you can access this view from the Developer Dashboard."),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.60440985732814%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABtUlEQVQoz41Sy27VMBD1NyP6ELCidMWqFRvEBvElRbCBQndlUyFuEidxLs3DjzhOnOQwccoVgot0Jzo647FncsYe9ub1K1xcXuDpsyc4Pjl6wGOcnB7t8Du++I9Oj/GS/E/v3uLjl8+4ubnG+w9XODs/x9mL52DjPOF/NtN3qI0EPQAsiTgqZTGOHsMwBNhWo+89xcaAaZwwTdNuHWJ+4SnszfOM6293uPp6C1ZWEsZS6XlVsxRMeQJtbDj4Jw4xxosayrhdwsKLmsW892hNS2p7Um1hjIFSCtZaNHUDrTU0reu6hpQSVVWD5UVJLXeYQsFVyVKgdy4kiK1AWZfEReC8ELiv7pGJDDntZSIPfvFzG3zWGvpD08C5DkobtJ0DF1tIimmn8cNswB3HxkRIfYZNG4H3aeAVMSIbgw8pIh2DVU2BhpKXdhwp83TJmRCIowhucogoIetzxDZB7lde1zES8hPLA6dDhsRwsI6UtVqhqSpSKmFJYVmWQe1Id9l7an94gP+L94Dteykuatx+L8ALSaNx+CyGVx5Gh3+xqHBwQ0fc7d03VlEXdM9GQtHcSurSEH4BO/U7KbUsrvEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Jenkins Pipelines View",title:"Jenkins Pipelines View",src:"/garage-developer-guide/static/1978812908f508306889d51778ada12a/fb070/pipelines.png",srcSet:["/garage-developer-guide/static/1978812908f508306889d51778ada12a/d6747/pipelines.png 288w","/garage-developer-guide/static/1978812908f508306889d51778ada12a/09548/pipelines.png 576w","/garage-developer-guide/static/1978812908f508306889d51778ada12a/fb070/pipelines.png 1152w","/garage-developer-guide/static/1978812908f508306889d51778ada12a/777ff/pipelines.png 1542w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "),Object(a.b)("p",null,"This is a screen shot of the Build Pipeline in OpenShift. You can access this from the ",Object(a.b)("inlineCode",{parentName:"p"},"Application Console")," and selecting ",Object(a.b)("inlineCode",{parentName:"p"},"Builds->Pipelines")," from the menu."),Object(a.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(a.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.80078380143697%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB7UlEQVQoz5WRW2sTQRTH963WxFxspSLSihdiq01iaG0pIoLghVaIgr75FaWKGnNXv4Z9MS8mZpM02dm57c7+PTsbVBC0Hvhxhplz/nMuzsXVNayuXcLK+QtYPreCXH4J2VweqXQGC4spnCIWfnL6N1JYTKVxJpNDJpvH2aVlpDNZOJuVHVzbKOPOvQd4/baGN7UmXr2r4/B9Ax/qTTRbbbTaHTSJVrtraXe66HQ/ofvxMxr0Xm+2UKPYRqsD59bOXawXt7BffY7+TOIbCzHgBn3fwBUGY+I4AKYGmCGBE14EMPxpzu79A8Si1Rcv4c58CKXhCQ6hNbhSmInkLva+lJYpZ+QVjn0GqSSUlhQjEIYhnGJlF1fXS3j85BkY5whMhAkbQWphGXsu/RtR8gQ6UHTHMWYuoijCcDqwQlz5dP4OYwyc8vYeCjcriaCQ0KHBaObawJjhdAgT0Z03okSOv1n8iVPa2rNLebhfBfM8+6ACaiPQVBERKhuoQ43QhPYcV/LLz89z79wo38aV60Ur2Ov1rCBjDIOhC04VR5T0P+ZslLZxubBpW+73+5BCwBe0DC7tPOe92N9PQiJIFT46eIovR0dQtEVGghNfgWsDn+BB0k68nJMJFoq2wq+DMZgMaFY0MxPNZ5OQCP7bfgCHtdgD9DuhTQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(a.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift Pipelines View",title:"OpenShift Pipelines View",src:"/garage-developer-guide/static/0c0ff2b60e2650064c8b6f39ba4c4911/fb070/ospipelines.png",srcSet:["/garage-developer-guide/static/0c0ff2b60e2650064c8b6f39ba4c4911/d6747/ospipelines.png 288w","/garage-developer-guide/static/0c0ff2b60e2650064c8b6f39ba4c4911/09548/ospipelines.png 576w","/garage-developer-guide/static/0c0ff2b60e2650064c8b6f39ba4c4911/fb070/ospipelines.png 1152w","/garage-developer-guide/static/0c0ff2b60e2650064c8b6f39ba4c4911/10f3a/ospipelines.png 1531w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "),Object(a.b)("h3",{id:"stages"},"Stages"),Object(a.b)("p",null,"You can see from either the vanilla Jenkins pipelines view of the Application Console pipelines view, each template offers a number of pipeline stages. The stages have been configured to be work from the defined ",Object(a.b)("inlineCode",{parentName:"p"},"secrets")," and ",Object(a.b)("inlineCode",{parentName:"p"},"config maps")," that have been defined in the Development cluster setup."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," is consistent between registration with OpenShift or IKS. The ",Object(a.b)("inlineCode",{parentName:"p"},"Dockerfile")," has been optimized for ",Object(a.b)("inlineCode",{parentName:"p"},"UBI")," images, this means the docker images when deployed can run on both OpenShift and IKS."),Object(a.b)("p",null,"The following gives a description of what each stage in the pipeline does. The ",Object(a.b)("em",{parentName:"p"},"Optional")," stages can be deleted or ignored if the tool support it is not installed. These stages represent a typical production pipeline flow for a Cloud Native application."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Setup")," clones the code into the pipeline\t"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Build")," runs the build commands for the code"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Test"),"\tvalidates the unit tests for the code"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Publish pacts"),"\t(",Object(a.b)("em",{parentName:"li"},"optional"),") publishes any pact contracts that have been defined"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Verify pact")," (",Object(a.b)("em",{parentName:"li"},"optional"),") verifies the pact contracts "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Sonar scan")," (",Object(a.b)("em",{parentName:"li"},"optional"),") runs a sonar code scan of the source code and publishes the results to SonarQube"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Verify environment")," Validates the OpenShift or IKS environment configuration is valid\t"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Build image")," Builds the code into a Docker images and stores it in the IBM Cloud Image registry"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Deploy to DEV env"),"\tDeploys the Docker image tagged version to ",Object(a.b)("inlineCode",{parentName:"li"},"dev")," namespace using Helm Chart"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Package Helm Chart")," (",Object(a.b)("em",{parentName:"li"},"optional"),") Stores the tagged version of the Helm chart into Artifactory"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Health Check")," Validates the Health Endpoint of the deployed application")),Object(a.b)("h3",{id:"ingress-urls-or-testing"},"Ingress URLs or testing"),Object(a.b)("p",null,"If you want to get easy access to your application routes or ingress end points for your apps run the following command. All the ",Object(a.b)("inlineCode",{parentName:"p"},"igc")," commands run the same on IKS and OpenShift."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"igc ingress -n dev\n")),Object(a.b)("p",null,"This will list out the applications URLs that have been deployed."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"Host(s):\n[\n  'http://stock-bff-dev.showcase-dev-oswdc06-cl.us-east.containers.appdomain.cloud',\n  'http://stock-service-dev.showcase-dev-oswdc06-cl.us-east.containers.appdomain.cloud',\n  'http://stock-ui-dev.showcase-dev-oswdc06-cl.us-east.containers.appdomain.cloud',\n]\n")),Object(a.b)("p",null,"Once you become familar with deploying code into OpenShift or IKS, read up about how you can manage code deployment with ",Object(a.b)("inlineCode",{parentName:"p"},"Continuous Deployment")," with ",Object(a.b)("inlineCode",{parentName:"p"},"Artiactory")," and ",Object(a.b)("inlineCode",{parentName:"p"},"ArgoCD")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"./ARTIFACTORY.md"}),"Artiact Storage with Artifactory")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",o({parentName:"li"},{href:"./ARGOCD.md"}),"Continuous Deployment with ArgoCD"))),Object(a.b)("p",null,"You can use the ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/template-argocd-test"}),"Argo CD Template")," to help define a deployment configuration for ",Object(a.b)("inlineCode",{parentName:"p"},"test")," and ",Object(a.b)("inlineCode",{parentName:"p"},"staging")," namespaces."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-continuous-integration-index-mdx-9fbfdb60029579637b2f.js.map