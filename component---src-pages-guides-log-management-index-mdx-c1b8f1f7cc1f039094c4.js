(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{420:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return d}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(108),o=a(444);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=l("PageDescription"),p=l("AnchorLinks"),c=l("AnchorLink"),b={_frontmatter:r},g=o.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(g,i({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use LogDNA to manage logging for your running application")),Object(n.b)("p",null,"In IBM Garage Method, one of the Operate practices is to ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/manage/practice_automated_monitoring/"}),"automate application monitoring"),", including logging. Imagine your application isn’t working right in production even though the environment is fine. What information would you want in your logs to help you figure out what’s wrong with your application? Build logging messages for that information into your application."),Object(n.b)("p",null,"Given that your application is logging, as are lots of other applications and services in your cloud environment, these logs need to be managed and made accessible. LogDNA adds log management capabilities to a Kubernetes cluster and its deployments. The Developer Tools environment includes an IBM Log Analysis with LogDNA service instance configured with a LogDNA agent installed in the environment’s cluster. Simply by deploying your application into the Developer Tools environment, LogDNA collects the logs, just open the LogDNA web UI from the IBM Cloud dashboard to browse your application’s logs."),Object(n.b)("h2",{id:"logdna-log-management"},"LogDNA log management"),Object(n.b)("p",null,Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/Log-Analysis-with-LogDNA"}),"IBM Log Analysis with LogDNA")," explains how to configure and use an instance of the LogDNA service, but the Developer Tools environment has already done this for you. You can skip these steps about provisioning an instance, installing an agent, and user access."),Object(n.b)("h3",{id:"logdna-dashboard"},"LogDNA dashboard"),Object(n.b)("p",null,"Open the LogDNA web UI for your environment’s cluster"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/Log-Analysis-with-LogDNA?topic=LogDNA-view_logs"}),"IBM Log Analysis with LogDNA: Viewing logs"),"\nexplains how to open the web UI"),Object(n.b)("li",{parentName:"ul"},"In the IBM Cloud dashboard, navigate to ",Object(n.b)("strong",{parentName:"li"},"Observability")," > ",Object(n.b)("strong",{parentName:"li"},"Logging")),Object(n.b)("li",{parentName:"ul"},"Find the logging instance named after your environment’s cluster, such as ",Object(n.b)("inlineCode",{parentName:"li"},"showcase-dev-iks-logdna"),". To help find it,\nyou can filter by your resource group.\n",Object(n.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1026px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"9.454191033138402%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAeElEQVQI1z2NQQ7CMBAD+/+XceQDHFAFRUCTpmWzu2nQsOqBg6WxJduDTwndG6oaMtQFtWCzw3tznvnG/X1FbKX3b3gJVZaPMxc9OK2GeWNoj4y4I1KRqv/BGiyiWKuM5cxlPpF0ZG+dXLYo73HWeS3KNAtpsyP7AcmLmfZ/MF6GAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"LogDNA Logging Instance",title:"LogDNA Logging Instance",src:"/ibm-garage-developer-guide/static/920bfed8a9f8edfb6c874be93adb3784/ca2b2/logdna-logging-instance.png",srcSet:["/ibm-garage-developer-guide/static/920bfed8a9f8edfb6c874be93adb3784/d6747/logdna-logging-instance.png 288w","/ibm-garage-developer-guide/static/920bfed8a9f8edfb6c874be93adb3784/09548/logdna-logging-instance.png 576w","/ibm-garage-developer-guide/static/920bfed8a9f8edfb6c874be93adb3784/ca2b2/logdna-logging-instance.png 1026w"],sizes:"(max-width: 1026px) 100vw, 1026px",loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ul"},"In the logging instance, press the ",Object(n.b)("strong",{parentName:"li"},"View LogDNA")," button to open the LogDNA web UI")),Object(n.b)("h2",{id:"give-it-a-try"},"Give it a try"),Object(n.b)("p",null,"Before you start to understanding how to look at your application logs, make sure you have ",Object(n.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/deployapp"}),"deployed an app")," into your development cluster. Each of the template apps has a logging framework included, this ",Object(n.b)("em",{parentName:"p"},"Git it a Try")," will use ",Object(n.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/starterkits/starterkittemplates"}),"template-node-typescript")," as an example."),Object(n.b)("p",null,"The ",Object(n.b)("strong",{parentName:"p"},"LogDNA")," service is already created, bound and configured to listen to logs from your development cluster."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the **LogDNA instance that is named the same as your development cluster")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on ",Object(n.b)("strong",{parentName:"p"},"All Apps")," and enter the name of your app or narrow the app selection using the suffix that you used to create it\n",Object(n.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"605px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"33.71900826446281%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABA0lEQVQoz6WN0VKDMBRE+f/fUl86VahASbBFCy0wJSSQpA6UwhrS6oMv6piZM7t3s3Ov4y7v4S7vQIIFIn8Bz8yrxwfLhjxhS91fkcQeEqMO26VgaYYmz9EccvD94Yu2KCCL0vCp37nmc49nGfYJhTPUCtA9cDrf6K/zjJrpfkZ3eC85FGdw+q6H1hoDkxhKgbE7YxxHjJfLn5imCUpyOForVNUR7FihFQ3+81RrFkp9gmglpGwheI1GcKPMeiFq1KwCMwdnnZlzXjP7ZzumWxa5zexCGlNEhGC7oaCRjxcaIiYByPrZahh4CH0PUbiyfh0Y9V28JjHKPEVx2OHt5mXD8AHYeQ4VEbpCVgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"AllAps",title:"AllAps",src:"/ibm-garage-developer-guide/static/0c42420d71c996f75d96205ed7b54c39/e99a7/allapps.png",srcSet:["/ibm-garage-developer-guide/static/0c42420d71c996f75d96205ed7b54c39/d6747/allapps.png 288w","/ibm-garage-developer-guide/static/0c42420d71c996f75d96205ed7b54c39/09548/allapps.png 576w","/ibm-garage-developer-guide/static/0c42420d71c996f75d96205ed7b54c39/e99a7/allapps.png 605w"],sizes:"(max-width: 605px) 100vw, 605px",loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Select the app you want to monitor")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You will now see just the logs for your app"))),Object(n.b)("h3",{id:"add-some-logging-to-your-app"},"Add some logging to your app"),Object(n.b)("p",null,"All the common logging frameworks support the ability publish different types of log statement. The developer can use the log level to help trap specific information or error conditions. The common log levels are  ",Object(n.b)("inlineCode",{parentName:"p"},"info"),", ",Object(n.b)("inlineCode",{parentName:"p"},"debug"),", ",Object(n.b)("inlineCode",{parentName:"p"},"warn")," and ",Object(n.b)("inlineCode",{parentName:"p"},"fatal"),". It is best practice to add log statements to help operations teams and monitoring services to help identify possible issues quickly."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Add the following ",Object(n.b)("inlineCode",{parentName:"p"},"debug")," statement and ",Object(n.b)("inlineCode",{parentName:"p"},"error")," condition to the ",Object(n.b)("inlineCode",{parentName:"p"},"greetings")," implementation in your app."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-typescript",metastring:"src=/src/services/hello-world.service",src:"/src/services/hello-world.service"}),"\n  async greeting(name: string = 'World'): Promise<string> {\n    this.logger.info(`Generating greeting for ${name}`);\n\n    this.logger.debug('This is a debug message from inside my API');\n\n    // Only Trigger error if the name passed in matches ERROR\n    if (name === 'ERROR' ) {\n        try {\n          throw new Error('\"Throwing an error');\n        } catch (e) {\n          this.logger.error(e);\n          throw new Error('\"Catching and Throwing errors');\n        } finally {\n          throw new Error('Last chance to trap this Error');\n        }\n    }\n\n    return `Hello, ${name}!`;\n  }\n\n")))),Object(n.b)("p",null,"Now that we have introduced some debug messages, let’s adjust the log level for the application."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To add ",Object(n.b)("inlineCode",{parentName:"p"},"LOG_LEVEL")," settings to you app, edit the ",Object(n.b)("inlineCode",{parentName:"p"},"deployment.yaml")," in your ",Object(n.b)("inlineCode",{parentName:"p"},"chart")," folder and add the following ",Object(n.b)("inlineCode",{parentName:"p"},"debug")," value to the ",Object(n.b)("inlineCode",{parentName:"p"},"LOG_LEVEL")," env property"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-yaml",metastring:"src=/chart/template-node-typescript/templates/deployment.yaml",src:"/chart/template-node-typescript/templates/deployment.yaml"}),"-env:\n    name: LOG_LEVEL\n    value: debug\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Test the app changes locally first before deploying"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-bash"}),"npm run start\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Push your changes back to your server repo and wait for your CI pipeline to complete build and deploy")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open up the ",Object(n.b)("strong",{parentName:"p"},"LogDNA")," console and narrow the logs to just your app")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Open the app into a browser: Run ",Object(n.b)("inlineCode",{parentName:"p"},"igc ingress -n {your namespace}")," and select your running app")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Switch to ",Object(n.b)("inlineCode",{parentName:"p"},"HTTPS")," and test the ",Object(n.b)("inlineCode",{parentName:"p"},"/hello/{name}")," API and pass in some data. You have introduced a ",Object(n.b)("inlineCode",{parentName:"p"},"DEBUG")," message and an ",Object(n.b)("inlineCode",{parentName:"p"},"ERROR")," into this API logic. Click the ",Object(n.b)("strong",{parentName:"p"},"Execute")," button a few times to simulate some API calls.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Try the API with your own name, and you will see just the ",Object(n.b)("inlineCode",{parentName:"p"},"DEBUG")," message appearing")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Try the API with ",Object(n.b)("inlineCode",{parentName:"p"},"ERROR")," as the name , and this will trigger the error code we put in the API service")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You will see the errors appearing in ",Object(n.b)("strong",{parentName:"p"},"LogDNA")," triggered by your application"))),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.66433566433567%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABUklEQVQoz42S3VLDIBCF8xpJgJTfhJCGJP3RmTpeeeP7P9BxF622M3X04gMW2AMcthrSiDxFbL3GJRmsYw83Lni9XHA8bNjWFWneY5oS1iVTvGBPY45znnHYVoR5hs0ZylpULgTEMSIFi9wbDM7C+Yj30xnWGoJirdF1HXa7XYHHJf6ak9QLpdA0DSrRtmWREw1xTVK0gZFSQgiBlvZxwl9UnNCRgDYGhriezmIsdAuLPqK5woJKSVh6kqfb8ROvgnxQ2za/ijwUZkEeeBKa44ApDRh6j+AdHHtJ81qzBZ83/pdgTY0SEtGRCD+bBHSnyHDykG7JsM/tt0/1nWd1TXF94+E+Ory9bIhDwPH5iLQeEOcFISZ4qgAfeqQ8Fazz9HHuB+MwUMn53tGaLT5XKUWcnzbyTyOfZvQUh3EoP26dK31aUkFxeQh5h6Q/KJUgReEDcNb6JUYz8PwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Error",title:"Error",src:"/ibm-garage-developer-guide/static/bba5aa64c3be95d578cf0aea68bf3f49/fb070/errorcondition.png",srcSet:["/ibm-garage-developer-guide/static/bba5aa64c3be95d578cf0aea68bf3f49/d6747/errorcondition.png 288w","/ibm-garage-developer-guide/static/bba5aa64c3be95d578cf0aea68bf3f49/09548/errorcondition.png 576w","/ibm-garage-developer-guide/static/bba5aa64c3be95d578cf0aea68bf3f49/fb070/errorcondition.png 1152w","/ibm-garage-developer-guide/static/bba5aa64c3be95d578cf0aea68bf3f49/8ad6d/errorcondition.png 1430w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Try scaling you pods for the app and calling the API again and come and watch the logs and see where the API call is being routed and which pod is triggering the error")),Object(n.b)("p",null,"There is lots more information around how to use ",Object(n.b)("strong",{parentName:"p"},"LogDNA"),", these links will help:"),Object(n.b)(p,{mdxType:"AnchorLinks"},Object(n.b)(c,{to:"https://docs.logdna.com/docs/filters",mdxType:"AnchorLink"},"More information on using LogDNA log filtering"),Object(n.b)(c,{to:"https://docs.logdna.com/docs/time",mdxType:"AnchorLink"},"Understand how to jump to a specific timeframe")),Object(n.b)("h2",{id:"conclusion"},"Conclusion"),Object(n.b)("p",null,"It’s important to be able to manage the logs of your deployed applications to help identify issues and quickly understand how to resolve them. The Developer Tools configures LogDNA directly to you development cluster to make it easy to get the log you data you need as a developer. Just deploy your application into your Developer Tools environment and its logs start appearing automatically, open the LogDNA web UI and browse your logs."))}d.isMDXComponent=!0},442:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},443:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},444:function(e,t,a){"use strict";a(32),a(28);var n=a(1),o=a(442),i=a(0),r=a.n(i),l=a(107),s=a.n(l),p=a(195),c=a(128),b=a(3),g=a.n(b),d=a(388),m=function(e){var t,a=e.title,o=e.tabs,i=void 0===o?[]:o;return Object(n.b)("div",{className:g()(d.pageHeader,(t={},t[d.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:d.text},a)))))},u=a(443),h=a(389),A=function(e){var t=e.relativePagePath,a=e.repository,o=u.data.site.siteMetadata.repository,i=a||o,r=i.baseUrl,l=i.subDirectory,s=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:s},"Edit this page on GitHub"))):null},O=a(193),y=(a(59),a(26)),j=a(390);var N=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=s()(e,{lower:!0}),r=i===o,l=new RegExp(o+"(?!-)"),p=a.replace(l,i);return Object(n.b)("li",{key:e,className:g()((t={},t[j.selectedItem]=r,t),j.listItem)},Object(n.b)(y.Link,{className:j.link,to:""+p},e))}));return Object(n.b)("div",{className:j.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:j.list},i))))))},o}(r.a.Component),f=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,r=e.Title,l=t.frontmatter,b=void 0===l?{}:l,g=t.relativePagePath,d=t.titleType,u=b.tabs,h=b.title,y=b.theme,j=b.description,w=b.keywords,v=o.data.site.pathPrefix,L=v?i.pathname.replace(v,""):i.pathname,x=u?L.split("/").slice(-1)[0]||s()(u[0],{lower:!0}):"";return Object(n.b)(c.a,{homepage:!1,theme:y,pageTitle:h,pageDescription:j,pageKeywords:w,titleType:d},Object(n.b)(m,{title:r?Object(n.b)(r,null):h,label:"label",tabs:u}),u&&Object(n.b)(N,{slug:L,tabs:u,currentTab:x}),Object(n.b)(f.a,{padded:!0},a,Object(n.b)(A,{relativePagePath:g})),Object(n.b)(O.a,{pageContext:t,location:i,slug:L,tabs:u,currentTab:x}),Object(n.b)(p.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-log-management-index-mdx-c1b8f1f7cc1f039094c4.js.map