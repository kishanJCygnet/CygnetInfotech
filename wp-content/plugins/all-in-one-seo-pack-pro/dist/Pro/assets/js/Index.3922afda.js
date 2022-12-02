import{C as E}from"./Index.cb09fd7a.js";import{n}from"./vueComponentNormalizer.67c9b86e.js";import{a as m,m as o}from"./vuex.esm.19624049.js";import{C as v,a as $,b as R,f as u}from"./Caret.eeb84d06.js";import"./WpTable.61e73015.js";import"./index.c630c4a6.js";import{J as L}from"./JsonValues.08065e69.js";import"./SaveChanges.68e73792.js";import{C as w}from"./ProBadge.3e5c17e9.js";import{S as x}from"./External.98cc7a29.js";import{S as y}from"./Exclamation.9f3b358f.js";import{B as k}from"./Checkbox.1903802a.js";import{C as U,a as S}from"./index.499c6591.js";import{G as D,a as A}from"./Row.2d17f2cd.js";import{S as P}from"./Gear.7c17fabe.js";import{T as C}from"./Slide.9538a421.js";import{C as O}from"./Tooltip.d723c3c3.js";import{S as M}from"./Plus.92a90910.js";var I=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("portal",{attrs:{to:"aioseo-modal-portal"}},[e("core-modal",{attrs:{classes:["aioseo-app"].concat(t.classes),"no-header":t.noHeader,"allow-body-overflow":t.allowBodyOverflow,confirmation:t.confirmation},on:{close:function(i){return t.$emit("close")}},scopedSlots:t._u([{key:"headerTitle",fn:function(){return[t._t("headerTitle")]},proxy:!0},{key:"body",fn:function(){return[t._t("body")]},proxy:!0},{key:"footer",fn:function(){return[t._t("footer")]},proxy:!0}],null,!0)})],1)},B=[];const q={components:{CoreModal:E},props:{noHeader:Boolean,classes:Array,allowBodyOverflow:Boolean,confirmation:Boolean}},c={};var z=n(q,I,B,!1,j,null,null,null);function j(t){for(let s in c)this[s]=c[s]}const jt=function(){return z.exports}();var F=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-add-redirection-url-results"},[e("ul",t._l(t.results,function(i,r){return e("li",{key:r,on:{click:function(l){return t.$emit("set-url",i.link)}}},[e("span",[e("div",{staticClass:"option"},[e("div",{staticClass:"option-title"},[e("div",{domProps:{innerHTML:t._s(t.getOptionTitle(i.label))}}),i.status!=="publish"?e("core-pro-badge",[t._v(" "+t._s(t.getStatusLabel(i.status))+" ")]):t._e()],1),e("div",{staticClass:"option-details"},[e("span",[t._v(t._s(i.link))])])]),e("a",{staticClass:"option-permalink",attrs:{href:i.link,target:"_blank"},on:{click:function(l){return l.stopPropagation(),function(){}.apply(null,arguments)}}},[e("svg-external")],1)])])}),0)])},V=[];const H={components:{CoreProBadge:w,SvgExternal:x},props:{results:{type:Array,required:!0},url:String},data(){return{strings:{DRAFT:this.$t.__("DRAFT",this.$td),PENDING:this.$t.__("PENDING",this.$td),FUTURE:this.$t.__("FUTURE",this.$td)}}},methods:{getOptionTitle(t){const s=new RegExp(`(${this.url})`,"gi");return t.replace(s,'<span class="search-term">$1</span>')},getStatusLabel(t){switch(t.toLowerCase()){case"draft":return this.strings.DRAFT;case"future":return this.strings.FUTURE;case"pending":return this.strings.PENDING}}}},h={};var W=n(H,F,V,!1,N,null,null,null);function N(t){for(let s in h)this[s]=h[s]}const b=function(){return W.exports}();var Y=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"redirect-target-url",staticClass:"aioseo-add-redirection-target-url"},[e("base-input",{class:{"aioseo-error":t.errors.length,"aioseo-active":!t.errors.length&&!t.warnings.length&&t.url,"aioseo-warning":t.warnings.length},attrs:{size:"medium",placeholder:"/target-page/"},on:{keyup:t.searchChange,focus:function(i){t.showResults=!0},input:function(i){return t.$emit("input",t.value)},blur:function(i){return t.$emit("blur",t.value)}},scopedSlots:t._u([{key:"append-icon",fn:function(){return[e("div",{staticClass:"append-icon"},[t.isLoading?t._e():[t.errors.length?e("svg-circle-close"):t._e(),!t.errors.length&&!t.warnings.length&&t.url?e("svg-circle-check"):t._e(),t.warnings.length?e("svg-circle-exclamation"):t._e()],t.isLoading?e("core-loader",{attrs:{dark:""}}):t._e()],2)]},proxy:!0}]),model:{value:t.value,callback:function(i){t.value=i},expression:"value"}}),t.showResults&&t.results.length?e("core-add-redirection-url-results",{attrs:{results:t.results,url:t.value},on:{"set-url":t.setUrl}}):t._e()],1)},J=[];const Q={components:{CoreAddRedirectionUrlResults:b,CoreLoader:v,SvgCircleCheck:$,SvgCircleClose:R,SvgCircleExclamation:y},props:{url:String,errors:Array,warnings:Array},data(){return{showResults:!1,isLoading:!1,value:null,results:[]}},watch:{value(){this.value&&(this.value=this.value.replace(/(https?:\/)(\/)+|(\/)+/g,"$1$2$3"),this.value=this.value.replace(/\s+/g,""))},url:{immediate:!0,handler(){this.value=this.url}}},computed:{...m(["currentPost"])},methods:{...o("redirects",["getPosts"]),onBlur(){setTimeout(()=>{this.$emit("input",this.value)},150)},searchChange(){if(!!this.value){if(this.value.startsWith("/")||this.value.startsWith("http:")||this.value.startsWith("https:")){this.isLoading=!1;return}this.isLoading=!0,u(()=>{if(!this.value){this.isLoading=!1;return}this.showResults=!0,this.ajaxSearch(this.value).then(()=>this.isLoading=!1)},500)}},ajaxSearch(t){return this.getPosts({query:t,postId:this.currentPost.id}).then(s=>{this.results=s.body.objects})},setUrl(t){this.showResults=!1,this.value=t.replace(this.$aioseo.urls.mainSiteUrl,"",t),this.$emit("input",this.value)},documentClick(t){if(!this.showResults)return;const s=t&&t.target?t.target:null,e=this.$refs["redirect-target-url"];e&&e!==s&&!e.contains(s)&&(this.showResults=!1)}},mounted(){document.addEventListener("click",this.documentClick)},beforeDestroy(){document.removeEventListener("click",this.documentClick)}},d={};var G=n(Q,Y,J,!1,K,null,null,null);function K(t){for(let s in d)this[s]=d[s]}const Z=function(){return G.exports}();var X=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"redirect-source-url",staticClass:"aioseo-redirect-source-url"},[e("base-input",{class:{"aioseo-error":t.url.errors.length,"aioseo-active":!t.url.errors.length&&!t.url.warnings.length&&t.url.url,"aioseo-warning":t.url.warnings.length},attrs:{value:t.url.url,disabled:t.log404||t.disableSource,size:"medium",placeholder:"/source-page/"},on:{input:function(i){return t.updateSourceUrl(i)},keyup:t.searchChange,focus:function(i){t.showResults=!0}},scopedSlots:t._u([{key:"append-icon",fn:function(){return[e("div",{staticClass:"append-icon"},[t.isLoading?t._e():[t.url.errors.length?e("svg-circle-close"):t._e(),!t.url.errors.length&&!t.url.warnings.length&&t.url.url?e("svg-circle-check"):t._e(),t.url.warnings.length?e("svg-circle-exclamation"):t._e(),e("svg-gear",{class:{active:t.urlOptionsActive},nativeOn:{click:function(i){t.showOptions=!t.showOptions}}}),t.allowDelete?e("svg-trash",{nativeOn:{click:function(i){return t.$emit("remove-url")}}}):t._e()],t.isLoading?e("core-loader",{attrs:{dark:""}}):t._e()],2)]},proxy:!0}])}),!t.url.regex&&t.showResults&&t.results.length?e("core-add-redirection-url-results",{attrs:{results:t.results,url:t.url.url},on:{"set-url":t.setUrl}}):t._e(),t.log404?t._e():t._t("source-url-description"),e("transition-slide",{staticClass:"source-url-options",attrs:{active:t.showOptions}},[e("div",[e("grid-row",[e("grid-column",{attrs:{xs:"4"}},[e("base-checkbox",{attrs:{size:"medium",value:t.url.ignoreSlash},on:{input:function(i){return t.updateOption("ignoreSlash",i)}}},[t._v(" "+t._s(t.strings.ignoreSlash)+" ")])],1),e("grid-column",{attrs:{xs:"4"}},[e("base-checkbox",{attrs:{size:"medium",value:t.url.ignoreCase},on:{input:function(i){return t.updateOption("ignoreCase",i)}}},[t._v(" "+t._s(t.strings.ignoreCase)+" ")])],1),!t.log404&&!t.disableSource?e("grid-column",{attrs:{xs:"4"}},[e("base-checkbox",{attrs:{size:"medium",value:t.url.regex},on:{input:function(i){return t.updateOption("regex",i)}}},[t._v(" "+t._s(t.strings.regex)+" ")])],1):t._e()],1)],1)]),e("transition-slide",{attrs:{active:!!t.url.errors.length}},t._l(t.url.errors,function(i,r){return e("core-alert",{key:r,staticClass:"source-url-error",attrs:{type:"red",size:"small"},domProps:{innerHTML:t._s(i)}})}),1),e("transition-slide",{attrs:{active:!!t.url.warnings.length}},t._l(t.url.warnings,function(i,r){return e("core-alert",{key:r,staticClass:"source-url-warning",attrs:{type:"yellow",size:"small"},domProps:{innerHTML:t._s(i)}})}),1)],2)},tt=[];const et={components:{BaseCheckbox:k,CoreAddRedirectionUrlResults:b,CoreAlert:U,CoreLoader:v,GridColumn:D,GridRow:A,SvgCircleCheck:$,SvgCircleClose:R,SvgCircleExclamation:y,SvgGear:P,SvgTrash:S,TransitionSlide:C},props:{url:{type:Object,default(){return{id:null,url:null,regex:!1,ignoreSlash:!0,ignoreCase:!0,errors:[],warnings:[]}}},allowDelete:Boolean,targetUrl:String,log404:Boolean,disableSource:Boolean},data(){return{showResults:!1,isLoading:!1,showOptions:!1,strings:{ignoreSlash:this.$t.__("Ignore Slash",this.$td),ignoreCase:this.$t.__("Ignore Case",this.$td),regex:this.$t.__("Regex",this.$td)},results:[]}},watch:{targetUrl(){this.updateSourceUrl(this.url.url)}},computed:{maybeRegex(){return this.url.url.match(/[*\\()[\]^$]/)!==null||this.url.url.indexOf(".?")!==-1},invalidUrl(){if(!this.url.url)return!1;const t=[];if(this.url.regex)try{new RegExp(this.url.url)}catch{return t.push(this.$t.__("The regex syntax is invalid.",this.$td)),t}if(this.url.url.substr(0,4)==="http"&&this.url.url.indexOf(document.location.origin)===-1&&t.push(this.$t.__("Please enter a valid relative source URL.",this.$td)),this.url.url.match(/%\w+%/)&&t.push(this.$t.__("Permalinks are not currently supported.",this.$td)),(this.url.url==="/(.*)"||this.url.url==="^/(.*)")&&t.push(this.$t.__("This redirect is supported using the Relocate Site feature under Full Site Redirect tab.",this.$td)),this.url.url&&this.url.url.length&&this.targetUrl&&this.targetUrl.length){let s=this.url.ignoreSlash?this.$links.unTrailingSlashIt(this.url.url):this.url.url,e=this.url.ignoreSlash?this.$links.unTrailingSlashIt(this.targetUrl):this.targetUrl;s=this.url.ignoreCase?s.toLowerCase():s,e=this.url.ignoreCase?e.toLowerCase():e,(s===e||this.url.regex&&e.match(s))&&t.push(this.$t.__("Your source is the same as a target and this will create a loop.",this.$td))}return t},iffyUrl(){if(!this.url.url)return[];const t=[];return this.url.url.substr(0,4)!=="http"&&this.url.url.substr(0,1)!=="/"&&0<this.url.url.length&&!this.url.regex&&t.push(this.$t.sprintf(this.$t.__("The source URL should probably start with a %1$s",this.$td),"<code>/</code>")),this.url.url.indexOf("#")!==-1&&t.push(this.$t.__("Anchor values are not sent to the server and cannot be redirected.",this.$td)),!this.log404&&this.maybeRegex&&!this.url.regex&&t.push(this.$t.sprintf(this.$t.__("Remember to enable the %1$s option if this is a regular expression.",this.$td),"<code>Regex</code>")),this.url.regex&&(this.url.url.indexOf("^")===-1&&this.url.url.indexOf("$")===-1&&t.push(this.$t.sprintf(this.$t.__("To prevent a greedy regular expression you can use %1$s to anchor it to the start of the URL. For example: %2$s",this.$td),"<code>^/</code>","<code>^/"+this.url.url.replace(/^\//,"")+"</code>")),0<this.url.url.indexOf("^")&&t.push(this.$t.sprintf(this.$t.__("The caret %1$s should be at the start. For example: %2$s",this.$td),"<code>^/</code>","<code>^/"+this.url.url.replace("^","").replace(/^\//,"")+"</code>")),this.url.url.indexOf("^")===0&&this.url.url.indexOf("^/")===-1&&t.push(this.$t.sprintf(this.$t.__("The source URL should probably start with a %1$s",this.$td),"<code>^/</code>")),this.url.url.length-1!==this.url.url.indexOf("$")&&this.url.url.indexOf("$")!==-1&&t.push(this.$t.sprintf(this.$t.__("The dollar symbol %1$s should be at the end. For example: %2$s",this.$td),"<code>$</code>","<code>"+this.url.url.replace(/\$/g,"")+"$</code>"))),this.url.url.match(/(\.html|\.htm|\.php|\.pdf|\.jpg)$/)!==null&&t.push(this.$t.__("Some servers may be configured to serve file resources directly, preventing a redirect occurring.",this.$td)),t},urlOptionsActive(){return this.url.regex||this.showOptions}},methods:{...o("redirects",["getPosts"]),updateSourceUrl(t){!t||(t&&(t=t.replace(/(https?:\/)(\/)+|(\/)+/g,"$1$2$3")),this.url.regex||(t=t.replace(/\s+/g,"")),this.$set(this.url,"url",t),this.$set(this.url,"errors",this.invalidUrl),this.$set(this.url,"warnings",this.iffyUrl),this.$emit("updated-url",this.url))},updateOption(t,s){this.$set(this.url,t,s),this.updateSourceUrl(this.url.url),this.$emit("updated-option",this.url)},searchChange(){if(!(!this.url.url||this.url.regex)){if(this.url.url.startsWith("/")||this.url.url.startsWith("^")||this.url.url.startsWith("http:")||this.url.url.startsWith("https:")){this.isLoading=!1;return}this.isLoading=!0,u(()=>{if(!this.url.url){this.isLoading=!1;return}this.showResults=!0,this.ajaxSearch(this.url.url).then(()=>this.isLoading=!1)},500)}},ajaxSearch(t){return this.getPosts({query:t}).then(s=>{this.results=s.body.objects})},setUrl(t){this.showResults=!1,this.updateOption("url",t.replace(this.$aioseo.urls.mainSiteUrl,"",t))},documentClick(t){if(!this.showResults)return;const s=t&&t.target?t.target:null,e=this.$refs["redirect-source-url"];e&&e!==s&&!e.contains(s)&&(this.showResults=!1)}},mounted(){this.url.showOptions&&(this.showOptions=!0,this.updateSourceUrl(this.url.url)),document.addEventListener("click",this.documentClick)},beforeDestroy(){document.removeEventListener("click",this.documentClick)}},g={};var st=n(et,X,tt,!1,rt,null,null,null);function rt(t){for(let s in g)this[s]=g[s]}const it=function(){return st.exports}();var lt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"custom-rules"},[e("table",{staticClass:"redirects-options-table",attrs:{cellspacing:"0",cellpadding:"0","aria-label":"Custom Rules"}},[e("thead",[e("tr",[e("td",{attrs:{colspan:"2"}},[t._v(t._s(t.strings.customRules))])])]),e("tbody",t._l(t.customRules,function(i,r){return e("tr",{key:r,staticClass:"rule",class:{even:r%2===0}},[e("td",{staticClass:"rule-settings"},[e("base-select",{attrs:{options:t.filteredTypes,size:"medium",placeholder:t.strings.selectMatchRule,value:t.getRuleValue("type",r)},on:{input:function(l){return t.updateRule("type",l,r)}}}),t.getType(r,"options")||t.getType(r,"taggable")?e("base-select",{attrs:{options:t.getType(r,"options")||[],size:"medium",value:t.getRuleValue("value",r),multiple:t.getType(r,"multiple")||t.getType(r,"taggable"),taggable:t.getType(r,"taggable"),placeholder:t.getType(r,"placeholder")||t.strings.selectAValue},on:{input:function(l){return t.updateRule("value",l,r)}}}):t._e(),t.getType(r,"keyValuePair")?e("base-input",{attrs:{value:t.getRuleValue("key",r),size:"medium",placeholder:t.getType(r,"placeholderKey")||t.strings.key},on:{input:function(l){return t.updateRule("key",l,r)}}}):t._e(),!t.getType(r,"options")&&!t.getType(r,"taggable")?e("base-input",{attrs:{value:t.getRuleValue("value",r),size:"medium",placeholder:t.getType(r,"placeholder")||t.strings.value,disabled:!t.getType(r)},on:{input:function(l){return t.updateRule("value",l,r)}}}):t._e(),t.getType(r,"regex")?e("base-toggle",{attrs:{value:t.getRuleValue("regex",r)},on:{input:function(l){return t.updateRule("regex",l,r)}}},[t._v(" "+t._s(t.strings.regex)+" ")]):t._e()],1),e("td",{staticClass:"actions"},[e("core-tooltip",{staticClass:"action",attrs:{type:"action"},scopedSlots:t._u([{key:"tooltip",fn:function(){return[t._v(" "+t._s(t.strings.delete)+" ")]},proxy:!0}],null,!0)},[e("svg-trash",{nativeOn:{click:function(l){return t.removeRule(r)}}})],1)],1)])}),0),e("tfoot",[e("tr",[e("td",{attrs:{colspan:"2"}},[e("base-button",{attrs:{size:"small-table",type:"black"},on:{click:function(i){return t.addRule(null)}}},[e("svg-circle-plus"),t._v(" "+t._s(t.strings.add)+" ")],1)],1)])])])])},at=[];const nt={type:null,key:null,value:null,regex:null},ot={components:{CoreTooltip:O,SvgCirclePlus:M,SvgTrash:S},props:{editCustomRules:Array},data(){return{strings:{customRules:this.$t.__("Custom Rules",this.$td),selectMatchRule:this.$t.__("Select Rule",this.$td),delete:this.$t.__("Delete",this.$td),add:this.$t.__("Add Custom Rule",this.$td),regex:this.$t.__("Regex",this.$td),selectAValue:this.$t.__("Select a Value or Add a New One",this.$td),key:this.$t.__("Key",this.$td),value:this.$t.__("Value",this.$td)},customRules:[],types:[{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.login,value:"login",placeholder:this.$t.__("Select Status",this.$td),singleRule:!0,options:[{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.loggedin,value:"loggedin"},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.loggedout,value:"loggedout"}]},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.role,value:"role",multiple:!0,placeholder:this.$t.__("Select Roles",this.$td),options:Object.entries(this.$aioseo.user.roles).map(t=>({label:t[1],value:t[0]}))},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.referrer,value:"referrer",regex:!0,singleRule:!0},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.agent,value:"agent",regex:!0,taggable:!0,multiple:!0,options:[{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.mobile,value:"mobile",docLink:this.$links.getDocLink(this.$t.__("Learn more",this.$td),"redirectCustomRulesUserAgent",!0)},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.feeds,value:"feeds",docLink:this.$links.getDocLink(this.$t.__("Learn more",this.$td),"redirectCustomRulesUserAgent",!0)},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.libraries,value:"libraries",docLink:this.$links.getDocLink(this.$t.__("Learn more",this.$td),"redirectCustomRulesUserAgent",!0)}]},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.cookie,value:"cookie",keyValuePair:!0,regex:!0},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.ip,value:"ip",placeholder:this.$t.__("Enter an IP Address",this.$td),taggable:!0,regex:!0,singleRule:!0},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.server,value:"server",placeholder:this.$t.__("Enter the Server Name",this.$td),regex:!0,singleRule:!0},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.header,value:"header",keyValuePair:!0,regex:!0},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.wp_filter,value:"wp_filter",placeholder:this.$t.__("Enter a WordPress Filter Name",this.$td),taggable:!0},{label:this.$constants.REDIRECTS_CUSTOM_RULES_LABELS.locale,value:"locale",taggable:!0,regex:!0,placeholder:this.$t.__("Enter a Locale Code, e.g.: en_GB, es_ES",this.$td),singleRule:!0}]}},computed:{hasCustomRules(){return 0<this.customRules.length},filteredTypes(){return this.types.map(t=>(t.$isDisabled=!1,t.singleRule&&this.customRules.find(s=>t.value===s.type)&&(t.$isDisabled=!0),t))}},methods:{removeRule(t){this.$delete(this.customRules,t),this.hasCustomRules||this.addRule(null)},addRule(t,s=!1){t||(t=JSON.parse(JSON.stringify(nt))),(!s||s&&this.customRules.filter(e=>e===t).length===0)&&this.customRules.push(t)},updateRule(t,s,e){const i=this.customRules[e];s=typeof s.value<"u"?s.value:s,s=typeof s=="object"&&s.length?s.map(r=>r.value):s,i[t]=s,t==="type"&&(i.value=""),this.$set(this.customRules,e,i)},getRuleValue(t,s,e=!1){if(!this.customRules[s])return;let r=this.customRules[s][t],l=null;if(e)return r;switch(t){case"type":r=this.types.find(a=>r===a.value);break;case"value":l=this.getType(s,"options"),l&&(typeof r=="object"?r=r.map(a=>l.find(T=>a===T.value)||a).filter(a=>!!a):r=l.find(a=>r===a.value)||r),this.getType(s,"taggable")&&(r=typeof r=="object"?r.map(a=>typeof a.label>"u"?{label:a,value:a}:a):[]);break}return r},getType(t,s){const e=this.getRuleValue("type",t);return s?e&&typeof e[s]<"u"?e[s]:!1:e}},mounted(){this.editCustomRules&&(this.customRules=this.editCustomRules),this.hasCustomRules||this.addRule(null)}},p={};var ut=n(ot,lt,at,!1,ct,"2c813bd6",null,null);function ct(t){for(let s in p)this[s]=p[s]}const ht=function(){return ut.exports}();var dt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("svg",{staticClass:"aioseo-right-arrow",attrs:{width:"36",height:"16",viewBox:"0 0 36 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M36 8L28.4211 0.5V6.125H0V9.875H28.4211V15.5L36 8Z",fill:"currentColor"}})])},gt=[];const pt={},_={};var _t=n(pt,dt,gt,!1,ft,null,null,null);function ft(t){for(let s in _)this[s]=_[s]}const mt=function(){return _t.exports}();var vt=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-add-redirection",class:{"edit-url":t.edit,"log-404":t.log404}},[t.genericError?e("core-alert",{staticClass:"generic-error",attrs:{type:"red"}},[t._v(" "+t._s(t.strings.genericErrorMessage)+" ")]):t._e(),e("div",{staticClass:"urls"},[e("div",{staticClass:"source"},[e("div",{staticClass:"aioseo-settings-row no-border no-margin small-padding"},[e("div",{staticClass:"settings-name"},[e("div",{staticClass:"name small-margin"},[t._v(" "+t._s(t.sourceUrl)+": ")])]),t._l(t.sourceUrls,function(i,r){return e("core-add-redirection-url",{key:r,attrs:{url:i,"allow-delete":1<t.sourceUrls.length,"target-url":t.targetUrl,log404:t.log404,disableSource:t.disableSource},on:{"remove-url":function(l){return t.removeUrl(r)}},scopedSlots:t._u([t.edit&&!t.disableSource?{key:"source-url-description",fn:function(){return[e("div",{staticClass:"aioseo-description source-description",domProps:{innerHTML:t._s(t.strings.sourceUrlDescription)}})]},proxy:!0}:null],null,!0)})}),!t.edit&&!t.log404&&!t.disableSource?e("base-button",{attrs:{size:"small",type:"gray"},on:{click:t.addUrl}},[t._v(" "+t._s(t.strings.addUrl)+" ")]):t._e()],2)]),t.redirectTypeHasTarget()?e("div",{staticClass:"url-arrow"},[e("svg-right-arrow")],1):t._e(),t.redirectTypeHasTarget()?e("div",{staticClass:"target"},[e("div",{staticClass:"aioseo-settings-row no-border no-margin small-padding"},[e("div",{staticClass:"settings-name"},[e("div",{staticClass:"name small-margin"},[t._v(" "+t._s(t.strings.targetUrl)+": ")])]),e("div",{staticClass:"url"},[e("core-add-redirection-target-url",{attrs:{url:t.targetUrl,errors:t.targetUrlErrors,warnings:t.targetUrlWarnings},on:{input:t.updateTargetUrl}}),e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.targetUrlDescription)+" ")]),e("transition-slide",{attrs:{active:!!t.targetUrlErrors.length}},[e("div",t._l(t.targetUrlErrors,function(i,r){return e("core-alert",{key:r,staticClass:"target-url-error",attrs:{type:"red",size:"small"},domProps:{innerHTML:t._s(i)}})}),1)]),e("transition-slide",{attrs:{active:!!t.targetUrlWarnings.length}},[e("div",t._l(t.targetUrlWarnings,function(i,r){return e("core-alert",{key:r,staticClass:"target-url-warning",attrs:{type:"yellow",size:"small"},domProps:{innerHTML:t._s(i)}})}),1)])],1)])]):t._e(),!t.edit&&!t.log404&&!t.disableSource?[e("div",{staticClass:"break"}),e("div",{staticClass:"source"},[e("div",{staticClass:"aioseo-description source-description",domProps:{innerHTML:t._s(t.strings.sourceUrlDescription)}})]),e("div",{staticClass:"url-arrow"}),e("div",{staticClass:"target"})]:t._e()],2),e("div",{staticClass:"settings",class:{advanced:t.showAdvancedSettings}},[e("div",{staticClass:"all-settings"},[e("div",{staticClass:"all-settings-content"},[e("div",{staticClass:"redirect-type"},[t._v(" "+t._s(t.strings.redirectType)+" "),e("base-select",{attrs:{options:t.$constants.REDIRECT_TYPES,size:"medium"},model:{value:t.redirectType,callback:function(i){t.redirectType=i},expression:"redirectType"}})],1),e("transition-slide",{staticClass:"advanced-settings",attrs:{active:t.showAdvancedSettings}},[e("div",{staticClass:"query-params"},[t._v(" "+t._s(t.strings.queryParams)+" "),e("base-select",{attrs:{options:t.redirectQueryParams,size:"medium"},model:{value:t.queryParam,callback:function(i){t.queryParam=i},expression:"queryParam"}})],1)]),t.showAdvancedSettings?t._e():e("a",{staticClass:"advanced-settings-link",attrs:{href:"#"},on:{click:function(i){i.preventDefault(),t.showAdvancedSettings=!t.showAdvancedSettings}}},[t._v(t._s(t.strings.advancedSettings))])],1)]),e("transition-slide",{staticClass:"advanced-settings",attrs:{active:t.showAdvancedSettings}},[e("custom-rules",{attrs:{"edit-custom-rules":t.customRules}})],1),e("div",{staticClass:"actions",class:{advanced:t.showAdvancedSettings}},[e("base-button",{attrs:{size:"medium",type:"blue",loading:t.addingRedirect,disabled:t.saveIsDisabled},on:{click:function(i){t.edit?t.saveChanges():t.addRedirects()}}},[t._v(" "+t._s(t.edit?t.strings.saveChanges:t.addRedirect)+" ")]),t.edit?e("base-button",{staticClass:"cancel-edit-row",attrs:{size:"medium",type:"gray"},on:{click:function(i){return t.$emit("cancel",!0)}}},[t._v(" "+t._s(t.strings.cancel)+" ")]):t._e()],1)],1)],1)},$t=[];const Rt={components:{CoreAddRedirectionTargetUrl:Z,CoreAddRedirectionUrl:it,CoreAlert:U,CustomRules:ht,SvgRightArrow:mt,TransitionSlide:C},mixins:[L],props:{edit:Boolean,log404:Boolean,disableSource:Boolean,url:Object,urls:Array,target:String,type:Number,query:String,slash:Boolean,case:Boolean,rules:{type:Array,default(){return[]}}},data(){return{genericError:!1,showAdvancedSettings:!1,addingRedirect:!1,targetUrl:null,targetUrlErrors:[],targetUrlWarnings:[],sourceUrls:[],redirectType:null,queryParam:null,customRules:[],strings:{redirectType:this.$t.__("Redirect Type:",this.$td),targetUrl:this.$t.__("Target URL",this.$td),targetUrlDescription:this.$t.__("Enter a URL or start by typing a page or post title, slug or ID.",this.$td),addUrl:this.$t.__("Add URL",this.$td),sourceUrlDescription:this.$t.sprintf(this.$t.__("Enter a relative URL to redirect from or start by typing in page or post title, slug or ID. You can also use regex (%1$s)",this.$td),this.$links.getDocLink(this.$t.__("what's this?",this.$td),"redirectManagerRegex")),advancedSettings:this.$t.__("Advanced Settings",this.$td),queryParams:this.$t.__("Query Parameters:",this.$td),saveChanges:this.$t.__("Save Changes",this.$td),cancel:this.$t.__("Cancel",this.$td),genericErrorMessage:this.$t.__("An error occurred while adding your redirects. Please try again later.",this.$td)}}},watch:{sourceUrls:{deep:!0,handler(){u(()=>this.checkForDuplicates(),500)}}},computed:{...m("redirects",["options"]),saveIsDisabled(){return!!this.sourceUrls.filter(t=>!t.url).length||!!this.sourceUrls.filter(t=>0<t.errors.length).length||this.redirectTypeHasTarget()&&!this.targetUrl},getRelativeAbsolute(){const t=this.targetUrl.match(/^\/([a-zA-Z0-9_\-%]*\..*)\//);return t?t[0]:null},sourceUrl(){return 1<this.sourceUrls.length?this.$t.__("Source URLs",this.$td):this.$t.__("Source URL",this.$td)},addRedirect(){return 1<this.sourceUrls.length?this.$t.__("Add Redirects",this.$td):this.$t.__("Add Redirect",this.$td)},hasTargetUrlErrors(){if(!this.targetUrl)return[];const t=[];this.targetUrl&&!this.beginsWith(this.targetUrl,"https://")&&!this.beginsWith(this.targetUrl,"http://")&&this.targetUrl.substr(0,1)!=="/"&&t.push(this.$t.sprintf(this.$t.__("Your target URL should be an absolute URL like %1$s or start with a slash.",this.$td),"<code>https://domain.com/"+this.targetUrl+"</code>","<code>/"+this.targetUrl+"</code>"));const s=this.targetUrl.match(/[|\\$]/g);return s!==null&&(this.sourceUrls.map(i=>i.regex).every(i=>i)||t.push(this.$t.sprintf(this.$t.__("Your target URL contains the invalid character(s) %1$s",this.$td),"<code>"+s+"</code>"))),t},hasTargetUrlWarnings(){if(!this.targetUrl)return[];const t=[];return this.getRelativeAbsolute&&t.push(this.$t.sprintf(this.$t.__("Your URL appears to contain a domain inside the path: %1$s. Did you mean to use %2$s instead?",this.$td),"<code>"+this.getRelativeAbsolute+"</code>","<code>https:/"+this.getRelativeAbsolute+"</code>")),t},getDefaultRedirectType(){let t=this.getJsonValue(this.options.redirectDefaults.redirectType);return t||(t=this.$constants.REDIRECT_TYPES[0]),t},getDefaultQueryParam(){let t=this.getJsonValue(this.options.redirectDefaults.queryParam);return t||(t=this.$constants.REDIRECT_QUERY_PARAMS[0]),t},getDefaultSlash(){return this.options.redirectDefaults.ignoreSlash},getDefaultCase(){return this.options.redirectDefaults.ignoreCase},getDefaultSourceUrls(){return[JSON.parse(JSON.stringify(this.getDefaultSourceUrl))]},getDefaultSourceUrl(){return{id:null,url:null,regex:!1,ignoreSlash:this.slash||this.getDefaultSlash||!1,ignoreCase:this.case||this.getDefaultCase||!1,errors:[],warnings:[]}},redirectQueryParams(){return 0<this.sourceUrls.filter(t=>t.regex).length?this.$constants.REDIRECT_QUERY_PARAMS.map(t=>(t.$isDisabled=!1,t.value==="exact"&&(t.$isDisabled=!0,this.queryParam.value==="exact"&&(this.queryParam=this.$constants.REDIRECT_QUERY_PARAMS.find(s=>!s.$isDisabled))),t)):this.$constants.REDIRECT_QUERY_PARAMS.map(t=>(t.$isDisabled=!1,t))}},methods:{...o("redirects",["create","update"]),beginsWith(t,s){return s.indexOf(t)===0||t.substr(0,s.length)===s},addUrl(){this.sourceUrls.push(JSON.parse(JSON.stringify(this.getDefaultSourceUrl)))},removeUrl(t){this.$delete(this.sourceUrls,t)},addRedirects(){this.genericError=!1,this.addingRedirect=!0,this.sourceUrls.map(t=>(t.url.substr(0,4)!=="http"&&t.url.substr(0,1)!=="/"&&0<t.url.length&&!t.regex&&(t.url="/"+t.url),t)),this.create({sourceUrls:this.sourceUrls,targetUrl:this.targetUrl,queryParam:this.queryParam.value,customRules:this.customRules,redirectType:this.redirectType.value,redirectTypeHasTarget:this.redirectTypeHasTarget(),group:this.log404?"404":"manual"}).then(()=>{this.$emit("added-redirect"),this.$bus.$emit("added-redirect"),this.reset()}).catch(t=>{this.handleError(t)})},saveChanges(){this.genericError=!1,this.addingRedirect=!0,this.sourceUrls[0].url.substr(0,4)!=="http"&&this.sourceUrls[0].url.substr(0,1)!=="/"&&0<this.sourceUrls[0].url.length&&!this.sourceUrls[0].regex&&(this.sourceUrls[0].url="/"+this.sourceUrls[0].url),this.update({id:this.sourceUrls[0].id,payload:{sourceUrls:this.sourceUrls,targetUrl:this.targetUrl,queryParam:this.queryParam.value,customRules:this.customRules,redirectType:this.redirectType.value,redirectTypeHasTarget:this.redirectTypeHasTarget()}}).then(()=>{this.reset()}).catch(t=>{console.error(t),this.handleError(t)})},handleError(t){if(t.response.status!==409||!t.response.body.failed||!t.response.body.failed.length){this.genericError=!0,this.addingRedirect=!1;return}const s=[],e=t.response.body.failed,i=this.$t.__("A redirect already exists for this source URL. To make changes, edit the original instead.",this.$td);e.forEach(r=>{const l=this.sourceUrls.findIndex(a=>a.url===r.url||r);l!==-1&&(this.sourceUrls[l].errors.find(a=>a===r.error||a===i)||this.sourceUrls[l].errors.push(r.error||i),s.push(l))});for(let r=this.sourceUrls.length-1;0<=r;r--)s.includes(r)||this.$delete(this.sourceUrls,r);this.addingRedirect=!1},updateTargetUrl(t){this.targetUrl=t,this.targetUrlErrors=this.hasTargetUrlErrors,this.targetUrlWarnings=this.hasTargetUrlWarnings},reset(){if(this.showAdvancedSettings=!1,this.addingRedirect=!1,this.edit)return;const t=this.$constants.REDIRECT_TYPES.find(e=>e.value===this.type)||this.getDefaultRedirectType,s=this.$constants.REDIRECT_QUERY_PARAMS.find(e=>e.value===this.query)||this.getDefaultQueryParam;this.sourceUrls=[JSON.parse(JSON.stringify(this.getDefaultSourceUrl))],this.targetUrl=null,this.targetUrlErrors=[],this.targetUrlWarnings=[],this.redirectType=t||{label:"301 "+this.$t.__("Moved Permanently",this.$td),value:301},this.queryParam=s||{label:this.$t.__("Ignore all parameters",this.$td),value:"ignore"},this.customRules=[]},checkForDuplicates(){const t=[];this.sourceUrls.forEach((s,e)=>{if(!(!s.url||s.errors.length)){if(t.includes(s.url.replace(/\/$/,""))){this.sourceUrls[e].errors.push(this.$t.__("This is a duplicate of a URL you are already adding. You can only add unique source URLs.",this.$td));return}t.push(s.url.replace(/\/$/,""))}}),this.updateTargetUrl(this.targetUrl)},redirectTypeHasTarget(){return this.redirectType&&(typeof this.redirectType.noTarget>"u"||!this.redirectType.noTarget)}},mounted(){this.sourceUrls=this.getDefaultSourceUrls,this.url&&(this.sourceUrls=[{...this.getDefaultSourceUrl,...this.url}]),this.urls&&this.urls.length&&(this.sourceUrls=this.urls.map(e=>({...this.getDefaultSourceUrl,...e}))),this.target&&(this.targetUrl=this.target),this.rules&&(this.customRules=this.rules);const t=this.$constants.REDIRECT_TYPES.find(e=>e.value===this.type)||this.getDefaultRedirectType;t&&(this.redirectType=t);const s=this.$constants.REDIRECT_QUERY_PARAMS.find(e=>e.value===this.query)||this.getDefaultQueryParam;s&&(this.queryParam=s)}},f={};var yt=n(Rt,vt,$t,!1,Ut,null,null,null);function Ut(t){for(let s in f)this[s]=f[s]}const Ft=function(){return yt.exports}();export{jt as C,mt as S,Ft as a};
