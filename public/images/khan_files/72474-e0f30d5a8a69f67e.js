"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72474],{72474:function(e,t,n){n.d(t,{B:function(){return Y}});var r=n(87394),o=n(52322),i=n(16642),a=n(71162),s=n(84833),c=n(18505),u=n(29510),l=n(19799),d=n(57858),m=n(27764),p=n(70314),g=n.n(p),h=n(5632),f=n(2784),v=n(38398),j=n.n(v),x=n(31294),S=n(9823),y=n(39232),T=[c.Z$,c.Tv,c.jS],k=[c.oy,c.G4,c.in,c.gG],w=[y.X2],O=g()().publicRuntimeConfig,b=O.enterpriseBaseUrl,L=O.shutterstockBaseUrl,_=/\/search(\?|\/).+$/,A=/\/editorial\/(?:video\/)?search\/.+$/,C=/\/video\/editorial\/?search/,B=/\/music\/search\/ras\/.+$/,E=/\/music\/search(\?|\/).+$/,I=/\/video\/search(\?|\/).+$/,N=function(e){return _.test(e)&&!(A.test(e)||B.test(e))},R=RegExp("^/editorial/(".concat(s.Nm.join("|"),")/")),P=function(e,t){if(!t)return n;var n,o=j().parse(t,!0).query,i=E.test(t)&&!(A.test(t)||B.test(t)),a=Object.entries(o).reduce(function(e,n){var o=(0,r.Z)(n,2),a=o[0],s=o[1];if(i&&k.includes(a)&&(e.push([a,Array.isArray(s)?s[0]:s]),i=!1),T.includes(a)&&!Array.isArray(s)){if(a===c.Tv&&w.includes(s)||(N(t)||I.test(t)&&!(A.test(t)||B.test(t)))&&a===c.jS)return e;e.push([a,s])}return e},[]);if(a&&!a.length)return n;var s=Object.fromEntries(a.sort());return j().format({pathname:e,query:s})},F=function(){var e=(0,S.D)().isBrandSstk?L:b,t=(0,h.useRouter)().asPath,n=(0,u.PE)().locale,r=(0,l.ug)(),o=r.query,i=r.spellcheckInfo,a=i.spellcheckedQuery,s=void 0===a?"":a,c=i.origResultsCount,d=(0,x.Q)().encodeSearchTerm;return{getCanonicalLink:(0,f.useCallback)(function(){var r,i,a,u,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},p=l.appendLocale,g=l.code,h=l.overriddenSearchTerm,f=null!==(u=null===(a=j().parse((0,m.oY)(t)))||void 0===a?void 0:a.pathname)&&void 0!==u?u:"",v=f;if(r=v,C.test(r)&&(v=v.replace("video/editorial","editorial/video")),i=v,R.test(i)&&(v=v.replace(R,"/editorial/livefeed/")),N(t)){var x=P(f,t);x&&(v=x),v=(0,m.Iz)({path:v,term:d(h||(0===c&&s?s:o))})}return"/templates/search"===v&&(v="/templates"),(0,m.ws)(e+v,p&&(g||n))},[t,d,n,c,o,s,e])}},G=function(){var e,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).overriddenSearchTerm,n=(0,l.ug)().queryTranslations,r=F().getCanonicalLink,o=(0,h.useRouter)().asPath,i=(0,u.PE)().locale,a=(0,x.Q)().encodeSearchTerm,s=r({appendLocale:!0,overriddenSearchTerm:t}),c=r(),m=N(o),p=d.Ft.map(function(e){if(!n[e]&&i!==e&&m||"en"!==i&&"en"===e&&s.includes(n.en)&&m)return null;var t=n[e]||n.en,o=r({code:e,appendLocale:!0});return m&&t&&(o=o.replace(/\/search\/[^/?]*/,"/search/".concat(a(t)))),{href:o,hrefLang:e}}).filter(function(e){return!!e});return N(o)&&(null===(e=p.find(function(e){return e.hrefLang===i}))||void 0===e?void 0:e.href)!==s&&(p=[]),{altDefaultLink:!m&&c,altLinks:p,canonicalLink:s}},M=n(97024),D=n(35776),H=n(68871),U=n(97729),Q=n.n(U),W=n(59877),q="Shutterstock",Z="Shutterstock Editorial",$=[["twitter:site","@shutterstock"],["twitter:card","summary_large_image"],["apple-itunes-app","app-id=473347409, app-argument=http://www.shutterstock.com/"],["google-site-verification","1wsiFwGziBzqCcMecpMDlbZgN1jKL-Fh6m05QXpg4QY"]],V=function(e){var t=e.isBrandSstk,n=(0,M.Ws)();return t&&n?Z:q},z=function(e){var t=e.metaTitle,n=e.isBrandSstk,r=(0,M.Ws)()&&n;return t.includes(q)?r?t.replace(q,Z):t:"".concat(t," | ").concat(r?Z:q)},J=function(e){var t=e.statusCode,n=(0,W.$G)([D.ocu,D._eB]).t,r=(0,S.D)(),i=r.isBrandSstk,s=r.isBrandEnterprise,c=(0,H.U3)(t)?t:a.Vj,u=n("error:status_".concat(c,"_title")),l=n(s&&t===a.gB?"".concat(D._eB,"::ent:no_access_content"):"error:status_".concat(c,"_subtitle")),d=z({metaTitle:u,isBrandSstk:i});return(0,o.jsxs)(Q(),{children:[(0,o.jsx)("title",{children:d},"title"),(0,o.jsx)("meta",{name:"description",content:l},"description"),(0,o.jsx)("meta",{content:d,property:"og:title"},"og:title"),(0,o.jsx)("meta",{content:l,property:"og:description"},"og:description")]})},Y=function(e){var t,n,s,c=e.description,u=e.image,l=void 0===u?{}:u,d=e.title,m=e.schemas,p=e.statusCode,g=e.noIndex,h=e.noIndexNoFollow,f=e.keywords,v=e.isAdultContent,j=e.contributor,x=void 0===j?{}:j,y=e.children,T=e.seoServiceData,k=(0,W.$G)(D.aGO).t,w=G({overriddenSearchTerm:null==T?void 0:T.taxonomyCanonical}),O=w.altDefaultLink,b=w.altLinks,L=w.canonicalLink,_=(0,S.D)(),A=_.isBrandSstk,C=_.isBrandEnterprise,B={title:d||k("home:lihp_meta_title"),description:c||k("home:lihp_meta_description")},E=B.title,I=B.description,N=V({isBrandSstk:A}),R=z({metaTitle:E,isBrandSstk:A}),P=(null==T?void 0:T.disposition)===i.M8&&(null==T?void 0:T.isSeoServiceActive),F=(null==T?void 0:T.disposition)===i.Hf&&(null==T?void 0:T.isSeoServiceActive),M=(g||P)&&!C,H=(h||F)&&!C,U=(null==T?void 0:T.disposition)===i.FL&&(null==T?void 0:T.canonicalURL)||L;return(0,o.jsxs)(o.Fragment,{children:[p>a.HO?(0,o.jsx)(J,{statusCode:p}):(0,o.jsxs)(Q(),{children:[(0,o.jsx)("title",{children:R},"title"),(0,o.jsx)("meta",{name:"description",content:I},"description"),(0,o.jsx)("meta",{content:R,property:"og:title"},"og:title"),(0,o.jsx)("meta",{content:I,property:"og:description"},"og:description"),y]}),(0,o.jsxs)(Q(),{children:[$.map(function(e){var t=(0,r.Z)(e,2),n=t[0],i=t[1];return(0,o.jsx)("meta",{name:n,content:i},n)}),(0,o.jsx)("meta",{content:"website",property:"og:type"},"type"),(0,o.jsx)("meta",{content:N,property:"og:site_name"},"site"),(0,o.jsx)("meta",{content:"604800",property:"og:ttl"},"og:ttl"),x.twitterUsername&&(0,o.jsx)("meta",{content:"@".concat(x.twitterUsername),name:"twitter:creator"},"twitter:creator"),l.url&&(0,o.jsx)("meta",{content:l.url,property:"og:image"},"og:image"),l.width&&(0,o.jsx)("meta",{content:Math.round(l.width),property:"og:image:width"},"og:image:width"),l.height&&(0,o.jsx)("meta",{content:Math.round(l.height),property:"og:image:height"},"og:image:height"),(null==l?void 0:null===(t=l.imageSmall)||void 0===t?void 0:t.url)&&(0,o.jsx)("meta",{content:l.imageSmall.url,property:"og:image"},"og:imageSmall"),(null==l?void 0:null===(n=l.imageSmall)||void 0===n?void 0:n.width)&&(0,o.jsx)("meta",{content:Math.round(l.imageSmall.width),property:"og:image:width"},"og:imageSmall:width"),(null==l?void 0:null===(s=l.imageSmall)||void 0===s?void 0:s.height)&&(0,o.jsx)("meta",{content:Math.round(l.imageSmall.height),property:"og:image:height"},"og:imageSmall:height"),l.alt&&(0,o.jsx)("meta",{content:l.alt,property:"og:image:alt"},"og:image:alt"),U&&(0,o.jsx)("meta",{content:U,property:"og:url"},"og:url"),H&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"robots",content:"noindex,nofollow"},"robots"),(0,o.jsx)("meta",{name:"googlebot",content:"noindex,nofollow"},"googlebot")]}),M&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("meta",{name:"robots",content:"noindex"},"robots"),(0,o.jsx)("meta",{name:"googlebot",content:"noindex"},"googlebot")]}),v&&(0,o.jsx)("meta",{name:"rating",content:"adult"}),!M&&!H&&!C&&(0,o.jsx)("meta",{name:"robots",content:"max-image-preview:large"}),m&&m.map(function(e){var t=e.type,n=e.contentType,r=e.innerHTML;return(0,o.jsx)("script",{type:t,dangerouslySetInnerHTML:{__html:r}},n)}),U&&(0,o.jsx)("link",{rel:"canonical",href:U}),b&&b.map(function(e){var t=e.href,n=e.hrefLang;return(0,o.jsx)("link",{rel:"alternate",href:t,hrefLang:n},n)}),O&&(0,o.jsx)("link",{rel:"alternate",href:O,hrefLang:"x-default"}),!!(null==f?void 0:f.length)&&(0,o.jsx)("meta",{name:"keywords",content:f.join(", ")})]})]})};Y.defaultProps={description:void 0,image:{},title:void 0,schemas:void 0,statusCode:void 0,noIndex:!1,noIndexNoFollow:!1,keywords:[],contributor:{},isAdultContent:!1,children:void 0,seoServiceData:{}}},16642:function(e,t,n){n.d(t,{FL:function(){return c},H2:function(){return i},Hf:function(){return s},M8:function(){return a},Rm:function(){return o},ke:function(){return r}});var r="https://schema.org",o={IMAGE_OBJECT:"ImageObject",VIDEO_OBJECT:"VideoObject",AUDIO_OBJECT:"AudioObject",MUSIC_GROUP:"MusicGroup",MUSIC_RECORDING:"MusicRecording",PRODUCT:"Product",OFFER:"Offer",ORGANIZATION:"Organization",PERSON:"Person",THING:"Thing",SEARCH_ACTION:"SearchAction",WEB_SITE:"WebSite",BREADCRUMBSLIST:"BreadcrumbList",FAQPAGE:"FAQPage",HOWTO:"HowTo",HOWTOSTEP:"HowToStep"},i={ORGANIZATION:o.ORGANIZATION.toLocaleLowerCase(),WEB_SITE:o.WEB_SITE.toLocaleLowerCase(),FAQPAGE:o.FAQPAGE.toLocaleLowerCase(),HOWTO:o.HOWTO.toLocaleLowerCase()},a="noindex",s="noindex-nofollow",c="canonicalize"},71162:function(e,t,n){n.d(t,{HO:function(){return r},VP:function(){return i},Vj:function(){return c},aQ:function(){return s},gB:function(){return o},is:function(){return a}});var r=200,o=403,i=404,a=410,s=429,c=500},31294:function(e,t,n){n.d(t,{Q:function(){return i}});var r=n(48417),o=n(2784),i=function(){return{encodeSearchTerm:(0,o.useCallback)(function(e){return(0,r.U9)(e)},[]),decodeSearchTerm:(0,o.useCallback)(function(e){return(0,r.JF)(e)},[])}}},97024:function(e,t,n){n.d(t,{JI:function(){return m},MJ:function(){return l},Wo:function(){return c},Ws:function(){return g},a$:function(){return u},jm:function(){return d}});var r=n(39232),o=n(18505),i=n(21770),a=n(27764),s=n(5632),c=function(){var e=(0,s.useRouter)().query[o.jS];return Number(void 0===e?1:e)},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultPageSize,n=void 0===t?10:t,r=(0,s.useRouter)().query[o.dp],a=void 0===r?n:r;return(0,i.k)(a)?Number(a):n},l=function(){var e=(0,s.useRouter)().query;return{endDate:e[o.BD],startDate:e[o.yZ]}},d=function(){return{orderBy:(0,s.useRouter)().query[o.qk]}},m=function(){var e,t=(0,s.useRouter)(),n=t.query,i=n[o.Tv],c=n[o.cb],u=t.asPath,l=(0,a.oY)(u),d=r.cp[c],m=(null===(e=l.match(a._g))||void 0===e?void 0:e[1])||i||r.k4,p=(0,a.N6)(l),g=i||d||p,h=(0,a.EV)(l,g),f=r.p_[g];return{assetType:m,assetSubType:h,fullAssetType:g,fullAssetTypeFromPath:p,editorialAssetType:f}},p=/^\/editorial/i,g=function(){var e=(0,s.useRouter)().asPath;return p.test(e)}},68871:function(e,t,n){n.d(t,{Fh:function(){return u},U3:function(){return c},vK:function(){return s}});var r=n(50930),o=n(71162),i=[o.gB,o.VP,o.is,o.aQ],a=(0,r.Z)(i).concat([o.Vj]),s=function(e){return i.includes(parseInt(e,10))},c=function(e){return a.includes(parseInt(e,10))},u=function(e){var t=e.error,n=((null==t?void 0:t.response)||t).status;return(void 0===n?500:n)||500}},21770:function(e,t,n){n.d(t,{k:function(){return r}});var r=function(e){return!Number.isNaN(Number.parseFloat(e))&&!Number.isNaN(+e)}}}]);
//# sourceMappingURL=72474-e0f30d5a8a69f67e.js.map