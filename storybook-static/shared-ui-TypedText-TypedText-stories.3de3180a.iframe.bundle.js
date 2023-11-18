/*! For license information please see shared-ui-TypedText-TypedText-stories.3de3180a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunky_lab_authentication=self.webpackChunky_lab_authentication||[]).push([[264],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/shared/ui/TypedText/TypedText.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,C_Users_Desktop_y_lab_authentication_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_Desktop_y_lab_authentication_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"shared/TypedText",component:__webpack_require__("./src/shared/ui/TypedText/TypedText.tsx").C,parameters:{layout:"centered"},tags:["autodocs"]};var Default={args:{texts:["Добро пожаловать!   ","Хорошего дня!   "]}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/shared/ui/TypedText/TypedText.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>TypedText});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),TypedText_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/TypedText/TypedText.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(TypedText_module.Z,options);const TypedText_TypedText_module=TypedText_module.Z&&TypedText_module.Z.locals?TypedText_module.Z.locals:void 0;var __jsx=react.createElement,TypedText=function TypedText(_ref){var texts=_ref.texts,className=_ref.className,id=(0,react.useId)(),cursorId=(0,react.useId)();return(0,react.useEffect)((function(){var element=document.getElementById(id),cursorElement=document.getElementById(cursorId);element&&cursorElement&&function typeText(typedTextElement,cursorElement,index,texts){var currentText="",isDeleting=!1,charIndex=0,text=texts[0];!function type(){isDeleting?(currentText=text.substring(0,charIndex-1),charIndex--):(currentText=text.substring(0,charIndex+1),charIndex++),typedTextElement.innerHTML=currentText,isDeleting&&""===currentText?(isDeleting=!1,++index>=texts.length&&(index=0),text=texts[index]):isDeleting||currentText!==text||(isDeleting=!0);var typingSpeed=isDeleting?50:150,delay=isDeleting?1e3:500;isDeleting&&0===charIndex?setTimeout((function(){type()}),delay):isDeleting||charIndex!==text.length?setTimeout((function(){type()}),typingSpeed):setTimeout((function(){type()}),delay)}()}(element,0,0,texts)}),[id,cursorId]),__jsx("h2",{className:classnames_default()(TypedText_TypedText_module.container,className)},__jsx("div",{id,className:TypedText_TypedText_module.text}),__jsx("div",{id:cursorId,className:TypedText_TypedText_module.cursor}))};TypedText.displayName="TypedText",TypedText.__docgenInfo={description:"",methods:[],displayName:"TypedText"};try{TypedText.displayName="TypedText",TypedText.__docgenInfo={description:"",displayName:"TypedText",props:{texts:{defaultValue:null,description:"",name:"texts",required:!0,type:{name:"string[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/TypedText/TypedText.tsx#TypedText"]={docgenInfo:TypedText.__docgenInfo,name:"TypedText",path:"src/shared/ui/TypedText/TypedText.tsx#TypedText"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/shared/ui/TypedText/TypedText.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".TypedText_container__jhT3j{position:relative;display:block}.TypedText_text__ZDc7M{font-size:30px;font-weight:bold;color:#fff;text-wrap:nowrap}.TypedText_cursor___q0E_{position:absolute;top:50%;right:0;transform:translateY(-50%);height:30px;width:3px;background-color:#fff}","",{version:3,sources:["webpack://./src/shared/ui/TypedText/TypedText.module.scss"],names:[],mappings:"AAAA,4BACI,iBAAA,CACA,aAAA,CAGJ,uBACI,cAAA,CACA,gBAAA,CACA,UAAA,CACA,gBAAA,CAGJ,yBACI,iBAAA,CACA,OAAA,CACA,OAAA,CACA,0BAAA,CACA,WAAA,CACA,SAAA,CACA,qBAAA",sourcesContent:[".container {\r\n    position: relative;\r\n    display: block;\r\n}\r\n  \r\n.text {\r\n    font-size: 30px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    text-wrap: nowrap;\r\n}\r\n  \r\n.cursor {\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 0;\r\n    transform: translateY(-50%);\r\n    height: 30px;\r\n    width: 3px;\r\n    background-color: #fff;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"TypedText_container__jhT3j",text:"TypedText_text__ZDc7M",cursor:"TypedText_cursor___q0E_"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);