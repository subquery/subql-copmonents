(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"./node_modules/@graphiql/react/dist/mode.es.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@graphiql/react/dist/codemirror.es.js"),_types_es_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@graphiql/react/dist/types.es.js"),__defProp=(__webpack_require__("./node_modules/@graphiql/react/dist/index.es.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-dom/index.js"),Object.defineProperty),__name=(target,value)=>__defProp(target,"name",{value:value,configurable:!0});function indent(state,textAfter){var _a,_b;const levels=state.levels;return((levels&&0!==levels.length?levels[levels.length-1]-((null===(_a=this.electricInput)||void 0===_a?void 0:_a.test(textAfter))?1:0):state.indentLevel)||0)*((null===(_b=this.config)||void 0===_b?void 0:_b.indentUnit)||0)}__name(indent,"indent");const graphqlModeFactory=__name((config=>{const parser=Object(_types_es_js__WEBPACK_IMPORTED_MODULE_1__.i)({eatWhitespace:stream=>stream.eatWhile(_types_es_js__WEBPACK_IMPORTED_MODULE_1__.g),lexRules:_types_es_js__WEBPACK_IMPORTED_MODULE_1__.c,parseRules:_types_es_js__WEBPACK_IMPORTED_MODULE_1__.d,editorConfig:{tabSize:config.tabSize}});return{config:config,startState:parser.startState,token:parser.token,indent:indent,electricInput:/^\s*[})\]]/,fold:"brace",lineComment:"#",closeBrackets:{pairs:'()[]{}""',explode:"()[]{}"}}}),"graphqlModeFactory");_codemirror_es_js__WEBPACK_IMPORTED_MODULE_0__.C.defineMode("graphql",graphqlModeFactory)}}]);