(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{400:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return m}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),i=a(433);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},b=p("InlineNotification"),l=p("AnchorLinks"),c=p("AnchorLink"),s={_frontmatter:r},g=i.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(g,o({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"Continuous integration is a software development technique where software is built regularly by a team in an automated fashion."),Object(n.b)("p",null,"Tekton is a new emerging CI tool that has been built to support Kubernetes and OpenShift from the ground up."),Object(n.b)("h2",{id:"what-is-tekton"},"What is Tekton"),Object(n.b)("p",null,"Tekton is a powerful yet flexible Kubernetes-native open-source framework for creating continuous integration and delivery (CI/CD) systems. It lets you build, test, and deploy across multiple cloud providers or on-premises systems by abstracting away the underlying implementation details."),Object(n.b)("p",null,"Tekton provides open-source components to help you standardize your CI/CD tooling and processes across vendors, languages, and deployment environments. Industry specifications around pipelines, releases, workflows, and other CI/CD components available with Tekton will work well with existing CI/CD tools such as Jenkins, Jenkins X, Skaffold, and Knative, among others."),Object(n.b)("p",null,"For more information read up about it ",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.google.com/tekton/"}),"here")),Object(n.b)("p",null,"The IBM Cloud is standardizing on using Tekton in both IBM Cloud DevOps service and IBM Cloud Pak for Applications. OpenShift 4.2 will also natively support it."),Object(n.b)("p",null,"This guide will focus on using Tekton when the Development tools have been installed along side IBM Cloud Pak for Applications to compliment your cloud native development toolset."),Object(n.b)("h3",{id:"tasks"},"Tasks"),Object(n.b)(b,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," This guide will help you setup the ",Object(n.b)("inlineCode",{parentName:"p"},"Starter Kit Templates")," with  ",Object(n.b)("strong",{parentName:"p"},"Tekton* and requires that you have installed Tekton with "),"IBM Cloud Pak for Applications* , ",Object(n.b)("strong",{parentName:"p"},"OpenShift 4.2")," or have installed open source Tekton into the The IBM Kubernetes Cluster.")),Object(n.b)("p",null,"The following gives a description of what each task in a the pipeline does. The ",Object(n.b)("em",{parentName:"p"},"Optional")," stages can be deleted or ignored if the tool support it is not installed. These stages represent a typical production pipeline flow for a Cloud Native application."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Setup")," clones the code into the pipeline"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Build")," runs the build commands for the code"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Test"),"\tvalidates the unit tests for the code"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Publish pacts"),"\t(",Object(n.b)("em",{parentName:"li"},"optional"),") publishes any pact contracts that have been defined"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Verify pact")," (",Object(n.b)("em",{parentName:"li"},"optional"),") verifies the pact contracts"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Sonar scan")," (",Object(n.b)("em",{parentName:"li"},"optional"),") runs a sonar code scan of the source code and publishes the results to SonarQube"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Build image")," Builds the code into a Docker images and stores it in the IBM Cloud Image registry"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Deploy to DEV env"),"\tDeploys the Docker image tagged version to ",Object(n.b)("inlineCode",{parentName:"li"},"dev")," namespace using Helm Chart"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Health Check")," Validates the Health Endpoint of the deployed application"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Package Helm Chart")," (",Object(n.b)("em",{parentName:"li"},"optional"),") Stores the tagged version of the Helm chart into Artifactory"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Trigger CD Pipeline")," (",Object(n.b)("em",{parentName:"li"},"optional"),") This is a GitOps stage that will update the build number in designated git repo and trigger ArgoCD for deployment to ",Object(n.b)("strong",{parentName:"li"},"test"))),Object(n.b)("h3",{id:"setup-tekton"},"Setup Tekton"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Install ",Object(n.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/catalog/content/ibm-cp-applications"}),"IBM Cloud Paks for Applications")," on the OpenShift Cluster from the IBM Cloud Catalog")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Install ",Object(n.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/installation/overview"}),"IBM Garage for Cloud Developer Tools")," on your managed OpenShift development cluster on the IBM Cloud")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Clone the ",Object(n.b)("strong",{parentName:"p"},"Tekton Tasks")," onto your development machine"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-base"}),"git clone git@github.com:ibm-garage-cloud/ibm-garage-tekton-tasks.git\ncd ibm-garage-tekton-tasks\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Install the Tasks into the ",Object(n.b)("inlineCode",{parentName:"p"},"dev")," namespace"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-base"}),"kubectl apply -f ibm-garage-iteration-zero/tekton -n dev\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Using the ",Object(n.b)("strong",{parentName:"p"},"Starter Kit Template")," of your choice install the ",Object(n.b)("em",{parentName:"p"},"Pipeline")," into your ",Object(n.b)("inlineCode",{parentName:"p"},"dev")," namespace. For example use the ",Object(n.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/template-node-typescript.git"}),Object(n.b)("strong",{parentName:"a"},"Template Node TypeScript"))),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"git clone https://github.com/ibm-garage-cloud/template-node-typescript.git\ncd template-node-typescript\nkubectl apply -f tekton -n dev\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create Git WebHook for Tekton Pipeline and navigate to the Kabanero Enterprise Dashboard\n",Object(n.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"14.25260718424102%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAA2ElEQVQI12OQEhf9LyjA/5+FheU/MzPLfzY2tv9MTExgmoGBgSjMycn5n4uL6z8fL+9/BouQ5P/ZFQ3/Cytrwbi6pfN/fln1/9ziiv9ZBSX/c0qq/ucCMYidVVz5v6m96/+0KZP/z5k79//MWbP+z5+/4P/kyVP+K6mo/5eWVfzP4FMz83/Z5GX/J6/e9b9xxor/bXNW/5+4csf/SUB+y+y1/xsmL/rfMGXp/8YpS/5XT1j4f9mWA//PX772/8rdJ/8v3Hzw/9aDp/+PHD32393L/7+5teN/AOZIfYNmgRZwAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dashboard",title:"Dashboard",src:"/ibm-garage-developer-guide/static/0c79ac6e88c0bca9d80574d02f2120ad/fb070/kabanero.png",srcSet:["/ibm-garage-developer-guide/static/0c79ac6e88c0bca9d80574d02f2120ad/d6747/kabanero.png 288w","/ibm-garage-developer-guide/static/0c79ac6e88c0bca9d80574d02f2120ad/09548/kabanero.png 576w","/ibm-garage-developer-guide/static/0c79ac6e88c0bca9d80574d02f2120ad/fb070/kabanero.png 1152w","/ibm-garage-developer-guide/static/0c79ac6e88c0bca9d80574d02f2120ad/4e5ad/kabanero.png 1726w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the Tekton Dashboard\n",Object(n.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.001953125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABiklEQVQoz42Ry2+CQBDG96LePJqYaPz/z/Xoqa3ntgdFEBHWwAr4gAgVlsfX3W1RY9PHJL/ssky+mfmGjEYj9Pt99Ho9DAYDDIdDRbfbRavVQqfTQbvd/jfENFfQNA2LxQK6rissy4Jpmlgul4r775+QeYRHAZ6fHvEwHmMymWA6neI+0jRFXdf4K2QeKbMUURSBsS1830cYhsiyDHmeg3Ou7oZh4BjFkJKZeM/FewNXZ45KFLRtG4RtfXgeQ1VVv1YPmYfdlgF1hbrgQFGgkvACpaDIucojuqj+8vqmOpOihUgqy/JSQHYlBdYzA7oZgnpnWDTFyjlh4ybYhQlOUYo4iMDjGMS2HcznGuRJKVWsVhZc10UuxlXOCXHXZpjNN2KBFJrOlKDHTgiDBMd9guQgLMneQRyHCo+WCIJQ+dZ02NAsIzjksNwUNnvHWnRJfY59xJGkctzPseU85HwWI1hrSGHfD9Sm7kOK1s34N3zPEx7KLUlBSjeIhQeyq4vIF7i6eeXm/yVP8AEX4sXd9pDbOQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Dashboard",title:"Dashboard",src:"/ibm-garage-developer-guide/static/094896c11c0db24e29209fa5c227f1fa/fb070/tekton.png",srcSet:["/ibm-garage-developer-guide/static/094896c11c0db24e29209fa5c227f1fa/d6747/tekton.png 288w","/ibm-garage-developer-guide/static/094896c11c0db24e29209fa5c227f1fa/09548/tekton.png 576w","/ibm-garage-developer-guide/static/094896c11c0db24e29209fa5c227f1fa/fb070/tekton.png 1152w","/ibm-garage-developer-guide/static/094896c11c0db24e29209fa5c227f1fa/fb104/tekton.png 1728w","/ibm-garage-developer-guide/static/094896c11c0db24e29209fa5c227f1fa/e8417/tekton.png 2048w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create github access token. If git repo is not private (ie public) only write:repo_hook is required\n",Object(n.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.25851938895417%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACQ0lEQVQ4y3VTaXPaMBDl//+wfmuZkIZAIQkY2/iQZMm38PG6qxiaiV3NrCVL2qf39liN44iiKNC2LXjw/zgMGPoOdV2jbi1qa1HReV7VaGjt7vzHVgxSlBVSIZEZg67vHfBAJpSGvF6RXjyoMESjJGxuML2MpbEabxaNSBG+HXF+3SIhZxt6aH6vId4OSPdbiM0vZM9r1Ict+sjHeFeyxHCsS1SBh+iwR/Rnh1Yk6N73sP4ZSkpIbSDzEmmmUZL8r2NcYLnizYZiJZIUSRyjs/YhWZscGQFpMkPAPN/o3Nob+ik0c4b0kSrDxQ9wOnsoKfA8uq5z+4pMcHy1duAc6zQVMHnuQBcBNV0OgtCBcmZ58GVFABkxY1BNc/bFeK9pPitjmAFSdlMhkKSpe/kOWBQl8rxwc1lVyIviscf/3+P4AGQpnneBMeZxyIB3ySoj2VK5Ne9JXpNPQtJ53bYcV/uvDvknThIH/BWQ43UHlUo5ZwbmfTGdFWXpWPP8YFgRfQbkS9wx4wTIceNwGMo2rxmApdZ1g5KagbP9vYw+Y0jMLr6P0+mMiErHMaQsC6pDNUnMSDY/PAzDDGTWetxuHA8/vCKh5IxTHSYsjywm5ppkPUDuttgpxCQjuUkQODPEaiwMbnGIPI7QnI5oj9RB2ye0L2tYWjvbbTC0zQx4xc7644jLyzNOT2sEuy3anz9Qv25w/XhHEkVkMSR1Um9bDNT7zqaszluP5HZlgYwc5TWEJlZ8kSUbCjy3X+7qsJ45L0n+Cw6O04qAEUMyAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"PAT",title:"PAT",src:"/ibm-garage-developer-guide/static/d557cca9547a489fe0e3d25e410ec6de/fb070/pat.png",srcSet:["/ibm-garage-developer-guide/static/d557cca9547a489fe0e3d25e410ec6de/d6747/pat.png 288w","/ibm-garage-developer-guide/static/d557cca9547a489fe0e3d25e410ec6de/09548/pat.png 576w","/ibm-garage-developer-guide/static/d557cca9547a489fe0e3d25e410ec6de/fb070/pat.png 1152w","/ibm-garage-developer-guide/static/d557cca9547a489fe0e3d25e410ec6de/b35d3/pat.png 1702w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create a Webhook in the Tekton Dashboard\n",Object(n.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.322265625%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAAB/ElEQVQ4y52UTW7bMBCFfbp6EaS3aM+URRYpCnTfA2QRJLtk10WB1m2BCnFj/YsUKUqk+DrDhLLkOjBQAQPKNOebeW9or2Ra4fvXLaS2GD3g3AjvR/zvs1LKoig1hHZQPaC7HqbvMRLdHcQ4C/fK9ytjuhnfY7DjK+HQD46KWQy0HjvT9Q4rrTXqugl0fjjJe/+PlGEYkGUZdk9PEKI5KpdzA7BpGlhrp80It9xVkP/sKa8xgh7PmjA1EICc0HV72dx6BHJHSZJQwTqc4S7n9nAwbAEUQkwdcswlM4T3WqWR5SXqhs4KSWsMAaU6RIcCsG0l0jSFlBLGmGD6M9BD6y7s141C8qeiKPF7W4R1mzZ43DUohIGfe1gUJdq2DTAuFSQHc+gqWJ6m5cuJlsBlWaKqqqk4+9/13VJyRdWtHRaTih5yYlEUKAnCA4p+8VAcFZncnEveb+6rjC/v7G+e56Ez9pmVcBHe55WHxLHoMFY9BuShsDS+Cdwpg5RSARzhvB4AcRKoKDHb7SDqGuoFJqQIIWmoC2CUewjkzwyU1FVN5qcUgryTJFG3ig5SnqFzgz8NjO+OJjzQe7/ZQF1fw9zcwH3bINcVbn/e4u7XHe6Th9PA8M/BewQMN/LqA/BmjXG9Bi4u8UX8wNnHM5x/eot3n9/T+TH8cAzl/gU/q9r0JNKbCQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Webhook",title:"Webhook",src:"/ibm-garage-developer-guide/static/4ff8ae2427e5c005c2930b6433ec0f12/fb070/webhook.png",srcSet:["/ibm-garage-developer-guide/static/4ff8ae2427e5c005c2930b6433ec0f12/d6747/webhook.png 288w","/ibm-garage-developer-guide/static/4ff8ae2427e5c005c2930b6433ec0f12/09548/webhook.png 576w","/ibm-garage-developer-guide/static/4ff8ae2427e5c005c2930b6433ec0f12/fb070/webhook.png 1152w","/ibm-garage-developer-guide/static/4ff8ae2427e5c005c2930b6433ec0f12/fb104/webhook.png 1728w","/ibm-garage-developer-guide/static/4ff8ae2427e5c005c2930b6433ec0f12/e8417/webhook.png 2048w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Click ",Object(n.b)("strong",{parentName:"li"},"Webhook")," on the menu"),Object(n.b)("li",{parentName:"ul"},"Click ",Object(n.b)("strong",{parentName:"li"},"Add Webhook")," and enter the information for the webhook"),Object(n.b)("li",{parentName:"ul"},"Name: ",Object(n.b)("strong",{parentName:"li"},"insert name")),Object(n.b)("li",{parentName:"ul"},"Repository UR: ",Object(n.b)("strong",{parentName:"li"},"template git repo url")),Object(n.b)("li",{parentName:"ul"},"Access Token: Create github access token with permission minimum write:repo_hook"),Object(n.b)("li",{parentName:"ul"},"Namespace: dev"),Object(n.b)("li",{parentName:"ul"},"Pipeline: node-typescript"),Object(n.b)("li",{parentName:"ul"},"Service Account: default"),Object(n.b)("li",{parentName:"ul"},"Docker Registry: NA")))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Check that Webhook is created on the Github repository (Settings->Webhooks)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Make a change to the git repo and push the change to remote git repository or click on ",Object(n.b)("strong",{parentName:"p"},"Pipelines"),"\nand manually kick of a pipeline build")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Verify the ",Object(n.b)("strong",{parentName:"p"},"Pipelinerun")," for the git change\n",Object(n.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.607421875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABk0lEQVQoz41Su0oDQRTdn7C0FMHGyh+wsrSxE4tU1ipiI1glaGMjgq3YCYIKCloKgvgCIQSNooJgs5tkd7Pz3JnjnclDYyI4u5d57J1zzzl3g+fyB9JMojOse6xtra3tC5eBH9m9eyCo1QUSZsA1wLmAEjmUNH49aDjM/vguGDDOIaTyAIzi/ukCDy+XqDdihFENYa1O6wSNOEWtHiNjAlxKcKEoX4LRXsgcTBAJmoNqtYooihCFIeKkicpbGW+fr9AKkNyCkR1pmqLZzNCgIlwQAcUgCVQI4UNpgyYJ8oCcGGqtvRxjgJvHO5xcHeH0+hjnt/uovN96WTo3oNdfVtq2507k9D2nYhpBkiQEZLx+d2H7cAlzpREU1scwvTpE+8V2sXxgk76bRYoUMcyyrNsxx3DrYAmzxVEUNsYxszaMneOVNqDpXuxv1A/AOI7JVGoII1+Uwe5ZEQvbk1jemcL85gT2zkstQGv+x9ABOtOVUt4P5kyXGRncCqlEzz85iF0PoAPqHGgCzHP7p6RBin8DfgHEGvcBRv9R9AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pipelinerun",title:"Pipelinerun",src:"/ibm-garage-developer-guide/static/9f446c196dfa2c4a625858139fc1d00f/fb070/pipeline.png",srcSet:["/ibm-garage-developer-guide/static/9f446c196dfa2c4a625858139fc1d00f/d6747/pipeline.png 288w","/ibm-garage-developer-guide/static/9f446c196dfa2c4a625858139fc1d00f/09548/pipeline.png 576w","/ibm-garage-developer-guide/static/9f446c196dfa2c4a625858139fc1d00f/fb070/pipeline.png 1152w","/ibm-garage-developer-guide/static/9f446c196dfa2c4a625858139fc1d00f/fb104/pipeline.png 1728w","/ibm-garage-developer-guide/static/9f446c196dfa2c4a625858139fc1d00f/e8417/pipeline.png 2048w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")))),Object(n.b)("h2",{id:"running-application"},"Running Application"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the OpenShift Console and select the ",Object(n.b)("inlineCode",{parentName:"p"},"dev")," project and click on ",Object(n.b)("strong",{parentName:"p"},"Workloads"),"\n",Object(n.b)("span",o({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",o({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.01953125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABkElEQVQoz6WQW09TURBGD1TaUkTiA0SU8GyESmktvZCI8uRfMyHx1QjYFlD+jS/E0gRKEwjEhEsvnO7dc13OOanQAOHFSVZm59sz357ZxvT0S17NzDI59YJnE89JjI0TjY0yEo1jDEWE4fsYwwxFRognngpjxOIJYqMJIk+iGNmVT7wrfCCdX+Hz2hdKlR02ShXKWz+obP98mJ1dypK/ftsQNlnfLPG9vEWpvI2RKa6Szr0nW/xIo9Hgf8OYSy3xOpkhuZjj116Vs5ai/qcpWdNUzqO0tEtTO3SEttDqWhjJdJ43C0u8TRf4XTvAdOBSituWh3J8lO3R7ROcQy3U/VDryflUuZwI2nICwwLBlIHx/n4N87rD5cU5Pa2wLUuW8B/gNpTnUzctam0tDwwYzi/mOTish0Vaa1zXxfM8fN+/4V+Etn3NFY67Nkdiajt9w2DlhUyRvWqNK1P+zuzdaw4fkpWa1wpXGhnQb2plACMwm0vlSGWXqcrKqmfRMbvhhI40DmLZNlrubcl37wIC/S9pVz2LiM+H+wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",o({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift",title:"OpenShift",src:"/ibm-garage-developer-guide/static/a25b80e0df63b105bb82931ba91f5301/fb070/openshiftconsole.png",srcSet:["/ibm-garage-developer-guide/static/a25b80e0df63b105bb82931ba91f5301/d6747/openshiftconsole.png 288w","/ibm-garage-developer-guide/static/a25b80e0df63b105bb82931ba91f5301/09548/openshiftconsole.png 576w","/ibm-garage-developer-guide/static/a25b80e0df63b105bb82931ba91f5301/fb070/openshiftconsole.png 1152w","/ibm-garage-developer-guide/static/a25b80e0df63b105bb82931ba91f5301/fb104/openshiftconsole.png 1728w","/ibm-garage-developer-guide/static/a25b80e0df63b105bb82931ba91f5301/e8417/openshiftconsole.png 2048w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Get the hostname for the application from ingress"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"kubectl get ingress --all-namespace\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can use the the ",Object(n.b)("inlineCode",{parentName:"p"},"igc")," command pipeline to get the name of the deployed application"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",o({parentName:"pre"},{className:"language-bash"}),"igc ingress -n dev\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use the application URL to open it your browser for testing"))),Object(n.b)("p",null,"Once you become familiar with deploying code into OpenShift or IKS using Tekton, read up about how you can manage code deployment with ",Object(n.b)("inlineCode",{parentName:"p"},"Continuous Delivery")," with ",Object(n.b)("inlineCode",{parentName:"p"},"Artiactory")," and ",Object(n.b)("inlineCode",{parentName:"p"},"ArgoCD")),Object(n.b)(l,{small:!0,mdxType:"AnchorLinks"},Object(n.b)(c,{to:"../../guides/artifact-management",mdxType:"AnchorLink"},"Artifact Management with Artifactory"),Object(n.b)(c,{to:"../../guides/continuous-delivery",mdxType:"AnchorLink"},"Continuous Delivery with ArgoCD")),Object(n.b)("p",null,"You can use the ",Object(n.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/starterkits/argocd"}),"Argo CD Template")," to help define a deployment configuration for ",Object(n.b)("inlineCode",{parentName:"p"},"test")," and ",Object(n.b)("inlineCode",{parentName:"p"},"staging")," namespaces."))}m.isMDXComponent=!0},431:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},432:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},433:function(e,t,a){"use strict";a(32),a(28);var n=a(1),i=a(431),o=a(0),r=a.n(o),p=a(105),b=a.n(p),l=a(195),c=a(127),s=a(3),g=a.n(s),m=a(384),d=function(e){var t,a=e.title,i=e.tabs,o=void 0===i?[]:i;return Object(n.b)("div",{className:g()(m.pageHeader,(t={},t[m.withTabs]=o.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},u=a(432),A=a(385),h=function(e){var t=e.relativePagePath,a=e.repository,i=u.data.site.siteMetadata.repository,o=a||i,r=o.baseUrl,p=o.subDirectory,b=r+"/edit/"+o.branch+p+"/src/pages"+t;return r?Object(n.b)("div",{className:"bx--row "+A.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:A.link,href:b},"Edit this page on GitHub"))):null},f=a(193),O=(a(59),a(26)),j=a(386);var N=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=b()(e,{lower:!0}),r=o===i,p=new RegExp(i+"(?!-)"),l=a.replace(p,o);return Object(n.b)("li",{key:e,className:g()((t={},t[j.selectedItem]=r,t),j.listItem)},Object(n.b)(O.Link,{className:j.link,to:""+l},e))}));return Object(n.b)("div",{className:j.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:j.list},o))))))},i}(r.a.Component),v=a(194);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,r=e.Title,p=t.frontmatter,s=void 0===p?{}:p,g=t.relativePagePath,m=t.titleType,u=s.tabs,A=s.title,O=s.theme,j=s.description,k=s.keywords,y=i.data.site.pathPrefix,w=y?o.pathname.replace(y,""):o.pathname,C=u?w.split("/").slice(-1)[0]||b()(u[0],{lower:!0}):"";return Object(n.b)(c.a,{homepage:!1,theme:O,pageTitle:A,pageDescription:j,pageKeywords:k,titleType:m},Object(n.b)(d,{title:r?Object(n.b)(r,null):A,label:"label",tabs:u}),u&&Object(n.b)(N,{slug:w,tabs:u,currentTab:C}),Object(n.b)(v.a,{padded:!0},a,Object(n.b)(h,{relativePagePath:g})),Object(n.b)(f.a,{pageContext:t,location:o,slug:w,tabs:u,currentTab:C}),Object(n.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-continuous-integration-tekton-index-mdx-019f8d49f62fcf825be9.js.map