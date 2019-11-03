(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{409:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return p}));n(11),n(5),n(6),n(4),n(10),n(1),n(0);var a=n(106),i=n(443);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r,l={},s=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",e)}),c={_frontmatter:l},b=i.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(b,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(s,{mdxType:"PageDescription"},Object(a.b)("p",null,"The Developer Tools include the IBM Garage for Cloud (IGC) Developer Tools Command Line Interface (CLI)")),Object(a.b)("p",null,"The ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-garage-cloud/ibm-garage-cloud-cli"}),"IGC CLI"),"\nprovides a set of helpful utilities that can be invoked from the command line.\nThese utilities include:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Register your application’s git repo into a ",Object(a.b)("strong",{parentName:"li"},"Jenkins")," pipeline"),Object(a.b)("li",{parentName:"ul"},"List the ingress URLs for the tools installed in the environment"),Object(a.b)("li",{parentName:"ul"},"List the user names and passwords for the tools installed in the environment"),Object(a.b)("li",{parentName:"ul"},"Build and deploy images to the environment using the IBM Cloud Image Registery")),Object(a.b)("p",null,"To use the IGC CLI, it must be installed and your command line shell must be logged into IBM Cloud."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,"Follow these steps to use the IGC CLI:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Install the CLI:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"npm i -g @garage-catalyst/ibm-garage-cloud-cli\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Run the CLI’s help command to list the available commands:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"igc --help\n")),Object(a.b)("p",{parentName:"li"},"  The help output looks like this:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"% igc --help\nIBM Garage Cloud CLI\n\nUsage: igc <command> [args]\n\nCommands:\nigc jenkins-auth  Generate a Jenkins api token and register it as kubernetes\n                    secret\nigc gen-token     Generate a Jenkins api token\nigc pipeline      Register a pipeline for the current code repository in\n                    Jenkins                                  [aliases: register]\nigc git-webhook   Create a git webhook for a given Jenkins pipeline\nigc build         Build the image and push it into the IBM Cloud registry\nigc deploy        Deploy an image from the IBM Cloud registry into a\n                    kubernetes cluster\nigc tools         Launch the IBM Garage for Cloud tools image connected to the\n                    current directory\nigc vlan          Print out the vlan values\nigc credentials   Lists the urls and credentials for the tools deployed to the\n                    cluster\nigc ingress       List the current ingress hosts for deployed apps in a\n                    namespace\n\nOptions:\n--version  Show version number                                       [boolean]\n--help     Show help                                                 [boolean]\n")))),Object(a.b)("h2",{id:"use-the-cli"},"Use the CLI"),Object(a.b)("p",null,"Once the IGC CLI is installed, whenever you use it, your command line shell must be logged into your\nIBM Cloud account using the ",Object(a.b)("a",o({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli",title:"IBM Cloud CLI and Developer Tools"}),"IBM Cloud CLI"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Log into your IBM Cloud account with the correct region and resource group:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"ibmcloud login -a cloud.ibm.com -r <region> -g <resource group>\n"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Once logged in, you can use CLI commands."),Object(a.b)("p",{parentName:"li"},"  For example, this command lists the dashboard URLs for all of the tools:"),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",o({parentName:"pre"},{className:"language-bash"}),"igc ingress -n tools\n")))),Object(a.b)("h2",{id:"available-commands"},"Available commands"),Object(a.b)("h3",{id:"vlan"},"vlan"),Object(a.b)("p",null,"Lists the ",Object(a.b)("inlineCode",{parentName:"p"},"vlans")," for a particular ",Object(a.b)("inlineCode",{parentName:"p"},"resource group")," and ",Object(a.b)("inlineCode",{parentName:"p"},"region"),". The command\nexpects that an ",Object(a.b)("inlineCode",{parentName:"p"},"ibmcloud login")," has already been performed to set up the\nenvironment."),Object(a.b)("h3",{id:"credentials"},"credentials"),Object(a.b)("p",null,"Prints the urls and credentials for the Catalyst tools deployed into the cluster.\nThis includes Jenkins, Argo CD, and SonarQube."),Object(a.b)("h3",{id:"ingress"},"ingress"),Object(a.b)("p",null,"Lists the ingress urls for the provided namespace. If no namespace\nis provided, ",Object(a.b)("inlineCode",{parentName:"p"},"dev")," is used."),Object(a.b)("h3",{id:"pipeline"},"pipeline"),Object(a.b)("p",null,"Registers a git repository project as a Jenkins pipeline by creating a Kubernetes secret to hold\nthe Git authentication information, calling the Jenkins API, and creating a web-hook.\nThis command is intended to be run within the repository directory of a project for\nwhich a pipeline should be generated."),Object(a.b)("h3",{id:"tools"},"tools"),Object(a.b)("p",null,"Launches the ",Object(a.b)("inlineCode",{parentName:"p"},"ibm-garage-cli-tools")," docker image in an interactive\nterminal. This image provides commonly used infrastructure tools like,\n",Object(a.b)("inlineCode",{parentName:"p"},"terraform"),", ",Object(a.b)("inlineCode",{parentName:"p"},"kubectl"),", etc."))}p.isMDXComponent=!0},441:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},442:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},443:function(e,t,n){"use strict";n(32),n(28);var a=n(1),i=n(441),o=n(0),r=n.n(o),l=n(105),s=n.n(l),c=n(195),b=n(127),p=n(3),u=n.n(p),d=n(384),m=function(e){var t,n=e.title,i=e.tabs,o=void 0===i?[]:i;return Object(a.b)("div",{className:u()(d.pageHeader,(t={},t[d.withTabs]=o.length,t))},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12"},Object(a.b)("h1",{id:"page-title",className:d.text},n)))))},h=n(442),g=n(385),O=function(e){var t=e.relativePagePath,n=e.repository,i=h.data.site.siteMetadata.repository,o=n||i,r=o.baseUrl,l=o.subDirectory,s=r+"/edit/"+o.branch+l+"/src/pages"+t;return r?Object(a.b)("div",{className:"bx--row "+g.row},Object(a.b)("div",{className:"bx--col"},Object(a.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=n(193),v=(n(59),n(26)),f=n(386);var N=function(e){var t,n;function i(){return e.apply(this,arguments)||this}return n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=s()(e,{lower:!0}),r=o===i,l=new RegExp(i+"(?!-)"),c=n.replace(l,o);return Object(a.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(a.b)(v.Link,{className:f.link,to:""+c},e))}));return Object(a.b)("div",{className:f.tabsContainer},Object(a.b)("div",{className:"bx--grid"},Object(a.b)("div",{className:"bx--row"},Object(a.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(a.b)("nav",null,Object(a.b)("ul",{className:f.list},o))))))},i}(r.a.Component),y=n(194);t.a=function(e){var t=e.pageContext,n=e.children,o=e.location,r=e.Title,l=t.frontmatter,p=void 0===l?{}:l,u=t.relativePagePath,d=t.titleType,h=p.tabs,g=p.title,v=p.theme,f=p.description,C=p.keywords,I=i.data.site.pathPrefix,k=I?o.pathname.replace(I,""):o.pathname,w=h?k.split("/").slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(a.b)(b.a,{homepage:!1,theme:v,pageTitle:g,pageDescription:f,pageKeywords:C,titleType:d},Object(a.b)(m,{title:r?Object(a.b)(r,null):g,label:"label",tabs:h}),h&&Object(a.b)(N,{slug:k,tabs:h,currentTab:w}),Object(a.b)(y.a,{padded:!0},n,Object(a.b)(O,{relativePagePath:u})),Object(a.b)(j.a,{pageContext:t,location:o,slug:k,tabs:h,currentTab:w}),Object(a.b)(c.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-cli-index-mdx-af4bd67187e13ac2899b.js.map