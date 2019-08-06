define(["lodash","app/plugins/sdk"],function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=84)}([function(e,n){e.exports=t},function(t,e,n){"use strict";var r;n.d(e,"a",function(){return r}),function(t){t.TimeSeries="time_series",t.Table="table",t.Heatmap="heatmap"}(r||(r={}))},function(t,e,n){(function(e){var n="object",r=function(t){return t&&t.Math==Math&&t};t.exports=r(typeof globalThis==n&&globalThis)||r(typeof window==n&&window)||r(typeof self==n&&self)||r(typeof e==n&&e)||Function("return this")()}).call(this,n(48))},function(t,e,n){"use strict";n.d(e,"c",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"a",function(){return u});var r=n(0),i=n.n(r);function o(t,e,n){var r=n.value;n.value=function(){var t=this;return this.inflightCalls||(this.inflightCalls={}),this.inflightCalls[e]?this.inflightCalls[e]:(this.inflightCalls[e]=r.apply(this,arguments),this.inflightCalls[e].then(function(n){return t.inflightCalls[e]=null,n},function(n){throw t.inflightCalls[e]=null,n}))}}function a(t){return!(t&&i.a.isString(t)&&t.trim().length>0)}function u(t){var e={};return t.variables?(t.variables.forEach(function(t){var n=t.current.value;("$__all"===n||i.a.isEqual(n,["$__all"]))&&(n=null===t.allValue?t.options.slice(1).map(function(t){return t.value}):t.allValue),e[t.name]={text:t.current.text,value:n}}),e):{}}},function(t,e,n){var r=n(5);t.exports=!r(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(4),i=n(13),o=n(21);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,n){var r=n(2),i=n(14),o=n(52),a=r["__core-js_shared__"]||i("__core-js_shared__",{});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.1.3",mode:o?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e,n){var r=n(18),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e,n){var r=n(50),i=n(23);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(4),i=n(25),o=n(9),a=n(24),u=Object.defineProperty;e.f=r?u:function(t,e,n){if(o(t),e=a(e,!0),o(n),i)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(2),i=n(8);t.exports=function(t,e){try{i(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){t.exports=e},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},,function(t,e,n){var r=n(4),i=n(49),o=n(21),a=n(12),u=n(24),s=n(7),c=n(25),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=a(t),e=u(e,!0),c)try{return l(t,e)}catch(t){}if(s(t,e))return o(!i.f.call(t,e),t[e])}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(4),i=n(5),o=n(26);t.exports=!r&&!i(function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(2),i=n(6),o=r.document,a=i(o)&&i(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},function(t,e,n){var r=n(10);t.exports=r("native-function-to-string",Function.toString)},function(t,e,n){var r=n(10),i=n(29),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(57),i=n(2),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t])||o(i[t]):r[t]&&r[t][e]||i[t]&&i[t][e]}},function(t,e,n){var r=n(7),i=n(12),o=n(59).indexOf,a=n(15);t.exports=function(t,e){var n,u=i(t),s=0,c=[];for(n in u)!r(a,n)&&r(u,n)&&c.push(n);for(;e.length>s;)r(u,n=e[s++])&&(~o(c,n)||c.push(n));return c}},function(t,e,n){var r=n(22);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r=n(34);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(2),i=n(10),o=n(29),a=n(63),u=r.Symbol,s=i("wks");t.exports=function(t){return s[t]||(s[t]=a&&u[t]||(a?u:o)("Symbol."+t))}},function(t,e,n){"use strict";var r=n(0),i=n.n(r),o=n(1),a=n(3),u=(n(45),function(){return(u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)}),s=function(){function t(t){this.templateSrv=t}return t.prototype.getLabel=function(t,e,n,r,o){if(void 0===o&&(o={}),Object(a.b)(e.legendFormat)){var s=r&&""!==r.name?r.name:n;if(!i.a.isEmpty(o)){for(var c=[],l=0,f=["hostname","source"];l<f.length;l++){var p=f[l];p in o&&c.push(p+': "'+o[p]+'"')}c.length>0&&(s+=" {"+c.join(", ")+"}")}return s}o=i.a.mapValues(o,function(t){return{value:t}});var h=n.split("."),v=u({},t.scopedVars,o,{metric:{value:n},metric0:{value:h[h.length-1]}});return r&&""!==r.name&&(v.instance={value:r.name}),this.templateSrv.replace(e.legendFormat,v)},t.prototype.transformToTimeSeries=function(t,e,n){var r=this;return n.instances.map(function(i){return{target:r.getLabel(t,e,n.name,i,i.metadata),datapoints:i.values}})},t.prototype.transformToHeatmap=function(t){return t.instances.map(function(t){var e=t.name,n=t.name.match(/^(.+?)\-(.+?)$/);return n&&(e=n[2]),{target:e,datapoints:t.values.map(function(t){return[t[0],1e3*Math.floor(t[1]/1e3)]})}})},t.prototype.transformStringToTable=function(t){for(var e={columns:[],rows:[],type:"table"},n=t.split("\n"),r=[],i=function(t){if(0===(t=t.trim()).length||t.includes("Ctrl-C"))return"continue";if(0===e.columns.length)for(var n=t.split(/\s\s+/),i=0;i<n.length;i++){var o=t.indexOf(n[i]),a=i+1<n.length?t.indexOf(n[i+1])-1:void 0;e.columns.push({text:n[i]}),r.push([o,a])}else{var u=r.map(function(e){return t.substring(e[0],e[1]).trim()});e.rows.push(u)}},o=0,a=n;o<a.length;o++){i(a[o])}return e},t.prototype.transformMultipleMetricsToTable=function(t,e){var n=this,r={columns:[],rows:[],type:"table"};r.columns=e.map(function(e){return{text:n.getLabel(t,e.target,e.metrics[0].name)}});for(var i=function(t){for(var n=[],i=0,o=e;i<o.length;i++){var a=o[i].metrics[0].instances.find(function(e){return e.name===t});a&&a.values.length>0?n.push(a.values[a.values.length-1][0]):n.push("?")}r.rows.push(n)},o=0,a=Object.keys(e[0].metrics[0].instances).sort(function(t,e){return parseInt(t)-parseInt(e)});o<a.length;o++){i(a[o])}return r},t.prototype.transformToTable=function(t,e){if(e.length>1)return this.transformMultipleMetricsToTable(t,e);if(1===e.length&&1===e[0].metrics.length){var n=e[0].metrics[0].instances;if(n.length>0&&n[0].values.length>0)return this.transformStringToTable(n[0].values[0][0])}return{columns:[],rows:[],type:"table"}},t.prototype.transform=function(t,e){var n=this,r=e[0].target.format;if(r===o.a.TimeSeries)return e.flatMap(function(e){return e.metrics.flatMap(function(r){return n.transformToTimeSeries(t,e.target,r)})});if(r===o.a.Heatmap)return e.flatMap(function(t){return t.metrics.flatMap(function(t){return n.transformToHeatmap(t)})});if(r==o.a.Table)return[this.transformToTable(t,e)];throw{message:"Invalid target format '"+r+"', possible options: "+o.a.TimeSeries+", "+o.a.Heatmap+", "+o.a.Table}},t}();e.a=s},function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n(0),i=n.n(r),o=(function(){function t(){}t.applyTransformations=function(t,e,n){return t.reduce(function(t,e){return e(t,n)},e)},t.counter=function(t,e){if(e){var n=(t[1]-e[1])/1e3;return[(t[0]-e[2])/n,t[1],t[0]]}return[void 0,t[1],t[0]]},t.divideBy=function(t){return function(e){return e[0]/=t,e}}}(),function(){function t(){}return t.applyTransformations=function(e,n,r){var o=[];"counter"===e&&(o.push(t.counter),"nanosec"===n&&o.push(t.divideBy(1e9)));var a=i.a.cloneDeep(r);return a.sort(function(t,e){return t[1]-e[1]}),o.reduce(function(t,e){return e(t)},a)},t.counter=function(t){t.length<2&&(t.length=0);for(var e=t[0],n=1;n<t.length;n++){var r=t[n].slice(),i=(r[1]-e[1])/1e3;t[n][0]=(r[0]-e[0])/i,e=r}return t.shift(),t},t.divideBy=function(t){return function(e){return e.forEach(function(e){e[0]/=t}),e}},t}())},function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r,i=n(0),o=n.n(i),a=n(17),u=(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),s=function(t){function e(e,n,r){void 0===r&&(r=1e3);var i=t.call(this,e,n)||this;return i.typingDebounceTime=r,i.stopTypingDebounced=o.a.debounce(i.stopTyping,i.typingDebounceTime),i}return u(e,t),e.prototype.stopTyping=function(){delete this.target.isTyping},e.prototype.startTyping=function(){this.target.isTyping=!0,this.stopTypingDebounced()},e.prototype.targetChanged=function(){this.stopTyping(),this.panelCtrl.refresh()},e}(a.QueryCtrl)},function(t,e,n){var r=n(2),i=n(20).f,o=n(8),a=n(51),u=n(14),s=n(55),c=n(62);t.exports=function(t,e){var n,l,f,p,h,v=t.target,m=t.global,d=t.stat;if(n=m?r:d?r[v]||u(v,{}):(r[v]||{}).prototype)for(l in e){if(p=e[l],f=t.noTargetGet?(h=i(n,l))&&h.value:n[l],!c(m?l:v+(d?".":"#")+l,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;s(p,f)}(t.sham||f&&f.sham)&&o(p,"sham",!0),a(n,l,p,t)}}},function(t,e,n){"use strict";var r=n(32),i=n(11),o=n(33),a=function(t,e,n,u,s,c,l,f){for(var p,h=s,v=0,m=!!l&&o(l,f,3);v<u;){if(v in n){if(p=m?m(n[v],v,e):n[v],c>0&&r(p))h=a(t,e,p,i(p.length),h,c-1)-1;else{if(h>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[h]=p}h++}v++}return h};t.exports=a},function(t,e,n){var r=n(23);t.exports=function(t){return Object(r(t))}},function(t,e,n){var r=n(6),i=n(32),o=n(35)("species");t.exports=function(t,e){var n;return i(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!i(n.prototype)?r(n)&&null===(n=n[o])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){var r=n(35),i=n(65),o=n(8),a=r("unscopables"),u=Array.prototype;null==u[a]&&o(u,a,i(null)),t.exports=function(t){u[a][t]=!0}},function(t,e,n){var r=n(2),i=n(33),o=Function.call;t.exports=function(t,e,n){return i(o,r[t].prototype[e],n)}},function(t,e,n){t.exports=n(46)},function(t,e,n){n(47),n(64);var r=n(44);t.exports=r("Array","flatMap")},function(t,e,n){"use strict";var r=n(39),i=n(40),o=n(41),a=n(11),u=n(34),s=n(42);r({target:"Array",proto:!0},{flatMap:function(t){var e,n=o(this),r=a(n.length);return u(t),(e=s(n,0)).length=i(e,n,n,r,0,1,t,arguments.length>1?arguments[1]:void 0),e}})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(5),i=n(22),o="".split;t.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(2),i=n(10),o=n(8),a=n(7),u=n(14),s=n(27),c=n(53),l=c.get,f=c.enforce,p=String(s).split("toString");i("inspectSource",function(t){return s.call(t)}),(t.exports=function(t,e,n,i){var s=!!i&&!!i.unsafe,c=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof n&&("string"!=typeof e||a(n,"name")||o(n,"name",e),f(n).source=p.join("string"==typeof e?e:"")),t!==r?(s?!l&&t[e]&&(c=!0):delete t[e],c?t[e]=n:o(t,e,n)):c?t[e]=n:u(e,n)})(Function.prototype,"toString",function(){return"function"==typeof this&&l(this).source||s.call(this)})},function(t,e){t.exports=!1},function(t,e,n){var r,i,o,a=n(54),u=n(2),s=n(6),c=n(8),l=n(7),f=n(28),p=n(15),h=u.WeakMap;if(a){var v=new h,m=v.get,d=v.has,y=v.set;r=function(t,e){return y.call(v,t,e),e},i=function(t){return m.call(v,t)||{}},o=function(t){return d.call(v,t)}}else{var g=f("state");p[g]=!0,r=function(t,e){return c(t,g,e),e},i=function(t){return l(t,g)?t[g]:{}},o=function(t){return l(t,g)}}t.exports={set:r,get:i,has:o,enforce:function(t){return o(t)?i(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!s(e)||(n=i(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var r=n(2),i=n(27),o=r.WeakMap;t.exports="function"==typeof o&&/native code/.test(i.call(o))},function(t,e,n){var r=n(7),i=n(56),o=n(20),a=n(13);t.exports=function(t,e){for(var n=i(e),u=a.f,s=o.f,c=0;c<n.length;c++){var l=n[c];r(t,l)||u(t,l,s(e,l))}}},function(t,e,n){var r=n(30),i=n(58),o=n(61),a=n(9);t.exports=r("Reflect","ownKeys")||function(t){var e=i.f(a(t)),n=o.f;return n?e.concat(n(t)):e}},function(t,e,n){t.exports=n(2)},function(t,e,n){var r=n(31),i=n(16).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,e,n){var r=n(12),i=n(11),o=n(60),a=function(t){return function(e,n,a){var u,s=r(e),c=i(s.length),l=o(a,c);if(t&&n!=n){for(;c>l;)if((u=s[l++])!=u)return!0}else for(;c>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,n){var r=n(18),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(5),i=/#|\.prototype\./,o=function(t,e){var n=u[a(t)];return n==c||n!=s&&("function"==typeof e?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=o.data={},s=o.NATIVE="N",c=o.POLYFILL="P";t.exports=o},function(t,e,n){var r=n(5);t.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())})},function(t,e,n){n(43)("flatMap")},function(t,e,n){var r=n(9),i=n(66),o=n(16),a=n(15),u=n(68),s=n(26),c=n(28)("IE_PROTO"),l=function(){},f=function(){var t,e=s("iframe"),n=o.length;for(e.style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;n--;)delete f.prototype[o[n]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(l.prototype=r(t),n=new l,l.prototype=null,n[c]=t):n=f(),void 0===e?n:i(n,e)},a[c]=!0},function(t,e,n){var r=n(4),i=n(13),o=n(9),a=n(67);t.exports=r?Object.defineProperties:function(t,e){o(t);for(var n,r=a(e),u=r.length,s=0;u>s;)i.f(t,n=r[s++],e[n]);return t}},function(t,e,n){var r=n(31),i=n(16);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e,n){var r=n(30);t.exports=r("document","documentElement")},,,,,,function(t,e){ace.define("ace/snippets/pmseries",["require","exports","module"],function(t,e,n){"use strict";e.snippets=[],e.scope="pmseries"}),ace.define("ace/mode/pmseries_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,e,n){"use strict";var r=t("../lib/oop"),i=t("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"entity.name.tag.metric",regex:"[a-zA-Z][a-zA-Z0-9._]*"},{token:"paren.lparen.qualifiers-matcher",regex:"{",next:"start-qualifiers-matcher"}],"start-qualifiers-matcher":[{token:"entity.name.tag.qualifier-key",regex:"[a-zA-Z_][a-zA-Z0-9_.]*"},{token:"keyword.operator",regex:"==|!=|~~|=~|!~|:|<|>|<=|>="},{token:"string.quoted.qualifier-value",regex:'".*?"'},{token:"punctuation.operator",regex:"&&|\\|\\||,"},{token:"paren.rparen",regex:"}",next:"start"}]},this.normalizeRules()};r.inherits(o,i),e.PmSeriesHighlightRules=o}),ace.define("ace/mode/pmseries",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/pmseries_highlight_rules"],function(t,e,n){"use strict";var r=t("../lib/oop"),i=t("./text").Mode,o=t("./pmseries_highlight_rules").PmSeriesHighlightRules,a=function(){this.HighlightRules=o,this.$behaviour=this.$defaultBehaviour};r.inherits(a,i),function(){this.$id="ace/mode/pmseries"}.call(a.prototype),e.Mode=a})},,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r,i=n(0),o=n.n(i),a=n(3),u=function(){return(u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},s=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function u(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}s((r=r.apply(t,e||[])).next())})},c=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},l=function(){function t(t,e){this.datasourceRequest=t,this.url=e,this.descriptionCache={},this.instanceCache={},this.labelCache={}}return t.prototype.ping=function(){return s(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,this.datasourceRequest({url:this.url+"/series/ping"})];case 1:return[2,t.sent()]}})})},t.prototype.query=function(t){return s(this,void 0,void 0,function(){var e,n;return c(this,function(r){switch(r.label){case 0:return[4,this.datasourceRequest({url:this.url+"/series/query",params:{expr:t}})];case 1:return e=r.sent(),n=e.data,[2,o.a.isArray(n)?n:[]]}})})},t.prototype.descs=function(t){return s(this,void 0,void 0,function(){var e,n,r,i,a;return c(this,function(u){switch(u.label){case 0:return(e=o.a.difference(t,Object.keys(this.descriptionCache))).length>0?[4,this.datasourceRequest({url:this.url+"/series/descs",params:{series:e.join(",")}})]:[3,2];case 1:for(n=u.sent(),r=0,i=n.data;r<i.length;r++)a=i[r],this.descriptionCache[a.series]=a;u.label=2;case 2:return[2,o.a.pick(this.descriptionCache,t)]}})})},t.prototype.instances=function(t){return s(this,void 0,void 0,function(){var e,n,r,i,o;return c(this,function(a){switch(a.label){case 0:return[4,this.datasourceRequest({url:this.url+"/series/instances",params:{series:t.join(",")}})];case 1:for(e=a.sent(),n=e.data,r=0,i=n;r<i.length;r++)(o=i[r]).series in this.instanceCache||(this.instanceCache[o.series]={}),this.instanceCache[o.series][o.instance]=o.name;return[2,n]}})})},t.prototype.updateInstanceNames=function(t){return s(this,void 0,void 0,function(){var e,n,r,i;return c(this,function(o){switch(o.label){case 0:e={},n=0,r=t,o.label=1;case 1:return n<r.length?(i=r[n]).instance?i.series in this.instanceCache?[3,3]:[4,this.instances([i.series])]:(i.instanceName="",[3,5]):[3,6];case 2:o.sent(),e[i.series]=!0,o.label=3;case 3:return i.instanceName=this.instanceCache[i.series][i.instance]||"",""!==i.instanceName||e[i.series]?[3,5]:[4,this.instances([i.series])];case 4:o.sent(),i.instanceName=this.instanceCache[i.series][i.instance]||"",e[i.series]=!0,o.label=5;case 5:return n++,[3,1];case 6:return[2]}})})},t.prototype.instancesOfSeries=function(t){return t in this.instanceCache?Object.keys(this.instanceCache[t]):[]},t.prototype.values=function(t,e,n){return void 0===n&&(n=!1),s(this,void 0,void 0,function(){var r,i;return c(this,function(a){switch(a.label){case 0:return[4,this.datasourceRequest({url:this.url+"/series/values",params:u({series:t.join(",")},e)})];case 1:return r=a.sent(),i=r.data,o.a.isArray(i)?n?[4,this.updateInstanceNames(i)]:[3,3]:[2,[]];case 2:a.sent(),a.label=3;case 3:return[2,i]}})})},t.prototype.metrics=function(t){return s(this,void 0,void 0,function(){return c(this,function(e){switch(e.label){case 0:return[4,this.datasourceRequest({url:this.url+"/series/metrics",params:{match:t}})];case 1:return[2,e.sent().data]}})})},t.prototype.labels=function(t){return s(this,void 0,void 0,function(){var e,n,r,i,a,u;return c(this,function(s){switch(s.label){case 0:return(e=o.a.difference(t,Object.keys(this.labelCache))).length>0?[4,this.datasourceRequest({url:this.url+"/series/labels",params:{series:e.join(",")}})]:[3,2];case 1:for(n=s.sent(),r=o.a.isArray(n.data)?n.data:[],i=0,a=r;i<a.length;i++)u=a[i],this.labelCache[u.series]=u.labels;s.label=2;case 2:return[2,o.a.pick(this.labelCache,t)]}})})},t}(),f=n(36),p=n(37),h=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function u(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}s((r=r.apply(t,e||[])).next())})},v=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},m=function(){function t(t,e,n,r){this.instanceSettings=t,this.backendSrv=e,this.templateSrv=n,this.variableSrv=r,this.name=t.name,this.withCredentials=t.withCredentials,this.headers={"Content-Type":"application/json"},"string"==typeof t.basicAuth&&t.basicAuth.length>0&&(this.headers.Authorization=t.basicAuth),this.transformations=new f.a(this.templateSrv),this.pmSeries=new l(this.doRequest.bind(this),this.instanceSettings.url)}return t.$inject=["instanceSettings","backendSrv","templateSrv","variableSrv"],t.prototype.doRequest=function(t){return h(this,void 0,void 0,function(){return v(this,function(e){switch(e.label){case 0:return t.withCredentials=this.withCredentials,t.headers=this.headers,[4,this.backendSrv.datasourceRequest(t)];case 1:return[2,e.sent()]}})})},t.prototype.testDatasource=function(){return h(this,void 0,void 0,function(){var t;return v(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,this.pmSeries.ping()];case 1:if(200!==e.sent().status)throw{message:"err"};return[2,{status:"success",title:"Success",message:"Data source is working"}];case 2:return t=e.sent(),[2,{status:"error",title:"Error",message:"PCP Data source is not working: "+(t&&t.statusText?t.statusText:"Could not connect to "+this.instanceSettings.url)}];case 3:return[2]}})})},t.prototype.metricFindQuery=function(t){return h(this,void 0,void 0,function(){return v(this,function(t){return[2,[]]})})},t.prototype.buildQueryTargets=function(t){var e=this;return t.targets.filter(function(t){return!t.hide&&!Object(a.b)(t.expr)&&!t.isTyping}).map(function(n){return{refId:n.refId,expr:e.templateSrv.replace(n.expr.trim(),t.scopedVars),format:n.format,legendFormat:n.legendFormat}})},t.prototype.handleTarget=function(t,e,n,r){var i=[];for(var a in t){var u=[],s=o.a.groupBy(t[a],"instanceName");for(var c in s){var l=s[c][0].instance,f=s[c].map(function(t){return[parseFloat(t.value),parseInt(t.timestamp)]});u.push({name:c,values:p.a.applyTransformations(e[a].semantics,e[a].units,f),metadata:l?n[l]:n[a]})}i.push({name:r.expr,instances:u})}return{target:r,metrics:i}},t.prototype.query=function(t){return h(this,void 0,void 0,function(){var e,n,r,i,a,u,s,c,l,f,p,h,m,d,y,g,b,x,w=this;return v(this,function(v){switch(v.label){case 0:if(0===(e=this.buildQueryTargets(t)).length)return[2,{data:[]}];if(!o.a.every(e,["format",e[0].format]))throw{message:"Format must be the same for all queries of a panel."};return n="UTC","browser"==t.timezone&&(n=Intl.DateTimeFormat().resolvedOptions().timeZone),r=e.map(function(t){return t.expr}),[4,Promise.all(r.map(function(t){return w.pmSeries.query(t)}))];case 1:for(s in i=v.sent(),a=o.a.zipObject(r,i),u=i.flat(),a)if(0===a[s].length)throw{message:"Could not find series for "+s};return c=Math.round(t.range.from.valueOf()/1e3),l=Math.round(t.range.to.valueOf()/1e3),f=Math.round((t.range.to.valueOf()-t.range.from.valueOf())/t.intervalMs),p=t.interval,t.maxDataPoints,[4,this.pmSeries.values(u,{start:c,finish:l,samples:f,interval:p,tzparam:n},!0)];case 2:return h=v.sent(),m=u.flatMap(function(t){var e=w.pmSeries.instancesOfSeries(t);return e.length>0?e:[t]}),[4,Promise.all([this.pmSeries.descs(u),this.pmSeries.labels(m)])];case 3:return d=v.sent(),y=d[0],g=d[1],b=o.a.groupBy(h,"series"),x=e.map(function(t){return w.handleTarget(o.a.pick(b,a[t.expr]),y,g,t)}),[2,{data:this.transformations.transform(t,x)}]}})})},t}(),d=n(1),y=n(38),g=function(t,e,n,r){return new(n||(n=Promise))(function(i,o){function a(t){try{s(r.next(t))}catch(t){o(t)}}function u(t){try{s(r.throw(t))}catch(t){o(t)}}function s(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(a,u)}s((r=r.apply(t,e||[])).next())})},b=function(t,e){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(t){o=[6,t],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},x=function(){function t(t){this.identifierRegexps=[/[\{"]/,/[a-zA-Z0-9_.]/],this.pmSeries=t.pmSeries}return t.prototype.getCompletions=function(t,e,n,r,i){t.completers.length>1&&(t.completers=t.completers.slice(-1)),this.findCompletions(t,e,n,r).then(function(t){i(null,t)},function(t){i(t,[])})},t.prototype.getCompletion=function(t,e,n){return{caption:t,value:e+t,meta:n,score:Number.MAX_VALUE}},t.prototype.findToken=function(t,e){for(var n=t.length-1;n>=0;n--)if(t[n].type===e)return t[n];return null},t.prototype.findMetricCompletions=function(t){return g(this,void 0,void 0,function(){var e,n,r,i,o,a=this;return b(this,function(u){switch(u.label){case 0:return"",n=[],t.value.includes(".")?(e=t.value.substring(0,t.value.lastIndexOf(".")),i=(r=n.push).apply,o=[n],[4,this.pmSeries.metrics(e+".*")]):[3,2];case 1:i.apply(r,o.concat([u.sent()])),u.label=2;case 2:return n.sort(),[2,n.map(function(t){return a.getCompletion(t,"","metric")})]}})})},t.prototype.findQualifiersForToken=function(t){return g(this,void 0,void 0,function(){var e,n,r,i,a,u,s,c,l,f,p,h,v,m,d,y,g;return b(this,function(b){switch(b.label){case 0:return[4,this.pmSeries.query(t)];case 1:return 0===(e=b.sent()).length?[2,{}]:(n={},[4,this.pmSeries.descs(e)]);case 2:return r=b.sent(),i=o.a.partition(e,function(t){return"none"!==r[t].indom}),a=i[0],u=i[1],s=[],a.length>0?[4,this.pmSeries.instances(a)]:[3,4];case 3:c=b.sent(),s=c.map(function(t){return t.instance}),n["instance.name"]=c.map(function(t){return t.name}),b.label=4;case 4:return[4,this.pmSeries.labels(u.concat(s))];case 5:for(l=b.sent(),f=0,p=Object.values(l);f<p.length;f++)for(h=p[f],v=0,m=Object.entries(h);v<m.length;v++)d=m[v],y=d[0],g=d[1],y in n||(n[y]=[]),n[y].includes(g)||n[y].push(g);return[2,n]}})})},t.prototype.findQualifierKeyCompletions=function(t,e){return g(this,void 0,void 0,function(){var n,r,i,o=this;return b(this,function(a){switch(a.label){case 0:return n="{"===e.value?"{":"",(r=this.findToken(t,"entity.name.tag.metric"))?[4,this.findQualifiersForToken(r.value)]:[2,[]];case 1:return i=a.sent(),[2,Object.keys(i).map(function(t){return o.getCompletion(t,n,"instance.name"===t?"qualifier":"label")})]}})})},t.prototype.findQualifierValueCompletions=function(t,e){return g(this,void 0,void 0,function(){var n,r,i,o=this;return b(this,function(a){switch(a.label){case 0:return n='""'===e.value?'"':"",r=this.findToken(t,"entity.name.tag.metric"),i=this.findToken(t,"entity.name.tag.qualifier-key"),r&&i?[4,this.findQualifiersForToken(r.value)]:[2,[]];case 1:return[2,(a.sent()[i.value]||[]).map(function(t){return o.getCompletion(t,n,"instance.name"===t?"qualifier":"label")})]}})})},t.prototype.findCompletions=function(t,e,n,r){return g(this,void 0,void 0,function(){var t;return b(this,function(r){return"entity.name.tag.metric"===(t=e.getTokenAt(n.row,n.column)).type?[2,this.findMetricCompletions(t)]:"entity.name.tag.qualifier-key"===t.type||"paren.lparen.qualifiers-matcher"===t.type?[2,this.findQualifierKeyCompletions(e.getTokens(n.row),t)]:"string.quoted.qualifier-value"===t.type?[2,this.findQualifierValueCompletions(e.getTokens(n.row),t)]:[2,[]]})})},t}(),w=(n(74),r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),T=function(t){function e(e,n){var r=t.call(this,e,n)||this;return r.formats=[],r.target.expr=r.target.expr||"",r.target.format=r.target.format||r.getDefaultFormat(),r.formats=[{text:"Time series",value:d.a.TimeSeries},{text:"Table",value:d.a.Table},{text:"Heatmap",value:d.a.Heatmap}],r}return w(e,t),e.$inject=["$scope","$injector"],e.prototype.getDefaultFormat=function(){return"table"===this.panelCtrl.panel.type?d.a.Table:"heatmap"===this.panelCtrl.panel.type?d.a.Heatmap:d.a.TimeSeries},e.prototype.getCompleter=function(){return new x(this.datasource)},e.templateUrl="datasources/redis/partials/query.editor.html",e}(y.a);n.d(e,"ConfigCtrl",function(){return S}),n.d(e,"AnnotationsQueryCtrl",function(){return O}),n.d(e,"Datasource",function(){return m}),n.d(e,"QueryCtrl",function(){return T});var S=function(){function t(){}return t.templateUrl="datasources/redis/partials/config.html",t}(),O=function(){function t(){}return t.templateUrl="datasources/redis/partials/annotations.editor.html",t}()}])});
//# sourceMappingURL=module.js.map