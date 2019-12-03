(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{409:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return d}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var i=a(107),n=a(443);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var o={},s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},l=s("PageDescription"),b=s("InlineNotification"),c={_frontmatter:o},p=n.a;function d(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(i.b)(p,r({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"PageDescription"},Object(i.b)("p",null,"Use SonarQube to analyze your code’s quality")),Object(i.b)("p",null,"In IBM Garage Method, one of the Develop practices is to ",Object(i.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/code/practice_automated_testing/"}),"automate tests for continuous delivery"),", in part by using ",Object(i.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/code/practice_automated_testing/tool_lint"}),"static source code analysis tools"),".\nSonarQube automates performing static code analysis and enables it to be added to a continuous integration pipeline.\nThe Developer Tools environment’s CI pipeline (",Object(i.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration"}),"Jenkins"),", ",Object(i.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration-tekton"}),"Tekton"),", etc.) includes a SonarQube stage.\nSimply by building your app using the pipeline, your code gets analyzed, just open the SonarQube UI to browse the findings."),Object(i.b)("h2",{id:"what-is-code-analysis"},"What is code analysis"),Object(i.b)("p",null,"Static code analysis (a.k.a. code analysis) is a method of debugging by performing automated evaluation of code\nwithout executing the program. The analysis is structured as a set of coding rules that evaluate the code’s quality.\nAnalysis can be performed on source code or compiled code. The analyzer must support the programming language\nthe code is written in so that it can parse the code like a compiler or simulate its execution."),Object(i.b)("p",null,"Static code analysis differs from dynamic analysis, which observes and evaluates a running program. Dynamic analysis\nrequires test inputs and can meansure user functionality as well as runtime qualities like execution time and resource consumption.\nA code review is static code analysis performed by a human."),Object(i.b)("p",null,"Static code analysis can evaluate several different aspects of code quality, such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Reliability"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Bug"),": Programming error that breaks functionality"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Security"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Vulnerability"),": A point in a program that can be attacked"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Hotspot"),": Code that uses a security-sensitive API"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Maintainability"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Coding standards"),": Practices that increase the human readability and undestandability of code"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Code smell"),": Code that is confusing and difficult to maintain"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Technical debt"),": Estimated time required to fix all maintainability issues"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Complexity"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Code complexity"),": Code’s control flow and number of paths through the code"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Duplications"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Duplicated code"),": The same code sequence appearing more than once in the same program"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Manageability"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Testability"),": How easily tests can be developed and used to show the program meets requirements"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Portability"),": How easily the program can be reused in different environments"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Reusability"),": The program’s modularity, loose coupling, and limited interdependencies")))),Object(i.b)("p",null,"Static code analysis collects several metrics that measure code quality:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Issues"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Type"),": Bug, Vunerability, Code Smell"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Sevarity"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Blocker"),": Bug with a high probability to impact the behavior of the application in production"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Critical"),": Bug with a low probability to impact the behavior of the application in production, or a security vulnerability"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Major"),": Code smell with high impact to developer productivity"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Minor"),": Code smell with slight impact to developer productivity"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Info"),": Neither a bug nor a code smell, just a finding"))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Size"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Classes"),": Number of class definitions (concrete, abstract, nested, interfaces, enums, annotations)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Lines of code"),": Linespace seperated text that is not whitespace or comments"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Comment lines"),": Linespace seperated text containing significant commentary or commented-out code"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Coverage"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Test coverage"),": Code that was executed by a test suite")))),Object(i.b)("p",null,"A ",Object(i.b)("strong",{parentName:"p"},"Quality gate")," defines a policy that assesses pass/fail whether or not the number of issues and their severity is acceptable."),Object(i.b)("h2",{id:"what-is-sonarqube"},"What is SonarQube"),Object(i.b)("p",null,"SonarQube performs static code analysis to evaluate code quality, using analysis rules that focus on three areas:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Code Reliability"),": Detect bugs that will impact end-user functionality"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Application Security"),": Detect vulnerabilities and hotspots that can be exploited to compromise the program"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Technical Debt"),": Keep you codebase maintainable to increase developer velocity")),Object(i.b)("p",null,"SonarQube ",Object(i.b)("a",r({parentName:"p"},{href:"https://docs.sonarqube.org/latest/architecture/architecture-integration/#header-2"}),"plugs into the application lifecycle management (ALM)")," process to make continuous inspection part of continuous integration.\nAdding code analysis to ALM provides regular, timely feedback on the quality of the code being produced.\nThe goal is to detect problems as soon as possible so that they can be resolved before they can impact production end users."),Object(i.b)("p",null,"The continuous integration (CI) server itegrates SonarQube into the ALM.\nThe SonarQube solution consists of several components: The central component is the SonarQube Server,\nwhich runs the SonarScanner, processes the resulting analysis reports, stores the reports in SonarQube Database,\nand displays the reports in the SonarQube UI.\nA CI server uses a stage/goal/task in its build automation to trigger the language-specific SonarScanner to scan the code being built.\nDevelopers can view the resulting analysis report in the SonarQube UI."),Object(i.b)("h2",{id:"code-analysis-in-the-pipeline"},"Code Analysis in the Pipeline"),Object(i.b)("p",null,"In the CI pipeline, the ",Object(i.b)("em",{parentName:"p"},"Sonar scan")," stage triggers the SonarScanner in SonarQube.\nFollow these directions to see code analysis in action:"),Object(i.b)("p",null,"Deploy the Starter Kit Template named Spring Boot Microservice."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Follow the directions in ",Object(i.b)("a",r({parentName:"li"},{href:"/ibm-garage-developer-guide/getting-started/deploy-app"}),"Deploying an App"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Deploy the Spring Boot Microservice template"),Object(i.b)("li",{parentName:"ul"},"Name the new repo something like ",Object(i.b)("inlineCode",{parentName:"li"},"sonar-java")),Object(i.b)("li",{parentName:"ul"},"Be sure to run the CI pipeline for your project, and confirm that it runs the Sonar scan stage")))),Object(i.b)("p",null,"Examine SonarQube’s analysis report for your app."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use the ",Object(i.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/dashboard"}),"Developer Tools Dashboard")," to open the SonarQube dashboard")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Go to the Projects page"),Object(i.b)("p",{parentName:"li"},"  You should see your project in the list, such as ",Object(i.b)("inlineCode",{parentName:"p"},"bwoolf1.sonar-java"),"."),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"740px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.324324324324323%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA1UlEQVQY002PzU7DMBCE+/7PgXgKOFJ64UecKlVqSCpEkiaO43ptQ+J82G2FOtJqZ6Wdmd3VoRv5VoZaCV/myP3+jnXzRMYcJ2KMLMtCzHXlGbnf8gzvPSv3OyM/E9ZPyBR412+UUnKLs+AqyqbmZM5i5xySKneXZhFhNbYf+P75kmCFx88HQjJmgtfDC5tmk1zA7AvKsmROBxRjwbbY0nc9OcaOA+tdTXUck6HuEauZ54jWmqqtsGIJPlB3Ne3QkFUupatBXYKDRylFCOH/A0n75mT5A3rSMwILg+U5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Project",title:"Sonar Project",src:"/ibm-garage-developer-guide/static/2cc0afeb1b27249c0a8deea73d1de166/a1faf/sonar-project.png",srcSet:["/ibm-garage-developer-guide/static/2cc0afeb1b27249c0a8deea73d1de166/d6747/sonar-project.png 288w","/ibm-garage-developer-guide/static/2cc0afeb1b27249c0a8deea73d1de166/09548/sonar-project.png 576w","/ibm-garage-developer-guide/static/2cc0afeb1b27249c0a8deea73d1de166/a1faf/sonar-project.png 740w"],sizes:"(max-width: 740px) 100vw, 740px",loading:"lazy"})),"\n    ")),Object(i.b)("p",{parentName:"li"},"  The project summary shows several characteristics meansured in the app:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The quality gate passed"),Object(i.b)("li",{parentName:"ul"},"Several issues were found, catagorized by type",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"2 bugs for a C rating"),Object(i.b)("li",{parentName:"ul"},"0 vunerabilities for an A rating"),Object(i.b)("li",{parentName:"ul"},"17 code smells but an A rating"),Object(i.b)("li",{parentName:"ul"},"None of the code was tested"),Object(i.b)("li",{parentName:"ul"},"None of it is duplicate code"))),Object(i.b)("li",{parentName:"ul"},"It scanned 1.5k lines of code written in Java, a small program (XS, S, M, L, XL)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the Projects list, click on the project name (such as ",Object(i.b)("inlineCode",{parentName:"p"},"bwoolf1.sonar-java"),") to open your project"),Object(i.b)("p",{parentName:"li"},"  The project overview shows more detail about how many issues were found in the app"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Reliability: 2 bugs for a C rating"),Object(i.b)("li",{parentName:"ul"},"Security: 1 security hotspot but an A rating"),Object(i.b)("li",{parentName:"ul"},"Maintainability: 17 code smells, 2 hrs of technical debt but an A rating"),Object(i.b)("li",{parentName:"ul"},"Coverage: 7 unit tests"),Object(i.b)("li",{parentName:"ul"},"Duplications: 0 duplicated blocks")))),Object(i.b)("h3",{id:"examine-the-issues"},"Examine the issues"),Object(i.b)("p",null,"Use the SonarQube dashboard to explore the issues that it found in yout project."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the Reliability pane of the project’s Overview page, click on the “2” to open the Issues page"),Object(i.b)("p",{parentName:"li"},"  The Issues page, filtered for bugs, shows two issues. Both concern “synchronized” methods."),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1066px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.33395872420263%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABg0lEQVQozz2Ra24aQRCE91ZRoihYNiARTmHfgKMhIX5zgchKrAgbbGAf7Ht2Z/YJkpUvPRj5R6lG6u6qrVpnOp0y+Tnl9u6O0Wh0wXg8ZjKZfPJwOGQwGHBzM2Dw4zvfvn7h4eGe5XLJYrFgPp+zWq2YzWY42tREcUwYRqiyxNQ1laDve06n0xXXd9/S6ICq8NFlRN1ouq677Fpu2xYnzzPKUotQgz6GGD/AFOVl4Xw+fYratz1s5KgWQzuvq4pKoLUWjRKlFE6cJAQiVIhoqQryvYtJMzoRqaoaYz6OLNvDwqYw5vpVPa0IW7YG1szZHRMetz5vsWaX1WxDRaoMoRvgP2/wX/f42x2BwN+8EYth4vqkXoAKJFGcUUQZ6hijohQniiL2hwN5nl86sP3VTUMgYodfj3h/1xz+PH3g9xPR+oXkZUu4fibZvGJcj2znEYlZKuaOjRPLT3FdF8+TYZZd4vTSRytmba5o0pRGqmmFO5l3wu8S/91o/sn9WWqw+yfBf6ym7fq/DDOuAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Bugs",title:"Sonar Bugs",src:"/ibm-garage-developer-guide/static/cd15ce0a32b214fb722f0a59339c202d/091cc/sonar-bugs.png",srcSet:["/ibm-garage-developer-guide/static/cd15ce0a32b214fb722f0a59339c202d/d6747/sonar-bugs.png 288w","/ibm-garage-developer-guide/static/cd15ce0a32b214fb722f0a59339c202d/09548/sonar-bugs.png 576w","/ibm-garage-developer-guide/static/cd15ce0a32b214fb722f0a59339c202d/091cc/sonar-bugs.png 1066w"],sizes:"(max-width: 1066px) 100vw, 1066px",loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the Issues list, click on either issue to see where the issues appeared in the code"),Object(i.b)("p",{parentName:"li"},"  The Issues detail shows the soure code file for the Java class.\nThe issue descriptions are embedded after the ",Object(i.b)("inlineCode",{parentName:"p"},"mark")," and ",Object(i.b)("inlineCode",{parentName:"p"},"reset")," method signatures."),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"795px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.90566037735849%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABfUlEQVQoz51S2XKjMBDU/39aassxiWOM1wfG4QogBIhLHJ2G+CWpvOxOVdeMZkalnh4J3/dRVRUW60yDss5hBoNpmjHh301kWYZcFSjzAn6Y4OyF8O6E+44oSlFkOZRUyBdPyFR+xcwVvKPLGmWhoYsKum4htNb4YNHZWPCe/uBq7eDubFy2Fs7PFk6b7Yrw4CB2/iKwHUTOEcnpAnm9wXfOuBOBfUBIIiIlw4SFVjcw/QilNJIkWyH5UNcZ9P0AY8YVw8Mb5pZ81/bs6dHSL2cRhCFUFK3zD1PP5hrTPOJ/TcRxjIpjL6a4HD9JIKlNk1OvqoOiNqWUqFmbh5EYVkwPcHvA+ABjsWy4Kgp4Ly/wN8943+3hv9nwrC3ur6/0Fm6MY9tG4lC//R4fhwPk+YTi6iK9uIhPV6THI8owhsiVggojNNTSEIqMM8qQBwFy+obsWrKd6/pXdLzfk1DHnoFnEVC/zL2tdOdFx3FEbwz/4sApvv/E+Uc8/6LhJ8fFsCCYuarKAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Bugs in Code",title:"Sonar Bugs in Code",src:"/ibm-garage-developer-guide/static/b7610342dab2ab560c3335808229a022/53d17/sonar-bugs-code.png",srcSet:["/ibm-garage-developer-guide/static/b7610342dab2ab560c3335808229a022/d6747/sonar-bugs-code.png 288w","/ibm-garage-developer-guide/static/b7610342dab2ab560c3335808229a022/09548/sonar-bugs-code.png 576w","/ibm-garage-developer-guide/static/b7610342dab2ab560c3335808229a022/53d17/sonar-bugs-code.png 795w"],sizes:"(max-width: 795px) 100vw, 795px",loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In either issue, press the See Rule button."),Object(i.b)("p",{parentName:"li"},"  SonarQube displays the details of its “Overrides should match their parent class methods in synchronization” rule."),Object(i.b)("p",{parentName:"li"},"  Now you need to investigate to figure out why the code violates this rule."),Object(i.b)("p",{parentName:"li"},"  Want to see if you can track down the problem before seeing the solution?\nWhat to fix is pretty obvious—the Rule explains what to do—but tracking down why takes some effort."),Object(i.b)("hr",{parentName:"li"}),Object(i.b)("p",{parentName:"li"},"  Here’s the solution:"),Object(i.b)("p",{parentName:"li"},"  The error is not in the file’s parent class, ",Object(i.b)("inlineCode",{parentName:"p"},"ResettableHttpServletRequest"),", but in its embedded class, ",Object(i.b)("inlineCode",{parentName:"p"},"SimpleServletInputStream"),",\nwhich extends ",Object(i.b)("inlineCode",{parentName:"p"},"javax.servlet.ServletInputStream"),". The Javadocs for ",Object(i.b)("inlineCode",{parentName:"p"},"ServletInputStream")," show that it extends\n",Object(i.b)("inlineCode",{parentName:"p"},"java.io.InputStream"),". The ",Object(i.b)("a",r({parentName:"p"},{href:"http://physics.usc.edu/java/api/java.io.InputStream.html"}),"original Java 1.0 Javadocs"),"\nshow that these methods in InputStream are indeed synchronized:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",r({parentName:"pre"},{className:"language-java"}),"public synchronized void mark(int readlimit)\n. . .\npublic synchronized void reset() throws IOException\n")),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("a",r({parentName:"p"},{href:"https://docs.oracle.com/javase/7/docs/api/java/io/InputStream.html#mark(int)"}),"More recent Javadocs"),"\nhaven’t shown these signatures for years, but the compiler says the class is still defined that way.\nThere’s some debate about ",Object(i.b)("a",r({parentName:"p"},{href:"https://stackoverflow.com/questions/33525923/synchronized-methods-in-java-io-streams"}),"whether mark and reset really need to be synchronized"),". But SonarQube doesn’t judge, it just reports:\nSince the superclass defined the method signatures as synchronized,\nSonarQube is warning that the subclass is supposed to do so as well."))),Object(i.b)("h3",{id:"examine-the-other-issues"},"Examine the other issues"),Object(i.b)("p",null,"Besides the bugs, SonarQube also found issues that are hostspots and code smells."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the SonarQube dashboard, go back to the Issues page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click on the “1” above Security hotspots"),Object(i.b)("p",{parentName:"li"},"  The issue warns to “Make sure that command line arguments are used safely here.”"),Object(i.b)("p",{parentName:"li"},"  ",Object(i.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"739px"}}),"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"23.00405953991881%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAABA0lEQVQY032Oy5KCMBBF+f+fm8VYoqIEJAFCiAPhISJyJuhqNtNVp25336ruGzjXUnUzu3Ig1D2RqomLGpFXHKQlUwVpmlLqCtf1NK2jcY5xmljWlRX+ELTeTHNDLKsPynBKSxJVkSQZiZCIRCGkJvEofSMrLdo6rJvITIese5RpUbYncMPIVxjzvTsQHi4czymHKGUfRoRHwW4fcREKqTTXrPSJffKTeD+5+gDnpOAkcmL/+CwNgZUKqy3N+ECWtU9bkZsbeXVD6pprUVGYH7KfO4Xt0KWhHWfPg2aYcF63vh0edPf5c3Dpe7Z6LQvLc2ZZnqyv11u33ca8bLPvvf9f/QKocnlHNCm2ZQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Hotspot",title:"Sonar Hotspot",src:"/ibm-garage-developer-guide/static/c5ea7b704606b3225dee7230c9b69c67/0f9cc/sonar-hotspot.png",srcSet:["/ibm-garage-developer-guide/static/c5ea7b704606b3225dee7230c9b69c67/d6747/sonar-hotspot.png 288w","/ibm-garage-developer-guide/static/c5ea7b704606b3225dee7230c9b69c67/09548/sonar-hotspot.png 576w","/ibm-garage-developer-guide/static/c5ea7b704606b3225dee7230c9b69c67/0f9cc/sonar-hotspot.png 739w"],sizes:"(max-width: 739px) 100vw, 739px",loading:"lazy"})),"\n    ")),Object(i.b)("p",{parentName:"li"},"  SonarQube considers any class that has a ",Object(i.b)("inlineCode",{parentName:"p"},"public static void main(String[] args)")," method to be a potential vulnerability.\nAs the rule explains, “Command line arguments can be dangerous just like any other user input. They should never be used without being first validated and sanitized.” This method passes them through unchecked, which is risky.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Back in the Issues page, click on “17” code smells"),Object(i.b)("p",{parentName:"li"},"   SonarQube found issues such as:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Remove this unused import ‘java.lang.System.lineSeparator’.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Move constants to a class or enum.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"This block of commented-out lines of code should be removed."),Object(i.b)("p",{parentName:"li"},"None of these break your app’s functionality, but they do make the code more difficilt to maintain."))))),Object(i.b)("h2",{id:"give-it-a-try"},"Give it a try"),Object(i.b)("p",null,"As we saw earlier, SonarQube found two bugs in our Java app. Let’s do something about that."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"740px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.324324324324323%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA1UlEQVQY002PzU7DMBCE+/7PgXgKOFJ64UecKlVqSCpEkiaO43ptQ+J82G2FOtJqZ6Wdmd3VoRv5VoZaCV/myP3+jnXzRMYcJ2KMLMtCzHXlGbnf8gzvPSv3OyM/E9ZPyBR412+UUnKLs+AqyqbmZM5i5xySKneXZhFhNbYf+P75kmCFx88HQjJmgtfDC5tmk1zA7AvKsmROBxRjwbbY0nc9OcaOA+tdTXUck6HuEauZ54jWmqqtsGIJPlB3Ne3QkFUupatBXYKDRylFCOH/A0n75mT5A3rSMwILg+U5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Project",title:"Sonar Project",src:"/ibm-garage-developer-guide/static/2cc0afeb1b27249c0a8deea73d1de166/a1faf/sonar-project.png",srcSet:["/ibm-garage-developer-guide/static/2cc0afeb1b27249c0a8deea73d1de166/d6747/sonar-project.png 288w","/ibm-garage-developer-guide/static/2cc0afeb1b27249c0a8deea73d1de166/09548/sonar-project.png 576w","/ibm-garage-developer-guide/static/2cc0afeb1b27249c0a8deea73d1de166/a1faf/sonar-project.png 740w"],sizes:"(max-width: 740px) 100vw, 740px",loading:"lazy"})),"\n    "),Object(i.b)("h3",{id:"add-a-quality-gate-to-sonarqube"},"Add a quality gate to SonarQube"),Object(i.b)("p",null,"The first problem is that the quality gate says that the app passed. The default quality gate is OK with those two bugs, but we’re not."),Object(i.b)("p",null,"Let’s create a new quality gate that checks for bugs."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Use the Developer Tools Dashboard to open the SonarQube dashboard")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"To create and install a new quality gate, first log in to SonarQube")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Go to the Quality Gates page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Make a copy of the default gate named ",Object(i.b)("em",{parentName:"p"},"Sonar way"),", give it a name like ",Object(i.b)("inlineCode",{parentName:"p"},"better gate {your initials}"),", i.e. ",Object(i.b)("inlineCode",{parentName:"p"},"better gate bw"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add a condition, Bugs\tis greater than\t0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add your project to this gate"))),Object(i.b)("p",null,"Run the pipeline again to scan the code again."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Back in the OpenShift console, on the Application Console > Builds > Pipelines page, press Start Pipeline")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"After the Sonar Scan stage completes, go back to the SonarQube dashboard and take a look at your project"))),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"738px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.37669376693767%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA30lEQVQY002P60rDQBCF8/4P4w/FZygiQtE/haIxVHIpuWyy12Sz+7ndIjgwzPWcOVOsq6ObJM0oaSdFPSw5b1Kv7mdqaZHnT/qHJ1zdEIEYAjeLMWb/nxfee5wPmG1Hrx6z7qw+5qjshkvYMM2o4wdhkRnsN88iF6yzGG0w5u7WOYobv7i+Y4dDXrZa8fz1iNoSOJEdf954GV7zbKkqquqbPR0v55JTeWLoh6xazYLDuU2EqZrFgFaCfQ8IIbhcL2ijscbS9i3d2CXypFprxmm6H07qxnHEJVV/L6u0/wssAzLIZ0xEsQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Project Failed",title:"Sonar Project Failed",src:"/ibm-garage-developer-guide/static/2c0f49cef438d7e3c4421ec4ca8a772c/9f10b/sonar-project-failed.png",srcSet:["/ibm-garage-developer-guide/static/2c0f49cef438d7e3c4421ec4ca8a772c/d6747/sonar-project-failed.png 288w","/ibm-garage-developer-guide/static/2c0f49cef438d7e3c4421ec4ca8a772c/09548/sonar-project-failed.png 576w","/ibm-garage-developer-guide/static/2c0f49cef438d7e3c4421ec4ca8a772c/9f10b/sonar-project-failed.png 738w"],sizes:"(max-width: 738px) 100vw, 738px",loading:"lazy"})),"\n    "),Object(i.b)("p",null,"Good news, the quality gate is working and SonarQube fails the project now!"),Object(i.b)("h3",{id:"add-a-stage-to-jenkins"},"Add a stage to Jenkins"),Object(i.b)(b,{kind:"error",mdxType:"InlineNotification"},Object(i.b)("p",null,"Do not complete this step for the homework task, when working on the the shared development environment, the ",Object(i.b)("a",r({parentName:"p"},{href:"https://docs.sonarqube.org/latest/analysis/scan/sonarscanner-for-jenkins/"}),"SonarQube Plugin")," is not correctly configured for this environment.")),Object(i.b)("p",null,"However, take a look at your pipeline (in the OpenShift console). It kept right on going! We don’t want the pipeline to keep going and deploy the app; if the code fails the quality gate, we want the pipeline to stop."),Object(i.b)("p",null,"Modify the Jenkins pipeline to add a Quality Gate stage."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the local Git repo that contains your source code (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"sonar-app-bw"),"), edit the file named ",Object(i.b)("inlineCode",{parentName:"p"},"Jenkinsfile"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"After the stage called Sonar Scan, insert this stage:"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",r({parentName:"pre"},{className:"language-jenkins"}),"stage(\"Quality Gate\") {\n    timeout(time: 1, unit: 'HOURS') {\n    // Parameter indicates whether to set pipeline to UNSTABLE if Quality Gate fails\n    // true = set pipeline to UNSTABLE, false = don't\n    waitForQualityGate abortPipeline: true\n}\n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Push the change to the server repo, which runs the pipeline again, and the Quality Gate stage fails"))),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1117px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"20.053715308863023%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAAtklEQVQY012ObQuDMAyE/f9/0M8T2Zgvq1Zb26TJLdYNxlIOnlByd83oAx5uw2PLJkLvMwZjt0eEI0FVcI5+nyq+U1krYFkWTPOMxhusqwcXMSmKKNhExiLV6efwYpWP9FLMGclERGg4JbgtmhHjud4x7WNN9MeK/tUhl2xBhPvSw8VXbTZvE7rpBtaCEgJc2yJbO7G7xkXGsGczIMzhqMciZ1tGomRBpe4n09/fyVLM1EoJc93fkAY4R2pdXQIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Pipeline Quality Gate Failed",title:"Pipeline Quality Gate Failed",src:"/ibm-garage-developer-guide/static/90b11138ce65d7c90fe7baf12a4aa56c/07497/pipeline-gate-stage-failed.png",srcSet:["/ibm-garage-developer-guide/static/90b11138ce65d7c90fe7baf12a4aa56c/d6747/pipeline-gate-stage-failed.png 288w","/ibm-garage-developer-guide/static/90b11138ce65d7c90fe7baf12a4aa56c/09548/pipeline-gate-stage-failed.png 576w","/ibm-garage-developer-guide/static/90b11138ce65d7c90fe7baf12a4aa56c/07497/pipeline-gate-stage-failed.png 1117w"],sizes:"(max-width: 1117px) 100vw, 1117px",loading:"lazy"})),"\n    "),Object(i.b)("p",null,"Good. Now, when SonarQube finds bugs in our app, the quality gate fails and the Jenkins stage fails."),Object(i.b)("h3",{id:"fix-the-code"},"Fix the code"),Object(i.b)("p",null,"Now that our pipeline detects problems in our code, let’s fix those problems. As discussed before, the bugs are that two methods need to be marked as synchronized. Let’s fix the code."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Edit the class ",Object(i.b)("inlineCode",{parentName:"p"},"com.ibm.cloud_garage.logging.inbound.ResettableHttpServletRequest"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Edit the methods ",Object(i.b)("inlineCode",{parentName:"p"},"mark")," and ",Object(i.b)("inlineCode",{parentName:"p"},"reset")," to make them both ",Object(i.b)("inlineCode",{parentName:"p"},"synchronized")))),Object(i.b)("pre",null,Object(i.b)("code",r({parentName:"pre"},{className:"language-java"}),"public synchronized void mark(int i) {\n. . .\npublic synchronized void reset() throws IOException {\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Push the change to the server repo, which runs the pipeline again, and this time the Quality Gate stage passes")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Check the project in SonarQube and see that it now has 0 bugs and has now passed"))),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"740px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.324324324324323%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA4klEQVQY0zWPiUrDUBBF8/8/If6C4C9oEYugFAoV07Rqs728LG/NdnxJ8MJwZ5gZODfKZMut6kil4lds/U12/IiGUjoO1YH7zzsSlbBomqfV53le679fZK0l8sOM7Se07zF+ZJkX75xnGKD0JbviicbX69Mw9LRdi3UWow3GbGWdQ2tN9JG+85Lv1mOtFI9fD6i+Cyjw9r1nn79uu/jCOTkz9iNxE3OMj4hSsLCppub5lHIpGqKiKhCtYBon6rrmml/RRmONJS1TMpmFSFOg0Ugpt2iBrqoqXKDaIoeE1gVyxR8tUDFzpIBlsgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Project Passed",title:"Sonar Project Passed",src:"/ibm-garage-developer-guide/static/5be6ec29ddd18885b6b974c3b0d8107e/a1faf/sonar-project-passed.png",srcSet:["/ibm-garage-developer-guide/static/5be6ec29ddd18885b6b974c3b0d8107e/d6747/sonar-project-passed.png 288w","/ibm-garage-developer-guide/static/5be6ec29ddd18885b6b974c3b0d8107e/09548/sonar-project-passed.png 576w","/ibm-garage-developer-guide/static/5be6ec29ddd18885b6b974c3b0d8107e/a1faf/sonar-project-passed.png 740w"],sizes:"(max-width: 740px) 100vw, 740px",loading:"lazy"})),"\n    "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Extra credit"),": The code still has 17 code smells. Go fix those!"),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"It’s a good idea to incorporate code analysis as part of your application development lifecycle,\nso you can use its findings to help enforce and improve your code quality.\nHere, the Developer Tools environment uses SonarQube, but you never had to run SonarQube.\nJust run the Developer Tools environment’s build pipeline on your app and it gets scanned automatically.\nAfter running the pipeline, open the SonarQube UI and browse the findings in your app’s project to figure\nout what code you ought to fix."))}d.isMDXComponent=!0},441:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},442:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},443:function(e,t,a){"use strict";a(32),a(28);var i=a(1),n=a(441),r=a(0),o=a.n(r),s=a(106),l=a.n(s),b=a(194),c=a(128),p=a(3),d=a.n(p),u=a(387),m=function(e){var t,a=e.title,n=e.tabs,r=void 0===n?[]:n;return Object(i.b)("div",{className:d()(u.pageHeader,(t={},t[u.withTabs]=r.length,t))},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12"},Object(i.b)("h1",{id:"page-title",className:u.text},a)))))},g=a(442),h=a(388),j=function(e){var t=e.relativePagePath,a=e.repository,n=g.data.site.siteMetadata.repository,r=a||n,o=r.baseUrl,s=r.subDirectory,l=o+"/edit/"+r.branch+s+"/src/pages"+t;return o?Object(i.b)("div",{className:"bx--row "+h.row},Object(i.b)("div",{className:"bx--col"},Object(i.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},O=a(193),N=(a(59),a(26)),A=a(389);var y=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0}),o=r===n,s=new RegExp(n+"(?!-)"),b=a.replace(s,r);return Object(i.b)("li",{key:e,className:d()((t={},t[A.selectedItem]=o,t),A.listItem)},Object(i.b)(N.Link,{className:A.link,to:""+b},e))}));return Object(i.b)("div",{className:A.tabsContainer},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(i.b)("nav",null,Object(i.b)("ul",{className:A.list},r))))))},n}(o.a.Component),f=a(195);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,s=t.frontmatter,p=void 0===s?{}:s,d=t.relativePagePath,u=t.titleType,g=p.tabs,h=p.title,N=p.theme,A=p.description,v=p.keywords,w=n.data.site.pathPrefix,S=w?r.pathname.replace(w,""):r.pathname,k=g?S.split("/").slice(-1)[0]||l()(g[0],{lower:!0}):"";return Object(i.b)(c.a,{homepage:!1,theme:N,pageTitle:h,pageDescription:A,pageKeywords:v,titleType:u},Object(i.b)(m,{title:o?Object(i.b)(o,null):h,label:"label",tabs:g}),g&&Object(i.b)(y,{slug:S,tabs:g,currentTab:k}),Object(i.b)(f.a,{padded:!0},a,Object(i.b)(j,{relativePagePath:d})),Object(i.b)(O.a,{pageContext:t,location:r,slug:S,tabs:g,currentTab:k}),Object(i.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-code-analysis-index-mdx-2e2b4eee66b03996d431.js.map