(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./node_modules/@graphiql/react/dist/foldgutter.es.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"f",(function(){return foldgutter$1}));var _codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@graphiql/react/dist/codemirror.es.js"),__defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value:value,configurable:!0});function _mergeNamespaces(n,m){return m.forEach((function(e){e&&"string"!=typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(k){if("default"!==k&&!(k in n)){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:!0,get:function(){return e[k]}})}}))})),Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}__name(_mergeNamespaces,"_mergeNamespaces");var foldgutter$2={exports:{}};!function(CodeMirror){function doFold(cm,pos,options,force){if(options&&options.call){var finder=options;options=null}else finder=getOption(cm,options,"rangeFinder");"number"==typeof pos&&(pos=CodeMirror.Pos(pos,0));var minSize=getOption(cm,options,"minFoldSize");function getRange(allowFolded){var range2=finder(cm,pos);if(!range2||range2.to.line-range2.from.line<minSize)return null;if("fold"===force)return range2;for(var marks=cm.findMarksAt(range2.from),i=0;i<marks.length;++i)if(marks[i].__isFold){if(!allowFolded)return null;range2.cleared=!0,marks[i].clear()}return range2}__name(getRange,"getRange");var range=getRange(!0);if(getOption(cm,options,"scanUp"))for(;!range&&pos.line>cm.firstLine();)pos=CodeMirror.Pos(pos.line-1,0),range=getRange(!1);if(range&&!range.cleared&&"unfold"!==force){var myWidget=makeWidget(cm,options,range);CodeMirror.on(myWidget,"mousedown",(function(e){myRange.clear(),CodeMirror.e_preventDefault(e)}));var myRange=cm.markText(range.from,range.to,{replacedWith:myWidget,clearOnEnter:getOption(cm,options,"clearOnEnter"),__isFold:!0});myRange.on("clear",(function(from,to){CodeMirror.signal(cm,"unfold",cm,from,to)})),CodeMirror.signal(cm,"fold",cm,range.from,range.to)}}function makeWidget(cm,options,range){var widget=getOption(cm,options,"widget");if("function"==typeof widget&&(widget=widget(range.from,range.to)),"string"==typeof widget){var text=document.createTextNode(widget);(widget=document.createElement("span")).appendChild(text),widget.className="CodeMirror-foldmarker"}else widget&&(widget=widget.cloneNode(!0));return widget}__name(doFold,"doFold"),__name(makeWidget,"makeWidget"),CodeMirror.newFoldFunction=function(rangeFinder,widget){return function(cm,pos){doFold(cm,pos,{rangeFinder:rangeFinder,widget:widget})}},CodeMirror.defineExtension("foldCode",(function(pos,options,force){doFold(this,pos,options,force)})),CodeMirror.defineExtension("isFolded",(function(pos){for(var marks=this.findMarksAt(pos),i=0;i<marks.length;++i)if(marks[i].__isFold)return!0})),CodeMirror.commands.toggleFold=function(cm){cm.foldCode(cm.getCursor())},CodeMirror.commands.fold=function(cm){cm.foldCode(cm.getCursor(),null,"fold")},CodeMirror.commands.unfold=function(cm){cm.foldCode(cm.getCursor(),{scanUp:!1},"unfold")},CodeMirror.commands.foldAll=function(cm){cm.operation((function(){for(var i=cm.firstLine(),e=cm.lastLine();i<=e;i++)cm.foldCode(CodeMirror.Pos(i,0),{scanUp:!1},"fold")}))},CodeMirror.commands.unfoldAll=function(cm){cm.operation((function(){for(var i=cm.firstLine(),e=cm.lastLine();i<=e;i++)cm.foldCode(CodeMirror.Pos(i,0),{scanUp:!1},"unfold")}))},CodeMirror.registerHelper("fold","combine",(function(){var funcs=Array.prototype.slice.call(arguments,0);return function(cm,start){for(var i=0;i<funcs.length;++i){var found=funcs[i](cm,start);if(found)return found}}})),CodeMirror.registerHelper("fold","auto",(function(cm,start){for(var helpers=cm.getHelpers(start,"fold"),i=0;i<helpers.length;i++){var cur=helpers[i](cm,start);if(cur)return cur}}));var defaultOptions={rangeFinder:CodeMirror.fold.auto,widget:"↔",minFoldSize:0,scanUp:!1,clearOnEnter:!0};function getOption(cm,options,name){if(options&&void 0!==options[name])return options[name];var editorOptions=cm.options.foldOptions;return editorOptions&&void 0!==editorOptions[name]?editorOptions[name]:defaultOptions[name]}CodeMirror.defineOption("foldOptions",null),__name(getOption,"getOption"),CodeMirror.defineExtension("foldOption",(function(options,name){return getOption(this,options,name)}))}(_codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__.a.exports),function(CodeMirror){CodeMirror.defineOption("foldGutter",!1,(function(cm,val,old){old&&old!=CodeMirror.Init&&(cm.clearGutter(cm.state.foldGutter.options.gutter),cm.state.foldGutter=null,cm.off("gutterClick",onGutterClick),cm.off("changes",onChange),cm.off("viewportChange",onViewportChange),cm.off("fold",onFold),cm.off("unfold",onFold),cm.off("swapDoc",onChange)),val&&(cm.state.foldGutter=new State(parseOptions(val)),updateInViewport(cm),cm.on("gutterClick",onGutterClick),cm.on("changes",onChange),cm.on("viewportChange",onViewportChange),cm.on("fold",onFold),cm.on("unfold",onFold),cm.on("swapDoc",onChange))}));var Pos=CodeMirror.Pos;function State(options){this.options=options,this.from=this.to=0}function parseOptions(opts){return!0===opts&&(opts={}),null==opts.gutter&&(opts.gutter="CodeMirror-foldgutter"),null==opts.indicatorOpen&&(opts.indicatorOpen="CodeMirror-foldgutter-open"),null==opts.indicatorFolded&&(opts.indicatorFolded="CodeMirror-foldgutter-folded"),opts}function isFolded(cm,line){for(var marks=cm.findMarks(Pos(line,0),Pos(line+1,0)),i=0;i<marks.length;++i)if(marks[i].__isFold){var fromPos=marks[i].find(-1);if(fromPos&&fromPos.line===line)return marks[i]}}function marker(spec){if("string"==typeof spec){var elt=document.createElement("div");return elt.className=spec+" CodeMirror-guttermarker-subtle",elt}return spec.cloneNode(!0)}function updateFoldInfo(cm,from,to){var opts=cm.state.foldGutter.options,cur=from-1,minSize=cm.foldOption(opts,"minFoldSize"),func=cm.foldOption(opts,"rangeFinder"),clsFolded="string"==typeof opts.indicatorFolded&&classTest(opts.indicatorFolded),clsOpen="string"==typeof opts.indicatorOpen&&classTest(opts.indicatorOpen);cm.eachLine(from,to,(function(line){++cur;var mark=null,old=line.gutterMarkers;if(old&&(old=old[opts.gutter]),isFolded(cm,cur)){if(clsFolded&&old&&clsFolded.test(old.className))return;mark=marker(opts.indicatorFolded)}else{var pos=Pos(cur,0),range=func&&func(cm,pos);if(range&&range.to.line-range.from.line>=minSize){if(clsOpen&&old&&clsOpen.test(old.className))return;mark=marker(opts.indicatorOpen)}}(mark||old)&&cm.setGutterMarker(line,opts.gutter,mark)}))}function classTest(cls){return new RegExp("(^|\\s)"+cls+"(?:$|\\s)\\s*")}function updateInViewport(cm){var vp=cm.getViewport(),state=cm.state.foldGutter;state&&(cm.operation((function(){updateFoldInfo(cm,vp.from,vp.to)})),state.from=vp.from,state.to=vp.to)}function onGutterClick(cm,line,gutter){var state=cm.state.foldGutter;if(state){var opts=state.options;if(gutter==opts.gutter){var folded=isFolded(cm,line);folded?folded.clear():cm.foldCode(Pos(line,0),opts)}}}function onChange(cm){var state=cm.state.foldGutter;if(state){var opts=state.options;state.from=state.to=0,clearTimeout(state.changeUpdate),state.changeUpdate=setTimeout((function(){updateInViewport(cm)}),opts.foldOnChangeTimeSpan||600)}}function onViewportChange(cm){var state=cm.state.foldGutter;if(state){var opts=state.options;clearTimeout(state.changeUpdate),state.changeUpdate=setTimeout((function(){var vp=cm.getViewport();state.from==state.to||vp.from-state.to>20||state.from-vp.to>20?updateInViewport(cm):cm.operation((function(){vp.from<state.from&&(updateFoldInfo(cm,vp.from,state.from),state.from=vp.from),vp.to>state.to&&(updateFoldInfo(cm,state.to,vp.to),state.to=vp.to)}))}),opts.updateViewportTimeSpan||400)}}function onFold(cm,from){var state=cm.state.foldGutter;if(state){var line=from.line;line>=state.from&&line<state.to&&updateFoldInfo(cm,line,line+1)}}__name(State,"State"),__name(parseOptions,"parseOptions"),__name(isFolded,"isFolded"),__name(marker,"marker"),__name(updateFoldInfo,"updateFoldInfo"),__name(classTest,"classTest"),__name(updateInViewport,"updateInViewport"),__name(onGutterClick,"onGutterClick"),__name(onChange,"onChange"),__name(onViewportChange,"onViewportChange"),__name(onFold,"onFold")}(_codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__.a.exports);var foldgutter$1=_mergeNamespaces({__proto__:null,default:foldgutter$2.exports},[foldgutter$2.exports])}}]);