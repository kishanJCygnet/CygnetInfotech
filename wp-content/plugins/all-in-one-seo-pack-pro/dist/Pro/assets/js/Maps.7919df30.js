import{C as y,i as $}from"./Map.3143e5b0.js";import{a as f}from"./index.d229874d.js";import{C as g,g as v,d as M}from"./index.2a1615d5.js";import{C as o}from"./Card.18919467.js";import{C as h}from"./SettingsRow.0d51ff21.js";import{L as S,a as b}from"./DefaultStyle.43c574bf.js";import{C as A}from"./AttributesList.67ec71d9.js";import{C as m}from"./DisplayInfo.b5de7733.js";import{n as i}from"./vueComponentNormalizer.58b0a173.js";import{A as K,U as w}from"./UpdateCta.482d650e.js";import{C as k}from"./Blur.945b1b3e.js";import{R as x}from"./RequiredPlans.d7c85342.js";import{C as B}from"./ProBadge.6745e7cb.js";import{C}from"./Index.063d480c.js";import{A as L}from"./WpTable.d951bd0b.js";import"./isEqual.a6913dc6.js";import"./_baseIsEqual.e22c67bc.js";import"./isArrayLikeObject.44af21ce.js";import"./_getTag.3036b7b0.js";import"./constants.b5b5d9a1.js";import"./default-i18n.0e73c33c.js";import"./client.b661b356.js";import"./_commonjsHelpers.10c44588.js";import"./translations.3bc9d58c.js";import"./portal-vue.esm.272b3133.js";import"./Tooltip.a36a3967.js";import"./Slide.01023b2f.js";import"./Row.89c6bb85.js";import"./Image.a2b87617.js";import"./attachments.5c790671.js";import"./cleanForSlug.554cc757.js";import"./Img.30b01953.js";import"./Plus.d9c7f9ce.js";import"./Php.8ab69eef.js";import"./CheckSolid.b1f55096.js";var I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("core-display-info",{attrs:{label:t.label,options:t.displayOptions},scopedSlots:t._u([{key:"shortcodeAdvanced",fn:function(){return[s("core-attributes-list",{attrs:{description:t.strings.shortcodeAttributesDescription,attributes:t.attributes}})]},proxy:!0},{key:"phpAdvanced",fn:function(){return[s("core-attributes-list",{attrs:{description:t.strings.phpArgumentsDescription,attributes:t.attributes}})]},proxy:!0}])})},P=[];const G={components:{CoreAttributesList:A,CoreDisplayInfo:m},props:{label:null,displayOptions:{type:Object,required:!0}},data(){return{strings:{shortcodeAttributesDescription:this.$t.__("The following shortcode attributes can be used to override the default settings:",this.$td),phpArgumentsDescription:this.$t.__("The function accepts an associative array with the following arguments that can be used to override the default settings:",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td)},attributes:[{name:"location_id",description:this.$t.__("A Location ID if Multiple Locations is on.",this.$td)},{name:"show_label",description:this.$t.__("Show or hide the label.",this.$td)},{name:"show_icon",description:this.$t.__("Show or hide the icon.",this.$td)},{name:"width",description:this.$t.__("The width of the map. You may use a percentage or a fixed width in pixels.",this.$td)},{name:"height",description:this.$t.__("The height of the map. You may use a percentage or a fixed height in pixels.",this.$td)},{name:"label",description:this.$t.__("The label.",this.$td)}]}}},r={};var E=i(G,I,P,!1,O,null,null,null);function O(t){for(let e in r)this[e]=r[e]}const D=function(){return E.exports}();var R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-local-maps"},[s("core-card",{attrs:{slug:"localBusinessMapsApiKey"},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v(t._s(t.strings.googleMapsApiKey))])]},proxy:!0}])},[s("div",{staticClass:"aioseo-settings-row"},[s("p",{staticClass:"apikey-description",domProps:{innerHTML:t._s(t.strings.description)}})]),s("core-settings-row",{attrs:{name:t.strings.apiKey,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-input",{class:{"aioseo-error":t.options.localBusiness.maps.apiKey&&t.options.localBusiness.maps.apiKeyValid===!1},attrs:{size:"medium",spellcheck:!1},on:{input:function(a){return t.checkApiKey()}},scopedSlots:t._u([{key:"append-icon",fn:function(){return[s("div",{staticClass:"append-icon"},[[t.options.localBusiness.maps.apiKey&&t.options.localBusiness.maps.apiKeyValid===!1?s("svg-circle-close"):t._e()]],2)]},proxy:!0}]),model:{value:t.options.localBusiness.maps.apiKey,callback:function(a){t.$set(t.options.localBusiness.maps,"apiKey",a)},expression:"options.localBusiness.maps.apiKey"}}),s("div",{staticClass:"aioseo-description",domProps:{innerHTML:t._s(t.strings.apiKeyDescription)}}),t.options.localBusiness.maps.apiKey&&t.options.localBusiness.maps.apiKeyValid===!1?s("core-alert",{attrs:{type:"red"},domProps:{innerHTML:t._s(t.strings.apiKeyInvalid)}}):t._e(),t.options.localBusiness.maps.apiKey&&t.options.localBusiness.maps.apiKeyValid&&t.options.localBusiness.maps.mapsEmbedApiEnabled===!1?s("core-alert",{attrs:{type:"blue"},domProps:{innerHTML:t._s(t.strings.placeSelected)}}):t._e()]},proxy:!0}])}),t.debouncedApiKey?s("core-settings-row",{attrs:{name:t.strings.mapPreview,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("core-map",{attrs:{apiKey:t.debouncedApiKey,options:t.defaultMapOptions,placeId:t.options.localBusiness.maps.placeId,marker:t.currentMarker}})]},proxy:!0}],null,!1,2126454560)}):t._e()],1),t.options.localBusiness.maps.apiKey?s("core-card",{attrs:{slug:"localBusinessMapsSettings"},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v(t._s(t.strings.mapSettings))])]},proxy:!0}],null,!1,285057541)},[s("local-business-map-display-info",{attrs:{label:t.strings.displayMap,displayOptions:t.displayInfo}}),s("local-business-map-default-style"),s("local-business-map-custom-marker")],1):t._e()],1)},T=[];const F={components:{CoreAlert:g,CoreCard:o,CoreMap:y,CoreSettingsRow:h,LocalBusinessMapCustomMarker:S,LocalBusinessMapDefaultStyle:b,LocalBusinessMapDisplayInfo:D,SvgCircleClose:v},data(){return{strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td),description:this.$t.sprintf(this.$t.__("Integrating with Google Maps will allow your users to find exactly where your business is located. Our interactive maps let them see your Google Reviews and get directions directly from your site. Create multiple maps for use with multiple locations. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapSetup",!0)),apiKey:this.$t.__("API Key",this.$td),apiKeyDescription:this.$t.sprintf(this.$t.__("A Google API Key is necessary to render your maps. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapSetup",!0)),mapSettings:this.$t.__("Map Settings",this.$td),apiKeyInvalid:this.$t.sprintf(this.$t.__("Your API Key is invalid. Please make sure you have set your key correctly. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapSetup",!0)),placeSelected:this.$t.sprintf(this.$t.__("For a more seamless experience with rich information cards, we recommend that you enable the Maps Embed API for your Google Maps API Key. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoMapEmbedApi",!0)),displayMap:this.$t.__("Display Map",this.$td),mapPreview:this.$t.__("Map Preview",this.$td)},displayInfo:{block:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this block, edit a page or post and search for the "%1$s Local - Map" block.',this.$td),"AIOSEO")},shortcode:{copy:"[aioseo_local_map]",desc:this.$t.sprintf(this.$t.__("Use the following shortcode to display the location map. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoShortcodeMap",!0))},widget:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this widget, visit the %1$swidgets page%2$s and look for the "%3$s Local - Map" widget.',this.$td),`<a href="${this.$aioseo.urls.admin.widgets}" target="_blank">`,"</a>","AIOSEO")},php:{copy:"<?php if( function_exists( 'aioseo_local_map' ) ) aioseo_local_map(); ?>",desc:this.$t.sprintf(this.$t.__("Use the following PHP code anywhere in your theme to display the location map. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"localSeoFunctionMap",!0))}},debouncedApiKey:null}},computed:{...f(["options"]),defaultMapOptions(){return{...this.options.localBusiness.maps.mapOptions,...this.$aioseo.localBusiness.mapDefaults}},currentMarker(){return{position:this.options.localBusiness.maps.mapOptions.center,icon:this.options.localBusiness.maps.customMarker}}},methods:{apiKeyFailed(){this.options.localBusiness.maps.apiKeyValid=!1},checkApiKey(){M(()=>{this.debouncedApiKey=this.options.localBusiness.maps.apiKey,this.options.localBusiness.maps.apiKeyValid=!0,this.options.localBusiness.maps.mapsEmbedApiEnabled=null,window.gm_authFailure=this.apiKeyFailed,this.checkMapEmbedApi()},1500)},checkMapEmbedApi(){$(this.options.localBusiness.maps.apiKey,"places/embed").then(t=>{this.options.localBusiness.maps.mapsEmbedApiEnabled=t})}},mounted(){this.options.localBusiness.maps.apiKey&&(this.debouncedApiKey=this.options.localBusiness.maps.apiKey,this.checkMapEmbedApi())}},l={};var U=i(F,R,T,!1,j,null,null,null);function j(t){for(let e in l)this[e]=l[e]}const H=function(){return U.exports}();var N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-maps-blur"},[s("core-blur",[s("div",{staticClass:"aioseo-settings-row"},[s("p",{staticClass:"apikey-description"},[t._v(t._s(t.strings.description))])]),s("core-settings-row",{attrs:{name:t.strings.apiKey,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-input",{attrs:{size:"medium"}})]},proxy:!0}])}),s("core-display-info",{attrs:{options:t.displayInfo}}),s("core-settings-row",{attrs:{name:t.strings.mapPreview,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[t._v(" "+t._s(t.strings.description)+" ")]},proxy:!0}])})],1)],1)},V=[];const q={components:{CoreBlur:k,CoreDisplayInfo:m,CoreSettingsRow:h},data(){return{strings:{description:this.$t.__("Integrating with Google Maps will allow your users to find exactly where your business is located. Our interactive maps let them see your Google Reviews and get directions directly from your site. Create multiple maps for use with multiple locations.",this.$td),apiKey:this.$t.__("API Key",this.$td),mapPreview:this.$t.__("Map Preview",this.$td)},displayInfo:{block:{copy:"",desc:""}}}}},p={};var z=i(q,N,V,!1,Y,null,null,null);function Y(t){for(let e in p)this[e]=p[e]}const n=function(){return z.exports}();var J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-local-maps"},[s("core-card",{attrs:{slug:"localBusinessMapsApiKey","header-text":t.strings.googleMapsApiKey,noSlide:!0}},[s("blur")],1),s("activate-cta")],1)},Q=[];const W={components:{ActivateCta:K,Blur:n,CoreCard:o},data(){return{strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td)}}}},c={};var X=i(W,J,Q,!1,Z,null,null,null);function Z(t){for(let e in c)this[e]=c[e]}const tt=function(){return X.exports}();var st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-local-maps"},[s("core-card",{attrs:{slug:"localBusinessMapsApiKey",noSlide:!0},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",[t._v(t._s(t.strings.googleMapsApiKey))]),s("core-pro-badge")]},proxy:!0}])},[s("blur"),s("cta",{attrs:{"cta-link":t.$links.getPricingUrl("local-seo","local-seo-upsell","maps"),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("local-seo",null,"home"),"feature-list":t.features,"align-top":""},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[s("required-plans",{attrs:{addon:"aioseo-local-business"}}),t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0}])})],1)],1)},et=[];const it={components:{Blur:n,RequiredPlans:x,CoreCard:o,CoreProBadge:B,Cta:C},data(){return{features:[this.$t.__("Google Places Support",this.$td),this.$t.__("Google Reviews",this.$td),this.$t.__("Driving Directions",this.$td),this.$t.__("Multiple Locations",this.$td)],strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO Maps are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro"),ctaDescription:this.$t.__("Show your location to your visitors using an interactive Google Map. Create multiple maps for use with multiple locations.",this.$td)}}}},u={};var ot=i(it,st,et,!1,nt,null,null,null);function nt(t){for(let e in u)this[e]=u[e]}const at=function(){return ot.exports}();var rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-local-maps"},[s("core-card",{attrs:{slug:"localBusinessMapsApiKey","header-text":t.strings.googleMapsApiKey,noSlide:!0}},[s("blur")],1),s("update-cta")],1)},lt=[];const pt={components:{UpdateCta:w,Blur:n,CoreCard:o},data(){return{strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td)}}}},d={};var ct=i(pt,rt,lt,!1,ut,null,null,null);function ut(t){for(let e in d)this[e]=d[e]}const dt=function(){return ct.exports}();var _t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-maps"},[t.shouldShowMain?s("maps"):t._e(),t.shouldShowActivate?s("activate"):t._e(),t.shouldShowUpdate?s("update"):t._e(),t.shouldShowLite?s("lite"):t._e()],1)},ht=[];const mt={mixins:[L],components:{Maps:H,Activate:tt,Lite:at,Update:dt},data(){return{addonSlug:"aioseo-local-business"}}},_={};var yt=i(mt,_t,ht,!1,$t,null,null,null);function $t(t){for(let e in _)this[e]=_[e]}const Zt=function(){return yt.exports}();export{Zt as default};
