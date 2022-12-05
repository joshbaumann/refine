"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[37604],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(67294),a=t(86010);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(87462),a=t(67294),o=t(86010),i=t(72389),s=t(67392),l=t(7094),c=t(12466);const d="tabList__CuJ",u="tabItem_LNqP";function p(e){var n;const{lazy:t,block:i,defaultValue:p,values:m,groupId:g,className:h}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??f.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),b=(0,s.l)(v,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:y}=(0,l.U)(),[x,P]=(0,a.useState)(k),C=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=g){const e=w[g];null!=e&&e!==x&&v.some((n=>n.value===e))&&P(e)}const E=e=>{const n=e.currentTarget,t=C.indexOf(n),r=v[t].value;r!==x&&(N(n),P(r),null!=g&&y(g,String(r)))},S=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},v.map((e=>{let{value:n,label:t,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:e=>C.push(e),onKeyDown:S,onFocus:E,onClick:E},i,{className:(0,o.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":x===n})}),t??n)}))),t?(0,a.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==x})))))}function m(e){const n=(0,i.Z)();return a.createElement(p,(0,r.Z)({key:String(n)},e))}},56111:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=t(87462),a=(t(67294),t(3905)),o=t(65488),i=t(85162),s=t(96990);const l={id:"i18n-provider",title:"i18n Provider"},c=void 0,d={unversionedId:"api-reference/core/providers/i18n-provider",id:"api-reference/core/providers/i18n-provider",title:"i18n Provider",description:"refine is capable of supporting any i18n framework but a i18nProvider according to the relevant library must be created.",source:"@site/docs/api-reference/core/providers/i18n-provider.md",sourceDirName:"api-reference/core/providers",slug:"/api-reference/core/providers/i18n-provider",permalink:"/docs/api-reference/core/providers/i18n-provider",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/providers/i18n-provider.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1670248293,formattedLastUpdatedAt:"Dec 5, 2022",frontMatter:{id:"i18n-provider",title:"i18n Provider"},sidebar:"someSidebar",previous:{title:"Data Provider",permalink:"/docs/api-reference/core/providers/data-provider"},next:{title:"Live Provider",permalink:"/docs/api-reference/core/providers/live-provider"}},u={},p=[{value:"Example",id:"example",level:2},{value:"Installation",id:"installation",level:3},{value:"Creating i18n Instance",id:"creating-i18n-instance",level:3},{value:"Wraping app with React.Suspense",id:"wraping-app-with-reactsuspense",level:3},{value:"Creating i18n Provider",id:"creating-i18n-provider",level:3},{value:"Adding Translations Files",id:"adding-translations-files",level:3},{value:"Changing The Locale",id:"changing-the-locale",level:3},{value:"Live StackBlitz Example",id:"live-stackblitz-example",level:2}],m={toc:p};function g(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"refine is capable of supporting any i18n framework but a ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider")," according to the relevant library must be created."),(0,a.kt)("p",null,"The default language of refine is currently English. If you want to use other languages, follow the instructions above. If your application is in English, you don't need to create an i18nProvider."),(0,a.kt)("p",null,"If you want to add i18n support in the app, refine expects the ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider")," type as follows."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const i18nProvider = {\n    translate: (key: string, params: object) => string,\n    changeLocale: (lang: string) => Promise,\n    getLocale: () => string,\n};\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider")," allows us to put translation features to hooks (",(0,a.kt)("inlineCode",{parentName:"p"},"useTranslate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useSetLocale"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useGetLocale"),")."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useTranslate")," shows translation between different languages."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useSetLocale")," changes locale at runtime."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useGetLocale")," getting current locale.")),(0,a.kt)("p",null,"After creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider"),", you can pass it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport i18nProvider from "./i18nProvider";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            i18nProvider={i18nProvider}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We recommend using ",(0,a.kt)("a",{parentName:"p",href:"/docs/getting-started/quickstart"},(0,a.kt)("inlineCode",{parentName:"a"},"create refine-app"))," to initialize your refine projects. It configures the project according to your needs including i18n provider.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"This example is for SPA react apps, for Next.js ",(0,a.kt)("a",{parentName:"p",href:"/docs/examples/i18n/i18n-nextjs"},"refer to i18n Nextjs example "))),(0,a.kt)("p",null,"Let's add multi-language support using the ",(0,a.kt)("inlineCode",{parentName:"p"},"react-i18next")," framework. At the end of our example, our application will support both German and English."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://react.i18next.com/getting-started"},"Refer to the react-i18next docs for detailed information ","\u2192")),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Run the following command within your project directory to install both ",(0,a.kt)("inlineCode",{parentName:"p"},"react-i18next")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"i18next")," packages :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install react-i18next i18next\n")),(0,a.kt)("h3",{id:"creating-i18n-instance"},"Creating i18n Instance"),(0,a.kt)("p",null,"First, we will create an i18n instance using ",(0,a.kt)("inlineCode",{parentName:"p"},"react-i18next"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/i18n.ts"',title:'"src/i18n.ts"'},'import i18n from "i18next";\nimport { initReactI18next } from "react-i18next"; // https://react.i18next.com/latest/using-with-hooks\nimport Backend from "i18next-http-backend"; // adding lazy loading for translations, more information here: https://github.com/i18next/i18next-http-backend\nimport detector from "i18next-browser-languagedetector"; // auto detect the user language, more information here: https://github.com/i18next/i18next-browser-languageDetector\n\ni18n.use(Backend)\n    .use(detector)\n    .use(initReactI18next)\n    .init({\n        supportedLngs: ["en", "de"],\n        backend: {\n            loadPath: "/locales/{{lng}}/{{ns}}.json", // locale files path\n        },\n        defaultNS: "common",\n        fallbackLng: ["en", "de"],\n    });\n\nexport default i18n;\n')),(0,a.kt)("h3",{id:"wraping-app-with-reactsuspense"},"Wraping app with React.Suspense"),(0,a.kt)("p",null,"Then we will import the i18n instance we created and wrap the application with ",(0,a.kt)("inlineCode",{parentName:"p"},"React.Suspense"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/index.tsx"',title:'"src/index.tsx"'},'import React from "react";\nimport { createRoot } from "react-dom/client";\nimport App from "./App";\n\n// highlight-next-line\nimport "./i18n";\n\nconst container = document.getElementById("root");\nconst root = createRoot(container!);\nroot.render(\n    <React.StrictMode>\n        // highlight-start\n        <React.Suspense fallback="loading">\n            <App />\n        </React.Suspense>\n        // highlight-end\n    </React.StrictMode>,\n);\n')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We use ",(0,a.kt)("inlineCode",{parentName:"p"},"React.Suspense")," because it improves performance by preventing the app from rendering unnecessarily.")),(0,a.kt)("h3",{id:"creating-i18n-provider"},"Creating i18n Provider"),(0,a.kt)("p",null,"Next, we will include the i18n instance and create the ",(0,a.kt)("inlineCode",{parentName:"p"},"i18nProvider")," using ",(0,a.kt)("inlineCode",{parentName:"p"},"react-i18next"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\n// highlight-next-line\nimport { useTranslation } from "react-i18next";\n\nimport { PostList } from "pages/posts";\n\nconst App: React.FC = () => {\n    // highlight-start\n    const { t, i18n } = useTranslation();\n\n    const i18nProvider = {\n        translate: (key: string, params: object) => t(key, params),\n        changeLocale: (lang: string) => i18n.changeLanguage(lang),\n        getLocale: () => i18n.language,\n    };\n    // highlight-end\n\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            // highlight-next-line\n            i18nProvider={i18nProvider}\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n')),(0,a.kt)("p",null,"After we pass the i18nProvider to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component, translation hooks(",(0,a.kt)("inlineCode",{parentName:"p"},"useTranslate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useSetLocale"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"useGetLocale"),") are fully ready to use."),(0,a.kt)("h3",{id:"adding-translations-files"},"Adding Translations Files"),(0,a.kt)("p",null,"Before we get started, let's look at the translations that refine uses in components."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "pages": {\n        "login": {\n            "title": "Sign in to your account",\n            "signin": "Sign in",\n            "signup": "Sign up",\n            "divider": "or",\n            "fields": {\n                "email": "Email",\n                "password": "Password"\n            },\n            "errors": {\n                "validEmail": "Invalid email address"\n            },\n            "buttons": {\n                "submit": "Login",\n                "forgotPassword": "Forgot password?",\n                "noAccount": "Don\u2019t have an account?",\n                "rememberMe": "Remember me"\n            }\n        },\n        "forgotPassword": {\n            "title": "Forgot your password?",\n            "fields": {\n                "email": "Email"\n            },\n            "errors": {\n                "validEmail": "Invalid email address"\n            },\n            "buttons": {\n                "submit": "Send reset instructions"\n            }\n        },\n        "register": {\n            "title": "Sign up for your account",\n            "fields": {\n                "email": "Email",\n                "password": "Password"\n            },\n            "errors": {\n                "validEmail": "Invalid email address"\n            },\n            "buttons": {\n                "submit": "Register",\n                "haveAccount": "Have an account?"\n            }\n        },\n        "updatePassword": {\n            "title": "Update password",\n            "fields": {\n                "password": "New Password",\n                "confirmPassword": "Confirm new password"\n            },\n            "errors": {\n                "confirmPasswordNotMatch": "Passwords do not match"\n            },\n            "buttons": {\n                "submit": "Update"\n            }\n        },\n        "error": {\n            "info": "You may have forgotten to add the {{action}} component to {{resource}} resource.",\n            "404": "Sorry, the page you visited does not exist.",\n            "resource404": "Are you sure you have created the {{resource}} resource.",\n            "backHome": "Back Home"\n        }\n    },\n    "actions": {\n        "list": "List",\n        "create": "Create",\n        "edit": "Edit",\n        "show": "Show"\n    },\n    "buttons": {\n        "create": "Create",\n        "save": "Save",\n        "logout": "Logout",\n        "delete": "Delete",\n        "edit": "Edit",\n        "cancel": "Cancel",\n        "confirm": "Are you sure?",\n        "filter": "Filter",\n        "clear": "Clear",\n        "refresh": "Refresh",\n        "show": "Show",\n        "undo": "Undo",\n        "import": "Import",\n        "clone": "Clone",\n        "notAccessTitle": "You don\'t have permission to access"\n    },\n    "warnWhenUnsavedChanges": "Are you sure you want to leave? You have unsaved changes.",\n    "notifications": {\n        "success": "Successful",\n        "error": "Error (status code: {{statusCode}})",\n        "undoable": "You have {{seconds}} seconds to undo",\n        "createSuccess": "Successfully created {{resource}}",\n        "createError": "There was an error creating {{resource}} (status code: {{statusCode}})",\n        "deleteSuccess": "Successfully deleted {{resource}}",\n        "deleteError": "Error when deleting {{resource}} (status code: {{statusCode}})",\n        "editSuccess": "Successfully edited {{resource}}",\n        "editError": "Error when editing {{resource}} (status code: {{statusCode}})",\n        "importProgress": "Importing: {{processed}}/{{total}}"\n    },\n    "loading": "Loading",\n    "tags": {\n        "clone": "Clone"\n    },\n    "dashboard": {\n        "title": "Dashboard"\n    }\n}\n')),(0,a.kt)("p",null,"All components of refine supports i18n. If you want to change the refine component texts, you can create your own translation file with reference to the keys above."),(0,a.kt)("p",null,"Now, let's add the language files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"|-- public\n|   |-- locales\n|       |-- en\n|       |   |-- common.json\n|       |-- de\n|           |-- common.json\n|-- src\n|-- package.json\n|-- tsconfig.json\n")),(0,a.kt)(o.Z,{defaultValue:"en",values:[{label:"English",value:"en"},{label:"German",value:"de"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"en",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/locales/en/common.json"',title:'"/locales/en/common.json"'},'{\n    "pages": {\n        "login": {\n            "title": "Sign in to your account",\n            "signin": "Sign in",\n            "signup": "Sign up",\n            "divider": "or",\n            "fields": {\n                "email": "Email",\n                "password": "Password"\n            },\n            "errors": {\n                "validEmail": "Invalid email address"\n            },\n            "buttons": {\n                "submit": "Login",\n                "forgotPassword": "Forgot password?",\n                "noAccount": "Don\u2019t have an account?",\n                "rememberMe": "Remember me"\n            }\n        },\n        "forgotPassword": {\n            "title": "Forgot your password?",\n            "fields": {\n                "email": "Email"\n            },\n            "errors": {\n                "validEmail": "Invalid email address"\n            },\n            "buttons": {\n                "submit": "Send reset instructions"\n            }\n        },\n        "register": {\n            "title": "Sign up for your account",\n            "fields": {\n                "email": "Email",\n                "password": "Password"\n            },\n            "errors": {\n                "validEmail": "Invalid email address"\n            },\n            "buttons": {\n                "submit": "Register",\n                "haveAccount": "Have an account?"\n            }\n        },\n        "updatePassword": {\n            "title": "Update password",\n            "fields": {\n                "password": "New Password",\n                "confirmPassword": "Confirm new password"\n            },\n            "errors": {\n                "confirmPasswordNotMatch": "Passwords do not match"\n            },\n            "buttons": {\n                "submit": "Update"\n            }\n        },\n        "error": {\n            "info": "You may have forgotten to add the {{action}} component to {{resource}} resource.",\n            "404": "Sorry, the page you visited does not exist.",\n            "resource404": "Are you sure you have created the {{resource}} resource.",\n            "backHome": "Back Home"\n        }\n    },\n    "actions": {\n        "list": "List",\n        "create": "Create",\n        "edit": "Edit",\n        "show": "Show"\n    },\n    "buttons": {\n        "create": "Create",\n        "save": "Save",\n        "logout": "Logout",\n        "delete": "Delete",\n        "edit": "Edit",\n        "cancel": "Cancel",\n        "confirm": "Are you sure?",\n        "filter": "Filter",\n        "clear": "Clear",\n        "refresh": "Refresh",\n        "show": "Show",\n        "undo": "Undo",\n        "import": "Import",\n        "clone": "Clone",\n        "notAccessTitle": "You don\'t have permission to access"\n    },\n    "warnWhenUnsavedChanges": "Are you sure you want to leave? You have unsaved changes.",\n    "notifications": {\n        "success": "Successful",\n        "error": "Error (status code: {{statusCode}})",\n        "undoable": "You have {{seconds}} seconds to undo",\n        "createSuccess": "Successfully created {{resource}}",\n        "createError": "There was an error creating {{resource}} (status code: {{statusCode}})",\n        "deleteSuccess": "Successfully deleted {{resource}}",\n        "deleteError": "Error when deleting {{resource}} (status code: {{statusCode}})",\n        "editSuccess": "Successfully edited {{resource}}",\n        "editError": "Error when editing {{resource}} (status code: {{statusCode}})",\n        "importProgress": "Importing: {{processed}}/{{total}}"\n    },\n    "loading": "Loading",\n    "tags": {\n        "clone": "Clone"\n    },\n    "dashboard": {\n        "title": "Dashboard"\n    },\n    "posts": {\n        "posts": "Posts",\n        "fields": {\n            "id": "Id",\n            "title": "Title",\n            "category": "Category",\n            "status": {\n                "title": "Status",\n                "published": "Published",\n                "draft": "Draft",\n                "rejected": "Rejected"\n            },\n            "content": "Content",\n            "createdAt": "Created At"\n        },\n        "titles": {\n            "create": "Create Post",\n            "edit": "Edit Post",\n            "list": "Posts",\n            "show": "Show Post"\n        }\n    },\n    "table": {\n        "actions": "Actions"\n    }\n}\n'))),(0,a.kt)(i.Z,{value:"de",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="/locales/de/common.json"',title:'"/locales/de/common.json"'},'{\n    "pages": {\n        "login": {\n            "title": "Melden Sie sich bei Ihrem Konto an",\n            "signin": "Einloggen",\n            "signup": "Anmelden",\n            "divider": "oder",\n            "fields": {\n                "email": "Email",\n                "password": "Passwort"\n            },\n            "errors": {\n                "validEmail": "Ung\xfcltige E-Mail-Adresse"\n            },\n            "buttons": {\n                "submit": "Anmeldung",\n                "forgotPassword": "Passwort vergessen?",\n                "noAccount": "Sie haben kein Konto?",\n                "rememberMe": "Erinnere dich an mich"\n            }\n        },\n        "forgotPassword": {\n            "title": "Haben Sie Ihr Passwort vergessen?",\n            "fields": {\n                "email": "Email"\n            },\n            "errors": {\n                "validEmail": "Ung\xfcltige E-Mail-Adresse"\n            },\n            "buttons": {\n                "submit": "Anweisungen zum Zur\xfccksetzen senden"\n            }\n        },\n        "register": {\n            "title": "Registrieren Sie sich f\xfcr Ihr Konto",\n            "fields": {\n                "email": "Email",\n                "password": "Passwort"\n            },\n            "errors": {\n                "validEmail": "Ung\xfcltige E-Mail-Adresse"\n            },\n            "buttons": {\n                "submit": "Registrieren",\n                "haveAccount": "Ein Konto haben?"\n            }\n        },\n        "updatePassword": {\n            "title": "Kennwort aktualisieren",\n            "fields": {\n                "password": "Neues Passwort",\n                "confirmPassword": "Best\xe4tige neues Passwort"\n            },\n            "errors": {\n                "confirmPasswordNotMatch": "Passw\xf6rter stimmen nicht \xfcberein"\n            },\n            "buttons": {\n                "submit": "Aktualisieren"\n            }\n        },\n        "error": {\n            "info": "Sie haben vergessen, {{action}} component zu {{resource}} hinzuf\xfcgen.",\n            "404": "Leider existiert diese Seite nicht.",\n            "resource404": "Haben Sie die {{resource}} resource erstellt?",\n            "backHome": "Zur\xfcck"\n        }\n    },\n    "actions": {\n        "list": "Auff\xfchren",\n        "create": "Erstellen",\n        "edit": "Bearbeiten",\n        "show": "Zeigen"\n    },\n    "buttons": {\n        "create": "Erstellen",\n        "save": "Speichern",\n        "logout": "Abmelden",\n        "delete": "L\xf6schen",\n        "edit": "Bearbeiten",\n        "cancel": "Abbrechen",\n        "confirm": "Sicher?",\n        "filter": "Filter",\n        "clear": "L\xf6schen",\n        "refresh": "Erneuern",\n        "show": "Zeigen",\n        "undo": "Undo",\n        "import": "Importieren",\n        "clone": "Klon",\n        "notAccessTitle": "Sie haben keine zugriffsberechtigung"\n    },\n    "warnWhenUnsavedChanges": "Nicht gespeicherte \xc4nderungen werden nicht \xfcbernommen.",\n    "notifications": {\n        "success": "Erfolg",\n        "error": "Fehler (status code: {{statusCode}})",\n        "undoable": "Sie haben {{seconds}} Sekunden Zeit f\xfcr Undo.",\n        "createSuccess": "{{resource}} erfolgreich erstellt.",\n        "createError": "Fehler beim Erstellen {{resource}} (status code: {{statusCode}})",\n        "deleteSuccess": "{{resource}} erfolgreich gel\xf6scht.",\n        "deleteError": "Fehler beim L\xf6schen {{resource}} (status code: {{statusCode}})",\n        "editSuccess": "{{resource}} erfolgreich bearbeitet.",\n        "editError": "Fehler beim Bearbeiten {{resource}} (status code: {{statusCode}})",\n        "importProgress": "{{processed}}/{{total}} importiert"\n    },\n    "loading": "Wird geladen",\n    "tags": {\n        "clone": "Klon"\n    },\n    "dashboard": {\n        "title": "Dashboard"\n    },\n    "posts": {\n        "posts": "Eintr\xe4ge",\n        "fields": {\n            "id": "Id",\n            "title": "Titel",\n            "category": "Kategorie",\n            "status": {\n                "title": "Status",\n                "published": "Ver\xf6ffentlicht",\n                "draft": "Draft",\n                "rejected": "Abgelehnt"\n            },\n            "content": "Inhalh",\n            "createdAt": "Erstellt am"\n        },\n        "titles": {\n            "create": "Erstellen",\n            "edit": "Bearbeiten",\n            "list": "Eintr\xe4ge",\n            "show": "Eintrag zeigen"\n        }\n    },\n    "table": {\n        "actions": "Aktionen"\n    }\n}\n')))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We can override refine's default texts by changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"common.json")," files in the example above.")),(0,a.kt)("h3",{id:"changing-the-locale"},"Changing The Locale"),(0,a.kt)("p",null,"Next, we will create a ",(0,a.kt)("inlineCode",{parentName:"p"},"<Header>")," component. This component will allow us to change the language."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/header.tsx"',title:'"src/components/header.tsx"'},'import { useGetLocale, useSetLocale } from "@pankod/refine-core";\nimport {\n    AntdLayout,\n    Space,\n    Menu,\n    Button,\n    Icons,\n    Dropdown,\n    Avatar,\n} from "@pankod/refine-antd";\nimport { useTranslation } from "react-i18next";\n\nconst { DownOutlined } = Icons;\n\nexport const Header: React.FC = () => {\n    const { i18n } = useTranslation();\n    const locale = useGetLocale();\n    const changeLanguage = useSetLocale();\n\n    const currentLocale = locale();\n\n    const menu = (\n        <Menu selectedKeys={currentLocale ? [currentLocale] : []}>\n            {[...(i18n.languages || [])].sort().map((lang: string) => (\n                <Menu.Item\n                    key={lang}\n                    onClick={() => changeLanguage(lang)}\n                    icon={\n                        <span style={{ marginRight: 8 }}>\n                            <Avatar\n                                size={16}\n                                src={`/images/flags/${lang}.svg`}\n                            />\n                        </span>\n                    }\n                >\n                    {lang === "en" ? "English" : "German"}\n                </Menu.Item>\n            ))}\n        </Menu>\n    );\n\n    return (\n        <AntdLayout.Header\n            style={{\n                display: "flex",\n                justifyContent: "flex-end",\n                alignItems: "center",\n                padding: "0px 24px",\n                height: "48px",\n                backgroundColor: "#FFF",\n            }}\n        >\n            <Dropdown overlay={menu}>\n                <Button type="link">\n                    <Space>\n                        <Avatar\n                            size={16}\n                            src={`/images/flags/${currentLocale}.svg`}\n                        />\n                        {currentLocale === "en" ? "English" : "German"}\n                        <DownOutlined />\n                    </Space>\n                </Button>\n            </Dropdown>\n        </AntdLayout.Header>\n    );\n};\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,"Then, we will pass ",(0,a.kt)("inlineCode",{parentName:"p"},"<Header>")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component as a property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine, Resource } from "@pankod/refine-core";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport { useTranslation } from "react-i18next";\nimport "./i18n";\n\nimport { PostList } from "pages/posts";\n\n// highlight-next-line\nimport { Header } from "components";\n\nconst App: React.FC = () => {\n    const { t, i18n } = useTranslation();\n\n    const i18nProvider = {\n        translate: (key: string, params: object) => t(key, params),\n        changeLocale: (lang: string) => i18n.changeLanguage(lang),\n        getLocale: () => i18n.language,\n    };\n\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            i18nProvider={i18nProvider}\n            // highlight-next-line\n            Header={Header}\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n')),(0,a.kt)("br",null),(0,a.kt)("p",null,"Finally, we will create the ",(0,a.kt)("inlineCode",{parentName:"p"},"<PostList>")," page and then we will translate texts using ",(0,a.kt)("inlineCode",{parentName:"p"},"useTranslate"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import {\n    // highlight-next-line\n    useTranslate,\n    useMany,\n} from "@pankod/refine-core";\nimport {\n    List,\n    Table,\n    TextField,\n    useTable,\n    Space,\n    EditButton,\n    ShowButton,\n} from "@pankod/refine-antd";\n\nimport { IPost, ICategory } from "interfaces";\n\nexport const PostList: React.FC = () => {\n    // highlight-next-line\n    const translate = useTranslate();\n    const { tableProps } = useTable<IPost>();\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n    const { data, isLoading } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column\n                    dataIndex="title"\n                    // highlight-next-line\n                    title={translate("posts.fields.title")}\n                />\n                <Table.Column\n                    dataIndex={["category", "id"]}\n                    // highlight-next-line\n                    title={translate("posts.fields.category")}\n                    render={(value) => {\n                        if (isLoading) {\n                            return <TextField value="Loading..." />;\n                        }\n\n                        return (\n                            <TextField\n                                value={\n                                    data?.data.find((item) => item.id === value)\n                                        ?.title\n                                }\n                            />\n                        );\n                    }}\n                />\n                <Table.Column<IPost>\n                    // highlight-next-line\n                    title={translate("table.actions")}\n                    dataIndex="actions"\n                    key="actions"\n                    render={(_value, record) => (\n                        <Space>\n                            <EditButton size="small" recordItemId={record.id} />\n                            <ShowButton size="small" recordItemId={record.id} />\n                        </Space>\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="interfaces/index.d.ts"',title:'"interfaces/index.d.ts"'},'export interface ICategory {\n    id: number;\n    title: string;\n}\n\nexport interface IPost {\n    id: number;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: { id: number };\n}\n')),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:s.Z,alt:"Language change action"})),(0,a.kt)("h2",{id:"live-stackblitz-example"},"Live StackBlitz Example"),(0,a.kt)("iframe",{loading:"lazy",src:"https://stackblitz.com/github/refinedev/refine/tree/master/examples/i18n/react?embed=1&view=preview&theme=dark&preset=node&ctl=1",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-i18n-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}g.isMDXComponent=!0},96990:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/changing-language-29d9520cc5c8ffcd5e1ab4ceac5ecd45.gif"}}]);