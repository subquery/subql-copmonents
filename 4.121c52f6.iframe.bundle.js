(window.webpackJsonp=window.webpackJsonp||[]).push([[4,9,11],{"./node_modules/@graphiql/react/dist/dialog.es.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"a",(function(){return dialog$2})),__webpack_require__.d(__webpack_exports__,"d",(function(){return dialog$1}));var _codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@graphiql/react/dist/codemirror.es.js"),__defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value:value,configurable:!0});function _mergeNamespaces(n,m){return m.forEach((function(e){e&&"string"!=typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(k){if("default"!==k&&!(k in n)){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:!0,get:function(){return e[k]}})}}))})),Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}__name(_mergeNamespaces,"_mergeNamespaces");var dialog$2={exports:{}};!function(CodeMirror){function dialogDiv(cm,template,bottom){var dialog2,wrap=cm.getWrapperElement();return(dialog2=wrap.appendChild(document.createElement("div"))).className=bottom?"CodeMirror-dialog CodeMirror-dialog-bottom":"CodeMirror-dialog CodeMirror-dialog-top","string"==typeof template?dialog2.innerHTML=template:dialog2.appendChild(template),CodeMirror.addClass(wrap,"dialog-opened"),dialog2}function closeNotification(cm,newVal){cm.state.currentNotificationClose&&cm.state.currentNotificationClose(),cm.state.currentNotificationClose=newVal}__name(dialogDiv,"dialogDiv"),__name(closeNotification,"closeNotification"),CodeMirror.defineExtension("openDialog",(function(template,callback,options){options||(options={}),closeNotification(this,null);var dialog2=dialogDiv(this,template,options.bottom),closed=!1,me=this;function close(newVal){if("string"==typeof newVal)inp.value=newVal;else{if(closed)return;closed=!0,CodeMirror.rmClass(dialog2.parentNode,"dialog-opened"),dialog2.parentNode.removeChild(dialog2),me.focus(),options.onClose&&options.onClose(dialog2)}}__name(close,"close");var button,inp=dialog2.getElementsByTagName("input")[0];return inp?(inp.focus(),options.value&&(inp.value=options.value,!1!==options.selectValueOnOpen&&inp.select()),options.onInput&&CodeMirror.on(inp,"input",(function(e){options.onInput(e,inp.value,close)})),options.onKeyUp&&CodeMirror.on(inp,"keyup",(function(e){options.onKeyUp(e,inp.value,close)})),CodeMirror.on(inp,"keydown",(function(e){options&&options.onKeyDown&&options.onKeyDown(e,inp.value,close)||((27==e.keyCode||!1!==options.closeOnEnter&&13==e.keyCode)&&(inp.blur(),CodeMirror.e_stop(e),close()),13==e.keyCode&&callback(inp.value,e))})),!1!==options.closeOnBlur&&CodeMirror.on(dialog2,"focusout",(function(evt){null!==evt.relatedTarget&&close()}))):(button=dialog2.getElementsByTagName("button")[0])&&(CodeMirror.on(button,"click",(function(){close(),me.focus()})),!1!==options.closeOnBlur&&CodeMirror.on(button,"blur",close),button.focus()),close})),CodeMirror.defineExtension("openConfirm",(function(template,callbacks,options){closeNotification(this,null);var dialog2=dialogDiv(this,template,options&&options.bottom),buttons=dialog2.getElementsByTagName("button"),closed=!1,me=this,blurring=1;function close(){closed||(closed=!0,CodeMirror.rmClass(dialog2.parentNode,"dialog-opened"),dialog2.parentNode.removeChild(dialog2),me.focus())}__name(close,"close"),buttons[0].focus();for(var i=0;i<buttons.length;++i){var b=buttons[i];!function(callback){CodeMirror.on(b,"click",(function(e){CodeMirror.e_preventDefault(e),close(),callback&&callback(me)}))}(callbacks[i]),CodeMirror.on(b,"blur",(function(){--blurring,setTimeout((function(){blurring<=0&&close()}),200)})),CodeMirror.on(b,"focus",(function(){++blurring}))}})),CodeMirror.defineExtension("openNotification",(function(template,options){closeNotification(this,close);var doneTimer,dialog2=dialogDiv(this,template,options&&options.bottom),closed=!1,duration=options&&void 0!==options.duration?options.duration:5e3;function close(){closed||(closed=!0,clearTimeout(doneTimer),CodeMirror.rmClass(dialog2.parentNode,"dialog-opened"),dialog2.parentNode.removeChild(dialog2))}return __name(close,"close"),CodeMirror.on(dialog2,"click",(function(e){CodeMirror.e_preventDefault(e),close()})),duration&&(doneTimer=setTimeout(close,duration)),close}))}(_codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__.a.exports);var dialog$1=_mergeNamespaces({__proto__:null,default:dialog$2.exports},[dialog$2.exports])},"./node_modules/@graphiql/react/dist/search.es.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"s",(function(){return search$1}));var _codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@graphiql/react/dist/codemirror.es.js"),_searchcursor_es_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@graphiql/react/dist/searchcursor.es.js"),_dialog_es_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@graphiql/react/dist/dialog.es.js"),__defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value:value,configurable:!0});function _mergeNamespaces(n,m){return m.forEach((function(e){e&&"string"!=typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(k){if("default"!==k&&!(k in n)){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:!0,get:function(){return e[k]}})}}))})),Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}__name(_mergeNamespaces,"_mergeNamespaces");var search$2={exports:{}};!function(CodeMirror){function searchOverlay(query,caseInsensitive){return"string"==typeof query?query=new RegExp(query.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),caseInsensitive?"gi":"g"):query.global||(query=new RegExp(query.source,query.ignoreCase?"gi":"g")),{token:function(stream){query.lastIndex=stream.pos;var match=query.exec(stream.string);if(match&&match.index==stream.pos)return stream.pos+=match[0].length||1,"searching";match?stream.pos=match.index:stream.skipToEnd()}}}function SearchState(){this.posFrom=this.posTo=this.lastQuery=this.query=null,this.overlay=null}function getSearchState(cm){return cm.state.search||(cm.state.search=new SearchState)}function queryCaseInsensitive(query){return"string"==typeof query&&query==query.toLowerCase()}function getSearchCursor(cm,query,pos){return cm.getSearchCursor(query,pos,{caseFold:queryCaseInsensitive(query),multiline:!0})}function persistentDialog(cm,text,deflt,onEnter,onKeyDown){cm.openDialog(text,onEnter,{value:deflt,selectValueOnOpen:!0,closeOnEnter:!1,onClose:function(){clearSearch(cm)},onKeyDown:onKeyDown,bottom:cm.options.search.bottom})}function dialog2(cm,text,shortText,deflt,f){cm.openDialog?cm.openDialog(text,f,{value:deflt,selectValueOnOpen:!0,bottom:cm.options.search.bottom}):f(prompt(shortText,deflt))}function confirmDialog(cm,text,shortText,fs){cm.openConfirm?cm.openConfirm(text,fs):confirm(shortText)&&fs[0]()}function parseString(string){return string.replace(/\\([nrt\\])/g,(function(match,ch){return"n"==ch?"\n":"r"==ch?"\r":"t"==ch?"\t":"\\"==ch?"\\":match}))}function parseQuery(query){var isRE=query.match(/^\/(.*)\/([a-z]*)$/);if(isRE)try{query=new RegExp(isRE[1],-1==isRE[2].indexOf("i")?"":"i")}catch(e){}else query=parseString(query);return("string"==typeof query?""==query:query.test(""))&&(query=/x^/),query}function startSearch(cm,state,query){state.queryText=query,state.query=parseQuery(query),cm.removeOverlay(state.overlay,queryCaseInsensitive(state.query)),state.overlay=searchOverlay(state.query,queryCaseInsensitive(state.query)),cm.addOverlay(state.overlay),cm.showMatchesOnScrollbar&&(state.annotate&&(state.annotate.clear(),state.annotate=null),state.annotate=cm.showMatchesOnScrollbar(state.query,queryCaseInsensitive(state.query)))}function doSearch(cm,rev,persistent,immediate){var state=getSearchState(cm);if(state.query)return findNext(cm,rev);var q=cm.getSelection()||state.lastQuery;if(q instanceof RegExp&&"x^"==q.source&&(q=null),persistent&&cm.openDialog){var hiding=null,searchNext=__name((function(query,event){CodeMirror.e_stop(event),query&&(query!=state.queryText&&(startSearch(cm,state,query),state.posFrom=state.posTo=cm.getCursor()),hiding&&(hiding.style.opacity=1),findNext(cm,event.shiftKey,(function(_,to){var dialog3;to.line<3&&document.querySelector&&(dialog3=cm.display.wrapper.querySelector(".CodeMirror-dialog"))&&dialog3.getBoundingClientRect().bottom-4>cm.cursorCoords(to,"window").top&&((hiding=dialog3).style.opacity=.4)})))}),"searchNext");persistentDialog(cm,getQueryDialog(cm),q,searchNext,(function(event,query){var keyName=CodeMirror.keyName(event),extra=cm.getOption("extraKeys"),cmd=extra&&extra[keyName]||CodeMirror.keyMap[cm.getOption("keyMap")][keyName];"findNext"==cmd||"findPrev"==cmd||"findPersistentNext"==cmd||"findPersistentPrev"==cmd?(CodeMirror.e_stop(event),startSearch(cm,getSearchState(cm),query),cm.execCommand(cmd)):"find"!=cmd&&"findPersistent"!=cmd||(CodeMirror.e_stop(event),searchNext(query,event))})),immediate&&q&&(startSearch(cm,state,q),findNext(cm,rev))}else dialog2(cm,getQueryDialog(cm),"Search for:",q,(function(query){query&&!state.query&&cm.operation((function(){startSearch(cm,state,query),state.posFrom=state.posTo=cm.getCursor(),findNext(cm,rev)}))}))}function findNext(cm,rev,callback){cm.operation((function(){var state=getSearchState(cm),cursor=getSearchCursor(cm,state.query,rev?state.posFrom:state.posTo);(cursor.find(rev)||(cursor=getSearchCursor(cm,state.query,rev?CodeMirror.Pos(cm.lastLine()):CodeMirror.Pos(cm.firstLine(),0))).find(rev))&&(cm.setSelection(cursor.from(),cursor.to()),cm.scrollIntoView({from:cursor.from(),to:cursor.to()},20),state.posFrom=cursor.from(),state.posTo=cursor.to(),callback&&callback(cursor.from(),cursor.to()))}))}function clearSearch(cm){cm.operation((function(){var state=getSearchState(cm);state.lastQuery=state.query,state.query&&(state.query=state.queryText=null,cm.removeOverlay(state.overlay),state.annotate&&(state.annotate.clear(),state.annotate=null))}))}function el(tag,attrs){var element=tag?document.createElement(tag):document.createDocumentFragment();for(var key in attrs)element[key]=attrs[key];for(var i=2;i<arguments.length;i++){var child=arguments[i];element.appendChild("string"==typeof child?document.createTextNode(child):child)}return element}function getQueryDialog(cm){return el("",null,el("span",{className:"CodeMirror-search-label"},cm.phrase("Search:"))," ",el("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"})," ",el("span",{style:"color: #888",className:"CodeMirror-search-hint"},cm.phrase("(Use /re/ syntax for regexp search)")))}function getReplaceQueryDialog(cm){return el("",null," ",el("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"})," ",el("span",{style:"color: #888",className:"CodeMirror-search-hint"},cm.phrase("(Use /re/ syntax for regexp search)")))}function getReplacementQueryDialog(cm){return el("",null,el("span",{className:"CodeMirror-search-label"},cm.phrase("With:"))," ",el("input",{type:"text",style:"width: 10em",className:"CodeMirror-search-field"}))}function getDoReplaceConfirm(cm){return el("",null,el("span",{className:"CodeMirror-search-label"},cm.phrase("Replace?"))," ",el("button",{},cm.phrase("Yes"))," ",el("button",{},cm.phrase("No"))," ",el("button",{},cm.phrase("All"))," ",el("button",{},cm.phrase("Stop")))}function replaceAll(cm,query,text){cm.operation((function(){for(var cursor=getSearchCursor(cm,query);cursor.findNext();)if("string"!=typeof query){var match=cm.getRange(cursor.from(),cursor.to()).match(query);cursor.replace(text.replace(/\$(\d)/g,(function(_,i){return match[i]})))}else cursor.replace(text)}))}function replace(cm,all){if(!cm.getOption("readOnly")){var query=cm.getSelection()||getSearchState(cm).lastQuery,dialogText=all?cm.phrase("Replace all:"):cm.phrase("Replace:"),fragment=el("",null,el("span",{className:"CodeMirror-search-label"},dialogText),getReplaceQueryDialog(cm));dialog2(cm,fragment,dialogText,query,(function(query2){query2&&(query2=parseQuery(query2),dialog2(cm,getReplacementQueryDialog(cm),cm.phrase("Replace with:"),"",(function(text){if(text=parseString(text),all)replaceAll(cm,query2,text);else{clearSearch(cm);var cursor=getSearchCursor(cm,query2,cm.getCursor("from")),advance=__name((function(){var match,start=cursor.from();!(match=cursor.findNext())&&(cursor=getSearchCursor(cm,query2),!(match=cursor.findNext())||start&&cursor.from().line==start.line&&cursor.from().ch==start.ch)||(cm.setSelection(cursor.from(),cursor.to()),cm.scrollIntoView({from:cursor.from(),to:cursor.to()}),confirmDialog(cm,getDoReplaceConfirm(cm),cm.phrase("Replace?"),[function(){doReplace(match)},advance,function(){replaceAll(cm,query2,text)}]))}),"advance"),doReplace=__name((function(match){cursor.replace("string"==typeof query2?text:text.replace(/\$(\d)/g,(function(_,i){return match[i]}))),advance()}),"doReplace");advance()}})))}))}}CodeMirror.defineOption("search",{bottom:!1}),__name(searchOverlay,"searchOverlay"),__name(SearchState,"SearchState"),__name(getSearchState,"getSearchState"),__name(queryCaseInsensitive,"queryCaseInsensitive"),__name(getSearchCursor,"getSearchCursor"),__name(persistentDialog,"persistentDialog"),__name(dialog2,"dialog"),__name(confirmDialog,"confirmDialog"),__name(parseString,"parseString"),__name(parseQuery,"parseQuery"),__name(startSearch,"startSearch"),__name(doSearch,"doSearch"),__name(findNext,"findNext"),__name(clearSearch,"clearSearch"),__name(el,"el"),__name(getQueryDialog,"getQueryDialog"),__name(getReplaceQueryDialog,"getReplaceQueryDialog"),__name(getReplacementQueryDialog,"getReplacementQueryDialog"),__name(getDoReplaceConfirm,"getDoReplaceConfirm"),__name(replaceAll,"replaceAll"),__name(replace,"replace"),CodeMirror.commands.find=function(cm){clearSearch(cm),doSearch(cm)},CodeMirror.commands.findPersistent=function(cm){clearSearch(cm),doSearch(cm,!1,!0)},CodeMirror.commands.findPersistentNext=function(cm){doSearch(cm,!1,!0,!0)},CodeMirror.commands.findPersistentPrev=function(cm){doSearch(cm,!0,!0,!0)},CodeMirror.commands.findNext=doSearch,CodeMirror.commands.findPrev=function(cm){doSearch(cm,!0)},CodeMirror.commands.clearSearch=clearSearch,CodeMirror.commands.replace=replace,CodeMirror.commands.replaceAll=function(cm){replace(cm,!0)}}(_codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__.a.exports,_searchcursor_es_js__WEBPACK_IMPORTED_MODULE_1__.a.exports,_dialog_es_js__WEBPACK_IMPORTED_MODULE_2__.a.exports);var search$1=_mergeNamespaces({__proto__:null,default:search$2.exports},[search$2.exports])},"./node_modules/@graphiql/react/dist/searchcursor.es.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"a",(function(){return searchcursor$2})),__webpack_require__.d(__webpack_exports__,"s",(function(){return searchcursor$1}));var _codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@graphiql/react/dist/codemirror.es.js"),__defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value:value,configurable:!0});function _mergeNamespaces(n,m){return m.forEach((function(e){e&&"string"!=typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(k){if("default"!==k&&!(k in n)){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:!0,get:function(){return e[k]}})}}))})),Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}__name(_mergeNamespaces,"_mergeNamespaces");var searchcursor$2={exports:{}};!function(CodeMirror){var doFold,noFold,Pos=CodeMirror.Pos;function regexpFlags(regexp){var flags=regexp.flags;return null!=flags?flags:(regexp.ignoreCase?"i":"")+(regexp.global?"g":"")+(regexp.multiline?"m":"")}function ensureFlags(regexp,flags){for(var current=regexpFlags(regexp),target=current,i=0;i<flags.length;i++)-1==target.indexOf(flags.charAt(i))&&(target+=flags.charAt(i));return current==target?regexp:new RegExp(regexp.source,target)}function maybeMultiline(regexp){return/\\s|\\n|\n|\\W|\\D|\[\^/.test(regexp.source)}function searchRegexpForward(doc,regexp,start){regexp=ensureFlags(regexp,"g");for(var line=start.line,ch=start.ch,last=doc.lastLine();line<=last;line++,ch=0){regexp.lastIndex=ch;var string=doc.getLine(line),match=regexp.exec(string);if(match)return{from:Pos(line,match.index),to:Pos(line,match.index+match[0].length),match:match}}}function searchRegexpForwardMultiline(doc,regexp,start){if(!maybeMultiline(regexp))return searchRegexpForward(doc,regexp,start);regexp=ensureFlags(regexp,"gm");for(var string,chunk=1,line=start.line,last=doc.lastLine();line<=last;){for(var i=0;i<chunk&&!(line>last);i++){var curLine=doc.getLine(line++);string=null==string?curLine:string+"\n"+curLine}chunk*=2,regexp.lastIndex=start.ch;var match=regexp.exec(string);if(match){var before=string.slice(0,match.index).split("\n"),inside=match[0].split("\n"),startLine=start.line+before.length-1,startCh=before[before.length-1].length;return{from:Pos(startLine,startCh),to:Pos(startLine+inside.length-1,1==inside.length?startCh+inside[0].length:inside[inside.length-1].length),match:match}}}}function lastMatchIn(string,regexp,endMargin){for(var match,from=0;from<=string.length;){regexp.lastIndex=from;var newMatch=regexp.exec(string);if(!newMatch)break;var end=newMatch.index+newMatch[0].length;if(end>string.length-endMargin)break;(!match||end>match.index+match[0].length)&&(match=newMatch),from=newMatch.index+1}return match}function searchRegexpBackward(doc,regexp,start){regexp=ensureFlags(regexp,"g");for(var line=start.line,ch=start.ch,first=doc.firstLine();line>=first;line--,ch=-1){var string=doc.getLine(line),match=lastMatchIn(string,regexp,ch<0?0:string.length-ch);if(match)return{from:Pos(line,match.index),to:Pos(line,match.index+match[0].length),match:match}}}function searchRegexpBackwardMultiline(doc,regexp,start){if(!maybeMultiline(regexp))return searchRegexpBackward(doc,regexp,start);regexp=ensureFlags(regexp,"gm");for(var string,chunkSize=1,endMargin=doc.getLine(start.line).length-start.ch,line=start.line,first=doc.firstLine();line>=first;){for(var i=0;i<chunkSize&&line>=first;i++){var curLine=doc.getLine(line--);string=null==string?curLine:curLine+"\n"+string}chunkSize*=2;var match=lastMatchIn(string,regexp,endMargin);if(match){var before=string.slice(0,match.index).split("\n"),inside=match[0].split("\n"),startLine=line+before.length,startCh=before[before.length-1].length;return{from:Pos(startLine,startCh),to:Pos(startLine+inside.length-1,1==inside.length?startCh+inside[0].length:inside[inside.length-1].length),match:match}}}}function adjustPos(orig,folded,pos,foldFunc){if(orig.length==folded.length)return pos;for(var min=0,max=pos+Math.max(0,orig.length-folded.length);;){if(min==max)return min;var mid=min+max>>1,len=foldFunc(orig.slice(0,mid)).length;if(len==pos)return mid;len>pos?max=mid:min=mid+1}}function searchStringForward(doc,query,start,caseFold){if(!query.length)return null;var fold=caseFold?doFold:noFold,lines=fold(query).split(/\r|\n\r?/);search:for(var line=start.line,ch=start.ch,last=doc.lastLine()+1-lines.length;line<=last;line++,ch=0){var orig=doc.getLine(line).slice(ch),string=fold(orig);if(1==lines.length){var found=string.indexOf(lines[0]);if(-1==found)continue search;return start=adjustPos(orig,string,found,fold)+ch,{from:Pos(line,adjustPos(orig,string,found,fold)+ch),to:Pos(line,adjustPos(orig,string,found+lines[0].length,fold)+ch)}}var cutFrom=string.length-lines[0].length;if(string.slice(cutFrom)==lines[0]){for(var i=1;i<lines.length-1;i++)if(fold(doc.getLine(line+i))!=lines[i])continue search;var end=doc.getLine(line+lines.length-1),endString=fold(end),lastLine=lines[lines.length-1];if(endString.slice(0,lastLine.length)==lastLine)return{from:Pos(line,adjustPos(orig,string,cutFrom,fold)+ch),to:Pos(line+lines.length-1,adjustPos(end,endString,lastLine.length,fold))}}}}function searchStringBackward(doc,query,start,caseFold){if(!query.length)return null;var fold=caseFold?doFold:noFold,lines=fold(query).split(/\r|\n\r?/);search:for(var line=start.line,ch=start.ch,first=doc.firstLine()-1+lines.length;line>=first;line--,ch=-1){var orig=doc.getLine(line);ch>-1&&(orig=orig.slice(0,ch));var string=fold(orig);if(1==lines.length){var found=string.lastIndexOf(lines[0]);if(-1==found)continue search;return{from:Pos(line,adjustPos(orig,string,found,fold)),to:Pos(line,adjustPos(orig,string,found+lines[0].length,fold))}}var lastLine=lines[lines.length-1];if(string.slice(0,lastLine.length)==lastLine){var i=1;for(start=line-lines.length+1;i<lines.length-1;i++)if(fold(doc.getLine(start+i))!=lines[i])continue search;var top=doc.getLine(line+1-lines.length),topString=fold(top);if(topString.slice(topString.length-lines[0].length)==lines[0])return{from:Pos(line+1-lines.length,adjustPos(top,topString,top.length-lines[0].length,fold)),to:Pos(line,adjustPos(orig,string,lastLine.length,fold))}}}}function SearchCursor(doc,query,pos,options){var caseFold;this.atOccurrence=!1,this.afterEmptyMatch=!1,this.doc=doc,pos=pos?doc.clipPos(pos):Pos(0,0),this.pos={from:pos,to:pos},"object"==typeof options?caseFold=options.caseFold:(caseFold=options,options=null),"string"==typeof query?(null==caseFold&&(caseFold=!1),this.matches=function(reverse,pos2){return(reverse?searchStringBackward:searchStringForward)(doc,query,pos2,caseFold)}):(query=ensureFlags(query,"gm"),options&&!1===options.multiline?this.matches=function(reverse,pos2){return(reverse?searchRegexpBackward:searchRegexpForward)(doc,query,pos2)}:this.matches=function(reverse,pos2){return(reverse?searchRegexpBackwardMultiline:searchRegexpForwardMultiline)(doc,query,pos2)})}__name(regexpFlags,"regexpFlags"),__name(ensureFlags,"ensureFlags"),__name(maybeMultiline,"maybeMultiline"),__name(searchRegexpForward,"searchRegexpForward"),__name(searchRegexpForwardMultiline,"searchRegexpForwardMultiline"),__name(lastMatchIn,"lastMatchIn"),__name(searchRegexpBackward,"searchRegexpBackward"),__name(searchRegexpBackwardMultiline,"searchRegexpBackwardMultiline"),String.prototype.normalize?(doFold=__name((function(str){return str.normalize("NFD").toLowerCase()}),"doFold"),noFold=__name((function(str){return str.normalize("NFD")}),"noFold")):(doFold=__name((function(str){return str.toLowerCase()}),"doFold"),noFold=__name((function(str){return str}),"noFold")),__name(adjustPos,"adjustPos"),__name(searchStringForward,"searchStringForward"),__name(searchStringBackward,"searchStringBackward"),__name(SearchCursor,"SearchCursor"),SearchCursor.prototype={findNext:function(){return this.find(!1)},findPrevious:function(){return this.find(!0)},find:function(reverse){var head=this.doc.clipPos(reverse?this.pos.from:this.pos.to);if(this.afterEmptyMatch&&this.atOccurrence&&(head=Pos(head.line,head.ch),reverse?(head.ch--,head.ch<0&&(head.line--,head.ch=(this.doc.getLine(head.line)||"").length)):(head.ch++,head.ch>(this.doc.getLine(head.line)||"").length&&(head.ch=0,head.line++)),0!=CodeMirror.cmpPos(head,this.doc.clipPos(head))))return this.atOccurrence=!1;var result=this.matches(reverse,head);if(this.afterEmptyMatch=result&&0==CodeMirror.cmpPos(result.from,result.to),result)return this.pos=result,this.atOccurrence=!0,this.pos.match||!0;var end=Pos(reverse?this.doc.firstLine():this.doc.lastLine()+1,0);return this.pos={from:end,to:end},this.atOccurrence=!1},from:function(){if(this.atOccurrence)return this.pos.from},to:function(){if(this.atOccurrence)return this.pos.to},replace:function(newText,origin){if(this.atOccurrence){var lines=CodeMirror.splitLines(newText);this.doc.replaceRange(lines,this.pos.from,this.pos.to,origin),this.pos.to=Pos(this.pos.from.line+lines.length-1,lines[lines.length-1].length+(1==lines.length?this.pos.from.ch:0))}}},CodeMirror.defineExtension("getSearchCursor",(function(query,pos,caseFold){return new SearchCursor(this.doc,query,pos,caseFold)})),CodeMirror.defineDocExtension("getSearchCursor",(function(query,pos,caseFold){return new SearchCursor(this,query,pos,caseFold)})),CodeMirror.defineExtension("selectMatches",(function(query,caseFold){for(var ranges=[],cur=this.getSearchCursor(query,this.getCursor("from"),caseFold);cur.findNext()&&!(CodeMirror.cmpPos(cur.to(),this.getCursor("to"))>0);)ranges.push({anchor:cur.from(),head:cur.to()});ranges.length&&this.setSelections(ranges,0)}))}(_codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__.a.exports);var searchcursor$1=_mergeNamespaces({__proto__:null,default:searchcursor$2.exports},[searchcursor$2.exports])}}]);