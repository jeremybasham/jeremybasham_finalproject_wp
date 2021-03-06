/*! jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
jQuery.noConflict();


;/*
	JS Stylesheet Library
	Created by Chris Jean
	Licensed under GPL v2
	
	Version 0.1
*/
function ITStylesheet(args, action) {
				
	if('undefined' !== typeof args.document) {
		this.document = args.document;
		delete args.document;
	}			
	
	this.property_dom_names = {};
	this.property_standard_names = {};
	this.converted_rgb_values = {};
	
	this.args = ('undefined' !== typeof args) ? args : {};
	this.action = ('undefined' !== typeof action) ? action : 'load';
			
	this.init = function() {
		if('find' === this.action)
			this._find_stylesheet();
		else
			this._load_stylesheet();
	}
	
	
	this._load_stylesheet = function() {
		args = this.args;
		
		var new_style_node;
		
		if('undefined' !== typeof args.href) {
			new_style_node = this.document.createElement('link');
			new_style_node.href = args.href;
			
			this.type = 'link';
		}
		else {
			new_style_node = this.document.createElement('style');
			
			this.type = 'style';
		}
		
		new_style_node.type = 'text/css';
		
		if('undefined' !== typeof args.title)
			new_style_node.title = args.title;
		if('undefined' !== typeof args.rel)
			new_style_node.rel = args.rel;
		if('undefined' !== typeof args.media)
			new_style_node.media = args.media;
		
		if(('undefined' !== typeof args.href) && ('undefined' === typeof args.rel))
			new_style_node.rel = 'stylesheet';
		
		
		var content = '';
		
		if('undefined' !== typeof args.content) {
			content = args.content;
			delete args.content;
		}

		/* Give stylesheet a random ID that way we can find it later */ 
			var randomID = Math.floor((Math.random() * 1000)) + 1;
		
		/* Create stylesheet/link */
			this.$stylesheet_node = jQuery(new_style_node).insertBefore($i('style#live-css-holder')).addClass('ITStylesheet').attr('id', 'itstylesheet-' + randomID);
			this.stylesheet_node = this.$stylesheet_node[0];

		/* Loop through this.document.styleSheets to find the newly added stylesheet */
			var self = this;

			jQuery.each(this.document.styleSheets, function(index, CSSStylesheet) {

				if ( typeof CSSStylesheet.ownerNode.id == 'undefined' || !CSSStylesheet.ownerNode.id || CSSStylesheet.ownerNode.id != 'itstylesheet-' + randomID )
					return;

				self.stylesheet = CSSStylesheet;

				return false;

			});
		
		this._find_rules();
		
		if('' !== content)
			this.set_rules(content);
	}
	
	this._find_stylesheet = function() {
		args = this.args;
				
		for(var i = 0; i < this.document.styleSheets.length; i++) {
							
			if(('undefined' !== typeof args.href) && typeof this.document.styleSheets[i].href == 'string' && this.document.styleSheets[i].href.indexOf(args.href) === -1)
				continue;
			if(('undefined' !== typeof args.title) && (args.title !== this.document.styleSheets[i].title))
				continue;
			if(('undefined' !== typeof args.rel) && (args.rel !== this.document.styleSheets[i].rel))
				continue;
			if(('undefined' !== typeof args.media) && (args.media !== this.document.styleSheets[i].media))
				continue;
			if(('undefined' !== typeof args.type) && (args.type !== this.document.styleSheets[i].type))
				continue;
			if(('undefined' !== typeof args.disabled) && (args.disabled !== this.document.styleSheets[i].disabled))
				continue;
				
			this.type = 'link';
						
			this.stylesheet = this.document.styleSheets[i];
			this._find_rules();
			break;
		}
	}
	
	this._find_rules = function() {
		
		if(('undefined' === typeof this.stylesheet))
			return;
		
		if(this.stylesheet.cssRules)
			this.rules = this.stylesheet.cssRules;
		else
			this.rules = this.stylesheet.rules;
			
	}
	
	this._get_style_from_declarations = function(declarations) {
		var style = '';
		
		for(property in declarations)
			style += property + ':' + declarations[property] + '; ';
		
		return style;
	}
	
	this._get_rules_obj_from_string = function(rules_string) {
		var rules = {};
		
		var rule_matches = rules_string.match(/\s*[^{;]+\s*{\s*[^{}]+\s*}/g);
		if(-1 === rule_matches)
			return rules;
		
		for(var i = 0; i < rule_matches.length; i++) {
			var rule_parts = rule_matches[i].match(/\s*([^{;]+)\s*{\s*([^{}]+)\s*}/);
			rules[rule_parts[1]] = rule_parts[2];
		}
		
		return rules;
	}
	
	this._get_property_dom_name = function(css_property) {
		if('undefined' !== typeof this.property_dom_names[css_property])
			return this.property_dom_names[css_property];
		
		var property_parts = css_property.split('-');
		
		var property = property_parts.shift();
		
		while(property_parts.length > 0) {
			var part = property_parts.shift();
			part = part.charAt(0).toUpperCase() + part.substr(1);
			
			property += part;
		}
		
		this.property_dom_names[css_property] = property;
		
		return property;
	}
	
	this._get_property_standard_name = function(css_property) {
		if('undefined' !== typeof this.property_standard_names[css_property])
			return this.property_standard_names[css_property];
		
		var property = css_property;
		
		if('padding-right-value' === css_property)
			property = 'padding-right';
		else if('padding-left-value' === css_property)
			property = 'padding-left';
		else if('margin-right-value' === css_property)
			property = 'margin-right';
		else if('margin-left-value' === css_property)
			property = 'margin-left';
		
		this.property_standard_names[css_property] = property;
		
		return property;
	}
	
	this._delete_rule_at_index = function(index) {
		if(this.stylesheet.deleteRule)
			this.stylesheet.deleteRule(index);
		else
			this.stylesheet.removeRule(index);
	}
	
	this._get_stylesheet_rules = function(stylesheet) {
		if(stylesheet.cssRules)
			return stylesheet.cssRules;
		return stylesheet.rules;
	}
	
	this._get_stylesheet_rules_object = function(stylesheet) {
		var raw_rules = this._get_stylesheet_rules(stylesheet);
		
		var declarations = {};
		var selectors = [];
		
		for(var i = 0; i < raw_rules.length; i++) {
			declarations[raw_rules[i].selectorText] = this._get_rule_declarations_object(raw_rules[i]);
			selectors.push(raw_rules[i].selectorText);
		}
		
		selectors.sort();
		
		var rules = {};
		
		for(var i = 0; i < selectors.length; i++)
			rules[selectors[i]] = declarations[selectors[i]];
		
		return rules;
	}
	
	this._get_rule_declarations_object = function(rule_or_node) {
		var declarations = {};
		
		var style_obj;
		
		if(rule_or_node.style)
			style_obj = rule_or_node.style;
		else
			style_obj = rule_or_node;
		
		var properties = [];
		for(var i = 0; i < style_obj.length; i++)
			properties.push(style_obj[i]);
		properties.sort();
		
		for(var i = 0; i < properties.length; i++) {
			var property = this._get_property_standard_name(properties[i]);
			
			if('undefined' !== typeof style_obj[property])
				declarations[property] = style_obj[property];
			else
				declarations[property] = style_obj[this._get_property_dom_name(property)];
		}
		
		return declarations;
	}
	
	
	this.get_rule_index = function(selector) {
		if('undefined' === typeof selector)
			return false;
			
		indexes = new Array();
		
		if(!this.rules)
			this._find_rules();
		if(!this.rules)
			return false;
		
		if('undefined' !== typeof this.rules[selector])
			return selector;

		
		for(var i = 0; i < this.rules.length; i++) {
			if(typeof this.rules[i].selectorText == 'string' && this.rules[i].selectorText.toLowerCase() == selector.toLowerCase())
				indexes.push(i);
		}
				
		if(indexes.length !== 0){
			return indexes[indexes.length-1];
		}
		
		return false;
	}
	
	this.get_rule = function(selector) {
		if('undefined' === typeof selector)
			return false;
		
		var index = this.get_rule_index(selector);
		
		if((false === index) || ('undefined' === typeof this.rules[index]))
			return false;
		
		return this.rules[index];
	}
	
	this.add_rule = function(selector, declarations) {
		return this.update_rule(selector, declarations);
	}
	
	this.update_rule = function(selectors_raw, declarations, split_selectors) {		
		if(('undefined' === typeof this.rules) || ('undefined' === typeof selectors_raw))
			return false;
		if('undefined' === typeof declarations )
			declarations = {};
		if('undefined' === typeof split_selectors)
			split_selectors = false;
		
		if(split_selectors){
			var selectors = selectors_raw.split(',');
		} else {
			var selectors = new Array(selectors_raw);
		}
		
		var rules = [];
		
		for(var i = 0; i < selectors.length; i++) {
			var selector = selectors[i];
			
			if('undefined' === typeof selector)
				continue;
			
			var rule = this.get_rule(selector);
			
			try {
				if(false === rule) {
					var rule_index = this.rules.length;
					string_declarations = ('string' === typeof declarations) ? declarations : this._get_style_from_declarations(declarations);
					
					if(this.stylesheet.addRule)
						this.stylesheet.addRule(selector, string_declarations, rule_index);
					else
						this.stylesheet.insertRule(selector + ' {' + string_declarations + '}', rule_index);
					
					rule = this.rules[rule_index];
				}
				else {
					for(property in declarations) {
						if(rule.style.setAttribute)
							rule.style.setAttribute(property, declarations[property]);
						else
							rule.style.setProperty(property, declarations[property], null);
					}
				}
				
				rules.push(rule);
			}
			catch(error) {}
		}
		
		return rules;
	}
	
	this.delete_all_rules = function() {
		while(this.rules.length > 0)
			this._delete_rule_at_index(0);
	}
	
	this.delete_rule = function(selector) {
		var index = this.get_rule_index(selector);
		
		if(false === index)
			return false;
		
		this._delete_rule_at_index(index);
		
		return true;
	}
	
	this.delete_rule_property = function(selector, property) {
		var tempObject = {};
		tempObject[property] = null;
		
		this.update_rule(selector, tempObject);
	}
	
	this._convert_rgb_to_hex = function(rgb) {
		if('undefined' !== typeof this.converted_rgb_values[rgb])
			return this.converted_rgb_values[rgb];
		
		var digits = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(rgb);
		
		var red = parseInt(digits[1]);
		var green = parseInt(digits[2]);
		var blue = parseInt(digits[3]);
		
		var hex_raw = blue | (green << 8) | (red << 16);
		
		hex = hex_raw.toString(16).toUpperCase();
		
		while(hex.length < 6)
			hex = '0' + hex;
		
		this.converted_rgb_values[rgb] = '#' + hex;
		
		return '#' + hex;
	}
	
	this.get_stylesheet_text = function() {
		var rules = this._get_stylesheet_rules_object(this.stylesheet);
		
		var stylesheet = '';
		var rgb_regex = /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/;
		
		for(selector in rules) {
			var properties = '';
			for(property in rules[selector]) {
				var value = rules[selector][property];
				
				if('undefined' === typeof value)
					continue;
				
				if(rgb_regex.test(value))
					value = this._convert_rgb_to_hex(value);
				
				properties += "\t" + property + ": " + value + ";\n";
			}
			
			if('' === properties)
				continue;
			
			if('' !== stylesheet)
				stylesheet += "\n";
			stylesheet += selector + " {\n" + properties + '}';
		}
		
		return stylesheet;
	}
	
	this.get_computed_style = function(node) {
		if(window.getComputedStyle)
			return window.getComputedStyle(node, '');
		return node.currentStyle;
	}
	
	this.set_rules = function(new_style_rules) {
		this.delete_all_rules();
		
		if('string' === typeof new_style_rules)
			new_style_rules = this._get_rules_obj_from_string(new_style_rules);
		
		for(selector in new_style_rules)
			this.update_rule(selector, new_style_rules[selector]);
	}
	
	
	this.init();
	
	return true;
}

;/*! jsUri v1.1.1 | https://github.com/derek-watson/jsUri */
var Query=function(a){"use strict";var b=function(a){var b=[],c,d,e,f;if(typeof a=="undefined"||a===null||a==="")return b;a.indexOf("?")===0&&(a=a.substring(1)),d=a.toString().split(/[&;]/);for(c=0;c<d.length;c++)e=d[c],f=e.split("="),b.push([f[0],f[1]]);return b},c=b(a),d=function(){var a="",b,d;for(b=0;b<c.length;b++)d=c[b],a.length>0&&(a+="&"),a+=d.join("=");return a.length>0?"?"+a:a},e=function(a){a=decodeURIComponent(a),a=a.replace("+"," ");return a},f=function(a){var b,d;for(d=0;d<c.length;d++){b=c[d];if(e(a)===e(b[0]))return b[1]}},g=function(a){var b=[],d,f;for(d=0;d<c.length;d++)f=c[d],e(a)===e(f[0])&&b.push(f[1]);return b},h=function(a,b){var d=[],f,g,h,i;for(f=0;f<c.length;f++)g=c[f],h=e(g[0])===e(a),i=e(g[1])===e(b),(arguments.length===1&&!h||arguments.length===2&&!h&&!i)&&d.push(g);c=d;return this},i=function(a,b,d){arguments.length===3&&d!==-1?(d=Math.min(d,c.length),c.splice(d,0,[a,b])):arguments.length>0&&c.push([a,b]);return this},j=function(a,b,d){var f=-1,g,j;if(arguments.length===3){for(g=0;g<c.length;g++){j=c[g];if(e(j[0])===e(a)&&decodeURIComponent(j[1])===e(d)){f=g;break}}h(a,d).addParam(a,b,f)}else{for(g=0;g<c.length;g++){j=c[g];if(e(j[0])===e(a)){f=g;break}}h(a),i(a,b,f)}return this};return{getParamValue:f,getParamValues:g,deleteParam:h,addParam:i,replaceParam:j,toString:d}},Uri=function(a){"use strict";var b=!1,c=function(a){var c={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},d=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],e={name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},f=c[b?"strict":"loose"].exec(a),g={},h=14;while(h--)g[d[h]]=f[h]||"";g[e.name]={},g[d[12]].replace(e.parser,function(a,b,c){b&&(g[e.name][b]=c)});return g},d=c(a||""),e=new Query(d.query),f=function(a){typeof a!="undefined"&&(d.protocol=a);return d.protocol},g=null,h=function(a){typeof a!="undefined"&&(g=a);return g===null?d.source.indexOf("//")!==-1:g},i=function(a){typeof a!="undefined"&&(d.userInfo=a);return d.userInfo},j=function(a){typeof a!="undefined"&&(d.host=a);return d.host},k=function(a){typeof a!="undefined"&&(d.port=a);return d.port},l=function(a){typeof a!="undefined"&&(d.path=a);return d.path},m=function(a){typeof a!="undefined"&&(e=new Query(a));return e},n=function(a){typeof a!="undefined"&&(d.anchor=a);return d.anchor},o=function(a){f(a);return this},p=function(a){h(a);return this},q=function(a){i(a);return this},r=function(a){j(a);return this},s=function(a){k(a);return this},t=function(a){l(a);return this},u=function(a){m(a);return this},v=function(a){n(a);return this},w=function(a){return m().getParamValue(a)},x=function(a){return m().getParamValues(a)},y=function(a,b){arguments.length===2?m().deleteParam(a,b):m().deleteParam(a);return this},z=function(a,b,c){arguments.length===3?m().addParam(a,b,c):m().addParam(a,b);return this},A=function(a,b,c){arguments.length===3?m().replaceParam(a,b,c):m().replaceParam(a,b);return this},B=function(){var a="",b=function(a){return a!==null&&a!==""};b(f())?(a+=f(),f().indexOf(":")!==f().length-1&&(a+=":"),a+="//"):h()&&b(j())&&(a+="//"),b(i())&&b(j())&&(a+=i(),i().indexOf("@")!==i().length-1&&(a+="@")),b(j())&&(a+=j(),b(k())&&(a+=":"+k())),b(l())?a+=l():b(j())&&(b(m().toString())||b(n()))&&(a+="/"),b(m().toString())&&(m().toString().indexOf("?")!==0&&(a+="?"),a+=m().toString()),b(n())&&(n().indexOf("#")!==0&&(a+="#"),a+=n());return a},C=function(){return new Uri(B())};return{protocol:f,hasAuthorityPrefix:h,userInfo:i,host:j,port:k,path:l,query:m,anchor:n,setProtocol:o,setHasAuthorityPrefix:p,setUserInfo:q,setHost:r,setPort:s,setPath:t,setQuery:u,setAnchor:v,getQueryParamValue:w,getQueryParamValues:x,deleteQueryParam:y,addQueryParam:z,replaceQueryParam:A,toString:B,clone:C}},jsUri=Uri;

;/*!
 * jQuery UI 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.13",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();
b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,
"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",
function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,
outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,"tabindex"),d=isNaN(b);
return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=
0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(c){c.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)}).bind("click."+this.widgetName,function(b){if(true===c.data(b.target,a.widgetName+".preventClickEvent")){c.removeData(b.target,a.widgetName+".preventClickEvent");b.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(a){a.originalEvent=
a.originalEvent||{};if(!a.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var b=this,e=a.which==1,f=typeof this.options.cancel=="string"?c(a.target).parents().add(a.target).filter(this.options.cancel).length:false;if(!e||f||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){b.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}this._mouseMoveDelegate=function(d){return b._mouseMove(d)};this._mouseUpDelegate=function(d){return b._mouseUp(d)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return a.originalEvent.mouseHandled=true}},_mouseMove:function(a){if(c.browser.msie&&!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);
return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;a.target==this._mouseDownEvent.target&&c.data(a.target,this.widgetName+".preventClickEvent",
true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Position 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+(parseInt(c.curCSS(this,"marginRight",true))||0),w=m+q+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=
m/2;i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;/*
 * jQuery UI Draggable 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;d(b.iframeFix===true?"iframe":b.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")});return true},_mouseStart:function(a){var b=this.options;this.helper=
this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);return true},_mouseDrag:function(a,b){this.position=this._generatePosition(a);
this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=
d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",
a)!==false&&this._clear();return false},_mouseUp:function(a){this.options.iframeFix===true&&d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});return d.ui.mouse.prototype._mouseUp.call(this,a)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone().removeAttr("id"):this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a=
{left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&
d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=
this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions=
{width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[(a.containment=="document"?0:d(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(a.containment=="document"?0:d(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(a.containment=="document"?0:d(window).scrollLeft())+
d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){a=d(a.containment);var b=a[0];if(b){a.offset();var c=d(b).css("overflow")!="hidden";this.containment=[(parseInt(d(b).css("borderLeftWidth"),
10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-
this.margins.top-this.margins.bottom];this.relative_container=a}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&
d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,h=a.pageY;if(this.originalPosition){var g;if(this.containment){if(this.relative_container){g=this.relative_container.offset();g=[this.containment[0]+g.left,this.containment[1]+g.top,this.containment[2]+g.left,this.containment[3]+g.top]}else g=this.containment;if(a.pageX-this.offset.click.left<g[0])e=g[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<g[1])h=g[1]+this.offset.click.top;
if(a.pageX-this.offset.click.left>g[2])e=g[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>g[3])h=g[3]+this.offset.click.top}if(b.grid){h=this.originalPageY+Math.round((h-this.originalPageY)/b.grid[1])*b.grid[1];h=g?!(h-this.offset.click.top<g[1]||h-this.offset.click.top>g[3])?h:!(h-this.offset.click.top<g[1])?h-b.grid[1]:h+b.grid[1]:h;e=this.originalPageX+Math.round((e-this.originalPageX)/b.grid[0])*b.grid[0];e=g?!(e-this.offset.click.left<g[0]||e-this.offset.click.left>g[2])?e:!(e-this.offset.click.left<
g[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");
this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.13"});
d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var h=d.data(this,"sortable");if(h&&!h.options.disabled){c.sortables.push({instance:h,shouldRevert:h.options.revert});h.refreshPositions();h._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=
0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=
c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,
true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=
0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=
a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");
if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!="x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=
f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);
else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,
a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),f=c.options,e=f.snapTolerance,h=b.offset.left,g=h+c.helperProportions.width,n=b.offset.top,
o=n+c.helperProportions.height,i=c.snapElements.length-1;i>=0;i--){var j=c.snapElements[i].left,l=j+c.snapElements[i].width,k=c.snapElements[i].top,m=k+c.snapElements[i].height;if(j-e<h&&h<l+e&&k-e<n&&n<m+e||j-e<h&&h<l+e&&k-e<o&&o<m+e||j-e<g&&g<l+e&&k-e<n&&n<m+e||j-e<g&&g<l+e&&k-e<o&&o<m+e){if(f.snapMode!="inner"){var p=Math.abs(k-o)<=e,q=Math.abs(m-n)<=e,r=Math.abs(j-g)<=e,s=Math.abs(l-h)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k-c.helperProportions.height,left:0}).top-c.margins.top;
if(q)b.position.top=c._convertPositionTo("relative",{top:m,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l}).left-c.margins.left}var t=p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(k-n)<=e;q=Math.abs(m-o)<=e;r=Math.abs(j-h)<=e;s=Math.abs(l-g)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k,left:0}).top-c.margins.top;if(q)b.position.top=
c._convertPositionTo("relative",{top:m-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[i].snapping&&(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=p||q||r||s||t}else{c.snapElements[i].snapping&&
c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});
d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;/*
 * jQuery UI Droppable 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(d){d.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var a=this.options,b=a.accept;this.isover=0;this.isout=1;this.accept=d.isFunction(b)?b:function(c){return c.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];d.ui.ddmanager.droppables[a.scope].push(this);
a.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var a=d.ui.ddmanager.droppables[this.options.scope],b=0;b<a.length;b++)a[b]==this&&a.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(a,b){if(a=="accept")this.accept=d.isFunction(b)?b:function(c){return c.is(b)};d.Widget.prototype._setOption.apply(this,arguments)},_activate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);b&&this._trigger("activate",a,this.ui(b))},_deactivate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);b&&this._trigger("deactivate",a,this.ui(b))},_over:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",a,this.ui(b))}},_out:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",a,this.ui(b))}},_drop:function(a,b){var c=b||d.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return false;var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=
d.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],c.currentItem||c.element)&&d.ui.intersect(c,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){e=true;return false}});if(e)return false;if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
a,this.ui(c));return this.element}return false},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}});d.extend(d.ui.droppable,{version:"1.8.13"});d.ui.intersect=function(a,b,c){if(!b.offset)return false;var e=(a.positionAbs||a.position.absolute).left,g=e+a.helperProportions.width,f=(a.positionAbs||a.position.absolute).top,h=f+a.helperProportions.height,i=b.offset.left,k=i+b.proportions.width,j=b.offset.top,l=j+b.proportions.height;
switch(c){case "fit":return i<=e&&g<=k&&j<=f&&h<=l;case "intersect":return i<e+a.helperProportions.width/2&&g-a.helperProportions.width/2<k&&j<f+a.helperProportions.height/2&&h-a.helperProportions.height/2<l;case "pointer":return d.ui.isOver((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,j,i,b.proportions.height,b.proportions.width);case "touch":return(f>=j&&f<=l||h>=j&&h<=l||f<j&&h>l)&&(e>=
i&&e<=k||g>=i&&g<=k||e<i&&g>k);default:return false}};d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,b){var c=d.ui.ddmanager.droppables[a.options.scope]||[],e=b?b.type:null,g=(a.currentItem||a.element).find(":data(droppable)").andSelf(),f=0;a:for(;f<c.length;f++)if(!(c[f].options.disabled||a&&!c[f].accept.call(c[f].element[0],a.currentItem||a.element))){for(var h=0;h<g.length;h++)if(g[h]==c[f].element[0]){c[f].proportions.height=0;continue a}c[f].visible=c[f].element.css("display")!=
"none";if(c[f].visible){e=="mousedown"&&c[f]._activate.call(c[f],b);c[f].offset=c[f].element.offset();c[f].proportions={width:c[f].element[0].offsetWidth,height:c[f].element[0].offsetHeight}}}},drop:function(a,b){var c=false;d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance))c=c||this._drop.call(this,b);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||
a.element)){this.isout=1;this.isover=0;this._deactivate.call(this,b)}}});return c},drag:function(a,b){a.options.refreshPositions&&d.ui.ddmanager.prepareOffsets(a,b);d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var c=d.ui.intersect(a,this,this.options.tolerance);if(c=!c&&this.isover==1?"isout":c&&this.isover==0?"isover":null){var e;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){e=
d.data(g[0],"droppable");e.greedyChild=c=="isover"?1:0}}if(e&&c=="isover"){e.isover=0;e.isout=1;e._out.call(e,b)}this[c]=1;this[c=="isout"?"isover":"isout"]=0;this[c=="isover"?"_over":"_out"].call(this,b);if(e&&c=="isout"){e.isout=0;e.isover=1;e._over.call(e,b)}}}})}}})(jQuery);
;/*
 * jQuery UI Resizable 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.resizable",e.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var b=this,a=this.options;this.element.addClass("ui-resizable");e.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&e.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=a.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var c=this.handles.split(",");this.handles={};for(var d=0;d<c.length;d++){var f=e.trim(c[d]),g=e('<div class="ui-resizable-handle '+("ui-resizable-"+f)+'"></div>');/sw|se|ne|nw/.test(f)&&g.css({zIndex:++a.zIndex});"se"==f&&g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[f]=".ui-resizable-"+f;this.element.append(g)}}this._renderAxis=function(h){h=h||this.element;for(var i in this.handles){if(this.handles[i].constructor==
String)this.handles[i]=e(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var j=e(this.handles[i],this.element),k=0;k=/sw|ne|nw|se|n|s/.test(i)?j.outerHeight():j.outerWidth();j=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");h.css(j,k);this._proportionallyResize()}e(this.handles[i])}};this._renderAxis(this.element);this._handles=e(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!b.resizing){if(this.className)var h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=h&&h[1]?h[1]:"se"}});if(a.autoHide){this._handles.hide();e(this.element).addClass("ui-resizable-autohide").hover(function(){if(!a.disabled){e(this).removeClass("ui-resizable-autohide");b._handles.show()}},function(){if(!a.disabled)if(!b.resizing){e(this).addClass("ui-resizable-autohide");b._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();
var b=function(c){e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){b(this.element);var a=this.element;a.after(this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);b(this.originalElement);return this},_mouseCapture:function(b){var a=
false;for(var c in this.handles)if(e(this.handles[c])[0]==b.target)a=true;return!this.options.disabled&&a},_mouseStart:function(b){var a=this.options,c=this.element.position(),d=this.element;this.resizing=true;this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()};if(d.is(".ui-draggable")||/absolute/.test(d.css("position")))d.css({position:"absolute",top:c.top,left:c.left});e.browser.opera&&/relative/.test(d.css("position"))&&d.css({position:"relative",top:"auto",left:"auto"});
this._renderProxy();c=m(this.helper.css("left"));var f=m(this.helper.css("top"));if(a.containment){c+=e(a.containment).scrollLeft()||0;f+=e(a.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:c,top:f};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:c,top:f};this.sizeDiff=
{width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:b.pageX,top:b.pageY};this.aspectRatio=typeof a.aspectRatio=="number"?a.aspectRatio:this.originalSize.width/this.originalSize.height||1;a=e(".ui-resizable-"+this.axis).css("cursor");e("body").css("cursor",a=="auto"?this.axis+"-resize":a);d.addClass("ui-resizable-resizing");this._propagate("start",b);return true},_mouseDrag:function(b){var a=this.helper,c=this.originalMousePosition,d=this._change[this.axis];
if(!d)return false;c=d.apply(this,[b,b.pageX-c.left||0,b.pageY-c.top||0]);if(this._aspectRatio||b.shiftKey)c=this._updateRatio(c,b);c=this._respectSize(c,b);this._propagate("resize",b);a.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(c);this._trigger("resize",b,this.ui());return false},_mouseStop:function(b){this.resizing=
false;var a=this.options,c=this;if(this._helper){var d=this._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName);d=f&&e.ui.hasScroll(d[0],"left")?0:c.sizeDiff.height;f=f?0:c.sizeDiff.width;f={width:c.helper.width()-f,height:c.helper.height()-d};d=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null;var g=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;a.animate||this.element.css(e.extend(f,{top:g,left:d}));c.helper.height(c.size.height);
c.helper.width(c.size.width);this._helper&&!a.animate&&this._proportionallyResize()}e("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",b);this._helper&&this.helper.remove();return false},_updateCache:function(b){this.offset=this.helper.offset();if(l(b.left))this.position.left=b.left;if(l(b.top))this.position.top=b.top;if(l(b.height))this.size.height=b.height;if(l(b.width))this.size.width=b.width},_updateRatio:function(b){var a=this.position,c=this.size,
d=this.axis;if(b.height)b.width=c.height*this.aspectRatio;else if(b.width)b.height=c.width/this.aspectRatio;if(d=="sw"){b.left=a.left+(c.width-b.width);b.top=null}if(d=="nw"){b.top=a.top+(c.height-b.height);b.left=a.left+(c.width-b.width)}return b},_respectSize:function(b){var a=this.options,c=this.axis,d=l(b.width)&&a.maxWidth&&a.maxWidth<b.width,f=l(b.height)&&a.maxHeight&&a.maxHeight<b.height,g=l(b.width)&&a.minWidth&&a.minWidth>b.width,h=l(b.height)&&a.minHeight&&a.minHeight>b.height;if(g)b.width=
a.minWidth;if(h)b.height=a.minHeight;if(d)b.width=a.maxWidth;if(f)b.height=a.maxHeight;var i=this.originalPosition.left+this.originalSize.width,j=this.position.top+this.size.height,k=/sw|nw|w/.test(c);c=/nw|ne|n/.test(c);if(g&&k)b.left=i-a.minWidth;if(d&&k)b.left=i-a.maxWidth;if(h&&c)b.top=j-a.minHeight;if(f&&c)b.top=j-a.maxHeight;if((a=!b.width&&!b.height)&&!b.left&&b.top)b.top=null;else if(a&&!b.top&&b.left)b.left=null;return b},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var b=
this.helper||this.element,a=0;a<this._proportionallyResizeElements.length;a++){var c=this._proportionallyResizeElements[a];if(!this.borderDif){var d=[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],f=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];this.borderDif=e.map(d,function(g,h){g=parseInt(g,10)||0;h=parseInt(f[h],10)||0;return g+h})}e.browser.msie&&(e(b).is(":hidden")||e(b).parents(":hidden").length)||
c.css({height:b.height()-this.borderDif[0]-this.borderDif[2]||0,width:b.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var b=this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var a=e.browser.msie&&e.browser.version<7,c=a?1:0;a=a?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+a,height:this.element.outerHeight()+a,position:"absolute",left:this.elementOffset.left-
c+"px",top:this.elementOffset.top-c+"px",zIndex:++b.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(b,a){return{width:this.originalSize.width+a}},w:function(b,a){return{left:this.originalPosition.left+a,width:this.originalSize.width-a}},n:function(b,a,c){return{top:this.originalPosition.top+c,height:this.originalSize.height-c}},s:function(b,a,c){return{height:this.originalSize.height+c}},se:function(b,a,c){return e.extend(this._change.s.apply(this,
arguments),this._change.e.apply(this,[b,a,c]))},sw:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,a,c]))},ne:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},nw:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,a,c]))}},_propagate:function(b,a){e.ui.plugin.call(this,b,[a,this.ui()]);b!="resize"&&this._trigger(b,a,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,
element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});e.extend(e.ui.resizable,{version:"1.8.13"});e.ui.plugin.add("resizable","alsoResize",{start:function(){var b=e(this).data("resizable").options,a=function(c){e(c).each(function(){var d=e(this);d.data("resizable-alsoresize",{width:parseInt(d.width(),10),height:parseInt(d.height(),10),left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10),position:d.css("position")})})};
if(typeof b.alsoResize=="object"&&!b.alsoResize.parentNode)if(b.alsoResize.length){b.alsoResize=b.alsoResize[0];a(b.alsoResize)}else e.each(b.alsoResize,function(c){a(c)});else a(b.alsoResize)},resize:function(b,a){var c=e(this).data("resizable");b=c.options;var d=c.originalSize,f=c.originalPosition,g={height:c.size.height-d.height||0,width:c.size.width-d.width||0,top:c.position.top-f.top||0,left:c.position.left-f.left||0},h=function(i,j){e(i).each(function(){var k=e(this),q=e(this).data("resizable-alsoresize"),
p={},r=j&&j.length?j:k.parents(a.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(r,function(n,o){if((n=(q[o]||0)+(g[o]||0))&&n>=0)p[o]=n||null});if(e.browser.opera&&/relative/.test(k.css("position"))){c._revertToRelativePosition=true;k.css({position:"absolute",top:"auto",left:"auto"})}k.css(p)})};typeof b.alsoResize=="object"&&!b.alsoResize.nodeType?e.each(b.alsoResize,function(i,j){h(i,j)}):h(b.alsoResize)},stop:function(){var b=e(this).data("resizable"),a=b.options,
c=function(d){e(d).each(function(){var f=e(this);f.css({position:f.data("resizable-alsoresize").position})})};if(b._revertToRelativePosition){b._revertToRelativePosition=false;typeof a.alsoResize=="object"&&!a.alsoResize.nodeType?e.each(a.alsoResize,function(d){c(d)}):c(a.alsoResize)}e(this).removeData("resizable-alsoresize")}});e.ui.plugin.add("resizable","animate",{stop:function(b){var a=e(this).data("resizable"),c=a.options,d=a._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName),
g=f&&e.ui.hasScroll(d[0],"left")?0:a.sizeDiff.height;f={width:a.size.width-(f?0:a.sizeDiff.width),height:a.size.height-g};g=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var h=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;a.element.animate(e.extend(f,h&&g?{top:h,left:g}:{}),{duration:c.animateDuration,easing:c.animateEasing,step:function(){var i={width:parseInt(a.element.css("width"),10),height:parseInt(a.element.css("height"),
10),top:parseInt(a.element.css("top"),10),left:parseInt(a.element.css("left"),10)};d&&d.length&&e(d[0]).css({width:i.width,height:i.height});a._updateCache(i);a._propagate("resize",b)}})}});e.ui.plugin.add("resizable","containment",{start:function(){var b=e(this).data("resizable"),a=b.element,c=b.options.containment;if(a=c instanceof e?c.get(0):/parent/.test(c)?a.parent().get(0):c){b.containerElement=e(a);if(/document/.test(c)||c==document){b.containerOffset={left:0,top:0};b.containerPosition={left:0,
top:0};b.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}}else{var d=e(a),f=[];e(["Top","Right","Left","Bottom"]).each(function(i,j){f[i]=m(d.css("padding"+j))});b.containerOffset=d.offset();b.containerPosition=d.position();b.containerSize={height:d.innerHeight()-f[3],width:d.innerWidth()-f[1]};c=b.containerOffset;var g=b.containerSize.height,h=b.containerSize.width;h=e.ui.hasScroll(a,"left")?a.scrollWidth:h;
g=e.ui.hasScroll(a)?a.scrollHeight:g;b.parentData={element:a,left:c.left,top:c.top,width:h,height:g}}}},resize:function(b){var a=e(this).data("resizable"),c=a.options,d=a.containerOffset,f=a.position;b=a._aspectRatio||b.shiftKey;var g={top:0,left:0},h=a.containerElement;if(h[0]!=document&&/static/.test(h.css("position")))g=d;if(f.left<(a._helper?d.left:0)){a.size.width+=a._helper?a.position.left-d.left:a.position.left-g.left;if(b)a.size.height=a.size.width/c.aspectRatio;a.position.left=c.helper?d.left:
0}if(f.top<(a._helper?d.top:0)){a.size.height+=a._helper?a.position.top-d.top:a.position.top;if(b)a.size.width=a.size.height*c.aspectRatio;a.position.top=a._helper?d.top:0}a.offset.left=a.parentData.left+a.position.left;a.offset.top=a.parentData.top+a.position.top;c=Math.abs((a._helper?a.offset.left-g.left:a.offset.left-g.left)+a.sizeDiff.width);d=Math.abs((a._helper?a.offset.top-g.top:a.offset.top-d.top)+a.sizeDiff.height);f=a.containerElement.get(0)==a.element.parent().get(0);g=/relative|absolute/.test(a.containerElement.css("position"));
if(f&&g)c-=a.parentData.left;if(c+a.size.width>=a.parentData.width){a.size.width=a.parentData.width-c;if(b)a.size.height=a.size.width/a.aspectRatio}if(d+a.size.height>=a.parentData.height){a.size.height=a.parentData.height-d;if(b)a.size.width=a.size.height*a.aspectRatio}},stop:function(){var b=e(this).data("resizable"),a=b.options,c=b.containerOffset,d=b.containerPosition,f=b.containerElement,g=e(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width;g=g.outerHeight()-b.sizeDiff.height;b._helper&&
!a.animate&&/relative/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g});b._helper&&!a.animate&&/static/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g})}});e.ui.plugin.add("resizable","ghost",{start:function(){var b=e(this).data("resizable"),a=b.options,c=b.size;b.ghost=b.originalElement.clone();b.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost==
"string"?a.ghost:"");b.ghost.appendTo(b.helper)},resize:function(){var b=e(this).data("resizable");b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=e(this).data("resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}});e.ui.plugin.add("resizable","grid",{resize:function(){var b=e(this).data("resizable"),a=b.options,c=b.size,d=b.originalSize,f=b.originalPosition,g=b.axis;a.grid=typeof a.grid=="number"?[a.grid,a.grid]:a.grid;
var h=Math.round((c.width-d.width)/(a.grid[0]||1))*(a.grid[0]||1);a=Math.round((c.height-d.height)/(a.grid[1]||1))*(a.grid[1]||1);if(/^(se|s|e)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else if(/^(ne)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}else{if(/^(sw)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else{b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}b.position.left=f.left-h}}});var m=function(b){return parseInt(b,
10)||0},l=function(b){return!isNaN(parseInt(b,10))}})(jQuery);
;/*
 * jQuery UI Sortable 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.sortable",d.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){var a=this.options;this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?a.axis==="x"||/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData("sortable-item");return this},_setOption:function(a,b){if(a===
"disabled"){this.options[a]=b;this.widget()[b?"addClass":"removeClass"]("ui-sortable-disabled")}else d.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(a,b){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(a);var c=null,e=this;d(a.target).parents().each(function(){if(d.data(this,"sortable-item")==e){c=d(this);return false}});if(d.data(a.target,"sortable-item")==e)c=d(a.target);if(!c)return false;if(this.options.handle&&
!b){var f=false;d(this.options.handle,c).find("*").andSelf().each(function(){if(this==a.target)f=true});if(!f)return false}this.currentItem=c;this._removeCurrentsFromItems();return true},_mouseStart:function(a,b,c){b=this.options;var e=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(a);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,
left:this.offset.left-this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();b.containment&&this._setContainment();if(b.cursor){if(d("body").css("cursor"))this._storedCursor=d("body").css("cursor");d("body").css("cursor",b.cursor)}if(b.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",b.opacity)}if(b.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",b.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",a,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!c)for(c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("activate",a,e._uiHash(this));if(d.ui.ddmanager)d.ui.ddmanager.current=this;d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(a);
return true},_mouseDrag:function(a){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var b=this.options,c=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+b.scrollSpeed;else if(a.pageY-this.overflowOffset.top<
b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-b.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+b.scrollSpeed;else if(a.pageX-this.overflowOffset.left<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-b.scrollSpeed}else{if(a.pageY-d(document).scrollTop()<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()-
b.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()+b.scrollSpeed);if(a.pageX-d(document).scrollLeft()<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()-b.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()+b.scrollSpeed)}c!==false&&d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,
a)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(b=this.items.length-1;b>=0;b--){c=this.items[b];var e=c.item[0],f=this._intersectsWithPointer(c);if(f)if(e!=this.currentItem[0]&&this.placeholder[f==1?"next":"prev"]()[0]!=e&&!d.ui.contains(this.placeholder[0],e)&&(this.options.type=="semi-dynamic"?!d.ui.contains(this.element[0],
e):true)){this.direction=f==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(c))this._rearrange(a,c);else break;this._trigger("change",a,this._uiHash());break}}this._contactContainers(a);d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);this._trigger("sort",a,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(a,b){if(a){d.ui.ddmanager&&!this.options.dropBehaviour&&d.ui.ddmanager.drop(this,a);if(this.options.revert){var c=this;b=c.placeholder.offset();
c.reverting=true;d(this.helper).animate({left:b.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:b.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(a)})}else this._clear(a,b);return false}},cancel:function(){var a=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--){this.containers[b]._trigger("deactivate",null,a._uiHash(this));if(this.containers[b].containerCache.over){this.containers[b]._trigger("out",null,a._uiHash(this));this.containers[b].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();d.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};d(b).each(function(){var e=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);if(e)c.push((a.key||e[1]+"[]")+"="+(a.key&&a.expression?e[1]:e[2]))});!c.length&&a.key&&c.push(a.key+"=");return c.join("&")},
toArray:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};b.each(function(){c.push(d(a.item||this).attr(a.attribute||"id")||"")});return c},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,e=this.positionAbs.top,f=e+this.helperProportions.height,g=a.left,h=g+a.width,i=a.top,k=i+a.height,j=this.offset.click.top,l=this.offset.click.left;j=e+j>i&&e+j<k&&b+l>g&&b+l<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?j:g<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<h&&i<e+this.helperProportions.height/2&&f-this.helperProportions.height/2<k},_intersectsWithPointer:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);b=b&&a;a=this._getDragVerticalDirection();
var c=this._getDragHorizontalDirection();if(!b)return false;return this.floating?c&&c=="right"||a=="down"?2:1:a&&(a=="down"?2:1)},_intersectsWithSides:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width);var c=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?e=="right"&&a||e=="left"&&!a:c&&(c=="down"&&b||c=="up"&&!b)},
_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){this._refreshItems(a);this.refreshPositions();return this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(a){var b=[],c=[],e=this._connectWith();
if(e&&a)for(a=e.length-1;a>=0;a--)for(var f=d(e[a]),g=f.length-1;g>=0;g--){var h=d.data(f[g],"sortable");if(h&&h!=this&&!h.options.disabled)c.push([d.isFunction(h.options.items)?h.options.items.call(h.element):d(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}c.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(a=c.length-1;a>=0;a--)c[a][0].each(function(){b.push(this)});return d(b)},_removeCurrentsFromItems:function(){for(var a=this.currentItem.find(":data(sortable-item)"),b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(a){this.items=[];this.containers=[this];var b=this.items,c=[[d.isFunction(this.options.items)?this.options.items.call(this.element[0],a,{item:this.currentItem}):d(this.options.items,this.element),
this]],e=this._connectWith();if(e)for(var f=e.length-1;f>=0;f--)for(var g=d(e[f]),h=g.length-1;h>=0;h--){var i=d.data(g[h],"sortable");if(i&&i!=this&&!i.options.disabled){c.push([d.isFunction(i.options.items)?i.options.items.call(i.element[0],a,{item:this.currentItem}):d(i.options.items,i.element),i]);this.containers.push(i)}}for(f=c.length-1;f>=0;f--){a=c[f][1];e=c[f][0];h=0;for(g=e.length;h<g;h++){i=d(e[h]);i.data("sortable-item",a);b.push({item:i,instance:a,width:0,height:0,left:0,top:0})}}},refreshPositions:function(a){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var b=this.items.length-1;b>=0;b--){var c=this.items[b];if(!(c.instance!=this.currentContainer&&this.currentContainer&&c.item[0]!=this.currentItem[0])){var e=this.options.toleranceElement?d(this.options.toleranceElement,c.item):c.item;if(!a){c.width=e.outerWidth();c.height=e.outerHeight()}e=e.offset();c.left=e.left;c.top=e.top}}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(b=
this.containers.length-1;b>=0;b--){e=this.containers[b].element.offset();this.containers[b].containerCache.left=e.left;this.containers[b].containerCache.top=e.top;this.containers[b].containerCache.width=this.containers[b].element.outerWidth();this.containers[b].containerCache.height=this.containers[b].element.outerHeight()}return this},_createPlaceholder:function(a){var b=a||this,c=b.options;if(!c.placeholder||c.placeholder.constructor==String){var e=c.placeholder;c.placeholder={element:function(){var f=
d(document.createElement(b.currentItem[0].nodeName)).addClass(e||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!e)f.style.visibility="hidden";return f},update:function(f,g){if(!(e&&!c.forcePlaceholderSize)){g.height()||g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));g.width()||g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||
0,10))}}}}b.placeholder=d(c.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);c.placeholder.update(b,b.placeholder)},_contactContainers:function(a){for(var b=null,c=null,e=this.containers.length-1;e>=0;e--)if(!d.ui.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(!(b&&d.ui.contains(this.containers[e].element[0],b.element[0]))){b=this.containers[e];c=e}}else if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",
a,this._uiHash(this));this.containers[e].containerCache.over=0}if(b)if(this.containers.length===1){this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}else if(this.currentContainer!=this.containers[c]){b=1E4;e=null;for(var f=this.positionAbs[this.containers[c].floating?"left":"top"],g=this.items.length-1;g>=0;g--)if(d.ui.contains(this.containers[c].element[0],this.items[g].item[0])){var h=this.items[g][this.containers[c].floating?"left":"top"];if(Math.abs(h-
f)<b){b=Math.abs(h-f);e=this.items[g]}}if(e||this.options.dropOnEmpty){this.currentContainer=this.containers[c];e?this._rearrange(a,e,null,true):this._rearrange(a,null,this.containers[c].element,true);this._trigger("change",a,this._uiHash());this.containers[c]._trigger("change",a,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}}},_createHelper:function(a){var b=
this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a,this.currentItem])):b.helper=="clone"?this.currentItem.clone():this.currentItem;a.parents("body").length||d(b.appendTo!="parent"?b.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]);if(a[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(a[0].style.width==
""||b.forceHelperSize)a.width(this.currentItem.width());if(a[0].style.height==""||b.forceHelperSize)a.height(this.currentItem.height());return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=
this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a=
{top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),
10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)){var b=d(a.containment)[0];a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),
10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(a,b){if(!b)b=
this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&
this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();
var f=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])f=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])f=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-
this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;f=this.originalPageX+Math.round((f-this.originalPageX)/b.grid[0])*b.grid[0];f=this.containment?!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:!(f-this.offset.click.left<this.containment[0])?f-b.grid[0]:f+b.grid[0]:f}}return{top:g-
this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())}},_rearrange:function(a,b,c,e){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],
this.direction=="down"?b.item[0]:b.item[0].nextSibling);this.counter=this.counter?++this.counter:1;var f=this,g=this.counter;window.setTimeout(function(){g==f.counter&&f.refreshPositions(!e)},0)},_clear:function(a,b){this.reverting=false;var c=[];!this._noFinalSort&&this.currentItem[0].parentNode&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS)if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static")this._storedCSS[e]=
"";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();this.fromOutside&&!b&&c.push(function(f){this._trigger("receive",f,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!b)c.push(function(f){this._trigger("update",f,this._uiHash())});if(!d.ui.contains(this.element[0],this.currentItem[0])){b||c.push(function(f){this._trigger("remove",
f,this._uiHash())});for(e=this.containers.length-1;e>=0;e--)if(d.ui.contains(this.containers[e].element[0],this.currentItem[0])&&!b){c.push(function(f){return function(g){f._trigger("receive",g,this._uiHash(this))}}.call(this,this.containers[e]));c.push(function(f){return function(g){f._trigger("update",g,this._uiHash(this))}}.call(this,this.containers[e]))}}for(e=this.containers.length-1;e>=0;e--){b||c.push(function(f){return function(g){f._trigger("deactivate",g,this._uiHash(this))}}.call(this,
this.containers[e]));if(this.containers[e].containerCache.over){c.push(function(f){return function(g){f._trigger("out",g,this._uiHash(this))}}.call(this,this.containers[e]));this.containers[e].containerCache.over=0}}this._storedCursor&&d("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",
a,this._uiHash());for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}return false}b||this._trigger("beforeStop",a,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!b){for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){d.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},
_uiHash:function(a){var b=a||this;return{helper:b.helper,placeholder:b.placeholder||d([]),position:b.position,originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:a?a.element:null}}});d.extend(d.ui.sortable,{version:"1.8.13"})})(jQuery);
;/*
 * jQuery UI Slider 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.slider",d.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var b=this,a=this.options,c=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f=a.values&&a.values.length||1,e=[];this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+
this.orientation+" ui-widget ui-widget-content ui-corner-all"+(a.disabled?" ui-slider-disabled ui-disabled":""));this.range=d([]);if(a.range){if(a.range===true){if(!a.values)a.values=[this._valueMin(),this._valueMin()];if(a.values.length&&a.values.length!==2)a.values=[a.values[0],a.values[0]]}this.range=d("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(a.range==="min"||a.range==="max"?" ui-slider-range-"+a.range:""))}for(var j=c.length;j<f;j+=1)e.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
this.handles=c.add(d(e.join("")).appendTo(b.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(g){g.preventDefault()}).hover(function(){a.disabled||d(this).addClass("ui-state-hover")},function(){d(this).removeClass("ui-state-hover")}).focus(function(){if(a.disabled)d(this).blur();else{d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");d(this).addClass("ui-state-focus")}}).blur(function(){d(this).removeClass("ui-state-focus")});this.handles.each(function(g){d(this).data("index.ui-slider-handle",
g)});this.handles.keydown(function(g){var k=true,l=d(this).data("index.ui-slider-handle"),i,h,m;if(!b.options.disabled){switch(g.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:k=false;if(!b._keySliding){b._keySliding=true;d(this).addClass("ui-state-active");i=b._start(g,l);if(i===false)return}break}m=b.options.step;i=b.options.values&&b.options.values.length?
(h=b.values(l)):(h=b.value());switch(g.keyCode){case d.ui.keyCode.HOME:h=b._valueMin();break;case d.ui.keyCode.END:h=b._valueMax();break;case d.ui.keyCode.PAGE_UP:h=b._trimAlignValue(i+(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(i-(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(i===b._valueMax())return;h=b._trimAlignValue(i+m);break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(i===b._valueMin())return;h=b._trimAlignValue(i-
m);break}b._slide(g,l,h);return k}}).keyup(function(g){var k=d(this).data("index.ui-slider-handle");if(b._keySliding){b._keySliding=false;b._stop(g,k);b._change(g,k);d(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();
return this},_mouseCapture:function(b){var a=this.options,c,f,e,j,g;if(a.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c=this._normValueFromMouse({x:b.pageX,y:b.pageY});f=this._valueMax()-this._valueMin()+1;j=this;this.handles.each(function(k){var l=Math.abs(c-j.values(k));if(f>l){f=l;e=d(this);g=k}});if(a.range===true&&this.values(1)===a.min){g+=1;e=d(this.handles[g])}if(this._start(b,g)===false)return false;
this._mouseSliding=true;j._handleIndex=g;e.addClass("ui-state-active").focus();a=e.offset();this._clickOffset=!d(b.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:b.pageX-a.left-e.width()/2,top:b.pageY-a.top-e.height()/2-(parseInt(e.css("borderTopWidth"),10)||0)-(parseInt(e.css("borderBottomWidth"),10)||0)+(parseInt(e.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(b,g,c);return this._animateOff=true},_mouseStart:function(){return true},_mouseDrag:function(b){var a=
this._normValueFromMouse({x:b.pageX,y:b.pageY});this._slide(b,this._handleIndex,a);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(b){var a;if(this.orientation==="horizontal"){a=
this.elementSize.width;b=b.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{a=this.elementSize.height;b=b.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}a=b/a;if(a>1)a=1;if(a<0)a=0;if(this.orientation==="vertical")a=1-a;b=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+a*b)},_start:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);
c.values=this.values()}return this._trigger("start",b,c)},_slide:function(b,a,c){var f;if(this.options.values&&this.options.values.length){f=this.values(a?0:1);if(this.options.values.length===2&&this.options.range===true&&(a===0&&c>f||a===1&&c<f))c=f;if(c!==this.values(a)){f=this.values();f[a]=c;b=this._trigger("slide",b,{handle:this.handles[a],value:c,values:f});this.values(a?0:1);b!==false&&this.values(a,c,true)}}else if(c!==this.value()){b=this._trigger("slide",b,{handle:this.handles[a],value:c});
b!==false&&this.value(c)}},_stop:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("stop",b,c)},_change:function(b,a){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("change",b,c)}},value:function(b){if(arguments.length){this.options.value=
this._trimAlignValue(b);this._refreshValue();this._change(null,0)}else return this._value()},values:function(b,a){var c,f,e;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(a);this._refreshValue();this._change(null,b)}else if(arguments.length)if(d.isArray(arguments[0])){c=this.options.values;f=arguments[0];for(e=0;e<c.length;e+=1){c[e]=this._trimAlignValue(f[e]);this._change(null,e)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(b):
this.value();else return this._values()},_setOption:function(b,a){var c,f=0;if(d.isArray(this.options.values))f=this.options.values.length;d.Widget.prototype._setOption.apply(this,arguments);switch(b){case "disabled":if(a){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(c=0;c<f;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var b=this.options.value;return b=this._trimAlignValue(b)},_values:function(b){var a,c;if(arguments.length){a=this.options.values[b];
return a=this._trimAlignValue(a)}else{a=this.options.values.slice();for(c=0;c<a.length;c+=1)a[c]=this._trimAlignValue(a[c]);return a}},_trimAlignValue:function(b){if(b<=this._valueMin())return this._valueMin();if(b>=this._valueMax())return this._valueMax();var a=this.options.step>0?this.options.step:1,c=(b-this._valueMin())%a;alignValue=b-c;if(Math.abs(c)*2>=a)alignValue+=c>0?a:-a;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var b=this.options.range,a=this.options,c=this,f=!this._animateOff?a.animate:false,e,j={},g,k,l,i;if(this.options.values&&this.options.values.length)this.handles.each(function(h){e=(c.values(h)-c._valueMin())/(c._valueMax()-c._valueMin())*100;j[c.orientation==="horizontal"?"left":"bottom"]=e+"%";d(this).stop(1,1)[f?"animate":"css"](j,a.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(h===0)c.range.stop(1,1)[f?"animate":"css"]({left:e+"%"},a.animate);
if(h===1)c.range[f?"animate":"css"]({width:e-g+"%"},{queue:false,duration:a.animate})}else{if(h===0)c.range.stop(1,1)[f?"animate":"css"]({bottom:e+"%"},a.animate);if(h===1)c.range[f?"animate":"css"]({height:e-g+"%"},{queue:false,duration:a.animate})}g=e});else{k=this.value();l=this._valueMin();i=this._valueMax();e=i!==l?(k-l)/(i-l)*100:0;j[c.orientation==="horizontal"?"left":"bottom"]=e+"%";this.handle.stop(1,1)[f?"animate":"css"](j,a.animate);if(b==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[f?"animate":"css"]({width:e+"%"},a.animate);if(b==="max"&&this.orientation==="horizontal")this.range[f?"animate":"css"]({width:100-e+"%"},{queue:false,duration:a.animate});if(b==="min"&&this.orientation==="vertical")this.range.stop(1,1)[f?"animate":"css"]({height:e+"%"},a.animate);if(b==="max"&&this.orientation==="vertical")this.range[f?"animate":"css"]({height:100-e+"%"},{queue:false,duration:a.animate})}}});d.extend(d.ui.slider,{version:"1.8.13"})})(jQuery);
;/*
 * jQuery UI Tabs 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(d,p){function u(){return++v}function w(){return++x}var v=0,x=0;d.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(b,e){if(b=="selected")this.options.collapsible&&
e==this.options.selected||this.select(e);else{this.options[b]=e;this._tabify()}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+u()},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+w());return d.cookie.apply(null,[b].concat(d.makeArray(arguments)))},_ui:function(b,e){return{tab:b,panel:e,index:this.anchors.index(b)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=
d(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(b){function e(g,f){g.css("display","");!d.support.opacity&&f.opacity&&g[0].style.removeAttribute("filter")}var a=this,c=this.options,h=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=d(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return d("a",this)[0]});this.panels=d([]);this.anchors.each(function(g,f){var i=d(f).attr("href"),l=i.split("#")[0],q;if(l&&(l===location.toString().split("#")[0]||
(q=d("base")[0])&&l===q.href)){i=f.hash;f.href=i}if(h.test(i))a.panels=a.panels.add(a.element.find(a._sanitizeSelector(i)));else if(i&&i!=="#"){d.data(f,"href.tabs",i);d.data(f,"load.tabs",i.replace(/#.*$/,""));i=a._tabId(f);f.href="#"+i;f=a.element.find("#"+i);if(!f.length){f=d(c.panelTemplate).attr("id",i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g-1]||a.list);f.data("destroy.tabs",true)}a.panels=a.panels.add(f)}else c.disabled.push(g)});if(b){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(c.selected===p){location.hash&&this.anchors.each(function(g,f){if(f.hash==location.hash){c.selected=g;return false}});if(typeof c.selected!=="number"&&c.cookie)c.selected=parseInt(a._cookie(),10);if(typeof c.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)c.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));c.selected=c.selected||(this.lis.length?0:-1)}else if(c.selected===null)c.selected=-1;c.selected=c.selected>=0&&this.anchors[c.selected]||c.selected<0?c.selected:0;c.disabled=d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"),function(g){return a.lis.index(g)}))).sort();d.inArray(c.selected,c.disabled)!=-1&&c.disabled.splice(d.inArray(c.selected,c.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(c.selected>=0&&this.anchors.length){a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active");a.element.queue("tabs",function(){a._trigger("show",null,a._ui(a.anchors[c.selected],a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash))[0]))});this.load(c.selected)}d(window).bind("unload",function(){a.lis.add(a.anchors).unbind(".tabs");a.lis=a.anchors=a.panels=null})}else c.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[c.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");c.cookie&&this._cookie(c.selected,c.cookie);b=0;for(var j;j=this.lis[b];b++)d(j)[d.inArray(b,c.disabled)!=-1&&!d(j).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");c.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(c.event!=="mouseover"){var k=function(g,f){f.is(":not(.ui-state-disabled)")&&f.addClass("ui-state-"+g)},n=function(g,f){f.removeClass("ui-state-"+
g)};this.lis.bind("mouseover.tabs",function(){k("hover",d(this))});this.lis.bind("mouseout.tabs",function(){n("hover",d(this))});this.anchors.bind("focus.tabs",function(){k("focus",d(this).closest("li"))});this.anchors.bind("blur.tabs",function(){n("focus",d(this).closest("li"))})}var m,o;if(c.fx)if(d.isArray(c.fx)){m=c.fx[0];o=c.fx[1]}else m=o=c.fx;var r=o?function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",
function(){e(f,o);a._trigger("show",null,a._ui(g,f[0]))})}:function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");a._trigger("show",null,a._ui(g,f[0]))},s=m?function(g,f){f.animate(m,m.duration||"normal",function(){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");e(f,m);a.element.dequeue("tabs")})}:function(g,f){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");a.element.dequeue("tabs")};
this.anchors.bind(c.event+".tabs",function(){var g=this,f=d(g).closest("li"),i=a.panels.filter(":not(.ui-tabs-hide)"),l=a.element.find(a._sanitizeSelector(g.hash));if(f.hasClass("ui-tabs-selected")&&!c.collapsible||f.hasClass("ui-state-disabled")||f.hasClass("ui-state-processing")||a.panels.filter(":animated").length||a._trigger("select",null,a._ui(this,l[0]))===false){this.blur();return false}c.selected=a.anchors.index(this);a.abort();if(c.collapsible)if(f.hasClass("ui-tabs-selected")){c.selected=
-1;c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){s(g,i)}).dequeue("tabs");this.blur();return false}else if(!i.length){c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this));this.blur();return false}c.cookie&&a._cookie(c.selected,c.cookie);if(l.length){i.length&&a.element.queue("tabs",function(){s(g,i)});a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
d.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(b){if(typeof b=="string")b=this.anchors.index(this.anchors.filter("[href$="+b+"]"));return b},destroy:function(){var b=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var e=
d.data(this,"href.tabs");if(e)this.href=e;var a=d(this).unbind(".tabs");d.each(["href","load","cache"],function(c,h){a.removeData(h+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){d.data(this,"destroy.tabs")?d(this).remove():d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});b.cookie&&this._cookie(null,b.cookie);return this},add:function(b,
e,a){if(a===p)a=this.anchors.length;var c=this,h=this.options;e=d(h.tabTemplate.replace(/#\{href\}/g,b).replace(/#\{label\}/g,e));b=!b.indexOf("#")?b.replace("#",""):this._tabId(d("a",e)[0]);e.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var j=c.element.find("#"+b);j.length||(j=d(h.panelTemplate).attr("id",b).data("destroy.tabs",true));j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(a>=this.lis.length){e.appendTo(this.list);j.appendTo(this.list[0].parentNode)}else{e.insertBefore(this.lis[a]);
j.insertBefore(this.panels[a])}h.disabled=d.map(h.disabled,function(k){return k>=a?++k:k});this._tabify();if(this.anchors.length==1){h.selected=0;e.addClass("ui-tabs-selected ui-state-active");j.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){c._trigger("show",null,c._ui(c.anchors[0],c.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[a],this.panels[a]));return this},remove:function(b){b=this._getIndex(b);var e=this.options,a=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();
if(a.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(b+(b+1<this.anchors.length?1:-1));e.disabled=d.map(d.grep(e.disabled,function(h){return h!=b}),function(h){return h>=b?--h:h});this._tabify();this._trigger("remove",null,this._ui(a.find("a")[0],c[0]));return this},enable:function(b){b=this._getIndex(b);var e=this.options;if(d.inArray(b,e.disabled)!=-1){this.lis.eq(b).removeClass("ui-state-disabled");e.disabled=d.grep(e.disabled,function(a){return a!=b});this._trigger("enable",null,
this._ui(this.anchors[b],this.panels[b]));return this}},disable:function(b){b=this._getIndex(b);var e=this.options;if(b!=e.selected){this.lis.eq(b).addClass("ui-state-disabled");e.disabled.push(b);e.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[b],this.panels[b]))}return this},select:function(b){b=this._getIndex(b);if(b==-1)if(this.options.collapsible&&this.options.selected!=-1)b=this.options.selected;else return this;this.anchors.eq(b).trigger(this.options.event+".tabs");return this},
load:function(b){b=this._getIndex(b);var e=this,a=this.options,c=this.anchors.eq(b)[0],h=d.data(c,"load.tabs");this.abort();if(!h||this.element.queue("tabs").length!==0&&d.data(c,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(b).addClass("ui-state-processing");if(a.spinner){var j=d("span",c);j.data("label.tabs",j.html()).html(a.spinner)}this.xhr=d.ajax(d.extend({},a.ajaxOptions,{url:h,success:function(k,n){e.element.find(e._sanitizeSelector(c.hash)).html(k);e._cleanup();a.cache&&d.data(c,
"cache.tabs",true);e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.success(k,n)}catch(m){}},error:function(k,n){e._cleanup();e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.error(k,n,b,c)}catch(m){}}}));e.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(b,e){this.anchors.eq(b).removeData("cache.tabs").data("load.tabs",e);return this},length:function(){return this.anchors.length}});d.extend(d.ui.tabs,{version:"1.8.13"});d.extend(d.ui.tabs.prototype,{rotation:null,rotate:function(b,e){var a=this,c=this.options,h=a._rotate||(a._rotate=function(j){clearTimeout(a.rotation);a.rotation=setTimeout(function(){var k=c.selected;a.select(++k<a.anchors.length?k:0)},b);j&&j.stopPropagation()});e=a._unrotate||(a._unrotate=!e?function(j){j.clientX&&
a.rotate(null)}:function(){t=c.selected;h()});if(b){this.element.bind("tabsshow",h);this.anchors.bind(c.event+".tabs",e);h()}else{clearTimeout(a.rotation);this.element.unbind("tabsshow",h);this.anchors.unbind(c.event+".tabs",e);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
;/*
 * jQuery UI Effects 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(f,j){function m(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return n.transparent;return n[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return m(b)}function o(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function p(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function l(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=m(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var n={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},q=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
d){if(f.isFunction(b)){d=b;b=null}return this.queue(function(){var e=f(this),g=e.attr("style")||" ",h=p(o.call(this)),r,v=e.attr("class");f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});r=p(o.call(this));e.attr("class",v);e.animate(u(h,r),{queue:false,duration:a,easding:b,complete:function(){f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments);f.dequeue(this)}})})};
f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,a):f.effects.animateClass.apply(this,
[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.13",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,a){var b;switch(c[0]){case "top":b=
0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});
c.wrap(b);b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(d,e){a[e]=c.css(e);if(isNaN(parseInt(a[e],10)))a[e]="auto"});c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return b.css(a).show()},removeWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent().replaceWith(c);return c},setTransition:function(c,
a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});return d.call(this,b)},_show:f.fn.show,show:function(c){if(l(c))return this._show.apply(this,arguments);else{var a=k.apply(this,arguments);
a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(l(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(l(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),b=[];f.each(["em","px","%",
"pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,a,b,d,e){return d*
((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,a,b,d,e){if((a/=
e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==e)return b+d;if((a/=
e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/
h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);if(a<1)return-0.5*
h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,a,b,d,e){return d-f.easing.easeOutBounce(c,
e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;/*
 * jQuery UI Effects Highlight 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.highlight=function(c){return this.queue(function(){var a=b(this),e=["backgroundImage","backgroundColor","opacity"],d=b.effects.setMode(a,c.options.mode||"show"),f={backgroundColor:a.css("backgroundColor")};if(d=="hide")f.opacity=0;b.effects.save(a,e);a.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(f,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){d=="hide"&&a.hide();b.effects.restore(a,e);d=="show"&&!b.support.opacity&&
this.style.removeAttribute("filter");c.callback&&c.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Transfer 1.8.13
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.transfer=function(a){return this.queue(function(){var b=e(this),c=e(a.options.to),d=c.offset();c={top:d.top,left:d.left,height:c.innerHeight(),width:c.innerWidth()};d=b.offset();var f=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({top:d.top,left:d.left,height:b.innerHeight(),width:b.innerWidth(),position:"absolute"}).animate(c,a.duration,a.options.easing,function(){f.remove();a.callback&&a.callback.apply(b[0],arguments);
b.dequeue()})})}})(jQuery);
;

;/*
 * IFrame Loader Plugin for JQuery
 * - Notifies your event handler when iframe has finished loading
 * - Your event handler receives loading duration (as well as iframe)
 * - Optionally calls your timeout handler
 *
 * http://project.ajaxpatterns.org/jquery-iframe
 *
 * The MIT License
 *
 * Copyright (c) 2009, Michael Mahemoff
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function($) {

  var timer;

  $.fn.src = function(url, onLoad, options) {
    setIFrames($(this), onLoad, options, function() {
      this.src = url;
    });
    return $(this);
  }

  $.fn.squirt = function(content, onLoad, options) {

    setIFrames($(this), onLoad, options, function() {
      var doc = this.contentDocument || this.contentWindow.document;
      doc.open();
      doc.writeln(content);
      doc.close();
    });
    return this;

  }

  function setIFrames(iframes, onLoad, options, iFrameSetter) {
    iframes.each(function() {
      if (this.tagName=="IFRAME") setIFrame(this, onLoad, options, iFrameSetter);
    });
  }

  function setIFrame(iframe, onLoad, options, iFrameSetter) {

    var iframe;
    iframe.onload = null;
    if (timer) clearTimeout(timer);

    var defaults = {
      timeoutDuration: 0,
      timeout: null,
    }
    var opts = $.extend(defaults, options);
    if (opts.timeout && !opts.timeoutDuration) opts.timeoutDuration = 60000;

    opts.frameactive = true;
    var startTime = (new Date()).getTime();
    if (opts.timeout) {
      var timer = setTimeout(function() {
        opts.frameactive=false; 
        iframe.onload=null;
        if (opts.timeout) opts.timeout(iframe, opts.timeout);
      }, opts.timeoutDuration);
    };

    var onloadHandler = function() {
      var duration=(new Date()).getTime()-startTime;
      if (timer) clearTimeout(timer);
      if (onLoad && opts.frameactive) onLoad.apply(iframe,[duration]);
      opts.frameactive=false;
    }
    iFrameSetter.apply(iframe);
    iframe.onload = onloadHandler;
    opts.completeReadyStateChanges=0;
    iframe.onreadystatechange = function() { // IE ftw
	    if (++(opts.completeReadyStateChanges)==3) onloadHandler();
    }

    return iframe;

  };

})(jQuery);


;(function(a,b,c){function E(b,g){function w(a){var b=a.precedance==="y",c=n[b?"width":"height"],d=n[b?"height":"width"],e=a.string().indexOf("center")>-1,f=c*(e?.5:1),g=Math.pow,h=Math.round,i,j,k,l=Math.sqrt(g(f,2)+g(d,2)),m=[p/f*l,p/d*l];m[2]=Math.sqrt(g(m[0],2)-g(p,2));m[3]=Math.sqrt(g(m[1],2)-g(p,2));i=l+m[2]+m[3]+(e?0:m[0]);j=i/l;k=[h(j*d),h(j*c)];return{height:k[b?0:1],width:k[b?1:0]}}function v(b){var c=k.titlebar&&b.y==="top",d=c?k.titlebar:k.content,e=a.browser.mozilla,f=e?"-moz-":a.browser.webkit?"-webkit-":"",g=b.y+(e?"":"-")+b.x,h=f+(e?"border-radius-"+g:"border-"+g+"-radius");return parseInt(d.css(h),10)||parseInt(l.css(h),10)||0}function u(a,b,c){b=!b?a[a.precedance]:b;var d=l.hasClass(r),e=k.titlebar&&a.y==="top",f=e?k.titlebar:k.content,g="border-"+b+"-width",h;l.addClass(r);h=parseInt(f.css(g),10);h=(c?h||parseInt(l.css(g),10):h)||0;l.toggleClass(r,d);return h}function t(a,f,g,h){if(!k.tip){return}var l=i.corner.clone(),n=g.adjusted,o=b.options.position.adjust.method.split(" "),p=o[0],q=o[1]||o[0],r={left:e,top:e,x:0,y:0},s,t={},u;if(i.corner.fixed!==d){if(p==="shift"&&l.precedance==="x"&&n.left&&l.y!=="center"){l.precedance=l.precedance==="x"?"y":"x"}else if(p==="flip"&&n.left){l.x=l.x==="center"?n.left>0?"left":"right":l.x==="left"?"right":"left"}if(q==="shift"&&l.precedance==="y"&&n.top&&l.x!=="center"){l.precedance=l.precedance==="y"?"x":"y"}else if(q==="flip"&&n.top){l.y=l.y==="center"?n.top>0?"top":"bottom":l.y==="top"?"bottom":"top"}if(l.string()!==m.corner.string()&&(m.top!==n.top||m.left!==n.left)){i.update(l,e)}}s=i.position(l,n);if(s.right!==c){s.left=-s.right}if(s.bottom!==c){s.top=-s.bottom}s.user=Math.max(0,j.offset);if(r.left=p==="shift"&&!!n.left){if(l.x==="center"){t["margin-left"]=r.x=s["margin-left"]-n.left}else{u=s.right!==c?[n.left,-s.left]:[-n.left,s.left];if((r.x=Math.max(u[0],u[1]))>u[0]){g.left-=n.left;r.left=e}t[s.right!==c?"right":"left"]=r.x}}if(r.top=q==="shift"&&!!n.top){if(l.y==="center"){t["margin-top"]=r.y=s["margin-top"]-n.top}else{u=s.bottom!==c?[n.top,-s.top]:[-n.top,s.top];if((r.y=Math.max(u[0],u[1]))>u[0]){g.top-=n.top;r.top=e}t[s.bottom!==c?"bottom":"top"]=r.y}}k.tip.css(t).toggle(!(r.x&&r.y||l.x==="center"&&r.y||l.y==="center"&&r.x));g.left-=s.left.charAt?s.user:p!=="shift"||r.top||!r.left&&!r.top?s.left:0;g.top-=s.top.charAt?s.user:q!=="shift"||r.left||!r.left&&!r.top?s.top:0;m.left=n.left;m.top=n.top;m.corner=l.clone()}var i=this,j=b.options.style.tip,k=b.elements,l=k.tooltip,m={top:0,left:0},n={width:j.width,height:j.height},o={},p=j.border||0,q=".qtip-tip",s=!!(a("<canvas />")[0]||{}).getContext;i.corner=f;i.mimic=f;i.border=p;i.offset=j.offset;i.size=n;b.checks.tip={"^position.my|style.tip.(corner|mimic|border)$":function(){if(!i.init()){i.destroy()}b.reposition()},"^style.tip.(height|width)$":function(){n={width:j.width,height:j.height};i.create();i.update();b.reposition()},"^content.title.text|style.(classes|widget)$":function(){if(k.tip){i.update()}}};a.extend(i,{init:function(){var b=i.detectCorner()&&(s||a.browser.msie);if(b){i.create();i.update();l.unbind(q).bind("tooltipmove"+q,t)}return b},detectCorner:function(){var a=j.corner,c=b.options.position,f=c.at,g=c.my.string?c.my.string():c.my;if(a===e||g===e&&f===e){return e}else{if(a===d){i.corner=new h.Corner(g)}else if(!a.string){i.corner=new h.Corner(a);i.corner.fixed=d}}m.corner=new h.Corner(i.corner.string());return i.corner.string()!=="centercenter"},detectColours:function(c){var d,e,f,g=k.tip.css("cssText",""),h=c||i.corner,m=h[h.precedance],p="border-"+m+"-color",q="border"+m.charAt(0)+m.substr(1)+"Color",s=/rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,t="background-color",u="transparent",v=" !important",w=a(document.body).css("color"),x=b.elements.content.css("color"),y=k.titlebar&&(h.y==="top"||h.y==="center"&&g.position().top+n.height/2+j.offset<k.titlebar.outerHeight(1)),z=y?k.titlebar:k.content;l.addClass(r);o.fill=e=g.css(t);o.border=f=g[0].style[q]||g.css(p)||l.css(p);if(!e||s.test(e)){o.fill=z.css(t)||u;if(s.test(o.fill)){o.fill=l.css(t)||e}}if(!f||s.test(f)||f===w){o.border=z.css(p)||u;if(s.test(o.border)){o.border=f}}a("*",g).add(g).css("cssText",t+":"+u+v+";border:0"+v+";");l.removeClass(r)},create:function(){var b=n.width,c=n.height,d;if(k.tip){k.tip.remove()}k.tip=a("<div />",{"class":"ui-tooltip-tip"}).css({width:b,height:c}).prependTo(l);if(s){a("<canvas />").appendTo(k.tip)[0].getContext("2d").save()}else{d='<vml:shape coordorigin="0,0" style="display:inline-block; position:absolute; behavior:url(#default#VML);"></vml:shape>';k.tip.html(d+d);a("*",k.tip).bind("click mousedown",function(a){a.stopPropagation()})}},update:function(b,c){var g=k.tip,l=g.children(),q=n.width,r=n.height,t="px solid ",v="px dashed transparent",x=j.mimic,y=Math.round,z,A,B,C,E;if(!b){b=m.corner||i.corner}if(x===e){x=b}else{x=new h.Corner(x);x.precedance=b.precedance;if(x.x==="inherit"){x.x=b.x}else if(x.y==="inherit"){x.y=b.y}else if(x.x===x.y){x[b.precedance]=b[b.precedance]}}z=x.precedance;i.detectColours(b);if(o.border!=="transparent"&&o.border!=="#123456"){p=u(b,f,d);if(j.border===0&&p>0){o.fill=o.border}i.border=p=j.border!==d?j.border:p}else{i.border=p=0}B=D(x,q,r);i.size=E=w(b);g.css(E);if(b.precedance==="y"){C=[y(x.x==="left"?p:x.x==="right"?E.width-q-p:(E.width-q)/2),y(x.y==="top"?E.height-r:0)]}else{C=[y(x.x==="left"?E.width-q:0),y(x.y==="top"?p:x.y==="bottom"?E.height-r-p:(E.height-r)/2)]}if(s){l.attr(E);A=l[0].getContext("2d");A.restore();A.save();A.clearRect(0,0,3e3,3e3);A.translate(C[0],C[1]);A.beginPath();A.moveTo(B[0][0],B[0][1]);A.lineTo(B[1][0],B[1][1]);A.lineTo(B[2][0],B[2][1]);A.closePath();A.fillStyle=o.fill;A.strokeStyle=o.border;A.lineWidth=p*2;A.lineJoin="miter";A.miterLimit=100;if(p){A.stroke()}A.fill()}else{B="m"+B[0][0]+","+B[0][1]+" l"+B[1][0]+","+B[1][1]+" "+B[2][0]+","+B[2][1]+" xe";C[2]=p&&/^(r|b)/i.test(b.string())?parseFloat(a.browser.version,10)===8?2:1:0;l.css({antialias:""+(x.string().indexOf("center")>-1),left:C[0]-C[2]*Number(z==="x"),top:C[1]-C[2]*Number(z==="y"),width:q+p,height:r+p}).each(function(b){var c=a(this);c[c.prop?"prop":"attr"]({coordsize:q+p+" "+(r+p),path:B,fillcolor:o.fill,filled:!!b,stroked:!!!b}).css({display:p||b?"block":"none"});if(!b&&c.html()===""){c.html('<vml:stroke weight="'+p*2+'px" color="'+o.border+'" miterlimit="1000" joinstyle="miter" '+' style="behavior:url(#default#VML); display:inline-block;" />')}})}if(c!==e){i.position(b)}},position:function(b){var c=k.tip,f={},g=Math.max(0,j.offset),h,l,m;if(j.corner===e||!c){return e}b=b||i.corner;h=b.precedance;l=w(b);m=[b.x,b.y];if(h==="x"){m.reverse()}a.each(m,function(a,c){var e,i;if(c==="center"){e=h==="y"?"left":"top";f[e]="50%";f["margin-"+e]=-Math.round(l[h==="y"?"width":"height"]/2)+g}else{e=u(b,c,d);i=v(b);f[c]=a?p?u(b,c):0:g+(i>e?i:0)}});f[b[h]]-=l[h==="x"?"width":"height"];c.css({top:"",bottom:"",left:"",right:"",margin:""}).css(f);return f},destroy:function(){if(k.tip){k.tip.remove()}l.unbind(q)}});i.init()}function D(a,b,c){var d=Math.ceil(b/2),e=Math.ceil(c/2),f={bottomright:[[0,0],[b,c],[b,0]],bottomleft:[[0,0],[b,0],[0,c]],topright:[[0,c],[b,0],[b,c]],topleft:[[0,0],[0,c],[b,c]],topcenter:[[0,c],[d,0],[b,c]],bottomcenter:[[0,0],[b,0],[d,c]],rightcenter:[[0,0],[b,e],[0,c]],leftcenter:[[b,0],[b,c],[0,e]]};f.lefttop=f.bottomright;f.righttop=f.bottomleft;f.leftbottom=f.topright;f.rightbottom=f.topleft;return f[a.string()]}function C(c){var f=this,g=c.options.show.modal,i=c.elements,j=i.tooltip,k="#qtip-overlay",l=".qtipmodal",m=l+c.id,o="is-modal-qtip",q=a(document.body),r;c.checks.modal={"^show.modal.(on|blur)$":function(){f.init();i.overlay.toggle(j.is(":visible"))}};a.extend(f,{init:function(){if(!g.on){return f}r=f.create();j.attr(o,d).css("z-index",h.modal.zindex+a(n+"["+o+"]").length).unbind(l).unbind(m).bind("tooltipshow"+l+" tooltiphide"+l,function(b,c,d){var e=b.originalEvent;if(b.target===j[0]){if(e&&b.type==="tooltiphide"&&/mouse(leave|enter)/.test(e.type)&&a(e.relatedTarget).closest(r[0]).length){try{b.preventDefault()}catch(g){}}else if(!e||e&&!e.solo){f[b.type.replace("tooltip","")](b,d)}}}).bind("tooltipfocus"+l,function(b){if(b.isDefaultPrevented()||b.target!==j[0]){return}var c=a(n).filter("["+o+"]"),d=h.modal.zindex+c.length,e=parseInt(j[0].style.zIndex,10);r[0].style.zIndex=d-1;c.each(function(){if(this.style.zIndex>e){this.style.zIndex-=1}});c.end().filter("."+p).qtip("blur",b.originalEvent);j.addClass(p)[0].style.zIndex=d;try{b.preventDefault()}catch(f){}}).bind("tooltiphide"+l,function(b){if(b.target===j[0]){a("["+o+"]").filter(":visible").not(j).last().qtip("focus",b)}});if(g.escape){a(b).unbind(m).bind("keydown"+m,function(a){if(a.keyCode===27&&j.hasClass(p)){c.hide(a)}})}if(g.blur){i.overlay.unbind(m).bind("click"+m,function(a){if(j.hasClass(p)){c.hide(a)}})}return f},create:function(){function d(){r.css({height:a(b).height(),width:a(b).width()})}var c=a(k);if(c.length){return i.overlay=c.insertAfter(a(n).last())}r=i.overlay=a("<div />",{id:k.substr(1),html:"<div></div>",mousedown:function(){return e}}).insertAfter(a(n).last());a(b).unbind(l).bind("resize"+l,d);d();return r},toggle:function(b,c,h){if(b&&b.isDefaultPrevented()){return f}var i=g.effect,k=c?"show":"hide",l=r.is(":visible"),p=a("["+o+"]").filter(":visible").not(j),s;if(!r){r=f.create()}if(r.is(":animated")&&l===c||!c&&p.length){return f}if(c){r.css({left:0,top:0});r.toggleClass("blurs",g.blur);q.bind("focusin"+m,function(b){var c=a(b.target),d=c.closest(".qtip"),f=d.length<1?e:parseInt(d[0].style.zIndex,10)>parseInt(j[0].style.zIndex,10);if(!f&&a(b.target).closest(n)[0]!==j[0]){j.find("input:visible").filter(":first").focus()}})}else{q.undelegate("*","focusin"+m)}r.stop(d,e);if(a.isFunction(i)){i.call(r,c)}else if(i===e){r[k]()}else{r.fadeTo(parseInt(h,10)||90,c?1:0,function(){if(!c){a(this).hide()}})}if(!c){r.queue(function(a){r.css({left:"",top:""});a()})}return f},show:function(a,b){return f.toggle(a,d,b)},hide:function(a,b){return f.toggle(a,e,b)},destroy:function(){var d=r;if(d){d=a("["+o+"]").not(j).length<1;if(d){i.overlay.remove();a(b).unbind(l)}else{i.overlay.unbind(l+c.id)}q.undelegate("*","focusin"+m)}return j.removeAttr(o).unbind(l)}});f.init()}function B(b){var c=this,d=b.elements,e=d.tooltip,f=".bgiframe-"+b.id;a.extend(c,{init:function(){d.bgiframe=a('<iframe class="ui-tooltip-bgiframe" frameborder="0" tabindex="-1" src="javascript:\'\';" '+' style="display:block; position:absolute; z-index:-1; filter:alpha(opacity=0); '+'-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";"></iframe>');d.bgiframe.appendTo(e);e.bind("tooltipmove"+f,c.adjust)},adjust:function(){var a=b.get("dimensions"),c=b.plugins.tip,f=d.tip,g,h;h=parseInt(e.css("border-left-width"),10)||0;h={left:-h,top:-h};if(c&&f){g=c.corner.precedance==="x"?["width","left"]:["height","top"];h[g[1]]-=f[g[0]]()}d.bgiframe.css(h).css(a)},destroy:function(){d.bgiframe.remove();e.unbind(f)}});c.init()}function A(b){var c=this,f=b.elements.tooltip,g=b.options.content.ajax,h=".qtip-ajax",i=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,j=d;b.checks.ajax={"^content.ajax":function(a,b,d){if(b==="ajax"){g=d}if(b==="once"){c.init()}else if(g&&g.url){c.load()}else{f.unbind(h)}}};a.extend(c,{init:function(){if(g&&g.url){f.unbind(h)[g.once?"one":"bind"]("tooltipshow"+h,c.load)}return c},load:function(d,f){function p(a,c,d){if(a.status===0){return}b.set("content.text",c+": "+d)}function o(c){if(k){c=a("<div/>").append(c.replace(i,"")).find(k)}b.set("content.text",c)}function n(){if(l){b.show(d.originalEvent);f=e}if(a.isFunction(g.complete)){g.complete.apply(this,arguments)}}var h=g.url.indexOf(" "),j=g.url,k,l=g.once&&!g.loading&&f;if(l){try{d.preventDefault()}catch(m){}}else if(d&&d.isDefaultPrevented()){return c}if(h>-1){k=j.substr(h);j=j.substr(0,h)}a.ajax(a.extend({success:o,error:p,context:b},g,{url:j,complete:n}))}});c.init()}function z(b,c){var i,j,k,l,m,n=a(this),o=a(document.body),p=this===document?o:n,q=n.metadata?n.metadata(c.metadata):f,r=c.metadata.type==="html5"&&q?q[c.metadata.name]:f,s=n.data(c.metadata.name||"qtipopts");try{s=typeof s==="string"?(new Function("return "+s))():s}catch(t){w("Unable to parse HTML5 attribute data: "+s)}l=a.extend(d,{},g.defaults,c,typeof s==="object"?x(s):f,x(r||q));j=l.position;l.id=b;if("boolean"===typeof l.content.text){k=n.attr(l.content.attr);if(l.content.attr!==e&&k){l.content.text=k}else{w("Unable to locate content for tooltip! Aborting render of tooltip on element: ",n);return e}}if(!j.container.length){j.container=o}if(j.target===e){j.target=p}if(l.show.target===e){l.show.target=p}if(l.show.solo===d){l.show.solo=o}if(l.hide.target===e){l.hide.target=p}if(l.position.viewport===d){l.position.viewport=j.container}j.at=new h.Corner(j.at);j.my=new h.Corner(j.my);if(a.data(this,"qtip")){if(l.overwrite){n.qtip("destroy")}else if(l.overwrite===e){return e}}if(l.suppress&&(m=a.attr(this,"title"))){a(this).removeAttr("title").attr(u,m)}i=new y(n,l,b,!!k);a.data(this,"qtip",i);n.bind("remove.qtip-"+b,function(){i.destroy()});return i}function y(s,t,w,y){function R(){var c=[t.show.target[0],t.hide.target[0],z.rendered&&G.tooltip[0],t.position.container[0],t.position.viewport[0],b,document];if(z.rendered){a([]).pushStack(a.grep(c,function(a){return typeof a==="object"})).unbind(F)}else{t.show.target.unbind(F+"-create")}}function Q(){function p(a){if(E.is(":visible")){z.reposition(a)}}function o(a){if(E.hasClass(m)){return e}clearTimeout(z.timers.inactive);z.timers.inactive=setTimeout(function(){z.hide(a)},t.hide.inactive)}function l(b){if(E.hasClass(m)||C||D){return e}var d=a(b.relatedTarget||b.target),g=d.closest(n)[0]===E[0],h=d[0]===f.show[0];clearTimeout(z.timers.show);clearTimeout(z.timers.hide);if(c.target==="mouse"&&g||t.hide.fixed&&/mouse(out|leave|move)/.test(b.type)&&(g||h)){try{b.preventDefault();b.stopImmediatePropagation()}catch(i){}return}if(t.hide.delay>0){z.timers.hide=setTimeout(function(){z.hide(b)},t.hide.delay)}else{z.hide(b)}}function k(a){if(E.hasClass(m)){return e}clearTimeout(z.timers.show);clearTimeout(z.timers.hide);var b=function(){z.toggle(d,a)};if(t.show.delay>0){z.timers.show=setTimeout(b,t.show.delay)}else{b()}}var c=t.position,f={show:t.show.target,hide:t.hide.target,viewport:a(c.viewport),document:a(document),body:a(document.body),window:a(b)},h={show:a.trim(""+t.show.event).split(" "),hide:a.trim(""+t.hide.event).split(" ")},j=a.browser.msie&&parseInt(a.browser.version,10)===6;E.bind("mouseenter"+F+" mouseleave"+F,function(a){var b=a.type==="mouseenter";if(b){z.focus(a)}E.toggleClass(q,b)});if(t.hide.fixed){f.hide=f.hide.add(E);E.bind("mouseover"+F,function(){if(!E.hasClass(m)){clearTimeout(z.timers.hide)}})}if(/mouse(out|leave)/i.test(t.hide.event)){if(t.hide.leave==="window"){f.window.bind("mouseout"+F+" blur"+F,function(a){if(/select|option/.test(a.target)&&!a.relatedTarget){z.hide(a)}})}}else if(/mouse(over|enter)/i.test(t.show.event)){f.hide.bind("mouseleave"+F,function(a){clearTimeout(z.timers.show)})}if((""+t.hide.event).indexOf("unfocus")>-1){f.body.bind("mousedown"+F,function(b){var c=a(b.target),d=!E.hasClass(m)&&E.is(":visible");if(c[0]!==E[0]&&c.parents(n).length===0&&!c.closest(s).length&&!c.attr("disabled")){z.hide(b)}})}if("number"===typeof t.hide.inactive){f.show.bind("qtip-"+w+"-inactive",o);a.each(g.inactiveEvents,function(a,b){f.hide.add(G.tooltip).bind(b+F+"-inactive",o)})}a.each(h.hide,function(b,c){var d=a.inArray(c,h.show),e=a(f.hide);if(d>-1&&e.add(f.show).length===e.length||c==="unfocus"){f.show.bind(c+F,function(a){if(E.is(":visible")){l(a)}else{k(a)}});delete h.show[d]}else{f.hide.bind(c+F,l)}});a.each(h.show,function(a,b){f.show.bind(b+F,k)});if("number"===typeof t.hide.distance){f.show.add(E).bind("mousemove"+F,function(a){var b=H.origin||{},c=t.hide.distance,d=Math.abs;if(d(a.pageX-b.pageX)>=c||d(a.pageY-b.pageY)>=c){z.hide(a)}})}if(c.target==="mouse"){f.show.bind("mousemove"+F,function(a){i={pageX:a.pageX,pageY:a.pageY,type:"mousemove"}});if(c.adjust.mouse){if(t.hide.event){E.bind("mouseleave"+F,function(a){if((a.relatedTarget||a.target)!==f.show[0]){z.hide(a)}});G.target.bind("mouseenter"+F+" mouseleave"+F,function(a){H.onTarget=a.type==="mouseenter"})}f.document.bind("mousemove"+F,function(a){if(H.onTarget&&!E.hasClass(m)&&E.is(":visible")){z.reposition(a||i)}})}}if(c.adjust.resize||f.viewport.length){(a.event.special.resize?f.viewport:f.window).bind("resize"+F,p)}if(f.viewport.length||j&&E.css("position")==="fixed"){f.viewport.bind("scroll"+F,p)}}function P(b,d){function g(b){function i(c){if(c){delete h[c.src];clearTimeout(z.timers.img[c.src]);a(c).unbind(F)}if(a.isEmptyObject(h)){z.redraw();if(d!==e){z.reposition(H.event)}b()}}var g,h={};if((g=f.find("img:not([height]):not([width])")).length===0){return i()}g.each(function(b,d){if(h[d.src]!==c){return}var e=0,f=3;(function g(){if(d.height||d.width||e>f){return i(d)}e+=1;z.timers.img[d.src]=setTimeout(g,700)})();a(d).bind("error"+F+" load"+F,function(){i(this)});h[d.src]=d})}var f=G.content;if(!z.rendered||!b){return e}if(a.isFunction(b)){b=b.call(s,H.event,z)||""}if(b.jquery&&b.length>0){f.empty().append(b.css({display:"block"}))}else{f.html(b)}if(z.rendered<0){E.queue("fx",g)}else{D=0;g(a.noop)}return z}function O(b,c){var d=G.title;if(!z.rendered||!b){return e}if(a.isFunction(b)){b=b.call(s,H.event,z)}if(b===e){return K(e)}else if(b.jquery&&b.length>0){d.empty().append(b.css({display:"block"}))}else{d.html(b)}z.redraw();if(c!==e&&z.rendered&&E.is(":visible")){z.reposition(H.event)}}function N(a){var b=G.button,c=G.title;if(!z.rendered){return e}if(!a){b.remove()}else{if(!c){M()}L()}}function M(){var b=B+"-title";if(G.titlebar){K()}G.titlebar=a("<div />",{"class":k+"-titlebar "+(t.style.widget?"ui-widget-header":"")}).append(G.title=a("<div />",{id:b,"class":k+"-title","aria-atomic":d})).insertBefore(G.content).delegate(".ui-tooltip-close","mousedown keydown mouseup keyup mouseout",function(b){a(this).toggleClass("ui-state-active ui-state-focus",b.type.substr(-4)==="down")}).delegate(".ui-tooltip-close","mouseover mouseout",function(b){a(this).toggleClass("ui-state-hover",b.type==="mouseover")});if(t.content.title.button){L()}else if(z.rendered){z.redraw()}}function L(){var b=t.content.title.button,c=typeof b==="string",d=c?b:"Close tooltip";if(G.button){G.button.remove()}if(b.jquery){G.button=b}else{G.button=a("<a />",{"class":"ui-state-default ui-tooltip-close "+(t.style.widget?"":k+"-icon"),title:d,"aria-label":d}).prepend(a("<span />",{"class":"ui-icon ui-icon-close",html:"×"}))}G.button.appendTo(G.titlebar).attr("role","button").click(function(a){if(!E.hasClass(m)){z.hide(a)}return e});z.redraw()}function K(a){if(G.title){G.titlebar.remove();G.titlebar=G.title=G.button=f;if(a!==e){z.reposition()}}}function J(){var a=t.style.widget;E.toggleClass(l,a).toggleClass(o,t.style["default"]&&!a);G.content.toggleClass(l+"-content",a);if(G.titlebar){G.titlebar.toggleClass(l+"-header",a)}if(G.button){G.button.toggleClass(k+"-icon",!a)}}function I(a){var b=0,c,d=t,e=a.split(".");while(d=d[e[b++]]){if(b<e.length){c=d}}return[c||t,e.pop()]}var z=this,A=document.body,B=k+"-"+w,C=0,D=0,E=a(),F=".qtip-"+w,G,H;z.id=w;z.rendered=e;z.elements=G={target:s};z.timers={img:{}};z.options=t;z.checks={};z.plugins={};z.cache=H={event:{},target:a(),disabled:e,attr:y,onTarget:e};z.checks.builtin={"^id$":function(b,c,f){var h=f===d?g.nextid:f,i=k+"-"+h;if(h!==e&&h.length>0&&!a("#"+i).length){E[0].id=i;G.content[0].id=i+"-content";G.title[0].id=i+"-title"}},"^content.text$":function(a,b,c){P(c)},"^content.title.text$":function(a,b,c){if(!c){return K()}if(!G.title&&c){M()}O(c)},"^content.title.button$":function(a,b,c){N(c)},"^position.(my|at)$":function(a,b,c){if("string"===typeof c){a[b]=new h.Corner(c)}},"^position.container$":function(a,b,c){if(z.rendered){E.appendTo(c)}},"^show.ready$":function(){if(!z.rendered){z.render(1)}else{z.toggle(d)}},"^style.classes$":function(a,b,c){E.attr("class",k+" qtip ui-helper-reset "+c)},"^style.widget|content.title":J,"^events.(render|show|move|hide|focus|blur)$":function(b,c,d){E[(a.isFunction(d)?"":"un")+"bind"]("tooltip"+c,d)},"^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)":function(){var a=t.position;E.attr("tracking",a.target==="mouse"&&a.adjust.mouse);R();Q()}};a.extend(z,{render:function(b){if(z.rendered){return z}var c=t.content.text,f=t.content.title.text,g=t.position,i=a.Event("tooltiprender");a.attr(s[0],"aria-describedby",B);E=G.tooltip=a("<div/>",{id:B,"class":k+" qtip ui-helper-reset "+o+" "+t.style.classes+" "+k+"-pos-"+t.position.my.abbrev(),width:t.style.width||"",height:t.style.height||"",tracking:g.target==="mouse"&&g.adjust.mouse,role:"alert","aria-live":"polite","aria-atomic":e,"aria-describedby":B+"-content","aria-hidden":d}).toggleClass(m,H.disabled).data("qtip",z).appendTo(t.position.container).append(G.content=a("<div />",{"class":k+"-content",id:B+"-content","aria-atomic":d}));z.rendered=-1;D=1;C=1;if(f){M();if(!a.isFunction(f)){O(f,e)}}if(!a.isFunction(c)){P(c,e)}z.rendered=d;J();a.each(t.events,function(b,c){if(a.isFunction(c)){E.bind(b==="toggle"?"tooltipshow tooltiphide":"tooltip"+b,c)}});a.each(h,function(){if(this.initialize==="render"){this(z)}});Q();E.queue("fx",function(a){i.originalEvent=H.event;E.trigger(i,[z]);D=0;C=0;z.redraw();if(t.show.ready||b){z.toggle(d,H.event,e)}a()});return z},get:function(a){var b,c;switch(a.toLowerCase()){case"dimensions":b={height:E.outerHeight(),width:E.outerWidth()};break;case"offset":b=h.offset(E,t.position.container);break;default:c=I(a.toLowerCase());b=c[0][c[1]];b=b.precedance?b.string():b;break}return b},set:function(b,c){function m(a,b){var c,d,e;for(c in k){for(d in k[c]){if(e=(new RegExp(d,"i")).exec(a)){b.push(e);k[c][d].apply(z,b)}}}}var g=/^position\.(my|at|adjust|target|container)|style|content|show\.ready/i,h=/^content\.(title|attr)|style/i,i=e,j=e,k=z.checks,l;if("string"===typeof b){l=b;b={};b[l]=c}else{b=a.extend(d,{},b)}a.each(b,function(c,d){var e=I(c.toLowerCase()),f;f=e[0][e[1]];e[0][e[1]]="object"===typeof d&&d.nodeType?a(d):d;b[c]=[e[0],e[1],d,f];i=g.test(c)||i;j=h.test(c)||j});x(t);C=D=1;a.each(b,m);C=D=0;if(E.is(":visible")&&z.rendered){if(i){z.reposition(t.position.target==="mouse"?f:H.event)}if(j){z.redraw()}}return z},toggle:function(b,c){function q(){if(b){if(a.browser.msie){E[0].style.removeAttribute("filter")}E.css("overflow","");if("string"===typeof h.autofocus){a(h.autofocus,E).focus()}p=a.Event("tooltipvisible");p.originalEvent=c?H.event:f;E.trigger(p,[z]);h.target.trigger("qtip-"+w+"-inactive")}else{E.css({display:"",visibility:"",opacity:"",left:"",top:""})}}if(!z.rendered){return b?z.render(1):z}var g=b?"show":"hide",h=t[g],j=E.is(":visible"),k=!c||t[g].target.length<2||H.target[0]===c.target,l=t.position,m=t.content,o,p;if((typeof b).search("boolean|number")){b=!j}if(!E.is(":animated")&&j===b&&k){return z}if(c){if(/over|enter/.test(c.type)&&/out|leave/.test(H.event.type)&&c.target===t.show.target[0]&&E.has(c.relatedTarget).length){return z}H.event=a.extend({},c)}p=a.Event("tooltip"+g);p.originalEvent=c?H.event:f;E.trigger(p,[z,90]);if(p.isDefaultPrevented()){return z}a.attr(E[0],"aria-hidden",!!!b);if(b){H.origin=a.extend({},i);z.focus(c);if(a.isFunction(m.text)){P(m.text,e)}if(a.isFunction(m.title.text)){O(m.title.text,e)}if(!v&&l.target==="mouse"&&l.adjust.mouse){a(document).bind("mousemove.qtip",function(a){i={pageX:a.pageX,pageY:a.pageY,type:"mousemove"}});v=d}z.reposition(c,arguments[2]);if(p.solo=!!h.solo){a(n,h.solo).not(E).qtip("hide",p)}}else{clearTimeout(z.timers.show);delete H.origin;if(v&&!a(n+'[tracking="true"]:visible',h.solo).not(E).length){a(document).unbind("mousemove.qtip");v=e}z.blur(c)}if(k){E.stop(0,1)}if(h.effect===e){E[g]();q.call(E)}else if(a.isFunction(h.effect)){h.effect.call(E,z);E.queue("fx",function(a){q();a()})}else{E.fadeTo(90,b?1:0,q)}if(b){h.target.trigger("qtip-"+w+"-inactive")}return z},show:function(a){return z.toggle(d,a)},hide:function(a){return z.toggle(e,a)},focus:function(b){if(!z.rendered){return z}var c=a(n),d=parseInt(E[0].style.zIndex,10),e=g.zindex+c.length,f=a.extend({},b),h,i;if(!E.hasClass(p)){i=a.Event("tooltipfocus");i.originalEvent=f;E.trigger(i,[z,e]);if(!i.isDefaultPrevented()){if(d!==e){c.each(function(){if(this.style.zIndex>d){this.style.zIndex=this.style.zIndex-1}});c.filter("."+p).qtip("blur",f)}E.addClass(p)[0].style.zIndex=e}}return z},blur:function(b){var c=a.extend({},b),d;E.removeClass(p);d=a.Event("tooltipblur");d.originalEvent=c;E.trigger(d,[z]);return z},reposition:function(c,d){if(!z.rendered||C){return z}C=1;var f=t.position.target,g=t.position,j=g.my,l=g.at,m=g.adjust,n=m.method.split(" "),o=E.outerWidth(),p=E.outerHeight(),q=0,r=0,s=a.Event("tooltipmove"),u=E.css("position")==="fixed",v=g.viewport,w={left:0,top:0},x=g.container,y=e,B=z.plugins.tip,D={horizontal:n[0],vertical:n[1]=n[1]||n[0],enabled:v.jquery&&f[0]!==b&&f[0]!==A&&m.method!=="none",left:function(a){var b=D.horizontal==="shift",c=-x.offset.left+v.offset.left+v.scrollLeft,d=j.x==="left"?o:j.x==="right"?-o:-o/2,e=l.x==="left"?q:l.x==="right"?-q:-q/2,f=B&&B.size?B.size.width||0:0,g=B&&B.corner&&B.corner.precedance==="x"&&!b?f:0,h=c-a+g,i=a+o-v.width-c+g,k=d-(j.precedance==="x"||j.x===j.y?e:0)-(l.x==="center"?q/2:0),n=j.x==="center";if(b){g=B&&B.corner&&B.corner.precedance==="y"?f:0;k=(j.x==="left"?1:-1)*d-g;w.left+=h>0?h:i>0?-i:0;w.left=Math.max(-x.offset.left+v.offset.left+(g&&B.corner.x==="center"?B.offset:0),a-k,Math.min(Math.max(-x.offset.left+v.offset.left+v.width,a+k),w.left))}else{if(h>0&&(j.x!=="left"||i>0)){w.left-=k}else if(i>0&&(j.x!=="right"||h>0)){w.left-=n?-k:k}if(w.left!==a&&n){w.left-=m.x}if(w.left<c&&-w.left>i){w.left=a}}return w.left-a},top:function(b){var c=D.vertical==="shift",d=-x.offset.top+v.offset.top,e=j.y==="top"?p:j.y==="bottom"?-p:-p/2,f=l.y==="top"?r:l.y==="bottom"?-r:-r/2,g=B&&B.size?B.size.height||0:0,h=B&&B.corner&&B.corner.precedance==="y"&&!c?g:0,i=d-b+h,k=b+p-v.height-d+h,n=e-(j.precedance==="y"||j.x===j.y?f:0)-(l.y==="center"?r/2:0),o=j.y==="center";if(a(v.elem.selector).is("iframe")){var q=parseInt(a("iframe#content").css("paddingBottom").replace("px",""));var s=10;var d=-x.offset.top+v.offset.top+a(v.elem.selector).contents().scrollTop();var i=d-b+h;var k=b+p-v.height-d+h+q+s}if(c){h=B&&B.corner&&B.corner.precedance==="x"?g:0;n=(j.y==="top"?1:-1)*e-h;var t=60+s;w.top+=i>0?i:k>-E.outerHeight()-24?-k-t:0}else{if(i>0&&(j.y!=="top"||k>0)){w.top-=n}else if(k>0&&(j.y!=="bottom"||i>0)){w.top-=o?-n:n}if(w.top!==b&&o){w.top-=m.y}if(w.top<0&&-w.top>k){w.top=b}}return w.top-b}},F;if(a.isArray(f)&&f.length===2){l={x:"left",y:"top"};w={left:f[0],top:f[1]}}else if(f==="mouse"&&(c&&c.pageX||H.event.pageX)){l={x:"left",y:"top"};c=(c&&(c.type==="resize"||c.type==="scroll")?H.event:c&&c.pageX&&c.type==="mousemove"?c:i&&i.pageX&&(m.mouse||!c||!c.pageX)?{pageX:i.pageX,pageY:i.pageY}:!m.mouse&&H.origin&&H.origin.pageX&&t.show.distance?H.origin:c)||c||H.event||i||{};w={top:c.pageY,left:c.pageX}}else{if(f==="event"){if(c&&c.target&&c.type!=="scroll"&&c.type!=="resize"){f=H.target=a(c.target)}else{f=H.target}}else{f=H.target=a(f.jquery?f:G.target)}f=a(f).eq(0);if(f.length===0){return z}else if(f[0]===document||f[0]===b){q=h.iOS?b.innerWidth:f.width();r=h.iOS?b.innerHeight:f.height();if(f[0]===b){w={top:(v||f).scrollTop(),left:(v||f).scrollLeft()}}}else if(f.is("area")&&h.imagemap){w=h.imagemap(f,l,D.enabled?n:e)}else if(f[0].namespaceURI==="http://www.w3.org/2000/svg"&&h.svg){w=h.svg(f,l)}else{q=f.outerWidth();r=f.outerHeight();w=h.offset(f,x)}if(w.offset){q=w.width;r=w.height;y=w.flipoffset;w=w.offset}if(h.iOS<4.1&&h.iOS>3.1||h.iOS==4.3||!h.iOS&&u){F=a(b);w.left-=F.scrollLeft();w.top-=F.scrollTop()}w.left+=l.x==="right"?q:l.x==="center"?q/2:0;w.top+=l.y==="bottom"?r:l.y==="center"?r/2:0}w.left+=m.x+(j.x==="right"?-o:j.x==="center"?-o/2:0);w.top+=m.y+(j.y==="bottom"?-p:j.y==="center"?-p/2:0);if(D.enabled){v={elem:v,height:v[(v[0]===b?"h":"outerH")+"eight"](),width:v[(v[0]===b?"w":"outerW")+"idth"](),scrollLeft:u?0:v.scrollLeft(),scrollTop:u?0:v.scrollTop(),offset:v.offset()||{left:0,top:0}};x={elem:x,scrollLeft:x.scrollLeft(),scrollTop:x.scrollTop(),offset:x.offset()||{left:0,top:0}};w.adjusted={left:D.horizontal!=="none"?D.left(w.left):0,top:D.vertical!=="none"?D.top(w.top):0};if(w.adjusted.left+w.adjusted.top){E.attr("class",E[0].className.replace(/ui-tooltip-pos-\w+/i,k+"-pos-"+j.abbrev()))}if(y&&w.adjusted.left){w.left+=y.left}if(y&&w.adjusted.top){w.top+=y.top}}else{w.adjusted={left:0,top:0}}s.originalEvent=a.extend({},c);E.trigger(s,[z,w,v.elem||v]);if(s.isDefaultPrevented()){return z}delete w.adjusted;if(d===e||isNaN(w.left)||isNaN(w.top)||f==="mouse"||!a.isFunction(g.effect)){E.css(w)}else if(a.isFunction(g.effect)){g.effect.call(E,z,a.extend({},w));E.queue(function(b){a(this).css({opacity:"",height:""});if(a.browser.msie){this.style.removeAttribute("filter")}b()})}C=0;return z},redraw:function(){if(z.rendered<1||D){return z}var a=t.position.container,b,c,d,e;D=1;if(t.style.height){E.css("height",t.style.height)}if(t.style.width){E.css("width",t.style.width)}else{E.css("width","").addClass(r);c=E.width()+1;d=E.css("max-width")||"";e=E.css("min-width")||"";b=(d+e).indexOf("%")>-1?a.width()/100:0;d=(d.indexOf("%")>-1?b:1)*parseInt(d,10)||c;e=(e.indexOf("%")>-1?b:1)*parseInt(e,10)||0;c=d+e?Math.min(Math.max(c,e),d):c;E.css("width",Math.round(c)).removeClass(r)}D=0;return z},disable:function(b){if("boolean"!==typeof b){b=!(E.hasClass(m)||H.disabled)}if(z.rendered){E.toggleClass(m,b);a.attr(E[0],"aria-disabled",b)}else{H.disabled=!!b}return z},enable:function(){return z.disable(e)},destroy:function(){var b=s[0],c=a.attr(b,u),d=s.data("qtip");if(z.rendered){E.remove();a.each(z.plugins,function(){if(this.destroy){this.destroy()}})}clearTimeout(z.timers.show);clearTimeout(z.timers.hide);R();if(!d||z===d){a.removeData(b,"qtip");if(t.suppress&&c){a.attr(b,"title",c);s.removeAttr(u)}s.removeAttr("aria-describedby")}s.unbind(".qtip-"+w);delete j[z.id];return s}})}function x(b){var c;if(!b||"object"!==typeof b){return e}if(b.metadata===f||"object"!==typeof b.metadata){b.metadata={type:b.metadata}}if("content"in b){if(b.content===f||"object"!==typeof b.content||b.content.jquery){b.content={text:b.content}}c=b.content.text||e;if(!a.isFunction(c)&&(!c&&!c.attr||c.length<1||"object"===typeof c&&!c.jquery)){b.content.text=e}if("title"in b.content){if(b.content.title===f||"object"!==typeof b.content.title){b.content.title={text:b.content.title}}c=b.content.title.text||e;if(!a.isFunction(c)&&(!c&&!c.attr||c.length<1||"object"===typeof c&&!c.jquery)){b.content.title.text=e}}}if("position"in b){if(b.position===f||"object"!==typeof b.position){b.position={my:b.position,at:b.position}}}if("show"in b){if(b.show===f||"object"!==typeof b.show){if(b.show.jquery){b.show={target:b.show}}else{b.show={event:b.show}}}}if("hide"in b){if(b.hide===f||"object"!==typeof b.hide){if(b.hide.jquery){b.hide={target:b.hide}}else{b.hide={event:b.hide}}}}if("style"in b){if(b.style===f||"object"!==typeof b.style){b.style={classes:b.style}}}a.each(h,function(){if(this.sanitize){this.sanitize(b)}});return b}function w(){w.history=w.history||[];w.history.push(arguments);if("object"===typeof console){var a=console[console.warn?"warn":"log"],b=Array.prototype.slice.call(arguments),c;if(typeof arguments[0]==="string"){b[0]="qTip2: "+b[0]}c=a.apply?a.apply(console,b):a(b)}}"use strict";var d=true,e=false,f=null,g,h,i,j={},k="ui-tooltip",l="ui-widget",m="ui-state-disabled",n="div.qtip."+k,o=k+"-default",p=k+"-focus",q=k+"-hover",r=k+"-fluid",s="-31000px",t="_replacedByqTip",u="oldtitle",v;g=a.fn.qtip=function(b,h,i){var j=(""+b).toLowerCase(),k=f,l=a.makeArray(arguments).slice(1),m=l[l.length-1],n=this[0]?a.data(this[0],"qtip"):f;if(!arguments.length&&n||j==="api"){return n}else if("string"===typeof b){this.each(function(){var b=a.data(this,"qtip");if(!b){return d}if(m&&m.timeStamp){b.cache.event=m}if((j==="option"||j==="options")&&h){if(a.isPlainObject(h)||i!==c){b.set(h,i)}else{k=b.get(h);return e}}else if(b[j]){b[j].apply(b[j],l)}});return k!==f?k:this}else if("object"===typeof b||!arguments.length){n=x(a.extend(d,{},b));return g.bind.call(this,n,m)}};g.bind=function(b,f){return this.each(function(k){function r(b){function d(){p.render(typeof b==="object"||l.show.ready);m.show.add(m.hide).unbind(o)}if(p.cache.disabled){return e}p.cache.event=a.extend({},b);p.cache.target=b?a(b.target):[c];if(l.show.delay>0){clearTimeout(p.timers.show);p.timers.show=setTimeout(d,l.show.delay);if(n.show!==n.hide){m.hide.bind(n.hide,function(){clearTimeout(p.timers.show)})}}else{d()}}var l,m,n,o,p,q;q=a.isArray(b.id)?b.id[k]:b.id;q=!q||q===e||q.length<1||j[q]?g.nextid++:j[q]=q;o=".qtip-"+q+"-create";p=z.call(this,q,b);if(p===e){return d}l=p.options;a.each(h,function(){if(this.initialize==="initialize"){this(p)}});m={show:l.show.target,hide:l.hide.target};n={show:a.trim(""+l.show.event).replace(/ /g,o+" ")+o,hide:a.trim(""+l.hide.event).replace(/ /g,o+" ")+o};if(/mouse(over|enter)/i.test(n.show)&&!/mouse(out|leave)/i.test(n.hide)){n.hide+=" mouseleave"+o}m.show.bind("mousemove"+o,function(a){i={pageX:a.pageX,pageY:a.pageY,type:"mousemove"};p.cache.onTarget=d});m.show.bind(n.show,r);if(l.show.ready||l.prerender){r(f)}})};h=g.plugins={Corner:function(a){a=(""+a).replace(/([A-Z])/," $1").replace(/middle/gi,"center").toLowerCase();this.x=(a.match(/left|right/i)||a.match(/center/)||["inherit"])[0].toLowerCase();this.y=(a.match(/top|bottom|center/i)||["inherit"])[0].toLowerCase();var b=a.charAt(0);this.precedance=b==="t"||b==="b"?"y":"x";this.string=function(){return this.precedance==="y"?this.y+this.x:this.x+this.y};this.abbrev=function(){var a=this.x.substr(0,1),b=this.y.substr(0,1);return a===b?a:a==="c"||a!=="c"&&b!=="c"?b+a:a+b};this.clone=function(){return{x:this.x,y:this.y,precedance:this.precedance,string:this.string,abbrev:this.abbrev,clone:this.clone}}},offset:function(a,b){function i(a,b){c.left+=b*a.scrollLeft();c.top+=b*a.scrollTop()}var c=a.offset(),d=document.body,e=b,f,g,h;if(e){do{if(e.css("position")!=="static"){g=e.position();c.left-=g.left+(parseInt(e.css("borderLeftWidth"),10)||0)+(parseInt(e.css("marginLeft"),10)||0);c.top-=g.top+(parseInt(e.css("borderTopWidth"),10)||0)+(parseInt(e.css("marginTop"),10)||0);if(!f&&(h=e.css("overflow"))!=="hidden"&&h!=="visible"){f=e}}if(e[0]===d){break}}while(e=e.offsetParent());if(f&&f[0]!==d){i(f,1)}}return c},iOS:parseFloat((""+(/CPU.*OS ([0-9_]{1,3})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent)||[0,""])[1]).replace("undefined","3_2").replace("_","."))||e,fn:{attr:function(b,c){if(this.length){var d=this[0],e="title",f=a.data(d,"qtip");if(b===e&&f&&"object"===typeof f&&f.options.suppress){if(arguments.length<2){return a.attr(d,u)}else{if(f&&f.options.content.attr===e&&f.cache.attr){f.set("content.text",c)}return this.attr(u,c)}}}return a.fn["attr"+t].apply(this,arguments)},clone:function(b){var c=a([]),d="title",e=a.fn["clone"+t].apply(this,arguments);if(!b){e.filter("["+u+"]").attr("title",function(){return a.attr(this,u)}).removeAttr(u)}return e},remove:a.ui?f:function(b,c){if(a.ui){return}a(this).each(function(){if(!c){if(!b||a.filter(b,[this]).length){a("*",this).add(this).each(function(){a(this).triggerHandler("remove")})}}})}}};a.each(h.fn,function(b,c){if(!c||a.fn[b+t]){return d}var e=a.fn[b+t]=a.fn[b];a.fn[b]=function(){return c.apply(this,arguments)||e.apply(this,arguments)}});g.version="2.0.0pre";g.nextid=0;g.inactiveEvents="click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" ");g.zindex=15e3;g.defaults={prerender:e,id:e,overwrite:d,suppress:d,content:{text:d,attr:"title",title:{text:e,button:e}},position:{my:"top left",at:"bottom right",target:e,container:e,viewport:e,adjust:{x:0,y:0,mouse:d,resize:d,method:"flip flip"},effect:function(b,c,d){a(this).animate(c,{duration:200,queue:e})}},show:{target:e,event:"mouseenter",effect:d,delay:90,solo:e,ready:e,autofocus:e},hide:{target:e,event:"mouseleave",effect:d,delay:0,fixed:e,inactive:e,leave:"window",distance:e},style:{classes:"",widget:e,width:e,height:e,"default":d},events:{render:f,move:f,show:f,hide:f,toggle:f,visible:f,focus:f,blur:f}};h.ajax=function(a){var b=a.plugins.ajax;return"object"===typeof b?b:a.plugins.ajax=new A(a)};h.ajax.initialize="render";h.ajax.sanitize=function(a){var b=a.content,c;if(b&&"ajax"in b){c=b.ajax;if(typeof c!=="object"){c=a.content.ajax={url:c}}if("boolean"!==typeof c.once&&c.once){c.once=!!c.once}}};a.extend(d,g.defaults,{content:{ajax:{loading:d,once:d}}});h.bgiframe=function(b){var c=a.browser,d=b.plugins.bgiframe;if(a("select, object").length<1||!(c.msie&&(""+c.version).charAt(0)==="6")){return e}return"object"===typeof d?d:b.plugins.bgiframe=new B(b)};h.bgiframe.initialize="render";h.imagemap=function(b,c,d){function n(a,b,c){var d=0,e=1,f=1,g=0,h=0,i=a.width,j=a.height;while(i>0&&j>0&&e>0&&f>0){i=Math.floor(i/2);j=Math.floor(j/2);if(c.x==="left"){e=i}else if(c.x==="right"){e=a.width-i}else{e+=Math.floor(i/2)}if(c.y==="top"){f=j}else if(c.y==="bottom"){f=a.height-j}else{f+=Math.floor(j/2)}d=b.length;while(d--){if(b.length<2){break}g=b[d][0]-a.offset.left;h=b[d][1]-a.offset.top;if(c.x==="left"&&g>=e||c.x==="right"&&g<=e||c.x==="center"&&(g<e||g>a.width-e)||c.y==="top"&&h>=f||c.y==="bottom"&&h<=f||c.y==="center"&&(h<f||h>a.height-f)){b.splice(d,1)}}}return{left:b[0][0],top:b[0][1]}}if(!b.jquery){b=a(b)}var e=(b[0].shape||b.attr("shape")).toLowerCase(),f=(b[0].coords||b.attr("coords")).split(","),g=[],h=a('img[usemap="#'+b.parent("map").attr("name")+'"]'),i=h.offset(),j={width:0,height:0,offset:{top:1e10,right:0,bottom:0,left:1e10}},k=0,l=0,m;i.left+=Math.ceil((h.outerWidth()-h.width())/2);i.top+=Math.ceil((h.outerHeight()-h.height())/2);if(e==="poly"){k=f.length;while(k--){l=[parseInt(f[--k],10),parseInt(f[k+1],10)];if(l[0]>j.offset.right){j.offset.right=l[0]}if(l[0]<j.offset.left){j.offset.left=l[0]}if(l[1]>j.offset.bottom){j.offset.bottom=l[1]}if(l[1]<j.offset.top){j.offset.top=l[1]}g.push(l)}}else{g=a.map(f,function(a){return parseInt(a,10)})}switch(e){case"rect":j={width:Math.abs(g[2]-g[0]),height:Math.abs(g[3]-g[1]),offset:{left:Math.min(g[0],g[2]),top:Math.min(g[1],g[3])}};break;case"circle":j={width:g[2]+2,height:g[2]+2,offset:{left:g[0],top:g[1]}};break;case"poly":a.extend(j,{width:Math.abs(j.offset.right-j.offset.left),height:Math.abs(j.offset.bottom-j.offset.top)});if(c.string()==="centercenter"){j.offset={left:j.offset.left+j.width/2,top:j.offset.top+j.height/2}}else{j.offset=n(j,g.slice(),c);if(d&&(d[0]==="flip"||d[1]==="flip")){j.flipoffset=n(j,g.slice(),{x:c.x==="left"?"right":c.x==="right"?"left":"center",y:c.y==="top"?"bottom":c.y==="bottom"?"top":"center"});j.flipoffset.left-=j.offset.left;j.flipoffset.top-=j.offset.top}}j.width=j.height=0;break}j.offset.left+=i.left;j.offset.top+=i.top;return j};h.modal=function(a){var b=a.plugins.modal;return"object"===typeof b?b:a.plugins.modal=new C(a)};h.modal.initialize="render";h.modal.sanitize=function(a){if(a.show){if(typeof a.show.modal!=="object"){a.show.modal={on:!!a.show.modal}}else if(typeof a.show.modal.on==="undefined"){a.show.modal.on=d}}};h.modal.zindex=g.zindex+1e3;a.extend(d,g.defaults,{show:{modal:{on:e,effect:d,blur:d,escape:d}}});h.svg=function(b,c){var d=a(document),e=b[0],f={width:0,height:0,offset:{top:1e10,left:1e10}},g,h,i,j,k;if(e.getBBox&&e.parentNode){g=e.getBBox();h=e.getScreenCTM();i=e.farthestViewportElement||e;if(!i.createSVGPoint){return f}j=i.createSVGPoint();j.x=g.x;j.y=g.y;k=j.matrixTransform(h);f.offset.left=k.x;f.offset.top=k.y;j.x+=g.width;j.y+=g.height;k=j.matrixTransform(h);f.width=k.x-f.offset.left;f.height=k.y-f.offset.top;f.offset.left+=d.scrollLeft();f.offset.top+=d.scrollTop()}return f};h.tip=function(a){var b=a.plugins.tip;return"object"===typeof b?b:a.plugins.tip=new E(a)};h.tip.initialize="render";h.tip.sanitize=function(a){var b=a.style,c;if(b&&"tip"in b){c=a.style.tip;if(typeof c!=="object"){a.style.tip={corner:c}}if(!/string|boolean/i.test(typeof c.corner)){c.corner=d}if(typeof c.width!=="number"){delete c.width}if(typeof c.height!=="number"){delete c.height}if(typeof c.border!=="number"&&c.border!==d){delete c.border}if(typeof c.offset!=="number"){delete c.offset}}};a.extend(d,g.defaults,{style:{tip:{corner:d,mimic:e,width:6,height:6,border:d,offset:0}}})})(jQuery,window)

;/*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

// TODO JsDoc

/**
 * Create a cookie with the given key and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String key The key of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given key.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String key The key of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function (key, value, options) {
    
    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }
        
        value = String(value);
        
        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

;/**
 * jQuery Masonry v2.0.110901
 * A dynamic layout plugin for jQuery
 * The flip-side of CSS Floats
 * http://masonry.desandro.com
 *
 * Licensed under the MIT license.
 * Copyright 2011 David DeSandro
 */
(function(a,b,c){var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()};var f=["position","height"];b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[],this.reloadItems();var d=this.element[0].style;this.originalStyle={};for(var e=0,g=f.length;e<g;e++){var h=f[e];this.originalStyle[h]=d[h]||""}this.element.css({position:"relative"}),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={};var i=b(document.createElement("div"));this.element.prepend(i),this.offset.y=Math.round(i.position().top),this.options.isRTL?(i.css({"float":"right",display:"inline-block"}),this.offset.x=Math.round(this.element.outerWidth()-i.position().left)):this.offset.x=Math.round(i.position().left),i.remove();var j=this;setTimeout(function(){j.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){j.resize()})},_init:function(a){this._getColumns("masonry"),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,c){var d,e,f,g,h,i;for(var j=0,k=a.length;j<k;j++){d=b(a[j]),e=Math.ceil(d.outerWidth(!0)/this.columnWidth),e=Math.min(e,this.cols);if(e===1)this._placeBrick(d,this.colYs);else{f=this.cols+1-e,g=[];for(i=0;i<f;i++)h=this.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);this._placeBrick(d,g)}}var l={};l.height=Math.max.apply(Math,this.colYs)-this.offset.y,this.options.isFitWidth&&(l.width=this.cols*this.columnWidth-this.options.gutterWidth),this.styleQueue.push({$el:this.element,style:l});var m=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",n=this.options.animationOptions,o;for(j=0,k=this.styleQueue.length;j<k;j++)o=this.styleQueue[j],o.$el[m](o.style,n);this.styleQueue=[],c&&c.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g={top:c};g[this.horizontalDirection]=this.columnWidth*d+this.offset.x,this.styleQueue.push({$el:a,style:g});var h=c+a.outerHeight(!0),i=this.cols+1-f;for(e=0;e<i;e++)this.colYs[d+e]=h},resize:function(){var a=this.cols;this._getColumns("masonry"),this.cols!==a&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(this.offset.y);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d=0,e=f.length;d<e;d++){var g=f[d];c[g]=this.originalStyle[g]}this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){function h(){--e<=0&&this.src!==f&&(setTimeout(g),d.unbind("load error",h))}function g(){a.call(b,d)}var b=this,d=b.find("img").add(b.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";e||g(),d.bind("load error",h).each(function(){if(this.complete||this.complete===c){var a=this.src;this.src=f,this.src=a}});return b};var g=function(a){this.console&&console.error(a)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d)g("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(d[a])||a.charAt(0)==="_"){g("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)}})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);

;// $Id$
/**
* @author Henri MEDOT
* @version last revision 2009-12-01
*/
 (function($) {
    $.fn.extend({
        scrollbarPaper: function() {
            this.each(function(i) {
							
            	if ( (navigator.userAgent.indexOf('Mac OS X 10_7') !== -1 || navigator.userAgent.indexOf('Mac OS X 10_8') !== -1) && navigator.userAgent.indexOf('WebKit') !== -1  )
					return false;
							
                var $this = $(this);
                var paper = $this.data('paper');

                if (paper == null) {

                    $this.before('\
						<div class="scrollbarpaper-container">\
							<div class="scrollbarpaper-track">\
								<div class="scrollbarpaper-drag">\
									<div class="scrollbarpaper-drag-top"></div>\
									<div class="scrollbarpaper-drag-bottom"></div>\
								</div>\
							</div>\
						</div>\
					');

                    paper = $this.prev();

					if ( $(this).attr('id') )
						paper.attr('id', 'scrollbarpaper-' + $(this).attr('id'));
						
					if ( $(this).attr('class') && $(this).attr('class').split(' ')[0] )
						paper.addClass('scrollbarpaper-container-' + $(this).attr('class').split(' ')[0]);

                    $this.data('paper', paper);
                    $this.data('track', $('.scrollbarpaper-track', paper));
                    $this.data('drag', $('.scrollbarpaper-drag', paper));
                    $this.data('dragTop', $('.scrollbarpaper-drag-top', paper));
                    $this.data('dragBottom', $('.scrollbarpaper-drag-bottom', paper));

                }

                var track = $this.data('track');
                var drag = $this.data('drag');
                var dragTop = $this.data('dragTop');
                var dragBottom = $this.data('dragBottom');

                var contentHeight = $this[0].scrollHeight;
								
                $this.data('height', $this.outerHeight());
                $this.data('contentHeight', contentHeight);
                $this.data('offset', $this.offset());

                $this.unbind();
                var ratio = $this.outerHeight() / contentHeight;

                paper.height($this.outerHeight());

                if (ratio < 1) {
					
					paper.show();
                    drag.show();
                    $this.addClass('scrollbarpaper-visible');
                    paper.height($this.outerHeight());
                    var offset = $this.offset();

                    var dragHeight = Math.max(Math.round($this.outerHeight() * ratio), dragTop.height() + dragBottom.height());
                    drag.height(dragHeight - 10);

                    var updateDragTop = function() {
                        drag.css('top', Math.min(Math.round($this.scrollTop() * ratio), $this.outerHeight() - dragHeight) + 'px');
                    };
                    updateDragTop();

                    $this.scroll(function(event) {
                        updateDragTop();
                    });

                    var unbindMousemove = function() {
                        $('html').unbind('mousemove.scrollbarpaper');
                    };
                    drag.mousedown(function(event) {
                        unbindMousemove();
                        var offsetTop = event.pageY - drag.offset().top;
                        $('html').bind('mousemove.scrollbarpaper',
                        function(event) {
                            $this.scrollTop((event.pageY - $this.offset().top - offsetTop) / ratio);
                            return false;
                        }).mouseup(unbindMousemove);
                        return false;
                    });

                } else {
	
                    $this.unbind();
					paper.hide();
                    drag.hide();
                    $this.removeClass('scrollbarpaper-visible');

                }

                var setScrollbarPaperTimeout = function() {
                    window.setTimeout(function() {
                        var offset = $this.offset();
                        var dataOffset = $this.data('offset');

                        if (
							($this.outerHeight() != $this.data('height')) 
							|| ($this[0].scrollHeight != $this.data('contentHeight'))
							|| (offset.top != dataOffset.top)
							|| (offset.left != dataOffset.left)
						) {
                            $this.scrollbarPaper();
                        }
                        else {
                            setScrollbarPaperTimeout();
                        }
                    },
                    200);
                };

                setScrollbarPaperTimeout();

            }); //End the each

			return this;
        }
    });

})(jQuery);

;/*
 *	Tabby jQuery plugin version 0.12
 *
 *	Ted Devito - http://teddevito.com/demos/textarea.html
 *
 *	Copyright (c) 2009 Ted Devito
 *	 
 *	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following 
 *	conditions are met:
 *	
 *		1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 *		2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer  
 *			in the documentation and/or other materials provided with the distribution.
 *		3. The name of the author may not be used to endorse or promote products derived from this software without specific prior written 
 *			permission. 
 *	 
 *	THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE 
 *	IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE 
 *	LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, 
 *	PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY 
 *	THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT 
 *	OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
 
// create closure
(function($) {
 
	// plugin definition

	$.fn.tabby = function(options) {
		// build main options before element iteration
		var opts = $.extend({}, $.fn.tabby.defaults, options);
		var pressed = $.fn.tabby.pressed; 
		
		// iterate and reformat each matched element
		return this.each(function() {
			$this = $(this);
			
			// build element specific options
			var options = $.meta ? $.extend({}, opts, $this.data()) : opts;
			
			$this.bind('keydown',function (e) {
				var kc = $.fn.tabby.catch_kc(e);
				if (16 == kc) pressed.shft = true;
				/*
				because both CTRL+TAB and ALT+TAB default to an event (changing tab/window) that 
				will prevent js from capturing the keyup event, we'll set a timer on releasing them.
				*/
				if (17 == kc) {pressed.ctrl = true;	setTimeout("jQuery.fn.tabby.pressed.ctrl = false;",1000);}
				if (18 == kc) {pressed.alt = true; 	setTimeout("jQuery.fn.tabby.pressed.alt = false;",1000);}
					
				if (9 == kc && !pressed.ctrl && !pressed.alt) {
					e.preventDefault; // does not work in O9.63 ??
					pressed.last = kc;	setTimeout("jQuery.fn.tabby.pressed.last = null;",0);
					process_keypress ($(e.target).get(0), pressed.shft, options);
					return false;
				}
				
			}).bind('keyup',function (e) {
				if (16 == $.fn.tabby.catch_kc(e)) pressed.shft = false;
			}).bind('blur',function (e) { // workaround for Opera -- http://www.webdeveloper.com/forum/showthread.php?p=806588
				if (9 == pressed.last) $(e.target).one('focus',function (e) {pressed.last = null;}).get(0).focus();
			});
		
		});
	};
	
	// define and expose any extra methods
	$.fn.tabby.catch_kc = function(e) { return e.keyCode ? e.keyCode : e.charCode ? e.charCode : e.which; };
	$.fn.tabby.pressed = {shft : false, ctrl : false, alt : false, last: null};

	function process_keypress (o,shft,options) {
		var scrollTo = o.scrollTop;
		//var tabString = String.fromCharCode(9);
		
		// gecko; o.setSelectionRange is only available when the text box has focus
		if (o.setSelectionRange) gecko_tab (o, shft, options);
		
		// ie; document.selection is always available
		else if (document.selection) ie_tab (o, shft, options);
		
		o.scrollTop = scrollTo;
	}
	
	// plugin defaults
	$.fn.tabby.defaults = {tabString : String.fromCharCode(9)};
	
	function gecko_tab (o, shft, options) {
		var ss = o.selectionStart;
		var es = o.selectionEnd;	
				
		// when there's no selection and we're just working with the caret, we'll add/remove the tabs at the caret, providing more control
		if(ss == es) {
			// SHIFT+TAB
			if (shft) {
				// check to the left of the caret first
				if (ss-options.tabString == o.value.substring(ss-options.tabString.length, ss)) {
					o.value = o.value.substring(0, ss-options.tabString.length) + o.value.substring(ss); // put it back together omitting one character to the left
					o.focus();
					o.setSelectionRange(ss - options.tabString.length, ss - options.tabString.length);
				} 
				// then check to the right of the caret
				else if (ss-options.tabString == o.value.substring(ss, ss + options.tabString.length)) {
					o.value = o.value.substring(0, ss) + o.value.substring(ss + options.tabString.length); // put it back together omitting one character to the right
					o.focus();
					o.setSelectionRange(ss,ss);
				}
			}
			// TAB
			else {			
				o.value = o.value.substring(0, ss) + options.tabString + o.value.substring(ss);
				o.focus();
	    		o.setSelectionRange(ss + options.tabString.length, ss + options.tabString.length);
			}
		} 
		// selections will always add/remove tabs from the start of the line
		else {
			// split the textarea up into lines and figure out which lines are included in the selection
			var lines = o.value.split("\n");
			var indices = new Array();
			var sl = 0; // start of the line
			var el = 0; // end of the line
			var sel = false;
			for (var i in lines) {
				el = sl + lines[i].length;
				indices.push({start: sl, end: el, selected: (sl <= ss && el > ss) || (el >= es && sl < es) || (sl > ss && el < es)});
				sl = el + 1;// for "\n"
			}
			
			// walk through the array of lines (indices) and add tabs where appropriate						
			var modifier = 0;
			for (var i in indices) {
				if (indices[i].selected) {
					var pos = indices[i].start + modifier; // adjust for tabs already inserted/removed
					// SHIFT+TAB
					if (shft && options.tabString == o.value.substring(pos,pos+options.tabString.length)) { // only SHIFT+TAB if there's a tab at the start of the line
						o.value = o.value.substring(0,pos) + o.value.substring(pos + options.tabString.length); // omit the tabstring to the right
						modifier -= options.tabString.length;
					}
					// TAB
					else if (!shft) {
						o.value = o.value.substring(0,pos) + options.tabString + o.value.substring(pos); // insert the tabstring
						modifier += options.tabString.length;
					}
				}
			}
			o.focus();
			var ns = ss + ((modifier > 0) ? options.tabString.length : (modifier < 0) ? -options.tabString.length : 0);
			var ne = es + modifier;
			o.setSelectionRange(ns,ne);
		}
	}
	
	function ie_tab (o, shft, options) {
		var range = document.selection.createRange();
		
		if (o == range.parentElement()) {
			// when there's no selection and we're just working with the caret, we'll add/remove the tabs at the caret, providing more control
			if ('' == range.text) {
				// SHIFT+TAB
				if (shft) {
					var bookmark = range.getBookmark();
					//first try to the left by moving opening up our empty range to the left
				    range.moveStart('character', -options.tabString.length);
				    if (options.tabString == range.text) {
				    	range.text = '';
				    } else {
				    	// if that didn't work then reset the range and try opening it to the right
				    	range.moveToBookmark(bookmark);
				    	range.moveEnd('character', options.tabString.length);
				    	if (options.tabString == range.text) 
				    		range.text = '';
				    }
				    // move the pointer to the start of them empty range and select it
				    range.collapse(true);
					range.select();
				}
				
				else {
					// very simple here. just insert the tab into the range and put the pointer at the end
					range.text = options.tabString; 
					range.collapse(false);
					range.select();
				}
			}
			// selections will always add/remove tabs from the start of the line
			else {
			
				var selection_text = range.text;
				var selection_len = selection_text.length;
				var selection_arr = selection_text.split("\r\n");
				
				var before_range = document.body.createTextRange();
				before_range.moveToElementText(o);
				before_range.setEndPoint("EndToStart", range);
				var before_text = before_range.text;
				var before_arr = before_text.split("\r\n");
				var before_len = before_text.length; // - before_arr.length + 1;
				
				var after_range = document.body.createTextRange();
				after_range.moveToElementText(o);
				after_range.setEndPoint("StartToEnd", range);
				var after_text = after_range.text; // we can accurately calculate distance to the end because we're not worried about MSIE trimming a \r\n
				
				var end_range = document.body.createTextRange();
				end_range.moveToElementText(o);
				end_range.setEndPoint("StartToEnd", before_range);
				var end_text = end_range.text; // we can accurately calculate distance to the end because we're not worried about MSIE trimming a \r\n
								
				var check_html = $(o).html();
				$("#r3").text(before_len + " + " + selection_len + " + " + after_text.length + " = " + check_html.length);				
				if((before_len + end_text.length) < check_html.length) {
					before_arr.push("");
					before_len += 2; // for the \r\n that was trimmed	
					if (shft && options.tabString == selection_arr[0].substring(0,options.tabString.length))
						selection_arr[0] = selection_arr[0].substring(options.tabString.length);
					else if (!shft) selection_arr[0] = options.tabString + selection_arr[0];	
				} else {
					if (shft && options.tabString == before_arr[before_arr.length-1].substring(0,options.tabString.length)) 
						before_arr[before_arr.length-1] = before_arr[before_arr.length-1].substring(options.tabString.length);
					else if (!shft) before_arr[before_arr.length-1] = options.tabString + before_arr[before_arr.length-1];
				}
				
				for (var i = 1; i < selection_arr.length; i++) {
					if (shft && options.tabString == selection_arr[i].substring(0,options.tabString.length))
						selection_arr[i] = selection_arr[i].substring(options.tabString.length);
					else if (!shft) selection_arr[i] = options.tabString + selection_arr[i];
				}
				
				if (1 == before_arr.length && 0 == before_len) {
					if (shft && options.tabString == selection_arr[0].substring(0,options.tabString.length))
						selection_arr[0] = selection_arr[0].substring(options.tabString.length);
					else if (!shft) selection_arr[0] = options.tabString + selection_arr[0];
				}

				if ((before_len + selection_len + after_text.length) < check_html.length) {
					selection_arr.push("");
					selection_len += 2; // for the \r\n that was trimmed
				}
				
				before_range.text = before_arr.join("\r\n");
				range.text = selection_arr.join("\r\n");
				
				var new_range = document.body.createTextRange();
				new_range.moveToElementText(o);
				
				if (0 < before_len)	new_range.setEndPoint("StartToEnd", before_range);
				else new_range.setEndPoint("StartToStart", before_range);
				new_range.setEndPoint("EndToEnd", range);
				
				new_range.select();
				
			} 
		}
	}

// end of closure
})(jQuery);

;/*
 * $ Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/

(function($){

	$.hotkeys = {
		version: "0.8+",

		specialKeys: {
			8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
			20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
			37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del",
			96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
			104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/",
			112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8",
			120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 188: ",", 190: ".",
			191: "/", 224: "meta"
		},

		shiftNums: {
			"`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&",
			"8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<",
			".": ">",  "/": "?",  "\\": "|"
		}
	};

	function keyHandler( handleObj ) {

		var origHandler = handleObj.handler,
			//use namespace as keys so it works with event delegation as well
			//will also allow removing listeners of a specific key combination
			//and support data objects
			keys = (handleObj.namespace || "").toLowerCase().split(" ");
			keys = $.map(keys, function(key) { return key.split("."); });

		//no need to modify handler if no keys specified
		if (keys.length === 1 && (keys[0] === "" || keys[0] === "autocomplete")) {
			return;
		}

		handleObj.handler = function( event ) {
			// Don't fire in text-accepting inputs that we didn't directly bind to
			// important to note that $.fn.prop is only available on $ 1.6+
			if ( this !== event.target && (/textarea|select/i.test( event.target.nodeName ) ||
				event.target.type === "text" || $(event.target).prop('contenteditable') == 'true' )) {
				return;
			}

			// Keypress represents characters, not special keys
			var special = event.type !== "keypress" && $.hotkeys.specialKeys[ event.which ],
				character = String.fromCharCode( event.which ).toLowerCase(),
				key, modif = "", possible = {};

			// check combinations (alt|ctrl|shift+anything)
			if ( event.altKey && special !== "alt" ) {
				modif += "alt_";
			}

			if ( event.ctrlKey && special !== "ctrl" ) {
				modif += "ctrl_";
			}

			// TODO: Need to make sure this works consistently across platforms
			if ( event.metaKey && !event.ctrlKey && special !== "meta" ) {
				modif += "meta_";
			}

			if ( event.shiftKey && special !== "shift" ) {
				modif += "shift_";
			}

			if ( special ) {
				possible[ modif + special ] = true;

			} else {
				possible[ modif + character ] = true;
				possible[ modif + $.hotkeys.shiftNums[ character ] ] = true;

				// "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
				if ( modif === "shift_" ) {
					possible[ $.hotkeys.shiftNums[ character ] ] = true;
				}
			}

			for ( var i = 0, l = keys.length; i < l; i++ ) {
				if ( possible[ keys[i] ] ) {
					return origHandler.apply( this, arguments );
				}
			}
		};
	}

	$.each([ "keydown", "keyup", "keypress" ], function() {
		$.event.special[ this ] = { add: keyHandler };
	});

})(jQuery);

;/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

;/*!
CSS3 ColorPicker (https://github.com/gruppler/CSS3-Colorpicker)
v1.3.2
Copyright (c) 2011 Craig Laparo (https://plus.google.com/114746898337682206892)
Based on "PhotoShop-like JavaScript Color Picker"
Copyright (c) 2007 John Dyer (http://johndyer.name)
MIT style license

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/

(function($){

var PROP_NAME = 'css3colorpicker';
var mainDivId = 'css3colorpicker-div';
var colorDivClass = 'color';
var cpDiv = $('<div id="' + mainDivId + '"></div>');
cpDiv.swatchContainer = $('<div id="' + mainDivId + '-swatchContainer"></div>');
cpDiv.swatches = $('<div id="' + mainDivId + '-swatches"></div>');
cpDiv.addSwatchButton = $('<div id="' + mainDivId + '-add-swatch-button" title="Add Current Color to Swatches" class="tooltip"></div>');
cpDiv.colorDiv = $('<div id="' + mainDivId + '-color" title="Choose Color and Close Color Picker" class="tooltip"></div>');
cpDiv.oldColorDiv = $('<div id="' + mainDivId + '-colorOld" title="Revert to Previous Color" class="tooltip"></div>');
cpDiv.d1Div = $('<div id="' + mainDivId + '-1d"></div>');
cpDiv.d1Div.control = $('<div id="' + mainDivId + '-1dControl"></div>');
cpDiv.d1Div.colorDiv = $('<div id="' + mainDivId + '-1dColor"></div>');
cpDiv.d1Div.gradientDiv = $('<div id="' + mainDivId + '-1dGradient"></div>');
cpDiv.d2Div = $('<div id="' + mainDivId + '-2d"></div>');
cpDiv.d2Div.control = $('<div id="' + mainDivId + '-2dControl"></div>');
cpDiv.d2Div.colorDiv = $('<div id="' + mainDivId + '-2dColor"></div>');
cpDiv.d2Div.gradientDiv = $('<div id="' + mainDivId + '-2dGradient"></div>');
cpDiv.alphaDiv = $('<div id="' + mainDivId + '-alpha"></div>');
cpDiv.alphaDiv.control = $('<div id="' + mainDivId + '-alphaControl"></div>');
cpDiv.inputContainerHSB = $('<ul id="' + mainDivId + '-inputContainer-hsv" class="css3colorpicker-inputContainer"></ul>');
cpDiv.inputContainerRGBA = $('<ul id="' + mainDivId + '-inputContainer-rgba" class="css3colorpicker-inputContainer"></ul>');
cpDiv.inputContainerHex = $('<ul id="' + mainDivId + '-inputContainer-hex" class="css3colorpicker-inputContainer"></ul>');
cpDiv.inputs = {
	h: $('<input type="text" data-mode="h" id="' + mainDivId + '-h"/>'),
	s: $('<input type="text" data-mode="s" id="' + mainDivId + '-s"/>'),
	v: $('<input type="text" data-mode="v" id="' + mainDivId + '-v"/>'),
	r: $('<input type="text" id="' + mainDivId + '-r"/>'),
	g: $('<input type="text" id="' + mainDivId + '-g"/>'),
	b: $('<input type="text" id="' + mainDivId + '-b"/>'),
	a: $('<input type="text" id="' + mainDivId + '-a"/>'),
	hex: $('<input type="text" id="' + mainDivId + '-hex" maxlength="8" />')
}
cpDiv.append(
	$('<div id="' + mainDivId + '-container"></div>').append(
		$('<div id="' + mainDivId + '-colorContainer"></div>').append(
			cpDiv.colorDiv,
			cpDiv.oldColorDiv
		),
		cpDiv.d1Div.append(cpDiv.d1Div.colorDiv, cpDiv.d1Div.gradientDiv, cpDiv.d1Div.control),
		cpDiv.d2Div.append(cpDiv.d2Div.colorDiv, cpDiv.d2Div.gradientDiv, cpDiv.d2Div.control),
		cpDiv.alphaDiv.append(cpDiv.alphaDiv.control),
		cpDiv.inputContainerHSB.append(
			$('<li>H <span>&deg;</span></li>').append(cpDiv.inputs.h),
			$('<li>S <span>%</span></li>').append(cpDiv.inputs.s),
			$('<li>B <span>%</span></li>').append(cpDiv.inputs.v)
		),
		cpDiv.inputContainerRGBA.append(
			$('<li>R </li>').append(cpDiv.inputs.r),
			$('<li>G </li>').append(cpDiv.inputs.g),
			$('<li>B </li>').append(cpDiv.inputs.b),
			$('<li class="alpha">A <span>%</span></li>').append(cpDiv.inputs.a)
		),
		cpDiv.inputContainerHex.append(
			$('<li># </li>').append(cpDiv.inputs.hex)
		)
	),
	cpDiv.swatchContainer.append(cpDiv.swatches, cpDiv.addSwatchButton)
);

function Colorpicker(){
	this._mainDivId = mainDivId;
	this._colorDivClass = colorDivClass;

	this._defaults = {
		// Options
		showAnim: true,			// Fade in/out
		duration: 200,			// Fade duration
		color: 'FFFFFF',		// Default color
		allowNull: false,		// Allow an empty color value; otherwise default
								//   to the default color
		realtime: true,			// Update instantly
		invertControls: true,	// Invert color of mouse controls based on luminance
		controlStyle: 'simple',	// Mouse control theme [simple|raised|inset];
								//   separate multiple themes with a space
		swatches: true,			// [true|false] to enable/disable,
								//   or an array of hex codes to pre-fill
		alpha: false,			// [true|false] to enable/disable alpha
		alphaHex: false,		// [true|false] to enable/disable 4-byte hex
								//   in the format '#AARRGGBB'

		// Events
		beforeShow: null,		// Fired before the color picker is shown
		onClose: null,			// Fired when the color picker is hidden
		onSelect: null,			// Fired when the color is set
		onAddSwatch: null,		// Fired when a new color swatch is added
		onDeleteSwatch: null
	};
};

$.extend(Colorpicker.prototype, {
	cpDiv: cpDiv,
	mode: 'h',	// [h|s|v]
	markerClassName: 'hasColorpicker',
	controlsClassPrefix: 'controls-',
	minLum: 50,
	swatches: [],
	swatchLimit: 15,


	setDefaults: function(settings){
		extendRemove(this._defaults, settings || {});
		return this;
	},

	_setMode: function(mode){
		if(['h','s','v'].indexOf(mode) >= 0){
			this.cpDiv.removeClass('mode-' + this.mode);
			this.cpDiv.addClass('mode-' + mode);
			this.mode = mode;
			$.colorpicker._updateMaps();
			$.colorpicker._updateControls();
		}
	},

	refresh: function(){
		this._updateColorpicker(true);
		return this;
	},

	color: function(args){
		this.r = 0;
		this.g = 0;
		this.b = 0;
		this.a = 1;

		this.h = 0;
		this.s = 0;
		this.v = 0;
		this.l = 0;

		this.hex = '';
		this.hexa = '';
		this.rgb = 'rgb(0,0,0)';
		this.rgba = 'rgba(0,0,0,1)';

		// Floating-point
		this._a = 1;
		this._h = 0;
		this._s = 0;
		this._v = 0;

		this.setRgb = function(r, g, b, a){
			this.isNull = false;

			this.r = Math.max(0, Math.min(255, Math.round(r)));
			this.g = Math.max(0, Math.min(255, Math.round(g)));
			this.b = Math.max(0, Math.min(255, Math.round(b)));
			this._a = !isset(a) ? this._a || 100 : Math.max(0, Math.min(100, parseFloat(a)));
			this.a = Math.round(this._a);

			var newHsv = $.colorpicker.rgbToHsv(this);
			this._h = newHsv.h;
			this._s = newHsv.s;
			this._v = newHsv.v;
			this.h = Math.round(newHsv.h);
			this.s = Math.round(newHsv.s);
			this.v = Math.round(newHsv.v);
			this.l = $.colorpicker.rgbToLum(this);

			this.hex = $.colorpicker.rgbToHex(this);
			this.hexa = $.colorpicker.rgbToHex(this);
			this.rgb = 'rgb('+this.r+','+this.g+','+this.b+')';
			this.rgba = 'rgba('+this.r+','+this.g+','+this.b+','+this.a/100+')';
		};

		this.setHsv = function(h, s, v, a){
			this.isNull = false;

			this._h = Math.max(0, Math.min(360, parseFloat(h)));
			this._s = Math.max(0, Math.min(100, parseFloat(s)));
			this._v = Math.max(0, Math.min(100, parseFloat(v)));
			this.h = Math.round(this._h);
			this.s = Math.round(this._s);
			this.v = Math.round(this._v);
			this._a = !isset(a) ? this._a || 100 : Math.max(0, Math.min(100, parseFloat(a)));
			this.a = Math.round(this._a);

			var newRgb = $.colorpicker.hsvToRgb(this);
			this.r = Math.round(newRgb.r);
			this.g = Math.round(newRgb.g);
			this.b = Math.round(newRgb.b);
			this.l = $.colorpicker.rgbToLum(this);

			this.hex = $.colorpicker.rgbToHex(newRgb);
			this.hexa = $.colorpicker.rgbToHex(newRgb);
			this.rgb = 'rgb('+this.r+','+this.g+','+this.b+')';
			this.rgba = 'rgba('+this.r+','+this.g+','+this.b+','+this.a/100+')';
		};

		this.setHex = function(hex){
			this.isNull = false;

			this.hexa = $.colorpicker.validateHex(hex);
			this.hex = $.colorpicker.validateHex(hex);

			var newRgb = $.colorpicker.hexToRgb(this.hexa);
			this.r = newRgb.r;
			this.g = newRgb.g;
			this.b = newRgb.b;
			this._a = newRgb.a;
			this.a = Math.round(newRgb.a);

			var newHsv = $.colorpicker.rgbToHsv(newRgb);
			this._h = newHsv.h;
			this._s = newHsv.s;
			this._v = newHsv.v;
			this.h = Math.round(newHsv.h);
			this.s = Math.round(newHsv.s);
			this.v = Math.round(newHsv.v);
			this.l = $.colorpicker.rgbToLum(this);

			this.rgb = 'rgb('+this.r+','+this.g+','+this.b+')';
			this.rgba = 'rgba('+this.r+','+this.g+','+this.b+','+this.a/100+')';
		};

		if(args){
			if('hexa' in args){
				this.setHex(args.hexa);
			}else if('hex' in args){
				this.setHex(args.hex);
			}else if('rgb' in args){
				var rgb = args.rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(0?\.?\d+))?\)/i);
				if(rgb){
					var a = 100;
					if(typeof(rgb[4]) !== 'undefined'){
						a *= rgb[4];
					}
					this.setRgb(rgb[1], rgb[2], rgb[3], a);
				}
			}else if('r' in args){
				this.setRgb(args.r, args.g, args.b, args.a);
			}else if('h' in args){
				this.setHsv(args.h, args.s, args.v, args.a);
			}
		}

		return this;
	},

	_attachColorpicker: function(target, settings){
		var input = $(target);
		if(input.hasClass(this.markerClassName)){
			return;
		}
		input.addClass(this._colorDivClass).addClass(this.markerClassName);
		if(!target.id){
			this.uuid += 1;
			target.id = 'cp' + this.uuid;
		}

		// check for settings on the control itself - in namespace 'color:'
		var inlineSettings = null;
		for(var attrName in this._defaults){
			var attrValue = target.getAttribute('color:' + attrName);
			if(attrValue){
				inlineSettings = inlineSettings || {};
				try{
					inlineSettings[attrName] = eval(attrValue);
				}catch(err){
					inlineSettings[attrName] = attrValue;
				}
			}
		}

		var inst = this._newInst(input);
		inst.settings = $.extend({}, settings || {}, inlineSettings || {});
		if(this._get(inst, 'alpha')){
			input.addClass('alpha')[inst.settings.alphaHex ? 'addClass' : 'removeClass']('alphaHex');
		}else{
			input.removeClass('alpha').removeClass('alphaHex');
		}
		this._setColor(inst, input.val() || input.data('color') || this._get(inst, 'color'), true);

		var swatches = this._get(inst, 'swatches');
		if(swatches){
			this.addSwatch(swatches);
			//this.addSwatch(inst.settings.color, true);
		}

		if(input.is("input")){
			input.focus(function(){
				$.colorpicker._showColorpicker(target);
			}).keyup(function(){
				$.colorpicker._setColor(inst, this.value);
				$.colorpicker._updateColorpicker();
			}).bind("setData.colorpicker", function(e, key, value) {
				inst.settings[key] = value;
			}).bind("getData.colorpicker", function(e, key) {
				return $.colorpicker._get(inst, key);
			});
		}

		input.click(function(){
			$.colorpicker._showColorpicker(target);
		}).bind("refresh", function(){
			var $this = $(this);
			var inst = $.colorpicker._getInst(this);
			$.colorpicker._setColor(inst, input.val() || input.data('color') || $.colorpicker._get(inst, 'color').hexa, true);
			$.colorpicker._updateColorpicker();
		});
	},

	_setColor: function(inst, color, force){
		if(!color || color.isNull){
			color = new $.colorpicker.color({hex:this._defaults.color});
			color.isNull = this._get(inst, 'allowNull');
		}
		if(typeof(color) == 'string' || typeof(color) == 'number'){
			if (color.match(/^rgb/)) {
				color = new $.colorpicker.color({rgb:color});
			} else {
				color = new $.colorpicker.color({hex:color});
			}
		}

		inst.settings.color = new $.colorpicker.color({hex:color.hexa});
		if(!this._isDragging){
			inst.color = new $.colorpicker.color({hex:color.hexa});
		}
		inst.color.isNull = inst.settings.color.isNull = color.isNull;
		this._updateTarget(inst, force);

		if(!this._isLastColor(color)){
			inst.lastColor = color.isNull ? null : color.hexa;
			var onSelect = this._get(inst, 'onSelect');
			if(typeof(onSelect) == 'function'){
				onSelect(color.isNull ? null : color, inst);
			}
		}
	},

	_newInst: function(target){
		var id = target[0].id.replace(/([^F-Za-z0-9_-])/g, '\\\\$1');
		var inst = {
			id: id,
			input: target,
			cpDiv: cpDiv,
			color: new $.colorpicker.color(),
			lastColor: null
		};
		target.data(PROP_NAME, inst);
		return inst;
	},

	_checkExternalClick: function(e){
		if(!$.colorpicker._curInst){
			return;
		}
		var $target = $(e.target);
		if($target[0].id != $.colorpicker._mainDivId &&
			!$target.is('label[for="'+$.colorpicker._curInst.input[0].id+'"]') &&
			$target.parents('#' + $.colorpicker._mainDivId).length == 0 &&
			!$target.hasClass($.colorpicker.markerClassName)
		){
			$.colorpicker._hideColorpicker();
		}
	},

	_optionColorpicker: function(target, name, value){
		var inst = this._getInst(target);
		var show = false;
		if(arguments.length == 2 && typeof name == 'string'){
			return (name == 'defaults' ? $.extend({}, $.colorpicker._defaults) :
				(inst ? (name == 'all' ? $.extend({}, inst.settings) :
				this._get(inst, name)) : null));
		}
		if(inst && this._curInst == inst){
			this._hideColorpicker(target, true);
			show = true;
		}
		var settings = name || {};
		if(typeof name == 'string'){
			settings = {};
			if(inst && name == 'color' && isset(value)){
				var color = value ? new this.color({hex:value}) : new this.color({hex:this._defaults.color});
				color.isNull = !value && this._get(inst, 'allowNull');
				value = color;
				this._setColor(inst, value, true);
				this.addSwatch(value, true);
			}
			if(name == 'swatches' && value){
				this.addSwatch(value);
			}
			settings[name] = value;
		}
		if(inst){
			extendRemove(inst.settings, settings);
		}
		if(show){
			this._showColorpicker(target, true);
		}
	},

	_showColorpicker: function(input, noAnim){
		input = input.target || input;
		var $input = $(input);
		if(input.disabled){
			return;
		}
		var inst = $.colorpicker._getInst(input);
		if(this._curInst && this._curInst != inst){
			this._triggerOnClose();
			this.cpDiv.stop(true, true);
		}
		this._curInst = inst;
		inst.lastColor = inst.color.isNull ? null : inst.color.hexa;
		var a = this._get(inst, 'alpha');
		$.colorpicker._updateColorpicker();
		inst.input.addClass('selected');

		var showAnim = !noAnim && this._get(inst, 'showAnim');
		var duration = this._get(inst, 'duration');
		var postProcess = function(){
			$.colorpicker.cpDiv.addClass('visible');
		};

		var styles = $.colorpicker._get(inst, 'controlStyle').split(/\s+/);
		for(var i = 0; i < styles.length; i++){
			cpDiv.addClass(this.controlsClassPrefix + styles[i]);
		}
		cpDiv[a?'addClass':'removeClass']('alphaOn');
		cpDiv[this._get(inst, 'swatches')?'addClass':'removeClass']('swatchesOn');
		this.cpDiv.oldColorDiv.data('color', inst.color.isNull ? null : inst.color.hexa).css('background-color', inst.color[a?'rgba':'rgb']);

		var beforeShow = this._get(inst, 'beforeShow');
		if(typeof(beforeShow) == 'function'){
			beforeShow(inst.input, inst);
		}

		this._colorpickerShowing = true;
		this.cpDiv[showAnim ? 'fadeIn' : 'show']((showAnim ? duration : null), postProcess);
		if(!showAnim){
			postProcess();
		}

		this._positionColorpicker();
	},

	_positionColorpicker: function(){
		var $input = $.colorpicker._curInst.input;
		var cpDiv = this.cpDiv;
		var offset = $input.offset();
		var width = cpDiv.outerWidth();
		var height = cpDiv.defaultHeight + (this._get(this._getInst($input), 'alpha') ? cpDiv.alphaHeight : 0) + (this._get(this._getInst($input), 'swatches') ? cpDiv.swatchHeight : 0);
		var winWidth = $(window).width();
		var winHeight = $(window).height();
		var margin = 10;
		height += margin;
		offset.left += $input.outerWidth() + margin;
		if(offset.top + height > winHeight){
			offset.top = winHeight - height;
		}
		if(offset.left + width > winWidth){
			offset.left = winWidth - width;
		}
		cpDiv.css({top:0, left:0}).offset(offset);
	},

	_hideColorpicker: function(input, noAnim){
		var inst = this._curInst;
		if(!inst || (input && inst != this._getInst(input))){
			return;
		}
		var postProcess = function(){
			$.colorpicker._triggerOnClose();
			$.colorpicker._curInst = null;
		};
		if(this._colorpickerShowing){
			var showAnim = !noAnim && this._get(inst, 'showAnim');
			var duration = this._get(inst, 'duration');
			this.cpDiv[showAnim ? 'fadeOut' : 'hide']((showAnim ? duration : null), postProcess);
			if(!showAnim){
				postProcess();
			}
			this.cpDiv.removeClass('visible');
			this._colorpickerShowing = false;

			var onClose = this._get(inst, 'onClose');
			if(typeof(onClose) == 'function'){
				onClose(inst.color, inst);
			}
		}else{
			postProcess();
		}
	},

	_triggerOnClose: function(){
		var inst = this._curInst;
		if(!inst){
			return;
		}
		inst.input.removeClass('selected');
		$.colorpicker.addSwatch(inst.color, true);
		this._setColor(inst, inst.color);
		cpDiv.removeClass(this.controlsClassPrefix+'invert');

		var styles = $.colorpicker._get(inst, 'controlStyle').split(/\s+/);
		for(var i = 0; i < styles.length; i++){
			cpDiv.removeClass(this.controlsClassPrefix + styles[i]);
		}
	},

	_updateColorpicker: function(force){
		var inst = this._curInst;
		if(!inst){
			return;
		}
		var a = this._get(inst, 'alpha');
		this.cpDiv.colorDiv.data('color', inst.color.isNull ? null : inst.color.hexa).css('background-color', inst.color[a?'rgba':'rgb']);
		cpDiv.d2Div.control.css('background-color', inst.color.rgb);
		$.colorpicker._updateInputs(force);
		$.colorpicker._updateMaps();
		$.colorpicker._updateControls();
		if(this._get(inst, 'realtime')){
			this._setColor(inst, inst.color, force);
		}
	},

	_updateTarget: function(inst, force){
		var a = this._get(inst, 'alpha');
		var ah = this._get(inst, 'alphaHex');
		if(inst.color.isNull){
			inst.input.parent().addClass('color-null');
		}else{
			inst.input.css({
				backgroundColor: inst.color[a?'rgba':'rgb'],
				color: (inst.color.l < $.colorpicker.minLum) ? '#fff' : '#000'
			}).parent().removeClass('color-null');
		}

		inst.input.data('color', inst.color.isNull ? null : inst.color.hexa);
		if(force || !inst.input.is(':focus')){
			var val = inst.input.val() || '';
			if(inst.color.isNull){
				inst.input.val('');
			}else{
				inst.input.val(
					val.indexOf('#') >= 0 ?
					'#' + inst.color[ah?'hexa':'hex'] :
					inst.color[ah?'hexa':'hex']
				)
			}
			if(val != inst.input.val()){
				inst.input.trigger('change');
			}
		}
	},

	_updateInputs: function(force){
		var inst = this._curInst;
		if(!inst){
			return;
		}
		var ah = this._get(inst, 'alphaHex');
		for(var i in this.cpDiv.inputs){
			if(i && isset(inst.color[i])){
				if(force || !this.cpDiv.inputs[i].is(':focus')){
					if(i == 'hex'){
						this.cpDiv.inputs[i].val(inst.color.isNull ? '' : inst.color[ah ? 'hexa' : i]);
					}else{
						this.cpDiv.inputs[i].val(inst.color[i]);
					}
				}
			}
		}
	},

	_updateMaps: function(){
		var inst = this._curInst;
		if(!inst){
			return;
		}
		this.cpDiv.alphaDiv.css('background-color', inst.color.rgb);
		switch(this.mode){
			case 'h':
				this.cpDiv.d1Div.gradientDiv.css('background', '');
				this.cpDiv.d2Div.colorDiv.css('background-color', new this.color({
					h: inst.color.h,
					s: 100,
					v: 100
				}).rgb);
				this.cpDiv.d1Div.gradientDiv.css('opacity', 1 - inst.color.v/100);
				this.cpDiv.d1Div.colorDiv.css('opacity', inst.color.s/100);
				this.cpDiv.d2Div.colorDiv.css('opacity', 1);
				this.cpDiv.d2Div.gradientDiv.css('opacity', 1);
			break;

			case 's':
				this.cpDiv.d1Div.colorDiv.css('background-color', new this.color({
					h: inst.color.h,
					s: 100,
					v: 100
				}).rgb);
				this.cpDiv.d1Div.gradientDiv.css('opacity', 1 - inst.color.v/100);
				this.cpDiv.d1Div.colorDiv.css('opacity', 1);
				this.cpDiv.d2Div.colorDiv.css('opacity', inst.color.s/100);
				this.cpDiv.d2Div.gradientDiv.css('opacity', 1);
			break;

			case 'v':
				this.cpDiv.d1Div.gradientDiv.css('background', '');
				this.cpDiv.d1Div.colorDiv.css('background-color', new this.color({
					h: inst.color.h,
					s: inst.color.s,
					v: 100
				}).rgb);
				this.cpDiv.d1Div.gradientDiv.css('opacity', 1);
				this.cpDiv.d1Div.colorDiv.css('opacity', 1);
				this.cpDiv.d2Div.colorDiv.css('opacity', 1);
				this.cpDiv.d2Div.gradientDiv.css('opacity', 1 - inst.color.v/100);
			break;
		}
		$.colorpicker._updateControl();
	},

	_updateControls: function(){
		if(!this._curInst || this._isDragging){
			return;
		}
		var inst = this._curInst;

		var x, y, z, a;
		switch(this.mode){
			case 'h':
				x = inst.color._s*255/100;
				y = 255 - inst.color._v*255/100;
				z = 255 - inst.color._h*255/360;
				a = inst.color._a*255/100;
			break;

			case 's':
				x = inst.color._h*255/360;
				y = 255 - inst.color._v*255/100;
				z = 255 - inst.color._s*255/100;
				a = inst.color._a*255/100;
			break;

			case 'v':
				x = inst.color._h*255/360;
				y = 255 - inst.color._s*255/100;
				z = 255 - inst.color._v*255/100;
				a = inst.color._a*255/100;
			break;
		}

		$.colorpicker._moveControl1d(z, true);
		$.colorpicker._moveControl2d(x, y, true);
		$.colorpicker._moveControlAlpha(a, true);
	},

	_moveControl1d: function(z, moveOnly){
		if(!$.colorpicker._curInst) return;
		var inst = $.colorpicker._curInst;

		cpDiv.d1Div.control.css({top: Math.max(0, Math.min(255, Math.round(z)))+'px'});

		if(!moveOnly){
			switch($.colorpicker.mode){
				case 'h':
					z = 360 - z*360/256;
				break;

				case 's':
				case 'v':
					z = 100 - z*100/256;
				break;
			}

			inst.color['_'+$.colorpicker.mode] = z;
			inst.color.setHsv(inst.color._h, inst.color._s, inst.color._v, inst.color.a);
			$.colorpicker._updateColorpicker(true);
		}
	},

	_moveControl2d: function(x, y, moveOnly){
		if(!$.colorpicker._curInst) return;
		var inst = $.colorpicker._curInst;

		cpDiv.d2Div.control.css({
			left: Math.max(0, Math.min(255, Math.round(x)))+'px',
			top: Math.max(0, Math.min(255, Math.round(y)))+'px'
		});

		if(!moveOnly){
			switch($.colorpicker.mode){
				case 'h':
					x = x*100/256;
					y = 100 - y*100/256;
					inst.color._s = x;
					inst.color._v = y;
				break;

				case 's':
				case 'v':
					x = x*360/256;
					y = 100 - y*100/256;
					inst.color._h = x;
					inst.color[$.colorpicker.mode == 's' ? '_v' : '_s'] = y;
				break;
			}

			inst.color.setHsv(inst.color._h, inst.color._s, inst.color._v, inst.color.a);
			$.colorpicker._updateColorpicker(true);
		}
	},

	_moveControlAlpha: function(a, moveOnly){
		if(!$.colorpicker._curInst) return;
		var inst = $.colorpicker._curInst;

		cpDiv.alphaDiv.control.css({left: Math.max(0, Math.min(255, parseInt(a)))+'px'});

		if(!moveOnly){
			a *= 100/256;

			inst.color.a = a;
			inst.color.setHsv(inst.color._h, inst.color._s, inst.color._v, inst.color.a);
			$.colorpicker._updateColorpicker(true);
		}
	},

	_mousemoveControl1d: function(e){
		$.colorpicker._moveControl1d(
			e.pageY - $.colorpicker.cpDiv.d1Div.offset().top
		);
		e.preventDefault();
		return false;
	},

	_mousemoveControl2d: function(e){
		var offset = $.colorpicker.cpDiv.d2Div.offset();
		$.colorpicker._moveControl2d(
			e.pageX - offset.left,
			e.pageY - offset.top
		);
		e.preventDefault();
		return false;
	},

	_mousemoveControlAlpha: function(e){
		$.colorpicker._moveControlAlpha(
			e.pageX - $.colorpicker.cpDiv.alphaDiv.offset().left
		);
		e.preventDefault();
		return false;
	},

	_updateControl: function(){
		if(!this._curInst || !$.colorpicker._get(this._curInst, 'invertControls')){
			return false;
		}

		if(this._curInst.color.l < $.colorpicker.minLum){
			cpDiv.addClass(this.controlsClassPrefix+'invert');
		}else{
			cpDiv.removeClass(this.controlsClassPrefix+'invert');
		}
	},

	_submit: function(color, isSwatch){
		var inst = this._curInst;
		if(!inst){
			return;
		}

		if(!isset(color)){
			var color = inst.color,
				isNull = color.isNull && this._get(inst, 'allowNull');
		}else if(!color){
			var isNull = this._get(inst, 'allowNull');
			color = this._defaults.color;
		}

		if(typeof(color) == 'string' || typeof(color) == 'number'){
			color = new this.color({hex:color});
			if(!this._get(inst, 'alpha')){
				color.a = color._a = 100;
			}
		}else{
			color = new this.color({hex:color[this._get(inst, 'alpha') ? 'hexa' : 'hex']});
		}
		color.isNull = isNull;

		if(this._isCurrentColor(color)){
			$.colorpicker._hideColorpicker();
			isSwatch = true;
		}else{
			$.colorpicker._setColor(inst, color, true);
			$.colorpicker._updateColorpicker(true);
		}

		$.colorpicker.addSwatch(color, isSwatch);
	},

	_isCurrentColor: function(color){
		var inst = this._curInst;
		if(!inst){
			return;
		}
		if(!color || color.isNull){
			return inst.settings.color.isNull && inst.color.isNull;
		}
		if(typeof(color) == 'string' || typeof(color) == 'number'){
			color = new this.color({hex:color});
		}
		return this._get(inst, 'alpha') ? (
			color.hexa == inst.settings.color.hexa &&
			color.hexa == inst.color.hexa
		) : (
			color.hex == inst.settings.color.hex &&
			color.hex == inst.color.hex
		);
	},

	_isLastColor: function(color){
		var inst = this._curInst;
		if(!inst){
			return;
		}
		if(!color || color.isNull){
			return inst.lastColor === null;
		}
		var lastColor = new this.color({hex: inst.lastColor});

		if(typeof(color) == 'string' || typeof(color) == 'number'){
			color = new this.color({hex:color});
		}
		return this._get(inst, 'alpha')
			? color.hexa == lastColor.hexa
			: color.hex == lastColor.hex;
	},

	addSwatch: function(color, newOnly){
		var inst = this._curInst;
		if(inst && !this._get(inst, 'swatches') || !color || color.isNull){
			return false;
		}
		if(typeof(color) == 'string' || typeof(color) == 'number'){
			color = new this.color({hex:color});
		}
		if(color.hexa){
			var index = this.swatches.indexOf(color.hexa);
			if(index < 0){
				this.swatches.unshift(color.hexa);
				var swatch = $('<div/>')
					.addClass('swatch')
					.attr('title', 'Right-click to delete swatch')
					.data('color', color.hexa)
					.css({
						backgroundColor: color.rgb,
						width: 0,
						opacity: 0
					})
					.append($('<div/>').css('background', color.rgba));
				window.setTimeout(function(){
					swatch.css({
						width: '',
						opacity: 1
					});
				},0);
				this.cpDiv.swatches.prepend(swatch);
			}else{
				if(newOnly){
					return false;
				}
				this.swatches.splice(index, 1);
				this.swatches.unshift(color.hexa);
				this.cpDiv.swatches.prepend(this.cpDiv.swatches.children().eq(index));
			}
			if(this.swatchLimit){
				this.swatches = this.swatches.slice(0, this.swatchLimit);
			}

			var onAddSwatch = inst ?
				this._get(inst, 'onAddSwatch'):
				this._defaults.onAddSwatch;
			if(typeof(onAddSwatch) == 'function'){
				onAddSwatch(color, this.swatches);
			}
		}else if(color.length && color[0]){
			for(var i = color.length - 1; i >= 0; i--){
				this.addSwatch(color[i]);
			}
		}
		return this;
	},

	deleteSwatch: function(swatch) {

		var swatch = $(swatch);

		if ( typeof swatch != 'object' || !swatch || !swatch.length )
			return false;

		this.swatches.splice(this.swatches.indexOf(swatch.data('color')), 1);

		/* Fire callback */
		var inst = this._curInst;

		var onDeleteSwatch = inst ?
			this._get(inst, 'onDeleteSwatch'):
			this._defaults.onDeleteSwatch;

		if ( typeof(onDeleteSwatch) == 'function' )
			onDeleteSwatch(swatch.data('color'), this.swatches);

		/* Remove swatch element */
		swatch.remove();

	},

	clearSwatches: function(){
		this.swatches = [];
		this.cpDiv.swatches.empty();
		return this;
	},

	_useSwatch: function(e){
		$.colorpicker._setColor($.colorpicker._curInst, $(this).data('color'));
		$.colorpicker._updateColorpicker();
		e.preventDefault();
		return false;
	},

	_get: function(inst, key){
		return isset(inst.settings[key]) ? inst.settings[key] : this._defaults[key];
	},

	_getInst: function(target){
		try{
			return $(target).data(PROP_NAME);
		}catch(e){
			throw 'Missing instance data for this colorpicker';
		}
	},

	// Color functions

	hexToRgb: function(hex){
		hex = this.validateHex(hex);

		var r='00', g='00', b='00';

		if(hex.length == 6){
			a = 'FF';
			r = hex.substring(0,2);
			g = hex.substring(2,4);
			b = hex.substring(4,6);
		}
		if(hex.length == 8){
			a = hex.substring(0,2);
			r = hex.substring(2,4);
			g = hex.substring(4,6);
			b = hex.substring(6,8);
		}

		return { r:this.hexToInt(r), g:this.hexToInt(g), b:this.hexToInt(b), a:(100*this.hexToInt(a)/255) };
	},

	_hexRegExp: /[a-f0-9]{0,2}([a-f0-9]{6})|[a-f0-9]?([a-f0-9]{3})/i,
	_hexaRegExp: /([a-f0-9]{8}|[a-f0-9]{6}|[a-f0-9]{4}|[a-f0-9]{3})/i,

	validateHex: function(hex){
		if(!hex) return false;
		hex = (''+hex).match(this._hexaRegExp);
		hex = hex ? (hex[1] || hex[2]) : ('00000000');

		hex = hex.toUpperCase();
		if(hex.length == 3){
			hex = hex.split('');
			hex = [hex[0],hex[0],hex[1],hex[1],hex[2],hex[2]].join('');
		}
		if(hex.length == 4){
			hex = hex.split('');
			hex = [hex[0],hex[0],hex[1],hex[1],hex[2],hex[2],hex[3],hex[3]].join('');
		}
		if(hex.length != 8){
			hex = 'FF'+hex;
		}

		/* If 100% alpha then remove the FF from beginning of hex to normalize things */
		if ( hex.substring(0, 2) == 'FF' )
			hex = hex.substring(2, 8);

		return hex;
	},

	rgbToHex: function(rgb){

		var alphaHex = (this.intToHex(Math.round(rgb.a*255/100)));

		/* If 100% alpha then don't make it an rgba hex, just KISS (http://en.wikipedia.org/wiki/KISS_principle), yo */
		if ( alphaHex == 'FF' )
			alphaHex = '';

		var rgbHex = this.intToHex(rgb.r) + this.intToHex(rgb.g) + this.intToHex(rgb.b);

		return alphaHex + rgbHex;
	},

	intToHex: function(dec){
		var result = (parseInt(dec).toString(16));
		if(result.length == 1)
			result = ("0" + result);
		return result.toUpperCase();
	},

	hexToInt: function(hex){
		return(parseInt(hex,16));
	},

	rgbToLum: function(rgb){
		return Math.abs(Math.round((0.2126*rgb.r + 0.7152*rgb.g + 0.0722*rgb.b)/2.55));
	},

	rgbToHsv: function(rgb){
		var r = rgb.r / 255;
		var g = rgb.g / 255;
		var b = rgb.b / 255;

		hsv = {h:0, s:0, v:0, a:(isset(rgb._a) ? rgb._a : rgb.a)};

		var min = 0
		var max = 0;

		if(r >= g && r >= b){
			max = r;
			min = (g > b) ? b : g;
		}else if(g >= b && g >= r){
			max = g;
			min = (r > b) ? b : r;
		}else{
			max = b;
			min = (g > r) ? r : g;
		}

		hsv.v = max;
		hsv.s = (max) ? ((max - min) / max) : 0;

		if(!hsv.s){
			hsv.h = 0;
		}else{
			delta = max - min;
			if(r == max){
				hsv.h = (g - b) / delta;
			}else if(g == max){
				hsv.h = 2 + (b - r) / delta;
			}else{
				hsv.h = 4 + (r - g) / delta;
			}

			hsv.h = hsv.h * 60;
			if(hsv.h < 0){
				hsv.h += 360;
			}
		}

		hsv.s = Math.abs(hsv.s * 100);
		hsv.v = Math.abs(hsv.v * 100);

		return hsv;
	},

	hsvToRgb: function(hsv){

		rgb = {r:0, g:0, b:0, a:(isset(hsv._a) ? hsv._a : hsv.a)};

		var h = isset(hsv._h) ? hsv._h : hsv.h;
		var s = isset(hsv._s) ? hsv._s : hsv.s;
		var v = isset(hsv._v) ? hsv._v : hsv.v;

		if(s == 0){
			if(v == 0){
				rgb.r = rgb.g = rgb.b = 0;
			}else{
				rgb.r = rgb.g = rgb.b = Math.abs(v * 255 / 100);
			}
		}else{
			if(h == 360){
				h = 0;
			}
			h /= 60;

			// 100 scale
			s = s/100;
			v = v/100;

			var i = parseInt(h);
			var f = h - i;
			var p = v * (1 - s);
			var q = v * (1 - (s * f));
			var t = v * (1 - (s * (1 - f)));
			switch (i){
				case 0:
					rgb.r = v;
					rgb.g = t;
					rgb.b = p;
					break;
				case 1:
					rgb.r = q;
					rgb.g = v;
					rgb.b = p;
					break;
				case 2:
					rgb.r = p;
					rgb.g = v;
					rgb.b = t;
					break;
				case 3:
					rgb.r = p;
					rgb.g = q;
					rgb.b = v;
					break;
				case 4:
					rgb.r = t;
					rgb.g = p;
					rgb.b = v;
					break;
				case 5:
					rgb.r = v;
					rgb.g = p;
					rgb.b = q;
					break;
			}

			rgb.r = Math.abs(Math.round(rgb.r * 255));
			rgb.g = Math.abs(Math.round(rgb.g * 255));
			rgb.b = Math.abs(Math.round(rgb.b * 255));
		}

		return rgb;
	}
});

$.fn.colorpicker = function(options){
	if(!this.length){
		return this;
	}

	if(!$.colorpicker.initialized){
		$(document).mousedown($.colorpicker._checkExternalClick)
			.find('body').append($.colorpicker.cpDiv.hide())
			.find('#'+mainDivId+'-'+$.colorpicker.mode).closest('li').addClass('selected');

		for(var i in cpDiv.inputs){
			if(i){
				var $input = $(cpDiv.inputs[i]);
				if($input.data('mode')){
					$input.focus(function(){
						var $this = $(this);
						$this.closest('li').addClass('selected')
							.siblings('.selected').removeClass('selected');
						$.colorpicker._setMode($this.data('mode'));
					}).closest('li').click(function(){
						$(this).find('input').focus();
					});
				}

				$input.blur(function(){
					$.colorpicker._updateInputs();
				});

				switch(i){
					case 'h':
					case 's':
					case 'v':
					case 'a':
						$input.keydown(function(e){
							if(!$.colorpicker._curInst) return;
							var $this = $(this);
							var inst = $.colorpicker._curInst;
							switch(e.keyCode){
								case 38:
								case 40:
									$this.val(parseInt($this.val()) + (e.shiftKey ? 10 : 1) * (e.keyCode == 40 ? -1 : 1));
									inst.color.setHsv(cpDiv.inputs.h.val(), cpDiv.inputs.s.val(), cpDiv.inputs.v.val(), cpDiv.inputs.a.val());
									$.colorpicker._updateColorpicker(true);
								break;

								case 13:
									$.colorpicker._submit();
								break;

								default:
									return;
							}
						}).keyup(function(){
							if(!$.colorpicker._curInst) return;
							$.colorpicker._curInst.color.setHsv(cpDiv.inputs.h.val(), cpDiv.inputs.s.val(), cpDiv.inputs.v.val(), cpDiv.inputs.a.val());
							$.colorpicker._updateColorpicker();
						});
					break;

					case 'r':
					case 'g':
					case 'b':
						$input.keydown(function(e){
							if(!$.colorpicker._curInst) return;
							var $this = $(this);
							var inst = $.colorpicker._curInst;
							switch(e.keyCode){
								case 38:
								case 40:
									$this.val(parseInt($this.val()) + (e.shiftKey ? 10 : 1) * (e.keyCode == 40 ? -1 : 1));
									inst.color.setRgb(cpDiv.inputs.r.val(), cpDiv.inputs.g.val(), cpDiv.inputs.b.val(), cpDiv.inputs.a.val());
									$.colorpicker._updateColorpicker(true);
								break;

								case 13:
									$.colorpicker._submit();
								break;

								default:
									return;
							}
						}).keyup(function(){
							if(!$.colorpicker._curInst) return;
							$.colorpicker._curInst.color.setRgb(cpDiv.inputs.r.val(), cpDiv.inputs.g.val(), cpDiv.inputs.b.val(), cpDiv.inputs.a.val());
							$.colorpicker._updateColorpicker();
						});
					break;

					case 'hex':
						$input.keydown(function(e){
							if(!$.colorpicker._curInst) return;
							switch(e.keyCode){
								case 13:
									$.colorpicker._submit();
								break;

								default:
									return;
							}
						}).keyup(function(){
							var inst = $.colorpicker._curInst;
							if(!inst) return;
							if(!cpDiv.inputs.hex.val()){
								inst.color = new $.colorpicker.color({hex: $.colorpicker._defaults.color});
								inst.color.isNull = $.colorpicker._get(inst, 'allowNull');
								$.colorpicker._updateColorpicker();
							}else{
								inst.color.setHex(cpDiv.inputs.hex.val());
								$.colorpicker._updateColorpicker();
							}
						});
					break;
				}
			}
		}


		/* Swatches */
			/* Add Swatch */
			cpDiv.addSwatchButton.mousedown(function(e) {
				$.colorpicker.addSwatch($.colorpicker._curInst.color);
			});

			/* Use swatch */
			cpDiv.swatches.delegate('.swatch', 'click', function(e) {

				/* Proxy that way useSwatch has the right this object */
				var useSwatch = $.proxy($.colorpicker._useSwatch, this);
				useSwatch(e);

				e.preventDefault();

			});

			/* Delete swatch */

			cpDiv.swatches.delegate('.swatch', 'contextmenu', function(e) {

				if ( confirm('Are you sure you wish to delete this swatch?') )
					$.colorpicker.deleteSwatch(this);

				e.preventDefault();
				return false;

			});

		

		cpDiv.oldColorDiv.mousedown($.colorpicker._useSwatch);
		cpDiv.colorDiv.mousedown(function(e){
			$.colorpicker._submit($(this).data('color'));
			e.preventDefault();
			return false;
		});

		cpDiv.defaultHeight = cpDiv.outerHeight();
		cpDiv.addClass('swatchesOn');
		cpDiv.swatchHeight = cpDiv.outerHeight() - cpDiv.defaultHeight;
		cpDiv.removeClass('swatchesOn').addClass('alphaOn');
		cpDiv.alphaHeight = cpDiv.outerHeight() - cpDiv.defaultHeight;
		cpDiv.removeClass('alphaOn');

		cpDiv.d1Div.mousedown(function(e){
			$.colorpicker._isDragging = true;
			$.colorpicker._mousemoveControl1d(e);
			$(document).bind('mousemove', $.colorpicker._mousemoveControl1d);
			return false;
		})
		cpDiv.d2Div.mousedown(function(e){
			$.colorpicker._isDragging = true;
			$.colorpicker._mousemoveControl2d(e);
			$(document).bind('mousemove', $.colorpicker._mousemoveControl2d);
			return false;
		})
		cpDiv.alphaDiv.mousedown(function(e){
			$.colorpicker._isDragging = true;
			$.colorpicker._mousemoveControlAlpha(e);
			$(document).bind('mousemove', $.colorpicker._mousemoveControlAlpha);
			return false;
		})
		$(document).mouseup(function(){
			$(document)
				.unbind('mousemove', $.colorpicker._mousemoveControl1d)
				.unbind('mousemove', $.colorpicker._mousemoveControl2d)
				.unbind('mousemove', $.colorpicker._mousemoveControlAlpha);
			$.colorpicker._isDragging = false;
			return false;
		});
		$(window).resize(function(){
			if($.colorpicker._colorpickerShowing){
				$.colorpicker._positionColorpicker();
			}
		})

		$.colorpicker._setMode($.colorpicker.mode);

		$.colorpicker.initialized = true;
	}

	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if(options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string'){
		return $.colorpicker['_' + options + 'Colorpicker'].
			apply($.colorpicker, [this[0]].concat(otherArgs));
	}
	return this.each(function(){
		typeof options == 'string' ?
			$.colorpicker['_' + options + 'Colorpicker'].
				apply($.colorpicker, [this].concat(otherArgs)) :
			$.colorpicker._attachColorpicker(this, options);
	});
};

function extendRemove(target, props) {
	$.extend(target, props);
	for(var name in props){
		if(props[name] == null || props[name] == undefined){
			target[name] = props[name];
		}
	}
	return target;
};

function isset(x){
	return x !== undefined;
}

$.colorpicker = new Colorpicker();
$.colorpicker.initialized = false;
$.colorpicker.uuid = new Date().getTime();

})(jQuery);

;// All functions that need access to the editor's state live inside
// the CodeMirror function. Below that, at the bottom of the file,
// some utilities are defined.

// CodeMirror is the only global var we claim
var CodeMirror = (function() {
  // This is the function that produces an editor instance. It's
  // closure is used to store the editor state.
  function CodeMirror(place, givenOptions) {
    // Determine effective options based on given values and defaults.
    var options = {}, defaults = CodeMirror.defaults;
    for (var opt in defaults)
      if (defaults.hasOwnProperty(opt))
        options[opt] = (givenOptions && givenOptions.hasOwnProperty(opt) ? givenOptions : defaults)[opt];

    var targetDocument = options["document"];
    // The element in which the editor lives.
    var wrapper = targetDocument.createElement("div");
    wrapper.className = "CodeMirror" + (options.lineWrapping ? " CodeMirror-wrap" : "");
    // This mess creates the base DOM structure for the editor.
    wrapper.innerHTML =
      '<div style="overflow: hidden; position: relative; width: 1px; height: 0px;">' + // Wraps and hides input textarea
        '<textarea style="position: absolute; width: 10000px;" wrap="off" ' +
          'autocorrect="off" autocapitalize="off"></textarea></div>' +
      '<div class="CodeMirror-scroll cm-s-' + options.theme + '">' +
        '<div style="position: relative">' + // Set to the height of the text, causes scrolling
          '<div style="position: relative">' + // Moved around its parent to cover visible view
            '<div class="CodeMirror-gutter"><div class="CodeMirror-gutter-text"></div></div>' +
            // Provides positioning relative to (visible) text origin
            '<div class="CodeMirror-lines"><div style="position: relative">' +
              '<div style="position: absolute; width: 100%; height: 0; overflow: hidden; visibility: hidden"></div>' +
              '<pre class="CodeMirror-cursor">&#160;</pre>' + // Absolutely positioned blinky cursor
              '<div></div>' + // This DIV contains the actual code
            '</div></div></div></div></div>';
    if (place.appendChild) place.appendChild(wrapper); else place(wrapper);
    // I've never seen more elegant code in my life.
    var inputDiv = wrapper.firstChild, input = inputDiv.firstChild,
        scroller = wrapper.lastChild, code = scroller.firstChild,
        mover = code.firstChild, gutter = mover.firstChild, gutterText = gutter.firstChild,
        lineSpace = gutter.nextSibling.firstChild, measure = lineSpace.firstChild,
        cursor = measure.nextSibling, lineDiv = cursor.nextSibling;
    if (!webkit) lineSpace.draggable = true;
    if (options.tabindex != null) input.tabindex = options.tabindex;
    if (!options.gutter && !options.lineNumbers) gutter.style.display = "none";

    // Check for problem with IE innerHTML not working when we have a
    // P (or similar) parent node.
    try { stringWidth("x"); }
    catch (e) {
      if (e.message.match(/unknown runtime/i))
        e = new Error("A CodeMirror inside a P-style element does not work in Internet Explorer. (innerHTML bug)");
      throw e;
    }

    // Delayed object wrap timeouts, making sure only one is active. blinker holds an interval.
    var poll = new Delayed(), highlight = new Delayed(), blinker;

    // mode holds a mode API object. doc is the tree of Line objects,
    // work an array of lines that should be parsed, and history the
    // undo history (instance of History constructor).
    var mode, doc = new BranchChunk([new LeafChunk([new Line("")])]), work, focused;
    loadMode();
    // The selection. These are always maintained to point at valid
    // positions. Inverted is used to remember that the user is
    // selecting bottom-to-top.
    var sel = {from: {line: 0, ch: 0}, to: {line: 0, ch: 0}, inverted: false};
    // Selection-related flags. shiftSelecting obviously tracks
    // whether the user is holding shift. reducedSelection is a hack
    // to get around the fact that we can't create inverted
    // selections. See below.
    var shiftSelecting, reducedSelection, lastClick, lastDoubleClick, draggingText;
    // Variables used by startOperation/endOperation to track what
    // happened during the operation.
    var updateInput, changes, textChanged, selectionChanged, leaveInputAlone, gutterDirty;
    // Current visible range (may be bigger than the view window).
    var displayOffset = 0, showingFrom = 0, showingTo = 0, lastHeight = 0, curKeyId = null;
    // editing will hold an object describing the things we put in the
    // textarea, to help figure out whether something changed.
    // bracketHighlighted is used to remember that a backet has been
    // marked.
    var editing, bracketHighlighted;
    // Tracks the maximum line length so that the horizontal scrollbar
    // can be kept static when scrolling.
    var maxLine = "", maxWidth;

    // Initialize the content.
    operation(function(){setValue(options.value || ""); updateInput = false;})();
    var history = new History();

    var slowPollInterval = 2000;
    // Gecko and Opera Linux do not reliably fire any event when starting an IME compose
    var alwaysPollForIME = (!win && !mac) && (gecko || window.opera);
    if (options.pollForIME && alwaysPollForIME) slowPollInterval = 50;
    function keyMightStartIME(keyCode) {
      return (win && ((gecko && keyCode == 229) || (window.opera && keyCode == 197))) || (mac && gecko);
    }

    // Register our event handlers.
    connect(scroller, "mousedown", operation(onMouseDown));
    connect(scroller, "dblclick", operation(onDoubleClick));
    connect(lineSpace, "dragstart", onDragStart);
    // Gecko browsers fire contextmenu *after* opening the menu, at
    // which point we can't mess with it anymore. Context menu is
    // handled in onMouseDown for Gecko.
    if (!gecko) connect(scroller, "contextmenu", onContextMenu);
    connect(scroller, "scroll", function() {
      updateDisplay([]);
      if (options.fixedGutter) gutter.style.left = scroller.scrollLeft + "px";
      if (options.onScroll) options.onScroll(instance);
    });
    connect(window, "resize", function() {updateDisplay(true);});
    connect(input, "keyup", operation(onKeyUp));
    connect(input, "input", function() {fastPoll(curKeyId);});
    connect(input, "keydown", operation(onKeyDown));
    connect(input, "keypress", operation(onKeyPress));
    connect(input, "focus", onFocus);
    connect(input, "blur", onBlur);

    connect(scroller, "dragenter", e_stop);
    connect(scroller, "dragover", e_stop);
    connect(scroller, "drop", operation(onDrop));
    connect(scroller, "paste", function(){focusInput(); fastPoll();});
    connect(input, "paste", function(){fastPoll();});
    connect(input, "cut", function(){fastPoll();});

    // IE throws unspecified error in certain cases, when
    // trying to access activeElement before onload
    var hasFocus; try { hasFocus = (targetDocument.activeElement == input); } catch(e) { }
    if (hasFocus) setTimeout(onFocus, 20);
    else onBlur();

    function isLine(l) {return l >= 0 && l < doc.size;}
    // The instance object that we'll return. Mostly calls out to
    // local functions in the CodeMirror function. Some do some extra
    // range checking and/or clipping. operation is used to wrap the
    // call so that changes it makes are tracked, and the display is
    // updated afterwards.
    var instance = wrapper.CodeMirror = {
      getValue: getValue,
      setValue: operation(setValue),
      getSelection: getSelection,
      replaceSelection: operation(replaceSelection),
      focus: function(){focusInput(); onFocus(); fastPoll();},
      setOption: function(option, value) {
        var oldVal = options[option];
        options[option] = value;
        if (option == "lineNumbers" || option == "gutter" || option == "firstLineNumber")
          operation(gutterChanged)();
        else if (option == "mode" || option == "indentUnit") loadMode();
        else if (option == "readOnly" && value == "nocursor") input.blur();
        else if (option == "theme") scroller.className = scroller.className.replace(/cm-s-\w+/, "cm-s-" + value);
        else if (option == "lineWrapping" && oldVal != value) operation(wrappingChanged)();
        else if (option == "pollForIME" && alwaysPollForIME) slowPollInterval = value ? 50 : 2000;
      },
      getOption: function(option) {return options[option];},
      undo: operation(undo),
      redo: operation(redo),
      indentLine: operation(function(n, dir) {
        if (isLine(n)) indentLine(n, dir == null ? "smart" : dir ? "add" : "subtract");
      }),
      historySize: function() {return {undo: history.done.length, redo: history.undone.length};},
      clearHistory: function() {history = new History();},
      matchBrackets: operation(function(){matchBrackets(true);}),
      getTokenAt: operation(function(pos) {
        pos = clipPos(pos);
        return getLine(pos.line).getTokenAt(mode, getStateBefore(pos.line), pos.ch);
      }),
      getStateAfter: function(line) {
        line = clipLine(line == null ? doc.size - 1: line);
        return getStateBefore(line + 1);
      },
      cursorCoords: function(start){
        if (start == null) start = sel.inverted;
        return pageCoords(start ? sel.from : sel.to);
      },
      charCoords: function(pos){return pageCoords(clipPos(pos));},
      coordsChar: function(coords) {
        var off = eltOffset(lineSpace);
        return coordsChar(coords.x - off.left, coords.y - off.top);
      },
      getSearchCursor: function(query, pos, caseFold) {return new SearchCursor(query, pos, caseFold);},
      markText: operation(markText),
      setMarker: operation(addGutterMarker),
      clearMarker: operation(removeGutterMarker),
      setLineClass: operation(setLineClass),
      hideLine: operation(function(h) {return setLineHidden(h, true);}),
      showLine: operation(function(h) {return setLineHidden(h, false);}),
      lineInfo: lineInfo,
      addWidget: function(pos, node, scroll, vert, horiz) {
        pos = localCoords(clipPos(pos));
        var top = pos.yBot, left = pos.x;
        node.style.position = "absolute";
        code.appendChild(node);
        if (vert == "over") top = pos.y;
        else if (vert == "near") {
          var vspace = Math.max(scroller.offsetHeight, doc.height * textHeight()),
              hspace = Math.max(code.clientWidth, lineSpace.clientWidth) - paddingLeft();
          if (pos.yBot + node.offsetHeight > vspace && pos.y > node.offsetHeight)
            top = pos.y - node.offsetHeight;
          if (left + node.offsetWidth > hspace)
            left = hspace - node.offsetWidth;
        }
        node.style.top = (top + paddingTop()) + "px";
        node.style.left = node.style.right = "";
        if (horiz == "right") {
          left = code.clientWidth - node.offsetWidth;
          node.style.right = "0px";
        } else {
          if (horiz == "left") left = 0;
          else if (horiz == "middle") left = (code.clientWidth - node.offsetWidth) / 2;
          node.style.left = (left + paddingLeft()) + "px";
        }
        if (scroll)
          scrollIntoView(left, top, left + node.offsetWidth, top + node.offsetHeight);
      },

      lineCount: function() {return doc.size;},
      getCursor: function(start) {
        if (start == null) start = sel.inverted;
        return copyPos(start ? sel.from : sel.to);
      },
      somethingSelected: function() {return !posEq(sel.from, sel.to);},
      setCursor: operation(function(line, ch) {
        if (ch == null && typeof line.line == "number") setCursor(line.line, line.ch);
        else setCursor(line, ch);
      }),
      setSelection: operation(function(from, to) {setSelection(clipPos(from), clipPos(to || from));}),
      getLine: function(line) {if (isLine(line)) return getLine(line).text;},
      setLine: operation(function(line, text) {
        if (isLine(line)) replaceRange(text, {line: line, ch: 0}, {line: line, ch: getLine(line).text.length});
      }),
      removeLine: operation(function(line) {
        if (isLine(line)) replaceRange("", {line: line, ch: 0}, clipPos({line: line+1, ch: 0}));
      }),
      replaceRange: operation(replaceRange),
      getRange: function(from, to) {return getRange(clipPos(from), clipPos(to));},

      coordsFromIndex: function(off) {        
        var lineNo = 0, ch;
        doc.iter(0, doc.size, function(line) {
          var sz = line.text.length + 1;
          if (sz > off) { ch = off; return true; }
          off -= sz;
          ++lineNo;
        });
        return clipPos({line: lineNo, ch: ch});
      },

      operation: function(f){return operation(f)();},
      refresh: function(){updateDisplay(true);},
      getInputField: function(){return input;},
      getWrapperElement: function(){return wrapper;},
      getScrollerElement: function(){return scroller;},
      getGutterElement: function(){return gutter;}
    };

    function getLine(n) { return getLineAt(doc, n); }
    function updateLineHeight(line, height) {
      gutterDirty = true;
      var diff = height - line.height;
      for (var n = line; n; n = n.parent) n.height += diff;
    }

    function setValue(code) {
      var top = {line: 0, ch: 0};
      updateLines(top, {line: doc.size - 1, ch: getLine(doc.size-1).text.length},
                  splitLines(code), top, top);
      updateInput = true;
    }
    function getValue(code) {
      var text = [];
      doc.iter(0, doc.size, function(line) { text.push(line.text); });
      return text.join("\n");
    }

    function onMouseDown(e) {
      // Check whether this is a click in a widget
      for (var n = e_target(e); n != wrapper; n = n.parentNode)
        if (n.parentNode == code && n != mover) return;

      // See if this is a click in the gutter
      for (var n = e_target(e); n != wrapper; n = n.parentNode)
        if (n.parentNode == gutterText) {
          if (options.onGutterClick)
            options.onGutterClick(instance, indexOf(gutterText.childNodes, n) + showingFrom, e);
          return e_preventDefault(e);
        }

      var start = posFromMouse(e);

      switch (e_button(e)) {
      case 3:
        if (gecko && !mac) onContextMenu(e);
        return;
      case 2:
        if (start) setCursor(start.line, start.ch, true);
        return;
      }
      // For button 1, if it was clicked inside the editor
      // (posFromMouse returning non-null), we have to adjust the
      // selection.
      if (!start) {if (e_target(e) == scroller) e_preventDefault(e); return;}

      if (!focused) onFocus();

      var now = +new Date;
      if (lastDoubleClick > now - 400) {
        e_preventDefault(e);
        return selectLine(start.line);
      } else if (lastClick > now - 400) {
        lastDoubleClick = now;
        e_preventDefault(e);
        return selectWordAt(start);
      } else { lastClick = now; }

      var last = start, going;
      if (dragAndDrop && !posEq(sel.from, sel.to) &&
          !posLess(start, sel.from) && !posLess(sel.to, start)) {
        // Let the drag handler handle this.
        if (webkit) lineSpace.draggable = true;
        var up = connect(targetDocument, "mouseup", operation(function(e2) {
          if (webkit) lineSpace.draggable = false;
          draggingText = false;
          up();
          if (Math.abs(e.clientX - e2.clientX) + Math.abs(e.clientY - e2.clientY) < 10) {
            e_preventDefault(e2);
            setCursor(start.line, start.ch, true);
            focusInput();
          }
        }), true);
        draggingText = true;
        return;
      }
      e_preventDefault(e);
      setCursor(start.line, start.ch, true);

      function extend(e) {
        var cur = posFromMouse(e, true);
        if (cur && !posEq(cur, last)) {
          if (!focused) onFocus();
          last = cur;
          setSelectionUser(start, cur);
          updateInput = false;
          var visible = visibleLines();
          if (cur.line >= visible.to || cur.line < visible.from)
            going = setTimeout(operation(function(){extend(e);}), 150);
        }
      }

      var move = connect(targetDocument, "mousemove", operation(function(e) {
        clearTimeout(going);
        e_preventDefault(e);
        extend(e);
      }), true);
      var up = connect(targetDocument, "mouseup", operation(function(e) {
        clearTimeout(going);
        var cur = posFromMouse(e);
        if (cur) setSelectionUser(start, cur);
        e_preventDefault(e);
        focusInput();
        updateInput = true;
        move(); up();
      }), true);
    }
    function onDoubleClick(e) {
      for (var n = e_target(e); n != wrapper; n = n.parentNode)
        if (n.parentNode == gutterText) return e_preventDefault(e);
      var start = posFromMouse(e);
      if (!start) return;
      lastDoubleClick = +new Date;
      e_preventDefault(e);
      selectWordAt(start);
    }
    function onDrop(e) {
      e.preventDefault();
      var pos = posFromMouse(e, true), files = e.dataTransfer.files;
      if (!pos || options.readOnly) return;
      if (files && files.length && window.FileReader && window.File) {
        function loadFile(file, i) {
          var reader = new FileReader;
          reader.onload = function() {
            text[i] = reader.result;
            if (++read == n) {
	      pos = clipPos(pos);
	      var end = replaceRange(text.join(""), pos, pos);
	      setSelectionUser(pos, end);
	    }
          };
          reader.readAsText(file);
        }
        var n = files.length, text = Array(n), read = 0;
        for (var i = 0; i < n; ++i) loadFile(files[i], i);
      }
      else {
        try {
          var text = e.dataTransfer.getData("Text");
          if (text) {
	    var end = replaceRange(text, pos, pos);
	    var curFrom = sel.from, curTo = sel.to;
	    setSelectionUser(pos, end);
            if (draggingText) replaceRange("", curFrom, curTo);
	    focusInput();
	  }
        }
        catch(e){}
      }
    }
    function onDragStart(e) {
      var txt = getSelection();
      // This will reset escapeElement
      htmlEscape(txt);
      e.dataTransfer.setDragImage(escapeElement, 0, 0);
      e.dataTransfer.setData("Text", txt);
    }
    function onKeyDown(e) {
      if (!focused) onFocus();

      var code = e.keyCode;
      // IE does strange things with escape.
      if (ie && code == 27) { e.returnValue = false; }
      // Tries to detect ctrl on non-mac, cmd on mac.
      var mod = (mac ? e.metaKey : e.ctrlKey) && !e.altKey, anyMod = e.ctrlKey || e.altKey || e.metaKey;
      if (code == 16 || e.shiftKey) shiftSelecting = shiftSelecting || (sel.inverted ? sel.to : sel.from);
      else shiftSelecting = null;
      // First give onKeyEvent option a chance to handle this.
      if (options.onKeyEvent && options.onKeyEvent(instance, addStop(e))) return;

      if (code == 33 || code == 34) {scrollPage(code == 34); return e_preventDefault(e);} // page up/down
      if (mod && ((code == 36 || code == 35) || // ctrl-home/end
                  mac && (code == 38 || code == 40))) { // cmd-up/down
        scrollEnd(code == 36 || code == 38); return e_preventDefault(e);
      }
      if (mod && code == 65) {selectAll(); return e_preventDefault(e);} // ctrl-a
      if (!options.readOnly) {
        if (!anyMod && code == 13) {return;} // enter
        if (!anyMod && code == 9 && handleTab(e.shiftKey)) return e_preventDefault(e); // tab
        if (mod && code == 90) {undo(); return e_preventDefault(e);} // ctrl-z
        if (mod && ((e.shiftKey && code == 90) || code == 89)) {redo(); return e_preventDefault(e);} // ctrl-shift-z, ctrl-y
      }
      if (code == 36) { if (options.smartHome) { smartHome(); return e_preventDefault(e); } }

      // Key id to use in the movementKeys map. We also pass it to
      // fastPoll in order to 'self learn'. We need this because
      // reducedSelection, the hack where we collapse the selection to
      // its start when it is inverted and a movement key is pressed
      // (and later restore it again), shouldn't be used for
      // non-movement keys.
      curKeyId = (mod ? "c" : "") + (e.altKey ? "a" : "") + code;
      if (sel.inverted && movementKeys[curKeyId] === true) {
        var range = selRange(input);
        if (range) {
          reducedSelection = {anchor: range.start};
          setSelRange(input, range.start, range.start);
        }
      }
      // Don't save the key as a movementkey unless it had a modifier
      if (!mod && !e.altKey) curKeyId = null;
      fastPoll(curKeyId);

      if (options.pollForIME && keyMightStartIME(code)) slowPollInterval = 50;
    }
    function onKeyUp(e) {
      if (options.onKeyEvent && options.onKeyEvent(instance, addStop(e))) return;
      if (reducedSelection) {
        reducedSelection = null;
        updateInput = true;
      }
      if (e.keyCode == 16) shiftSelecting = null;

      if (slowPollInterval < 2000 && !alwaysPollForIME) slowPollInterval = 2000;
    }
    function onKeyPress(e) {
      if (options.onKeyEvent && options.onKeyEvent(instance, addStop(e))) return;
      if (options.electricChars && mode.electricChars) {
        var ch = String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode);
        if (mode.electricChars.indexOf(ch) > -1)
          setTimeout(operation(function() {indentLine(sel.to.line, "smart");}), 50);
      }
      var code = e.keyCode;
      // Re-stop tab and enter. Necessary on some browsers.
      if (code == 13) {if (!options.readOnly) handleEnter(); e_preventDefault(e);}
      else if (!e.ctrlKey && !e.altKey && !e.metaKey && code == 9 && options.tabMode != "default") e_preventDefault(e);
      else fastPoll(curKeyId);
    }

    function onFocus() {
      if (options.readOnly == "nocursor") return;
      if (!focused) {
        if (options.onFocus) options.onFocus(instance);
        focused = true;
        if (wrapper.className.search(/\bCodeMirror-focused\b/) == -1)
          wrapper.className += " CodeMirror-focused";
        if (!leaveInputAlone) prepareInput();
      }
      slowPoll();
      restartBlink();
    }
    function onBlur() {
      if (focused) {
        if (options.onBlur) options.onBlur(instance);
        focused = false;
        wrapper.className = wrapper.className.replace(" CodeMirror-focused", "");
      }
      clearInterval(blinker);
      setTimeout(function() {if (!focused) shiftSelecting = null;}, 150);
    }

    // Replace the range from from to to by the strings in newText.
    // Afterwards, set the selection to selFrom, selTo.
    function updateLines(from, to, newText, selFrom, selTo) {
      if (history) {
        var old = [];
        doc.iter(from.line, to.line + 1, function(line) { old.push(line.text); });
        history.addChange(from.line, newText.length, old);
        while (history.done.length > options.undoDepth) history.done.shift();
      }
      updateLinesNoUndo(from, to, newText, selFrom, selTo);
    }
    function unredoHelper(from, to) {
      var change = from.pop();
      if (change) {
        var replaced = [], end = change.start + change.added;
        doc.iter(change.start, end, function(line) { replaced.push(line.text); });
        to.push({start: change.start, added: change.old.length, old: replaced});
        var pos = clipPos({line: change.start + change.old.length - 1,
                           ch: editEnd(replaced[replaced.length-1], change.old[change.old.length-1])});
        updateLinesNoUndo({line: change.start, ch: 0}, {line: end - 1, ch: getLine(end-1).text.length}, change.old, pos, pos);
        updateInput = true;
      }
    }
    function undo() {unredoHelper(history.done, history.undone);}
    function redo() {unredoHelper(history.undone, history.done);}

    function updateLinesNoUndo(from, to, newText, selFrom, selTo) {
      var recomputeMaxLength = false, maxLineLength = maxLine.length;
      if (!options.lineWrapping)
        doc.iter(from.line, to.line, function(line) {
          if (line.text.length == maxLineLength) {recomputeMaxLength = true; return true;}
        });

      var nlines = to.line - from.line, firstLine = getLine(from.line), lastLine = getLine(to.line);
      // First adjust the line structure, taking some care to leave highlighting intact.
      if (firstLine == lastLine) {
        if (newText.length == 1)
          firstLine.replace(from.ch, to.ch, newText[0]);
        else {
          lastLine = firstLine.split(to.ch, newText[newText.length-1]);
          var added = [];
          firstLine.replace(from.ch, null, newText[0]);
          for (var i = 1, e = newText.length - 1; i < e; ++i)
            added.push(Line.inheritMarks(newText[i], firstLine));
          added.push(lastLine);
          doc.insert(from.line + 1, added);
        }
      }
      else if (newText.length == 1) {
        firstLine.replace(from.ch, null, newText[0]);
        lastLine.replace(null, to.ch, "");
        firstLine.append(lastLine);
        doc.remove(from.line + 1, nlines);
      }
      else {
        var added = [];
        firstLine.replace(from.ch, null, newText[0]);
        lastLine.replace(null, to.ch, newText[newText.length-1]);
        for (var i = 1, e = newText.length - 1; i < e; ++i)
          added.push(Line.inheritMarks(newText[i], firstLine));
        if (nlines > 1) doc.remove(from.line + 1, nlines - 1);
        doc.insert(from.line + 1, added);
      }
      if (options.lineWrapping) {
        var perLine = scroller.clientWidth / charWidth() - 3;
        doc.iter(from.line, from.line + newText.length, function(line) {
          if (line.hidden) return;
          var guess = Math.ceil(line.text.length / perLine) || 1;
          if (guess != line.height) updateLineHeight(line, guess);
        });
      } else {
        doc.iter(from.line, i + newText.length, function(line) {
          var l = line.text;
          if (l.length > maxLineLength) {
            maxLine = l; maxLineLength = l.length; maxWidth = null;
            recomputeMaxLength = false;
          }
        });
        if (recomputeMaxLength) {
          maxLineLength = 0; maxLine = ""; maxWidth = null;
          doc.iter(0, doc.size, function(line) {
            var l = line.text;
            if (l.length > maxLineLength) {
              maxLineLength = l.length; maxLine = l;
            }
          });
        }
      }

      // Add these lines to the work array, so that they will be
      // highlighted. Adjust work lines if lines were added/removed.
      var newWork = [], lendiff = newText.length - nlines - 1;
      for (var i = 0, l = work.length; i < l; ++i) {
        var task = work[i];
        if (task < from.line) newWork.push(task);
        else if (task > to.line) newWork.push(task + lendiff);
      }
      var hlEnd = from.line + Math.min(newText.length, 500);
      highlightLines(from.line, hlEnd);
      newWork.push(hlEnd);
      work = newWork;
      startWorker(100);
      // Remember that these lines changed, for updating the display
      changes.push({from: from.line, to: to.line + 1, diff: lendiff});
      textChanged = {from: from, to: to, text: newText};

      // Update the selection
      function updateLine(n) {return n <= Math.min(to.line, to.line + lendiff) ? n : n + lendiff;}
      setSelection(selFrom, selTo, updateLine(sel.from.line), updateLine(sel.to.line));

      // Make sure the scroll-size div has the correct height.
      code.style.height = (doc.height * textHeight() + 2 * paddingTop()) + "px";
    }

    function replaceRange(code, from, to) {
      from = clipPos(from);
      if (!to) to = from; else to = clipPos(to);
      code = splitLines(code);
      function adjustPos(pos) {
        if (posLess(pos, from)) return pos;
        if (!posLess(to, pos)) return end;
        var line = pos.line + code.length - (to.line - from.line) - 1;
        var ch = pos.ch;
        if (pos.line == to.line)
          ch += code[code.length-1].length - (to.ch - (to.line == from.line ? from.ch : 0));
        return {line: line, ch: ch};
      }
      var end;
      replaceRange1(code, from, to, function(end1) {
        end = end1;
        return {from: adjustPos(sel.from), to: adjustPos(sel.to)};
      });
      return end;
    }
    function replaceSelection(code, collapse) {
      replaceRange1(splitLines(code), sel.from, sel.to, function(end) {
        if (collapse == "end") return {from: end, to: end};
        else if (collapse == "start") return {from: sel.from, to: sel.from};
        else return {from: sel.from, to: end};
      });
    }
    function replaceRange1(code, from, to, computeSel) {
      var endch = code.length == 1 ? code[0].length + from.ch : code[code.length-1].length;
      var newSel = computeSel({line: from.line + code.length - 1, ch: endch});
      updateLines(from, to, code, newSel.from, newSel.to);
    }

    function getRange(from, to) {
      var l1 = from.line, l2 = to.line;
      if (l1 == l2) return getLine(l1).text.slice(from.ch, to.ch);
      var code = [getLine(l1).text.slice(from.ch)];
      doc.iter(l1 + 1, l2, function(line) { code.push(line.text); });
      code.push(getLine(l2).text.slice(0, to.ch));
      return code.join("\n");
    }
    function getSelection() {
      return getRange(sel.from, sel.to);
    }

    var pollingFast = false; // Ensures slowPoll doesn't cancel fastPoll
    function slowPoll() {
      if (pollingFast) return;
      poll.set(slowPollInterval, function() {
        startOperation();
        readInput();
        if (focused) slowPoll();
        endOperation();
      });
    }
    function fastPoll(keyId) {
      var missed = false;
      pollingFast = true;
      function p() {
        startOperation();
        var changed = readInput();
        if (changed && keyId) {
          if (changed == "moved" && movementKeys[keyId] == null) movementKeys[keyId] = true;
          if (changed == "changed") movementKeys[keyId] = false;
        }
        if (!changed && !missed) {missed = true; poll.set(80, p);}
        else {pollingFast = false; slowPoll();}
        endOperation();
      }
      poll.set(20, p);
    }

    // Inspects the textarea, compares its state (content, selection)
    // to the data in the editing variable, and updates the editor
    // content or cursor if something changed.
    function readInput() {
      if (leaveInputAlone || !focused) return;
      var changed = false, text = input.value, sr = selRange(input);
      if (!sr) return false;
      var changed = editing.text != text, rs = reducedSelection;
      var moved = changed || sr.start != editing.start || sr.end != (rs ? editing.start : editing.end);
      if (!moved && !rs) return false;
      if (changed) {
        shiftSelecting = reducedSelection = null;
        if (options.readOnly) {updateInput = true; return "changed";}
      }

      // Compute selection start and end based on start/end offsets in textarea
      function computeOffset(n, startLine) {
        var pos = 0;
        for (;;) {
          var found = text.indexOf("\n", pos);
          if (found == -1 || (text.charAt(found-1) == "\r" ? found - 1 : found) >= n)
            return {line: startLine, ch: n - pos};
          ++startLine;
          pos = found + 1;
        }
      }
      var from = computeOffset(sr.start, editing.from),
          to = computeOffset(sr.end, editing.from);
      // Here we have to take the reducedSelection hack into account,
      // so that you can, for example, press shift-up at the start of
      // your selection and have the right thing happen.
      if (rs) {
        var head = sr.start == rs.anchor ? to : from;
        var tail = shiftSelecting ? sel.to : sr.start == rs.anchor ? from : to;
        if (sel.inverted = posLess(head, tail)) { from = head; to = tail; }
        else { reducedSelection = null; from = tail; to = head; }
      }

      // In some cases (cursor on same line as before), we don't have
      // to update the textarea content at all.
      if (from.line == to.line && from.line == sel.from.line && from.line == sel.to.line && !shiftSelecting)
        updateInput = false;

      // Magic mess to extract precise edited range from the changed
      // string.
      if (changed) {
        var start = 0, end = text.length, len = Math.min(end, editing.text.length);
        var c, line = editing.from, nl = -1;
        while (start < len && (c = text.charAt(start)) == editing.text.charAt(start)) {
          ++start;
          if (c == "\n") {line++; nl = start;}
        }
        var ch = nl > -1 ? start - nl : start, endline = editing.to - 1, edend = editing.text.length;
        for (;;) {
          c = editing.text.charAt(edend);
          if (text.charAt(end) != c) {++end; ++edend; break;}
          if (c == "\n") endline--;
          if (edend <= start || end <= start) break;
          --end; --edend;
        }
        var nl = editing.text.lastIndexOf("\n", edend - 1), endch = nl == -1 ? edend : edend - nl - 1;
        updateLines({line: line, ch: ch}, {line: endline, ch: endch}, splitLines(text.slice(start, end)), from, to);
        if (line != endline || from.line != line) updateInput = true;
      }
      else setSelection(from, to);

      editing.text = text; editing.start = sr.start; editing.end = sr.end;
      return changed ? "changed" : moved ? "moved" : false;
    }

    // Set the textarea content and selection range to match the
    // editor state.
    function prepareInput() {
      var text = [];
      var from = Math.max(0, sel.from.line - 1), to = Math.min(doc.size, sel.to.line + 2);
      doc.iter(from, to, function(line) { text.push(line.text); });
      text = input.value = text.join(lineSep);
      var startch = sel.from.ch, endch = sel.to.ch;
      doc.iter(from, sel.from.line, function(line) {
        startch += lineSep.length + line.text.length;
      });
      doc.iter(from, sel.to.line, function(line) {
        endch += lineSep.length + line.text.length;
      });
      editing = {text: text, from: from, to: to, start: startch, end: endch};
      setSelRange(input, startch, reducedSelection ? startch : endch);
    }
    function focusInput() {
      if (options.readOnly != "nocursor") input.focus();
    }

    function scrollEditorIntoView() {
      if (!cursor.getBoundingClientRect) return;
      var rect = cursor.getBoundingClientRect();
      var winH = window.innerHeight || Math.max(document.body.offsetHeight, document.documentElement.offsetHeight);
      if (rect.top < 0 || rect.bottom > winH) cursor.scrollIntoView();
    }
    function scrollCursorIntoView() {
      var cursor = localCoords(sel.inverted ? sel.from : sel.to);
      var x = options.lineWrapping ? Math.min(cursor.x, lineSpace.offsetWidth) : cursor.x;
      return scrollIntoView(x, cursor.y, x, cursor.yBot);
    }
    function scrollIntoView(x1, y1, x2, y2) {
      var pl = paddingLeft(), pt = paddingTop(), lh = textHeight();
      y1 += pt; y2 += pt; x1 += pl; x2 += pl;
      var screen = scroller.clientHeight, screentop = scroller.scrollTop, scrolled = false, result = true;
      if (y1 < screentop) {scroller.scrollTop = Math.max(0, y1 - 2*lh); scrolled = true;}
      else if (y2 > screentop + screen) {scroller.scrollTop = y2 + lh - screen; scrolled = true;}

      var screenw = scroller.clientWidth, screenleft = scroller.scrollLeft;
      var gutterw = options.fixedGutter ? gutter.clientWidth : 0;
      if (x1 < screenleft + gutterw) {
        if (x1 < 50) x1 = 0;
        scroller.scrollLeft = Math.max(0, x1 - 10 - gutterw);
        scrolled = true;
      }
      else if (x2 > screenw + screenleft) {
        scroller.scrollLeft = x2 + 10 - screenw;
        scrolled = true;
        if (x2 > code.clientWidth) result = false;
      }
      if (scrolled && options.onScroll) options.onScroll(instance);
      return result;
    }

    function visibleLines() {
      var lh = textHeight(), top = scroller.scrollTop - paddingTop();
      var from_height = Math.max(0, Math.floor(top / lh));
      var to_height = Math.ceil((top + scroller.clientHeight) / lh);
      return {from: lineAtHeight(doc, from_height),
              to: lineAtHeight(doc, to_height)};
    }
    // Uses a set of changes plus the current scroll position to
    // determine which DOM updates have to be made, and makes the
    // updates.
    function updateDisplay(changes) {
      if (!scroller.clientWidth) {
        showingFrom = showingTo = displayOffset = 0;
        return;
      }
      // Compute the new visible window
      var visible = visibleLines();
      // Bail out if the visible area is already rendered and nothing changed.
      if (changes !== true && changes.length == 0 && visible.from >= showingFrom && visible.to <= showingTo) return;
      var from = Math.max(visible.from - 100, 0), to = Math.min(doc.size, visible.to + 100);
      if (showingFrom < from && from - showingFrom < 20) from = showingFrom;
      if (showingTo > to && showingTo - to < 20) to = Math.min(doc.size, showingTo);

      // Create a range of theoretically intact lines, and punch holes
      // in that using the change info.
      var intact = changes === true ? [] :
        computeIntact([{from: showingFrom, to: showingTo, domStart: 0}], changes);
      // Clip off the parts that won't be visible
      var intactLines = 0;
      for (var i = 0; i < intact.length; ++i) {
        var range = intact[i];
        if (range.from < from) {range.domStart += (from - range.from); range.from = from;}
        if (range.to > to) range.to = to;
        if (range.from >= range.to) intact.splice(i--, 1);
        else intactLines += range.to - range.from;
      }
      if (intactLines == to - from) return;
      intact.sort(function(a, b) {return a.domStart - b.domStart;});

      var th = textHeight(), gutterDisplay = gutter.style.display;
      lineDiv.style.display = gutter.style.display = "none";
      patchDisplay(from, to, intact);
      lineDiv.style.display = "";

      // Position the mover div to align with the lines it's supposed
      // to be showing (which will cover the visible display)
      var different = from != showingFrom || to != showingTo || lastHeight != scroller.clientHeight;
      if (different) lastHeight = scroller.clientHeight;
      showingFrom = from; showingTo = to;
      displayOffset = heightAtLine(doc, from);
      mover.style.top = (displayOffset * th) + "px";
      code.style.height = (doc.height * th + 2 * paddingTop()) + "px";

      // Since this is all rather error prone, it is honoured with the
      // only assertion in the whole file.
      if (lineDiv.childNodes.length != showingTo - showingFrom)
        throw new Error("BAD PATCH! " + JSON.stringify(intact) + " size=" + (showingTo - showingFrom) +
                        " nodes=" + lineDiv.childNodes.length);

      if (options.lineWrapping) {
        maxWidth = scroller.clientWidth;
        var curNode = lineDiv.firstChild;
        doc.iter(showingFrom, showingTo, function(line) {
          if (!line.hidden) {
            var height = Math.round(curNode.offsetHeight / th) || 1;
            if (line.height != height) {updateLineHeight(line, height); gutterDirty = true;}
          }
          curNode = curNode.nextSibling;
        });
      } else {
        if (maxWidth == null) maxWidth = stringWidth(maxLine);
        if (maxWidth > scroller.clientWidth) {
          lineSpace.style.width = maxWidth + "px";
          // Needed to prevent odd wrapping/hiding of widgets placed in here.
          code.style.width = "";
          code.style.width = scroller.scrollWidth + "px";
        } else {
          lineSpace.style.width = code.style.width = "";
        }
      }
      gutter.style.display = gutterDisplay;
      if (different || gutterDirty) updateGutter();
      updateCursor();
    }

    function computeIntact(intact, changes) {
      for (var i = 0, l = changes.length || 0; i < l; ++i) {
        var change = changes[i], intact2 = [], diff = change.diff || 0;
        for (var j = 0, l2 = intact.length; j < l2; ++j) {
          var range = intact[j];
          if (change.to <= range.from || change.from >= range.to)
            intact2.push(range);
          else {
            if (change.from > range.from)
              intact2.push({from: range.from, to: change.from, domStart: range.domStart});
            if (change.to < range.to)
              intact2.push({from: change.to + diff, to: range.to + diff,
                            domStart: range.domStart + (change.to - range.from)});
          }
        }
        intact = intact2;
      }
      return intact;
    }

    function patchDisplay(from, to, intact) {
      // The first pass removes the DOM nodes that aren't intact.
      if (!intact.length) lineDiv.innerHTML = "";
      else {
        function killNode(node) {
          var tmp = node.nextSibling;
          node.parentNode.removeChild(node);
          return tmp;
        }
        var domPos = 0, curNode = lineDiv.firstChild, n;
        for (var i = 0; i < intact.length; ++i) {
          var cur = intact[i];
          while (cur.domStart > domPos) {curNode = killNode(curNode); domPos++;}
          for (var j = 0, e = cur.to - cur.from; j < e; ++j) {curNode = curNode.nextSibling; domPos++;}
        }
        while (curNode) curNode = killNode(curNode);
      }
      // This pass fills in the lines that actually changed.
      var nextIntact = intact.shift(), curNode = lineDiv.firstChild, j = from;
      var sfrom = sel.from.line, sto = sel.to.line, inSel = sfrom < from && sto >= from;
      var scratch = targetDocument.createElement("div"), newElt;
      doc.iter(from, to, function(line) {
        var ch1 = null, ch2 = null;
        if (inSel) {
          ch1 = 0;
          if (sto == j) {inSel = false; ch2 = sel.to.ch;}
        } else if (sfrom == j) {
          if (sto == j) {ch1 = sel.from.ch; ch2 = sel.to.ch;}
          else {inSel = true; ch1 = sel.from.ch;}
        }
        if (nextIntact && nextIntact.to == j) nextIntact = intact.shift();
        if (!nextIntact || nextIntact.from > j) {
          if (line.hidden) scratch.innerHTML = "<pre></pre>";
          else scratch.innerHTML = line.getHTML(ch1, ch2, true);
          lineDiv.insertBefore(scratch.firstChild, curNode);
        } else {
          curNode = curNode.nextSibling;
        }
        ++j;
      });
    }

    function updateGutter() {
      if (!options.gutter && !options.lineNumbers) return;
      var hText = mover.offsetHeight, hEditor = scroller.clientHeight;
      gutter.style.height = (hText - hEditor < 2 ? hEditor : hText) + "px";
      var html = [], i = showingFrom;
      doc.iter(showingFrom, Math.max(showingTo, showingFrom + 1), function(line) {
        if (line.hidden) {
          html.push("<pre></pre>");
        } else {
          var marker = line.gutterMarker;
          var text = options.lineNumbers ? i + options.firstLineNumber : null;
          if (marker && marker.text)
            text = marker.text.replace("%N%", text != null ? text : "");
          else if (text == null)
            text = "\u00a0";
          html.push((marker && marker.style ? '<pre class="' + marker.style + '">' : "<pre>"), text);
          for (var j = 1; j < line.height; ++j) html.push("<br>&nbsp;");
          html.push("</pre>");
        }
        ++i;
      });
      gutter.style.display = "none";
      gutterText.innerHTML = html.join("");
      var minwidth = String(doc.size).length, firstNode = gutterText.firstChild, val = eltText(firstNode), pad = "";
      while (val.length + pad.length < minwidth) pad += "\u00a0";
      if (pad) firstNode.insertBefore(targetDocument.createTextNode(pad), firstNode.firstChild);
      gutter.style.display = "";
      lineSpace.style.marginLeft = gutter.offsetWidth + "px";
      gutterDirty = false;
    }
    function updateCursor() {
      var head = sel.inverted ? sel.from : sel.to, lh = textHeight();
      var pos = localCoords(head, true);
      var globalY = pos.y + displayOffset * textHeight();
      inputDiv.style.top = Math.max(Math.min(globalY, scroller.offsetHeight), 0) + "px";
      inputDiv.style.left = (pos.x - scroller.scrollLeft) + "px";
      if (posEq(sel.from, sel.to)) {
        cursor.style.top = pos.y + "px";
        cursor.style.left = (options.lineWrapping ? Math.min(pos.x, lineSpace.offsetWidth) : pos.x) + "px";
        cursor.style.display = "";
      }
      else cursor.style.display = "none";
    }

    function setSelectionUser(from, to) {
      var sh = shiftSelecting && clipPos(shiftSelecting);
      if (sh) {
        if (posLess(sh, from)) from = sh;
        else if (posLess(to, sh)) to = sh;
      }
      setSelection(from, to);
    }
    // Update the selection. Last two args are only used by
    // updateLines, since they have to be expressed in the line
    // numbers before the update.
    function setSelection(from, to, oldFrom, oldTo) {
      if (oldFrom == null) {oldFrom = sel.from.line; oldTo = sel.to.line;}
      if (posEq(sel.from, from) && posEq(sel.to, to)) return;
      if (posLess(to, from)) {var tmp = to; to = from; from = tmp;}

      // Skip over hidden lines.
      if (from.line != oldFrom) from = skipHidden(from, oldFrom, sel.from.ch);
      if (to.line != oldTo) to = skipHidden(to, oldTo, sel.to.ch);

      if (posEq(from, to)) sel.inverted = false;
      else if (posEq(from, sel.to)) sel.inverted = false;
      else if (posEq(to, sel.from)) sel.inverted = true;

      // Some ugly logic used to only mark the lines that actually did
      // see a change in selection as changed, rather than the whole
      // selected range.
      if (posEq(from, to)) {
        if (!posEq(sel.from, sel.to))
          changes.push({from: oldFrom, to: oldTo + 1});
      }
      else if (posEq(sel.from, sel.to)) {
        changes.push({from: from.line, to: to.line + 1});
      }
      else {
        if (!posEq(from, sel.from)) {
          if (from.line < oldFrom)
            changes.push({from: from.line, to: Math.min(to.line, oldFrom) + 1});
          else
            changes.push({from: oldFrom, to: Math.min(oldTo, from.line) + 1});
        }
        if (!posEq(to, sel.to)) {
          if (to.line < oldTo)
            changes.push({from: Math.max(oldFrom, from.line), to: oldTo + 1});
          else
            changes.push({from: Math.max(from.line, oldTo), to: to.line + 1});
        }
      }
      sel.from = from; sel.to = to;
      selectionChanged = true;
    }
    function skipHidden(pos, oldLine, oldCh) {
      function getNonHidden(dir) {
        var lNo = pos.line + dir, end = dir == 1 ? doc.size : -1;
        while (lNo != end) {
          var line = getLine(lNo);
          if (!line.hidden) {
            var ch = pos.ch;
            if (ch > oldCh || ch > line.text.length) ch = line.text.length;
            return {line: lNo, ch: ch};
          }
          lNo += dir;
        }
      }
      var line = getLine(pos.line);
      if (!line.hidden) return pos;
      if (pos.line >= oldLine) return getNonHidden(1) || getNonHidden(-1);
      else return getNonHidden(-1) || getNonHidden(1);
    }
    function setCursor(line, ch, user) {
      var pos = clipPos({line: line, ch: ch || 0});
      (user ? setSelectionUser : setSelection)(pos, pos);
    }

    function clipLine(n) {return Math.max(0, Math.min(n, doc.size-1));}
    function clipPos(pos) {
      if (pos.line < 0) return {line: 0, ch: 0};
      if (pos.line >= doc.size) return {line: doc.size-1, ch: getLine(doc.size-1).text.length};
      var ch = pos.ch, linelen = getLine(pos.line).text.length;
      if (ch == null || ch > linelen) return {line: pos.line, ch: linelen};
      else if (ch < 0) return {line: pos.line, ch: 0};
      else return pos;
    }

    function scrollPage(down) {
      var linesPerPage = Math.floor(scroller.clientHeight / textHeight()), head = sel.inverted ? sel.from : sel.to;
      var target = heightAtLine(doc, head.line) + (Math.max(linesPerPage - 1, 1) * (down ? 1 : -1));
      setCursor(lineAtHeight(doc, target), head.ch, true);
    }
    function scrollEnd(top) {
      var pos = top ? {line: 0, ch: 0} : {line: doc.size - 1, ch: getLine(doc.size-1).text.length};
      setSelectionUser(pos, pos);
    }
    function selectAll() {
      var endLine = doc.size - 1;
      setSelection({line: 0, ch: 0}, {line: endLine, ch: getLine(endLine).text.length});
    }
    function selectWordAt(pos) {
      var line = getLine(pos.line).text;
      var start = pos.ch, end = pos.ch;
      while (start > 0 && /\w/.test(line.charAt(start - 1))) --start;
      while (end < line.length && /\w/.test(line.charAt(end))) ++end;
      setSelectionUser({line: pos.line, ch: start}, {line: pos.line, ch: end});
    }
    function selectLine(line) {
      setSelectionUser({line: line, ch: 0}, {line: line, ch: getLine(line).text.length});
    }
    function handleEnter() {
      replaceSelection("\n", "end");
      if (options.enterMode != "flat")
        indentLine(sel.from.line, options.enterMode == "keep" ? "prev" : "smart");
    }
    function handleTab(shift) {
      function indentSelected(mode) {
        if (posEq(sel.from, sel.to)) return indentLine(sel.from.line, mode);
        var e = sel.to.line - (sel.to.ch ? 0 : 1);
        for (var i = sel.from.line; i <= e; ++i) indentLine(i, mode);
      }
      shiftSelecting = null;
      switch (options.tabMode) {
      case "default":
        return false;
      case "indent":
        indentSelected("smart");
        break;
      case "classic":
        if (posEq(sel.from, sel.to)) {
          if (shift) indentLine(sel.from.line, "smart");
          else replaceSelection("\t", "end");
          break;
        }
      case "shift":
        indentSelected(shift ? "subtract" : "add");
        break;
      }
      return true;
    }
    function smartHome() {
      var firstNonWS = Math.max(0, getLine(sel.from.line).text.search(/\S/));
      setCursor(sel.from.line, sel.from.ch <= firstNonWS && sel.from.ch ? 0 : firstNonWS, true);
    }

    function indentLine(n, how) {
      if (how == "smart") {
        if (!mode.indent) how = "prev";
        else var state = getStateBefore(n);
      }

      var line = getLine(n), curSpace = line.indentation(), curSpaceString = line.text.match(/^\s*/)[0], indentation;
      if (how == "prev") {
        if (n) indentation = getLine(n-1).indentation();
        else indentation = 0;
      }
      else if (how == "smart") indentation = mode.indent(state, line.text.slice(curSpaceString.length));
      else if (how == "add") indentation = curSpace + options.indentUnit;
      else if (how == "subtract") indentation = curSpace - options.indentUnit;
      indentation = Math.max(0, indentation);
      var diff = indentation - curSpace;

      if (!diff) {
        if (sel.from.line != n && sel.to.line != n) return;
        var indentString = curSpaceString;
      }
      else {
        var indentString = "", pos = 0;
        if (options.indentWithTabs)
          for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";}
        while (pos < indentation) {++pos; indentString += " ";}
      }

      replaceRange(indentString, {line: n, ch: 0}, {line: n, ch: curSpaceString.length});
    }

    function loadMode() {
      mode = CodeMirror.getMode(options, options.mode);
      doc.iter(0, doc.size, function(line) { line.stateAfter = null; });
      work = [0];
      startWorker();
    }
    function gutterChanged() {
      var visible = options.gutter || options.lineNumbers;
      gutter.style.display = visible ? "" : "none";
      if (visible) gutterDirty = true;
      else lineDiv.parentNode.style.marginLeft = 0;
    }
    function wrappingChanged(from, to) {
      if (options.lineWrapping) {
        wrapper.className += " CodeMirror-wrap";
        var perLine = scroller.clientWidth / charWidth() - 3;
        doc.iter(0, doc.size, function(line) {
          if (line.hidden) return;
          var guess = Math.ceil(line.text.length / perLine) || 1;
          if (guess != 1) updateLineHeight(line, guess);
        });
        lineSpace.style.width = code.style.width = "";
      } else {
        wrapper.className = wrapper.className.replace(" CodeMirror-wrap", "");
        maxWidth = null; maxLine = "";
        doc.iter(0, doc.size, function(line) {
          if (line.height != 1 && !line.hidden) updateLineHeight(line, 1);
          if (line.text.length > maxLine.length) maxLine = line.text;
        });
      }
      changes.push({from: 0, to: doc.size});
    }

    function markText(from, to, className) {
      from = clipPos(from); to = clipPos(to);
      var set = [];
      function add(line, from, to, className) {
        mark = getLine(line).addMark(from, to, className, set);
      }
      if (from.line == to.line) add(from.line, from.ch, to.ch, className);
      else {
        add(from.line, from.ch, null, className);
        for (var i = from.line + 1, e = to.line; i < e; ++i)
          add(i, 0, null, className);
        add(to.line, 0, to.ch, className);
      }
      changes.push({from: from.line, to: to.line + 1});
      return new TextMarker(set);
    }

    function TextMarker(set) { this.set = set; }
    TextMarker.prototype.clear = operation(function() {
      for (var i = 0, e = this.set.length; i < e; ++i) {
        var mk = this.set[i].marked;
        if (!mk) continue;
        for (var j = 0; j < mk.length; ++j) {
          if (mk[j].set == this.set) mk.splice(j--, 1);
        }
      }
      // We don't know the exact lines that changed. Refreshing is
      // cheaper than finding them.
      changes.push({from: 0, to: doc.size});
    });
    TextMarker.prototype.find = function() {
      var from, to;
      for (var i = 0, e = this.set.length; i < e; ++i) {
        var line = this.set[i], mk = line.marked;
        for (var j = 0; j < mk.length; ++j) {
          var mark = mk[j];
          if (mark.set == this.set) {
            if (mark.from != null || mark.to != null) {
              var found = lineNo(line);
              if (found != null) {
                if (mark.from != null) from = {line: found, ch: mark.from};
                if (mark.to != null) to = {line: found, ch: mark.to};
              }
            }
          }
        }
      }
      return {from: from, to: to};
    };

    function addGutterMarker(line, text, className) {
      if (typeof line == "number") line = getLine(clipLine(line));
      line.gutterMarker = {text: text, style: className};
      gutterDirty = true;
      return line;
    }
    function removeGutterMarker(line) {
      if (typeof line == "number") line = getLine(clipLine(line));
      line.gutterMarker = null;
      gutterDirty = true;
    }

    function changeLine(handle, op) {
      var no = handle, line = handle;
      if (typeof handle == "number") line = getLine(clipLine(handle));
      else no = lineNo(handle);
      if (no == null) return null;
      if (op(line, no)) changes.push({from: no, to: no + 1});
      return line;
    }
    function setLineClass(handle, className) {
      return changeLine(handle, function(line) {
        if (line.className != className) {
          line.className = className;
          return true;
        }
      });
    }
    function setLineHidden(handle, hidden) {
      return changeLine(handle, function(line, no) {
        if (line.hidden != hidden) {
          line.hidden = hidden;
          updateLineHeight(line, hidden ? 0 : 1);
          if (hidden && (sel.from.line == no || sel.to.line == no))
            setSelection(skipHidden(sel.from, sel.from.line, sel.from.ch),
                         skipHidden(sel.to, sel.to.line, sel.to.ch));
          return (gutterDirty = true);
        }
      });
    }

    function lineInfo(line) {
      if (typeof line == "number") {
        if (!isLine(line)) return null;
        var n = line;
        line = getLine(line);
        if (!line) return null;
      }
      else {
        var n = lineNo(line);
        if (n == null) return null;
      }
      var marker = line.gutterMarker;
      return {line: n, text: line.text, markerText: marker && marker.text, markerClass: marker && marker.style, lineClass: line.className};
    }

    function stringWidth(str) {
      measure.innerHTML = "<pre><span>x</span></pre>";
      measure.firstChild.firstChild.firstChild.nodeValue = str;
      return measure.firstChild.firstChild.offsetWidth || 10;
    }
    // These are used to go from pixel positions to character
    // positions, taking varying character widths into account.
    function charFromX(line, x) {
      if (x <= 0) return 0;
      var lineObj = getLine(line), text = lineObj.text;
      function getX(len) {
        measure.innerHTML = "<pre><span>" + lineObj.getHTML(null, null, false, len) + "</span></pre>";
        return measure.firstChild.firstChild.offsetWidth;
      }
      var from = 0, fromX = 0, to = text.length, toX;
      // Guess a suitable upper bound for our search.
      var estimated = Math.min(to, Math.ceil(x / charWidth()));
      for (;;) {
        var estX = getX(estimated);
        if (estX <= x && estimated < to) estimated = Math.min(to, Math.ceil(estimated * 1.2));
        else {toX = estX; to = estimated; break;}
      }
      if (x > toX) return to;
      // Try to guess a suitable lower bound as well.
      estimated = Math.floor(to * 0.8); estX = getX(estimated);
      if (estX < x) {from = estimated; fromX = estX;}
      // Do a binary search between these bounds.
      for (;;) {
        if (to - from <= 1) return (toX - x > x - fromX) ? from : to;
        var middle = Math.ceil((from + to) / 2), middleX = getX(middle);
        if (middleX > x) {to = middle; toX = middleX;}
        else {from = middle; fromX = middleX;}
      }
    }

    function measureLine(line, ch) {
      var extra = "";
      // Include extra text at the end to make sure the measured line is wrapped in the right way.
      if (options.lineWrapping) {
        var end = line.text.indexOf(" ", ch + 2);
        extra = line.text.slice(ch + 1, end < 0 ? line.text.length : end + (ie ? 5 : 0));
      }
      measure.innerHTML = "<pre>" + line.getHTML(null, null, false, ch) +
        '<span id="CodeMirror-temp">' + (line.text.charAt(ch) || " ") + "</span>" +
        extra + "</pre>";
      var elt = document.getElementById("CodeMirror-temp");
      var top = elt.offsetTop, left = elt.offsetLeft;
      // Older IEs report zero offsets for spans directly after a wrap
      if (ie && ch && top == 0 && left == 0) {
        var backup = document.createElement("span");
        backup.innerHTML = "x";
        elt.parentNode.insertBefore(backup, elt.nextSibling);
        top = backup.offsetTop;
      }
      return {top: top, left: left};
    }
    function localCoords(pos, inLineWrap) {
      var x, lh = textHeight(), y = lh * (heightAtLine(doc, pos.line) - (inLineWrap ? displayOffset : 0));
      if (pos.ch == 0) x = 0;
      else {
        var sp = measureLine(getLine(pos.line), pos.ch);
        x = sp.left;
        if (options.lineWrapping) y += Math.max(0, sp.top);
      }
      return {x: x, y: y, yBot: y + lh};
    }
    // Coords must be lineSpace-local
    function coordsChar(x, y) {
      if (y < 0) y = 0;
      var th = textHeight(), cw = charWidth(), heightPos = displayOffset + Math.floor(y / th);
      var lineNo = lineAtHeight(doc, heightPos);
      if (lineNo >= doc.size) return {line: doc.size - 1, ch: 0};
      var lineObj = getLine(lineNo), text = lineObj.text;
      var tw = options.lineWrapping, innerOff = tw ? heightPos - heightAtLine(doc, lineNo) : 0;
      if (x <= 0 && innerOff == 0) return {line: lineNo, ch: 0};
      function getX(len) {
        var sp = measureLine(lineObj, len);
        if (tw) {
          var off = Math.round(sp.top / th);
          return Math.max(0, sp.left + (off - innerOff) * scroller.clientWidth);
        }
        return sp.left;
      }
      var from = 0, fromX = 0, to = text.length, toX;
      // Guess a suitable upper bound for our search.
      var estimated = Math.min(to, Math.ceil((x + innerOff * scroller.clientWidth * .9) / cw));
      for (;;) {
        var estX = getX(estimated);
        if (estX <= x && estimated < to) estimated = Math.min(to, Math.ceil(estimated * 1.2));
        else {toX = estX; to = estimated; break;}
      }
      if (x > toX) return {line: lineNo, ch: to};
      // Try to guess a suitable lower bound as well.
      estimated = Math.floor(to * 0.8); estX = getX(estimated);
      if (estX < x) {from = estimated; fromX = estX;}
      // Do a binary search between these bounds.
      for (;;) {
        if (to - from <= 1) return {line: lineNo, ch: (toX - x > x - fromX) ? from : to};
        var middle = Math.ceil((from + to) / 2), middleX = getX(middle);
        if (middleX > x) {to = middle; toX = middleX;}
        else {from = middle; fromX = middleX;}
      }
    }
    function pageCoords(pos) {
      var local = localCoords(pos, true), off = eltOffset(lineSpace);
      return {x: off.left + local.x, y: off.top + local.y, yBot: off.top + local.yBot};
    }

    var cachedHeight, cachedFor;
    function textHeight() {
      var offsetHeight = lineDiv.offsetHeight;
      if (offsetHeight == cachedFor) return cachedHeight;
      cachedFor = offsetHeight;
      measure.innerHTML = "<pre>x<br>x<br>x<br>x<br>x<br>x<br>x<br>x<br>x<br>x</pre>";
      return (cachedHeight = measure.firstChild.offsetHeight / 10 || 1);
    }
    var cachedWidth, cachedFor = 0;
    function charWidth() {
      if (scroller.clientWidth == cachedFor) return cachedWidth;
      cachedFor = scroller.clientWidth;
      return (cachedWidth = stringWidth("x"));
    }
    function paddingTop() {return lineSpace.offsetTop;}
    function paddingLeft() {return lineSpace.offsetLeft;}

    function posFromMouse(e, liberal) {
      var offW = eltOffset(scroller, true), x, y;
      // Fails unpredictably on IE[67] when mouse is dragged around quickly.
      try { x = e.clientX; y = e.clientY; } catch (e) { return null; }
      // This is a mess of a heuristic to try and determine whether a
      // scroll-bar was clicked or not, and to return null if one was
      // (and !liberal).
      if (!liberal && (x - offW.left > scroller.clientWidth || y - offW.top > scroller.clientHeight))
        return null;
      var offL = eltOffset(lineSpace, true);
      return coordsChar(x - offL.left, y - offL.top);
    }
    function onContextMenu(e) {
      var pos = posFromMouse(e);
      if (!pos || window.opera) return; // Opera is difficult.
      if (posEq(sel.from, sel.to) || posLess(pos, sel.from) || !posLess(pos, sel.to))
        operation(setCursor)(pos.line, pos.ch);

      var oldCSS = input.style.cssText;
      inputDiv.style.position = "absolute";
      input.style.cssText = "position: fixed; width: 30px; height: 30px; top: " + (e.clientY - 5) +
        "px; left: " + (e.clientX - 5) + "px; z-index: 1000; background: white; " +
        "border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
      leaveInputAlone = true;
      var val = input.value = getSelection();
      focusInput();
      setSelRange(input, 0, input.value.length);
      function rehide() {
        var newVal = splitLines(input.value).join("\n");
        if (newVal != val) operation(replaceSelection)(newVal, "end");
        inputDiv.style.position = "relative";
        input.style.cssText = oldCSS;
        leaveInputAlone = false;
        prepareInput();
        slowPoll();
      }

      if (gecko) {
        e_stop(e);
        var mouseup = connect(window, "mouseup", function() {
          mouseup();
          setTimeout(rehide, 20);
        }, true);
      }
      else {
        setTimeout(rehide, 50);
      }
    }

    // Cursor-blinking
    function restartBlink() {
      clearInterval(blinker);
      var on = true;
      cursor.style.visibility = "";
      blinker = setInterval(function() {
        cursor.style.visibility = (on = !on) ? "" : "hidden";
      }, 650);
    }

    var matching = {"(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<"};
    function matchBrackets(autoclear) {
      var head = sel.inverted ? sel.from : sel.to, line = getLine(head.line), pos = head.ch - 1;
      var match = (pos >= 0 && matching[line.text.charAt(pos)]) || matching[line.text.charAt(++pos)];
      if (!match) return;
      var ch = match.charAt(0), forward = match.charAt(1) == ">", d = forward ? 1 : -1, st = line.styles;
      for (var off = pos + 1, i = 0, e = st.length; i < e; i+=2)
        if ((off -= st[i].length) <= 0) {var style = st[i+1]; break;}

      var stack = [line.text.charAt(pos)], re = /[(){}[\]]/;
      function scan(line, from, to) {
        if (!line.text) return;
        var st = line.styles, pos = forward ? 0 : line.text.length - 1, cur;
        for (var i = forward ? 0 : st.length - 2, e = forward ? st.length : -2; i != e; i += 2*d) {
          var text = st[i];
          if (st[i+1] != null && st[i+1] != style) {pos += d * text.length; continue;}
          for (var j = forward ? 0 : text.length - 1, te = forward ? text.length : -1; j != te; j += d, pos+=d) {
            if (pos >= from && pos < to && re.test(cur = text.charAt(j))) {
              var match = matching[cur];
              if (match.charAt(1) == ">" == forward) stack.push(cur);
              else if (stack.pop() != match.charAt(0)) return {pos: pos, match: false};
              else if (!stack.length) return {pos: pos, match: true};
            }
          }
        }
      }
      for (var i = head.line, e = forward ? Math.min(i + 100, doc.size) : Math.max(-1, i - 100); i != e; i+=d) {
        var line = getLine(i), first = i == head.line;
        var found = scan(line, first && forward ? pos + 1 : 0, first && !forward ? pos : line.text.length);
        if (found) break;
      }
      if (!found) found = {pos: null, match: false};
      var style = found.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
      var one = markText({line: head.line, ch: pos}, {line: head.line, ch: pos+1}, style),
          two = found.pos != null && markText({line: i, ch: found.pos}, {line: i, ch: found.pos + 1}, style);
      var clear = operation(function(){one.clear(); two && two.clear();});
      if (autoclear) setTimeout(clear, 800);
      else bracketHighlighted = clear;
    }

    // Finds the line to start with when starting a parse. Tries to
    // find a line with a stateAfter, so that it can start with a
    // valid state. If that fails, it returns the line with the
    // smallest indentation, which tends to need the least context to
    // parse correctly.
    function findStartLine(n) {
      var minindent, minline;
      for (var search = n, lim = n - 40; search > lim; --search) {
        if (search == 0) return 0;
        var line = getLine(search-1);
        if (line.stateAfter) return search;
        var indented = line.indentation();
        if (minline == null || minindent > indented) {
          minline = search - 1;
          minindent = indented;
        }
      }
      return minline;
    }
    function getStateBefore(n) {
      var start = findStartLine(n), state = start && getLine(start-1).stateAfter;
      if (!state) state = startState(mode);
      else state = copyState(mode, state);
      doc.iter(start, n, function(line) {
        line.highlight(mode, state);
        line.stateAfter = copyState(mode, state);
      });
      if (start < n) changes.push({from: start, to: n});
      if (n < doc.size && !getLine(n).stateAfter) work.push(n);
      return state;
    }
    function highlightLines(start, end) {
      var state = getStateBefore(start);
      doc.iter(start, end, function(line) {
        line.highlight(mode, state);
        line.stateAfter = copyState(mode, state);
      });
    }
    function highlightWorker() {
      var end = +new Date + options.workTime;
      var foundWork = work.length;
      while (work.length) {
        if (!getLine(showingFrom).stateAfter) var task = showingFrom;
        else var task = work.pop();
        if (task >= doc.size) continue;
        var start = findStartLine(task), state = start && getLine(start-1).stateAfter;
        if (state) state = copyState(mode, state);
        else state = startState(mode);

        var unchanged = 0, compare = mode.compareStates, realChange = false,
            i = start, bail = false;
        doc.iter(i, doc.size, function(line) {
          var hadState = line.stateAfter;
          if (+new Date > end) {
            work.push(i);
            startWorker(options.workDelay);
            if (realChange) changes.push({from: task, to: i + 1});
            return (bail = true);
          }
          var changed = line.highlight(mode, state);
          if (changed) realChange = true;
          line.stateAfter = copyState(mode, state);
          if (compare) {
            if (hadState && compare(hadState, state)) return true;
          } else {
            if (changed !== false || !hadState) unchanged = 0;
            else if (++unchanged > 3) return true;
          }
          ++i;
        });
        if (bail) return;
        if (realChange) changes.push({from: task, to: i + 1});
      }
      if (foundWork && options.onHighlightComplete)
        options.onHighlightComplete(instance);
    }
    function startWorker(time) {
      if (!work.length) return;
      highlight.set(time, operation(highlightWorker));
    }

    // Operations are used to wrap changes in such a way that each
    // change won't have to update the cursor and display (which would
    // be awkward, slow, and error-prone), but instead updates are
    // batched and then all combined and executed at once.
    function startOperation() {
      updateInput = null; changes = []; textChanged = selectionChanged = false;
    }
    function endOperation() {
      var reScroll = false;
      if (selectionChanged) reScroll = !scrollCursorIntoView();
      if (changes.length) updateDisplay(changes);
      else {
        if (selectionChanged) updateCursor();
        if (gutterDirty) updateGutter();
      }
      if (reScroll) scrollCursorIntoView();
      if (selectionChanged) {scrollEditorIntoView(); restartBlink();}

      // updateInput can be set to a boolean value to force/prevent an
      // update.
      if (focused && !leaveInputAlone &&
          (updateInput === true || (updateInput !== false && selectionChanged)))
        prepareInput();

      if (selectionChanged && options.matchBrackets)
        setTimeout(operation(function() {
          if (bracketHighlighted) {bracketHighlighted(); bracketHighlighted = null;}
          matchBrackets(false);
        }), 20);
      var tc = textChanged; // textChanged can be reset by cursoractivity callback
      if (selectionChanged && options.onCursorActivity)
        options.onCursorActivity(instance);
      if (tc && options.onChange && instance)
        options.onChange(instance, tc);
    }
    var nestedOperation = 0;
    function operation(f) {
      return function() {
        if (!nestedOperation++) startOperation();
        try {var result = f.apply(this, arguments);}
        finally {if (!--nestedOperation) endOperation();}
        return result;
      };
    }

    function SearchCursor(query, pos, caseFold) {
      this.atOccurrence = false;
      if (caseFold == null) caseFold = typeof query == "string" && query == query.toLowerCase();

      if (pos && typeof pos == "object") pos = clipPos(pos);
      else pos = {line: 0, ch: 0};
      this.pos = {from: pos, to: pos};

      // The matches method is filled in based on the type of query.
      // It takes a position and a direction, and returns an object
      // describing the next occurrence of the query, or null if no
      // more matches were found.
      if (typeof query != "string") // Regexp match
        this.matches = function(reverse, pos) {
          if (reverse) {
            var line = getLine(pos.line).text.slice(0, pos.ch), match = line.match(query), start = 0;
            while (match) {
              var ind = line.indexOf(match[0]);
              start += ind;
              line = line.slice(ind + 1);
              var newmatch = line.match(query);
              if (newmatch) match = newmatch;
              else break;
              start++;
            }
          }
          else {
            var line = getLine(pos.line).text.slice(pos.ch), match = line.match(query),
                start = match && pos.ch + line.indexOf(match[0]);
          }
          if (match)
            return {from: {line: pos.line, ch: start},
                    to: {line: pos.line, ch: start + match[0].length},
                    match: match};
        };
      else { // String query
        if (caseFold) query = query.toLowerCase();
        var fold = caseFold ? function(str){return str.toLowerCase();} : function(str){return str;};
        var target = query.split("\n");
        // Different methods for single-line and multi-line queries
        if (target.length == 1)
          this.matches = function(reverse, pos) {
            var line = fold(getLine(pos.line).text), len = query.length, match;
            if (reverse ? (pos.ch >= len && (match = line.lastIndexOf(query, pos.ch - len)) != -1)
                        : (match = line.indexOf(query, pos.ch)) != -1)
              return {from: {line: pos.line, ch: match},
                      to: {line: pos.line, ch: match + len}};
          };
        else
          this.matches = function(reverse, pos) {
            var ln = pos.line, idx = (reverse ? target.length - 1 : 0), match = target[idx], line = fold(getLine(ln).text);
            var offsetA = (reverse ? line.indexOf(match) + match.length : line.lastIndexOf(match));
            if (reverse ? offsetA >= pos.ch || offsetA != match.length
                        : offsetA <= pos.ch || offsetA != line.length - match.length)
              return;
            for (;;) {
              if (reverse ? !ln : ln == doc.size - 1) return;
              line = fold(getLine(ln += reverse ? -1 : 1).text);
              match = target[reverse ? --idx : ++idx];
              if (idx > 0 && idx < target.length - 1) {
                if (line != match) return;
                else continue;
              }
              var offsetB = (reverse ? line.lastIndexOf(match) : line.indexOf(match) + match.length);
              if (reverse ? offsetB != line.length - match.length : offsetB != match.length)
                return;
              var start = {line: pos.line, ch: offsetA}, end = {line: ln, ch: offsetB};
              return {from: reverse ? end : start, to: reverse ? start : end};
            }
          };
      }
    }

    SearchCursor.prototype = {
      findNext: function() {return this.find(false);},
      findPrevious: function() {return this.find(true);},

      find: function(reverse) {
        var self = this, pos = clipPos(reverse ? this.pos.from : this.pos.to);
        function savePosAndFail(line) {
          var pos = {line: line, ch: 0};
          self.pos = {from: pos, to: pos};
          self.atOccurrence = false;
          return false;
        }

        for (;;) {
          if (this.pos = this.matches(reverse, pos)) {
            this.atOccurrence = true;
            return this.pos.match || true;
          }
          if (reverse) {
            if (!pos.line) return savePosAndFail(0);
            pos = {line: pos.line-1, ch: getLine(pos.line-1).text.length};
          }
          else {
            if (pos.line == doc.size - 1) return savePosAndFail(doc.size);
            pos = {line: pos.line+1, ch: 0};
          }
        }
      },

      from: function() {if (this.atOccurrence) return copyPos(this.pos.from);},
      to: function() {if (this.atOccurrence) return copyPos(this.pos.to);},

      replace: function(newText) {
        var self = this;
        if (this.atOccurrence)
          operation(function() {
            self.pos.to = replaceRange(newText, self.pos.from, self.pos.to);
          })();
      }
    };

    for (var ext in extensions)
      if (extensions.propertyIsEnumerable(ext) &&
          !instance.propertyIsEnumerable(ext))
        instance[ext] = extensions[ext];
    return instance;
  } // (end of function CodeMirror)

  // The default configuration options.
  CodeMirror.defaults = {
    value: "",
    mode: null,
    theme: "default",
    indentUnit: 2,
    indentWithTabs: false,
    tabMode: "classic",
    enterMode: "indent",
    electricChars: true,
    onKeyEvent: null,
    lineWrapping: false,
    lineNumbers: false,
    gutter: false,
    fixedGutter: false,
    firstLineNumber: 1,
    readOnly: false,
    smartHome: true,
    onChange: null,
    onCursorActivity: null,
    onGutterClick: null,
    onHighlightComplete: null,
    onFocus: null, onBlur: null, onScroll: null,
    matchBrackets: false,
    workTime: 100,
    workDelay: 200,
    undoDepth: 40,
    tabindex: null,
    pollForIME: false,
    document: window.document
  };

  // Known modes, by name and by MIME
  var modes = {}, mimeModes = {};
  CodeMirror.defineMode = function(name, mode) {
    if (!CodeMirror.defaults.mode && name != "null") CodeMirror.defaults.mode = name;
    modes[name] = mode;
  };
  CodeMirror.defineMIME = function(mime, spec) {
    mimeModes[mime] = spec;
  };
  CodeMirror.getMode = function(options, spec) {
    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec))
      spec = mimeModes[spec];
    if (typeof spec == "string")
      var mname = spec, config = {};
    else if (spec != null)
      var mname = spec.name, config = spec;
    var mfactory = modes[mname];
    if (!mfactory) {
      if (window.console) console.warn("No mode " + mname + " found, falling back to plain text.");
      return CodeMirror.getMode(options, "text/plain");
    }
    return mfactory(options, config || {});
  };
  CodeMirror.listModes = function() {
    var list = [];
    for (var m in modes)
      if (modes.propertyIsEnumerable(m)) list.push(m);
    return list;
  };
  CodeMirror.listMIMEs = function() {
    var list = [];
    for (var m in mimeModes)
      if (mimeModes.propertyIsEnumerable(m)) list.push({mime: m, mode: mimeModes[m]});
    return list;
  };

  var extensions = {};
  CodeMirror.defineExtension = function(name, func) {
    extensions[name] = func;
  };

  CodeMirror.fromTextArea = function(textarea, options) {
    if (!options) options = {};
    options.value = textarea.value;
    if (!options.tabindex && textarea.tabindex)
      options.tabindex = textarea.tabindex;

    function save() {textarea.value = instance.getValue();}
    if (textarea.form) {
      // Deplorable hack to make the submit method do the right thing.
      var rmSubmit = connect(textarea.form, "submit", save, true);
      if (typeof textarea.form.submit == "function") {
        var realSubmit = textarea.form.submit;
        function wrappedSubmit() {
          save();
          textarea.form.submit = realSubmit;
          textarea.form.submit();
          textarea.form.submit = wrappedSubmit;
        }
        textarea.form.submit = wrappedSubmit;
      }
    }

    textarea.style.display = "none";
    var instance = CodeMirror(function(node) {
      textarea.parentNode.insertBefore(node, textarea.nextSibling);
    }, options);
    instance.save = save;
    instance.toTextArea = function() {
      save();
      textarea.parentNode.removeChild(instance.getWrapperElement());
      textarea.style.display = "";
      if (textarea.form) {
        rmSubmit();
        if (typeof textarea.form.submit == "function")
          textarea.form.submit = realSubmit;
      }
    };
    return instance;
  };

  // Utility functions for working with state. Exported because modes
  // sometimes need to do this.
  function copyState(mode, state) {
    if (state === true) return state;
    if (mode.copyState) return mode.copyState(state);
    var nstate = {};
    for (var n in state) {
      var val = state[n];
      if (val instanceof Array) val = val.concat([]);
      nstate[n] = val;
    }
    return nstate;
  }
  CodeMirror.copyState = copyState;
  function startState(mode, a1, a2) {
    return mode.startState ? mode.startState(a1, a2) : true;
  }
  CodeMirror.startState = startState;

  // The character stream used by a mode's parser.
  function StringStream(string) {
    this.pos = this.start = 0;
    this.string = string;
  }
  StringStream.prototype = {
    eol: function() {return this.pos >= this.string.length;},
    sol: function() {return this.pos == 0;},
    peek: function() {return this.string.charAt(this.pos);},
    next: function() {
      if (this.pos < this.string.length)
        return this.string.charAt(this.pos++);
    },
    eat: function(match) {
      var ch = this.string.charAt(this.pos);
      if (typeof match == "string") var ok = ch == match;
      else var ok = ch && (match.test ? match.test(ch) : match(ch));
      if (ok) {++this.pos; return ch;}
    },
    eatWhile: function(match) {
      var start = this.pos;
      while (this.eat(match)){}
      return this.pos > start;
    },
    eatSpace: function() {
      var start = this.pos;
      while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) ++this.pos;
      return this.pos > start;
    },
    skipToEnd: function() {this.pos = this.string.length;},
    skipTo: function(ch) {
      var found = this.string.indexOf(ch, this.pos);
      if (found > -1) {this.pos = found; return true;}
    },
    backUp: function(n) {this.pos -= n;},
    column: function() {return countColumn(this.string, this.start);},
    indentation: function() {return countColumn(this.string);},
    match: function(pattern, consume, caseInsensitive) {
      if (typeof pattern == "string") {
        function cased(str) {return caseInsensitive ? str.toLowerCase() : str;}
        if (cased(this.string).indexOf(cased(pattern), this.pos) == this.pos) {
          if (consume !== false) this.pos += pattern.length;
          return true;
        }
      }
      else {
        var match = this.string.slice(this.pos).match(pattern);
        if (match && consume !== false) this.pos += match[0].length;
        return match;
      }
    },
    current: function(){return this.string.slice(this.start, this.pos);}
  };
  CodeMirror.StringStream = StringStream;

  // Line objects. These hold state related to a line, including
  // highlighting info (the styles array).
  function Line(text, styles) {
    this.styles = styles || [text, null];
    this.text = text;
    this.height = 1;
    this.marked = this.gutterMarker = this.className = null;
    this.stateAfter = this.parent = this.hidden = null;
  }
  Line.inheritMarks = function(text, orig) {
    var ln = new Line(text), mk = orig.marked;
    if (mk) {
      for (var i = 0; i < mk.length; ++i) {
        if (mk[i].to == null) {
          var newmk = ln.marked || (ln.marked = []), mark = mk[i];
          newmk.push({from: null, to: null, style: mark.style, set: mark.set});
          mark.set.push(ln);
        }
      }
    }
    return ln;
  }
  Line.prototype = {
    // Replace a piece of a line, keeping the styles around it intact.
    replace: function(from, to_, text) {
      // Reset line class if the whole text was replaced.
      if (!from && (to_ == null || to_ == this.text.length))
        this.className = this.gutterMarker = null;
      var st = [], mk = this.marked, to = to_ == null ? this.text.length : to_;
      copyStyles(0, from, this.styles, st);
      if (text) st.push(text, null);
      copyStyles(to, this.text.length, this.styles, st);
      this.styles = st;
      this.text = this.text.slice(0, from) + text + this.text.slice(to);
      this.stateAfter = null;
      if (mk) {
        var diff = text.length - (to - from), end = this.text.length;
        var changeStart = Math.min(from, from + diff);
        for (var i = 0; i < mk.length; ++i) {
          var mark = mk[i], del = false;
          if (mark.from != null && mark.from >= end) del = true;
          else {
            if (mark.from != null && mark.from >= from) {
              mark.from = Math.max(mark.from, to) + diff;
              if (mark.from <= 0) mark.from = from == null ? null : 0;
            }
            else if (to_ == null) mark.to = null;
            if (mark.to != null && mark.to > from) {
              mark.to = Math.max(mark.to, to) + diff;
              if (mark.to <= 0) del = true;
            }
          }
          if (del || (mark.from != null && mark.to != null && mark.from >= mark.to)) mk.splice(i--, 1);
        }
      }
    },
    // Split a part off a line, keeping styles and markers intact.
    split: function(pos, textBefore) {
      var st = [textBefore, null], mk = this.marked;
      copyStyles(pos, this.text.length, this.styles, st);
      var taken = new Line(textBefore + this.text.slice(pos), st);
      if (mk) {
        for (var i = 0; i < mk.length; ++i) {
          var mark = mk[i];
          if (mark.to > pos || mark.to == null) {
            if (!taken.marked) taken.marked = [];
            taken.marked.push({
              from: mark.from < pos || mark.from == null ? null : mark.from - pos + textBefore.length,
              to: mark.to == null ? null : mark.to - pos + textBefore.length,
              style: mark.style, set: mark.set
            });
            mark.set.push(taken);
          }
        }
      }
      return taken;
    },
    append: function(line) {
      if (!line.text.length) return;
      var mylen = this.text.length, mk = line.marked;
      this.text += line.text;
      copyStyles(0, line.text.length, line.styles, this.styles);
      if (mk && mk.length) {
        var mymk = this.marked || (this.marked = []);
        for (var i = 0; i < mymk.length; ++i)
          if (mymk[i].to == null) mymk[i].to = mylen;
        outer: for (var i = 0; i < mk.length; ++i) {
          var mark = mk[i];
          if (!mark.from) {
            for (var j = 0; j < mymk.length; ++j) {
              var mymark = mymk[j];
              if (mymark.to == mylen && mymark.set == mark.set) {
                mymark.to = mark.to == null ? null : mark.to + mylen;
                continue outer;
              }
            }
          }
          mymk.push(mark);
          mark.set.push(this);
          mark.from += mylen;
          if (mark.to != null) mark.to += mylen;
        }
      }
    },
    addMark: function(from, to, style, set) {
      set.push(this);
      if (this.marked == null) this.marked = [];
      this.marked.push({from: from, to: to, style: style, set: set});
      this.marked.sort(function(a, b){return (a.from || 0) - (b.from || 0);});
    },
    // Run the given mode's parser over a line, update the styles
    // array, which contains alternating fragments of text and CSS
    // classes.
    highlight: function(mode, state) {
      var stream = new StringStream(this.text), st = this.styles, pos = 0;
      var changed = false, curWord = st[0], prevWord;
      if (this.text == "" && mode.blankLine) mode.blankLine(state);
      while (!stream.eol()) {
        var style = mode.token(stream, state);
        var substr = this.text.slice(stream.start, stream.pos);
        stream.start = stream.pos;
        if (pos && st[pos-1] == style)
          st[pos-2] += substr;
        else if (substr) {
          if (!changed && (st[pos+1] != style || (pos && st[pos-2] != prevWord))) changed = true;
          st[pos++] = substr; st[pos++] = style;
          prevWord = curWord; curWord = st[pos];
        }
        // Give up when line is ridiculously long
        if (stream.pos > 5000) {
          st[pos++] = this.text.slice(stream.pos); st[pos++] = null;
          break;
        }
      }
      if (st.length != pos) {st.length = pos; changed = true;}
      if (pos && st[pos-2] != prevWord) changed = true;
      // Short lines with simple highlights return null, and are
      // counted as changed by the driver because they are likely to
      // highlight the same way in various contexts.
      return changed || (st.length < 5 && this.text.length < 10 ? null : false);
    },
    // Fetch the parser token for a given character. Useful for hacks
    // that want to inspect the mode state (say, for completion).
    getTokenAt: function(mode, state, ch) {
      var txt = this.text, stream = new StringStream(txt);
      while (stream.pos < ch && !stream.eol()) {
        stream.start = stream.pos;
        var style = mode.token(stream, state);
      }
      return {start: stream.start,
              end: stream.pos,
              string: stream.current(),
              className: style || null,
              state: state};
    },
    indentation: function() {return countColumn(this.text);},
    // Produces an HTML fragment for the line, taking selection,
    // marking, and highlighting into account.
    getHTML: function(sfrom, sto, includePre, endAt) {
      var html = [], first = true;
      if (includePre)
        html.push(this.className ? '<pre class="' + this.className + '">': "<pre>");
      function span(text, style) {
        if (!text) return;
        // Work around a bug where, in some compat modes, IE ignores leading spaces
        if (first && ie && text.charAt(0) == " ") text = "\u00a0" + text.slice(1);
        first = false;
        if (style) html.push('<span class="', style, '">', htmlEscape(text), "</span>");
        else html.push(htmlEscape(text));
      }
      var st = this.styles, allText = this.text, marked = this.marked;
      if (sfrom == sto) sfrom = null;
      var len = allText.length;
      if (endAt != null) len = Math.min(endAt, len);

      if (!allText && endAt == null)
        span(" ", sfrom != null && sto == null ? "CodeMirror-selected" : null);
      else if (!marked && sfrom == null)
        for (var i = 0, ch = 0; ch < len; i+=2) {
          var str = st[i], style = st[i+1], l = str.length;
          if (ch + l > len) str = str.slice(0, len - ch);
          ch += l;
          span(str, style && "cm-" + style);
        }
      else {
        var pos = 0, i = 0, text = "", style, sg = 0;
        var markpos = -1, mark = null;
        function nextMark() {
          if (marked) {
            markpos += 1;
            mark = (markpos < marked.length) ? marked[markpos] : null;
          }
        }
        nextMark();
        while (pos < len) {
          var upto = len;
          var extraStyle = "";
          if (sfrom != null) {
            if (sfrom > pos) upto = sfrom;
            else if (sto == null || sto > pos) {
              extraStyle = " CodeMirror-selected";
              if (sto != null) upto = Math.min(upto, sto);
            }
          }
          while (mark && mark.to != null && mark.to <= pos) nextMark();
          if (mark) {
            if (mark.from > pos) upto = Math.min(upto, mark.from);
            else {
              extraStyle += " " + mark.style;
              if (mark.to != null) upto = Math.min(upto, mark.to);
            }
          }
          for (;;) {
            var end = pos + text.length;
            var appliedStyle = style;
            if (extraStyle) appliedStyle = style ? style + extraStyle : extraStyle;
            span(end > upto ? text.slice(0, upto - pos) : text, appliedStyle);
            if (end >= upto) {text = text.slice(upto - pos); pos = upto; break;}
            pos = end;
            text = st[i++]; style = "cm-" + st[i++];
          }
        }
        if (sfrom != null && sto == null) span(" ", "CodeMirror-selected");
      }
      if (includePre) html.push("</pre>");
      return html.join("");
    },
    cleanUp: function() {
      this.parent = null;
      if (this.marked)
        for (var i = 0, e = this.marked.length; i < e; ++i) {
          var set = this.marked[i].set;
          set.splice(indexOf(set, this), 1);
        }
    }
  };
  // Utility used by replace and split above
  function copyStyles(from, to, source, dest) {
    for (var i = 0, pos = 0, state = 0; pos < to; i+=2) {
      var part = source[i], end = pos + part.length;
      if (state == 0) {
        if (end > from) dest.push(part.slice(from - pos, Math.min(part.length, to - pos)), source[i+1]);
        if (end >= from) state = 1;
      }
      else if (state == 1) {
        if (end > to) dest.push(part.slice(0, to - pos), source[i+1]);
        else dest.push(part, source[i+1]);
      }
      pos = end;
    }
  }

  // Data structure that holds the sequence of lines.
  function LeafChunk(lines) {
    this.lines = lines;
    this.parent = null;
    for (var i = 0, e = lines.length, height = 0; i < e; ++i) {
      lines[i].parent = this;
      height += lines[i].height;
    }
    this.height = height;
  }
  LeafChunk.prototype = {
    chunkSize: function() { return this.lines.length; },
    remove: function(at, n) {
      for (var i = at, e = at + n; i < e; ++i) {
        var line = this.lines[i];
        line.cleanUp();
        this.height -= line.height;
      }
      this.lines.splice(at, n);
    },
    collapse: function(lines) {
      lines.splice.apply(lines, [lines.length, 0].concat(this.lines));
    },
    insertHeight: function(at, lines, height) {
      this.height += height;
      this.lines.splice.apply(this.lines, [at, 0].concat(lines));
      for (var i = 0, e = lines.length; i < e; ++i) lines[i].parent = this;
    },
    iterN: function(at, n, op) {
      for (var e = at + n; at < e; ++at)
        if (op(this.lines[at])) return true;
    }
  };
  function BranchChunk(children) {
    this.children = children;
    var size = 0, height = 0;
    for (var i = 0, e = children.length; i < e; ++i) {
      var ch = children[i];
      size += ch.chunkSize(); height += ch.height;
      ch.parent = this;
    }
    this.size = size;
    this.height = height;
    this.parent = null;
  }
  BranchChunk.prototype = {
    chunkSize: function() { return this.size; },
    remove: function(at, n) {
      this.size -= n;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var rm = Math.min(n, sz - at), oldHeight = child.height;
          child.remove(at, rm);
          this.height -= oldHeight - child.height;
          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
          if ((n -= rm) == 0) break;
          at = 0;
        } else at -= sz;
      }
      if (this.size - n < 25) {
        var lines = [];
        this.collapse(lines);
        this.children = [new LeafChunk(lines)];
      }
    },
    collapse: function(lines) {
      for (var i = 0, e = this.children.length; i < e; ++i) this.children[i].collapse(lines);
    },
    insert: function(at, lines) {
      var height = 0;
      for (var i = 0, e = lines.length; i < e; ++i) height += lines[i].height;
      this.insertHeight(at, lines, height);
    },
    insertHeight: function(at, lines, height) {
      this.size += lines.length;
      this.height += height;
      for (var i = 0, e = this.children.length; i < e; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at <= sz) {
          child.insertHeight(at, lines, height);
          if (child.lines && child.lines.length > 50) {
            while (child.lines.length > 50) {
              var spilled = child.lines.splice(child.lines.length - 25, 25);
              var newleaf = new LeafChunk(spilled);
              child.height -= newleaf.height;
              this.children.splice(i + 1, 0, newleaf);
              newleaf.parent = this;
            }
            this.maybeSpill();
          }
          break;
        }
        at -= sz;
      }
    },
    maybeSpill: function() {
      if (this.children.length <= 10) return;
      var me = this;
      do {
        var spilled = me.children.splice(me.children.length - 5, 5);
        var sibling = new BranchChunk(spilled);
        if (!me.parent) { // Become the parent node
          var copy = new BranchChunk(me.children);
          copy.parent = me;
          me.children = [copy, sibling];
          me = copy;
        } else {
          me.size -= sibling.size;
          me.height -= sibling.height;
          var myIndex = indexOf(me.parent.children, me);
          me.parent.children.splice(myIndex + 1, 0, sibling);
        }
        sibling.parent = me.parent;
      } while (me.children.length > 10);
      me.parent.maybeSpill();
    },
    iter: function(from, to, op) { this.iterN(from, to - from, op); },
    iterN: function(at, n, op) {
      for (var i = 0, e = this.children.length; i < e; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var used = Math.min(n, sz - at);
          if (child.iterN(at, used, op)) return true;
          if ((n -= used) == 0) break;
          at = 0;
        } else at -= sz;
      }
    }
  };

  function getLineAt(chunk, n) {
    for (;;) {
      for (var i = 0, e = chunk.children.length; i < e; ++i) {
        var child = chunk.children[i], sz = child.chunkSize();
        if (n < sz) { chunk = child; break; }
        n -= sz;
      }
      if (chunk.lines) return chunk.lines[n];
    }
  }
  function lineNo(line) {
    if (line.parent == null) return null;
    var cur = line.parent, no = indexOf(cur.lines, line);
    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
      for (var i = 0, e = chunk.children.length; ; ++i) {
        if (chunk.children[i] == cur) break;
        no += chunk.children[i].chunkSize();
      }
    }
    return no;
  }
  function lineAtHeight(chunk, h) {
    var n = 0;
    outer: do {
      for (var i = 0, e = chunk.children.length; i < e; ++i) {
        var child = chunk.children[i], ch = child.height;
        if (h < ch) { chunk = child; continue outer; }
        h -= ch;
        n += child.chunkSize();
      }
      return n;
    } while (!chunk.lines);
    for (var i = 0, e = chunk.lines.length; i < e; ++i) {
      var line = chunk.lines[i], lh = line.height;
      if (h < lh) break;
      h -= lh;
    }
    return n + i;
  }
  function heightAtLine(chunk, n) {
    var h = 0;
    outer: do {
      for (var i = 0, e = chunk.children.length; i < e; ++i) {
        var child = chunk.children[i], sz = child.chunkSize();
        if (n < sz) { chunk = child; continue outer; }
        n -= sz;
        h += child.height;
      }
      return h;
    } while (!chunk.lines);
    for (var i = 0; i < n; ++i) h += chunk.lines[i].height;
    return h;
  }

  // The history object 'chunks' changes that are made close together
  // and at almost the same time into bigger undoable units.
  function History() {
    this.time = 0;
    this.done = []; this.undone = [];
  }
  History.prototype = {
    addChange: function(start, added, old) {
      this.undone.length = 0;
      var time = +new Date, last = this.done[this.done.length - 1];
      if (time - this.time > 400 || !last ||
          last.start > start + added || last.start + last.added < start - last.added + last.old.length)
        this.done.push({start: start, added: added, old: old});
      else {
        var oldoff = 0;
        if (start < last.start) {
          for (var i = last.start - start - 1; i >= 0; --i)
            last.old.unshift(old[i]);
          last.added += last.start - start;
          last.start = start;
        }
        else if (last.start < start) {
          oldoff = start - last.start;
          added += oldoff;
        }
        for (var i = last.added - oldoff, e = old.length; i < e; ++i)
          last.old.push(old[i]);
        if (last.added < added) last.added = added;
      }
      this.time = time;
    }
  };

  function stopMethod() {e_stop(this);}
  // Ensure an event has a stop method.
  function addStop(event) {
    if (!event.stop) event.stop = stopMethod;
    return event;
  }

  function e_preventDefault(e) {
    if (e.preventDefault) e.preventDefault();
    else e.returnValue = false;
  }
  function e_stopPropagation(e) {
    if (e.stopPropagation) e.stopPropagation();
    else e.cancelBubble = true;
  }
  function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}
  function e_target(e) {return e.target || e.srcElement;}
  function e_button(e) {
    if (e.which) return e.which;
    else if (e.button & 1) return 1;
    else if (e.button & 2) return 3;
    else if (e.button & 4) return 2;
  }

  // Event handler registration. If disconnect is true, it'll return a
  // function that unregisters the handler.
  function connect(node, type, handler, disconnect) {
    function wrapHandler(event) {handler(event || window.event);}
    if (typeof node.addEventListener == "function") {
      node.addEventListener(type, wrapHandler, false);
      if (disconnect) return function() {node.removeEventListener(type, wrapHandler, false);};
    }
    else {
      node.attachEvent("on" + type, wrapHandler);
      if (disconnect) return function() {node.detachEvent("on" + type, wrapHandler);};
    }
  }

  function Delayed() {this.id = null;}
  Delayed.prototype = {set: function(ms, f) {clearTimeout(this.id); this.id = setTimeout(f, ms);}};

  // Detect drag-and-drop
  var dragAndDrop = function() {
    // IE8 has ondragstart and ondrop properties, but doesn't seem to
    // actually support ondragstart the way it's supposed to work.
    if (/MSIE [1-8]\b/.test(navigator.userAgent)) return false;
    var div = document.createElement('div');
    return "draggable" in div;
  }();

  var gecko = /gecko\/\d{7}/i.test(navigator.userAgent);
  var ie = /MSIE \d/.test(navigator.userAgent);
  var webkit = /WebKit\//.test(navigator.userAgent);

  var lineSep = "\n";
  // Feature-detect whether newlines in textareas are converted to \r\n
  (function () {
    var te = document.createElement("textarea");
    te.value = "foo\nbar";
    if (te.value.indexOf("\r") > -1) lineSep = "\r\n";
  }());

  var tabSize = 8;
  var mac = /Mac/.test(navigator.platform);
  var win = /Win/.test(navigator.platform);
  var movementKeys = {};
  for (var i = 35; i <= 40; ++i)
    movementKeys[i] = movementKeys["c" + i] = true;

  // Counts the column offset in a string, taking tabs into account.
  // Used mostly to find indentation.
  function countColumn(string, end) {
    if (end == null) {
      end = string.search(/[^\s\u00a0]/);
      if (end == -1) end = string.length;
    }
    for (var i = 0, n = 0; i < end; ++i) {
      if (string.charAt(i) == "\t") n += tabSize - (n % tabSize);
      else ++n;
    }
    return n;
  }

  function computedStyle(elt) {
    if (elt.currentStyle) return elt.currentStyle;
    return window.getComputedStyle(elt, null);
  }

  // Find the position of an element by following the offsetParent chain.
  // If screen==true, it returns screen (rather than page) coordinates.
  function eltOffset(node, screen) {
    var bod = node.ownerDocument.body;
    var x = 0, y = 0, skipBody = false;
    for (var n = node; n; n = n.offsetParent) {
      var ol = n.offsetLeft, ot = n.offsetTop;
      // Firefox reports weird inverted offsets when the body has a border.
      if (n == bod) { x += Math.abs(ol); y += Math.abs(ot); }
      else { x += ol, y += ot; }
      if (screen && computedStyle(n).position == "fixed")
        skipBody = true;
    }
    var e = screen && !skipBody ? null : bod;
    for (var n = node.parentNode; n != e; n = n.parentNode)
      if (n.scrollLeft != null) { x -= n.scrollLeft; y -= n.scrollTop;}
    return {left: x, top: y};
  }
  // Use the faster and saner getBoundingClientRect method when possible.
  if (document.documentElement.getBoundingClientRect != null) eltOffset = function(node, screen) {
    // Take the parts of bounding client rect that we are interested in so we are able to edit if need be,
    // since the returned value cannot be changed externally (they are kept in sync as the element moves within the page)
    try { var box = node.getBoundingClientRect(); box = { top: box.top, left: box.left }; }
    catch(e) { box = {top: 0, left: 0}; }
    if (!screen) {
      // Get the toplevel scroll, working around browser differences.
      if (window.pageYOffset == null) {
        var t = document.documentElement || document.body.parentNode;
        if (t.scrollTop == null) t = document.body;
        box.top += t.scrollTop; box.left += t.scrollLeft;
      } else {
        box.top += window.pageYOffset; box.left += window.pageXOffset;
      }
    }
    return box;
  };

  // Get a node's text content.
  function eltText(node) {
    return node.textContent || node.innerText || node.nodeValue || "";
  }

  // Operations on {line, ch} objects.
  function posEq(a, b) {return a.line == b.line && a.ch == b.ch;}
  function posLess(a, b) {return a.line < b.line || (a.line == b.line && a.ch < b.ch);}
  function copyPos(x) {return {line: x.line, ch: x.ch};}

  var escapeElement = document.createElement("pre");
  function htmlEscape(str) {
    if (badTextContent) {
      escapeElement.innerHTML = "";
      escapeElement.appendChild(document.createTextNode(str));
    } else {
      escapeElement.textContent = str;
    }
    return escapeElement.innerHTML;
  }
  var badTextContent = htmlEscape("\t") != "\t";
  CodeMirror.htmlEscape = htmlEscape;

  // Used to position the cursor after an undo/redo by finding the
  // last edited character.
  function editEnd(from, to) {
    if (!to) return from ? from.length : 0;
    if (!from) return to.length;
    for (var i = from.length, j = to.length; i >= 0 && j >= 0; --i, --j)
      if (from.charAt(i) != to.charAt(j)) break;
    return j + 1;
  }

  function indexOf(collection, elt) {
    if (collection.indexOf) return collection.indexOf(elt);
    for (var i = 0, e = collection.length; i < e; ++i)
      if (collection[i] == elt) return i;
    return -1;
  }

  // See if "".split is the broken IE version, if so, provide an
  // alternative way to split lines.
  var splitLines, selRange, setSelRange;
  if ("\n\nb".split(/\n/).length != 3)
    splitLines = function(string) {
      var pos = 0, nl, result = [];
      while ((nl = string.indexOf("\n", pos)) > -1) {
        result.push(string.slice(pos, string.charAt(nl-1) == "\r" ? nl - 1 : nl));
        pos = nl + 1;
      }
      result.push(string.slice(pos));
      return result;
    };
  else
    splitLines = function(string){return string.split(/\r?\n/);};
  CodeMirror.splitLines = splitLines;

  // Sane model of finding and setting the selection in a textarea
  if (window.getSelection) {
    selRange = function(te) {
      try {return {start: te.selectionStart, end: te.selectionEnd};}
      catch(e) {return null;}
    };
    if (webkit)
      // On Safari, selection set with setSelectionRange are in a sort
      // of limbo wrt their anchor. If you press shift-left in them,
      // the anchor is put at the end, and the selection expanded to
      // the left. If you press shift-right, the anchor ends up at the
      // front. This is not what CodeMirror wants, so it does a
      // spurious modify() call to get out of limbo.
      setSelRange = function(te, start, end) {
        if (start == end)
          te.setSelectionRange(start, end);
        else {
          te.setSelectionRange(start, end - 1);
          window.getSelection().modify("extend", "forward", "character");
        }
      };
    else
      setSelRange = function(te, start, end) {
        try {te.setSelectionRange(start, end);}
        catch(e) {} // Fails on Firefox when textarea isn't part of the document
      };
  }
  // IE model. Don't ask.
  else {
    selRange = function(te) {
      try {var range = te.ownerDocument.selection.createRange();}
      catch(e) {return null;}
      if (!range || range.parentElement() != te) return null;
      var val = te.value, len = val.length, localRange = te.createTextRange();
      localRange.moveToBookmark(range.getBookmark());
      var endRange = te.createTextRange();
      endRange.collapse(false);

      if (localRange.compareEndPoints("StartToEnd", endRange) > -1)
        return {start: len, end: len};

      var start = -localRange.moveStart("character", -len);
      for (var i = val.indexOf("\r"); i > -1 && i < start; i = val.indexOf("\r", i+1), start++) {}

      if (localRange.compareEndPoints("EndToEnd", endRange) > -1)
        return {start: start, end: len};

      var end = -localRange.moveEnd("character", -len);
      for (var i = val.indexOf("\r"); i > -1 && i < end; i = val.indexOf("\r", i+1), end++) {}
      return {start: start, end: end};
    };
    setSelRange = function(te, start, end) {
      var range = te.createTextRange();
      range.collapse(true);
      var endrange = range.duplicate();
      var newlines = 0, txt = te.value;
      for (var pos = txt.indexOf("\n"); pos > -1 && pos < start; pos = txt.indexOf("\n", pos + 1))
        ++newlines;
      range.move("character", start - newlines);
      for (; pos > -1 && pos < end; pos = txt.indexOf("\n", pos + 1))
        ++newlines;
      endrange.move("character", end - newlines);
      range.setEndPoint("EndToEnd", endrange);
      range.select();
    };
  }

  CodeMirror.defineMode("null", function() {
    return {token: function(stream) {stream.skipToEnd();}};
  });
  CodeMirror.defineMIME("text/plain", "null");

  return CodeMirror;
})();


;CodeMirror.defineMode("css", function(config) {
  var indentUnit = config.indentUnit, type;
  function ret(style, tp) {type = tp; return style;}

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == "@") {stream.eatWhile(/[\w\\\-]/); return ret("meta", stream.current());}
    else if (ch == "/" && stream.eat("*")) {
      state.tokenize = tokenCComment;
      return tokenCComment(stream, state);
    }
    else if (ch == "<" && stream.eat("!")) {
      state.tokenize = tokenSGMLComment;
      return tokenSGMLComment(stream, state);
    }
    else if (ch == "=") ret(null, "compare");
    else if ((ch == "~" || ch == "|") && stream.eat("=")) return ret(null, "compare");
    else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    }
    else if (ch == "#") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("atom", "hash");
    }
    else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    }
    else if (/\d/.test(ch)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    }
    else if (/[,.+>*\/]/.test(ch)) {
      return ret(null, "select-op");
    }
    else if (/[;{}:\[\]]/.test(ch)) {
      return ret(null, ch);
    }
    else {
      stream.eatWhile(/[\w\\\-]/);
      return ret("variable", "variable");
    }
  }

  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenSGMLComment(stream, state) {
    var dashes = 0, ch;
    while ((ch = stream.next()) != null) {
      if (dashes >= 2 && ch == ">") {
        state.tokenize = tokenBase;
        break;
      }
      dashes = (ch == "-") ? dashes + 1 : 0;
    }
    return ret("comment", "comment");
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped)
          break;
        escaped = !escaped && ch == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  return {
    startState: function(base) {
      return {tokenize: tokenBase,
              baseIndent: base || 0,
              stack: []};
    },

    token: function(stream, state) {
      if (stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);

      var context = state.stack[state.stack.length-1];
      if (type == "hash" && context == "rule") style = "atom";
      else if (style == "variable") {
        if (context == "rule") style = "number";
        else if (!context || context == "@media{") style = "tag";
      }

      if (context == "rule" && /^[\{\};]$/.test(type))
        state.stack.pop();
      if (type == "{") {
        if (context == "@media") state.stack[state.stack.length-1] = "@media{";
        else state.stack.push("{");
      }
      else if (type == "}") state.stack.pop();
      else if (type == "@media") state.stack.push("@media");
      else if (context == "{" && type != "comment") state.stack.push("rule");
      return style;
    },

    indent: function(state, textAfter) {
      var n = state.stack.length;
      if (/^\}/.test(textAfter))
        n -= state.stack[state.stack.length-1] == "rule" ? 2 : 1;
      return state.baseIndent + n * indentUnit;
    },

    electricChars: "}"
  };
});

CodeMirror.defineMIME("text/css", "css");


;(function($) {
$(document).ready(function() {
			
	/* INIT */
		/* Make the title talk */
		startTitleActivityIndicator();
		
		/* If the layout is in the URL as a hash, retrieve it, change the active layout in layout selector, and change the currently editing */
		if ( window.location.hash.indexOf('#layout=') !== -1 ) {
		
			var layoutID = window.location.hash.replace('#layout=', '');
			var layoutSelectorNode = $('div#layout-selector span.layout[data-layout-id="' + layoutID + '"]');

			switchToLayout(layoutSelectorNode, false);
		
		}
		
		setLoadingBar(20, 'Initiating');
		
		/* Create the new object and initiate the mode and the iframe */
		Headway.iframe = $('iframe#content');
		Headway.instance = new window['visualEditorMode' + Headway.mode.capitalize()]();
		
		if ( typeof Headway.instance.init == 'function' )
			Headway.instance.init();

		/* iframe focusing and blurring */
		Headway.iframe.bind('mouseleave', function() {
			$(this).trigger('blur');
		});

		Headway.iframe.bind('mouseenter mousedown', function() {
			//If there is another textarea/input that's focused, don't focus the iframe.
			if ( $('textarea:focus, input:focus').length === 1 )
				return;

			$(this).trigger('focus');
		});

		/* Load the iframe */
		loadIframe(Headway.instance.iframeCallback, $('div#layout-selector span.layout[data-layout-id="' + Headway.currentLayout + '"]').attr('data-layout-url'));
		
		/* Parse the JSON in the Headway l10n array */
		Headway.blockTypeURLs = $.parseJSON(Headway.blockTypeURLs.replace(/&quot;/g, '"'));
		Headway.allBlockTypes = $.parseJSON(Headway.allBlockTypes.replace(/&quot;/g, '"'));
		Headway.ranTour = $.parseJSON(Headway.ranTour.replace(/&quot;/g, '"'));

		Headway.designEditorProperties = $.parseJSON(Headway.designEditorProperties.replace(/&quot;/g, '"'));
	/* END INIT */
	

	/* MODE SWITCHING */
		$('ul#modes li a').bind('click', function(){
			$(this).attr('href', $(this).attr('href') + '#layout=' + Headway.currentLayout);
		});
	/* END MODE SWITCHING */


	/* VIEW SITE BUTTON */
		$('#menu-link-view-site a').bind('click', function(){
			$(this).attr('href', Headway.homeURL + '/?headway-trigger=layout-redirect&layout=' + Headway.currentLayout);
		});
	/* END MODE SWITCHING */
	
	
	/* SAVE BUTTON */
		$('span#inactive-save-button').click(function() {
			
			if ( Headway.iframe.grid('blockIntersectCheck', $i('.block')[0]) == false )
				showNotification('There are overlapping/touching blocks.  Please separate all blocks.', 4000, true);
			
			event.preventDefault();
			
		});
	
	
		$('span#save-button').click(function() {
			
			save();
		
			return false;
			
		});
	/* END SAVE BUTTON */


	/* TOOLTIPS */
		/* Hide any tooltips in the iframe if the iframe is blurred/unfocused */
		Headway.iframe.bind('blur', hideTooltipsIframeBlur);
	/* END TOOLTIPS */

	
	/* BOXES */
		setupStaticBoxes();	
		
		/* Make clicking box overlay close visible box for lazy people like me. */
		$('div.black-overlay').live('click', function(){
			
			var id = $(this).attr('id').replace('black-overlay-', '');
			
			if ( $('#' + id).length === 0 )
				return;

			if ( $('#ui-tooltip-tour').is(':visible') )
				return;
						
			closeBox(id);
			
		});		
	/* END BOXES */

	
	/* LAYOUT SWITCHER */
		/* Make open do cool stuff */
		$('span#layout-selector-toggle').click(function(){
		
			toggleLayoutSelector();
			
			return false;

		});

	
		/* Search */
		$('input#layout-selector-search').bind('focus', function(){
			
			if ( $(this).val() == 'Type to find a layout...' ) {
				$(this).val('');
			}
			
		});
		
		$('input#layout-selector-search').bind('blur', function(){
			
			if ( $(this).val() == '' ) {
				$(this).val('Type to find a layout...');
			}
			
		});
		
		
		/* Tabs */
		$('div#layout-selector').tabs();
		
		
		/* Handle Scrolling */
		$('div#layout-selector-pages').scrollbarPaper();
		$('div#layout-selector-templates').scrollbarPaper();

		
		/* Make buttons work */
		$('div#layout-selector').delegate('span.edit', 'click', function(event){
									
			if ( typeof allowVECloseSwitch !== 'undefined' && allowVECloseSwitch === false ) {
				
				if ( !confirm('You have unsaved changes, are you sure you want to switch layouts?') ) {
					return false;
				} else {
					disallowSaving();
				}
				
			}
			
			//Add loading indicator
			createCog($('div#iframe-loading-overlay'), true);
			
			$('div#iframe-loading-overlay').fadeIn(500);
			//End loading indicator stuff
			
			//Switch layouts
			switchToLayout($(this).parents('span.layout'));

			event.preventDefault();
			
		});
		
		$('div#layout-selector').delegate('span.revert', 'click', function(event){
						
			if ( !confirm('Are you sure you wish to reset this layout?  All blocks and content will be removed from this layout.\n\nPlease note: Any block that is mirroring a block on this layout will also lose its settings.') ) {
				return false;
			}
			
			var revertedLayout = $(this).parents('span.layout');
			var revertedLayoutID = revertedLayout.attr('data-layout-id');
			var revertedLayoutName = revertedLayout.find('strong').text();
			
			/* Add loading indicators */
			createCog($('div#iframe-loading-overlay'), true);
			
			$('div#iframe-loading-overlay').fadeIn(500);
			
			changeTitle('Visual Editor: Reverting ' + revertedLayoutName);
			startTitleActivityIndicator();
			
			/* Remove customized status from current layout */
			revertedLayout.parent().removeClass('layout-item-customized');
			
			/* Find the layout that's customized above this one */
			var parentCustomizedLayout = $(revertedLayout.parents('.layout-item-customized:not(.layout-selected)')[0]);
			var parentCustomizedLayoutID = parentCustomizedLayout.find('> span.layout').attr('data-layout-id');
			
			var topLevelCustomized = $($('div#layout-selector-pages > ul > li.layout-item-customized')[0]);
			var topLevelCustomizedID = topLevelCustomized.find('> span.layout').attr('data-layout-id');
						
			var selectedLayout = parentCustomizedLayoutID ? parentCustomizedLayout : topLevelCustomized;
			var selectedLayoutID = parentCustomizedLayoutID ? parentCustomizedLayoutID : topLevelCustomizedID;
			
			/* If the user gets on a revert frenzy and reverts all pages, then it should fall back to the blog index or front page (if active) */
			if ( typeof selectedLayoutID == 'undefined' || !selectedLayoutID ) {
				
				selectedLayoutID = Headway.frontPage == 'posts' ? 'index' : 'front_page';
				selectedLayout = $('div#layout-selector-pages > ul > li > span[data-layout-id="' + selectedLayoutID + '"]').parent();
				
			}
						
			/* Switch to the next higher-up layout */
			switchToLayout(selectedLayout, true, false);
			
			/* Delete everything from the reverted layout */
			$.post(Headway.ajaxURL, {
				security: Headway.security,
				action: 'headway_visual_editor',
				method: 'revert_layout',
				layout_to_revert: revertedLayoutID
			}, function(response) {
				
				if ( response === 'success' ) {
					showNotification('<em>' + revertedLayoutName + '</em> successfully reverted!');
				} else {
					showNotification('Error: Could not revert layout.', 6000, true);
				}
				
			});
			
			layoutSelectorRevertCheck();

			return false;
			
		});
		
		$('div#layout-selector').delegate('span#add-template', 'click', function(event) {

			var templateName = $('#template-name-input').val();

			//Do the AJAX request for the new template
			$.post(Headway.ajaxURL, {
				security: Headway.security,
				action: 'headway_visual_editor',
				method: 'add_template',
				layout: Headway.currentLayout,
				template_name: templateName
			}, function(response) {
				
				if ( typeof response === 'undefined' || !response ) {
					showNotification('Error: Could not add template.', 6000, true);
					
					return false;
				}
					
				//Need to add the new template BEFORE the add button
				var newTemplateNode = $('<li class="layout-item">\
					<span data-layout-id="template-' + response.id + '" class="layout layout-template">\
						<strong class="template-name">' + response.name + '</strong>\
						\
						<span class="delete-template" title="Delete Template">Delete</span>\
						\
						<span class="status status-currently-editing">Currently Editing</span>\
						\
						<span class="assign-template layout-selector-button">Use Template</span>\
						<span class="edit layout-selector-button">Edit</span>\
					</span>\
				</li>');	
				
				newTemplateNode.appendTo('div#layout-selector-templates ul');
				
				//Hide the no templates warning if it's visible
				$('li#no-templates(:visible)', 'div#layout-selector').hide();
				
				//We're all good!
				showNotification('Template added!');

				//Clear template name input value 
				$('#template-name-input').val('');
				
			}, 'json');

			return false;
			
		});
		
		$('div#layout-selector').delegate('span.delete-template', 'click', function(event){

			var templateLi = $($(this).parents('li')[0]);
			var templateSpan = $(this).parent();
			var template = templateSpan.attr('data-layout-id');
			var templateID = template.replace('template-', '');
			var templateName = templateSpan.find('strong').text();
			
			if ( !confirm('Are you sure you wish to delete this template?') )
				return false;
			
			//Do the AJAX request for the new template
			$.post(Headway.ajaxURL, {
				security: Headway.security,
				action: 'headway_visual_editor',
				method: 'delete_template',
				template_to_delete: templateID
			}, function(response) {
				
				if ( typeof response === 'undefined' || response == 'failure' || response != 'success' ) {
					showNotification('Error: Could not delete template.', 6000, true);
					
					return false;
				}
				
				//Delete the template from DOM	
				templateLi.remove();
				
				//Show the no templates message if there are no more templates
				if ( $('span.layout-template', 'div#layout-selector').length === 0 ) {
					$('li#no-templates(:visible)', 'div#layout-selector').show();
				} 
				
				//We're all good!
				showNotification('Template <em>' + templateName + '</em> successfully deleted!');

				//If the template that was removed was the current one, then send the user back to the blog index or front page
				if ( template === Headway.currentLayout ) {
					
					var defaultLayout = Headway.frontPage == 'posts' ? 'index' : 'front_page';

					switchToLayout($('div#layout-selector span.layout[data-layout-id="' + defaultLayout + '"]'), true, false);
					
				}
				
			});

			return false;
			
		});
		
		$('div#layout-selector').delegate('span.assign-template', 'click', function(event){

			var templateNode = $($(this).parents('li')[0]);
			var template = $(this).parent().attr('data-layout-id').replace('template-', '');

			//If the current layout being edited is a template trigger an error.
			if ( Headway.currentLayout.indexOf('template-') === 0 ) {
				alert('You cannot assign a template to another template.');
				
				return false;
			}
						
			//Do the AJAX request to assign the template
			$.post(Headway.ajaxURL, {
				security: Headway.security,
				action: 'headway_visual_editor',
				method: 'assign_template',
				template: template,
				layout: Headway.currentLayout
			}, function(response) {
				
				if ( typeof response === 'undefined' || response == 'failure' ) {
					showNotification('Error: Could not assign template.', 6000, true);
					
					return false;
				}
				
				$('li.layout-selected', 'div#layout-selector').removeClass('layout-item-customized');
				$('li.layout-selected', 'div#layout-selector').addClass('layout-item-template-used');
				
				$('li.layout-selected span.status-template', 'div#layout-selector').text(response);
				
				//Reload iframe
				
					//Add loading indicator
					createCog($('div#iframe-loading-overlay'), true);

					$('div#iframe-loading-overlay').fadeIn(500);
					//End loading indicator stuff

					//Change title to loading
					changeTitle('Visual Editor: Assigning Template');
					startTitleActivityIndicator();
					
					Headway.currentLayoutTemplate = 'template-' + template;
					
					//Reload iframe and new layout
					headwayIframeLoadNotification = 'Template assigned successfully!';
					
					loadIframe(Headway.instance.iframeCallback);

				//End reload iframe
				
			});
			
			layoutSelectorRevertCheck();

			return false;
			
		});
		
		$('div#layout-selector').delegate('span.remove-template', 'click', function(event){

			var layoutNode = $($(this).parents('li')[0]);
			var layoutID = $(this).parent().attr('data-layout-id');
						
			//Do the AJAX request to assign the template
			$.post(Headway.ajaxURL, {
				security: Headway.security,
				action: 'headway_visual_editor',
				method: 'remove_template_from_layout',
				layout: layoutID
			}, function(response) {
				
				if ( typeof response === 'undefined' || response == 'failure' ) {
					showNotification('Error: Could not remove template from layout.', 6000, true);
					
					return false;
				}
				
				layoutNode.removeClass('layout-item-template-used');
				
				if ( response === 'customized' ) {
					layoutNode.addClass('layout-item-customized');
				}
				
				//If the current layout is the one with the template that we're unassigning, we need to reload the iframe.
				if ( layoutID == Headway.currentLayout ) {
					
					//Add loading indicator
					createCog($('div#iframe-loading-overlay'), true);

					$('div#iframe-loading-overlay').fadeIn(500);
					//End loading indicator stuff

					//Change title to loading
					changeTitle('Visual Editor: Removing Template From Layout');
					startTitleActivityIndicator();

					Headway.currentLayoutTemplate = false;

					//Reload iframe and new layout
					headwayIframeLoadNotification = 'Template removed from layout successfully!';
					
					loadIframe(Headway.instance.iframeCallback);

					return true;
					
				}
				
				//We're all good!
				return true;
				
			});

			return false;
			
		});
		
		/* Handle Collapsing Stuff */
		$('div#layout-selector').delegate('span', 'click', function(event){
			
			if ( $(this).hasClass('layout-open') ) {
				
				$(this).removeClass('layout-open');
				$(this).siblings('ul').hide();
				
			} else {
				
				$(this).addClass('layout-open');
				$(this).siblings('ul').show();
				
			}
			
		});
	
		/* Hide revert button if there is only one customized layout. */
		layoutSelectorRevertCheck();
	/* END PAGE SWITCHER */

	
	/* PANEL */
		$('ul#modes li').live('click', function(){
			$(this).siblings('li').removeClass('current-mode');
			$(this).addClass('current-mode');
		});
		
		$('div#panel').tabs({
			tabTemplate: "<li><a href='#{href}'>#{label}</a></li>",
			add: function(event, ui, content) {
				
				$(ui.panel).append(content);
																				
			},
			select: function(event, ui) {
								
				var tabID = $(ui.tab).attr('href').replace('#', '').replace('-tab', '');

				$i('.block-selected').removeClass('block-selected block-hover');

				if ( tabID.indexOf('block-') === 0 )
					$i('#' + tabID).addClass('block-selected block-hover');
												
			}
		});
		
		$('ul#panel-top li a').bind('click', showPanel);
		
		$('div.sub-tab').tabs();
				
		/* PANEL RESIZING */
			var panelMinHeight = 120;
			var panelMaxHeight = function() { return $(window).height() - 275; };
		
			var resizePanel = function(panelHeight, resizingWindow) {
								
				if ( typeof panelHeight == 'undefined' || panelHeight == false )
					var panelHeight = $('div#panel').height();
				
				if ( panelHeight > panelMaxHeight() )
					panelHeight = (panelMaxHeight() > panelMinHeight) ? panelMaxHeight() : panelMinHeight;
								
				if ( panelHeight < panelMinHeight )
					panelHeight = panelMinHeight;
									
				if ( typeof resizingWindow != 'undefined' && resizingWindow && panelHeight < panelMaxHeight() )
					return;

				$('div#panel').css('height', panelHeight);

				var iframeBottomPadding = $('div#panel').hasClass('panel-hidden') ? $('ul#panel-top').outerHeight() : $('div#panel').outerHeight();
				var layoutSelectorBottomPadding = $('div#panel').hasClass('panel-hidden') ? $('ul#panel-top').outerHeight()  + $('div#layout-selector-tabs').height() : $('div#panel').outerHeight() + $('div#layout-selector-tabs').height();

				$('iframe.content').css({'paddingBottom': iframeBottomPadding});
				$('div#layout-selector-offset').css({paddingBottom: layoutSelectorBottomPadding});

				if ( $('div#panel').hasClass('panel-hidden') )
					$('div#panel').css({'bottom': -$('div#panel').height()});
				
				$.cookie('panel-height', panelHeight);
								
			}
		
			/* Resize the panel according to the cookie right on VE load */
			if ( $.cookie('panel-height') )
				resizePanel($.cookie('panel-height'));
		
			/* Make the resizing handle actually work */
			$('div#panel').resizable({
				maxHeight: panelMaxHeight(),
				minHeight: 120,
				handles: 'n',
				resize: function(event, ui) {
																
					$(this).css({
						width: '100%',
						position: 'fixed',
						bottom: 0,
						top: ''
					});	

					/* Adjust Padding */
						$('iframe.content').css({
							'paddingBottom': $('div#panel').outerHeight()
						});

						$('div#layout-selector-offset').css({
							'paddingBottom': $('div#panel').outerHeight() + $('div#layout-selector-tabs').height()
						});

					/* Refresh iframe overlay size so it continues to cover iframe */
					showIframeOverlay();		
			
				},
				start: function() {

					showIframeOverlay();

				},
				stop: function() {
				
					$.cookie('panel-height', $(this).height());
				
					hideIframeOverlay();
				
				},
			});
			
			/* The max height option on the resizable must be updated if the window is resized. */
			$(window).bind('resize', function(event) {
				
				/* For some reason jQuery UI resizable triggers window resize so only fire if window is truly the target. */
				if ( event.target != window )
					return;
							
				$('div#panel').resizable('option', {maxHeight: panelMaxHeight()});
				
				resizePanel(false, true);
				
			});
		
			$('div#panel > .ui-resizable-handle.ui-resizable-n')
				.attr('id', 'panel-top-handle')
				.html('<span></span><span></span><span></span>');
		/* END PANEL RESIZING */

		/* PANEL TOGGLE */
			$('ul#panel-top').bind('dblclick', function(event) {

				if ( event.target.id != 'panel-top' )
					return false;

				togglePanel();

			});

			$('ul#panel-top li#minimize span').bind('click', function(event) {

				togglePanel();

				return false;

			});

			/* Check for cookie */
			if ( $.cookie('hide-panel') === 'true' ) {

				hidePanel(true);

			}
		/* END PANEL TOGGLE */
		
		/* PANEL SCROLLING */
			addPanelScrolling();
		/* END PANEL SCROLLING */
		
		setLoadingBar(40, 'Setting Up Panel');
	/* END PANEL */


	/* TOOLS */
		$('#tools-undo').bind('click', undo);
		$('#tools-redo').bind('click', redo);

		$('#tools-grid-wizard').bind('click', function(){

			hidePanel();

			openBox('grid-wizard');

		});

		$('#tools-tour').bind('click', startTour);

		$('#tools-live-css').bind('click', function() {

			openBox('live-css');

			//If Live CSS hasn't been set up then initiate CodeMirror or Tabby
			if ( typeof liveCSSInit == 'undefined' || liveCSSInit == false ) {

				//Set up CodeMirror
				if ( Headway.disableCodeMirror != true ) {						
					liveCSSEditor = CodeMirror.fromTextArea($('textarea#live-css')[0], {
						lineWrapping: true,
						tabMode: 'shift',
						mode: 'css',
						lineNumbers: true,
						onCursorActivity: function() {
							liveCSSEditor.setLineClass(hlLine, null);
							hlLine = liveCSSEditor.setLineClass(liveCSSEditor.getCursor().line, "activeline");
						},
						onChange: function(instance) {

							var value = instance.getValue();

							updatePanelInputHidden({input: $('textarea#live-css'), value: value});
							$i('style#live-css-holder').html(value);

							allowSaving();

						},
						undoDepth: 80
					});

					liveCSSEditor.setValue($('textarea#live-css').val());
					liveCSSEditor.focus();

					var hlLine = liveCSSEditor.setLineClass(0, "activeline");

				//Set up Tabby and the text area if CodeMirror is disabled
				} else {

					$('textarea#live-css').tabby();

					$('textarea#live-css').bind('keyup', function(){

						updatePanelInputHidden({input: $(this), value: $(this).val()});

						$i('style#live-css-holder').html($(this).val());

						allowSaving();

					});

				}

				liveCSSInit = true;

			}

		});

		$('#tools-clear-cache').bind('click', function(){

			/* Set up parameters */
			var parameters = {
				security: Headway.security,
				action: 'headway_visual_editor',
				method: 'clear_cache'
			};

			/* Do the stuff */
			$.post(Headway.ajaxURL, parameters, function(response){

				if ( response === 'success' ) {

					showNotification('The cache was successfully cleared!');

				} else {

					showNotification('Error: Could not clear cache.', 6000, true);

				}

			});

		});
	/* END TOOLS */

	
	/* INPUTS */		
		/* Run the function */
		delegatePanelInputs();
		bindPanelInputs();
		
		/* Not an input */
		setLoadingBar(45, 'Setting Up Inputs');
	/* END INPUTS */


	/* START TOUR */
		if ( Headway.ranTour[Headway.mode] == false && Headway.ranTour.legacy == false ) {
			startTour();
		}
	/* END START TOUR */


	setLoadingBar(65, 'Waiting for iframe');
	
});
})(jQuery);

;(function($) {
delegatePanelInputs = function() {

	var context = 'div#panel';

	/* Selects */	
	$(context).delegate('div.input-select select', 'change', function() {
		
		updatePanelInputHidden({input: $(this), value: $(this).val()});

		var input = $(this);
		var val = $(this).val();
		
		handleInputToggle(input, val);

		allowSaving();
								
	});


	/* Text */
	$(context).delegate('div.input-text input', 'keyup blur', function() {
		
		updatePanelInputHidden({input: $(this), value: $(this).val()});
				
	});
	
	
	/* Textarea */
		$(context).delegate('div.input-textarea textarea', 'keyup blur', function() {
			
			updatePanelInputHidden({input: $(this), value: $(this).val()});
						
		});
		
		$(context).delegate('div.input-textarea span.textarea-open', 'click', function() {
			
			var textareaContainer = $(this).siblings('.textarea-container');
			var textarea = textareaContainer.find('textarea');
			
			var inputContainerOffset = $(this).parents('.input').offset();
			
			textareaContainer.css({
				top: inputContainerOffset.top - textareaContainer.outerHeight(true),
				left: inputContainerOffset.left
			});
			
			/* Keep the sub tabs content container from scrolling */
			$('div.sub-tabs-content-container').css('overflow-y', 'hidden');

			if ( textareaContainer.data('visible') !== true ) {
			
				/* Show the textarea */
				textareaContainer.fadeIn(150);
				textareaContainer.data('visible', true);
			
				/* Put the cursor in the textarea */
				textarea.trigger('focus');
			
				/* Bind the document close */
				$(document).bind('mousedown', {textareaContainer: textareaContainer}, textareaClose);
				Headway.iframe.contents().bind('mousedown', {textareaContainer: textareaContainer}, textareaClose);
			
				$(window).bind('resize', {textareaContainer: textareaContainer}, textareaClose);
			
			} else {
				
				/* Hide the textarea */
				textareaContainer.fadeOut(150);
				textareaContainer.data('visible', false);
				
				/* Allow sub tabs content container to scroll again */
				$('div.sub-tabs-content-container').css('overflow-y', 'auto');

				/* Remove the events */
				$(document).unbind('mousedown', textareaClose);
				Headway.iframe.contents().unbind('mousedown', textareaClose);
				
				$(window).unbind('resize', textareaClose);
				
			}
			
		});
		
		textareaClose = function(event) {
							
			/* Do not trigger this if they're clicking the same button that they used to open the textarea */
			if ( $(event.target).parents('div.input-textarea div.input-right').length === 1 )
				return;
			
			var textareaContainer = event.data.textareaContainer;
			
			/* Hide the textarea */
			textareaContainer.fadeOut(150);
			textareaContainer.data('visible', false);
			
			/* Allow sub tabs content container to scroll again */
			$('div.sub-tabs-content-container').css('overflow-y', 'auto');
			
			/* Remove the events */
			$(document).unbind('mousedown', textareaClose);
			Headway.iframe.contents().unbind('mousedown', textareaClose);
			
			$(window).unbind('resize', textareaClose);
			
		}
	

	/* WYSIWYG */
		inputWYSIWYGChange = function(obj, event) {

			updatePanelInputHidden({input: obj.$el, value: obj.getCode()});
			
		}

		inputWYSIWYGTextareaChange = function() {

			updatePanelInputHidden({input: $(this), value: $(this).val()});
			
		}

		$(context).delegate('div.input-wysiwyg span.wysiwyg-open', 'click', function() {
			
			var wysiwygContainer = $(this).siblings('.wysiwyg-container');
			
			var inputContainerOffset = $(this).parents('.input').offset();
			
			wysiwygContainer.css({
				top: inputContainerOffset.top - wysiwygContainer.outerHeight(true),
				left: inputContainerOffset.left
			});
			
			/* Keep the sub tabs content container from scrolling */
			$('div.sub-tabs-content-container').css('overflow-y', 'hidden');

			if ( wysiwygContainer.data('visible') !== true ) {

				/* Show the WYSWIWYG */
				wysiwygContainer.fadeIn(150);
				wysiwygContainer.css('marginLeft', '');
				wysiwygContainer.data('visible', true);

				/* Make sure WYSIWYG doesn't bleed off screen */
					var possibleBleedingDifference = $(document).width() - (wysiwygContainer.offset().left + wysiwygContainer.width());

					if ( possibleBleedingDifference < 0 ) {
						wysiwygContainer.css('marginLeft', possibleBleedingDifference - 20);
					}

				/* Function for setting up redactor */
					var setupRedactor = function() {

						wysiwygContainer.find('textarea').redactor({
							path: Headway.headwayURL + '/library/resources/redactor/',
							buttons: ['html', '|', 'formatting', '|', 'bold', 'italic', 'deleted', '|',
								'unorderedlist', 'orderedlist', 'outdent', 'indent', '|',
								'table', 'link', '|',
								'fontcolor', 'backcolor', '|', 
								'alignleft', 'aligncenter', 'alignright', 'justify', '|',
								'horizontalrule'],
							allowedTags: ["code", "span", "div", "label", "a", "br", "p", "b", "i", "del", "strike", "u",
"img", "video", "audio", "iframe", "object", "embed", "param", "blockquote",
"mark", "cite", "small", "ul", "ol", "li", "hr", "dl", "dt", "dd", "sup", "sub",
"big", "pre", "code", "figure", "figcaption", "strong", "em", "table", "tr", "td",
"th", "tbody", "thead", "tfoot", "h1", "h2", "h3", "h4", "h5", "h6", "frame", "frameset", "script"],
							keyupCallback: inputWYSIWYGChange,
							execCommandCallback: inputWYSIWYGChange,
							convertDivs: false
						});

						wysiwygContainer.find('textarea')
							.bind('keyup', inputWYSIWYGTextareaChange)
							.setFocus();

						wysiwygContainer.data('setupRedactor', true);

					}

				/* Load redactor if it hasn't been before */
					if ( $('body').data('loadedRedactor') !== true ) {

						var style = $('<link>')
							.attr({
								rel: 'stylesheet',
								href: Headway.headwayURL + '/library/resources/redactor/css/redactor.css', 
								type: 'text/css',
								media: 'screen'
							})
							.appendTo($('head'));

						var script = jQuery.ajax({
							dataType: 'script',
							cache: true,
							url: Headway.headwayURL + '/library/resources/redactor/redactor.min.js',
							complete: setupRedactor
						});

						$('body').data('loadedRedactor', true);

				/* Otherwise just set up redactor if redactor has been loaded, but this input hasn't been setup */
					} else if ( $('body').data('loadedRedactor') === true && wysiwygContainer.data('setupRedactor') !== true ) {

						setupRedactor();

				/* Redactor has been loaded and set up, just focus it */
					} else {

						/* Focus the input */
						wysiwygContainer.find('textarea').setFocus();

					}

				/* Bind the document close */
					$(document).bind('mousedown', {wysiwygContainer: wysiwygContainer}, wysiwygClose);
					Headway.iframe.contents().bind('mousedown', {wysiwygContainer: wysiwygContainer}, wysiwygClose);
					
					$(window).bind('resize', {wysiwygContainer: wysiwygContainer}, wysiwygClose);

			} else {
				
				/* Hide the WYSIWYG */
				wysiwygContainer.fadeOut(150);
				wysiwygContainer.data('visible', false);
				
				/* Allow sub tabs content container to scroll again */
				$('div.sub-tabs-content-container').css('overflow-y', 'auto');

				/* Remove the events */
				$(document).unbind('mousedown', wysiwygClose);
				Headway.iframe.contents().unbind('mousedown', wysiwygClose);
				
				$(window).unbind('resize', wysiwygClose);
				
			}


		});


		wysiwygClose = function(event) {
							
			/* Do not trigger this if they're clicking the same button that they used to open the textarea */
			if ( 
				$(event.target).parents('div.input-wysiwyg div.input-right').length === 1 
				|| $(event.target).parents('.redactor_dropdown').length === 1
				|| $(event.target).parents('#redactor_modal').length === 1 
			)
				return;
			
			var wysiwygContainer = event.data.wysiwygContainer;
			
			/* Hide the WYSIWYG */
			wysiwygContainer.fadeOut(150);
			wysiwygContainer.data('visible', false);
			
			/* Allow sub tabs content container to scroll again */
			$('div.sub-tabs-content-container').css('overflow-y', 'auto');
			
			/* Remove the events */
			$(document).unbind('mousedown', wysiwygClose);
			Headway.iframe.contents().unbind('mousedown', wysiwygClose);
			
			$(window).unbind('resize', wysiwygClose);
			
		}

	
	/* Integer */
	$(context).delegate('div.input-integer input', 'focus', function() {
		
		if ( typeof originalValues !== 'undefined' ) {
			delete originalValues;
		}
		
		originalValues = new Object;		
		originalValues[$(this).attr('name')] = $(this).val();
		
	});
	
	$(context).delegate('div.input-integer input', 'keyup blur', function(event) {
		
		value = $(this).val();
		
		if ( event.type == 'keyup' && value == '-' )
			return;
		
		/* Validate the value and make sure it's a number */
		if ( isNaN(value) ) {

			/* Take the nasties out to make sure it's a number */
			value = value.replace(/[^0-9]*/ig, '');

			/* If the value is an empty string, then revert back to the original value */
			if ( value === '' ) {

				var value = originalValues[$(this).attr('name')];

			}
			
			/* Set the value of the input to the sanitized value */
			$(this).val(value);

		}

		/* Remove leading zeroes */
		if ( value.length > 1 && value[0] == 0 ) {

			value = value.replace(/^[0]+/g, '');
			
			/* Set the value of the input to the sanitized value */
			$(this).val(value);

		}
		
		updatePanelInputHidden({input: $(this), value: value});
				
	});
	
	
	/* Checkboxes */
	$(context).delegate('div.input-checkbox', 'click', function() {
		
		var input = $(this).find('input');
		var label = $(this).find('label');
		var button = $(this).find('span, label');
		
		if ( label.hasClass('checkbox-checked') === true ) {

			button.removeClass('checkbox-checked');
			
			input.val(false);
			
			updatePanelInputHidden({input: input, value: false});

		} else {

			button.addClass('checkbox-checked');
			
			input.val(true);
			
			updatePanelInputHidden({input: input, value: true});

		}

		var val = $(this).find('input').attr('value').toString();

		handleInputToggle($(this).find('input'), val);

		allowSaving();
		
	});


	/* Multi-select */
	$(context).delegate('div.input-multi-select select', 'click', function() {

		updatePanelInputHidden({input: $(this), value: $(this).val()});
							
	});
	
	$(context).delegate('div.input-multi-select span.multi-select-open', 'click', function() {
		
		var multiSelectContainer = $(this).siblings('.multi-select-container');
		var multiSelect = multiSelectContainer.find('select');
		
		var inputContainerOffset = $(this).parents('.input').offset();
		
		multiSelectContainer.css({
			top: inputContainerOffset.top - multiSelectContainer.outerHeight(true),
			left: inputContainerOffset.left
		});
		
		/* Keep the sub tabs content container from scrolling */
		$('div.sub-tabs-content-container').css('overflow-y', 'hidden');
		
		if ( multiSelectContainer.data('visible') !== true ) {
		
			/* Show the multi-select */
			multiSelectContainer.fadeIn(150);
			multiSelectContainer.data('visible', true);
		
			/* Bind the document close */
			$(document).bind('mousedown', {multiSelectContainer: multiSelectContainer}, multiSelectClose);
			Headway.iframe.contents().bind('mousedown', {multiSelectContainer: multiSelectContainer}, multiSelectClose);
			
			$(window).bind('resize', {multiSelectContainer: multiSelectContainer}, multiSelectClose);
		
		} else {
			
			/* Hide the multi-select */
			multiSelectContainer.fadeOut(150);
			multiSelectContainer.data('visible', false);
			
			/* Allow sub tabs content container to scroll again */
			$('div.sub-tabs-content-container').css('overflow-y', 'auto');

			/* Remove the events */
			$(document).unbind('mousedown', multiSelectClose);
			Headway.iframe.contents().unbind('mousedown', multiSelectClose);
			
			$(window).unbind('resize', multiSelectClose);
			
		}
		
	});
	
	multiSelectClose = function(event) {
				
		/* Do not trigger this if they're clicking the same button that they used to open the multi-select */
		if ( $(event.target).parents('div.input-multi-select div.input-right').length === 1 )
			return;
		
		var multiSelectContainer = event.data.multiSelectContainer;
		
		/* Hide the multi-select */
		multiSelectContainer.fadeOut(150);
		multiSelectContainer.data('visible', false);
		
		/* Allow sub tabs content container to scroll again */
		$('div.sub-tabs-content-container').css('overflow-y', 'auto');
		
		/* Remove the events */
		$(document).unbind('mousedown', multiSelectClose);
		Headway.iframe.contents().unbind('mousedown', multiSelectClose);
		
		$(window).unbind('resize', multiSelectClose);
		
	}
	

	/* Image Uploaders */
	$(context).delegate('div.input-image span.button', 'click', function() {
		
		var self = this;
		
		openImageUploader(function(url, filename) {
						
			$(self).siblings('input').val(url);
			$(self).siblings('span.src').show().text(filename);

			$(self).siblings('span.delete-image').show();

			updatePanelInputHidden({input: $(self).siblings('input'), value: url, action: 'add'});	
			
		});

	});
	
	$(context).delegate('div.input-image span.delete-image', 'click', function() {

		if ( !confirm('Are you sure you wish to remove this image?') ) {
			return false;
		}

		$(this).siblings('.src').hide();
		$(this).hide();

		$(this).siblings('input').val('');

		updatePanelInputHidden({input: $(this).siblings('input'), value: '', action: 'delete'});

	});


	/* Repeaters */
		updateRepeaterValues = function(repeater) {

			var values = {};

			repeater.find('div.repeater-group:visible').each(function(index) {

				var groupValues = {};

				$(this).find('select, input, textarea').each(function() {
					groupValues[$(this).attr('name')] = $(this).val();
				});

				values[index] = groupValues;

			});

			return updatePanelInputHidden({input: repeater.find('input.repeater-group-input'), value: values});	

		}

		$(context).delegate('div.repeater .add-group', 'click', function() {
			
			var repeater = $(this).parents('div.repeater');
			var group = $(this).parents('div.repeater-group');
			var groupTemplate = repeater.find('.repeater-group-template');

			/* If the limit is met then don't add a new group */
				if ( repeater.hasClass('limit-met') )
					return;

			/* Clone repeater template */
				var newGroup = groupTemplate.clone().hide().removeClass('repeater-group-template');
				newGroup.insertAfter(group).fadeIn(300);

			/* Remove group single class since there's no longer one group */
				repeater.find('.repeater-group-single').removeClass('repeater-group-single');

			/* Add limit-met class if necessary */
				var repeaterLimit = repeater.data('repeater-limit');

				if ( !isNaN(repeaterLimit) && repeaterLimit >= 1 && repeater.find('div.repeater-group:not(.repeater-group-template):visible').length == repeaterLimit )
					repeater.addClass('limit-met');

			updateRepeaterValues(repeater);
			
		});

		$(context).delegate('div.repeater .remove-group', 'click', function() {

			if ( !confirm('Are you sure?') )
				return;
			
			var repeater = $(this).parents('div.repeater');
			var group = $(this).parents('div.repeater-group');
			
			/* Fade out that way history can revert it.  The updatePanelHidden will be based off of if the group is :visible or not */
				group.fadeOut(300, function() {

					/* if there's only one group left, then add the repeater group single class */
						if ( repeater.find('div.repeater-group:visible').length === 1 )
							repeater.find('div.repeater-group:visible').addClass('repeater-group-single');

					/* Remove limit-met class if necessary */
						var repeaterLimit = repeater.data('repeater-limit');

						if ( !isNaN(repeaterLimit) && repeaterLimit >= 1 && repeater.find('div.repeater-group:not(.repeater-group-template):visible').length < repeaterLimit )
							repeater.removeClass('limit-met');

					updateRepeaterValues(repeater);

				});
			
		});


	/* Color Inputs */
	$(context).delegate('div.input-colorpicker div.colorpicker-box', 'click', function() {

		/* Keep the sub tabs content container from scrolling */
		$('div.sub-tabs-content-container').css('overflow-y', 'hidden');	

		/* Set up variables */
		var input = $(this).parent().siblings('input');
		var inputVal = input.val();

		if ( inputVal == 'transparent' )
			inputVal = '00FFFFFF';

		var colorpickerHandleVal = function(color, inst) {

			var colorValue = '#' + color.hex;

			/* If alpha ISN'T 100% then use RGBa */
			if ( color.a != 100 )
				var colorValue = color.rgba;

			input.val(colorValue);
			updatePanelInputHidden({input: input, value: colorValue});

			/* Call developer-defined callback */
				var callback = eval(input.attr('callback'));

				if ( typeof callback == 'function' ) {

					callback({
						input: input,
						value: color.rgba,
						colorObj: color
					});

				}
			/* End Callback */
		
		}

		$(this).colorpicker({
			realtime: true,
			alpha: true,
			alphaHex: true,
			allowNull: false,
			swatches: (typeof Headway.colorpickerSwatches == 'object' && Headway.colorpickerSwatches.length) ? Headway.colorpickerSwatches : true,
			color: inputVal,
			beforeShow: function(input, inst) {

				/* Add iframe overlay */
				showIframeOverlay();

			},
			onClose: function(color, inst) {

				colorpickerHandleVal(color, inst);

				/* Hide iframe overlay */
				hideIframeOverlay();

				/* Allow sub tabs content container to scroll again */
				$('div.sub-tabs-content-container').css('overflow-y', 'auto');

			},
			onSelect: function(color, inst) {

				colorpickerHandleVal(color, inst);

			},
			onAddSwatch: function(color, swatches) {

				updatePanelInputHidden({
					group: 'general',
					id: 'colorpicker-swatches',
					value: swatches
				});

			},
			onDeleteSwatch: function(color, swatches) {

				updatePanelInputHidden({
					group: 'general',
					id: 'colorpicker-swatches',
					value: swatches
				});

			}
		});

		$.colorpicker._showColorpicker($(this));

		setupTooltips();
						
	});


	/* Buttons */
		$(context).delegate('div.input-button span.button', 'click', function() {
			
			var callback = eval($(this).attr('callback'));

			if ( typeof callback == 'function' )
					callback({input: $(this)});
			
		});


	/* Import Files */
		$(context).delegate('div.input-import-file span.button', 'click', function() {
			
			$(this).siblings('input[type="file"]').trigger('click');
			
		});

		$(context).delegate('div.input-import-file input[type="file"]', 'change', function(event) {
			
			if ( event.target.files[0].name.split('.').slice(-1)[0] != 'json' ) {

				$(this).val(null);
				return alert('Invalid skin.  Please be sure that the skin is a valid JSON formatted file.');

			}

			$(this).siblings('span.src').show().text($(this).val().split(/(\\|\/)/g).pop());
			$(this).siblings('span.delete-file').show();

			var callback = eval($(this).attr('callback'));

			if ( typeof callback == 'function' )
					callback({input: $(this)});
			
		});

		$(context).delegate('div.input-import-file .delete-file', 'click', function() {
			
			if ( !confirm('Are you sure?') )
				return;

			$(this).fadeOut(100);
			$(this).siblings('span.src').fadeOut(100);

			var fileInput = $(this).siblings('input[type="file"]');
			var callback = eval(fileInput.attr('callback'));

			fileInput.val(null);

			if ( typeof callback == 'function' )
					callback({input: fileInput});
			
		});



}

bindPanelInputs = function(context) {

	if ( typeof context === 'undefined' )
		var context = 'div#panel';

	/* Sliders */
		$('div.input-slider div.input-slider-bar', context).each(function() {
			
			var self = this;

			var value = parseInt($(this).parents('.input-slider').find('input.input-slider-bar-hidden').val());

			var min = parseInt($(this).attr('slider_min'));
			var max = parseInt($(this).attr('slider_max'));
			var interval = parseInt($(this).attr('slider_interval'));

			$(this).slider({
				range: 'min',
				value: value,
				min: min,
				max: max,
				step: interval,
				slide: function( event, ui ) {
					
					/* Update visible output */
					$(this).siblings('div.input-slider-bar-text').find('span.slider-value').text(ui.value);

					/* Update hidden input */
					$(this).parents('.input-slider').find('input.input-slider-bar-hidden').val(ui.value);

					/* Handle hidden input */
					updatePanelInputHidden({input: $(this).parents('.input-slider').find('input.input-slider-bar-hidden'), value: ui.value});
					
				}
			});
			
		});

	/* Repeaters */
		/* Repeater Sortables */
			$('.repeater-sortable', context).sortable({
				items: '.repeater-group', 
				containment: 'parent',
				forcePlaceholderSize: true,
				handle: '.sortable-handle',
				stop: function() {
					updateRepeaterValues($(this));
				}
			});

		/* Repeater Limits */
			$('.repeater', context).each(function() {

				var repeaterLimit = $(this).data('repeater-limit');

				if ( !isNaN(repeaterLimit) && repeaterLimit >= 1 && $(this).find('div.repeater-group:not(.repeater-group-template):visible').length >= repeaterLimit )
					$(this).addClass('limit-met');

			});

}

handleInputToggle = function(input, val) {

	var toggle = $.parseJSON(input.attr('toggle'));

	if ( !input || !input.length )
		return;

	if ( typeof val == 'undefined' )
		var val = input.val().toString();

	if ( val && toggle && typeof toggle == 'object' ) {

		if ( toggle.hasOwnProperty(val) ) {

			/* Show */
				if ( typeof toggle[val].show == 'string' ) {

					var toShow = input.parents('.panel').find(toggle[val].show);
					
					toShow.show();
					handleInputToggle(toShow.find('*[toggle]'));

				} else if ( typeof toggle[val].show == 'object' ) {

					$.each(toggle[val].show, function(index, value) {

						var toShow = input.parents('.panel').find(value).show();
						
						toShow.show();
						handleInputToggle(toShow.find('*[toggle]'));
						
					});

				}

			/* Hide */
				if ( typeof toggle[val].hide == 'string' ) {

					var toHide = input.parents('.panel').find(toggle[val].hide);
					
					handleInputToggleHideAll(toHide.find('*[toggle]'));
					toHide.hide();

				} else if ( typeof toggle[val].hide == 'object' ) {

					$.each(toggle[val].hide, function(index, value) {

						var toHide = input.parents('.panel').find(value);
						
						handleInputToggleHideAll(toHide.find('*[toggle]'));
						toHide.hide();

					});

				}

		} /* end if toggle.hasOwnProperty(val) */ 

	} /* end if ( val && toggle && typeof toggle == 'object' ) */

}


handleInputToggleHideAll = function(input) {

	var toggle = $.parseJSON(input.attr('toggle'));

	if ( !input || !input.length )
		return;

	$.each(toggle, function(value, hideOrShow) {

		if ( typeof hideOrShow.hide == 'undefined' || !hideOrShow.hide || !hideOrShow.hide.length )
			return;

		if ( typeof hideOrShow.hide == 'string' ) {

			var toHide = input.parents('.panel').find(hideOrShow.hide);
			toHide.hide();

		} else if ( typeof hideOrShow.hide == 'object' ) {

			$.each(hideOrShow.hide, function(index, value) {

				var toHide = input.parents('.panel').find(value);
				toHide.hide();

			});

		}

	});

}
})(jQuery);

;(function($) {
startTour = function() {

	if ( Headway.mode == 'grid' ) {

		var steps = tourStepsGrid;

		hidePanel();
		showLayoutSelector();
		openBox('grid-wizard');

	} else if ( Headway.mode == 'design' ) {

		var steps = tourStepsDesign;

		showPanel();

		$('div#panel').tabs('select', 'editor-tab');

	} else {

		return;

	}

	/* Remove existing tour tooltip if it exists */
	$(document.body).qtip('destroy');
	
	$('<div class="black-overlay"></div>')
		.hide()
		.attr('id', 'black-overlay-tour')
		.css('zIndex', 15)
		.appendTo('body')
		.fadeIn(500);

	$(document.body).qtip({
		id: 'tour', // Give it an ID of ui-tooltip-tour so we an identify it easily
		content: {
			text: steps[0].content + '<div id="tour-next-container"><span id="tour-next" class="tour-button">Continue Tour<span class="arrow">&rsaquo;</span></span></div>',
			title: {
				text: steps[0].title, // ...and title
				button: 'Skip Tour'
			}
		},
		style: {
			classes: 'ui-tooltip-tour',
			tip: {
				width: 18,
				height: 10,
				mimic: 'center'
			}
		},
		position: {
			my: 'center',
			at: 'center',
			target: $(window), // Also use first steps position target...
			viewport: $(window), // ...and make sure it stays on-screen if possible
			adjust: {
				y: 5,
				method: 'none none'
			}
		},
		show: {
			event: false, // Only show when show() is called manually
			ready: true, // Also show on page load,
			effect: function() {
				$(this).fadeIn(500);
			}
		},
		hide: false, // Don't hide unless we call hide()
		events: {
			render: function(event, api) {
				
				// Grab tooltip element
				var tooltip = api.elements.tooltip;

				// Track the current step in the API
				api.step = 0;

				// Bind custom custom events we can fire to step forward/back
				tooltip.bind('next', function(event) {

					// Increase/decrease step depending on the event fired
					api.step += 1;
					api.step = Math.min(steps.length - 1, Math.max(0, api.step));

					// Set new step properties
					currentTourStep = steps[api.step];
					
					$('div#black-overlay-tour').fadeOut(100, function() {
						$(this).remove();
					});
													
					//Run the callback if it exists
					if ( typeof currentTourStep.callback === 'function' ) {
						currentTourStep.callback.apply(api);
					}

					if ( currentTourStep.target == 'window' ) {
						currentTourStep.target = $(window);
					} else if ( typeof currentTourStep.target == 'string' )
						currentTourStep.target = $(currentTourStep.target);

					api.set('position.target', currentTourStep.target);

					if ( typeof currentTourStep.maxWidth !== 'undefined' && window.innerWidth < 1440 ) {
						$('#ui-tooltip-tour').css('maxWidth', currentTourStep.maxWidth);
					} else {
						$('#ui-tooltip-tour').css('maxWidth', 350);
					}

					/* Set up button */
						var buttonText = 'Next';

						if ( typeof currentTourStep.buttonText == 'string' )
							var buttonText = currentTourStep.buttonText;

						if ( typeof currentTourStep.end !== 'undefined' && currentTourStep.end === true ) {
							var button = '<div id="tour-next-container"><span id="tour-finish" class="tour-button">Close Tour<span class="arrow">&rsaquo;</span></div>';
						} else if ( typeof currentTourStep.nextHandler === 'undefined' || currentTourStep.nextHandler.showButton ) {
							var button = '<div id="tour-next-container"><span id="tour-next" class="tour-button">' + buttonText + '<span class="arrow">&rsaquo;</span></div>';
						} else {
							var button = '<div id="tour-next-container"><p>' + currentTourStep.nextHandler.message + '</p></div>';
						}

					/* Next Handler Callback... Be able to use something other than the button */
						if ( typeof currentTourStep.nextHandler !== 'undefined' && $(currentTourStep.nextHandler.clickElement) ) {

							var nextHandlerCallback = function(event) {

								$('#ui-tooltip-tour').triggerHandler('next');
								event.preventDefault();

								$(this).unbind('click', nextHandlerCallback);

							}

							$(currentTourStep.nextHandler.clickElement).bind('click', nextHandlerCallback);

						}

					/* Set the Content */
					api.set('content.text', currentTourStep.content + button);
					api.set('content.title.text', currentTourStep.title);
					
					if ( typeof currentTourStep.end === 'undefined' ) {

						/* Position */
							if ( typeof currentTourStep.position !== 'undefined' ) {
																
								api.set('position.my', currentTourStep.position.my);
								api.set('position.at', currentTourStep.position.at);
								
														/* Offset/Adjust */
								if ( typeof currentTourStep.position.adjustX !== 'undefined' ) {
									api.set('position.adjust.x', currentTourStep.position.adjustX);
								} else {
									api.set('position.adjust.x', 0);
								}

								if ( typeof currentTourStep.position.adjustY !== 'undefined' ) {
									api.set('position.adjust.y', currentTourStep.position.adjustY);
								} else {
									api.set('position.adjust.y', 0);
								}
								
							} else {
								
								api.set('position.my', 'top center');
								api.set('position.at', 'bottom center');
								
							}

						/* Tip Size */
							if ( typeof currentTourStep.position.vertical !== 'undefined' && currentTourStep.position.vertical === true ) {

								api.set('style.tip.width', 10);
								api.set('style.tip.height', 18);

							} else {

								api.set('style.tip.width', 18);
								api.set('style.tip.height', 10);

							}

							if ( typeof currentTourStep.tip !== 'undefined' )
								api.set('style.tip.corner', currentTourStep.tip);

					} else {

						api.set('position.my', 'center');
						api.set('position.at', 'center');

					}

																								
				});
			},

			// Destroy the tooltip after it hides as its no longer needed
			hide: function(event, api) {
				
				$('div#tour-overlay').remove();
				
				$('div#black-overlay-tour').fadeOut(100, function() {
					$(this).remove();
				});

				$('#ui-tooltip-tour').fadeOut(100, function(){
					$(this).qtip('destroy');
				});

				//Tell the DB that the tour has been ran
				if ( Headway.ranTour[Headway.mode] == false && Headway.ranTour.legacy != true ) {

					$.post(Headway.ajaxURL, {
						security: Headway.security,
						action: 'headway_visual_editor',
						method: 'ran_tour',
						mode: Headway.mode
					});

					Headway.ranTour[Headway.mode] = true;

				}

			}
		}
	});
	
}

/* Steps */
	/* Grid */
		tourStepsGrid = [
			{ 
				beginning: true, 
				title: 'Welcome to the Headway Visual Editor!', 
				content: '<p>If this is your first time in the Headway Visual Editor, we recommend following this tour so you can get the most out of Headway.</p><p>Or, if you\'re experienced or want to dive in right away, just click the close button in the top right at any time.</p>' 
			},
			
			{ 
				target: $('li#mode-grid'), 
				title: 'Mode Selector', 
				content: '<p>The Headway Visual Editor is split up into 2 modes.</p><p><ul><li><strong>Grid</strong> &ndash; Build your layouts</li><li><strong>Design</strong> &ndash; Add colors, customize fonts, and more!</li></ul></p>',
				position: {
					my: 'top left',
					at: 'bottom center'
				}
			},
			
			{ 
				target: $('div#layout-selector'), 
				title: 'Layout Selector', 
				content: '<p style="font-size:12px;">Since you may not want every page to be the same, you may use the Layout Selector to select which page, post, or archive to edit.</p><p style="font-size:12px;">The Layout Selector is based off of inheritance.  For example, you can customize the "Page" layout and all pages will follow that layout.  Plus, you can customize a specific page and it\'ll be different than all other pages.</p><p style="font-size:12px;">The layout selector will allow you to be as precise or broad as you wish.  It\'s completely up to you!</p>', 
				position: {
					my: 'left center',
					at: 'right center',
					vertical: true
				}
			},

			{ 
				target: $('div#box-grid-wizard'), 
				title: 'The Headway Grid', 
				content: '<p>Now we\'re ready to get started with the Headway Grid.  In other words, the good stuff.</p><p>To build your first layout, please select a preset to the right to pre-populate the grid.  Or, you may select "Use Empty Grid" to start with a completely blank grid.</p><p>Once you have a preset selected, click "Finish".</p>', 
				position: {
					my: 'right center',
					at: 'left center',
					vertical: true
				},
				nextHandler: {
					showButton: false,
					clickElement: '#grid-wizard-button-preset-use-preset, span.grid-wizard-use-empty-grid',
					message: 'Please click <strong>"Finish"</strong> or <strong>"Use Empty Grid"</strong> to continue.'
				}
			},

			{ 
				target: $('div#layout-selector'), 
				title: 'Adding Blocks', 
				content: '<p>To add a block, simply place your mouse into the grid then click at where you\'d like the top-left point of the block to be.</p><p>Drag your mouse and the block will appear!  Once the block appears, you may choose the block type.</p><p>Hint: Don\'t worry about being precise, you may always move or resize the block.</p>', 
				position: {
					my: 'right center',
					at: 'right center',
					vertical: true,
					adjustX: (((jQuery('iframe.content').width() - 960) - 15) / 2),
				},
				maxWidth: 280
			},

			{ 
				target: $('div#layout-selector'), 
				title: 'Modifying Blocks', 
				content: '\
					<p style="font-size:12px;">After you\'ve added the desired blocks to your layout, you may move, resize, delete, or change the options of the block at any time.</p>\
					<ul style="font-size:12px;">\
						<li><strong>Moving Blocks</strong> &ndash; Click and drag the block.  If you wish to move multiple blocks simultaneously, double-click on a block to enter <em>Mass Block Selection Mode</em>.</li>\
						<li><strong>Resizing Blocks</strong> &ndash; Grab the border or corner of the block and drag your mouse.</li>\
						<li><strong>Block Options (i.g. header image)</strong> &ndash; Hover over the block then click the block options icon in the top-right.</li>\
						<li><strong>Deleting Blocks</strong> &ndash; Move your mouse over the desired block, then click the <em>X</em> icon in the top-right.</li>\
					</ul>', 
				position: {
					my: 'right center',
					at: 'right center',
					vertical: true,
					adjustX: (((jQuery('iframe.content').width() - 960) - 15) / 2),
				},
				maxWidth: 280
			},

			{ 
				target: $('#inactive-save-button'), 
				title: 'Saving', 
				content: '<p>Now that you hopefully have a few changes to be saved, you can save using this spiffy Save button.</p><p>For those of you who like hotkeys, use <strong>Ctrl + S</strong> to save.</p>', 
				position: {
					my: 'top right',
					at: 'bottom center'
				}
			},

			{ 
				target: $('li#mode-design'), 
				title: 'Design Mode', 
				content: '<p>Thanks for sticking with us!</p><p>Now that you have an understanding of the Grid Mode, we hope you stick with us and head on over to the Design Mode.</p>',
				position: {
					my: 'top left',
					at: 'bottom center'
				},
				buttonText: 'Continue to Design Mode',
				buttonCallback: function() {

					$.post(Headway.ajaxURL, {
						security: Headway.security,
						action: 'headway_visual_editor',
						method: 'ran_tour',
						mode: 'grid',
						complete: function() {

							Headway.ranTour['grid'] = true;

							/* Advance to Design Editor */
							$('li#mode-design a').trigger('click');
							window.location = $('li#mode-design a').attr('href');

						}
					});

				}
			}
		];

	/* Design */
		tourStepsDesign = [
			{ 
				beginning: true, 
				title: 'Welcome to the Headway Design Editor!', 
				content: "<p>In the Design Editor, you can style your elements however you'd like.  Whether it's fonts, colors, padding, borders, shadows, or rounded corners, you can use the design editor.</p><p>Stick around to learn more!</p>"
			},

			{ 
				target: '#design-editor-main-elements', 
				title: 'Element Selector', 
				content: '<p>The element selector allows you choose which element to edit.</p>', 
				position: {
					my: 'left center',
					at: 'right center',
					vertical: true
				},
				callback: function() {
					$('li#element-block-header span').trigger('click');
				}
			},

			{
				target: '.design-editor-info', 
				title: 'Element Info', 
				content: "\
					<p>The element info shows the following:</p>\
					<ul>\
						<li><strong>Selected Element's Name</strong></li>\
						<li><strong>Inherit Location</strong> &ndash; If applicable, the inherit location is where the element will pull its default properties from.</li>\
						<li><strong>CSS Selector</strong> &ndash; You may use this when using the Live CSS editor.</li>\
					</ul>\
				", 
				position: {
					my: 'bottom center',
					at: 'top left',
					adjustX: 150
				}
			},

			{
				target: '.design-editor-info-right', 
				title: 'Advanced Selectors', 
				content: "\
					<p>Not only can you select a broad group of elements, you can even make more concise customizations through the following methods.</p>\
					<ul>\
						<li><strong>Layout-Specific</strong> &ndash; Customize an element for only one layout.</li>\
						<li><strong>Instances</strong> &ndash; Example: Edit a specific Widget Area block rather than all Widget Area blocks</li>\
						<li><strong>States</strong> &ndash; Example: Edit the hover, clicked, and selected states of hyperlinks and button.</li>\
					</ul>\
				", 
				position: {
					my: 'right center',
					at: 'left center',
					vertical: true,
					adjustX: -10,
					adjustY: -1
				}
			},

			{
				target: '#toggle-inspector', 
				title: 'Inspector', 
				content: "\
					<p>Instead of using the <em>Element Selector</em>, let the Inspector do the work for you.</p>\
					<p><strong>Try it out!</strong> Point and right-click on the element you wish to edit and it will become selected!</p>\
				", 
				position: {
					my: 'top right',
					at: 'bottom center',
					adjustX: 10,
					adjustY: 5
				}
			},

			{ 
				target: $('li#options span'), 
				title: 'Panel Options', 
				content: '<p>In here you can open the Live CSS editor (only accessible in Design mode), re-run this tour, and more!</p>', 
				position: {
					my: 'left center',
					at: 'right center',
					vertical: true,
					adjustX: 60,
					adjustY: -40
				},
				callback: function() {
					$('li#options span').trigger('click');
				},
			},

			{ 
				target: 'window', 
				title: 'Have fun building with Headway!', 
				content: '<p>We hope you find Headway to the most powerful and easy-to-use WordPress framework around.</p><p>If you have any questions, please don\'t hesitate to visit the <a href="http://support.headwaythemes.com/?utm_source=visualeditor&utm_medium=headway&utm_campaign=tour" target="_blank">support forums</a>.</p>',
				end: true
			}
		];

/* Tour Button Bindings */
	$('span#tour-next').live('click', function(event) {

		/* Callback that fires upon button click... Used for advancing to Design Editor */
		if ( typeof currentTourStep == 'object' && typeof currentTourStep.buttonCallback == 'function' )
			currentTourStep.buttonCallback.call();

		$('#ui-tooltip-tour').triggerHandler('next');
		event.preventDefault();

	});

	$('span#tour-finish').live('click', function(event) {

		$('#ui-tooltip-tour').qtip('hide');

	});
})(jQuery);

;(function($) {

/*!
jQuery quicksearch 
*/
(function($,window,document,undefined){$.fn.quicksearch=function(target,opt){var timeout,cache,rowcache,jq_results,val="",e=this,options=$.extend({delay:100,selector:null,stripeRows:null,loader:null,noResults:"",matchedResultsCount:0,bind:"keyup",onBefore:function(){return},onAfter:function(){return},show:function(){this.style.display=""},hide:function(){this.style.display="none"},prepareQuery:function(val){return val.toLowerCase().split(" ")},testQuery:function(query,txt,_row){for(var i=0;i<query.length;i+=
1)if(txt.indexOf(query[i])===-1)return false;return true}},opt);this.go=function(){var i=0,numMatchedRows=0,noresults=true,query=options.prepareQuery(val),val_empty=val.replace(" ","").length===0;for(var i=0,len=rowcache.length;i<len;i++)if(val_empty||options.testQuery(query,cache[i],rowcache[i])){options.show.apply(rowcache[i]);noresults=false;numMatchedRows++}else options.hide.apply(rowcache[i]);if(noresults)this.results(false);else{this.results(true);this.stripe()}this.matchedResultsCount=numMatchedRows;
this.loader(false);options.onAfter();return this};this.search=function(submittedVal){val=submittedVal;e.trigger()};this.currentMatchedResults=function(){return this.matchedResultsCount};this.stripe=function(){if(typeof options.stripeRows==="object"&&options.stripeRows!==null){var joined=options.stripeRows.join(" ");var stripeRows_length=options.stripeRows.length;jq_results.not(":hidden").each(function(i){$(this).removeClass(joined).addClass(options.stripeRows[i%stripeRows_length])})}return this};
this.strip_html=function(input){var output=input.replace(new RegExp("<[^<]+>","g"),"");output=$.trim(output.toLowerCase());return output};this.results=function(bool){if(typeof options.noResults==="string"&&options.noResults!=="")if(bool)$(options.noResults).hide();else $(options.noResults).show();return this};this.loader=function(bool){if(typeof options.loader==="string"&&options.loader!=="")bool?$(options.loader).show():$(options.loader).hide();return this};this.cache=function(){jq_results=$(target);
if(typeof options.noResults==="string"&&options.noResults!=="")jq_results=jq_results.not(options.noResults);var t=typeof options.selector==="string"?jq_results.find(options.selector):$(target).not(options.noResults);cache=t.map(function(){return e.strip_html(this.innerHTML)});rowcache=jq_results.map(function(){return this});val=val||this.val()||"";return true};this.trigger=function(){this.loader(true);options.onBefore();window.clearTimeout(timeout);timeout=window.setTimeout(function(){e.go()},
options.delay);return this};this.cache();this.results(true);this.stripe();this.loader(false);return this.each(function(){$(this).bind(options.bind,function(){val=$(this).val();e.trigger()})})}})(jQuery,this,document);


/* Fonts input object */
	function fontBrowserObj(browser) {

		this.browser = browser;

		this.propertyInput = browser.parents('.property-font-family-select');

		this.hiddenInput = this.propertyInput.find('input.property-hidden-input');

		this.setup = function() {

			var self = this;

			this.browser.find('.tab-content').each(function() {

				var fontsList = $(this).find('.fonts-list ul');

				fontsList.bind('scroll', $.debounce(100, function() {
					self.scrollWebFontLoader(fontsList);
				}));

				self.initQuickSearch($(this));
				self.initPreview($(this));
				self.initSorting($(this));

				fontsList.delegate('.use-font', 'click', function() {

					var li = $(this).parents('li').first();

					/* Determine value to save to DB */
					var webfontProvider = $(this).parents('.tab-content').data('font-webfont-provider');
					var fontID = li.data('value');

					var fontName = $(this).siblings('.font-family').text();
					var fontFamily = li.css('font-family');
					var fontVariants = li.data('variants');

					var variantsStr = '';

					if ( fontVariants && fontVariants.indexOf('regular') === -1 )
						variantsStr = '|' + fontVariants.join(',');

					var value = webfontProvider != false ? webfontProvider + '|' + fontID + variantsStr : fontID;

					/* Change readout */
					var fontNameReadout = self.propertyInput.find('.font-name');

					fontNameReadout.css('font-family', fontFamily);
					fontNameReadout.text(fontName);

					/* Change selected font */
					self.browser.find('.selected-font').removeClass('selected-font');
					li.addClass('selected-font');

					/* Close font panel */
					fontBrowserClose({
						data: {
							fontBrowser: self.browser
						}
					});

					/* Save value */
					designEditorUpdateInputHidden({hiddenInput: self.hiddenInput, value: value, stack: fontFamily});

				});

			});

			this.browser.tabs({
				selected: 0,
				select: function(event, ui) {

					if ( $(ui.panel).data('fonts-loaded') )
						return;

					self.retrieveRemoteFonts($(ui.panel), 'popularity', true, true);

				}
			});

			this.changeToSelectedFontProviderTab();

		}

		this.retrieveRemoteFonts = function(context, sortBy, resetTransient, firstLoad) {

			if ( !context.data('font-load-with-ajax') )
				return;

			var self = this;

			createCog(context.find('.fonts-loading'), true);

			context.find('.fonts-list ul').fadeOut(300);
			context.find('.fonts-loading').fadeIn(300);

			/* Lock search until it has finished loading */
			context.find('.fonts-filter').attr('disabled', 'disabled');

			$.post(Headway.ajaxURL, {
				security: Headway.security,
				action: 'headway_visual_editor',
				method: 'fonts_list',
				sortby: sortBy,
				provider: context.data('font-webfont-provider')
			}, function(response) {

				context.find('.fonts-loading').fadeOut(300);
				context.find('ul').hide().html(response).fadeIn(300, function() {

					/* Force fonts to load before user scrolls */
					self.scrollWebFontLoader(context.find('ul'));

				});

				/* Refresh quick search cache */
				context.find('.fonts-filter').val('');
				context.data('quicksearch').cache();

				/* Allow quick search again */
				context.find('.fonts-filter').removeAttr('disabled');

				/* Scroll to selected item if first time loading tab otherwise scroll to top */
				if ( typeof firstLoad != 'undefined' && firstLoad && self.hiddenInput.val().match(/\|/g) ) {

					var selectedFont = context.find('li[data-value="' + self.hiddenInput.val().split('|')[1] + '"]');

					if ( selectedFont.length ) {

						selectedFont.addClass('selected-font');
						context.find('.fonts-list ul').scrollTop(selectedFont.position().top);

					}

				} else {

					context.find('.fonts-list ul').scrollTop(0);

				}

				context.data('fonts-loaded', true);

			});

		}

		this.scrollWebFontLoader = function(fontList) {

			var fontListContainer = $(fontList.parents('.tab-content').get(0));
			var fontListProvider = fontListContainer.data('font-webfont-provider');

			if ( fontList.parents('.font-provider-tab-content.ui-tabs-hide').length || !fontListProvider )
				return;

			var fontsToLoad = [];

			/* Find Visible Fonts that need to be loaded */
				var viewportTop = fontList.scrollTop();
				var viewportBottom = viewportTop + fontList.outerHeight();

				fontList.find('li').each(function() {

					var fontTop = $(this).position().top + fontList.scrollTop();
					var fontBottom = fontTop + $(this).outerHeight();

					if ( !$(this).is(':visible') || $(this).data('loadedFont') )
						return;

					if ( !(fontTop <= viewportBottom) )
						return;

					if ( !(fontBottom >= viewportTop) )
						return;

					if ( fontBottom > viewportBottom )
						return false;

					var variants = '';

					if ( $(this).data('variants').indexOf('regular') === -1 )
						variants = ':' + $(this).data('variants').join(',');

					fontsToLoad.push($(this).data('value') + variants);

				});

			/* Load fonts via WebFont API */
				if ( fontsToLoad.length ) {

					var args = {};

					args[fontListProvider] = {
						families: fontsToLoad
					};

					args['fontloading'] = function(fontFamily, fontDescription) {

						var fontElement = fontList.find('li[data-value="' + fontFamily + '"]');
						fontElement.prepend('<span class="font-loading">3</span>');

					}

					args['fontactive'] = function(fontFamily, fontDescription) {

						var fontElement = fontList.find('li[data-value="' + fontFamily + '"]');

						fontElement
							.css('font-family', fontFamily)
							.data('loadedFont', true);
						
						fontElement.find('span.font-family, span.font-preview-text')
							.show()
							.css('opacity', 1);

						/* hide loading indicator */
						fontElement.find('span.font-loading').remove();

					}

					args['fontinactive'] = function(fontFamily, fontDescription) {

						var fontElement = fontList.find('li[data-value="' + fontFamily + '"]');
						fontElement.remove();

					}

					return WebFont.load(args);

				}

		}

		this.initQuickSearch = function(context) {

			var id = context.attr('id');

			var quicksearch = context.find('.fonts-filter').quicksearch('#' + id + ' .fonts-list ul li', {
				delay: 750,
				noResults: '#' + id + ' .fonts-list .fonts-noresults',
				loader: '#' + id + ' .fonts-list .fonts-loading',
				bind: 'keyup',
				onBefore: function() {
					animateCog(context.find('.fonts-list .fonts-loading'));
					context.find('.fonts-list ul').fadeOut(100);
				},
				onAfter: function() {
					/* Force fonts to be loaded */
					context.find('.fonts-list ul')
						.trigger('scroll')
						.fadeIn(100);
				},
				prepareQuery: function (val) {
				    return new RegExp(val, "i");
				},
			    testQuery: function (query, txt, _row) {
			        return query.test(jQuery.trim(txt.replace('the quick brown fox jumps over the lazy dog.', '')));
			    }
			});

			/* Attach quicksearch object to element that way the cache can be refreshed */
			context.data('quicksearch', quicksearch);

		}

		this.initPreview = function(context) {

			var self = this;

			/* fonts preview overlay */
			previewHtml = $('\
				<div class="font-preview-overlay" style="display:none;">\
					<span class="close-preview"></span>\
					<header>\
						<h4></h4>\
						<p><i class="icon-edit">&nbsp;</i><strong>click anywhere</strong> in preview text to edit and add your own</p>\
					</header>\
					<div class="editable allow-backspace-key" contenteditable="true"></div>\
					<footer>\
						<div class="tools">\
							<span title="Reset Preview Text" class="reset-preview"></span>\
							<span title="Decrease Preview Size" class="size-down"></span>\
							<span title="Increase Preview Size" class="size-up"></span>\
							<span title="Use This Font" class="use-font"></span>\
						</div>\
					</footer>\
				</div>\
			');

			context.find('.fonts-list').after(previewHtml);

		    /* preview functions */
		    this.defaultPreviewText = 'The quick brown fox jumps over the lazy dog.';
		    this.defaultPreviewSize = '24px';

		    this.previewResize = function(preview, resizeBy) {

		    	var editable = preview.find('.editable');

				var originalSize = editable.css('font-size');
				var newSize = parseFloat(originalSize, 10) * resizeBy;

				editable.css('font-size', newSize);

				localStorage.fontPreviewSize = editable.css('font-size');

			}
		    
		    this.previewLoadFromStorage = function(preview) {

		    	var editable = preview.find('.editable');

		    	/* set preview text */
		    	if ( !localStorage.getItem('fontPreviewText') ) {
				 	editable.html(self.defaultPreviewText);
				} else {
					editable.html(localStorage.fontPreviewText);
				}

				/* set font size */
				if ( localStorage.getItem('fontPreviewSize') ) {
					editable.css('font-size', localStorage.fontPreviewSize);
				}

		    }

		    this.previewSaveText = function() {

		    	localStorage.fontPreviewText = $(this).text();

			}

			this.previewReset = function(preview) {

				preview.find('.editable').html(self.defaultPreviewText);
				preview.find('.editable').css('font-size', self.defaultPreviewSize);

				localStorage.fontPreviewText = self.defaultPreviewText;
				localStorage.fontPreviewSize = self.defaultPreviewSize;

			}

			/* Bind the preview buttons to the preview can be opened */
			context.find('.fonts-list ul').delegate('li .preview-font', 'click', function() {

				var fontID = $(this).parents('li').data('value');
		    	var fontFamily = $(this).parents('li').css('font-family');
		    	var fontPreview = $(this).parents('.fonts-list').siblings('.font-preview-overlay');

		    	fontPreview.data('font-value', fontID);
		    	fontPreview.data('font-name', $(this).parent().find('.font-family').text());
		    	fontPreview.data('font-variants', $(this).parents('li').data('variants'));

		    	fontPreview.fadeIn(750);
		    	fontPreview.css('font-family', fontFamily);
		       	fontPreview.find('h4').html($(this).parent().find('.font-family').text() + ' <span>(Preview)</span>');

		        self.previewLoadFromStorage(fontPreview);

		    });

			/* increase */
			context.find('.font-preview-overlay .size-up').on('click', function() {
				self.previewResize($(this).parents('.font-preview-overlay'), 1.1);
			});

			/* decrease */
			context.find('.font-preview-overlay .size-down').on('click', function() {
				self.previewResize($(this).parents('.font-preview-overlay'), 0.9);
			});

			/* reset preview text */
			context.find('.font-preview-overlay .reset-preview').on('click', function() {
		    	self.previewReset($(this).parents('.font-preview-overlay'));
		    });

		    /* close preview */
		    context.find('.font-preview-overlay .close-preview').on('click', function() {
		    	$(this).parents('.font-preview-overlay').fadeOut(750);
		    });

		    /* save changes to local storage */
			context.find('.font-preview-overlay .editable').on('blur', this.previewSaveText);

			/* bind use font button */
			context.find('.font-preview-overlay .use-font').on('click', function() {

				/* Determine value to save to DB */
				var webfontProvider = $(this).parents('.tab-content').data('font-webfont-provider');
				var fontID = $(this).parents('.font-preview-overlay').data('font-value');

				var fontName = $(this).parents('.font-preview-overlay').data('font-name');
				var fontFamily = $(this).parents('.font-preview-overlay').css('font-family');

				var variants = $(this).parents('.font-preview-overlay').data('font-variants');
				var variantsStr = '';

				if ( variants && variants.indexOf('regular') === -1 )
					variantsStr = '|' + variants.join(',');

				var value = webfontProvider != false ? webfontProvider + '|' + fontID + variantsStr : fontID;

				/* Change readout */
				var fontNameReadout = self.propertyInput.find('.font-name');

				fontNameReadout.css('font-family', fontFamily);
				fontNameReadout.text(fontName);

				/* Change selected font */
				self.browser.find('.selected-font').removeClass('selected-font');
				self.browser.find('li[data-value="' + fontID + '"]').addClass('selected-font');

				/* Close font panel */
				fontBrowserClose({
					data: {
						fontBrowser: self.browser
					}
				});

				/* Save value */
				designEditorUpdateInputHidden({hiddenInput: self.hiddenInput, value: value, stack: fontFamily});

			});

		}

		this.initSorting = function(context) {

			var self = this;

			context.find('.fonts-search select').bind('change', function() {

				var sortBy = $(this).val();
				self.retrieveRemoteFonts($(this).parents('.tab-content'), sortBy, true);
		        
			});

		}

		this.changeToSelectedFontProviderTab = function() {

			var value = this.hiddenInput.val();

			/* Traditional font  */
			if ( !value || !value.match(/\|/g) ) {

				var tab = this.browser.find('#traditional-fonts');
				var selectedFont = tab.find('li[data-value="' + value + '"]');

				if ( selectedFont.length ) {

					selectedFont.addClass('selected-font');

					/* For some reason the selectedFont element isn't visible immediately so the position is wrong thus the use of timeout */
					setTimeout(function() {
						tab.find('.fonts-list ul').scrollTop(selectedFont.position().top);
					}, 100);

				}

			/* Web Font */
			} else {

				var fragments = value.split('|');

				this.browser.tabs('select', '#' + fragments[0] + '-fonts');

			}

		}

	}
/* End fonts input object */

/* Opening and closing */
	fontBrowserOpen = function(event) {

		var fontBrowser = $(this).siblings('.font-browser');	
		var inputContainerOffset = $(this).parents('.design-editor-property-font-family').offset();
		
		fontBrowser.css({
			top: inputContainerOffset.top - fontBrowser.outerHeight(true),
			left: inputContainerOffset.left
		});

		/* Check that font browser isn't bleeding over right--if it is, fix it */
		var fontBrowserLeftOffset = parseInt(fontBrowser.css('left').replace('px', ''));
		var fontBrowserRightPos = fontBrowserLeftOffset + fontBrowser.outerWidth(true);

		if ( fontBrowserRightPos > $(window).width() ) {

			var fontBrowserRightOverflow = $(window).width() - fontBrowserRightPos;

			fontBrowser.css({
				left: fontBrowserLeftOffset + fontBrowserRightOverflow - 20
			});

		}
		
		/* Keep the sub tabs content container from scrolling */
		$('div.sub-tabs-content-container').css('overflow-y', 'hidden');
		
		/* Setup browser */
			if ( fontBrowser.data('setup') !== true ) {

				fontBrowser.data('obj', new fontBrowserObj(fontBrowser));
				fontBrowser.data('obj').setup();

				fontBrowser.data('setup', true);

			}

		/* Show browser */
			if ( fontBrowser.data('visible') !== true ) {
			
				/* Show the font browser */
				fontBrowser.fadeIn(150);
				fontBrowser.data('visible', true);
			
				/* Bind the document close */
				$(document).bind('mousedown', {fontBrowser: fontBrowser}, fontBrowserClose);
				Headway.iframe.contents().bind('mousedown', {fontBrowser: fontBrowser}, fontBrowserClose);
				
				$(window).bind('resize', {fontBrowser: fontBrowser}, fontBrowserClose);
			
		/* Hide browser */
			} else {
				
				/* Hide the font browser */
				fontBrowser.fadeOut(150);
				fontBrowser.data('visible', false);
				
				/* Allow sub tabs content container to scroll again */
				$('div.sub-tabs-content-container').css('overflow-y', 'auto');

				/* Remove the events */
				$(document).unbind('mousedown', fontBrowserClose);
				Headway.iframe.contents().unbind('mousedown', fontBrowserClose);
				
				$(window).unbind('resize', fontBrowserClose);
				
			}

	}

	fontBrowserClose = function(event) {
				
		/* Do not trigger this if they're clicking the same button that they used to open the multi-select */
		if ( $(event.target).parents('.design-editor-property-font-family').length === 1 )
			return;
		
		var fontBrowser = event.data.fontBrowser;
		
		/* Hide the font browser */
		fontBrowser.fadeOut(150);
		fontBrowser.data('visible', false);
		
		/* Allow sub tabs content container to scroll again */
		$('div.sub-tabs-content-container').css('overflow-y', 'auto');
		
		/* Remove the events */
		$(document).unbind('mousedown', fontBrowserClose);
		Headway.iframe.contents().unbind('mousedown', fontBrowserClose);
		
		$(window).unbind('resize', fontBrowserClose);
		
	}

	$('div#panel').delegate('.design-editor-property-font-family span.open-font-browser', 'click', fontBrowserOpen);
/* End opening and closing functions */

/* Web Font Quick load for loading just one font */
	webFontQuickLoad = function(font) {

		/* Not a web font */
		if ( !font.match(/\|/g) )
			return;

		var fragments = font.split('|');
		var fontOriginal = font;

		var provider = fragments[0];
		var font = fragments[1];
		var variants = '';

		if ( typeof fragments[2] != 'undefined' && fragments[2] )
			var variants = ':' + fragments[2];

		var args = {
			fontactive: function(fontFamily, fontDescription) {
				jQuery("span.font-name[data-webfont-value='" + fontOriginal + "']").animate({opacity: 1});
			}
		};

		args[provider] = {
			families: [font + variants]
		};

		return WebFont.load(args);

	}
/* End quick load */


})(jQuery);

;(function($) {
/* IFRAME FUNCTIONS */
	$i = function(element) {
		return Headway.iframe.contents().find(element);
	}
	
	
	loadIframe = function(callback, url) {

		if ( typeof url == 'undefined' || !url)
			url = Headway.homeURL;

		var iframeUri = new Uri(url);

		iframeUri
			.addQueryParam('ve-iframe', 'true')
			.addQueryParam('ve-iframe-layout', Headway.currentLayout)
			.addQueryParam('ve-iframe-mode', Headway.mode)
			.addQueryParam('rand', Math.floor(Math.random() * 100000001));

		iframeURL = iframeUri.toString();
				
		//Since the default iframe load function is used for all modes, we can just pack it in with the normal callback				
		var callback_with_default = function() {
			
			setLoadingBar(85, 'iframe nearly complete');
						
			if ( typeof callback === 'function' ) {
				callback();
			}
			
			defaultIframeLoad();
						
		}						
								
		/* Use iframe plugin so it can detect a timeout.  If there's a timeout, refresh the entire page. */
		Headway.iframe.src(iframeURL, callback_with_default, {
			timeout: function(duration) {
														
				iframeTimeout = true;	
				
				stopTitleActivityIndicator();

				changeTitle('Visual Editor: Error!');					
										
				$('div#loading div.loading-message p.tip').html('<strong>ERROR:</strong> There was a problem while loading the visual editor.<br /><br />Your browser will automatically refresh in 4 seconds to attempt loading again.');
				
				$('div#loading div.loading-bar').css('borderColor', '#D8000C');	
				$('div#loading div.loading-bar div.loading-bar-inside').stop(true).css({background: '#D8000C', width: '100%'});	
				$('div#loading div.loading-message p.tip, div#loading div.loading-message p.tip strong').css('color', '#D8000C');
				
				setTimeout(function(){
					window.location.href = unescape(window.location);
				}, 4000);
			
			},
			timeoutDuration: 40000
		});
		
		stopIFrameLoadingIndicator();
	
	}


	/* Default function to be called when iframe finishes loading. */
	defaultIframeLoad = function() {
		
		stopTitleActivityIndicator();
	
		changeTitle('Visual Editor: ' + Headway.currentLayoutName);
		$('div#current-layout strong span').text(Headway.currentLayoutName);
	
		/* Set up tooltips */
		setupTooltips();
		setupTooltips('iframe');
		/* End Tooltips */
		
		/* Handle layout selector cookie */
		if ( $.cookie('hide-layout-selector') === 'true' ) {
			toggleLayoutSelector(true);
		}
	
		setLoadingBar(100, 'Complete', function(){
			
			$('div#loading').animate({opacity: 0}, 400, function(){ 
				$(this).remove(); 
			});	

		});
		

		/* Stylesheets for more accurate live designing */
			/* Main Headway stylesheet, used primarily by design editor */
			stylesheet = new ITStylesheet({document: Headway.iframe.contents()[0], href: Headway.homeURL + '/?headway-trigger=compiler&file=general-design-editor'}, 'find');

			/* Catch-all adhoc stylesheet used for overriding */
			css = new ITStylesheet({document: Headway.iframe.contents()[0]}, 'load');
		/* End stylesheets */


		/* Add the template notice if it's layout mode and a template is active */
		if ( Headway.currentLayoutTemplate ) {
			$i('body').prepend('<div id="template-notice"><h1>To edit this layout, remove the template from this layout.</h1></div>');
		}
		
		/* Clear out hidden inputs */
		clearUnsavedValues();
		
		/* Disallow certain keys so user doesn't accidentally leave the VE */
		disableBadKeys();
		
		/* Bind visual editor key shortcuts */
		bindKeyShortcuts();
		
		/* Deactivate all links and buttons */
		Headway.iframe.contents().find('body').delegate('a, input[type="submit"], button', 'click', function(event) {

			if ( $(this).hasClass('allow-click') )
				return;

			event.preventDefault();
			
			return false;
			
		});
		
		/* Show the load message */
		if ( typeof headwayIframeLoadNotification !== 'undefined' ) {
			showNotification(headwayIframeLoadNotification);
			
			delete headwayIframeLoadNotification;
		}
		
		/* Remove the tabs that are set to close on layout switch */
		removeLayoutSwitchPanels();
		
		/* Show the grid wizard if the current layout isn't customized and not using a tmeplate */
		var layoutNode = $('div#layout-selector span.layout[data-layout-id="' + Headway.currentLayout + '"]');
		var layoutLi = layoutNode.parent();
				
		if ( 
			!(layoutNode.hasClass('layout-template') && $i('.block').length)
			&& !layoutLi.hasClass('layout-item-customized') 
			&& !layoutLi.hasClass('layout-item-template-used') 
			&& Headway.mode == 'grid' 
		) {
		
			hidePanel();
			
			openBox('grid-wizard');
			
		} else {

			closeBox('grid-wizard');
			
		}
		
		/* Clear out and disable iframe loading indicator */
		$('div#iframe-loading-overlay').fadeOut(500).html('');
		
	}
	

	stopIFrameLoadingIndicator = function() {
		
		//http://www.shanison.com/2010/05/10/stop-the-browser-%E2%80%9Cthrobber-of-doom%E2%80%9D-while-loading-comet-forever-iframe/
		if ( /Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent) ) {
			
			var fake_iframe;

			if ( fake_iframe == null ){
				fake_iframe = document.createElement('iframe');
				fake_iframe.style.display = 'none';
			}

			document.body.appendChild(fake_iframe);
			document.body.removeChild(fake_iframe);
			
		}
	
	}
/* END IFRAME FUNCTIONS */


/* TOOLTIPS */
	setupTooltips = function(location) {
		
		if ( typeof location === 'undefined' )
			location = false;
			
		if ( Headway.disableTooltips == 1 ) {
			
			$('div.tooltip-button').hide();
			
			return false;
			
		}
		
		var tooltipOptions = {
			style: {
				classes: 'ui-tooltip-headway'
			},
			show: {
				delay: 10
			},
			position: {
				my: 'bottom left',
				at: 'top center',
				viewport: $(window),
				effect: false
			}
		}
		
		if ( location == 'iframe' ) {
			
			tooltipOptions.position.container = Headway.iframe.contents().find('body'); 
			tooltipOptions.position.viewport = Headway.iframe; 
						
			var tooltipElement = $i;
			
		} else {
			
			var tooltipElement = $;
			
		}
						
		tooltipElement('div.tooltip-button, .tooltip').qtip(tooltipOptions);
		
		tooltipElement('.tooltip-bottom-right').qtip($.extend({}, tooltipOptions, { 
		   position: {
				my: 'bottom right',
				at: 'top center'
		   }
		}));
		
		tooltipElement('.tooltip-top-right').qtip($.extend({}, tooltipOptions, { 
		   position: {
				my: 'top right',
				at: 'bottom center'
		   }
		}));
		
		tooltipElement('.tooltip-top-left').qtip($.extend({}, tooltipOptions, { 
		   position: {
				my: 'top left',
				at: 'bottom center'
		   },
		   show: {
		   		delay: 750
		   }
		}));
		
		tooltipElement('.tooltip-left').qtip($.extend({}, tooltipOptions, { 
		   position: {
				my: 'left center',
				at: 'right center'
		   }
		}));
		
		tooltipElement('.tooltip-right').qtip($.extend({}, tooltipOptions, { 
		   position: {
				my: 'right center',
				at: 'left center'
		   }
		}));
		
		
		var iframeScrollTooltipReposition = function() {
			
			/* Flood Control */
			if ( $i('.qtip:visible').length === 0 || typeof iframeScrollTooltipRepositionFloodTimeout != 'undefined' )
				return;
			
			iframeScrollTooltipRepositionFloodTimeout = setTimeout(function() {
				
				$i('.qtip:visible').qtip('reposition');
				
				delete iframeScrollTooltipRepositionFloodTimeout;
				
			}, 400);
						
		}

		Headway.iframe.contents().unbind('scroll', iframeScrollTooltipReposition);		
		Headway.iframe.contents().bind('scroll', iframeScrollTooltipReposition);
		
	}
	

	repositionTooltips = function() {
		
		$i('.qtip:visible').qtip('reposition');
		
	}


	hideTooltipsIframeBlur = function() {

		$i('.ui-tooltip').each(function() {
			$(this).qtip('api').hide();
		});

	}
/* END TOOLTIPS */


/* LAYOUT FUNCTIONS */
	switchToLayout = function(layoutNode, reloadIframe, showSwitchNotification) {
						
		if ( typeof layoutNode == 'object' && !layoutNode.hasClass('layout') )
			layoutNode = layoutNode.find('> span.layout');
			
		if ( layoutNode.length !== 1 )
			return false;
				
		changeTitle('Visual Editor: Loading');
		startTitleActivityIndicator();
	
		var layout = layoutNode;
		var layoutID = layout.attr('data-layout-id');
		var layoutURL = layout.attr('data-layout-url'); /* URL is used for the sake of better WP_Query integration with block content */
		var layoutName = layout.find('strong').text();
				
		//Flip classes around
		$('.layout-selected', 'div#layout-selector').removeClass('layout-selected');
		layout.parent('li').addClass('layout-selected');
		
		//Set global variables, these will be used in the next function to switch the iframe
		Headway.currentLayout = layoutID;
		Headway.currentLayoutName = layoutName;
		Headway.currentLayoutTemplate = false;
				
		//Check if the layout node has a template assigned to it.  
		var possibleTemplateID = layout.find('.status-template').data('template-id');
						
		if ( typeof possibleTemplateID != 'undefined' && possibleTemplateID != 'none' )
			Headway.currentLayoutTemplate = possibleTemplateID;
		
		//Add the hash of the layout to the URL
		window.location.hash = '#layout=' + Headway.currentLayout;
		
		//Reload iframe and new layout right away
		if ( typeof reloadIframe == 'undefined' || reloadIframe == true ) {
			
			if ( typeof showSwitchNotification == 'undefined' || showSwitchNotification == true )
				headwayIframeLoadNotification = 'Switched to <em>' + Headway.currentLayoutName + '</em>';
			
			loadIframe(Headway.instance.iframeCallback, layoutURL);
			
		}
					
		return true;
		
	}

/* END LAYOUT FUNCTIONS */


/* SHARED INPUT FUNCTIONS */
	openImageUploader = function(callback) {
		
		if ( !boxExists('input-image') ) {
			
			/* iframe load event function */
			var iframeLoad = function(event){

				var iframe = $(event.target);

				var content = iframe.contents();
				var iframe_window = iframe[0].contentWindow; 

				/* CSS changes */
					var stylesheet = new ITStylesheet({document: content[0], href: Headway.homeURL + '/wp-includes/js/imgareaselect/imgareaselect.css'}, 'find');

					stylesheet.update_rule('p.howto', {display:'none'});
					stylesheet.update_rule('tr.post_title', {display:'none'});
					stylesheet.update_rule('tr.image_alt', {display:'none'});
					stylesheet.update_rule('tr.post_excerpt', {display:'none'});
					stylesheet.update_rule('tr.post_content', {display:'none'});
					stylesheet.update_rule('tr.align', {display:'none'});
					stylesheet.update_rule('tr.url button, tr.url p', {display:'none'});
					stylesheet.update_rule('tr.image-size', {display:'none'});
					stylesheet.update_rule('p.ml-submit', {display:'none !important'});

					stylesheet.update_rule('td.savesend input', {opacity:'0'});
					stylesheet.update_rule('input.urlfield', {opacity:'0'});
					stylesheet.update_rule('tr.url th.label span.alignleft', {opacity:'0'});
				/* End CSS changes */
				
				/* Function to bind to the submit button */
					var useImage = function(event, url) {
					
						if ( typeof url == 'undefined' )
							var url = $(this).parents('table').find('button.urlfile').data('link-url');				

						var filename = url.split('/')[url.split('/').length-1];

						callback(url, filename);
						
						closeBox('input-image', true);		

						event.preventDefault();
					
					}
				/* End function to bind to the submit button */

				/* Set up URL tab */
					if ( content.find('ul#sidemenu li#tab-type_url a.current').length === 1 ) {

						/* Remove all other rows */
							content.find('#src').parents('tr').siblings('tr').remove();

						/* Remove radio buttons */
							content.find('.media-types').hide();
							content.find('div.media-item').css({padding: '10px 10px 5px'});

						/* Add submit button */
							content.find('#src')
								.parents('tbody')
								.append('<tr class="submit"><td></td><td class="savesend-url"><input type="submit" value="Use Image" class="button image-input-fix" id="go_button" name="go_button" style="color: #bbb;" /></td></tr>');

							content.find('tr.submit input#go_button').bind('click', function(event) {
								useImage(event, content.find('#src').val());
							});

					}
				/* End URL tab setup */

				/* Handle all other tabs */
					var imageUploaderInputFix = function(){

						content.find('td.savesend input:not(.input-input-fix)')
							.css('opacity', 1)
							.addClass('image-input-fix')
							.addClass('button-primary')
							.val('Use Image')
							.unbind('click')
							.bind('click', useImage);

						content.find('input.urlfield:not(.image-input-fix)').css('opacity', 1).addClass('image-input-fix').attr('readonly', true);

						content.find('tr.url th.label span.alignleft:not(.image-input-fix)').css('opacity', 1).addClass('image-input-fix').text('Image URL');

					}
				
					/* Call fix function right away before the interval is started */
					imageUploaderInputFix();

					if ( typeof imageUploaderInputFixInterval !== 'undefined' ) {
						iframe_window.clearInterval(imageUploaderInputFixInterval);
					}		

					imageUploaderInputFixInterval = iframe_window.setInterval(imageUploaderInputFix, 1000);
				/* End all other tabs */

			}
			/* End iframe load event function */


			var iframePostID = Headway.currentLayout;

			if ( isNaN(Headway.currentLayout) )
				iframePostID = 0;
			
			var settings = {
				id: 'input-image',
				title: 'Select an image',
				description: 'Upload or select an image',
				src: Headway.adminURL + '/media-upload.php?type=image&amp;TB_iframe=true&amp;post_id=' + iframePostID,
				load: iframeLoad,
				width: 670,
				height: 500,
				center: true,
				draggable: false,
				deleteWhenClosed: true,
				blackOverlay: true
			};

			var box = createBox(settings);

		}

		openBox('input-image');
		
	}
/* END SHARED INPUT FUNCTIONS */


/* ANNOYANCE FIXER FUNCTIONS */
	prohibitVEClose = function () {	
		window.onbeforeunload = function(){
			return 'You have unsaved changes.  Are you sure you wish to leave the Visual Editor?';
		}
	
		allowVECloseSwitch = false;
	}


	allowVEClose = function() {
		window.onbeforeunload = function(){
			return null;
		}
	
		allowVECloseSwitch = true;
	}


	disableBadKeys = function() {
	
		//Disable backspace for normal frame but still keep backspace functionality in inputs.  Also disable enter.
		$(document).bind('keypress', disableBadKeysCallback);
		$(document).bind('keydown', disableBadKeysCallback);
	
		//Disable backspace and enter for iframe
		$i('html').bind('keypress', disableBadKeysCallback);
		$i('html').bind('keydown', disableBadKeysCallback);
		
	}
	
	
	disableBadKeysCallback = function(event) {
		
		//8 = Backspace
		//13 = Enter
	
		var element = $(event.target); 
	
		if ( event.which === 8 && !element.is('input') && !element.is('textarea') && !element.hasClass('allow-backspace-key') ) {
			event.preventDefault();
			
			return false;
		}
	
		if ( event.which == 13 && !element.is('textarea') && !element.hasClass('allow-enter-key') ) {
			event.preventDefault();
			
			return false;
		}
		
	}
/* END ANNOYANCE FIXER FUNCTIONS */


/* KEY SHORTCUTS */
	bindKeyShortcuts = function() {
		
		/* Close task notification */
			$(document).bind('keyup.esc', keyBindingEscCloseTaskNotification);
			$i('html').bind('keyup.esc', keyBindingEscCloseTaskNotification);

		/* Close Tour */
			$(document).bind('keyup.esc', keyBindingEscCloseTour);
			$i('html').bind('keyup.esc', keyBindingEscCloseTour);
								
		/* Bindings with modifier */
			/* Save */
				$(document).bind('keyup.ctrl_s', save);
				$i('html').bind('keyup.ctrl_s', save);

			/* Panel Toggle */
				$(document).bind('keyup.ctrl_p', togglePanel);
				$i('html').bind('keyup.ctrl_p', togglePanel);

			/* Layout Selector Toggle */
				$(document).bind('keyup.ctrl_l', toggleLayoutSelector);
				$i('html').bind('keyup.ctrl_l', toggleLayoutSelector);

			/* Live CSS Toggle */
				$(document).bind('keyup.ctrl_e', function() { if ( !boxOpen('live-css') ) { $('#tools-live-css').trigger('click'); } else { closeBox('live-css'); } });
				$i('html').bind('keyup.ctrl_e', function() { if ( !boxOpen('live-css') ) { $('#tools-live-css').trigger('click'); } else { closeBox('live-css'); } });

			/* Inspector Toggle */
				$(document).bind('keyup.ctrl_i', toggleInspector);
				$i('html').bind('keyup.ctrl_i', toggleInspector);

			/* Undo/Redo */
				// $(document).bind('keyup.ctrl_z', undo);
				// $i('html').bind('keyup.ctrl_z', undo);

				// $(document).bind('keyup.ctrl_y', redo);
				// $i('html').bind('keyup.ctrl_y', redo);
		/* End bindings with modifier */
		
	}

		keyBindingEscCloseTaskNotification = function(event) {

			if ( !$('div#task-notification').length )
				return;
			
			hideTaskNotification($('div#task-notification').data('closeCallback'));
			event.preventDefault();

		}


		keyBindingEscCloseTour = function(event) {

			if ( !$('#ui-tooltip-tour').is(':visible') )
				return;

			$(document.body).qtip('hide');

		}
/* END KEY SHORTCUTS */


/* BLOCK FUNCTIONS */
	getBlock = function(element) {
		//If invalid selector, do not go any further
		if ( $(element).length === 0 ) {
			return $;
		}
		
		//Find the actual block node
		if ( $(element).hasClass('block') ) {
			block = $(element);
		} else if ( $(element).parents('.block').length === 1 ) {
			block = $(element).parents('.block');
		} else {
			block = false;
		}
		
		return block;
	}


	getBlockID = function(element) {
		var block = getBlock(element);
		
		if ( !block ) {
			return false;
		}
		
		//Pull out ID
		return block.data('id');
	}
	
	
	getBlockType = function(element) {
		var block = getBlock(element);
		
		if ( !block ) {
			return false;
		}
		
		var classes = block.attr('class').split(' ');
	    
		for(i = 0; i <= classes.length - 1; i++){
			if(classes[i].indexOf('block-type-') !== -1){
				var blockType = classes[i].replace('block-type-', '');
			}
		}	
		
		return blockType;	
	}
	
	
	getBlockTypeNice = function(type) {
		
		if ( typeof type != 'string' ) {
			return false;
		}
		
		return getBlockTypeObject(type).name;
		
	}
	
	
	getBlockTypeIcon = function(blockType, blockInfo) {
		
		if ( typeof blockInfo == 'undefined' )
			blockInfo = false;
			
		if ( typeof Headway.allBlockTypes[blockType] != 'object' )
			return null;
			
		if ( blockInfo === true )
			return Headway.blockTypeURLs[blockType] + '/icon-white.png';
			
		return Headway.blockTypeURLs[blockType] + '/icon.png';
		
	}
	
	
	getBlockTypeObject = function(blockType) {
		
		var blockTypes = Headway.allBlockTypes;
		
		if ( typeof blockTypes[blockType] === 'undefined' )
			return {'fixed-height': false};
		
		return blockTypes[blockType];
		
	}


	getBlockGridWidth = function(element) {
		
		var block = getBlock(element);
		
		if ( !block ) {
			return false;
		}
			    		
		return block.attr('data-width');
		
	}
	
	
	getBlockGridLeft = function(element) {
		
		var block = getBlock(element);
		
		if ( !block ) {
			return false;
		}
		
		return block.attr('data-grid-left');
		
	}

	
	getBlockDimensions = function(element) {
		
		var block = getBlock(element);
		
		if ( !block ) {
			return false;
		}
		
		return {
			width: getBlockGridWidth(block),
			height: block.attr('data-height')
		}
		
	}
	

		getBlockDimensionsPixels = function(element) {
			
			var block = getBlock(element);
			
			if ( !block ) {
				return false;
			}
			
			return {
				width: block.width(),
				height: block.height()
			}
			
		}

	
	getBlockPosition = function(element) {
		
		var block = getBlock(element);
		
		if ( !block ) {
			return false;
		}
		
		return {
			left: getBlockGridLeft(block),
			top: block.attr('data-grid-top')
		}
		
	}


		getBlockPositionPixels = function(element) {

			var block = getBlock(element);
			
			if ( !block ) {
				return false;
			}
			
			return {
				left: block.position().left,
				top: block.position().top
			}

		}
		
	
	getAvailableBlockID = function(async) {
		
		if ( typeof async == 'undefined' )
			var async = true;
		
		/* Get the ready block ID */
		var readyBlockID = Headway.availableBlockID;
		
		/* Retrieve the block ID that can be used. */
			/* Blacklist IDs in the grid already */
			var blockIDBlacklist = [readyBlockID];
		
			$i('.block').each(function() {
			
				blockIDBlacklist.push(getBlockID($(this)));
			
			});
										
			$.ajax(Headway.ajaxURL, {
				type: 'POST',
				async: async,
				data: {
					security: Headway.security,
					action: 'headway_visual_editor',
					method: 'get_available_block_id',
					block_id_blacklist: blockIDBlacklist
				},
				success: function(response) {

					if ( isNaN(response) )
						return;

					Headway.availableBlockID = response;

				}
			});
				
		/* Return the ID stored before. */
		return readyBlockID;
		
	}
	
	
	getAvailableBlockIDBatch = function(numberOfIDs) {

		/* Add any blocks in the layout to the blacklist since the PHP/AJAX won't know about unsaved blocks */
		var blockIDBlacklist = [];

		$i('.block').each(function() {

			blockIDBlacklist.push(getBlockID(this));

		});

		if ( typeof numberOfIDs == 'undefined' || isNaN(numberOfIDs) )
			numberOfIDs = 10;
		
		/* Do the request */
		var request = $.ajax(Headway.ajaxURL, {
			type: 'POST',
			async: false,
			data: {
				security: Headway.security,
				action: 'headway_visual_editor',
				method: 'get_available_block_id_batch',
				block_id_blacklist: blockIDBlacklist,
				number_of_ids: numberOfIDs
			}
		});
		
		return $.parseJSON(request.responseText.replace(/&quot;/g, '"'));

	}
	
	
	isBlockMirrored = function(element) {
		
		var block = getBlock(element);
		
		return block.hasClass('block-mirrored');
		
	}
	
	
	getBlockMirrorOrigin = function(element) {
		
		var block = getBlock(element);
		
		if ( !isBlockMirrored(block) )
			return false;
			
		//Cycle through classes to find the origin
		var classes = block.attr('class').split(' ');

		for(i = 0; i <= classes.length - 1; i++){
			if(classes[i].indexOf('block-mirroring-') !== -1){
				var origin = classes[i].replace('block-mirroring-', '');
			}
		}
		
		return ( typeof origin == 'string' ) ? origin : false;
		
	}

	
	loadBlockContent = function(args) {

		var settings = {};
		
		var defaults = {
			blockElement: false,
			blockSettings: {},
			blockOrigin: false,
			blockDefault: false,
			callback: function(args){},
			callbackArgs: null
		};
		
		$.extend(settings, defaults, args);
				
		var blockContent = settings.blockElement.find('div.block-content');
		var blockType = getBlockType(settings.blockElement);

		if ( Headway.gridSafeMode == 1 )
			return blockContent.html('<div class="alert alert-red block-safe-mode"><p>Grid Safe mode enabled.  Block content not outputted.</p></div>');
		
		if ( Headway.mode == 'grid' && !getBlockTypeObject(blockType)['show-content-in-grid'] ) {

			if ( typeof settings.callback == 'function' )
				settings.callback(settings.callbackArgs);

			return blockContent.html('<p class="hide-content-in-grid-notice"><strong>Notice:</strong> <em>' + getBlockTypeNice(blockType) + '</em> blocks do not display in the Grid Mode.  Please switch to the Design mode to see the content in this block.</p>');

		}
			
		createCog(blockContent, true, true, Headway.iframe.contents(), 1);
		blockContent.siblings('h3.block-type').hide();

		/* If grid mode then add a layer that makes sure the dragging still works as expected */
		if ( Headway.mode == 'grid' && !settings.blockElement.find('div.block-content-cover').length )
			settings.blockElement.append('<div class="block-content-cover"></div>');

		return $.ajax({
			url: Headway.ajaxURL,
			cache: false,
			type: 'POST',
			dataType: 'text',
			data: {
				security: Headway.security,
				action: 'headway_visual_editor',
				method: 'load_block_content',
				unsaved_block_settings: settings.blockSettings,
				block_origin: settings.blockOrigin,
				block_default: settings.blockDefault,
				layout: Headway.currentLayout,
				mode: Headway.mode
			}
		}).done(function(data) {

			if ( typeof settings.callback == 'function' )
				settings.callback(settings.callbackArgs);

			blockContent.siblings('h3.block-type').show();

			/* Remove script tags from Grid mode */
				if ( Headway.mode == 'grid' ) {

					var data = data.replace(/script/g, 'SCRIPTTOCHECK');
					var content = $(data);
					
					content.find('SCRIPTTOCHECK').remove();

				} else {

					var content = $(data);

				}
			/* End removing script tags from grid mode */

			if ( typeof window.frames['content'].jQuery != 'undefined' && window.frames['content'].jQuery('#block-' + getBlockID(settings.blockElement)).html(content).length ) {

				refreshInspector();
				return window.frames['content'].jQuery('#block-' + getBlockID(settings.blockElement));

			}

			/* Re-initiate inspector to make sure the block elements are still editable */
			blockContent.html(content);
			refreshInspector();

			return blockContent;

		});
		
	}


	addBlockControls = function(showOptions, showDelete) {

		if ( typeof showOptions == 'undefined' )
			var showOptions = false;
		
		if ( typeof showDelete == 'undefined' )
			var showDelete = false;
		
		var blocks = $i('.block');
		
		blocks.each(function() {
			
			var id = getBlockID(this);
			var type = getBlockType(this);	
			var typeNice = getBlockTypeNice(type);
				
			var tooltipID = 'This is the ID for the block.  The ID of the block is displayed in the WordPress admin panel if it is a widget area or navigation block.  Also, this can be used with advanced developer functions.';
			var tooltipType = 'Click to change the block type.';
			var tooltipMirror = 'This block is set to mirror another block.  A mirrored block is always set to clone the origin block.  If the block that this block is mirroring is updated, then so will this one.  You can unmirror the block at any time by opening the options for this block (top right of block) then going to Config.'
			var tooltipOptions = 'Show the options for this block.';
			var tooltipDelete = 'Delete this block.';

			var blockTypeIconURL = getBlockTypeIcon(type, true);
			var blockTypeIconStyle = blockTypeIconURL ? ' style="background-image:url(' + blockTypeIconURL + ');"' : null;

			$(this).append('\
				<div class="block-info">\
					<span class="id tooltip" title="' + tooltipID + '">' + id + '</span>\
					<span class="type type-' + type + ' tooltip" title="' + tooltipType + '"' + blockTypeIconStyle + '>' + typeNice + '</span>\
				</div>');
				
			if ( isBlockMirrored($(this)) ) {
				
				var mirrorOrigin = getBlockMirrorOrigin($(this));
				
				$(this).find('.block-info').append('<span class="mirroring tooltip" title="' + tooltipMirror + '">Mirroring ' + mirrorOrigin + '</span>');
				
			}

			/* Make sure at least one of the buttons in block controls is going to be shown.  If both are hidden, don't add the block controls <div>. */
			if ( !(showOptions == false && showDelete == false) ) {
				
				var optionsButton = ( showOptions == true ) ? '<span class="options tooltip" title="' + tooltipOptions + '">Options</span>' : '';
				var deleteButton = ( showDelete == true ) ? '<span class="delete tooltip" title="' + tooltipDelete + '">Delete</span>' : '';
				
				$(this).append('\
					<div class="block-controls">\
						' + optionsButton + '\
						' + deleteButton + '\
					</div>');
					
			}
				
		});
		
		bindBlockControls();
		
		setupTooltips('iframe');
				
	}
	
		
		bindBlockControls = function() {
					
			/* Block Type Icon */
				$i('body').delegate('.block div.block-info span.type', 'click', function(event) {
					
					var block = getBlock($(this));
					var blockInfo = $(this).parents('.block-info');
					
					var type = getBlockType(block);
					
					openBlockTypeSelector(block);
			
					event.preventDefault();
					
				});
			
			/* Options */
				$i('body').delegate('.block', 'contextmenu', function(event) {

					if ( typeof Headway.inspectorDisabled != 'undefined' && !Headway.inspectorDisabled )
						return;
					
					$(this).find('span.options').trigger('click');

					event.preventDefault();
					return false;

				});

				$i('body').delegate('.block div.block-controls span.options', 'click', openBlockOptions);
			
			/* Delete */
				$i('body').delegate('.block div.block-controls span.delete', 'click', function(event) {
					
					if(!confirm('Are you sure you want to delete this block?')){
						return false;
					}	
					
					deleteBlock($(this));
					
				});
		
			/* Block Dimensions */
				$i('body').delegate('.block', 'mouseenter', function(event) {
						
					var self = this;	
					var firstSetup = typeof $(this).data('qtip') == 'undefined' ? true : false;

					if ( typeof Headway.disableBlockDimensions !== 'undefined' && Headway.disableBlockDimensions )
						return false;
						
					if ( firstSetup ) {

						addBlockDimensionsTooltip($(this));
						
						$(this).data('hoverWaitTimeout', setTimeout(function() {

							$(self).qtip('show');

						}, 600));
						
					}
								
				});
				
				$i('body').delegate('.block', 'mouseleave', function(event) {
					
					clearTimeout($(this).data('hoverWaitTimeout'));
								
				});
			
			/* Hide block dimensions if hover over a control or info icon */
				$i('body').delegate('.block-controls, .block-info', 'mouseenter', function(event) {
								
					var block = getBlock($(this));	
					
					block.qtip('hide');		
					clearTimeout(block.data('hoverWaitTimeout'));
					
				});
				
				$i('body').delegate('.block-controls, .block-info', 'mouseleave', function(event) {
								
					var block = getBlock($(this));	
					
					block.data('hoverWaitTimeout', setTimeout(function() {
						
						block.qtip('show');
						
					}, 300));
					
				});

		}


		addBlockDimensionsTooltip = function(block) {

			$(block).qtip({
				style: {
					classes: 'ui-tooltip-headway ui-tooltip-block-dimensions'
				},
				position: {
					my: 'top center',
					at: 'bottom center',
					container: Headway.iframe.contents().find('body'),
					viewport: Headway.iframe,
					adjust: {
						method: 'shift'
					}
				},
				show: {
					delay: 600
				},
				hide: {
					delay: 25
				},
				content: {
					text: function(api) {

						var block = getBlock(this);

						var blockWidth = getBlockDimensionsPixels(block).width;	
						var blockHeight = getBlockDimensionsPixels(block).height;					
						var blockType = getBlockType(block);

						if ( getBlockTypeObject(blockType)['fixed-height'] ) {
						
							var blockHeight = blockHeight;
							var heightText = 'Height';
						
						} else {
						
							var blockHeight = Headway.mode == 'grid' ? blockHeight : block.css('minHeight').replace('px', '');
							var heightText = 'Min. Height';
						
						}
					
						var height = '<span class="block-height"><strong>' + heightText + ':</strong> ' + blockHeight + '<small>px</small></span>';
						var width = '<span class="block-width"><strong>Width:</strong> ' + blockWidth + '<small>px</small></span>';

						//Show different width info if it's responsive
						if ( $('#input-enable-responsive-grid label.checkbox-checked').length == 1 || (Headway.mode != 'grid' && Headway.responsiveGrid) )
							var width = '<span class="block-width"><strong>Max Width:</strong> <small>~</small>' + blockWidth + '<small>px</small></span>';

						var fluidMessage = !getBlockTypeObject(blockType)['fixed-height'] ? '<span class="block-fluid-height-message">Height will auto-expand</span>' : '';

						return width + ' <span class="block-dimensions-separator">&#9747;</span> ' + height + fluidMessage;

					}
				}
			});
						
		}


	openBlockOptions = function(block, subTab) {

		if ( typeof block.target != 'undefined' || !block )
			var block = getBlock(this);

		if ( typeof subTab == 'undefined' )
			var subTab = null;

		if ( !block || block.hasClass('block-type-unknown') )
			return false;

		var blockID = getBlockID(block);		    
		var blockType = getBlockType(block);		
		var blockTypeName = getBlockTypeNice(blockType);
	
		var readyTabs = function() {
			
			var tab = $('div#block-' + blockID + '-tab');
			
			/* Ready tab, sliders, and inputs */
			tab.tabs();
			bindPanelInputs('div#block-' + blockID + '-tab');
			
			/* Refresh tooltips */
			setupTooltips();
			
			/* Call the open callback for the box panel */
			var callback = eval(tab.find('ul.sub-tabs').attr('open_js_callback'));
			if ( typeof callback == 'function' ) {
				callback({
					block: block,
					blockID: blockID,
					blockType: blockType
				});
			}

			/* Show and hide elements based on toggle options */
			tab.find('div.sub-tabs-content').each(function() {

				$(this).find('.input#[id*="input-"]').each(function() {

					var input = $(this).find('#[id*="input-"]');

					var toggle = $.parseJSON(input.attr('toggle'));
					var val = input.val();

					if ( val && toggle && typeof toggle == 'object' ) {

						if ( toggle.hasOwnProperty(val) ) {

							/* Show */
								if ( typeof toggle[val].show == 'string' ) {

									input.parents('.panel').find(toggle[val].show).show();

								} else if ( typeof toggle[val].show == 'array' ) {

									$.each(toggle[val].show, function(index, value) {
										input.parents('.panel').find(value).show();
									});

								}

							/* Hide */
								if ( typeof toggle[val].hide == 'string' ) {
									input.parents('.panel').find(toggle[val].hide).hide();

								} else if ( typeof toggle[val].hide == 'object' ) {
									$.each(toggle[val].hide, function(index, value) {
										input.parents('.panel').find(value).hide();
									});

								}

						} /* end if toggle.hasOwnProperty(val) */ 

					} /* end if ( val && toggle && typeof toggle == 'object' ) */

				});

			});

			/* If subTab is defined, switch to that subTab */
			if ( subTab )
				$('div#block-' + blockID + '-tab').tabs('select', subTab);
			
			/* If it's a mirrored block, then hide the other tabs */
			if ( $('div#block-' + blockID + '-tab').find('select#input-' + blockID + '-mirror-block').val() != '' ) {
				
				$('div#block-' + blockID + '-tab ul.sub-tabs li:not(#sub-tab-config)').hide();
				$('div#block-' + blockID + '-tab').tabs('select', 'sub-tab-config-content');
				
			}
			
		}						
		
		var blockIDForTab = isNaN(blockID) ? ': ' + blockID : ' #' + blockID;
		var blockTypeIconStyleAttr = block.find('.block-info .type').attr('style');

		addPanelTab('block-' + blockID, '<span class="block-type-icon" style="' + blockTypeIconStyleAttr + '"></span>' + blockTypeName + ' Block' + blockIDForTab, {
			url: Headway.ajaxURL, 
			data: {
				security: Headway.security,
				action: 'headway_visual_editor',
				method: 'load_block_options',
				block_type: blockType,
				block_id: blockID,
				unsaved_block_options: getUnsavedBlockOptionValues(blockID),
				layout: Headway.currentLayout
			}, 
			callback: readyTabs}, true, true, 'block-type-' + blockType);
		
		$('div#panel').tabs('select', 'block-' + blockID + '-tab');

	}


		reloadBlockOptions = function(blockID, subTab) {

			if ( typeof subTab == 'undefined' || !subTab )
				var subTab = $('div#block-' + blockID + '-tab ul.sub-tabs .ui-state-active a').attr('href').replace('#', '');

			removePanelTab('block-' + blockID);
			
			return openBlockOptions($i('#block-' + blockID), subTab);

		}


		getUnsavedBlockOptionValues = function(blockID) {
					
			if ( 
				typeof GLOBALunsavedValues == 'object' && 
				typeof GLOBALunsavedValues['blocks'] == 'object' &&
				typeof GLOBALunsavedValues['blocks'][blockID] == 'object' &&
				typeof GLOBALunsavedValues['blocks'][blockID]['settings'] == 'object' 
			)
				var unsavedBlockSettings = GLOBALunsavedValues['blocks'][blockID]['settings'];
				
			return (typeof unsavedBlockSettings == 'object' && Object.keys(unsavedBlockSettings).length > 0) ? unsavedBlockSettings : null;
			
		}
		

	openBlockTypeSelector = function(block) {

		var blockID = getBlockID(block);

		/* Create blank panel */
			removePanelTab('block-' + blockID);
			addPanelTab('block-' + blockID, 'Select Block Type', '', true, true);

			var tab = $('#block-' + blockID + '-tab');

		/* Clone block type selector in and bind it */
			var blockTypeSelector = $('.block-type-selector-original').clone()
				.removeClass('block-type-selector-original')
				.appendTo(tab)
				.show();

			blockTypeSelector.find('div.block-type').addClass('tooltip');
			setupTooltips();

			blockTypeSelector.find('div.block-type').bind('click', function(event) {	

				var blockType = $(this).attr('id').replace('block-type-', '');

				/* If new block then create it */
					if ( block.hasClass('blank-block') ) {
						
						Headway.iframe.grid('setupBlankBlock', blockType);
					
				/* Otherwise we're switching an existing block's type */
					} else if ( confirm('Are you sure you wish to switch block types?  All settings for this block will be lost.') ) {
						
						var switchedBlockTypeBlockID = switchBlockType(block, blockType);

						blockID = switchedBlockTypeBlockID;
						
					}

				/* Open options now */
				removePanelTab('block-' + blockID);
				openBlockOptions($i('#block-' + blockID));

			});

		/* Bind unfocus events */
			if ( block.hasClass('blank-block') ) {

				$('.wrapper').bind('mousedown', {block: block}, hideBlankBlockTypeSelector);

				$(document).bind('keyup.esc', {block: block}, hideBlankBlockTypeSelector);
				$i('html').bind('keyup.esc', {block: block}, hideBlankBlockTypeSelector);

				/* Make sure that when closing the block type selector with the tab close button on a blank block that the blank block is also removed. */
				$('ul#panel-top li a[href="#block-' + blockID + '-tab"]').siblings('span.close').bind('mouseup', {block: block}, hideBlankBlockTypeSelector);

			}
		
		/* Select the tab */
			$('div#panel').tabs('select', 'block-' + blockID + '-tab');

		return;
		
	}

	
		hideBlankBlockTypeSelector = function(event) {

			var block = event.data.block;

			/* If blank block then unbind things and delete it.  Make sure that the block isn't being clicked inside of. */
				if ( block.hasClass('blank-block') && $(event.target).parents('.block').first().get(0) != $(block).get(0) ) {

					removePanelTab('block-' + getBlockID(block));

					block.remove();

					$('.wrapper').unbind('mousedown', hideBlankBlockTypeSelector);

					$(document).unbind('keyup.esc', hideBlankBlockTypeSelector);
					$i('html').unbind('keyup.esc', hideBlankBlockTypeSelector);

				}

			return true;
			
		}


		switchBlockType = function(block, blockType) {
			
			var blockTypeIconURL = getBlockTypeIcon(blockType, true);
			
			var oldType = getBlockType(block);
			var blockID = getBlockID(block);
			
			block.removeClass('block-type-' + oldType);
			block.addClass('block-type-' + blockType);

			block.find('.block-info span.type')
				.attr('class', '')
				.addClass('type')
				.addClass('type-' + blockType)
				.html(getBlockTypeNice(blockType))
				.css('backgroundImage', 'url(' + blockTypeIconURL + ')');
				
			block.find('h3.block-type span').text(getBlockTypeNice(blockType));
							
			loadBlockContent({
				blockElement: block,
				blockOrigin: {
					type: blockType,
					id: 0,
					layout: Headway.currentLayout
				},
				blockSettings: {
					dimensions: getBlockDimensions(block),
					position: getBlockPosition(block)
				},
			});
			
			//Set the fluid/fixed height class so the fluid height message is shown correctly
			if ( getBlockTypeObject(blockType)['fixed-height'] === true ) {
				
				block.removeClass('block-fluid-height');
				block.addClass('block-fixed-height');

				if ( block.css('min-height').replace('px', '') != '0' ) {

					block.css({
						height: block.css('min-height')
					});

				}
				
			} else {
				
				block.removeClass('block-fixed-height');
				block.addClass('block-fluid-height');

				if ( block.css('height').replace('px', '') != 'auto' ) {

					block.css({
						height: block.css('height')
					});

				}
				
			}
			
			//Set the hide-content-in-grid depending on the block type
			if ( !getBlockTypeObject(blockType)['show-content-in-grid'] ) {
				
				block.addClass('hide-content-in-grid');
				
			} else {
				
				block.removeClass('hide-content-in-grid');
				
			}

			//Remove block type unknown class
			block.removeClass('block-type-unknown');
			
			//Prepare for hiddens
			var newBlockID = getAvailableBlockID();
			var oldBlockID = blockID;
			
			//Delete the old block optiosn tab if it exists
			removePanelTab('block-' + oldBlockID);
			
			//Add hiddens to delete old block and add new block in its place
			addDeleteBlockHidden(oldBlockID);
			addNewBlockHidden(newBlockID, blockType);
			updateBlockPositionHidden(newBlockID, getBlockPosition(block));
			updateBlockDimensionsHidden(newBlockID, getBlockDimensions(block));

			updateBlockMirrorStatus(false, block, '', false);
			
			//Update the ID on the block
			block
				.attr('id', 'block-' + newBlockID)
				.attr('data-id', newBlockID)
				.data('id', newBlockID);

			block.find('div.block-info span.id').text(newBlockID);
			
			//Allow saving now that the type has been switched
			allowSaving();
			
			/* Refresh tooltips */
			setupTooltips('iframe');

			return newBlockID;
			
		}


	blockIntersectCheck = function(originBlock) {
		
		var intersectors = blockIntersectCheckCallback(originBlock, grid.iframeElement('.block'));

		//If there are two elements in the intersection array (the original one will be included since we're doing a general '.block' search), then we throw an error
		if ( intersectors.length > 1 ) {	
			
			intersectors.addClass('block-error');

			var output = false;
			
		} else {
			
			//Set up variable for next loop
			var blockErrorCount = 0;

			//Since there could still be errors after this one if fixed, we must loop through all other blocks that have errors
			grid.iframeElement('.block-error').each(function(){
				var intersectors = blockIntersectCheckCallback(this, grid.iframeElement('.block'));

				if ( intersectors.length === 1) {
					$(this).removeClass('block-error');
				} else {
					blockErrorCount++;
				}
			});

			//If there aren't any touching blocks, then we can save.  Otherwise, we cannot.
			var output = ( blockErrorCount === 0 ) ? true : false;
			
		}

		/* If there are overlapping blocks, then show a red notice */
		if ( !output ) {

			Headway.overlappingBlocks = true;
			showNotification('There are <strong>overlapping blocks</strong>.<br />Please separate them before saving.', 0, true, 'overlapping-blocks');

		} else {

			Headway.overlappingBlocks = false;
			hideNotification('overlapping-blocks');

		}

		return output;
	
	}


		blockIntersectCheckCallback = function(targetSelector, intersectorsSelector) {
			
			if ( targetSelector == false || intersectorsSelector == false ) {
				return false;
			}
			
		    var intersectors = [];

		    var $target = $(targetSelector);
		    var tAxis = $target.offset();
		    var t_x = [tAxis.left, tAxis.left + $target.outerWidth()];
		    var t_y = [tAxis.top, tAxis.top + $target.outerHeight()];

		    $(intersectorsSelector).each(function() {

		          var $this = $(this);

		          if ( !$this.is(':visible') )
		          	return;

		          var thisPos = $this.offset();
		          var i_x = [thisPos.left, thisPos.left + $this.outerWidth()]
		          var i_y = [thisPos.top, thisPos.top + $this.outerHeight()];

		          if ( t_x[0] < i_x[1] && t_x[1] > i_x[0] &&
		               t_y[0] < i_y[1] && t_y[1] > i_y[0]) {
		              intersectors.push(this);
		          }

		    });
		
		    return $(intersectors);
		
		}


	deleteBlock = function(element) {
	
		var deleteBlockID = getBlockID(element);
		var deleteBlock = getBlock(element);
		
		logHistory({
			description: 'Deleted block #' + deleteBlockID,
			action: function() {

				//Remove the block!
				deleteBlock.hide();
				
				//Remove block options tab from panel
				removePanelTab('block-' + deleteBlockID);
				
				//Add the hidden input flag
				addDeleteBlockHidden(deleteBlockID);
				
				//Set block to false for the intersect check
				blockIntersectCheck(false);

			},
			actionReverse: function() {

				deleteBlock.show();
				removeDeleteBlockHidden(deleteBlockID);
				
				blockIntersectCheck(deleteBlock);

			}
		});
		
		allowSaving();	
		
	}

	exportBlockSettingsButtonCallback = function(input) {

		var params = {
			'security': Headway.security,
			'action': 'headway_visual_editor',
			'method': 'export_block_settings',
			'block-id': input.attr('block_id')
		}

		var exportURL = Headway.ajaxURL + '?' + $.param(params);

		return window.open(exportURL);

	}

	initiateBlockSettingsImport = function(input) {

		if ( !input.val() )
			return alert('You must select a block settings export file before importing.');

		var blockSettingsFile = input.get(0).files[0];

		if ( blockSettingsFile && typeof blockSettingsFile.name != 'undefined' && typeof blockSettingsFile.type != 'undefined' ) {

			var blockSettingsReader = new FileReader();

			blockSettingsReader.onload = function(e) { 

				var contents = e.target.result;
				var blockSettingsImportArray = JSON.parse(contents);

				var blockID = input.attr('block_id');

				/* Check to be sure that the JSON file is a block settings export file */
					if ( blockSettingsImportArray['data-type'] != 'block-settings' )
						return alert('Cannot load block settings.  Please insure that the block settings are a proper Headway block settings export.');

				/* Make sure block type matches */
					if ( getBlockType($i('#block-' + blockID)) != blockSettingsImportArray['type'] )
						return alert('Block type mismatch.  Be sure that the block settings export is the same type of block type that you\'re importing to.');

				/* Handle the fun stuff */
					if ( typeof blockSettingsImportArray['image-definitions'] != 'undefined' && Object.keys(blockSettingsImportArray['image-definitions']).length ) {

						showNotification('Currently importing images.', 10000);

						$.post(Headway.ajaxURL, {
							security: Headway.security,
							action: 'headway_visual_editor',
							method: 'import_images',
							importFile: blockSettingsImportArray
						}, function(response) {
								
							var blockSettings = response;

							/* If there's an error when sideloading images, then hault import. */
							if ( typeof blockSettings['error'] != 'undefined' )
								return alert('Error while importing images for block: ' + blockSettings['error']);
								
							importBlockSettingsAJAXCallback(blockID, blockSettings);

						});

					} else {

						importBlockSettingsAJAXCallback(blockID, blockSettingsImportArray);

					}

			}; /* end blockSettingsReader.onload */

			blockSettingsReader.readAsText(blockSettingsFile);

		} else {

			alert('Cannot load block settings.  Please insure that the block settings are a proper Headway block settings export.');

		}

	}


		importBlockSettingsAJAXCallback = function(blockID, block) {

			/* Import block settings */
			importBlockSettings(block['settings'], blockID);

			/* Reload block settings */
			removePanelTab('block-' + blockID);
			openBlockOptions($i('#block-' + blockID));

		}

		importBlockSettings = function(importBlockSettings, blockID) {

			/* Send the block settings data to the unsaved data */
				if ( typeof GLOBALunsavedValues != 'object' )
					GLOBALunsavedValues = {};

				if ( typeof GLOBALunsavedValues['blocks'] != 'object' )
					GLOBALunsavedValues['blocks'] = {};

				if ( typeof GLOBALunsavedValues['blocks'][blockID] != 'object' )
					GLOBALunsavedValues['blocks'][blockID] = {};

				if ( typeof GLOBALunsavedValues['blocks'][blockID]['settings'] != 'object' )
					GLOBALunsavedValues['blocks'][blockID]['settings'] = {};

				GLOBALunsavedValues['blocks'][blockID]['settings'] = importBlockSettings;
			
			/* Force reload block content */
				refreshBlockContent(blockID);

			/* Show notification */
				showNotification('Block settings successfully imported for ' + getBlockTypeNice(getBlockType($i('#block-' + blockID))) + ' Block #' + blockID, 6000);

			/* Allow saving */
				allowSaving();

		}
/* END BLOCK FUNCTIONS */


/* NOTIFICATIONS */
	showTaskNotification = function(message, closeCallback, noClose, opacity) {

		if ( $('#task-notification:visible').length )
			return;
				
		if ( typeof closeCallback == 'undefined' )
			var closeCallback = null;

		if ( typeof opacity == 'undefined' )
			var opacity = 1;

		var notification = $('<div id="task-notification" class="notification"><p>' + message + '</p></div>');

		if ( typeof noClose == 'undefined' || !noClose ) {

			notification.append('<span class="close">Close</span>');
			notification.addClass('notification-close');

		}

		notification
			.hide()
			.appendTo('body')
			.css('opacity', opacity)
			.fadeIn(350)
			.data('closeCallback', closeCallback);
			
		$('.close', 'div#task-notification').bind('click', function() {
			hideTaskNotification(closeCallback);
		});
		
	}
	

	showFeatureExplanation = function(id, message, closeMessage) {

		if ( $.cookie('hide-feature-explanation-' + id) )
			return;

		if ( $('#feature-explanation-' + id).length )
			return $('#feature-explanation-' + id).fadeIn(350);

		var notification = $('<div id="feature-explanation-' + id + '" class="notification notification-close feature-explanation"><p>' + message + '</p><span class="close">Close</span></div>');

		notification
			.hide()
			.appendTo('body')
			.css('opacity', 0.8)
			.fadeIn(350);
			
		$('.close', '#feature-explanation-' + id).bind('click', function() {

			if ( confirm(closeMessage) )
				removeFeatureExplanation(id);

		});

	}


		hideFeatureExplanation = function(id) {

			$('#feature-explanation-' + id).fadeOut(350);

		}


		removeFeatureExplanation = function(id) {

			$('#feature-explanation-' + id).fadeOut(350, function() {
				$(this).remove();

				$.cookie('hide-feature-explanation-' + id, true);
			});

		}

	
	hideTaskNotification = function(closeCallback) {
				
		if ( typeof closeCallback === 'function' ) {
			closeCallback();
		}		
				
		$('div#task-notification').fadeOut(350, function() {
			$(this).remove();
		});
		
	}
	
	
	showNotification = function(message, timer, error, id) {
								
		if ( typeof timer === 'undefined' )
			var timer = 3000;
		
		if ( typeof error === 'undefined' )
			var error = false;
		
		//Close out all other notifications
		$('div.notifcation:not(#task-notification):not(.feature-explanation)').remove();
		
		var notification = $('<div class="notification"><p>' + message + '</p></div>');
		
		if ( typeof id != 'undefined' ) {

			notification.attr('id', 'notification-' + id);

			if ( $('#notification-' + id).length )
				return;

		}

		if ( error )
			notification.addClass('notification-error');

		notification
			.hide()
			.appendTo('body');

		/* If another notification is active, then move this notification below it */
		if ( $('.notification:visible').length ) {

			if ( $('.notification:visible').first().position().top <= 70 ) {

				var position = $('.notification:visible').last().position();
				var height = $('.notification:visible').last().outerHeight();

				notification.css('top', position.top + height + 15);

			}

		}

		notification.fadeIn(350);
								
		if ( timer ) {
			setTimeout(function() {
				notification.fadeOut(1500, function() {
					$(this).remove();
				});
			}, timer);
		}
		
		return notification;
		
	}


	hideNotification = function(id, closeCallback) {

		$('#notification-' + id).fadeOut(350, function() {
			$(this).remove();

			if ( typeof closeCallback === 'function' ) {
				closeCallback();
			}	
		});
		
	}
/* END NOTIFICATIONS */


/* LOADING FUNCTIONS */
	/* Simple function to change loading bar. */
	setLoadingBar = function(percent, message, callback) {
		
		if ( (typeof loadingComplete != 'undefined' && loadingComplete == true) || (typeof iframeTimeout != 'undefined' && iframeTimeout == true) )
			/* Don't animate again */
			return false;
		
		$('div.loading-bar-inside').css({'width': ($('div.loading-bar').width() * (percent/100))});

		if ( typeof callback !== 'function' )
			callback = function(){};

		setTimeout(callback, 120);
		
		if ( percent == 100 )
			loadingComplete = true;

	}
/* END LOADING FUNCTIONS */


/* TITLE FUNCTIONS */
	/* Simple title change function */
	changeTitle = function(title) {

		return $('title').text(title);

	}


	startTitleActivityIndicator = function() {
		
		//If the title activity indicator has already been started, don't try to again.
		if ( typeof titleActivityIndicatorInstance === 'number' )
			return false;

		titleActivityIndicatorInstance = window.setInterval(titleActivityIndicator, 500);
		titleActivityIndicatorSavedTitle = $('title').text();

		return true;

	}


	stopTitleActivityIndicator = function() {

		if ( typeof titleActivityIndicatorInstance !== 'number' ) {

			return false;

		}

		window.clearInterval(titleActivityIndicatorInstance);

		changeTitle(titleActivityIndicatorSavedTitle);

		delete titleActivityIndicatorCounter;
		delete titleActivityIndicatorSavedTitle;
		delete titleActivityIndicatorInstance;

		return true;

	}


	/* Title indicator callback function */
	titleActivityIndicator = function() {

		/* Set up variables */
		if ( typeof titleActivityIndicatorCounter == 'undefined' ) {
			titleActivityIndicatorCounter = 0;
			titleActivityIndicatorCounterPos = true;
		}	


		/* Increase/decrease periods */
		if ( titleActivityIndicatorCounterPos === true ) {
			++titleActivityIndicatorCounter;
		} else {
			--titleActivityIndicatorCounter;
		}

		/* Flippy da switch */
		if ( titleActivityIndicatorCounter === 3) {
			titleActivityIndicatorCounterPos = false;
		} else if ( titleActivityIndicatorCounter === 0) {
			titleActivityIndicatorCounterPos = true;
		}

		var title = titleActivityIndicatorSavedTitle + '.'.repeatStr(titleActivityIndicatorCounter);

		changeTitle(title);

	}
/* END TITLE FUNCTIONS */


/* BOX FUNCTIONS */
	createBox = function(args) {
		var settings = {};
		
		var defaults = {
			id: null,
			title: null,
			description: null,
			content: null,
			src: null,
			load: null,
			width: 500,
			height: 300,
			center: true,
			closable: true,
			resizable: false,
			draggable: true,
			deleteWhenClosed: false,
			blackOverlay: false,
			blackOverlayOpacity: .6,
			blackOverlayIframe: false
		};
		
		$.extend(settings, defaults, args);
				
		/* Create box */
			var box = $('<div class="box" id="box-' + settings.id + '"><div class="box-top"></div><div class="box-content-bg"><div class="box-content"></div></div></div>');
			
			box.attr('black_overlay', settings.blackOverlay);
			box.attr('black_overlay_opacity', settings.blackOverlayOpacity);
			box.attr('black_overlay_iframe', settings.blackOverlayIframe);
			box.attr('load_with_ajax', false);
				
		/* Move box into document */
			box.appendTo('div#boxes');
					
		/* Inject everything */
			/* If regular content and not iframe, just put it in */
			if ( typeof settings.src !== 'string' ) {
								
				box.find('.box-content').html(settings.content);
			
			/* Else use iframe */	
			} else {
				
				box.find('.box-content').html('<iframe src="' + settings.src + '" style="width: ' + settings.width + 'px; height: ' + parseInt(settings.height - 50) + 'px;"></iframe>');
								
				if ( typeof settings.load === 'function' ) {
					
					box.find('.box-content iframe').bind('load', settings.load);
					
				}
				
			}
		
			box.find('.box-top').append('<strong>' + settings.title + '</strong>');
			
			if ( typeof settings.description === 'string' ) {
				box.find('.box-top').append('<span>' + settings.description + '</span>');
			}
		
		/* Setup box */
			setupBox(settings.id, settings);
					
		return box;
	}
	
	
	setupBox = function(id, args) {
		
		var settings = {};
		
		var defaults = {
			width: 600,
			height: 300,
			center: true,
			closable: true,
			deleteWhenClosed: false,
			draggable: false,
			resizable: false
		};
				
		$.extend(settings, defaults, args);		
				
		var box = $('div#box-' + id);
				
		/* Handle draggable */
		if ( settings.draggable ) {
			
			box.draggable({
				handle: box.find('.box-top'),
				start: showIframeOverlay,
				stop: hideIframeOverlay
			});
			
			box.find('.box-top').css('cursor', 'move');
			
		}
		
		/* Make box closable */
		if ( settings.closable ) {
			
			/* If close button doesn't exist, create it. */
			box.find('.box-top').append('<span class="box-close">X</span>');
			
			box.find('.box-close').bind('click', function(){
				closeBox(id, settings.deleteWhenClosed);
			});
			
		}
		
		/* Make box resizable */
		if ( settings.resizable ) {
			
			/* If close button doesn't exist, create it. */
			box.resizable({
				start: showIframeOverlay,
				stop: hideIframeOverlay,
				handles: 'n, e, s, w, ne, se, sw, nw',
				minWidth: settings.minWidth,
				minHeight: settings.minHeight
			});
			
		}
		
		/* Set box dimensions */
		box.css({
			width: settings.width,
			height: settings.height
		});

		/* Center Box */
		if ( settings.center ) {
			
			var marginLeft = -(box.width() / 2);
			var marginTop = -(box.height() / 2);
			
			box.css({
				top: '50%',
				left: '50%',
				marginLeft: marginLeft,
				marginTop: marginTop,
			});
			
		}
		
	}
	
	
	showIframeOverlay = function() {
		
		var overlay = $('div#iframe-overlay');
		var iframe = Headway.iframe;
		
		var iframeWidth = iframe.width();
		var iframeHeight = iframe.height();
				
		overlay.css({
			top: iframe.css('paddingTop'),
			left: iframe.css('paddingLeft'),
			width: iframeWidth,
			height: iframeHeight
		});
		
		overlay.show();
		
	}
	
	
	hideIframeOverlay = function(delay) {

		if ( typeof delay != 'undefined' && delay == false )
			return $('div#iframe-overlay').hide();
		
		/* Add a timeout for intense draggers */
		setTimeout(function(){
			$('div#iframe-overlay').hide();
		}, 250);
		
	}
	
	
	setupStaticBoxes = function() {
				
		$('div.box').each(function() {
		
			/* Fetch settings */
			var draggable = $(this).attr('draggable').toBool();
			var closable = $(this).attr('closable').toBool();
			var resizable = $(this).attr('resizable').toBool();
			var center = $(this).attr('center').toBool();
			var width = $(this).attr('width');
			var height = $(this).attr('height');
			var minWidth = $(this).attr('min_width');
			var minHeight = $(this).attr('min_height');			
						
			var id = $(this).attr('id').replace('box-', '');
																		
			setupBox(id, {
				draggable: draggable,
				closable: closable,
				resizable: resizable,
				center: center,
				width: width,
				height: height,
				minWidth: minWidth,
				minHeight: minHeight
			});
			
			/* Remove settings attributes */
			$(this).attr('draggable', null);
			$(this).attr('closable', null);
			$(this).attr('resizable', null);
			$(this).attr('center', null);
			$(this).attr('width', null);
			$(this).attr('height', null);
			$(this).attr('min_width', null);
			$(this).attr('min_height', null);
			
		});
		
	}
	
	
	openBox = function(id) {
		
		var id = id.replace('box-', '');
		var box = $('div#box-' + id);
		
		if ( box.length === 0 )
			return false;
		
		var blackOverlay = box.attr('black_overlay').toBool();
		var blackOverlayOpacity = box.attr('black_overlay_opacity');
		var blackOverlayIframe = box.attr('black_overlay_iframe').toBool();
		var loadWithAjax = box.attr('load_with_ajax').toBool();
		
		if ( blackOverlay && !boxOpen(id) ) {

			var overlay = $('<div class="black-overlay"></div>')
				.hide()
				.attr('id', 'black-overlay-box-' + id)
				.appendTo('body');

			if ( blackOverlayIframe === true )
				overlay.css('zIndex', 4);

			if ( !isNaN(blackOverlayOpacity) )
				overlay.css('background', 'rgba(0, 0, 0, ' + blackOverlayOpacity + ')');

			overlay.fadeIn(100);

		}
			
		if ( loadWithAjax) {
			
			createCog(box.find('.box-content'), true);
						
			box.find('.box-content').load(Headway.ajaxURL, {
				security: Headway.security,
				action: 'headway_visual_editor',
				method: 'load_box_ajax_content',
				box_id: id,
				layout: Headway.currentLayout
			}, function() {
									
				var loadWithAjaxCallback = eval(box.attr('load_with_ajax_callback'));
								
				loadWithAjaxCallback.call();
				
			});
			
		}
			
		return box.fadeIn(100);
		
	}
	
	
	closeBox = function(id, deleteWhenClosed) {
		
		var id = id.replace('box-', '');
		var box = $('div#box-' + id);
		
		box.fadeOut(300, function(){
			
			if ( typeof deleteWhenClosed != 'undefined' && deleteWhenClosed == true )
				$(this).remove();
			
		});
		
		$('div#black-overlay-box-' + id).fadeOut(300, function() {
			$(this).remove();
		});
		
		return true;
		
	}
	
	
	boxOpen = function(id) {
		
		return $('div#box-' + id).is(':visible');
		
	}
	
	
	boxExists = function(id) {
		
		if ( $('div#box-' + id).length === 1 ) {
			
			return true;
			
		} else {
			
			return false;
			
		}
		
	}


	toggleBox = function(id) {

		if ( !boxOpen(id) ) {
							
			openBox(id);
			
		} else {
							
			closeBox(id);
			
		}

	}
/* END BOX FUNCTIONS */


/* LAYOUT SELECTOR FUNCTIONS */
	layoutSelectorRevertCheck = function() {
		
		if ( $('.layout-item-customized').length > 1 ) {
			$('div#layout-selector-pages').removeClass('layout-selector-disallow-revert');
		} else {
			$('div#layout-selector-pages').addClass('layout-selector-disallow-revert');
		}
		
	}

	showLayoutSelector = function() {

		$('div#layout-selector-offset')
			.removeClass('layout-selector-hidden')
			.addClass('layout-selector-open');

		$('iframe.content').css({paddingLeft: '295px'});
						
		$('body').removeClass('layout-selector-hidden');
		
		$('span#layout-selector-toggle').text('Hide Layout Selector');
		
		return $.cookie('hide-layout-selector', false);

	}

	hideLayoutSelector = function() {

		$('div#layout-selector-offset')
			.removeClass('layout-selector-open')
			.addClass('layout-selector-hidden');

		$('iframe.content').css({paddingLeft: '0'});
			
		$('body').addClass('layout-selector-hidden');
		
		$('span#layout-selector-toggle').text('Show Layout Selector');
		
		return $.cookie('hide-layout-selector', true);

	}

	toggleLayoutSelector = function() {
		
		if ( $('div#layout-selector-offset').hasClass('layout-selector-open') )
			return hideLayoutSelector();

		return showLayoutSelector();

	}
/* END LAYOUT SELECTOR FUNCTIONS */


/* PANEL FUNCTIONS */
	/* Tab Functions */
	$('ul#panel-top li span.close').live('click', function(){
				
		var tab = $(this).siblings('a').attr('href').replace('#', '').replace('-tab', '');
				
		return removePanelTab(tab);
		
	});
	
	
	addPanelTab = function(name, title, content, closable, closeOnLayoutSwitch, panelClass) {
		
		/* If the tab name already exists, don't try making it */
		if ( $('ul#panel-top li a[href="#' + name + '-tab"]').length !== 0 )
			return false;
		
		/* Set up default variables */
		if ( typeof closable == 'undefined' ) {
			var closable = false;
		}
		
		if ( typeof closeOnLayoutSwitch == 'undefined' ) {
			var closeOnLayoutSwitch = false;
		}
		
		if ( typeof panelClass == 'undefined' ) {
			var panelClass = false;
		}
		
		/* Add the tab */
		var tab = $('div#panel').tabs('add', '#' + name + '-tab', title);
		var panel = $('div#panel div#' +  name + '-tab');
		var tabLink = $('ul#panel-top li a[href="#' + name + '-tab"]');
		
		$(tabLink).bind('click', showPanel);
		
		showPanel();
		
		/* Add the panel class to the panel */
		panel.addClass('panel');
		
		/* If the content is static, just throw it in.  Otherwise get the content with AJAX */
		if ( typeof content == 'string' ) {
			
			panel.html(content);
			
		} else {
			
			var loadURL = content.url; 
			var loadData = content.data || false;
			
			var loadCallback = function() {
				
				if ( typeof content.callback == 'function' )
					content.callback.call();
			
				addPanelScrolling();
				
			};
			
			createCog(panel, true);
						
			$('div#panel div#' +  name + '-tab').load(loadURL, loadData, loadCallback);
			
		}
		
		if ( panelClass )
			panel.addClass('panel-' + panelClass);

		/* Add delete to tab link if the tab is closable */
		if ( closable ) {
					
			tabLink.parent().append('<span class="close">X</span>');
			
		}
		
		/* If the panel is set to close on layout switch, add a class to the tab itself so we can target it down the road */
		tabLink.parent().addClass('tab-close-on-layout-switch');
				
		return tab;
		
	}
	
	
	removePanelTab = function(name) {
		
		/* If tab doesn't exist, don't try to delete any tabs */
		if ( $('#' + name + '-tab').length === 0 ) {
			return false;
		}
		
		return $('div#panel').tabs('remove', name + '-tab');
		
	}
	
	
	removeLayoutSwitchPanels = function() {
		
		$('li.tab-close-on-layout-switch').each(function(){
			var id = $(this).find('a').attr('href').replace('#', '');
			
			$('div#panel').tabs('remove', id);
		});
		
	}


	/* Toggle visibility of visual editor panel */
	togglePanel = function() {

		if ( $('div#panel').hasClass('panel-hidden') )
			return showPanel();

		return hidePanel();

	}
	
	
	hidePanel = function() {
		
		//If the panel is already hidden, don't go through any trouble.
		if ( $('div#panel').hasClass('panel-hidden') )
			return false;
									
		var panelCSS = {'bottom': -$('div#panel').height()};
		var iframeCSS = {'paddingBottom': $('ul#panel-top').outerHeight()};
		var layoutSelectorCSS = {paddingBottom: $('ul#panel-top').outerHeight() + $('div#layout-selector-tabs').height()};

			$('div#panel').css(panelCSS).addClass('panel-hidden');
			$('iframe.content').css(iframeCSS);
			$('div#layout-selector-offset').css(layoutSelectorCSS);

			setTimeout(repositionTooltips, 400);

		$('body').addClass('panel-hidden');

		/* Add class to button */
		$('ul#panel-top li#minimize span').addClass('active');
		
		/* Hide the panel top handle to disallow resizing while it's hidden */
		$('div#panel-top-handle').fadeOut(200);
		
		/* De-select the selected block while the panel is hidden */
		$i('.block-selected').removeClass('block-selected block-hover');

		$.cookie('hide-panel', true);
		
		return true;
		
	}
	
	
	showPanel = function() {
				
		//If the panel is already visible, don't go through any trouble.
		if ( !$('div#panel').hasClass('panel-hidden') )
			return false;

		var panelCSS = {'bottom': 0};
		var iframeCSS = {'paddingBottom': $('div#panel').outerHeight()};
		var layoutSelectorCSS = {paddingBottom: $('div#panel').outerHeight() + $('div#layout-selector-tabs').height()};
					
			$('div#panel').css(panelCSS).removeClass('panel-hidden');
			$('iframe.content').css(iframeCSS);
			$('div#layout-selector-offset').css(layoutSelectorCSS);

			setTimeout(repositionTooltips, 400);

		$('body').removeClass('panel-hidden');

		/* Remove class from button */
		$('ul#panel-top li#minimize span').removeClass('active');
		
		/* Show the panel top handle to allow resizing again */
		$('div#panel-top-handle').fadeIn(200);
		
		/* Re-select the the block if a block optiosn panel tab is open. */
		$i('#' + $('ul#panel-top > li.ui-state-active a').attr('href').replace('#', '').replace('-tab', '')).addClass('block-selected block-hover');
		
		$.cookie('hide-panel', false);
		
		return true;
		
	}

	
	/* Scrolling */
	addPanelScrolling = function() {
		
		$('ul.sub-tabs').scrollbarPaper();
		$('div.sub-tabs-content-container').scrollbarPaper();
		
	}
/* END PANEL FUNCTIONS */


/* COMPLEX INPUTS ACROSS ALL MODES */
	updateBlockMirrorStatus = function(input, block, value, updateTooltips) {
		
		/* If there is no input provided, then create an empty jQuery so no errors show up */
		if ( typeof input == 'undefined' || input == false )
			input = $();
			
		if ( typeof updateTooltips == 'undefined' )
			updateTooltips = true;
			
		var block = getBlock(block);
		
		if ( value == '' ) { 
							
			block.find('.block-info span.mirroring').remove();
			
			input.parents(".panel").find("ul.sub-tabs li:not(#sub-tab-config)").show();

			/* Change ID attribute to the block's real ID */
			block.attr('id', 'block-' + block.data('id'));
			
		} else { 
			
			var tooltipMirror = 'This block is set to mirror another block.  A mirrored block is always set to clone the origin block.  If the block that this block is mirroring is updated, then so will this one.  You can unmirror the block at any time by opening the options for this block (top right of block) then going to Config.'
			
			block.find('.block-info').append('<span class="mirroring tooltip" title="' + tooltipMirror + '">Mirroring ' + value + '</span>');
			
			/* Since we added the Mirroring status, the tooltips have to be refreshed. */
			if ( updateTooltips )
				setupTooltips('iframe');
			
			input.parents(".panel").find("ul.sub-tabs li:not(#sub-tab-config)").hide();

			/* Update ID attribute to the mirrored block ID */
			block.attr('id', 'block-' + value);
			
		}
		
	}
/* END COMPLEX INPUTS */


/* SAVE FUNCTIONS */
	save = function() {
		
		/* If saving isn't allowed, don't try to save. */
		if ( typeof isSavingAllowed === 'undefined' || isSavingAllowed === false ) {
			return false;
		}
		
		/* If currently saving, do not do it again. */
		if ( typeof currentlySaving !== 'undefined' && currentlySaving === true ) {
			return false;
		}
	
		currentlySaving = true;
		
		savedTitle = $('title').text();
		saveButton = $('span#save-button');
	
		saveButton
			.text('Saving...')
			.addClass('active')
			.css('cursor', 'wait');
		
		/* Change the title */
		changeTitle('Visual Editor: Saving');
		startTitleActivityIndicator();
			
		/* Build and serialize options */
		var optionsSerialized = $.param(GLOBALunsavedValues);

		/* Do the stuff */
		$.post(Headway.ajaxURL, {
			security: Headway.security,
			action: 'headway_visual_editor',
			method: 'save_options',
			options: optionsSerialized,
			layout: Headway.currentLayout,
			mode: Headway.mode
		}, function(response) {
			
			delete currentlySaving;
			
			/* If it's not a successful save, revert the save button to normal and display an alert. */
			if ( response !== 'success' ) {
								
				saveButton.stop(true);
			
				saveButton.text('Save');
				saveButton.removeClass('active');

				saveButton.css('cursor', 'pointer');
							
				return showNotification('Error: Could not save!  Please try again.', 6000, true);
				
			/* Successful Save */
			} else {
				
				saveButton.animate({boxShadow: '0 0 0 #00ffde'}, 350);
				
				setTimeout(function() {

					saveButton.css('boxShadow', '');
					saveButton.stop(true);

					saveButton.text('Save');
					saveButton.removeClass('active');

					saveButton.css('cursor', 'pointer');

					/* Clear out hidden inputs */
					clearUnsavedValues();

					/* Set the current layout to customized after save */
					$('li.layout-selected').addClass('layout-item-customized');
					
					layoutSelectorRevertCheck();

					/* Fade back to inactive save button. */
					disallowSaving();				

					/* Reset the title and show the saving complete notification */
					setTimeout(function() {

						stopTitleActivityIndicator();
						changeTitle(savedTitle);

						showNotification('Saving complete!', 3500);

					}, 150);

				}, 350);

				allowVEClose(); //Do this here in case we have some speedy folks who want to close VE ultra-early after a save.
				
			}

		});
	
	}


	updatePanelInputHidden = function(args) {

		/* Allow saving */
			allowSaving();

		/* Build variables */
			if ( typeof args.input !== 'undefined' && $(args.input).length === 1 ) {
				
				var originalInput = $(args.input);
				
				var optionID = originalInput.attr('name').toLowerCase();
				var optionGroup = originalInput.attr('group').toLowerCase();
				
				var optionValue = args.value;

				var isBlock = originalInput.attr('is_block') ? originalInput.attr('is_block').toBool() : false;
				var blockID = originalInput.attr('block_id');

				var callback = eval(originalInput.attr('callback'));
				
			} else {
				
				var optionID = args.id.toLowerCase();
				var optionGroup = (typeof args.group != 'undefined') ? args.group.toLowerCase() : false;

				var optionValue = args.value;
				
				var isBlock = (typeof args.isBlock != 'undefined') ? args.isBlock.toBool() : false;
				var blockID = args.blockID;

				var callback = (typeof args.callback === 'function') ? args.callback : false;
				
			}

		/* Handle repeater inputs */
			if ( typeof args.input !== 'undefined' && !args.input.hasClass('repeater-group-input') && args.input.parents('.repeater-group').length ) {

				updateRepeaterValues(args.input.parents('.repeater'));

				if ( typeof callback == 'function' )
					callback(args);	

				return;				

		/* Handle regular elements by adding to the unsaved values global */	
			} else if ( typeof args.input == 'undefined' || typeof args.input.attr('no-save') == 'undefined' || !args.input.attr('no-save') ) {

				if ( typeof GLOBALunsavedValues != 'object' )
					GLOBALunsavedValues = {};

				if ( isBlock ) {

					if ( typeof GLOBALunsavedValues['blocks'] != 'object' )
						GLOBALunsavedValues['blocks'] = {};

					if ( typeof GLOBALunsavedValues['blocks'][blockID] != 'object' )
						GLOBALunsavedValues['blocks'][blockID] = {};

					if ( typeof GLOBALunsavedValues['blocks'][blockID]['settings'] != 'object' )
						GLOBALunsavedValues['blocks'][blockID]['settings'] = {};

					GLOBALunsavedValues['blocks'][blockID]['settings'][optionID] = optionValue;

				} else {

					if ( typeof GLOBALunsavedValues['options'] != 'object' )
						GLOBALunsavedValues['options'] = {};

					if ( typeof GLOBALunsavedValues['options'][optionGroup] != 'object' )
						GLOBALunsavedValues['options'][optionGroup] = {};

					GLOBALunsavedValues['options'][optionGroup][optionID] = optionValue;

				}


			}
			
 		/* If it's a block input then update the block content then run the callback */
		if ( isBlock ) {
			
			refreshBlockContent(blockID, callback, args);

		/* Else if it's not a block input (just a regular panel input), then run the callback right away. */
		} else {

			if ( typeof callback == 'function' )
				callback(args);	
					
		}
		
		
	}


		refreshBlockContent = function(blockID, callback, args) {

			/* Setup throttledFunction */
				var throttledFunction = function() {

					var blockElement = $i('.block[data-id="' + blockID + '"]');
					var newBlockSettings = GLOBALunsavedValues['blocks'][blockID]['settings'];
					
					/* Update the block content */
					loadBlockContent({
						blockElement: blockElement,
						blockSettings: {
							settings: newBlockSettings,
							dimensions: getBlockDimensions(blockElement),
							position: getBlockPosition(blockElement)
						},
						blockOrigin: blockID,
						blockDefault: {
							type: getBlockType(blockElement),
							id: 0,
							layout: Headway.currentLayout
						},
						callback: callback,
						callbackArgs: args
					});

				}

			/* Flood Control */
				if ( typeof updateBlockContentFloodTimeoutAfter != 'undefined' )
					clearTimeout(updateBlockContentFloodTimeoutAfter);

				if ( typeof updateBlockContentFloodTimeout == 'undefined' ) {

					throttledFunction.call();

					updateBlockContentFloodTimeout = setTimeout(function() {
						
						delete updateBlockContentFloodTimeout;
						
					}, 500);

				} else {

					updateBlockContentFloodTimeoutAfter = setTimeout(function() {

						throttledFunction.call();

						delete updateBlockContentFloodTimeoutAfter;

					}, 600);
					
				}
				
		}
	
	
	updateBlockPositionHidden = function(blockID, position) {
		
		if ( typeof blockID === 'string' && blockID.indexOf('block-') !== -1 )
			var blockID = blockID.replace('block-', '');

		var position = position.left + ',' + position.top;

		if ( typeof GLOBALunsavedValues != 'object' )
			GLOBALunsavedValues = {};

		if ( typeof GLOBALunsavedValues['blocks'] != 'object' )
			GLOBALunsavedValues['blocks'] = {};

		if ( typeof GLOBALunsavedValues['blocks'][blockID] != 'object' )
			GLOBALunsavedValues['blocks'][blockID] = {};

		GLOBALunsavedValues['blocks'][blockID]['position'] = position;
		
	}
	
	
	updateBlockDimensionsHidden = function(blockID, dimensions) {
		
		if ( typeof blockID === 'string' && blockID.indexOf('block-') !== -1 )
			var blockID = blockID.replace('block-', '');
		
		var dimensions = dimensions.width + ',' + dimensions.height;

		if ( typeof GLOBALunsavedValues != 'object' )
			GLOBALunsavedValues = {};

		if ( typeof GLOBALunsavedValues['blocks'] != 'object' )
			GLOBALunsavedValues['blocks'] = {};

		if ( typeof GLOBALunsavedValues['blocks'][blockID] != 'object' )
			GLOBALunsavedValues['blocks'][blockID] = {};

		GLOBALunsavedValues['blocks'][blockID]['dimensions'] = dimensions;
		
	}
	
	
	addDeleteBlockHidden = function(blockID) {
		
		if ( typeof blockID === 'string' && blockID.indexOf('block-') !== -1 )
			var blockID = blockID.replace('block-', '');

		if ( typeof GLOBALunsavedValues != 'object' )
			GLOBALunsavedValues = {};

		if ( typeof GLOBALunsavedValues['blocks'] != 'object' )
			GLOBALunsavedValues['blocks'] = {};

		if ( typeof GLOBALunsavedValues['blocks'][blockID] != 'object' )
			GLOBALunsavedValues['blocks'][blockID] = {};

		GLOBALunsavedValues['blocks'][blockID]['delete'] = true;
		
		delete GLOBALunsavedValues['blocks'][blockID]['new'];
		delete GLOBALunsavedValues['blocks'][blockID]['position'];
		delete GLOBALunsavedValues['blocks'][blockID]['dimensions'];
		
	}


	removeDeleteBlockHidden = function(id) {

		/* REVIEW */
		return;

		if ( typeof id === 'string' && id.indexOf('block-') !== -1 ) {
			var id = id.replace('block-', '');
		}
		
		var hidden_input_class = 'block-' + id + '-delete';

		$('div#visual-editor-hidden-inputs input.block-' + id + '-delete').attr('disabled', 'disabled');

		$('div#visual-editor-hidden-inputs input.block-' + id + '-new').attr('disabled', false);
		$('div#visual-editor-hidden-inputs input.block-' + id + '-position').attr('disabled', false);
		$('div#visual-editor-hidden-inputs input.block-' + id + '-dimensions').attr('disabled', false);

	}
	
	
	addNewBlockHidden = function(blockID, type) {
		
		if ( typeof blockID === 'string' && blockID.indexOf('block-') !== -1 )
			var blockID = blockID.replace('block-', '');

		if ( typeof GLOBALunsavedValues != 'object' )
			GLOBALunsavedValues = {};

		if ( typeof GLOBALunsavedValues['blocks'] != 'object' )
			GLOBALunsavedValues['blocks'] = {};

		if ( typeof GLOBALunsavedValues['blocks'][blockID] != 'object' )
			GLOBALunsavedValues['blocks'][blockID] = {};

		GLOBALunsavedValues['blocks'][blockID]['new'] = type;

		delete GLOBALunsavedValues['blocks'][blockID]['delete'];		
		
	}
	
	
	clearUnsavedValues = function() {

		delete GLOBALunsavedValues;
		
	}


	allowSaving = function() {
						
		/* If it's the layout mode and there no blocks on the page, then do not allow saving.  Also do not allow saving if there are overlapping blocks */
			if ( (Headway.mode == 'grid' && $i('.block').length === 0) || (typeof Headway.overlappingBlocks != 'undefined' && Headway.overlappingBlocks) )
				return disallowSaving();

		/* If saving is already allowed, don't do anything else	*/
			if ( typeof isSavingAllowed !== 'undefined' && isSavingAllowed === true )
				return;
				
		/* Put animation in timeout so the animation actually happens instead of a jump to the end.  Still haven't figured out why this happens. */
			setTimeout(function(){
				$('span#save-button').stop(true).show().animate({opacity: 1}, 350);
				$('span#preview-button').stop(true).show().animate({opacity: 1}, 350);
			}, 1);
		
		isSavingAllowed = true;
		
		/* Set reminder when trying to leave that there are changes. */
		prohibitVEClose();
		
		return true;
		
	}
	
	
	disallowSaving = function() {
		
		isSavingAllowed = false;
		
		setTimeout(function(){
			
			$('span#save-button').stop(true).animate({opacity: 0}, 350, function() {
				$(this).hide();
			});

			$('span#preview-button').stop(true).animate({opacity: 0}, 350, function() {
				$(this).hide();
			});
			
		}, 1);
		
		/* User can safely leave VE now--changes are saved.  As long as there are no overlapping blocks */
		if ( typeof Headway.overlappingBlocks == 'undefined' || !Headway.overlappingBlocks )
			allowVEClose();

		return true;
		
	}
/* END SAVE BUTTON FUNCTIONS */


/* UNDO/REDO FUNCTIONALITY */
	logHistory = function(args) {

		if ( typeof Headway.history == 'undefined' )
			Headway.history = [];

		/*
		 args = {
		 	description: '',
			action: function(){},
			actionReverse: function(){}
		 }
		*/

		Headway.history.push(args);
		Headway.historyStep = Headway.history.length - 1;

		Headway.history[Headway.historyStep].action.call();

		return true;

	}


	undo = function(event) {

		event.preventDefault();

		if ( typeof Headway.history == 'undefined' || typeof Headway.history[Headway.historyStep] == 'undefined' )
			return false;

		Headway.history[Headway.historyStep].actionReverse.call();

		Headway.historyStep = Headway.historyStep - 1;

		return true;

	}


	redo = function(event) {

		event.preventDefault();

		if ( typeof Headway.history == 'undefined' || typeof Headway.history[Headway.historyStep + 1] == 'undefined' )
			return false;

		Headway.history[Headway.historyStep + 1].action.call();

		Headway.historyStep = Headway.historyStep + 1;

		/* CLEAR HISTORY IF REDOING AFTER AN UNDO */
			if ( Headway.historyStep < Headway.history.length - 1 )
				clearHistory();

		return true;

	}


	clearHistory = function() {

		delete Headway.history;
		delete Headway.historyStep;

		return true;

	}
	/* MAYBE BUILD A HISTORY PANEL */
/* END UNDO/REDO FUNCTIONALITY */


/* COG FUNCTIONS */
	createCog = function(element, animate, append, context, opacity) {
		
		if ( $(element).length === 0 || $(element).find('.cog-container:visible').length )
			return false;
		
		var append = typeof append == 'undefined' ? false : append;
		var animate = typeof animate == 'undefined' ? false : animate;

		var cogString = '<div class="cog-container"><div class="cog-bottom-left"></div><div class="cog-top-right"></div></div>';
						
		if ( append ) {
			
			element.append(cogString);
						
		} else {
			
			element.html(cogString);
			
		}
		
		if ( typeof opacity != 'undefined' )
			element.find('.cog-container').css({opacity: opacity});
		
		if ( animate )
			animateCog(element, context);
			
		return true;
		
	}
	

	animateCog = function(element, context) {
		
		if ( typeof context == 'undefined' )
			context = $('body');
		
		var element = element.find('.cog-container');

		if ( typeof element.data('cog-interval') == 'number' )
			return;
				
		var bottomLeftCogAngle = 0;
		var topRightCogAngle = 0;

		element.data('cog-interval', setInterval(function() {

			var domElement = context.find(element);	
									
			//If the element no longer exists, then remove the interval for garbage disposal.
			if ( domElement.length === 0 || !domElement.is(':visible') ) {
				clearInterval(element.data('cog-interval'));
				return element.removeData('cog-interval');
			}
						
			var bottomLeftValue = 'rotate(' + bottomLeftCogAngle + 'deg)';		
			var topRightValue = 'rotate(' + topRightCogAngle + 'deg)';		

			element.find('div.cog-bottom-left').css({'-webkit-transform': bottomLeftValue, '-moz-transform': bottomLeftValue});
			element.find('div.cog-top-right').css({'-webkit-transform': topRightValue, '-moz-transform': topRightValue});
			
			bottomLeftCogAngle += 2;
			topRightCogAngle -= 3.01;

		}, 20));
		
	}
/* END COG FUNCTIONS */


/* MISCELLANEOUS FUNCTIONS */
	/* Simple rounding function */
	Number.prototype.toNearest = function(num){
		return Math.round(this/num)*num;
	}
	
	
	/* Nifty little function to repeat a string n times */
	String.prototype.repeatStr = function(n) {
		if ( n <= 0 ) {
			return '';
		}

	    return Array.prototype.join.call({length:n+1}, this);
	};
	
	
	/* Function to capitalize every word in string */
	String.prototype.capitalize = function(){
		return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
	}
	
	
	/* Change integer 1 and integer 0 to boolean values */
	Number.prototype.toBool = function(){
	
		if ( this === 1 ) {
			
			return true;
			
		} else if ( this === 0  ) {
			
			return false;
			
		} else {
			
			return null;
			
		}
		
	}
	
	
	/* Change string 1, 0, true, and false to boolean values */
	String.prototype.toBool = function(){
		
		/* I'm still confused about this, but this changes the weird object of letters into an array of words */
		var string = this.split(/\b/g);
		
		if ( string[0] === '1' || string[0] === 'true' ) {
			
			return true;
			
		} else if ( string[0] === '0' || string[0] === 'false' ) {
			
			return false;
			
		} else {
			
			return null;
			
		}
		
	}
/* END MISCELLANEOUS FUNCTIONS */
})(jQuery);

;/*
 * Headway Grid
 *
 * Copyright 2011-2013, Headway Themes, LLC
 *
 * http://headwaythemes.com
 */
 (function(e,t){e.widget("ui.grid",e.ui.mouse,{options:{columns:null,columnWidth:null,gutterWidth:null,yGridInterval:10,minBlockHeight:40,selectedBlocksContainerClass:"selected-blocks-container",defaultBlockClass:"block",defaultBlockContentClass:"block-content"},_create:function(){grid=this;if(!this.options.columns||!this.options.columnWidth||this.options.gutterWidth===null){return console.error("The grid widget was not supplied all of the required arguments.",this.element,this.options)}this.container=e(this.element).contents().find(this.options.container);this.contents=e(this.element).contents();this.focused=false;this.dragged=false;this.helper=e("<div class='ui-grid-helper block'></div>");this.offset=this.container.offset();this.container.addClass("ui-grid");this.container.disableSelection();this._initResizable(this.container.children("."+this.options.defaultBlockClass.replace(".","")));this._initDraggable(this.container.children("."+this.options.defaultBlockClass.replace(".","")));this._bindDoubleClick();this._bindIFrameMouse()},destroy:function(){this.element.removeClass("ui-grid ui-grid-disabled").removeData("grid").unbind(".grid");this._mouseDestroy();this.contents.unbind("mousedown",this._iFrameMouseDown);this.contents.unbind("mouseup",this._iFrameMouseUp);this.contents.unbind("mousemove",this._iFrameMouseMove);this.element.unbind("mouseleave",this._iFrameMouseUp);e.Widget.prototype.destroy.apply(this,arguments);return this},iframeElement:function(t){return e(this.element).contents().find(t)},resetDraggableResizable:function(){this._initResizable(this.container.children("."+this.options.defaultBlockClass.replace(".","")));this._initDraggable(this.container.children("."+this.options.defaultBlockClass.replace(".","")))},_bindIFrameMouse:function(){this.contents.bind("mousedown",this._iFrameMouseDown);this.contents.bind("mouseup",this._iFrameMouseUp);this.element.bind("mouseleave",this._iFrameMouseUp)},_iFrameMouseDown:function(t){if(t.which!==1)return false;grid=Headway.iframe.data("grid");grid.element.focus();grid.mouseEventDown=t;grid.mouseEventElement=e(grid.mouseEventDown.originalEvent.target);if(typeof grid.bindMouseMove==="undefined"){grid.contents.mousemove(grid._iFrameMouseMove);grid.bindMouseMove=true}if(grid.mouseEventElement.hasClass("ui-resizable-handle")){getBlock(grid.mouseEventElement).data("resizable")._mouseDown(t)}else if(getBlock(grid.mouseEventElement)&&getBlock(grid.mouseEventElement).hasClass(grid.options.defaultBlockClass.replace(".",""))){if(getBlock(grid.mouseEventElement).data("draggable")){getBlock(grid.mouseEventElement).data("draggable")._mouseDown(t)}}else if(grid.element.data("grid")&&(grid.mouseEventElement[0]==grid.container[0]||grid.mouseEventElement[0]==grid.container.parents("div.wrapper")[0])){$i(".blank-block").each(function(){removePanelTab("block-"+getBlockID(e(this)));e(this).remove()});grid.element.data("grid")._mouseDown(t)}},_iFrameMouseMove:function(t){if(typeof grid.mouseEventDown!=="undefined"){if(grid.mouseEventElement.hasClass("ui-resizable-handle")){getBlock(grid.mouseEventElement).data("resizable")._mouseMove(t)}else if(getBlock(grid.mouseEventElement)&&getBlock(grid.mouseEventElement).hasClass(grid.options.defaultBlockClass.replace(".",""))){if(getBlock(grid.mouseEventElement).data("draggable")){getBlock(grid.mouseEventElement).data("draggable")._mouseMove(t)}}else if(grid.element.data("grid")&&(grid.mouseEventElement[0]==grid.container[0]||grid.mouseEventElement[0]==grid.container.parents("div.wrapper")[0])){grid.element.data("grid")._mouseMove(t)}}else if(typeof doingHoverBlockToTop=="undefined"){doingHoverBlockToTop=true;setTimeout(function(){var n=[];var r=t.pageX;var i=t.pageY;$i(".block").each(function(){var t=e(this).offset().left;var s=e(this).offset().top;var o=t+e(this).width();var u=s+e(this).height();if(r<t||r>o)return;if(i<s||i>u)return;n.push(e(this))});n.sort(function(e,t){if(t.width()*t.height()>e.width()*e.height())return 1;return 0});grid.sendBlockToTop(e(n.pop()));delete doingHoverBlockToTop},50)}},_iFrameMouseUp:function(e){if(typeof grid.mouseEventDown!=="undefined"){var t=getBlock(grid.mouseEventElement);var n=grid.element;if(t&&typeof t.data("resizable")!="undefined")t.data("resizable")._mouseUp(e);if(t&&typeof t.data("draggable")!="undefined")t.data("draggable")._mouseUp(e);if(typeof n!="undefined"&&typeof n.data("grid")!="undefined")n.data("grid")._mouseUp(e);delete grid.mouseEventDown}},_mouseStart:function(t){if(!t||grid.container.hasClass("grouping-active"))return;this.mouseStartPosition=[t.pageX-this.container.offset().left,t.pageY-this.container.offset().top];this._trigger("start",t);e(this.container).append(this.helper);this.helper.css({width:this.options.columnWidth,height:0,top:0,left:0,display:"none"});addBlockDimensionsTooltip(this.helper);return true},_mouseDrag:function(t){if(!t||grid.container.hasClass("grouping-active"))return;this.dragged=true;var n=this.mouseStartPosition[0];var r=this.mouseStartPosition[1];var i=t.pageX-e(this.container).offset().left;var s=t.pageY-e(this.container).offset().top;if(n>i){var o=i;i=n;n=o}if(r>s){var o=s;s=r;r=o}var u=e(this.container).offset().left;var a=e(this.container).offset().top;var f=e(this.container).height();var l=e(this.container).width();if(i>=e(this.container).width()&&n>=e(this.container).width())return;if(s>=e(this.container).height()&&r>=e(this.container).height())return;if(n<0)n=0;if(r<0)r=0;if(s>f){s=f}var c=n.toNearest(this.options.columnWidth+this.options.gutterWidth);var h=r.toNearest(this.options.yGridInterval);var p=i.toNearest(this.options.columnWidth+this.options.gutterWidth)-c-this.options.gutterWidth;var d=s.toNearest(this.options.yGridInterval)-r.toNearest(this.options.yGridInterval);Headway.blankBlockOptions={display:"block",left:c,top:h,width:p,height:d};if(c+p>this.options.columns*(this.options.columnWidth+this.options.gutterWidth))Headway.blankBlockOptions.width=l-Headway.blankBlockOptions.left;if(t.pageY>a+f){Headway.blankBlockOptions.height=f-h}this.helper.css(Headway.blankBlockOptions);if(Headway.blankBlockOptions.height<this.options.minBlockHeight){this.helper.addClass("block-error")}else if(this.helper.hasClass("block-error")){this.helper.removeClass("block-error")}this.helper.qtip("option","hide.delay",1e4);this.helper.qtip("show");this.helper.qtip("reposition");this._trigger("drag",t);return false},_mouseStop:function(e){if(!e||grid.container.hasClass("grouping-active"))return;this.dragged=false;this._trigger("stop",e);Headway.blankBlockOptions={width:this.helper.width(),height:this.helper.height(),top:this.helper.position().top,left:this.helper.position().left};this.helper.remove();if(Headway.blankBlockOptions.width<this.options.columnWidth||Headway.blankBlockOptions.height<this.options.minBlockHeight)return false;if(Headway.blankBlockOptions.left+Headway.blankBlockOptions.width>this.options.columns*(this.options.columnWidth+this.options.gutterWidth)+20){var t=Headway.blankBlockOptions.left+Headway.blankBlockOptions.width-(this.options.columns*(this.options.columnWidth+this.options.gutterWidth)-20);Headway.blankBlockOptions.width=Headway.blankBlockOptions.width-t}if(Headway.blankBlockOptions.width<this.options.columnWidth)Headway.blankBlockOptions.width=this.options.columnWidth;this.addBlankBlock(Headway.blankBlockOptions);this.mouseStartPosition=false;return false},_mouseUp:function(t){if(!t||grid.container.hasClass("grouping-active"))return;grid=this;e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(t.target==this._mouseDownEvent.target){e.data(t.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(t)}return false},_initResizable:function(t){grid=this;if(typeof t=="string"){t=e(t)}if(typeof t.resizable==="function"){t.resizable("destroy")}t.resizable({handles:"n, e, s, w, ne, se, sw, nw",grid:[this.options.columnWidth+this.options.gutterWidth,this.options.yGridInterval],containment:this.container,minHeight:this.options.minBlockHeight,maxWidth:this.options.columns*(this.options.columnWidth+this.options.gutterWidth),start:this._resizableStart,resize:this._resizableResize,stop:this._resizableStop})},_resizableStart:function(e,t){var n=getBlock(t.element);var r=parseInt(n.css("minHeight").replace("px",""));var i=n.height();if(r<=i){n.css("minHeight",0)}n.addClass("block-hover");n.qtip("option","hide.delay",1e4);n.qtip("show");n.qtip("reposition")},_resizableResize:function(e,t){var n=getBlock(t.element);n.qtip("show");n.qtip("reposition")},_resizableStop:function(e,t){var n=getBlock(t.element);var r=Math.ceil(n.width()/(grid.options.columnWidth+grid.options.gutterWidth));var i=Math.ceil(n.position().left/(grid.options.columnWidth+grid.options.gutterWidth));var s=getBlockDimensionsPixels(n).height;var o=getBlockGridWidth(n);var u=getBlockGridLeft(n);var a=t.originalSize.height;var f=function(){n.css("width","");n.css("left","");updateBlockDimensionsHidden(getBlockID(n),getBlockDimensions(n));updateBlockPositionHidden(getBlockID(n),getBlockPosition(n));blockIntersectCheck(n)?allowSaving():disallowSaving();n.qtip("option","hide.delay",25);n.qtip("show");n.qtip("reposition");n.removeClass("block-hover")};logHistory({description:"Resized block #"+getBlockID(n),action:function(){n.removeClass("grid-width-"+o);n.addClass("grid-width-"+r);n.removeClass("grid-left-"+u);n.addClass("grid-left-"+i);n.height(s);n.attr({"data-grid-left":i,"data-grid-top":getBlockPositionPixels(n).top,"data-width":r,"data-height":s});f()},actionReverse:function(){n.removeClass("grid-width-"+r);n.addClass("grid-width-"+o);n.removeClass("grid-left-"+i);n.addClass("grid-left-"+u);n.height(a);n.attr({"data-grid-left":u,"data-grid-top":t.originalPosition.top,"data-width":o,"data-height":a});f()}})},_initDraggable:function(t){if(typeof t=="string"){t=e(t)}if(typeof t.draggable==="function"){t.draggable("destroy")}grid=this;t.css("cursor","move").draggable({grid:[this.options.columnWidth+this.options.gutterWidth,this.options.yGridInterval],containment:this.iframeElement(this.options.container),scrollSpeed:40,start:this._draggableStart,stop:this._draggableStop,drag:this._draggableDrag})},_draggableStart:function(t,n){if(e(t.originalEvent.target).parents(".block-controls").length===1||e(t.originalEvent.target).parents(".block-info").length===1){e(this).draggable("stop");return false}e(this).data("dragging",true);blockGroupingOriginals={};blockGroupingOriginals[getBlockID(this)]={top:getBlockPositionPixels(this).top,left:getBlockPositionPixels(this).left};if(e(this).hasClass("grouped-block")){grid.container.find(".grouped-block").each(function(n){if(t.srcElement==this)return;blockGroupingOriginals[getBlockID(this)]={top:parseInt(e(this).css("top").replace("px",""))||0,left:parseInt(e(this).css("left").replace("px",""))||0}});grid.sendBlockToTop(grid.container.find(".grouped-block"))}else{grid.container.removeClass("grouping-active");grid.container.find(".grouped-block").removeClass("grouped-block");hideTaskNotification()}beginTop=e(this).offset().top;beginLeft=e(this).offset().left;e(getBlock(n.helper)).qtip("hide")},_draggableDrag:function(t,n){e(getBlock(n.helper)).qtip("hide");if(e(this).hasClass("grouped-block")){var r=e(this).offset().top-beginTop;var i=e(this).offset().left-beginLeft;var s=[];grid.container.find(".grouped-block").each(function(n){if(t.srcElement==this)return;s.push({block:e(this),top:blockGroupingOriginals[getBlockID(this)].top+r,left:blockGroupingOriginals[getBlockID(this)].left+i})});var o=true;var u=true;var a=0;var f=0;var l=0;e.each(s,function(e,t){if(blockGroupingOriginals[getBlockID(t.block)].top+r<0){o=false;a=Math.abs(blockGroupingOriginals[getBlockID(t.block)].top+r)}if(blockGroupingOriginals[getBlockID(t.block)].left+i<0){u=false;f=Math.abs(blockGroupingOriginals[getBlockID(t.block)].left+i)}if(t.block.width()+blockGroupingOriginals[getBlockID(t.block)].left+i>$i(".grid-container").width()){u=false;f=-(blockGroupingOriginals[getBlockID(t.block)].left+i)}});e.each(s,function(e,t){if(o)t.block.css("top",t.top);if(u)t.block.css("left",t.left)});if(!o||!u){e(this).data("draggableOverflow",{top:a,left:f})}else{e(this).removeData("draggableOverflow")}}else{grid.container.find(".grouped-block").removeClass("grouped-block")}},_draggableStop:function(t,n){e(this).data("dragging",false);if(grid.container.find(".grouped-block").length){var r=grid.container.find(".grouped-block")}else{var r=getBlock(n.helper)}var i=[];if(r.length===1){var s="Moved block #"+getBlockID(block)}else{var s="Mass Moved Blocks: "}r.each(function(){var t=0;var n=0;if(typeof e(this).data("draggableOverflow")!="undefined"){var t=e(this).data("draggableOverflow").left;var n=e(this).data("draggableOverflow").top;e(this).removeData("draggableOverflow")}i.push({block:e(this),newGridLeft:Math.ceil((e(this).position().left+t)/(grid.options.columnWidth+grid.options.gutterWidth)),oldGridLeft:getBlockGridLeft(e(this)),newGridTop:(getBlockPositionPixels(e(this)).top+n).toNearest(10),oldGridTop:blockGroupingOriginals[getBlockID(this)].top.toNearest(10)});if(r.length>1)s+="#"+getBlockID(this)+", "});if(r.length>1)s=s.substring(0,s.length-2);var o=function(e,t){var n=e.block;var r=e.oldGridLeft;var i=e.oldGridTop;var s=e.newGridLeft;var o=e.newGridTop;if(t){r=e.newGridLeft;i=e.newGridTop;s=e.oldGridLeft;o=e.oldGridTop}n.removeClass("grid-left-"+r);n.addClass("grid-left-"+s);n.css("top",o);n.css("left","");n.attr({"data-grid-left":s,"data-grid-top":o});updateBlockPositionHidden(getBlockID(n),getBlockPosition(n));if(blockIntersectCheck(n)){allowSaving()}else{disallowSaving()}};logHistory({description:s,action:function(){jQuery.each(i,function(e,t){o(t,false)})},actionReverse:function(){jQuery.each(i,function(e,t){o(t,true)})}});e(document).focus();e(this).data("hoverWaitTimeout",setTimeout(function(){e(getBlock(n.helper)).qtip("reposition");e(getBlock(n.helper)).qtip("show")},300))},_bindDoubleClick:function(){grid=this;this.container.delegate("."+this.options.defaultBlockClass.replace(".",""),"dblclick",function(t){if(e(t.target).parents(".block-info").length==1||e(t.target).parents(".block-controls").length==1)return false;if(e(this).hasClass("grouped-block")&&grid.container.find(".grouped-block").length===1){e(this).removeClass("grouped-block");grid.container.removeClass("grouping-active");hideTaskNotification()}else if(e(this).hasClass("grouped-block")){e(this).removeClass("grouped-block")}else{e(this).addClass("grouped-block");grid.container.addClass("grouping-active");showTaskNotification("Mass Block Selection Mode",function(){$i(".grouped-block").removeClass("grouped-block");Headway.iframe.data("grid").container.removeClass("grouping-active")})}})},addBlankBlock:function(t,n,r){var i={top:0,left:0,width:140,height:this.options.minBlockHeight,id:null};var t=e.extend({},i,t);if(typeof n=="undefined")var n=true;if(typeof r=="undefined")var r=false;var s=t.id==false||t.id==null?getAvailableBlockID():t.id;if(typeof s==="undefined"||!s)return false;Headway.blankBlock=e('<div><div class="block-content-fade block-content"></div><h3 class="block-type" style="display: none;"><span></span></h3></div>').attr("data-id",s).data("id",s).attr("id","block-"+s).addClass(this.options.defaultBlockClass.replace(".",""));var o="This is the ID for the block.  The ID of the block is displayed in the WordPress admin panel if it is a widget area or navigation block.  Also, this can be used with advanced developer functions.";var u="Click to change the block type.";var a="Show the options for this block.";var f="Delete this block.";Headway.blankBlock.addClass("blank-block");Headway.blankBlock.append('			<div class="block-info">				<span class="id tooltip" title="'+o+'">'+s+'</span>				<span class="type type-unknown tooltip" title="'+u+'">Unknown</span>			</div>');Headway.blankBlock.append('			<div class="block-controls">				<span class="options tooltip" title="'+a+'">Options</span>				<span class="delete tooltip" title="'+f+'">Delete</span>			</div>');var l=Headway.blankBlock;l.css({width:parseInt(t.width),height:parseInt(t.height),top:parseInt(t.top),left:parseInt(t.left),position:"absolute",visibility:"hidden"});l.appendTo(this.container);if(n){var c=String(l.width()).replace("px","");var h=Math.ceil(c/(grid.options.columnWidth+grid.options.gutterWidth));var p=String(l.position().left).replace("px","");var d=Math.ceil(p/(grid.options.columnWidth+grid.options.gutterWidth))}else{h=parseInt(t.width);d=parseInt(t.left)}l.attr({"data-width":h,"data-height":parseInt(t.height),"data-grid-top":parseInt(t.top),"data-grid-left":d});l.css("width","").addClass("grid-width-"+h);l.css("left","").addClass("grid-left-"+d);l.css("visibility","visible");this._initResizable(l);this._initDraggable(l);blockIntersectCheck(l);if(r==false){setupTooltips("iframe");openBlockTypeSelector(e(Headway.blankBlock))}return l},setupBlankBlock:function(e,t){if(typeof t=="undefined")var t=false;var n=getBlockTypeIcon(e,true);Headway.blankBlock.removeClass("blank-block");Headway.blankBlock.addClass("block-type-"+e);Headway.blankBlock.find(".block-info span.type").attr("class","").addClass("type").addClass("type-"+e).html(getBlockTypeNice(e)).css("backgroundImage","url("+n+")");loadBlockContent({blockElement:Headway.blankBlock,blockOrigin:{type:e,id:0,layout:Headway.currentLayout},blockSettings:{dimensions:getBlockDimensions(Headway.blankBlock),position:getBlockPosition(Headway.blankBlock)}});if(getBlockTypeObject(e)["fixed-height"]===true){Headway.blankBlock.addClass("block-fixed-height")}else{Headway.blankBlock.addClass("block-fluid-height")}if(!getBlockTypeObject(e)["show-content-in-grid"])Headway.blankBlock.addClass("hide-content-in-grid");Headway.blankBlock.find("h3.block-type span").text(getBlockTypeNice(e));Headway.blankBlock.find("h3.block-type").show();addNewBlockHidden(getBlockID(Headway.blankBlock),getBlockType(Headway.blankBlock));updateBlockPositionHidden(getBlockID(Headway.blankBlock),getBlockPosition(Headway.blankBlock));updateBlockDimensionsHidden(getBlockID(Headway.blankBlock),getBlockDimensions(Headway.blankBlock));if(blockIntersectCheck(Headway.blankBlock)){allowSaving()}else{disallowSaving()}var r=Headway.blankBlock;delete Headway.blankBlock;delete Headway.blankBlockOptions;if(t==false){setupTooltips("iframe")}return r},addBlock:function(t){var n={top:0,left:0,width:1,height:this.options.minBlockHeight,type:null,id:null,settings:[]};var t=e.extend({},n,t);if(this.addBlankBlock(t,false,true)){var r=this.setupBlankBlock(t.type,true);var i=getBlockID(r);e.each(t.settings,function(e,t){updatePanelInputHidden({id:e,value:t,group:"general",isBlock:"true",blockID:i});if(e=="mirror-block"){updateBlockMirrorStatus(false,r,t,false)}})}else{return false}},sendBlockToTop:function(e){if(typeof e=="string")var e=getBlock(e);if(!e||!e.length)return;$i(".block").css("zIndex",1);e.css("zIndex",2)}});e.extend(e.ui.grid,{version:"0.7"})})(jQuery)

;(function($) {
	
visualEditorModeGrid = function() {				
		
	
	this.init = function() {
				
		this.bindPreviewButton();
		this.bindGridWizard();
				
	}	
		
				
	this.iframeCallback = function() {
								
		Headway.iframe.grid('destroy');
		
		var columns = Headway.gridColumns;
		var columnWidth = parseInt($('div#input-column-width input').val());
		var gutterWidth = parseInt($('div#input-gutter-width input').val());	
						
		Headway.iframe.grid({
			columns: columns,
			container: 'div.grid-container',
			defaultBlockClass: 'block',
			columnWidth: columnWidth,
			gutterWidth: gutterWidth
		});
		
		addBlockControls(true, true);

		//Load block content
		$i('.block:not(.hide-content-in-grid)').each(function() {

			loadBlockContent({
				blockElement: $(this),
				blockOrigin: getBlockID($(this))
			});

		});
		
		gridStylesheet = new ITStylesheet({document: Headway.iframe.contents()[0], href: Headway.homeURL + '/?headway-trigger=compiler&file=ve-iframe-grid-dynamic'}, 'find');
		
		//Update the grid width input in accordance to the sliders
		$('div#input-grid-width input').val( ( columnWidth * columns + ((columns - 1) * gutterWidth) ) );
		
		//Grid length buttons
		$i('span#grid-height-decrease').click(function() {
						
			var existingHeight = $i('div.grid-container').height();	
			var newHeight = existingHeight - 100;
						
			if ( existingHeight == 800 )
				return false;
			
			if ( newHeight <= 800 )
				$(this).addClass('grid-height-button-disabled');
			
			gridStylesheet.update_rule('div#grid div.grid-column', {height: newHeight + 'px'});			
			gridStylesheet.update_rule('div.grid-container', {height: newHeight + 'px'});
			
			//Send the new grid height to the database
			$.post(Headway.ajaxURL, {
				security: Headway.security,
				action: 'headway_visual_editor',
				method: 'change_grid_height',
				grid_height: newHeight
			});
			
		});
		
		$i('span#grid-height-increase').click(function() {
			
			var existingHeight = $i('div.grid-container').height();	
			var newHeight = existingHeight + 100;
			
			gridStylesheet.update_rule('div#grid div.grid-column', {height: newHeight + 'px'});			
			gridStylesheet.update_rule('div.grid-container', {height: newHeight + 'px'});
			
			$i('span#grid-height-decrease').removeClass('grid-height-button-disabled');
			
			//Send the new grid height to the database
			$.post(Headway.ajaxURL, {
				security: Headway.security,
				action: 'headway_visual_editor',
				method: 'change_grid_height',
				grid_height: newHeight
			});
			
		});
		
		//Reset preview button if necessary
		if ( $('span#preview-button').hasClass('preview-active') )
			$('span#preview-button').trigger('click');
		
	}
	
	
	this.bindPreviewButton = function() {
		
		/* Preview Button */
		$('span#preview-button').bind('click', function() {

			if ( !$(this).hasClass('preview-active') ) {

				iframeURL = Headway.homeURL 
					+ '?ve-iframe=true&ve-iframe-layout=' 
					+ Headway.currentLayout 
					+ '&preview=true'
					+ '&unsaved=' + encodeURIComponent($.param(GLOBALunsavedValues))
					+ '&rand=' + Math.floor(Math.random()*100000001);

				/* Show loading indicator */
					$(this).text('Loading...');

					createCog($('div#iframe-loading-overlay'), true);

					$('div#iframe-loading-overlay').fadeIn(500);

				/* Load preview */
					$('iframe#preview').src(iframeURL, function() {

						Headway.iframe.fadeOut(300);
						$('iframe#preview').fadeIn(300);

						$('div#iframe-loading-overlay').fadeOut(300).html('');
						$('span#preview-button').addClass('preview-active').text('Show Grid');

					});				

			} else {

				$('iframe#preview').fadeOut(300);
				Headway.iframe.fadeIn(300);

				$(this).removeClass('preview-active').text('Preview');

			}

		});
		
	}
	

	this.bindGridWizard = function() {
		
		/* Presets */
			var gridWizardPresets = {
				'right-sidebar': [
					{
						top: 0,
						left: 0,
						width: 24,
						height: 130,
						type: 'header'
					},
				
					{
						top: 140,
						left: 0,
						width: 24,
						height: 40,
						type: 'navigation'
					},
				
					{
						top: 190,
						left: 0,
						width: 18,
						height: 320,
						type: 'content'
					},
				
					{
						top: 190,
						left: 18,
						width: 6,
						height: 270,
						type: 'widget-area',
						mirroringOrigin: 'sidebar-1'
					},
				
					{
						top: 520,
						left: 0,
						width: 24,
						height: 70,
						type: 'footer'
					},
				],
			
				'left-sidebar': [
					{
						top: 0,
						left: 0,
						width: 24,
						height: 130,
						type: 'header'
					},
				
					{
						top: 140,
						left: 0,
						width: 24,
						height: 40,
						type: 'navigation'
					},
				
					{
						top: 190,
						left: 0,
						width: 6,
						height: 270,
						type: 'widget-area',
						mirroringOrigin: 'sidebar-1'
					},
				
					{
						top: 190,
						left: 6,
						width: 18,
						height: 320,
						type: 'content'
					},
				
					{
						top: 520,
						left: 0,
						width: 24,
						height: 70,
						type: 'footer'
					}
				],
			
				'two-right': [
					{
						top: 0,
						left: 0,
						width: 24,
						height: 130,
						type: 'header'
					},
				
					{
						top: 140,
						left: 0,
						width: 24,
						height: 40,
						type: 'navigation'
					},
				
					{
						top: 190,
						left: 0,
						width: 16,
						height: 320,
						type: 'content'
					},
				
					{
						top: 190,
						left: 16,
						width: 4,
						height: 270,
						type: 'widget-area',
						mirroringOrigin: 'sidebar-1'
					},
				
					{
						top: 190,
						left: 20,
						width: 4,
						height: 270,
						type: 'widget-area',
						mirroringOrigin: 'sidebar-2'
					},
				
					{
						top: 520,
						left: 0,
						width: 24,
						height: 70,
						type: 'footer'
					}
				],
			
				'two-both': [
					{
						top: 0,
						left: 0,
						width: 24,
						height: 130,
						type: 'header'
					},
				
					{
						top: 140,
						left: 0,
						width: 24,
						height: 40,
						type: 'navigation'
					},
				
					{
						top: 190,
						left: 0,
						width: 4,
						height: 270,
						type: 'widget-area',
						mirroringOrigin: 'sidebar-1'
					},
				
					{
						top: 190,
						left: 4,
						width: 16,
						height: 320,
						type: 'content'
					},
				
					{
						top: 190,
						left: 20,
						width: 4,
						height: 270,
						type: 'widget-area',
						mirroringOrigin: 'sidebar-2'
					},
				
					{
						top: 520,
						left: 0,
						width: 24,
						height: 70,
						type: 'footer'
					}
				],
			
				'all-content': [
					{
						top: 0,
						left: 0,
						width: 24,
						height: 130,
						type: 'header'
					},
				
					{
						top: 140,
						left: 0,
						width: 24,
						height: 40,
						type: 'navigation'
					},
				
					{
						top: 190,
						left: 0,
						width: 24,
						height: 320,
						type: 'content'
					},
				
					{
						top: 520,
						left: 0,
						width: 24,
						height: 70,
						type: 'footer'
					}
				]
			}


			$('div#boxes').delegate('div#box-grid-wizard span.layout-preset', 'mousedown', function() {
			
				$('div#box-grid-wizard span.layout-preset-selected').removeClass('layout-preset-selected');
				$(this).addClass('layout-preset-selected');
			
			});


			$('div#boxes').delegate('span#grid-wizard-button-preset-next', 'click', function() {
			
				/* Populate the step 2 panel with the proper select boxes */
				var selectedPreset = $('div#box-grid-wizard span.layout-preset-selected').attr('id').replace('layout-', '');
								
				switch ( selectedPreset ) {
					
					case 'right-sidebar':
					
						$('div#grid-wizard-presets-mirroring-select-sidebar-1').show();
						$('div#grid-wizard-presets-mirroring-select-sidebar-2').hide();
						
						$('div#grid-wizard-presets-mirroring-select-sidebar-1 h5').text('Right Sidebar');
						
					break;
					
					
					case 'left-sidebar':
					
						$('div#grid-wizard-presets-mirroring-select-sidebar-1').show();
						$('div#grid-wizard-presets-mirroring-select-sidebar-2').hide();
						
						$('div#grid-wizard-presets-mirroring-select-sidebar-1 h5').text('Left Sidebar');
					
					break;
					
					
					case 'two-right':
					
						$('div#grid-wizard-presets-mirroring-select-sidebar-1').show();
						$('div#grid-wizard-presets-mirroring-select-sidebar-2').show();
						
						$('div#grid-wizard-presets-mirroring-select-sidebar-1 h5').text('Left Sidebar');
						$('div#grid-wizard-presets-mirroring-select-sidebar-2 h5').text('Right Sidebar');
					
					break;
					
					
					case 'two-both':
					
						$('div#grid-wizard-presets-mirroring-select-sidebar-1').show();
						$('div#grid-wizard-presets-mirroring-select-sidebar-2').show();
						
						$('div#grid-wizard-presets-mirroring-select-sidebar-1 h5').text('Left Sidebar');
						$('div#grid-wizard-presets-mirroring-select-sidebar-2 h5').text('Right Sidebar');
					
					break;
					
					
					case 'all-content':
					
						$('div#grid-wizard-presets-mirroring-select-sidebar-1').hide();
						$('div#grid-wizard-presets-mirroring-select-sidebar-2').hide();
					
					break;
					
				}
				
			
				/* Change the buttons around */
				$(this).hide(); //Next button
				
				$('span#grid-wizard-button-preset-previous').show();
				$('span#grid-wizard-button-preset-use-preset').show(); 
				
				
				/* Change the content that's being displayed */
				$('div#grid-wizard-presets-step-1').hide();
				$('div#grid-wizard-presets-step-2').show();
				
			});
			
			
			$('div#boxes').delegate('span#grid-wizard-button-preset-previous', 'click', function() {
			
				/* Change the buttons around */
				$(this).hide(); //Previous button
				$('span#grid-wizard-button-preset-use-preset').hide();
				
				$('span#grid-wizard-button-preset-next').show();
				
				
				/* Change the content that's being displayed */
				$('div#grid-wizard-presets-step-2').hide();
				$('div#grid-wizard-presets-step-1').show();
				
			});
			

			$('div#boxes').delegate('span#grid-wizard-button-preset-use-preset', 'click', function() {
			
				var selectedPreset = $('div#box-grid-wizard span.layout-preset-selected').attr('id').replace('layout-', '');
			
				//Delete any blocks that are on the grid already
				$i('.block').each(function() {
				
					deleteBlock(this);
				
				});
			
				//Put the new blocks on the layout
				var blockIDBatch = getAvailableBlockIDBatch(gridWizardPresets[selectedPreset].length);
						
				$.each(gridWizardPresets[selectedPreset], function() {
								
					var addBlockArgs = $.extend({}, this, {
						id: blockIDBatch[0]
					});
					
					delete addBlockArgs.mirroringOrigin;
		
					/* Handle Mirroring */
					var mirroringOrigin = (typeof this.mirroringOrigin != 'undefined') ? this.mirroringOrigin : this.type;
					var mirroringSelectVal = $('div#grid-wizard-presets-mirroring-select-' + mirroringOrigin + ' select').val();
																				
					if ( mirroringSelectVal !== '' ) {
						
						addBlockArgs.settings = {}
						addBlockArgs.settings['mirror-block'] = mirroringSelectVal;
											
					}

					/* Add the block to the grid */
					grid.addBlock(addBlockArgs);
					
					/* Remove the ID that was just used from the patch */
					blockIDBatch.splice(0, 1);
				
				});
				
				/* Force the available block ID to be refreshed */
				getAvailableBlockID();
			
				return closeBox('grid-wizard');
			
			});
		/* End Presets */


		/* Layout Cloning */
			$('div#boxes').delegate('span#grid-wizard-button-clone-page', 'click', function() {
				
				var layoutToClone = $('select#grid-wizard-pages-to-clone').val();
				
				if ( layoutToClone === '' )
					return alert('Please select a page to clone.');
					
				if ( $(this).hasClass('button-depressed') )
					return;
					
				$(this).text('Cloning...').addClass('button-depressed').css('cursor', 'default');
			
				var request = $.ajax(Headway.ajaxURL, {
					type: 'POST',
					async: true,
					dataType: 'jsonp',
					data: {
						security: Headway.security,
						action: 'headway_visual_editor',
						method: 'get_layout_blocks_in_json',
						layout: layoutToClone
					},
					success: function(data, textStatus) {
						
						if ( textStatus == false )
							return false;

						//Delete any blocks that are on the grid already
						$i('.block').each(function() {

							deleteBlock(this);

						});

						var blocks = data;
						var numberOfBlocks = Object.keys(blocks).length;
						var blockIDBatch = getAvailableBlockIDBatch(numberOfBlocks);

						$.each(blocks, function() {
														
							var blockToMirror = this.settings['mirror-block'] ? this.settings['mirror-block'] : this.id;

							var addBlockArgs = {
								id: blockIDBatch[0],
								type: this.type,
								top: this.position.top,
								left: this.position.left,
								width: this.dimensions.width,
								height: this.dimensions.height,
								settings: $.extend({}, this.settings, {'mirror-block': blockToMirror})
							};	

							grid.addBlock(addBlockArgs);

							//Remove the ID that was just used from the patch
							blockIDBatch.splice(0, 1);

						});

						setupTooltips('iframe');

						//Force the available block ID to be refreshed
						getAvailableBlockID();
						
						return closeBox('grid-wizard');
						
					}
				});
								
			});
		/* End Layout Cloning */
		
		
		/* Template Assigning */
			$('div#boxes').delegate('span#grid-wizard-button-assign-template', 'click', function() {
				
				var templateToAssign = $('select#grid-wizard-assign-template').val().replace('template-' , '');
				
				if ( templateToAssign === '' )
					return alert('Please select a template to assign.');
				
				//Do the AJAX request to assign the template
				$.post(Headway.ajaxURL, {
					security: Headway.security,
					action: 'headway_visual_editor',
					method: 'assign_template',
					template: templateToAssign,
					layout: Headway.currentLayout
				}, function(response) {

					if ( typeof response === 'undefined' || response == 'failure' ) {
						showNotification('Error: Could not assign template.', 6000, true);

						return false;
					}

					$('div#layout-selector li.layout-selected').removeClass('layout-item-customized');
					$('div#layout-selector li.layout-selected').addClass('layout-item-template-used');

					$('div#layout-selector li.layout-selected span.status-template').text(response);

					//Reload iframe

						//Add loading indicator
						createCog($('div#iframe-loading-overlay'), true);

						$('div#iframe-loading-overlay').fadeIn(500);
						//End loading indicator stuff

						//Change title to loading
						changeTitle('Visual Editor: Assigning Template');
						startTitleActivityIndicator();

						Headway.currentLayoutTemplate = 'template-' + templateToAssign;

						//Reload iframe and new layout
						headwayIframeLoadNotification = 'Template assigned successfully!';

						loadIframe(Headway.instance.iframeCallback);

					//End reload iframe

				});

				layoutSelectorRevertCheck();

				return closeBox('grid-wizard');
				
			});
		/* End Template Assigning */

		
		/* Empty Grid */
			$('div#boxes').delegate('span.grid-wizard-use-empty-grid', 'click', function() {
			
				//Empty the grid out
				$i('.block').each(function() {
				
					deleteBlock(this);
				
				});
			
				closeBox('grid-wizard');
			
			});
		/* End Empty Grid */


		/* Layout Import/Export */
			/* Layout Import */
				initiateLayoutImport = function(input) {

					var layoutChooser = input;

					if ( !layoutChooser.val() )
						return alert('You must select a Headway layout file before importing.');

					var layoutFile = layoutChooser.get(0).files[0];

					if ( layoutFile && typeof layoutFile.name != 'undefined' && typeof layoutFile.type != 'undefined' ) {

						var layoutReader = new FileReader();

						layoutReader.onload = function(e) { 

							var contents = e.target.result;
							var layout = JSON.parse(contents);

							/* Check to be sure that the JSON file is a layout */
								if ( layout['data-type'] != 'layout' )
									return alert('Cannot load layout file.  Please insure that the selected file is a valid Headway layout export.');

							if ( typeof layout['image-definitions'] != 'undefined' && Object.keys(layout['image-definitions']).length ) {

								showNotification('Currently importing images.', 10000);

								$.post(Headway.ajaxURL, {
									security: Headway.security,
									action: 'headway_visual_editor',
									method: 'import_images',
									importFile: layout
								}, function(response) {

									var layout = response;

									/* If there's an error when sideloading images, then hault import. */
									if ( typeof layout['error'] != 'undefined' )
										return alert('Error while importing images for layout: ' + layout['error']);

									importLayout(layout);

								});

							} else {

								importLayout(layout);

							}

						}

						layoutReader.readAsText(layoutFile);

					} else {

						alert('Cannot load layout file.  Please insure that the selected file is a valid Headway layout export.');

					}

				}


				importLayout = function(layout) {

					/* Import all blocks */
						/* Delete any blocks that are on the grid already */
						$i('.block').each(function() {

							deleteBlock(this);

						});

						var blocks = layout['blocks'];
						var numberOfBlocks = Object.keys(blocks).length;
						var blockIDBatch = getAvailableBlockIDBatch(numberOfBlocks);

						$.each(blocks, function() {
														
							var addBlockArgs = {
								id: blockIDBatch[0],
								type: this.type,
								top: this.position.top,
								left: this.position.left,
								width: this.dimensions.width,
								height: this.dimensions.height,
								settings: this.settings
							};	

							grid.addBlock(addBlockArgs);

							/* Remove the ID that was just used from the patch */
							blockIDBatch.splice(0, 1);

						});

						setupTooltips('iframe');

						/* Force the available block ID to be refreshed */
						getAvailableBlockID();

					/* Finish Up */
						showNotification('Layout successfully imported.<br /><br />Remember to save if you wish to keep the layout.', 10000);

						closeBox('grid-wizard');

						allowSaving();

					return true;

				}


				$('div#boxes').delegate('#grid-wizard-import-select-file', 'click', function() {
				
					$(this).siblings('input[type="file"]').trigger('click');
				
				});


					$('div#boxes').delegate('#grid-wizard-import input[type="file"]', 'change', function(event) {
							
						if ( event.target.files[0].name.split('.').slice(-1)[0] != 'json' ) {

							$(this).val(null);
							return alert('Invalid layout file.  Please be sure that the layout is a valid JSON formatted file.');

						}

						initiateLayoutImport($(this));
						
					});

			/* Layout Export */
				$('div#boxes').delegate('#grid-wizard-export-download-file', 'click', function() {
					
					var params = {
						'action': 'headway_visual_editor',
						'security': Headway.security,
						'method': 'export_layout',
						'layout': Headway.currentLayout
					}

					var exportURL = Headway.ajaxURL + '?' + $.param(params);

					return window.open(exportURL);
				
					closeBox('grid-wizard');
				
				});
		/* End Import/Export */


	}
	

}


/* GRID INPUT CALLBACKS */
	gridInputCallbackColumnWidth = function(value) {

		var iframe = Headway.iframe;

		var gutterWidth = parseInt($('div#input-gutter-width input').val());
		var columns = 24;

		var oldColumnWidth = $i('.grid-width-1').width();
		var oldGutterWidth = $i('.grid-width-1').css('marginLeft').replace('px', '') * 2;

		//Modify every grid class
		for ( i = 1; i <= columns; i++ ) {

			var width = value * i + ((i - 1) * gutterWidth);
			var left = (value + gutterWidth) * i;

			gridStylesheet.update_rule('.grid-width-' + i, {'width': width + 'px'});
			gridStylesheet.update_rule('.grid-left-' + i, {'left': left + 'px'});

		}

		//Calculate full content width by getting largest grid numbers width
		var contentWidth = value * columns + ((columns - 1) * gutterWidth);

		//Update wrapper input and wrapper itself
		$('div#input-grid-width input').val(contentWidth);

		gridStylesheet.update_rule('div.wrapper', {width: contentWidth + 'px'});
		gridStylesheet.update_rule('div.grid-container', {width: (contentWidth + 1) + 'px'});

		//Update layout widget options
		iframe.grid('option', 'columnWidth', value);
		iframe.grid('option', 'minWidth', value);
		iframe.grid('option', 'gutterWidth', gutterWidth);

		//Reset draggable and resizables
		iframe.grid('resetDraggableResizable');

	}


	gridInputCallbackGutterWidth = function(value) {

		var iframe = Headway.iframe;

		var columnWidth = parseInt($('div#input-column-width input').val());
		var columns = 24;

		var oldColumnWidth = $i('.grid-width-1').width();
		var oldGutterWidth = $i('.grid-width-1').css('marginLeft').replace('px', '') * 2;

		//Modify every grid class
		for ( i = 1; i <= columns; i++ ) {

			var width = columnWidth * i + ((i - 1) * value);
			var left = (columnWidth + value) * i;

			gridStylesheet.update_rule('.grid-width-' + i, {'width': width + 'px'});
			gridStylesheet.update_rule('.grid-left-' + i, {'left': left + 'px'});

		}

		//Update column margins ... The 1 is for the borders on the columns
		var leftMargin = Math.ceil((value / 2) - 1);
		var rightMargin = Math.floor((value / 2) - 1);

		gridStylesheet.update_rule('div#grid div.grid-column', {'margin': '0 ' + rightMargin + 'px 0 ' + leftMargin + 'px'});

		//Calculate full content width by getting largest grid numbers width
		var contentWidth = columnWidth * columns + ( (columns - 1) * value );

		$('div#input-grid-width input').val(contentWidth);

		gridStylesheet.update_rule('div.wrapper', {width: contentWidth + 'px'});
		gridStylesheet.update_rule('div.grid-container', {width: (contentWidth + 1) + 'px'});

		//Update layout widget options
		Headway.iframe.grid('option', 'columnWidth', columnWidth);
		Headway.iframe.grid('option', 'minWidth', columnWidth);
		Headway.iframe.grid('option', 'gutterWidth', value);

		//Reset draggable and resizables
		iframe.grid('resetDraggableResizable');

	}
/* END GRID INPUT CALLBACKS */


})(jQuery);

;(function($) {

visualEditorModeDesign = function() {


	$('#toggle-inspector').bind('click', toggleInspector);
	
	
	this.init = function() {
		
		designEditor = new designEditorTabEditor();
		defaultsTabInstance = new designEditorTabDefaults();
		
		designEditorBindPropertyInputs();

		/* Load Google API */
			$.getScript('http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js');
		/* End loading Google API */
		
	}
	
	
	this.iframeCallback = function() {
		
		addBlockControls(true, false);
		addInspector();

		/* Reset editor for layout switch */
		designEditor.switchLayout();
		
	}

	
}


/* DESIGN EDITOR ELEMENT LOADING */
	designEditorRequestElements = function(forceReload) {

		if ( Headway.elementsRequest && (!forceReload || typeof forceReload == 'undefined') )
			return Headway.elementsRequest;

		/* Get the elements and set up bindings */
		Headway.elementsRequest = $.post(Headway.ajaxURL, {
			security: Headway.security,
			action: 'headway_visual_editor',
			method: 'get_design_editor_elements',
			layout: Headway.currentLayout
		}, function(elements) {

			Headway.elements = elements;

		}, 'json');

		return Headway.elementsRequest;

	}
/* END DESIGN EDITOR ELEMENT LOADING */


/* DESIGN EDITOR TABS */
	designEditorTabEditor = function() {
	
		this.context = 'div#editor-tab';
	
		this._init = function() {

			$.when(designEditorRequestElements()).then($.proxy(this.setupElementSelector, this));
		
			this.setupBoxes();
			this.bindDesignEditorInfo();
		
		}
	
		this.setupBoxes = function() {
								
			designEditorBindPropertyBoxToggle(this.context);
		
		}
	
		this.setupElementSelector = function() {

			/* Load in elements */
				$.each(Headway.elements, function(groupID, mainElements) {

					if ( groupID == 'default-elements' )
						return;

					var groupName = mainElements[Object.keys(mainElements)[0]].groupName;
					var groupNode = $('<li id="element-group-' + groupID + '" class="element-group">\
							<span>' + groupName + '</span>\
						</li>').appendTo('#design-editor-main-elements');

					$.each(mainElements, function(mainElementID, mainElementSettings) {

						var mainElementNode = $('<li id="element-' + mainElementID + '" class="main-element">\
							<span>' + mainElementSettings['name'] + '</span>\
						</li>')
						.data({group: groupID})
						.appendTo('#design-editor-main-elements');

						if ( mainElementSettings['indent-in-selector'] )
							mainElementNode.find('span').prepend('<small class="indent">&ndash;</small>');

						$.each(mainElementSettings['children'], function(childElementID, childElementSettings) {

							mainElementNode.addClass('has-children');
							
							var subElementNode = $('<li id="element-' + childElementID + '" class="sub-element parent-element-' + mainElementID + '">\
								<span>' + childElementSettings['name'] + '</span>\
							</li>')
							.data({
								group: groupID,
								parent: mainElementID
							})
							.appendTo('#design-editor-sub-elements');

							if ( childElementSettings['indent-in-selector'] )
								subElementNode.find('span').prepend('<small class="indent">&ndash;</small>');

						});

					});

				});
			/* End loading in elements */

				
			/* Setup properties box */
				$('div.design-editor-options', this.context).masonry({
					itemSelector:'div.design-editor-box',
					columnWidth: 240
				});

				$('div.design-editor-options-container', this.context).scrollbarPaper();
			/* End properties boxes */

			/* Bind the element clicks */
				$('div#editor-tab').delegate('.design-editor-element-selector-container li span', 'click', function(event) {
					
					var link = $(this).parent();

					if ( link.hasClass('element-group') )
						return;

					designEditor.processElementClick(link);				

					link.siblings('.ui-state-active').removeClass('ui-state-active');
					link.addClass('ui-state-active');

				});
			/* End binding */

			/* Add scrollbars to groups, main elements, and sub elements */
			$('ul.element-selector', this.context).scrollbarPaper();
		
		}

		this.processElementClick = function(link, type, name, elementID) {
		
			/* Set up variables */
			if ( typeof link != 'undefined' && link ) {
				var elementType = link.hasClass('main-element') ? 'main' : 'sub';
				var elementName = getElementNodeName(link); /* Element Name */
				var element = link.attr('id').replace(/^element\-/ig, '');
			} else {
				var elementType = type;
				var elementName = name;
				var element = elementID;
			}

			/* If it is a main element has children, display them.  Otherwise hide them */
			if ( link.hasClass('has-children') && elementType == 'main' ) {

				/* If we're selecting a new main element, display the new sub elements */
				if ( $('ul#design-editor-sub-elements', designEditor.context).data('main_element') !== element ) {

					$('ul#design-editor-sub-elements', designEditor.context).show();
					$('ul#design-editor-sub-elements li', designEditor.context).hide().removeClass('ui-state-active');
					$('ul#design-editor-sub-elements li.parent-element-' + element, designEditor.context).show();

					$('ul#design-editor-sub-elements', designEditor.context).data('main_element', element);
				
					/* Refresh scrollbar for sub elements */
					$('ul#design-editor-sub-elements', designEditor.context).scrollbarPaper();

				/* Else the sub elements are already visible and we're just going back to the main element, just remove the selected element from sub	*/						
				} else {

					$('ul#design-editor-sub-elements li.ui-state-active', this.context).removeClass('ui-state-active');		

				}

			/* There are no children, hide them. */
			} else if ( elementType == 'main' ) {

				/* Hide sub elements panel and scrollbar */
				$('ul#design-editor-sub-elements', this.context).hide().data('main_element', false);
				$('div#scrollbarpaper-design-editor-sub-elements', this.context).hide();

			}

			/* Reset regular element/element for layout buttons */
				$('div.design-editor-info span.customize-for-regular-element', designEditor.context).hide();
				$('div.design-editor-info span.customize-element-for-layout', designEditor.context).show();

			/* LOAD INPUTS, INSTANCES, AND STATES */
				designEditorShowCog(this.context);

				$.when(
					this.loadElementInputs(element),
					this.loadElementInstances(element),
					this.loadElementStates(element),
					this.getElementInheritLocation(element)
				).then(function() {
					designEditorShowContent(this.context);
				});	
			/* END LOAD INPUTS */

		}

			this.loadElementInputs = function(element) {

				return $.post(Headway.ajaxURL, {
					security: Headway.security,
					action: 'headway_visual_editor',
					method: 'get_element_inputs',
					unsavedValues: designEditorGetUnsavedValues(element),
					element: designEditorGetElementObject(element)
				}).success(function(inputs) {
				
					var options = $('div.design-editor-options', designEditor.context);

					options.html(inputs);

					var selector = $(options.find('input[element]').get(0)).attr('element_selector');

					inspectorSelectElement(selector);

					/* Add the selector to the info bar */
					setElementInfoSelector(selector);

					/* If there are 4 or less property groups, then open them */
					if ( $('div.design-editor-options .design-editor-box', designEditor.context).length <= 4 )
						$('div.design-editor-options .design-editor-box', designEditor.context).removeClass('design-editor-box-minimized');
												
					/* Set the flags */
					$('div.design-editor-options', designEditor.context).data({
						'element': element, 
						'specialElementType': false, 
						'specialElementMeta': false
					});

					/* Load web fonts */
					$('div.design-editor-options', designEditor.context).find('.property-font-family-select').each(function() {
						webFontQuickLoad($(this).find('span.font-name').data('webfont-value'));
					});

					/* Focus the iframe to allow immediate nudging control */
					Headway.iframe.focus();

				});

			}

			this.loadElementInstances = function(element) {

				/* Element selector node */
				var elementSelectorNode = $('li#element-' + element);

				var instances = designEditorGetElementObject(element, false).instances;

				if ( !instances || !Object.keys(instances).length ) {

					$('div.design-editor-info .instances', designEditor.context).hide();

				} else {

					$('div.design-editor-info .instances', designEditor.context).show();

					var instancesStr = '';

					$.each(instances, function(id, instance) {

						/* Build instance name for select */
							var instanceName = instance.name;

							if ( typeof instance['layout-name'] != 'undefined' && instance['layout-name'] )
								instanceName = instanceName + ' &ndash; ' + instance['layout-name'];

							if ( typeof instance['state-of'] != 'undefined' && instance['state-of'] )
								instanceName = '  -- ' + instance['state-name'];

						/* Output option to select */
						instancesStr += '<option value="' + id + '" data-instance-name="' + instance.name + '">' + instanceName + '</option>';

					});

					var instanceOptions = '<option value="">&mdash; Instances &mdash;</option>' + instancesStr;
					$('div.design-editor-info select.instances', designEditor.context).html(instanceOptions);

				}

				return true;

			}

			this.loadElementStates = function(element, instance) {

				/* Element selector node */
				var elementSelectorNode = $('li#element-' + element);

				var states = designEditorGetElementObject(element).states;

				if ( !states || !Object.keys(states).length ) {

					$('div.design-editor-info .states', designEditor.context).hide();

				} else {

					$('div.design-editor-info .states', designEditor.context).show();

					var statesStr = '';

					$.each(states, function(stateID, stateInfo){
						statesStr += '<option value="' + stateID + '">' + stateInfo.name + '</option>';
					});

					var blankOptionName = 'States';

					var statesOptions = '<option value="">&mdash; ' + blankOptionName + ' &mdash;</option>' + statesStr;
					$('div.design-editor-info select.states', designEditor.context).html(statesOptions);

				}

				return true;

			}

			this.getElementInheritLocation = function(element) {

				/* Element selector node */
				var elementSelectorNode = $('li#element-' + element);

				/* Add element name to info box */		
				setSelectedElementName(getElementNodeName(elementSelectorNode));			
			
				/* Reset layout element button */
				$('span.customize-element-for-layout').text('Customize For Current Layout');
			
				/* Show and fill inherit location if it exists and hide it if not */
				var inheritLocation = elementSelectorNode.data('inherit-location');

				if ( typeof inheritLocation != 'undefined' && inheritLocation.length ) {

					$('div.design-editor-info h4 strong', designEditor.context)
						.text('(Inheriting From ' + sanitizeElementName(inheritLocation) + ')')
						.show();
				
				} else {
				
					$('div.design-editor-info h4 strong', designEditor.context).hide();
				
				}

			}
	
		this.bindDesignEditorInfo = function() {
				
			/* Customize for layout button */
			$('span.customize-element-for-layout', this.context).bind('click', this.customizeForCurrentLayout);
		
			/* Customize for regular element button */
			$('span.customize-for-regular-element', this.context).bind('click', this.customizeRegularElement);
		
			/* Instances select */
			$('select.instances', this.context).bind('change', this.selectInstance);
		
			/* States select */
			$('select.states', this.context).bind('change', this.selectState);
		
		}

			this.customizeForCurrentLayout = function(event) {

				var options = $('div.design-editor-options', designEditor.context);
				
				var currentElement = designEditor.getCurrentElement();
				var currentElementID = currentElement.attr('id').replace(/^element\-/ig, '');
				var currentElementName = getElementNodeName(currentElement); /* Element Name */
								
				/* Hide everything and show the cog */
				designEditorShowCog(designEditor.context);
				
				/* Change which element is being edited and the inheritance */
				setSelectedElementName(currentElementName, '<em> on ' + Headway.currentLayoutName + ' Layout</em>');
				$('div.design-editor-info h4 strong', designEditor.context)
					.html('(Inheriting From ' + sanitizeElementName(currentElementName) + ')')
					.show();
				
				/* Hide current button, states, instances, and show the button to return to the regular element */
				$(this).hide();
				
				$('div.design-editor-info .instances', designEditor.context).hide();
				$('div.design-editor-info .states', designEditor.context).hide();
				
				$('div.design-editor-info span.customize-for-regular-element', designEditor.context).show();
				
				/* Get the properties */
				$.post(Headway.ajaxURL, {
					security: Headway.security,
					action: 'headway_visual_editor',
					method: 'get_element_inputs',
					specialElementType: 'layout',
					specialElementMeta: Headway.currentLayout,
					unsavedValues: designEditorGetUnsavedValues(currentElementID, 'layout', Headway.currentLayout),
					element: designEditorGetElementObject(currentElementID)
				}).success(function(inputs) {

					$('div.design-editor-options', designEditor.context).html(inputs);

					/* Update visible selector */
					var selector = options.find('input[element]').first().attr('element_selector');
					setElementInfoSelector(selector);

					/* Load web fonts */
					$('div.design-editor-options', designEditor.context).find('.property-font-family-select').each(function() {
						webFontQuickLoad($(this).find('span.font-name').data('webfont-value'));
					});

					designEditorShowContent(designEditor.context);

				});
				
				/* Set the flags */
				$('div.design-editor-options', designEditor.context).data({'element': currentElementID, 'specialElementType': 'layout', 'specialElementMeta': Headway.currentLayout});

			}

			this.customizeRegularElement = function(event) {

				var currentElement = designEditor.getCurrentElement();
				var currentElementID = currentElement.attr('id').replace(/^element\-/ig, '');
				var currentElementName = getElementNodeName(currentElement); /* Element Name */
								
				currentElement.find('span').trigger('click');
				
				/* Hide the current button and bring back the layout-specific element button */
				$('div.design-editor-info span.customize-for-regular-element', designEditor.context).hide();
				$('div.design-editor-info span.customize-element-for-layout', designEditor.context).show();

			}

			this.selectInstance = function(instanceID) {

				var options = $('div.design-editor-options', designEditor.context);
				
				var currentElement = designEditor.getCurrentElement();
				var currentElementID = currentElement.attr('id').replace(/^element\-/ig, '');
				var currentElementName = getElementNodeName(currentElement);

				if ( typeof instanceID != 'string' )
					var instanceID = $(this).val();

				if ( !instanceID ) {
					return designEditor.customizeRegularElement();
				}
				
				/* Hide everything and show the cog */
				designEditorShowCog(designEditor.context);
				
				/* Hide layout-specific button, and show the button to return to the regular element */		
				$('div.design-editor-info .states', designEditor.context).hide();
				$('div.design-editor-info span.customize-element-for-layout', designEditor.context).hide();
				$('div.design-editor-info span.customize-for-regular-element', designEditor.context).show();
				
				/* Get the properties */
				$.post(Headway.ajaxURL, {
					security: Headway.security,
					action: 'headway_visual_editor',
					method: 'get_element_inputs',
					specialElementType: 'instance',
					specialElementMeta: instanceID,
					unsavedValues: designEditorGetUnsavedValues(currentElementID, 'instance', instanceID),
					element: designEditorGetElementObject(currentElementID, true, instanceID)
				}).success(function(inputs) {

					$('div.design-editor-options', designEditor.context).html(inputs);

					/* Highlight the selected instance */
					var selector = $(options.find('input[element]').get(0)).attr('element_selector');

					inspectorSelectElement(selector);

					/* Add the selector to the info bar */
					setElementInfoSelector(selector);

					/* If there are 4 or less property groups, then open them */
					if ( $('div.design-editor-options .design-editor-box', designEditor.context).length <= 4 )
						$('div.design-editor-options .design-editor-box', designEditor.context).removeClass('design-editor-box-minimized');

					/* Change the important select value */
					$('select.instances').val(instanceID);

					/* Change which element is being edited and the inheritance */
					var instanceName = $('select.instances', designEditor.context).find(':selected').data('instance-name');

					setSelectedElementName(instanceName);
					$('div.design-editor-info h4 strong', designEditor.context)
						.html('(Inheriting From ' + sanitizeElementName(currentElementName) + ')')
						.show();

					/* Load web fonts */
					$('div.design-editor-options', designEditor.context).find('.property-font-family-select').each(function() {
						webFontQuickLoad($(this).find('span.font-name').data('webfont-value'));
					});

					designEditorShowContent(designEditor.context);

					/* Set the flags */
					$('div.design-editor-options', designEditor.context).data({
						'element': currentElementID, 
						'specialElementType': 'instance', 
						'specialElementMeta': instanceID, 
						'instanceName': instanceName
					});

				});

			}

			this.selectState = function(stateID) {

				var options = $('div.design-editor-options', designEditor.context);
				
				var currentElement = designEditor.getCurrentElement();
				var currentElementID = currentElement.attr('id').replace(/^element\-/ig, '');
				var currentElementName = getElementNodeName(currentElement); /* Element Name */
				
				if ( typeof stateID != 'string' )
					var stateID = $(this).val();
				
				if ( !stateID )
					return false;

				/* Hide everything and show the cog */
				designEditorShowCog(designEditor.context);

				/* Hide instances, layout-specific button, and show the button to return to the regular element */	
				$('div.design-editor-info .instances', designEditor.context).hide();
				$('div.design-editor-info span.customize-element-for-layout', designEditor.context).hide();
				$('div.design-editor-info span.customize-for-regular-element', designEditor.context).show();
								
				/* Get the properties */
				$.post(Headway.ajaxURL, {
					security: Headway.security,
					action: 'headway_visual_editor',
					method: 'get_element_inputs',
					specialElementType: 'state',
					specialElementMeta: stateID,
					unsavedValues: designEditorGetUnsavedValues(currentElementID, 'state', stateID),
					element: designEditorGetElementObject(currentElementID)
				}).success(function(inputs) {

					$('div.design-editor-options', designEditor.context).html(inputs);

					/* Highlight the selected state as long as it's not a pseudo-selector */
					var selector = $(options.find('input[element]').get(0)).attr('element_selector');
					inspectorSelectElement(selector);

					/* Add the selector to the info bar */
					setElementInfoSelector(selector);

					/* If there are 4 or less property groups, then open them */
					if ( $('div.design-editor-options .design-editor-box', designEditor.context).length <= 4 )
						$('div.design-editor-options .design-editor-box', designEditor.context).removeClass('design-editor-box-minimized');

					/* Change the important select value */
					$('select.states').val(stateID);

					/* Change which element is being edited and the inheritance */
					var stateName = $('select.states', designEditor.context).find(':selected').text();

					setSelectedElementName(currentElementName, ' &ndash; ' + stateName);
					$('div.design-editor-info h4 strong', designEditor.context)
						.html('(Inheriting From ' + sanitizeElementName(currentElementName) + ')')
						.show();

					/* Set the flags */
					$('div.design-editor-options', designEditor.context).data({
						'element': currentElementID, 
						'specialElementType': 'state', 
						'specialElementMeta': stateID
					});

					/* Load web fonts */
					$('div.design-editor-options', designEditor.context).find('.property-font-family-select').each(function() {
						webFontQuickLoad($(this).find('span.font-name').data('webfont-value'));
					});

					designEditorShowContent(designEditor.context);

				});


			}
	
		this.getCurrentElement = function() {
		
			/* Check against sub elements then main elements. */
			if ( $('ul#design-editor-sub-elements li.ui-state-active', this.context).length === 1 ) {
			
				return $('ul#design-editor-sub-elements li.ui-state-active', this.context);
			
			} else if ( $('ul#design-editor-main-elements li.ui-state-active', this.context).length === 1 ) {
			
				return $('ul#design-editor-main-elements li.ui-state-active', this.context);
			
			} else {
			
				return null;
			
			}
		
		}
	
		this.switchLayout = function() {
		
			/* If editing layout-specific element, switch back to normal element. */
			var currentElement = this.getCurrentElement();
						
			if ( !currentElement || currentElement.length === 0 )
				return false;
		
			currentElement.find('span').trigger('click');
		
		}
	
		this._init();
	
	}

	designEditorTabDefaults = function() {
	
		this.context = 'div#defaults-tab';
	
		this._init = function() {
		
			this.setupBoxes();
			$.when(designEditorRequestElements()).then($.proxy(this.setupElementSelector, this));
		
		}
	
		this.setupBoxes = function() {
								
			designEditorBindPropertyBoxToggle(this.context);
		
		}
	
		this.setupElementSelector = function() {
		
			var self = this;

			/* Put in default elements */
				$.each(Headway.elements, function(groupID, defaultElements) {

					if ( groupID != 'default-elements' )
						return;

					$.each(defaultElements, function(defaultElementID, defaultElementSettings) {

						var defaultElementNode = $('<li id="element-' + defaultElementID + '" class="default-element">\
							<span>' + defaultElementSettings['name'] + '</span>\
						</li>')
						.data({group: groupID})
						.appendTo('#design-editor-default-elements');

					});

				});
			/* End putting in default elements */
		
			/* Setup properties box */
			$('div.design-editor-options', this.context).masonry({
				itemSelector:'div.design-editor-box',
				columnWidth: 240
			});

			$('div.design-editor-options-container', this.context).scrollbarPaper();
			/* End properties */

			/* Bind the element clicks */
			$('div#defaults-tab').delegate('.design-editor-element-selector-container li span', 'click', function(event) {

				var link = $(this).parent();

				self.processDefaultElementClick(link);				

				link.siblings('.ui-state-active').removeClass('ui-state-active');
				link.addClass('ui-state-active');

			});
			/* End binding */

			/* Add scrollbars to groups, main elements, and sub elements */
			$('ul.element-selector', this.context).scrollbarPaper();
		
		}
	
		this.processDefaultElementClick = function(link) {
		
			var self = this;

			/* Set up variables */
			var elementType = link.hasClass('main-element') ? 'main' : 'sub';
			var elementName = getElementNodeName(link); /* Element Name */
			var element = link.attr('id').replace(/^element\-/ig, '');

			/* LOAD INPUTS, INSTANCES, AND STATES */
				designEditorShowCog(this.context);

				$.when(

					/* Inputs */
					$.post(Headway.ajaxURL, {
						security: Headway.security,
						action: 'headway_visual_editor',
						method: 'get_element_inputs',
						specialElementType: 'default',
						unsavedValues: designEditorGetUnsavedValues(element, 'default'),
						element: designEditorGetElementObject(element)
					}).success(function(inputs) {

						$('div.design-editor-options', self.context).html(inputs);

						/* If there are 4 or less property groups, then open them */
						if ( $('div.design-editor-options .design-editor-box', self.context).length <= 4 )
							$('div.design-editor-options .design-editor-box', self.context).removeClass('design-editor-box-minimized');

						/* Load web fonts */
						$('div.design-editor-options .design-editor-box', self.context).find('.property-font-family-select').each(function() {
							webFontQuickLoad($(this).find('span.font-name').data('webfont-value'));
						});

					})
				
				/* Everything is done, we can hide cog and show options now */
				).then(function() {

					/* Add element name to info box */		
					setSelectedElementName(elementName, null, self.context);			

					/* Show everything and hide cog */
					designEditorShowContent(self.context);

				});			
			/* END LOAD INPUTS */

		}
	
		this._init();
	
	}
/* END DESIGN EDITOR TABS */


/* CONTENT TOGGLING */
	designEditorShowCog = function(context) {
					
		$('p.design-editor-options-instructions', context).hide();
		$('div.design-editor-options', context).hide();
		$('div.design-editor-info', context).hide();
		
		createCog($('div.design-editor-options-container', context), true, true);
		
	}

	designEditorShowContent = function(context) {
		
		refreshInfoButtons = typeof refreshInfoButtons == 'undefined' ? false : true;
	
		/* Show info/options and hide cog/instructions */
		$('div.design-editor-info', context).show();
		$('div.design-editor-options', context).show();
	
		$('p.design-editor-options-instructions', context).hide();
		$('div.design-editor-options-container', context).find('.cog-container').remove();

		/* Run Masonry after everything is visible */
		$('div.design-editor-options', context).masonry('reload');
		
		/* Refresh Tooltips */
		setupTooltips();
	
	}

	designEditorShowInstructions = function(context) {
	
		$('div.design-editor-options-container div.cog-container', context).remove();
		$('div.design-editor-options', context).hide();
		$('div.design-editor-info', context).hide();

		$('p.design-editor-options-instructions', context).show();
	
	}
/* END CONTENT TOGGLING */


/* DESIGN EDITOR OPTIONS/INPUTS */
	designEditorGetElementObject = function(element, excludeInstances, instanceToKeep) {

		var elementNode = $('ul.element-selector').find('#element-' + element);
		var elementGroup = elementNode.data('group');
		var elementParent = elementNode.data('parent');

		if ( typeof excludeInstances == 'undefined' )
			var excludeInstances = true;

		if ( elementParent ) {

			var element = jQuery.extend(true, {}, Headway.elements[elementGroup][elementParent]['children'][element]);

		} else {

			var element = jQuery.extend(true, {}, Headway.elements[elementGroup][element]);

		}

		/* Delete children since it can be huge */
		delete element.children;

		/* Delete instances if set to do so */
		if ( excludeInstances ) {

			if ( typeof instanceToKeep != 'undefined' && instanceToKeep ) {

				$.each(element.instances, function(instanceID, instanceOptions) {

					if ( instanceID != instanceToKeep )
						delete element.instances[instanceID];

				});

			} else {

				delete element.instances;

			}

		}
		
		return element;

	}

	designEditorGetUnsavedValues = function(element, specialElementType, specialElementMeta) {
		
		if ( typeof specialElementType == 'undefined' )
			var specialElementType = false;
		
		if ( typeof specialElementMeta == 'undefined' )
			var specialElementMeta = false;

		if ( 
			typeof GLOBALunsavedValues == 'undefined' ||
			typeof GLOBALunsavedValues['design-editor'] == 'undefined' || 
			typeof GLOBALunsavedValues['design-editor'][element] == 'undefined'
		)
			return null;
		
		if ( !specialElementType || !specialElementMeta ) {

			if ( typeof GLOBALunsavedValues['design-editor'][element]['properties'] == 'undefined' )
				return null;

			var properties = GLOBALunsavedValues['design-editor'][element]['properties'];

		} else {

			if ( typeof GLOBALunsavedValues['design-editor'][element]['special-element-' + specialElementType] == 'undefined' )
				return null;

			if ( typeof GLOBALunsavedValues['design-editor'][element]['special-element-' + specialElementType][specialElementMeta] == 'undefined' )
				return null;

			var properties = GLOBALunsavedValues['design-editor'][element]['special-element-' + specialElementType][specialElementMeta];

		}
		
		return Object.keys(properties).length > 0 ? properties : null;
		
	}

	designEditorBindPropertyBoxToggle = function(context) {
		
		$('div.design-editor-options', context).delegate('span.design-editor-box-toggle, span.design-editor-box-title', 'click', function(){

			var box = $(this).parents('div.design-editor-box');

			box.toggleClass('design-editor-box-minimized');

			$('div.design-editor-options', context).masonry('reload');

		});

	}

	designEditorBindPropertyInputs = function() {

		/* Customize Buttons */
		$('div#panel').delegate('div.customize-property', 'click', function() {

			var property = $(this).parents('li').first();

			if ( property.parents('.design-editor-box').hasClass('locked') )
			    var property = $(this).parents('.design-editor-box-content').find('> li.lockable');

			property.each(function() {

				$(this).find('.customize-property').fadeOut(150);
		    	$(this).removeClass('uncustomized-property');

		    	var hidden = $(this).find('input.property-hidden-input');

		    	/* When clicking on Customize on a property that uses a select, sometimes the first option in the select is what you want.  
		    	This will fill the hidden input with it */
		    	var siblingInput = hidden.parent().find('select, input:not(.property-hidden-input)').first();

		    	if ( !hidden.val() && siblingInput.length )
		    		hidden.val(siblingInput.val());

		    	designEditorUpdateInputHidden({hiddenInput: hidden, value: hidden.val()});

		    });
						
		});
		
		/* Uncustomize Button */
		$('div#panel').delegate('span.uncustomize-property', 'click', function() {
			
			if ( !confirm('Are you sure you wish to uncustomize this property?  The value will be reset.') )
				return false;

			var property = $(this).parents('li').first();

			if ( property.parents('.design-editor-box').hasClass('locked') )
			    var property = $(this).parents('.design-editor-box-content').find('> li.lockable');

			property.each(function() {

				var hidden = $(this).find('input.property-hidden-input');

		    	$(this).find('div.customize-property').fadeIn(150);

		    	$(this).addClass('uncustomized-property', 150);
		
				designEditorUpdateInputHidden({hiddenInput: hidden, value: null});
				
		    });
										
		});

		/* Live CSS Open */
		$('div#panel').delegate('div.design-editor-info code', 'click', function() {

			var liveCSSValue = ( typeof liveCSSEditor == 'undefined' || !liveCSSEditor ) ? $('textarea#live-css').val() : liveCSSEditor.getValue();

			var linesBefore = liveCSSValue ? "\n\n" : '';
			$('textarea#live-css').val(liveCSSValue + linesBefore + $(this).data('selector') + " {\n\n}");

			/* Open Live CSS Editor */
			$('#tools-live-css').trigger('click');

			/* Move the cursor to the new selector */
			if ( Headway.disableCodeMirror != true ) {

				liveCSSEditor.setValue($('textarea#live-css').val());

				var lastLine = liveCSSEditor.lineCount() - 1;
				liveCSSEditor.setCursor(lastLine - 1);
				liveCSSEditor.focus();

			}
			
		});

		/* Lock Sides */
		$('div#panel').delegate('span.design-editor-lock-sides', 'click', function() {

		    if ( $(this).hasClass('locked') ) {

		        $(this)
		    		.attr('data-locked', false)
		    		.removeClass('locked')
		    		.attr('title', 'Unlock sides')
		    		.parent().removeClass('locked');

		    } else {

		        $(this)
		    		.attr('data-locked', true)
		    		.addClass('locked')
		    		.attr('title', 'Lock sides')
		    		.parent().addClass('locked');

		    }

		});

		$('div#panel').delegate('.design-editor-box.locked ul li .property input', 'keyup blur', function() {

		    if ( $(this).parents('.design-editor-box').hasClass('locked') ) {

		    	$(this).parents('.design-editor-box').find('.lockable')
		    		.removeClass('uncustomized-property');

			    $(this).parents('.design-editor-box').find('.lockable .property input:not([type="hidden"])')
			    	.not($(this))
			    	.val($(this).val())
			    	.trigger('change');

			}

		});
		
		/* Select */
		$('div#panel').delegate('div.property-select select', 'change', designEditorInputSelect);
		
		/* Integer */
		$('div#panel').delegate('div.property-integer input', 'focus', designEditorInputIntegerFocus);
		
		$('div#panel').delegate('div.property-integer input', 'keyup blur change', designEditorInputIntegerChange);
				
		/* Image Uploaders */
		$('div#panel').delegate('div.property-image span.button', 'click', designEditorInputImageUpload);

		$('div#panel').delegate('div.property-image span.delete-image', 'click', designEditorInputImageUploadDelete);

		/* Color Inputs */
		$('div#panel').delegate('div.property-color div.colorpicker-box', 'click', designEditorInputColor);

	}
/* END DESIGN EDITOR INPUTS */


/* INPUT FUNCTIONALITY */
	/* Select */
	designEditorInputSelect = function(event) {
		
		var hidden = $(this).parent().siblings('input.property-hidden-input');
		
		designEditorUpdateInputHidden({hiddenInput: hidden, value: $(this).val()});
		
	}


	/* Integer */
	designEditorInputIntegerFocus = function(event) {

		if ( typeof originalValues !== 'undefined' ) {
			delete originalValues;
		}
		
		originalValues = new Object;
		
		var hidden = $(this).siblings('input.property-hidden-input');
		var id = hidden.attr('selector') + '-' + hidden.attr('property');
		
		originalValues[id] = $(this).val();
		
	}
	
	designEditorInputIntegerChange = function(event) {

		var hidden = $(this).siblings('input.property-hidden-input');
		var value = $(this).val();

		if ( event.type == 'keyup' && value == '-' )
			return;
		
		/* Validate the value and make sure it's a number */
		if ( isNaN(value) ) {
			
			/* Take the nasties out to make sure it's a number */
			value = value.replace(/[^0-9]*/ig, '');
			
			/* If the value is an empty string, then revert back to the original value */
			if ( value === '' ) {
				
				var id = hidden.attr('selector') + '-' + hidden.attr('property');
				var value = originalValues[id];
										
			}
			
			/* Set the value of the input to the sanitized value */
			$(this).val(value);
			
		}
		
		/* Remove leading zeroes */
		if ( value.length > 1 && value[0] == 0 ) {
			
			value = value.replace(/^[0]+/g, '');
			
			/* Set the value of the input to the sanitized value */
			$(this).val(value);
			
		}

		designEditorUpdateInputHidden({hiddenInput: hidden, value: $(this).val()});
		
	}

	/* Image Uploaders */
	designEditorInputImageUpload = function(event) {
		
		var self = this;
		
		openImageUploader(function(url, filename) {
			
			var hidden = $(self).siblings('input');

			$(self).siblings('.image-input-controls-container').find('span.src').text(filename);
			$(self).siblings('.image-input-controls-container').show();

			designEditorUpdateInputHidden({hiddenInput: hidden, value: url});
			
		});
		
	}
	
	designEditorInputImageUploadDelete = function(event) {
		
		if ( !confirm('Are you sure you wish to remove this image?') ) {
			return false;
		}

		$(this).parent('.image-input-controls-container').hide();
		$(this).hide();
		
		var hidden = $(this).parent().siblings('input');

		designEditorUpdateInputHidden({hiddenInput: hidden, value: 'none'});
		
	}
	
	/* Color Inputs */
	designEditorInputColor = function(event) {
		
		/* Keep the design editor options container from scrolling */
		$('div.design-editor-options-container').css('overflow-y', 'hidden');

		/* Set up variables */
		var input = $(this).parent().siblings('input');
		var inputVal = input.val();

		if ( inputVal == 'transparent' )
			inputVal = '00FFFFFF';

		var colorpickerHandleVal = function(color, inst) {

			var colorValue = '#' + color.hex;

			/* If alpha ISN'T 100% then use RGBa */
			if ( color.a != 100 )
				var colorValue = color.rgba;

			designEditorUpdateInputHidden({hiddenInput: input, value: colorValue});			

		}

		$(this).colorpicker({
			realtime: true,
			alpha: true,
			alphaHex: true,
			allowNull: false,
			swatches: (typeof Headway.colorpickerSwatches == 'object' && Headway.colorpickerSwatches.length) ? Headway.colorpickerSwatches : true,
			color: inputVal,
			beforeShow: function(input, inst) {

				/* Add iframe overlay */
				showIframeOverlay();

			},
			onClose: function(color, inst) {

				colorpickerHandleVal(color, inst);

				/* Hide iframe overlay */
				hideIframeOverlay();

				/* Allow design editor options container to scroll again */
				$('div.design-editor-options-container').css('overflow-y', 'auto');

			},
			onSelect: function(color, inst) {

				colorpickerHandleVal(color, inst);

			},
			onAddSwatch: function(color, swatches) {

				updatePanelInputHidden({
					group: 'general',
					id: 'colorpicker-swatches',
					value: swatches
				});

			},
			onDeleteSwatch: function(color, swatches) {

				updatePanelInputHidden({
					group: 'general',
					id: 'colorpicker-swatches',
					value: swatches
				});

			}
		});

		$.colorpicker._showColorpicker($(this));

		setupTooltips();
		
	}
/* END INPUT FUNCTIONALITY */


/* DESIGN EDITOR SAVING */
	designEditorUpdateInputHidden = function(args) {

		var hiddenInput = $(args.hiddenInput);
		var value = args.value;

		if ( !hiddenInput.length )
			return false;
		
		/* If it's an uncustomized property and the user somehow tabs to the input, DO NOT send the stuff to the DB. */
			if ( hiddenInput.parents('li.uncustomized-property').length == 1 )
				return false;
			
		/* Get all vars */
			var element = hiddenInput.attr('element').toLowerCase();
			var property = hiddenInput.attr('property').toLowerCase();
			var selector = hiddenInput.attr('element_selector') || false;
			var specialElementType = hiddenInput.attr('special_element_type').toLowerCase() || false;
			var specialElementMeta = hiddenInput.attr('special_element_meta').toLowerCase() || false;

		/* Save the variable */
			if ( typeof GLOBALunsavedValues != 'object' )
				GLOBALunsavedValues = {};

			if ( typeof GLOBALunsavedValues['design-editor'] != 'object' )
				GLOBALunsavedValues['design-editor'] = {};

			if ( typeof GLOBALunsavedValues['design-editor'][element] != 'object' )
				GLOBALunsavedValues['design-editor'][element] = {
					group: hiddenInput.data('element-group')
				};

			if ( specialElementType == false || specialElementMeta == false ) {

				if ( typeof GLOBALunsavedValues['design-editor'][element]['properties'] != 'object' )
					GLOBALunsavedValues['design-editor'][element]['properties'] = {};

				GLOBALunsavedValues['design-editor'][element]['properties'][property] = value;

			} else {

				if ( typeof GLOBALunsavedValues['design-editor'][element]['special-element-' + specialElementType] != 'object' )
					GLOBALunsavedValues['design-editor'][element]['special-element-' + specialElementType] = {};

				if ( typeof GLOBALunsavedValues['design-editor'][element]['special-element-' + specialElementType][specialElementMeta] != 'object' )
					GLOBALunsavedValues['design-editor'][element]['special-element-' + specialElementType][specialElementMeta] = {};

				GLOBALunsavedValues['design-editor'][element]['special-element-' + specialElementType][specialElementMeta][property] = value;

			}

		/* Change null string to null */
			if ( value === 'null' )
				value = null;

		/* Update hidden input value */
			hiddenInput.val(value);

		/* Call developer-defined callback */
			var callback = eval(hiddenInput.attr('callback'));

			args['selector'] = selector;
			args['property'] = property;
			args['element'] = $i(selector);

			callback(args);

		/* Allow saving */
			allowSaving();

		/* If value is null, then it's an uncustomization. Remove CSS */	
			if ( value == null && selector && property )
				return stylesheet.delete_rule_property(selector, property);

	}
/* END DESIGN EDITOR SAVING */


/* COMPLEX JS CALLBACKS */
	propertyInputCallbackFontFamily = function(params) {

		var selector = params.selector;
		var value = params.value;
		var element = params.element;

		/* Not a web font */
		if ( !value.match(/\|/g) ) {

			stylesheet.update_rule(selector, {"font-family": value});
			return;

		}

		var fontFragments = value.split('|');
		var args = {};

		/* Handle variants */
		var variants = '';

		if ( typeof fontFragments[2] != 'undefined' && fontFragments[2] )
			variants = ':' + fontFragments[2];

		args[fontFragments[0]] = {
			families: [fontFragments[1] + variants]
		};

		stylesheet.update_rule(selector, {"font-family": [fontFragments[1]]});

		if ( typeof $('iframe#content').get(0).contentWindow.WebFont == 'object' )
			$('iframe#content').get(0).contentWindow.WebFont.load(args);
		
	}

	propertyInputCallbackBackgroundImage = function(params) {

		var selector = params.selector;
		var value = params.value;
		var element = params.element;
		
		if ( value != 'none' ) {
			stylesheet.update_rule(selector, {"background-image": 'url(' + value + ')'});
		} else if ( value == 'none' ) {
			stylesheet.update_rule(selector, {"background-image": 'none'});
		}
		
	}

	propertyInputCallbackFontStyling = function(params) {

		var selector = params.selector;
		var value = params.value;
		var element = params.element;
		
		if ( value === 'normal' ) {
			
			stylesheet.update_rule(selector, {
				'font-style': 'normal',
				'font-weight': 'normal'
			});
			
		} else if ( value === 'bold' ) {
			
			stylesheet.update_rule(selector, {
				'font-style': 'normal',
				'font-weight': 'bold'
			});
			
		} else if ( value === 'italic' ) {
			
			stylesheet.update_rule(selector, {
				'font-style': 'italic',
				'font-weight': 'normal'
			});
			
		} else if ( value === 'bold-italic' ) {
			
			stylesheet.update_rule(selector, {
				'font-style': 'italic',
				'font-weight': 'bold'
			});
			
		} else if ( value === null ) {

			stylesheet.delete_rule_property(selector, 'font-style');
			stylesheet.delete_rule_property(selector, 'font-weight');

		}
		
	}

	propertyInputCallbackCapitalization = function(params) {

		var selector = params.selector;
		var value = params.value;
		var element = params.element;
		
		if ( value === 'none' ) {
			
			stylesheet.update_rule(selector, {
				'text-transform': 'none',
				'font-variant': 'normal'
			});
			
		} else if ( value === 'small-caps' ) {
			
			stylesheet.update_rule(selector, {
				'text-transform': 'none',
				'font-variant': 'small-caps'
			});
			
		} else {
			
			stylesheet.update_rule(selector, {
				'text-transform': value,
				'font-variant': 'normal'
			});
			
		}
		
	}

	propertyInputCallbackShadow = function(params) {
	
		var selector = params.selector;
		var value = params.value;
		var element = params.element;
		var property = params.property;

		var shadowType = ( property.indexOf('box-shadow') === 0 ) ? 'box-shadow' : 'text-shadow';
											
		var currentShadow = $i(selector).css(shadowType) || false;
								
		//If the current shadow isn't set, then create an empty template to work off of.
		if ( currentShadow == false || currentShadow == 'none' )
			currentShadow = 'rgba(0, 0, 0, 0) 0 0 0';
		
		//Remove all spaces inside rgba, rgb, and hsb colors and also remove all px
		var shadowFragments = currentShadow.replace(/, /g, ',').replace(/px/g, '').split(' ');
		
		var shadowColor = $('input[property="' + shadowType + '-color' + '"][element_selector="' + selector + '"]').val() || shadowFragments[0];
		var shadowHOffset = $('input[property="' + shadowType + '-horizontal-offset' + '"][element_selector="' + selector + '"]').val() || shadowFragments[1];
		var shadowVOffset = $('input[property="' + shadowType + '-vertical-offset' + '"][element_selector="' + selector + '"]').val() || shadowFragments[2];
		var shadowBlur = $('input[property="' + shadowType + '-blur' + '"][element_selector="' + selector + '"]').val() || shadowFragments[3];
		var shadowInset = $('input[property="' + shadowType + '-position' + '"][element_selector="' + selector + '"]').val() || shadowFragments[4];
		
		switch ( property ) {
			
			case shadowType + '-horizontal-offset':
				shadowHOffset = value || 0;
			break;
			
			case shadowType + '-vertical-offset':
				shadowVOffset = value || 0;
			break;
			
			case shadowType + '-blur':
				shadowBlur = value || 0;
			break;
			
			case shadowType + '-inset':
				shadowInset = value;
			break;
			
			case shadowType + '-color':
				shadowColor = value;
			break;
			
		}

		if ( !shadowColor )
			return stylesheet.delete_rule_property(selector, shadowType);
		
		/* Handle inset */
		if ( shadowInset == 'inset' ) {
			shadowInset = ' inset';
		} else {
			shadowInset = '';
		}

		var shadow = shadowColor + ' ' + shadowHOffset + 'px ' + shadowVOffset + 'px ' + shadowBlur + 'px' + shadowInset;
					
		var properties = {};
		
		//Use this syntax so the shadow type can feed from variable.
		properties[shadowType] = shadow;
					
		stylesheet.update_rule(selector, properties);
		
	}
/* END COMPLEX JS CALLBACKS */


/* INSPECTOR */
	inspectorSelectElement = function(selector) {

		/* Unhighlight previous elements */
		$i('.inspector-element-selected').each(function() {

			$(this).removeClass('inspector-element-selected');

			removeInspectorVisibleBoxModal($(this));

		});

		/* Mark the new selected elements */
		$i(selector).addClass('inspector-element-selected');

		updateInspectorVisibleBoxModal();
		
	}

	removeInspectorVisibleBoxModal = function(selector) {

		if ( typeof selector == 'undefined' )
			var selector = $i('.inspector-element-selected');

		if ( !$(selector).data('previousBoxShadow') )
			return false;

		$(selector).data('previousBoxShadow', null);

		/* Clear style attribute box shadow and rely on previous CSS */
		return $(selector).css('boxShadow', '');

	}

	updateInspectorVisibleBoxModal = function() {

		if ( typeof Headway.inspectorDisabled != 'undefined' && Headway.inspectorDisabled )
			return;

		/* Show padding/margin with box shadow */
		$i('.inspector-element-selected').each(function() {

			/* Remove any previous margin/padding shadows */
			removeInspectorVisibleBoxModal($(this));

			var self = this;
			var previousBoxShadow = $(this).css('box-shadow');
			var boxShadow = previousBoxShadow != 'none' ? previousBoxShadow.split(',') : [];

			$(this).data('previousBoxShadow', previousBoxShadow);

			$.each([
				'paddingTop',
				'paddingRight',
				'paddingBottom',
				'paddingLeft',
				'marginTop',
				'marginRight',
				'marginBottom',
				'marginLeft'
			], function(index, cssProperty) {

				var cssValue = $(self).css(cssProperty).replace('px', '');

				if ( cssValue == 'auto' )
					return;

				var color = cssProperty.indexOf('padding') !== -1 ? 'rgba(0, 0, 255, .15)' : 'rgba(255, 127, 0, .15)';
				var negative = '';
				var inset = '';

				if ( 
					cssProperty == 'paddingRight' ||
					cssProperty == 'paddingBottom' ||
					cssProperty == 'marginLeft' ||
					cssProperty == 'marginTop'
				) 
					negative = '-';

				var value = negative + cssValue + 'px';

				if ( cssProperty.toLowerCase().indexOf('left') !== -1 || cssProperty.toLowerCase().indexOf('right') !== -1 )
					var xyValue = value + ' 0';
				else 
					var xyValue = '0 ' + value;

				if ( cssProperty.indexOf('padding') !== -1 )
					inset = 'inset ';

				boxShadow.push(inset + xyValue + ' 0 0 ' + color);

			});

			$(this).css({
				boxShadow: boxShadow.join(',')
			});

		});

	}

	addInspector = function(refresh) {

		if ( typeof Headway.elements == 'undefined' )
			return $.when(designEditorRequestElements()).then(addInspector);

		$.each(Headway.elements, function(groupID, mainElements) {

			$.each(mainElements, function(mainElementID, mainElementSettings) {

				addInspectorProcessElement(mainElementSettings);

				$.each(mainElementSettings['children'], function(childElementID, childElementSettings) {

					addInspectorProcessElement(childElementSettings);

				});

			});

		});

		/* Build element hover tooltip */
		if ( refresh == undefined ) {

			$i('body').qtip({
				id: 'inspector-tooltip',
				style: {
					classes: 'ui-tooltip-headway'
				},
				position: {
					target: [-9999, -9999],
					my: 'center',
					at: 'center',
					container: $i('body'),
					effect: false,
					adjust: {
						x: 35,
						y: 35
					}
				},
				content: {
					text: 'Hover over an element.'
				},
				show: {
					event: false,
					ready: true
				},
				hide: false,
				events: {
					render: function(event, api) {
						
						delete inspectorElement;
						delete inspectorTooltip;
						delete inspectorElementOptions;

						inspectorTooltip = api;

						if ( !$('#toggle-inspector').hasClass('inspector-disabled') ) {
							enableInspector();
						} else {
							disableInspector();
						}

					}
				}
			});

		}

	}

		refreshInspector = function() {
			return addInspector(true);
		}

		addInspectorProcessElement = function(value) {

			if ( value['group'] == 'default-elements' )
				return;

			if ( !$i(value['selector']).length )
				return;

			$i(value['selector']).data({
				inspectorElementOptions: value
			});

			$i(value['selector']).addClass('inspector-element');

			/* Instances */
			var instanceOptions = {};

			$.each(value['instances'], function(instanceID, instanceValue) {

				if ( !$i(instanceValue['selector']).length )
					return;

				/* Simply change selector, add ID and name for instances */
				var instanceOptions = jQuery.extend(true, {}, value);
				instanceOptions['parentName'] = value['name'];
				instanceOptions['instance'] = instanceValue['id'];
				instanceOptions['name'] = instanceValue['name'];
				instanceOptions['selector'] = instanceValue['selector'];
				instanceOptions['instances'] = {};

				/* Filter instances to only be states of this instance */
				$.each(value['instances'], function(index, instance) {

					if ( instance['state-of'] == instanceID )
						instanceOptions['instances'][index] = instance;

				});

				/* Split the selector that way we can filter out :hover and :active */
				$.each(instanceOptions['selector'].split(','), function(index, selector) {

					/* Do not add elements with pseudo selectors to the inspector */
					if ( selector.indexOf(':') != -1 )
						return;

					$i(selector).data({
						inspectorElementOptions: instanceOptions
					});

					$i(selector).addClass('inspector-element');

				});

			});

		}

		/* Handle mouse hovering to move and modify the tooltip and highlight the elements */
		inspectorMouseMove = function(event) {

			if ( Headway.inspectorDisabled )
				return;

			inspectorElement = $(event.target);

			if ( !inspectorElement.hasClass('inspector-element') )
				inspectorElement = inspectorElement.parents('.inspector-element').first();

			inspectorTooltip.show();

			var inspectorElementOptions = inspectorElement.data('inspectorElementOptions');

			if ( typeof inspectorElementOptions != 'object' )
				return;

			$i('.inspector-element-hover').removeClass('inspector-element-hover');
			$i(inspectorElementOptions['selector']).addClass('inspector-element-hover');

			var tooltipText = inspectorElementOptions['groupName'] + ' &rsaquo; ';

			if ( inspectorElementOptions['parentName'] )
				tooltipText += inspectorElementOptions['parentName'] + ' &rsaquo; ';

			tooltipText += '<strong>' + inspectorElementOptions['name'] + '</strong>';

			var tooltipWidth = $i('#ui-tooltip-inspector-tooltip').width();
			var viewportOverflow = $i('body').width() - event.pageX - tooltipWidth + 15;

			var tooltipX = viewportOverflow > 0 ? event.pageX : event.pageX + viewportOverflow;  

			inspectorTooltip.set('position.target', [tooltipX, event.pageY]);
			inspectorTooltip.set('content.text', tooltipText);

		}

		/* Allow the elements to be clicked */
		inspectorMouseUpLeft = function(event) {

			if ( typeof inspectorElement == 'undefined' || !inspectorElement || event.which !== 1 || $(event.originalEvent.target).parents('.inspector-context-menu').length )
				return false;
			
			/* Hide any inspector context menus */
			$i('.inspector-context-menu').remove();

			/* Reactivate inspector tooltip */
			inspectorTooltip.show();
			Headway.inspectorDisabled = false;

		}

			inspectorMouseContextMenu = function(event) {

				var inspectorElementOptions = inspectorElement.data('inspectorElementOptions');

				/* Hide any other inspector context menus */
					$i('.inspector-context-menu').remove();

				/* Disable inspector tooltip */
					inspectorTooltip.hide();
					Headway.inspectorDisabled = true;

				/* Create context menu */
					var contextMenu = $('<ul class="inspector-context-menu"><h3>' + inspectorElementOptions.name + '</h3></ul>');
					contextMenu.data('element-options', inspectorElementOptions);
					contextMenu.delegate('span:not(.group-title)', 'click', inspectorContextMenuItemClick);

				/* Set instance variable */
					var isInstance = (typeof inspectorElementOptions.instance != 'undefined' && inspectorElementOptions.instance);

				/* Add options to context menu */
					/* Regular Element Group */
						var regularElementGroup = contextMenu;

						if ( isInstance ) {

							contextMenu.append('<li class="inspector-context-menu-edit-instance" data-instance-id="' + inspectorElementOptions.instance + '"><span>Edit This Instance</span></li>');

							var regularElementGroup = $('<li><span class="group-title">Regular Element<small>' + inspectorElementOptions.parentName + '</small></span><ul></ul></li>').appendTo(contextMenu);
							regularElementGroup = regularElementGroup.find('ul').first();

						}

						/* Regular Element */
							regularElementGroup.append('<li class="inspector-context-menu-edit-normal"><span>Edit</span></li>');
							regularElementGroup.append('<li class="inspector-context-menu-edit-for-layout"><span>Edit For This Layout</span></li>');

						/* Regular Element States */
							if ( Object.keys(inspectorElementOptions.states).length ) {

								var statesMenu = $('<li class="inspector-context-menu-states"><span class="group-title">States</span><ul></ul></li>').appendTo(regularElementGroup);

								$.each(inspectorElementOptions.states, function(stateID, stateInfo) {
									statesMenu.find('ul').append('<li data-state-id="' + stateID + '"><span>Edit ' + stateInfo.name + '</span></li>');
								});

							}
					/* End Regular Element */

					/* Instances */
						if ( Object.keys(inspectorElementOptions.instances).length ) {

							if ( typeof inspectorElementOptions.instance == 'undefined' || !inspectorElementOptions.instance ) {
								var instancesMenu = $('<li class="inspector-context-menu-instances"><span class="group-title">Instances</span><ul></ul></li>').appendTo(contextMenu);
							} else {
								var instancesMenu = false;
							}

							$.each(inspectorElementOptions.instances, function(instanceID, instance) {

								/* Handle instance states that will be in the actual instances menu */
									if ( instance['state-of'] == inspectorElementOptions.instance ) {

										if ( !contextMenu.find('> li.inspector-context-menu-instance-states').length )
											$('<li class="inspector-context-menu-instance-states"><span class="group-title">Instance States</span><ul></ul></li>')
												.insertAfter(contextMenu.find('li.inspector-context-menu-edit-instance'));

										contextMenu.find('> li.inspector-context-menu-instance-states ul').append('<li data-instance-id="' + instanceID + '"><span>Edit ' + instance['state-name'] + '</span></li>');

									}

							});

							/* If the instances menu is empty somehow (one instance and that instance is selected), then delete it */
							if ( instancesMenu && !instancesMenu.find('ul li').length )
								instancesMenu.remove();

						}

					/* Block Options */
						if ( getBlock(inspectorElement) ) {

							var block = getBlock(inspectorElement);
							var blockID = getBlockID(block);
							var blockType = getBlockTypeNice(getBlockType(block));

							var blockOptionsNode = $('<li class="inspector-context-menu-block-options"><span>Open Block Options</span></li>').appendTo(contextMenu);

						}
					/* End block options */

				/* Context menu positioning */
					contextMenu.css({
						top: event.pageY,
						left: event.pageX
					});

				/* Delegate hover event on context menu sub menus for the lovely window right bleeding */
					contextMenu.delegate('li:has(ul) span', 'hover', function() {

						var childMenu = $(this).siblings('ul');
						var childMenuOffset = childMenu.offset();

						if ( !childMenuOffset || ((childMenu.offset().left + childMenu.outerWidth()) < $('iframe.content').width()) )
							return;

						childMenu.css('right', childMenu.css('left'));
						childMenu.css('left', 'auto');			

						childMenu.css('width', '190px');			

						childMenu.css('zIndex', '999999');			

					});

				/* Add context menu to iframe */
					contextMenu.appendTo($i('body'));

				/* Context Menu overflow */
					if ( (event.pageX + contextMenu.outerWidth()) > $('iframe.content').width() ) {

						var overflow = $('iframe.content').width() - (event.pageX + contextMenu.outerWidth());
						contextMenu.css('left', event.pageX + overflow - 20);

					}

				/* Prevent regular context menu from opening */
					event.preventDefault();
					return false;

			}

			/* Scrap function for when a inspector context menu item is clicked */
			inspectorContextMenuItemClick = function(event) {

				if ( $(this).hasClass('group-title') )
					return;

				/* Block Options Click */
				if ( $(this).parents('li').first().hasClass('inspector-context-menu-block-options') ) {

					openBlockOptions(getBlock($(inspectorElement)));

				/* DE Click */
				} else {

					var inspectorElementOptions = $(this).parents('ul.inspector-context-menu').first().data('element-options');
					var instanceID = $(this).parents('li').first().data('instance-id');
					var stateID = $(this).parents('li').first().data('state-id');

					/* Open panel and switch to editor panel */
					$('div#panel').tabs('select', 'editor-tab');
					showPanel();

					/* Remove the highlight on the previously selected elements */
					$('.design-editor-element-selector-container .ui-state-active').removeClass('ui-state-active');

					/* Handle Top Level Elements */
						if ( typeof inspectorElementOptions['parent'] == 'undefined' || !inspectorElementOptions['parent'] ) {

							$('ul#design-editor-main-elements li#element-' + inspectorElementOptions['id']).find('span').trigger('click');

					/* Handle Sub Elements */
						} else {

							$('ul#design-editor-main-elements li#element-' + inspectorElementOptions['parent']).addClass('ui-state-active');

							$('ul#design-editor-sub-elements').show();
							$('ul#design-editor-sub-elements li').hide().removeClass('ui-state-active');
							$('ul#design-editor-sub-elements li.parent-element-' + inspectorElementOptions['parent']).show();
							$('ul#design-editor-sub-elements').data('main_element', inspectorElementOptions['parent']);
							$('ul#design-editor-sub-elements').scrollbarPaper();

							/* Open sub element inputs */
							$('ul#design-editor-sub-elements li#element-' + inspectorElementOptions['id']).find('span').trigger('click');

						}

					/* Instances */
						if ( typeof instanceID != 'undefined' ) {

							designEditor.selectInstance(instanceID);

						}

					/* States */
						if ( typeof stateID != 'undefined' ) {

							designEditor.selectState(stateID);

						}

					/* Layout-specific customizations */
						if ( $(this).parents('li').first().hasClass('inspector-context-menu-edit-for-layout') ) {

							$('span.customize-element-for-layout').trigger('click');

						}

				}

				/* Hide any inspector context menus */
				$i('.inspector-context-menu').remove();

				/* Reactivate inspector tooltip */
				inspectorTooltip.show();
				Headway.inspectorDisabled = false;

			}

	toggleInspector = function() {

		if ( Headway.mode != 'design' || !Headway.designEditorSupport )
			return false;

		if ( $('#toggle-inspector').hasClass('inspector-disabled') )
			return enableInspector();

		disableInspector();

	}

	disableInspector = function() {

		if ( Headway.mode != 'design' || !Headway.designEditorSupport )
			return false;

		Headway.inspectorDisabled = true;

		delete Headway.disableBlockDimensions;
		delete inspectorElement;

		$i('.inspector-element-hover').removeClass('inspector-element-hover');
		$i('body').removeClass('disable-block-hover').addClass('inspector-disabled'); 
		$i('.block').qtip('enable');

		inspectorTooltip.hide();
		hideFeatureExplanation('inspector');

		$i('body').unbind('mousemove', inspectorMouseMove);
		$i('body').unbind('mouseup', inspectorMouseUpLeft);
		$i('body').unbind('contextmenu', inspectorMouseContextMenu);

		Headway.iframe.contents().unbind('keydown', inspectorNudging);
		Headway.iframe.unbind('keydown', inspectorNudging);

		removeInspectorVisibleBoxModal();

		$('#toggle-inspector').text('Enable Inspector').addClass('inspector-disabled').removeClass('mode-button-depressed');

	}

	enableInspector = function() {

		if ( Headway.mode != 'design' || !Headway.designEditorSupport )
			return false;

		Headway.inspectorDisabled = false;
		Headway.disableBlockDimensions = true;

		$i('body').addClass('disable-block-hover').removeClass('inspector-disabled'); 
		$i('.block').qtip('disable');

		inspectorTooltip.show();

		$i('body').bind('mousemove', inspectorMouseMove);
		$i('body').bind('mouseup', inspectorMouseUpLeft);
		$i('body').bind('contextmenu', inspectorMouseContextMenu);

		/* For some reason the iframe doesn't always focus correctly so both of these bindings are needed */
		Headway.iframe.contents().bind('keydown', inspectorNudging);
		Headway.iframe.bind('keydown', inspectorNudging);

		/* Focus iframe on mouseover */
		Headway.iframe.bind('mouseover', function() {
			Headway.iframe.focus();
		});

		showFeatureExplanation('inspector', '<strong>Right-click</strong> highlighted elements to style them.<br /><br />Once an element is selected, you may nudge it using your arrow keys.<br /><br />The faded orange and purple are the margins and padding.  These colors are only visible when the inspector is active.', 'Please be sure you understand how the Design Editor inspector works before hiding this message.');

		updateInspectorVisibleBoxModal();

		$('#toggle-inspector').text('Disable Inspector').removeClass('inspector-disabled').addClass('mode-button-depressed');

	}

	inspectorNudging = function(event) {

		var key = event.keyCode;

		if ( key < 37 || key > 40 || !$i('.inspector-element-selected').length || $i('.inspector-element-selected').is('body') )
			return;

		var interval = event.shiftKey ? 5 : 1;

		/* Get the selector that way the stylesheet object can be used */
		var methodInput = $('.design-editor-box-nudging .design-editor-property-position select', '#editor-tab');
		var methodInputHidden = methodInput.parents('.design-editor-property-position').find('input[type="hidden"]');
		
		var selector = methodInputHidden.attr('element_selector');

		/* Set the 3 nudging properties to customized */
		$('.design-editor-box-nudging .uncustomized-property .customize-property span', '#editor-tab').trigger('click');

		/* Set the nudging method to whatever the position property is of the element as long as it's not static */
		if ( $i('.inspector-element-selected').css('position') != 'static' ) {

			var positionMethod = $i('.inspector-element-selected').css('position');

			$i('.inspector-element-selected').css({
				position: positionMethod	
			});

			methodInput.val(positionMethod).trigger('change');

		} else {

			var positionMethod = 'relative';

			$i('.inspector-element-selected').css({
				position: positionMethod	
			});

			methodInput.val(positionMethod).trigger('change');

		}

		switch ( key ) {

			/* Left */
			case 37:

				var previousLeft = parseInt($i('.inspector-element-selected').css('left'));

				if ( isNaN(previousLeft) )
					var previousLeft = 0;

				stylesheet.update_rule(selector, {"left": (previousLeft - interval) + 'px'});

				var currentLeft = $i('.inspector-element-selected').css('left').replace('px', '');
				$('.design-editor-box-nudging .design-editor-property-left input[type="text"]', '#editor-tab').val(currentLeft).trigger('change');

			break;

			/* Up */
			case 38:

				var previousTop = parseInt($i('.inspector-element-selected').css('top'));

				if ( isNaN(previousTop) )
					previousTop = 0;

				stylesheet.update_rule(selector, {"top": (previousTop - interval) + 'px'});

				var currentTop = $i('.inspector-element-selected').css('top').replace('px', '');
				$('.design-editor-box-nudging .design-editor-property-top input[type="text"]', '#editor-tab').val(currentTop).trigger('change');

			break;

			/* Right */
			case 39:

				var previousLeft = parseInt($i('.inspector-element-selected').css('left'));

				if ( isNaN(previousLeft) )
					var previousLeft = 0;

				stylesheet.update_rule(selector, {"left": (previousLeft + interval) + 'px'});

				var currentLeft = $i('.inspector-element-selected').css('left').replace('px', '');
				$('.design-editor-box-nudging .design-editor-property-left input[type="text"]', '#editor-tab').val(currentLeft).trigger('change');

			break;

			/* Down */
			case 40:

				var previousTop = parseInt($i('.inspector-element-selected').css('top'));

				if ( isNaN(previousTop) )
					previousTop = 0;

				stylesheet.update_rule(selector, {"top": (previousTop + interval) + 'px'});

				var currentTop = $i('.inspector-element-selected').css('top').replace('px', '');
				$('.design-editor-box-nudging .design-editor-property-top input[type="text"]', '#editor-tab').val(currentTop).trigger('change');

			break;

		}

		/* Prevent scrolling */
		event.preventDefault();
		return false;

	}
/* END INSPECTOR */


/* ELEMENT INFO */
	setElementInfoSelector = function(selector) {

		var sanitizedSelector = selector.replace(/\\/g, '');

		$('div.design-editor-info code', designEditor.context).attr('title', sanitizedSelector + '<br /><em>Click to Style in Live CSS Editor</em>');		
		$('div.design-editor-info code', designEditor.context).data('selector', sanitizedSelector);

	}

	getElementNodeName = function(node) {

		var clonedNode = node.clone();

		/* Remove indents from the cloned node */
		clonedNode.find('.indent').remove();

		return clonedNode.text();

	}


	setSelectedElementName = function(elementName, suffix, context) {

		if ( typeof suffix == 'undefined' || !suffix )
			var suffix = '';

		if ( typeof context == 'undefined' )
			var context = designEditor.context;

		return $('div.design-editor-info h4 span', context).html(sanitizeElementName(elementName) + suffix);

	}


	sanitizeElementName = function(elementName) {

		return $.trim(elementName);

	}
/* END ELEMENT INFO */


/* SKINS */
	initiateSkinImport = function(input) {

		var skinChooser = input;

		if ( !skinChooser.val() )
			return alert('You must select a skin before importing a skin.');

		var skinFile = skinChooser.get(0).files[0];

		if ( skinFile && typeof skinFile.name != 'undefined' && typeof skinFile.type != 'undefined' ) {

			var skinReader = new FileReader();

			skinReader.onload = function(e) { 

				var contents = e.target.result;
				var skin = JSON.parse(contents);

				/* Check to be sure that the JSON file is a layout */
					if ( skin['data-type'] != 'skin' )
						return alert('Cannot load skin.  Please insure that the file is a valid Headway Skin.');

				if ( typeof skin['image-definitions'] != 'undefined' && Object.keys(skin['image-definitions']).length ) {

					showNotification('Currently importing images.', 10000);

					$.post(Headway.ajaxURL, {
						security: Headway.security,
						action: 'headway_visual_editor',
						method: 'import_images',
						importFile: skin
					}, function(response) {
							
						var skin = response;

						/* If there's an error when sideloading images, then hault import. */
						if ( typeof skin['error'] != 'undefined' )
							return alert('Error while importing images for skin: ' + skin['error']);
							
						importSkin(skin);

					});

				} else {

					importSkin(skin);

				}

			}

			skinReader.readAsText(skinFile);

		} else {

			alert('Cannot load skin.  Please insure that the file is a valid Headway Skin.');

		}

	}


	importSkin = function(skin) {

		if ( $('#input-general-skin-import-live-css').val() == 'true' )
			overwriteSkinLiveCSS(skin['live-css']);

		importSkinElementData(skin['element-data']);

		showNotification(skin['name'] + ' skin successfully imported.<br /><br />Remember to save if you wish to apply the skin.', 10000);

		/* Handle skin templates */
			if ( skin['templates'] && Object.keys(skin['templates']).length && $('#input-general-skin-import-layout-templates').val() == 'true' ) {

				if ( typeof GLOBALunsavedValues != 'object' )
					GLOBALunsavedValues = {};

				if ( typeof GLOBALunsavedValues['design-editor'] != 'object' )
					GLOBALunsavedValues['design-editor'] = {};

				GLOBALunsavedValues['design-editor']['skin-import-templates'] = skin['templates'];

				showNotification(skin['name'] + ' skin contains templates.  You must <strong>save and refresh</strong> before they are available for use.', 10000);

			}

		allowSaving();

		return true;

	}


	importSkinElementData = function(data) {

		/* Send the skin data to the unsaved data */
			if ( typeof GLOBALunsavedValues != 'object' )
				GLOBALunsavedValues = {};

			if ( typeof GLOBALunsavedValues['design-editor'] != 'object' )
				GLOBALunsavedValues['design-editor'] = {};

			/* Set skin-import as true that way we know to delete previous design editor data */
			GLOBALunsavedValues['design-editor']['skin-import'] = true;

			$.each(data, function(element, elementData) {

				GLOBALunsavedValues['design-editor'][element] = elementData;

			});
		/* End sending skin data to unsaved data */

		/* Change iframe general CSS to remove all existing design settings */
			/* Hide whitewrap and fade it back in later to avoid the FOUT */
				$i('#whitewrap').hide();

			/* Remove design editor CSS so adhoc can take over */
				$i('link[href^="' + Headway.homeURL + '/?headway-trigger=compiler&file=general-design-editor"]')
					.remove();

			/* Remove existing adhoc and then re-add it to be sure it's clean */
				$(css.stylesheet_node)
					.remove();

				css = new ITStylesheet({document: Headway.iframe.contents()[0]}, 'load');
				stylesheet = css;
		/* End changing iframe general CSS */

		/* Update iframe stylesheet with values */
			var processProperty = function(selector, property, propertyValue) {

				/* Uncustomized properties */
					if ( propertyValue == null || propertyValue == 'null' ) {

						stylesheet.delete_rule_property(selector, property);
						return;

					}

				/* Call developer-defined callback */
					if ( typeof Headway.designEditorProperties[property] == 'undefined' || typeof Headway.designEditorProperties[property]['js-callback'] == 'undefined' )
						return;

					if ( property.indexOf('color') !== -1 && propertyValue != 'transparent' && propertyValue.indexOf('#') !== 0 )
						var propertyValue = '#' + propertyValue;

					var callback = eval('(function(params){' + Headway.designEditorProperties[property]['js-callback'] + '});');

					callback({
						selector: selector,
						property: property,
						value: propertyValue,
						element: $i(selector)
					});

			}

			$.each(data, function(element, elementData) {

				var elementNode = $('.design-editor-element-selector-container #element-' + element);

				if ( !elementNode.length )
					return;

				var elementSelector = designEditorGetElementObject(element).selector;

				if ( !elementSelector )
					return;

				/* Handle CSS for regular elements */
					if ( typeof elementData['properties'] == 'object') {

						$.each(elementData['properties'], function(property, propertyValue) {
							processProperty(elementSelector, property, propertyValue);
						});

					}
				/* End handling CSS for regular elements */

				/* Handle CSS for states */
					if ( typeof elementData['special-element-state'] == 'object' ) {

						$.each(elementData['special-element-state'], function(stateID, stateProperties) {

							var stateSelector = designEditorGetElementObject(element).states[stateID.toLowerCase()]['selector'];

							$.each(stateProperties, function(property, propertyValue) {
								processProperty(stateSelector, property, propertyValue);
							});

						});

					}
				/* End handling CSS for states */

			});
		/* End updating iframe stylesheet with values */

		/* Fade whitewrap back in to avoid FOUT */
			setTimeout(function() {
				$i('#whitewrap').fadeIn(150);
			}, 200);

	}


	overwriteSkinLiveCSS = function(skinCSS) {

		$('textarea#live-css').val(skinCSS);
		updatePanelInputHidden({input: $('textarea#live-css'), value: skinCSS});

		if ( typeof liveCSSEditor != 'undefined' )
			liveCSSEditor.setValue(skinCSS);

		$i('style#live-css-holder').html(skinCSS);

	}


	exportSkinButtonCallback = function(input) {

		var params = {
			'security': Headway.security,
			'action': 'headway_visual_editor',
			'method': 'export_skin',
			'skin-name': $('#input-general-skin-export-name').val(),
			'include-live-css': $('#input-general-skin-export-live-css').val() == 'true' ? 'true' : 'false',
			'included-templates': $('#input-general-skin-export-templates').val()
		}

		var exportURL = Headway.ajaxURL + '?' + $.param(params);

		return window.open(exportURL);

	}

/* END SKINS */

})(jQuery);

;