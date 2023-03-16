"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[33837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99797:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={id:"index",title:"1. Adding List Page",tutorial:{order:0,prev:!1,next:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page"}},i=void 0,p={unversionedId:"tutorial/adding-crud-pages/headless/index",id:"tutorial/adding-crud-pages/headless/index",title:"1. Adding List Page",description:"In Unit 2.4, we created the CRUD pages automatically with Inferencer. In this unit, we will create the CRUD pages manually using the codes generated by Inferencer. So, you can customize the pages as you wish.",source:"@site/docs/tutorial/4-adding-crud-pages/headless/add-list-page.md",sourceDirName:"tutorial/4-adding-crud-pages/headless",slug:"/tutorial/adding-crud-pages/headless/index",permalink:"/docs/tutorial/adding-crud-pages/headless/index",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/headless/add-list-page.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1678983976,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{id:"index",title:"1. Adding List Page",tutorial:{order:0,prev:!1,next:"tutorial/adding-crud-pages/{preferredUI}/add-edit-page"}}},l={},s=[{value:"Creating List Page",id:"creating-list-page",level:2},{value:"Understanding the List Component",id:"understanding-the-list-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the List Page to the App",id:"adding-the-list-page-to-the-app",level:2}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},c=d("Checklist"),u=d("ChecklistItem"),h={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/getting-started/antd/generate-crud-pages/"},"Unit 2.4"),", we created the CRUD pages automatically with Inferencer. In this unit, we will create the CRUD pages manually using the codes generated by Inferencer. So, you can customize the pages as you wish."),(0,a.kt)("h2",{id:"creating-list-page"},"Creating List Page"),(0,a.kt)("p",null,"First, let's create our file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/products")," folder. We will name it ",(0,a.kt)("inlineCode",{parentName:"p"},"list.tsx"),". Then, we will copy the list page code generated by Inferencer and paste it into the file."),(0,a.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("a",{href:"http://localhost:3000/products",rel:"noopener noreferrer nofollow"},"localhost:3000/products")," in your browser.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click on the "Show Code" button in the bottom right corner of the page.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'You can see the list page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,a.kt)("inlineCode",{parentName:"p"},"list.tsx")," file."))),(0,a.kt)("p",null,"You can see the list page code generated by Inferencer below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products"},'setInitialRoutes(["/products"]);\n\nimport { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, { NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n            >\n                <Routes>\n                    <Route\n                        index\n                        element={<NavigateToResource resource="products" />}\n                    />\n\n                    <Route path="/products">\n                        <Route index element={<HeadlessInferencer />} />\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n\n                    <Route path="*" element={<div>Error!</div>} />\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nrender(<App />);\n')),(0,a.kt)("p",null,"Instead of coding the list page component from scratch, Inferencer created the required code base on API response, so that we can customize."),(0,a.kt)("h2",{id:"understanding-the-list-component"},"Understanding the List Component"),(0,a.kt)("p",null,"We will go through the list page hooks one by one."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook, imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/react-table")," package, has been developed by using the ",(0,a.kt)("strong",{parentName:"p"},"TanStack Table v8")," package and ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/core")," package."),(0,a.kt)("p",{parentName:"li"},"It provides all the features of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/core")," package as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"useTable")," hook from ",(0,a.kt)("strong",{parentName:"p"},"TanStack Table v8")," package."),(0,a.kt)("p",{parentName:"li"},"It is used to fetch the data and manage the table state."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-table/"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"@refinedev/react-table")," ",(0,a.kt)("inlineCode",{parentName:"a"},"useTable")," documentation for more information ","\u2192")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/table/v8"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"TanStack Table v8")," documentation for more information ","\u2192"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"useNavigation")," is a ",(0,a.kt)("strong",{parentName:"p"},"refine")," hook that is used to navigate between pages. In this case, we are using it to navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," pages when the user clicks on the edit and show buttons in the table."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useNavigation")," documentation for more information ","\u2192")))),(0,a.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,a.kt)("p",null,"Each product includes the ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," field which has ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," property. This is a foreign key that points to the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories"),' resource which is different than "product" resource.'),(0,a.kt)("p",null,"There is a ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," field In the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," resource. To display the category ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," in the table, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useMany")," hook provided by ",(0,a.kt)("strong",{parentName:"p"},"refine"),"."),(0,a.kt)("p",null,"This hook allows us to fetch data for multiple records in a single request by providing the ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"'s of the related records. In this case, we need to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"'s of the products categories. It is particularly useful when we need to fetch related data for multiple records."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useMany/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useMany")," documentation for more information ","\u2192")),(0,a.kt)("p",null,"In this tutorial, each product record has a ",(0,a.kt)("inlineCode",{parentName:"p"},"category")," field as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="https://api.fake-rest.refine.dev/products"',title:'"https://api.fake-rest.refine.dev/products"'},'{\n  ...\n  "category": {\n    "id": 1\n  }\n  ...\n},\n{\n  ...\n  "category": {\n    "id": 2\n  }\n  ...\n}\n')),(0,a.kt)("p",null,"We can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useMany")," hook to fetch the full category records for each of these products, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useMany } from "@refinedev/core";\n\nconst { data } = useMany({\n    resource: "categories",\n    ids: products.map((product) => product.category.id),\n});\n')),(0,a.kt)("p",null,"This will pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource"),"\xa0and ",(0,a.kt)("inlineCode",{parentName:"p"},"ids")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"getMany")," function. The ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," will then make a single request to the API to fetch the full records for each category related to the products. The resulting ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," variable will be an array of category records, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'[\n    {\n        id: 1,\n        title: "mock category title",\n    },\n    {\n        id: 2,\n        title: "another mock category title",\n    },\n];\n')),(0,a.kt)("p",null,"We can then use this ",(0,a.kt)("inlineCode",{parentName:"p"},"data")," array to display the ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," of each category in the table."),(0,a.kt)("h2",{id:"adding-the-list-page-to-the-app"},"Adding the List Page to the App"),(0,a.kt)("p",null,"Now that we have created the list page, we need to add it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the created ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductList")," component.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"HeadlessInferencer")," component with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductList")," component."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, { NavigateToResource } from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\n//highlight-next-line\nimport { ProductList } from "pages/products/list";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "products",\n                        // highlight-next-line\n                        list: "/products",\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n            >\n                <Routes>\n                    <Route\n                        index\n                        element={<NavigateToResource resource="products" />}\n                    />\n\n                    <Route path="products">\n                        {/* highlight-next-line */}\n                        <Route index element={<ProductList />} />\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n\n                    <Route path="*" element={<div>Error!</div>} />\n                </Routes>\n            </Refine>\n        </BrowserRouter>\n    );\n};\nexport default App;\n')),(0,a.kt)("p",null,"Now, we can see the list page in the browser at ",(0,a.kt)("a",{href:"http://localhost:3000/products",rel:"noopener noreferrer nofollow"},"localhost:3000/products")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(c,{mdxType:"Checklist"},(0,a.kt)(u,{id:"add-list-page-headless",mdxType:"ChecklistItem"},"I added the list page to the app."),(0,a.kt)(u,{id:"add-list-page-headless-2",mdxType:"ChecklistItem"},"I understood the list page components and hooks."),(0,a.kt)(u,{id:"add-list-page-headless-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}m.isMDXComponent=!0}}]);