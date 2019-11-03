(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{416:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),i=a(442);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={},l={_frontmatter:s},r=i.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(r,o({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Continous integration is a software development technique where software is built regularly by a team in an automated fashion.\nThis quote helps explain it:"),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Continuous Integration is a software development practice where members of a team integrate their work frequently,\nusually each person integrates at least daily - leading to multiple integrations per day.\nEach integration is verified by an automated build (including test) to\ndetect integration errors as quickly as possible. Many teams find that this approach leads to significantly\nreduced integration problems and allows a team to develop cohesive software more rapidly"),Object(n.b)("cite",null,"– Martin Fowler")),Object(n.b)("h2",{id:"what-is-jenkins"},"What is Jenkins"),Object(n.b)("p",null,"Jenkins is a self-contained, open source automation server which can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software.\nIt is a perfect tool for helping managing continuous integration tasks for a wide range of software component’s."),Object(n.b)("p",null,"Jenkins Pipeline (or simply “Pipeline”) is a suite of plugins which supports implementing and integrating continuous delivery pipelines into Jenkins."),Object(n.b)("p",null,"A continuous delivery pipeline is an automated expression of your process for getting software from version control right through to your users and customers."),Object(n.b)("p",null,"Jenkins Pipeline provides an extensible set of tools for modeling simple-to-complex delivery pipelines “as code”. The definition of a Jenkins Pipeline is typically written into a text file (called a ",Object(n.b)("a",o({parentName:"p"},{href:"https://jenkins.io/doc/pipeline/tour/hello-world/"}),"Jenkinsfile"),") which in turn is checked into a project’s source control repository."),Object(n.b)("h3",{id:"pipelines"},"Pipelines"),Object(n.b)("h3",{id:"stages"},"Stages"),Object(n.b)("p",null,"You can see from either the vanilla Jenkins pipelines view of the Application Console pipelines view, each template offers a number of pipeline stages. The stages have been configured to be work from the defined ",Object(n.b)("inlineCode",{parentName:"p"},"secrets")," and ",Object(n.b)("inlineCode",{parentName:"p"},"config maps")," that have been defined in the Development cluster setup."),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," is consistent between registration with OpenShift or IKS. The ",Object(n.b)("inlineCode",{parentName:"p"},"Dockerfile")," has been optimized for ",Object(n.b)("inlineCode",{parentName:"p"},"UBI")," images, this means the docker images when deployed can run on both OpenShift and IKS."),Object(n.b)("p",null,"The following gives a description of what each stage in the pipeline does. The ",Object(n.b)("em",{parentName:"p"},"Optional")," stages can be deleted or ignored if the tool support it is not installed. These stages represent a typical production pipeline flow for a Cloud Native application."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Setup")," clones the code into the pipeline"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Build")," runs the build commands for the code"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Test"),"\tvalidates the unit tests for the code"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Publish pacts"),"\t(",Object(n.b)("em",{parentName:"li"},"optional"),") publishes any pact contracts that have been defined"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Verify pact")," (",Object(n.b)("em",{parentName:"li"},"optional"),") verifies the pact contracts"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Sonar scan")," (",Object(n.b)("em",{parentName:"li"},"optional"),") runs a sonar code scan of the source code and publishes the results to SonarQube"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Verify environment")," Validates the OpenShift or IKS environment configuration is valid"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Build image")," Builds the code into a Docker images and stores it in the IBM Cloud Image registry"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Deploy to DEV env"),"\tDeploys the Docker image tagged version to ",Object(n.b)("inlineCode",{parentName:"li"},"dev")," namespace using Helm Chart"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Package Helm Chart")," (",Object(n.b)("em",{parentName:"li"},"optional"),") Stores the tagged version of the Helm chart into Artifactory"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Health Check")," Validates the Health Endpoint of the deployed application")),Object(n.b)("h2",{id:"deploying-code-into-pipelines"},"Deploying Code into Pipelines"),Object(n.b)("p",null,"Now you have a working development environment that includes Jenkins on the IBM Public Cloud. You can now start working with code to deploy into your cluster using Jenkins pipelines. The following instructions help describe this process."),Object(n.b)("p",null,"You can click on the ",Object(n.b)("inlineCode",{parentName:"p"},"Starter Kit Templates")," tab on the Development Cluster Dashboard and follow the instructions for provisioning a new microservice into your development cluster. You can easily create an microservice by using the github templates listed below:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/template-node-react"}),"12 UI Patterns with React and Node.js")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/template-node-typescript"}),"TypeScript Microservice or BFF with Node.js")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/template-graphql-typescript"}),"GraphQL BFF with Node.js")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/template-java-spring"}),"Spring Boot Java Microservice"))),Object(n.b)("p",null,"Click on the ",Object(n.b)("inlineCode",{parentName:"p"},"Use this template")," button to create a repo in your git organisation. Then follow the pipeline registration instructions below: "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You will need to be logged into the OpenShift Console or IKS clusters on the command line. ")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You will also need a ",Object(n.b)("a",o({parentName:"p"},{href:"https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line"}),"Personal Access Token")," from your git organistaion."))),Object(n.b)("p",null,"The following steps will enable you to register the template with OpenShift or IKS instance of Jenkins Pipelines."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),'git clone <generated start kit template>\ncd <generated start kit template>\nvi package.json ! rename the template\ngit add .\ngit commit -m "Rename project"\ngit push\n')),Object(n.b)("p",null,"The following steps will help you create a pipeline with Jenkins using the ",Object(n.b)("inlineCode",{parentName:"p"},"CLI"),"."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"igc pipeline \n? Please provide the username for https://github.com/mjperrins/hello-world-bff.git: mperrins\n? Please provide your password/personal access token: [hidden]\n? Please provide the branch the pipeline should use: master\nCreating git secret\nCopying 'ibmcloud-apikey' secret to dev\nRegistering pipeline\n? The build pipeline (mjperrins.hello-world-bff) already exists. Do you want to update it? (Y/n)\n")),Object(n.b)("p",null,"The pipeline will be created in the ",Object(n.b)("inlineCode",{parentName:"p"},"dev")," namespace in OpenShift and ",Object(n.b)("inlineCode",{parentName:"p"},"tools")," name space on IKS . The registration will copy the necessary secrets required to run the pipeline and expose the secrets to the ",Object(n.b)("inlineCode",{parentName:"p"},"Jenkinsfile"),". The app docker image will be stored in the IBM Container Registry and deployed into the ",Object(n.b)("inlineCode",{parentName:"p"},"dev")," name space. "),Object(n.b)("p",null,"This is screen shot of a Jenkins pipeline, you can access this view from the Developer Dashboard."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.60440985732814%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABtUlEQVQoz41Sy27VMBD1NyP6ELCidMWqFRvEBvElRbCBQndlUyFuEidxLs3DjzhOnOQwccoVgot0Jzo647FncsYe9ub1K1xcXuDpsyc4Pjl6wGOcnB7t8Du++I9Oj/GS/E/v3uLjl8+4ubnG+w9XODs/x9mL52DjPOF/NtN3qI0EPQAsiTgqZTGOHsMwBNhWo+89xcaAaZwwTdNuHWJ+4SnszfOM6293uPp6C1ZWEsZS6XlVsxRMeQJtbDj4Jw4xxosayrhdwsKLmsW892hNS2p7Um1hjIFSCtZaNHUDrTU0reu6hpQSVVWD5UVJLXeYQsFVyVKgdy4kiK1AWZfEReC8ELiv7pGJDDntZSIPfvFzG3zWGvpD08C5DkobtJ0DF1tIimmn8cNswB3HxkRIfYZNG4H3aeAVMSIbgw8pIh2DVU2BhpKXdhwp83TJmRCIowhucogoIetzxDZB7lde1zES8hPLA6dDhsRwsI6UtVqhqSpSKmFJYVmWQe1Id9l7an94gP+L94Dteykuatx+L8ALSaNx+CyGVx5Gh3+xqHBwQ0fc7d03VlEXdM9GQtHcSurSEH4BO/U7KbUsrvEAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Jenkins Pipelines View",title:"Jenkins Pipelines View",src:"/ibm-garage-developer-guide/static/1978812908f508306889d51778ada12a/fb070/pipelines.png",srcSet:["/ibm-garage-developer-guide/static/1978812908f508306889d51778ada12a/d6747/pipelines.png 288w","/ibm-garage-developer-guide/static/1978812908f508306889d51778ada12a/09548/pipelines.png 576w","/ibm-garage-developer-guide/static/1978812908f508306889d51778ada12a/fb070/pipelines.png 1152w","/ibm-garage-developer-guide/static/1978812908f508306889d51778ada12a/777ff/pipelines.png 1542w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "),Object(n.b)("p",null,"This is a screen shot of the Build Pipeline in OpenShift. You can access this from the ",Object(n.b)("inlineCode",{parentName:"p"},"Application Console")," and selecting ",Object(n.b)("inlineCode",{parentName:"p"},"Builds->Pipelines")," from the menu."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.80078380143697%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB7UlEQVQoz5WRW2sTQRTH963WxFxspSLSihdiq01iaG0pIoLghVaIgr75FaWKGnNXv4Z9MS8mZpM02dm57c7+PTsbVBC0Hvhxhplz/nMuzsXVNayuXcLK+QtYPreCXH4J2VweqXQGC4spnCIWfnL6N1JYTKVxJpNDJpvH2aVlpDNZOJuVHVzbKOPOvQd4/baGN7UmXr2r4/B9Ax/qTTRbbbTaHTSJVrtraXe66HQ/ofvxMxr0Xm+2UKPYRqsD59bOXawXt7BffY7+TOIbCzHgBn3fwBUGY+I4AKYGmCGBE14EMPxpzu79A8Si1Rcv4c58CKXhCQ6hNbhSmInkLva+lJYpZ+QVjn0GqSSUlhQjEIYhnGJlF1fXS3j85BkY5whMhAkbQWphGXsu/RtR8gQ6UHTHMWYuoijCcDqwQlz5dP4OYwyc8vYeCjcriaCQ0KHBaObawJjhdAgT0Z03okSOv1n8iVPa2rNLebhfBfM8+6ACaiPQVBERKhuoQ43QhPYcV/LLz89z79wo38aV60Ur2Ov1rCBjDIOhC04VR5T0P+ZslLZxubBpW+73+5BCwBe0DC7tPOe92N9PQiJIFT46eIovR0dQtEVGghNfgWsDn+BB0k68nJMJFoq2wq+DMZgMaFY0MxPNZ5OQCP7bfgCHtdgD9DuhTQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift Pipelines View",title:"OpenShift Pipelines View",src:"/ibm-garage-developer-guide/static/0c0ff2b60e2650064c8b6f39ba4c4911/fb070/ospipelines.png",srcSet:["/ibm-garage-developer-guide/static/0c0ff2b60e2650064c8b6f39ba4c4911/d6747/ospipelines.png 288w","/ibm-garage-developer-guide/static/0c0ff2b60e2650064c8b6f39ba4c4911/09548/ospipelines.png 576w","/ibm-garage-developer-guide/static/0c0ff2b60e2650064c8b6f39ba4c4911/fb070/ospipelines.png 1152w","/ibm-garage-developer-guide/static/0c0ff2b60e2650064c8b6f39ba4c4911/10f3a/ospipelines.png 1531w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "),Object(n.b)("h3",{id:"ingress-urls-or-testing"},"Ingress URLs or testing"),Object(n.b)("p",null,"If you want to get easy access to your application routes or ingress end points for your apps run the following command. All the ",Object(n.b)("inlineCode",{parentName:"p"},"igc")," commands run the same on IKS and OpenShift."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"igc ingress -n dev\n")),Object(n.b)("p",null,"This will list out the applications URLs that have been deployed."),Object(n.b)("pre",null,Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"Host(s):\n[\n  'http://stock-bff-dev.showcase-dev-oswdc06-cl.us-east.containers.appdomain.cloud',\n  'http://stock-service-dev.showcase-dev-oswdc06-cl.us-east.containers.appdomain.cloud',\n  'http://stock-ui-dev.showcase-dev-oswdc06-cl.us-east.containers.appdomain.cloud',\n]\n")),Object(n.b)("p",null,"Once you become familiar with deploying code into OpenShift or IKS, read up about how you can manage code deployment with ",Object(n.b)("inlineCode",{parentName:"p"},"Continuous Deployment")," with ",Object(n.b)("inlineCode",{parentName:"p"},"Artiactory")," and ",Object(n.b)("inlineCode",{parentName:"p"},"ArgoCD")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"./ARTIFACTORY.md"}),"Artiact Storage with Artifactory")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",o({parentName:"li"},{href:"./ARGOCD.md"}),"Continuous Deployment with ArgoCD"))),Object(n.b)("p",null,"You can use the ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/template-argocd-test"}),"Argo CD Template")," to help define a deployment configuration for ",Object(n.b)("inlineCode",{parentName:"p"},"test")," and ",Object(n.b)("inlineCode",{parentName:"p"},"staging")," namespaces."))}p.isMDXComponent=!0},440:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},441:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},442:function(e,t,a){"use strict";a(32),a(28);var n=a(1),i=a(440),o=a(0),s=a.n(o),l=a(105),r=a.n(l),p=a(195),c=a(127),b=a(3),d=a.n(b),u=a(384),m=function(e){var t,a=e.title,i=e.tabs,o=void 0===i?[]:i;return Object(n.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=o.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:u.text},a)))))},g=a(441),h=a(385),O=function(e){var t=e.relativePagePath,a=e.repository,i=g.data.site.siteMetadata.repository,o=a||i,s=o.baseUrl,l=o.subDirectory,r=s+"/edit/"+o.branch+l+"/src/pages"+t;return s?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:r},"Edit this page on GitHub"))):null},f=a(193),j=(a(59),a(26)),w=a(386);var N=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=r()(e,{lower:!0}),s=o===i,l=new RegExp(i+"(?!-)"),p=a.replace(l,o);return Object(n.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=s,t),w.listItem)},Object(n.b)(j.Link,{className:w.link,to:""+p},e))}));return Object(n.b)("div",{className:w.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:w.list},o))))))},i}(s.a.Component),v=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,s=e.Title,l=t.frontmatter,b=void 0===l?{}:l,d=t.relativePagePath,u=t.titleType,g=b.tabs,h=b.title,j=b.theme,w=b.description,y=b.keywords,A=i.data.site.pathPrefix,C=A?o.pathname.replace(A,""):o.pathname,k=g?C.split("/").slice(-1)[0]||r()(g[0],{lower:!0}):"";return Object(n.b)(c.a,{homepage:!1,theme:j,pageTitle:h,pageDescription:w,pageKeywords:y,titleType:u},Object(n.b)(m,{title:s?Object(n.b)(s,null):h,label:"label",tabs:g}),g&&Object(n.b)(N,{slug:C,tabs:g,currentTab:k}),Object(n.b)(v.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:d})),Object(n.b)(f.a,{pageContext:t,location:o,slug:C,tabs:g,currentTab:k}),Object(n.b)(p.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-continuous-integration-index-mdx-a44468e953a9f7186951.js.map