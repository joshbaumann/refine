"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29654],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={id:"layout-wrapper",title:"<LayoutWrapper>"},i=void 0,p={unversionedId:"api-reference/core/components/layout-wrapper",id:"version-3.xx.xx/api-reference/core/components/layout-wrapper",title:"<LayoutWrapper>",description:"Overview",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/components/layout-wrapper.md",sourceDirName:"api-reference/core/components",slug:"/api-reference/core/components/layout-wrapper",permalink:"/docs/3.xx.xx/api-reference/core/components/layout-wrapper",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/components/layout-wrapper.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"Refine Community Bot",lastUpdatedAt:1678977033,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{id:"layout-wrapper",title:"<LayoutWrapper>"},sidebar:"someSidebar",previous:{title:"<Refine>",permalink:"/docs/3.xx.xx/api-reference/core/components/refine-config"},next:{title:"Inferencer",permalink:"/docs/3.xx.xx/api-reference/core/components/inferencer"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],l=(u="PropsTable",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var u;const d={toc:c};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<LayoutWrapper>")," wraps its contents in ",(0,o.kt)("strong",{parentName:"p"},"refine's")," layout with all customizations made in ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component. It is the default layout used in resource pages. It can be used in ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/custom-pages"},"custom pages")," to use global layout."),(0,o.kt)("p",null,"This component accepts layout customizations to further customize the layout parameters (",(0,o.kt)("inlineCode",{parentName:"p"},"Title"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Sider"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Header"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Footer"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Layout"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"OffLayoutArea"),") defined in ",(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},(0,o.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<LayoutWrapper>")," can be used inside custom pages to use global layout with all its customizations."),(0,o.kt)("p",null,"An example use in a custom page may look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'// highlight-next-line\nimport { Refine, Authenticated, LayoutWrapper } from "@pankod/refine-core";\n\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport "@pankod/refine/dist/styles.min.css";\n\nimport { PostList } from "pages/posts";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\n// highlight-start\nconst AuthenticatedPostReview = () => {\n    return (\n        <Authenticated>\n            <LayoutWrapper Sider={() => <></>}>\n                <PostReview />\n            </LayoutWrapper>\n        </Authenticated>\n    );\n};\n// highlight-end\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            // highlight-start\n            routerProvider={{\n                ...routerProvider,\n                routes: [\n                    {\n                        exact: true,\n                        component: AuthenticatedPostReview,\n                        path: "/authenticated-page",\n                    },\n                ] as typeof routerProvider.routes,\n            }}\n            // highlight-end\n            dataProvider={dataProvider(API_URL)}\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("p",null,"In this example, we hide the left sider only for this page. The rest should look same as resource pages."),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"properties"},"Properties"),(0,o.kt)(l,{module:"@pankod/refine-core/LayoutWrapper","Sider-description":"[Custom sider to use](/docs/api-reference/core/components/refine-config#sider)","Header-description":"[Custom header to use](/docs/api-reference/core/components/refine-config#header)","Title-description":"[Custom title to use](/docs/api-reference/core/components/refine-config#title)","Footer-description":"[Custom footer to use](/docs/api-reference/core/components/refine-config#footer)","OffLayoutArea-description":"[Custom off layout area to use](/docs/api-reference/core/components/refine-config#offlayoutarea)",mdxType:"PropsTable"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,o.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,o.kt)("strong",{parentName:"p"},"<",(0,o.kt)("a",{parentName:"strong",href:"/docs/3.xx.xx/api-reference/core/components/refine-config"},"Refine"),">")," component.")))}f.isMDXComponent=!0}}]);