/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*!
 * Vue.js v2.0.0
 * (c) 2014-2016 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

/**
 * Convert a value to a string that is actually rendered.
 */
function _toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val, 10)
  return (n || n === 0) ? n : val
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null)
  var list = str.split(',')
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true)

/**
 * Remove an item from an array
 */
function remove$1 (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item)
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null)
  return function cachedFn (str) {
    var hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

/**
 * Camelize a hyphen-delmited string.
 */
var camelizeRE = /-(\w)/g
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
})

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
})

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
})

/**
 * Simple bind, faster than native
 */
function bind$1 (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0
  var i = list.length - start
  var ret = new Array(i)
  while (i--) {
    ret[i] = list[i + start]
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key]
  }
  return to
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var toString = Object.prototype.toString
var OBJECT_STRING = '[object Object]'
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {}
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i])
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; }

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  /* eslint-disable eqeqeq */
  return a == b || (
    isObject(a) && isObject(b)
      ? JSON.stringify(a) === JSON.stringify(b)
      : false
  )
  /* eslint-enable eqeqeq */
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: null,

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * List of asset types that a component can own.
   */
  _assetTypes: [
    'component',
    'directive',
    'filter'
  ],

  /**
   * List of lifecycle hooks.
   */
  _lifecycleHooks: [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated'
  ],

  /**
   * Max circular updates allowed in a scheduler flush cycle.
   */
  _maxUpdateCount: 100,

  /**
   * Server rendering?
   */
  _isServer: "client" === 'server'
}

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0)
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w\.\$]/
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  } else {
    var segments = path.split('.')
    return function (obj) {
      for (var i = 0; i < segments.length; i++) {
        if (!obj) { return }
        obj = obj[segments[i]]
      }
      return obj
    }
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {}

// Browser environment sniffing
var inBrowser =
  typeof window !== 'undefined' &&
  Object.prototype.toString.call(window) !== '[object Object]'

var UA = inBrowser && window.navigator.userAgent.toLowerCase()
var isIE = UA && /msie|trident/.test(UA)
var isIE9 = UA && UA.indexOf('msie 9.0') > 0
var isEdge = UA && UA.indexOf('edge/') > 0
var isAndroid = UA && UA.indexOf('android') > 0
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__

/* istanbul ignore next */
function isNative (Ctor) {
  return /native code/.test(Ctor.toString())
}

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = []
  var pending = false
  var timerFunc

  function nextTickHandler () {
    pending = false
    var copies = callbacks.slice(0)
    callbacks.length = 0
    for (var i = 0; i < copies.length; i++) {
      copies[i]()
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve()
    timerFunc = function () {
      p.then(nextTickHandler)
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop) }
    }
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1
    var observer = new MutationObserver(nextTickHandler)
    var textNode = document.createTextNode(String(counter))
    observer.observe(textNode, {
      characterData: true
    })
    timerFunc = function () {
      counter = (counter + 1) % 2
      textNode.data = String(counter)
    }
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = setTimeout
  }

  return function queueNextTick (cb, ctx) {
    var func = ctx
      ? function () { cb.call(ctx) }
      : cb
    callbacks.push(func)
    if (!pending) {
      pending = true
      timerFunc(nextTickHandler, 0)
    }
  }
})()

var _Set
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null)
    }
    Set.prototype.has = function has (key) {
      return this.set[key] !== undefined
    };
    Set.prototype.add = function add (key) {
      this.set[key] = 1
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null)
    };

    return Set;
  }())
}

/* not type checking this file because flow doesn't play well with Proxy */

var hasProxy;
var proxyHandlers;
var initProxy

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  )

  hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/)

  proxyHandlers = {
    has: function has (target, key) {
      var has = key in target
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_'
      if (!has && !isAllowed) {
        warn(
          "Property or method \"" + key + "\" is not defined on the instance but " +
          "referenced during render. Make sure to declare reactive data " +
          "properties in the data option.",
          target
        )
      }
      return has || !isAllowed
    }
  }

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      vm._renderProxy = new Proxy(vm, proxyHandlers)
    } else {
      vm._renderProxy = vm
    }
  }
}

/*  */


var uid$2 = 0

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$2++
  this.subs = []
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub)
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove$1(this.subs, sub)
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this)
  }
};

Dep.prototype.notify = function notify () {
  // stablize the subscriber list first
  var subs = this.subs.slice()
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update()
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null
var targetStack = []

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target) }
  Dep.target = _target
}

function popTarget () {
  Dep.target = targetStack.pop()
}

/*  */


var queue = []
var has$1 = {}
var circular = {}
var waiting = false
var flushing = false
var index = 0

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  queue.length = 0
  has$1 = {}
  {
    circular = {}
  }
  waiting = flushing = false
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; })

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    var watcher = queue[index]
    var id = watcher.id
    has$1[id] = null
    watcher.run()
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has$1[id] != null) {
      circular[id] = (circular[id] || 0) + 1
      if (circular[id] > config._maxUpdateCount) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        )
        break
      }
    }
  }

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush')
  }

  resetSchedulerState()
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id
  if (has$1[id] == null) {
    has$1[id] = true
    if (!flushing) {
      queue.push(watcher)
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1
      while (i >= 0 && queue[i].id > watcher.id) {
        i--
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher)
    }
    // queue the flush
    if (!waiting) {
      waiting = true
      nextTick(flushSchedulerQueue)
    }
  }
}

/*  */

var uid$1 = 0

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  if ( options === void 0 ) options = {};

  this.vm = vm
  vm._watchers.push(this)
  // options
  this.deep = !!options.deep
  this.user = !!options.user
  this.lazy = !!options.lazy
  this.sync = !!options.sync
  this.expression = expOrFn.toString()
  this.cb = cb
  this.id = ++uid$1 // uid for batching
  this.active = true
  this.dirty = this.lazy // for lazy watchers
  this.deps = []
  this.newDeps = []
  this.depIds = new _Set()
  this.newDepIds = new _Set()
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn
  } else {
    this.getter = parsePath(expOrFn)
    if (!this.getter) {
      this.getter = function () {}
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      )
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get()
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this)
  var value = this.getter.call(this.vm, this.vm)
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value)
  }
  popTarget()
  this.cleanupDeps()
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id)
    this.newDeps.push(dep)
    if (!this.depIds.has(id)) {
      dep.addSub(this)
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length
  while (i--) {
    var dep = this$1.deps[i]
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1)
    }
  }
  var tmp = this.depIds
  this.depIds = this.newDepIds
  this.newDepIds = tmp
  this.newDepIds.clear()
  tmp = this.deps
  this.deps = this.newDeps
  this.newDeps = tmp
  this.newDeps.length = 0
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true
  } else if (this.sync) {
    this.run()
  } else {
    queueWatcher(this)
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get()
      if (
        value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value
      this.value = value
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue)
        } catch (e) {
          "development" !== 'production' && warn(
            ("Error in watcher \"" + (this.expression) + "\""),
            this.vm
          )
          /* istanbul ignore else */
          if (config.errorHandler) {
            config.errorHandler.call(null, e, this.vm)
          } else {
            throw e
          }
        }
      } else {
        this.cb.call(this.vm, value, oldValue)
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get()
  this.dirty = false
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length
  while (i--) {
    this$1.deps[i].depend()
  }
};

/**
 * Remove self from all dependencies' subcriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed or is performing a v-for
    // re-render (the watcher list is then filtered by v-for).
    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
      remove$1(this.vm._watchers, this)
    }
    var i = this.deps.length
    while (i--) {
      this$1.deps[i].removeSub(this$1)
    }
    this.active = false
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set()
function traverse (val, seen) {
  var i, keys
  if (!seen) {
    seen = seenObjects
    seen.clear()
  }
  var isA = Array.isArray(val)
  var isO = isObject(val)
  if ((isA || isO) && Object.isExtensible(val)) {
    if (val.__ob__) {
      var depId = val.__ob__.dep.id
      if (seen.has(depId)) {
        return
      } else {
        seen.add(depId)
      }
    }
    if (isA) {
      i = val.length
      while (i--) { traverse(val[i], seen) }
    } else if (isO) {
      keys = Object.keys(val)
      i = keys.length
      while (i--) { traverse(val[keys[i]], seen) }
    }
  }
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method]
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length
    var args = new Array(i)
    while (i--) {
      args[i] = arguments$1[i]
    }
    var result = original.apply(this, args)
    var ob = this.__ob__
    var inserted
    switch (method) {
      case 'push':
        inserted = args
        break
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    if (inserted) { ob.observeArray(inserted) }
    // notify change
    ob.dep.notify()
    return result
  })
})

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods)

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
}

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value
  this.dep = new Dep()
  this.vmCount = 0
  def(value, '__ob__', this)
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment
    augment(value, arrayMethods, arrayKeys)
    this.observeArray(value)
  } else {
    this.walk(value)
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj)
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]])
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i])
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 *
 * istanbul ignore next
 */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i]
    def(target, key, src[key])
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value) {
  if (!isObject(value)) {
    return
  }
  var ob
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__
  } else if (
    observerState.shouldConvert &&
    !config._isServer &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value)
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep()

  var property = Object.getOwnPropertyDescriptor(obj, key)
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get
  var setter = property && property.set

  var childOb = observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val
      if (Dep.target) {
        dep.depend()
        if (childOb) {
          childOb.dep.depend()
        }
        if (Array.isArray(value)) {
          for (var e = void 0, i = 0, l = value.length; i < l; i++) {
            e = value[i]
            e && e.__ob__ && e.__ob__.dep.depend()
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val
      if (newVal === value) {
        return
      }
      if ("development" !== 'production' && customSetter) {
        customSetter()
      }
      if (setter) {
        setter.call(obj, newVal)
      } else {
        val = newVal
      }
      childOb = observe(newVal)
      dep.notify()
    }
  })
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (obj, key, val) {
  if (Array.isArray(obj)) {
    obj.splice(key, 1, val)
    return val
  }
  if (hasOwn(obj, key)) {
    obj[key] = val
    return
  }
  var ob = obj.__ob__
  if (obj._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    )
    return
  }
  if (!ob) {
    obj[key] = val
    return
  }
  defineReactive$$1(ob.value, key, val)
  ob.dep.notify()
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (obj, key) {
  var ob = obj.__ob__
  if (obj._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    )
    return
  }
  if (!hasOwn(obj, key)) {
    return
  }
  delete obj[key]
  if (!ob) {
    return
  }
  ob.dep.notify()
}

/*  */

function initState (vm) {
  vm._watchers = []
  initProps(vm)
  initData(vm)
  initComputed(vm)
  initMethods(vm)
  initWatch(vm)
}

function initProps (vm) {
  var props = vm.$options.props
  if (props) {
    var propsData = vm.$options.propsData || {}
    var keys = vm.$options._propKeys = Object.keys(props)
    var isRoot = !vm.$parent
    // root instance props should be converted
    observerState.shouldConvert = isRoot
    var loop = function ( i ) {
      var key = keys[i]
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, validateProp(key, props, propsData, vm), function () {
          if (vm.$parent && !observerState.isSettingProps) {
            warn(
              "Avoid mutating a prop directly since the value will be " +
              "overwritten whenever the parent component re-renders. " +
              "Instead, use a data or computed property based on the prop's " +
              "value. Prop being mutated: \"" + key + "\"",
              vm
            )
          }
        })
      }
    };

    for (var i = 0; i < keys.length; i++) loop( i );
    observerState.shouldConvert = true
  }
}

function initData (vm) {
  var data = vm.$options.data
  data = vm._data = typeof data === 'function'
    ? data.call(vm)
    : data || {}
  if (!isPlainObject(data)) {
    data = {}
    "development" !== 'production' && warn(
      'data functions should return an object.',
      vm
    )
  }
  // proxy data on instance
  var keys = Object.keys(data)
  var props = vm.$options.props
  var i = keys.length
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      "development" !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      )
    } else {
      proxy(vm, keys[i])
    }
  }
  // observe data
  observe(data)
  data.__ob__ && data.__ob__.vmCount++
}

var computedSharedDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
}

function initComputed (vm) {
  var computed = vm.$options.computed
  if (computed) {
    for (var key in computed) {
      var userDef = computed[key]
      if (typeof userDef === 'function') {
        computedSharedDefinition.get = makeComputedGetter(userDef, vm)
        computedSharedDefinition.set = noop
      } else {
        computedSharedDefinition.get = userDef.get
          ? userDef.cache !== false
            ? makeComputedGetter(userDef.get, vm)
            : bind$1(userDef.get, vm)
          : noop
        computedSharedDefinition.set = userDef.set
          ? bind$1(userDef.set, vm)
          : noop
      }
      Object.defineProperty(vm, key, computedSharedDefinition)
    }
  }
}

function makeComputedGetter (getter, owner) {
  var watcher = new Watcher(owner, getter, noop, {
    lazy: true
  })
  return function computedGetter () {
    if (watcher.dirty) {
      watcher.evaluate()
    }
    if (Dep.target) {
      watcher.depend()
    }
    return watcher.value
  }
}

function initMethods (vm) {
  var methods = vm.$options.methods
  if (methods) {
    for (var key in methods) {
      if (methods[key] != null) {
        vm[key] = bind$1(methods[key], vm)
      } else {
        warn(("Method \"" + key + "\" is undefined in options."), vm)
      }
    }
  }
}

function initWatch (vm) {
  var watch = vm.$options.watch
  if (watch) {
    for (var key in watch) {
      var handler = watch[key]
      if (Array.isArray(handler)) {
        for (var i = 0; i < handler.length; i++) {
          createWatcher(vm, key, handler[i])
        }
      } else {
        createWatcher(vm, key, handler)
      }
    }
  }
}

function createWatcher (vm, key, handler) {
  var options
  if (isPlainObject(handler)) {
    options = handler
    handler = handler.handler
  }
  if (typeof handler === 'string') {
    handler = vm[handler]
  }
  vm.$watch(key, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {}
  dataDef.get = function () {
    return this._data
  }
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      )
    }
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef)

  Vue.prototype.$set = set
  Vue.prototype.$delete = del

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this
    options = options || {}
    options.user = true
    var watcher = new Watcher(vm, expOrFn, cb, options)
    if (options.immediate) {
      cb.call(vm, watcher.value)
    }
    return function unwatchFn () {
      watcher.teardown()
    }
  }
}

function proxy (vm, key) {
  if (!isReserved(key)) {
    Object.defineProperty(vm, key, {
      configurable: true,
      enumerable: true,
      get: function proxyGetter () {
        return vm._data[key]
      },
      set: function proxySetter (val) {
        vm._data[key] = val
      }
    })
  }
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  ns,
  context,
  componentOptions
) {
  this.tag = tag
  this.data = data
  this.children = children
  this.text = text
  this.elm = elm
  this.ns = ns
  this.context = context
  this.key = data && data.key
  this.componentOptions = componentOptions
  this.child = undefined
  this.parent = undefined
  this.raw = false
  this.isStatic = false
  this.isRootInsert = true
  this.isComment = false
  this.isCloned = false
};

var emptyVNode = function () {
  var node = new VNode()
  node.text = ''
  node.isComment = true
  return node
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.ns,
    vnode.context,
    vnode.componentOptions
  )
  cloned.isStatic = vnode.isStatic
  cloned.key = vnode.key
  cloned.isCloned = true
  return cloned
}

function cloneVNodes (vnodes) {
  var res = new Array(vnodes.length)
  for (var i = 0; i < vnodes.length; i++) {
    res[i] = cloneVNode(vnodes[i])
  }
  return res
}

/*  */

function normalizeChildren (
  children,
  ns,
  nestedIndex
) {
  if (isPrimitive(children)) {
    return [createTextVNode(children)]
  }
  if (Array.isArray(children)) {
    var res = []
    for (var i = 0, l = children.length; i < l; i++) {
      var c = children[i]
      var last = res[res.length - 1]
      //  nested
      if (Array.isArray(c)) {
        res.push.apply(res, normalizeChildren(c, ns, i))
      } else if (isPrimitive(c)) {
        if (last && last.text) {
          last.text += String(c)
        } else if (c !== '') {
          // convert primitive to vnode
          res.push(createTextVNode(c))
        }
      } else if (c instanceof VNode) {
        if (c.text && last && last.text) {
          last.text += c.text
        } else {
          // inherit parent namespace
          if (ns) {
            applyNS(c, ns)
          }
          // default key for nested array children (likely generated by v-for)
          if (c.tag && c.key == null && nestedIndex != null) {
            c.key = "__vlist_" + nestedIndex + "_" + i + "__"
          }
          res.push(c)
        }
      }
    }
    return res
  }
}

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

function applyNS (vnode, ns) {
  if (vnode.tag && !vnode.ns) {
    vnode.ns = ns
    if (vnode.children) {
      for (var i = 0, l = vnode.children.length; i < l; i++) {
        applyNS(vnode.children[i], ns)
      }
    }
  }
}

function getFirstComponentChild (children) {
  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
}

function mergeVNodeHook (def$$1, key, hook) {
  var oldHook = def$$1[key]
  if (oldHook) {
    var injectedHash = def$$1.__injected || (def$$1.__injected = {})
    if (!injectedHash[key]) {
      injectedHash[key] = true
      def$$1[key] = function () {
        oldHook.apply(this, arguments)
        hook.apply(this, arguments)
      }
    }
  } else {
    def$$1[key] = hook
  }
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1
) {
  var name, cur, old, fn, event, capture
  for (name in on) {
    cur = on[name]
    old = oldOn[name]
    if (!cur) {
      "development" !== 'production' && warn(
        ("Handler for event \"" + name + "\" is undefined.")
      )
    } else if (!old) {
      capture = name.charAt(0) === '!'
      event = capture ? name.slice(1) : name
      if (Array.isArray(cur)) {
        add(event, (cur.invoker = arrInvoker(cur)), capture)
      } else {
        if (!cur.invoker) {
          fn = cur
          cur = on[name] = {}
          cur.fn = fn
          cur.invoker = fnInvoker(cur)
        }
        add(event, cur.invoker, capture)
      }
    } else if (cur !== old) {
      if (Array.isArray(old)) {
        old.length = cur.length
        for (var i = 0; i < old.length; i++) { old[i] = cur[i] }
        on[name] = old
      } else {
        old.fn = cur
        on[name] = old
      }
    }
  }
  for (name in oldOn) {
    if (!on[name]) {
      event = name.charAt(0) === '!' ? name.slice(1) : name
      remove$$1(event, oldOn[name].invoker)
    }
  }
}

function arrInvoker (arr) {
  return function (ev) {
    var arguments$1 = arguments;

    var single = arguments.length === 1
    for (var i = 0; i < arr.length; i++) {
      single ? arr[i](ev) : arr[i].apply(null, arguments$1)
    }
  }
}

function fnInvoker (o) {
  return function (ev) {
    var single = arguments.length === 1
    single ? o.fn(ev) : o.fn.apply(null, arguments)
  }
}

/*  */

var activeInstance = null

function initLifecycle (vm) {
  var options = vm.$options

  // locate first non-abstract parent
  var parent = options.parent
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent
    }
    parent.$children.push(vm)
  }

  vm.$parent = parent
  vm.$root = parent ? parent.$root : vm

  vm.$children = []
  vm.$refs = {}

  vm._watcher = null
  vm._inactive = false
  vm._isMounted = false
  vm._isDestroyed = false
  vm._isBeingDestroyed = false
}

function lifecycleMixin (Vue) {
  Vue.prototype._mount = function (
    el,
    hydrating
  ) {
    var vm = this
    vm.$el = el
    if (!vm.$options.render) {
      vm.$options.render = emptyVNode
      {
        /* istanbul ignore if */
        if (vm.$options.template) {
          warn(
            'You are using the runtime-only build of Vue where the template ' +
            'option is not available. Either pre-compile the templates into ' +
            'render functions, or use the compiler-included build.',
            vm
          )
        } else {
          warn(
            'Failed to mount component: template or render function not defined.',
            vm
          )
        }
      }
    }
    callHook(vm, 'beforeMount')
    vm._watcher = new Watcher(vm, function () {
      vm._update(vm._render(), hydrating)
    }, noop)
    hydrating = false
    // root instance, call mounted on self
    // mounted is called for child components in its inserted hook
    if (vm.$root === vm) {
      vm._isMounted = true
      callHook(vm, 'mounted')
    }
    return vm
  }

  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate')
    }
    var prevEl = vm.$el
    var prevActiveInstance = activeInstance
    activeInstance = vm
    var prevVnode = vm._vnode
    vm._vnode = vnode
    if (!prevVnode) {
      // Vue.prototype.__patch__ is injected in entry points
      // based on the rendering backend used.
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating)
    } else {
      vm.$el = vm.__patch__(prevVnode, vnode)
    }
    activeInstance = prevActiveInstance
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el
    }
    if (vm._isMounted) {
      callHook(vm, 'updated')
    }
  }

  Vue.prototype._updateFromParent = function (
    propsData,
    listeners,
    parentVnode,
    renderChildren
  ) {
    var vm = this
    var hasChildren = !!(vm.$options._renderChildren || renderChildren)
    vm.$options._parentVnode = parentVnode
    vm.$options._renderChildren = renderChildren
    // update props
    if (propsData && vm.$options.props) {
      observerState.shouldConvert = false
      {
        observerState.isSettingProps = true
      }
      var propKeys = vm.$options._propKeys || []
      for (var i = 0; i < propKeys.length; i++) {
        var key = propKeys[i]
        vm[key] = validateProp(key, vm.$options.props, propsData, vm)
      }
      observerState.shouldConvert = true
      {
        observerState.isSettingProps = false
      }
    }
    // update listeners
    if (listeners) {
      var oldListeners = vm.$options._parentListeners
      vm.$options._parentListeners = listeners
      vm._updateListeners(listeners, oldListeners)
    }
    // resolve slots + force update if has children
    if (hasChildren) {
      vm.$slots = resolveSlots(renderChildren, vm._renderContext)
      vm.$forceUpdate()
    }
  }

  Vue.prototype.$forceUpdate = function () {
    var vm = this
    if (vm._watcher) {
      vm._watcher.update()
    }
  }

  Vue.prototype.$destroy = function () {
    var vm = this
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy')
    vm._isBeingDestroyed = true
    // remove self from parent
    var parent = vm.$parent
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove$1(parent.$children, vm)
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown()
    }
    var i = vm._watchers.length
    while (i--) {
      vm._watchers[i].teardown()
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--
    }
    // call the last hook...
    vm._isDestroyed = true
    callHook(vm, 'destroyed')
    // turn off all instance listeners.
    vm.$off()
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null
    }
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook]
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      handlers[i].call(vm)
    }
  }
  vm.$emit('hook:' + hook)
}

/*  */

var hooks = { init: init, prepatch: prepatch, insert: insert, destroy: destroy$1 }
var hooksToMerge = Object.keys(hooks)

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (!Ctor) {
    return
  }

  if (isObject(Ctor)) {
    Ctor = Vue$3.extend(Ctor)
  }

  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context)
    }
    return
  }

  // async component
  if (!Ctor.cid) {
    if (Ctor.resolved) {
      Ctor = Ctor.resolved
    } else {
      Ctor = resolveAsyncComponent(Ctor, function () {
        // it's ok to queue this on every render because
        // $forceUpdate is buffered by the scheduler.
        context.$forceUpdate()
      })
      if (!Ctor) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.
        return
      }
    }
  }

  data = data || {}

  // extract props
  var propsData = extractProps(data, Ctor)

  // functional component
  if (Ctor.options.functional) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on
  // replace with listeners with .native modifier
  data.on = data.nativeOn

  if (Ctor.options.abstract) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {}
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data)

  // return a placeholder vnode
  var name = Ctor.options.name || tag
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  )
  return vnode
}

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {}
  var propOptions = Ctor.options.props
  if (propOptions) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData)
    }
  }
  return Ctor.options.render.call(
    null,
    // ensure the createElement function in functional components
    // gets a unique context - this is necessary for correct named slot check
    bind$1(createElement, { _self: Object.create(context) }),
    {
      props: props,
      data: data,
      parent: context,
      children: normalizeChildren(children),
      slots: function () { return resolveSlots(children, context); }
    }
  )
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var vnodeComponentOptions = vnode.componentOptions
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children
  }
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate
  if (inlineTemplate) {
    options.render = inlineTemplate.render
    options.staticRenderFns = inlineTemplate.staticRenderFns
  }
  return new vnodeComponentOptions.Ctor(options)
}

function init (vnode, hydrating) {
  if (!vnode.child || vnode.child._isDestroyed) {
    var child = vnode.child = createComponentInstanceForVnode(vnode, activeInstance)
    child.$mount(hydrating ? vnode.elm : undefined, hydrating)
  }
}

function prepatch (
  oldVnode,
  vnode
) {
  var options = vnode.componentOptions
  var child = vnode.child = oldVnode.child
  child._updateFromParent(
    options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
  )
}

function insert (vnode) {
  if (!vnode.child._isMounted) {
    vnode.child._isMounted = true
    callHook(vnode.child, 'mounted')
  }
  if (vnode.data.keepAlive) {
    vnode.child._inactive = false
    callHook(vnode.child, 'activated')
  }
}

function destroy$1 (vnode) {
  if (!vnode.child._isDestroyed) {
    if (!vnode.data.keepAlive) {
      vnode.child.$destroy()
    } else {
      vnode.child._inactive = true
      callHook(vnode.child, 'deactivated')
    }
  }
}

function resolveAsyncComponent (
  factory,
  cb
) {
  if (factory.requested) {
    // pool callbacks
    factory.pendingCallbacks.push(cb)
  } else {
    factory.requested = true
    var cbs = factory.pendingCallbacks = [cb]
    var sync = true

    var resolve = function (res) {
      if (isObject(res)) {
        res = Vue$3.extend(res)
      }
      // cache resolved
      factory.resolved = res
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res)
        }
      }
    }

    var reject = function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      )
    }

    var res = factory(resolve, reject)

    // handle promise
    if (res && typeof res.then === 'function' && !factory.resolved) {
      res.then(resolve, reject)
    }

    sync = false
    // return in case resolved synchronously
    return factory.resolved
  }
}

function extractProps (data, Ctor) {
  // we are only extrating raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props
  if (!propOptions) {
    return
  }
  var res = {}
  var attrs = data.attrs;
  var props = data.props;
  var domProps = data.domProps;
  if (attrs || props || domProps) {
    for (var key in propOptions) {
      var altKey = hyphenate(key)
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey) ||
      checkProp(res, domProps, key, altKey)
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (hash) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key]
      if (!preserve) {
        delete hash[key]
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey]
      if (!preserve) {
        delete hash[altKey]
      }
      return true
    }
  }
  return false
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {}
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i]
    var fromParent = data.hook[key]
    var ours = hooks[key]
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours
  }
}

function mergeHook$1 (a, b) {
  // since all hooks have at most two args, use fixed args
  // to avoid having to use fn.apply().
  return function (_, __) {
    a(_, __)
    b(_, __)
  }
}

/*  */

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  tag,
  data,
  children
) {
  if (data && (Array.isArray(data) || typeof data !== 'object')) {
    children = data
    data = undefined
  }
  // make sure to use real instance instead of proxy as context
  return _createElement(this._self, tag, data, children)
}

function _createElement (
  context,
  tag,
  data,
  children
) {
  if (data && data.__ob__) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    )
    return
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return emptyVNode()
  }
  if (typeof tag === 'string') {
    var Ctor
    var ns = config.getTagNamespace(tag)
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      return new VNode(
        tag, data, normalizeChildren(children, ns),
        undefined, undefined, ns, context
      )
    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      return createComponent(Ctor, data, context, children, tag)
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      return new VNode(
        tag, data, normalizeChildren(children, ns),
        undefined, undefined, ns, context
      )
    }
  } else {
    // direct component options / constructor
    return createComponent(tag, data, context, children)
  }
}

/*  */

function initRender (vm) {
  vm.$vnode = null // the placeholder node in parent tree
  vm._vnode = null // the root of the child tree
  vm._staticTrees = null
  vm._renderContext = vm.$options._parentVnode && vm.$options._parentVnode.context
  vm.$slots = resolveSlots(vm.$options._renderChildren, vm._renderContext)
  // bind the public createElement fn to this instance
  // so that we get proper render context inside it.
  vm.$createElement = bind$1(createElement, vm)
  if (vm.$options.el) {
    vm.$mount(vm.$options.el)
  }
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    nextTick(fn, this)
  }

  Vue.prototype._render = function () {
    var vm = this
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key])
      }
    }

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = []
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode
    // render self
    var vnode
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement)
    } catch (e) {
      {
        warn(("Error when rendering " + (formatComponentName(vm)) + ":"))
      }
      /* istanbul ignore else */
      if (config.errorHandler) {
        config.errorHandler.call(null, e, vm)
      } else {
        if (config._isServer) {
          throw e
        } else {
          setTimeout(function () { throw e }, 0)
        }
      }
      // return previous vnode to prevent render error causing blank component
      vnode = vm._vnode
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        )
      }
      vnode = emptyVNode()
    }
    // set parent
    vnode.parent = _parentVnode
    return vnode
  }

  // shorthands used in render functions
  Vue.prototype._h = createElement
  // toString for mustaches
  Vue.prototype._s = _toString
  // number conversion
  Vue.prototype._n = toNumber
  // empty vnode
  Vue.prototype._e = emptyVNode
  // loose equal
  Vue.prototype._q = looseEqual
  // loose indexOf
  Vue.prototype._i = looseIndexOf

  // render static tree by index
  Vue.prototype._m = function renderStatic (
    index,
    isInFor
  ) {
    var tree = this._staticTrees[index]
    // if has already-rendered static tree and not inside v-for,
    // we can reuse the same tree by doing a shallow clone.
    if (tree && !isInFor) {
      return Array.isArray(tree)
        ? cloneVNodes(tree)
        : cloneVNode(tree)
    }
    // otherwise, render a fresh tree.
    tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(this._renderProxy)
    if (Array.isArray(tree)) {
      for (var i = 0; i < tree.length; i++) {
        tree[i].isStatic = true
        tree[i].key = "__static__" + index + "_" + i
      }
    } else {
      tree.isStatic = true
      tree.key = "__static__" + index
    }
    return tree
  }

  // filter resolution helper
  var identity = function (_) { return _; }
  Vue.prototype._f = function resolveFilter (id) {
    return resolveAsset(this.$options, 'filters', id, true) || identity
  }

  // render v-for
  Vue.prototype._l = function renderList (
    val,
    render
  ) {
    var ret, i, l, keys, key
    if (Array.isArray(val)) {
      ret = new Array(val.length)
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = render(val[i], i)
      }
    } else if (typeof val === 'number') {
      ret = new Array(val)
      for (i = 0; i < val; i++) {
        ret[i] = render(i + 1, i)
      }
    } else if (isObject(val)) {
      keys = Object.keys(val)
      ret = new Array(keys.length)
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i]
        ret[i] = render(val[key], key, i)
      }
    }
    return ret
  }

  // renderSlot
  Vue.prototype._t = function (
    name,
    fallback
  ) {
    var slotNodes = this.$slots[name]
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      )
      slotNodes._rendered = true
    }
    return slotNodes || fallback
  }

  // apply v-bind object
  Vue.prototype._b = function bindProps (
    data,
    value,
    asProp
  ) {
    if (value) {
      if (!isObject(value)) {
        "development" !== 'production' && warn(
          'v-bind without argument expects an Object or Array value',
          this
        )
      } else {
        if (Array.isArray(value)) {
          value = toObject(value)
        }
        for (var key in value) {
          if (key === 'class' || key === 'style') {
            data[key] = value[key]
          } else {
            var hash = asProp || config.mustUseProp(key)
              ? data.domProps || (data.domProps = {})
              : data.attrs || (data.attrs = {})
            hash[key] = value[key]
          }
        }
      }
    }
    return data
  }

  // expose v-on keyCodes
  Vue.prototype._k = function getKeyCodes (key) {
    return config.keyCodes[key]
  }
}

function resolveSlots (
  renderChildren,
  context
) {
  var slots = {}
  if (!renderChildren) {
    return slots
  }
  var children = normalizeChildren(renderChildren) || []
  var defaultSlot = []
  var name, child
  for (var i = 0, l = children.length; i < l; i++) {
    child = children[i]
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if (child.context === context &&
        child.data && (name = child.data.slot)) {
      var slot = (slots[name] || (slots[name] = []))
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children)
      } else {
        slot.push(child)
      }
    } else {
      defaultSlot.push(child)
    }
  }
  // ignore single whitespace
  if (defaultSlot.length && !(
    defaultSlot.length === 1 &&
    (defaultSlot[0].text === ' ' || defaultSlot[0].isComment)
  )) {
    slots.default = defaultSlot
  }
  return slots
}

/*  */

function initEvents (vm) {
  vm._events = Object.create(null)
  // init parent attached events
  var listeners = vm.$options._parentListeners
  var on = bind$1(vm.$on, vm)
  var off = bind$1(vm.$off, vm)
  vm._updateListeners = function (listeners, oldListeners) {
    updateListeners(listeners, oldListeners || {}, on, off)
  }
  if (listeners) {
    vm._updateListeners(listeners)
  }
}

function eventsMixin (Vue) {
  Vue.prototype.$on = function (event, fn) {
    var vm = this;(vm._events[event] || (vm._events[event] = [])).push(fn)
    return vm
  }

  Vue.prototype.$once = function (event, fn) {
    var vm = this
    function on () {
      vm.$off(event, on)
      fn.apply(vm, arguments)
    }
    on.fn = fn
    vm.$on(event, on)
    return vm
  }

  Vue.prototype.$off = function (event, fn) {
    var vm = this
    // all
    if (!arguments.length) {
      vm._events = Object.create(null)
      return vm
    }
    // specific event
    var cbs = vm._events[event]
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null
      return vm
    }
    // specific handler
    var cb
    var i = cbs.length
    while (i--) {
      cb = cbs[i]
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1)
        break
      }
    }
    return vm
  }

  Vue.prototype.$emit = function (event) {
    var vm = this
    var cbs = vm._events[event]
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs
      var args = toArray(arguments, 1)
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args)
      }
    }
    return vm
  }
}

/*  */

var uid = 0

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this
    // a uid
    vm._uid = uid++
    // a flag to avoid this being observed
    vm._isVue = true
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm),
        options || {},
        vm
      )
    }
    /* istanbul ignore else */
    {
      initProxy(vm)
    }
    // expose real self
    vm._self = vm
    initLifecycle(vm)
    initEvents(vm)
    callHook(vm, 'beforeCreate')
    initState(vm)
    callHook(vm, 'created')
    initRender(vm)
  }

  function initInternalComponent (vm, options) {
    var opts = vm.$options = Object.create(resolveConstructorOptions(vm))
    // doing this because it's faster than dynamic enumeration.
    opts.parent = options.parent
    opts.propsData = options.propsData
    opts._parentVnode = options._parentVnode
    opts._parentListeners = options._parentListeners
    opts._renderChildren = options._renderChildren
    opts._componentTag = options._componentTag
    if (options.render) {
      opts.render = options.render
      opts.staticRenderFns = options.staticRenderFns
    }
  }

  function resolveConstructorOptions (vm) {
    var Ctor = vm.constructor
    var options = Ctor.options
    if (Ctor.super) {
      var superOptions = Ctor.super.options
      var cachedSuperOptions = Ctor.superOptions
      if (superOptions !== cachedSuperOptions) {
        // super option changed
        Ctor.superOptions = superOptions
        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
        if (options.name) {
          options.components[options.name] = Ctor
        }
      }
    }
    return options
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue$3)
stateMixin(Vue$3)
eventsMixin(Vue$3)
lifecycleMixin(Vue$3)
renderMixin(Vue$3)

var warn = noop
var formatComponentName

{
  var hasConsole = typeof console !== 'undefined'

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ))
    }
  }

  formatComponentName = function (vm) {
    if (vm.$root === vm) {
      return 'root instance'
    }
    var name = vm._isVue
      ? vm.$options.name || vm.$options._componentTag
      : vm.name
    return name ? ("component <" + name + ">") : "anonymous component"
  }

  var formatLocation = function (str) {
    if (str === 'anonymous component') {
      str += " - use the \"name\" option for better debugging messages."
    }
    return ("(found in " + str + ")")
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      )
    }
    return defaultStrat(parent, child)
  }

  strats.name = function (parent, child, vm) {
    if (vm && child) {
      warn(
        'options "name" can only be used as a component definition option, ' +
        'not during instance creation.'
      )
    }
    return defaultStrat(parent, child)
  }
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  var key, toVal, fromVal
  for (key in from) {
    toVal = to[key]
    fromVal = from[key]
    if (!hasOwn(to, key)) {
      set(to, key, fromVal)
    } else if (isObject(toVal) && isObject(fromVal)) {
      mergeData(toVal, fromVal)
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      )
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

/**
 * Hooks and param attributes are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

config._lifecycleHooks.forEach(function (hook) {
  strats[hook] = mergeHook
})

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null)
  return childVal
    ? extend(res, childVal)
    : res
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets
})

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return parentVal }
  if (!parentVal) { return childVal }
  var ret = {}
  extend(ret, parentVal)
  for (var key in childVal) {
    var parent = ret[key]
    var child = childVal[key]
    if (parent && !Array.isArray(parent)) {
      parent = [parent]
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child]
  }
  return ret
}

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return parentVal }
  if (!parentVal) { return childVal }
  var ret = Object.create(null)
  extend(ret, parentVal)
  extend(ret, childVal)
  return ret
}

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
}

/**
 * Make sure component options get converted to actual
 * constructors.
 */
function normalizeComponents (options) {
  if (options.components) {
    var components = options.components
    var def
    for (var key in components) {
      var lower = key.toLowerCase()
      if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
        "development" !== 'production' && warn(
          'Do not use built-in or reserved HTML elements as component ' +
          'id: ' + key
        )
        continue
      }
      def = components[key]
      if (isPlainObject(def)) {
        components[key] = Vue$3.extend(def)
      }
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props
  if (!props) { return }
  var res = {}
  var i, val, name
  if (Array.isArray(props)) {
    i = props.length
    while (i--) {
      val = props[i]
      if (typeof val === 'string') {
        name = camelize(val)
        res[name] = { type: null }
      } else {
        warn('props must be strings when using array syntax.')
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key]
      name = camelize(key)
      res[name] = isPlainObject(val)
        ? val
        : { type: val }
    }
  }
  options.props = res
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key]
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def }
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  normalizeComponents(child)
  normalizeProps(child)
  normalizeDirectives(child)
  var extendsFrom = child.extends
  if (extendsFrom) {
    parent = typeof extendsFrom === 'function'
      ? mergeOptions(parent, extendsFrom.options, vm)
      : mergeOptions(parent, extendsFrom, vm)
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i]
      if (mixin.prototype instanceof Vue$3) {
        mixin = mixin.options
      }
      parent = mergeOptions(parent, mixin, vm)
    }
  }
  var options = {}
  var key
  for (key in parent) {
    mergeField(key)
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key)
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat
    options[key] = strat(parent[key], child[key], vm, key)
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type]
  var res = assets[id] ||
    // camelCase ID
    assets[camelize(id)] ||
    // Pascal Case ID
    assets[capitalize(camelize(id))]
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    )
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key]
  var absent = !hasOwn(propsData, key)
  var value = propsData[key]
  // handle boolean props
  if (getType(prop.type) === 'Boolean') {
    if (absent && !hasOwn(prop, 'default')) {
      value = false
    } else if (value === '' || value === hyphenate(key)) {
      value = true
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key)
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert
    observerState.shouldConvert = true
    observe(value)
    observerState.shouldConvert = prevShouldConvert
  }
  {
    assertProp(prop, key, value, vm, absent)
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, name) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    "development" !== 'production' && warn(
      'Invalid default value for prop "' + name + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    )
  }
  // call factory function for non-Function types
  return typeof def === 'function' && prop.type !== Function
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    )
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type
  var valid = !type || type === true
  var expectedTypes = []
  if (type) {
    if (!Array.isArray(type)) {
      type = [type]
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i])
      expectedTypes.push(assertedType.expectedType)
      valid = assertedType.valid
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    )
    return
  }
  var validator = prop.validator
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      )
    }
  }
}

/**
 * Assert the type of a value
 */
function assertType (value, type) {
  var valid
  var expectedType = getType(type)
  if (expectedType === 'String') {
    valid = typeof value === (expectedType = 'string')
  } else if (expectedType === 'Number') {
    valid = typeof value === (expectedType = 'number')
  } else if (expectedType === 'Boolean') {
    valid = typeof value === (expectedType = 'boolean')
  } else if (expectedType === 'Function') {
    valid = typeof value === (expectedType = 'function')
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value)
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value)
  } else {
    valid = value instanceof type
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/)
  return match && match[1]
}



var util = Object.freeze({
	defineReactive: defineReactive$$1,
	_toString: _toString,
	toNumber: toNumber,
	makeMap: makeMap,
	isBuiltInTag: isBuiltInTag,
	remove: remove$1,
	hasOwn: hasOwn,
	isPrimitive: isPrimitive,
	cached: cached,
	camelize: camelize,
	capitalize: capitalize,
	hyphenate: hyphenate,
	bind: bind$1,
	toArray: toArray,
	extend: extend,
	isObject: isObject,
	isPlainObject: isPlainObject,
	toObject: toObject,
	noop: noop,
	no: no,
	genStaticKeys: genStaticKeys,
	looseEqual: looseEqual,
	looseIndexOf: looseIndexOf,
	isReserved: isReserved,
	def: def,
	parsePath: parsePath,
	hasProto: hasProto,
	inBrowser: inBrowser,
	UA: UA,
	isIE: isIE,
	isIE9: isIE9,
	isEdge: isEdge,
	isAndroid: isAndroid,
	isIOS: isIOS,
	devtools: devtools,
	nextTick: nextTick,
	get _Set () { return _Set; },
	mergeOptions: mergeOptions,
	resolveAsset: resolveAsset,
	get warn () { return warn; },
	get formatComponentName () { return formatComponentName; },
	validateProp: validateProp
});

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return
    }
    // additional parameters
    var args = toArray(arguments, 1)
    args.unshift(this)
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args)
    } else {
      plugin.apply(null, args)
    }
    plugin.installed = true
    return this
  }
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    Vue.options = mergeOptions(Vue.options, mixin)
  }
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0
  var cid = 1

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {}
    var Super = this
    var isFirstExtend = Super.cid === 0
    if (isFirstExtend && extendOptions._Ctor) {
      return extendOptions._Ctor
    }
    var name = extendOptions.name || Super.options.name
    {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characaters and the hyphen.'
        )
        name = null
      }
    }
    var Sub = function VueComponent (options) {
      this._init(options)
    }
    Sub.prototype = Object.create(Super.prototype)
    Sub.prototype.constructor = Sub
    Sub.cid = cid++
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    )
    Sub['super'] = Super
    // allow further extension
    Sub.extend = Super.extend
    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type]
    })
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub
    }
    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options
    Sub.extendOptions = extendOptions
    // cache constructor
    if (isFirstExtend) {
      extendOptions._Ctor = Sub
    }
    return Sub
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            )
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id
          definition = Vue.extend(definition)
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition }
        }
        this.options[type + 's'][id] = definition
        return definition
      }
    }
  })
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  created: function created () {
    this.cache = Object.create(null)
  },
  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default)
    if (vnode && vnode.componentOptions) {
      var opts = vnode.componentOptions
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? opts.Ctor.cid + '::' + opts.tag
        : vnode.key
      if (this.cache[key]) {
        vnode.child = this.cache[key].child
      } else {
        this.cache[key] = vnode
      }
      vnode.data.keepAlive = true
    }
    return vnode
  },
  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this.cache) {
      var vnode = this$1.cache[key]
      callHook(vnode.child, 'deactivated')
      vnode.child.$destroy()
    }
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {}
  configDef.get = function () { return config; }
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      )
    }
  }
  Object.defineProperty(Vue, 'config', configDef)
  Vue.util = util
  Vue.set = set
  Vue.delete = del
  Vue.nextTick = nextTick

  Vue.options = Object.create(null)
  config._assetTypes.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null)
  })

  extend(Vue.options.components, builtInComponents)

  initUse(Vue)
  initMixin$1(Vue)
  initExtend(Vue)
  initAssetRegisters(Vue)
}

initGlobalAPI(Vue$3)

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: function () { return config._isServer; }
})

Vue$3.version = '2.0.0'

/*  */

// attributes that should be using props for binding
var mustUseProp = makeMap('value,selected,checked,muted')

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck')

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
)

var isAttr = makeMap(
  'accept,accept-charset,accesskey,action,align,alt,async,autocomplete,' +
  'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,' +
  'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,' +
  'name,contenteditable,contextmenu,controls,coords,data,datetime,default,' +
  'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,' +
  'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,' +
  'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,' +
  'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,' +
  'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,' +
  'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,' +
  'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,' +
  'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,' +
  'target,title,type,usemap,value,width,wrap'
)



var xlinkNS = 'http://www.w3.org/1999/xlink'

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
}

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
}

var isFalsyAttrValue = function (val) {
  return val == null || val === false
}

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data
  var parentNode = vnode
  var childNode = vnode
  while (childNode.child) {
    childNode = childNode.child._vnode
    if (childNode.data) {
      data = mergeClassData(childNode.data, data)
    }
  }
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data)
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: child.class
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class
  var staticClass = data.staticClass
  if (staticClass || dynamicClass) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  var res = ''
  if (!value) {
    return res
  }
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    var stringified
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        if ((stringified = stringifyClass(value[i]))) {
          res += stringified + ' '
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' ' }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
}

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
)

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr',
  true
)

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',
  true
)

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track',
  true
)

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,' +
  'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
)

var isPreTag = function (tag) { return tag === 'pre'; }

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
}

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null)
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase()
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag)
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selector = el
    el = document.querySelector(el)
    if (!el) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + selector
      )
      return document.createElement('div')
    }
  }
  return el
}

/*  */

function createElement$1 (tagName) {
  return document.createElement(tagName)
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode)
}

function removeChild (node, child) {
  node.removeChild(child)
}

function appendChild (node, child) {
  node.appendChild(child)
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text
}

function childNodes (node) {
  return node.childNodes
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val)
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	childNodes: childNodes,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode)
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true)
      registerRef(vnode)
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true)
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref
  if (!key) { return }

  var vm = vnode.context
  var ref = vnode.child || vnode.elm
  var refs = vm.$refs
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove$1(refs[key], ref)
    } else if (refs[key] === ref) {
      refs[key] = undefined
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key])) {
        refs[key].push(ref)
      } else {
        refs[key] = [ref]
      }
    } else {
      refs[key] = ref
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyData = {}
var emptyNode = new VNode('', emptyData, [])
var hooks$1 = ['create', 'update', 'postpatch', 'remove', 'destroy']

function isUndef (s) {
  return s == null
}

function isDef (s) {
  return s != null
}

function sameVnode (vnode1, vnode2) {
  return (
    vnode1.key === vnode2.key &&
    vnode1.tag === vnode2.tag &&
    vnode1.isComment === vnode2.isComment &&
    !vnode1.data === !vnode2.data
  )
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key
  var map = {}
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key
    if (isDef(key)) { map[key] = i }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j
  var cbs = {}

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks$1.length; ++i) {
    cbs[hooks$1[i]] = []
    for (j = 0; j < modules.length; ++j) {
      if (modules[j][hooks$1[i]] !== undefined) { cbs[hooks$1[i]].push(modules[j][hooks$1[i]]) }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeElement(childElm)
      }
    }
    remove$$1.listeners = listeners
    return remove$$1
  }

  function removeElement (el) {
    var parent = nodeOps.parentNode(el)
    nodeOps.removeChild(parent, el)
  }

  function createElm (vnode, insertedVnodeQueue, nested) {
    var i
    var data = vnode.data
    vnode.isRootInsert = !nested
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode) }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(i = vnode.child)) {
        initComponent(vnode, insertedVnodeQueue)
        return vnode.elm
      }
    }
    var children = vnode.children
    var tag = vnode.tag
    if (isDef(tag)) {
      {
        if (
          !vnode.ns &&
          !(config.ignoredElements && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          )
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag)
      setScope(vnode)
      createChildren(vnode, children, insertedVnodeQueue)
      if (isDef(data)) {
        invokeCreateHooks(vnode, insertedVnodeQueue)
      }
    } else if (vnode.isComment) {
      vnode.elm = nodeOps.createComment(vnode.text)
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text)
    }
    return vnode.elm
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        nodeOps.appendChild(vnode.elm, createElm(children[i], insertedVnodeQueue, true))
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text))
    }
  }

  function isPatchable (vnode) {
    while (vnode.child) {
      vnode = vnode.child._vnode
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode)
    }
    i = vnode.data.hook // Reuse variable
    if (isDef(i)) {
      if (i.create) { i.create(emptyNode, vnode) }
      if (i.insert) { insertedVnodeQueue.push(vnode) }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (vnode.data.pendingInsert) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)
    }
    vnode.elm = vnode.child.$el
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue)
      setScope(vnode)
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode)
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode)
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i
    if (isDef(i = vnode.context) && isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '')
    }
    if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '')
    }
  }

  function addVnodes (parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      nodeOps.insertBefore(parentElm, createElm(vnodes[startIdx], insertedVnodeQueue), before)
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j
    var data = vnode.data
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode) }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode) }
    }
    if (isDef(i = vnode.child) && !data.keepAlive) {
      invokeDestroyHook(i._vnode)
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j])
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx]
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch)
          invokeDestroyHook(ch)
        } else { // Text node
          nodeOps.removeChild(parentElm, ch.elm)
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (rm || isDef(vnode.data)) {
      var listeners = cbs.remove.length + 1
      if (!rm) {
        // directly removing
        rm = createRmCb(vnode.elm, listeners)
      } else {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.child) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm)
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm)
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm)
      } else {
        rm()
      }
    } else {
      removeElement(vnode.elm)
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0
    var newStartIdx = 0
    var oldEndIdx = oldCh.length - 1
    var oldStartVnode = oldCh[0]
    var oldEndVnode = oldCh[oldEndIdx]
    var newEndIdx = newCh.length - 1
    var newStartVnode = newCh[0]
    var newEndVnode = newCh[newEndIdx]
    var oldKeyToIdx, idxInOld, elmToMove, before

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx]
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
        oldStartVnode = oldCh[++oldStartIdx]
        newStartVnode = newCh[++newStartIdx]
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
        oldEndVnode = oldCh[--oldEndIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
        oldStartVnode = oldCh[++oldStartIdx]
        newEndVnode = newCh[--newEndIdx]
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
        oldEndVnode = oldCh[--oldEndIdx]
        newStartVnode = newCh[++newStartIdx]
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx) }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null
        if (isUndef(idxInOld)) { // New element
          nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm)
          newStartVnode = newCh[++newStartIdx]
        } else {
          elmToMove = oldCh[idxInOld]
          /* istanbul ignore if */
          if ("development" !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            )
          }
          if (elmToMove.tag !== newStartVnode.tag) {
            // same key but different element. treat as new element
            nodeOps.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm)
            newStartVnode = newCh[++newStartIdx]
          } else {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)
            oldCh[idxInOld] = undefined
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm)
            newStartVnode = newCh[++newStartIdx]
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      before = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (vnode.isStatic &&
        oldVnode.isStatic &&
        vnode.key === oldVnode.key &&
        vnode.isCloned) {
      vnode.elm = oldVnode.elm
      return
    }
    var i, hook
    var hasData = isDef(i = vnode.data)
    if (hasData && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
      i(oldVnode, vnode)
    }
    var elm = vnode.elm = oldVnode.elm
    var oldCh = oldVnode.children
    var ch = vnode.children
    if (hasData && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode) }
      if (isDef(hook) && isDef(i = hook.update)) { i(oldVnode, vnode) }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly) }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, '') }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1)
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '')
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text)
    }
    if (hasData) {
      for (i = 0; i < cbs.postpatch.length; ++i) { cbs.postpatch[i](oldVnode, vnode) }
      if (isDef(hook) && isDef(i = hook.postpatch)) { i(oldVnode, vnode) }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (initial && vnode.parent) {
      vnode.parent.data.pendingInsert = queue
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i])
      }
    }
  }

  var bailed = false
  function hydrate (elm, vnode, insertedVnodeQueue) {
    {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */) }
      if (isDef(i = vnode.child)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue)
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        var childNodes = nodeOps.childNodes(elm)
        // empty element, allow client to pick up and populate children
        if (!childNodes.length) {
          createChildren(vnode, children, insertedVnodeQueue)
        } else {
          var childrenMatch = true
          if (childNodes.length !== children.length) {
            childrenMatch = false
          } else {
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!hydrate(childNodes[i$1], children[i$1], insertedVnodeQueue)) {
                childrenMatch = false
                break
              }
            }
          }
          if (!childrenMatch) {
            if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed) {
              bailed = true
              console.warn('Parent: ', elm)
              console.warn('Mismatching childNodes vs. VNodes: ', childNodes, children)
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        invokeCreateHooks(vnode, insertedVnodeQueue)
      }
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (vnode.tag) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag === nodeOps.tagName(node).toLowerCase()
      )
    } else {
      return _toString(vnode.text) === node.data
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    var elm, parent
    var isInitialPatch = false
    var insertedVnodeQueue = []

    if (!oldVnode) {
      // empty mount, create new root element
      isInitialPatch = true
      createElm(vnode, insertedVnodeQueue)
    } else {
      var isRealElement = isDef(oldVnode.nodeType)
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
            oldVnode.removeAttribute('server-rendered')
            hydrating = true
          }
          if (hydrating) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true)
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              )
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode)
        }
        elm = oldVnode.elm
        parent = nodeOps.parentNode(elm)

        createElm(vnode, insertedVnodeQueue)

        // component root element replaced.
        // update parent placeholder node element.
        if (vnode.parent) {
          vnode.parent.elm = vnode.elm
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent)
            }
          }
        }

        if (parent !== null) {
          nodeOps.insertBefore(parent, vnode.elm, nodeOps.nextSibling(elm))
          removeVnodes(parent, [oldVnode], 0, 0)
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode)
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
    return vnode.elm
  }
}

/*  */

var directives = {
  create: function bindDirectives (oldVnode, vnode) {
    var hasInsert = false
    forEachDirective(oldVnode, vnode, function (def, dir) {
      callHook$1(def, dir, 'bind', vnode, oldVnode)
      if (def.inserted) {
        hasInsert = true
      }
    })
    if (hasInsert) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
        applyDirectives(oldVnode, vnode, 'inserted')
      })
    }
  },
  update: function updateDirectives (oldVnode, vnode) {
    applyDirectives(oldVnode, vnode, 'update')
    // if old vnode has directives but new vnode doesn't
    // we need to teardown the directives on the old one.
    if (oldVnode.data.directives && !vnode.data.directives) {
      applyDirectives(oldVnode, oldVnode, 'unbind')
    }
  },
  postpatch: function postupdateDirectives (oldVnode, vnode) {
    applyDirectives(oldVnode, vnode, 'componentUpdated')
  },
  destroy: function unbindDirectives (vnode) {
    applyDirectives(vnode, vnode, 'unbind')
  }
}

var emptyModifiers = Object.create(null)

function forEachDirective (
  oldVnode,
  vnode,
  fn
) {
  var dirs = vnode.data.directives
  if (dirs) {
    for (var i = 0; i < dirs.length; i++) {
      var dir = dirs[i]
      var def = resolveAsset(vnode.context.$options, 'directives', dir.name, true)
      if (def) {
        var oldDirs = oldVnode && oldVnode.data.directives
        if (oldDirs) {
          dir.oldValue = oldDirs[i].value
        }
        if (!dir.modifiers) {
          dir.modifiers = emptyModifiers
        }
        fn(def, dir)
      }
    }
  }
}

function applyDirectives (
  oldVnode,
  vnode,
  hook
) {
  forEachDirective(oldVnode, vnode, function (def, dir) {
    callHook$1(def, dir, hook, vnode, oldVnode)
  })
}

function callHook$1 (def, dir, hook, vnode, oldVnode) {
  var fn = def && def[hook]
  if (fn) {
    fn(vnode.elm, dir, vnode, oldVnode)
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return
  }
  var key, cur, old
  var elm = vnode.elm
  var oldAttrs = oldVnode.data.attrs || {}
  var attrs = vnode.data.attrs || {}
  // clone observed objects, as the user probably wants to mutate it
  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs)
  }

  for (key in attrs) {
    cur = attrs[key]
    old = oldAttrs[key]
    if (old !== cur) {
      setAttr(elm, key, cur)
    }
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key))
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key)
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key)
    } else {
      el.setAttribute(key, key)
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true')
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key))
    } else {
      el.setAttributeNS(xlinkNS, key, value)
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key)
    } else {
      el.setAttribute(key, value)
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm
  var data = vnode.data
  var oldData = oldVnode.data
  if (!data.staticClass && !data.class &&
      (!oldData || (!oldData.staticClass && !oldData.class))) {
    return
  }

  var cls = genClassForVnode(vnode)

  // handle transition classes
  var transitionClass = el._transitionClasses
  if (transitionClass) {
    cls = concat(cls, stringifyClass(transitionClass))
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls)
    el._prevClass = cls
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

// skip type checking this file because we need to attach private properties
// to elements

function updateDOMListeners (oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return
  }
  var on = vnode.data.on || {}
  var oldOn = oldVnode.data.on || {}
  var add = vnode.elm._v_add || (vnode.elm._v_add = function (event, handler, capture) {
    vnode.elm.addEventListener(event, handler, capture)
  })
  var remove = vnode.elm._v_remove || (vnode.elm._v_remove = function (event, handler) {
    vnode.elm.removeEventListener(event, handler)
  })
  updateListeners(on, oldOn, add, remove)
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (!oldVnode.data.domProps && !vnode.data.domProps) {
    return
  }
  var key, cur
  var elm = vnode.elm
  var oldProps = oldVnode.data.domProps || {}
  var props = vnode.data.domProps || {}
  // clone observed objects, as the user probably wants to mutate it
  if (props.__ob__) {
    props = vnode.data.domProps = extend({}, props)
  }

  for (key in oldProps) {
    if (props[key] == null) {
      elm[key] = undefined
    }
  }
  for (key in props) {
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if ((key === 'textContent' || key === 'innerHTML') && vnode.children) {
      vnode.children.length = 0
    }
    cur = props[key]
    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur
      // avoid resetting cursor position when value is the same
      var strCur = cur == null ? '' : String(cur)
      if (elm.value !== strCur) {
        elm.value = strCur
      }
    } else {
      elm[key] = cur
    }
  }
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var prefixes = ['Webkit', 'Moz', 'ms']

var testEl
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div')
  prop = camelize(prop)
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1)
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
})

function updateStyle (oldVnode, vnode) {
  if ((!oldVnode.data || !oldVnode.data.style) && !vnode.data.style) {
    return
  }
  var cur, name
  var el = vnode.elm
  var oldStyle = oldVnode.data.style || {}
  var style = vnode.data.style || {}

  // handle string
  if (typeof style === 'string') {
    el.style.cssText = style
    return
  }

  var needClone = style.__ob__

  // handle array syntax
  if (Array.isArray(style)) {
    style = vnode.data.style = toObject(style)
  }

  // clone the style for future updates,
  // in case the user mutates the style object in-place.
  if (needClone) {
    style = vnode.data.style = extend({}, style)
  }

  for (name in oldStyle) {
    if (!style[name]) {
      el.style[normalize(name)] = ''
    }
  }
  for (name in style) {
    cur = style[name]
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      el.style[normalize(name)] = cur == null ? '' : cur
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); })
    } else {
      el.classList.add(cls)
    }
  } else {
    var cur = ' ' + el.getAttribute('class') + ' '
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim())
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); })
    } else {
      el.classList.remove(cls)
    }
  } else {
    var cur = ' ' + el.getAttribute('class') + ' '
    var tar = ' ' + cls + ' '
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ')
    }
    el.setAttribute('class', cur.trim())
  }
}

/*  */

var hasTransition = inBrowser && !isIE9
var TRANSITION = 'transition'
var ANIMATION = 'animation'

// Transition property/event sniffing
var transitionProp = 'transition'
var transitionEndEvent = 'transitionend'
var animationProp = 'animation'
var animationEndEvent = 'animationend'
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition'
    transitionEndEvent = 'webkitTransitionEnd'
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation'
    animationEndEvent = 'webkitAnimationEnd'
  }
}

var raf = (inBrowser && window.requestAnimationFrame) || setTimeout
function nextFrame (fn) {
  raf(function () {
    raf(fn)
  })
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls)
  addClass(el, cls)
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove$1(el._transitionClasses, cls)
  }
  removeClass(el, cls)
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent
  var ended = 0
  var end = function () {
    el.removeEventListener(event, onEnd)
    cb()
  }
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end()
      }
    }
  }
  setTimeout(function () {
    if (ended < propCount) {
      end()
    }
  }, timeout + 1)
  el.addEventListener(event, onEnd)
}

var transformRE = /\b(transform|all)(,|$)/

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el)
  var transitioneDelays = styles[transitionProp + 'Delay'].split(', ')
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ')
  var transitionTimeout = getTimeout(transitioneDelays, transitionDurations)
  var animationDelays = styles[animationProp + 'Delay'].split(', ')
  var animationDurations = styles[animationProp + 'Duration'].split(', ')
  var animationTimeout = getTimeout(animationDelays, animationDurations)

  var type
  var timeout = 0
  var propCount = 0
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION
      timeout = transitionTimeout
      propCount = transitionDurations.length
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION
      timeout = animationTimeout
      propCount = animationDurations.length
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout)
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property'])
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode) {
  var el = vnode.elm

  // call leave callback now
  if (el._leaveCb) {
    el._leaveCb.cancelled = true
    el._leaveCb()
  }

  var data = resolveTransition(vnode.data.transition)
  if (!data) {
    return
  }

  /* istanbul ignore if */
  if (el._enterCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var transitionNode = activeInstance.$vnode
  var context = transitionNode && transitionNode.parent
    ? transitionNode.parent.context
    : activeInstance

  var isAppear = !context._isMounted || !vnode.isRootInsert

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear ? appearClass : enterClass
  var activeClass = isAppear ? appearActiveClass : enterActiveClass
  var beforeEnterHook = isAppear ? (beforeAppear || beforeEnter) : beforeEnter
  var enterHook = isAppear ? (typeof appear === 'function' ? appear : enter) : enter
  var afterEnterHook = isAppear ? (afterAppear || afterEnter) : afterEnter
  var enterCancelledHook = isAppear ? (appearCancelled || enterCancelled) : enterCancelled

  var expectsCSS = css !== false && !isIE9
  var userWantsControl =
    enterHook &&
    // enterHook may be a bound method which exposes
    // the length of original fn as _length
    (enterHook._length || enterHook.length) > 1

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, activeClass)
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass)
      }
      enterCancelledHook && enterCancelledHook(el)
    } else {
      afterEnterHook && afterEnterHook(el)
    }
    el._enterCb = null
  })

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode
      var pendingNode = parent && parent._pending && parent._pending[vnode.key]
      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb()
      }
      enterHook && enterHook(el, cb)
    })
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el)
  if (expectsCSS) {
    addTransitionClass(el, startClass)
    addTransitionClass(el, activeClass)
    nextFrame(function () {
      removeTransitionClass(el, startClass)
      if (!cb.cancelled && !userWantsControl) {
        whenTransitionEnds(el, type, cb)
      }
    })
  }

  if (vnode.data.show) {
    enterHook && enterHook(el, cb)
  }

  if (!expectsCSS && !userWantsControl) {
    cb()
  }
}

function leave (vnode, rm) {
  var el = vnode.elm

  // call enter callback now
  if (el._enterCb) {
    el._enterCb.cancelled = true
    el._enterCb()
  }

  var data = resolveTransition(vnode.data.transition)
  if (!data) {
    return rm()
  }

  /* istanbul ignore if */
  if (el._leaveCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;

  var expectsCSS = css !== false && !isIE9
  var userWantsControl =
    leave &&
    // leave hook may be a bound method which exposes
    // the length of original fn as _length
    (leave._length || leave.length) > 1

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveActiveClass)
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass)
      }
      leaveCancelled && leaveCancelled(el)
    } else {
      rm()
      afterLeave && afterLeave(el)
    }
    el._leaveCb = null
  })

  if (delayLeave) {
    delayLeave(performLeave)
  } else {
    performLeave()
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode
    }
    beforeLeave && beforeLeave(el)
    if (expectsCSS) {
      addTransitionClass(el, leaveClass)
      addTransitionClass(el, leaveActiveClass)
      nextFrame(function () {
        removeTransitionClass(el, leaveClass)
        if (!cb.cancelled && !userWantsControl) {
          whenTransitionEnds(el, type, cb)
        }
      })
    }
    leave && leave(el, cb)
    if (!expectsCSS && !userWantsControl) {
      cb()
    }
  }
}

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {}
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'))
    }
    extend(res, def$$1)
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    leaveClass: (name + "-leave"),
    appearClass: (name + "-enter"),
    enterActiveClass: (name + "-enter-active"),
    leaveActiveClass: (name + "-leave-active"),
    appearActiveClass: (name + "-enter-active")
  }
})

function once (fn) {
  var called = false
  return function () {
    if (!called) {
      called = true
      fn()
    }
  }
}

var transition = inBrowser ? {
  create: function create (_, vnode) {
    if (!vnode.data.show) {
      enter(vnode)
    }
  },
  remove: function remove (vnode, rm) {
    /* istanbul ignore else */
    if (!vnode.data.show) {
      leave(vnode, rm)
    } else {
      rm()
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules)

var patch$1 = createPatchFunction({ nodeOps: nodeOps, modules: modules })

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

var modelableTagRE = /^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_\-]*)?$/

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement
    if (el && el.vmodel) {
      trigger(el, 'input')
    }
  })
}

var model = {
  bind: function bind (el, binding, vnode) {
    {
      if (!modelableTagRE.test(vnode.tag)) {
        warn(
          "v-model is not supported on element type: <" + (vnode.tag) + ">. " +
          'If you are working with contenteditable, it\'s recommended to ' +
          'wrap a library dedicated for that purpose inside a custom component.',
          vnode.context
        )
      }
    }
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context)
      /* istanbul ignore if */
      if (isIE || isEdge) {
        var cb = function () {
          setSelected(el, binding, vnode.context)
        }
        nextTick(cb)
        setTimeout(cb, 0)
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text') {
      if (!isAndroid) {
        el.addEventListener('compositionstart', onCompositionStart)
        el.addEventListener('compositionend', onCompositionEnd)
      }
      /* istanbul ignore if */
      if (isIE9) {
        el.vmodel = true
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context)
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matchig
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : hasNoMatchingOption(binding.value, el.options)
      if (needReset) {
        trigger(el, 'change')
      }
    }
  }
}

function setSelected (el, binding, vm) {
  var value = binding.value
  var isMultiple = el.multiple
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    )
    return
  }
  var selected, option
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i]
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1
      if (option.selected !== selected) {
        option.selected = selected
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true
}

function onCompositionEnd (e) {
  e.target.composing = false
  trigger(e.target, 'input')
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.child && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.child._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode)
    var transition = vnode.data && vnode.data.transition
    if (value && transition && !isIE9) {
      enter(vnode)
    }
    var originalDisplay = el.style.display === 'none' ? '' : el.style.display
    el.style.display = value ? originalDisplay : 'none'
    el.__vOriginalDisplay = originalDisplay
  },
  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode)
    var transition = vnode.data && vnode.data.transition
    if (transition && !isIE9) {
      if (value) {
        enter(vnode)
        el.style.display = el.__vOriginalDisplay
      } else {
        leave(vnode, function () {
          el.style.display = 'none'
        })
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none'
    }
  }
}

var platformDirectives = {
  model: model,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String
}

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recrusively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {}
  var options = comp.$options
  // props
  for (var key in options.propsData) {
    data[key] = comp[key]
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1].fn
  }
  return data
}

function placeholder (h, rawChild) {
  return /\d-keep-alive$/.test(rawChild.tag)
    ? h('keep-alive')
    : null
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; })
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      )
    }

    var mode = this.mode

    // warn invalid mode
    if ("development" !== 'production' &&
        mode && mode !== 'in-out' && mode !== 'out-in') {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      )
    }

    var rawChild = children[0]

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild)
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    child.key = child.key == null || child.isStatic
      ? ("__v" + (child.tag + this._uid) + "__")
      : child.key
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this)
    var oldRawChild = this._vnode
    var oldChild = getRealChild(oldRawChild)

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true
    }

    if (oldChild && oldChild.data && oldChild.key !== child.key) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data)

      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false
          this$1.$forceUpdate()
        })
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave
        var performLeave = function () { delayedLeave() }
        mergeVNodeHook(data, 'afterEnter', performLeave)
        mergeVNodeHook(data, 'enterCancelled', performLeave)
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave
        })
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final disired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps)

delete props.mode

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span'
    var map = Object.create(null)
    var prevChildren = this.prevChildren = this.children
    var rawChildren = this.$slots.default || []
    var children = this.children = []
    var transitionData = extractTransitionData(this)

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i]
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c)
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData
        } else {
          var opts = c.componentOptions
          var name = opts
            ? (opts.Ctor.options.name || opts.tag)
            : c.tag
          warn(("<transition-group> children must be keyed: <" + name + ">"))
        }
      }
    }

    if (prevChildren) {
      var kept = []
      var removed = []
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1]
        c$1.data.transition = transitionData
        c$1.data.pos = c$1.elm.getBoundingClientRect()
        if (map[c$1.key]) {
          kept.push(c$1)
        } else {
          removed.push(c$1)
        }
      }
      this.kept = h(tag, null, kept)
      this.removed = removed
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    )
    this._vnode = this.kept
  },

  updated: function updated () {
    var children = this.prevChildren
    var moveClass = this.moveClass || (this.name + '-move')
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs)
    children.forEach(recordPosition)
    children.forEach(applyTranslation)

    // force reflow to put everything in position
    var f = document.body.offsetHeight // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm
        var s = el.style
        addTransitionClass(el, moveClass)
        s.transform = s.WebkitTransform = s.transitionDuration = ''
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb)
            el._moveCb = null
            removeTransitionClass(el, moveClass)
          }
        })
      }
    })
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      addTransitionClass(el, moveClass)
      var info = getTransitionInfo(el)
      removeTransitionClass(el, moveClass)
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb()
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb()
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect()
}

function applyTranslation (c) {
  var oldPos = c.data.pos
  var newPos = c.data.newPos
  var dx = oldPos.left - newPos.left
  var dy = oldPos.top - newPos.top
  if (dx || dy) {
    c.data.moved = true
    var s = c.elm.style
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)"
    s.transitionDuration = '0s'
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue$3.config.isUnknownElement = isUnknownElement
Vue$3.config.isReservedTag = isReservedTag
Vue$3.config.getTagNamespace = getTagNamespace
Vue$3.config.mustUseProp = mustUseProp

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives)
extend(Vue$3.options.components, platformComponents)

// install platform patch function
Vue$3.prototype.__patch__ = config._isServer ? noop : patch$1

// wrap mount
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && !config._isServer ? query(el) : undefined
  return this._mount(el, hydrating)
}

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3)
    } else if (
      "development" !== 'production' &&
      inBrowser && /Chrome\/\d+/.test(window.navigator.userAgent)
    ) {
      console.log(
        'Download the Vue Devtools for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      )
    }
  }
}, 0)

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div')
  div.innerHTML = "<div a=\"" + content + "\">"
  return div.innerHTML.indexOf(encoded) > 0
}

// According to
// https://w3c.github.io/DOM-Parsing/#dfn-serializing-an-attribute-value
// when serializing innerHTML, <, >, ", & should be encoded as entities.
// However, only some browsers, e.g. PhantomJS, encodes < and >.
// this causes problems with the in-browser parser.
var shouldDecodeTags = inBrowser ? shouldDecode('>', '&gt;') : false

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false

/*  */

var decoder = document.createElement('div')

function decodeHTML (html) {
  decoder.innerHTML = html
  return decoder.textContent
}

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>\/=]+)/
var singleAttrAssign = /(?:=)/
var singleAttrValues = [
  // attr value double quotes
  /"([^"]*)"+/.source,
  // attr value, single quotes
  /'([^']*)'+/.source,
  // attr value, no quotes
  /([^\s"'=<>`]+)/.source
]
var attribute = new RegExp(
  '^\\s*' + singleAttrIdentifier.source +
  '(?:\\s*(' + singleAttrAssign.source + ')' +
  '\\s*(?:' + singleAttrValues.join('|') + '))?'
)

// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*'
var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')'
var startTagOpen = new RegExp('^<' + qnameCapture)
var startTagClose = /^\s*(\/?)>/
var endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>')
var doctype = /^<!DOCTYPE [^>]+>/i

var IS_REGEX_CAPTURING_BROKEN = false
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === ''
})

// Special Elements (can contain anything)
var isSpecialTag = makeMap('script,style', true)

var reCache = {}

var ltRE = /&lt;/g
var gtRE = /&gt;/g
var nlRE = /&#10;/g
var ampRE = /&amp;/g
var quoteRE = /&quot;/g

function decodeAttr (value, shouldDecodeTags, shouldDecodeNewlines) {
  if (shouldDecodeTags) {
    value = value.replace(ltRE, '<').replace(gtRE, '>')
  }
  if (shouldDecodeNewlines) {
    value = value.replace(nlRE, '\n')
  }
  return value.replace(ampRE, '&').replace(quoteRE, '"')
}

function parseHTML (html, options) {
  var stack = []
  var expectHTML = options.expectHTML
  var isUnaryTag$$1 = options.isUnaryTag || no
  var isFromDOM = options.isFromDOM
  var index = 0
  var last, lastTag
  while (html) {
    last = html
    // Make sure we're not in a script or style element
    if (!lastTag || !isSpecialTag(lastTag)) {
      var textEnd = html.indexOf('<')
      if (textEnd === 0) {
        // Comment:
        if (/^<!--/.test(html)) {
          var commentEnd = html.indexOf('-->')

          if (commentEnd >= 0) {
            advance(commentEnd + 3)
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (/^<!\[/.test(html)) {
          var conditionalEnd = html.indexOf(']>')

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2)
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype)
        if (doctypeMatch) {
          advance(doctypeMatch[0].length)
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag)
        if (endTagMatch) {
          var curIndex = index
          advance(endTagMatch[0].length)
          parseEndTag(endTagMatch[0], endTagMatch[1], curIndex, index)
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag()
        if (startTagMatch) {
          handleStartTag(startTagMatch)
          continue
        }
      }

      var text = void 0
      if (textEnd >= 0) {
        text = html.substring(0, textEnd)
        advance(textEnd)
      } else {
        text = html
        html = ''
      }

      if (options.chars) {
        options.chars(text)
      }
    } else {
      var stackedTag = lastTag.toLowerCase()
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'))
      var endTagLength = 0
      var rest = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length
        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
        }
        if (options.chars) {
          options.chars(text)
        }
        return ''
      })
      index += html.length - rest.length
      html = rest
      parseEndTag('</' + stackedTag + '>', stackedTag, index - endTagLength, index)
    }

    if (html === last) {
      throw new Error('Error parsing template:\n\n' + html)
    }
  }

  // Clean up any remaining tags
  parseEndTag()

  function advance (n) {
    index += n
    html = html.substring(n)
  }

  function parseStartTag () {
    var start = html.match(startTagOpen)
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      }
      advance(start[0].length)
      var end, attr
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length)
        match.attrs.push(attr)
      }
      if (end) {
        match.unarySlash = end[1]
        advance(end[0].length)
        match.end = index
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName
    var unarySlash = match.unarySlash

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag('', lastTag)
      }
      if (canBeLeftOpenTag(tagName) && lastTag === tagName) {
        parseEndTag('', tagName)
      }
    }

    var unary = isUnaryTag$$1(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash

    var l = match.attrs.length
    var attrs = new Array(l)
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i]
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3] }
        if (args[4] === '') { delete args[4] }
        if (args[5] === '') { delete args[5] }
      }
      var value = args[3] || args[4] || args[5] || ''
      attrs[i] = {
        name: args[1],
        value: isFromDOM ? decodeAttr(
          value,
          options.shouldDecodeTags,
          options.shouldDecodeNewlines
        ) : value
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, attrs: attrs })
      lastTag = tagName
      unarySlash = ''
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end)
    }
  }

  function parseEndTag (tag, tagName, start, end) {
    var pos
    if (start == null) { start = index }
    if (end == null) { end = index }

    // Find the closest opened tag of the same type
    if (tagName) {
      var needle = tagName.toLowerCase()
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].tag.toLowerCase() === needle) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (options.end) {
          options.end(stack[i].tag, start, end)
        }
      }

      // Remove the open elements from the stack
      stack.length = pos
      lastTag = pos && stack[pos - 1].tag
    } else if (tagName.toLowerCase() === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end)
      }
    } else if (tagName.toLowerCase() === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end)
      }
      if (options.end) {
        options.end(tagName, start, end)
      }
    }
  }
}

/*  */

function parseFilters (exp) {
  var inSingle = false
  var inDouble = false
  var curly = 0
  var square = 0
  var paren = 0
  var lastFilterIndex = 0
  var c, prev, i, expression, filters

  for (i = 0; i < exp.length; i++) {
    prev = c
    c = exp.charCodeAt(i)
    if (inSingle) {
      // check single quote
      if (c === 0x27 && prev !== 0x5C) { inSingle = !inSingle }
    } else if (inDouble) {
      // check double quote
      if (c === 0x22 && prev !== 0x5C) { inDouble = !inDouble }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1
        expression = exp.slice(0, i).trim()
      } else {
        pushFilter()
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break // "
        case 0x27: inSingle = true; break // '
        case 0x28: paren++; break         // (
        case 0x29: paren--; break         // )
        case 0x5B: square++; break        // [
        case 0x5D: square--; break        // ]
        case 0x7B: curly++; break         // {
        case 0x7D: curly--; break         // }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim()
  } else if (lastFilterIndex !== 0) {
    pushFilter()
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim())
    lastFilterIndex = i + 1
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i])
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(')
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i)
    var args = filter.slice(i + 1)
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&')
  var close = delimiters[1].replace(regexEscapeRE, '\\$&')
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
})

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE
  if (!tagRE.test(text)) {
    return
  }
  var tokens = []
  var lastIndex = tagRE.lastIndex = 0
  var match, index
  while ((match = tagRE.exec(text))) {
    index = match.index
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)))
    }
    // tag token
    var exp = parseFilters(match[1].trim())
    tokens.push(("_s(" + exp + ")"))
    lastIndex = index + match[0].length
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)))
  }
  return tokens.join('+')
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue parser]: " + msg))
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value })
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value })
}

function addDirective (
  el,
  name,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, value: value, arg: arg, modifiers: modifiers })
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important
) {
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture
    name = '!' + name // mark the event as captured
  }
  var events
  if (modifiers && modifiers.native) {
    delete modifiers.native
    events = el.nativeEvents || (el.nativeEvents = {})
  } else {
    events = el.events || (el.events = {})
  }
  var newHandler = { value: value, modifiers: modifiers }
  var handlers = events[name]
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler)
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler]
  } else {
    events[name] = newHandler
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name)
  if (dynamicValue != null) {
    return dynamicValue
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name)
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

function getAndRemoveAttr (el, name) {
  var val
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1)
        break
      }
    }
  }
  return val
}

/*  */

var dirRE = /^v-|^@|^:/
var forAliasRE = /(.*)\s+(?:in|of)\s+(.*)/
var forIteratorRE = /\(([^,]*),([^,]*)(?:,([^,]*))?\)/
var bindRE = /^:|^v-bind:/
var onRE = /^@|^v-on:/
var argRE = /:(.*)$/
var modifierRE = /\.[^\.]+/g

var decodeHTMLCached = cached(decodeHTML)

// configurable state
var warn$1
var platformGetTagNamespace
var platformMustUseProp
var platformIsPreTag
var preTransforms
var transforms
var postTransforms
var delimiters

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$1 = options.warn || baseWarn
  platformGetTagNamespace = options.getTagNamespace || no
  platformMustUseProp = options.mustUseProp || no
  platformIsPreTag = options.isPreTag || no
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode')
  transforms = pluckModuleFunction(options.modules, 'transformNode')
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode')
  delimiters = options.delimiters
  var stack = []
  var preserveWhitespace = options.preserveWhitespace !== false
  var root
  var currentParent
  var inVPre = false
  var inPre = false
  var warned = false
  parseHTML(template, {
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    isFromDOM: options.isFromDOM,
    shouldDecodeTags: options.shouldDecodeTags,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag)

      // handle IE svg bug
      /* istanbul ignore if */
      if (options.isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs)
      }

      var element = {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        parent: currentParent,
        children: []
      }
      if (ns) {
        element.ns = ns
      }

      if ("client" !== 'server' && isForbiddenTag(element)) {
        element.forbidden = true
        "development" !== 'production' && warn$1(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">."
        )
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        preTransforms[i](element, options)
      }

      if (!inVPre) {
        processPre(element)
        if (element.pre) {
          inVPre = true
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true
      }
      if (inVPre) {
        processRawAttrs(element)
      } else {
        processFor(element)
        processIf(element)
        processOnce(element)
        processKey(element)

        // determine whether this is a plain element after
        // removing structural attributes
        element.plain = !element.key && !attrs.length

        processRef(element)
        processSlot(element)
        processComponent(element)
        for (var i$1 = 0; i$1 < transforms.length; i$1++) {
          transforms[i$1](element, options)
        }
        processAttrs(element)
      }

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warn$1(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes:\n' + template
            )
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warn$1(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements:\n' + template
            )
          }
        }
      }

      // tree management
      if (!root) {
        root = element
        checkRootConstraints(root)
      } else if ("development" !== 'production' && !stack.length && !warned) {
        // allow 2 root elements with v-if and v-else
        if ((root.attrsMap.hasOwnProperty('v-if') && element.attrsMap.hasOwnProperty('v-else'))) {
          checkRootConstraints(element)
        } else {
          warned = true
          warn$1(
            ("Component template should contain exactly one root element:\n\n" + template)
          )
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.else) {
          processElse(element, currentParent)
        } else {
          currentParent.children.push(element)
          element.parent = currentParent
        }
      }
      if (!unary) {
        currentParent = element
        stack.push(element)
      }
      // apply post-transforms
      for (var i$2 = 0; i$2 < postTransforms.length; i$2++) {
        postTransforms[i$2](element, options)
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1]
      var lastNode = element.children[element.children.length - 1]
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ') {
        element.children.pop()
      }
      // pop stack
      stack.length -= 1
      currentParent = stack[stack.length - 1]
      // check pre state
      if (element.pre) {
        inVPre = false
      }
      if (platformIsPreTag(element.tag)) {
        inPre = false
      }
    },

    chars: function chars (text) {
      if (!currentParent) {
        if ("development" !== 'production' && !warned) {
          warned = true
          warn$1(
            'Component template should contain exactly one root element:\n\n' + template
          )
        }
        return
      }
      text = inPre || text.trim()
        ? decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && currentParent.children.length ? ' ' : ''
      if (text) {
        var expression
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          currentParent.children.push({
            type: 2,
            expression: expression,
            text: text
          })
        } else {
          currentParent.children.push({
            type: 3,
            text: text
          })
        }
      }
    }
  })
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length
  if (l) {
    var attrs = el.attrs = new Array(l)
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true
  }
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key')
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$1("<template> cannot be keyed. Place the key on real elements instead.")
    }
    el.key = exp
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref')
  if (ref) {
    el.ref = ref
    el.refInFor = checkInFor(el)
  }
}

function processFor (el) {
  var exp
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE)
    if (!inMatch) {
      "development" !== 'production' && warn$1(
        ("Invalid v-for expression: " + exp)
      )
      return
    }
    el.for = inMatch[2].trim()
    var alias = inMatch[1].trim()
    var iteratorMatch = alias.match(forIteratorRE)
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim()
      el.iterator1 = iteratorMatch[2].trim()
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim()
      }
    } else {
      el.alias = alias
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if')
  if (exp) {
    el.if = exp
  }
  if (getAndRemoveAttr(el, 'v-else') != null) {
    el.else = true
  }
}

function processElse (el, parent) {
  var prev = findPrevElement(parent.children)
  if (prev && prev.if) {
    prev.elseBlock = el
  } else {
    warn$1(
      ("v-else used on element <" + (el.tag) + "> without corresponding v-if.")
    )
  }
}

function processOnce (el) {
  var once = getAndRemoveAttr(el, 'v-once')
  if (once != null) {
    el.once = true
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name')
  } else {
    var slotTarget = getBindingAttr(el, 'slot')
    if (slotTarget) {
      el.slotTarget = slotTarget
    }
  }
}

function processComponent (el) {
  var binding
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true
  }
}

function processAttrs (el) {
  var list = el.attrsList
  var i, l, name, value, arg, modifiers, isProp
  for (i = 0, l = list.length; i < l; i++) {
    name = list[i].name
    value = list[i].value
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true
      // modifiers
      modifiers = parseModifiers(name)
      if (modifiers) {
        name = name.replace(modifierRE, '')
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '')
        if (modifiers && modifiers.prop) {
          isProp = true
          name = camelize(name)
          if (name === 'innerHtml') { name = 'innerHTML' }
        }
        if (isProp || platformMustUseProp(name)) {
          addProp(el, name, value)
        } else {
          addAttr(el, name, value)
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '')
        addHandler(el, name, value, modifiers)
      } else { // normal directives
        name = name.replace(dirRE, '')
        // parse arg
        var argMatch = name.match(argRE)
        if (argMatch && (arg = argMatch[1])) {
          name = name.slice(0, -(arg.length + 1))
        }
        addDirective(el, name, value, arg, modifiers)
      }
    } else {
      // literal attribute
      {
        var expression = parseText(value, delimiters)
        if (expression) {
          warn$1(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been deprecated. ' +
            'Use v-bind or the colon shorthand instead.'
          )
        }
      }
      addAttr(el, name, JSON.stringify(value))
    }
  }
}

function checkInFor (el) {
  var parent = el
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE)
  if (match) {
    var ret = {}
    match.forEach(function (m) { ret[m.slice(1)] = true })
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {}
  for (var i = 0, l = attrs.length; i < l; i++) {
    if ("development" !== 'production' && map[attrs[i].name]) {
      warn$1('duplicate attribute: ' + attrs[i].name)
    }
    map[attrs[i].name] = attrs[i].value
  }
  return map
}

function findPrevElement (children) {
  var i = children.length
  while (i--) {
    if (children[i].tag) { return children[i] }
  }
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/
var ieNSPrefix = /^NS\d+:/

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = []
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i]
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '')
      res.push(attr)
    }
  }
  return res
}

/*  */

var isStaticKey
var isPlatformReservedTag

var genStaticKeysCached = cached(genStaticKeys$1)

/**
 * Goal of the optimizier: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '')
  isPlatformReservedTag = options.isReservedTag || (function () { return false; })
  // first pass: mark all non-static nodes.
  markStatic(root)
  // second pass: mark static roots.
  markStaticRoots(root, false)
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic (node) {
  node.static = isStatic(node)
  if (node.type === 1) {
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i]
      markStatic(child)
      if (!child.static) {
        node.static = false
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.once || node.static) {
      node.staticRoot = true
      node.staticInFor = isInFor
      return
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], !!node.for)
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    Object.keys(node).every(isStaticKey)
  ))
}

/*  */

var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
}

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: 'if($event.target !== $event.currentTarget)return;'
}

function genHandlers (events, native) {
  var res = native ? 'nativeOn:{' : 'on:{'
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(events[name])) + ","
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  handler
) {
  if (!handler) {
    return 'function(){}'
  } else if (Array.isArray(handler)) {
    return ("[" + (handler.map(genHandler).join(',')) + "]")
  } else if (!handler.modifiers) {
    return simplePathRE.test(handler.value)
      ? handler.value
      : ("function($event){" + (handler.value) + "}")
  } else {
    var code = ''
    var keys = []
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        code += modifierCode[key]
      } else {
        keys.push(key)
      }
    }
    if (keys.length) {
      code = genKeyFilter(keys) + code
    }
    var handlerCode = simplePathRE.test(handler.value)
      ? handler.value + '($event)'
      : handler.value
    return 'function($event){' + code + handlerCode + '}'
  }
}

function genKeyFilter (keys) {
  var code = keys.length === 1
    ? normalizeKeyCode(keys[0])
    : Array.prototype.concat.apply([], keys.map(normalizeKeyCode))
  if (Array.isArray(code)) {
    return ("if(" + (code.map(function (c) { return ("$event.keyCode!==" + c); }).join('&&')) + ")return;")
  } else {
    return ("if($event.keyCode!==" + code + ")return;")
  }
}

function normalizeKeyCode (key) {
  return (
    parseInt(key, 10) || // number keyCode
    keyCodes[key] || // built-in alias
    ("_k(" + (JSON.stringify(key)) + ")") // custom alias
  )
}

/*  */

function bind$2 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + "," + (dir.value) + (dir.modifiers && dir.modifiers.prop ? ',true' : '') + ")")
  }
}

var baseDirectives = {
  bind: bind$2,
  cloak: noop
}

/*  */

// configurable state
var warn$2
var transforms$1
var dataGenFns
var platformDirectives$1
var staticRenderFns
var currentOptions

function generate (
  ast,
  options
) {
  // save previous staticRenderFns so generate calls can be nested
  var prevStaticRenderFns = staticRenderFns
  var currentStaticRenderFns = staticRenderFns = []
  currentOptions = options
  warn$2 = options.warn || baseWarn
  transforms$1 = pluckModuleFunction(options.modules, 'transformCode')
  dataGenFns = pluckModuleFunction(options.modules, 'genData')
  platformDirectives$1 = options.directives || {}
  var code = ast ? genElement(ast) : '_h("div")'
  staticRenderFns = prevStaticRenderFns
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: currentStaticRenderFns
  }
}

function genElement (el) {
  if (el.staticRoot && !el.staticProcessed) {
    // hoist static sub-trees out
    el.staticProcessed = true
    staticRenderFns.push(("with(this){return " + (genElement(el)) + "}"))
    return ("_m(" + (staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
  } else if (el.for && !el.forProcessed) {
    return genFor(el)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el)
  } else {
    // component or element
    var code
    if (el.component) {
      code = genComponent(el)
    } else {
      var data = genData(el)
      var children = el.inlineTemplate ? null : genChildren(el)
      code = "_h('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")"
    }
    // module transforms
    for (var i = 0; i < transforms$1.length; i++) {
      code = transforms$1[i](el, code)
    }
    return code
  }
}

function genIf (el) {
  var exp = el.if
  el.ifProcessed = true // avoid recursion
  return ("(" + exp + ")?" + (genElement(el)) + ":" + (genElse(el)))
}

function genElse (el) {
  return el.elseBlock
    ? genElement(el.elseBlock)
    : '_e()'
}

function genFor (el) {
  var exp = el.for
  var alias = el.alias
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : ''
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : ''
  el.forProcessed = true // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genElement(el)) +
    '})'
}

function genData (el) {
  if (el.plain) {
    return
  }

  var data = '{'

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el)
  if (dirs) { data += dirs + ',' }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ","
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ","
  }
  if (el.refInFor) {
    data += "refInFor:true,"
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\","
  }
  // slot target
  if (el.slotTarget) {
    data += "slot:" + (el.slotTarget) + ","
  }
  // module data generation functions
  for (var i = 0; i < dataGenFns.length; i++) {
    data += dataGenFns[i](el)
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},"
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},"
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events)) + ","
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ","
  }
  // inline-template
  if (el.inlineTemplate) {
    var ast = el.children[0]
    if ("development" !== 'production' && (
      el.children.length > 1 || ast.type !== 1
    )) {
      warn$2('Inline-template components must have exactly one child element.')
    }
    if (ast.type === 1) {
      var inlineRenderFns = generate(ast, currentOptions)
      data += "inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}"
    }
  }
  data = data.replace(/,$/, '') + '}'
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data)
  }
  return data
}

function genDirectives (el) {
  var dirs = el.directives
  if (!dirs) { return }
  var res = 'directives:['
  var hasRuntime = false
  var i, l, dir, needRuntime
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i]
    needRuntime = true
    var gen = platformDirectives$1[dir.name] || baseDirectives[dir.name]
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, warn$2)
    }
    if (needRuntime) {
      hasRuntime = true
      res += "{name:\"" + (dir.name) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},"
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genChildren (el) {
  if (el.children.length) {
    return '[' + el.children.map(genNode).join(',') + ']'
  }
}

function genNode (node) {
  if (node.type === 1) {
    return genElement(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : JSON.stringify(text.text)
}

function genSlot (el) {
  var slotName = el.slotName || '"default"'
  var children = genChildren(el)
  return children
    ? ("_t(" + slotName + "," + children + ")")
    : ("_t(" + slotName + ")")
}

function genComponent (el) {
  var children = genChildren(el)
  return ("_h(" + (el.component) + "," + (genData(el)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = ''
  for (var i = 0; i < props.length; i++) {
    var prop = props[i]
    res += "\"" + (prop.name) + "\":" + (prop.value) + ","
  }
  return res.slice(0, -1)
}

/*  */

/**
 * Compile a template.
 */
function compile$1 (
  template,
  options
) {
  var ast = parse(template.trim(), options)
  optimize(ast, options)
  var code = generate(ast, options)
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
}

/*  */

// operators like typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b')
// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/
// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = []
  if (ast) {
    checkNode(ast, errors)
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name]
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors)
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors)
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors)
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors)
  }
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors)
  checkIdentifier(node.alias, 'v-for alias', text, errors)
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors)
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors)
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("- invalid " + type + " \"" + ident + "\" in expression: " + text))
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp))
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE)
    if (keywordMatch) {
      errors.push(
        "- avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\" in expression " + text
      )
    } else {
      errors.push(("- invalid expression: " + text))
    }
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn
  var staticClass = getAndRemoveAttr(el, 'class')
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters)
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been deprecated. ' +
        'Use v-bind or the colon shorthand instead.'
      )
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass)
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */)
  if (classBinding) {
    el.classBinding = classBinding
  }
}

function genData$1 (el) {
  var data = ''
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ","
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ","
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData$1
}

/*  */

function transformNode$1 (el) {
  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */)
  if (styleBinding) {
    el.styleBinding = styleBinding
  }
}

function genData$2 (el) {
  return el.styleBinding
    ? ("style:(" + (el.styleBinding) + "),")
    : ''
}

var style$1 = {
  transformNode: transformNode$1,
  genData: genData$2
}

var modules$1 = [
  klass$1,
  style$1
]

/*  */

var warn$3

function model$1 (
  el,
  dir,
  _warn
) {
  warn$3 = _warn
  var value = dir.value
  var modifiers = dir.modifiers
  var tag = el.tag
  var type = el.attrsMap.type
  if (tag === 'select') {
    return genSelect(el, value)
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value)
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value)
  } else {
    return genDefaultModel(el, value, modifiers)
  }
}

function genCheckboxModel (el, value) {
  if ("development" !== 'production' &&
    el.attrsMap.checked != null) {
    warn$3(
      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
      "inline checked attributes will be ignored when using v-model. " +
      'Declare initial values in the component\'s data option instead.'
    )
  }
  var valueBinding = getBindingAttr(el, 'value') || 'null'
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true'
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false'
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" +
      ":_q(" + value + "," + trueValueBinding + ")"
  )
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + valueBinding + "," +
          '$$i=_i($$a,$$v);' +
      "if($$c){$$i<0&&(" + value + "=$$a.concat($$v))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + value + "=$$c}",
    null, true
  )
}

function genRadioModel (el, value) {
  if ("development" !== 'production' &&
    el.attrsMap.checked != null) {
    warn$3(
      "<" + (el.tag) + " v-model=\"" + value + "\" checked>:\n" +
      "inline checked attributes will be ignored when using v-model. " +
      'Declare initial values in the component\'s data option instead.'
    )
  }
  var valueBinding = getBindingAttr(el, 'value') || 'null'
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"))
  addHandler(el, 'change', (value + "=" + valueBinding), null, true)
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  {
    if (el.tag === 'input' && el.attrsMap.value) {
      warn$3(
        "<" + (el.tag) + " v-model=\"" + value + "\" value=\"" + (el.attrsMap.value) + "\">:\n" +
        'inline value attributes will be ignored when using v-model. ' +
        'Declare initial values in the component\'s data option instead.'
      )
    }
    if (el.tag === 'textarea' && el.children.length) {
      warn$3(
        "<textarea v-model=\"" + value + "\">:\n" +
        'inline content inside <textarea> will be ignored when using v-model. ' +
        'Declare initial values in the component\'s data option instead.'
      )
    }
  }

  var type = el.attrsMap.type
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var event = lazy || (isIE && type === 'range') ? 'change' : 'input'
  var needCompositionGuard = !lazy && type !== 'range'
  var isNative = el.tag === 'input' || el.tag === 'textarea'

  var valueExpression = isNative
    ? ("$event.target.value" + (trim ? '.trim()' : ''))
    : "$event"
  var code = number || type === 'number'
    ? (value + "=_n(" + valueExpression + ")")
    : (value + "=" + valueExpression)
  if (isNative && needCompositionGuard) {
    code = "if($event.target.composing)return;" + code
  }
  // inputs with type="file" are read only and setting the input's
  // value will throw an error.
  if ("development" !== 'production' &&
      type === 'file') {
    warn$3(
      "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
      "File inputs are read only. Use a v-on:change listener instead."
    )
  }
  addProp(el, 'value', isNative ? ("_s(" + value + ")") : ("(" + value + ")"))
  addHandler(el, event, code, null, true)
  if (needCompositionGuard) {
    // need runtime directive code to help with composition events
    return true
  }
}

function genSelect (el, value) {
  {
    el.children.some(checkOptionWarning)
  }
  var code = value + "=Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){return \"_value\" in o ? o._value : o.value})" +
    (el.attrsMap.multiple == null ? '[0]' : '')
  addHandler(el, 'change', code, null, true)
  // need runtime to help with possible dynamically generated options
  return true
}

function checkOptionWarning (option) {
  if (option.type === 1 &&
    option.tag === 'option' &&
    option.attrsMap.selected != null) {
    warn$3(
      "<select v-model=\"" + (option.parent.attrsMap['v-model']) + "\">:\n" +
      'inline selected attributes on <option> will be ignored when using v-model. ' +
      'Declare initial values in the component\'s data option instead.'
    )
    return true
  }
  return false
}

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"))
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"))
  }
}

var directives$1 = {
  model: model$1,
  text: text,
  html: html
}

/*  */

var cache = Object.create(null)

var baseOptions = {
  isIE: isIE,
  expectHTML: true,
  modules: modules$1,
  staticKeys: genStaticKeys(modules$1),
  directives: directives$1,
  isReservedTag: isReservedTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  getTagNamespace: getTagNamespace,
  isPreTag: isPreTag
}

function compile$$1 (
  template,
  options
) {
  options = options
    ? extend(extend({}, baseOptions), options)
    : baseOptions
  return compile$1(template, options)
}

function compileToFunctions (
  template,
  options,
  vm
) {
  var _warn = (options && options.warn) || warn
  // detect possible CSP restriction
  /* istanbul ignore if */
  {
    try {
      new Function('return 1')
    } catch (e) {
      if (e.toString().match(/unsafe-eval|CSP/)) {
        _warn(
          'It seems you are using the standalone build of Vue.js in an ' +
          'environment with Content Security Policy that prohibits unsafe-eval. ' +
          'The template compiler cannot work in this environment. Consider ' +
          'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
          'templates into render functions.'
        )
      }
    }
  }
  var key = options && options.delimiters
    ? String(options.delimiters) + template
    : template
  if (cache[key]) {
    return cache[key]
  }
  var res = {}
  var compiled = compile$$1(template, options)
  res.render = makeFunction(compiled.render)
  var l = compiled.staticRenderFns.length
  res.staticRenderFns = new Array(l)
  for (var i = 0; i < l; i++) {
    res.staticRenderFns[i] = makeFunction(compiled.staticRenderFns[i])
  }
  {
    if (res.render === noop || res.staticRenderFns.some(function (fn) { return fn === noop; })) {
      _warn(
        "failed to compile template:\n\n" + template + "\n\n" +
        detectErrors(compiled.ast).join('\n') +
        '\n\n',
        vm
      )
    }
  }
  return (cache[key] = res)
}

function makeFunction (code) {
  try {
    return new Function(code)
  } catch (e) {
    return noop
  }
}

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id)
  return el && el.innerHTML
})

var mount = Vue$3.prototype.$mount
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el)

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    )
    return this
  }

  var options = this.$options
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template
    var isFromDOM = false
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          isFromDOM = true
          template = idToTemplate(template)
        }
      } else if (template.nodeType) {
        isFromDOM = true
        template = template.innerHTML
      } else {
        {
          warn('invalid template option:' + template, this)
        }
        return this
      }
    } else if (el) {
      isFromDOM = true
      template = getOuterHTML(el)
    }
    if (template) {
      var ref = compileToFunctions(template, {
        warn: warn,
        isFromDOM: isFromDOM,
        shouldDecodeTags: shouldDecodeTags,
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render
      options.staticRenderFns = staticRenderFns
    }
  }
  return mount.call(this, el, hydrating)
}

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div')
    container.appendChild(el.cloneNode(true))
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions

return Vue$3;

})));

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/* axios v0.15.2 | (c) 2016 by Matt Zabriskie */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.axios=t():e.axios=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){var t=new i(e),n=s(i.prototype.request,t);return o.extend(n,i.prototype,t),o.extend(n,t),n}var o=n(2),s=n(3),i=n(4),u=r();u.Axios=i,u.create=function(e){return r(e)},u.Cancel=n(22),u.CancelToken=n(23),u.isCancel=n(19),u.all=function(e){return Promise.all(e)},u.spread=n(24),e.exports=u,e.exports["default"]=u},function(e,t,n){"use strict";function r(e){return"[object Array]"===E.call(e)}function o(e){return"[object ArrayBuffer]"===E.call(e)}function s(e){return"undefined"!=typeof FormData&&e instanceof FormData}function i(e){var t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function a(e){return"number"==typeof e}function c(e){return"undefined"==typeof e}function f(e){return null!==e&&"object"==typeof e}function p(e){return"[object Date]"===E.call(e)}function d(e){return"[object File]"===E.call(e)}function l(e){return"[object Blob]"===E.call(e)}function h(e){return"[object Function]"===E.call(e)}function m(e){return f(e)&&h(e.pipe)}function y(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function w(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return"undefined"!=typeof window&&"undefined"!=typeof document&&"function"==typeof document.createElement}function v(e,t){if(null!==e&&"undefined"!=typeof e)if("object"==typeof e||r(e)||(e=[e]),r(e))for(var n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}function x(){function e(e,n){"object"==typeof t[n]&&"object"==typeof e?t[n]=x(t[n],e):t[n]=e}for(var t={},n=0,r=arguments.length;n<r;n++)v(arguments[n],e);return t}function b(e,t,n){return v(t,function(t,r){n&&"function"==typeof t?e[r]=C(t,n):e[r]=t}),e}var C=n(3),E=Object.prototype.toString;e.exports={isArray:r,isArrayBuffer:o,isFormData:s,isArrayBufferView:i,isString:u,isNumber:a,isObject:f,isUndefined:c,isDate:p,isFile:d,isBlob:l,isFunction:h,isStream:m,isURLSearchParams:y,isStandardBrowserEnv:g,forEach:v,merge:x,extend:b,trim:w}},function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";function r(e){this.defaults=s.merge(o,e),this.interceptors={request:new i,response:new i}}var o=n(5),s=n(2),i=n(16),u=n(17),a=n(20),c=n(21);r.prototype.request=function(e){"string"==typeof e&&(e=s.merge({url:arguments[0]},arguments[1])),e=s.merge(o,this.defaults,{method:"get"},e),e.baseURL&&!a(e.url)&&(e.url=c(e.baseURL,e.url));var t=[u,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},s.forEach(["delete","get","head"],function(e){r.prototype[e]=function(t,n){return this.request(s.merge(n||{},{method:e,url:t}))}}),s.forEach(["post","put","patch"],function(e){r.prototype[e]=function(t,n,r){return this.request(s.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=r},function(e,t,n){"use strict";function r(e,t){!s.isUndefined(e)&&s.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function o(){var e;return"undefined"!=typeof XMLHttpRequest?e=n(7):"undefined"!=typeof process&&(e=n(7)),e}var s=n(2),i=n(6),u=/^\)\]\}',?\n/,a={"Content-Type":"application/x-www-form-urlencoded"};e.exports={adapter:o(),transformRequest:[function(e,t){return i(t,"Content-Type"),s.isFormData(e)||s.isArrayBuffer(e)||s.isStream(e)||s.isFile(e)||s.isBlob(e)?e:s.isArrayBufferView(e)?e.buffer:s.isURLSearchParams(e)?(r(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):s.isObject(e)?(r(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e){e=e.replace(u,"");try{e=JSON.parse(e)}catch(t){}}return e}],headers:{common:{Accept:"application/json, text/plain, */*"},patch:s.merge(a),post:s.merge(a),put:s.merge(a)},timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(2),o=n(8),s=n(11),i=n(12),u=n(13),a=n(9),c="undefined"!=typeof window&&window.btoa||n(14);e.exports=function(e){return new Promise(function(t,f){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var l=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in l||u(e.url)||(l=new window.XDomainRequest,h="onload",m=!0,l.onprogress=function(){},l.ontimeout=function(){}),e.auth){var y=e.auth.username||"",w=e.auth.password||"";d.Authorization="Basic "+c(y+":"+w)}if(l.open(e.method.toUpperCase(),s(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l[h]=function(){if(l&&(4===l.readyState||m)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?i(l.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?l.response:l.responseText,s={data:r,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:n,config:e,request:l};o(t,f,s),l=null}},l.onerror=function(){f(a("Network Error",e)),l=null},l.ontimeout=function(){f(a("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED")),l=null},r.isStandardBrowserEnv()){var g=n(15),v=(e.withCredentials||u(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;v&&(d[e.xsrfHeaderName]=v)}if("setRequestHeader"in l&&r.forEach(d,function(e,t){"undefined"==typeof p&&"content-type"===t.toLowerCase()?delete d[t]:l.setRequestHeader(t,e)}),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(x){if("json"!==l.responseType)throw x}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),f(e),l=null)}),void 0===p&&(p=null),l.send(p)})}},function(e,t,n){"use strict";var r=n(9);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n)):e(n)}},function(e,t,n){"use strict";var r=n(10);e.exports=function(e,t,n,o){var s=new Error(e);return r(s,t,n,o)}},function(e,t){"use strict";e.exports=function(e,t,n,r){return e.config=t,n&&(e.code=n),e.response=r,e}},function(e,t,n){"use strict";function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(2);e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(o.isURLSearchParams(t))s=t.toString();else{var i=[];o.forEach(t,function(e,t){null!==e&&"undefined"!=typeof e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),i.push(r(t)+"="+r(e))}))}),s=i.join("&")}return s&&(e+=(e.indexOf("?")===-1?"?":"&")+s),e}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e){var t,n,o,s={};return e?(r.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t&&(s[t]=s[t]?s[t]+", "+n:n)}),s):s}},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(n){var o=r.isString(n)?e(n):n;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t){"use strict";function n(){this.message="String contains an invalid character"}function r(e){for(var t,r,s=String(e),i="",u=0,a=o;s.charAt(0|u)||(a="=",u%1);i+=a.charAt(63&t>>8-u%1*8)){if(r=s.charCodeAt(u+=.75),r>255)throw new n;t=t<<8|r}return i}var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=r},function(e,t,n){"use strict";var r=n(2);e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,s,i){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(s)&&u.push("domain="+s),i===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,n){"use strict";function r(){this.handlers=[]}var o=n(2);r.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r},function(e,t,n){"use strict";function r(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=n(2),s=n(18),i=n(19),u=n(5);e.exports=function(e){r(e),e.headers=e.headers||{},e.data=s(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||u.adapter;return t(e).then(function(t){return r(e),t.data=s(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(r(e),t&&t.response&&(t.response.data=s(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(2);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t){"use strict";e.exports=function(e,t){return e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,"")}},function(e,t){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,n){"use strict";function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new o(e),t(n.reason))})}var o=n(22);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var e,t=new r(function(t){e=t});return{token:t,cancel:e}},e.exports=r},function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}}])});
//# sourceMappingURL=axios.min.map
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.VeeValidate=t()}(this,function(){"use strict";var e=function(e){return!Array.isArray(e)&&/^[a-zA-Z]*$/.test(e)},t=function(e){return!Array.isArray(e)&&/^[a-zA-Z0-9_-]*$/.test(e)},n=function(e){return!Array.isArray(e)&&/^[a-zA-Z0-9]*$/.test(e)},i=function(e){return/^[a-zA-Z\s]*$/.test(String(e))},r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=(function(){function e(e){this.value=e}function t(t){function n(e,t){return new Promise(function(n,r){var o={key:e,arg:t,resolve:n,reject:r,next:null};s?s=s.next=o:(a=s=o,i(e,t))})}function i(n,a){try{var s=t[n](a),o=s.value;o instanceof e?Promise.resolve(o.value).then(function(e){i("next",e)},function(e){i("throw",e)}):r(s.done?"return":"normal",s.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":a.resolve({value:t,done:!0});break;case"throw":a.reject(t);break;default:a.resolve({value:t,done:!1})}a=a.next,a?i(a.key,a.arg):s=null}var a,s;this._invoke=n,"function"!=typeof t.return&&(this.return=void 0)}return"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)},{wrap:function(e){return function(){return new t(e.apply(this,arguments))}},await:function(t){return new e(t)}}}(),function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=function(){function e(e,t){var n=[],i=!0,r=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(i=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{!i&&o.return&&o.return()}finally{if(r)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(e){return Array.isArray(e)?e:Array.from(e)},f=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},d=function(e,t){var n=l(t,2),i=n[0],r=n[1];return Number(i)<=e&&Number(r)>=e},h=function(e,t){var n=l(t,1),i=n[0],r=document.querySelector("input[name='"+i+"']");return!(!r||String(e)!==r.value)},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["*"],n=l(t,1),i=n[0];if(Array.isArray(e))return!1;if(null===e||void 0===e||""===e)return!0;var r="*"===i?"+":"{1,"+i+"}",a=new RegExp("^-?\\d*(\\.\\d"+r+")?$");return!!a.test(e)&&!Number.isNaN(parseFloat(e))},m=function(e,t){var n=l(t,1),i=n[0],r=String(e);return/^[0-9]*$/.test(r)&&r.length===Number(i)},y=function(e,t,n){var i=window.URL||window.webkitURL;return new Promise(function(r){var a=new Image;a.onerror=function(){return r({valid:!1})},a.onload=function(){return r({valid:a.width===Number(t)&&a.height===Number(n)})},a.src=i.createObjectURL(e)})},g=function(e,t){for(var n=l(t,2),i=n[0],r=n[1],a=[],s=0;s<e.length;s++){if(!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(e[s].name))return!1;a.push(e[s])}return Promise.all(a.map(function(e){return y(e,i,r)}))},p=function(e){return/^(([^<>()[\]\\.,;:#\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,6}))$/.test(e)},b=function(e,t){for(var n=new RegExp(".("+t.join("|")+")$","i"),i=0;i<e.length;i++)if(!n.test(e[i].name))return!1;return!0},k=function(e){for(var t=0;t<e.length;t++)if(!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(e[t].name))return!1;return!0},_=function(e,t){return!!t.filter(function(t){return t==e}).length},$=function(e){return/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)},w=function(e,t){var n=l(t,1),i=n[0];return void 0===e||null===e?i>=0:String(e).length<=i},x=function(e,t){for(var n=new RegExp(t.join("|").replace("*",".+")+"$","i"),i=0;i<e.length;i++)if(!n.test(e[i].type))return!1;return!0},A=function(e,t){var n=l(t,1),i=n[0];return void 0!==e&&null!==e&&String(e).length>=i},E=function(e,t){return!t.filter(function(t){return t==e}).length},T=function(e){return!Array.isArray(e)&&/^[0-9]*$/.test(e)},L=function(e,t){var n=c(t),i=n[0],r=n.slice(1);return i instanceof RegExp?i.test(e):new RegExp(i,r).test(String(e))},F=function(e){return Array.isArray(e)?!!e.length:void 0!==e&&null!==e&&!!String(e).trim().length},S=function(e,t){var n=l(t,1),i=n[0];if(isNaN(i))return!1;for(var r=1024*Number(i),a=0;a<e.length;a++)if(e[a].size>r)return!1;return!0},j=function(e,t){var n=/^https?:\/\/([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.\(\)%-]*)*\/?$/.test(e),i=t&&t[0];return i&&n?new RegExp("^https?://(([da-z.-]+).)*("+t[0].replace(".","\\$&")+")").test(e):n},O={alpha_dash:t,alpha_num:n,alpha_spaces:i,alpha:e,between:d,confirmed:h,decimal:v,digits:m,dimensions:g,email:p,ext:b,image:k,in:_,ip:$,max:w,mimes:x,min:A,not_in:E,numeric:T,regex:L,required:F,size:S,url:j},N=function(){function e(){a(this,e),this.errors=[]}return s(e,[{key:"add",value:function(e,t,n){var i={field:e,msg:t};n&&(i.scope=n),this.errors.push(i)}},{key:"all",value:function(e){return e?this.errors.filter(function(t){return t.scope===e}).map(function(e){return e.msg}):this.errors.map(function(e){return e.msg})}},{key:"any",value:function(e){return e?!!this.errors.filter(function(t){return t.scope===e}).length:!!this.errors.length}},{key:"clear",value:function(e){return e?void(this.errors=this.errors.filter(function(t){return t.scope!==e})):void(this.errors=[])}},{key:"collect",value:function(e,t){var n=this;if(!e){var i=function(){var e={};return n.errors.forEach(function(t){e[t.field]||(e[t.field]=[]),e[t.field].push(t.msg)}),{v:e}}();if("object"===("undefined"==typeof i?"undefined":r(i)))return i.v}return t?this.errors.filter(function(n){return n.field===e&&n.scope===t}).map(function(e){return e.msg}):this.errors.filter(function(t){return t.field===e}).map(function(e){return e.msg})}},{key:"count",value:function(){return this.errors.length}},{key:"first",value:function(e,t){for(var n=0;n<this.errors.length;n++)if(this.errors[n].field===e){if(!t)return this.errors[n].msg;if(this.errors[n].scope===t)return this.errors[n].msg}return null}},{key:"has",value:function(e,t){for(var n=0;n<this.errors.length;n++)if(this.errors[n].field===e){if(!t)return!0;if(this.errors[n].scope===t)return!0}return!1}},{key:"remove",value:function(e,t){return t?void(this.errors=this.errors.filter(function(n){return n.field!==e||n.scope!==t})):void(this.errors=this.errors.filter(function(t){return t.field!==e}))}}]),e}(),B=function(){function e(t){a(this,e),this.msg=t}return s(e,[{key:"toString",value:function(){return this.msg}}]),e}(),M=function(e){return e.dataset.scope||e.form&&e.form.dataset.scope},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t)return e;var i=void 0;return function(r){function a(){n||e.apply(u,o),i=null}var s=c(r),o=s,u=this;i?clearTimeout(i):n&&e.apply.apply(e,[u].concat(f(o))),i=setTimeout(a,t||100)}},D=function(e){console&&console.warn("vee-validate: "+e)},R=function(e){return e&&"object"===("undefined"==typeof e?"undefined":r(e))&&!Array.isArray(e)&&null!==e},z=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,e),this.dictionary={},this.merge(t)}return s(e,[{key:"hasLocale",value:function(e){return!!this.dictionary[e]}},{key:"getMessage",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return this.hasMessage(e,t)?this.dictionary[e].messages[t]:n}},{key:"getAttribute",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return this.hasAttribute(e,t)?this.dictionary[e].attributes[t]:n}},{key:"hasMessage",value:function(e,t){return!!(this.hasLocale(e)&&this.dictionary[e].messages&&this.dictionary[e].messages[t])}},{key:"hasAttribute",value:function(e,t){return!!(this.hasLocale(e)&&this.dictionary[e].attributes&&this.dictionary[e].attributes[t])}},{key:"merge",value:function(e){this._merge(this.dictionary,e)}},{key:"setMessage",value:function(e,t,n){this.hasLocale(e)||(this.dictionary[e]={messages:{},attributes:{}}),this.dictionary[e].messages[t]=n}},{key:"setAttribute",value:function(e,t,n){this.hasLocale(e)||(this.dictionary[e]={messages:{},attributes:{}}),this.dictionary[e].attributes[t]=n}},{key:"_merge",value:function(e,t){var n=this;return R(e)&&R(t)?(Object.keys(t).forEach(function(i){return R(t[i])?(e[i]||u(e,o({},i,{})),void n._merge(e[i],t[i])):void u(e,o({},i,t[i]))}),e):e}}]),e}(),q={alpha_dash:function(e){return"The "+e+" may contain alpha-numeric characters as well as dashes and underscores."},alpha_num:function(e){return"The "+e+" may only contain alpha-numeric characters."},alpha_spaces:function(e){return"The "+e+" may only contain alphabetic characters as well as spaces."},alpha:function(e){return"The "+e+" may only contain alphabetic characters."},between:function(e,t){var n=l(t,2),i=n[0],r=n[1];return"The "+e+" must be between "+i+" and "+r+"."},confirmed:function(e,t){var n=l(t,1),i=n[0];return"The "+e+" does not match the "+i+"."},decimal:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["*"],n=l(t,1),i=n[0];return"The "+e+" must be numeric and may contain "+("*"===i?"":i)+" decimal points."},digits:function(e,t){var n=l(t,1),i=n[0];return"The "+e+" must be numeric and exactly contain "+i+" digits."},dimensions:function(e,t){var n=l(t,2),i=n[0],r=n[1];return"The "+e+" must be "+i+" pixels by "+r+" pixels."},email:function(e){return"The "+e+" must be a valid email."},ext:function(e){return"The "+e+" must be a valid file."},image:function(e){return"The "+e+" must be an image."},in:function(e){return"The "+e+" must be a valid value."},ip:function(e){return"The "+e+" must be a valid ip address."},max:function(e,t){var n=l(t,1),i=n[0];return"The "+e+" may not be greater than "+i+" characters."},mimes:function(e){return"The "+e+" must have a valid file type."},min:function(e,t){var n=l(t,1),i=n[0];return"The "+e+" must be at least "+i+" characters."},not_in:function(e){return"The "+e+" must be a valid value."},numeric:function(e){return"The "+e+" may only contain numeric characters."},regex:function(e){return"The "+e+" format is invalid."},required:function(e){return"The "+e+" is required."},size:function(e,t){var n=l(t,1),i=n[0];return"The "+e+" must be less than "+i+" KB."},url:function(e){return"The "+e+" is not a valid URL."}},P=function(e){return function(t,n){var i=l(n,2),r=i[0],a=i[1],s=e(t,a,!0),o=document.querySelector("input[name='"+r+"']");if(!s.isValid()||!o)return!1;var u=e(o.value,a,!0);return!!u.isValid()&&s.isAfter(u)}},I=function(e){return function(t,n){var i=l(n,2),r=i[0],a=i[1],s=e(t,a,!0),o=document.querySelector("input[name='"+r+"']");if(!s.isValid()||!o)return!1;var u=e(o.value,a,!0);return!!u.isValid()&&s.isBefore(u)}},U=function(e){return function(t,n){var i=l(n,1),r=i[0];return e(t,r,!0).isValid()}},Z=function(e){return function(t,n){var i=l(n,3),r=i[0],a=i[1],s=i[2],o=e(r,s,!0),u=e(a,s,!0),c=e(t,s,!0);return!!(o.isValid()&&u.isValid()&&c.isValid())&&c.isBetween(o,u)}},C={after:function(e,t){var n=l(t,1),i=n[0];return"The "+e+" must be after "+i+"."},before:function(e,t){var n=l(t,1),i=n[0];return"The "+e+" must be before "+i+"."},date_between:function(e,t){var n=l(t,2),i=n[0],r=n[1];return"The "+e+" must be between "+i+" and "+r+"."},date_format:function(e,t){var n=l(t,1),i=n[0];return"The "+e+" must be in the format "+i+"."}},Y={make:function(e){return{date_format:U(e),after:P(e),before:I(e),date_between:Z(e)}},messages:C,installed:!1},K=function(){function e(){a(this,e),this.fields={}}return s(e,[{key:"_add",value:function(e){this.fields[e]={},this._setFlags(e,{dirty:!1,valid:!1},!0)}},{key:"_remove",value:function(e){delete this.fields[e]}},{key:"reset",value:function(e){var t=this;return e?void this._setFlags(e,{dirty:!1,valid:!1},!0):void Object.keys(this.fields).forEach(function(e){t._setFlags(e,{dirty:!1,valid:!1},!0)})}},{key:"_setFlags",value:function(e,t){var n=this,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return Object.keys(t).every(function(r){return n._setFlag(e,r,t[r],i)})}},{key:"_setFlag",value:function(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3],r="set"+t.charAt(0).toUpperCase()+t.slice(1);return"function"==typeof this[r]&&(this[r](e,n,i),!0)}},{key:"setDirty",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.fields[e].dirty=t,this.fields[e].clean=n||!t,this.fields[e].passed=this.fields[e].valid&&t,this.fields[e].failed=!this.fields[e].valid&&t}},{key:"setValid",value:function(e,t){this.fields[e].valid=t,this.fields[e].passed=this.fields[e].dirty&&t,this.fields[e].failed=this.fields[e].dirty&&!t}},{key:"_getFieldFlag",value:function(e,t){return!!this.fields[e]&&this.fields[e][t]}},{key:"dirty",value:function(e){var t=this;return e?this._getFieldFlag(e,"dirty"):Object.keys(this.fields).some(function(e){return t.fields[e].dirty})}},{key:"valid",value:function(e){var t=this;return e?this._getFieldFlag(e,"valid"):Object.keys(this.fields).every(function(e){return t.fields[e].valid})}},{key:"passed",value:function(e){var t=this;return e?this._getFieldFlag(e,"passed"):Object.keys(this.fields).every(function(e){return t.fields[e].passed})}},{key:"failed",value:function(e){var t=this;return e?this._getFieldFlag(e,"failed"):Object.keys(this.fields).some(function(e){return t.fields[e].failed})}},{key:"clean",value:function(e){return e?this._getFieldFlag(e,"clean"):!this.dirty()}}]),e}(),G="veeValidate",H="en",J=!0,Q=new z({en:{messages:q,attributes:{}}}),W=function(){function e(t,n){a(this,e),this.locale=H,this.strictMode=J,this.$fields={},this.fieldBag=new K,this._createFields(t),this.errorBag=new N,this.$vm=n,"function"==typeof moment&&this.installDateTimeValidators(moment)}return s(e,[{key:"installDateTimeValidators",value:function(t){e.installDateTimeValidators(t)}},{key:"setStrictMode",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.strictMode=e}},{key:"setLocale",value:function(e){Q.hasLocale(e)||D("You are setting the validator locale to a locale that is not defined in the dicitionary. English messages may still be generated."),this.locale=e}},{key:"attach",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.errorBag.remove(e),this._createField(e,t),n&&(this.$fields[e].name=n)}},{key:"updateDictionary",value:function(t){e.updateDictionary(t)}},{key:"detach",value:function(e){this.$vm&&"function"==typeof this.$vm.$emit&&this.$vm.$emit("VALIDATOR_OFF",e),delete this.$fields[e],this.fieldBag._remove(e)}},{key:"extend",value:function(t,n){e.extend(t,n)}},{key:"validateAll",value:function(e){var t=this;if(this.$vm&&(!e||"string"==typeof e))return this.errorBag.clear(e),void this.$vm.$emit(G,e);var n=!0,i=[];return this.errorBag.clear(),Object.keys(e).forEach(function(r){var a=t.validate(r,e[r]);return"function"==typeof a.then?void i.push(a):void(n=n&&a)}),i.length?Promise.all(i).then(function(e){return e.every(function(e){return e})&&n}):n}},{key:"validate",value:function(e,t,n){var i=this;if(!this.$fields[e])return!this.strictMode||(D('Trying to validate a non-existant field: "'+e+'". Use "attach()" first.'),!1);if(this.errorBag.remove(e,n),!this.$fields[e].required&&~[null,void 0,""].indexOf(t))return!0;var r=!0,a=[];return this.$fields[e].validations.forEach(function(s){var o=i._test(e,t,s,n);return"function"==typeof o.then?void a.push(o):void(r=r&&o)}),a.length?Promise.all(a).then(function(t){var n=t.every(function(e){return e})&&r;return i.fieldBag._setFlags(e,{valid:n,dirty:!0}),n}):(this.fieldBag._setFlags(e,{valid:r,dirty:!0}),r)}},{key:"_createFields",value:function(e){var t=this;e&&Object.keys(e).forEach(function(n){t._createField(n,e[n])})}},{key:"_createField",value:function(e,t){var n=this;return this.$fields[e]||(this.$fields[e]={}),this.fieldBag._add(e),this.$fields[e].validations=[],Array.isArray(t)?void(this.$fields[e].validations=t):void t.split("|").forEach(function(t){var i=n._normalizeRule(t,n.$fields[e].validations);"required"===i.name&&(n.$fields[e].required=!0),n.$fields[e].validations.push(i)})}},{key:"_normalizeRule",value:function(e,t){var n=[],i=e.split(":")[0];if(~e.indexOf(":")&&(n=e.split(":")[1].split(",")),Y.installed&&~["after","before","date_between"].indexOf(i)){var r=t.filter(function(e){return"date_format"===e.name})[0];r&&n.push(r.params[0])}return{name:i,params:n}}},{key:"_formatErrorMessage",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=this._getFieldDisplayName(e),r=this._getLocalizedParams(t);return Q.hasLocale(this.locale)&&"function"==typeof Q.getMessage(this.locale,t.name)?Q.getMessage(this.locale,t.name)(i,r,n):Q.getMessage("en",t.name)(i,r,n)}},{key:"_getLocalizedParams",value:function(e){return~["after","before","confirmed"].indexOf(e.name)&&e.params&&e.params[0]?[Q.getAttribute(this.locale,e.params[0],e.params[0])]:e.params}},{key:"_getFieldDisplayName",value:function(e){return this.$fields[e].name||Q.getAttribute(this.locale,e,e)}},{key:"_test",value:function(e,t,n,i){var r=this,a=O[n.name],s=a(t,n.params);return"function"==typeof s.then?s.then(function(t){var a=!0;return Array.isArray(t)?(a=t.every(function(e){return e.valid}),a||r.errorBag.add(e,r._formatErrorMessage(e,n),i)):(a=t.valid,r.errorBag.add(e,r._formatErrorMessage(e,n,t.data),i)),a}):R(s)?(s.valid||this.errorBag.add(e,this._formatErrorMessage(e,n,s.data),i),s.valid):(s||this.errorBag.add(e,this._formatErrorMessage(e,n),i),s)}},{key:"getErrors",value:function(){return this.errorBag}}],[{key:"setDefaultLocale",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en";Q.hasLocale(e)||D("You are setting the validator locale to a locale that is not defined in the dicitionary. English messages may still be generated."),H=e}},{key:"setStrictMode",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];J=e}},{key:"installDateTimeValidators",value:function(t){if("function"!=typeof t)return D("To use the date-time validators you must provide moment reference."),!1;if(Y.installed)return!0;var n=Y.make(t);return Object.keys(n).forEach(function(t){e.extend(t,n[t])}),e.updateDictionary({en:{messages:Y.messages}}),Y.installed=!0,!0}},{key:"updateDictionary",value:function(e){Q.merge(e)}},{key:"create",value:function(t,n){return new e(t,n)}},{key:"extend",value:function(t,n){e._guardExtend(t,n),e._merge(t,n)}},{key:"_merge",value:function(e,t){return"function"==typeof t?(O[e]=t,void Q.setMessage("en",e,function(e){return"The "+e+" value is not valid."})):(O[e]=t.validate,t.getMessage&&"function"==typeof t.getMessage&&Q.setMessage("en",e,t.getMessage),void(t.messages&&Q.merge(Object.keys(t.messages).reduce(function(n,i){var r=n;return r[i]={messages:o({},e,t.messages[i])},r},{}))))}},{key:"_guardExtend",value:function(e,t){if(O[e])throw new B("Extension Error: There is an existing validator with the same name '"+e+"'.");if("function"!=typeof t){if("function"!=typeof t.validate)throw new B("Extension Error: The validator '"+e+"' must be a function or have a 'validate' method.");if("function"!=typeof t.getMessage&&"object"!==r(t.messages))throw new B("Extension Error: The validator '"+e+"' must have a 'getMessage' method or have a 'messages' object.")}}}]),e}(),X=[],ee=function(e){for(var t=0;t<X.length;t++)if(X[t].$vm===e)return X[t].$validator},te=function(e){var t=ee(e);return t||(t=W.create(void 0,e),X.push({$vm:e,$validator:t})),t},ne=function(e){for(var t=0;t<X.length;t++)if(X[t].$vm===e)return X.splice(t,1),!0;return!1},ie=function(e){return{data:function(){return o({},e.errorBagName,this.$validator.errorBag)},computed:o({},e.fieldsBagName,{get:function(){return this.$validator.fieldBag}}),mounted:function(){this.$emit("validatorReady")},destroyed:function(){ne(this)}}},re="veeValidate",ae=function(){function e(t,n,i,r){a(this,e),this.callbacks=[],this.el=t,this.binding=n,this.vm=i,this.options=r,this.fieldName=n.expression||t.name}return s(e,[{key:"_hasFieldDependency",value:function(e){var t=e.split("|").filter(function(e){return!!e.match(/confirmed|after|before/)});return!!t.length&&t[0].split(":")[1]}},{key:"_inputListener",value:function(){this.vm.$validator.validate(this.fieldName,this.el.value,M(this.el))}},{key:"_fileListener",value:function(){var e=this.vm.$validator.validate(this.fieldName,this.el.files,M(this.el));!e&&this.binding.modifiers.reject&&(el.value="")}},{key:"_radioListener",value:function(){var e=document.querySelector('input[name="'+this.el.name+'"]:checked');return e?void this.vm.$validator.validate(this.fieldName,e.value,M(this.el)):void this.vm.$validator.validate(this.fieldName,null,M(this.el))}},{key:"_checkboxListener",value:function(){var e=this,t=document.querySelectorAll('input[name="'+this.el.name+'"]:checked');return t&&t.length?void[].concat(f(t)).forEach(function(t){e.vm.$validator.validate(e.fieldName,t.value,M(e.el))}):void this.vm.$validator.validate(this.fieldName,null,M(this.el))}},{key:"_getScopedListener",value:function(e){var t=this;return function(n){(!n||n===M(t.el)||n instanceof Event)&&e()}}},{key:"_attachValidatorEvent",value:function(){var e=this,t=this._getScopedListener(this._getSuitableListener().listener.bind(this));this.vm.$on(re,t),this.callbacks.push({name:re,listener:t}),this.vm.$on("VALIDATOR_OFF",function(t){e.fieldName===t&&e.detach()});var n=this._hasFieldDependency(this.el.dataset.rules);n&&this.vm.$once("validatorReady",function(){var i=document.querySelector("input[name='"+n+"']");return i?(i.addEventListener("input",t),void e.callbacks.push({name:"input",listener:t,el:i})):void D("Cannot find target field, no additional listeners were attached.")})}},{key:"_getSuitableListener",value:function(){return"file"===this.el.type?{name:"change",listener:this._fileListener}:"radio"===this.el.type?{name:"change",listener:this._radioListener}:"checkbox"===this.el.type?{name:"change",listener:this._checkboxListener}:{name:"input",listener:this._inputListener}}},{key:"_attachFieldListeners",value:function(){var e=this,t=this._getSuitableListener(),n=V(t.listener.bind(this),this.el.dataset.delay||this.options.delay);return~["radio","checkbox"].indexOf(this.el.type)?void this.vm.$once("validatorReady",function(){[].concat(f(document.querySelectorAll('input[name="'+e.el.name+'"]'))).forEach(function(i){i.addEventListener(t.name,n),e.callbacks.push({name:t.name,listener:n,el:i})})}):(this.el.addEventListener(t.name,n),void this.callbacks.push({name:t.name,listener:n,el:this.el}))}},{key:"attach",value:function(){return this.vm.$validator.attach(this.fieldName,this.el.dataset.rules,this.el.dataset.as),this._attachValidatorEvent(),this.binding.expression?void(this.binding.modifiers.initial||this.vm.$validator.validate(this.binding.expression,this.binding.value,M(this.el))):void this._attachFieldListeners()}},{key:"detach",value:function(){var e=this;this.callbacks.filter(function(e){var t=e.name;return t===re}).forEach(function(t){e.vm.$off(re,t.listener)}),this.callbacks.filter(function(e){var t=e.name;return t!==re}).forEach(function(e){e.el.removeEventListener(e.name,e.listener)})}}]),e}(),se=[],oe=function(e){return{bind:function(t,n,i){var r=i.context,a=new ae(t,n,r,e);a.attach(),se.push({vm:r,el:t,instance:a})},update:function(e,t,n){var i=t.expression,r=t.value,a=(t.modifiers,t.oldValue),s=n.context;i&&r!==a&&s.$validator.validate(i||e.name,r,M(e))},unbind:function(e,t,n){var i=n.context,r=se.filter(function(t){return t.vm===i&&t.el===e})[0];r.instance.detach(),se.splice(se.indexOf(r),1)}}},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.locale,i=void 0===n?"en":n,r=t.delay,a=void 0===r?0:r,s=t.errorBagName,o=void 0===s?"errors":s,u=t.dictionary,l=void 0===u?null:u,c=t.strict,f=void 0===c||c,d=t.fieldsBagName,h=void 0===d?"fields":d;l&&W.updateDictionary(l),W.setDefaultLocale(i),W.setStrictMode(f);var v={locale:i,delay:a,dictionary:l,errorBagName:o,fieldsBagName:h};Object.defineProperties(e.prototype,{$validator:{get:function(){return te(this)}}}),e.mixin(ie(v)),e.directive("validate",oe(v))},le={install:ue,Validator:W,ErrorBag:N};return le});

(function( $ ) {
	var $ahSearchForm 	= $('#ahSearchForm'),
		$searchArea 	= $('#search-area'),
		$input 					= $ahSearchForm.find('input#query'),
		$ahSearchResults		= $('#ahSearchResults');
		$ahSearchModal 		= $('#ahSearchModal');

	$('li.searchAnchor a').on('click', function(e) {
		e.preventDefault();

		// $ahSearchModal.modal()
			// .on('shown.bs.modal', function() {
			// 	ahSearchS = $(this).find('input#query');
			// 	ahSearchS.focus();
			// });
		$searchArea.slideToggle()
	});


/*
* Contact Form
*/
// 	var form = $('form#jqueryForm'),
// 		results = $('#results'),
// 		notice = '',
// 		$sucFail,
// 		$envoyer = '<span class="glyphicon glyphicon-send"></span>';

// 	$( document ).on('submit', 'form#jqueryForm', function(e) {

// 		e.preventDefault();

// 		var $this = $(this),
// 			$name = $this.find('#name'),
// 			$email = $this.find('#email'),
// 			$subject = $this.find('#subject'),
// 			$message = $this.find('textarea#message');

// 		if ( $.trim( $name.val() ) === '' ) {
// 			notice = 1;
// 			$name.next().show();
// 		} else {
// 			$name.next().hide();
// 		}

// 		if ( $.trim( $email.val() ) === '' ) {
// 			notice = 1;
// 			$email.next().show();
// 		} else {
// 			$email.next().hide();
// 		}

// 		if ( $.trim( $subject.val() ) === '' ) {
// 			notice = 1;
// 			$subject.next().show();
// 		} else {
// 			$subject.next().hide();
// 		}

// 		if ( $.trim( $message.val() ) === '' ) {
// 			notice = 1;
// 			$message.next().show();
// 		} else {
// 			$message.next().hide();
// 		}

// 		if ( notice === 0 ) {

// 			$('span.error').hide();

// 			results.html('');

// 			$this.find('button[type=submit]').text(' En train d\'envoyer...').prepend( $envoyer );

// 			var data = $this.serialize();

// 			$.post( AH_JS.ajax_url + '?action=ah_contact_form', data, function( data ) {

// 				$this.slideUp('slow');

// 				var anchor = $('<button></button>', {
// 					'class': 'btn btn-success',
// 					'id'	 : 'resetForm',
// 					'text' : 'Envoyer un autre message'
// 				});

// 				anchor.prepend( $envoyer + ' ');

// 				if ( 1 === parseInt( data ) ) {
// 					$data = '<h4>E-mail envoyé avec succès!</h4>';
// 					$sucFail = '<div class="bg-success left-content col-sm-12 text-center"></div>'
// 				}
// 				else if ( 0 === parseInt( data ) ) {
// 					$data = '<h4>Echec d\'envoi de l\'e-mail</h4>';
// 					$sucFail = '<div class="bg-danger left-content col-sm-12 text-center"></div>'
// 				}

// 				$pSuc = $( $sucFail ).html( $data ).append( anchor );
// 				results.html( $pSuc ).show();

// 				$this.find('button[type=submit]').text(' Envoyer').prepend( $envoyer );

// 			});
// 		} else {
// 			// results.html( '<p class="text-danger">' + notice + '</p>' );
// 			// $('span.error').show();
// 			notice = 0;
// 		}

// 	});

// 	$( document ).on('click', '#resetForm', function(e) {
// 		form[0].reset();
// 		form.slideDown('slow', function() {
// 			results.fadeOut();
// 			$(this).find('input')[0].focus();
// 		});

// 		e.preventDefault();
// 	});
})( jQuery );

// Vue Bootstraping

// <input v-el="avatar" type="file" name="avatar" id="avatar" v-on="change:upload">
// methods: {
//     upload: function(e) {
//         e.preventDefault();
//         var files = this.$$.avatar.files;
//         var data = new FormData();
//         // for single file
//         data.append('avatar', files[0]);
//        // Or for multiple files you can also do
//         //  _.each(files, function(v, k){
//         //    data.append('avatars['+k+']', v);
//        // });

//         this.$http.post('/avatars/upload', data, function (data, status, request) {
//               //handling
//         }).error(function (data, status, request) {
//              //handling
//         });
//     }
// }

var $http = axios.create({
  	headers: {
  		'X-Requested-With': 'XMLHttpRequest',
  		'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
 	}
});

Vue.use(VeeValidate);
Vue.prototype.$http = $http;

// Vue Search
var searchForm = new Vue({
	el: '#ahSearchForm',

	data: {
		searchTerm: '',
		results: [],
		noResults: false,
		loading: false
	},

	methods: {
		search: function() {
			vm = this;

			if (this.searchTerm.length > 2) {
				this.$http.get(ah.searchUrl, {
					// dataType: 'json',
					params: {q: this.searchTerm},
				})
				.then(function(response) {
					console.log(response);
					var data = response.data.data

					if (data.length > 0) {
						vm.loading = true;
						vm.noResults = false;
						vm.results = data;
						vm.loading = false;
					} else {
						vm.results = [];
						vm.noResults = true;
						console.log('no results');
					}
				})
				.catch(function(error) {
					console.log("error: " + error);
				})
			} else {
				this.results = [];
				vm.noResults = false;

			}
		}
	},
});

import 'Validor' from 'vee-validate'
var dictionnary = {
	en: {
		mesages: {
			email: () => 'Some English message'
		}
	}
}

Validor.updateDictionnary(dictionnary);

var contactForm = new Vue({
	el: '#contactForm',

	data: {
		sending: false
	},

	methods: {
		validateBeforeSubmit: function(e) {
			this.$validator.validateAll();

            if (this.errors.any()) {
                e.preventDefault()
            }
		}
	}
})
//# sourceMappingURL=all.js.map
