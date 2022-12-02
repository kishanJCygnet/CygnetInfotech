import{b as i}from"./WpTable.61e73015.js";import{n as a}from"./vueComponentNormalizer.67c9b86e.js";import"./index.c630c4a6.js";import"./SaveChanges.68e73792.js";import{a as c,c as l}from"./vuex.esm.19624049.js";var u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-wizard-close-and-exit"},[t.$isPro||t.$aioseo.options.advanced.usageTracking?s("a",{attrs:{href:t.$aioseo.urls.aio.dashboard}},[t._v(" "+t._s(t.strings.closeAndExit)+" ")]):s("a",{attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.showModal=!0}}},[t._v(" "+t._s(t.strings.closeAndExit)+" ")]),t.showModal&&!t.$isPro?s("core-modal",{on:{close:function(n){t.showModal=!1}},scopedSlots:t._u([{key:"header",fn:function(){return[t._v(" "+t._s(t.strings.buildABetterAioseo)+" "),s("button",{staticClass:"close",on:{click:function(n){n.stopPropagation(),t.showModal=!1}}},[s("svg-close",{on:{click:function(n){t.showModal=!1}}})],1)]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"aioseo-modal-body"},[s("div",{staticClass:"reset-description",domProps:{innerHTML:t._s(t.strings.getImprovedFeatures)}}),s("div",{staticClass:"actions"},[s("base-button",{attrs:{tag:"a",href:t.$aioseo.urls.aio.dashboard,type:"gray",size:"medium"}},[t._v(" "+t._s(t.strings.noThanks)+" ")]),s("base-button",{attrs:{type:"blue",size:"medium",loading:t.loading},on:{click:t.processOptIn}},[t._v(" "+t._s(t.strings.yesCountMeIn)+" ")])],1)])]},proxy:!0}],null,!1,3497119961)}):t._e()],1)},_=[];const d={mixins:[i]},o={};var p=a(d,u,_,!1,f,null,null,null);function f(t){for(let e in o)this[e]=o[e]}const z=function(){return p.exports}();var v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"aioseo-wizard-steps"},[t._v(" "+t._s(t.getSteps)+" ")])},g=[];const m={computed:{...c("wizard",["currentStage"]),...l("wizard",["getCurrentStageCount","getTotalStageCount"]),getSteps(){return this.$t.sprintf(this.$t.__("Step %1$s of %2$s",this.$td),this.getCurrentStageCount,this.getTotalStageCount)}}},r={};var h=a(m,v,g,!1,y,null,null,null);function y(t){for(let e in r)this[e]=r[e]}const k=function(){return h.exports}();export{z as W,k as a};
