(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{418:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return g}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(107),i=a(443);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},l=s("PageDescription"),c=s("AnchorLinks"),b=s("AnchorLink"),p={_frontmatter:o},d=i.a;function g(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(d,r({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use Sysdig to monitor your running application")),Object(n.b)("p",null,"In IBM Garage Method, one of the Operate practices is to ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/manage/practice_automated_monitoring/"}),"automate application monitoring"),". Sysdig automates application monitoring, enabling an operator to view stats and collect metrics about a Kubernetes cluster and its deployments. The Developer Tools environment includes an IBM Cloud Monitoring with Sysdig service instance configured with a Sysdig agent installed in the environment’s cluster. Simply by deploying your application into the Developer Tools environment, Sysdig monitors it, just open the Sysdig web UI from the IBM Cloud dashboard to browse your application’s status."),Object(n.b)("h2",{id:"sysdig-monitoring"},"Sysdig Monitoring"),Object(n.b)("p",null,Object(n.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig"}),"IBM Cloud Monitoring with Sysdig")," explains how to configure and use an instance of the Sysdig service, but the Developer Tools environment has already done most of this for you. You can skip steps 1-3 about user access, provisioning an instance, and installing an agent."),Object(n.b)("h3",{id:"sysdig-dashboard"},"Sysdig dashboard"),Object(n.b)("p",null,"Open the Sysdig web UI for your environment’s cluster"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-getting-started#step4"}),"Step 4: Launch the web UI")," explains how to open the web UI",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"In the IBM Cloud dashboard, navigate to ",Object(n.b)("strong",{parentName:"li"},"Observability")," > ",Object(n.b)("strong",{parentName:"li"},"Monitoring")),Object(n.b)("li",{parentName:"ul"},"Find the monitoring instance named after your environment’s cluster, such as ",Object(n.b)("inlineCode",{parentName:"li"},"showcase-dev-iks-sysdig"),Object(n.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1025px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"8.97560975609756%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAcklEQVQI1zWM2QoCMRRD5/8/UR8H1GEWW3vXLsRrwYdDICRnMXOIKlQN5g51nvnrWRStdVDdsfEdyVdQ7B5HQWZHJseeBNsl8WsYo2OROBXiiYZYnKBmU/YphFobSghfdMPb1ugFVya0PpCK4Xny5C/8AvQamoaEYgwuAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sysdig Monitoring Instance",title:"Sysdig Monitoring Instance",src:"/ibm-garage-developer-guide/static/044e438fd2e34b76850d050d863ab0e4/3e04c/sysdig-monitoring-instance.png",srcSet:["/ibm-garage-developer-guide/static/044e438fd2e34b76850d050d863ab0e4/d6747/sysdig-monitoring-instance.png 288w","/ibm-garage-developer-guide/static/044e438fd2e34b76850d050d863ab0e4/09548/sysdig-monitoring-instance.png 576w","/ibm-garage-developer-guide/static/044e438fd2e34b76850d050d863ab0e4/3e04c/sysdig-monitoring-instance.png 1025w"],sizes:"(max-width: 1025px) 100vw, 1025px",loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ul"},"In the monitoring instance, press the ",Object(n.b)("strong",{parentName:"li"},"View Sysdig")," button to open the Sysdig web UI")))),Object(n.b)("p",null,"Finish onboarding the agent"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If this is your first time opening the Sysdig dashboard on your cluster’s monitoring agent, Sysdig will open the Onboarding wizard")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The first page shows the hosts (i.e. Kubernetes nodes) and containers that Sysdig found, as well as the integrations it has\nselected to monitor them\n",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"848px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.141509433962256%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAB00lEQVQoz4VT7Y7TMBDsu/I28CqIh4DfCAE6iZaLOF2v1zYfjmPnw/FHhrETH1ckhKXt2O7uzO56s8OrtSxLwudB4dBVKFSDe9qDbvHYy7TPdhn1TUxeu3iRLWw42Bli7CEGjaZXaLmXtHZY7wRxmA1ex2ZLhCGETWlV89ZBKwUpBETToFcaulNQUhI1sYOZzJrhFhMhLAG7TOaJUgdUwwUuWIqsjsHzfmwwurXEZrqmQB88mpG+FJeDQGcEeI2dZ0Ckb7XHu/cSpTTp7JxLtt/vcXx6pIDHpARma2BZ7qQlnLcoigKHn3tGUMR7Em4Zxoxkv8DSKapbksXsYynek3zxKcPZTS8PYP2cq037lZA/MTBmM7HZT/UvzCS1LMWRuDMdrixNiTNM06aWnOsSp/MzSnVmPzkFx6/QtmN7lrWHSc1alGUJ2XbpHAVipoW8Rzk3sPyvZmnR+1LX+H53h6GfcDoe8FB8eYlJGUZr2xY1HRVfN56jQC4ZfwBVJK4qPkDY5jCX7FLMLpdrDBs9TQlTdiSNaJ1dMVbAsblS+CJaPHOkJjOvvrTbwcbtWv5h8QHD9gHkfVwjRT/XJ/yQ1e2X8j/7e2XC09DhzacPePvtI34D1YykwZxYxR0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sysdig Onboarding pt 1",title:"Sysdig Onboarding pt 1",src:"/ibm-garage-developer-guide/static/a4432402b5fca7b76a3c37b42cc9d760/3d2bc/sysdig-wizard-1.png",srcSet:["/ibm-garage-developer-guide/static/a4432402b5fca7b76a3c37b42cc9d760/d6747/sysdig-wizard-1.png 288w","/ibm-garage-developer-guide/static/a4432402b5fca7b76a3c37b42cc9d760/09548/sysdig-wizard-1.png 576w","/ibm-garage-developer-guide/static/a4432402b5fca7b76a3c37b42cc9d760/3d2bc/sysdig-wizard-1.png 848w"],sizes:"(max-width: 848px) 100vw, 848px",loading:"lazy"})),"\n    "),"\nNotice there are different types of integrations for different types of runtimes such as Java, servers such as Tomcat,\nand even infrasturcture integrations for monitoring the Kubernetes cluster itself and its containerd engines.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Press ",Object(n.b)("strong",{parentName:"p"},"Next"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The second page shows the predefined metrics, dashboards, and alerts that Sysdig will start using to monitor the apps\nin your cluster\n",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"848px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.25471698113207%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABqUlEQVQoz11TTW/cIBD1/24vvfRHRWpXants1NxyiHabtquQGG9sMMYGbF5n8OJld6QxMB9v3gy4wllijFhIWV6txrN+x141OOgTnjqJgzolfWzf8M90yd77acvNUvEhKS5ig4d2E5QbU5IJDgPr7NFOFppsrG6eURJirTL6MAz4K2q0SqMUPzkcjy8Q9QlNLXEtEUKSve020A2Q2x0fvyG04qriQvupOZLvOzwx2jqKS4pz4gn+dLwA4hyQQJ/vgV6u7Rd2mHdE9hWFGJC9Uf4G1Ou6LxnyKlsNSy3eDnokW2dGlLG5ZT2McGEpGDKzZcE40gVonWYZQkC2T9MEaweYXqe9c24DnGhv+p5yLbz36y3zZ6bZGGNSsLU2rSwMzPYV1KZiXDgD8p7tZU4C5ENPlTQxZOWALAyilErA7MuJzIjPHfk6XrWCJwLnlufkFEKgaZrEKM8k2+u6hpRy8zH7NJ7eYDFEwK9vsvJhpll4xHjzwspbvpH8R/H3x9sffBV77MQBu5c9qnSDVCWcX/0t0OWZXGtqmzr7/LDDh593+Hh/h0+/vuA/ZHel58SX8+gAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sysdig Onboarding pt 2",title:"Sysdig Onboarding pt 2",src:"/ibm-garage-developer-guide/static/02c00d38caf3da10cd11c514183e8755/3d2bc/sysdig-wizard-2.png",srcSet:["/ibm-garage-developer-guide/static/02c00d38caf3da10cd11c514183e8755/d6747/sysdig-wizard-2.png 288w","/ibm-garage-developer-guide/static/02c00d38caf3da10cd11c514183e8755/09548/sysdig-wizard-2.png 576w","/ibm-garage-developer-guide/static/02c00d38caf3da10cd11c514183e8755/3d2bc/sysdig-wizard-2.png 848w"],sizes:"(max-width: 848px) 100vw, 848px",loading:"lazy"})),"\n    "),"\n- Press ",Object(n.b)("strong",{parentName:"p"},"Complete Onboarding")))),Object(n.b)("h3",{id:"explore-your-application"},"Explore your application"),Object(n.b)("p",null,"By default, the Sysdig dashboard opens the ",Object(n.b)("strong",{parentName:"p"},"Explore")," page on its ",Object(n.b)("strong",{parentName:"p"},"Deployments and Pods")," grouping."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Select your cluster")),Object(n.b)("p",null,"By default, Sysdig opens its ",Object(n.b)("strong",{parentName:"p"},"Overview by Process")," dashboard, which has panels showing stats about CPU, memory, and networking.\nThis is one of Sysdig’s ",Object(n.b)("strong",{parentName:"p"},"Default Dashboards")," (i.e. built-in dashboards)."),Object(n.b)("p",null,"These are the cumulative totals for all of the pods running in the cluster. Hover over a graph and a key pops up to list\nthe pods and show each one’s color."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Expand your cluster and namespace, then select your deployment")),Object(n.b)("p",null,"This shows the stats just for the pods in your deployment."),Object(n.b)("p",null,"On the ",Object(n.b)("strong",{parentName:"p"},"Dashboard")," page, you can create your own custom dashboards."),Object(n.b)("p",null,"The Getting started tutorial, starting with\n",Object(n.b)("a",r({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-getting-started#step5"}),"Step 5: Monitor your environment"),",\ngives some instructions on monitoring, managing, and what to do next."),Object(n.b)("h2",{id:"give-it-a-try"},"Give it a try"),Object(n.b)("p",null,"Before you start to understanding how to monitor your application instances, make sure you have ",Object(n.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/deployapp"}),"deployed an app")," into your development cluster. This ",Object(n.b)("em",{parentName:"p"},"Git it a Try")," uses ",Object(n.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/starterkits/starterkittemplates"}),"template-node-typescript")," as an example."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"SysDig")," service is already created, bound and configured to listen to monitoring metrics and events for your development cluster. You can see this in the HTTP overview."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Open the ",Object(n.b)("strong",{parentName:"li"},"SysDig")," instance that is named the same as your development cluster."),Object(n.b)("li",{parentName:"ul"},"Go to ",Object(n.b)("strong",{parentName:"li"},"Dashboards")," > ",Object(n.b)("strong",{parentName:"li"},"HTTP Overview"))),Object(n.b)("p",null,"The dashboard shows stats for all incoming HTTP requests for all apps in the cluster. Browse through these views to get a feel for what they’re showing."),Object(n.b)("h3",{id:"view-your-apps-metrics"},"View your app’s metrics"),Object(n.b)("p",null,"Take a look at the metrics for your app."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the ",Object(n.b)("strong",{parentName:"p"},"Explore")," page in the left nav menu")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"On the Explore page, select the ",Object(n.b)("strong",{parentName:"p"},"Containerized Apps")," grouping")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Search for your app, e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"hello-world-mjp"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the list of apps, select yours, e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"us.icr.io/mooc-team-one/hello-world-mjp:1.0.0-10"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"With your app selected, select the ",Object(n.b)("strong",{parentName:"p"},"Overview by Container")," dashboard"),Object(n.b)("p",{parentName:"li"},"  The Overview by Container dashboard shows metrics for the containers in your app. You will now see just the metrics for your your app. You can view at different levels—from pod to namespace to node to cluster—giving you a fine grain access to you monitoring requirements."),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.659217877094974%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAA+0lEQVQoz4VR7WrDMAz0+79TSSC/2l/tulcYc9IlsRN/f+Qmm2ZshXaCA0tnHSeJWWvhvEeMscKHUPOCQO+UUsXOv0JKAcwoDeccSmwERbkUC0HCWocUEzyJ5y3jv+CjBePDDbdpwtc8Q8gFb/MV7dDirM7o+g4Nb8BNj1WusM5CGwO9GnxaXrnjfIQwAmpRsD6CTbOEEILGK7YTrvIdh48DLvqCjhfBFmMcsYoVIQYoTRNQz+AHNH2DkzhhcQsE1VJOYJJcaaV+bBfhOvvvuOfbttX1lBWU92PknMHCfaF7QzlK3RmRjyjHKXz5/4xnf4yQYCnu5DO84r8B4SEfGkb0b20AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Metrics View",title:"Metrics View",src:"/ibm-garage-developer-guide/static/a02d9787bdccba1fa1f01486dcadf743/fb070/appview.png",srcSet:["/ibm-garage-developer-guide/static/a02d9787bdccba1fa1f01486dcadf743/d6747/appview.png 288w","/ibm-garage-developer-guide/static/a02d9787bdccba1fa1f01486dcadf743/09548/appview.png 576w","/ibm-garage-developer-guide/static/a02d9787bdccba1fa1f01486dcadf743/fb070/appview.png 1152w","/ibm-garage-developer-guide/static/a02d9787bdccba1fa1f01486dcadf743/fb104/appview.png 1728w","/ibm-garage-developer-guide/static/a02d9787bdccba1fa1f01486dcadf743/902fb/appview.png 2304w","/ibm-garage-developer-guide/static/a02d9787bdccba1fa1f01486dcadf743/3faa6/appview.png 2864w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")))),Object(n.b)("h3",{id:"creating-a-custom-alert"},"Creating a custom alert"),Object(n.b)("p",null,"SysDig enables monitoring for custom events and alerting for events. Let’s create a simple alert that will send an email when ever the total number of pods in your namespace/project exceeds a specific number. This is helpful to monitor when project is consuming unnecessary resources in the development environment."),Object(n.b)("p",null,"Note: This is not tracking the number of pods in an application, but the number of pods (for all applications) in a namespace/project."),Object(n.b)("h4",{id:"add-notification-channel"},"Add Notification Channel"),Object(n.b)("p",null,"Create a notification channel, which is how SysDig will send you an alert."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"In the SysDig dashboard, press the button with your initials at the bottom of the left nav menu, and select ",Object(n.b)("strong",{parentName:"li"},"Settings")),Object(n.b)("li",{parentName:"ul"},"In the Settings page, select ",Object(n.b)("strong",{parentName:"li"},"Notification Channels")),Object(n.b)("li",{parentName:"ul"},"Press ",Object(n.b)("strong",{parentName:"li"},"Add Notification Channel")," and select ",Object(n.b)("strong",{parentName:"li"},"email")," as the channel type"),Object(n.b)("li",{parentName:"ul"},"Enter your business email address and give your channel a name, e.g. ",Object(n.b)("inlineCode",{parentName:"li"},"MJP Dev Channel")),Object(n.b)("li",{parentName:"ul"},"Press ",Object(n.b)("strong",{parentName:"li"},"Save")),Object(n.b)("li",{parentName:"ul"},"Using the ",Object(n.b)("inlineCode",{parentName:"li"},"...")," menu, send a test notification and verify that it arrives into your email account")),Object(n.b)("h4",{id:"add-alert"},"Add Alert"),Object(n.b)("p",null,"Create an alert, which notifies you when an event occurs."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Select the ",Object(n.b)("strong",{parentName:"li"},"Alerts")," page in the left nav menu"),Object(n.b)("li",{parentName:"ul"},"Press ",Object(n.b)("strong",{parentName:"li"},"Add Alert")," and select ",Object(n.b)("strong",{parentName:"li"},"Metric"))),Object(n.b)("p",null,"The New Alert/Metric wizard enables you to configure a wide range of alerts."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the default title, “New Metric Alert”, and edit it to name the alert, e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"MJP Dev Metric"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Change the severity to red ",Object(n.b)("inlineCode",{parentName:"p"},"High"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In Section 1: Define of th wizard, complete the fields as shown\n",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.101063829787236%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABJElEQVQoz42TW4rDMAxFvf+NdDdlPuenLbQEGgJ5vxNHk+NBxuO2YQzCsS1dH0mOOZ2/5Pt2k8f9LvM8C2PbNjkanKvF/uZRlPLMMrleLlKW5UvAO4vFw2F0s6pr6bpOlmWRvu+l3tdN2/7OTeNnzjGysdb+AXCCTAilaeoC4rQIwkKSI1pHyG1FUUie59LuVAgP4+hI1nUV9eGMvVDU+WzW0xpVH3cBUiUQw3GaJk9BAOJKq/uLXaWeRifqBUk5SRLJ9ubE3dN68a204X58gW8KohAqRUg+DIPzgVhJ2aMEiLLWy7wgXaSOOCGCY3iBluHo6bim6IJgKJUU4wJIqqpybxRTIi1D/LjNf/4KBFWUTEg9pH1bw09Guiqo9FCHDQqhfgAG66+Cgdrw1gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Section1",title:"Section1",src:"/ibm-garage-developer-guide/static/70e371cf39aeced5c9dfb274d0c24f86/fb070/createalert.png",srcSet:["/ibm-garage-developer-guide/static/70e371cf39aeced5c9dfb274d0c24f86/d6747/createalert.png 288w","/ibm-garage-developer-guide/static/70e371cf39aeced5c9dfb274d0c24f86/09548/createalert.png 576w","/ibm-garage-developer-guide/static/70e371cf39aeced5c9dfb274d0c24f86/fb070/createalert.png 1152w","/ibm-garage-developer-guide/static/70e371cf39aeced5c9dfb274d0c24f86/d96c9/createalert.png 1504w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "),"\nThis alert will trigger after the number of pods (in any/all applications) in your namespace/project raises above 3. This will only trigger for your own developer space, make sure this is set to the one you use for deploying your applications, e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"dev-mjp"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In Section 2: Notify of the wizard, switch on the notification channel you created earlier, e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"MJP Dev Channel"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Set it to notify you every 2 minutes")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the ",Object(n.b)("strong",{parentName:"p"},"Notification Subject & Event Title")," field, add your namespace to the end, e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"- Dev-MJP namespace"),"\n",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"754px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.63660477453581%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAABxUlEQVQ4y5VU206DQBTkO/0rv8HED9FXoy/GqKmXWoGFUqAtt6Wl45l1FwFtYptM9kCX2TkzB7yLm1vcPT3jdTZDu9vhP7/D4fCr5tp1Hbx2v0e+XkN9+lBhiDiOEQQBVqsV9vLfTg7hyn01a3nIETgMrz130sNK4SPwkWcZ0jTFdrtF0zQGWlDqBmlTQwvxVNlQsceybVvMkggv72+IlEIoSqnw1NZ7hUVRYKak5WWMVIgyUZnnObTW/UYeStACrvuB0qFKzxWPmwRZWaAVEprL+2VZfvsnBFVVGdR1bQTwnmUct+wUJiqCknYJ3/dN2wTVTtvrUz0WChWRlEGwVYJEm83GKCKcOqe0rCtkElJtR61v2V0kSWLUcWyI5XKJtYwTD6NvRGdH5q9wRgpZUA1VkeQvcJS40js3TgQ9dkM9IuSYRFFklGl5qLObDKxfrEkwRO+h5elT1i5J61ktpzv/HBp7zymbHmBePUe4lpbn87lJ+GOxMEqp+hgSQnw3kDqW/aUIGink3JkEZR2mW01S5rqzipx3P6+eTWfo08i/I+AzJNWSftFo3IcKCwnVm77cp3y+CvEylPQfghBnF5c4v7rGF1ra3iiUVPEPAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Notify",title:"Notify",src:"/ibm-garage-developer-guide/static/6b056add61f161a4b7869543554b4b35/48dcf/section2.png",srcSet:["/ibm-garage-developer-guide/static/6b056add61f161a4b7869543554b4b35/d6747/section2.png 288w","/ibm-garage-developer-guide/static/6b056add61f161a4b7869543554b4b35/09548/section2.png 576w","/ibm-garage-developer-guide/static/6b056add61f161a4b7869543554b4b35/48dcf/section2.png 754w"],sizes:"(max-width: 754px) 100vw, 754px",loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Press ",Object(n.b)("strong",{parentName:"p"},"Save")))),Object(n.b)("h3",{id:"cause-the-event"},"Cause the event"),Object(n.b)("p",null,"Let’s test your alert by causing the event to occur."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Back in your OpenShift or Kubernetes dashboard, navigate to your namespace/project and its deploments"),Object(n.b)("li",{parentName:"ul"},"Select the deployment for your app and increase the number of pods for your app to 4")),Object(n.b)("p",null,"Once your app has started 4 pods/replicas, your namespace/project will be running more than the 3 pods your alert is monitoring for."),Object(n.b)("h3",{id:"acknowledge-your-event"},"Acknowledge your event"),Object(n.b)("h4",{id:"watch-the-container-count"},"Watch the container count"),Object(n.b)("p",null,"While starting pods goes very quickly, SysDig monitoring is not instantaneous. It will take 2-20 min for monitoring to detect the event."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Back in the SysDig dashboard, navigate to your app again",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Explore")," > ",Object(n.b)("strong",{parentName:"li"},"Containerized Apps")),Object(n.b)("li",{parentName:"ul"},"Select your app to display the ",Object(n.b)("strong",{parentName:"li"},"Overview by Container Image")," dashboard")))),Object(n.b)("p",null,"Wait and watch for the container count to rise to 4. (Again, this could take 2-20 min. Watch for the times along the bottom of the graph to finally change.)"),Object(n.b)("h4",{id:"watch-for-the-event"},"Watch for the event"),Object(n.b)("p",null,"Look for the event showing that your condition has been detected."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the ",Object(n.b)("strong",{parentName:"p"},"Events")," page in the left nav menu")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the search field, enter the name of your app, i.e. ",Object(n.b)("inlineCode",{parentName:"p"},"hello-world-mjp"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Look for an event named “{alert} is Triggered - {namespace} namespace”"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"{alert} is the name of the alert you created, e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"MJP Dev Metric"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"{namespace} is the name of your namespace/project, e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"dev-mjp")),Object(n.b)("span",r({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.58844133099825%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABCklEQVQoz6WS227EIAxE8/+fWKmPu20CgXA196mhykqt+lakIxskD/bAppQGUcJcYwz8Z502YFP6gnUevfd1OGNj7thae5FzWee1VpRSfhAy4e35xEaJQDEiEuGyFsYYCClxKgWlNZxzL/GU0irOOS9uscy0WvCxS2y9Dy5ooFSw7wcuFgk+MB6JrWi1Yczu2Y6ZxxCQWRh/2GMdTcG+CgKP86kklDdwOcKlCEMeV3ALEzlndLCIjbsDdzzYBiaNCr4Wh3HYpje9VSiKeD+eeBiBs3ioEla8mfuJSBa6RVhkmHGT4FHxsNd3h2tk7lCIE1IK9s0vvyJ7G3jEwHHuZz4f5PePuHPNr/wFyZQiiBwh48kAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Alert",title:"Alert",src:"/ibm-garage-developer-guide/static/de3b975f6a8096d1e915380187f8102f/fb070/alerttriggered.png",srcSet:["/ibm-garage-developer-guide/static/de3b975f6a8096d1e915380187f8102f/d6747/alerttriggered.png 288w","/ibm-garage-developer-guide/static/de3b975f6a8096d1e915380187f8102f/09548/alerttriggered.png 576w","/ibm-garage-developer-guide/static/de3b975f6a8096d1e915380187f8102f/fb070/alerttriggered.png 1152w","/ibm-garage-developer-guide/static/de3b975f6a8096d1e915380187f8102f/fb104/alerttriggered.png 1728w","/ibm-garage-developer-guide/static/de3b975f6a8096d1e915380187f8102f/411f5/alerttriggered.png 2284w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "),Object(n.b)("p",{parentName:"li"},"If you’ve already waited a few minutes until the container count increased to 4, you should see this event immediately. Otherwise, you need to wait (2-20 min?) until monitoring detects the change, triggers the alert, and logs the event."))))),Object(n.b)("h4",{id:"watch-for-the-alerts"},"Watch for the alerts"),Object(n.b)("p",null,"Once the event is displayed, check your email. You should get an email from ",Object(n.b)("inlineCode",{parentName:"p"},"Sysdig Notifications <ibm-saas-emailer@sysdig.com>")," with the subject “{alert} is Triggered - {namespace} namespace” (same as the event label). It says the metric is ",Object(n.b)("inlineCode",{parentName:"p"},"kubernetes.namespace.pod.available.count")," and the value is the number of pods in your namespace/project, at least 4 — plus a bunch of other info about the event."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-email"}),"From: Sysdig Notifications <ibm-saas-emailer@sysdig.com>\nTo: \"Matthew J Perrins\"\nSubject: MJP Dev Alert is Triggered - Dev-MJP namespace\n\n                Event Generated:\n    Severity    High\n      Metric    kubernetes.namespace.pod.available.count = 4\n     Segment    kubernetes.cluster.id = '75240dcc-0326-11ea-be8d-eadf5501b087' and kubernetes.cluster.name = 'default' and kubernetes.namespace.name = 'dev-mjp'\n       Scope    kubernetes.namespace.name in dev-mjp\n        Time    11/17/2019 09:29 PM UTC\n       State    Triggered\nActive since    4 minutes\n   More info    View notification\n\n                Triggered by Alert:\n        Name    MJP Dev Alert\n        Team    Monitor Operations\n       Scope    kubernetes.namespace.name in dev-mjp\n  Segment by    kubernetes.cluster.id, kubernetes.cluster.name, kubernetes.namespace.name\n        When    max(max(kubernetes.namespace.pod.available.count)) > 3\nFor at least    1 d\n   More info    View alert\n")),Object(n.b)("p",null,"Wait awhile and you should get more emails notifying you about this event, 1 email about every 10 min. The event is only listed once in the Events view, when the condition was first detected. But SysDig will continue to notify you about the event until you acknowledge it."),Object(n.b)("h4",{id:"acknowledge-the-event"},"Acknowledge the event"),Object(n.b)("p",null,"Tell SysDig you’re aware of the event."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the event and press ",Object(n.b)("strong",{parentName:"p"},"Acknowledge")),Object(n.b)("p",{parentName:"li"},"  This will inform the monitoring that an operations team member is working the issue."))),Object(n.b)("p",null,"Alerting will send you one more alert email, subject “{alert} is Acknowledged - {namespace} namespace”, informing you that the event has been acknowledged. Then it won’t send you any more alert emails about this event."),Object(n.b)("h2",{id:"conclusion"},"Conclusion"),Object(n.b)("p",null,"It’s important to be able to monitor your deployed applications.\nHere, the Developer Tools environment uses Sysdig Monitoring, but you never had to install or run Sysdig.\nJust deploy your application into the Developer Tools environment and it gets moniotored automatically.\nAfter deploying your application, open the Sysdig web UI and browse the status, including the status\nof your cluster as a whole and your deployment in particular."),Object(n.b)("h3",{id:"learn-more"},"Learn more"),Object(n.b)("p",null,"Learn more about using SysDig Monitoring:"),Object(n.b)(c,{mdxType:"AnchorLinks"},Object(n.b)(b,{to:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-monitoring",mdxType:"AnchorLink"},"IBM Cloud Monitoring with Sysdig > Monitoring your environment"),Object(n.b)(b,{to:"https://cloud.ibm.com/docs/services/Monitoring-with-Sysdig?topic=Sysdig-dashboards",mdxType:"AnchorLink"},"IBM Cloud Monitoring with Sysdig > Working with dashboards"),Object(n.b)(b,{to:"https://docs.sysdig.com/en/dashboards.html",mdxType:"AnchorLink"},"Sysdig Monitor > Dashboards"),Object(n.b)(b,{to:"https://docs.sysdig.com/en/explore.html",mdxType:"AnchorLink"},"Sysdig Monitor > Explore"),Object(n.b)(b,{to:"https://docs.sysdig.com/en/events.html",mdxType:"AnchorLink"},"Sysdig Monitor > Events"),Object(n.b)(b,{to:"https://docs.sysdig.com/en/metric-alerts.html",mdxType:"AnchorLink"},"Sysdig Monitor > Alerts > Metric Alerts")))}g.isMDXComponent=!0},441:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},442:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},443:function(e,t,a){"use strict";a(32),a(28);var n=a(1),i=a(441),r=a(0),o=a.n(r),s=a(106),l=a.n(s),c=a(194),b=a(128),p=a(3),d=a.n(p),g=a(387),m=function(e){var t,a=e.title,i=e.tabs,r=void 0===i?[]:i;return Object(n.b)("div",{className:d()(g.pageHeader,(t={},t[g.withTabs]=r.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:g.text},a)))))},u=a(442),h=a(388),y=function(e){var t=e.relativePagePath,a=e.repository,i=u.data.site.siteMetadata.repository,r=a||i,o=r.baseUrl,s=r.subDirectory,l=o+"/edit/"+r.branch+s+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},O=a(193),v=(a(59),a(26)),f=a(389);var A=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0}),o=r===i,s=new RegExp(i+"(?!-)"),c=a.replace(s,r);return Object(n.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(n.b)(v.Link,{className:f.link,to:""+c},e))}));return Object(n.b)("div",{className:f.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:f.list},r))))))},i}(o.a.Component),j=a(195);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,s=t.frontmatter,p=void 0===s?{}:s,d=t.relativePagePath,g=t.titleType,u=p.tabs,h=p.title,v=p.theme,f=p.description,w=p.keywords,N=i.data.site.pathPrefix,S=N?r.pathname.replace(N,""):r.pathname,k=u?S.split("/").slice(-1)[0]||l()(u[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:v,pageTitle:h,pageDescription:f,pageKeywords:w,titleType:g},Object(n.b)(m,{title:o?Object(n.b)(o,null):h,label:"label",tabs:u}),u&&Object(n.b)(A,{slug:S,tabs:u,currentTab:k}),Object(n.b)(j.a,{padded:!0},a,Object(n.b)(y,{relativePagePath:d})),Object(n.b)(O.a,{pageContext:t,location:r,slug:S,tabs:u,currentTab:k}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-monitoring-index-mdx-56fc312fba156774c729.js.map