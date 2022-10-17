"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99025],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?o.createElement(h,s(s({ref:t},m),{},{components:n})):o.createElement(h,s({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98667:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>g,frontMatter:()=>p,metadata:()=>c,toc:()=>d});var o=n(87462),a=(n(67294),n(3905)),i=n(15288),s=n(16210),r=n(64483),l=n(30409);const p={title:"React useMemo hook guide with examples",description:"Improve the React app performance with useMemo() hook",slug:"react-usememo",authors:"abdullah_numan",tags:["react","memoization","usememo","performance"],image:"/img/blog/2022-09-16-react-use-memo/social.jpg",hide_table_of_contents:!1},m=void 0,c={permalink:"/blog/react-usememo",source:"@site/blog/2022-09-16-react-use-memo.md",title:"React useMemo hook guide with examples",description:"Improve the React app performance with useMemo() hook",date:"2022-09-16T00:00:00.000Z",formattedDate:"September 16, 2022",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"memoization",permalink:"/blog/tags/memoization"},{label:"usememo",permalink:"/blog/tags/usememo"},{label:"performance",permalink:"/blog/tags/performance"}],readingTime:5.845,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"React useMemo hook guide with examples",description:"Improve the React app performance with useMemo() hook",slug:"react-usememo",authors:"abdullah_numan",tags:["react","memoization","usememo","performance"],image:"/img/blog/2022-09-16-react-use-memo/social.jpg",hide_table_of_contents:!1},prevItem:{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid"},nextItem:{title:"React memo guide with examples",permalink:"/blog/react-memo-guide"},relatedPosts:[{title:"Creating a Responsive React Navbar with Tailwind CSS",permalink:"/blog/react-navbar-responsive-tailwind",formattedDate:"October 7, 2022",authors:[{name:"Muhammed Arslan Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"https://media-exp1.licdn.com/dms/image/C5603AQHKaAhTXytlEw/profile-displayphoto-shrink_800_800/0/1643978601436?e=1666224000&v=beta&t=vM0ajc7YqtkLTEhxsLs-cIcc1bGnYwl8-Ct1bsCoUL0",key:"muhammed_arslan"}],readingTime:8.64,date:"2022-10-07T00:00:00.000Z"},{title:"React Hook Form Validation with Complete Examples",permalink:"/blog/react-hook-form-validation-examples",formattedDate:"September 27, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:17.565,date:"2022-09-27T00:00:00.000Z"},{title:"How to Become A Production Hero as Developer with Refine in 2022",permalink:"/blog/how-to-become-a-production-hero-refine-2022",formattedDate:"February 21, 2022",authors:[{name:"Melih \xd6zkalay",title:"Frontend Developer",url:"https://github.com/ozkalai",imageURL:"https://github.com/ozkalai.png",key:"ozkalai"}],readingTime:2.04,date:"2022-02-21T00:00:00.000Z"}],authorPosts:[{title:"How to Use JavaScript Slice Method",permalink:"/blog/javascript-slice",formattedDate:"October 17, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:8.215,date:"2022-10-17T00:00:00.000Z"},{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.44,date:"2022-09-30T00:00:00.000Z"},{title:"How to use TypeScript Partial Type?",permalink:"/blog/typescript-partial-utility-type",formattedDate:"October 10, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.87,date:"2022-10-10T00:00:00.000Z"}]},u={authorsImageUrls:[void 0]},d=[{value:"Introduction",id:"introduction",level:2},{value:"Project Content Overview",id:"project-content-overview",level:3},{value:"Resource Intensive Functions",id:"resource-intensive-functions",level:2},{value:"Enter <code>useMemo()</code>",id:"enter-usememo",level:2},{value:"useMemo Dependencies",id:"usememo-dependencies",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2},{value:"Build your React-based CRUD applications without constraints",id:"build-your-react-based-crud-applications-without-constraints",level:2}],h={toc:d};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This post is about how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook in React."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations."),(0,a.kt)("p",null,"In this post, we dive into the details of the ",(0,a.kt)("strong",{parentName:"p"},"useMemo")," hook with an extension of the example demonstrated in the previous post titled ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/react-memo-guide/"},"Memoization using React memo"),"."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#resource-intensive-functions"},"Resource Intensive Functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#enter-usememo"},"Enter ",(0,a.kt)("inlineCode",{parentName:"a"},"useMemo()"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#usememo-dependencies"},"useMemo Dependencies")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#conclusion"},"Conclusion"))),(0,a.kt)("h3",{id:"project-content-overview"},"Project Content Overview"),(0,a.kt)("p",null,"The example app is based on the idea of a list of posts on a blog. There are several components involving a user seeing the latest posts and a list of the user's posts. Allow yourself some time to understand the components individually, their relationships, their state changes, and how props are passed through. It is crucial to pay close attention to how the change of a parent's state triggers the re-render of its descendants."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#live-stackblitz-example"},"Here you can find the example app's live code")),(0,a.kt)("p",null,"The discussion of this article is focused on optimizing performance by memoizing the value of resource-intensive functions, such as a sorting function. In React, we do this with the ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook."),(0,a.kt)("h2",{id:"resource-intensive-functions"},"Resource Intensive Functions"),(0,a.kt)("p",null,"We're going to jump back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />")," component for this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/Blog.jsx"',title:'"src/components/Blog.jsx"'},"import React, { useEffect, useState } from 'react';\nimport fetchUpdatedPosts from '../fetch/fetchUpdatedPosts';\nimport allPosts from './../data/allPosts.json';\nimport sortPosts from '../utils/sortPosts';\nimport LatestPost from './LatestPost';\nimport UserPostsIndex from './UserPostsIndex';\n\nconst Blog = ({ signedIn }) => {\n  const [updatedPosts, setUpdatedPosts] = useState(allPosts);\n  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());\n\n  const getLatestPosts = () => {\n    const posts = fetchUpdatedPosts();\n    setUpdatedPosts(posts);\n  };\n\n const sortedPosts = sortPosts(updatedPosts);\n\n  useEffect(\n    () => {\n      const id = setInterval(\n        () => setLocalTime(new Date().toLocaleTimeString()),\n        1000\n      );\n      return () => clearInterval(id);\n    },\n    []\n  );\n\n  console.log('Rendering Blog component');\n\n  return (\n    <div className=\"container\">\n      <h1>Memoization in React</h1>\n      <div>\n        <div>\n          { /* More JSX code here... */ }\n          <LatestPost signedIn={signedIn} post={sortedPosts[0]} />\n        </div>\n        <UserPostsIndex signedIn={signedIn}/>\n      </div>\n    </div>\n  );\n};\n\nexport default React.memo(Blog);\n")),(0,a.kt)("p",null,"We'd like to focus particularly on the ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," utility function which can get expensive if passed a long array of posts. "),(0,a.kt)("p",null,"At the moment, we are only sorting 101 items returned from ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchUpdatedPosts()"),", but in an actual application, the number can be much higher and consume resources at scale. Thus it is an expensive function."),(0,a.kt)("p",null,"If we look inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"useEffect()")," hook, we are updating the locale time string and storing it in ",(0,a.kt)("inlineCode",{parentName:"p"},"localTime")," for our clock. ",(0,a.kt)("inlineCode",{parentName:"p"},"localTime")," updates every second, and at each state, change triggers a re-render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />"),". The clock does not represent a genuine UI feature for us here, but it is there to make a point about how frequent re-renders complicate things with expensive utility functions."),(0,a.kt)("p",null,"Our ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," logs ",(0,a.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," to the console and returns a sorted array from the passed in an array:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/utils/sortPosts"',title:'"src/utils/sortPosts"'},"const sortPosts = posts => {\n  console.log('Sorting posts...');\n  return posts.sort((a, b) => b.id - a.id);\n};\n\nexport default sortPosts;\n")),(0,a.kt)("p",null,"If we look at the console, we see that ",(0,a.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," is being looged at 1000ms intervals, i.e. with the tick of our clock:"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:i.Z,alt:"usememo1"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"This shows ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," is called at every re-render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />"),". An expensive function, invoked every second for no obvious reason, is too much of an ask from the app. We don't want ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," to be called if ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," is not changed."),(0,a.kt)("h2",{id:"enter-usememo"},"Enter ",(0,a.kt)("inlineCode",{parentName:"h2"},"useMemo()")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," helps us memoize the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," when ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," doesn't change. Let's use the memoized function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:'title="src/components/Blog.jsx"',title:'"src/components/Blog.jsx"'},"-- const sortedPosts = sortPosts(updatedPosts);\n//highlight-next-line\n++ const sortedPosts = useMemo(() => sortPosts(updatedPosts), [updatedPosts]);\n")),(0,a.kt)("p",null,"Checking our console, we can see that ",(0,a.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," has been logged only once, indicating only one invocation of ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()"),":"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:s.Z,alt:"usememo2"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"This gives us a huge performance gain."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/pankod/refine"},(0,a.kt)("img",{src:"https://refine.dev/img/github-support-banner.png",alt:"github support banner"}))),(0,a.kt)("h2",{id:"usememo-dependencies"},"useMemo Dependencies"),(0,a.kt)("p",null,"Notice the dependency of ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," as the second argument, ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts"),". We are asking the hook to renew the memo when ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," changes. Let's try to change the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts"),":"),(0,a.kt)("p",null,"In the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog/>")," component, we have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Get Latest Post")," button, which is used to fetch latest posts on demand. Every time ",(0,a.kt)("inlineCode",{parentName:"p"},"Get Latest Post")," button is clicked, ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," is updated with the invocation of ",(0,a.kt)("inlineCode",{parentName:"p"},"getLatestPosts()"),". "),(0,a.kt)("p",null,"If the state of ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," is changed, a re-render of ",(0,a.kt)("inlineCode",{parentName:"p"},"<Blog />")," is triggered, which leads to a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," with the new value of ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," passed in."),(0,a.kt)("p",null,"If we check our console while clicking the button, we can clearly see ",(0,a.kt)("inlineCode",{parentName:"p"},"Sorting posts...")," being logged for each click:"),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:r.Z,alt:"usememo3"})),(0,a.kt)("br",null),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"It is important to notice that, if we remove the dependency from ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sortPosts()")," will not be invoked when ",(0,a.kt)("inlineCode",{parentName:"p"},"updatedPosts")," change:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"  const sortedPosts = useMemo(() => sortPosts(updatedPosts), []);\n")),(0,a.kt)("p",{parentName:"admonition"},"There is no sorting going on when we need it:"),(0,a.kt)("div",{class:"img-container","align-items":"center"},(0,a.kt)("img",{style:{alignSelf:"center",width:"400px"},src:l.Z,alt:"usememo4"})),(0,a.kt)("br",null)),(0,a.kt)("br",null),(0,a.kt)("p",null,"It is also important to know that ",(0,a.kt)("strong",{parentName:"p"},"useMemo")," returns a value, as opposed to a function. This is what differentiates it from the ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook, which returns a memoized function. So, ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," is preferred for memoizing a value rather than a callback function."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this article, we looked into the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo()")," hook and found out it plays a crucial role in optimizing the performance of our app by memoizing an expensive utility function. We saw that it is important to specify the dependency of ",(0,a.kt)("strong",{parentName:"p"},"useMemo"),"  so that the memo is renewed when the state of dependency changes."),(0,a.kt)("p",null,"In the next post, we will demonstrate the use of ",(0,a.kt)("inlineCode",{parentName:"p"},"useCallback()")," hook."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"https://refine.dev/img/discord-banner.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,a.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com//github/pankod/refine/tree/master/examples/blog/react-memoization-memo/?embed=1&view=preview&theme=dark&preset=node",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"react-memoization-memo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"build-your-react-based-crud-applications-without-constraints"},"Build your React-based CRUD applications without constraints"),(0,a.kt)("p",null,"Low-code React frameworks are great for gaining development speed but they often fall short of flexibility if you need extensive styling and customization for your project."),(0,a.kt)("p",null,"Check out ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine"),",if you are interested in a headless framework you can use with any custom design or UI-Kit for 100% control over styling."),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://github.com/pankod/refine"},(0,a.kt)("img",{src:"https://refine.dev/img/refine_blog_logo_1.png",alt:"refine blog logo"}))),(0,a.kt)("br",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," is an open-source React-based framework for building CRUD applications ",(0,a.kt)("strong",{parentName:"p"},"without constraints."),"\nIt can speed up your development time up to ",(0,a.kt)("strong",{parentName:"p"},"3X")," without compromising freedom on ",(0,a.kt)("strong",{parentName:"p"},"styling"),", ",(0,a.kt)("strong",{parentName:"p"},"customization")," and ",(0,a.kt)("strong",{parentName:"p"},"project workflow.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"refine")," is headless by design and it connects ",(0,a.kt)("strong",{parentName:"p"},"30+")," backend services out-of-the-box including custom REST and GraphQL API\u2019s."),(0,a.kt)("p",null,"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/pankod/refine"},"refine GitHub repository")," for more information, demos, tutorials, and example projects."))}g.isMDXComponent=!0},15288:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/usememo1-ff23d5bcb6ea88786218513502638980.png"},16210:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/usememo2-d3d449cd21709c15bae41bd13d33b890.png"},64483:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/usememo3-18759440ca5d89d483202abd134da027.png"},30409:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/usememo4-c4f63a5a9d9d945560ba905d995c0533.png"}}]);