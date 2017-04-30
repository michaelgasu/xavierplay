/** Content:
/js/jquery.scrollTo.min.js
/js/jquery.waypoints.min.js
/js/scrollMagic.js
/js/background.js
/js/scrollbar.js
/ext/yii_ext.js
/js/main.js
*/
/*!
 * jquery.scrollto.js 0.0.1 - https://github.com/yckart/jquery.scrollto.js
 * Scroll smooth to any element in your DOM.
 *
 * Copyright (c) 2012 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/17
 **/
$.scrollTo = $.fn.scrollTo = function(x, y, options){
    if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);

    options = $.extend({}, {
        gap: {
            x: 0,
            y: 0
        },
        animation: {
            easing: 'swing',
            duration: 800,
            complete: $.noop,
            step: $.noop
        }
    }, options);

    return this.each(function(){
        var elem = $(this);
        elem.stop().animate({
            scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
            scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
        }, options.animation);
    });
};




/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Ã‚Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;// Generated by CoffeeScript 1.6.2
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=false;this.didScroll=false;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=true;t=function(){e.doScroll();return e.didScroll=false};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=true;t=function(){n[m]("refresh");return e.didResize=false};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}return t-n(this).outerHeight()}}this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}t.prototype.trigger=function(t){if(!this.enabled){return}if(this.callback!=null){this.callback.apply(this.element,t)}if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=false};t.prototype.enable=function(){this.context.refresh();return this.enabled=true};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}if(e==null){e=r}l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return true})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:true,enabled:true,horizontal:false,offset:0,triggerOnce:false};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}if(!e){return[]}r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return true})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);
;/* ScrollMagic v1.3.0 | (c) 2014 Jan Paepke (@janpaepke) | license & info: http://janpaepke.github.io/ScrollMagic */
!function(e,t){if("function"==typeof define&&define.amd)define(["jquery","TweenMax","TimelineMax"],t);else{var n=t(e.jQuery,e.TweenMax,e.TimelineMax);e.ScrollMagic=n.Controller,e.ScrollScene=n.Scene}}(this,function(e,t,n){var r=function(t){var n,r,a="ScrollMagic",u={container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100},f=this,g=e.extend({},u,t),h=[],d=!1,p=0,v="PAUSED",w=!0,m=0,S=!0,E=function(){if(f.version=f.constructor.version,e.each(g,function(e){u.hasOwnProperty(e)||delete g[e]}),g.container=e(g.container).first(),0===g.container.length)throw a+" init failed.";w=!e.contains(document,g.container.get(0)),w||g.container.on("resize",function(e){e.stopPropagation()}),m=g.vertical?g.container.height():g.container.width(),g.container.on("scroll resize",b),g.refreshInterval=parseInt(g.refreshInterval),g.refreshInterval>0&&(r=window.setInterval(R,g.refreshInterval)),n=l(T)},F=function(){return g.vertical?g.container.scrollTop():g.container.scrollLeft()},y=function(e){g.vertical?g.container.scrollTop(e):g.container.scrollLeft(e)},T=function(){if(n=l(T),S&&d){var t=e.isArray(d)?d:h.slice(0),r=p;p=f.scrollPos();var i=p-r;v=0===i?"PAUSED":i>0?"FORWARD":"REVERSE",0>i&&t.reverse(),e.each(t,function(e,t){t.update(!0)}),0===t.length&&g.loglevel>=3,d=!1}},b=function(e){"resize"==e.type&&(m=g.vertical?g.container.height():g.container.width()),d=!0},R=function(){w||m!=(g.vertical?g.container.height():g.container.width())&&g.container.trigger("resize"),e.each(h,function(e,t){t.refresh()})},z=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){return e.isArray(t)?e.each(t,function(e,t){f.addScene(t)}):t instanceof i&&(t.parent()!=f?t.addTo(f):e.inArray(t,h)<0&&(h.push(t),h=z(h),t.on("shift."+a+"_sort",function(){h=z(h)}),e.each(g.globalSceneOptions,function(e,n){t[e]&&t[e].call(t,n)}))),f},this.removeScene=function(t){if(e.isArray(t))e.each(t,function(e,t){f.removeScene(t)});else{var n=e.inArray(t,h);n>-1&&(t.off("shift."+a+"_sort"),h.splice(n,1),t.remove())}return f},this.updateScene=function(t,n){return e.isArray(t)?e.each(t,function(e,t){f.updateScene(t,n)}):n?t.update(!0):(e.isArray(d)||(d=[]),-1==e.inArray(t,d)&&d.push(t),d=z(d)),f},this.update=function(e){return b({type:"resize"}),e&&T(),f},this.scrollTo=function(t){if(t instanceof i)t.parent()===f?f.scrollTo(t.scrollOffset()):log(2,"scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.",t);else if("string"===e.type(t)||s(t)||t instanceof e){var n=e(t).first();if(n[0]){var r=g.vertical?"top":"left",a=o(g.container),l=o(n);w||(a[r]-=f.scrollPos()),f.scrollTo(l[r]-a[r])}else log(2,"scrollTo(): The supplied element could not be found. Scroll cancelled.",t)}else e.isFunction(t)?y=t:y.call(g.container[0],t);return f},this.scrollPos=function(t){return arguments.length?(e.isFunction(t)&&(F=t),f):F.call(f)},this.info=function(e){var t={size:m,vertical:g.vertical,scrollPos:p,scrollDirection:v,container:g.container,isDocument:w};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(e){return arguments.length?(g.loglevel!=e&&(g.loglevel=e),f):g.loglevel},this.enabled=function(e){return arguments.length?(S!=e&&(S=!!e,f.updateScene(h,!0)),f):S},this.destroy=function(e){window.clearTimeout(r);for(var t=h.length;t--;)h[t].destroy(e);return g.container.off("scroll resize",b),c(n),null},E(),f};r.version="1.3.0";var i=function(t){var i,s,l,c,u,f,g,h={onCenter:.5,onEnter:1,onLeave:0},d="ScrollScene",p={duration:0,offset:0,triggerElement:null,triggerHook:"onCenter",reverse:!0,tweenChanges:!1,loglevel:2},v=this,w=e.extend({},p,t),m="BEFORE",S=0,E={start:0,end:0},F=0,y=!0,T={unknownOptionSupplied:function(){e.each(w,function(e){p.hasOwnProperty(e)||delete w[e]})},duration:function(){if(e.isFunction(w.duration)){i=w.duration;try{w.duration=parseFloat(i())}catch(t){i=void 0,w.duration=p.duration}}else w.duration=parseFloat(w.duration),(!e.isNumeric(w.duration)||w.duration<0)&&(w.duration=p.duration)},offset:function(){w.offset=parseFloat(w.offset),e.isNumeric(w.offset)||(w.offset=p.offset)},triggerElement:function(){null!==w.triggerElement&&0===e(w.triggerElement).length&&(w.triggerElement=p.triggerElement)},triggerHook:function(){w.triggerHook in h||(w.triggerHook=e.isNumeric(w.triggerHook)?Math.max(0,Math.min(parseFloat(w.triggerHook),1)):p.triggerHook)},reverse:function(){w.reverse=!!w.reverse},tweenChanges:function(){w.tweenChanges=!!w.tweenChanges}},b=function(){R(),v.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?x():"reverse"===e.what&&v.update())}).on("shift.internal",function(e){C(),v.update(),("AFTER"===m&&"duration"===e.reason||"DURING"===m&&0===w.duration)&&O()}).on("progress.internal",function(){P(),O()}).on("destroy",function(e){e.preventDefault()})},R=function(t){if(arguments.length)e.isArray(t)||(t=[t]);else{t=[];for(var n in T)t.push(n)}e.each(t,function(e,t){T[t]&&T[t]()})},z=function(e,t){var n=!1,r=w[e];return w[e]!=t&&(w[e]=t,R(e),n=r!=w[e]),n},C=function(){E={start:F+w.offset},s&&w.triggerElement&&(E.start-=s.info("size")*v.triggerHook()),E.end=E.start+w.duration},D=function(e){if(i){var t="duration";z(t,i.call(v))&&!e&&(v.trigger("change",{what:t,newval:w[t]}),v.trigger("shift",{reason:t}))}},x=function(t){var n=0;if(s&&w.triggerElement){for(var r=e(w.triggerElement).first(),i=s.info(),a=o(i.container),l=i.vertical?"top":"left";r.parent().data("ScrollMagicPinSpacer");)r=r.parent();var c=o(r);i.isDocument||(a[l]-=s.scrollPos()),n=c[l]-a[l]}var u=n!=F;F=n,u&&!t&&v.trigger("shift",{reason:"triggerElementPosition"})},P=function(e){if(l){var t=e>=0&&1>=e?e:S;if(-1===l.repeat())if("DURING"===m&&l.paused())l.play();else{if("DURING"===m||l.paused())return!1;l.pause()}else{if(t==l.progress())return!1;0===w.duration?"DURING"===m?l.play():l.reverse():w.tweenChanges?l.tweenTo(t*l.duration()):l.progress(t).pause()}return!0}return!1},O=function(e){if(c&&s){var t=s.info();if(e||"DURING"!==m){var n={position:u.inFlow?"relative":"absolute",top:0,left:0},r=c.css("position")!=n.position;u.pushFollowers?w.duration>0&&("AFTER"===m&&0===parseFloat(u.spacer.css("padding-top"))?r=!0:"BEFORE"===m&&0===parseFloat(u.spacer.css("padding-bottom"))&&(r=!0)):n[t.vertical?"top":"left"]=w.duration*S,c.css(n),r&&(c.removeClass(u.pinnedClass),A())}else{"fixed"!=c.css("position")&&(c.css("position","fixed"),A(),c.addClass(u.pinnedClass));var i=o(u.spacer,!0),a=w.reverse||0===w.duration?t.scrollPos-E.start:Math.round(S*w.duration*10)/10;i.top-=parseFloat(u.spacer.css("margin-top")),i[t.vertical?"top":"left"]+=a,c.css({top:i.top,left:i.left})}}},A=function(){if(c&&s&&u.inFlow){var t="AFTER"===m,n="BEFORE"===m,r="DURING"===m,i="fixed"==c.css("position"),o=s.info("vertical"),l=u.spacer.children().first(),f=a(u.spacer.css("display")),g={};f?(g["margin-top"]=n||r&&i?c.css("margin-top"):"auto",g["margin-bottom"]=t||r&&i?c.css("margin-bottom"):"auto"):g["margin-top"]=g["margin-bottom"]="auto",u.relSize.width||u.relSize.autoFullWidth?i?e(window).width()==u.spacer.parent().width()?c.css("width",u.relSize.autoFullWidth?"100%":"inherit"):c.css("width",u.spacer.width()):c.css("width","100%"):(g["min-width"]=l.outerWidth(!l.is(c)),g.width=i?g["min-width"]:"auto"),u.relSize.height?i?e(window).height()==u.spacer.parent().height()?c.css("height","inherit"):c.css("height",u.spacer.height()):c.css("height","100%"):(g["min-height"]=l.outerHeight(!f),g.height=i?g["min-height"]:"auto"),u.pushFollowers&&(g["padding"+(o?"Top":"Left")]=w.duration*S,g["padding"+(o?"Bottom":"Right")]=w.duration*(1-S)),u.spacer.css(g)}},I=function(){s&&c&&"DURING"===m&&!s.info("isDocument")&&O()},N=function(){s&&c&&"DURING"===m&&((u.relSize.width||u.relSize.autoFullWidth)&&e(window).width()!=u.spacer.parent().width()||u.relSize.height&&e(window).height()!=u.spacer.parent().height())&&A()},k=function(e){s&&c&&"DURING"===m&&!s.info("isDocument")&&(e.preventDefault(),s.scrollTo(s.info("scrollPos")-(e.originalEvent.wheelDelta/3||30*-e.originalEvent.detail)))};return this.parent=function(){return s},this.duration=function(t){var n="duration";return arguments.length?(e.isFunction(t)||(i=void 0),z(n,t)&&(v.trigger("change",{what:n,newval:w[n]}),v.trigger("shift",{reason:n})),v):w[n]},this.offset=function(e){var t="offset";return arguments.length?(z(t,e)&&(v.trigger("change",{what:t,newval:w[t]}),v.trigger("shift",{reason:t})),v):w[t]},this.triggerElement=function(e){var t="triggerElement";return arguments.length?(z(t,e)&&v.trigger("change",{what:t,newval:w[t]}),v):w[t]},this.triggerHook=function(t){var n="triggerHook";return arguments.length?(z(n,t)&&(v.trigger("change",{what:n,newval:w[n]}),v.trigger("shift",{reason:n})),v):e.isNumeric(w[n])?w[n]:h[w[n]]},this.reverse=function(e){var t="reverse";return arguments.length?(z(t,e)&&v.trigger("change",{what:t,newval:w[t]}),v):w[t]},this.tweenChanges=function(e){var t="tweenChanges";return arguments.length?(z(t,e)&&v.trigger("change",{what:t,newval:w[t]}),v):w[t]},this.loglevel=function(e){var t="loglevel";return arguments.length?(z(t,e)&&v.trigger("change",{what:t,newval:w[t]}),v):w[t]},this.state=function(){return m},this.triggerPosition=function(){var e=w.offset;return s&&(e+=w.triggerElement?F:s.info("size")*v.triggerHook()),e},this.triggerOffset=function(){return v.triggerPosition()},this.scrollOffset=function(){return E.start},this.update=function(e){if(s)if(e)if(s.enabled()&&y){var t,n=s.info("scrollPos");t=w.duration>0?(n-E.start)/(E.end-E.start):n>=E.start?1:0,v.trigger("update",{startPos:E.start,endPos:E.end,scrollPos:n}),v.progress(t)}else c&&"DURING"===m&&O(!0);else s.updateScene(v,!1);return v},this.refresh=function(){return D(),x(),v},this.progress=function(e){if(arguments.length){var t=!1,n=m,r=s?s.info("scrollDirection"):"PAUSED",i=w.reverse||e>=S;if(0===w.duration?(t=S!=e,S=1>e&&i?0:1,m=0===S?"BEFORE":"DURING"):0>=e&&"BEFORE"!==m&&i?(S=0,m="BEFORE",t=!0):e>0&&1>e&&i?(S=e,m="DURING",t=!0):e>=1&&"AFTER"!==m?(S=1,m="AFTER",t=!0):"DURING"!==m||i||O(),t){var o={progress:S,state:m,scrollDirection:r},a=m!=n,l=function(e){v.trigger(e,o)};a&&"DURING"!==n&&(l("enter"),l("BEFORE"===n?"start":"end")),l("progress"),a&&"DURING"!==m&&(l("BEFORE"===m?"start":"end"),l("leave"))}return v}return S},this.setTween=function(e){if(!n)return v;l&&v.removeTween();try{l=new n({smoothChildTiming:!0}).add(e).pause()}catch(t){}finally{e.repeat&&-1===e.repeat()&&(l.repeat(-1),l.yoyo(e.yoyo()))}return P(),v},this.removeTween=function(e){return l&&(e&&P(0),l.kill(),l=void 0),v},this.setPin=function(t,n){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer",pinnedClass:""};if(n=e.extend({},r,n),t=e(t).first(),0===t.length)return v;if("fixed"==t.css("position"))return v;if(c){if(c===t)return v;v.removePin()}c=t,c.parent().hide();var i="absolute"!=c.css("position"),o=c.css(["display","top","left","bottom","right"]),s=c.css(["width","height"]);c.parent().show(),"0px"===s.width&&i&&a(o.display),!i&&n.pushFollowers&&(n.pushFollowers=!1);var l=e("<div></div>").addClass(n.spacerClass).css(o).data("ScrollMagicPinSpacer",!0).css({position:i?"relative":"absolute","margin-left":"auto","margin-right":"auto","box-sizing":"content-box"}),f=c[0].style;return u={spacer:l,relSize:{width:"%"===s.width.slice(-1),height:"%"===s.height.slice(-1),autoFullWidth:"0px"===s.width&&i&&a(o.display)},pushFollowers:n.pushFollowers,inFlow:i,origStyle:{width:f.width||"",position:f.position||"",top:f.top||"",left:f.left||"",bottom:f.bottom||"",right:f.right||"","box-sizing":f["box-sizing"]||"","-moz-box-sizing":f["-moz-box-sizing"]||"","-webkit-box-sizing":f["-webkit-box-sizing"]||""},pinnedClass:n.pinnedClass},u.relSize.width&&l.css("width",s.width),u.relSize.height&&l.css("height",s.height),c.before(l).appendTo(l).css({position:i?"relative":"absolute",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(u.relSize.width||u.relSize.autoFullWidth)&&c.css("box-sizing","border-box"),e(window).on("scroll."+d+"_pin resize."+d+"_pin",I),c.on("mousewheel DOMMouseScroll",k),O(),v},this.removePin=function(t){return c&&(t||!s?(c.insertBefore(u.spacer).css(u.origStyle),u.spacer.remove()):"DURING"===m&&O(!0),e(window).off("scroll."+d+"_pin resize."+d+"_pin"),c.off("mousewheel DOMMouseScroll",k),c=void 0),v},this.setClassToggle=function(t,n){var r=e(t);return 0===r.length||"string"!==e.type(n)?v:(f=n,g=r,v.on("enter.internal_class leave.internal_class",function(e){g.toggleClass(f,"enter"===e.type)}),v)},this.removeClassToggle=function(e){return g&&e&&g.removeClass(f),v.off("start.internal_class end.internal_class"),f=void 0,g=void 0,v},this.addTo=function(e){return e instanceof r&&s!=e&&(s&&s.removeScene(v),s=e,R(),D(!0),x(!0),C(),A(),s.info("container").on("resize."+d,function(){N(),v.triggerHook()>0&&v.trigger("shift",{reason:"containerSize"})}),e.addScene(v),v.update()),v},this.enabled=function(e){return arguments.length?(y!=e&&(y=!!e,v.update(!0)),v):y},this.remove=function(){if(s){s.info("container").off("resize."+d);var e=s;s=void 0,e.removeScene(v)}return v},this.destroy=function(e){return v.removeTween(e),v.removePin(e),v.removeClassToggle(e),v.trigger("destroy",{reset:e}),v.remove(),v.off("start end enter leave progress change update shift destroy shift.internal change.internal progress.internal"),null},this.on=function(t,n){if(e.isFunction(n)){var r=e.trim(t).toLowerCase().replace(/(\w+)\.(\w+)/g,"$1."+d+"_$2").replace(/( |^)(\w+)(?= |$)/g,"$1$2."+d);e(v).on(r,n)}return v},this.off=function(t,n){var r=e.trim(t).toLowerCase().replace(/(\w+)\.(\w+)/g,"$1."+d+"_$2").replace(/( |^)(\w+)(?= |$)/g,"$1$2."+d+"$3");return e(v).off(r,n),v},this.trigger=function(t,n){var r=e.Event(e.trim(t).toLowerCase(),n);return e(v).trigger(r),v},b(),v},o=function(e,t){var n={top:0,left:0};if(e=e[0],e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=(window.pageYOffset||document.scrollTop||0)-(document.clientTop||0),n.left+=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0))}return n},s=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName},a=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1},l=window.requestAnimationFrame,c=window.cancelAnimationFrame;return function(e){var t,n=0,r=["ms","moz","webkit","o"];for(t=0;!l&&t<r.length;++t)l=e[r[t]+"RequestAnimationFrame"],c=e[r[t]+"CancelAnimationFrame"]||e[r[t]+"CancelRequestAnimationFrame"];l||(l=function(t){var r=(new Date).getTime(),i=Math.max(0,16-(r-n)),o=e.setTimeout(function(){t(r+i)},i);return n=r+i,o}),c||(c=function(t){e.clearTimeout(t)})}(window),{Controller:r,Scene:i}});
;(function(a, b) {
	function m(a, b, c) {
		var d = h[b.type] || {};
		return a == null ? c || !b.def ? null : b.def : ( a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
	}

	function n(b) {
		var c = f(),
		    d = c._rgba = [];
		return b = b.toLowerCase(), l(e, function(a, e) {
			var f,
			    h = e.re.exec(b),
			    i = h && e.parse(h),
			    j = e.space || "rgba";
			if (i)
				return f = c[j](i), c[g[j].cache] = f[g[j].cache],
				d = c._rgba = f._rgba, !1
		}), d.length ? (d.join() === "0,0,0,0" && a.extend(d, k.transparent), c) : k[b]
	}

	function o(a, b, c) {
		return c = (c + 1) % 1, c * 6 < 1 ? a + (b - a) * c * 6 : c * 2 < 1 ? b : c * 3 < 2 ? a + (b - a) * (2 / 3 - c) * 6 : a
	}

	var c = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
	    d = /^([\-+])=\s*(\d+\.?\d*)/,
	    e = [{
		re : /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
		parse : function(a) {
			return [a[1], a[2], a[3], a[4]]
		}
	}, {
		re : /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
		parse : function(a) {
			return [a[1] * 2.55, a[2] * 2.55, a[3] * 2.55, a[4]]
		}
	}, {
		re : /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
		parse : function(a) {
			return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
		}
	}, {
		re : /#([a-f0-9])([a-f0-9])([a-f0-9])/,
		parse : function(a) {
			return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
		}
	}, {
		re : /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
		space : "hsla",
		parse : function(a) {
			return [a[1], a[2] / 100, a[3] / 100, a[4]]
		}
	}],
	    f = a.Color = function(b, c, d, e) {
		return new a.Color.fn.parse(b, c, d, e)
	},
	    g = {
		rgba : {
			props : {
				red : {
					idx : 0,
					type : "byte"
				},
				green : {
					idx : 1,
					type : "byte"
				},
				blue : {
					idx : 2,
					type : "byte"
				}
			}
		},
		hsla : {
			props : {
				hue : {
					idx : 0,
					type : "degrees"
				},
				saturation : {
					idx : 1,
					type : "percent"
				},
				lightness : {
					idx : 2,
					type : "percent"
				}
			}
		}
	},
	    h = {
		"byte" : {
			floor : !0,
			max : 255
		},
		percent : {
			max : 1
		},
		degrees : {
			mod : 360,
			floor : !0
		}
	},
	    i = f.support = {},
	    j = a("<p>")[0],
	    k,
	    l = a.each;
	j.style.cssText = "background-color:rgba(1,1,1,.5)", i.rgba = j.style.backgroundColor.indexOf("rgba") > -1, l(g, function(a, b) {
		b.cache = "_" + a, b.props.alpha = {
			idx : 3,
			type : "percent",
			def : 1
		}
	}), f.fn = a.extend(f.prototype, {
		parse : function(c, d, e, h) {
			if (c === b)
				return this._rgba = [null, null, null, null], this;
			if (c.jquery || c.nodeType)
				c = a(c).css(d),
				d =
				b;
			var i = this,
			    j = a.type(c),
			    o = this._rgba = [];
			d !== b && ( c = [c, d, e, h],
			j = "array");
			if (j === "string")
				return this.parse(n(c) || k._default);
			if (j === "array")
				return l(g.rgba.props, function(a, b) {
					o[b.idx] = m(c[b.idx], b)
				}), this;
			if (j === "object")
				return c instanceof f ? l(g, function(a, b) {
					c[b.cache] && (i[b.cache] = c[b.cache].slice())
				}) : l(g, function(b, d) {
					var e = d.cache;
					l(d.props, function(a, b) {
						if (!i[e] && d.to) {
							if (a === "alpha" || c[a] == null)
								return;
							i[e] = d.to(i._rgba)
						}
						i[e][b.idx] = m(c[a], b, !0)
					}), i[e] && a.inArray(null, i[e].slice(0, 3)) < 0 && (i[e][3] = 1, d.from && (i._rgba = d.from(i[e])))
				}), this
		},
		is : function(a) {
			var b = f(a),
			    c = !0,
			    d = this;
			return l(g, function(a, e) {
				var f,
				    g = b[e.cache];
				return g && ( f = d[e.cache] || e.to && e.to(d._rgba) || [], l(e.props, function(a, b) {
					if (g[b.idx] != null)
						return c = g[b.idx] === f[b.idx], c
				})), c
			}), c
		},
		_space : function() {
			var a = [],
			    b = this;
			return l(g, function(c, d) {
				b[d.cache] && a.push(c)
			}), a.pop()
		},
		transition : function(a, b) {
			var c = f(a),
			    d = c._space(),
			    e = g[d],
			    i = this.alpha() === 0 ? f("transparent") : this,
			    j = i[e.cache] || e.to(i._rgba),
			    k = j.slice();
			return c = c[e.cache], l(e.props, function(a, d) {
				var e = d.idx,
				    f = j[e],
				    g = c[e],
				    i = h[d.type] || {};
				if (g === null)
					return;
				f === null ? k[e] = g : (i.mod && (g - f > i.mod / 2 ? f += i.mod : f - g > i.mod / 2 && (f -= i.mod)), k[e] = m((g - f) * b + f, d))
			}), this[d](k)
		},
		blend : function(b) {
			if (this._rgba[3] === 1)
				return this;
			var c = this._rgba.slice(),
			    d = c.pop(),
			    e = f(b)._rgba;
			return f(a.map(c, function(a, b) {
				return (1 - d) * e[b] + d * a
			}))
		},
		toRgbaString : function() {
			var b = "rgba(",
			    c = a.map(this._rgba, function(a, b) {
				return a == null ? b > 2 ? 1 : 0 : a
			});
			return c[3] === 1 && (c.pop(),
			b = "rgb("), b + c.join() + ")"
		},
		toHslaString : function() {
			var b = "hsla(",
			    c = a.map(this.hsla(), function(a, b) {
				return a == null && ( a = b > 2 ? 1 : 0), b && b < 3 && ( a = Math.round(a * 100) + "%"), a
			});
			return c[3] === 1 && (c.pop(),
			b = "hsl("), b + c.join() + ")"
		},
		toHexString : function(b) {
			var c = this._rgba.slice(),
			    d = c.pop();
			return b && c.push(~~(d * 255)), "#" + a.map(c, function(a) {
				return a = (a || 0).toString(16), a.length === 1 ? "0" + a : a
			}).join("")
		},
		toString : function() {
			return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
		}
	}), f.fn.parse.prototype = f.fn, g.hsla.to = function(a) {
		if (a[0] == null || a[1] == null || a[2] == null)
			return [null, null, null, a[3]];
		var b = a[0] / 255,
		    c = a[1] / 255,
		    d = a[2] / 255,
		    e = a[3],
		    f = Math.max(b, c, d),
		    g = Math.min(b, c, d),
		    h = f - g,
		    i = f + g,
		    j = i * .5,
		    k,
		    l;
		return g === f ? k = 0 : b === f ? k = 60 * (c - d) / h + 360 : c === f ? k = 60 * (d - b) / h + 120 : k = 60 * (b - c) / h + 240, h === 0 ? l = 0 : j <= .5 ? l = h / i : l = h / (2 - i), [Math.round(k) % 360, l, j, e == null ? 1 : e]
	}, g.hsla.from = function(a) {
		if (a[0] == null || a[1] == null || a[2] == null)
			return [null, null, null, a[3]];
		var b = a[0] / 360,
		    c = a[1],
		    d = a[2],
		    e = a[3],
		    f = d <= .5 ? d * (1 + c) : d + c - d * c,
		    g = 2 * d - f;
		return [Math.round(o(g, f, b + 1 / 3) * 255), Math.round(o(g, f, b) * 255), Math.round(o(g, f, b - 1 / 3) * 255), e]
	}, l(g, function(c, e) {
		var g = e.props,
		    h = e.cache,
		    i = e.to,
		    j = e.from;
		f.fn[c] = function(c) {
			i && !this[h] && (this[h] = i(this._rgba));
			if (c === b)
				return this[h].slice();
			var d,
			    e = a.type(c),
			    k = e === "array" || e === "object" ? c : arguments,
			    n = this[h].slice();
			return l(g, function(a, b) {
				var c = k[e === "object" ? a : b.idx];
				c == null && ( c = n[b.idx]), n[b.idx] = m(c, b)
			}), j ? ( d = f(j(n)), d[h] =
			n, d) : f(n)
		}, l(g, function(b, e) {
			if (f.fn[b])
				return;
			f.fn[b] = function(f) {
				var g = a.type(f),
				    h = b === "alpha" ? this._hsla ? "hsla" : "rgba" : c,
				    i = this[h](),
				    j = i[e.idx],
				    k;
				return g === "undefined" ? j : (g === "function" && ( f = f.call(this, j),
				g = a.type(f)), f == null && e.empty ? this : (g === "string" && ( k = d.exec(f), k && ( f = j + parseFloat(k[2]) * (k[1] === "+" ? 1 : -1))), i[e.idx] =
				f, this[h](i)))
			}
		})
	}), f.hook = function(b) {
		var c = b.split(" ");
		l(c, function(b, c) {
			a.cssHooks[c] = {
				set : function(b, d) {
					var e,
					    g,
					    h = "";
					if (d !== "transparent" && (a.type(d) !== "string" || ( e = n(d)))) {
						d = f(e || d);
						if (!i.rgba && d._rgba[3] !== 1) {
							g = c === "backgroundColor" ? b.parentNode : b;
							while ((h === "" || h === "transparent") && g && g.style)
							try {
								h = a.css(g, "backgroundColor"),
								g = g.parentNode
							} catch(j) {
							}
							d = d.blend(h && h !== "transparent" ? h : "_default")
						}
						d = d.toRgbaString()
					}
					try {
						b.style[c] = d
					} catch(j) {
					}
				}
			}, a.fx.step[c] = function(b) {
				b.colorInit || (b.start = f(b.elem, c), b.end = f(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
			}
		})
	}, f.hook(c), a.cssHooks.borderColor = {
		expand : function(a) {
			var b = {};
			return l(["Top", "Right", "Bottom", "Left"], function(c, d) {
				b["border" + d + "Color"] = a
			}), b
		}
	},
	k = a.Color.names = {
		aqua : "#00ffff",
		black : "#000000",
		blue : "#0000ff",
		fuchsia : "#ff00ff",
		gray : "#808080",
		green : "#008000",
		lime : "#00ff00",
		maroon : "#800000",
		navy : "#000080",
		olive : "#808000",
		purple : "#800080",
		red : "#ff0000",
		silver : "#c0c0c0",
		teal : "#008080",
		white : "#ffffff",
		yellow : "#ffff00",
		transparent : [null, null, null, 0],
		_default : "#ffffff"
	}
})(jQuery);
;/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.9',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
        },

        getLineHeight: function(elem) {
            return parseInt($(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']().css('fontSize'), 10);
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));


/*
 * jScrollPane - v2.0.20 - 2014-10-23
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2014 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
(function(c,b){var a=function(d){return c(d,b)};if(typeof define==="function"&&define.amd){define(["jquery"],a)}else{if(typeof exports==="object"){module.exports=a}else{a(jQuery)}}}(function(b,a,c){b.fn.jScrollPane=function(e){function d(D,O){var ay,Q=this,Y,aj,v,al,T,Z,y,q,az,aE,au,i,I,h,j,aa,U,ap,X,t,A,aq,af,am,G,l,at,ax,x,av,aH,f,L,ai=true,P=true,aG=false,k=false,ao=D.clone(false,false).empty(),ac=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";if(D.css("box-sizing")==="border-box"){aH=0;f=0}else{aH=D.css("paddingTop")+" "+D.css("paddingRight")+" "+D.css("paddingBottom")+" "+D.css("paddingLeft");f=(parseInt(D.css("paddingLeft"),10)||0)+(parseInt(D.css("paddingRight"),10)||0)}function ar(aQ){var aL,aN,aM,aJ,aI,aP,aO=false,aK=false;ay=aQ;if(Y===c){aI=D.scrollTop();aP=D.scrollLeft();D.css({overflow:"hidden",padding:0});aj=D.innerWidth()+f;v=D.innerHeight();D.width(aj);Y=b('<div class="jspPane" />').css("padding",aH).append(D.children());al=b('<div class="jspContainer" />').css({width:aj+"px",height:v+"px"}).append(Y).appendTo(D)}else{D.css("width","");aO=ay.stickToBottom&&K();aK=ay.stickToRight&&B();aJ=D.innerWidth()+f!=aj||D.outerHeight()!=v;if(aJ){aj=D.innerWidth()+f;v=D.innerHeight();al.css({width:aj+"px",height:v+"px"})}if(!aJ&&L==T&&Y.outerHeight()==Z){D.width(aj);return}L=T;Y.css("width","");D.width(aj);al.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}Y.css("overflow","auto");if(aQ.contentWidth){T=aQ.contentWidth}else{T=Y[0].scrollWidth}Z=Y[0].scrollHeight;Y.css("overflow","");y=T/aj;q=Z/v;az=q>1;aE=y>1;if(!(aE||az)){D.removeClass("jspScrollable");Y.css({top:0,left:0,width:al.width()-f});n();E();R();w()}else{D.addClass("jspScrollable");aL=ay.maintainPosition&&(I||aa);if(aL){aN=aC();aM=aA()}aF();z();F();if(aL){N(aK?(T-aj):aN,false);M(aO?(Z-v):aM,false)}J();ag();an();if(ay.enableKeyboardNavigation){S()}if(ay.clickOnTrack){p()}C();if(ay.hijackInternalLinks){m()}}if(ay.autoReinitialise&&!av){av=setInterval(function(){ar(ay)},ay.autoReinitialiseDelay)}else{if(!ay.autoReinitialise&&av){clearInterval(av)}}aI&&D.scrollTop(0)&&M(aI,false);aP&&D.scrollLeft(0)&&N(aP,false);D.trigger("jsp-initialised",[aE||az])}function aF(){if(az){al.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />')));U=al.find(">.jspVerticalBar");ap=U.find(">.jspTrack");au=ap.find(">.jspDrag");if(ay.showArrows){aq=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",aD(0,-1)).bind("click.jsp",aB);af=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",aD(0,1)).bind("click.jsp",aB);if(ay.arrowScrollOnHover){aq.bind("mouseover.jsp",aD(0,-1,aq));af.bind("mouseover.jsp",aD(0,1,af))}ak(ap,ay.verticalArrowPositions,aq,af)}t=v;al.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){t-=b(this).outerHeight()});au.hover(function(){au.addClass("jspHover")},function(){au.removeClass("jspHover")}).bind("mousedown.jsp",function(aI){b("html").bind("dragstart.jsp selectstart.jsp",aB);au.addClass("jspActive");var s=aI.pageY-au.position().top;b("html").bind("mousemove.jsp",function(aJ){V(aJ.pageY-s,false)}).bind("mouseup.jsp mouseleave.jsp",aw);return false});o()}}function o(){ap.height(t+"px");I=0;X=ay.verticalGutter+ap.outerWidth();Y.width(aj-X-f);try{if(U.position().left===0){Y.css("margin-left",X+"px")}}catch(s){}}function z(){if(aE){al.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />')));am=al.find(">.jspHorizontalBar");
G=am.find(">.jspTrack");h=G.find(">.jspDrag");if(ay.showArrows){ax=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",aD(-1,0)).bind("click.jsp",aB);x=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",aD(1,0)).bind("click.jsp",aB);if(ay.arrowScrollOnHover){ax.bind("mouseover.jsp",aD(-1,0,ax));x.bind("mouseover.jsp",aD(1,0,x))}ak(G,ay.horizontalArrowPositions,ax,x)}h.hover(function(){h.addClass("jspHover")},function(){h.removeClass("jspHover")}).bind("mousedown.jsp",function(aI){b("html").bind("dragstart.jsp selectstart.jsp",aB);h.addClass("jspActive");var s=aI.pageX-h.position().left;b("html").bind("mousemove.jsp",function(aJ){W(aJ.pageX-s,false)}).bind("mouseup.jsp mouseleave.jsp",aw);return false});l=al.innerWidth();ah()}}function ah(){al.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){l-=b(this).outerWidth()});G.width(l+"px");aa=0}function F(){if(aE&&az){var aI=G.outerHeight(),s=ap.outerWidth();t-=aI;b(am).find(">.jspCap:visible,>.jspArrow").each(function(){l+=b(this).outerWidth()});l-=s;v-=s;aj-=aI;G.parent().append(b('<div class="jspCorner" />').css("width",aI+"px"));o();ah()}if(aE){Y.width((al.outerWidth()-f)+"px")}Z=Y.outerHeight();q=Z/v;if(aE){at=Math.ceil(1/y*l);if(at>ay.horizontalDragMaxWidth){at=ay.horizontalDragMaxWidth}else{if(at<ay.horizontalDragMinWidth){at=ay.horizontalDragMinWidth}}h.width(at+"px");j=l-at;ae(aa)}if(az){A=Math.ceil(1/q*t);if(A>ay.verticalDragMaxHeight){A=ay.verticalDragMaxHeight}else{if(A<ay.verticalDragMinHeight){A=ay.verticalDragMinHeight}}au.height(A+"px");i=t-A;ad(I)}}function ak(aJ,aL,aI,s){var aN="before",aK="after",aM;if(aL=="os"){aL=/Mac/.test(navigator.platform)?"after":"split"}if(aL==aN){aK=aL}else{if(aL==aK){aN=aL;aM=aI;aI=s;s=aM}}aJ[aN](aI)[aK](s)}function aD(aI,s,aJ){return function(){H(aI,s,this,aJ);this.blur();return false}}function H(aL,aK,aO,aN){aO=b(aO).addClass("jspActive");var aM,aJ,aI=true,s=function(){if(aL!==0){Q.scrollByX(aL*ay.arrowButtonSpeed)}if(aK!==0){Q.scrollByY(aK*ay.arrowButtonSpeed)}aJ=setTimeout(s,aI?ay.initialDelay:ay.arrowRepeatFreq);aI=false};s();aM=aN?"mouseout.jsp":"mouseup.jsp";aN=aN||b("html");aN.bind(aM,function(){aO.removeClass("jspActive");aJ&&clearTimeout(aJ);aJ=null;aN.unbind(aM)})}function p(){w();if(az){ap.bind("mousedown.jsp",function(aN){if(aN.originalTarget===c||aN.originalTarget==aN.currentTarget){var aL=b(this),aO=aL.offset(),aM=aN.pageY-aO.top-I,aJ,aI=true,s=function(){var aR=aL.offset(),aS=aN.pageY-aR.top-A/2,aP=v*ay.scrollPagePercent,aQ=i*aP/(Z-v);if(aM<0){if(I-aQ>aS){Q.scrollByY(-aP)}else{V(aS)}}else{if(aM>0){if(I+aQ<aS){Q.scrollByY(aP)}else{V(aS)}}else{aK();return}}aJ=setTimeout(s,aI?ay.initialDelay:ay.trackClickRepeatFreq);aI=false},aK=function(){aJ&&clearTimeout(aJ);aJ=null;b(document).unbind("mouseup.jsp",aK)};s();b(document).bind("mouseup.jsp",aK);return false}})}if(aE){G.bind("mousedown.jsp",function(aN){if(aN.originalTarget===c||aN.originalTarget==aN.currentTarget){var aL=b(this),aO=aL.offset(),aM=aN.pageX-aO.left-aa,aJ,aI=true,s=function(){var aR=aL.offset(),aS=aN.pageX-aR.left-at/2,aP=aj*ay.scrollPagePercent,aQ=j*aP/(T-aj);if(aM<0){if(aa-aQ>aS){Q.scrollByX(-aP)}else{W(aS)}}else{if(aM>0){if(aa+aQ<aS){Q.scrollByX(aP)}else{W(aS)}}else{aK();return}}aJ=setTimeout(s,aI?ay.initialDelay:ay.trackClickRepeatFreq);aI=false},aK=function(){aJ&&clearTimeout(aJ);aJ=null;b(document).unbind("mouseup.jsp",aK)};s();b(document).bind("mouseup.jsp",aK);return false}})}}function w(){if(G){G.unbind("mousedown.jsp")}if(ap){ap.unbind("mousedown.jsp")}}function aw(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");if(au){au.removeClass("jspActive")}if(h){h.removeClass("jspActive")}}function V(s,aI){if(!az){return}if(s<0){s=0}else{if(s>i){s=i}}if(aI===c){aI=ay.animateScroll}if(aI){Q.animate(au,"top",s,ad)}else{au.css("top",s);ad(s)}}function ad(aI){if(aI===c){aI=au.position().top}al.scrollTop(0);I=aI||0;var aL=I===0,aJ=I==i,aK=aI/i,s=-aK*(Z-v);if(ai!=aL||aG!=aJ){ai=aL;
aG=aJ;D.trigger("jsp-arrow-change",[ai,aG,P,k])}u(aL,aJ);Y.css("top",s);D.trigger("jsp-scroll-y",[-s,aL,aJ]).trigger("scroll")}function W(aI,s){if(!aE){return}if(aI<0){aI=0}else{if(aI>j){aI=j}}if(s===c){s=ay.animateScroll}if(s){Q.animate(h,"left",aI,ae)}else{h.css("left",aI);ae(aI)}}function ae(aI){if(aI===c){aI=h.position().left}al.scrollTop(0);aa=aI||0;var aL=aa===0,aK=aa==j,aJ=aI/j,s=-aJ*(T-aj);if(P!=aL||k!=aK){P=aL;k=aK;D.trigger("jsp-arrow-change",[ai,aG,P,k])}r(aL,aK);Y.css("left",s);D.trigger("jsp-scroll-x",[-s,aL,aK]).trigger("scroll")}function u(aI,s){if(ay.showArrows){aq[aI?"addClass":"removeClass"]("jspDisabled");af[s?"addClass":"removeClass"]("jspDisabled")}}function r(aI,s){if(ay.showArrows){ax[aI?"addClass":"removeClass"]("jspDisabled");x[s?"addClass":"removeClass"]("jspDisabled")}}function M(s,aI){var aJ=s/(Z-v);V(aJ*i,aI)}function N(aI,s){var aJ=aI/(T-aj);W(aJ*j,s)}function ab(aV,aQ,aJ){var aN,aK,aL,s=0,aU=0,aI,aP,aO,aS,aR,aT;try{aN=b(aV)}catch(aM){return}aK=aN.outerHeight();aL=aN.outerWidth();al.scrollTop(0);al.scrollLeft(0);while(!aN.is(".jspPane")){s+=aN.position().top;aU+=aN.position().left;aN=aN.offsetParent();if(/^body|html$/i.test(aN[0].nodeName)){return}}aI=aA();aO=aI+v;if(s<aI||aQ){aR=s-ay.horizontalGutter}else{if(s+aK>aO){aR=s-v+aK+ay.horizontalGutter}}if(!isNaN(aR)){M(aR,aJ)}aP=aC();aS=aP+aj;if(aU<aP||aQ){aT=aU-ay.horizontalGutter}else{if(aU+aL>aS){aT=aU-aj+aL+ay.horizontalGutter}}if(!isNaN(aT)){N(aT,aJ)}}function aC(){return -Y.position().left}function aA(){return -Y.position().top}function K(){var s=Z-v;return(s>20)&&(s-aA()<10)}function B(){var s=T-aj;return(s>20)&&(s-aC()<10)}function ag(){al.unbind(ac).bind(ac,function(aM,aN,aK,aI){if(!aa){aa=0}if(!I){I=0}var aJ=aa,s=I,aL=aM.deltaFactor||ay.mouseWheelSpeed;Q.scrollBy(aK*aL,-aI*aL,false);return aJ==aa&&s==I})}function n(){al.unbind(ac)}function aB(){return false}function J(){Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(s){ab(s.target,false)})}function E(){Y.find(":input,a").unbind("focus.jsp")}function S(){var s,aI,aK=[];aE&&aK.push(am[0]);az&&aK.push(U[0]);Y.focus(function(){D.focus()});D.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(aN){if(aN.target!==this&&!(aK.length&&b(aN.target).closest(aK).length)){return}var aM=aa,aL=I;switch(aN.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=aN.keyCode;aJ();break;case 35:M(Z-v);s=null;break;case 36:M(0);s=null;break}aI=aN.keyCode==s&&aM!=aa||aL!=I;return !aI}).bind("keypress.jsp",function(aL){if(aL.keyCode==s){aJ()}return !aI});if(ay.hideFocus){D.css("outline","none");if("hideFocus" in al[0]){D.attr("hideFocus",true)}}else{D.css("outline","");if("hideFocus" in al[0]){D.attr("hideFocus",false)}}function aJ(){var aM=aa,aL=I;switch(s){case 40:Q.scrollByY(ay.keyboardSpeed,false);break;case 38:Q.scrollByY(-ay.keyboardSpeed,false);break;case 34:case 32:Q.scrollByY(v*ay.scrollPagePercent,false);break;case 33:Q.scrollByY(-v*ay.scrollPagePercent,false);break;case 39:Q.scrollByX(ay.keyboardSpeed,false);break;case 37:Q.scrollByX(-ay.keyboardSpeed,false);break}aI=aM!=aa||aL!=I;return aI}}function R(){D.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function C(){if(location.hash&&location.hash.length>1){var aK,aI,aJ=escape(location.hash.substr(1));try{aK=b("#"+aJ+', a[name="'+aJ+'"]')}catch(s){return}if(aK.length&&Y.find(aJ)){if(al.scrollTop()===0){aI=setInterval(function(){if(al.scrollTop()>0){ab(aK,true);b(document).scrollTop(al.position().top);clearInterval(aI)}},50)}else{ab(aK,true);b(document).scrollTop(al.position().top)}}}}function m(){if(b(document.body).data("jspHijack")){return}b(document.body).data("jspHijack",true);b(document.body).delegate("a[href*=#]","click",function(s){var aI=this.href.substr(0,this.href.indexOf("#")),aK=location.href,aO,aP,aJ,aM,aL,aN;if(location.href.indexOf("#")!==-1){aK=location.href.substr(0,location.href.indexOf("#"))}if(aI!==aK){return}aO=escape(this.href.substr(this.href.indexOf("#")+1));
aP;try{aP=b("#"+aO+', a[name="'+aO+'"]')}catch(aQ){return}if(!aP.length){return}aJ=aP.closest(".jspScrollable");aM=aJ.data("jsp");aM.scrollToElement(aP,true);if(aJ[0].scrollIntoView){aL=b(a).scrollTop();aN=aP.offset().top;if(aN<aL||aN>aL+b(a).height()){aJ[0].scrollIntoView()}}s.preventDefault()})}function an(){var aJ,aI,aL,aK,aM,s=false;al.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(aN){var aO=aN.originalEvent.touches[0];aJ=aC();aI=aA();aL=aO.pageX;aK=aO.pageY;aM=false;s=true}).bind("touchmove.jsp",function(aQ){if(!s){return}var aP=aQ.originalEvent.touches[0],aO=aa,aN=I;Q.scrollTo(aJ+aL-aP.pageX,aI+aK-aP.pageY);aM=aM||Math.abs(aL-aP.pageX)>5||Math.abs(aK-aP.pageY)>5;return aO==aa&&aN==I}).bind("touchend.jsp",function(aN){s=false}).bind("click.jsp-touchclick",function(aN){if(aM){aM=false;return false}})}function g(){var s=aA(),aI=aC();D.removeClass("jspScrollable").unbind(".jsp");D.replaceWith(ao.append(Y.children()));ao.scrollTop(s);ao.scrollLeft(aI);if(av){clearInterval(av)}}b.extend(Q,{reinitialise:function(aI){aI=b.extend({},ay,aI);ar(aI)},scrollToElement:function(aJ,aI,s){ab(aJ,aI,s)},scrollTo:function(aJ,s,aI){N(aJ,aI);M(s,aI)},scrollToX:function(aI,s){N(aI,s)},scrollToY:function(s,aI){M(s,aI)},scrollToPercentX:function(aI,s){N(aI*(T-aj),s)},scrollToPercentY:function(aI,s){M(aI*(Z-v),s)},scrollBy:function(aI,s,aJ){Q.scrollByX(aI,aJ);Q.scrollByY(s,aJ)},scrollByX:function(s,aJ){var aI=aC()+Math[s<0?"floor":"ceil"](s),aK=aI/(T-aj);W(aK*j,aJ)},scrollByY:function(s,aJ){var aI=aA()+Math[s<0?"floor":"ceil"](s),aK=aI/(Z-v);V(aK*i,aJ)},positionDragX:function(s,aI){W(s,aI)},positionDragY:function(aI,s){V(aI,s)},animate:function(aI,aL,s,aK){var aJ={};aJ[aL]=s;aI.animate(aJ,{duration:ay.animateDuration,easing:ay.animateEase,queue:false,step:aK})},getContentPositionX:function(){return aC()},getContentPositionY:function(){return aA()},getContentWidth:function(){return T},getContentHeight:function(){return Z},getPercentScrolledX:function(){return aC()/(T-aj)},getPercentScrolledY:function(){return aA()/(Z-v)},getIsScrollableH:function(){return aE},getIsScrollableV:function(){return az},getContentPane:function(){return Y},scrollToBottom:function(s){V(i,s)},hijackInternalLinks:b.noop,destroy:function(){g()}});ar(O)}e=b.extend({},b.fn.jScrollPane.defaults,e);b.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){e[this]=e[this]||e.speed});return this.each(function(){var f=b(this),g=f.data("jsp");if(g){g.reinitialise(e)}else{b("script",f).filter('[type="text/javascript"],:not([type])').remove();g=new d(f,e);f.data("jsp",g)}})};b.fn.jScrollPane.defaults={showArrows:false,maintainPosition:true,stickToBottom:false,stickToRight:false,clickOnTrack:true,autoReinitialise:false,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:c,animateScroll:false,animateDuration:300,animateEase:"linear",hijackInternalLinks:false,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:false,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:true,hideFocus:false,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8}},this));
;
/*
error downloading http://www.xavierlegal.com/ext/yii_ext.js:The requested URL returned error: 404
curl_info:Array
(
    [url] => http://www.xavierlegal.com/ext/yii_ext.js
    [content_type] => 
    [http_code] => 404
    [header_size] => 0
    [request_size] => 159
    [filetime] => -1
    [ssl_verify_result] => 0
    [redirect_count] => 0
    [total_time] => 9.368184
    [namelookup_time] => 1.1E-5
    [connect_time] => 1.3E-5
    [pretransfer_time] => 1.4E-5
    [size_upload] => 0
    [size_download] => 0
    [speed_download] => 0
    [speed_upload] => 0
    [download_content_length] => -1
    [upload_content_length] => 0
    [starttransfer_time] => 9.368174
    [redirect_time] => 0
    [certinfo] => Array
        (
        )

    [primary_ip] => 208.113.192.247
    [primary_port] => 80
    [local_ip] => 208.113.192.243
    [local_port] => 38300
    [redirect_url] => 
)

*/
function isMobile() {
	try {
		document.createEvent("TouchEvent");
		return true;
	} catch(e) {
		return false;
	}
}

function toggleIcon(e) {
	var q1 = $('.q1'),
	    q2 = $('.q2');
	if (e.type === 'show') {
		switch($(e.target).attr('id')) {
		case 'collapseOne':
			q2.fadeOut(function() {
				q1.fadeIn();
			});
			break;
		case 'collapseTwo':
			q1.fadeOut(function() {
				q2.fadeIn();
			});

			break;
		}
	}
	$(e.target).prev('.panel-heading').find('i').toggleClass('icon-open icon-closed');
}
/*
function scrollSpyArr(el) {
	var tar = el.next('li');
	if (!tar.length) {
		$(".next-section").addClass('reverse').attr('href', "#home");
	} else {
		$(".next-section").removeClass('reverse').attr('href', tar.find('a').attr('href'));
	}
}
*/
function moveFooter() {
	var f = $("#footer").clone().css({
		position : 'absolute',
		'bottom' : 0
	});
	$("#footer").remove();
	$("#contact").append(f);
}


$(document).ready(function() {
	var $w = $(window),
	    $sections = $('.content'),
	    pModal = $("#profileModal"),
	    $backgound = $(".bg-0");
	   var logo = $("#logo_large");
	   if(logo.length){
		  var bpoint = logo.height() - logo.offset().top; 
	   }else{
		   var bpoint = 50;
	   }
	    
	    activeMenuItem = $("#main-nav").find('.active')
	isMobile = isMobile(),
	scaled = false;
	moveFooter();


	if (isMobile) {
		var nav = $('.nav');
		nav.on('click','a.dropdown-toggle',function(e){
			if($(this).hasClass('strig')){
				e.preventDefault();
			}
                if(!$(this).parent('li').hasClass('open')){
                	nav.find('.active').removeClass('active');
                    nav.find('.scrollto').hide();
                    $(this).parent('li').addClass('active open');
                }else if(e.clientX < 51){
                    
                    $(this).parent('li').removeClass('open');
                    nav.find('.scrollto').show();
               } 
             
		});
	}else{
		$('.strig').addClass('scrollto');
	}

	/*************************************************************************/
	/************** SECTIONS *************************************************/
	/*************************************************************************/
	var homeSection = $("#home");

	function adjustSectionsHeight() {
		$('section').css('height', $w.height() + 'px');
	}
      
      
    if(!isMobile){
    	adjustSectionsHeight();
    }
	

	/*if (activeMenuItem.length) {
		scrollSpyArr(activeMenuItem);
	}*/

	var scroll = function(e) {
		var scrollTop = $w.scrollTop(),
		    windowHeight = $w.height(),
		    windowWidth = $w.width();
        if(!isMobile){
			if (scrollTop >= 400) {
				$('.logo-small').removeClass('hide-logo');
			} else {
				$('.logo-small').addClass('hide-logo');
			}
		}
		if (windowWidth > 768) {
			$sections.each(function() {
				var $section = $(this),
				    height = $section.outerHeight() - 100,
				    top = $section.offset().top,
				    sectionUnderTop = scrollTop < top + height,
				    sectionOverBottom = top < scrollTop + windowHeight,
				    sectionInView = sectionUnderTop && sectionOverBottom,
				    visibleHeight,
				    offscreen;
				if (sectionInView) {
					if (scrollTop > top) {
						var t = (scrollTop - top)
						offscreen = 1 - (t / height);
					}
					if ((top - scrollTop) + height > windowHeight) {
						offscreen = 1 - (((top - scrollTop) + height - windowHeight) / height);
					}
					if ($section.hasClass('no-anim')) {
						if (offscreen < 0.4) {
							homeSection.find('.home-popover').hide();
							homeSection.find('.item.active').removeClass('active');
							$section.removeClass('no-anim');
						}
					}
					$section.css('opacity', offscreen || 1);
				}
			});
		}

	};
	if (!isMobile) {
		$w.on('scroll', scroll).trigger('scroll');
	}

	setInterval(function() {
		if ($backgound.is(':visible')) {
			$backgound.fadeOut(600);
		} else {
			$backgound.fadeIn(600);
		}
	}, 9000);

	$('a.scrollto').click(function(e) {
		e.preventDefault();
		var winOpen = $("#transparentModal").hasClass('in');
		
		if (scaled || winOpen) {
			if (winOpen){
				$("#transparentModal").modal('hide');
			}
			setTimeout(function() {
				$(e.target).trigger('click');
			}, 300)
		} else {
			$('html,body').scrollTo(this.hash, this.hash, {
				animation : {
					easing : 'easeInOutCubic',
					duration : 1600
				}
			});

			if ($('.navbar-collapse').hasClass('in')) {
				$('.navbar-collapse').removeClass('in').addClass('collapse');
			}
		}
	});
	if (!isMobile) {
		$('.scrollimation').waypoint(function() {
			$(this).addClass('in');
		}, {
			offset : '80%'
		});
		$('#team.scrollimation').waypoint(function() {
			var i = 1,
			    delay = [];
			$(this).find('.col-md-6').each(function(i) {
				i++;
				var elem = $(this);
				delay[i] = setTimeout(function() {
					elem.addClass('in');
				}, 200 * i);
			})
		}, {
			offset : '70%'
		});
		$('#home.scrollimation').waypoint(function() {
			var i = 1,
			    delay = [];
			$(this).find('.fade-up').each(function(i) {
				i++;
				var elem = $(this);
				delay[i] = setTimeout(function() {
					elem.addClass('in');
				}, 200 * i);
			})
		}, {
			offset : '70%'
		});
	} else {
		$('.scrollimation').addClass('in');
		$('#team.scrollimation').find('.col-md-6').addClass('in');
		$('#home.scrollimation').find('.col-sm-4').addClass('in');
	}

	$('body').scrollspy({
		target : '#main-nav'
	});

	/*
	$('body').on('activate.bs.scrollspy', function(v) {
		scrollSpyArr($(v.target));
	});
*/
	$w.scroll(function() {
		var sc = $(this).scrollTop();
		if (sc >= bpoint) {
			$('.navbar-brand').fadeIn();
		} else {
			$('.navbar-brand').fadeOut();
		}

	});
	/*
	var q1 = $('.q1'),
	q2 = $('.q2'),
	q3 = $('.q3');
	$('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
	switch ($(e.target).attr('href') ) {
	case '#c1':
	q1.fadeOut('fast');
	q2.fadeOut(function() {
	q3.fadeIn();
	})
	break;
	case '#c2':
	var tar = $("#accordion").find('.in');
	q3.fadeOut(function() {
	switch(tar.attr('id')) {
	case 'collapseOne':
	q2.fadeOut(function() {
	q1.fadeIn();
	});

	break;
	case 'collapseTwo':
	q1.fadeOut(function() {
	q2.fadeIn();
	});

	break;
	}
	});
	break;
	}
	})

	$('#accordion').on('hide.bs.collapse', toggleIcon);
	$('#accordion').on('show.bs.collapse', toggleIcon);
	*/
	/*****************************************************************************/
	/********* TEAM **********************************************************/
	/*****************************************************************************/
	var transWin = $("#transparentModal");
	$('.profile').click(function() {
		var view = $(this).data('view');
		if (view) {
			var win = isMobile ? pModal : transWin;
			if (!isMobile) {
				$("#team_members").fadeOut();
			}
			win.modal('show');
			transWin.data('view', view);
			$('#team').addClass('loading');
			$.get('profile?name=' + view, function(res) {
				win.find('.modal-body').after($(res));
				var pi = win.find("#profile-image");
				pi.attr('src', pi.data('src')).load(function() {
					win.find('.modal-dialog').removeClass('modal-sm').addClass('modal-lg').find('.modal-body').remove();
					$('#team').removeClass('loading');
					win.find('.profile-content').removeClass('hide');
					if (!isMobile) {
						win.find('.arr').show();
						$('.scrollable').jScrollPane({
							showArrows : true
						});
					}
				});

			});
		}
	});

	pModal.on('hidden.bs.modal', function(event) {
		pModal.find('.profile-content').remove();
		pModal.find('.modal-content').html("<div class='modal-body'></div>");
		pModal.find('.modal-dialog').removeClass('modal-lg').addClass('modal-sm');
	});

	transWin.on('hidden.bs.modal', function(event) {
		transWin.find('.profile-content').remove();
		transWin.find('.modal-content').html("<div class='modal-body'></div>");
		transWin.find('.modal-dialog').removeClass('modal-lg').addClass('modal-sm');
		$("#team_members").fadeIn();
		transWin.find('.arr').show();
	});
	transWin.on('show.bs.modal', function() {

	})
	var data = ['xavier', 'seow'/*, 'bernard'*/];

	$('#transparentModal .arr').click(function() {
		var cur = transWin.data('view');
		if ($(this).hasClass('next')) {
			var idx = data.indexOf(cur) + 1;
			if (idx >= data.length) {
				idx = 0;
			}
			var view = data[idx];
		} else {
			var idx = data.indexOf(cur);
			if (idx == 0) {
				idx = data.length - 1;
			} else {
				idx = idx - 1;
			}
			var view = data[idx];
		}
		transWin.find('.profile-content').html('')
		$('#team').addClass('loading');
		transWin.data('view', view);
		$.get('profile?name=' + view, function(res) {
			transWin.find('.profile-content').replaceWith($(res));
			var pi = transWin.find("#profile-image");
			pi.attr('src', pi.data('src')).load(function() {
				transWin.find('.modal-dialog').removeClass('modal-sm').addClass('modal-lg').find('.modal-body').remove();
				$('#team').removeClass('loading');
				transWin.find('.profile-content').removeClass('hide');
				$('.scrollable').jScrollPane({
					showArrows : true
				});
			});

		});

	});

	/*****************************************************************************/
	/********* ABOUT US **********************************************************/
	/*****************************************************************************/

	homeSection.on('click', '.item', function() {
		var _this = $(this);
		if (isMobile) {
			pModal.modal('show');
			pModal.find('.modal-dialog').removeClass('modal-sm').addClass('modal-lg').find('.modal-body').remove();
			var cont = $(_this.data('content') + '-popover').find('.col-sm-9').clone();
			cont.find('.close').replaceWith('<div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button></div>');
			pModal.find('.modal-content').html(cont.html());
		} else {
			homeSection.find('.content').addClass('no-anim');
			var h = parseInt(($(window).height() / 2) - 60);
			if (h !== parseInt($(window).scrollTop())) {
				$('html,body').scrollTo(0, h, {
					animation : {
						easing : 'easeInOutCubic',
						duration : 1000
					}
				});
				setTimeout(function() {
					homeSection.find('.home-popover').hide();
					homeSection.find('.item.active').removeClass('active');
					_this.addClass('active');
					$(_this.data('content') + '-popover').show();
				}, 1000);
			} else {
				homeSection.find('.home-popover').hide();
				homeSection.find('.item.active').removeClass('active');
				_this.parent('.item').addClass('active');
				$(_this.data('content') + '-popover').show();
			}

		}
	});
	homeSection.on('click', 'a.close', function() {
		homeSection.find('.home-popover').hide();
		homeSection.find('.item.active').removeClass('active');
		homeSection.find('.content').removeClass('no-anim');
	});
	var _home_itms = homeSection.find('.item'),
	    _item_idx = 0;
	function cycle_gifs() {
		clearInterval(interval);
		homeSection.find('.img-static').removeAttr('style');
		homeSection.find('.img-animated').removeAttr('style');
		if(_item_idx > 2){
			return;
		}
		var item = $(_home_itms[_item_idx]);
		item.find('.img-static').hide();
		item.find('.img-animated').show();
		_item_idx++;
		switch(_item_idx) {
		case 1:
			interval = setInterval(cycle_gifs, 5600);
			break;
		case 2:
			interval = setInterval(cycle_gifs, 7800);
			break;
		default:
		   	setInterval(cycle_gifs, 6500);
		}

	}

	var interval = setInterval(cycle_gifs, 1200);
	/*

	*/
	/*****************************************************************************/
	/************** SERVICES ****************************************************/
	/*****************************************************************************/
    var servicesContainer = $("#services");
	if(servicesContainer.length){
		
	
	var $circles_container = $("#circles-animated"),
	    $circles = $('.circle'),
	    $circles_wrapper = $("#circles"),
	    circle_scroll_ini = $("#services").position().top - $(window).height() + 500,
	    circle_scroll_end = circle_scroll_ini + $(window).height() - 500,
	    circle_radius = 100,
	    circle_points,
	    circle_vectors,
	    t_end,
	    rotating = false;

	function initCircles() {
		var container_height = $circles_container.height(),
		    container_width = 800,
		    container_center_width = (container_width / 2) - circle_radius,
		    container_center_height = (container_height / 2) - circle_radius;
		container_half_width = container_width / 2;

		t_end = 1 - (1.4 * circle_radius / container_height );

		circle_points = [{
			x : 0,
			y : container_center_height
		}, {
			x : container_center_width,
			y : container_center_height
		}, {
			x : (container_width - (circle_radius * 2)),
			y : container_center_height
		}];

		circle_vectors = [];
		for (var i = 0; i < circle_points.length; i++) {
			circle_vectors[i] = {
				x : container_center_width - circle_points[i].x,
				y : container_center_height - circle_points[i].y
			};
		}
		$circles_container.css({
			width : container_width,
			'margin-left' : -container_half_width
		});
	}

	initCircles();
	function updateCircles() {
		if (scaled) {
			resetAndRotate();
		}

		var sc = $(window).scrollTop();
		if (sc < circle_scroll_ini) {
			sc = circle_scroll_ini;
		} else if (sc > circle_scroll_end) {
			sc = circle_scroll_end;
		}
		sc = (sc - circle_scroll_ini) / (circle_scroll_end - circle_scroll_ini);
		if (sc === 1) {
			$circles_wrapper.data('active', true);
		} else {
			$circles_wrapper.data('active', false);
		}
		var data = {};
		for (var i = 0; i < circle_points.length; i++) {
			switch(i) {
			case 0:
				data.left = (circle_points[i].x + t_end * sc) * (circle_vectors[i].x - 35);
				data.top = circle_points[i].y + 50;
				break;
			case 1:
				data.left = circle_points[i].x;
				data.top = circle_points[i].y + t_end * sc * (circle_vectors[i].y - 100);
				break;
			case 2:
				data.left = circle_points[i].x + t_end * sc * (circle_vectors[i].x + 35);
				data.top = circle_points[i].y + 50;
				break;
			}
			$("#circle" + i).css(data);
		}
	}

	updateCircles();

	$w.on('scroll', updateCircles);

	$circles.click(function() {
		if (!$circles_wrapper.data('active') || rotating) {
			return;
		}
		var el = $(this);
		rotating = true;
		var pos = el.position();
		for (var i = 0; i < $circles.length; i++) {
			if ($($circles[i]).position().top < pos.top) {
				rotate(el);
				break;
			} else if (i == 2) {
				scale(el);
			}
		}
		setTimeout(function() {
			rotating = false;
		}, 500)
	});

	$circles.on('click', '.close-circle', function(e) {
		e.preventDefault();
		resetAndRotate();
	});

	$(document).mouseup(function(e) {
		if (scaled && !$(e.target).hasClass('circle') && $(e.target).parents('.circle').length === 0) {
			resetAndRotate();
		}
	});
	function rotate(el) {
		if (scaled) {
			resetAndRotate(el);
			return;
		}
		doRotate(el);
	}

	function doRotate(el) {
		var p0 = el.position().left;
		var p1;
		var p2;
		$circles.each(function(idx, element) {
			if (!$(this).is(el)) {
				if (!p1) {
					p1 = $(this).position().left
				} else {
					p2 = $(this).position().left
				}
			}
			if (idx === 2) {
				var direction = (p0 > p1 && p0 > p2) ? 'right' : 'left';
				$circles.each(function(idx, element) {
					if (direction == 'left') {
						var coords = $($circles[idx + 1]).position() || $($circles[0]).position();
					} else {
						var coords = $($circles[idx - 1]).position() || $($circles[2]).position();
					}
					$(this).animate({
						"left" : coords.left,
						"top" : coords.top
					}, function() {
						if (idx === 2) {
							scale(el);
						}
					});

				});
			}
		});

	}

	function scale(el) {
		if (scaled) {
			return;
		}
		scaled = true;
		$('body').addClass('modal-open').css({
			'padding-right' : '17px'
		});
		var sib = [];
		$circles.each(function(idx, element) {
			var position = $(this).position();
			$(this).data('position', position);

			if (!$(this).is(el)) {
				sib.push($(this));
			} else {
				$(this).addClass('current');
			}

			if (idx == 2) {

				var left = el.position().left,
				    top = el.position().top,
				    offset = 50,
				    data = {
					'height' : '480px',
					'width' : '480px',
					'top' : (top - offset) + 'px',
					'left' : '50%',
					'margin-left' : '-240px',
					//'opacity' : 1
				},
				    sib1left = $(sib[0]).data('position').left,
				    sib1_left = (sib1left > left) ? sib1left + 210 : sib1left - 210,
				    sib2left = $(sib[1]).data('position').left,
				    sib2_left = (sib2left > left) ? sib2left + 210 : sib2left - 210;

				$(sib[0]).animate({
					left : sib1_left,
					top : '60%',
					'margin-top' : '-135px',
					'z-index' : 1,
					//'opacity' : 0.8
				});

				$(sib[1]).animate({
					left : sib2_left,
					top : '60%',
					'margin-top' : '-135px',
					'z-index' : 1,
					//'opacity' : 0.8
				})
				el.css({
					'z-index' : 0
				}).animate(data, 300, function() {
					el.find('.circle-heading').slideToggle();
					el.find('.circle-content').slideToggle();
				});
			}
		});

	}

	function resetAndRotate(el) {
		$circles.each(function(idx) {
			var _this = $(this);
			var data = {
				'width' : '200px',
				'height' : '200px',
				'margin' : 0,
				'top' : _this.data('position').top + 'px',
				'left' : _this.data('position').left + 'px',
				'z-index' : 0
			};

			_this.find('.circle-content').hide();
			var title = _this.find('.circle-heading');
			if (!title.is(':visible')) {
				title.slideToggle();
			}

			_this.animate(data, 300, function() {
				_this.removeClass('current');
				if (idx == 2) {
					scaled = false;
					if (el) {
						doRotate(el);
					} else {
						$('body').removeClass('modal-open').css({
							'padding-right' : 0
						});
					}
				}
			});
		});
	}

	var trc = $("#circles-static"),
	    tr1 = trc.find(".corporate"),
	    tr2 = trc.find(".commercial"),
	    tr3 = trc.find(".innovation");

	if (isMobile) {
		trc.on('click', 'div', function() {
			pModal.modal('show');
			pModal.find('.modal-dialog').removeClass('modal-sm').addClass('modal-lg').find('.modal-body').remove();
			pModal.find('.modal-content').html($("#circles-static-content").find($(this).data('content')).clone().html());
		});
	}
}
	/********************************************************************************/
	/******** PARALLAX **************************************************************/
	/********************************************************************************/

	if (!isMobile) {
		var controller = new ScrollMagic({
			globalSceneOptions : {
				triggerHook : "onEnter",
				duration : $(window).height() * 2
			}
		});
		new ScrollScene({
			triggerElement : "#parallax"
		}).setTween(TweenMax.from("#parallax > div", 1, {
			top : "-20%",
			ease : Linear.easeNone
		})).addTo(controller);
		new ScrollScene({
			triggerElement : "#parallax2"
		}).setTween(TweenMax.from("#parallax2 > div", 1, {
			top : "-30%",
			ease : Linear.easeNone
		})).addTo(controller);
		new ScrollScene({
			triggerElement : "#parallax3"
		}).setTween(TweenMax.from("#parallax3 > div", 1, {
			top : "-20%",
			ease : Linear.easeNone
		})).addTo(controller);
		new ScrollScene({
			triggerElement : ".parallax-carousel"
		}).setTween(TweenMax.from("#parallax4 > div", 1, {
			top : "-50%",
			ease : Linear.easeNone
		})).addTo(controller);
		new ScrollScene({
			triggerElement : ".parallax-carousel"
		}).setTween(TweenMax.from("#parallax5 > div", 1, {
			top : "-50%",
			ease : Linear.easeNone
		})).addTo(controller);
		new ScrollScene({
			triggerElement : ".parallax-carousel"
		}).setTween(TweenMax.from("#parallax6 > div", 1, {
			top : "-50%",
			ease : Linear.easeNone
		})).addTo(controller);
	}

	$w.resize(function() {
		if(!isMobile){
		 adjustSectionsHeight();
		}
		initCircles();
		updateCircles();
	});
	
	/********************************/

                
});


;;if (!$.nlsc) $.nlsc={resMap:{}};
$.nlsc.resMap["http://www.xavierlegal.com/js/jquery.scrollTo.min.js"]="267058060";
$.nlsc.resMap["http://www.xavierlegal.com/js/jquery.waypoints.min.js"]="712820928";
$.nlsc.resMap["http://www.xavierlegal.com/js/scrollMagic.js"]="1066566152";
$.nlsc.resMap["http://www.xavierlegal.com/js/background.js"]="39767288";
$.nlsc.resMap["http://www.xavierlegal.com/js/scrollbar.js"]="1051754818";
$.nlsc.resMap["http://www.xavierlegal.com/js/main.js"]="258403277";
