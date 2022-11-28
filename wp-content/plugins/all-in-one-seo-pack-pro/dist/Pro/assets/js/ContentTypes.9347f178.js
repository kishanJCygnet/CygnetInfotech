import{a as c,e as p,m}from"./index.d229874d.js";import{A as _,T as d}from"./TitleDescription.e047dba4.js";import{C as f}from"./Card.18919467.js";import{C as h}from"./Tabs.e5edd7e7.js";import{C as v,S as y}from"./Schema.9a7ddf5a.js";import{B as $}from"./Textarea.92b32df4.js";import{C as g}from"./Blur.945b1b3e.js";import{C as b}from"./SettingsRow.0d51ff21.js";import{C}from"./Index.063d480c.js";import{n as o}from"./vueComponentNormalizer.58b0a173.js";import"./isArrayLikeObject.44af21ce.js";import"./default-i18n.0e73c33c.js";import"./WpTable.d951bd0b.js";import"./constants.b5b5d9a1.js";import"./attachments.5c790671.js";import"./cleanForSlug.554cc757.js";import"./index.2a1615d5.js";import"./client.b661b356.js";import"./_commonjsHelpers.10c44588.js";import"./translations.3bc9d58c.js";import"./portal-vue.esm.272b3133.js";import"./JsonValues.08065e69.js";import"./MaxCounts.5a7ca2fd.js";import"./RadioToggle.d0794ab7.js";import"./RobotsMeta.e1358fdf.js";import"./Checkbox.732cf0d4.js";import"./Checkmark.c0183939.js";import"./Row.89c6bb85.js";import"./GoogleSearchPreview.42ce749d.js";import"./HtmlTagsEditor.8c2f0897.js";import"./Editor.ab65d1f4.js";import"./UnfilteredHtml.44261c87.js";import"./Tooltip.a36a3967.js";import"./Slide.01023b2f.js";import"./TruSeoScore.98a47fd6.js";import"./Information.6f7632ab.js";var x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-sa-ct-custom-fields lite"},[s("core-blur",[s("core-settings-row",{attrs:{name:t.strings.customFields,align:""},scopedSlots:t._u([{key:"content",fn:function(){return[s("base-textarea",{attrs:{"min-height":200}}),s("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.customFieldsDescription)+" ")])]},proxy:!0}])})],1),s("cta",{attrs:{"cta-link":t.$links.getPricingUrl("custom-fields","custom-fields-upsell",`${t.object.name}-post-type`),"button-text":t.strings.ctaButtonText,"learn-more-link":t.$links.getUpsellUrl("custom-fields",t.object.name,"home")},scopedSlots:t._u([{key:"header-text",fn:function(){return[t._v(" "+t._s(t.strings.ctaHeader)+" ")]},proxy:!0},{key:"description",fn:function(){return[t._v(" "+t._s(t.strings.ctaDescription)+" ")]},proxy:!0}])})],1)},S=[];const k={components:{BaseTextarea:$,CoreBlur:g,CoreSettingsRow:b,Cta:C},props:{type:{type:String,required:!0},object:{type:Object,required:!0}},data(){return{strings:{customFields:this.$t.__("Custom Fields",this.$td),customFieldsDescription:this.$t.__("List of custom field names to include in the SEO Page Analysis. Add one per line.",this.$td),ctaDescription:this.$t.sprintf(this.$t.__("%1$s %2$s gives you advanced customizations for our page analysis feature, letting you add custom fields to analyze.",this.$td),"AIOSEO","Pro"),ctaButtonText:this.$t.__("Upgrade to Pro and Unlock Custom Fields",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Custom Fields are only available for licensed %1$s %2$s users.",this.$td),"AIOSEO","Pro")}}},computed:{...c(["options"])},methods:{getSchemaTypeOption(t){return this.schemaTypes.find(e=>e.value===t)}}},r={};var A=o(k,x,S,!1,T,null,null,null);function T(t){for(let e in r)this[e]=r[e]}const F=function(){return A.exports}();var j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-sa-ct-custom-fields-view"},[t.isUnlicensed?t._e():s("custom-fields",{attrs:{type:t.type,object:t.object,options:t.options,"show-bulk":t.showBulk}}),t.isUnlicensed?s("custom-fields-lite",{attrs:{type:t.type,object:t.object,options:t.options,"show-bulk":t.showBulk}}):t._e()],1)},D=[];const O={components:{CustomFields:v,CustomFieldsLite:F},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0},showBulk:Boolean},computed:{...p(["isUnlicensed"])}},i={};var B=o(O,j,D,!1,w,null,null,null);function w(t){for(let e in i)this[e]=i[e]}const U=function(){return B.exports}();var P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-search-appearance-content-types"},t._l(t.postTypes,function(n,u){return s("core-card",{key:u,attrs:{slug:`${n.name}SA`},scopedSlots:t._u([{key:"header",fn:function(){return[s("div",{staticClass:"icon dashicons",class:`${n.icon||"dashicons-admin-post"}`}),s("div",{domProps:{innerHTML:t._s(n.label)}})]},proxy:!0},{key:"tabs",fn:function(){return[s("core-main-tabs",{attrs:{tabs:t.tabs,showSaveButton:!1,active:t.settings.internalTabs[`${n.name}SA`],internal:""},on:{changed:function(l){return t.processChangeTab(n.name,l)}}})]},proxy:!0}],null,!0)},[s("transition",{attrs:{name:"route-fade",mode:"out-in"}},[s(t.settings.internalTabs[`${n.name}SA`],{tag:"component",attrs:{object:n,separator:t.options.searchAppearance.global.separator,options:t.dynamicOptions.searchAppearance.postTypes[n.name],type:"postTypes"}})],1)],1)}),1)},E=[];const M={components:{Advanced:_,CoreCard:f,CoreMainTabs:h,CustomFields:U,Schema:y,TitleDescription:d},data(){return{internalDebounce:null,tabs:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"schema",name:this.$t.__("Schema Markup",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"custom-fields",name:this.$t.__("Custom Fields",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}]}},computed:{...c(["options","dynamicOptions","settings"]),postTypes(){return this.$aioseo.postData.postTypes.filter(t=>t.name!=="attachment")}},methods:{...m(["changeTab"]),processChangeTab(t,e){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${t}SA`,value:e}),setTimeout(()=>{this.internalDebounce=!1},50))}}},a={};var q=o(M,P,E,!1,L,null,null,null);function L(t){for(let e in a)this[e]=a[e]}const Ct=function(){return q.exports}();export{Ct as default};
