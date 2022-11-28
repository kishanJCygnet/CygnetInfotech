import{n as o}from"./vueComponentNormalizer.58b0a173.js";var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"analyze-main"},[e("div",{staticClass:"analyze-header",domProps:{innerHTML:n._s(n.header)}}),e("div",{staticClass:"analyze-description",domProps:{innerHTML:n._s(n.description)}}),e("div",{staticClass:"analyze-input"},[e("base-input",{class:{"aioseo-error":n.inputError},attrs:{placeholder:n.placeholder},on:{keyup:function(r){return!r.type.indexOf("key")&&n._k(r.keyCode,"enter",13,r.key,"Enter")?null:n.$emit("startAnalyzing",n.input)}},model:{value:n.input,callback:function(r){n.input=r},expression:"input"}}),e("base-button",{attrs:{type:"green",loading:n.isAnalyzing,disabled:!n.input},on:{click:function(r){return n.$emit("startAnalyzing",n.input)}}},[n._v(" "+n._s(n.strings.analyze)+" ")])],1),n._t("errors"),n.isAnalyzing?e("div",{staticClass:"analyze-progress"},[e("div",{staticClass:"analyze-progress-value",style:{animationDuration:`${n.analyzeTime}s`}})]):n._e()],2)},l=[];const u={props:{header:String,description:String,isAnalyzing:Boolean,analyzeTime:{type:Number,default(){return 8}},placeholder:{type:String,default(){return""}},inputError:{type:Boolean,default(){return!1}}},data(){return{input:null,strings:{analyze:this.$t.__("Analyze",this.$td)}}},watch:{isAnalyzing(n){n||(this.input=null)}}},s={};var c=o(u,i,l,!1,_,null,null,null);function _(n){for(let t in s)this[t]=s[t]}const g=function(){return c.exports}();var p=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"aioseo-analyze-score",class:n.getColorClass},[e("span",[n._v(n._s(n.score)+"/100")])])},y=[];const d={props:{score:{type:Number,required:!0}},computed:{getColorClass(){return 33>=this.score?"red":66>=this.score?"orange":"green"}}},a={};var v=o(d,p,y,!1,f,null,null,null);function f(n){for(let t in a)this[t]=a[t]}const z=function(){return v.exports}();export{g as C,z as a};
