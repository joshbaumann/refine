"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47127:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Unexpected token in JSON at position 0 error",description:"We will look into the various possible causes of this error message and suggest methods to rectify it.",slug:"unexpected-token-in-json-at-position-0-error",authors:"chukwuka_reuben",tags:["javascript","errors"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-09-json-error/social.png",hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/unexpected-token-in-json-at-position-0-error",source:"@site/blog/2022-12-09-json-error.md",title:"Unexpected token in JSON at position 0 error",description:"We will look into the various possible causes of this error message and suggest methods to rectify it.",date:"2022-12-09T00:00:00.000Z",formattedDate:"December 9, 2022",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"errors",permalink:"/blog/tags/errors"}],readingTime:6.915,hasTruncateMarker:!1,authors:[{name:"Chukwuka Reuben",title:"Frontend Developer",imageURL:"/img/generic-profile.png",key:"chukwuka_reuben"}],frontMatter:{title:"Unexpected token in JSON at position 0 error",description:"We will look into the various possible causes of this error message and suggest methods to rectify it.",slug:"unexpected-token-in-json-at-position-0-error",authors:"chukwuka_reuben",tags:["javascript","errors"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-09-json-error/social.png",hide_table_of_contents:!1},prevItem:{title:"How to use Conditional Rendering in React",permalink:"/blog/react-conditional-rendering"},nextItem:{title:"Svelte vs React Comparison",permalink:"/blog/svelte-vs-react"},relatedPosts:[{title:"How to become a modern Node.js developer?",permalink:"/blog/node-js-developer-skills",formattedDate:"September 6, 2022",authors:[{name:"David Herbert",title:"Frontend Engineer",url:"https://github.com/DaveyHert",github:"https://github.com/DaveyHert",linkedin:"https://www.linkedin.com/in/daveyhert",imageURL:"https://github.com/DaveyHert.png",key:"david_herbert"}],readingTime:8.795,date:"2022-09-06T00:00:00.000Z"},{title:"A Definitive guide on JavaScript every() Method",permalink:"/blog/javascript-every-method",formattedDate:"November 2, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.685,date:"2022-11-02T00:00:00.000Z"},{title:"Building a CRUD app with Material UI and Strapi in React",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://twitter.com/necatiozmen3",linkedin:"https://www.linkedin.com/in/necatiozmen/",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:17.11,date:"2022-07-21T00:00:00.000Z"}],authorPosts:[]},l={authorsImageUrls:[void 0]},p=[{value:"Introduction.",id:"introduction",level:2},{value:"What is JSON?",id:"what-is-json",level:2},{value:"What does the &quot;Unexpected token &lt; in JSON at position 0&quot; error mean?",id:"what-does-the-unexpected-token--in-json-at-position-0-error-mean",level:2},{value:"Different Reasons Why You Might Have This Error and Their Fixes.",id:"different-reasons-why-you-might-have-this-error-and-their-fixes",level:2},{value:"Hitting Any API endpoint that does not exist:",id:"hitting-any-api-endpoint-that-does-not-exist",level:2},{value:"Spelling Error",id:"spelling-error",level:2},{value:"Forgetting to stringify your object:",id:"forgetting-to-stringify-your-object",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=(c="PromotionBanner",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const d={toc:p};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction."),(0,r.kt)("p",null,'This post aims to address the "Unexpected token in JSON at position 0" error message. We will look into the various possible causes of this message and suggest methods to rectify it.'),(0,r.kt)("p",null,"Steps we'll cover:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-is-json"},"What is JSON?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#what-does-the-unexpected-token--in-json-at-position-0-error-mean"},'What does the "Unexpected token \\< in JSON at position 0" error mean?')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#different-reasons-why-you-might-have-this-error-and-their-fixes"},"Different Reasons Why You Might Have This Error and Their Fixes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#hitting-any-api-endpoint-that-does-not-exist"},"Hitting Any API endpoint that does not exist:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#spelling-error"},"Spelling Error")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#forgetting-to-stringify-your-object"},"Forgetting to stringify your object:"))),(0,r.kt)("h2",{id:"what-is-json"},"What is JSON?"),(0,r.kt)("p",null,"JSON which stands for Javascript Object Notation can be said to be a lightweight format for storing and transporting data, it is used often when data is sent from a server to a webpage."),(0,r.kt)("p",null,"If you have ever utilized API endpoints in your projects before, there's a very high chance that JSON is being used to store and transport data between your web page and servers."),(0,r.kt)("p",null,"Let us quickly examine the utilization of JSON for transporting and storing data. We don't need to look too far since the local storage on our internet browsers can function as servers."),(0,r.kt)("p",null,"The codeblock below shows how JSON can be used to transport data between local storage and the web page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"localStorage.setItem('list', JSON.stringfy(list))\n\nJSON.parse(localStorage.getItem('list'))\n")),(0,r.kt)("p",null,'Now that we are aware of what JSON is and how it can be applied, let us move on to resolving the "Unexpected token in JSON at position 0" error message.'),(0,r.kt)("h2",{id:"what-does-the-unexpected-token--in-json-at-position-0-error-mean"},'What does the "Unexpected token ',"<",' in JSON at position 0" error mean?'),(0,r.kt)("p",null,'In very simple language, "Unexpected token ',"<",' in JSON at position 0" indicates that you are parsing something else that is not JSON as JSON.'),(0,r.kt)("p",null,"To prove my point, I will attempt to reproduce the mistake. Go to your browser console and execute this code snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"JSON.parse(undefined)\n")),(0,r.kt)("p",null,"The code snippet above will produce this type of error:"),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-09-json-error/json-error-1.png",alt:"json error"})),(0,r.kt)("br",null),(0,r.kt)("p",null,'Why? because "undefined" is not JSON but we have tried to parse it as JSON.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"There's something I would like you to note before we proceed:")),(0,r.kt)("p",null,'The actual "Unexpected token in JSON at position 0" message may vary depending on what your server generates, however, the fundamental reason remains the same: you are attempting to parse something that is not JSON as JSON.'),(0,r.kt)("p",null,"Below are some of the different forms in which the error message could be presented:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'" is not a valid JSON at JSON.parse".'),(0,r.kt)("li",{parentName:"ul"},"Unexpected token '","<","', \"","<",'!DOCTYPE "... is not valid JSON.'),(0,r.kt)("li",{parentName:"ul"},"Unexpected token 'o', \"not found!\" is not valid JSON."),(0,r.kt)("li",{parentName:"ul"},"Unexpected token 'o', \"","[",'object obj... is not valid JSON"')),(0,r.kt)("p",null,'and so on. So going forward I\'ll be using the general name "JSON.parse unexpected token" to refer to this error.'),(0,r.kt)("p",null,'Now that we know what the "JSON.parse unexpected token" error means, let us proceed to know the different reasons why you might have this error and also look into ways to fix them.'),(0,r.kt)("h2",{id:"different-reasons-why-you-might-have-this-error-and-their-fixes"},"Different Reasons Why You Might Have This Error and Their Fixes."),(0,r.kt)("p",null,"In this section of this article, 4 reasons and their fixes will be listed:"),(0,r.kt)("h2",{id:"hitting-any-api-endpoint-that-does-not-exist"},"Hitting Any API endpoint that does not exist:"),(0,r.kt)("p",null,"This is one of the most common causes of this error, and this tends to occur during the fetch request in javascript."),(0,r.kt)("p",null,"As you might have already assumed, yes! it occurs when you're trying to parse an endpoint result that is not JSON as JSON."),(0,r.kt)("p",null,"In this part of the article, we will consider two brief cases - one to obtain a valid endpoint and show the outcome, and the other to retrieve an endpoint that doesn't exist so we can reproduce the error message."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1:")),(0,r.kt)("p",null,"In this example, I've used the JSON endpoints from ",(0,r.kt)("a",{parentName:"p",href:"https://dummyjson.com/"},"https://dummyjson.com/"),", a place where you can get fake JSON data to use during development."),(0,r.kt)("p",null,"I've picked a valid endpoint from this site and went ahead to call the javascript fetch method on it, check out the code snippet and its result below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"fetch('https://dummyjson.com/products/1')\n  .then(res => res.json())\n  .then(json => console.log(json))\n")),(0,r.kt)("p",null,"Using the code snippet above, I want to clarify that ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," is being done by ",(0,r.kt)("inlineCode",{parentName:"p"},"res.json()")," under the hood."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-09-json-error/json-error-2.png",alt:"json error"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"The image above shows that we got a valid JSON response, now let us move to the second example."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'fetch("https://dummyjson.com/myProduct/1")\n    .then((res) => res.json())\n    .then((json) => console.log(json));\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dummyjson.com/myProduct/1"},"https://dummyjson.com/myProduct/1")," that has been used as our API is an endpoint that I made up, so it is not a valid API endpoint and as you know parsing it will be you trying to parse something that isn't JSON, as it is not a formatted JSON."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-09-json-error/json-error-3.png",alt:"json error"})),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How To Fix.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Make sure you are using a valid API endpoint:"),"  To make sure you are using a valid JSON endpoint, use ",(0,r.kt)("a",{parentName:"li",href:"https://jsonformatter.curiousconcept.com/"},"JSONFORMATTER")," to verify your endpoints before using it.\n"),(0,r.kt)("li",{parentName:"ul"},"Always use the try-and-catch within your fetch method or function to prevent your app from crashing.\n")),(0,r.kt)("h2",{id:"spelling-error"},"Spelling Error"),(0,r.kt)("p",null,"This is so much similar to hitting the wrong API, only that you might have been pretty sure that the API endpoint exists."),(0,r.kt)("p",null,"Spelling error tends to happen due to typographical error or maybe you don't know what the correct spellings are."),(0,r.kt)("p",null,'Spelling errors do not apply only to API endpoints, they can also occur while attempting to fetch information from your local storage and lead to the "JSON.parse unexpected token" error message showing up.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How To Fix.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Check and proofread well before hitting the API.\n"),(0,r.kt)("li",{parentName:"ul"},"Make sure you verify your API before hitting it. use JSONFORMATTER.\n"),(0,r.kt)("li",{parentName:"ul"},"Use the try-and-catch method in your function to prevent your app from crashing.\n")),(0,r.kt)("hr",null),(0,r.kt)(u,{title:"Building a side project?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"forgetting-to-stringify-your-object"},"Forgetting to stringify your object:"),(0,r.kt)("p",null,'If we don\'t use the JSON.stringify() technique to convert our object into a string before sending it to a server, then we may encounter the error "JSON.parse unexpected token". This raises the question, "why is it necessary to transform our object into a string before sending it to a server?"'),(0,r.kt)("p",null,"When sending data to a web server, the data has to be a string and to convert a javascript object to a string ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," does the trick."),(0,r.kt)("p",null,"We are going to take two quick examples in this section, example 1 will represent the problem and example 2 will be the solution."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 1")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")),(0,r.kt)("p",null,"Local storage will stand as our servers in this example."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"I have a list of todos that I have written on my web page,")," I wish for them to stay even after I have reloaded my page",(0,r.kt)("strong",{parentName:"p"},",")," ",(0,r.kt)("em",{parentName:"p"},"how do I make that happen?")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"I have to send those lists as data to my server,")," and then to retrieve them whenever I reload the page."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'localStorage.setItem("list", \nlist);\n')),(0,r.kt)("p",null,"In the code snippet that I have provided, I have sent my data to the server without converting the object to a string using ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON.stringify()"),". Let's take a look at the consequence this will have on our page, below is the code snippet for retrieving the list, and an image of the result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const getLocalStorage = () => {\n  let list = localStorage.getItem("list");\n  if (list) {\n    return (list = JSON.parse(localStorage.getItem("list")));\n  } else {\n    return [];\n  }\n};\n')),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-09-json-error/json-error-4.png",alt:"json error"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"The error indicates that I'm trying to parse an object, and it's not a valid JSON."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example 2(The fix):")),(0,r.kt)("p",null,"All we have to do to fix this error is to stringify our list before sending it to the server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'localStorage.setItem("list", \nJSON.stringify(list))\n')),(0,r.kt)("p",null,"The code snippet above will fix the error."),(0,r.kt)("p",null,'In general, it is always a good idea to carefully check your JSON data for any syntax errors before attempting to parse it. This will help to ensure that your code is able to properly handle the JSON data and avoid any errors like the "Unexpected token in JSON at position 0" error.'),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this article, I began by providing a brief overview of what JSON is. Then, I clarified the \u201cJSON.parse unexpected token\u201d error message. Finally, I listed some of the different causes of this error, providing example errors and instructions on how to fix them."))}h.isMDXComponent=!0}}]);