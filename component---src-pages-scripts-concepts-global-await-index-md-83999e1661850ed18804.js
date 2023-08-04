"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[4244],{20211:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return m}});var o=t(87462),a=t(45987),i=(t(15007),t(64983)),l=t(91515);const r=["components"],s={},d={_frontmatter:s},u=l.Z;function m(e){let{components:n}=e,t=(0,a.Z)(e,r);return(0,i.mdx)(u,(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"global-await"},"Global await"),(0,i.mdx)("p",null,"Global await is the way to handle asynchronous operations inside a UXP Script. "),(0,i.mdx)("p",null,"First, let's understand asynchronous behavior. Asynchronous tasks are non-blocking in nature, which means it doesn’t block further execution while one or more operations are in progress. "),(0,i.mdx)("p",null,"For example, texting or emailing a friend. Once you send a message, you can continue to do other tasks. You don't necessarily have to wait for a response but it's assured that you will be informed/notified when you receive a reply."),(0,i.mdx)("p",null,"Now, let's look at some code with asynchronous behavior. In the following example, ",(0,i.mdx)("inlineCode",{parentName:"p"},"foo")," returns a value after a brief delay of 2s. The delay in the example below is simulated with the help of ",(0,i.mdx)("inlineCode",{parentName:"p"},"settimeout")," but in the real world, it could be because of anything, such as a network call to fetch some data."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'console.log("Start of execution.");\n\nfunction delayedFoo(text) {\n    setTimeout(() => {\n      console.log("Greetings: Hello",\n    }, 2000);\n}\ndelayedFoo();\n\nconsole.log("End of execution.");\n')),(0,i.mdx)("p",null,"You might expect the output of the above code to be"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"Start of execution\nGreetings: Hello\nEnd of execution\n")),(0,i.mdx)("p",null,"However, the actual output would be something like this"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"Start of execution\nEnd of execution\n")),(0,i.mdx)("p",null,"What happened to the console.log inside ",(0,i.mdx)("inlineCode",{parentName:"p"},"settimeout"),"? Why is it not visible? It is because\nyour script was no longer alive. UXP scripts expect your code to be synchronous."),(0,i.mdx)("p",null,"To make it work, we need to make the thread ",(0,i.mdx)("em",{parentName:"p"},"wait")," for the async task to finish before continuing with the next statement. We can attain this by using ",(0,i.mdx)("inlineCode",{parentName:"p"},"Promise")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"await"),". (Familiarize yourself with the concepts of ",(0,i.mdx)("a",{parentName:"p",href:"https://javascript.info/promise-basics"},"promise")," if you are not already) "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},'console.log("Start of execution.");\n\nasync function delayedFoo() {\n    let prom = new Promise((resolve, reject) => {\n        setTimeout(() => {\n            console.log("Greetings: Hello");\n            resolve();\n        }, 2000);\n    });\n    return prom;\n}\nawait delayedFoo();\n\nconsole.log("End of execution.");\n')),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"Start of execution\nGreetings: Hello // after a delay of 2s\nEnd of execution\n")),(0,i.mdx)("p",null,"Let's go over the changes in detail:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The await in front of ",(0,i.mdx)("inlineCode",{parentName:"li"},"delayedFoo()")," is referred to as global await. It keeps the UXP Script waiting for an async task to complete at a global scope. "),(0,i.mdx)("li",{parentName:"ul"},"You are allowed to have as many global awaits as you would like, but keep in mind that each ",(0,i.mdx)("inlineCode",{parentName:"li"},"await")," halts the execution, waiting for the async task to finish before moving on."),(0,i.mdx)("li",{parentName:"ul"},"Returning a promise from the async function lets you resolve the value at a later point in time."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"resolve"),"-ing a promise is important once the asynchronous task is complete. So that the script can continue to execute the next line.")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-scripts-concepts-global-await-index-md-83999e1661850ed18804.js.map