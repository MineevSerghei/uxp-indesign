"use strict";(self.webpackChunkuxp_indesign=self.webpackChunkuxp_indesign||[]).push([[8418],{19256:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return m},default:function(){return c}});var a=n(87462),r=n(45987),i=(n(15007),n(64983)),o=n(91515);const s=["components"],m={},d=(l="InlineAlert",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)});var l;const p={_frontmatter:m},u=o.Z;function c(e){let{components:t}=e,n=(0,r.Z)(e,s);return(0,i.mdx)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"measurements-and-positioning"},"Measurements and positioning"),(0,i.mdx)("p",null,"All items and objects in InDesign are positioned on the page according to the measurements you choose. It's helpful to know how the InDesign coordinate system works and what measurement units it uses."),(0,i.mdx)("h3",{id:"coordinates"},"Coordinates"),(0,i.mdx)("p",null,"InDesign, like every other page layout and drawing program, uses simple, two-dimensional geometry to set the position of objects on a page or spread. The horizontal component of a coordinate pair is referred to as x; the vertical component as y. You can see these coordinates in the Transform panel or Control when you select an object using the Selection tool."),(0,i.mdx)("p",null,(0,i.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"255px"}},"\n      ",(0,i.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"99.2156862745098%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,i.mdx)("picture",{parentName:"span"},"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/0467686d61c68ab0e780d9dde3a56b8c/a12a6/transform-panel.webp 255w"],sizes:"(max-width: 255px) 100vw, 255px",type:"image/webp"}),"\n          ",(0,i.mdx)("source",{parentName:"picture",srcSet:["/uxp-indesign/static/0467686d61c68ab0e780d9dde3a56b8c/18417/transform-panel.png 255w"],sizes:"(max-width: 255px) 100vw, 255px",type:"image/png"}),"\n          ",(0,i.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/uxp-indesign/static/0467686d61c68ab0e780d9dde3a56b8c/18417/transform-panel.png",alt:"Transform panel",title:"Transform panel",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,i.mdx)(d,{variant:"info",slots:"text1, text2",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Note that, "),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"The coordinates are measured relative to the ",(0,i.mdx)("strong",{parentName:"li"},"current")," location of the ruler's zero point."),(0,i.mdx)("li",{parentName:"ul"},"In the vertical (or y) axis, coordinates below the zero point are positive numbers; coordinates above the zero point are negative numbers."),(0,i.mdx)("li",{parentName:"ul"},"The coordinates for the location of a path point are returned in x and y order. You should set the coordinates of the path point, in the same order. "),(0,i.mdx)("li",{parentName:"ul"},"The coordinates of a bounding box of an object are represented in an array containing four coordinates. It is defined (in order) the top, left, bottom, and right edges of the bounding box (or y1, x1, y2,x2). ")),(0,i.mdx)("h3",{id:"working-with-measurement-units"},"Working with measurement units"),(0,i.mdx)("p",null,'InDesign returns coordinates and other measurement values using the publication\'s current measurement units. However, in some cases, these units don\'t resemble the measurement values shown in the InDesign Transform panel. For example, if the current measurement system is picas, InDesign returns fractional values as decimals rather than using the picas-and-points notation used by the Transform panel. "1p6," for example, is returned as "1.5." InDesign does this because your scripts/plugins would have trouble trying to perform arithmetic operations using measurement strings; for instance, trying to add "0p3.5" to "13p4" produces an error while adding .2916 to 13.333 (the converted pica measurements) does not.'),(0,i.mdx)("p",null,"If you are adding, subtracting, multiplying, or dividing specific measurement values, it is recommended to first set the corresponding measurement units, before the operation. In the end, you can set the measurement units back to whatever they were before. "),(0,i.mdx)("p",null,'You can set measurement values using numbers (for example, 14.65) or strings (for example, "1p7.1"). If you use numbers, InDesign uses the publication\'s current units of measurement. If you send measurement strings (see the table below), InDesign uses the units of measurement specified in the string.'),(0,i.mdx)("p",null,"Alternatively, you can use measurement overrides, like many of the sample scripts. A measurement override is a string containing a special character, as shown in the following table:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Override"),(0,i.mdx)("th",{parentName:"tr",align:null},"Meaning"),(0,i.mdx)("th",{parentName:"tr",align:null},"Example"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"c"),(0,i.mdx)("td",{parentName:"tr",align:null},"Ciceros (add didots after the c, if necessary)"),(0,i.mdx)("td",{parentName:"tr",align:null},"1.4c")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"cm"),(0,i.mdx)("td",{parentName:"tr",align:null},"Centimeters"),(0,i.mdx)("td",{parentName:"tr",align:null},".635cm")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"i (or in)"),(0,i.mdx)("td",{parentName:"tr",align:null},"Inches"),(0,i.mdx)("td",{parentName:"tr",align:null},".25i")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"mm"),(0,i.mdx)("td",{parentName:"tr",align:null},"Millimeters"),(0,i.mdx)("td",{parentName:"tr",align:null},"6.35mm")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"p"),(0,i.mdx)("td",{parentName:"tr",align:null},"Picas (add points after the p, if necessary)"),(0,i.mdx)("td",{parentName:"tr",align:null},"1p6")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"pt"),(0,i.mdx)("td",{parentName:"tr",align:null},"Points"),(0,i.mdx)("td",{parentName:"tr",align:null},"18pt")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-resources-fundamentals-measurements-and-positioning-index-md-b75d814c85d0f64db54b.js.map