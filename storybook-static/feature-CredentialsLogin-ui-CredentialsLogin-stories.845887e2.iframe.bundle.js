/*! For license information please see feature-CredentialsLogin-ui-CredentialsLogin-stories.845887e2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunky_lab_authentication=self.webpackChunky_lab_authentication||[]).push([[538],{"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>_asyncToGenerator})},"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js").default;function _regeneratorRuntime(){"use strict";module.exports=_regeneratorRuntime=function _regeneratorRuntime(){return e},module.exports.__esModule=!0,module.exports.default=module.exports;var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw new Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}module.exports=_regeneratorRuntime,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/typeof.js":module=>{function _typeof(o){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},module.exports.__esModule=!0,module.exports.default=module.exports,_typeof(o)}module.exports=_typeof,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/regenerator/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var runtime=__webpack_require__("./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();module.exports=runtime;try{regeneratorRuntime=runtime}catch(accidentalStrictMode){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}},"./src/feature/CredentialsLogin/ui/CredentialsLogin.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,C_Users_Desktop_y_lab_authentication_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_CredentialsLogin__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/feature/CredentialsLogin/ui/CredentialsLogin.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_Desktop_y_lab_authentication_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var meta={title:"feature/CredentialsLogin",component:_CredentialsLogin__WEBPACK_IMPORTED_MODULE_2__.O,parameters:{layout:"centered"},render:function render(args){return __jsx("div",{style:{width:272}},__jsx(_CredentialsLogin__WEBPACK_IMPORTED_MODULE_2__.O,args))},tags:["autodocs"]};const __WEBPACK_DEFAULT_EXPORT__=meta;var Default={args:{}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})})},"./src/feature/CredentialsLogin/ui/CredentialsLogin.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>CredentialsLogin});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Input=__webpack_require__("./src/shared/ui/Input/index.ts"),Email=__webpack_require__("./src/shared/assets/svg/Email.svg"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Shared_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/feature/CredentialsLogin/ui/Shared.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Shared_module.Z,options);const ui_Shared_module=Shared_module.Z&&Shared_module.Z.locals?Shared_module.Z.locals:void 0;var LoginContext=(0,react.createContext)(void 0),useLoginContext=function useLoginContext(){return(0,react.useContext)(LoginContext)},ActionsType=function(ActionsType){return ActionsType.SET_EMAIL="setEmail",ActionsType.SET_EMAIL_ERROR_MESSAGE="setEmailErrorMessage",ActionsType.SET_PASSWORD="setPassword",ActionsType.SET_PASSWORD_ERROR_MESSAGE="setPasswordErrorMessage",ActionsType.SET_STATUS="setStatus",ActionsType.SET_ERROR_MESSAGE="setErrorMessage",ActionsType}({}),loginActions_setEmail=function setEmail(payload){return{type:ActionsType.SET_EMAIL,payload}},loginActions_setEmailValidationError=function setEmailValidationError(payload){return{type:ActionsType.SET_EMAIL_ERROR_MESSAGE,payload}},loginActions_setPassword=function setPassword(payload){return{type:ActionsType.SET_PASSWORD,payload}},loginActions_setPasswordValidationError=function setPasswordValidationError(payload){return{type:ActionsType.SET_PASSWORD_ERROR_MESSAGE,payload}},loginActions_setStatus=function setStatus(payload){return{type:ActionsType.SET_STATUS,payload}},loginActions_setErrorMessage=function setErrorMessage(payload){return{type:ActionsType.SET_ERROR_MESSAGE,payload}},useGetIsPending=function useGetIsPending(){var context=useLoginContext();return!!context&&"pending"===context.state.status},__jsx=react.createElement,EmailInput=function EmailInput(props){var _context$state$email,context=useLoginContext(),isPending=useGetIsPending();return __jsx(Input.I,{label:"Почта",placeholder:"Введите почту...",className:ui_Shared_module.margin6,value:null!==(_context$state$email=null==context?void 0:context.state.email)&&void 0!==_context$state$email?_context$state$email:"",onChange:function onChange(e){null==context||context.dispatch(loginActions_setEmail(e.target.value))},disabled:isPending,isError:Boolean(null==context?void 0:context.state.emailValidationError),addonLeft:__jsx(Email.Z,null)})};EmailInput.displayName="EmailInput",EmailInput.__docgenInfo={description:"",methods:[],displayName:"EmailInput"};try{EmailInput.displayName="EmailInput",EmailInput.__docgenInfo={description:"",displayName:"EmailInput",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/feature/CredentialsLogin/ui/EmailInput/EmailInput.tsx#EmailInput"]={docgenInfo:EmailInput.__docgenInfo,name:"EmailInput",path:"src/feature/CredentialsLogin/ui/EmailInput/EmailInput.tsx#EmailInput"})}catch(__react_docgen_typescript_loader_error){}var Password=__webpack_require__("./src/shared/assets/svg/Password.svg"),PasswordInput_jsx=react.createElement,PasswordInput=function PasswordInput(props){var _context$state$passwo,context=useLoginContext(),isPending=useGetIsPending();return PasswordInput_jsx(Input.I,{label:"Пароль",placeholder:"Введите пароль...",className:ui_Shared_module.margin12,type:"password",value:null!==(_context$state$passwo=null==context?void 0:context.state.password)&&void 0!==_context$state$passwo?_context$state$passwo:"",onChange:function onChange(e){null==context||context.dispatch(loginActions_setPassword(e.target.value))},disabled:isPending,isError:Boolean(null==context?void 0:context.state.passwordValidationError),addonLeft:PasswordInput_jsx(Password.Z,null)})};PasswordInput.displayName="PasswordInput",PasswordInput.__docgenInfo={description:"",methods:[],displayName:"PasswordInput"};try{PasswordInput.displayName="PasswordInput",PasswordInput.__docgenInfo={description:"",displayName:"PasswordInput",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/feature/CredentialsLogin/ui/PasswordInput/PasswordInput.tsx#PasswordInput"]={docgenInfo:PasswordInput.__docgenInfo,name:"PasswordInput",path:"src/feature/CredentialsLogin/ui/PasswordInput/PasswordInput.tsx#PasswordInput"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./src/shared/ui/Button/index.ts"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),isEmail=__webpack_require__("./src/shared/lib/isEmail.ts"),mockedFetch=__webpack_require__("./src/shared/lib/mockedFetch.ts"),SubmitButton_jsx=react.createElement,SubmitButton=function SubmitButton(props){var context=useLoginContext(),isPending=useGetIsPending(),text=isPending?"Загрузка":"Войти",validationError=(null==context?void 0:context.state.emailValidationError)||(null==context?void 0:context.state.passwordValidationError)||void 0,login=function useFetchLogin(){var context=useLoginContext();return(0,react.useCallback)((0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(){var email,password,validationError;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:if(context){_context.next=2;break}return _context.abrupt("return");case 2:if(email=context.state.email,password=context.state.password,validationError=!1,(0,isEmail.J)(email)||(context.dispatch(loginActions_setEmailValidationError("Неккоректная почта")),validationError=!0),password||(context.dispatch(loginActions_setPasswordValidationError("Пароль не должен быть пустым")),validationError=!0),!validationError){_context.next=9;break}return _context.abrupt("return");case 9:return context.dispatch(loginActions_setErrorMessage(void 0)),context.dispatch(loginActions_setStatus("pending")),_context.next=13,(0,mockedFetch.m)("",{method:"POST",body:JSON.stringify({email,password})});case 13:_context.sent.ok||context.dispatch(loginActions_setErrorMessage("Неверный логин или пароль")),context.dispatch(loginActions_setStatus("idle"));case 16:case"end":return _context.stop()}}),_callee)}))),[context])}(),disabled=isPending||Boolean(validationError);return SubmitButton_jsx(Button.z,{disabled,onClick:login},text)};SubmitButton.displayName="SubmitButton",SubmitButton.__docgenInfo={description:"",methods:[],displayName:"SubmitButton"};try{SubmitButton.displayName="SubmitButton",SubmitButton.__docgenInfo={description:"",displayName:"SubmitButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/feature/CredentialsLogin/ui/SubmitButton/SubmitButton.tsx#SubmitButton"]={docgenInfo:SubmitButton.__docgenInfo,name:"SubmitButton",path:"src/feature/CredentialsLogin/ui/SubmitButton/SubmitButton.tsx#SubmitButton"})}catch(__react_docgen_typescript_loader_error){}var Message=__webpack_require__("./src/shared/ui/Message/index.ts"),ErrorMessage_jsx=react.createElement,ErrorMessage=function ErrorMessage(props){var context=useLoginContext(),errorMessage=null==context?void 0:context.state.errorMessage,message=(null==context?void 0:context.state.emailValidationError)||(null==context?void 0:context.state.passwordValidationError)||void 0||errorMessage;return message?ErrorMessage_jsx(Message.v,{variant:"danger",className:classnames_default()(ui_Shared_module.margin12,ui_Shared_module.maringAuto)},message):null};ErrorMessage.displayName="ErrorMessage",ErrorMessage.__docgenInfo={description:"",methods:[],displayName:"ErrorMessage"};try{ErrorMessage.displayName="ErrorMessage",ErrorMessage.__docgenInfo={description:"",displayName:"ErrorMessage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/feature/CredentialsLogin/ui/ErrorMessage/ErrorMessage.tsx#ErrorMessage"]={docgenInfo:ErrorMessage.__docgenInfo,name:"ErrorMessage",path:"src/feature/CredentialsLogin/ui/ErrorMessage/ErrorMessage.tsx#ErrorMessage"})}catch(__react_docgen_typescript_loader_error){}var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function reducer(state,action){switch(action.type){case ActionsType.SET_EMAIL:return _objectSpread(_objectSpread({},state),{},{email:action.payload,errorMessage:void 0,emailValidationError:void 0});case ActionsType.SET_EMAIL_ERROR_MESSAGE:return _objectSpread(_objectSpread({},state),{},{emailValidationError:action.payload});case ActionsType.SET_PASSWORD:return _objectSpread(_objectSpread({},state),{},{password:action.payload,errorMessage:void 0,passwordValidationError:void 0});case ActionsType.SET_PASSWORD_ERROR_MESSAGE:return _objectSpread(_objectSpread({},state),{},{passwordValidationError:action.payload});case ActionsType.SET_STATUS:return _objectSpread(_objectSpread({},state),{},{status:action.payload});case ActionsType.SET_ERROR_MESSAGE:return _objectSpread(_objectSpread({},state),{},{errorMessage:action.payload});default:return state}}var ContextProvider_jsx=react.createElement,initialValue={email:"",password:"",status:"idle",errorMessage:void 0,passwordValidationError:void 0,emailValidationError:void 0},ContextProvider=function ContextProvider(_ref){var children=_ref.children,_useReducer=(0,react.useReducer)(reducer,initialValue),state=_useReducer[0],dispatch=_useReducer[1];return ContextProvider_jsx(LoginContext.Provider,{value:{state,dispatch}},children)};ContextProvider.displayName="ContextProvider",ContextProvider.__docgenInfo={description:"",methods:[],displayName:"ContextProvider"};try{ContextProvider.displayName="ContextProvider",ContextProvider.__docgenInfo={description:"",displayName:"ContextProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/feature/CredentialsLogin/model/ContextProvider.tsx#ContextProvider"]={docgenInfo:ContextProvider.__docgenInfo,name:"ContextProvider",path:"src/feature/CredentialsLogin/model/ContextProvider.tsx#ContextProvider"})}catch(__react_docgen_typescript_loader_error){}var CredentialsLogin_jsx=react.createElement,CredentialsLogin=function CredentialsLogin(_ref){var className=_ref.className;return CredentialsLogin_jsx(ContextProvider,null,CredentialsLogin_jsx("form",{className:classnames_default()(className),onSubmit:function onSubmit(e){e.preventDefault(),e.stopPropagation()}},CredentialsLogin_jsx(EmailInput,null),CredentialsLogin_jsx(PasswordInput,null),CredentialsLogin_jsx(ErrorMessage,null),CredentialsLogin_jsx(SubmitButton,null)))};CredentialsLogin.displayName="CredentialsLogin",CredentialsLogin.__docgenInfo={description:"",methods:[],displayName:"CredentialsLogin"};try{CredentialsLogin.displayName="CredentialsLogin",CredentialsLogin.__docgenInfo={description:"",displayName:"CredentialsLogin",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/feature/CredentialsLogin/ui/CredentialsLogin.tsx#CredentialsLogin"]={docgenInfo:CredentialsLogin.__docgenInfo,name:"CredentialsLogin",path:"src/feature/CredentialsLogin/ui/CredentialsLogin.tsx#CredentialsLogin"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/feature/CredentialsLogin/ui/Shared.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".Shared_margin12__zRqxz{margin-bottom:12px}.Shared_margin6__U7jxs{margin-bottom:6px}.Shared_maringAuto__woXyF{margin-left:auto;margin-right:auto}","",{version:3,sources:["webpack://./src/feature/CredentialsLogin/ui/Shared.module.scss"],names:[],mappings:"AAAA,wBACI,kBAAA,CAGJ,uBACI,iBAAA,CAGJ,0BACI,gBAAA,CACA,iBAAA",sourcesContent:[".margin12 {\r\n    margin-bottom: 12px;\r\n}\r\n\r\n.margin6 {\r\n    margin-bottom: 6px;\r\n}\r\n\r\n.maringAuto {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={margin12:"Shared_margin12__zRqxz",margin6:"Shared_margin6__U7jxs",maringAuto:"Shared_maringAuto__woXyF"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);