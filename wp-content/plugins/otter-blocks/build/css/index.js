!function(){"use strict";var e=window.React,t=window.lodash,s=window.wp.i18n,o=window.wp.blocks,n=window.wp.blockEditor,c=window.wp.components,r=window.wp.compose,l=window.wp.data,i=window.wp.element,a=window.wp.hooks;let u=null;window.otterCSSLintIgnored=[];var m=(0,i.memo)((({attributes:t,setAttributes:o,clientId:n})=>{const r=(0,i.useRef)(null),[a,m]=(0,i.useState)([]),[d,p]=(0,i.useState)(null),w=(e,t=!1)=>{let s=e?.state?.lint?.marked?.filter((({__annotation:e})=>"error"===e?.severity))?.map((({__annotation:e})=>e?.message));t&&0<s?.length&&(window.otterCSSLintIgnored=s),s=s?.filter((e=>!window.otterCSSLintIgnored.includes(e))),m(s),!t&&0<s?.length||p(e?.getValue())};return(0,i.useEffect)((()=>{const e=t.customCSS&&t.className?.includes("ticss-")?t.className.split(" ").find((e=>e.includes("ticss"))):null;let s="selector {\n}\n";if(t.customCSS){const o=new RegExp("."+e,"g");s=t.customCSS.replace(o,"selector")}r.current=wp.CodeMirror(document.getElementById("o-css-editor"),{value:s,autoCloseBrackets:!0,continueComments:!0,lineNumbers:!0,lineWrapping:!0,matchBrackets:!0,lint:!0,gutters:["CodeMirror-lint-markers"],styleActiveLine:!0,styleActiveSelected:!0,mode:"css",extraKeys:{"Ctrl-Space":"autocomplete","Alt-F":"findPersistent","Cmd-F":"findPersistent"}});const o=()=>{window?.oTrk?.add({feature:"custom-css",featureComponent:"used"}),clearTimeout(u),u=setTimeout((()=>{w(r.current)}),500)};return r.current.on("change",o),()=>{r.current.off("change",o)}}),[]),(0,i.useEffect)((()=>{const e=new RegExp("selector","g"),s=(()=>{if(d?.replace(/\s+/g,"")==="selector {\n}\n".replace(/\s+/g,""))return t.className?t.className.split(" ").filter((e=>!e.includes("ticss-"))).join(" "):t.className;const e=n.substring(0,8),{className:s}=t;return s?s.includes("ticss-")?s:[...s.trim().split(" "),`ticss-${e}`].join(" "):`ticss-${e}`})(),c=s?.split(" ").find((e=>e.includes("ticss"))),r=c?d?.replace(e,`.${c}`):d;"selector {\n}\n".replace(/\s+/g,"")===r?.replace(/\s+/g,"")?o({customCSS:void 0,className:s}):r&&o({customCSS:r,hasCustomCSS:!0,className:s})}),[d]),(0,e.createElement)(i.Fragment,null,!Boolean(window?.blocksCSS?.hasOtter)&&!!(0,l.select)("core/edit-site")&&(0,e.createElement)(c.Notice,{status:"info",isDismissible:!1},(0,s.__)("Blocks CSS is not fully compatible with the Site Editor. We recommend installing Otter for Site Builder compatibility.","blocks-css"),(0,e.createElement)("br",null),(0,e.createElement)("br",null),(0,e.createElement)(c.Button,{variant:"primary",href:window?.blocksCSS?.installOtter,target:"_blank"},(0,s.__)("Install Otter","blocks-css"))),(0,e.createElement)("p",null,(0,s.__)("Add your custom CSS.","blocks-css")),(0,e.createElement)("div",{id:"o-css-editor",className:"o-css-editor"}),0<a?.length&&(0,e.createElement)("div",{className:"o-css-errors"},(0,e.createElement)(c.Notice,{status:"error",isDismissible:!1},(0,s.__)("Attention needed! We found following errors with your code:","blocks-css")),(0,e.createElement)("pre",null,(0,e.createElement)("ul",null,a.map(((t,s)=>(0,e.createElement)("li",{key:s},t))))),(0,e.createElement)(c.Button,{variant:"secondary",onClick:()=>w(r.current,!0),style:{width:"max-content",marginBottom:"20px"}},(0,s.__)("Override","blocks-css"))),(0,e.createElement)("p",null,(0,s.__)("Use","blocks-css")," ",(0,e.createElement)("code",null,"selector")," ",(0,s.__)("to target block wrapper.","blocks-css")),(0,e.createElement)("br",null),(0,e.createElement)("p",null,(0,s.__)("Example:","blocks-css")),(0,e.createElement)("pre",{className:"o-css-editor-help"},"selector {\n    background: #000;\n}\n\nselector img {\n    border-radius: 100%;\n}"),(0,e.createElement)("p",null,(0,s.__)("You can also use other CSS syntax here, such as media queries.","blocks-css")))}));let d=!0;const p=e=>{const t=window.parent.document.querySelector('iframe[name="editor-canvas"]')?.contentWindow;if(d&&t)return t.addEventListener("DOMContentLoaded",(function(){setTimeout((()=>{p(e)}),500)})),void(d=!1);const s=t?.document.head||document.head;let o=s.querySelector("#o-css-editor-styles");return null===o&&(o=document.createElement("style"),o.setAttribute("type","text/css"),o.setAttribute("id","o-css-editor-styles"),s?.appendChild(o)),o.textContent===e?null:o.textContent=e},w=(e,s)=>{if(!e)return"";const n=e=>{const t=[];if("core/block"===e.name&&null!==s){const c=s.find((t=>e.attributes.ref===t.id));if(c&&c.content){const e=c.content.hasOwnProperty("raw")?c.content.raw:c.content;t.push((0,o.parse)(e).map((e=>[e,n(e)])))}}return void 0!==e.innerBlocks&&0<e.innerBlocks.length&&t.push(e.innerBlocks.map((e=>[e,n(e)]))),t},c=e.map((e=>[e,n(e)]));return(0,t.flattenDeep)(c).map((e=>e.attributes&&e.attributes.hasCustomCSS&&e.attributes.customCSS&&null!==e.attributes.customCSS?e.attributes.customCSS+"\n":"")).reduce(((e,t)=>e+t),"")};let S=[],b=!1;const C=(0,t.debounce)((()=>{const{getBlocks:e,isTyping:s}=(0,l.select)("core/block-editor");if(s())return;const o=!!(0,l.select)("core/edit-post")&&(0,l.select)("core/edit-post").__experimentalGetPreviewDeviceType(),n=e(),c=(0,l.select)("core").getEntityRecords("postType","wp_block",{context:"view"});if(!(0,t.isEqual)(S,n)||b!==o){const e=w(n,c);e&&(b!==o&&"Desktop"===b?setTimeout((()=>{p(e)}),500):p(e)),S=n,b=o}}),300);(0,l.subscribe)(C);const k=({clientId:t,setAttributes:o,attributes:n})=>(0,e.createElement)(c.PanelBody,{title:(0,s.__)("Custom CSS","blocks-css"),initialOpen:!1},(0,e.createElement)(m,{clientId:t,setAttributes:o,attributes:n}),(0,e.createElement)("div",{className:"o-fp-wrap"},(0,a.applyFilters)("otter.feedback","","custom-css"),(0,a.applyFilters)("otter.poweredBy",""))),h=(0,r.createHigherOrderComponent)((t=>s=>(0,o.hasBlockSupport)(s.name,"customClassName",!0)&&s.isSelected?(0,e.createElement)(i.Fragment,null,(0,e.createElement)(t,{...s}),(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(k,{...s}))):(0,e.createElement)(t,{...s})),"withInspectorControl");(0,a.addFilter)("blocks.registerBlockType","themeisle-custom-css/attribute",(e=>((0,o.hasBlockSupport)(e,"customClassName",!0)&&(e.attributes=(0,t.assign)(e.attributes,{hasCustomCSS:{type:"boolean",default:!1},customCSS:{type:"string"}})),e))),Boolean(window?.blocksCSS?.hasOtter)?(0,a.addFilter)("otter.blockTools","themeisle-custom-css/with-inspector-controls",((t,n)=>{if((0,o.hasBlockSupport)(n.name,"customClassName",!0)){var r;const o=Boolean(null===(r=(0,l.select)("core/preferences")?.get("themeisle/otter-blocks","show-custom-css"))||void 0===r||r);return(0,e.createElement)(i.Fragment,null,t,(0,e.createElement)(c.__experimentalToolsPanelItem,{hasValue:()=>Boolean(n.attributes?.hasCustomCSS),label:(0,s.__)("Custom CSS","blocks-css"),onDeselect:()=>{n.setAttributes({hasCustomCSS:!1,customCSS:void 0}),(()=>{const{getBlocks:e}=(0,l.select)("core/block-editor"),t=e(),s=(0,l.select)("core").getEntityRecords("postType","wp_block",{context:"view"}),o=w(t,s);p(o)})()},isShownByDefault:o},(0,e.createElement)(k,{...n})))}return t}),2):(0,a.addFilter)("editor.BlockEdit","themeisle-custom-css/with-inspector-controls",h)}();