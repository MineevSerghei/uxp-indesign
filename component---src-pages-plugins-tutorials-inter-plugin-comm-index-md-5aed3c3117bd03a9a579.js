"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[7441],{93529:function(n,e,a){a.r(e),a.d(e,{_frontmatter:function(){return s},default:function(){return c}});var i=a(87462),l=a(45987),t=(a(15007),a(64983)),o=a(91515);const m=["components"],s={},r=(d="CodeBlock",function(n){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.mdx)("div",n)});var d;const u={_frontmatter:s},p=o.Z;function c(n){let{components:e}=n,a=(0,l.Z)(n,m);return(0,t.mdx)(p,(0,i.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"inter-plugin-communication"},"Inter Plugin Communication"),(0,t.mdx)("p",null,"UXP allows communication between plugins that are installed in the same application. "),(0,t.mdx)("p",null,"This is particularly handy when you know a certain task is already automated by another plugin and you would like to invoke it instead of duplicating the effort. But make sure the user is not caught by surprise. Your plugin should call out such dependencies to ensure flawless functioning of your plugin."),(0,t.mdx)("p",null,"The ",(0,t.mdx)("inlineCode",{parentName:"p"},"Plugin Manager")," module provides APIs that will help establish the connection. But before we take a look at an example, be sure to be well-versed in these topics"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"../../concepts/entry-points/"},"Plugin entrypoints")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"../../concepts/manifest/#permissionsdefinition"},"Manifest permission module"))),(0,t.mdx)("p",null,"Additionally, you will need"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"A basic knowledge of the plugin you are going to communicate with. This includes:",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"the plugin ",(0,t.mdx)("inlineCode",{parentName:"li"},"id")),(0,t.mdx)("li",{parentName:"ul"},"available ",(0,t.mdx)("inlineCode",{parentName:"li"},"entrypoints")),(0,t.mdx)("li",{parentName:"ul"},"the structure of arguments to be passed (if applicable)"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"enablePluginCommunication")," permission for your plugin")),(0,t.mdx)("h2",{id:"system-requirements"},"System requirements"),(0,t.mdx)("p",null,"Please make sure your local environment uses the following application versions before proceeding."),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"InDesign v18.5 or higher"),(0,t.mdx)("li",{parentName:"ul"},"UDT v1.9.0 or higher"),(0,t.mdx)("li",{parentName:"ul"},"Manifest version v5 or higher")),(0,t.mdx)("h2",{id:"example"},"Example"),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Caller Plugin")),(0,t.mdx)(r,{slots:"heading, code",repeat:"2",languages:"JSON, JavaScript",mdxType:"CodeBlock"}),(0,t.mdx)("h4",{id:"manifest"},"manifest"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "requiredPermissions": {\n        "ipc": {\n            "enablePluginCommunication": true\n        }\n    }\n}\n')),(0,t.mdx)("h4",{id:"javascript"},"JavaScript"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},'const { pluginManager } = require("uxp");\nfunction communicateWithAnotherPlugin() {\n    try {\n        const allPlugins = pluginManager.plugins;\n        const plugin = Array.from(allPlugins).find(plugin => plugin.id === "com.adobe.example.coolPlugin");\n        if (plugin && plugin.enabled) {\n            console.log(\'All commands:\', plugin.manifest.commands);\n            console.log(\'All panels:\', plugin.manifest.panels);\n    \n            /* Show the plugin panel; Note that panels can only be made visible -- you can\'t ask to hide the panel */\n            plugin.showPanel("simplePanel");\n    \n            plugin.invokeCommand("simpleCommand");\n            \n            /* Send an argument to the command  */\n            const name = {\n                firstName: "John",\n                lastName: "Doe"\n            };\n            plugin.invokeCommand("commandWithInput", name);\n        } else {\n            // prompt the user to install or enable the plugin before trying again\n        }\n    } catch (e) {\n        console.error(e);\n    }\n} \n')),(0,t.mdx)("p",null,(0,t.mdx)("strong",{parentName:"p"},"Callee Plugin")),(0,t.mdx)(r,{slots:"heading, code",repeat:"2",languages:"JSON, JavaScript",mdxType:"CodeBlock"}),(0,t.mdx)("h4",{id:"manifest-1"},"manifest"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "com.adobe.example.coolPlugin",\n    "name": "The cool plugin",\n    "main": "index.html",\n    "entrypoints": [\n        {\n            "type": "command",\n            "id": "simpleCommand",\n            "label": "Do your thing"\n        },\n        {\n            "type": "command",\n            "id": "commandWithInput",\n            "label": "Do you thing with inputs"\n        },\n        {\n            "type": "panel",\n            "id": "simplePanel",\n            "label": {"default": "Do your thing with UI"},\n            // ...\n        }\n    ],\n}\n')),(0,t.mdx)("h4",{id:"javascript-1"},"JavaScript"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-js"},"const { entrypoints } = require(\"uxp\");\nentrypoints.setup({\n  commands: {\n    simpleCommand: () => doThing(),\n    commandWithInput: (args) => doThing(args)\n  },\n  panels: {\n    simplePanel: {\n      show({node} = {}) { /* ... */}\n    }\n  }\n});\n\nfunction doThing(args) {\n  console.log('Executed a command to do something cool', args && args.data[0]);\n}\n")),(0,t.mdx)("h2",{id:"additional-notes"},"Additional notes"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"You may not see any error if the entrypoint is not found. Therefore, we advise you to use ",(0,t.mdx)("inlineCode",{parentName:"li"},"plugin.manifest.commands")," and ",(0,t.mdx)("inlineCode",{parentName:"li"},"plugin.manifest.panels")," to select from the complete list of entrypoints."),(0,t.mdx)("li",{parentName:"ul"},"Invoking a plugin installed/running on a different application is not possible"),(0,t.mdx)("li",{parentName:"ul"},"Passing methods in the argument object is also not possible"),(0,t.mdx)("li",{parentName:"ul"},"There is a possibility that the user might have disabled a particular plugin via Adobe Creative Cloud Desktop App. Check the plugin's availability by using ",(0,t.mdx)("inlineCode",{parentName:"li"},"plugin.enabled")," before invoking.\n")),(0,t.mdx)("h2",{id:"reference-docs"},"Reference docs"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/indesign/uxp/reference/uxp-api/reference-js/Modules/uxp/Plugin%20Manager/PluginManager/"},"Plugin Manager"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-plugins-tutorials-inter-plugin-comm-index-md-5aed3c3117bd03a9a579.js.map