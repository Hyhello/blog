"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){var o=!1;if("function"==typeof define&&define.amd&&(define(e),o=!0),"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&(module.exports=e(),o=!0),!o){var t=window.Cookies,n=window.Cookies=e();n.noConflict=function(){return window.Cookies=t,n}}}(function(){function m(){for(var e=0,o={};e<arguments.length;e++){var t=arguments[e];for(var n in t)o[n]=t[n]}return o}return function e(l){function y(e,o,t){var n;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(t=m({path:"/"},y.defaults,t)).expires){var r=new Date;r.setMilliseconds(r.getMilliseconds()+864e5*t.expires),t.expires=r}t.expires=t.expires?t.expires.toUTCString():"";try{n=JSON.stringify(o),/^[\{\[]/.test(n)&&(o=n)}catch(e){}o=l.write?l.write(o,e):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i="";for(var c in t)t[c]&&(i+="; "+c,!0!==t[c]&&(i+="="+t[c]));return document.cookie=e+"="+o+i}e||(n={});for(var f=document.cookie?document.cookie.split("; "):[],p=/(%[0-9A-Z]{2})+/g,s=0;s<f.length;s++){var u=f[s].split("="),a=u.slice(1).join("=");'"'===a.charAt(0)&&(a=a.slice(1,-1));try{var d=u[0].replace(p,decodeURIComponent);if(a=l.read?l.read(a,d):l(a,d)||a.replace(p,decodeURIComponent),this.json)try{a=JSON.parse(a)}catch(e){}if(e===d){n=a;break}e||(n[d]=a)}catch(e){}}return n}}return(y.set=y).get=function(e){return y.call(y,e)},y.getJSON=function(){return y.apply({json:!0},[].slice.call(arguments))},y.defaults={},y.remove=function(e,o){y(e,"",m(o,{expires:-1}))},y.withConverter=e,y}(function(){})});