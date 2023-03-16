"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80321],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,h=c["".concat(s,".").concat(m)]||c[m]||l[m]||a;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=c;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7280:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={id:"router-provider",title:"Migrating Router Provider from 3.x.x to 4.x.x",sidebar_label:"Migrating Router Provider"},i=void 0,u={unversionedId:"migration-guide/router-provider",id:"migration-guide/router-provider",title:"Migrating Router Provider from 3.x.x to 4.x.x",description:"Motivation behind the changes",source:"@site/docs/migration-guide/router-provider.md",sourceDirName:"migration-guide",slug:"/migration-guide/router-provider",permalink:"/docs/migration-guide/router-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/migration-guide/router-provider.md",tags:[],version:"current",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1678977033,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{id:"router-provider",title:"Migrating Router Provider from 3.x.x to 4.x.x",sidebar_label:"Migrating Router Provider"},sidebar:"someSidebar",previous:{title:"Migrating Auth Provider",permalink:"/docs/migration-guide/auth-provider"},next:{title:"API Reference",permalink:"/docs/api-reference"}},s={},p=[{value:"Motivation behind the changes",id:"motivation-behind-the-changes",level:2},{value:"Important Notes",id:"important-notes",level:2},{value:"Changes in the <code>&lt;Refine&gt;</code> Component",id:"changes-in-the-refine-component",level:3},{value:"Behavioral Changes in Routing",id:"behavioral-changes-in-routing",level:3},{value:"Using the New Router Providers",id:"using-the-new-router-providers",level:2},{value:"React Router v6",id:"react-router-v6",level:3},{value:"Next.js",id:"nextjs",level:3},{value:"Remix",id:"remix",level:3}],d={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"motivation-behind-the-changes"},"Motivation behind the changes"),(0,o.kt)("p",null,"Our motivation behind the changes in ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider")," and route handling is to increase flexibility and ease of use for our users."),(0,o.kt)("p",null,"By simplifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider")," to just an interaction and connection point between refine and the router, we eliminated the need for a specific way of defining routes and a ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider")," altogether. This means that ",(0,o.kt)("strong",{parentName:"p"},"refine")," will meet enterprise-grade requirements. While router bindings are optional, we recommend passing them to ",(0,o.kt)("strong",{parentName:"p"},"refine")," for optimal usage."),(0,o.kt)("p",null,"By making these changes, our users can integrate ",(0,o.kt)("strong",{parentName:"p"},"refine")," into their existing projects without needing to modify their current routes or application structure."),(0,o.kt)("p",null,"Ultimately, our goal is to make it simple for users to handle their unique situations without enforcing a particular methodology. With the updated router provider, you can continue using routers in the same way as before, while still benefiting from the features that ",(0,o.kt)("strong",{parentName:"p"},"refine")," offers."),(0,o.kt)("h2",{id:"important-notes"},"Important Notes"),(0,o.kt)("p",null,"With the new router provider, authentication checks are not handled by the routes. If your application utilizes ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider"),", you will be responsible for performing those checks yourself. You can easily do so by employing the ",(0,o.kt)("inlineCode",{parentName:"p"},"useIsAuthenticated")," hook or the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authenticated")," component. Example implementations are present in the documentation (",(0,o.kt)("a",{parentName:"p",href:"#using-the-new-router-providers"},"Check below")," for more info on each router) and in the example apps."),(0,o.kt)("p",null,"Similar to authentication flow, access control checks are also not handled by the routes internally. You will need to handle them yourself using the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCan")," hook or the ",(0,o.kt)("inlineCode",{parentName:"p"},"CanAccess")," component."),(0,o.kt)("p",null,"The creation and control of routes is entirely up to the user. You must manually create routes, and if desired, you can pass the routes to actions of your resources. Although we provide methods for generating routes from resources, these methods are optional and not recommended for optimal flexibility. However, they are available under each router if you choose to use them."),(0,o.kt)("h3",{id:"changes-in-the-refine-component"},"Changes in the ",(0,o.kt)("inlineCode",{parentName:"h3"},"<Refine>")," Component"),(0,o.kt)("p",null,"Since the route handling is now detached from the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component, this also effects the props that it accepts. Layout related props such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Sider"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Header"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Footer,")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OffLayoutArea")," are deprecated and won't have any effects when using the new router providers. The components from the UI packages are still exported and well supported. You can use them inside your app while creating your routes/pages."),(0,o.kt)("p",null,"Similarly, the ",(0,o.kt)("inlineCode",{parentName:"p"},"DashboardPage"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"catchAll")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"LoginPage")," components are also deprecated. You can now create your own routes and pages for these purposes without any limitations."),(0,o.kt)("admonition",{title:"Legacy Behavior (Dashboard Page)",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"After the deprecation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"DashboardPage")," prop, you need to create your own index route for your dashboard. To add this item to your ",(0,o.kt)("inlineCode",{parentName:"p"},"<Sider>"),", you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," array to add it to your menu. ",(0,o.kt)("inlineCode",{parentName:"p"},"useMenu")," will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," array to generate the menu items. You can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"useMenu")," hook to create your own menu.")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"catchAll")," prop was used to handle error pages. You can now create your own error page with the appropriate way for your router. To see examples, ",(0,o.kt)("a",{parentName:"p",href:"#using-the-new-router-providers"},"check out the documentation")," for each router."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LoginPage")," prop was used to handle the login page. You can now create your own login page with the appropriate way for your router. To see examples, ",(0,o.kt)("a",{parentName:"p",href:"#using-the-new-router-providers"},"check out the documentation")," for each router."),(0,o.kt)("h3",{id:"behavioral-changes-in-routing"},"Behavioral Changes in Routing"),(0,o.kt)("p",null,"Since ",(0,o.kt)("strong",{parentName:"p"},"refine")," doesn't create routes internally anymore, you will need to create your routes manually. In the previous versions, this also made ",(0,o.kt)("strong",{parentName:"p"},"refine")," responsible for authentication checks and redirections. With the new router provider, ",(0,o.kt)("strong",{parentName:"p"},"refine")," no longer handles these checks and redirections. You will need to handle them yourself such as redirecting to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/login")," page or 404 pages. This also means that the access control point in routes are now needed to be handled by the user. You can handle it using the ",(0,o.kt)("inlineCode",{parentName:"p"},"CanAccess")," component or the ",(0,o.kt)("inlineCode",{parentName:"p"},"useCan")," hook in your pages or as wrappers around your pages."),(0,o.kt)("p",null,"You can find more information and examples in the documentation for each router."),(0,o.kt)("h2",{id:"using-the-new-router-providers"},"Using the New Router Providers"),(0,o.kt)("p",null,"We've created documents for each router we provide bindings for. You can check them out below:"),(0,o.kt)("h3",{id:"react-router-v6"},"React Router v6"),(0,o.kt)("p",null,"If you are using ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router-dom")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-router-v6"),", you will need to generate your routes using ",(0,o.kt)("inlineCode",{parentName:"p"},"Routes"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Route"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Outlet")," and similar components, and then wrap the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component with your chosen router (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"<BrowserRouter>"),"). Afterwards, you may pass the routerProvider to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/react-router-v6"),", and specify the paths for your resource actions in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," array. Our documentation provides detailed instructions on how to create routes, associate them with your resources, and includes examples for reference."),(0,o.kt)("admonition",{title:"Known Issues",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Refine used to use ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router-dom@6.3.0"),", but now it uses ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router-dom@latest"),"."),(0,o.kt)("p",{parentName:"admonition"},"After version ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router-dom@6.5.0"),", support for partial segments has been dropped. Therefore, your custom routes may not work as expected. If you have such a usage, you need to update."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  <Refine\n-    routerProvider={{\n-       ...routerProvider,\n-        routes: [\n-            {\n-                element: <ProfilePage />,\n-                path: "profile/@:username/:page",\n            },\n        ],\n    }}\n+    routerProvider={routerProvider}\n  >\n+  <Route path="profile/:username/:page" element={<ProfilePage />} />\n  </Refine>\n')),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- <Link to="profile/@:username/:page" />\n+ <Link to="profile/:username/:page" />\n')),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/remix-run/react-router/releases/tag/react-router%406.5.0"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"react-router-dom@6.5.0")," changelog for more information ->"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/routers/react-router-v6"},"Check out the documentation for ",(0,o.kt)("inlineCode",{parentName:"a"},"@refinedev/react-router-v6")),"\n",(0,o.kt)("a",{parentName:"p",href:"https://reactrouter.com"},"Check out the documentation for ",(0,o.kt)("inlineCode",{parentName:"a"},"react-router-dom"))),(0,o.kt)("h3",{id:"nextjs"},"Next.js"),(0,o.kt)("p",null,"If you are using Next.js, you will need to create your routes using the file system-based routing method as you would normally do in Next.js. Afterwards, you can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/nextjs-router")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component, and specify the paths for your resource actions in the resources array. Our documentation provides step-by-step instructions on how to create routes and associate them with your resources, complete with examples for your reference."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/routers/nextjs"},"Check out the documentation for ",(0,o.kt)("inlineCode",{parentName:"a"},"@refinedev/nextjs-router")),"\n",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/getting-started"},"Check out the documentation for ",(0,o.kt)("inlineCode",{parentName:"a"},"Next.js"))),(0,o.kt)("h3",{id:"remix"},"Remix"),(0,o.kt)("p",null,"If you are using Remix, you will need to create your routes using the file system-based routing method as you would normally do in Remix. Afterwards, you can pass the ",(0,o.kt)("inlineCode",{parentName:"p"},"routerProvider")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"@refinedev/remix-router")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component, and specify the paths for your resource actions in the ",(0,o.kt)("inlineCode",{parentName:"p"},"resources")," array. Our documentation provides comprehensive instructions on how to create routes and associate them with your resources, along with examples to guide you through the process."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/routers/remix"},"Check out the documentation for ",(0,o.kt)("inlineCode",{parentName:"a"},"@refinedev/remix-router")),"\n",(0,o.kt)("a",{parentName:"p",href:"https://remix.run/docs/en/main"},"Check out the documentation for ",(0,o.kt)("inlineCode",{parentName:"a"},"Remix"))))}l.isMDXComponent=!0}}]);