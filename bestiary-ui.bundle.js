(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[0],{107:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));var r=n(2),i=n(1);const s=(t,e,n)=>{if(!i.c.state.exists(e))return;let r=t[e];t[e]=r?r+n:n},o=t=>{let e=t.level,n={gold:100*Math.ceil(Math.pow(e,1.7))};return t.kind&&a(t.kind,n,e),t.biome&&a(t.biome,n,e),t.regen&&s(n,"bloodgem",5*Object(r.r)(e)),n},a=(t,e={},n=1)=>{if(t){t=Object(r.q)(t);let i=Object(r.s)(t,n);s(e,i,n-Object(r.u)(n)+1)}else if(Array.isArray(t))for(let r=t.length-1;r>=0;r--)t[r]&&a(t[r],e,n);return e},l=t=>{var e={};for(let r=t.length-1;r>=0;r--){var n=t[r];e.gold=(e.gold||0)+300*n.level,c(n.school,n.level,e)}return e},c=(t,e=1,n={})=>{if(Array.isArray(t))for(let r=t.length-1;r>=0;r--)c(t[r],e,n);else null!=t&&(s(n,t+"gem",e*e),e<=5?s(n,"codices",e):s(n,"tomes",e=5));return n}},108:function(t,e,n){var r=n(140);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(15)(r,i);r.locals&&(t.exports=r.locals)},139:function(t,e,n){"use strict";var r=n(108);n.n(r).a},140:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"\ntr th[data-v-28e20fbc] {\r\n\tcursor: pointer;\r\n\ttext-decoration: underline;\r\n\tuser-select: none;\r\n\t-moz-user-select: none;\r\n\t-webkit-user-select: none;\n}\ndiv.bestiary[data-v-28e20fbc] {\r\ndisplay:flex;\r\nflex-direction: column;\r\nmargin-left:12px;\r\nheight:100%;\n}\n.char-list[data-v-28e20fbc] {\r\n\twidth:100%;\r\n\toverflow-y:auto;\r\n\tmargin-bottom:14px;\n}\ntable[data-v-28e20fbc] {\r\n\tborder-spacing: 4px 0px;\r\n\tborder-collapse: collapse;\r\n\trow-gap: 4px;\r\n\tcolumn-gap: 10px;\n}\ntr:first-child th[data-v-28e20fbc] {\r\n\tborder-bottom: 1pt solid black;\r\n\tmargin: 4px 4px;\n}\ntr > th[data-v-28e20fbc]:first-of-type {\r\n\ttext-align: left;\n}\nth[data-v-28e20fbc] {\r\n\tpadding: 4px 10px;\n}\ntd.num-align[data-v-28e20fbc] {\r\n\tpadding: 8px;\n}\r\n\r\n",""])},173:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bestiary"},[n("filterbox",{attrs:{items:t.allItems,"min-items":"14"},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}}),t._v(" "),n("div",{staticClass:"char-list"},[n("table",{staticClass:"bestiary"},[n("tr",[n("th",{on:{click:function(e){return t.setSort("name")}}},[t._v("Creature")]),t._v(" "),n("th",{on:{click:function(e){return t.setSort("level")}}},[t._v("Level")]),t._v(" "),n("th",{on:{click:function(e){return t.setSort("value")}}},[t._v("Slain")]),t._v(" "),n("th",{staticClass:"num-align",on:{click:function(e){return t.setSort("hp")}}},[t._v("Hp")])]),t._v(" "),t._l(t.sorted,(function(e){return n("tr",{key:e.id,on:{"!mouseenter":function(n){return n.stopPropagation(),t.emit("itemover",n,e)}}},[n("th",{staticClass:"sm-name"},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"num-align"},[t._v(t._s(Math.floor(e.level)))]),t._v(" "),n("td",{staticClass:"num-align"},[t._v(t._s(Math.floor(e.value)))]),t._v(" "),n("td",{staticClass:"num-align"},[t._v(t._s(t.showHp(e)?t.toNum(e.hp):"???"))]),t._v(" "),n("td",[n("button",{attrs:{disabled:e.unique||!t.buyable(e)||0==t.minions.freeSpace()||e.value<10},on:{click:function(n){return t.emit(t.TRY_BUY,e)}}},[t._v("Buy")])])])}))],2)])],1)};r._withStripped=!0;var i=n(1),s=n(12),o=n(9),a=n(97),l=n(0),c=n(107),u={mixins:[s.a],data:()=>({filtered:null,sortBy:"level",sortOrder:1}),components:{filterbox:a.a},created(){this.TRY_BUY=l.G},methods:{showHp(t){return this.totalLore>=4*t.level},toNum:t=>("object"==typeof t?t instanceof o.b?t.max:t.value:t).toFixed(0),setSort(t){this.sortBy===t?this.sortOrder=-this.sortOrder:this.sortBy=t}},computed:{minions:()=>i.c.state.minions,totalLore(){return this.animals.value+this.lore.value+this.demonology.value},animals:()=>i.c.state.getData("animals"),lore:()=>i.c.state.getData("lore"),demonology:()=>i.c.state.getData("demonology"),allItems(){let t=i.c.state.monsters;var e=[];for(let r=t.length-1;r>=0;r--){var n=t[r];n.value<=0||(n.buy||(n.buy=Object(c.a)(n)),e.push(n))}return e},sorted(){let t,e,n=this.sortBy,r=this.sortOrder;return(this.filtered||this.allItems).sort((i,s)=>(t=i[n],e=s[n],t>e?r:e>t?-r:0))}}},d=(n(139),n(5)),p=Object(d.a)(u,r,[],!1,null,"28e20fbc",null);p.options.__file="src/ui/sections/bestiary.vue";e.default=p.exports},94:function(t,e,n){var r=n(96);"string"==typeof r&&(r=[[t.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(15)(r,i);r.locals&&(t.exports=r.locals)},95:function(t,e,n){"use strict";var r=n(94);n.n(r).a},96:function(t,e,n){(t.exports=n(14)(!1)).push([t.i,"\nlabel[data-v-6d0e0bec] {\r\n\tmargin-right:8px;\n}\ndiv.filter-box[data-v-6d0e0bec] {\r\n\tfont-size: 105%;\r\n\tvertical-align: middle;\r\n\tline-height: 1.2em;\r\n\tmargin: 8px 4px 8px 12px;\n}\n.filter-box input[type=text][data-v-6d0e0bec] {\r\n\tpadding: 4px;\r\n\tfont-size: 105%;\n}\r\n",""])},97:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return!this.minItems||t.text||this.items.length>=this.minItems?n("div",{staticClass:"filter-box"},[n("label",{attrs:{for:t.elmId("filter")}},[t._v("Find")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.findText,expression:"findText"}],attrs:{id:t.elmId("filter"),type:"text"},domProps:{value:t.findText},on:{input:function(e){e.target.composing||(t.findText=e.target.value)}}})]):t._e()};r._withStripped=!0;var i={props:["value","items","prop","minItems"],data(){return{text:"",pprop:this.prop||"name"}},watch:{items(t,e){this.findText=this.findText}},created(){this.findText=this.text},methods:{clear(){this.text=""}},computed:{findText:{get(){return this.text},set(t){this.text=t;let e=this.pprop;t||this.$emit("input",this.items);var n=t.toLowerCase();"function"==typeof e?this.$emit("input",this.items.filter(t=>e(t,n))):this.$emit("input",this.items.filter(t=>"object"==typeof t&&"string"==typeof t[e]&&t[e].toLowerCase().includes(n)))}}}},s=(n(95),n(5)),o=Object(s.a)(i,r,[],!1,null,"6d0e0bec",null);o.options.__file="src/ui/components/filterbox.vue";e.a=o.exports}}]);