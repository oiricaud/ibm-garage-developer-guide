(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{429:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return d}));a(11),a(5),a(6),a(4),a(10),a(0);var n=a(109),r=a(452);a(1);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},s=l("PageDescription"),c=l("InlineNotification"),b={_frontmatter:i},p=r.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(p,o({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(s,{mdxType:"PageDescription"},Object(n.b)("p",null,"Homework for students in the MOOC, Session 3")),Object(n.b)("p",null,"This is the homework tasks for the ",Object(n.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/homework/teams"}),"Garage OpenShift and Cloud Pak MOOC"),". Week 4 focuses on application modernization, including using the IBM Cloud Transformation Advisor in the Cloud Pak for Applications (CP4Apps)."),Object(n.b)("h2",{id:"session-3----application-modernization"},"Session 3 — Application Modernization"),Object(n.b)(c,{mdxType:"InlineNotification"},Object(n.b)("p",null,"Before you proceed, make sure you have signed up for the MOOC development environment. It is a paid IBM Cloud account with the ",Object(n.b)("a",o({parentName:"p"},{href:"/ibm-garage-developer-guide/overview"}),"Developer Tools environment")," already installed and ready for you to use, including both a Kubernetes cluster and an OpenShift cluster. (The environment is locked down to prevent creating any new services.) Also, before proceeding:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Be sure you have already done the ",Object(n.b)("a",o({parentName:"li"},{href:"/ibm-garage-developer-guide/homework/teams"}),"Welcome to your MOOC team")," tasks"),Object(n.b)("li",{parentName:"ul"},"Install the ",Object(n.b)("a",o({parentName:"li"},{href:"/ibm-garage-developer-guide/getting-started/cli"}),"IBM Garage for Cloud CLI")," (again) to ensure you have the latest version"))),Object(n.b)("p",null,"Session 3 of the MOOC focuses on Application Modernization: How to assess and modernize an existing Java application using the tools in the CloudPak for Applications (CP4Apps)."),Object(n.b)("p",null,"This homework assumes that you have:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Reviewed the Playback from the Session 3 Monday session"),Object(n.b)("li",{parentName:"ul"},"Seen a demo of each of the homework tasks below"),Object(n.b)("li",{parentName:"ul"},"Seen demos and discussion about what is expected from the homework")),Object(n.b)(c,{mdxType:"InlineNotification"},Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note"),": Support is provided in the ",Object(n.b)("inlineCode",{parentName:"p"},"#catalyst-project")," Slack channel (in the ",Object(n.b)("a",o({parentName:"p"},{href:"http://ibm-garage.slack.com"}),"IBM Garage for Cloud Slack Org")," team). This channel will also be used to share any common issues found.")),Object(n.b)("h3",{id:"homework-tasks"},"Homework tasks"),Object(n.b)("p",null,"The homework for Session 3 helps you understand the tasks related to Application Modernization for existing Java applications. As discussed in the Monday session, “Application Modernization doesn’t always mean modernization to microservices.”"),Object(n.b)("p",null,"There are 4000+ existing WebSphere Application Server customers. The majority of them have a significant number of legacy monolithic applications running in WebSphere Application Server Network Deployment (WAS ND) on traditional IT. This was state-of-the-art back when the applications were first deployed, but the runtime requires periodic maintenance and constant administration. Now the customer would like to host the application in a cloud environment, but they have no desire to make any code changes to move the apps. While it might be beneficial for the customer to invest money in rethinking and redesigning their entire portfolio of applications as part of moving off of traditional WebSphere, in reality this is overkill for applications that still provide the proper business functionality just fine and require little maintenance for bug fixes or new features. For these legacy monoliths, we can reduce the maintenance overhead by moving the apps as-is to run in WebSphere Liberty on Red Hat OpenShift. We can also reduce the administrative overhead by implementing common CI/CD and SRE practices."),Object(n.b)("p",null,"This week’s homework starts with some background reading."),Object(n.b)("p",null,"This week’s homework involves a number of tasks that are more advanced than those from week 1, so take your time and do some research on the topic before jumping into the task."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",o({parentName:"tr"},{align:null}),"Task"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Description"),Object(n.b)("th",o({parentName:"tr"},{align:"left"}),"Link"),Object(n.b)("th",o({parentName:"tr"},{align:null}),"Time"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Watch Kyle Brown present App Mod Use Cases"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Where Do I Start? Approaches and Case Studies for Application Modernization"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://www.ustream.tv/recorded/124074109"}),"Video")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"60 min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Read Roland’s Medium Post"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"It’s time to stop making “Microservices” the goal of modernization"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://medium.com/ibm-garage/its-time-to-stop-making-microservices-the-goal-of-modernization-71758b400287"}),"Medium")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"5 mins")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Read Kyle and Yaro’s App Mod Medium Article (Part 1)"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Where does Modernization start?"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://medium.com/ibm-garage/the-steps-to-application-modernization-for-the-cloud-part-1-7ac07515dc16"}),"Medium")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"15 mins")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Read Kyle and Yaro’s App Mod Medium Article (Part 2)"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"Maps for the Journey"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://medium.com/ibm-garage/maps-for-the-journey-950153ed39ce"}),"Medium")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"15 mins")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Review the GSE team assets for AppMod"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"The GSE team has created a Reference Architecture and a set of working solutions"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://ibm-cloud-architecture.github.io/cloudpak-for-applications/"}),"GSE assets")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"30 min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"Watch the GSE AppMod Video"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"This Runtime Modernization video demonstrates Transformation Advisor and deployment to Red Hat OpenShift"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"https://mediacenter.ibm.com/media/Cloud+Pak+for+Applications+-+WebSphere+Runtime+Modernization/1_x1xntvmz"}),"GSE video")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"20 min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"AppMod Exercise 1"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"A simple runtime modernization exercise with no code changes"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"/ibm-garage-developer-guide/practical/appmod-exercise1"}),"AppMod Exercise 1")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"1 hour")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",o({parentName:"tr"},{align:null}),"AppMod Exercise 2"),Object(n.b)("td",o({parentName:"tr"},{align:null}),"A runtime modernization exercise with some simple code changes"),Object(n.b)("td",o({parentName:"tr"},{align:"left"}),Object(n.b)("a",o({parentName:"td"},{href:"/ibm-garage-developer-guide/practical/appmod-exercise2"}),"AppMod Exercise 2")),Object(n.b)("td",o({parentName:"tr"},{align:null}),"2 hours")))),Object(n.b)("p",null,"Once you have completed these tasks, you will have completed the homework for Session 3. You will have heard about the application modernization use cases from Kyle, Roland, and Yaro, and now will understand the IBM Cloud Garage approach to assessing and modernizing existing WebSphere Java applications using IBM Cloud Transformation Advisor."),Object(n.b)("h3",{id:"homework-review-week-4"},"Homework Review Week 4"),Object(n.b)("p",null,"The homework review will take the form of a show-and-tell and a retrospective. The show-and-tell includes a description of tasks that didn’t go so well. It will close with a retrospective for the attendees who have completed the homework tasks. We are looking for feedback from three perspectives:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"What went well?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"What needs improvement?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Next steps?"))),Object(n.b)("p",null,"Please use the ",Object(n.b)("a",o({parentName:"p"},{href:"https://reetro-io.herokuapp.com/board/5dc4fca0074a5400170d9c93/5dc4fca0074a5400170d9c95"}),"online retrospective")," board during the live Homework session to evaluate the session. As students enter feedback, we’ll all be able to see it on this shared screen."))}d.isMDXComponent=!0},450:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},451:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},452:function(e,t,a){"use strict";a(31),a(28);var n=a(1),r=a(450),o=a(0),i=a.n(o),l=a(108),s=a.n(l),c=a(196),b=a(130),p=a(3),d=a.n(p),m=a(391),u=function(e){var t,a=e.title,r=e.tabs,o=void 0===r?[]:r;return Object(n.b)("div",{className:d()(m.pageHeader,(t={},t[m.withTabs]=o.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},h=a(451),g=a(392),O=function(e){var t=e.relativePagePath,a=e.repository,r=h.data.site.siteMetadata.repository,o=a||r,i=o.baseUrl,l=o.subDirectory,s=i+"/edit/"+o.branch+l+"/src/pages"+t;return i?Object(n.b)("div",{className:"bx--row "+g.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=a(195),f=(a(59),a(26)),v=a(393);var N=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=s()(e,{lower:!0}),i=o===r,l=new RegExp(r+"(?!-)"),c=a.replace(l,o);return Object(n.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=i,t),v.listItem)},Object(n.b)(f.Link,{className:v.link,to:""+c},e))}));return Object(n.b)("div",{className:v.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:v.list},o))))))},r}(i.a.Component),w=a(197);t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,i=e.Title,l=t.frontmatter,p=void 0===l?{}:l,d=t.relativePagePath,m=t.titleType,h=p.tabs,g=p.title,f=p.theme,v=p.description,y=p.keywords,k=r.data.site.pathPrefix,M=k?o.pathname.replace(k,""):o.pathname,x=h?M.split("/").slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:f,pageTitle:g,pageDescription:v,pageKeywords:y,titleType:m},Object(n.b)(u,{title:i?Object(n.b)(i,null):g,label:"label",tabs:h}),h&&Object(n.b)(N,{slug:M,tabs:h,currentTab:x}),Object(n.b)(w.a,{padded:!0},a,Object(n.b)(O,{relativePagePath:d})),Object(n.b)(j.a,{pageContext:t,location:o,slug:M,tabs:h,currentTab:x}),Object(n.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-homework-tasks-week-4-index-mdx-d449b8ec436a75b4c5c7.js.map