(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{403:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),o=a(434);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r,l={},c=(r="PageDescription",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),s={_frontmatter:l},b=o.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(b,i({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(c,{mdxType:"PageDescription"},Object(n.b)("p",null,"Install and configure these tools needed to use the Developer Tools environment")),Object(n.b)("p",null,"To install and use the IBM Garage for Cloud Development Tools environment, first setup the following prerequisites. Both Developers and Administrators will need these tools."),Object(n.b)("p",null,"This guide assumes that you have some basic knowledge of Kubernetes, Docker, and modern software delivery techniques including CI/CD. To learn more about these topics, after installing the environment, consult the educational materials listed in the Activation tab in the ",Object(n.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/dashboard"}),"Development Tools Dashboard"),"."),Object(n.b)("h2",{id:"create-accounts"},"Create accounts"),Object(n.b)("p",null,"You’ll need these accounts to use the Developer Tools environment."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"http://github.com"}),"GitHub account")," (public, not enterprise): Create one if you do not have one aleady. If you have not logged in for a while, make sure your login is working.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com"}),"IBM Cloud Account"),": Create one if needed, make sure you can log in. "),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"If you’re going to ",Object(n.b)("a",i({parentName:"li"},{href:"/ibm-garage-developer-guide/admin/installation-ibm-cloud"}),"create a cluster"),", your user needs to be a ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-iamuserinv"}),"member of a paid account")," and have permissions to create a cluster.")))),Object(n.b)("h3",{id:"configure-github-personal-access-token"},"Configure Github Personal Access Token"),Object(n.b)("p",null,"For Jenkins to connect to and use your GitHub repo, it will need a ",Object(n.b)("a",i({parentName:"p"},{href:"https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line"}),"GitHub personal access token")," with ",Object(n.b)("inlineCode",{parentName:"p"},"public_repo")," and ",Object(n.b)("inlineCode",{parentName:"p"},"write:repo_hook")," scopes. The Personal Access Token only needs to be generated once because it is associated with the GitHub organization and can be used to access any of the organization’s repos."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Navigate to ",Object(n.b)("a",i({parentName:"li"},{href:"https://github.com/settings/tokens"}),"Developer Settings")," and generate a new token"),Object(n.b)("li",{parentName:"ul"},"Select ",Object(n.b)("inlineCode",{parentName:"li"},"public_repo")," scope to enable git clone"),Object(n.b)("li",{parentName:"ul"},"Select ",Object(n.b)("inlineCode",{parentName:"li"},"write:repo_hook")," scope so Jenkins can create a web hook\n",Object(n.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.25851938895417%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAACQ0lEQVQ4y3VTaXPaMBDl//+wfmuZkIZAIQkY2/iQZMm38PG6qxiaiV3NrCVL2qf39liN44iiKNC2LXjw/zgMGPoOdV2jbi1qa1HReV7VaGjt7vzHVgxSlBVSIZEZg67vHfBAJpSGvF6RXjyoMESjJGxuML2MpbEabxaNSBG+HXF+3SIhZxt6aH6vId4OSPdbiM0vZM9r1Ict+sjHeFeyxHCsS1SBh+iwR/Rnh1Yk6N73sP4ZSkpIbSDzEmmmUZL8r2NcYLnizYZiJZIUSRyjs/YhWZscGQFpMkPAPN/o3Nob+ik0c4b0kSrDxQ9wOnsoKfA8uq5z+4pMcHy1duAc6zQVMHnuQBcBNV0OgtCBcmZ58GVFABkxY1BNc/bFeK9pPitjmAFSdlMhkKSpe/kOWBQl8rxwc1lVyIviscf/3+P4AGQpnneBMeZxyIB3ySoj2VK5Ne9JXpNPQtJ53bYcV/uvDvknThIH/BWQ43UHlUo5ZwbmfTGdFWXpWPP8YFgRfQbkS9wx4wTIceNwGMo2rxmApdZ1g5KagbP9vYw+Y0jMLr6P0+mMiErHMaQsC6pDNUnMSDY/PAzDDGTWetxuHA8/vCKh5IxTHSYsjywm5ppkPUDuttgpxCQjuUkQODPEaiwMbnGIPI7QnI5oj9RB2ye0L2tYWjvbbTC0zQx4xc7644jLyzNOT2sEuy3anz9Qv25w/XhHEkVkMSR1Um9bDNT7zqaszluP5HZlgYwc5TWEJlZ8kSUbCjy3X+7qsJ45L0n+Cw6O04qAEUMyAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Jenkins OAuth scopes",title:"Jenkins OAuth scopes",src:"/ibm-garage-developer-guide/static/cddc3c4fec890fc48da7a08658fd85cc/fb070/jenkins-scopes.png",srcSet:["/ibm-garage-developer-guide/static/cddc3c4fec890fc48da7a08658fd85cc/d6747/jenkins-scopes.png 288w","/ibm-garage-developer-guide/static/cddc3c4fec890fc48da7a08658fd85cc/09548/jenkins-scopes.png 576w","/ibm-garage-developer-guide/static/cddc3c4fec890fc48da7a08658fd85cc/fb070/jenkins-scopes.png 1152w","/ibm-garage-developer-guide/static/cddc3c4fec890fc48da7a08658fd85cc/b35d3/jenkins-scopes.png 1702w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    ")),Object(n.b)("li",{parentName:"ul"},"The GitHub UI will never again let you see this token, so be sure to save the token in your password manager or somewhere safe that you can access later on")),Object(n.b)("h2",{id:"install-clis-and-tools"},"Install CLIs and tools"),Object(n.b)("p",null,"The following is a list of desktop tools required to help with installation and development."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://git-scm.com/"}),"Git Client"),": Needs to be installed in your development operating system, it comes as standard for Mac OS")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started"}),"IBM Cloud CLI"),": Required for management of IBM Cloud Account and management of your managed IBM Kubernetes and Red Hat OpenShift clusters"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Don’t install just the ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-install-ibmcloud-cli"}),"IBM Cloud CLI"),", install the ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/cli?topic=cloud-cli-getting-started#step1-install-idt"}),"IBM Cloud CLI and Developer Tools"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"curl -sL https://ibm.biz/idt-installer | bash\n"))),Object(n.b)("li",{parentName:"ul"},"Note: If you log in to the web UI using SSO, you’ll need to ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/iam?topic=iam-federated_id"}),"create an API key")," for logging into the CLI. (You can also use this API key for ",Object(n.b)("a",i({parentName:"li"},{href:"/ibm-garage-developer-guide/admin/installation-ibm-cloud"}),"installing the Developer Tools environment"),".)"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://www.okd.io/download.html"}),"OpenShift OC CLI"),": Required for Red Hat OpenShift management and development"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Place ",Object(n.b)("inlineCode",{parentName:"li"},"oc")," and ",Object(n.b)("inlineCode",{parentName:"li"},"kubectl")," in your Terminal ",Object(n.b)("inlineCode",{parentName:"li"},"PATH")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://www.docker.com/products/docker-desktop"}),"Docker Desktop"),": Required for running common tools and ",Object(n.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/tools-image"}),"Developer Tools Image")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Installed and running on your local machine"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node"),": Required for running the ",Object(n.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/cli"}),"IBM Garage for Cloud CLI")),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Installed on your local machine"),Object(n.b)("li",{parentName:"ul"},"Recommended ",Object(n.b)("inlineCode",{parentName:"li"},"v12.x LTS")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/cli"}),"IBM Garage for Cloud CLI"),": Used to help make working with the development tools as easy as possible"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"npm i -g @garage-catalyst/ibm-garage-cloud-cli\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://code.visualstudio.com/download"}),"Visual Studio Code"),": A popular code editor"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"You will be required to edit some files, having a good quality editor is always best practice"),Object(n.b)("li",{parentName:"ul"},"Enabling ",Object(n.b)("a",i({parentName:"li"},{href:"https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line"}),"launching VSCode from a terminal")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk11-downloads-5066655.html"}),"JDK 11"),": ",Object(n.b)("em",{parentName:"p"},"Optional")," installed on your local machine"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Used for SpringBoot content")))))}p.isMDXComponent=!0},432:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},433:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},434:function(e,t,a){"use strict";a(32),a(28);var n=a(1),o=a(432),i=a(0),r=a.n(i),l=a(105),c=a.n(l),s=a(195),b=a(127),p=a(3),d=a.n(p),u=a(384),m=function(e){var t,a=e.title,o=e.tabs,i=void 0===o?[]:o;return Object(n.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=i.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:u.text},a)))))},g=a(433),h=a(385),j=function(e){var t=e.relativePagePath,a=e.repository,o=g.data.site.siteMetadata.repository,i=a||o,r=i.baseUrl,l=i.subDirectory,c=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},O=a(193),N=(a(59),a(26)),f=a(386);var v=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=c()(e,{lower:!0}),r=i===o,l=new RegExp(o+"(?!-)"),s=a.replace(l,i);return Object(n.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(n.b)(N.Link,{className:f.link,to:""+s},e))}));return Object(n.b)("div",{className:f.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:f.list},i))))))},o}(r.a.Component),w=a(194);t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,r=e.Title,l=t.frontmatter,p=void 0===l?{}:l,d=t.relativePagePath,u=t.titleType,g=p.tabs,h=p.title,N=p.theme,f=p.description,y=p.keywords,k=o.data.site.pathPrefix,A=k?i.pathname.replace(k,""):i.pathname,C=g?A.split("/").slice(-1)[0]||c()(g[0],{lower:!0}):"";return Object(n.b)(b.a,{homepage:!1,theme:N,pageTitle:h,pageDescription:f,pageKeywords:y,titleType:u},Object(n.b)(m,{title:r?Object(n.b)(r,null):h,label:"label",tabs:g}),g&&Object(n.b)(v,{slug:A,tabs:g,currentTab:C}),Object(n.b)(w.a,{padded:!0},a,Object(n.b)(j,{relativePagePath:d})),Object(n.b)(O.a,{pageContext:t,location:i,slug:A,tabs:g,currentTab:C}),Object(n.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-getting-started-prereqs-index-mdx-d2b973384c72bd84dce8.js.map