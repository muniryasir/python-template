"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[920],{1297:(e,t,s)=>{s.r(t),s.d(t,{default:()=>$});var a=s(7294),r=s(2263),n=s(8862),l=s(5742),c=s(9960),o=s(5999);const u=["zero","one","two","few","many","other"];function h(e){return u.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:h(["one","other"]),select:e=>1===e?"one":"other"};function m(){const{i18n:{currentLocale:e}}=(0,r.default)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:h(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function d(){const e=m();return{selectMessage:(t,s)=>function(e,t,s){const a=e.split("|");if(1===a.length)return a[0];a.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=s.select(t),n=s.pluralForms.indexOf(r);return a[Math.min(n,a.length-1)]}(s,t,e)}}var p=s(1728),g=s(6550),f=s(2389);const x=function(){const e=(0,f.default)(),t=(0,g.useHistory)(),s=(0,g.useLocation)(),{siteConfig:{baseUrl:a}}=(0,r.default)(),n=e?new URLSearchParams(s.search):null,l=n?.get("q")||"",c=n?.get("ctx")||"",o=n?.get("version")||"",u=e=>{const t=new URLSearchParams(s.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:l,searchContext:c,searchVersion:o,updateSearchPath:e=>{const s=u(e);t.replace({search:s.toString()})},updateSearchContext:e=>{const a=new URLSearchParams(s.search);a.set("ctx",e),t.replace({search:a.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${a}search?${t.toString()}`}}};var y=s(22),S=s(8202),C=s(2539),j=s(726),P=s(1073),w=s(311),I=s(3926),v=s(1029);const R={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};var b=s(5893);function _(){const{siteConfig:{baseUrl:e}}=(0,r.default)(),{selectMessage:t}=d(),{searchValue:s,searchContext:n,searchVersion:c,updateSearchPath:u,updateSearchContext:h}=x(),[i,m]=(0,a.useState)(s),[g,f]=(0,a.useState)(),[C,j]=(0,a.useState)(),P=`${e}${c}`,I=(0,a.useMemo)((()=>i?(0,o.translate)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:i}):(0,o.translate)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[i]);(0,a.useEffect)((()=>{u(i),g&&(i?g(i,(e=>{j(e)})):j(void 0))}),[i,g]);const _=(0,a.useCallback)((e=>{m(e.target.value)}),[]);return(0,a.useEffect)((()=>{s&&s!==i&&m(s)}),[s]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,y.fetchIndexes)(P,n);f((()=>(0,S.SearchSourceFactory)(e,t,100)))}()}),[n,P]),(0,b.jsxs)(a.Fragment,{children:[(0,b.jsxs)(l.default,{children:[(0,b.jsx)("meta",{property:"robots",content:"noindex, follow"}),(0,b.jsx)("title",{children:I})]}),(0,b.jsxs)("div",{className:"container margin-vert--lg",children:[(0,b.jsx)("h1",{children:I}),(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)("div",{className:(0,p.default)("col",{[R.searchQueryColumn]:Array.isArray(v.searchContextByPaths),"col--9":Array.isArray(v.searchContextByPaths),"col--12":!Array.isArray(v.searchContextByPaths)}),children:(0,b.jsx)("input",{type:"search",name:"q",className:R.searchQueryInput,"aria-label":"Search",onChange:_,value:i,autoComplete:"off",autoFocus:!0})}),Array.isArray(v.searchContextByPaths)?(0,b.jsx)("div",{className:(0,p.default)("col","col--3","padding-left--none",R.searchContextColumn),children:(0,b.jsxs)("select",{name:"search-context",className:R.searchContextInput,id:"context-selector",value:n,onChange:e=>h(e.target.value),children:[(0,b.jsx)("option",{value:"",children:v.useAllContextsWithNoSearchContext?(0,o.translate)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""}),v.searchContextByPaths.map((e=>(0,b.jsx)("option",{value:e,children:e},e)))]})}):null]}),!g&&i&&(0,b.jsx)("div",{children:(0,b.jsx)(w.default,{})}),C&&(C.length>0?(0,b.jsx)("p",{children:t(C.length,(0,o.translate)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:C.length}))}):(0,b.jsx)("p",{children:(0,o.translate)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"})})),(0,b.jsx)("section",{children:C&&C.map((e=>(0,b.jsx)(F,{searchResult:e},e.document.i)))})]})]})}function F(e){let{searchResult:{document:t,type:s,page:a,tokens:r,metadata:n}}=e;const l=0===s,o=2===s,u=(l?t.b:a.b).slice(),h=o?t.s:t.t;l||u.push(a.t);let i="";if(v.Mark&&r.length>0){const e=new URLSearchParams;for(const t of r)e.append("_highlight",t);i=`?${e.toString()}`}return(0,b.jsxs)("article",{className:R.searchResultItem,children:[(0,b.jsx)("h2",{children:(0,b.jsx)(c.default,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,C.highlight)(h,r):(0,j.highlightStemmed)(h,(0,P.getStemmedPositions)(n,"t"),r,100)}})}),u.length>0&&(0,b.jsx)("p",{className:R.searchResultItemPath,children:(0,I.concatDocumentPath)(u)}),o&&(0,b.jsx)("p",{className:R.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,j.highlightStemmed)(t.t,(0,P.getStemmedPositions)(n,"t"),r,100)}})]})}const $=function(){return(0,b.jsx)(n.default,{children:(0,b.jsx)(_,{})})}}}]);