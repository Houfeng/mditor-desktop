!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react")):"function"==typeof define&&define.amd?define("mota",["react"],e):"object"==typeof exports?exports.mota=e(require("react")):t.mota=e(t.React)}("undefined"!=typeof self?self:this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=39)}([function(t,e){var n=Object;t.exports={create:n.create,getProto:n.getPrototypeOf,isEnum:{}.propertyIsEnumerable,getDesc:n.getOwnPropertyDescriptor,setDesc:n.defineProperty,setDescs:n.defineProperties,getKeys:n.keys,getNames:n.getOwnPropertyNames,getSymbols:n.getOwnPropertySymbols,each:[].forEach}},function(t,e,n){function r(t,e){t._mountHandlers_||m(t,"_mountHandlers_",[]),t._mountHandlers_.push(e)}function o(t,e){t._unmountHandlers_||m(t,"_unmountHandlers_",[]),t._unmountHandlers_.push(e)}function i(t,e){t._receivePropsHandlers_||m(t,"_receivePropsHandlers_",[]),t._receivePropsHandlers_.push(e)}function u(t,e){t._elementHandlers_||m(t,"_elementHandlers_",[]),t._elementHandlers_.push(e)}function s(t){var e=[];return _.Children.forEach(t,function(t){e.push(t)}),e}function a(t,e,n,r){if(!t||"object"!==(void 0===t?"undefined":(0,v.default)(t))||!r||r.length<1)return t;var o=t.props||{};n=t.key||n;var i=s(o.children),u=i.length>0?i.map(function(t,n){return a(t,e,n,r)}):void 0,c=u&&1==u.length?u[0]:u;return r&&r.forEach(function(r){t=r(t,e,n,c)}),t}function c(t){return t&&t instanceof g}function f(t){return c(t.prototype)}function l(t,e){t._deep_||m(t,"_deep_",{}),e&&(t._deep_[e]=!0)}function p(t,e){t._watch_||m(t,"_watch_",{}),e&&(t._watch_[e]=!0)}function h(t,e){t._autorun_||m(t,"_autorun_",{}),e&&(t._autorun_[e]=!0)}var d=n(13),v=function(t){return t&&t.__esModule?t:{default:t}}(d),_=n(3),g=_.Component,y=n(2),m=y.final;t.exports={convertElement:a,isComponentClass:f,isComponentInstance:c,markAsDeep:l,markAsAutorun:h,markAsWatch:p,registerElementHandler:u,registerMountHandler:r,registerUnmountHandler:o,registerReceivePropsHandler:i}},function(t,e,n){"use strict";function r(){}function o(t){return Object.prototype.toString.call(t)}function i(t){return/^\[object (.+)\]$/i.exec(o(t))[1]}function u(t){return void 0===t||null===t}function s(t){return u(t)?t:t.trim?t.trim():t.replace(/(^[\\s]*)|([\\s]*$)/g,"")}function a(t,e,n){return u(t)?t:t.replace(new RegExp(e,"g"),n)}function c(t,e){return!u(t)&&!u(e)&&0===t.indexOf(e)}function f(t,e){return!u(t)&&!u(e)&&t.indexOf(e)>-1}function l(t,e){return!u(t)&&!u(e)&&t.indexOf(e)===t.length-e.length}function p(t,e){return!u(t)&&!u(e)&&(e in t||t.hasOwnProperty(e))}function h(t){return!u(t)&&"function"==typeof t}function d(t){return!u(t)&&"AsyncFunction"===i(t)}function v(t){return!u(t)&&"GeneratorFunction"===i(t)}function _(t){return!u(t)&&"String"===i(t)}function g(t){return!u(t)&&"Number"===i(t)}function y(t){return!u(t)&&"Boolean"===i(t)}function m(t){return!u(t)&&(window.Element?t instanceof Element:t.tagName&&t.nodeType&&t.nodeName&&t.attributes&&t.ownerDocument)}function b(t){return!u(t)&&t instanceof Text}function x(t){if(u(t))return!1;var e=i(t);return"Object"===e||"Array"===e}function w(t){if(u(t))return!1;var e="Array"===i(t),n=t instanceof Array,r=!_(t)&&g(t.length)&&h(t.splice),o=!_(t)&&g(t.length)&&t[0];return e||n||r||o}function O(t){return!u(t)&&t instanceof Date}function E(t){return t instanceof RegExp}function j(t){return u(t)?[]:Array.prototype.slice.call(t)}function P(t){return g(t)?new Date(t):_(t)?new Date(a(a(t,"-","/"),"T"," ")):O(t)?t:null}function S(t,e,n){if(!u(t)&&!u(e))if(w(t))for(var r=t.length,o=0;o<r;o++){var i=e.call(n||t[o],o,t[o]);if(!u(i))return i}else for(var s in t){var i=e.call(n||t[s],s,t[s]);if(!u(i))return i}}function M(t,e,n){if(u(e)||u(t))return t;t=P(t),n=n||{};var r={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"w+":t.getDay(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var o in r)if(new RegExp("("+o+")").test(e)){var i=r[o];i=n[i]||i,e=e.replace(RegExp.$1,1==RegExp.$1.length?i:("00"+i).substr((""+i).length))}return e}function C(t,e,n){return e=e||(w(t)?[]:{}),S(t,function(r){if(!(n&&n.indexOf(r)>-1))if(delete e[r],Object.getOwnPropertyDescriptor)try{Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}catch(n){e[r]=t[r]}else e[r]=t[r]}),e}function k(t,e){if(u(t)||_(t)||g(t)||y(t)||O(t))return t;var n=t;try{n=new t.constructor}catch(t){}return S(t,function(t,r){n[t]==r||f(e,t)||(x(r)?n[t]=k(r,e):n[t]=r)}),["toString","valueOf"].forEach(function(r){f(e,r)||A(n,r,t[r])}),n}function N(t,e,n,r,o){if(r)switch(r){case 1:return N(t.prototype,e.prototype,n,0);case 2:N(t.prototype,e.prototype,n,0);break;case 3:return N(t,e.prototype,n,0);case 4:return N(t.prototype,e,n,0)}return e=e||{},t=t||(w(e)?[]:{}),H(e).forEach(function(r){f(n,r)||o&&u(e[r])||(!x(e[r])||e[r].constructor!=Object&&e[r].constructor!=Array&&null!=e[r].constructor?t[r]=e[r]:t[r]=N(t[r],e[r],n,0,o))}),t}function A(t,e,n){if(arguments.length<1)throw new Error("Parameter missing");if(arguments.length<2)return S(t,function(e,n){A(t,e,n)});if(arguments.length<3)return A(t,e,t[e]);try{Object.defineProperty(t,e,{get:function(){return n},set:function(){throw new Error("Cannot assign to final property:"+e)},enumerable:!1,configurable:!1})}catch(r){t[e]=n}}function H(t){if(Object.keys)return Object.keys(t);var e=[];return S(t,function(t){e.push(t)}),e}function D(t,e){function n(){}if(Object.create)return Object.create(t,e);n.prototype=t;var r=new n;return e&&C(e,r),r}function L(t,e){if(Object.setPrototypeOf)return Object.setPrototypeOf(t,e||D(null));"__proto__"in Object||C(e,t),t.__proto__=e}function T(t){return t.__proto__?t.__proto__:Object.getPrototypeOf?Object.getPrototypeOf(t):t.constructor?t.constructor.prototype:void 0}function F(t,e){if(t===e)return!0;if(!x(t)||!x(e))return!1;var n=H(t),r=H(e);if(n.length!==r.length)return!1;var o=n.concat(r),i=D(null),u=!0;return S(o,function(n,r){i[r]||(F(t[r],e[r])||(u=!1),i[r]=!0)}),u}function $(t,e,n,r){if(r||(r=[n,n=r][0]),n=Math.abs(n||1),t<e)for(var o=t;o<=e;o+=n)r(o);else for(var o=t;o>=e;o-=n)r(o)}function R(){function t(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return t()+t()+"-"+t()+"-"+t()+"-"+t()+"-"+t()+t()+t()}function I(t,e){var n=w(t)?[]:{};return S(t,function(t,r){n[t]=e(t,r)}),n}function W(t,e,n){u(t)||u(e)||""===e||(w(e)||(e=e.replace(/\[/,".").replace(/\]/,".").split(".")),S(e,function(r,o){u(o)||o.length<1||(r===e.length-1?t[o]=n:(t[o]=t[o]||{},t=t[o]))}))}function U(t,e){return u(t)||u(e)||""===e?t:(w(e)||(e=e.replace(/\[/,".").replace(/\]/,".").split(".")),S(e,function(e,n){u(n)||n.length<1||u(t)||(t=t[n])}),t)}function G(t){if(u(t))return t;var e=[];return S(t,function(t,n){e.indexOf(n)>-1||e.push(n)}),e}function V(t){if(!t)return[];var e=t.toString(),n=e.split(")")[0].split("=>")[0].split("(");return(n[1]||n[0]).split(",").map(function(t){return s(t)}).filter(function(t){return"function"!=t})}function B(t,e){if(!t)return t;e=e||40;var n=t.length,r=e/2;return n>e?t.substr(0,r)+"..."+t.substr(n-r):t}function q(t){return _(t)?t.substring(0,1).toUpperCase()+t.substring(1):""}function z(t){return _(t)?t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"):""}function J(t,e){return _(t)?(t&&(t=t.replace(/\-[a-z0-9]/g,function(t){return t.slice(1).toUpperCase()}),t=t.replace(/^[a-z]/i,function(t){return e?t.toUpperCase():t.toLowerCase()})),t):""}function K(t){return _(t)?(t&&(t=t.replace(/([A-Z])/g,"-$1"),"-"==t[0]&&(t=t.slice(1))),t.toLowerCase()):""}function Y(t){var e=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi;return t.replace(e,"<$1></$2>")}function Z(t){t=t||" ";var e=document.createElement("div");e.innerHTML=Y(s(t));var n=j(e.childNodes);return S(n,function(t,n){e.removeChild(n)}),n}Object.defineProperty(e,"__esModule",{value:!0}),e.noop=r,e.toString=o,e.getType=i,e.isNull=u,e.trim=s,e.replace=a,e.startWith=c,e.contains=f,e.endWith=l,e.has=p,e.hasProperty=p,e.isFunction=h,e.isAsyncFunction=d,e.isGeneratorFunction=v,e.isString=_,e.isNumber=g,e.isBoolean=y,e.isElement=m,e.isText=b,e.isObject=x,e.isArray=w,e.isDate=O,e.isRegexp=E,e.toArray=j,e.toDate=P,e.each=S,e.formatDate=M,e.copy=C,e.clone=k,e.mix=N,e.final=A,e.keys=H,e.create=D,e.setPrototypeOf=L,e.getPrototypeOf=T,e.deepEqual=F,e.fromTo=$,e.newGuid=R,e.map=I,e.setByPath=W,e.getByPath=U,e.unique=G,e.getFunctionArgumentNames=V,e.short=B,e.firstUpper=q,e.escapeRegExp=z,e.toCamelCase=J,e.toSplitCase=K,e.htmlPrefilter=Y,e.parseHTML=Z},function(e,n){e.exports=t},function(t,e,n){var r=n(31)("wks"),o=n(32),i=n(6).Symbol;t.exports=function(t){return r[t]||(r[t]=i&&i[t]||(i||o)("Symbol."+t))}},function(t,e,n){var r=n(6),o=n(7),i=n(20),u=function(t,e,n){var s,a,c,f=t&u.F,l=t&u.G,p=t&u.S,h=t&u.P,d=t&u.B,v=t&u.W,_=l?o:o[e]||(o[e]={}),g=l?r:p?r[e]:(r[e]||{}).prototype;l&&(n=e);for(s in n)(a=!f&&g&&s in g)&&s in _||(c=a?g[s]:n[s],_[s]=l&&"function"!=typeof g[s]?n[s]:d&&a?i(c,r):v&&g[s]==c?function(t){var e=function(e){return this instanceof t?new t(e):t(e)};return e.prototype=t.prototype,e}(c):h&&"function"==typeof c?i(Function.call,c):c,h&&((_.prototype||(_.prototype={}))[s]=c))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,t.exports=u},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"1.2.6"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(46),o=n(24),i=n(26),u=n(48),s=n(25);r.AutoRun=o,r.Watcher=i,r.expression=u,r.nextTick=s,r.Observer=r,t.exports=r},function(t,e,n){var r=n(21),o=n(11);t.exports=function(t){return r(o(t))}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(19),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=o.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(49),i=r(o),u=n(59),s=r(u),a="function"==typeof s.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":typeof t};e.default="function"==typeof s.default&&"symbol"===a(i.default)?function(t){return void 0===t?"undefined":a(t)}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":void 0===t?"undefined":a(t)}},function(t,e,n){var r=n(0),o=n(15);t.exports=n(30)?function(t,e,n){return r.setDesc(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports={}},function(t,e,n){var r=n(0).setDesc,o=n(16),i=n(4)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){t.exports={default:n(41),__esModule:!0}},function(t,e,n){var r=n(43);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(22);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){function r(){this._mounted_&&this.forceUpdate()}function o(t){var e=t.render,n=function(){var t=e.call(this);return x(t,this.model,null,this._elementHandlers_)};return function(){if(!this._run_){_(this,"_observer_",new h(this.model));var t=this,e=!!this.constructor._deep_;_(this,"_run_",this._observer_.run(n,{trigger:r,context:t,deep:e}))}return this._run_.run()}}function i(t){var e=t.componentWillUnmount;return function(){var t=this;this._mounted_=!1;var n=null;return e&&(n=e.call(this)),this._unmountHandlers_&&this._unmountHandlers_.forEach(function(e){return e.call(t)}),this._run_&&this._observer_.stop(this._run_),this._isNewModelInstance_&&this._observer_.clearReference(),n}}function u(t){var e=t.componentDidMount;return function(){var t=this;this._mounted_=!0,this._mountHandlers_&&this._mountHandlers_.forEach(function(e){return e.call(t)}),e&&e.call(this)}}function s(t){var e=t.componentWillReceiveProps;return function(){for(var t=this,n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];this._receivePropsHandlers_&&this._receivePropsHandlers_.forEach(function(e){return e.call.apply(e,[t].concat(r))}),e&&e.call.apply(e,[this].concat(r))}}function a(t){return function(){if(this._model_)return this._model_;t=this.props.model||t||{};var e=!1;if(!g(t)&&!y(t))throw new Error("Invalid Model");return t instanceof Function&&(t=new t,e=!0),_(this,"_model_",t),_(this,"_isNewModelInstance_",e),this._model_}}function c(t,e,n,r){var o=t.type;if("string"==typeof o)return t;if(o.prototype._contented_)return t;var i=f(e,o),u=t.props||{},s=t.ref;return d.createElement(i,(0,p.default)({},u,{key:n,ref:s}),r)}function f(t,e){if(!e)return function(e){return f(t,e)};b(e)||(e=O(e));var n=e.prototype;return n._contented_?e:(w(n,c),Object.defineProperty(n,"model",{enumerable:!1,get:a(t)}),n.render=o(n),n.componentDidMount=u(n),n.componentWillUnmount=i(n),n.componentWillReceiveProps=s(n),_(n,"_contented_",!0),e)}var l=n(10),p=function(t){return t&&t.__esModule?t:{default:t}}(l),h=n(8),d=n(3),v=n(2),_=v.final,g=v.isObject,y=v.isFunction,m=n(1),b=m.isComponentClass,x=m.convertElement,w=m.registerElementHandler,O=n(35);t.exports=f},function(t,e,n){var r=n(25);t.exports=function(){function t(t,e,n,o){var i=this;this.onGet=function(t){i.runing&&t&&i.dependencies&&(i.dependencies[t.path]=!0)},this.isDependent=function(t){if(!t)return!1;if(!i.dependencies||i.dependencies[t])return!0;if(!i.deep)return!1;var e=t.split(".");return e.pop(),i.isDependent(e.join("."))},this.onChange=function(t){if(!i.runing&&t&&i.isDependent(t.path)){if(i.isSync())return i.trigger.call(i.context);var e=r(i.trigger,i.context,!0);e&&e.catch(function(t){throw t})}},this.run=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];i.dependencies={},i.runing=!0;var n=(r=i.handler).call.apply(r,[i.context].concat(t));return i.runing=!1,n;var r},this.handler=t,this.context=e||this,this.trigger=n||this.run,this.deep=o||!1}return t.prototype.isSync=function(){return!1},t}()},function(t,e){function n(){i=!1;var t=o.slice(0);o.length=0,t.forEach(function(t){return t()})}function r(t,e,n){if(!0===n){var r=o.find(function(e){return e.callback===t});if(r)return r.promise}var s,a,c=function(){try{var n=t?t.call(e):null;s&&s(n)}catch(t){a&&a(t)}};return c.callback=t,c.promise="undefined"!=typeof Promise?new Promise(function(t,e){s=t,a=e}):null,o.push(c),i||(i=!0,u()),c.promise}var o=[],i=!1,u=function(){if("undefined"!=typeof Promise){var t=Promise.resolve();return function(){t.then(n).catch(function(t){return console.error(t)})}}if("undefined"!=typeof MutationObserver||"[object MutationObserverConstructor]"===MutationObserver.toString()){var e=1,r=new MutationObserver(n),o=document.createTextNode(String(e));return r.observe(o,{characterData:!0}),function(){e=(e+1)%2,o.data=String(e)}}return function(){setTimeout(n,0)}}();t.exports=r},function(t,e,n){var r=n(2),o=r.isFunction,i=r.isBoolean,u=r.getByPath,s=r.deepEqual,a=r.clone,c=function(){function t(t,e,n){var r=this;if(this.calc=function(t){var e=r.calculator.call(r.context);(i(t)?t:!s(e,r.value))&&r.handler.call(r.context,e,r.value),r.value=a(e)},!o(t)||!o(e))throw new Error("Invalid parameters");this.context=n||this,this.calculator=o(t)?t:function(){return u(r.context,t)},this.handler=e}return t}();t.exports=c},function(t,e,n){"use strict";var r=n(28),o=n(5),i=n(29),u=n(14),s=n(16),a=n(17),c=n(54),f=n(18),l=n(0).getProto,p=n(4)("iterator"),h=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,n,v,_,g,y){c(n,e,v);var m,b,x=function(t){if(!h&&t in j)return j[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",O="values"==_,E=!1,j=t.prototype,P=j[p]||j["@@iterator"]||_&&j[_],S=P||x(_);if(P){var M=l(S.call(new t));f(M,w,!0),!r&&s(j,"@@iterator")&&u(M,p,d),O&&"values"!==P.name&&(E=!0,S=function(){return P.call(this)})}if(r&&!y||!h&&!E&&j[p]||u(j,p,S),a[e]=S,a[w]=d,_)if(m={values:O?S:x("values"),keys:g?S:x("keys"),entries:O?x("entries"):S},y)for(b in m)b in j||i(j,b,m[b]);else o(o.P+o.F*(h||E),e,m);return m}},function(t,e){t.exports=!0},function(t,e,n){t.exports=n(14)},function(t,e,n){t.exports=!n(12)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(6),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){var r=n(34);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}var o=n(36),i=r(o),u=n(67),s=r(u),a=n(68),c=r(a),f=n(3),l=f.Component;t.exports=function(t){if(!t._stateful_){var e=function(e){function n(){return(0,i.default)(this,n),(0,s.default)(this,e.apply(this,arguments))}return(0,c.default)(n,e),n.prototype.render=function(){return t(this.props)},n}(l);t._stateful_=e}return t._stateful_}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){t.exports={default:n(73),__esModule:!0}},function(t,e,n){function r(t){var e=t.type,n="string"==typeof e?p[e]:e.bindOpts;return n instanceof Function&&(n=n(t)),n=n||c,n&&"string"==typeof n.event&&(n.event=n.event.split(",")),n&&"string"==typeof n.prop&&(n.prop=n.prop.split(",")),n}function o(t,e){return a(t)?o(e,t):("string"==typeof t&&(t=p[t]),t||(t=c),e?(e.bindOpts=(0,u.default)({},t),e):function(e){return o(t,e)})}var i=n(19),u=function(t){return t&&t.__esModule?t:{default:t}}(i),s=n(1),a=s.isComponentClass,c={prop:["value"],event:["onChange"]},f={prop:["checked",function(t,e){var n=t.getValue();return n instanceof Array?n.indexOf(e.value)>-1:!!n}],event:["onChange",function(t,e){var n=e.target,r=n.value,o=n.checked,i=t.getValue();if(i instanceof Array)if(o)i.push(r);else{var u=i.indexOf(r);i.splice(u,1)}else t.setValue(o)}]},l={prop:["checked",function(t,e){var n=t.getValue();return"boolean"==typeof n?!!n:n==e.value}],event:["onChange",function(t,e){var n=e.target,r=n.value,o=n.checked;"boolean"==typeof t.getValue()?t.setValue(o):o&&t.setValue(r)}]},p={input:function(t){switch(t.props.type){case"checkbox":return f;case"radio":return l;default:return c}},radio:l,checkbox:f,select:c,textarea:c};o.getOptions=r,t.exports=o},function(t,e,n){t.exports=n(40)},function(t,e,n){var r=n(10),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=n(23),u=n(74),s=n(75),a=n(38),c=n(76),f=n(77),l=n(78),p=n(79),h=n(1),d=n(35),v=n(80),_=n(8),g=_.Observer,y=_.expression,m=_.nextTick,b=n(81);t.exports=(0,o.default)({connect:i,model:u,binding:s,bindable:a,watch:f,mapping:p,autorun:c,deep:l,stateful:d,composition:v,Observer:g,expression:y,nextTick:m,utils:h},b)},function(t,e,n){n(42),t.exports=n(7).Object.assign},function(t,e,n){var r=n(5);r(r.S+r.F,"Object",{assign:n(44)})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(0),o=n(45),i=n(21);t.exports=n(12)(function(){var t=Object.assign,e={},n={},r=Symbol(),o="abcdefghijklmnopqrst";return e[r]=7,o.split("").forEach(function(t){n[t]=t}),7!=t({},e)[r]||Object.keys(t({},n)).join("")!=o})?function(t,e){for(var n=o(t),u=arguments,s=u.length,a=1,c=r.getKeys,f=r.getSymbols,l=r.isEnum;s>a;)for(var p,h=i(u[a++]),d=f?c(h).concat(f(h)):c(h),v=d.length,_=0;v>_;)l.call(h,p=d[_++])&&(n[p]=h[p]);return n}:Object.assign},function(t,e,n){var r=n(11);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=n(2),i=o.isArray,u=o.isFunction,s=o.isNull,a=o.isObject,c=o.copy,f=o.final,l=o.each,p=n(47),h=n(24),d=n(26),v="_observer_",_=[/^\_(.*)\_$/,/^\_\_/,/^\$/],g=function(t){function e(e,n){var r=t.call(this)||this;if(s(e))throw new Error("Invalid target");n=n||{};var o=e[v];return o?(c(n,o.options),o.apply(),o):(f(r,"options",n),f(r,"shadow",{}),f(r,"target",e),f(r,"parents",[]),f(e,v,r),r.apply(),r)}return r(e,t),e.prototype.set=function(t,n){u(n)||e.isIgnore(t)||(Object.defineProperty(this.target,t,{get:function(){var e=this[v];return e.emitGet({name:t,value:n}),e.shadow[t]},set:function(n){var r=this[v],o=r.shadow[t];if(o!==n){if(a(n)){var i=new e(n);r.addChild(i,t)}o&&o[v]&&r.removeChild(o[v],t),r.shadow[t]=n,r.emitChange({name:t,value:n})}},configurable:!0,enumerable:!0}),this.target[t]=n)},e.prototype.apply=function(){i(this.target)&&this._wrapArray(this.target),this._getPropertyNames(this.target).forEach(function(t){"value"in Object.getOwnPropertyDescriptor(this.target,t)&&this.set(t,this.target[t])},this)},e.prototype.addChild=function(t,e){if(s(t)||s(e))throw new Error("Invalid paramaters");t.options.root||t.parents.push({parent:this,name:e})},e.prototype.removeChild=function(t,e){if(s(t))throw new Error("Invalid paramaters");var n=-1;t.parents.forEach(function(t,r){t.parent===this&&t.name===e&&(n=r)},this),n>-1&&t.parents.splice(n,1)},e.prototype.clearReference=function(){l(this.target,function(t,e){if(!s(e)){var n=e[v];n&&this.removeChild(n)}},this)},e.prototype.emitChange=function(t){t.path=t.name,this.dispatch("change",t)},e.prototype.emitGet=function(t){t.path=t.name,this.dispatch("get",t)},e.prototype.dispatch=function(t,e){e._src_!==this&&(e._src_=e._src_||this,e._layer_=e._layer_||0,e._layer_++>=10||(this.emit(t,e),!this.parents||this.parents.length<1||this.parents.forEach(function(n){if(!(n.name in n.parent.target))return n.parent.removeChild(this);var r=c(e);r.path=s(e.path)?n.name:n.name+"."+e.path,n.parent.dispatch(t,r)},this)))},e.prototype._getPropertyNames=function(){return(i(this.target)?this.target.map(function(t,e){return e}):Object.keys(this.target)).filter(function(t){return t!==v})},e.prototype._wrapArray=function(t){t._wrapped_||(f(t,"_wrapped_",!0),f(t,"push",function(){var e=[].slice.call(arguments),n=this[v];e.forEach(function(e){n.set(t.length,e)},this),n.emitChange({name:"length",value:this.length}),n.emitChange({value:this.length})}),f(t,"pop",function(){var t=[].pop.apply(this,arguments),e=this[v];return e.emitChange({name:this.length,value:t}),e.emitChange({name:"length",value:this.length}),e.emitChange({value:this.length}),t}),f(t,"unshift",function(){var t=[].slice.call(arguments),e=this[v];t.forEach(function(t){e.set(0,t)},this),e.emitChange({name:"length",value:this.length}),e.emitChange({value:this.length})}),f(t,"shift",function(){var t=[].shift.apply(this,arguments),e=this[v];return e.emitChange({name:0,value:t}),e.emitChange({name:"length",value:this.length}),e.emitChange({value:this.length}),t}),f(t,"splice",function(){for(var t=arguments[0],e=s(arguments[1])?t+arguments[1]:this.length-1,n=this[v],r=[].splice.apply(this,arguments),o=t;o<=e;o++)n.emitChange({name:o,value:r[o-t]});return n.emitChange({name:"length",value:this.length}),n.emitChange({value:this.length}),r}),f(t,"set",function(t,e){var n=this[v];t>=this.length&&(n.emitChange({name:"length",value:this.length}),n.emitChange({value:this.length})),n.set(t,e)}))},e.prototype.run=function(t,e){e=e||{};var n=e.context,r=e.trigger,o=e.immed,i=e.deep;n=n||this.target;var u=new h(t,n,r,i);return this.on("get",u.onGet),this.on("change",u.onChange),o&&u.run(),u},e.prototype.stop=function(t){t&&(this.off("get",t.onGet),this.off("change",t.onChange))},e.prototype.watch=function(t,e,n){n=n||{};var r=n.context;r=r||this.target;var o=new d(t,e,r);return o.autoRef=this.run(o.calc,n),o},e.prototype.unWatch=function(t){t&&this.stop(t.autoRef)},e}(p);g.observe=function(t){return new g(t)},g.isIgnore=function(t){return _.some(function(e){return e.test(t)})},t.exports=g},function(t,e,n){var r=n(2),o=r.final,i=r.isArray,u=r.copy,s=r.each,a=function(){function t(t){t=t||this;var e=t._emitter_;if(e)return e;o(this,"_target_",t),o(t,"_emitter_",this),this._isNative_=this._isNativeObject(this._target_),this._listeners_=this._listeners_||{},this.on=this.$on=this.$addListener=this.addListener,this.off=this.$off=this.$removeListener=this.removeListener,this.$emit=this.emit}return t.prototype._isNativeObject=function(t){return t.addEventListener&&t.removeEventListener&&t.dispatchEvent},t.prototype.addListener=function(e,n,r){this._isNative_&&this._addNativeEventListener(e,n,r),this._listeners_[e]=this._listeners_[e]||[],this._listeners_[e].push(n);var o=t._maxListeners;if(this._listeners_[e].length>o)throw new Error("The '"+e+"' event listener is not more than "+o)},t.prototype.removeListener=function(t,e,n){if(t&&e){if(this._isNative_&&this._removeNativeEventListener(t,e,n),!this._listeners_[t])return;var r=this._listeners_[t].indexOf(e);this._listeners_[t].splice(r,1)}else t?(this._isNative_&&this._listeners_[t]&&this._listeners_[t].forEach(function(e){this.removeListener(t,e,n)},this),delete this._listeners_[t]):(s(this._listeners_,function(t){this.removeListener(t,null,n)},this),this._listeners_={})},t.prototype.emit=function(t,e,n,r){if(this._isNative_)return this._emitNativeEvent(t,e,n,r);if(this._listeners_[t]){var o=!1;return this._listeners_[t].forEach(function(t){!1===t.call(this._target_,e)&&(o=!0)},this),o}},t.prototype._addNativeEventListener=function(e,n,r){this._target_.addEventListener(e,n,r);var o=t._events[e];o&&(o.addListener=o.addListener||o.on,o.addListener(this,e,n,r))},t.prototype._removeNativeEventListener=function(e,n,r){this._target_.removeEventListener(e,n,r);var o=t._events[e];o&&(o.removeListener=o.removeListener||o.off,o.removeListener(this,e,n,r))},t.prototype._emitNativeEvent=function(t,e,n,r){var o=document.createEvent("HTMLEvents");return o.initEvent(t,n,r),u(e,o,["data"]),o.data=e,this._target_.dispatchEvent(o)},t}();a._maxListeners=1024,a._events=[],a.register=function(t){var e=t.name;e&&(i(e)||(e=e.split(",")),e.forEach(function(e){this._events[e]=t},this))},t.exports=a},function(t,e){function n(t){t="("+t+")",s.lastIndex=0;for(var e,n={};e=s.exec(t);){var r=e[2];a.test(r)&&!c.test(r)&&(n[r]=!0)}return Object.keys(n)}function r(t,e){var n=t[e];return n instanceof Function?n.bind(t):n}function o(t){function e(t){var e=i.map(function(e){return r(t,e)});return u.apply(void 0,[t].concat(e))}var o=l[t];if(o)return o;var i=n(t),u=new(Function.bind.apply(Function,[void 0,"$scope"].concat(i,["return("+t+")"])));return l[t]=e,e}function i(t){function e(t){var e="";return r.forEach(function(n){e+=n instanceof Function?n(t):n}),e}var n=p[t];if(n)return n;for(var r=t.split(f),i=1;i<r.length;i+=2)r[i]=o(r[i]);return p[t]=e,e}function u(t,e){return e?i(t):o(t)}var s=/(\(|\[|\{|\+|\-|\*|\/|\>|\<|\=|\!|\,|\;|\?|\:|\&|\|)\s*([a-z\_0-9\$]+)/gi,a=/^[a-z\$\_]/i,c=/(\$scope|true|false|null|undefined|Date|Number|String|Object|Boolean|Array|RegExp|Math|JSON|parseInt|parseFloat|isNaN|isFinite)/,f=/\{\{([\s\S]+?)\}\}/,l={},p={};u.expression=o,u.template=i,t.exports=u},function(t,e,n){t.exports={default:n(50),__esModule:!0}},function(t,e,n){n(51),n(55),t.exports=n(4)("iterator")},function(t,e,n){"use strict";var r=n(52)(!0);n(27)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(53),o=n(11);t.exports=function(t){return function(e,n){var i,u,s=String(o(e)),a=r(n),c=s.length;return a<0||a>=c?t?"":void 0:(i=s.charCodeAt(a),i<55296||i>56319||a+1===c||(u=s.charCodeAt(a+1))<56320||u>57343?t?s.charAt(a):i:t?s.slice(a,a+2):u-56320+(i-55296<<10)+65536)}}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){"use strict";var r=n(0),o=n(15),i=n(18),u={};n(14)(u,n(4)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r.create(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){n(56);var r=n(17);r.NodeList=r.HTMLCollection=r.Array},function(t,e,n){"use strict";var r=n(57),o=n(58),i=n(17),u=n(9);t.exports=n(27)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){t.exports={default:n(60),__esModule:!0}},function(t,e,n){n(61),n(66),t.exports=n(7).Symbol},function(t,e,n){"use strict";var r=n(0),o=n(6),i=n(16),u=n(30),s=n(5),a=n(29),c=n(12),f=n(31),l=n(18),p=n(32),h=n(4),d=n(62),v=n(63),_=n(64),g=n(65),y=n(33),m=n(9),b=n(15),x=r.getDesc,w=r.setDesc,O=r.create,E=v.get,j=o.Symbol,P=o.JSON,S=P&&P.stringify,M=!1,C=h("_hidden"),k=r.isEnum,N=f("symbol-registry"),A=f("symbols"),H="function"==typeof j,D=Object.prototype,L=u&&c(function(){return 7!=O(w({},"a",{get:function(){return w(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=x(D,e);r&&delete D[e],w(t,e,n),r&&t!==D&&w(D,e,r)}:w,T=function(t){var e=A[t]=O(j.prototype);return e._k=t,u&&M&&L(D,t,{configurable:!0,set:function(e){i(this,C)&&i(this[C],t)&&(this[C][t]=!1),L(this,t,b(1,e))}}),e},F=function(t){return"symbol"==typeof t},$=function(t,e,n){return n&&i(A,e)?(n.enumerable?(i(t,C)&&t[C][e]&&(t[C][e]=!1),n=O(n,{enumerable:b(0,!1)})):(i(t,C)||w(t,C,b(1,{})),t[C][e]=!0),L(t,e,n)):w(t,e,n)},R=function(t,e){y(t);for(var n,r=_(e=m(e)),o=0,i=r.length;i>o;)$(t,n=r[o++],e[n]);return t},I=function(t,e){return void 0===e?O(t):R(O(t),e)},W=function(t){var e=k.call(this,t);return!(e||!i(this,t)||!i(A,t)||i(this,C)&&this[C][t])||e},U=function(t,e){var n=x(t=m(t),e);return!n||!i(A,e)||i(t,C)&&t[C][e]||(n.enumerable=!0),n},G=function(t){for(var e,n=E(m(t)),r=[],o=0;n.length>o;)i(A,e=n[o++])||e==C||r.push(e);return r},V=function(t){for(var e,n=E(m(t)),r=[],o=0;n.length>o;)i(A,e=n[o++])&&r.push(A[e]);return r},B=function(t){if(void 0!==t&&!F(t)){for(var e,n,r=[t],o=1,i=arguments;i.length>o;)r.push(i[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&g(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!F(e))return e}),r[1]=e,S.apply(P,r)}},q=c(function(){var t=j();return"[null]"!=S([t])||"{}"!=S({a:t})||"{}"!=S(Object(t))});H||(j=function(){if(F(this))throw TypeError("Symbol is not a constructor");return T(p(arguments.length>0?arguments[0]:void 0))},a(j.prototype,"toString",function(){return this._k}),F=function(t){return t instanceof j},r.create=I,r.isEnum=W,r.getDesc=U,r.setDesc=$,r.setDescs=R,r.getNames=v.get=G,r.getSymbols=V,u&&!n(28)&&a(D,"propertyIsEnumerable",W,!0));var z={for:function(t){return i(N,t+="")?N[t]:N[t]=j(t)},keyFor:function(t){return d(N,t)},useSetter:function(){M=!0},useSimple:function(){M=!1}};r.each.call("hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),function(t){var e=h(t);z[t]=H?e:T(e)}),M=!0,s(s.G+s.W,{Symbol:j}),s(s.S,"Symbol",z),s(s.S+s.F*!H,"Object",{create:I,defineProperty:$,defineProperties:R,getOwnPropertyDescriptor:U,getOwnPropertyNames:G,getOwnPropertySymbols:V}),P&&s(s.S+s.F*(!H||q),"JSON",{stringify:B}),l(j,"Symbol"),l(Math,"Math",!0),l(o.JSON,"JSON",!0)},function(t,e,n){var r=n(0),o=n(9);t.exports=function(t,e){for(var n,i=o(t),u=r.getKeys(i),s=u.length,a=0;s>a;)if(i[n=u[a++]]===e)return n}},function(t,e,n){var r=n(9),o=n(0).getNames,i={}.toString,u="object"==typeof window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.get=function(t){return u&&"[object Window]"==i.call(t)?s(t):o(r(t))}},function(t,e,n){var r=n(0);t.exports=function(t){var e=r.getKeys(t),n=r.getSymbols;if(n)for(var o,i=n(t),u=r.isEnum,s=0;i.length>s;)u.call(t,o=i[s++])&&e.push(o);return e}},function(t,e,n){var r=n(22);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e){},function(t,e,n){"use strict";e.__esModule=!0;var r=n(13),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,o.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(69),i=r(o),u=n(37),s=r(u),a=n(13),c=r(a);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,c.default)(e)));t.prototype=(0,s.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},function(t,e,n){t.exports={default:n(70),__esModule:!0}},function(t,e,n){n(71),t.exports=n(7).Object.setPrototypeOf},function(t,e,n){var r=n(5);r(r.S,"Object",{setPrototypeOf:n(72).set})},function(t,e,n){var r=n(0).getDesc,o=n(34),i=n(33),u=function(t,e){if(i(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n(20)(Function.call,r(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return u(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:u}},function(t,e,n){var r=n(0);t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){var r=n(23),o=n(3);t.exports=function(t){return t&&t.prototype instanceof o.Component?r(null,t):function(e){return r(t,e)}}},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return{get:d(t),set:d("$scope."+t+"=$value")}}function i(t,e,n,r){var i,u=t.props||{},s=u["data-bind"],c=s&&p.getOptions(t);if(!s||!c)return l.cloneElement(t,(0,f.default)({key:n},u,{children:r}));var h=u["data-scope"]||e,v=u[c.change],_=o(s),g=function(t){return _.set((0,a.default)(h,{$value:{value:t}}))},y=function(){return _.get(h)},m={getValue:y,setValue:g},b=c.event[0],x=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=c.event[1];if(o instanceof Function)o.apply(void 0,[m,t].concat(n));else if(o)g(d(String(o))(t));else{var i="target"in t?t.target.value:t;g(i)}if(v)return v(t)},w=c.prop[0],O=c.prop[1]||function(t){return t.getValue()};return l.cloneElement(t,(0,f.default)({key:n},u,(i={"data-scope":void 0,"data-bind":void 0,children:r},i[w]=O(m,u),i[b]=x,i)))}function u(t){if(!t)return u;var e=t.prototype;if(e._contented_)throw new Error("`binding` must be enabled before `model`");return _(e,i),t}var s=n(37),a=r(s),c=n(10),f=r(c),l=n(3),p=n(38),h=n(8),d=h.expression,v=n(1),_=v.registerElementHandler;t.exports=u},function(t,e,n){function r(t,e){if(!t)return r;var n=void 0;i(t,function(){var r=this,o=t._deep_&&t._deep_[e];n=this._observer_.run(t[e],{context:r,deep:o}),n.run()}),u(t,function(){this._observer_.stop(n)}),s(t,e)}var o=n(1),i=o.registerMountHandler,u=o.registerUnmountHandler,s=o.markAsAutorun;t.exports=r},function(t,e,n){function r(t,e){if(!i(t))throw new Error("Watch needs to specify a calculation function");return function(n,r){var o=void 0;s(n,function(){var i=this,u=n._deep_&&n._deep_[r];o=this._observer_.watch(function(){return t.call(this,this.model)},n[r],{context:i,deep:u}),o.autoRef.run(e||!1)}),a(n,function(){this._observer_.unWatch(o)}),c(n,r)}}var o=n(2),i=o.isFunction,u=n(1),s=u.registerMountHandler,a=u.registerUnmountHandler,c=u.markAsWatch;t.exports=r},function(t,e,n){function r(t,e){if(!t)return r;if(e?t._autorun_&&t._autorun_[e]||t._watch_&&t._watch_[e]:t&&t.prototype&&t.prototype._contented_)throw new Error("`deep` must be enabled before `model/autorun/watch`");i(t,e)}var o=n(1),i=o.markAsDeep;t.exports=r},function(t,e,n){function r(t){function e(e,n){c(t,function(t,r){f(t)||(t=r),e[r]!==n[t]&&(e[r]=n[t])})}if(!a(t))throw new Error("Mapping needs to specify a object or array");return function(t){if(!t)return r;var n=t.prototype;if(n._contented_)throw new Error("`mapping` must be enabled before `model`");u(n,function(){e(this.model,this.props)}),i(n,function(t){e(this.model,t)})}}var o=n(1),i=o.registerReceivePropsHandler,u=o.registerMountHandler,s=n(2),a=s.isObject,c=s.each,f=s.isString;t.exports=r},function(t,e,n){var r=n(36),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=n(8),u=i.AutoRun,s=function(){function t(){var e=this;(0,o.default)(this,t),this.composing=!1,this.inputting=!1,this.onUpdate=function(){e.composing=!0},this.onEnd=function(){e.composing=!1},this.onInput=function(){e.inputting=!0,e.inputTimer&&clearTimeout(e.inputTimer),e.inputTimer=setTimeout(function(){e.inputting=!1,e.inputTimer=null},0)},this.enable()}return t.prototype.on=function(t,e){document.addEventListener(t,e,!0)},t.prototype.off=function(t,e){document.removeEventListener(t,e,!0)},t.prototype.enable=function(){this.on("compositionupdate",this.onUpdate),this.on("compositionend",this.onEnd),this.on("input",this.onInput)},t.prototype.disable=function(){this.off("compositionupdate",this.onUpdate),this.off("compositionend",this.onEnd)},t}(),a=new s;u.prototype.isSync=function(){return a.composing||a.inputting},t.exports=a},function(t,e){t.exports={name:"mota",version:"0.4.0"}}])});
//# sourceMappingURL=mota-min.js.map