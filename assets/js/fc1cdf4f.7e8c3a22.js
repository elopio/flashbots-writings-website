"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[6699],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),h=l(r),p=a,f=h["".concat(c,".").concat(p)]||h[p]||u[p]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7898:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return m},toc:function(){return u},default:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={slug:"cross-domain-mev",title:"Unity is Strength - A Formalization of Cross-Domain Maximal Extractable Value",authors:["obadiaa","alejo","lakshman","tarun","phil","vaibhav"],tags:["research"],image:"https://i.imgur.com/mErPwqL.png",hide_table_of_contents:!1},c=void 0,l={permalink:"/research/cross-domain-mev",source:"@site/research/2021-12-03-cross-domain-mev.mdx",title:"Unity is Strength - A Formalization of Cross-Domain Maximal Extractable Value",description:"The multi-chain future is upon us. Modular architectures are coming to maturity across the ecosystem",date:"2021-12-03T00:00:00.000Z",formattedDate:"December 3, 2021",tags:[{label:"research",permalink:"/research/tags/research"}],readingTime:1.25,truncated:!0,authors:[{name:"Alex Obadia",title:"Research @Flashbots",url:"https://twitter.com/ObadiaAlex",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"obadiaa"},{name:"Alejo Salles",title:"Research @Flashbots",url:"https://twitter.com/fiiiu_",imageURL:"https://pbs.twimg.com/profile_images/1005592876930224128/JRAMFVUq_400x400.jpg",key:"alejo"},{name:"Lakshman Sankar",title:"Researcher",url:"https://twitter.com/lakshmansankar",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"lakshman"},{name:"Tarun Chitra",title:"Gauntlet Network",url:"https://twitter.com/tarunchitra",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"tarun"},{name:"Phil Daian",title:"Research @Flashbots",url:"https://pdaian.com/",imageURL:"https://pbs.twimg.com/profile_images/968496806639398912/Th087Dhz_400x400.jpg",key:"phil"},{name:"Vaibhav Chellani",title:"Movr",url:"https://twitter.com/vaibhavchellani",imageURL:"https://pbs.twimg.com/profile_images/1432425822707650565/bKxdVmeR_400x400.jpg",key:"vaibhav"}],prevItem:{title:"On the Formalization of MEV",permalink:"/research/formalization-mev"},nextItem:{title:"On the Formalization of MEV",permalink:"/research/formalization-mev"}},m={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0,void 0]},u=[],h={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The multi-chain future is upon us. Modular architectures are coming to maturity across the ecosystem\nto scale bandwidth and throughput of cryptocurrency. One example of such is the Ethereum modular\narchitecture, with its beacon chain, its execution chain, its Layer 2s, and soon its shards. These can all\nbe thought as separate blockchains, heavily inter-connected with one another, and together forming an\necosystem."),(0,i.kt)("p",null,"In this work, we call each of these interconnected blockchains \u2018domains\u2019, and study the manifestation of\nMaximal Extractable Value (MEV, a generalization of \u201cMiner Extractable Value\u201d) across them. In other\nwords, we investigate whether there exists extractable value that depends on the ordering of transactions\nin two or more domains jointly."),(0,i.kt)("p",null,"We first recall the definitions of Extractable and Maximal Extractable Value, before introducing a\ndefinition of Cross-Domain Maximal Extractable Value. We find that Cross-Domain MEV can be used\nto measure the incentive for transaction sequencers in different domains to collude with one another,\nand study the scenarios in which there exists such an incentive. We end the work with a list of negative\nexternalities that might arise from cross-domain MEV extraction and lay out several open questions.\nWe note that the formalism in this work is a work-in-progress, and we hope that it can serve as the\nbasis for formal analysis tools in the style of those presented in Clockwork Finance ","[1]",", as well as for\ndiscussion on how to mitigate the upcoming negative externalities of substantial cross-domain MEV."),(0,i.kt)("p",null,"Access the full paper here: ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2112.01472.pdf"},"https://arxiv.org/pdf/2112.01472.pdf")))}p.isMDXComponent=!0}}]);