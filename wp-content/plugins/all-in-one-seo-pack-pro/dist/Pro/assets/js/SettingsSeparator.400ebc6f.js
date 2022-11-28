import{a as i,m as u}from"./index.d229874d.js";import{G as c,a as l}from"./Row.89c6bb85.js";import{n as p}from"./vueComponentNormalizer.58b0a173.js";var h=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("grid-row",{staticClass:"aioseo-separators"},[!t.showMoreSeparators&&t.hiddenSeparator?r("grid-column",{attrs:{xs:"2",sm:"1"}},[r("div",{staticClass:"active separator",domProps:{innerHTML:t._s(t.hiddenSeparator)}})]):t._e(),t._l(t.separators,function(s,e){return r("grid-column",{key:e,attrs:{xs:"2",sm:"1"}},[r("div",{staticClass:"separator",class:{active:t.optionsSeparator===s},domProps:{innerHTML:t._s(s)},on:{click:function(n){return t.setSeparator(s)}}})])}),t.showMoreSeparators?t._l(t.moreSeparators,function(s,e){return r("grid-column",{key:`m_${e}`,attrs:{xs:"2",sm:"1"}},[r("div",{staticClass:"separator",class:{active:t.optionsSeparator===s},domProps:{innerHTML:t._s(s)},on:{click:function(n){return t.setSeparator(s)}}})])}):t._e(),t.showMoreSeparators?t._e():r("grid-column",{attrs:{xs:t.hiddenSeparator?"3":"4"}},[r("div",{staticClass:"show-more"},[r("a",{attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.showMoreSeparators=!0}}},[t._v(" "+t._s(t.strings.showMore)+"\u2026 ")])])]),t.showMoreSeparators?r("grid-column",[r("div",{staticClass:"custom-separator"},[t._v(" "+t._s(t.strings.custom)+" "),r("base-input",{attrs:{spellcheck:!1,size:"medium"},model:{value:t.customSeparator,callback:function(s){t.customSeparator=s},expression:"customSeparator"}})],1)]):t._e(),t.showMoreSeparators?r("grid-column",[r("div",{staticClass:"show-more"},[r("a",{attrs:{href:"#"},on:{click:function(s){s.preventDefault(),t.showMoreSeparators=!1}}},[t._v(" "+t._s(t.strings.showLess)+"\u2026 ")])])]):t._e()],2)},m=[];const _={components:{GridColumn:c,GridRow:l},props:{optionsSeparator:{type:String,required:!0},showMoreSlug:{type:String,required:!0}},data(){return{strings:{custom:this.$t.__("Custom separator:",this.$td),showMore:this.$t.__("Show More",this.$td),showLess:this.$t.__("Show Less",this.$td)},showMoreSeparators:!1,showMoreInitial:!0,customSeparator:null,separators:["&ndash;","&raquo;","&rsaquo;","&#x2023;","&rarr;","&bull;","&#47;","&#124;"],moreSeparators:["&#45;","&mdash;","&laquo;","&larr;","&gt;","&ge;","&#92;","&#43;","&#9658;"]}},watch:{showMoreSeparators(t){if(this.showMoreInitial){this.showMoreInitial=!1;return}this.toggleRadio({slug:this.showMoreSlug,value:t})},customSeparator(t){t!==null&&(this.$emit("change",t),this.separators.concat(this.moreSeparators).includes(t)&&(this.customSeparator=null))}},computed:{...i(["options","settings"]),hiddenSeparator(){return this.optionsSeparator===this.customSeparator||this.moreSeparators.includes(this.optionsSeparator)?this.optionsSeparator:null}},methods:{...u(["toggleRadio"]),setSeparator(t){this.customSeparator=null,this.$emit("change",t)}},mounted(){this.showMoreSeparators=this.settings.toggledRadio[this.showMoreSlug],this.customSeparator=this.optionsSeparator.includes(this.separators.concat(this.moreSeparators))?null:this.optionsSeparator}},a={};var S=p(_,h,m,!1,d,null,null,null);function d(t){for(let o in a)this[o]=a[o]}const w=function(){return S.exports}();export{w as C};
