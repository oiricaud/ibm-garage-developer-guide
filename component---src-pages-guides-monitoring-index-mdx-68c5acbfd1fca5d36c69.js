(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{412:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var i=a(106),n=a(435);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var s,o={},c=(s="PageDescription",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),l={_frontmatter:o},b=n.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(i.b)(b,r({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(c,{mdxType:"PageDescription"},Object(i.b)("p",null,"Use Sysdig to monitor your running application")),Object(i.b)("p",null,"In IBM Garage Method, one of the Operate practices is to ",Object(i.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/manage/practice_automated_monitoring/"}),"automate application monitoring"),".\nSysdig automates application monitoring, enabling an operator to view stats and collect metrics about a Kubernetes cluster and its deployments.\nThe Developer Tools environment includes an IBM Cloud Monitoring with Sysdig service instance configured with\na Sysdig agent installed in the environment’s cluster.\nSimply by deploying your application into the Developer Tools environment, Sysdig monitors it, just open\nthe Sysdig web UI from the IBM Cloud dashboard to browse your application’s status."),Object(i.b)("h2",{id:"sysdig-monitoring"},"Sysdig Monitoring"),Object(i.b)("p",null,Object(i.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig"}),"IBM Cloud Monitoring with Sysdig")," explains how to\nconfigure and use an instance of the Sysdig service, but the Developer Tools environment has already done most\nof this for you. You can skip steps 1-3 about user access, provisioning an instance, and installing an agent."),Object(i.b)("h3",{id:"sysdig-dashboard"},"Sysdig dashboard"),Object(i.b)("p",null,"Open the Sysdig web UI for your environment’s cluster"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",r({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-getting-started#step4"}),"Step 4: Launch the web UI"),"\nexplains how to open the web UI"),Object(i.b)("li",{parentName:"ul"},"In the IBM Cloud dashboard, navigate to ",Object(i.b)("strong",{parentName:"li"},"Observability")," > ",Object(i.b)("strong",{parentName:"li"},"Monitoring")),Object(i.b)("li",{parentName:"ul"},"Find the monitoring instance named after your environment’s cluster, such as ",Object(i.b)("inlineCode",{parentName:"li"},"showcase-dev-iks-sysdig"),".\nTo help find it, you can filter by your resource group.\n",Object(i.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1025px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"8.97560975609756%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAcklEQVQI1zWM2QoCMRRD5/8/UR8H1GEWW3vXLsRrwYdDICRnMXOIKlQN5g51nvnrWRStdVDdsfEdyVdQ7B5HQWZHJseeBNsl8WsYo2OROBXiiYZYnKBmU/YphFobSghfdMPb1ugFVya0PpCK4Xny5C/8AvQamoaEYgwuAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sysdig Monitoring Instance",title:"Sysdig Monitoring Instance",src:"/ibm-garage-developer-guide/static/044e438fd2e34b76850d050d863ab0e4/3e04c/sysdig-monitoring-instance.png",srcSet:["/ibm-garage-developer-guide/static/044e438fd2e34b76850d050d863ab0e4/d6747/sysdig-monitoring-instance.png 288w","/ibm-garage-developer-guide/static/044e438fd2e34b76850d050d863ab0e4/09548/sysdig-monitoring-instance.png 576w","/ibm-garage-developer-guide/static/044e438fd2e34b76850d050d863ab0e4/3e04c/sysdig-monitoring-instance.png 1025w"],sizes:"(max-width: 1025px) 100vw, 1025px",loading:"lazy"})),"\n    ")),Object(i.b)("li",{parentName:"ul"},"In the monitoring instance, press the ",Object(i.b)("strong",{parentName:"li"},"View Sysdig")," button to open the Sysdig web UI")),Object(i.b)("p",null,"Finish onboarding the agent"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"If this is your first time opening the Sysdig dashboard on your cluster’s monitoring agent, Sysdig will open the Onboarding wizard")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The first page shows the hosts (i.e. Kubernetes nodes) and containers that Sysdig found, as well as the integrations it has\nselected to monitor them\n",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"848px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.141509433962256%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAB00lEQVQoz4VT7Y7TMBDsu/I28CqIh4DfCAE6iZaLOF2v1zYfjmPnw/FHhrETH1ckhKXt2O7uzO56s8OrtSxLwudB4dBVKFSDe9qDbvHYy7TPdhn1TUxeu3iRLWw42Bli7CEGjaZXaLmXtHZY7wRxmA1ex2ZLhCGETWlV89ZBKwUpBETToFcaulNQUhI1sYOZzJrhFhMhLAG7TOaJUgdUwwUuWIqsjsHzfmwwurXEZrqmQB88mpG+FJeDQGcEeI2dZ0Ckb7XHu/cSpTTp7JxLtt/vcXx6pIDHpARma2BZ7qQlnLcoigKHn3tGUMR7Em4Zxoxkv8DSKapbksXsYynek3zxKcPZTS8PYP2cq037lZA/MTBmM7HZT/UvzCS1LMWRuDMdrixNiTNM06aWnOsSp/MzSnVmPzkFx6/QtmN7lrWHSc1alGUJ2XbpHAVipoW8Rzk3sPyvZmnR+1LX+H53h6GfcDoe8FB8eYlJGUZr2xY1HRVfN56jQC4ZfwBVJK4qPkDY5jCX7FLMLpdrDBs9TQlTdiSNaJ1dMVbAsblS+CJaPHOkJjOvvrTbwcbtWv5h8QHD9gHkfVwjRT/XJ/yQ1e2X8j/7e2XC09DhzacPePvtI34D1YykwZxYxR0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sysdig Onboarding pt 1",title:"Sysdig Onboarding pt 1",src:"/ibm-garage-developer-guide/static/a4432402b5fca7b76a3c37b42cc9d760/3d2bc/sysdig-wizard-1.png",srcSet:["/ibm-garage-developer-guide/static/a4432402b5fca7b76a3c37b42cc9d760/d6747/sysdig-wizard-1.png 288w","/ibm-garage-developer-guide/static/a4432402b5fca7b76a3c37b42cc9d760/09548/sysdig-wizard-1.png 576w","/ibm-garage-developer-guide/static/a4432402b5fca7b76a3c37b42cc9d760/3d2bc/sysdig-wizard-1.png 848w"],sizes:"(max-width: 848px) 100vw, 848px",loading:"lazy"})),"\n    "),"\nNotice there are different types of integrations for different types of runtimes such as Java, servers such as Tomcat,\nand even infrasturcture integrations for monitoring the Kubernetes cluster itself and its containerd engines.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Press ",Object(i.b)("strong",{parentName:"p"},"Next"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The second page shows the predefined metrics, dashboards, and alerts that Sysdig will start using to monitor the apps\nin your cluster\n",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"848px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.25471698113207%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABqUlEQVQoz11TTW/cIBD1/24vvfRHRWpXants1NxyiHabtquQGG9sMMYGbF5n8OJld6QxMB9v3gy4wllijFhIWV6txrN+x141OOgTnjqJgzolfWzf8M90yd77acvNUvEhKS5ig4d2E5QbU5IJDgPr7NFOFppsrG6eURJirTL6MAz4K2q0SqMUPzkcjy8Q9QlNLXEtEUKSve020A2Q2x0fvyG04qriQvupOZLvOzwx2jqKS4pz4gn+dLwA4hyQQJ/vgV6u7Rd2mHdE9hWFGJC9Uf4G1Ou6LxnyKlsNSy3eDnokW2dGlLG5ZT2McGEpGDKzZcE40gVonWYZQkC2T9MEaweYXqe9c24DnGhv+p5yLbz36y3zZ6bZGGNSsLU2rSwMzPYV1KZiXDgD8p7tZU4C5ENPlTQxZOWALAyilErA7MuJzIjPHfk6XrWCJwLnlufkFEKgaZrEKM8k2+u6hpRy8zH7NJ7eYDFEwK9vsvJhpll4xHjzwspbvpH8R/H3x9sffBV77MQBu5c9qnSDVCWcX/0t0OWZXGtqmzr7/LDDh593+Hh/h0+/vuA/ZHel58SX8+gAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sysdig Onboarding pt 2",title:"Sysdig Onboarding pt 2",src:"/ibm-garage-developer-guide/static/02c00d38caf3da10cd11c514183e8755/3d2bc/sysdig-wizard-2.png",srcSet:["/ibm-garage-developer-guide/static/02c00d38caf3da10cd11c514183e8755/d6747/sysdig-wizard-2.png 288w","/ibm-garage-developer-guide/static/02c00d38caf3da10cd11c514183e8755/09548/sysdig-wizard-2.png 576w","/ibm-garage-developer-guide/static/02c00d38caf3da10cd11c514183e8755/3d2bc/sysdig-wizard-2.png 848w"],sizes:"(max-width: 848px) 100vw, 848px",loading:"lazy"})),"\n    "),"\n- Press ",Object(i.b)("strong",{parentName:"p"},"Complete Onboarding")))),Object(i.b)("h3",{id:"explore-your-application"},"Explore your application"),Object(i.b)("p",null,"By default, the Sysdig dashboard opens the ",Object(i.b)("strong",{parentName:"p"},"Explore")," page on its ",Object(i.b)("strong",{parentName:"p"},"Deployments and Pods")," grouping."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Select your cluster")),Object(i.b)("p",null,"By default, Sysdig opens its ",Object(i.b)("strong",{parentName:"p"},"Overview by Process")," dashboard, which has panels showing stats about CPU, memory, and networking.\nThis is one of Sysdig’s ",Object(i.b)("strong",{parentName:"p"},"Default Dashboards")," (i.e. built-in dashboards)."),Object(i.b)("p",null,"These are the cumlative totals for all of the pods running in the cluster. Hover over a graph and a key pops up to list\nthe pods and show each one’s color."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Expand your cluster and namespace, then select your deployment")),Object(i.b)("p",null,"This shows the stats just for the pods in your deployment."),Object(i.b)("p",null,"On the ",Object(i.b)("strong",{parentName:"p"},"Dashboard")," page, you can create your own custom dashboards."),Object(i.b)("p",null,"The Getting started tutorial, starting with\n",Object(i.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-getting-started#step5"}),"Step 5: Monitor your environment"),",\ngives some instructions on monitoring, managing, and what to do next."),Object(i.b)("h2",{id:"give-it-a-try"},"Give it a try"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Before you start to understanding how to monitor your application instances, make sure you have ",Object(i.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/deployapp"}),"deployed an app")," into your development cluster. this ",Object(i.b)("em",{parentName:"p"},"Git it a Try")," will use the ",Object(i.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/starterkits/starterkittemplates"}),"template-node-typescript")," as an example.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("strong",{parentName:"p"},"SysDig")," service is already created, bound and configured to listen to monitoring metrics and events for your development cluster.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the ",Object(i.b)("strong",{parentName:"p"},"SysDig")," instance that is named the same as your development cluster.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click on the ",Object(i.b)("strong",{parentName:"p"},"Dashboard")," and then on ",Object(i.b)("em",{parentName:"p"},"HTTP Overivew")," you will see an overall dashboard showing cluster health and metrics, get familiar with these views and the metrics they are showing."))),Object(i.b)("h3",{id:"view-your-app-metrics"},"View your app metrics"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Explore")," on the left hand navigation, in the Search field enter your app name ie. ",Object(i.b)("inlineCode",{parentName:"p"},"hello-world-mjp"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Switch to view the ",Object(i.b)("strong",{parentName:"p"},"Containerized Apps")," and select the image reference. You will see metrics for all the instances.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Then select the in deployment and see the metrics for just your running pods.Acknowledge\n",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.659217877094974%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA+0lEQVQoz4VR7WrDMAz0+79TSSC/2l/tulcYc9IlsRN/f+Qmm2ZshXaCA0tnHSeJWWvhvEeMscKHUPOCQO+UUsXOv0JKAcwoDeccSmwERbkUC0HCWocUEzyJ5y3jv+CjBePDDbdpwtc8Q8gFb/MV7dDirM7o+g4Nb8BNj1WusM5CGwO9GnxaXrnjfIQwAmpRsD6CTbOEEILGK7YTrvIdh48DLvqCjhfBFmMcsYoVIQYoTRNQz+AHNH2DkzhhcQsE1VJOYJJcaaV+bBfhOvvvuOfbttX1lBWU92PknMHCfaF7QzlK3RmRjyjHKXz5/4xnf4yQYCnu5DO84r8B4SEfGkb0b20AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Metrics View",title:"Metrics View",src:"/ibm-garage-developer-guide/static/a02d9787bdccba1fa1f01486dcadf743/fb070/appview.png",srcSet:["/ibm-garage-developer-guide/static/a02d9787bdccba1fa1f01486dcadf743/d6747/appview.png 288w","/ibm-garage-developer-guide/static/a02d9787bdccba1fa1f01486dcadf743/09548/appview.png 576w","/ibm-garage-developer-guide/static/a02d9787bdccba1fa1f01486dcadf743/fb070/appview.png 1152w","/ibm-garage-developer-guide/static/a02d9787bdccba1fa1f01486dcadf743/fb104/appview.png 1728w","/ibm-garage-developer-guide/static/a02d9787bdccba1fa1f01486dcadf743/902fb/appview.png 2304w","/ibm-garage-developer-guide/static/a02d9787bdccba1fa1f01486dcadf743/3faa6/appview.png 2864w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"You will now see just the metrics for your your app, you can view at different levels, from pod to namespace to node to cluster. Giving you a fine grain access to you monitoring requirements."))),Object(i.b)("h3",{id:"creating-a-custom-alert-and-event"},"Creating a custom alert and event"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"SysDig")," enables custom events and alerts to be triggered. Lets create a simple alert that will send an email when ever the total number of pods in your ",Object(i.b)("em",{parentName:"p"},"namespace/project")," exceeds a specific number. This is helpful to monitor when project is consuming unnecessary resources in the development environment."),Object(i.b)("h3",{id:"add-notification-channel"},"Add Notification Channel"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"After logging into the ",Object(i.b)("strong",{parentName:"li"},"SysDig")," dashboard, click on your initials bottom left, then click on ",Object(i.b)("strong",{parentName:"li"},"Notification Channels")),Object(i.b)("li",{parentName:"ul"},"Click on ",Object(i.b)("strong",{parentName:"li"},"Add Notification Channel")," and select ",Object(i.b)("em",{parentName:"li"},"email")," as the channel type."),Object(i.b)("li",{parentName:"ul"},"Enter your business email address and give you channel a name."),Object(i.b)("li",{parentName:"ul"},"Click ",Object(i.b)("strong",{parentName:"li"},"Save")),Object(i.b)("li",{parentName:"ul"},"Using the ",Object(i.b)("inlineCode",{parentName:"li"},"...")," menu send a test notification and check it arrives into your email account.")),Object(i.b)("h3",{id:"add-alert"},"Add Alert"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click on ",Object(i.b)("strong",{parentName:"p"},"Alerts")," on the left hand navigation bar.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Add Alert")," and select ",Object(i.b)("strong",{parentName:"p"},"Metric")," there are a wide number of different alter types you can create.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click on the title and edit it call it something like ",Object(i.b)("inlineCode",{parentName:"p"},"MJP Dev Metric")," change the severity to red ",Object(i.b)("inlineCode",{parentName:"p"},"High"),".")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Complete the following fields in ",Object(i.b)("em",{parentName:"p"},"Section 1")," of the create alert dialog.\n",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.101063829787236%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABJElEQVQoz42TW4rDMAxFvf+NdDdlPuenLbQEGgJ5vxNHk+NBxuO2YQzCsS1dH0mOOZ2/5Pt2k8f9LvM8C2PbNjkanKvF/uZRlPLMMrleLlKW5UvAO4vFw2F0s6pr6bpOlmWRvu+l3tdN2/7OTeNnzjGysdb+AXCCTAilaeoC4rQIwkKSI1pHyG1FUUie59LuVAgP4+hI1nUV9eGMvVDU+WzW0xpVH3cBUiUQw3GaJk9BAOJKq/uLXaWeRifqBUk5SRLJ9ubE3dN68a204X58gW8KohAqRUg+DIPzgVhJ2aMEiLLWy7wgXaSOOCGCY3iBluHo6bim6IJgKJUU4wJIqqpybxRTIi1D/LjNf/4KBFWUTEg9pH1bw09Guiqo9FCHDQqhfgAG66+Cgdrw1gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Section1",title:"Section1",src:"/ibm-garage-developer-guide/static/70e371cf39aeced5c9dfb274d0c24f86/fb070/createalert.png",srcSet:["/ibm-garage-developer-guide/static/70e371cf39aeced5c9dfb274d0c24f86/d6747/createalert.png 288w","/ibm-garage-developer-guide/static/70e371cf39aeced5c9dfb274d0c24f86/09548/createalert.png 576w","/ibm-garage-developer-guide/static/70e371cf39aeced5c9dfb274d0c24f86/fb070/createalert.png 1152w","/ibm-garage-developer-guide/static/70e371cf39aeced5c9dfb274d0c24f86/d96c9/createalert.png 1504w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This alert will trigger after the number of pods in your development ",Object(i.b)("em",{parentName:"p"},"namespace/project")," raises above 3. This will only trigger for your own developer space, make sure this is set to the name you use for deploying your applications.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In section two called ",Object(i.b)("strong",{parentName:"p"},"Notify")," switch on the notification channel you created earlier and set the ",Object(i.b)("em",{parentName:"p"},"Notify every")," 2 minutes and add a reference to your namespace in the ",Object(i.b)("em",{parentName:"p"},"Event Title"),"\n",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"754px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.63660477453581%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAABxUlEQVQ4y5VU206DQBTkO/0rv8HED9FXoy/GqKmXWoGFUqAtt6Wl45l1FwFtYptM9kCX2TkzB7yLm1vcPT3jdTZDu9vhP7/D4fCr5tp1Hbx2v0e+XkN9+lBhiDiOEQQBVqsV9vLfTg7hyn01a3nIETgMrz130sNK4SPwkWcZ0jTFdrtF0zQGWlDqBmlTQwvxVNlQsceybVvMkggv72+IlEIoSqnw1NZ7hUVRYKak5WWMVIgyUZnnObTW/UYeStACrvuB0qFKzxWPmwRZWaAVEprL+2VZfvsnBFVVGdR1bQTwnmUct+wUJiqCknYJ3/dN2wTVTtvrUz0WChWRlEGwVYJEm83GKCKcOqe0rCtkElJtR61v2V0kSWLUcWyI5XKJtYwTD6NvRGdH5q9wRgpZUA1VkeQvcJS40js3TgQ9dkM9IuSYRFFklGl5qLObDKxfrEkwRO+h5elT1i5J61ktpzv/HBp7zymbHmBePUe4lpbn87lJ+GOxMEqp+hgSQnw3kDqW/aUIGink3JkEZR2mW01S5rqzipx3P6+eTWfo08i/I+AzJNWSftFo3IcKCwnVm77cp3y+CvEylPQfghBnF5c4v7rGF1ra3iiUVPEPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Notify",title:"Notify",src:"/ibm-garage-developer-guide/static/6b056add61f161a4b7869543554b4b35/48dcf/section2.png",srcSet:["/ibm-garage-developer-guide/static/6b056add61f161a4b7869543554b4b35/d6747/section2.png 288w","/ibm-garage-developer-guide/static/6b056add61f161a4b7869543554b4b35/09548/section2.png 576w","/ibm-garage-developer-guide/static/6b056add61f161a4b7869543554b4b35/48dcf/section2.png 754w"],sizes:"(max-width: 754px) 100vw, 754px",loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click ",Object(i.b)("strong",{parentName:"p"},"Save")))),Object(i.b)("h3",{id:"increase-pod-count-for-your-app"},"Increase Pod count for your app"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate back to your OpenShift or Kubernetes dashboard"),Object(i.b)("li",{parentName:"ul"},"Switch to your ",Object(i.b)("em",{parentName:"li"},"namespace/project")," and open the Deployments view. Click on the deployment of your app and increase the number of ",Object(i.b)("em",{parentName:"li"},"Pods")," for your app to 4.")),Object(i.b)("h3",{id:"acknowledge-your-events"},"Acknowledge your events"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Navigate back to ",Object(i.b)("strong",{parentName:"li"},"SysDig")," and select the ",Object(i.b)("strong",{parentName:"li"},"Events")," view from the left hand navigation."),Object(i.b)("li",{parentName:"ul"},"In the search field enter the name of your app ie. ",Object(i.b)("inlineCode",{parentName:"li"},"hello-world-mjp")),Object(i.b)("li",{parentName:"ul"},"After a few minutes you will see your customer alert triggered.Navigate\n",Object(i.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.58844133099825%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABCklEQVQoz6WS227EIAxE8/+fWKmPu20CgXA196mhykqt+lakIxskD/bAppQGUcJcYwz8Z502YFP6gnUevfd1OGNj7thae5FzWee1VpRSfhAy4e35xEaJQDEiEuGyFsYYCClxKgWlNZxzL/GU0irOOS9uscy0WvCxS2y9Dy5ooFSw7wcuFgk+MB6JrWi1Yczu2Y6ZxxCQWRh/2GMdTcG+CgKP86kklDdwOcKlCEMeV3ALEzlndLCIjbsDdzzYBiaNCr4Wh3HYpje9VSiKeD+eeBiBs3ioEla8mfuJSBa6RVhkmHGT4FHxsNd3h2tk7lCIE1IK9s0vvyJ7G3jEwHHuZz4f5PePuHPNr/wFyZQiiBwh48kAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Alert",title:"Alert",src:"/ibm-garage-developer-guide/static/de3b975f6a8096d1e915380187f8102f/fb070/alerttriggered.png",srcSet:["/ibm-garage-developer-guide/static/de3b975f6a8096d1e915380187f8102f/d6747/alerttriggered.png 288w","/ibm-garage-developer-guide/static/de3b975f6a8096d1e915380187f8102f/09548/alerttriggered.png 576w","/ibm-garage-developer-guide/static/de3b975f6a8096d1e915380187f8102f/fb070/alerttriggered.png 1152w","/ibm-garage-developer-guide/static/de3b975f6a8096d1e915380187f8102f/fb104/alerttriggered.png 1728w","/ibm-garage-developer-guide/static/de3b975f6a8096d1e915380187f8102f/411f5/alerttriggered.png 2284w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(i.b)("li",{parentName:"ul"},"Click on the Alert and click ",Object(i.b)("strong",{parentName:"li"},"Acknowledge")," this will inform the ",Object(i.b)("strong",{parentName:"li"},"Notification Channel")," than an operations team member is working the issue.Acknowledge"),Object(i.b)("li",{parentName:"ul"},"Finally check you email account to see if any notifications have arrived.Acknowledge\n",Object(i.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1125px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"216.53333333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAArCAYAAAB4pah1AAAACXBIWXMAAAsSAAALEgHS3X78AAAFBElEQVRIx+1W2U/UVxT+PRu0VXaGcfZVBmRXK4sKRXYYdhARqrSVxRbbpIl2sTXtQ2Mbk/43PvWlS9KqNWzKDmUQUhiURWFm+HrOGQZHoBYML036Sz7Ovefe893vnHsmXMVstiA9/RgyM7Nx8mQG4uIcsFissFptYrcDr3FcfHwCUlPTkJGRifz8AllTTCYzjh9LR17uGZzKzsaRI3E7IpS44yeQlZWNnJxc1NTUwsqEFqsdRqsDOlsS9EYLLHTyPxFtJjUSqcFogt5ghEarg4V8iiEhA8aG20j+YQGGrHrYTVrY7HGw2ezbwCZEfhCpPR7mxAzZb0nKgMXugGI026A1xeGwJZEUWqHVaqHR6MjqyGrXodvwGUgNp2skZaLQZIFeb6BYv0+JiorG0aNJyM3Nh4mcCQmJSE5OFV9KSprUiecMXtPrjYiKikFMTKxAHXuYDrDAQH6VSg0lLCwcn1y/iTs//oZTZ/JQUlIKp7MSZWVOFBYWo6CgCEVFxSguLsXZswV0s0dFLRP7Vethp5SZVAj5tBNvZaG69jxJNsPhoLqYrdI+nJpOZ6A0TRLAJJwWq+eW4cvhdZWK1aoQS2oV/hN6KAwHDryJyMhohIaGIywsAgcPhsk8IiIK4eGR63gxPkQxvI/H0dEqqNUaPyHXgdOqrq5FaWkZLl5sRV1dPS5caKZGz5TUS0rKpM/Ky53Iy8uXRq6qqpExl4MV88FMKgp5c01NHTXo27KRAxsbm1BbW49z5xrpkEtSWz64vr6BfhWFso9/Hezn5ubUhTAk5ADVxyob2to6Nop/+nQOCgqL5JC0tGOorKxCUlIKZVFOB1YIaWVltcw5xuFIwL59IVBamlvQ0d4uuNrVhY6OdrS3ta3byzKWebvf33aZfO1tgiudnejs7JC1K2SbiUv56ZffUd98BU2XrqKh5QM0XuzCeUKwDcZLvnc+FNvU+hEqGt7Hz7/ehXL3fjeuffEtbnx9G5/f/B6ffvUdrn95y48bt/AZzV8F3s9xH1/7BsylYNPn864KvJ4VvM6neDxezM258ceDB7h37z56+/owNDSEsbExjI6OYnx8XDA8MiI+xuSkC9PT05idnYPH4xGsrK6KVbxeL5aXlyW4u7sbw8Mj6CNSBs97enrw6NEjDA4OYmBgAFNTUyRgDm63GwsLCxvK1tbW4PP5/IT8LS8/o5MnRe3MzAz+mp3FHAVx8PPnzyUgsJfHwXiJkP/waS6XS1TOzExjglL0+bw7qtkWQh5wykw4S6pmFoFJymR0nlR7ZOsWRf+qMHhxkVJ/srCEhaVnWFxcIp9vd4SBunCdnj59SnX8E2OUuss1KaXYdcoBQg7mm+R2ePz48UYJVlZWBKvUFmw3Z7TtLS8tLWGE+oxbZHh4GP39/YLe3l5pFQb3JtuJiQlpHT6QO2ALIQ/m5+cl4OHDh9I63DZu97yoZrDSQO/x2D93y2UGlDKZEHJ3B9+y64kXE0/WsOrbWctwhgzm4bIo2ONPaW19D8F4dx2trwll//43sJdQAq+CvYL8k9pL/E/4XyZUsaXnmmp9vHkeGO9c4XoA29iYmKB5rCCwtnuFai1iTEk01/iJDtP7UGN8tUJ+iW7xq/0EsVozIk40EbGelEYTeSKi4nP9yjcrZKIAGb8b+XW7HaLVhhcHizLNq1PmIH7COZ0V8lTjByeDx056yqWnpcurNbi+gZT/BvL+nJGqDAfSAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"email",title:"email",src:"/ibm-garage-developer-guide/static/252b74cf3ed1acbff7d58c2236dc98fd/a324d/email.png",srcSet:["/ibm-garage-developer-guide/static/252b74cf3ed1acbff7d58c2236dc98fd/d6747/email.png 288w","/ibm-garage-developer-guide/static/252b74cf3ed1acbff7d58c2236dc98fd/09548/email.png 576w","/ibm-garage-developer-guide/static/252b74cf3ed1acbff7d58c2236dc98fd/a324d/email.png 1125w"],sizes:"(max-width: 1125px) 100vw, 1125px",loading:"lazy"})),"\n    "))),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"It’s important to be able to monitor your deployed applications.\nHere, the Developer Tools environment uses Sysdig Monitoring, but you never had to install or run Sysdig.\nJust deploy your application into the Developer Tools environment and it gets moniotored automatically.\nAfter deploying your application, open the Sysdig web UI and browse the status, including the status\nof your cluster as a whole and your deployment in particular."))}p.isMDXComponent=!0},433:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},434:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},435:function(e,t,a){"use strict";a(32),a(28);var i=a(1),n=a(433),r=a(0),s=a.n(r),o=a(105),c=a.n(o),l=a(195),b=a(127),p=a(3),d=a.n(p),g=a(384),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(i.b)("div",{className:d()(g.pageHeader,(t={},t[g.withTabs]=r.length,t))},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12"},Object(i.b)("h1",{id:"page-title",className:g.text},a)))))},u=a(434),h=a(385),A=function(e){var t=e.relativePagePath,a=e.repository,n=u.data.site.siteMetadata.repository,r=a||n,s=r.baseUrl,o=r.subDirectory,c=s+"/edit/"+r.branch+o+"/src/pages"+t;return s?Object(i.b)("div",{className:"bx--row "+h.row},Object(i.b)("div",{className:"bx--col"},Object(i.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},y=a(193),f=(a(59),a(26)),O=a(386);var v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0}),s=r===n,o=new RegExp(n+"(?!-)"),l=a.replace(o,r);return Object(i.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=s,t),O.listItem)},Object(i.b)(f.Link,{className:O.link,to:""+l},e))}));return Object(i.b)("div",{className:O.tabsContainer},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(i.b)("nav",null,Object(i.b)("ul",{className:O.list},r))))))},n}(s.a.Component),w=a(194);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,s=e.Title,o=t.frontmatter,p=void 0===o?{}:o,d=t.relativePagePath,g=t.titleType,u=p.tabs,h=p.title,f=p.theme,O=p.description,N=p.keywords,j=n.data.site.pathPrefix,S=j?r.pathname.replace(j,""):r.pathname,k=u?S.split("/").slice(-1)[0]||c()(u[0],{lower:!0}):"";return Object(i.b)(b.a,{homepage:!1,theme:f,pageTitle:h,pageDescription:O,pageKeywords:N,titleType:g},Object(i.b)(m,{title:s?Object(i.b)(s,null):h,label:"label",tabs:u}),u&&Object(i.b)(v,{slug:S,tabs:u,currentTab:k}),Object(i.b)(w.a,{padded:!0},a,Object(i.b)(A,{relativePagePath:d})),Object(i.b)(y.a,{pageContext:t,location:r,slug:S,tabs:u,currentTab:k}),Object(i.b)(l.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-monitoring-index-mdx-68c5acbfd1fca5d36c69.js.map