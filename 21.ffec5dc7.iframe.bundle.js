(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./node_modules/@graphiql/react/dist/forEachState.es.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return forEachState}));function forEachState(stack,fn){const reverseStateStack=[];let state=stack;for(;null==state?void 0:state.kind;)reverseStateStack.push(state),state=state.prevState;for(let i=reverseStateStack.length-1;i>=0;i--)fn(reverseStateStack[i])}(0,Object.defineProperty)(forEachState,"name",{value:"forEachState",configurable:!0})},"./node_modules/@graphiql/react/dist/hint.es2.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@graphiql/react/dist/codemirror.es.js"),graphql__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/graphql/type/definition.mjs"),graphql__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/graphql/type/scalars.mjs"),_forEachState_es_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@graphiql/react/dist/forEachState.es.js"),__defProp=(__webpack_require__("./node_modules/@graphiql/react/dist/index.es.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-dom/index.js"),Object.defineProperty),__name=(target,value)=>__defProp(target,"name",{value:value,configurable:!0});function hintList(cursor,token,list){const hints=filterAndSortList(list,normalizeText(token.string));if(!hints)return;const tokenStart=null!==token.type&&/"|\w/.test(token.string[0])?token.start:token.end;return{list:hints,from:{line:cursor.line,ch:tokenStart},to:{line:cursor.line,ch:token.end}}}function filterAndSortList(list,text){if(!text)return filterNonEmpty(list,(entry=>!entry.isDeprecated));return filterNonEmpty(filterNonEmpty(list.map((entry=>({proximity:getProximity(normalizeText(entry.text),text),entry:entry}))),(pair=>pair.proximity<=2)),(pair=>!pair.entry.isDeprecated)).sort(((a,b)=>(a.entry.isDeprecated?1:0)-(b.entry.isDeprecated?1:0)||a.proximity-b.proximity||a.entry.text.length-b.entry.text.length)).map((pair=>pair.entry))}function filterNonEmpty(array,predicate){const filtered=array.filter(predicate);return 0===filtered.length?array:filtered}function normalizeText(text){return text.toLowerCase().replace(/\W/g,"")}function getProximity(suggestion,text){let proximity=lexicalDistance(text,suggestion);return suggestion.length>text.length&&(proximity-=suggestion.length-text.length-1,proximity+=0===suggestion.indexOf(text)?0:.5),proximity}function lexicalDistance(a,b){let i,j;const d=[],aLength=a.length,bLength=b.length;for(i=0;i<=aLength;i++)d[i]=[i];for(j=1;j<=bLength;j++)d[0][j]=j;for(i=1;i<=aLength;i++)for(j=1;j<=bLength;j++){const cost=a[i-1]===b[j-1]?0:1;d[i][j]=Math.min(d[i-1][j]+1,d[i][j-1]+1,d[i-1][j-1]+cost),i>1&&j>1&&a[i-1]===b[j-2]&&a[i-2]===b[j-1]&&(d[i][j]=Math.min(d[i][j],d[i-2][j-2]+cost))}return d[aLength][bLength]}function getVariablesHint(cur,token,options){const state="Invalid"===token.state.kind?token.state.prevState:token.state,kind=state.kind,step=state.step;if("Document"===kind&&0===step)return hintList(cur,token,[{text:"{"}]);const variableToType=options.variableToType;if(!variableToType)return;const typeInfo=getTypeInfo(variableToType,token.state);if("Document"===kind||"Variable"===kind&&0===step){return hintList(cur,token,Object.keys(variableToType).map((name=>({text:`"${name}": `,type:variableToType[name]}))))}if(("ObjectValue"===kind||"ObjectField"===kind&&0===step)&&typeInfo.fields){return hintList(cur,token,Object.keys(typeInfo.fields).map((fieldName=>typeInfo.fields[fieldName])).map((field=>({text:`"${field.name}": `,type:field.type,description:field.description}))))}if("StringValue"===kind||"NumberValue"===kind||"BooleanValue"===kind||"NullValue"===kind||"ListValue"===kind&&1===step||"ObjectField"===kind&&2===step||"Variable"===kind&&2===step){const namedInputType=typeInfo.type?Object(graphql__WEBPACK_IMPORTED_MODULE_1__.o)(typeInfo.type):void 0;if(namedInputType instanceof graphql__WEBPACK_IMPORTED_MODULE_1__.b)return hintList(cur,token,[{text:"{"}]);if(namedInputType instanceof graphql__WEBPACK_IMPORTED_MODULE_1__.a){return hintList(cur,token,namedInputType.getValues().map((value=>({text:`"${value.name}"`,type:namedInputType,description:value.description}))))}if(namedInputType===graphql__WEBPACK_IMPORTED_MODULE_2__.a)return hintList(cur,token,[{text:"true",type:graphql__WEBPACK_IMPORTED_MODULE_2__.a,description:"Not false."},{text:"false",type:graphql__WEBPACK_IMPORTED_MODULE_2__.a,description:"Not true."}])}}function getTypeInfo(variableToType,tokenState){const info={type:null,fields:null};return Object(_forEachState_es_js__WEBPACK_IMPORTED_MODULE_3__.a)(tokenState,(state=>{if("Variable"===state.kind)info.type=variableToType[state.name];else if("ListValue"===state.kind){const nullableType=info.type?Object(graphql__WEBPACK_IMPORTED_MODULE_1__.p)(info.type):void 0;info.type=nullableType instanceof graphql__WEBPACK_IMPORTED_MODULE_1__.d?nullableType.ofType:null}else if("ObjectValue"===state.kind){const objectType=info.type?Object(graphql__WEBPACK_IMPORTED_MODULE_1__.o)(info.type):void 0;info.fields=objectType instanceof graphql__WEBPACK_IMPORTED_MODULE_1__.b?objectType.getFields():null}else if("ObjectField"===state.kind){const objectField=state.name&&info.fields?info.fields[state.name]:null;info.type=null==objectField?void 0:objectField.type}})),info}__name(hintList,"hintList"),__name(filterAndSortList,"filterAndSortList"),__name(filterNonEmpty,"filterNonEmpty"),__name(normalizeText,"normalizeText"),__name(getProximity,"getProximity"),__name(lexicalDistance,"lexicalDistance"),_codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__.C.registerHelper("hint","graphql-variables",((editor,options)=>{const cur=editor.getCursor(),token=editor.getTokenAt(cur),results=getVariablesHint(cur,token,options);return(null==results?void 0:results.list)&&results.list.length>0&&(results.from=_codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__.C.Pos(results.from.line,results.from.ch),results.to=_codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__.C.Pos(results.to.line,results.to.ch),_codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__.C.signal(editor,"hasCompletion",editor,results,token)),results})),__name(getVariablesHint,"getVariablesHint"),__name(getTypeInfo,"getTypeInfo")}}]);