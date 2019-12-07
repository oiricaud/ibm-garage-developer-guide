(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{407:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return g}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),i=a(435);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=p("InlineNotification"),b=p("AnchorLinks"),c=p("AnchorLink"),s={_frontmatter:o},m=i.a;function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(m,r({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"overview"},"Overview"),Object(n.b)("p",null,"Continuous integration is a software development technique where software is built regularly by a team in an automated fashion."),Object(n.b)("p",null,"Tekton is a new emerging CI tool that has been built to support Kubernetes and OpenShift from the ground up."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Read the this this ",Object(n.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration-tekton-crc#what-is-tekton"}),"overview of Tekton"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"For more information read up about it ",Object(n.b)("a",r({parentName:"p"},{href:"https://developer.ibm.com/tutorials/knative-build-app-development-with-tekton/"}),"here")))),Object(n.b)("p",null,"The IBM Cloud is standardizing on using Tekton in both IBM Cloud DevOps service and IBM Cloud Pak for Applications. OpenShift 4.2 will also natively support it."),Object(n.b)("p",null,"This guide will focus on using Tekton when the Development tools have been installed along side ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/cloud/cloud-pak-for-applications"}),"IBM Cloud Pak for Applications")," to compliment your cloud native development toolset."),Object(n.b)("h3",{id:"tasks"},"Tasks"),Object(n.b)(l,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," This guide will help you setup the ",Object(n.b)("inlineCode",{parentName:"p"},"Starter Kit Templates")," with  ",Object(n.b)("strong",{parentName:"p"},"Tekton* and requires that you have installed Tekton with "),"IBM Cloud Pak for Applications* , ",Object(n.b)("strong",{parentName:"p"},"OpenShift 4.2")," or have installed open source Tekton into the The IBM Kubernetes Cluster.")),Object(n.b)("p",null,"The following gives a description of what each task in the pipeline does. The ",Object(n.b)("em",{parentName:"p"},"Optional")," stages can be deleted or ignored if the tool supporting it is not installed. These stages represent a typical production pipeline flow for a Cloud Native application."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Setup")," clones the code into the pipeline"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Build")," runs the build commands for the code"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Test"),"\tvalidates the unit tests for the code"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Publish pacts"),"\t(",Object(n.b)("em",{parentName:"li"},"optional"),") publishes any pact contracts that have been defined"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Verify pact")," (",Object(n.b)("em",{parentName:"li"},"optional"),") verifies the pact contracts"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Sonar scan")," (",Object(n.b)("em",{parentName:"li"},"optional"),") runs a sonar code scan of the source code and publishes the results to SonarQube"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Build image")," Builds the code into a Docker images and stores it in the IBM Cloud Image registry"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Deploy to DEV env"),"\tDeploys the Docker image tagged version to ",Object(n.b)("inlineCode",{parentName:"li"},"dev")," namespace using Helm Chart"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Health Check")," Validates the Health Endpoint of the deployed application"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Package Helm Chart")," (",Object(n.b)("em",{parentName:"li"},"optional"),") Stores the tagged version of the Helm chart into Artifactory"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Trigger CD Pipeline")," (",Object(n.b)("em",{parentName:"li"},"optional"),") This is a GitOps stage that will update the build number in designated git repo and trigger ArgoCD for deployment to ",Object(n.b)("strong",{parentName:"li"},"test"))),Object(n.b)("h3",{id:"install-tekton"},"Install Tekton"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Install ",Object(n.b)("a",r({parentName:"li"},{href:"/ibm-garage-developer-guide/admin/overview"}),"IBM Garage for Cloud Developer Tools")," on your managed OpenShift or IKS development cluster on the IBM Cloud"),Object(n.b)("li",{parentName:"ul"},"Install Tekton on OpenShift 3.11",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Install ",Object(n.b)("a",r({parentName:"li"},{href:"https://cloud.ibm.com/catalog/content/ibm-cp-applications"}),"IBM Cloud Paks for Applications")," on the OpenShift Cluster from the IBM Cloud Catalog"))),Object(n.b)("li",{parentName:"ul"},"Install Tekton on OpenShift 4 including CodeReady Containers (CRC)",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Install via operator hub Administrator perpective view, click Operator Hub search for “OpenShift Pipelines” and install operator"))),Object(n.b)("li",{parentName:"ul"},"Install Tekton on IKS",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Install Tekton via Knative add-on, it includes tekton "),Object(n.b)("li",{parentName:"ul"},"Install Tekton Dashboard ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/tektoncd/dashboard#install-dashboard"}),"https://github.com/tektoncd/dashboard#install-dashboard")),Object(n.b)("li",{parentName:"ul"},"Install Tekton Webhook Extension ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/tektoncd/experimental/tree/master/webhooks-extension#install-webhook-extension"}),"https://github.com/tektoncd/experimental/tree/master/webhooks-extension#install-webhook-extension")," ")))),Object(n.b)("h3",{id:"setup-tekton"},"Setup Tekton"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Install tekton pipelines and tasks in the ",Object(n.b)("inlineCode",{parentName:"li"},"tools")," namespace follow the instructions in the repository ",Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-tekton-tasks/blob/master/README.md"}),"ibm-garage-tekton-tasks/"))),Object(n.b)("h3",{id:"configure-namespace-for-development"},"Configure namespace for development"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Create a new namespace (ie ",Object(n.b)("inlineCode",{parentName:"li"},"dev"),") and copy all config and secrets",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"igc namespace -n {new-namespace}\n"))),Object(n.b)("li",{parentName:"ul"},"Set your ",Object(n.b)("inlineCode",{parentName:"li"},"new-namespace")," the current namespace context",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"oc project {new-namespace}\n"))),Object(n.b)("li",{parentName:"ul"},"Configure the sevice account ",Object(n.b)("inlineCode",{parentName:"li"},"pipeline")," if it doesn’t exist, on OpenShift 4 the operator takes care of this you can skip.",Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"oc create serviceaccount pipeline\noc adm policy add-scc-to-user privileged -z pipeline\noc adm policy add-role-to-user edit -z pipeline\n"))),Object(n.b)("li",{parentName:"ul"},"Clone the tasks from the ",Object(n.b)("inlineCode",{parentName:"li"},"tools")," namespace into the ",Object(n.b)("inlineCode",{parentName:"li"},"new-namespace"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),'kubectl get tasks --export -o yaml -n tools  | sed s/"namespace: tools/namespace: $(oc project -q)"/ | kubectl apply -f -\n'))),Object(n.b)("li",{parentName:"ul"},"Clone the pipelines from the ",Object(n.b)("inlineCode",{parentName:"li"},"tools")," namespace into the ",Object(n.b)("inlineCode",{parentName:"li"},"new-namespace"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),'kubectl get pipelines --export -o yaml -n tools  | sed s/"namespace: tools/namespace: $(oc project -q)"/ | kubectl apply -f -\n')))),Object(n.b)("h3",{id:"manually-trigger-a-pipeline"},"Manually trigger a Pipeline"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Install the Tekton CLI ",Object(n.b)("inlineCode",{parentName:"p"},"tkn")," ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/tektoncd/cli"}),"https://github.com/tektoncd/cli"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create a new repository using java or nodejs templates applications github repositories"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/template-java-spring/generate"}),"https://github.com/ibm-garage-cloud/template-java-spring/generate")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/template-node-react/generate"}),"https://github.com/ibm-garage-cloud/template-node-react/generate")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/template-node-typescript/generate"}),"https://github.com/ibm-garage-cloud/template-node-typescript/generate")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/template-node-angular/generate"}),"https://github.com/ibm-garage-cloud/template-node-angular/generate")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://github.com/ibm-garage-cloud/template-graphql-typescript/generate"}),"https://github.com/ibm-garage-cloud/template-graphql-typescript/generate")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create a Pipeline resource for the git repository, replace with the correct github url for your repository\nUse the ",Object(n.b)("inlineCode",{parentName:"p"},"tkn")," CLI to create ",Object(n.b)("inlineCode",{parentName:"p"},"git")," resource input the github repo url for ",Object(n.b)("inlineCode",{parentName:"p"},"url")," and branch for ",Object(n.b)("inlineCode",{parentName:"p"},"revision")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"tkn resource create\n")),Object(n.b)("p",{parentName:"li"},"Here is the an example of the cli "),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),'tkn resource create       \n? Enter a name for a pipeline resource : nodejs-typescript-git\n? Select a resource type to create : git\n? Enter a value for url :  https://github.com/{user or org}/{app}\n? Enter a value for revision :  master\nNew git resource "nodejs-typescript-git" has been created\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create a Pipeline resource for the docker image registry, you can use the internal registry in OpenShift or use an external registry like IBM Container Registry (credentials need setup)\nUse the ",Object(n.b)("inlineCode",{parentName:"p"},"tkn")," CLI to create ",Object(n.b)("inlineCode",{parentName:"p"},"image")," resource"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"tkn resource create\n")),Object(n.b)("p",{parentName:"li"},"Select ",Object(n.b)("inlineCode",{parentName:"p"},"image")," for type."),Object(n.b)("p",{parentName:"li"},"Enter the corresponding ",Object(n.b)("inlineCode",{parentName:"p"},"url")," for container registry, use the new-namespace} in the url "),Object(n.b)("p",{parentName:"li"},"For OCP 3 internal registry use ",Object(n.b)("inlineCode",{parentName:"p"},"docker-registry.default.svc:5000/{new-namespace}/node-typescript:latest")),Object(n.b)("p",{parentName:"li"},"For OCP 4 or CRC internal registry use ",Object(n.b)("inlineCode",{parentName:"p"},"image-registry.openshift-image-registry.svc:5000/{new-namespace}/node-typescript:latest")),Object(n.b)("p",{parentName:"li"},"For external registry like IBM Container registry based on region use ",Object(n.b)("inlineCode",{parentName:"p"},"us.icr.io/{namespace}/node-typescript:latest")," use an existing namespace in your IBM Cloud"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),'tkn resource create\n? Enter a name for a pipeline resource : nodejs-typescript-image\n? Select a resource type to create : image\n? Enter a value for url :  docker-registry.default.svc:5000/dev/node-typescript:latest\n? Enter a value for digest :  \nNew image resource "nodejs-typescript-image" has been created\n'))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the pipeline, to show the available pipeline run"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"tkn pipeline ls                                         \nNAME              AGE              LAST RUN   STARTED   DURATION   STATUS\nigc-java-gradle   33 minutes ago   ---        ---       ---        ---\nigc-nodejs        33 minutes ago   ---        ---       ---        ---\n")),Object(n.b)("p",{parentName:"li"},"In this case use ",Object(n.b)("inlineCode",{parentName:"p"},"igc-java-gradle")," for java or ",Object(n.b)("inlineCode",{parentName:"p"},"igc-nodejs")," for nodejs.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Run the Pipeline using the ",Object(n.b)("inlineCode",{parentName:"p"},"git")," and ",Object(n.b)("inlineCode",{parentName:"p"},"image")," Pipeline resources.\nSet the following environment variable for convienience:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"export PIPELINE=igc-nodejs\nexport GIT=nodejs-typescript-git\nexport IMAGE=nodejs-typescript-image\n")),Object(n.b)("p",{parentName:"li"},"Then run the ",Object(n.b)("inlineCode",{parentName:"p"},"tkn pipeline start")," with the input arguments using the service account ",Object(n.b)("inlineCode",{parentName:"p"},"pipeline")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{}),"tkn pipeline start \\\n${PIPELINE} \\\n-r git-source=${GIT} \\\n-r docker-image=${IMAGE} \\\n-s pipeline\n")))),Object(n.b)("h3",{id:"create-a-git-webhook"},"Create a Git Webhook"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the Tekton Dashboard from the main Tools Dashboard or the ICPA landing page.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Create a Webhook in the Tekton Dashboard\n",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"76.56449553001276%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAIAAABr+ngCAAAACXBIWXMAABYlAAAWJQFJUiTwAAABiElEQVQoz5WSSVLDMBBFfbxsYEFYUMWNchKmI5Eym5SHxLIsW/NgvuTEGEOFoqvLlof3u/tLWV+3+f5oXPBh9CGM/4ls4JZQxVWQZpRSWeudD8uEKDT995dTZkJw5yxkQghmJp2PmRZQ5EJqbVekdYCl7BiDMOQBrxrz3hPS1HXNOV99wv+ZlFIIMT1MMGQIIW3ben/NhDOstZ7bnhYgBRdDz5rTEeI2hnHxYqzRIUlGmFKKOpBQWs+wUsoY0/XyULbViU1Z1LShgsEif4ExTN/3gNHjDEshI690fWzLukESOlAmOiSXfq7ckNaYVdsjyhpt4szeo1tsB+4x0+Jr5hC3MSwNA1NVVVEUmDyOozCQxvVi1MKwpXtz2/DfOYeJoMIYG1KIFHgJ9Wsw6uAPALATa3EJnuIPOG4+54xzkszshgH1JZca2yp1mN3+FTYYEkkIzXP6kXdV1Xb0cDqUtKy6yp6P8w84+YeHdE53u/HmNmw24+tbP46PLw93T9vt8/17s8dHuP8J+AxlvXS9C6UAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Webhook",title:"Webhook",src:"/ibm-garage-developer-guide/static/f103d5e461eca01fc32da77870856274/fb070/webhook.png",srcSet:["/ibm-garage-developer-guide/static/f103d5e461eca01fc32da77870856274/d6747/webhook.png 288w","/ibm-garage-developer-guide/static/f103d5e461eca01fc32da77870856274/09548/webhook.png 576w","/ibm-garage-developer-guide/static/f103d5e461eca01fc32da77870856274/fb070/webhook.png 1152w","/ibm-garage-developer-guide/static/f103d5e461eca01fc32da77870856274/fb104/webhook.png 1728w","/ibm-garage-developer-guide/static/f103d5e461eca01fc32da77870856274/902fb/webhook.png 2304w","/ibm-garage-developer-guide/static/f103d5e461eca01fc32da77870856274/2d586/webhook.png 3132w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Click ",Object(n.b)("strong",{parentName:"li"},"Webhook")," on the menu"),Object(n.b)("li",{parentName:"ul"},"Click ",Object(n.b)("strong",{parentName:"li"},"Add Webhook")," and enter the information for the webhook"),Object(n.b)("li",{parentName:"ul"},"Name: ",Object(n.b)("strong",{parentName:"li"},"insert name")),Object(n.b)("li",{parentName:"ul"},"Repository UR: ",Object(n.b)("strong",{parentName:"li"},"template git repo url")),Object(n.b)("li",{parentName:"ul"},"Access Token: Create github access token with permission minimum write:repo_hook"),Object(n.b)("li",{parentName:"ul"},"Namespace: ",Object(n.b)("strong",{parentName:"li"},"insert namespace")),Object(n.b)("li",{parentName:"ul"},"Pipeline: select ",Object(n.b)("strong",{parentName:"li"},"igc-java-gradle")," or ",Object(n.b)("strong",{parentName:"li"},"igc-nodejs")),Object(n.b)("li",{parentName:"ul"},"Service Account: ",Object(n.b)("strong",{parentName:"li"},"pipeline")),Object(n.b)("li",{parentName:"ul"},"Docker Registry:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"For OCP 3 internal registry use ",Object(n.b)("inlineCode",{parentName:"li"},"docker-registry.default.svc:5000/{new-namespace}")),Object(n.b)("li",{parentName:"ul"},"For OCP 4 or CRC internal registry use ",Object(n.b)("inlineCode",{parentName:"li"},"image-registry.openshift-image-registry.svc:5000/{new-namespace}")),Object(n.b)("li",{parentName:"ul"},"For external registry like IBM Container registry based on region use ",Object(n.b)("inlineCode",{parentName:"li"},"us.icr.io/{namespace}")," use an existing namespace in your IBM Cloud. Make sure to configure docker credentials in the Tekton Dashboard using your IAM API Key and ",Object(n.b)("inlineCode",{parentName:"li"},"iamapikey")," for username in your namespace."))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Check that Webhook is created on the Github repository (Settings-Webhooks)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Make a change to the git repo and push the change to remote git repository or click on ",Object(n.b)("strong",{parentName:"p"},"Pipelines"),"\nand manually kick of a pipeline build")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Verify the ",Object(n.b)("strong",{parentName:"p"},"Pipelinerun")," for the git change\n",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.607421875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABk0lEQVQoz41Su0oDQRTdn7C0FMHGyh+wsrSxE4tU1ipiI1glaGMjgq3YCYIKCloKgvgCIQSNooJgs5tkd7Pz3JnjnclDYyI4u5d57J1zzzl3g+fyB9JMojOse6xtra3tC5eBH9m9eyCo1QUSZsA1wLmAEjmUNH49aDjM/vguGDDOIaTyAIzi/ukCDy+XqDdihFENYa1O6wSNOEWtHiNjAlxKcKEoX4LRXsgcTBAJmoNqtYooihCFIeKkicpbGW+fr9AKkNyCkR1pmqLZzNCgIlwQAcUgCVQI4UNpgyYJ8oCcGGqtvRxjgJvHO5xcHeH0+hjnt/uovN96WTo3oNdfVtq2507k9D2nYhpBkiQEZLx+d2H7cAlzpREU1scwvTpE+8V2sXxgk76bRYoUMcyyrNsxx3DrYAmzxVEUNsYxszaMneOVNqDpXuxv1A/AOI7JVGoII1+Uwe5ZEQvbk1jemcL85gT2zkstQGv+x9ABOtOVUt4P5kyXGRncCqlEzz85iF0PoAPqHGgCzHP7p6RBin8DfgHEGvcBRv9R9AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pipelinerun",title:"Pipelinerun",src:"/ibm-garage-developer-guide/static/9f446c196dfa2c4a625858139fc1d00f/fb070/pipeline.png",srcSet:["/ibm-garage-developer-guide/static/9f446c196dfa2c4a625858139fc1d00f/d6747/pipeline.png 288w","/ibm-garage-developer-guide/static/9f446c196dfa2c4a625858139fc1d00f/09548/pipeline.png 576w","/ibm-garage-developer-guide/static/9f446c196dfa2c4a625858139fc1d00f/fb070/pipeline.png 1152w","/ibm-garage-developer-guide/static/9f446c196dfa2c4a625858139fc1d00f/fb104/pipeline.png 1728w","/ibm-garage-developer-guide/static/9f446c196dfa2c4a625858139fc1d00f/e8417/pipeline.png 2048w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")))),Object(n.b)("h2",{id:"running-application"},"Running Application"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the OpenShift Console and select the {new-namespace} project and click on ",Object(n.b)("strong",{parentName:"p"},"Workloads"),"\n",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.01953125%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABkElEQVQoz6WQW09TURBGD1TaUkTiA0SU8GyESmktvZCI8uRfMyHx1QjYFlD+jS/E0gRKEwjEhEsvnO7dc13OOanQAOHFSVZm59sz357ZxvT0S17NzDI59YJnE89JjI0TjY0yEo1jDEWE4fsYwwxFRognngpjxOIJYqMJIk+iGNmVT7wrfCCdX+Hz2hdKlR02ShXKWz+obP98mJ1dypK/ftsQNlnfLPG9vEWpvI2RKa6Szr0nW/xIo9Hgf8OYSy3xOpkhuZjj116Vs5ai/qcpWdNUzqO0tEtTO3SEttDqWhjJdJ43C0u8TRf4XTvAdOBSituWh3J8lO3R7ROcQy3U/VDryflUuZwI2nICwwLBlIHx/n4N87rD5cU5Pa2wLUuW8B/gNpTnUzctam0tDwwYzi/mOTish0Vaa1zXxfM8fN+/4V+Etn3NFY67Nkdiajt9w2DlhUyRvWqNK1P+zuzdaw4fkpWa1wpXGhnQb2plACMwm0vlSGWXqcrKqmfRMbvhhI40DmLZNlrubcl37wIC/S9pVz2LiM+H+wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"OpenShift",title:"OpenShift",src:"/ibm-garage-developer-guide/static/a25b80e0df63b105bb82931ba91f5301/fb070/openshiftconsole.png",srcSet:["/ibm-garage-developer-guide/static/a25b80e0df63b105bb82931ba91f5301/d6747/openshiftconsole.png 288w","/ibm-garage-developer-guide/static/a25b80e0df63b105bb82931ba91f5301/09548/openshiftconsole.png 576w","/ibm-garage-developer-guide/static/a25b80e0df63b105bb82931ba91f5301/fb070/openshiftconsole.png 1152w","/ibm-garage-developer-guide/static/a25b80e0df63b105bb82931ba91f5301/fb104/openshiftconsole.png 1728w","/ibm-garage-developer-guide/static/a25b80e0df63b105bb82931ba91f5301/e8417/openshiftconsole.png 2048w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Get the hostname for the application from ingress"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"kubectl get ingress --all-namespace\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You can use the the ",Object(n.b)("inlineCode",{parentName:"p"},"igc")," command to get the name of the deployed application"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-bash"}),"igc ingress -n {new-namespace}\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use the application URL to open it your browser for testing"))),Object(n.b)("p",null,"Once you become familiar with deploying code into OpenShift or IKS using Tekton, read up about how you can manage code deployment with ",Object(n.b)("inlineCode",{parentName:"p"},"Continuous Delivery")," with ",Object(n.b)("inlineCode",{parentName:"p"},"Artiactory")," and ",Object(n.b)("inlineCode",{parentName:"p"},"ArgoCD")),Object(n.b)(b,{small:!0,mdxType:"AnchorLinks"},Object(n.b)(c,{to:"../../guides/artifact-management",mdxType:"AnchorLink"},"Artifact Management with Artifactory"),Object(n.b)(c,{to:"../../guides/continuous-delivery",mdxType:"AnchorLink"},"Continuous Delivery with ArgoCD")),Object(n.b)("p",null,"You can use the ",Object(n.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/starterkits/argocd"}),"Argo CD Template")," to help define a deployment configuration for ",Object(n.b)("inlineCode",{parentName:"p"},"test")," and ",Object(n.b)("inlineCode",{parentName:"p"},"staging")," namespaces."))}g.isMDXComponent=!0},433:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},434:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},435:function(e,t,a){"use strict";a(32),a(28);var n=a(1),i=a(433),r=a(0),o=a.n(r),p=a(105),l=a.n(p),b=a(195),c=a(127),s=a(3),m=a.n(s),g=a(384),d=function(e){var t,a=e.title,i=e.tabs,r=void 0===i?[]:i;return Object(n.b)("div",{className:m()(g.pageHeader,(t={},t[g.withTabs]=r.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:g.text},a)))))},u=a(434),h=a(385),O=function(e){var t=e.relativePagePath,a=e.repository,i=u.data.site.siteMetadata.repository,r=a||i,o=r.baseUrl,p=r.subDirectory,l=o+"/edit/"+r.branch+p+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},j=a(193),N=(a(59),a(26)),f=a(386);var k=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0}),o=r===i,p=new RegExp(i+"(?!-)"),b=a.replace(p,r);return Object(n.b)("li",{key:e,className:m()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(n.b)(N.Link,{className:f.link,to:""+b},e))}));return Object(n.b)("div",{className:f.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:f.list},r))))))},i}(o.a.Component),y=a(194);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,p=t.frontmatter,s=void 0===p?{}:p,m=t.relativePagePath,g=t.titleType,u=s.tabs,h=s.title,N=s.theme,f=s.description,v=s.keywords,A=i.data.site.pathPrefix,w=A?r.pathname.replace(A,""):r.pathname,C=u?w.split("/").slice(-1)[0]||l()(u[0],{lower:!0}):"";return Object(n.b)(c.a,{homepage:!1,theme:N,pageTitle:h,pageDescription:f,pageKeywords:v,titleType:g},Object(n.b)(d,{title:o?Object(n.b)(o,null):h,label:"label",tabs:u}),u&&Object(n.b)(k,{slug:w,tabs:u,currentTab:C}),Object(n.b)(y.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:m})),Object(n.b)(j.a,{pageContext:t,location:r,slug:w,tabs:u,currentTab:C}),Object(n.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-continuous-integration-tekton-index-mdx-d017cd120c8c254810bd.js.map