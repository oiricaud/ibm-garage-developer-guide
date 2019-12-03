(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{389:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return m}));t(11),t(5),t(6),t(4),t(10),t(1),t(0);var i=t(106),r=t(435);function n(){return(n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var o={},c=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",a)}},p=c("PageDescription"),s=c("ArtDirection"),b=c("Row"),l=c("Column"),g={_frontmatter:o},d=r.a;function m(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,["components"]);return Object(i.b)(d,n({},g,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)(p,{mdxType:"PageDescription"},Object(i.b)("p",null,"Complete the steps for setting up the Artifactory tool")),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"Artifactory is the ",Object(i.b)("a",n({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/artifact-management"}),"Developer Tools environment’s artifact repository manager"),".\nBefore you can use it as part of the ",Object(i.b)("a",n({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration"}),"continious integration pipeline"),",\nit first must be configured as part of the environment."),Object(i.b)("h2",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"Set up Artifactory in the Developer Tools environment with a Helm repository.\nAlso, set up the Developer Tools environment to access Artifactory."),Object(i.b)("h3",{id:"set-up-artifactory"},"Set up Artifactory"),Object(i.b)("p",null,"Create a repository in Artifactory for storing Helm charts."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Open the Artifactory dashboard from the ",Object(i.b)("a",n({parentName:"li"},{href:"/ibm-garage-developer-guide/getting-started/dashboard"}),"Developer Tools Dashboard")," and login")),Object(i.b)("p",null,"The first time you log into Artifactory, it is unconfigured and displays its Onboarding Wizard, starting with the Welcome page."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Press ",Object(i.b)("strong",{parentName:"p"},"Next")),Object(i.b)(s,{mdxType:"ArtDirection"},Object(i.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"998px"}}),"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.51503006012024%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABI0lEQVQoz6VT2U7EMAzM/38d4o3y2Bva3On2nmUitYIt3V2EpZEjx5567FT0fY9hGDCO4+632DRNWNcV92y7X5YF8zxDpGmKqqpQ13X0RVEgy7KIpmn2omchrLWQUkJrHWGMiWDce48QwtNkNMECgsXOOVwul+gpmzKI79Juz7fyBQ8kOzPO9DeCU8kcfJ7ncQEEO+LFNE+RjHNlt9uCGOM49k7Xnx0LEjChbVpII+G8Q/AByimE7strFe+3WTK/67pT+SJ+0VkkSQLtNMqqjJs21qCVLaqyQpqlUFLhpX7Fh/6ENx5v8h21rw+kgu+NHWijMQ5j7IRkjHFBBCUzrqyKC+PMfe/Rj/1hngL/tIPkvzzae9iWKR491O2XepTHXTDvCp2srUwSFWwIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/014455c6ba4154e101f91b3a90aa69cc/fe462/initialjfrog.png",srcSet:["/ibm-garage-developer-guide/static/014455c6ba4154e101f91b3a90aa69cc/d6747/initialjfrog.png 288w","/ibm-garage-developer-guide/static/014455c6ba4154e101f91b3a90aa69cc/09548/initialjfrog.png 576w","/ibm-garage-developer-guide/static/014455c6ba4154e101f91b3a90aa69cc/fe462/initialjfrog.png 998w"],sizes:"(max-width: 998px) 100vw, 998px",loading:"lazy"})),"\n    ")))),Object(i.b)("p",null,"The next page in the wizard is the Configure a Proxy Server page. This is to setup a proxy for external resources. You can skip this\nstep."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Press ",Object(i.b)("strong",{parentName:"p"},"Skip")),Object(i.b)(s,{mdxType:"ArtDirection"},Object(i.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"996px"}}),"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.730923694779115%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAAAxElEQVQoz5VT0Q6DIAzs/3+jDwajybLHqaAotxxLF50IrMkFQq9H27SCAOz7jnVdI7z3XyzLEn20EMItaORt2wZ5vJ4YxxFt26JpGgzDgL7vYYxB13WY5/kimDL1ifMuKjPQWhvhnMM0TafsUsGpTMXZj+DdrxQltA3k5soX9o2kHLTH7ClFcyZKyJWhwqWSY4YalCNp2TnOqWRmWRtQFKxp9F+CteNw936ZQ1RYaZiPfjmu3O9dTw76cS31rotAcKT4/gaUV7Uo2beEEwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/52089e8b4ff8332c954e639dfe2cf129/4b957/setupproxy.png",srcSet:["/ibm-garage-developer-guide/static/52089e8b4ff8332c954e639dfe2cf129/d6747/setupproxy.png 288w","/ibm-garage-developer-guide/static/52089e8b4ff8332c954e639dfe2cf129/09548/setupproxy.png 576w","/ibm-garage-developer-guide/static/52089e8b4ff8332c954e639dfe2cf129/4b957/setupproxy.png 996w"],sizes:"(max-width: 996px) 100vw, 996px",loading:"lazy"})),"\n    ")))),Object(i.b)("p",null,"The next page in the wizard is the Create Repositories page. Since Artifactory doesn’t have a specific package type for Helm charts,\ncreate a repository for storing generic artifacts."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Select ",Object(i.b)("strong",{parentName:"p"},"Generic"),", then press ",Object(i.b)("strong",{parentName:"p"},"Create")),Object(i.b)(s,{mdxType:"ArtDirection"},Object(i.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"997px"}}),"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.37211634904714%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABeElEQVQoz21S227DMAjN/3/aXqe9bVLbSZW65h7Hd4edQ5Iq64qEMDaGw4HKey+t6WQYBzmfz3I6nR56u90kpSQhBNUYIzRJzlkoywKVTeFQKwYxwDknbddK267a973qva6laRrVGmdrrSbWNFuS/UypiGCvdpRnf5e8oSoIyGVRm3J52Irovn++0FoQY3tcBpmN0c9v7x/yeblID8TX61U8uqjbXmkYxkliymLmWQIs/YQCVYYz+1EvZzeK8VYCeHUhSjeM0o1GDAo0SBSRyIHLUooEtE1EIazWwxKxcug9NGaxs0PSgAcEoEDCW8AQiILJnfNyb1qlw+KcyL3HsNKaMLLllCIenSJKioBTLIqYvofPj4oA94wrQMJCyl3JOhSi1qGQwwktMZCTtrDTNIFPp5zNQJK3hAlFLBCxgAUtbFG2ldmtTlmzL8s/u6/EvmNHLdsuPku17pT8CX72WYC8vorhf4La9/mwh6+RHN9eFWYxLYhktL9vV151Yz4bawAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/6cc5b10f388f9ed2c41ee3013c0e013b/7456b/createrepository.png",srcSet:["/ibm-garage-developer-guide/static/6cc5b10f388f9ed2c41ee3013c0e013b/d6747/createrepository.png 288w","/ibm-garage-developer-guide/static/6cc5b10f388f9ed2c41ee3013c0e013b/09548/createrepository.png 576w","/ibm-garage-developer-guide/static/6cc5b10f388f9ed2c41ee3013c0e013b/7456b/createrepository.png 997w"],sizes:"(max-width: 997px) 100vw, 997px",loading:"lazy"})),"\n    ")))),Object(i.b)("p",null,"The next page in the wizard is the Onboarding Complete page. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Press ",Object(i.b)("strong",{parentName:"p"},"Finish")),Object(i.b)(s,{mdxType:"ArtDirection"},Object(i.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"997px"}}),"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.47241725175526%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAArElEQVQoz6VS2QrEIBDz/7/SYgXpg9TjxXOWCErZ7halA9FRYzIeLMZIyhxkjKFt20gIQUopklKOMXLOOTnn6DtqraMHWCmFcsmNjI37vg9gDEHkWmuy1jZj733LfxmwnqBSEEEC+gYA813kPE9yF8Fe2agwhNDcU0pNdDVugmhyzreFWfw98pPrCtjV6Y3QEFy5pxkOW7mnGc6UYPurDw+HwC8B5/WR+zxMgQ8BC2KOmeZoeQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/0fd1690345269ad3ca1af857aeadda9b/7456b/completejfrog.png",srcSet:["/ibm-garage-developer-guide/static/0fd1690345269ad3ca1af857aeadda9b/d6747/completejfrog.png 288w","/ibm-garage-developer-guide/static/0fd1690345269ad3ca1af857aeadda9b/09548/completejfrog.png 576w","/ibm-garage-developer-guide/static/0fd1690345269ad3ca1af857aeadda9b/7456b/completejfrog.png 997w"],sizes:"(max-width: 997px) 100vw, 997px",loading:"lazy"})),"\n    ")))),Object(i.b)("h3",{id:"allow-anonymous-access-to-artifactory"},"Allow Anonymous Access to Artifactory"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open the Artifactory dashboard from the ",Object(i.b)("a",n({parentName:"p"},{href:"/ibm-garage-developer-guide/getting-started/dashboard"}),"Developer Tools Dashboard")," and login")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Click on the ‘Admin’ icon at the bottom of the left nav then select ‘Security Configuration’ from the top of the middle column of the menu\n",Object(i.b)("span",n({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"82.92134831460673%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAACL0lEQVQ4y51TSW7cMBDUf+zxiDupbUaxxzGCALl5CSbOAiRI3uVrgOTg/1W6KFEQ4PElhwLFZnWxupuqbn8/4PjnET+ef+H78088/v2Cw9MNrp7e/heqw7drHL5eYzyOGD7uMuJdQrxPSPfNq8icE6gaJ4cmwmwN9EZDnddgrI89kk0IKiDoAKe8QFb5TnLua4f6rIY6U9DnSvKmtUptQtd3aNoGIYmwc3l/eXWZYz6IkGDoW4yCxlu00QvPIgo/NQnGmgVVSglNIy5jhBcoF+Q75Ji1FsoYRFXjc6hxbB0eosYnu8GbeoPQtugERjjkcq26rgNBwRCCBHVevfdQSsoQktcKH7zGO6dwY7Z4ry/QySVWOEnyKKa1ngT7vkcrt1CE4AH3wzBkAqEk5hsptx+wNRYXEqslxup2ux2oUbgVEwknvcvJ4oruiHIr1yiXtdIGL70zstezIHOnymbB4mwtQuI4jhKf9sTEY49jbgNj5NOImjlEVYSIchP7yZvbrl/aYNl4H1CLIB1ShINbl5sdFqG14JQsTtw0pOzQO4SmQ+3lmciQikNWY4LA2JclF0HP5NhkN0t5IWTnmhNdlcwBWil7mfJpQfnms7FuSWaveF7LH5RjMjyKsdfrAZ4UzDGSWLaZpprb4HiJX6ZMHksuA3lVkA/V8eXTocCspmjmRDU73O/3eS3P68WUy6tfC+jVFMt3aQP7SiyCxWHB+jdaBGbRBasHT6f5F51j/wCrZTh2Ii8YVQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Security Configuration",title:"Security Configuration",src:"/ibm-garage-developer-guide/static/515b80ce1ff99b15ff7d9dc7594a9d6b/fb070/artifactory-admin-pane.png",srcSet:["/ibm-garage-developer-guide/static/515b80ce1ff99b15ff7d9dc7594a9d6b/d6747/artifactory-admin-pane.png 288w","/ibm-garage-developer-guide/static/515b80ce1ff99b15ff7d9dc7594a9d6b/09548/artifactory-admin-pane.png 576w","/ibm-garage-developer-guide/static/515b80ce1ff99b15ff7d9dc7594a9d6b/fb070/artifactory-admin-pane.png 1152w","/ibm-garage-developer-guide/static/515b80ce1ff99b15ff7d9dc7594a9d6b/fb104/artifactory-admin-pane.png 1728w","/ibm-garage-developer-guide/static/515b80ce1ff99b15ff7d9dc7594a9d6b/1e020/artifactory-admin-pane.png 1780w"],sizes:"(max-width: 1152px) 100vw, 1152px",loading:"lazy"})),"\n    "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Check the ",Object(i.b)("inlineCode",{parentName:"p"},"Allow Anonymous Access")," check box and press ",Object(i.b)("inlineCode",{parentName:"p"},"Save")))),Object(i.b)("h3",{id:"obtain-encrypted-password"},"Obtain encrypted password"),Object(i.b)("p",null,"To enable the CI pipelines (",Object(i.b)("a",n({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration"}),"Jenkins"),", ",Object(i.b)("a",n({parentName:"p"},{href:"/ibm-garage-developer-guide/guides/continuous-integration-tekton"}),"Tekton"),", etc.) to store the Helm artifacts in the Artifactory repository, we need to obtain\nArtifactory’s encrypted password and store this where the pipeline can access it—in the ",Object(i.b)("inlineCode",{parentName:"p"},"artifactory-access")," Kubernetes secret in the ",Object(i.b)("inlineCode",{parentName:"p"},"tools")," namespace in the Development Tools environment."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the Artifactory console, press the ",Object(i.b)("strong",{parentName:"p"},"Welcome, admin")," menu button in the top right corner of the console and select ",Object(i.b)("strong",{parentName:"p"},"Edit profile"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the User Profile: admin page, enter you Artifactory password and press ",Object(i.b)("strong",{parentName:"p"},"Unlock")),Object(i.b)(s,{mdxType:"ArtDirection"},Object(i.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"784px"}}),"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"65.81632653061224%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB0klEQVQ4y5WSTWvUQBjH59u4r+xNRT2JN8GLiBQsLHgXofgVxFubraelUPalJ196k3qwIBW/gEJFsC10C3a3u9lmkkkymeTvzLNJSNeu1IEfzzzz8s//eSbs4ZvHePRuCUtvn2D5fRPL203c33qAmxt3cKN9G9fbt/4LdvfZPax0XqD9dQPW7jrWPrWwumvh5c4rrH620PryGtbeOqwsatb2WoSZ034BVrtWw2Z7E8IRGBwNcHx4jNPBKU4OT6CEAmIAkUalmDwbydyehtXqNfT6Pdr3fIFQhohURLmJMpKQSlL0gxA84Ngf/cC3398xdIezc3EEFSuCVSoVdDod2gjDEHEcI0kSIjeSzu2pwK/RAZ5/XEFz+yk+/NyhdZWo/CyrVqvo9bqUONyDyzm4xnEcilxHN81NNAjXI1QUIZqD1et1bOmSpRacnHOcT6ewbRv2ZILJeExMdT4+O5utpetjTRAEkLqqIqzRaKDf789K0hddT7t0XTp8lZG1J+OC4HA0otI8LSqE+KscQ9bjYq8vCJbL5fxRjJBxZvB9n0TnUUr90zErlUq5oLlgXlpKeenXrwIJdrvdvIc8feXL3BUdFn+rhQ6NO3NhEaaHmdAiwT+vC5f86lNYPAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/b911b52eaaca02fcf025e6944561419c/b3092/jfrogapikey.png",srcSet:["/ibm-garage-developer-guide/static/b911b52eaaca02fcf025e6944561419c/d6747/jfrogapikey.png 288w","/ibm-garage-developer-guide/static/b911b52eaaca02fcf025e6944561419c/09548/jfrogapikey.png 576w","/ibm-garage-developer-guide/static/b911b52eaaca02fcf025e6944561419c/b3092/jfrogapikey.png 784w"],sizes:"(max-width: 784px) 100vw, 784px",loading:"lazy"})),"\n    ")))),Object(i.b)("p",null,"Below, in the ",Object(i.b)("strong",{parentName:"p"},"Authentication Settings")," section, is the ",Object(i.b)("strong",{parentName:"p"},"Encrypted Password")," field."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Press the ",Object(i.b)("strong",{parentName:"p"},"Eye")," icon to view the encrypted password and press the ",Object(i.b)("strong",{parentName:"p"},"Cut & Paste")," icon to copy it"),Object(i.b)(s,{mdxType:"ArtDirection"},Object(i.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"550px"}}),"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.454545454545446%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAAuElEQVQoz5WRiQqEMAxE+/+fKYi3iPc9yyukqMiyG3iQtE0607p93zWOo6Zp0jzPIs7z1HEct/wNC84YjoFFUSjLMuV5rjRNfQ1JkqiqKg3DoL7vA13Xib44jhVFURhKOBKUofAKqhlEvq6rlmXxWI7Ctm3VNM1NpWNj27Ybdtu/ESzXde0tYq8sS1+bujdQj0p6EcBasIxCe5crrNH4Bpdh3WoEMDy84TcL/+x5y89vv/LLmz3PfwCY9XOdnlac2wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/a9126a60fc81ab00711dd5e2212845b5/eb858/viewapikey.png",srcSet:["/ibm-garage-developer-guide/static/a9126a60fc81ab00711dd5e2212845b5/d6747/viewapikey.png 288w","/ibm-garage-developer-guide/static/a9126a60fc81ab00711dd5e2212845b5/eb858/viewapikey.png 550w"],sizes:"(max-width: 550px) 100vw, 550px",loading:"lazy"})),"\n    ")))),Object(i.b)("p",null,Object(i.b)("a",n({parentName:"p"},{href:"https://kubernetes.io/docs/concepts/configuration/secret/#creating-a-secret-manually"}),"Kubernetes secrets"),"\nstore data in base64 format. So to store Artifactory’s encrypted password in a secret, it needs to be encoded into base64."),Object(i.b)("p",null,"Any base64 encoding tool will work. For example:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Go to the ",Object(i.b)("a",n({parentName:"p"},{href:"https://www.base64encode.org/"}),"Base64 Encode")," website")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Paste the encrypted password into the online tool and press the ",Object(i.b)("strong",{parentName:"p"},"Encode")," button")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the field below, copy the encoded value into you clipboard or store it somewhere safe"))),Object(i.b)("h3",{id:"update-the-kubernetes-secret"},"Update the Kubernetes secret"),Object(i.b)("p",null,"Store the base64 encrypted password for Artifactory in the Kubernetes secret for accessing Artifactory."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Open your Development Tools environment’s Kubernetes Console or OpenShift Console")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Navigate to the ",Object(i.b)("inlineCode",{parentName:"p"},"tools")," namespace and ",Object(i.b)("inlineCode",{parentName:"p"},"secrets")," view")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Find the secret named ",Object(i.b)("inlineCode",{parentName:"p"},"artifactory-access")," and open it in the Edit view"))),Object(i.b)(b,{mdxType:"Row"},Object(i.b)(l,{colMd:4,colLg:5,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)("h2",{id:"openshift"},"OpenShift"),Object(i.b)(s,{mdxType:"ArtDirection"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"593px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"130.86003372681284%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAAsSAAALEgHS3X78AAADRElEQVRIx6VVWZKbSBTU8XzDOcL8zAl8gYnwx4zD0rglgST2HQESi1hz8pWabmx3d9htIjJeAUVWvpWVGST46iTYuwlOQQrPdbHdbmFZFvI8x/l8RpZlCkmSKKRp+ipWLgkOhwNM04JJEtu2cTqdYBiGWjuOw3emWr9F9EQoH+i6DoMkx+NREckB8kwga03TlI3jWGFW+hJW86aACM8pEnGRqKoK5bUkrmpdlSUulwuuvJdQvIZVEAQqbjviJKfzo4wo2xY10XQdytsNNe2NVkjfulZBGEJIi/IKI01gUPYxifHge7QJTKrW+F5nfLW9hvVmoxLW8QC5pmn6BorQ9zzElPvZsfGFMV27Dv4xDaw1HV/WaxgksJgYcVdUlnR/GIYF4TOxSopk1UkKbFk2/zkhNm6EfZjhaAb4vNnB5P2Jzw+mD4Prg+Vjf7SxIww3RkmxRTPi0kz3GNpUsKfKreuxdByqmN0BxhHo+oEuDuhph2GkHdX61nZou17tGcZJ4U7IGivojpWdEVxzFHWJduDmsUM/degmWbfK3oZWoe27RSqm56T4vq+CfLs1zHCFr/oFGz3HwymD5dbQjw12eo2tVkE71NBOtMcaNt8l0Yg4BM7phEtOFFToU6HEsWCgHbZXWlTIK5ZH3aCpgDxhfM5AWdxB8ZjGO8TVvqerzM/4CEUoCpumUSXjhLz3XKpzULUkHW50ny62LPSq4L5q4eb0gsuPMexYxBGLVo8iaCS12ZcWYcYJgjBiS5oKZVl9V3/L0lExvBNe2V4mCWzPh77f3/v5oLENE0UgdScfvlTMy+cqKVI250d1Bgv9yANCqiqygb084WeumVQRukxKWTNzHAoOceK9zd7ebwNsH2y2pg/ZN0PGlEwWmZVipYN+UBgwwzZVrdlqFmejZN7zHSbsPhcF84xsGW9pwRnLvlYxlCF7YQz7vld9+p7ryWXplIixk1OXL0cW2dJ+v34NT4S3R8L5pPcovLtMwpCEUtizil/FNwM2iUKkUYCYVjImakOWjrJvIFrY5Z9x9cffBj78ucPHjQmPGXW957J4D1afdA9//WvhwXBZjzYkBDPhz/w2f/iNXrMUDcdJzlko0n+HTPA/qv27kQhTQ3YAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/3ca5efbb57620c3b50e2c1fb0cca1ce9/02456/addkeytosecret.png",srcSet:["/ibm-garage-developer-guide/static/3ca5efbb57620c3b50e2c1fb0cca1ce9/d6747/addkeytosecret.png 288w","/ibm-garage-developer-guide/static/3ca5efbb57620c3b50e2c1fb0cca1ce9/09548/addkeytosecret.png 576w","/ibm-garage-developer-guide/static/3ca5efbb57620c3b50e2c1fb0cca1ce9/02456/addkeytosecret.png 593w"],sizes:"(max-width: 593px) 100vw, 593px",loading:"lazy"})),"\n    "))),Object(i.b)(l,{colMd:4,colLg:6,noGutterMdLeft:!0,mdxType:"Column"},Object(i.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(i.b)(s,{mdxType:"ArtDirection"},Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"692px"}},"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.71098265895954%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACy0lEQVQ4y6VVaXfaQAzk//+yJm36mqY5iAHbgG/jY9f3NZVkCKGhzYfC01ux3h0dMzIL3/ex3W7hOA7Yn6bpg332OR0ZxwmLoihQlqVYXdVXL4zT+GanIO/9c2ACrOsaWmu5WHUVQhUiKzMUTYG0TJFXOYZxEPs8UwJUSsF1XYzDiEhHePGW2EQmkiKBEa5gxhZ2yZ5sh+1hCzfz4KQO9umezJFznATf7YYOC85ut9sJYKACLAnQCFa4s7/j0XnEJjRxa37FzeYWq2ANjwC3R3A/9zEMA/qhF7CmbbDI8xy2bWOihiZU4iY24aYuwjxCrGM0XYOsyihYSC3IoGolphtNJIwXJYdhOAOapimAVVvhfncvYPvEkdLczIWqNNq+lUy4lxyk7mo0tHdSAa8XgByNDz+5z1Lyg/MLS/8VNpX27L3AiiwEeSD9NAJDVlWp64CsQ+5F27WSEbPLLHu5h7g4SN/4N1+a+9WzQv6g+F3J6/VaSIlVjHW4oXL3wlyiEilNGk5lctlNf175WU37Xd9JIM/3sMiyDJZlYehntphpzooJCfIQB/LzOpeV91keSZmIcQt4X9da+r/39jOguTGhtEKqU/zPJwqjIyCR0vc9Cdkg7T1h5a/hUC9Z5CJoMhYyk2PHNiIV4ZWI4eenSXojhQFZh9zUeVJeiN0lVjQlP0hCfNEhXXJ5EbWBy2OGWVIWgfNaNtVZhwxoGIZsWAdbpuKbdSey+bK5wc/9A9zEJbLWAsSMswquzfEbIMuGXxKcPpPBmXDTDzSnzCiTwRly46+9aT4Asmx0oUUqzHSsD8L2v9590xFEvtPsB0GARVVVSFKSgB9IhJMFYSAmPh1kYz+KyI5n2J/PB1B5hq6jtw2z+74Pc8RzGRdZkRPlA5Ewl5xqGlcaiDDOYdgHFGWFBaNeXp7++jfAa93y+M17XT+vddNCFY1k+Bv0zv6bfnQNJgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/a4ea4/kubeaddkeytosecret.png",srcSet:["/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/d6747/kubeaddkeytosecret.png 288w","/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/09548/kubeaddkeytosecret.png 576w","/ibm-garage-developer-guide/static/9009e7556533e550cad822e1113147c9/a4ea4/kubeaddkeytosecret.png 692w"],sizes:"(max-width: 692px) 100vw, 692px",loading:"lazy"})),"\n    ")))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Find the ",Object(i.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRPT")," value (under ",Object(i.b)("inlineCode",{parentName:"p"},"data"),") and paste in the Artifactory base64 key into the field")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Press ",Object(i.b)("strong",{parentName:"p"},"Save")," in OpenShift Console or ",Object(i.b)("strong",{parentName:"p"},"Update")," in Kubernetes Dashboard")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"View the secret in the console and confirm that the visible value of ",Object(i.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRPT")," matches the encrypted password shown in the Artifactory console"))),Object(i.b)("h2",{id:"rerun-the-pipeline"},"Rerun the Pipeline"),Object(i.b)("p",null,"Previously, when you deployed you first app, the pipeline’s Package Helm Chart stage didn’t store the chart because\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRPT")," property was not set. Now that it is set, rerun your pipeline and check that the Helm chart for you app is stored correctly in Artifactory with matching semantic version information."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In the Artifactory console, select the Artifacts page and expand the ",Object(i.b)("inlineCode",{parentName:"p"},"generic-local")," repository"),Object(i.b)(s,{mdxType:"ArtDirection"},Object(i.b)("span",n({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"461px"}}),"\n      ",Object(i.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.67895878524945%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAACcUlEQVQ4y42SS08TURTH59tAQ0LaBQtrdKfBSJCAaDTo0hBXKvKQhxu/Q1vABYnEJrIykZf4ASQmtbVEZ8ZUwIpQ2pm203lPp3/uue00wEI8yS//c++ZOfecc69wO3kXN9/0497KCPqXBzCUvIP7Kw8wmBzGwNsh9C3fwrWlXlxfusHovRBhdP0xBt8NY2x9HNNbs3iy9gzPNybwdG2M+4/ejyK6cAXRxSaXAr+ll19fPYPQ96ofI4sPMfNpDrNbL/FicwZTG9OY+TjHDpjjSvukp33S6c1ZjH+YxMTqFMZXJxlTECLhCBYSCygVStj+vI10Kg35h4zM1wz3d77tIJvOQvouQmSkvqS4ZlIZ5H7m4DkeHMuBa7kcoaurC4lEApVKBbIkQ5Ik7O7tYv/3PrLZLERJhCRLnFwuB1mWOaIoIp/Pw3ZsGKYBw2giRCIRxGNxkKmWCs/3YOjNoN/wcZFRIbquo1QqoVwuQwiHw4jFYs2gXoFpmajVahzbtuF5Xhvf98/QaDTgOA6PkaqqCqGjo4O3TGZbNq9M0zSU2cnVapVXQB+SUoLzBFZnB/AKaYbz8/N802Sz0FllGktksDYIh83of6wRJAyFQki0Eio1A8WKhvzRMQ5LKvKFIg6KCo7ZXqHMqjUtaLbLcM7homraUKjlnp4exONx0PiLmsH5U1Tx6+CIs/v3CHuHBa7Hmg6V/agaFsM+g6KbzYSdnZ3tluv1ensulmXBNFojYDP1/fo/W/aDlqPRaPtSgpskpSBdiqIo/EIoKa0Damy+tdZh9GzaCbu7u9sJgwopSM/AdV1eKT0fWpOeXlOcfCJIeAJmGrbOjnlWHwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Artifact Repository Browser",title:"Artifact Repository Browser",src:"/ibm-garage-developer-guide/static/7cd9f3dbab5aeaaca46ee596e9e80f02/504c6/artifact-repo-browser.png",srcSet:["/ibm-garage-developer-guide/static/7cd9f3dbab5aeaaca46ee596e9e80f02/d6747/artifact-repo-browser.png 288w","/ibm-garage-developer-guide/static/7cd9f3dbab5aeaaca46ee596e9e80f02/504c6/artifact-repo-browser.png 461w"],sizes:"(max-width: 461px) 100vw, 461px",loading:"lazy"})),"\n    ")))),Object(i.b)("p",null,"You will see a folder named after your resource group containing the tar file for a Helm chart."),Object(i.b)("h2",{id:"conclusion"},"Conclusion"),Object(i.b)("p",null,"Artifactory is now set up in your Developer Tools environment and CI pipelines can store Helm charts in Artifactory repository. "))}m.isMDXComponent=!0},433:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":"/ibm-garage-developer-guide"}}}')},434:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"","subDirectory":"","branch":"master"}}}}}')},435:function(e,a,t){"use strict";t(32),t(28);var i=t(1),r=t(433),n=t(0),o=t.n(n),c=t(105),p=t.n(c),s=t(195),b=t(127),l=t(3),g=t.n(l),d=t(384),m=function(e){var a,t=e.title,r=e.tabs,n=void 0===r?[]:r;return Object(i.b)("div",{className:g()(d.pageHeader,(a={},a[d.withTabs]=n.length,a))},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12"},Object(i.b)("h1",{id:"page-title",className:d.text},t)))))},A=t(434),u=t(385),f=function(e){var a=e.relativePagePath,t=e.repository,r=A.data.site.siteMetadata.repository,n=t||r,o=n.baseUrl,c=n.subDirectory,p=o+"/edit/"+n.branch+c+"/src/pages"+a;return o?Object(i.b)("div",{className:"bx--row "+u.row},Object(i.b)("div",{className:"bx--col"},Object(i.b)("a",{className:u.link,href:p},"Edit this page on GitHub"))):null},y=t(193),h=(t(59),t(26)),j=t(386);var O=function(e){var a,t;function r(){return e.apply(this,arguments)||this}return t=e,(a=r).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,r.prototype.render=function(){var e=this.props,a=e.tabs,t=e.slug,r=t.split("/").filter(Boolean).slice(-1)[0],n=a.map((function(e){var a,n=p()(e,{lower:!0}),o=n===r,c=new RegExp(r+"(?!-)"),s=t.replace(c,n);return Object(i.b)("li",{key:e,className:g()((a={},a[j.selectedItem]=o,a),j.listItem)},Object(i.b)(h.Link,{className:j.link,to:""+s},e))}));return Object(i.b)("div",{className:j.tabsContainer},Object(i.b)("div",{className:"bx--grid"},Object(i.b)("div",{className:"bx--row"},Object(i.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(i.b)("nav",null,Object(i.b)("ul",{className:j.list},n))))))},r}(o.a.Component),N=t(194);a.a=function(e){var a=e.pageContext,t=e.children,n=e.location,o=e.Title,c=a.frontmatter,l=void 0===c?{}:c,g=a.relativePagePath,d=a.titleType,A=l.tabs,u=l.title,h=l.theme,j=l.description,w=l.keywords,v=r.data.site.pathPrefix,k=v?n.pathname.replace(v,""):n.pathname,x=A?k.split("/").slice(-1)[0]||p()(A[0],{lower:!0}):"";return Object(i.b)(b.a,{homepage:!1,theme:h,pageTitle:u,pageDescription:j,pageKeywords:w,titleType:d},Object(i.b)(m,{title:o?Object(i.b)(o,null):u,label:"label",tabs:A}),A&&Object(i.b)(O,{slug:k,tabs:A,currentTab:x}),Object(i.b)(N.a,{padded:!0},t,Object(i.b)(f,{relativePagePath:g})),Object(i.b)(y.a,{pageContext:a,location:n,slug:k,tabs:A,currentTab:x}),Object(i.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-admin-artifactory-setup-index-mdx-4a368c3d6663edb9d0be.js.map