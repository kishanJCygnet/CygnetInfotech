import p from"./AdditionalInformation.3911e44d.js";import s from"./Category.3612d2b2.js";import a from"./Features.42552750.js";import c from"./Import.4e9c5d9a.js";import l from"./LicenseKey.fcd773f9.js";import u from"./SearchAppearance.46d6c5bf.js";import d from"./SmartRecommendations.0597f38a.js";import f from"./Success.9db6389d.js";import _ from"./Welcome.bd914b8f.js";import{c as i,a as e,b as h}from"./vuex.esm.19624049.js";import{n as S}from"./vueComponentNormalizer.67c9b86e.js";import"./WpTable.61e73015.js";import"./helpers.8308b279.js";import"./index.c630c4a6.js";import"./isArrayLikeObject.44af21ce.js";import"./default-i18n.0e73c33c.js";import"./attachments.90c241a0.js";import"./cleanForSlug.652f2bfe.js";import"./constants.e179df36.js";import"./Caret.eeb84d06.js";import"./_commonjsHelpers.10c44588.js";import"./html.9a057d5c.js";import"./Index.cb09fd7a.js";import"./Image.114d3975.js";import"./MaxCounts.5a7ca2fd.js";import"./SaveChanges.68e73792.js";import"./Img.68436b24.js";import"./Phone.0b463069.js";import"./RadioToggle.2a5182bd.js";import"./SocialProfiles.b2438c0b.js";import"./Checkbox.1903802a.js";import"./Checkmark.cdcd77fe.js";import"./Textarea.e385048b.js";import"./index.499c6591.js";import"./client.90beecd8.js";import"./translations.3bc9d58c.js";import"./portal-vue.esm.18ed59c3.js";import"./SettingsRow.d7400549.js";import"./Row.2d17f2cd.js";import"./Twitter.5404e332.js";import"./Plus.92a90910.js";import"./Header.73936a09.js";import"./Logo.8bd8cd82.js";import"./Steps.21f710ec.js";import"./HighlightToggle.b1321ee3.js";import"./Radio.955e0694.js";import"./HtmlTagsEditor.3b1bfa98.js";import"./Editor.c1c0327b.js";import"./UnfilteredHtml.5b4a03af.js";import"./ImageSeo.b43436a9.js";import"./NewsChannel.3e9f320f.js";import"./ProBadge.3e5c17e9.js";import"./popup.25df8419.js";import"./params.bea1a08d.js";import"./GoogleSearchPreview.5fb6bc89.js";import"./PostTypeOptions.f5e8b95f.js";import"./Tooltip.d723c3c3.js";import"./Book.4f237719.js";import"./VideoCamera.e5654f89.js";var g=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r(t.$route.name,{tag:"component"})},y=[];const v={components:{AdditionalInformation:p,Category:s,Features:a,Import:c,LicenseKey:l,SearchAppearance:u,SmartRecommendations:d,Success:f,Welcome:_},computed:{...i("wizard",["shouldShowImportStep"]),...i(["isUnlicensed"]),...e("wizard",["stages"]),...e(["internalOptions"])},methods:{...h("wizard",["setStages","loadState"]),deleteStage(t){const o=[...this.stages],r=o.findIndex(m=>t===m);r!==-1&&this.$delete(o,r),this.setStages(o)}},mounted(){if(this.internalOptions.internal.wizard){const t=JSON.parse(this.internalOptions.internal.wizard);delete t.currentStage,delete t.stages,delete t.licenseKey,this.loadState(t)}this.shouldShowImportStep||this.deleteStage("import"),this.isUnlicensed||this.deleteStage("license-key"),this.$isPro&&this.deleteStage("smart-recommendations")}},n={};var w=S(v,g,y,!1,x,null,null,null);function x(t){for(let o in n)this[o]=n[o]}const Lt=function(){return w.exports}();export{Lt as default};
