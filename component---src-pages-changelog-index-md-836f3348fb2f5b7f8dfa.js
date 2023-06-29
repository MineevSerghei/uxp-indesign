"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[8931],{30089:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return s},default:function(){return u}});var a=r(87462),l=r(45987),t=(r(15007),r(64983)),m=r(91515);const i=["components"],s={},p={_frontmatter:s},d=m.Z;function u(e){let{components:n}=e,r=(0,l.Z)(e,i);return(0,t.mdx)(d,(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"changelog"},"Changelog"),(0,t.mdx)("h2",{id:"indesign-v185"},"InDesign v18.5"),(0,t.mdx)("p",null,"UXP Plugins are now available! Get started ",(0,t.mdx)("a",{parentName:"p",href:"../plugins"},"here"),"."),(0,t.mdx)("h3",{id:"uxp-v71"},"UXP v7.1"),(0,t.mdx)("h4",{id:"new"},"New"),(0,t.mdx)("p",null,"HTMLElement now supports"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#setpointercapturepointerid"},"setPointerCapture")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#releasepointercapturepointerid"},"releasePointerCapture")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#haspointercapturepointerid"},"hasPointerCapture")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLHtmlElement#dir--string"},"dir"))),(0,t.mdx)("h4",{id:"updated"},"Updated"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Documentation for ",(0,t.mdx)("inlineCode",{parentName:"li"},"shell")," moved to ",(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference-js/Modules/uxp/shell/"},"new location"))),(0,t.mdx)("h4",{id:"fixed"},"Fixed"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"SVGElement"),": The color of the ",(0,t.mdx)("inlineCode",{parentName:"li"},"fill")," attribute using a CSS variable will resolve as per the variable value. For now, please test this fix by enabling the feature flag in your plugin manifest ",(0,t.mdx)("inlineCode",{parentName:"li"},'"featureFlags" : { "enableFillAsCustomAttribute" : true }'),". This flag will be turned on by default in the next UXP release. ")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre"},'// CSS variable\nhtml {\n  --iconColor: yellow;\n}\n\n<svg height="100" width="100">\n  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="var(--iconColor, red)" />\n</svg>\n// shows a yellow circle\n')),(0,t.mdx)("h3",{id:"uxp-v70"},"UXP v7.0"),(0,t.mdx)("h4",{id:"new-1"},"New"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Support for Web Components in UXP Plugins. Various HTML elements and methods have been added to support this feature.",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Classes",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLSlotElement/"},"HTMLSlotElement")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLTemplateElement/"},"HTMLTemplateElement")))),(0,t.mdx)("li",{parentName:"ul"},"Methods",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element.md#assignedslot--htmlslotelement"},"Element.assignedSlot")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#slot--string"},"Element.slot")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#attachshadowinit"},"Element.attachShadow")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#shadowroot--shadowroot"},"Element.shadowRoot")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry#upgraderoot"},"CustomElementRegistry.upgrade")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/CustomElementRegistry#whendefinedname"},"CustomElementRegistry.whenDefined")))))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-spectrum/swc/"},"Spectrum Web Components (Beta)")," Support for Adobe SWC."),(0,t.mdx)("li",{parentName:"ul"},"Several augmentations to the JS API set",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Properties",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLElement#lang--string"},"HTMLElement.lang")))),(0,t.mdx)("li",{parentName:"ul"},"Classes added to the global scope",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/TreeWalker/"},"TreeWalker")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/NodeFilter/"},"NodeFilter")))),(0,t.mdx)("li",{parentName:"ul"},"Methods",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#hasattributes"},"Element.hasAttributes")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/Element#getattributenames"},"Element.getAttributeNames")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20Events/Event#composed--boolean"},"Event.composed")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20Events/Event#composedpath"},"Event.composedPath")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment#appendargs"},"DocumentFragment.append")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment#queryselectorselector"},"DocumentFragment.querySelector")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/DocumentFragment#queryselectorallselector"},"DocumentFragment.querySelectorAll")))))),(0,t.mdx)("li",{parentName:"ul"},"New focus events to support React 16",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/focusin_event"},"Focusin Event")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event"},"Focusout Event")))),(0,t.mdx)("li",{parentName:"ul"},"HTML ",(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLCanvasElement/"},"2D Canvas Support")," for basic shapes and styling."),(0,t.mdx)("li",{parentName:"ul"},"Alerts",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/alert/"},"alert()")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/prompt/"},"prompt()")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20DOM/confirm/"},"confirm()")))),(0,t.mdx)("li",{parentName:"ul"},"Support for ",(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/Streams/ReadableStream#pipeThroughtransform-options"},"pipeThrough")," and ",(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/Streams/ReadableStream#tee"},"tee")," in ",(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/Streams/ReadableStream"},"ReadableStream"),". Refer to ",(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/Streams/"},"Streams")," for more details"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/ImageBlob/"},"ImageBlob")," to render an uncompressed image buffer in UXP")),(0,t.mdx)("h4",{id:"changed"},"Changed"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Global%20Members/HTML%20Elements/HTMLVideoElement/"},"HTMLVideoElement"),": 'metadata' is the default value for ",(0,t.mdx)("inlineCode",{parentName:"li"},"preload")," attribute"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"/uxp-indesign/reference/uxp-api/reference-js/Modules/fs/"},"FS API"),": No need for the ",(0,t.mdx)("inlineCode",{parentName:"li"},"file://")," protocol")),(0,t.mdx)("h2",{id:"indesign-v184"},"InDesign v18.4"),(0,t.mdx)("h3",{id:"indesign-apis"},"InDesign APIs"),(0,t.mdx)("h4",{id:"added"},"Added"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"[BREAKING CHANGE]"," Mounting APIs ",(0,t.mdx)("br",null),"\nInDesign DOM APIs are no longer available in the global scope. You must ",(0,t.mdx)("a",{parentName:"li",href:"../recipes/dom-versioning/"},"mount the APIs")," first before using them. Plus, you can now access different versions of DOM APIs."),(0,t.mdx)("li",{parentName:"ul"},"Events ",(0,t.mdx)("br",null),"\nUXP scripts now have the functionality to handle standard events that InDesign emits. You can use the ",(0,t.mdx)("a",{parentName:"li",href:"../recipes/events/"},"eventListener"),"object to catch such events. "),(0,t.mdx)("li",{parentName:"ul"},"Arguments in UXP Scripts ",(0,t.mdx)("br",null),(0,t.mdx)("a",{parentName:"li",href:"../recipes/arguments/"},"Arguments")," can now be passed to a UXP script, and can be used within the script. "),(0,t.mdx)("li",{parentName:"ul"},"Setting script result ",(0,t.mdx)("br",null),'\nUXP scripts now have a "result" associated with them. ',(0,t.mdx)("a",{parentName:"li",href:"../recipes/script-result/"},"Set a result")," for a script for debugging puposes as well as passed to another script for utilization."),(0,t.mdx)("li",{parentName:"ul"},"Menus ",(0,t.mdx)("br",null),"\nUXP scripts now have APIs which can be used to add new menu items, remove existing menu items etc. ",(0,t.mdx)("a",{parentName:"li",href:"../recipes/menus/"},"Read more"),".")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-changelog-index-md-836f3348fb2f5b7f8dfa.js.map