(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{401:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return p}));a(11),a(5),a(6),a(4),a(10),a(1),a(0);var n=a(106),i=a(435);function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o,s={},l=(o="PageDescription",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",e)}),b={_frontmatter:s},c=i.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,["components"]);return Object(n.b)(c,r({},b,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)(l,{mdxType:"PageDescription"},Object(n.b)("p",null,"Use SonarQube to analyze your code’s quality")),Object(n.b)("p",null,"In IBM Garage Method, one of the Develop practices is to ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/code/practice_automated_testing/"}),"automate tests for continuous delivery"),", in part by using ",Object(n.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/garage/method/practices/code/practice_automated_testing/tool_lint"}),"static source code analysis tools"),".\nSonarQube automates performing static code analysis and enables it to be added to a continuous integration pipeline.\nThe Developer Tools environment’s Jenkins pipeline includes a SonarQube stage.\nSimply by building your app using the Jenkins pipeline, your code gets analyzed, just open the SonarQube UI to browse the findings."),Object(n.b)("h2",{id:"what-is-code-analysis"},"What is code analysis"),Object(n.b)("p",null,"Static code analysis (a.k.a. code analysis) is a method of debugging by performing automated evaluation of code\nwithout executing the program. The analysis is structured as a set of coding rules that evaluate the code’s quality.\nAnalysis can be performed on source code or compiled code. The analyzer must support the programming lanuage\nthe code is written in so that it can parse the code like a compiler or simulate its execution."),Object(n.b)("p",null,"Static code analysis differs from dynamic analysis, which observes and evaluates a running program. Dynamic analysis\nrequires test inputs and can meansure user functionality as well as runtime qualities like execution time and resource consumption.\nA code review is static code analysis performed by a human."),Object(n.b)("p",null,"Static code analysis can evaluate several different aspects of code quality, such as:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Reliability"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Bug"),": Programming error that breaks functionality"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Security"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Vulnerability"),": A point in a program that can be attacked"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Hotspot"),": Code that uses a security-sensitive API"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Maintainability"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Coding standards"),": Practices that increase the human readability and undestandability of code"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Code smell"),": Code that is confusing and difficult to maintain"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Technical debt"),": Estimated time required to fix all maintainability issues"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Complexity"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Code complexity"),": Code’s control flow and number of paths through the code"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Duplications"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Duplicated code"),": The same code sequence appearing more than once in the same program"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Manageability"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Testability"),": How easily tests can be developed and used to show the program meets requirements"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Portability"),": How easily the program can be reused in different environments"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Reusability"),": The program’s modularity, loose coupling, and limited interdependencies")))),Object(n.b)("p",null,"Static code analysis collects several metrics that measure code quality:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Issues"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Type"),": Bug, Vunerability, Code Smell"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Sevarity"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Blocker"),": Bug with a high probability to impact the behavior of the application in production"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Critical"),": Bug with a low probability to impact the behavior of the application in production, or a security vulnerability"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Major"),": Code smell with high impact to developer productivity"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Minor"),": Code smell with slight impact to developer productivity"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Info"),": Neither a bug nor a code smell, just a finding"))))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Size"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Classes"),": Number of class definitions (concrete, abstract, nested, interfaces, enums, annotations)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Lines of code"),": Linespace seperated text that is not whitespace or comments"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Comment lines"),": Linespace seperated text containing significant commentary or commented-out code"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Coverage"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Test coverage"),": Code that was executed by a test suite")))),Object(n.b)("p",null,"A ",Object(n.b)("strong",{parentName:"p"},"Quality gate")," defines a policy that assesses pass/fail whether or not the number of issues and their severity is acceptable."),Object(n.b)("h2",{id:"what-is-sonarqube"},"What is SonarQube"),Object(n.b)("p",null,"SonarQube performs static code analysis to evaluate code quality, using analysis rules that focus on three areas:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Code Reliability"),": Detect bugs that will impact end-user functionality"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Application Security"),": Detect vulnerabilities and hotspots that can be exploited to compromise the program"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Technical Debt"),": Keep you codebase maintainable to increase developer velocity")),Object(n.b)("p",null,"SonarQube ",Object(n.b)("a",r({parentName:"p"},{href:"https://docs.sonarqube.org/latest/architecture/architecture-integration/#header-2"}),"plugs into the application lifecycle management (ALM)")," process to make continuous inspection part of continuous integration.\nAdding code analysis to ALM provides regular, timely feedback on the quality of the code being produced.\nThe goal is to detect problems as soon as possible so that they can be resolved before they can impact production end users."),Object(n.b)("p",null,"The continuous integration (CI) server itegrates SonarQube into the ALM.\nThe SonarQube solution consists of several components: The central component is the SonarQube Server,\nwhich runs the SonarScanner, processes the resulting analysis reports, stores the reports in SonarQube Database,\nand displays the reports in the SonarQube UI.\nA CI server uses a stage/goal/task in its build automation to trigger the language-specific SonarScanner to scan the code being built.\nDevelopers can view the resulting analysis report in the SonarQube UI."),Object(n.b)("h2",{id:"code-analysis-in-the-pipeline"},"Code Analysis in the Pipeline"),Object(n.b)("p",null,"In the ",Object(n.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration"}),"Jenkins pipeline"),", the ",Object(n.b)("em",{parentName:"p"},"Sonar scan")," stage triggers the SonarScanner in SonarQube.\nFollow these directions to see code analysis in action:"),Object(n.b)("p",null,"Deploy the Starter Kit Template named Spring Boot Microservice."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Follow the directions in ",Object(n.b)("a",r({parentName:"li"},{href:"/ibm-garage-developer-guide/getting-started/deploy-app"}),"Deploying an App"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Deploy the Spring Boot Microservice template"),Object(n.b)("li",{parentName:"ul"},"Name the new repo something like ",Object(n.b)("inlineCode",{parentName:"li"},"sonar-java")),Object(n.b)("li",{parentName:"ul"},"Be sure to run the Jenkins pipeline for your project, and confirm that it runs the Sonar scan stage")))),Object(n.b)("p",null,"Examine SonarQube’s analysis report for your app."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Use the ",Object(n.b)("a",r({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/dashboard"}),"Developer Tools Dashboard")," to open the SonarQube dashboard")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Go to the Projects page"),Object(n.b)("p",{parentName:"li"},"  You should see your project in the list, such as ",Object(n.b)("inlineCode",{parentName:"p"},"bwoolf1.sonar-java"),"."),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"740px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"19.324324324324323%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAYAAACOXx+WAAAACXBIWXMAAAsSAAALEgHS3X78AAAA1UlEQVQY002PzU7DMBCE+/7PgXgKOFJ64UecKlVqSCpEkiaO43ptQ+J82G2FOtJqZ6Wdmd3VoRv5VoZaCV/myP3+jnXzRMYcJ2KMLMtCzHXlGbnf8gzvPSv3OyM/E9ZPyBR412+UUnKLs+AqyqbmZM5i5xySKneXZhFhNbYf+P75kmCFx88HQjJmgtfDC5tmk1zA7AvKsmROBxRjwbbY0nc9OcaOA+tdTXUck6HuEauZ54jWmqqtsGIJPlB3Ne3QkFUupatBXYKDRylFCOH/A0n75mT5A3rSMwILg+U5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Project",title:"Sonar Project",src:"/ibm-garage-developer-guide/static/2cc0afeb1b27249c0a8deea73d1de166/a1faf/sonar-project.png",srcSet:["/ibm-garage-developer-guide/static/2cc0afeb1b27249c0a8deea73d1de166/d6747/sonar-project.png 288w","/ibm-garage-developer-guide/static/2cc0afeb1b27249c0a8deea73d1de166/09548/sonar-project.png 576w","/ibm-garage-developer-guide/static/2cc0afeb1b27249c0a8deea73d1de166/a1faf/sonar-project.png 740w"],sizes:"(max-width: 740px) 100vw, 740px",loading:"lazy"})),"\n    ")),Object(n.b)("p",{parentName:"li"},"  The project summary shows several characteristics meansured in the app:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"The quality gate passed"),Object(n.b)("li",{parentName:"ul"},"Several issues were found, catagorized by type",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"2 bugs for a C rating"),Object(n.b)("li",{parentName:"ul"},"0 vunerabilities for an A rating"),Object(n.b)("li",{parentName:"ul"},"17 code smells but an A rating"),Object(n.b)("li",{parentName:"ul"},"None of the code was tested"),Object(n.b)("li",{parentName:"ul"},"None of it is duplicate code"))),Object(n.b)("li",{parentName:"ul"},"It scanned 1.5k lines of code written in Java, a small program (XS, S, M, L, XL)"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the Projects list, click on the project name (such as ",Object(n.b)("inlineCode",{parentName:"p"},"bwoolf1.sonar-java"),") to open your project"),Object(n.b)("p",{parentName:"li"},"  The project overview shows more detail about how many issues were found in the app"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Reliability: 2 bugs for a C rating"),Object(n.b)("li",{parentName:"ul"},"Security: 1 security hotspot but an A rating"),Object(n.b)("li",{parentName:"ul"},"Maintainability: 17 code smells, 2 hrs of technical debt but an A rating"),Object(n.b)("li",{parentName:"ul"},"Coverage: 7 unit tests"),Object(n.b)("li",{parentName:"ul"},"Duplications: 0 duplicated blocks")))),Object(n.b)("h3",{id:"examine-the-issues"},"Examine the issues"),Object(n.b)("p",null,"Use the SonarQube dashboard to explore the issues that it found in yout project."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the Reliability pane of the project’s Overview page, click on the “2” to open the Issues page"),Object(n.b)("p",{parentName:"li"},"  The Issues page, filtered for bugs, shows two issues. Both concern “synchronized” methods."),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1066px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.33395872420263%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABg0lEQVQozz2Ra24aQRCE91ZRoihYNiARTmHfgKMhIX5zgchKrAgbbGAf7Ht2Z/YJkpUvPRj5R6lG6u6qrVpnOp0y+Tnl9u6O0Wh0wXg8ZjKZfPJwOGQwGHBzM2Dw4zvfvn7h4eGe5XLJYrFgPp+zWq2YzWY42tREcUwYRqiyxNQ1laDve06n0xXXd9/S6ICq8NFlRN1ouq677Fpu2xYnzzPKUotQgz6GGD/AFOVl4Xw+fYratz1s5KgWQzuvq4pKoLUWjRKlFE6cJAQiVIhoqQryvYtJMzoRqaoaYz6OLNvDwqYw5vpVPa0IW7YG1szZHRMetz5vsWaX1WxDRaoMoRvgP2/wX/f42x2BwN+8EYth4vqkXoAKJFGcUUQZ6hijohQniiL2hwN5nl86sP3VTUMgYodfj3h/1xz+PH3g9xPR+oXkZUu4fibZvGJcj2znEYlZKuaOjRPLT3FdF8+TYZZd4vTSRytmba5o0pRGqmmFO5l3wu8S/91o/sn9WWqw+yfBf6ym7fq/DDOuAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Bugs",title:"Sonar Bugs",src:"/ibm-garage-developer-guide/static/cd15ce0a32b214fb722f0a59339c202d/091cc/sonar-bugs.png",srcSet:["/ibm-garage-developer-guide/static/cd15ce0a32b214fb722f0a59339c202d/d6747/sonar-bugs.png 288w","/ibm-garage-developer-guide/static/cd15ce0a32b214fb722f0a59339c202d/09548/sonar-bugs.png 576w","/ibm-garage-developer-guide/static/cd15ce0a32b214fb722f0a59339c202d/091cc/sonar-bugs.png 1066w"],sizes:"(max-width: 1066px) 100vw, 1066px",loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the Issues list, click on either issue to see where the issues appeared in the code"),Object(n.b)("p",{parentName:"li"},"  The Issues detail shows the soure code file for the Java class.\nThe issue descriptions are embedded after the ",Object(n.b)("inlineCode",{parentName:"p"},"mark")," and ",Object(n.b)("inlineCode",{parentName:"p"},"reset")," method signatures."),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"795px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.90566037735849%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABfUlEQVQoz51S2XKjMBDU/39aassxiWOM1wfG4QogBIhLHJ2G+CWpvOxOVdeMZkalnh4J3/dRVRUW60yDss5hBoNpmjHh301kWYZcFSjzAn6Y4OyF8O6E+44oSlFkOZRUyBdPyFR+xcwVvKPLGmWhoYsKum4htNb4YNHZWPCe/uBq7eDubFy2Fs7PFk6b7Yrw4CB2/iKwHUTOEcnpAnm9wXfOuBOBfUBIIiIlw4SFVjcw/QilNJIkWyH5UNcZ9P0AY8YVw8Mb5pZ81/bs6dHSL2cRhCFUFK3zD1PP5hrTPOJ/TcRxjIpjL6a4HD9JIKlNk1OvqoOiNqWUqFmbh5EYVkwPcHvA+ABjsWy4Kgp4Ly/wN8943+3hv9nwrC3ur6/0Fm6MY9tG4lC//R4fhwPk+YTi6iK9uIhPV6THI8owhsiVggojNNTSEIqMM8qQBwFy+obsWrKd6/pXdLzfk1DHnoFnEVC/zL2tdOdFx3FEbwz/4sApvv/E+Uc8/6LhJ8fFsCCYuarKAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Bugs in Code",title:"Sonar Bugs in Code",src:"/ibm-garage-developer-guide/static/b7610342dab2ab560c3335808229a022/53d17/sonar-bugs-code.png",srcSet:["/ibm-garage-developer-guide/static/b7610342dab2ab560c3335808229a022/d6747/sonar-bugs-code.png 288w","/ibm-garage-developer-guide/static/b7610342dab2ab560c3335808229a022/09548/sonar-bugs-code.png 576w","/ibm-garage-developer-guide/static/b7610342dab2ab560c3335808229a022/53d17/sonar-bugs-code.png 795w"],sizes:"(max-width: 795px) 100vw, 795px",loading:"lazy"})),"\n    "))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In either issue, press the See Rule button."),Object(n.b)("p",{parentName:"li"},"  SonarQube displays the details of its “Overrides should match their parent class methods in synchronization” rule."),Object(n.b)("p",{parentName:"li"},"  Now you need to investigate to figure out why the code violates this rule."),Object(n.b)("p",{parentName:"li"},"  Want to see if you can track down the problem before seeing the solution?\nWhat to fix is pretty obvious—the Rule explains what to do—but tracking down why takes some effort."),Object(n.b)("hr",{parentName:"li"}),Object(n.b)("p",{parentName:"li"},"  Here’s the solution:"),Object(n.b)("p",{parentName:"li"},"  The error is not in the file’s parent class, ",Object(n.b)("inlineCode",{parentName:"p"},"ResettableHttpServletRequest"),", but in its embedded class, ",Object(n.b)("inlineCode",{parentName:"p"},"SimpleServletInputStream"),",\nwhich extends ",Object(n.b)("inlineCode",{parentName:"p"},"javax.servlet.ServletInputStream"),". The Javadocs for ",Object(n.b)("inlineCode",{parentName:"p"},"ServletInputStream")," show that it extends\n",Object(n.b)("inlineCode",{parentName:"p"},"java.io.InputStream"),". The ",Object(n.b)("a",r({parentName:"p"},{href:"http://physics.usc.edu/java/api/java.io.InputStream.html"}),"original Java 1.0 Javadocs"),"\nshow that these methods in InputStream are indeed synchronized:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",r({parentName:"pre"},{className:"language-java"}),"public synchronized void mark(int readlimit)\n. . .\npublic synchronized void reset() throws IOException\n")),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("a",r({parentName:"p"},{href:"https://docs.oracle.com/javase/7/docs/api/java/io/InputStream.html#mark(int)"}),"More recent Javadocs"),"\nhaven’t shown these signatures for years, but the compiler says the class is still defined that way.\nThere’s some debate about ",Object(n.b)("a",r({parentName:"p"},{href:"https://stackoverflow.com/questions/33525923/synchronized-methods-in-java-io-streams"}),"whether mark and reset really need to be synchronized"),". But SonarQube doesn’t judge, it just reports:\nSince the superclass defined the method signatures as synchronized,\nSonarQube is warning that the subclass is supposed to do so as well."))),Object(n.b)("h3",{id:"examine-the-other-issues"},"Examine the other issues"),Object(n.b)("p",null,"Besides the bugs, SonarQube also found issues that are hostspots and code smells."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"In the SonarQube dashboard, go back to the Issues page")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on the “1” above Security hotspots"),Object(n.b)("p",{parentName:"li"},"  The issue warns to “Make sure that command line arguments are used safely here.”"),Object(n.b)("p",{parentName:"li"},"  ",Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"739px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"23.00405953991881%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAABA0lEQVQY032Oy5KCMBBF+f+fm8VYoqIEJAFCiAPhISJyJuhqNtNVp25336ruGzjXUnUzu3Ig1D2RqomLGpFXHKQlUwVpmlLqCtf1NK2jcY5xmljWlRX+ELTeTHNDLKsPynBKSxJVkSQZiZCIRCGkJvEofSMrLdo6rJvITIese5RpUbYncMPIVxjzvTsQHi4czymHKGUfRoRHwW4fcREKqTTXrPSJffKTeD+5+gDnpOAkcmL/+CwNgZUKqy3N+ECWtU9bkZsbeXVD6pprUVGYH7KfO4Xt0KWhHWfPg2aYcF63vh0edPf5c3Dpe7Z6LQvLc2ZZnqyv11u33ca8bLPvvf9f/QKocnlHNCm2ZQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Sonar Hotspot",title:"Sonar Hotspot",src:"/ibm-garage-developer-guide/static/c5ea7b704606b3225dee7230c9b69c67/0f9cc/sonar-hotspot.png",srcSet:["/ibm-garage-developer-guide/static/c5ea7b704606b3225dee7230c9b69c67/d6747/sonar-hotspot.png 288w","/ibm-garage-developer-guide/static/c5ea7b704606b3225dee7230c9b69c67/09548/sonar-hotspot.png 576w","/ibm-garage-developer-guide/static/c5ea7b704606b3225dee7230c9b69c67/0f9cc/sonar-hotspot.png 739w"],sizes:"(max-width: 739px) 100vw, 739px",loading:"lazy"})),"\n    ")),Object(n.b)("p",{parentName:"li"},"  SonarQube considers any class that has a ",Object(n.b)("inlineCode",{parentName:"p"},"public static void main(String[] args)")," method to be a potential vulnerability.\nAs the rule explains, “Command line arguments can be dangerous just like any other user input. They should never be used without being first validated and sanitized.” This method passes them through unchecked, which is risky.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Back in the Issues page, click on “17” code smells"),Object(n.b)("p",{parentName:"li"},"   SonarQube found issues such as:"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Remove this unused import ‘java.lang.System.lineSeparator’.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Move constants to a class or enum.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"This block of commented-out lines of code should be removed."),Object(n.b)("p",{parentName:"li"},"None of these break your app’s functionality, but they do make the code more difficilt to maintain."))))),Object(n.b)("h2",{id:"conclusion"},"Conclusion"),Object(n.b)("p",null,"It’s a good idea to incorporate code analysis as part of your application development lifecycle,\nso you can use its findings to help enforce and improve your code quality.\nHere, the Developer Tools environment uses SonarQube, but you never had to run SonarQube.\nJust run the Developer Tools environment’s build pipeline on your app and it gets scanned automatically.\nAfter running the pipeline, open the SonarQube UI and browse the findings in your app’s project to figure\nout what code you ought to fix."))}p.isMDXComponent=!0},433:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},434:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},435:function(e,t,a){"use strict";a(32),a(28);var n=a(1),i=a(433),r=a(0),o=a.n(r),s=a(105),l=a.n(s),b=a(195),c=a(127),p=a(3),u=a.n(p),m=a(384),d=function(e){var t,a=e.title,i=e.tabs,r=void 0===i?[]:i;return Object(n.b)("div",{className:u()(m.pageHeader,(t={},t[m.withTabs]=r.length,t))},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12"},Object(n.b)("h1",{id:"page-title",className:m.text},a)))))},g=a(434),h=a(385),j=function(e){var t=e.relativePagePath,a=e.repository,i=g.data.site.siteMetadata.repository,r=a||i,o=r.baseUrl,s=r.subDirectory,l=o+"/edit/"+r.branch+s+"/src/pages"+t;return o?Object(n.b)("div",{className:"bx--row "+h.row},Object(n.b)("div",{className:"bx--col"},Object(n.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},O=a(193),N=(a(59),a(26)),y=a(386);var f=function(e){var t,a;function i(){return e.apply(this,arguments)||this}return a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,i.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=l()(e,{lower:!0}),o=r===i,s=new RegExp(i+"(?!-)"),b=a.replace(s,r);return Object(n.b)("li",{key:e,className:u()((t={},t[y.selectedItem]=o,t),y.listItem)},Object(n.b)(N.Link,{className:y.link,to:""+b},e))}));return Object(n.b)("div",{className:y.tabsContainer},Object(n.b)("div",{className:"bx--grid"},Object(n.b)("div",{className:"bx--row"},Object(n.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(n.b)("nav",null,Object(n.b)("ul",{className:y.list},r))))))},i}(o.a.Component),v=a(194);t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,o=e.Title,s=t.frontmatter,p=void 0===s?{}:s,u=t.relativePagePath,m=t.titleType,g=p.tabs,h=p.title,N=p.theme,y=p.description,A=p.keywords,w=i.data.site.pathPrefix,S=w?r.pathname.replace(w,""):r.pathname,k=g?S.split("/").slice(-1)[0]||l()(g[0],{lower:!0}):"";return Object(n.b)(c.a,{homepage:!1,theme:N,pageTitle:h,pageDescription:y,pageKeywords:A,titleType:m},Object(n.b)(d,{title:o?Object(n.b)(o,null):h,label:"label",tabs:g}),g&&Object(n.b)(f,{slug:S,tabs:g,currentTab:k}),Object(n.b)(v.a,{padded:!0},a,Object(n.b)(j,{relativePagePath:u})),Object(n.b)(O.a,{pageContext:t,location:r,slug:S,tabs:g,currentTab:k}),Object(n.b)(b.a,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-code-analysis-index-mdx-9bffaac2415867435f4a.js.map