import{n as a,V as n}from"./js/vueComponentNormalizer.58b0a173.js";import{b as h,g as m}from"./js/index.2a1615d5.js";import{T as P}from"./js/index.2ba5600b.js";import{e as _}from"./js/elemLoaded.b1f6e29c.js";import{a as g,q as v,l as f,n as o,s as $}from"./js/index.d229874d.js";import{T as w}from"./js/WpTable.d951bd0b.js";import{b as y,t as D}from"./js/attachments.5c790671.js";import{T}from"./js/TruSeoScore.98a47fd6.js";import{S as E,a as x,b as I,c as b}from"./js/Affiliate.cf96499f.js";import"./js/client.b661b356.js";import"./js/_commonjsHelpers.10c44588.js";import"./js/translations.3bc9d58c.js";import"./js/default-i18n.0e73c33c.js";import"./js/constants.b5b5d9a1.js";import"./js/isArrayLikeObject.44af21ce.js";import"./js/portal-vue.esm.272b3133.js";import"./js/cleanForSlug.554cc757.js";var S=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"aioseo-score-button",class:t.scoreClass,attrs:{id:t.getId}},[t._v(" "+t._s(this.score===0?"N/A":`${this.score}/100`)+" ")])},N=[];const A={props:{score:{type:Number,default(){return 0}},postId:{type:Number,default(){return 0}}},computed:{scoreClass:function(){return 80<this.score?"score-green":50<this.score?"score-orange":1<this.score?"score-red":"score-disabled"},getId:function(){return`score-button-${this.postId}`}}},r={};var q=a(A,S,N,!1,L,null,null,null);function L(t){for(let i in r)this[i]=r[i]}const M=function(){return q.exports}();var j=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"aioseo-details-column",class:{editing:t.showEditTitle||t.showEditDescription||t.showEditImageTitle||t.showEditImageAltTag}},[s("div",[this.$root._data.screen.base==="edit"&&t.showTruSeo&&this.$allowed("aioseo_page_analysis")&&!t.isSpecialPage?s("div",{staticClass:"edit-row"},[s("core-score-button",{attrs:{score:this.post.value,postId:t.postId}})],1):t._e(),this.$allowed("aioseo_page_general_settings")?s("div",{staticClass:"edit-row edit-title"},[s("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(e){return e.preventDefault(),t.editTitle.apply(null,arguments)}}}),s("strong",[t._v(t._s(t.strings.title)+" ")]),s("span",{attrs:{id:`aioseo-${t.columnName}-${t.postId}-value`},domProps:{innerHTML:t._s(t.truncate(t.titleParsed,100))}})]):t._e(),t.showEditTitle?s("div",{staticClass:"edit-row"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),s("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[s("svg-circle-check",{attrs:{width:"20"}})],1),s("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(e){return e.preventDefault(),t.cancel.apply(null,arguments)}}},[s("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e(),this.$allowed("aioseo_page_general_settings")?s("div",{staticClass:"edit-row edit-description"},[s("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(e){return e.preventDefault(),t.editDescription.apply(null,arguments)}}}),s("strong",[t._v(t._s(t.strings.description)+" ")]),s("span",{attrs:{id:`aioseo-${t.columnName}-${t.postId}-value`},domProps:{innerHTML:t._s(t.truncate(t.descriptionParsed))}})]):t._e(),t.showEditDescription?s("div",{staticClass:"edit-row"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.postDescription,expression:"postDescription"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.postDescription},on:{input:function(e){e.target.composing||(t.postDescription=e.target.value)}}}),t._v(" "),s("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[s("svg-circle-check",{attrs:{width:"20"}})],1),s("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(e){return e.preventDefault(),t.cancel.apply(null,arguments)}}},[s("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e(),t._t("default"),this.$root._data.screen.base==="upload"&&t.post.showMedia?s("div",{staticClass:"edit-row edit-image-title"},[s("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(e){return e.preventDefault(),t.editImageTitle.apply(null,arguments)}}}),s("strong",[t._v(t._s(t.strings.imageTitle)+" ")]),s("span",{attrs:{id:`aioseo-${t.columnName}-${t.postId}-value`},domProps:{innerHTML:t._s(t.imageTitle)}})]):t._e(),t.showEditImageTitle?s("div",{staticClass:"edit-row"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.imageTitle,expression:"imageTitle"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.imageTitle},on:{input:function(e){e.target.composing||(t.imageTitle=e.target.value)}}}),t._v(" "),s("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(e){return e.preventDefault(),t.saveImage.apply(null,arguments)}}},[s("svg-circle-check",{attrs:{width:"20"}})],1),s("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(e){return e.preventDefault(),t.cancel.apply(null,arguments)}}},[s("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e(),this.$root._data.screen.base==="upload"&&t.post.showMedia?s("div",{staticClass:"edit-row edit-image-alt"},[s("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(e){return e.preventDefault(),t.editImageAlt.apply(null,arguments)}}}),s("strong",[t._v(t._s(t.strings.imageAltTag)+" ")]),s("span",{attrs:{id:`aioseo-${t.columnName}-${t.postId}-value`},domProps:{innerHTML:t._s(t.imageAltTag)}})]):t._e(),t.showEditImageAltTag?s("div",{staticClass:"edit-row"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.imageAltTag,expression:"imageAltTag"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.imageAltTag},on:{input:function(e){e.target.composing||(t.imageAltTag=e.target.value)}}}),t._v(" "),s("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(e){return e.preventDefault(),t.saveImage.apply(null,arguments)}}},[s("svg-circle-check",{attrs:{width:"20"}})],1),s("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(e){return e.preventDefault(),t.cancel.apply(null,arguments)}}},[s("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e()],2)])},O=[];const R={components:{CoreScoreButton:M,SvgCircleCheck:h,SvgCircleClose:m},mixins:[w,T],props:{post:Object,index:Number},data(){return{postId:null,columnName:null,value:null,title:null,titleParsed:null,postDescription:null,descriptionParsed:null,imageTitle:null,imageAltTag:null,showEditTitle:!1,showEditDescription:!1,showEditImageTitle:!1,showEditImageAltTag:!1,showTruSeo:!1,isSpecialPage:!1,strings:{title:this.$t.__("Title:",this.$td),description:this.$t.__("Description:",this.$td),imageTitle:this.$t.__("Image Title:",this.$td),imageAltTag:this.$t.__("Image Alt Tag:",this.$td),edit:this.$t.__("Edit",this.$td),save:this.$t.__("Save",this.$td),cancel:this.$t.__("Cancel",this.$td),wait:this.$t.__("Please wait...",this.$td)}}},computed:{...g(["options","currentPost"])},methods:{save(){this.showEditTitle=!1,this.showEditDescription=!1,this.post.title=this.title,this.post.description=this.postDescription,this.$http.post(this.$links.restUrl("postscreen")).send({postId:this.post.id,title:this.post.title,description:this.post.description}).then(t=>{this.titleParsed=t.body.title,this.descriptionParsed=t.body.description,this.post.titleParsed=t.body.title,this.post.descriptionParsed=t.body.description;const i=window.aioseo.posts;i[this.index]=this.post,v({posts:i}),this.$root._data.screen.base!=="upload"&&this.runAnalysis(this.post.id)}).catch(t=>{console.error(`Unable to update post with ID ${this.post.id}: ${t}`)})},saveImage(){this.showEditImageTitle=!1,this.showEditImageAltTag=!1,this.post.title=this.title,this.post.description=this.postDescription,this.post.imageTitle=this.imageTitle,this.post.imageAltTag=this.imageAltTag,this.$http.post(this.$links.restUrl("postscreen")).send({postId:this.post.id,isMedia:!0,title:this.post.title,description:this.post.description,imageTitle:this.post.imageTitle,imageAltTag:this.post.imageAltTag}).then(()=>{}).catch(t=>{console.error(`Unable to update attachment with ID ${this.post.id}: ${t}`)})},cancel(){this.value=this.post.value,this.showEditTitle=!1,this.showEditDescription=!1,this.showEditImageTitle=!1,this.showEditImageAltTag=!1},editTitle(){this.showEditTitle=!0},editDescription(){this.showEditDescription=!0},editImageTitle(){this.showEditImageTitle=!0},editImageAlt(){this.showEditImageAltTag=!0},updatePostTitle(t,i){const s=document.getElementById(`post-${t}`);if(!s)return;const e=s.getElementsByClassName("title")[0].getElementsByTagName("a")[0];if(!e)return;const C=e.getElementsByTagName("span")[0];e.innerText=i,e.prepend(C)}},mounted(){this.postId=this.post.id,this.columnName=this.post.columnName,this.value=this.post.value,this.imageTitle=this.post.imageTitle,this.imageAltTag=this.post.imageAltTag,this.isSpecialPage=this.post.isSpecialPage,this.title=this.post.title||this.post.defaultTitle,this.titleParsed=this.post.titleParsed,this.postDescription=this.post.description||this.post.defaultDescription,this.descriptionParsed=this.post.descriptionParsed},async created(){const{options:t,currentPost:i,tags:s}=await f(this.$http);this.$set(this.$store.state,"options",o({...this.$store.state.options},{...t})),this.$set(this.$store.state,"currentPost",o({...this.$store.state.currentPost},{...i})),this.$set(this.$store.state,"tags",o({...this.$store.state.tags},{...s})),this.showTruSeo=y()}},l={};var U=a(R,j,O,!1,B,null,null,null);function B(t){for(let i in l)this[i]=l[i]}const k=function(){return U.exports}();var F=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("core-post-column",{attrs:{post:t.post,index:t.index}},[[t.post.linkCounts&&t.post.postType!=="attachment"?s("div",{staticClass:"links"},[s("strong",{staticClass:"header"},[t._v(t._s(t.strings.links))]),s("span",[s("svg-link-internal-inbound"),t._v(t._s(t.post.linkCounts.inboundInternal))],1),s("span",[s("svg-link-internal-outbound"),t._v(t._s(t.post.linkCounts.outboundInternal))],1),s("span",[s("svg-link-affiliate"),t._v(t._s(t.post.linkCounts.affiliate))],1),s("span",[s("svg-link-external"),t._v(t._s(t.post.linkCounts.external))],1)]):t._e()]],2)},H=[];const z={components:{CorePostColumn:k,SvgLinkAffiliate:E,SvgLinkExternal:x,SvgLinkInternalInbound:I,SvgLinkInternalOutbound:b},props:{post:Object,index:Number},data(){return{strings:{links:this.$t.__("Links:",this.$tdPro)}}}},c={};var V=a(z,F,H,!1,G,null,null,null);function G(t){for(let i in c)this[i]=c[i]}const J=function(){return V.exports}();var K=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("core-post-column",{attrs:{post:t.post,index:t.index}})},Q=[];const W={components:{CorePostColumn:k},props:{post:Object,index:Number}},d={};var X=a(W,K,Q,!1,Y,null,null,null);function Y(t){for(let i in d)this[i]=d[i]}const Z=function(){return X.exports}();var tt=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[t.$isPro?s("PostColumn",{attrs:{post:t.post,index:t.index}}):t._e(),t.$isPro?t._e():s("PostColumnLite",{attrs:{post:t.post,index:t.index}})],1)},st=[];const et={components:{PostColumn:J,PostColumnLite:Z},props:{post:Object,index:Number}},u={};var it=a(et,tt,st,!1,ot,null,null,null);function ot(t){for(let i in u)this[i]=u[i]}const at=function(){return it.exports}();var nt=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"aioseo-details-column",class:{editing:t.showEditTitle||t.showEditDescription}},[s("div",[s("div",{staticClass:"edit-row edit-title"},[s("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(e){return e.preventDefault(),t.editTitle.apply(null,arguments)}}}),s("strong",[t._v(t._s(t.strings.title)+" ")]),s("span",{attrs:{id:`aioseo-${t.columnName}-${t.termId}-value`},domProps:{innerHTML:t._s(t.truncate(t.titleParsed,100))}})]),t.showEditTitle?s("div",{staticClass:"edit-row"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),t._v(" "),s("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[s("svg-circle-check",{attrs:{width:"20"}})],1),s("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(e){return e.preventDefault(),t.cancel.apply(null,arguments)}}},[s("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e(),s("div",{staticClass:"edit-row edit-description"},[s("a",{staticClass:"dashicons dashicons-edit aioseo-quickedit",attrs:{title:t.strings.edit},on:{click:function(e){return e.preventDefault(),t.editDescription.apply(null,arguments)}}}),s("strong",[t._v(t._s(t.strings.description)+" ")]),s("span",{attrs:{id:`aioseo-${t.columnName}-${t.termId}-value`},domProps:{innerHTML:t._s(t.truncate(t.descriptionParsed))}})]),t.showEditDescription?s("div",{staticClass:"edit-row"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.termDescription,expression:"termDescription"}],staticClass:"aioseo-quickedit-input",attrs:{rows:"4",columns:"32"},domProps:{value:t.termDescription},on:{input:function(e){e.target.composing||(t.termDescription=e.target.value)}}}),t._v(" "),s("a",{staticClass:"dashicons aioseo-quickedit-input-save",attrs:{title:t.strings.save},on:{click:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[s("svg-circle-check",{attrs:{width:"20"}})],1),s("a",{staticClass:"dashicons aioseo-quickedit-input-cancel",attrs:{title:t.strings.cancel},on:{click:function(e){return e.preventDefault(),t.cancel.apply(null,arguments)}}},[s("svg-circle-close",{attrs:{width:"20"}})],1)]):t._e()])])},rt=[];const lt={components:{SvgCircleCheck:h,SvgCircleClose:m},mixins:[w,T],props:{term:Object,index:Number},data(){return{termId:null,columnName:null,title:null,titleParsed:null,termDescription:null,descriptionParsed:null,showEditTitle:!1,showEditDescription:!1,showTruSeo:!1,strings:{title:this.$t.__("Title:",this.$td),description:this.$t.__("Description:",this.$td),edit:this.$t.__("Edit",this.$td),save:this.$t.__("Save",this.$td),cancel:this.$t.__("Cancel",this.$td),wait:this.$t.__("Please wait...",this.$td)}}},computed:{...g(["options","currentPost"])},methods:{save(){this.showEditTitle=!1,this.showEditDescription=!1,this.term.title=this.title,this.term.description=this.termDescription,this.$http.post(this.$links.restUrl("termscreen")).send({termId:this.term.id,title:this.term.title,description:this.term.description}).then(t=>{this.titleParsed=t.body.title,this.descriptionParsed=t.body.description,this.term.titleParsed=t.body.title,this.term.descriptionParsed=t.body.description;const i=window.aioseo.terms;i[this.index]=this.term,v({terms:i})}).catch(t=>{console.error(`Unable to update term with ID ${this.term.id}: ${t}`)})},cancel(){this.showEditTitle=!1,this.showEditDescription=!1},editTitle(){this.showEditTitle=!0},editDescription(){this.showEditDescription=!0}},mounted(){this.termId=this.term.id,this.columnName=this.term.columnName,this.title=this.term.title,this.titleParsed=this.term.titleParsed,this.termDescription=this.term.description,this.descriptionParsed=this.term.descriptionParsed},async created(){const{options:t,currentPost:i,tags:s}=await f(this.$http);this.$set(this.$store.state,"options",o({...this.$store.state.options},{...t})),this.$set(this.$store.state,"currentPost",o({...this.$store.state.currentPost},{...i})),this.$set(this.$store.state,"tags",o({...this.$store.state.tags},{...s})),this.showTruSeo=D()}},p={};var ct=a(lt,nt,rt,!1,dt,null,null,null);function dt(t){for(let i in p)this[i]=p[i]}const ut=function(){return ct.exports}();n.prototype.$truSeo=new P;const pt=(t,i)=>{new n({store:$,data:{screen:window.aioseo.screen},render:s=>s(at,{props:{post:t,index:i}})}).$mount(`#${t.columnName}-${t.id}`)};window.aioseo.posts&&window.aioseo.posts.forEach((t,i)=>{_(`#${t.columnName}-${t.id}`,`aioseoPostsTable-${t.id}`),document.addEventListener("animationstart",function(s){`aioseoPostsTable-${t.id}`===s.animationName&&pt(t,i)},{passive:!0})});const ht=(t,i)=>{new n({store:$,data:{screen:window.aioseo.screen},render:s=>s(ut,{props:{term:t,index:i}})}).$mount(`#${t.columnName}-${t.id}`)};window.aioseo.terms&&window.aioseo.posts.length===0&&window.aioseo.terms.forEach((t,i)=>{_(`#${t.columnName}-${t.id}`,`aioseoTermsTable-${t.id}`),document.addEventListener("animationstart",function(s){`aioseoTermsTable-${t.id}`===s.animationName&&ht(t,i)},{passive:!0})});
