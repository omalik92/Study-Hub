"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89045],{15454:function(n,e,t){t.d(e,{p:function(){return a}});var o=t(25237),a=t.n(o)()(function(){return Promise.all([t.e(80246),t.e(2669)]).then(t.bind(t,90964)).then(function(n){return n.AddToCartSnackbar})},{loadableGenerated:{webpack:function(){return[90964]}},ssr:!1})},89045:function(n,e,t){t.d(e,{i:function(){return k}});var o=t(47842),a=t(52322),i=t(18731),r=t(86669),s=t(54112),d=t(98779),l=t(73377),u=t(35776),c=t(32545),_=t(25237),f=t.n(_),h=t(2784),m=t(8740),v=t(15454),w=t(46159),p=(0,h.createContext)({}),g=function(){var n=(0,h.useContext)(p),e=n.color,t=n.shouldUseIcon,o=n.variant;return(0,a.jsx)(w.F,{color:e,shouldUseIcon:t,variant:o,width:70})},y=t(98202),x=f()(function(){return Promise.all([t.e(34482),t.e(94412)]).then(t.bind(t,21169)).then(function(n){return n.OpenLicenseDrawerButton})},{loadableGenerated:{webpack:function(){return[21169]}},ssr:!1,loading:g}),b=f()(function(){return Promise.all([t.e(41075),t.e(70180),t.e(88103),t.e(30198),t.e(68152)]).then(t.bind(t,68152)).then(function(n){return n.ExperimentCVRT846DownloadButton})},{loadableGenerated:{webpack:function(){return[68152]}},ssr:!1}),S=f()(function(){return Promise.all([t.e(61668),t.e(68439)]).then(t.bind(t,68439)).then(function(n){return n.AddToCartButton})},{loadableGenerated:{webpack:function(){return[68439]}},ssr:!1,loading:g}),A=(0,m.ZL)()(function(n,e){var t=n.breakpoints,a=e.iconBreakpoint;return{root:(0,o.Z)({minWidth:150},t.down(a),{minWidth:0})}}),Z={download:"common:actions_download",downloadForFree:"image:logout_adp_free_trial_download",redownload:"common:actions_redownload"},k=function(n){var e=n.asset,t=n.assetSize,o=n.clickAnalyticsLabels,_=n.canOpenDrawerOnLoad,f=n.color,m=n.iconBreakpoint,g=n.hideCtaComponent,k=n.variant,L=A({iconBreakpoint:m}).classes,T=(0,s.D)({namespace:u.Otp,translationKeys:Z}).labels,C=(0,h.useCallback)(function(n){var e=n.hasExistingLicense?o.redownloadButton:o.downloadButton;return(0,l.U_)(e)},[o.downloadButton,o.redownloadButton]),I=(0,c.iP)(null==e?void 0:e.holding),B=(0,y.A)({asset:e,clickAnalyticsLabels:o,labels:T,assetIsLicensed:I,hideCtaComponent:g,shouldFetchEligibility:!I}),E=B.addToCartFailureHandler,F=B.addToCartStatus,O=B.addToCartSuccessHandler,z=B.closeAddToCartSnackbarHandler,D=B.downloadButtonClickAnalyticsLabel,P=B.downloadButtonLabel,U=B.eligibility,j=B.hasExistingLicense,N=B.shouldShowAddToCartButton,R=B.shouldShowDownloadButton,W=B.shouldShowOpenLicenseDrawerButton,V=B.shouldShowButtonLoadingPlaceholder,H=(0,d.d)({breakpoint:m});return(0,a.jsx)("div",{className:L.root,children:V&&!R?(0,a.jsx)(w.F,{color:f,shouldUseIcon:H,variant:k,width:70}):(0,a.jsxs)(p.Provider,{value:{color:f,shouldUseIcon:H,variant:k},children:[R&&(0,a.jsx)(b,{asset:e,clickAnalyticsLabel:(0,l.U_)(D),label:P,color:f,variant:k,shouldUseDownloadIcon:H}),W&&(0,a.jsx)(i.l,{allSizesAssetEligibility:U,asset:e,canOpenDrawerOnLoad:_,children:(0,a.jsx)(x,{clickAnalyticsLabel:C({hasExistingLicense:j}),label:j?T.redownload:T.download,onAddToCartSuccess:O,color:f,variant:k,shouldUseDownloadIcon:H,canOpenDrawerOnLoad:_})}),N&&(0,a.jsx)(S,{asset:e,itemsToAdd:[(0,r.zg)({asset:e,assetSize:t})],onAddToCartSuccess:O,onAddToCartFailure:E,color:f,variant:k,shouldUseIcon:H,clickAnalyticsLabel:(0,l.U_)(o.addToCartButton)}),!!F.status&&(0,a.jsx)(v.p,{alertSeverity:F.status,onCloseSnackbar:z,error:F.error})]})})};k.defaultProps={asset:{},clickAnalyticsLabels:{},iconBreakpoint:null,hideCtaComponent:!1}},98202:function(n,e,t){t.d(e,{A:function(){return y}});var o=t(47842),a=t(87394),i=t(44699),r=t(39232),s=t(44297),d=t(37443),l=t(95775),u=t(70008),c=t(43110),_=t(20865),f=t(2784),h=t(70865),m=t(96670),v=function(n){var e=n.clickAnalyticsLabels,t=n.hasExistingLicense,o=n.isOffsetAsset,a=n.isRexEditorialAsset,i=n.isLoggedInUser,r=n.labels,s=n.override;return(0,h.Z)((0,m.Z)((0,h.Z)({},a?{downloadButtonClickAnalyticsLabel:e.downloadButton,downloadButtonLabel:r.download}:{downloadButtonClickAnalyticsLabel:e.downloadFreeButton,downloadButtonLabel:r.downloadForFree}),{shouldShowDownloadButton:!i&&!o,shouldShowAddToCartButton:!!o&&!t,shouldShowOpenLicenseDrawerButton:i&&!o||i&&o&&t}),null==s?void 0:s())},w=function(n){var e=n.isFootageSelect,t=n.isLoggedInUser,o=n.isLoggedInWithoutPlan;return{shouldShowAddToCartButton:!t||o||e,shouldShowDownloadButton:!1,shouldShowOpenLicenseDrawerButton:n.isLoggedInWithPlan&&!e}},p=function(n){var e,t=n.assetType,o=n.clickAnalyticsLabels,a=n.hasExistingLicense,i=n.hasExistingSubscription,s=n.isFootageSelect,d=n.isLoggedInUser,l=n.isOffsetAsset,u=n.isRexEditorialAsset,c=n.labels,_=n.overrides,f=i||a,h=d&&!f,m=d&&f;switch(t){case r.k4:e=v({clickAnalyticsLabels:o,hasExistingLicense:a,hasPlan:f,isLoggedInUser:d,isOffsetAsset:l,isRexEditorialAsset:u,labels:c,override:_[r.k4]});break;case r.pX:e=w({isFootageSelect:s,isLoggedInUser:d,isLoggedInWithoutPlan:h,isLoggedInWithPlan:m});break;case r.xF:case r.tn:default:e={shouldShowAddToCartButton:!d||h||s,shouldShowDownloadButton:!1,shouldShowOpenLicenseDrawerButton:m&&!s}}return t===r.pX&&u?{shouldShowAddToCartButton:!a,shouldShowDownloadButton:!1,shouldShowOpenLicenseDrawerButton:a}:e},g=function(n){var e=n.isLoggedInUser,t=n.shouldFetchEligibility,o=n.hasActiveSubscriptionForAssetType,a=n.assetType,i=n.isFootageSelect,s=n.isOffsetAsset,d=!i&&(s&&a===r.k4||a===r.pX||a===r.xF||a===r.tn);return!!(e&&t&&(!1===o||s)&&d)},y=function(n){var e,t,h=n.asset,m=n.clickAnalyticsLabels,v=n.hideCtaComponent,w=void 0!==v&&v,y=n.labels,x=n.shouldFetchEligibility,b=n.assetIsLicensed,S=h.isFootageSelect,A=(0,s.Tp)(h),Z=(0,s.PD)(h),k=(0,s.EK)(h),L=(0,c.B)(),T=(0,u.B)().isIndiaRegion,C=(0,_.DJ)().data,I=(0,d.l)({subscriptions:C,assetType:A,isRexEditorialAsset:k}),B=g({isLoggedInUser:L,shouldFetchEligibility:void 0===x||x,hasActiveSubscriptionForAssetType:I,assetType:A,isFootageSelect:S,isOffsetAsset:Z}),E=(0,l.IP)({assets:[h],shouldFetch:B}).data,F=(0,a.Z)((0,f.useState)({status:"",error:void 0}),2),O=F[0],z=F[1],D=void 0!==b&&b||!!(null==E?void 0:null===(e=E.licenses)||void 0===e?void 0:e.length),P=!!(null==E?void 0:null===(t=E.subscriptions)||void 0===t?void 0:t.length)||I,U=p({assetType:A,clickAnalyticsLabels:void 0===m?{}:m,hasExistingLicense:D,hasExistingSubscription:P,isFootageSelect:S,isLoggedInUser:L,isOffsetAsset:Z,isRexEditorialAsset:k,labels:void 0===y?{}:y,overrides:(0,o.Z)({},r.k4,function(){return!T||L||k?w&&Z?{shouldShowAddToCartButton:!1}:{}:{shouldShowDownloadButton:!1,shouldShowOpenLicenseDrawerButton:!0}})}),j=U.shouldShowDownloadButton,N=U.shouldShowOpenLicenseDrawerButton,R=U.shouldShowAddToCartButton,W=U.downloadButtonClickAnalyticsLabel,V=U.downloadButtonLabel,H=(0,f.useCallback)(function(){return z({status:i.MR,error:void 0})},[]);return{addToCartFailureHandler:(0,f.useCallback)(function(n){return z({status:i.cM,error:n})},[]),addToCartStatus:O,addToCartSuccessHandler:H,closeAddToCartSnackbarHandler:(0,f.useCallback)(function(){return z({status:"",error:void 0})},[]),downloadButtonClickAnalyticsLabel:W,downloadButtonLabel:V,eligibility:E,hasExistingLicense:D,shouldShowAddToCartButton:R,shouldShowButtonLoadingPlaceholder:void 0===L||L&&void 0===C,shouldShowDownloadButton:j,shouldShowOpenLicenseDrawerButton:N}}},46159:function(n,e,t){t.d(e,{F:function(){return l}});var o=t(52322),a=t(85801),i=t(72841),r=t(83249),s=t(21647),d=(0,t(8740).ZL)()(function(n){var e=n.palette;return{secondary:{"&:disabled":{backgroundColor:e.secondary.main}},"skeleton-secondary":{backgroundColor:e.secondary.dark}}}),l=function(n){var e=n.color,t=n.shouldUseIcon,l=n.variant,u=n.width,c=d().classes;return t?(0,o.jsx)(a.Z,{disabled:!0,size:"large",children:(0,o.jsx)(i.Z,{color:"inherit",size:24})}):(0,o.jsx)(r.Z,{"aria-label":"Loading",classes:{root:c[e]},variant:l,fullWidth:!0,disabled:!0,children:(0,o.jsx)(s.Z,{variant:"text",width:u,classes:{root:c["skeleton-".concat(e)]}})})};l.defaultProps={color:"secondary",shouldUseIcon:!1,variant:"contained",width:"100%"}},27739:function(n,e,t){t.d(e,{Ao:function(){return n_},Dy:function(){return X},E6:function(){return j},EV:function(){return Z},Em:function(){return b},Hz:function(){return N},KB:function(){return z},Kg:function(){return nl},MJ:function(){return nc},NH:function(){return ni},PS:function(){return nu},Pv:function(){return P},Q9:function(){return x},RD:function(){return m},TV:function(){return nf},Tj:function(){return W},UA:function(){return nr},WN:function(){return M},XW:function(){return nh},Xd:function(){return U},Xv:function(){return ns},_x:function(){return I},bQ:function(){return h},bk:function(){return v},cL:function(){return E},cz:function(){return O},dF:function(){return H},dm:function(){return k},fn:function(){return y},ik:function(){return nm},jh:function(){return F},nj:function(){return R},qi:function(){return w},tq:function(){return A},v8:function(){return p},vC:function(){return T},vI:function(){return C},x1:function(){return L},zV:function(){return nd},zW:function(){return B}});var o,a,i=t(47842),r=t(50930),s=t(77426),d="ultrahd4k_video",l="hd_video",u="sd_video",c="enhanced_footage_4k_clips",_="enhanced_footage_hd_clips",f="enhanced_footage_sd_clips",h=(o={},(0,i.Z)(o,s.yF,c),(0,i.Z)(o,s.HD,_),(0,i.Z)(o,s.SD,f),o),m=(a={},(0,i.Z)(a,s.yF,d),(0,i.Z)(a,s.HD,l),(0,i.Z)(a,s.SD,u),a),v="portfolio_credit_rules",w="flex10_monthly",p="flex10_cmt_x12",g="flex10_cmt_upfront",y=p,x="TRYFLEX10",b="freetrialflex10",S="flex25_monthly",A="flex25_cmt_x12",Z="flex25_cmt_upfront",k="flex350_ecomm_cmt_x12",L=(0,r.Z)([w,p,g]).concat((0,r.Z)([S,A,Z]),(0,r.Z)(["flex50_ecomm_monthly","flex50_ecomm_cmt_x12","flex50_ecomm_cmt_upfront"]),(0,r.Z)(["flex150_ecomm_monthly","flex150_ecomm_cmt_x12","flex150_ecomm_cmt_upfront"]),(0,r.Z)(["flex350_ecomm_monthly",k,"flex350_ecomm_cmt_upfront"]),(0,r.Z)(["flex750_ecomm_monthly","flex750_ecomm_cmt_x12","flex750_ecomm_cmt_upfront"]),(0,r.Z)(["flex150_cmt_x12","flex150_annual_upf","flex300_cmt_x12","flex300_annual_upf","flex500_cmt_x12","flex500_annual_upf","flex750_cmt_x12","flex750_annual_upf","flex1000_cmt_x12","flex1000_annual_upf"])),T="on_demand_large_2_download",C="enhanced_2_download_365_day",I="on_demand_large_5_download",B="enhanced_5_download_365_day",E="on_demand_large_25_download",F="enhanced_25_download_365_day";(0,r.Z)([T,C]).concat((0,r.Z)([I,B]),(0,r.Z)([E,F]));var O="monthly_10_download_1_month_cmt_x12",z="monthly_10_download_12_month_upf",D=["monthly_10_download_1_month_upf",O,z],P=O,U="PICK10FREE",j="freetrialimage",N="freetrialimageaips",R="CREATEFREE",W=[U,R,x],V=["monthly_50_download_1_month_upf","monthly_50_download_1_month_cmt_x12","monthly_50_download_12_month_upf"],H="monthly_350_download_1_month_no_ro_cmt_x12",X="monthly_350_download_12_month_upf",G=["monthly_350_download_1_month_no_ro_upf",H,X],K=["monthly_750_download_1_month_no_ro_upf","monthly_750_download_1_month_no_ro_cmt_x12","monthly_750_download_12_month_upf"];(0,r.Z)(D).concat((0,r.Z)(V),(0,r.Z)(G),(0,r.Z)(K));var M="standard",q=["footage_5_download_nonhd","footage_5_download_hd","footage_5_download_ultrahd4k"],Y=["enhanced_footage_sd_5_pack","enhanced_footage_hd_5_pack","enhanced_footage_4k_5_pack"];["footage_5_download_lowres"].concat((0,r.Z)(q),(0,r.Z)(Y));var J=["footage_10_download_nonhd","footage_10_download_hd","footage_10_download_ultrahd4k"],Q=["enhanced_footage_sd_10_pack","enhanced_footage_hd_10_pack","enhanced_footage_4k_10_pack"];["footage_10_download_lowres"].concat((0,r.Z)(J),(0,r.Z)(Q));var $=["footage_25_download_nonhd","footage_25_download_hd","footage_25_download_ultrahd4k"],nn=["enhanced_footage_sd_25_pack","enhanced_footage_hd_25_pack","enhanced_footage_4k_25_pack"];["footage_25_download_lowres"].concat((0,r.Z)($),(0,r.Z)(nn));var ne=(0,r.Z)(q).concat((0,r.Z)(J),(0,r.Z)($),(0,r.Z)(Y),(0,r.Z)(Q),(0,r.Z)(nn));(0,r.Z)([u,l,d]).concat((0,r.Z)([f,_,c]),(0,r.Z)(ne));var nt=["footage_monthly_5_download_1_month_upf","footage_monthly_5_download_1_month_cmt_x12","footage_monthly_5_download_12_month_upf"],no=["footage_monthly_10_download_1_month_cmt_x12","footage_monthly_10_download_12_month_upf","footage_monthly_10_download_1_month_upf"],na=["footage_monthly_20_download_1_month_upf","footage_monthly_20_download_1_month_cmt_x12","footage_monthly_20_download_12_month_upf"];(0,r.Z)(nt).concat((0,r.Z)(no),(0,r.Z)(na));var ni="creative_flow_plus_monthly",nr=[ni,"creative_flow_plus_cmt_upfront"],ns=["hd_video","ultrahd4k_video","select_video","sd_video","audio_standard_track","audio_enhanced_track","footage_elements_low","footage_elements_medium","footage_elements_high","sfx_standard_track","sfx_enhanced_track","editorial_footage_ecomm_clips","single_image_standard_license",c,_,f,"single_premium_image_standard_license","single_premium_image_enhanced_license"],nd="OUT_OF_CREDITS",nl=["shared_monthly_1000_download_1_month_cmt_x12","shared_monthly_12000_download_12_month_upf","shared_monthly_12000_download_365_day","shared_monthly_750_download_1_month_cmt_x12","shared_monthly_9000_download_12_month_upf","shared_monthly_9000_download_365_day","shared_standard_1_month_cmt_x12","shared_standard_12_month_upf","shared_standard_365_day"],nu="multi_share",nc=[w,p,g,S,A,Z],n_=(0,r.Z)(D).concat((0,r.Z)(V),(0,r.Z)(G),(0,r.Z)(K),["shared_monthly_750_download_1_month_plus_cmt_x12_2"]),nf=(0,r.Z)(nt).concat((0,r.Z)(no),(0,r.Z)(na)),nh=[T,I,E],nm=["IN"]},19928:function(n,e,t){t.d(e,{w:function(){return o}});var o=(0,t(2784).createContext)({})},18731:function(n,e,t){t.d(e,{l:function(){return r}});var o=t(52322),a=t(2784),i=t(19928),r=function(n){var e=n.allSizesAssetEligibility,t=n.asset,r=n.children;return(0,o.jsx)(i.w.Provider,{value:(0,a.useMemo)(function(){return{allSizesAssetEligibility:e,asset:t}},[e,t]),children:r})};r.defaultProps={allSizesAssetEligibility:{},asset:{}}},86669:function(n,e,t){t.d(e,{pd:function(){return p},zg:function(){return g},pl:function(){return h}});var o=t(47842),a=t(70865),i=t(98217),r=t(27739),s=t(56495),d=t(39232),l=t(12969),u=t(37546),c=t(44297),_=t(18411),f=_.Oy.SSTK_TO_LEGACY;_.Oy.LEGACY_TO_SSTK;var h=function(n){var e,t=n.cartData,o=n.asset,a=n.licenseType,i=void 0===a?null:a;return null==t?void 0:null===(e=t.items)||void 0===e?void 0:e.find(function(n){var e,t,a=(null==n?void 0:null===(e=n.mediaItem)||void 0===e?void 0:e.id)===(null==o?void 0:o.id);return i?a&&(null==n?void 0:null===(t=n.product)||void 0===t?void 0:t.license)===i:a})},m=function(n){var e=n.license,t=n.type,o=n.isVideoAsset;return n.isOffsetAsset&&!e?r.WN:e||o?e:t===d.tn?s.bK:i.X},v=function(n){var e=n.isVideoAsset,t=n.size,o=n.isFootageSelect,a=n.isOffsetAsset;if(e){var i=t.resolution;return o?"select":f[i]||i.toLowerCase()}if(a)return"offset"},w=function(n){var e=(0,c.Am)(n),t=n.id,i=n.size,r=n.isFootageSelect,s=n.type,d=n.license,l=n.isOffsetAsset,u={type:"cart-items",relationships:{"media-item":{data:{id:l?t.toString():t,type:s}}}},_=v({isVideoAsset:e,size:i,isFootageSelect:r,isOffsetAsset:l}),f=m({type:s,license:d,isVideoAsset:e,isOffsetAsset:l});return u.meta=(0,o.Z)({},"legacy_cart",(0,o.Z)({},"cart",(0,a.Z)({},f?{license:f}:{},_?{size:_}:{}))),u},p=function(n){var e=n.items;return null==e?void 0:e.map(function(n){return w(n)})},g=function(n){var e=n.asset,t=n.assetSize,o=n.license,a=e.id,i=e.type,r=e.isFootageSelect,s=(0,c.PD)(e),_=(0,c.Tp)(e),f=t;return t||_===d.xF||_===d.tn||_===d.bz||(f=(0,c.Tp)(e)===d.pX?(0,u.kS)(Object.values(e.sizes))[0]:(0,l.M)({asset:e})),{id:a,type:i,isOffsetAsset:s,isFootageSelect:r,size:f,license:o}}},12969:function(n,e,t){t.d(e,{L:function(){return _},M:function(){return c}});var o=t(70865),a=t(96670),i=t(87394),r=t(19522),s=t(39232),d=t(61765),l=t(37546),u=t(44297),c=function(n){var e=n.asset;switch((0,u.Tp)(e)){case s.pX:return(0,l.FG)(Object.values(e.sizes));case s.k4:default:return(0,l.Nf)((null==e?void 0:e.sizes)&&Object.values(e.sizes))}},_=function(n){var e,t,c,_=n.asset,f=n.selectedAssetSize,h=n.selectedShadowsOption,m=(0,d.qw)({asset:_}),v=(0,u.f8)(_);(0,u.so)(_)&&(m=s.A7);var w=_.id.toString(),p=(0,d.JD)({assetType:m,assetId:w});switch(m){case s.pX:case s.A7:t=null==(e=f||(null===(c=(0,l.Z)({sizes:_.sizes}))||void 0===c?void 0:c[0]))?void 0:e.resolution;break;case s.j0:case s.tn:case s.xF:t=null==(e=f)?void 0:e.resolution;break;case s.pV:case s.ox:default:e=f||(0,l.Nf)(_.sizes),t=(0,i.Z)(e.name.split("_"),1)[0]}return(0,o.Z)({content_id:w,content_type:p,content_size:t,content_format:null==e?void 0:e.format},v?(0,a.Z)((0,o.Z)({},f.format===r.yI&&{include_shadows:"on"===h}),{angle:(null==_?void 0:_.angle)||"H01"}):{})}},37443:function(n,e,t){t.d(e,{l:function(){return r}});var o=t(56495),a=t(39232),i=t(24861),r=function(n){var e=n.subscriptions,t=n.assetType;return null==e?void 0:e.some(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.product,r=void 0===e?{status:"",businessUnit:"",name:""}:e,s=r.status,d=r.businessUnit,l=r.name;return s===i.PP&&(t===a.tn?o.LY.includes(l):d===t||"none"===d)})}},95775:function(n,e,t){t.d(e,{IP:function(){return y},jC:function(){return g}});var o=t(70865),a=t(81740),i=t(19522),r=t(39232),s=t(94054),d=t(60591),l=t(61765),u=t(44297),c=t(18411),_=t(35896),f=t(9009),h=t(81232),m=t(85482),v=t(43110),w=function(n){var e=n.assetTypeFromAsset,t=n.licenseName,a=n.selectedAssetSize;switch(e){case r.pX:return(0,o.Z)({},(null==a?void 0:a.name)&&{content_size:c.Oy.SSTK_TO_LEGACY_ELIGIBILTY[a.name]||a.name});case r.j0:case r.xF:return{content_format:r.j0};case r.tn:return{content_format:i._Y};default:return(0,o.Z)({},(null==a?void 0:a.name)&&{content_size:c.nd[(0,h.z)(a.name)].downloadName},(null==a?void 0:a.format)&&{content_format:a.format},t===d.HS&&{license_name:d.HS},(t===s.sVc||e===r.gP)&&{license_name:s.sVc})}},p=function(n){var e=n.assets,t=n.include,a=n.licenseName,i=n.selectedAssetSize,r=e[0],s=(0,u._L)(r),d={};(null==e?void 0:e.length)>=2?d.content_ids=e.filter(function(n){return!!n.id}).join(","):d.content_id=null==r?void 0:r.id;var c=w({assetTypeFromAsset:s,licenseName:a,selectedAssetSize:i});return(0,o.Z)({include:void 0===t?"subscriptions,licenses,licenses.product,subscriptions.product":t,content_type:(0,l.JD)({assetType:s,assetId:null==r?void 0:r.id})},c,d)},g=function(n){var e=n.licenseeIdentifier,t=n.assets,o=n.licenseName,i=n.selectedAssetSize;return(0,a.Td)({urlParams:{licenseeIdentifier:e},queryParams:p({assets:t,licenseName:o,selectedAssetSize:i})}).formattedUrl},y=function(n){var e=n.assets,t=n.licenseeIdentifier,o=void 0===t?s.RU_:t,a=n.licenseName,i=n.selectedAssetSize,r=n.shouldFetch,d=(0,v.B)();return(0,m.ZP)((void 0===r||r)&&d?g({licenseeIdentifier:o,assets:e,licenseName:a,selectedAssetSize:i}):null,function(n){return _.uS.get(n).then(function(n){return(0,f.O)(n.data)})})}},70008:function(n,e,t){t.d(e,{B:function(){return a}});var o=t(29510),a=function(){return{isIndiaRegion:"IN"===(0,o.PE)().region}}},22037:function(n,e,t){t.d(e,{Vl:function(){return p},bW:function(){return w},eh:function(){return g},iM:function(){return h},ss:function(){return f},uk:function(){return m}});var o,a=t(47842),i=t(70865),r=t(45089),s=r.AZ.IMAGE,d=r.AZ.VIDEO,l=r.AZ.AUDIO,u=r.AZ.ELEMENT,c=r.AZ.SFX,_=r.L0.DESIGN,f=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{id:"",type:""},t=e.type,o=e.id;return n.find(function(n){var e=n.type,a=n.id;return e===t&&a===o})},h=function(n){var e=n.id,t=n.attributes;return(0,i.Z)({id:e},t)},m=function(n){if(n.includes("editorial"))return n.replace("editorial-","").concat("s");switch(n){case"video":return d;case"audio":return l;case"image":return s;case"design":return _;default:return n}},v=(o={},(0,a.Z)(o,l,"audio"),(0,a.Z)(o,d,"video"),(0,a.Z)(o,s,"image"),(0,a.Z)(o,u,"elements"),(0,a.Z)(o,_,"design"),(0,a.Z)(o,c,c),o),w=function(n){return"".concat(n.isRexEditorial?"editorial-":"").concat(v[n.type||"images"])},p=function(n){if(n.isRexEditorial)return"rex";if(n.isUpload)return"squid-files";switch(n.type){case l:return"remedia";case u:return"hadron";case _:return"create";case c:return"sfx";default:return"media"}},g=function(n){var e=n.attributes,t=e.externalId,o=e.assetType;return{link:"",height:9,width:16,id:t,isRexEditorial:!!o.startsWith("editorial-"),isWithdrawn:!0,type:m(o)}}},32545:function(n,e,t){t.d(e,{EC:function(){return A},Il:function(){return l},Jk:function(){return _},KN:function(){return p},N4:function(){return b},R8:function(){return v},Vx:function(){return S},ZD:function(){return y},_f:function(){return d},ch:function(){return g},iP:function(){return f},qT:function(){return h},sb:function(){return u},wy:function(){return c},yo:function(){return w}});var o=t(68827),a=t(39232),i=t(44297),r=t(56219),s=t(22037),d=function(n){return n.filter(function(n){return!n.mediaItem.isWithdrawn})},l=function(n){return d(n).filter(function(n){return!n.mediaItem.isUpload})},u=function(n){var e;return null===(e=n.assetStatus)||void 0===e?void 0:e.includes(o.ue)},c=function(n){return"3d-object"===n.mediaItem.imageType},_=function(n){return(0,r.sU)(n.mediaItem)},f=function(n){var e;return null==n?void 0:null===(e=n.assetStatus)||void 0===e?void 0:e.includes(o.Th)},h=function(n){var e;return null==n?void 0:null===(e=n.assetStatus)||void 0===e?void 0:e.includes(o.O1)},m=function(n){return u(n)||_(n)},v=function(n){return n.length>0&&n.every(m)},w=function(n){return n.length>0&&!n.some(m)},p=function(n){return n.length>0&&n.every(f)},g=function(n){return n.length>0&&n.every(function(n){return n.isPrivate})},y=function(n){return n.some(function(n){var e=n.mediaItem;return(0,r.tq)(e)})},x=function(n){return(0,r.gS)(n.mediaItem)||(0,r.tq)(n.mediaItem)},b=function(n){return n.some(x)},S=function(n){var e={};return n.some(function(n){var t=n.mediaItem;if(t.type===a.bz||t.isUpload)return!1;var o=(0,s.bW)(t);return o in e?e[o]!==(0,i.nF)(t):(e[o]=(0,i.nF)(t),!1)})},A=function(n){return!n.some(function(n){return u(n)||(0,r.aA)(n.mediaItem)||x(n)})}}}]);
//# sourceMappingURL=89045-526cfbbbe972e8a8.js.map