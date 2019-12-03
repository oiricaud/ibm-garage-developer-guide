(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{426:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(108),r=a(448);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},b=l("PageDescription"),c=l("InlineNotification"),p={_frontmatter:i},s=r.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,o({},p,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(b,{mdxType:"PageDescription"},Object(n.b)("p",null,"Homework for students in the MOOC Week 2")),Object(n.b)("p",null,"This is the homework tasks for the ",Object(n.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/homework/teams"}),"Garage OpenShift and Cloud Pak MOOC"),". Week 2 focuses on extending the application from week 1."),Object(n.b)("h2",{id:"week-2----the-day-2-developer-experience"},"Week 2 — The Day 2 Developer Experience"),Object(n.b)(c,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Before you proceed, make sure you have signed up for the MOOC development environment. It is a paid IBM Cloud account with the ",Object(n.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/overview"}),"Developer Tools environment")," already installed and ready for you to use, including both a Kubernetes cluster and an OpenShift cluster. (The environment is locked down to prevent creating any new services.) Also, before proceeding:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Be sure you have already done the ",Object(n.b)("a",o({parentName:"li"},{href:"/ibm-garage-developer-guide/homework/teams"}),"Welcome to your MOOC team")," tasks"),Object(n.b)("li",{parentName:"ul"},"Install the ",Object(n.b)("a",o({parentName:"li"},{href:"/ibm-garage-developer-guide/getting-started/cli"}),"IBM Garage for Cloud CLI")," (again) to ensure you have the latest version"))),Object(n.b)("p",null,"Week 2 of the MOOC focuses on the Day 2 Developer Experience: How to use the Developer Tools envionment to perform the software delivery lifecycle (SDLC)."),Object(n.b)("p",null,"This homework assumes that you have:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Reviewed the Playback from the Week 2 Monday session"),Object(n.b)("li",{parentName:"ul"},"Seen a demo of each of the homework tasks below"),Object(n.b)("li",{parentName:"ul"},"Seen demos and discussion about what is expected from the homework")),Object(n.b)(c,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note"),": Support is provided in the ",Object(n.b)("inlineCode",{parentName:"p"},"#catalyst-project")," Slack channel (in the ",Object(n.b)("a",o({parentName:"p"},{href:"http://ibm-garage.slack.com"}),"IBM Garage for Cloud Slack Org")," team). This channel will also be used to share any common issues found.")),Object(n.b)("h3",{id:"homework-tasks"},"Homework tasks"),Object(n.b)("p",null,"The homework for Week 2 helps you understand the tasks in the Day 2 Developer Experience. Day 1 focuses on being able to use the environment well enough to develop and deploy a basic cloud-native application. Day 2 focuses on using the SDLC to iteratively develop, deliver, operate, secure, and manage applications. As a team executes the key agile ceremonies using the ",Object(n.b)("a",o({parentName:"p"},{href:"https://www.ibm.com/garage/method/cloud/"}),"Garage Method"),", it’s important for developers and architects to understand what is involved in moving software components consistently and reliably from ",Object(n.b)("em",{parentName:"p"},"dev")," to ",Object(n.b)("em",{parentName:"p"},"test")," and on to ",Object(n.b)("em",{parentName:"p"},"production"),". A good understanding of common Day 2 activities is a critical skill for cloud-native development teams."),Object(n.b)("p",null,"This week’s homework involves a number of tasks that are more advanced than those from week 1, so take your time and do some research on the topic before jumping into the task."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Task"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Link"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Time"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Re-read the Developer Guide"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"There have been updates from the first week. Focus on Tools Guides for the homework below and the guides for Inventory Micro App Part 1 and 2."),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"/ibm-garage-developer-guide/overview"}),"Developer Guide")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"30 min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Review your image registry"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Using the Image Registry guide, follow the ",Object(n.b)("em",{parentName:"td"},"Give it a try")," section"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"/ibm-garage-developer-guide/guides/image-registry#give-it-a-try"}),"Image Registry")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"15 mins")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Review your app’s code quality"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Using the SonarQube guide, follow the ",Object(n.b)("em",{parentName:"td"},"Give it a try")," section"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"/ibm-garage-developer-guide/guides/code-analysis#give-it-a-try"}),"Code Analysis")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"30 mins")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"View your app’s logs"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Using the LogDNA guide, follow the ",Object(n.b)("em",{parentName:"td"},"Give it a try")," section"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"/ibm-garage-developer-guide/guides/log-management#give-it-a-try"}),"Log Management")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"20 min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Monitor your app"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Using the SysDig guide, follow the ",Object(n.b)("em",{parentName:"td"},"Give it a try")," section"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"/ibm-garage-developer-guide/guides/monitoring#give-it-a-try"}),"Monitoring")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"30 min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Inventory Micro App, Part 2"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Using GitOps to deploy your Inventory app’s components to ",Object(n.b)("inlineCode",{parentName:"td"},"test")),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"/ibm-garage-developer-guide/practical/inventory-part2#using-cd-to-deliver-to-test"}),"Inventory Part 2 - CD")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"45 min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Inventory Micro App, Part 2"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Secure your Inventory app"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"/ibm-garage-developer-guide/practical/inventory-part2#securing-the-solution-with-app-id"}),"Inventory Part 2 - Secure App")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"30 min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Inventory Micro App, Part 2"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Add a cloud database to you Inventory service"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"/ibm-garage-developer-guide/practical/inventory-part2#add-a-cloudant-integration-to-your-backend-service"}),"Inventory Part 2 - Database")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"45 min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Install Dev tools on CRC"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Install and configure the Developer Tools into Red Hat CodeReady Containers"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"/ibm-garage-developer-guide/admin/installation-crc"}),"Install CRC")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"1 hr")))),Object(n.b)("p",null,"Once you have completed these tasks, you will have completed the homework for both the Day 1 Developer Experience and the Day 2 Developer Experience. For Day 1, you created your first app and CI pipeline, and then extended that into a 3-tier polyglot solution. For Day 2, you worked with your application’s logs, monitored your app, and moved your code from ",Object(n.b)("em",{parentName:"p"},"dev")," to ",Object(n.b)("em",{parentName:"p"},"test"),"."),Object(n.b)("p",null,"What is very clear is that the Developer Tools envionment—an application architeture that combines a Red Hat OpenShift or Kubernetes cluster with powerful cloud services, packaged with a development environment with a CI/CD pipeline incorporating best-of-breed open source tools—gives you a powerful development platform that enables you to build any form of cloud-native application. These skills form the foundation not only to develop applications for Kubernetes and OpenShift, but to develop applications that leverage the IBM Cloud Paks as well. Keep an out for the ",Object(n.b)("em",{parentName:"p"},"IBM Cloud Pak Developers Guide"),", coming in 2020."),Object(n.b)("h3",{id:"homework-review-week-2"},"Homework Review Week 2"),Object(n.b)("p",null,"The homework review will take the form of a show-and-tell and a retrospective. The show-and-tell includes a description of tasks that didn’t go so well. It will close with a retrospective for the attendees who have completed the homework tasks. We are looking for feedback from three perspectives:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"What went well?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"What needs improvement?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Next steps?"))),Object(n.b)("p",null,"Please use the ",Object(n.b)("a",o({parentName:"p"},{href:"https://reetro-io.herokuapp.com/board/5dc4fca0074a5400170d9c93/5dd0c5f09e2836001750eeb3"}),"online retrospective")," board during the live Homework session to evaluate the session. As students enter feedback, we’ll all be able to see it on this shared screen."))}d.isMDXComponent=!0},446:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},447:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},448:function(e,t,a){"use strict";a(32),a(28);var n=a(1),r=a(446),o=a(0),i=a.n(o),l=a(107),b=a.n(l),c=a(194),p=a(128),s=a(3),d=a.n(s),m=a(388),u=function(e){var t,a=e.title,r=e.tabs,o=void 0===r?[]:r;return Object(n.b)("div",{className:d()(m.pageHeader,(t={},t[m.withTabs]=o.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},g=a(447),h=a(389),O=function(e){var t=e.relativePagePath,a=e.repository,r=g.data.site.siteMetadata.repository,o=a||r,i=o.baseUrl,l=o.subDirectory,b=i+"/edit/"+o.branch+l+"/src/pages"+t;return i?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:b},"Edit this page on GitHub"))):null},v=a(193),j=(a(59),a(26)),f=a(390);var y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=b()(e,{lower:!0}),i=o===r,l=new RegExp(r+"(?!-)"),c=a.replace(l,o);return Object(n.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=i,t),f.listItem)},Object(n.b)(j.Link,{className:f.link,to:""+c},e))}));return Object(n.b)("div",{className:f.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:f.list},o))))))},r}(i.a.Component),N=a(195);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,l=t.frontmatter,s=void 0===l?{}:l,d=t.relativePagePath,m=t.titleType,g=s.tabs,h=s.title,j=s.theme,f=s.description,w=s.keywords,k=r.data.site.pathPrefix,D=k?o.pathname.replace(k,""):o.pathname,x=g?D.split("/").slice(-1)[0]||b()(g[0],{lower:!0}):"";return Object(n.b)(p.a,{homepage:!1,theme:j,pageTitle:h,pageDescription:f,pageKeywords:w,titleType:m},Object(n.b)(u,{title:i?Object(n.b)(i,null):h,label:"label",tabs:g}),g&&Object(n.b)(y,{slug:D,tabs:g,currentTab:x}),Object(n.b)(N.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:d})),Object(n.b)(v.a,{pageContext:t,location:o,slug:D,tabs:g,currentTab:x}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-homework-tasks-week-2-index-mdx-736c0b86c5ecb9cca36c.js.map