(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"./node_modules/@graphiql/react/dist/brace-fold.es.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"b",(function(){return braceFold$1}));var _codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@graphiql/react/dist/codemirror.es.js"),__defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value:value,configurable:!0});function _mergeNamespaces(n,m){return m.forEach((function(e){e&&"string"!=typeof e&&!Array.isArray(e)&&Object.keys(e).forEach((function(k){if("default"!==k&&!(k in n)){var d=Object.getOwnPropertyDescriptor(e,k);Object.defineProperty(n,k,d.get?d:{enumerable:!0,get:function(){return e[k]}})}}))})),Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}__name(_mergeNamespaces,"_mergeNamespaces");var braceFold$2={exports:{}};!function(CodeMirror){function bracketFolding(pairs){return function(cm,start){var line=start.line,lineText=cm.getLine(line);function findOpening(pair){for(var tokenType,at=start.ch,pass=0;;){var found2=at<=0?-1:lineText.lastIndexOf(pair[0],at-1);if(-1!=found2){if(1==pass&&found2<start.ch)break;if(tokenType=cm.getTokenTypeAt(CodeMirror.Pos(line,found2+1)),!/^(comment|string)/.test(tokenType))return{ch:found2+1,tokenType:tokenType,pair:pair};at=found2-1}else{if(1==pass)break;pass=1,at=lineText.length}}}function findRange(found2){var end,endCh,count=1,lastLine=cm.lastLine(),startCh=found2.ch;outer:for(var i2=line;i2<=lastLine;++i2)for(var text=cm.getLine(i2),pos=i2==line?startCh:0;;){var nextOpen=text.indexOf(found2.pair[0],pos),nextClose=text.indexOf(found2.pair[1],pos);if(nextOpen<0&&(nextOpen=text.length),nextClose<0&&(nextClose=text.length),(pos=Math.min(nextOpen,nextClose))==text.length)break;if(cm.getTokenTypeAt(CodeMirror.Pos(i2,pos+1))==found2.tokenType)if(pos==nextOpen)++count;else if(!--count){end=i2,endCh=pos;break outer}++pos}return null==end||line==end?null:{from:CodeMirror.Pos(line,startCh),to:CodeMirror.Pos(end,endCh)}}__name(findOpening,"findOpening"),__name(findRange,"findRange");for(var found=[],i=0;i<pairs.length;i++){var open=findOpening(pairs[i]);open&&found.push(open)}for(found.sort((function(a,b){return a.ch-b.ch})),i=0;i<found.length;i++){var range=findRange(found[i]);if(range)return range}return null}}__name(bracketFolding,"bracketFolding"),CodeMirror.registerHelper("fold","brace",bracketFolding([["{","}"],["[","]"]])),CodeMirror.registerHelper("fold","brace-paren",bracketFolding([["{","}"],["[","]"],["(",")"]])),CodeMirror.registerHelper("fold","import",(function(cm,start){function hasImport(line){if(line<cm.firstLine()||line>cm.lastLine())return null;var start2=cm.getTokenAt(CodeMirror.Pos(line,1));if(/\S/.test(start2.string)||(start2=cm.getTokenAt(CodeMirror.Pos(line,start2.end+1))),"keyword"!=start2.type||"import"!=start2.string)return null;for(var i=line,e=Math.min(cm.lastLine(),line+10);i<=e;++i){var semi=cm.getLine(i).indexOf(";");if(-1!=semi)return{startCh:start2.end,end:CodeMirror.Pos(i,semi)}}}__name(hasImport,"hasImport");var prev,startLine=start.line,has=hasImport(startLine);if(!has||hasImport(startLine-1)||(prev=hasImport(startLine-2))&&prev.end.line==startLine-1)return null;for(var end=has.end;;){var next=hasImport(end.line+1);if(null==next)break;end=next.end}return{from:cm.clipPos(CodeMirror.Pos(startLine,has.startCh+1)),to:end}})),CodeMirror.registerHelper("fold","include",(function(cm,start){function hasInclude(line){if(line<cm.firstLine()||line>cm.lastLine())return null;var start2=cm.getTokenAt(CodeMirror.Pos(line,1));return/\S/.test(start2.string)||(start2=cm.getTokenAt(CodeMirror.Pos(line,start2.end+1))),"meta"==start2.type&&"#include"==start2.string.slice(0,8)?start2.start+8:void 0}__name(hasInclude,"hasInclude");var startLine=start.line,has=hasInclude(startLine);if(null==has||null!=hasInclude(startLine-1))return null;for(var end=startLine;null!=hasInclude(end+1);)++end;return{from:CodeMirror.Pos(startLine,has+1),to:cm.clipPos(CodeMirror.Pos(end))}}))}(_codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__.a.exports);var braceFold$1=_mergeNamespaces({__proto__:null,default:braceFold$2.exports},[braceFold$2.exports])}}]);