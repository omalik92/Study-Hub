"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85283],{38218:function(e,t,n){n.d(t,{e:function(){return J}});var i=n(47842),s=n(70865),r=n(96670),a=n(26297),o=n(87394),l=n(52322),d=n(21647),c=n(68043),u=n(51216),h=n(79436),p=n(67550),f=n(2784),m=n(8740),g=JSON.parse('{"productId":"2471210954516338071","name":"Guitar","signature_image":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-600/G03.jpg","initialImage":"G03","sprites_300":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-300/atlas-300.jpg","sprites_600":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-600/atlas-600.jpg","displays":{"600W":{"src":"https://atlas-content-cdn.pixelsquid.com/assets_v2/247/2471210954516338071/jpeg-600/G03.jpg","width":600,"height":600}},"extensions":{"atlas":{"camera_type_code":"full_spinner"}},"atlas":{"camera_type_code":"full_spinner"}}'),v=n(88351),w=(0,m.ZL)()(function(e){return{canvasContainer:{width:"100%",position:"relative",outline:0,borderColor:e.palette.border1Color,overflow:"hidden",display:"flex",justifyContent:"center"},canvas:{width:"100%",height:"100%"}}}),x=function(e){var t=e.asset,n=w().classes,i=(0,f.useRef)(null);return(0,v.k)({asset:t,canvasRef:i,autoRotate:!0}),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p.Z,{className:n.canvasContainer,children:(0,l.jsx)("canvas",{ref:i,className:n.canvas,width:600,height:600})})})};x.defaultProps={asset:g};var I=n(66358),k=n(58435),b=n(23490),P=n(44297),C=n(42005),y=n(57048),Z=n(89522),j=n(92405),L=n(776),O=n(56589),A=(0,m.ZL)()(function(e){var t=e.palette,n=e.tokens.spacing;return{link:{position:"absolute",overflow:"hidden",display:"block",top:0,left:0,height:"100%",width:"100%",zIndex:2,"&:focus-visible":{border:"".concat(n.xs," solid ").concat(t.primary.main),outline:0}},button:{all:"unset",position:"absolute",overflow:"hidden",display:"block",top:0,left:0,height:"100%",width:"100%",zIndex:2,cursor:"pointer"}}}),S=function(e){var t,n=e.hasExpansionRows,i=e.withLink,a=e.inView,d=e.asset,c=e.gridItems,p=e.getRoutePathProps,f=e.itemIndex,m=e.withProductClickTracking,g=e.withProductClickWhereYouLeftOffTracking,v=e.gridItemLinkClassName,w=e.rowIndex,O=e.handleClick,S=A(),_=S.classes,N=S.cx,R=(0,o.Z)((0,Z.KC)({asset:d,gridItems:c,getRoutePathProps:p,itemIndex:f}),2),E=R[0],G=R[1],T=(0,C.w)(),F=(0,y.D)(),M=(0,b.N)().isBot,W=(0,L.wU)(),z=a&&E?u.r:h.n,B=(0,j.p)(k.Y$,!1,!1,!0),q=(0,P.f8)(d)&&B&&(null===(t=d.displays["600W"])||void 0===t?void 0:t.src);return i?(0,l.jsx)(z,(0,r.Z)((0,s.Z)({className:N(_.link,v),href:E},z!==h.n&&{linkAs:G}),{onClick:M?null:function(e){n&&e.preventDefault(),m&&T({asset:d,gridItems:c,eventLabel:I.D7F,pageSection:W}),g&&F({eventLabel:I.LRD}),O({asset:d,rowIndex:w})},"aria-label":d.title||d.description,tabIndex:0,children:q&&(0,l.jsx)(x,{asset:d})})):null};S.defaultProps={withLink:!0,withProductClickTracking:!0,withProductClickWhereYouLeftOffTracking:!1,hasExpansionRows:!1,rowIndex:null,gridItemLinkClassName:null,handleClick:function(){},getRoutePathProps:O.r};var _=(0,f.memo)(S),N=n(39232),R=n(63256),E=n(29292),G=n(68533),T=function(){var e=(0,L.yh)().analytics,t=(0,G.Y)().getSearchContextFromAssets;return(0,f.useCallback)(function(n){var i=n.asset,s=n.listId,r=n.position,a=(0,E.qI)(i);s&&e.assetViewed({list_id:s,position:r,search_context:t([i]),product_id:a,sku:a,brand:(0,E.jN)(i)})},[e,t])},F=n(33967),M=n(75298),W=n(11800),z=n(68138),B=n(39860),q=function(e){return"string"==typeof e?e:Math.floor((e-1e-5)*1e3)/1e3},H=(0,m.ZL)()(function(e){var t=e.palette,n=e.tokens,i=n.color,s=n.spacing;return{item:{display:"block",overflow:"hidden",position:"relative"},link:{position:"absolute",overflow:"hidden",display:"block",top:0,left:0,height:"100%",width:"100%",zIndex:2,"&:focus-visible":{border:"".concat(s.xs," solid ").concat(t.primary.main),outline:0}},background:{backgroundColor:i.black},withAspectRatioSizing:{position:"absolute",width:"100%",height:"100%"},assetItemContainer:{width:"100%",height:"100%"},blankTemplateWrapper:{display:"flex",height:"100%"},assetItemSkeleton:{height:"100%"}}}),D=function(e,t){var n,i=(0,F.a)({contributor:{id:e.contributorId}}),s=i.isLoading,r=i.isAssetFreeToDownload;return!s&&((null==t?void 0:null===(n=t.restrictions)||void 0===n?void 0:n.isOverlayRestricted)||r)},Y=function(e){var t,n,u,h=e.asset,p=e.AssetItem,m=e.assetItemProps,g=e.AssetOverlay,v=e.assetOverlayProps,w=e.getRoutePathProps,x=e.gridItemClassName,I=e.gridItemLinkClassName,k=e.gridItems,b=e.height,P=e.isInfiniteGrid,C=e.isPopperOpen,y=e.itemIndex,Z=e.rowIndex,j=e.licensingAssetId,L=e.listId,O=e.spacing,A=e.width,S=e.withFixedDimensions,E=e.withSsr,G=e.withItemBackground,F=e.withLink,Y=e.withProductClickTracking,J=e.eagerAssetOverlayCount,V=e.useCssGrid,K=e.hasExpansionRows,U=e.handleClick,X=e.skeletonOnly,$=(0,a.Z)(e,["asset","AssetItem","assetItemProps","AssetOverlay","assetOverlayProps","getRoutePathProps","gridItemClassName","gridItemLinkClassName","gridItems","height","isInfiniteGrid","isPopperOpen","itemIndex","rowIndex","licensingAssetId","listId","spacing","width","withFixedDimensions","withSsr","withItemBackground","withLink","withProductClickTracking","eagerAssetOverlayCount","useCssGrid","hasExpansionRows","handleClick","skeletonOnly"]),Q=H({width:A,height:b}),ee=Q.classes,et=Q.cx,en=T(),ei=(0,B.T)({asset:h}),es=ei.isHovered,er=ei.setIsHovered,ea=ei.onMouseEnter,eo=ei.onMouseLeave,el=(0,o.Z)((0,f.useState)(!0),2),ed=el[0],ec=el[1],eu=(0,o.Z)((0,M.I)({triggerOnce:V||!P,defaultIsVisible:y<J}),2),eh=eu[0],ep=eu[1],ef=(0,B.t)({withSsr:E}),em=ef.isAssetLoaded,eg=ef.setIsAssetLoaded,ev=(0,o.Z)((0,f.useState)({height:q(b),width:q(A)}),2),ew=ev[0],ex=ev[1];(0,W.L)(function(){S&&!V&&ex({height:b,width:A}),eh&&L&&en({listId:L,position:y,asset:h}),!V&&P&&ec(eh)},[b,A,S,V,X,en,eh,y,L,h,P]);var eI=(0,R.r8)(h,!0),ek=c.hq.SIZE+c.hq.STEP;if(eI.height!==ek){var eb=(eI.height-ek)/eI.height;eI.height=ek,eI.width-=eI.width*eb}var eP=(0,z.cK)(eI).classes,eC=D(h,v);return(0,l.jsx)("div",{role:"img","aria-label":"Asset ".concat(null!==(n=h.description)&&void 0!==n?n:"").trim(),"data-automation":"AssetGrids_GridItemContainer_div",onMouseEnter:ea,onMouseLeave:eo,ref:ep,style:(0,r.Z)((0,s.Z)({},S&&!V&&ew,O&&{margin:"".concat(O,"px")}),{"--itemFlexBasis":(0,z.OM)(0,eI),"--itemFlexBasisLg":(0,z.OM)(c.hq.STEP,eI),"--itemFlexBasisMd":(0,z.OM)(2*c.hq.STEP,eI),"--itemFlexBasisSm":(0,z.OM)(4*c.hq.STEP,eI),"--itemFlexGrow":(0,z.kw)(eI)}),className:et(ee.item,x,V&&eP.item,G&&em&&ee.background),children:ed&&(0,l.jsxs)(l.Fragment,{children:[!X&&(0,l.jsx)(_,{asset:h,inView:eh,withLink:F,rowIndex:Z,itemIndex:y,gridItems:k,handleClick:U,hasExpansionRows:K,getRoutePathProps:w,gridItemLinkClassName:I,withProductClickTracking:Y,withProductClickWhereYouLeftOffTracking:v.withProductClickWhereYouLeftOffTracking}),(eh||y<J)&&!eC&&!!g&&!X&&(0,l.jsx)(g,(0,s.Z)({listId:L,asset:h,gridItems:k,isHovered:es,setIsHovered:er,isAssetLoaded:em,itemIndex:y,licensingAssetId:j,width:A},v,$)),p&&(0,l.jsxs)(l.Fragment,{children:[!X&&(0,l.jsx)("div",{style:{"--assetItemContainerDisplay":(0,z.wj)(eI)?"flex":null,"--assetItemContainerAlignItems":(0,z.wj)(eI)?"center":null},className:et(ee.assetItemContainer,V&&eP.assetItemContainer,(0,i.Z)({},ee.withAspectRatioSizing,!S)),children:(null==m?void 0:null===(t=m.holding)||void 0===t?void 0:t.isLoading)?(0,l.jsx)(d.Z,{variant:"rounded",className:ee.assetItemSkeleton}):(0,l.jsx)("div",{style:{"--letterboxingWrapperPadding":V&&(0,z.wj)(eI)?"".concat((0,z.Px)(eI),"%"):null},className:et((u={},(0,i.Z)(u,eP.letterboxingWrapper,V&&!(0,z.wj)(eI)),(0,i.Z)(u,eP.letterboxingWrapperWithPseudo,V&&(0,z.wj)(eI)),(0,i.Z)(u,ee.blankTemplateWrapper,(null==h?void 0:h.type)===N.C_),u)),children:(0,l.jsx)(p,(0,s.Z)({asset:h,gridItems:k,isHovered:C||es,onLoadHandler:eg,withSsr:E,itemIndex:y},m,$))})}),!S&&(0,l.jsx)("div",{style:{paddingBottom:A&&b&&"".concat(b/A*100,"%")}}),V&&(0,l.jsx)("div",{style:{paddingBottom:"".concat((eI.height/(0,z.hq)(eI)*100).toFixed(3),"%")}})]})]})})};Y.defaultProps={AssetOverlay:null,assetItemProps:{},assetOverlayProps:{},eagerAssetOverlayCount:0,getRoutePathProps:O.r,gridItemClassName:null,gridItemLinkClassName:null,isInfiniteGrid:!1,isPopperOpen:!1,licensingAssetId:"",listId:"",spacing:0,withFixedDimensions:!0,withItemBackground:!1,withLink:!0,withProductClickTracking:!0,withSsr:!1,hasExpansionRows:!1,rowIndex:null,handleClick:function(){}};var J=(0,f.memo)(Y)},39860:function(e,t,n){n.d(t,{T:function(){return l},t:function(){return d}});var i=n(87394),s=n(44297),r=n(54073),a=n.n(r),o=n(2784),l=function(e){var t=e.asset,n=(0,i.Z)((0,o.useState)(!1),2),r=n[0],l=n[1],d=(0,s.Am)(t),c=function(){return l(!0)},u=a()(c,200);return{isHovered:r,setIsHovered:l,onMouseEnter:d?u:c,onMouseLeave:function(){d&&u.cancel(),l(!1)}}},d=function(e){var t=e.withSsr,n=(0,i.Z)((0,o.useState)(t),2);return{isAssetLoaded:n[0],setIsAssetLoaded:n[1]}}},62234:function(e,t,n){n.d(t,{J:function(){return r}});var i=n(47842),s=n(68043),r=(0,n(8740).ZL)()(function(e){var t=e.breakpoints,n=e.palette,r=e.tokens,a=r.radius,o=r.zIndex,l=r.animation;return{root:{display:"flex",flexWrap:"wrap",transition:"opacity ".concat(l.duration.fast," ").concat(l.easing.default," .05s")},mobileScrollWrapper:(0,i.Z)({width:"100%"},t.down(s.x_),{display:"flex",width:"100%",overflowX:"auto",overflowY:"hidden",transform:"translateZ(0)"}),mobileScrollContent:(0,i.Z)({},t.down(s.x_),{"&&":{width:"auto"},flexWrap:"nowrap",display:"inline-flex","&:after":{content:'""',background:"\n          linear-gradient(\n            to left,\n            ".concat(n.background.default," 0,\n            transparent 100%\n          )"),position:"sticky",width:s.an,marginLeft:-s.an,top:0,bottom:0,right:0,pointerEvents:"none",zIndex:o["2"]}}),sstkGridItem:{borderRadius:a.m}}})},29938:function(e,t,n){n.d(t,{K:function(){return l}});var i=n(87394),s=n(87420),r=n(2784),a=n(68043),o=n(83303),l=function(e){var t=e.containerEl,n=e.defaultRenderWidth,l=void 0===n?a.zU:n,d=e.gridSizingOptions,c=e.defaultHeight,u=e.spacing,h=e.useCssGrid,p=h?1:0,f=(0,i.Z)((0,r.useState)(p),2),m=f[0],g=f[1],v=(0,s.h)(t,250,p).width,w=v?Math.max(v-1,0):l;return!h&&Math.floor(Math.abs(w-m))>1&&g(w),{rowHeight:(0,r.useMemo)(function(){return p||(0,o.yl)({width:m,gridSizingOptions:d,defaultHeight:c,spacing:u})},[c,p,d,m,u]),rowWidth:m}}},64428:function(e,t,n){n.d(t,{B:function(){return O}});var i,s=n(70865),r=n(52322),a=n(25237),o=n.n(a),l=o()(function(){return Promise.all([n.e(31373),n.e(43764),n.e(74264),n.e(14315)]).then(n.bind(n,4407)).then(function(e){return e.TemplateAssetItemOverlay})},{loadableGenerated:{webpack:function(){return[4407]}},ssr:!0}),d=n(69639),c=n(39232),u=n(19511),h=o()(function(){return Promise.all([n.e(31373),n.e(43764),n.e(74264),n.e(55053)]).then(n.bind(n,42075)).then(function(e){return e.ImageAssetItemOverlay})},{loadableGenerated:{webpack:function(){return[42075]}},ssr:!0}),p=function(e){var t=e.initialProps;return(0,r.jsx)(h,(0,s.Z)({},t))},f=n(47842),m=n(88849),g=n(2784),v=o()(function(){return Promise.all([n.e(31373),n.e(43764),n.e(74264),n.e(55053)]).then(n.bind(n,89056)).then(function(e){return e.ImageAssetItemOverlay})},{loadableGenerated:{webpack:function(){return[89056]}},ssr:!0}),w={flagID:"serce-158-srp-asset-title-hover-over",id:"SERCE-158",name:"Add Asset Title SRP Hover",treatments:(i={},(0,f.Z)(i,m.NM,function(e){var t=e.experiment,n=e.initialProps;return(0,g.useEffect)(function(){t.recordImpression()},[]),(0,r.jsx)(p,{initialProps:n})}),(0,f.Z)(i,m.vG,function(e){var t=e.experiment,n=e.initialProps;return(0,g.useEffect)(function(){t.recordImpression()},[]),(0,r.jsx)(v,(0,s.Z)({},n))}),i)},x=function(){return(0,r.jsx)(r.Fragment,{})},I=function(e){return(0,r.jsx)(u.K,{config:w,initialProps:e,Portal:p,SkeletonLoader:x})},k=n(44297),b=n(9823),P=n(43110),C=o()(function(){return Promise.all([n.e(31373),n.e(43764),n.e(74264),n.e(95489)]).then(n.bind(n,72690)).then(function(e){return e.AssetItemOverlay})},{loadableGenerated:{webpack:function(){return[72690]}},ssr:!0}),y=o()(function(){return Promise.all([n.e(31373),n.e(43764),n.e(74264),n.e(73449)]).then(n.bind(n,64533)).then(function(e){return e.EnterpriseAssetItemOverlay})},{loadableGenerated:{webpack:function(){return[64533]}},ssr:!0}),Z=o()(function(){return Promise.all([n.e(31373),n.e(31421)]).then(n.bind(n,14770)).then(function(e){return e.TrackOverlay})},{loadableGenerated:{webpack:function(){return[14770]}},ssr:!0}),j=o()(function(){return n.e(49151).then(n.bind(n,25508)).then(function(e){return e.CreateTemplateOverlay})},{loadableGenerated:{webpack:function(){return[25508]}},ssr:!0}),L=function(e){var t=e.asset;switch((0,k._L)(t)){case c.tn:case c.xF:return(0,r.jsx)(Z,(0,s.Z)({},e));case c.C_:case c.zo:return(0,r.jsx)(j,(0,s.Z)({},e));case c.k4:return(0,r.jsx)(I,(0,s.Z)({},e));case c.hv:return(0,r.jsx)(l,(0,s.Z)({},e));case c.Nk:return(0,r.jsx)(d.z,(0,s.Z)({},e));default:return(0,r.jsx)(C,(0,s.Z)({},e))}},O=function(e){var t=(0,b.D)().isBrandEnterprise,n=(0,P.B)(),i=e.asset;if(t){if(void 0===n)return null;if(n)return(0,k.t1)(i)?(0,r.jsx)(d.z,(0,s.Z)({},e)):(0,r.jsx)(y,(0,s.Z)({},e))}return(0,r.jsx)(L,(0,s.Z)({isUserLoggedIn:n},e))}},15883:function(e,t,n){n.d(t,{y:function(){return d}});var i=n(70865),s=n(26297),r=n(52322),a=n(39232),o=n(44297),l=n(64428),d=function(e){var t=e.asset,n=e.isAssetLoaded,d=(0,s.Z)(e,["asset","isAssetLoaded"]),c=(0,o.Tp)(t);if(!n&&c!==a.xF)return null;switch(c){case a.zo:case a.hv:case a.k4:case a.xF:case a.tn:case a.nX:case a.A7:case a.Nk:case a.pX:return(0,r.jsx)(l.B,(0,i.Z)({asset:t},d));default:return null}}},69639:function(e,t,n){n.d(t,{z:function(){return s}});var i=n(25237),s=n.n(i)()(function(){return Promise.all([n.e(31373),n.e(97993),n.e(88607),n.e(98318)]).then(n.bind(n,88944)).then(function(e){return e.GenerateAssetItemOverlay})},{loadableGenerated:{webpack:function(){return[88944]}},ssr:!0})},80530:function(e,t,n){n.d(t,{l:function(){return d}});var i=n(70865),s=n(29292),r=n(44297),a=n(776),o=n(2784),l=n(68533),d=function(){var e=(0,a.yh)().analytics,t=(0,a.wU)(),n=(0,l.Y)().getSearchContextFromAssets;return(0,o.useCallback)(function(a){var o=a.assets,l=a.position,d=a.listId,c=a.eventLabel;(null==o?void 0:o.length)&&e.productListViewed((0,i.Z)({list_id:d,position:l,products:o.map(function(e){return{product_id:(0,s.qI)(e),asset_type:(0,r.ZZ)(e),sku:(0,s.qI)(e)}}),search_context:n(o)},t?{pageSection:t,eventLabel:void 0===c?"":c}:{}))},[e,n,t])}},87420:function(e,t,n){n.d(t,{h:function(){return d}});var i=n(26297),s=n(87394),r=n(13787),a=n(2784),o=n(11800),l={bottom:0,height:0,left:0,right:0,top:0,width:0,x:0,y:0,toJSON:function(){return this.toJSON,(0,i.Z)(this,["toJSON"])}},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=(0,s.Z)((0,a.useState)(l),2),d=i[0],c=i[1];return(0,o.L)(function(){if(n)return function(){};var i=new window.ResizeObserver((0,r.P)(function(e){var t=e[0],n=null==t?void 0:t.contentRect;n&&c(n)},t));return i.observe(e.current),function(){i.disconnect(),i=null}},[t,c,e]),d}}}]);
//# sourceMappingURL=85283-d2218d50bec15ff2.js.map