(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9a94d84a"],{"2a7a":function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"g2-grid-view"},[i("div",{staticClass:"columns is-multiline"},t._l(t.folders,(function(e,a){return i("div",{key:"folder_"+a,staticClass:"column is-one-quarter",on:{click:function(i){return t.action(e)}}},[i("div",{staticClass:"card g2-grid-view-card g2-grid-view-folder"},[i("div",{staticClass:"media"},[i("div",{staticClass:"content",attrs:{title:e.name}},[i("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":t.getIcon(e.mimeType)}})]),t._v(" "+t._s(e.name)+" ")])])])])})),0),i("div",{staticClass:"columns is-multiline"},t._l(t.files,(function(e,a){return i("div",{key:"file_"+a,staticClass:"column is-one-quarter",on:{click:function(i){return t.action(e,"view")}}},[i("div",{staticClass:"card g2-grid-view-card"},[i("div",{class:"card-image"+(-1!=e.mimeType.indexOf("video")?" g2-grid-view-play":"")},[i("i"),i("figure",{staticClass:"image is-square"},[e.thumbnailLink?i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.thum(e.thumbnailLink),expression:"thum(file.thumbnailLink)"}],attrs:{alt:e.name}}):i("svg",{staticClass:"file-icon iconfont",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":t.getIcon(e.mimeType)}})])])]),i("div",{staticClass:"media g2-grid-view-file"},[i("div",{staticClass:"content",attrs:{title:e.name}},[i("svg",{staticClass:"iconfont",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":t.getIcon(e.mimeType)}})]),t._v(" "+t._s(e.name)+" ")])])])])})),0)])},s=[],n={name:"GridView",props:{data:{type:Array,default:()=>[]},getIcon:{type:Function},action:{type:Function},thum:{type:Function}},data:function(){return{}},computed:{folders(){return this.data.filter(t=>t.isFolder)},files(){return this.data.filter(t=>!t.isFolder)}},methods:{}},r=n,c=(e("37c8"),e("2877")),l=Object(c["a"])(r,a,s,!1,null,"1871190e",null);i["default"]=l.exports},"37c8":function(t,i,e){"use strict";e("ab47")},ab47:function(t,i,e){}}]);