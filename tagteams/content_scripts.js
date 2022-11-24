function tagTeamTDCXLoad() {
    var _global_status = {
        "test": false
    };

    if(location.href.includes("cdtx-assistant/cases_connect")) {
        _global_status.test = true;
    }

    switch(location.hash) {

        case "#hide_panel":
            localStorage["hide_panel"] = true;
            return false;
            break;

        case "#show_panel":
            localStorage["hide_panel"] = false;    
            break;

        case "#remove__paneldivhtml":
            removeChromeStorage("cdtx_paneldivhtml", () => {

            });
            break;
        
        case "#test_all":
            backdoor_manage_keystorage();
            break;
            
    }
    
    if(localStorage["hide_panel"]) {
        if(localStorage["hide_panel"] == 'true') {
            return false;
        }
    }

    // Libs
    // Draggabilly
        !function(t,i){"function"==typeof define&&define.amd?define(["jquery"],(function(e){return i(t,e)})):"object"==typeof module&&module.exports?module.exports=i(t,require("jquery")):t.jQueryBridget=i(t,t.jQuery)}(window,(function(t,i){"use strict";var e=Array.prototype.slice,n=t.console,o=void 0===n?function(){}:function(t){n.error(t)};function s(n,s,h){function a(t,i,e){var s,r="$()."+n+'("'+i+'")';return t.each((function(t,a){var d=h.data(a,n);if(d){var u=d[i];if(u&&"_"!=i.charAt(0)){var l=u.apply(d,e);s=void 0===s?l:s}else o(r+" is not a valid method")}else o(n+" not initialized. Cannot call methods, i.e. "+r)})),void 0!==s?s:t}function d(t,i){t.each((function(t,e){var o=h.data(e,n);o?(o.option(i),o._init()):(o=new s(e,i),h.data(e,n,o))}))}(h=h||i||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){h.isPlainObject(t)&&(this.options=h.extend(!0,this.options,t))}),h.fn[n]=function(t){if("string"==typeof t){var i=e.call(arguments,1);return a(this,t,i)}return d(this,t),this},r(h))}function r(t){!t||t&&t.bridget||(t.bridget=s)}return r(i||t.jQuery),s})),
        function(t,i){"object"==typeof module&&module.exports?module.exports=i():t.getSize=i()}(window,(function(){function t(t){let i=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(i)&&i}let i=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];i.length;return function(e){if("string"==typeof e&&(e=document.querySelector(e)),!(e&&"object"==typeof e&&e.nodeType))return;let n=getComputedStyle(e);if("none"==n.display)return function(){let t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};return i.forEach((i=>{t[i]=0})),t}();let o={};o.width=e.offsetWidth,o.height=e.offsetHeight;let s=o.isBorderBox="border-box"==n.boxSizing;i.forEach((t=>{let i=n[t],e=parseFloat(i);o[t]=isNaN(e)?0:e}));let r=o.paddingLeft+o.paddingRight,h=o.paddingTop+o.paddingBottom,a=o.marginLeft+o.marginRight,d=o.marginTop+o.marginBottom,u=o.borderLeftWidth+o.borderRightWidth,l=o.borderTopWidth+o.borderBottomWidth,c=t(n.width);!1!==c&&(o.width=c+(s?0:r+u));let p=t(n.height);return!1!==p&&(o.height=p+(s?0:h+l)),o.innerWidth=o.width-(r+u),o.innerHeight=o.height-(h+l),o.outerWidth=o.width+a,o.outerHeight=o.height+d,o}})),function(t,i){"object"==typeof module&&module.exports?module.exports=i():t.EvEmitter=i()}("undefined"!=typeof window?window:this,(function(){function t(){}let i=t.prototype;return i.on=function(t,i){if(!t||!i)return this;let e=this._events=this._events||{},n=e[t]=e[t]||[];return n.includes(i)||n.push(i),this},i.once=function(t,i){if(!t||!i)return this;this.on(t,i);let e=this._onceEvents=this._onceEvents||{};return(e[t]=e[t]||{})[i]=!0,this},i.off=function(t,i){let e=this._events&&this._events[t];if(!e||!e.length)return this;let n=e.indexOf(i);return-1!=n&&e.splice(n,1),this},i.emitEvent=function(t,i){let e=this._events&&this._events[t];if(!e||!e.length)return this;e=e.slice(0),i=i||[];let n=this._onceEvents&&this._onceEvents[t];for(let o of e){n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,i)}return this},i.allOff=function(){return delete this._events,delete this._onceEvents,this},t})),
        function(t,i){"object"==typeof module&&module.exports?module.exports=i(t,require("ev-emitter")):t.Unidragger=i(t,t.EvEmitter)}("undefined"!=typeof window?window:this,(function(t,i){function e(){}let n,o,s=e.prototype=Object.create(i.prototype);s.handleEvent=function(t){let i="on"+t.type;this[i]&&this[i](t)},"ontouchstart"in t?(n="touchstart",o=["touchmove","touchend","touchcancel"]):t.PointerEvent?(n="pointerdown",o=["pointermove","pointerup","pointercancel"]):(n="mousedown",o=["mousemove","mouseup"]),s.touchActionValue="none",s.bindHandles=function(){this._bindHandles("addEventListener",this.touchActionValue)},s.unbindHandles=function(){this._bindHandles("removeEventListener","")},s._bindHandles=function(i,e){this.handles.forEach((o=>{o[i](n,this),o[i]("click",this),t.PointerEvent&&(o.style.touchAction=e)}))},s.bindActivePointerEvents=function(){o.forEach((i=>{t.addEventListener(i,this)}))},s.unbindActivePointerEvents=function(){o.forEach((i=>{t.removeEventListener(i,this)}))},s.withPointer=function(t,i){i.pointerId==this.pointerIdentifier&&this[t](i,i)},s.withTouch=function(t,i){let e;for(let t of i.changedTouches)t.identifier==this.pointerIdentifier&&(e=t);e&&this[t](i,e)},s.onmousedown=function(t){this.pointerDown(t,t)},s.ontouchstart=function(t){this.pointerDown(t,t.changedTouches[0])},s.onpointerdown=function(t){this.pointerDown(t,t)};const r=["TEXTAREA","INPUT","SELECT","OPTION"],h=["radio","checkbox","button","submit","image","file"];return s.pointerDown=function(t,i){let e=r.includes(t.target.nodeName),n=h.includes(t.target.type),o=!e||n;!this.isPointerDown&&!t.button&&o&&(this.isPointerDown=!0,this.pointerIdentifier=void 0!==i.pointerId?i.pointerId:i.identifier,this.pointerDown(t,i),this.bindActivePointerEvents(),this.emitEvent("pointerDown",[t,i]))},s.onmousemove=function(t){this.pointerMove(t,t)},s.onpointermove=function(t){this.withPointer("pointerMove",t)},s.ontouchmove=function(t){this.withTouch("pointerMove",t)},s.pointerMove=function(t,i){let e={x:i.pageX-this.pointerDownPointer.pageX,y:i.pageY-this.pointerDownPointer.pageY};this.emitEvent("pointerMove",[t,i,e]),!this.isDragging&&this.hasDragStarted(e)&&this.dragStart(t,i),this.isDragging&&this.dragMove(t,i,e)},s.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},s.dragStart=function(t,i){this.isDragging=!0,this.isPreventingClicks=!0,this.emitEvent("dragStart",[t,i])},s.dragMove=function(t,i,e){this.emitEvent("dragMove",[t,i,e])},s.onmouseup=function(t){this.pointerUp(t,t)},s.onpointerup=function(t){this.withPointer("pointerUp",t)},s.ontouchend=function(t){this.withTouch("pointerUp",t)},s.pointerUp=function(t,i){this.pointerDone(),this.emitEvent("pointerUp",[t,i]),this.isDragging?this.dragEnd(t,i):this.staticClick(t,i)},s.dragEnd=function(t,i){this.isDragging=!1,setTimeout((()=>delete this.isPreventingClicks)),this.emitEvent("dragEnd",[t,i])},s.pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this.unbindActivePointerEvents(),this.emitEvent("pointerDone")},s.onpointercancel=function(t){this.withPointer("pointerCancel",t)},s.ontouchcancel=function(t){this.withTouch("pointerCancel",t)},s.pointerCancel=function(t,i){this.pointerDone(),this.emitEvent("pointerCancel",[t,i])},s.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},s.staticClick=function(t,i){let e="mouseup"==t.type;e&&this.isIgnoringMouseUp||(this.emitEvent("staticClick",[t,i]),e&&(this.isIgnoringMouseUp=!0,setTimeout((()=>{delete this.isIgnoringMouseUp}),400)))},e})),
        function(t,i){"object"==typeof module&&module.exports?module.exports=i(t,require("get-size"),require("unidragger")):t.Draggabilly=i(t,t.getSize,t.Unidragger)}("undefined"!=typeof window?window:this,(function(t,i,e){let n=t.jQuery;function o(t,i){this.element="string"==typeof t?document.querySelector(t):t,n&&(this.$element=n(this.element)),this.options={},this.option(i),this._create()}let s=o.prototype=Object.create(e.prototype);s.option=function(t){this.options={...this.options,...t}};const r=["fixed","relative","absolute"];s._create=function(){this.position={},this._getPosition(),this.startPoint={x:0,y:0},this.dragPoint={x:0,y:0},this.startPosition={...this.position};let t=getComputedStyle(this.element);r.includes(t.position)||(this.element.style.position="fixed"),this.on("pointerDown",this.handlePointerDown),this.on("pointerUp",this.handlePointerUp),this.on("dragStart",this.handleDragStart),this.on("dragMove",this.handleDragMove),this.on("dragEnd",this.handleDragEnd),this.setHandles(),this.enable()},s.setHandles=function(){let{handle:t}=this.options;"string"==typeof t?this.handles=this.element.querySelectorAll(t):"object"==typeof t&&t.length?this.handles=t:t instanceof HTMLElement?this.handles=[t]:this.handles=[this.element]};const h=["dragStart","dragMove","dragEnd"];let a=s.emitEvent;function d(t,i,e){return i?(e=e||"round",Math[e](t/i)*i):t}s.emitEvent=function(i,e){if(!this.isEnabled&&h.includes(i))return;a.call(this,i,e);let n,o=t.jQuery;if(!o||!this.$element)return;let s=e;e&&e[0]instanceof Event&&([n,...s]=e);let r=o.Event(n);r.type=i,this.$element.trigger(r,s)},s._getPosition=function(){let t=getComputedStyle(this.element),i=this._getPositionCoord(t.left,"width"),e=this._getPositionCoord(t.top,"height");this.position.x=isNaN(i)?0:i,this.position.y=isNaN(e)?0:e,this._addTransformPosition(t)},s._getPositionCoord=function(t,e){if(t.includes("%")){let n=i(this.element.parentNode);return n?parseFloat(t)/100*n[e]:0}return parseInt(t,10)},s._addTransformPosition=function(t){let i=t.transform;if(!i.startsWith("matrix"))return;let e=i.split(","),n=i.startsWith("matrix3d")?12:4,o=parseInt(e[n],10),s=parseInt(e[n+1],10);this.position.x+=o,this.position.y+=s},s.handlePointerDown=function(t,i){this.isEnabled&&(this.pointerDownPointer={pageX:i.pageX,pageY:i.pageY},t.preventDefault(),document.activeElement.blur(),this.bindActivePointerEvents(t),this.element.classList.add("is-pointer-down"))},s.handleDragStart=function(){this.isEnabled&&(this._getPosition(),this.measureContainment(),this.startPosition.x=this.position.x,this.startPosition.y=this.position.y,this.setLeftTop(),this.dragPoint.x=0,this.dragPoint.y=0,this.element.classList.add("is-dragging"),this.animate())},s.measureContainment=function(){let t=this.getContainer();if(!t)return;let e=i(this.element),n=i(t),{borderLeftWidth:o,borderRightWidth:s,borderTopWidth:r,borderBottomWidth:h}=n,a=this.element.getBoundingClientRect(),d=t.getBoundingClientRect(),u=o+s,l=r+h,c=this.relativeStartPosition={x:a.left-(d.left+o),y:a.top-(d.top+r)};this.containSize={width:n.width-u-c.x-e.width,height:n.height-l-c.y-e.height}},s.getContainer=function(){let t=this.options.containment;if(t)return t instanceof HTMLElement?t:"string"==typeof t?document.querySelector(t):this.element.parentNode},s.handleDragMove=function(t,i,e){if(!this.isEnabled)return;let n=e.x,o=e.y,s=this.options.grid,r=s&&s[0],h=s&&s[1];n=d(n,r),o=d(o,h),n=this.containDrag("x",n,r),o=this.containDrag("y",o,h),n="y"==this.options.axis?0:n,o="x"==this.options.axis?0:o,this.position.x=this.startPosition.x+n,this.position.y=this.startPosition.y+o,this.dragPoint.x=n,this.dragPoint.y=o},s.containDrag=function(t,i,e){if(!this.options.containment)return i;let n="x"==t?"width":"height",o=d(-this.relativeStartPosition[t],e,"ceil"),s=this.containSize[n];return s=d(s,e,"floor"),Math.max(o,Math.min(s,i))},s.handlePointerUp=function(){this.element.classList.remove("is-pointer-down")},s.handleDragEnd=function(){this.isEnabled&&(this.element.style.transform="",this.setLeftTop(),this.element.classList.remove("is-dragging"))},s.animate=function(){this.isDragging&&(this.positionDrag(),requestAnimationFrame((()=>this.animate())))},s.setLeftTop=function(){let{x:t,y:i}=this.position;this.element.style.left=`${t}px`,this.element.style.top=`${i}px`},s.positionDrag=function(){let{x:t,y:i}=this.dragPoint;this.element.style.transform=`translate3d(${t}px, ${i}px, 0)`},s.setPosition=function(t,i){this.position.x=t,this.position.y=i,this.setLeftTop()},s.enable=function(){this.isEnabled||(this.isEnabled=!0,this.bindHandles())},s.disable=function(){this.isEnabled&&(this.isEnabled=!1,this.isDragging&&this.dragEnd(),this.unbindHandles())};const u=["transform","left","top","position"];return s.destroy=function(){this.disable(),u.forEach((t=>{this.element.style[t]=""})),this.unbindHandles(),this.$element&&this.$element.removeData("draggabilly")},s._init=function(){},n&&n.bridget&&n.bridget("draggabilly",o),o}));
   
    // Toastify
        !function(t){var i=function(t){return new i.lib.init(t)};i.lib=i.prototype={toastify:"0.0.1",constructor:i,init:function(t){return t||(t={}),this.options={},this.options.text=t.text||"Hi there!",this.options.duration=t.duration||3e3,this.options.selector=t.selector,this.options.class=t.class || "",this.options.callback=t.callback||function(){},this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");return t.className="_panel_toastify on " + this.options.class,t.innerHTML=this.options.text,t.addEventListener("click",this.options.callback),t},showToast:function(){var t,o=this.buildToast();if(!(t=void 0===this.options.selector?document.body:document.getElementById(this.options.selector)))throw"Root element is not defined";return t.insertBefore(o,t.firstChild),i.reposition(),window.setTimeout((function(){o.classList.remove("on"),window.setTimeout((function(){o.remove(),i.reposition()}).bind(this),400)}).bind(this),this.options.duration),this}},i.reposition=function(){for(var t=15,i=document.getElementsByClassName("_panel_toastify"),o=0;o<i.length;o++){var n=i[o].offsetHeight;i[o].style.top=t+"px",t+=n+15}return this},i.lib.init.prototype=i.lib,t.Toastify=i}(window);

    // Variable
    
        var hashchange_once = hashchange_once || false;
        // Gửi đi từ FE
        let location_href = window.location.href;
            time = +new Date(),
            _datatemp = {},
            dataStatus = {
                case_lastupdate: 0,
                case_list: []
            },
            panel_div = document.querySelector("#_panel_div"),
            draggie = null;


    // Function
        // ====
        // Auto Resize Textarea
        // ====
        function textareaAutoResize(_class, _elm){
            panel_div.querySelectorAll(`textarea.autoresize`).forEach(function(elm){
                elm.addEventListener('click', function() {
                    textAreaAdjust(this);
                }, false);
                
                elm.addEventListener('input', function() {
                    textAreaAdjust(this);
                }, false);
                

                // clearInterval(timerId);
                // timerId = setInterval((elm) => {
                //     if(elm.value) {
                //         textAreaAdjust(elm);
                //         console.log(333)
                //         console.log(elm);
                //         console.log(timerId);
                //         clearInterval(that.timerId);
                //     }
                // }, 1000)
                // (function (elm) {
                //     return setInterval(function () { 
                //         textAreaAdjust(elm);
                //     }, 1000);
                // })(i);
                
            });
        }
         // =====
        // clearInput
        // =====
        function clearInput(){
            // STEP 0: Empty
            // div, span
            panel_div.querySelectorAll('[data-infocase]').forEach(function(elm){
                elm.innerText = "";
            });
            
            var formThis = panel_div.querySelector("#formCase");
            formThis.reset();
        }
        
        function load_fetch_content(url, _callback) {
            fetch(url, {
                method: 'GET'
            })
                .then(function(response) {
                    return response.json();
                }).then(function(_content) {
                    _callback(_content);
                });
        }
        
        function load_fetch_post_content(url, _body, _callback) {
            // _body = {
            //     "action": "getpanel",
            //     "language": "vi"
            // };
            if(!_body.action ) return false;
            
            const formData = new FormData();
            Object.keys(_body).forEach(key => {
                formData.append(key, _body[key]);
            });
            
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(function(response) {
                    return response.json();
                }).then(function(_content) {
                    _callback(_content);
                });
        }

        // Validate Case
        function validationCase(_datatemp = {}, panel) {
            var lst_notification = '';

            if(_datatemp.am_isgcc) {
                lst_notification +=`<p class="_panel__notification_alert">Is GCC?</p>`;
                var elminputbcc = document.querySelector("email-address-input.bcc");
                if(elminputbcc) {
                    elminputbcc.classList.add("isgcc");
                }
            }
            
            // Is Precall?
            if(location.href.includes("cases.connect.corp.google.com/#/case")) {
                var is_precall = false;
                document.querySelectorAll(".case-log-container.active-case-log-container case-message-view").forEach(function(elm){
                   if(elm.innerText.includes("Emails or feedback from Advertiser")) {
                        is_precall = true;
                   }
                });
                if(is_precall === false) {
                    alert("Not Precall");
                }
            }
            
            
            const staticHtmlPolicyv2 = trustedTypes.createPolicy(
                'foo-static', {createHTML: () => lst_notification});
            panel.querySelector("._panel__notification").innerHTML = staticHtmlPolicyv2.createHTML('');
        }

        // Is Ready Code Van Bo
        function is_ready4codevanbo(_callback) {
                        
            var n_time_dkneed = 0,  
                n_time_dkneed_compare = 0;
            var is_ready = () => {
                if(n_time_dkneed_compare < n_time_dkneed) return;

                // 1.1 Save meeting_time
                    var appointment_time = '';
                    document.querySelectorAll("cuf-form-field").forEach(function(elm){
                        var dataList = elm.innerText.split("\n");
                        if(dataList[0] === "Appointment Time") {
                            appointment_time += " " + dataList[1] ;
                        }
                    });
                    window.dataTagteam.appointment_time = getDataTimeFormat(appointment_time);

                // 2.1 Callback
                    _callback();
            }

        // 2.1
            n_time_dkneed++;
            wait4Elem("cuf-form-field").then(function () {
                is_ready(n_time_dkneed_compare++);
                console.info(n_time_dkneed_compare , '=' , n_time_dkneed, '--- cuf-form-field');

            });
            
            n_time_dkneed++;
            wait4Elem('[debug-id="case-id"] .case-id').then(function () {
                is_ready(n_time_dkneed_compare++);
                console.info(n_time_dkneed_compare , '=' , n_time_dkneed, '--- [debug-id="case-id"] .case-id');
            });
        
        
            n_time_dkneed++;
            wait4Elem('case-message-view').then(function () {
                is_ready(n_time_dkneed_compare++);
                console.info(n_time_dkneed_compare , '=' , n_time_dkneed, '--- case-message-view');
            });
            
            n_time_dkneed++;
            wait4Elem('home-data-item').then(function () {
                is_ready(n_time_dkneed_compare++);
                console.info(n_time_dkneed_compare , '=' , n_time_dkneed, '---home-data-item');
            });
            
        }
        
        
        // Is Ready Connect Case
        function is_readycaseconnect(_callback) {
                        
            var n_time_dkneed = 0,  
                n_time_dkneed_compare = 0;
            var is_ready = () => {
                if(n_time_dkneed_compare < n_time_dkneed) return;
                _callback();
            }

        // 2.1
            n_time_dkneed++;
            wait4Elem("cuf-form-field").then(function () {
                is_ready(n_time_dkneed_compare++);
                console.info(n_time_dkneed_compare , '=' , n_time_dkneed, '--- cuf-form-field');
            });
            
            n_time_dkneed++;
            wait4Elem('[debug-id="case-id"] .case-id').then(function () {
                is_ready(n_time_dkneed_compare++);
                console.info(n_time_dkneed_compare , '=' , n_time_dkneed, '--- [debug-id="case-id"] .case-id');
            });
        
            // n_time_dkneed++;
            wait4Elem("#read-card-tab-panel-case-log .activities > div").then((elm1) => {    
                document.querySelector('[debug-id="dock-item-case-log"]').click();
                document.querySelector('[debug-id="dock-item-home"]').click();

                document.querySelectorAll('#read-card-tab-panel-case-log .activities > div').forEach(function(elm){
                    if(elm.innerText.includes('Review case in Connect Sales')) {            
                        // console.log(elm.querySelector("table"))
    
                        elm.querySelector('case-message-view .message-content-container-full').click();
                    
                        wait4Elem("#read-card-tab-panel-case-log  .activities > div table tr").then( (elm2) => {
                            // is_ready(n_time_dkneed_compare++);
                            console.info(n_time_dkneed_compare , '=' , n_time_dkneed, '--- read-card-tab-panel-case-log');
                            
                        })
                    }
                })
            });

            
            // n_time_dkneed++;
            // wait4Elem('contact-email-field').then(function () {
            //     is_ready(n_time_dkneed_compare++);
            //     console.info(n_time_dkneed_compare , '=' , n_time_dkneed, '--- contact-email-field');
            // });
        
            // n_time_dkneed++;
            // wait4Elem('case-message-view').then(function () {
            //     is_ready(n_time_dkneed_compare++);
            //     console.info(n_time_dkneed_compare , '=' , n_time_dkneed, '--- case-message-view');
            // });
            
            // n_time_dkneed++;
            // wait4Elem('home-data-item').then(function () {
            //     is_ready(n_time_dkneed_compare++);
            //     console.info(n_time_dkneed_compare , '=' , n_time_dkneed, '---home-data-item');
            // });
            
            // n_time_dkneed++;
            // wait4Elem('contact-info').then(function () {
            //     is_ready(n_time_dkneed_compare++);
            //     console.info(n_time_dkneed_compare , '=' , n_time_dkneed, '---contact-info');
            // });
            
            // n_time_dkneed++;
            // wait4Elem('internal-user-info').then(function () {
            //     is_ready(n_time_dkneed_compare++);
            //     console.info(n_time_dkneed_compare , '=' , n_time_dkneed, '---internal-user-info');
            // });
        }
        //Load case
        function loadCase(elm) {
            
            if(window.location.href.includes("cases.connect.corp.google.com")
                || _global_status.test
            ) {

                // Case ID
                var sLoadCase = function() {
                    var _caseid = document.querySelector(".case-id").innerText;
                    var caseload = loadCaseDatabaseByID(_caseid);
                    
                    if(caseload) {
                        console.log("Has Data =========", caseload);
                        loadInputCase(elm, caseload);
                    } else {
                        Toastify({
                            text: 'NEW!!!! This case is new',
                            duration: 3000,
                            class: "warning",
                            callback: function(){
                                this.remove();
                            }
                        }).showToast();

                        is_readycaseconnect(() => {
                            
                            unmark_all_and_crawl()
                        
                        });
                        
                        panel_div.querySelector('#formCase [action="save"]').innerText = "FIRST SAVE";
                        panel_div.querySelector('#formCase [action="save"]').classList.add("_panel_btn--success");
                    }

    
                    // Open dial
                    document.querySelector("material-fab-speed-dial").dispatchEvent(new Event('mouseenter'));
                    // Close dial
                    document.querySelector("material-fab-speed-dial").dispatchEvent(new Event('mouseleave'));
                };
                
                // s1: load start
                wait4Elem(".case-id").then(function () {
                    sLoadCase();
                });
                
                // s1: load by hash change once
                    if(hashchange_once === false) {
                        hashchange_once = true;
                        window.addEventListener('hashchange', () => {
                            if(location.href.includes("cases.connect.corp.google.com/#/case")) {
                                wait4Elem(".case-id").then(function () {
                                    sLoadCase();
                                });
                            };
                        }, false);
                    }


                // Exit
                return true;
            }

            if(window.location.href.includes("calendar.google.com")) {
                // Set auto by checkbox
                document.addEventListener("readystatechange", (event) => {
                    if(document.readyState === "complete") {
                        getChromeStorage("cdtx_listmeetlink", (response) => {
                            var casesmeet = response.value || {};
                            document.querySelectorAll('[jslog][data-eventid]').forEach(function(elm){
                                var jslog = elm.getAttribute('jslog');
                                var caseid = elm.innerText.match(/\d-\d+/g);
                                if(jslog){
                                    var meetid = jslog.match(/\w{3}-\w{4}-\w{3}/g);
                                }
    
                                if(caseid && meetid){
                                    casesmeet[caseid[0]] = "https://meet.google.com/" + meetid[0]
                                }
                            });
                            
                            setChromeStorage("cdtx_listmeetlink", casesmeet, () => {
                                Toastify({
                                    text: 'Has update meet link!',
                                    duration: 3000,
                                    class: "warning",
                                    callback: function(){
                                        this.remove();
                                    }
                                }).showToast();
                            });
                        })
                    }

                });
                  
                var _isauto = true;

                
                if(_isauto) {
                    var _dialogParent = document.querySelector("#yDmH0d"),
                    _onceChange = '',
                    _elmHeading = _dialogParent.querySelector("#rAECCd");
                    if(_elmHeading) {
                        var _string = _elmHeading.innerText;
                        var _caseid = getOnlyCaseId(_string);
                        if(_caseid) {
                            var _datatemp = loadCaseDatabaseByID(_caseid);
                            loadInputCase(elm, _datatemp);
                            elm.querySelector('[data-infocase="case_id"]').innerText = _caseid;
                            
                            // var alinkelm = _dialogParent.querySelector('[href*="meet.google.com"]');
                            // if(alinkelm) {
                            //     var _link = alinkelm.getAttribute("href").split("?")[0];

                            //     var _cusmeet = elm.querySelector('[data-infocase_link="customer_gmeet"]');
                            //     var _cusmeet_input = elm.querySelector('[name="customer_gmeet"]');
                            //     // if(_cusmeet_input.value.length < 1) {
                            //         _cusmeet.setAttribute("href", _link);
                                    
                            //         if(_cusmeet) {
                            //             _cusmeet_input.value = _link;
                            //         }
                            //     // }
                                
                            // }
                        } 
                    }
    
                    _dialogParent.addEventListener('DOMSubtreeModified', (e) => {
                        _elmHeading = _dialogParent.querySelector("#rAECCd");


                        // STEP 2: Empty
                        if(_elmHeading) {
                            var _string = _elmHeading.innerText;
                            var _caseid = getOnlyCaseId(_string);
                            if(_caseid) {
                                if(_onceChange !== _caseid) {
                                    _onceChange = _caseid;
                                    var _datatemp = loadCaseDatabaseByID(_caseid);

                                    if(_datatemp) {
                                        var itemelm = panel_div.querySelector(`._panel__caselist [data-caseid="${_caseid}"]`);

                                        if(itemelm) {
                                            itemelm.click();
                                            
                                        }
                            
                                        // 2.1 formchanger
                                        setTimeout(() => {
                                            // Save google meet link
                                            var alinkelm = _dialogParent.querySelector('[href*="meet.google.com"]');
                                            if(alinkelm) {
                                                var _link = alinkelm.getAttribute("href").split("?")[0];
                                                
                                                var _cusmeet = elm.querySelector('[data-infocase_link="customer_gmeet"]');
                                                var _cusmeet_input = elm.querySelector('[name="customer_gmeet"]');
                                                // if(_cusmeet_input.value.length < 1) {
                                                    _cusmeet_input.value = _link;
                                                    if(_cusmeet) {
                                                        _cusmeet.setAttribute("href", _link);
                                                    }
        
                                                    // Action save
                                                    elm.querySelector('[action="save"]').click();
                                                // }
                                                
                                            }
                                        }, 1000);
                                    } else {
                                        clearInput();

                                        elm.querySelector('[data-infocase="case_id"]').innerText = _caseid;
                                        elm.querySelector('[data-infocase_link="case_id"]').setAttribute("href", "https://cases.connect.corp.google.com/#/case/" + _caseid);

                                        Toastify({
                                            text: 'NEW!!!! This case is new',
                                            duration: 3000,
                                            class: "warning",
                                            callback: function(){
                                                this.remove();
                                            }
                                        }).showToast();
                                    }
                                }
                            }
                        }
                    });
                }
    
                // Exit
                return true;
            }

            if(dataStatus.case_current) {
                console.log("Preload current case");
                var caseload = loadCaseDatabaseByID(dataStatus.case_current);
                loadInputCase(elm, caseload);
            }
            
        }   

        // innerText Settings
        function loadInfoSettingsInnerTextElm (_panel, name, _value) {
            try {

                // Input text, input date, textarea
                _panel.querySelectorAll(`
                    [data-infosetting][type="text"][name="${name}"], 
                    [data-infosetting][type="datetime-local"][name="${name}"], 
                    textarea[data-infosetting][name="${name}"]`
                ).forEach(function(elm){
                    elm.value = _value;
                });
                
                // div, span
                _panel.querySelectorAll('[data-infosetting="' + name + '"]').forEach(function(elm){
                    elm.innerText = _value;
                });
                
                _panel.querySelectorAll('[data-infosetting_link="' + name + '"]').forEach(function(elm){
                    elm.setAttribute("href", _value);
                });

                // checkbox
                var _value_option = _value.split("\n")[0].trim();
                _panel.querySelectorAll('input[data-infosetting][type="checkbox"]').forEach(function(elm){
                    if(elm.getAttribute("name") === name && elm.getAttribute("value") === _value ) {
                        elm.checked = true;
                    }
                });

                _value_option = _value.split("\n")[0].trim();
                _panel.querySelectorAll(`select[data-infosetting][name="${name}"] > option[value="${_value_option}"]`).forEach(function(elm){
                    elm.selected = true;
                });
            } catch (error) {
                console.log(error)
            }
        }

        // innerText Case
        function loadInfoCaseInnerTextElm (_panel, name, _value) {
            try {

                // Input text, input date, textarea
                _panel.querySelectorAll(`
                    [type="text"][name="${name}"], 
                    [type="datetime-local"][name="${name}"], 
                    textarea[name="${name}"]`
                ).forEach(function(elm){
                    elm.value = _value;
                });
                
                // div, span
                _panel.querySelectorAll('[data-infocase="' + name + '"]').forEach(function(elm){
                    elm.innerText = _value;
                });
                
                _panel.querySelectorAll('[data-infocase_link="' + name + '"]').forEach(function(elm){
                    elm.setAttribute("href", _value);
                });

                // checkbox
                var _value_option = _value.split("\n")[0].trim();
                _panel.querySelectorAll('input[type="checkbox"][name="' + name + '"][value="' + _value_option + '"]').forEach(function(elm){
                    elm.checked = true;
                });

                _value_option = _value.split("\n")[0].trim();
                _panel.querySelectorAll(`select[name="${name}"] > option[value="${_value_option}"]`).forEach(function(elm){
                    elm.selected = true;
                });
            } catch (error) {
                console.log(error)
            }
        }
         

        function setChromeStorage(key, value, _callback = false) {
            chrome.runtime.sendMessage({method: 'fe2bg_chromestorage_set', key: key, value: value}, (response) => {
                if(_callback !== false) {
                    _callback(response);
                }
            });
        }


        function getChromeStorage(key, _callback = false) {
            chrome.runtime.sendMessage({method: 'fe2bg_chromestorage_get', key: key}, (response) => {
                if(_callback !== false) {
                    response = response || {};
                    _callback(response);
                }
            });
        }

        function removeChromeStorage(key, _callback = false) {
            chrome.runtime.sendMessage({method: 'fe2bg_chromestorage_remove', key: key}, (response) => {
                if(_callback !== false) {
                    _callback(response);
                }
            });
        }

        
        function _TrustScript (_string) {
            const staticHtmlPolicyv2 = trustedTypes.createPolicy('foo-static', {createHTML: () => _string}); 
            return staticHtmlPolicyv2.createHTML('');
        }

        var saveCase2Storage = (formDataObj, _callback) => {
            // ID trust
            
            if(formDataObj.case_id) {   
                if(getOnlyCaseId(formDataObj.case_id)) {   

                    // Save
                    var _time = +new Date();
                    var case_id = formDataObj.case_id;
                    dataStatus.cdtx_lastupdate = _time;

                    setChromeStorage('cdtx_datastatus', dataStatus);
                    setChromeStorage('cdtx_lastupdate', _time);
                    setChromeStorage('cdtx_lastupdate_caseid', case_id);
                    setChromeStorage('cdtx_caseid_' + case_id, formDataObj, _callback);
                }
            }
        }

        
        var saveSettings2Storage = (formDataObj, _callback) => {

            // Save
            var _time = +new Date();
            dataStatus.cdtx_lastupdate = _time;

            setChromeStorage('cdtx_datastatus', dataStatus);
            setChromeStorage('cdtx_lastupdate', _time);
            setChromeStorage('cdtx_settings', formDataObj, _callback);

        }
        
        // =============
        // loadInputSettingss
        // =============
        function loadInputSettings(_panel) {
            
            getChromeStorage('cdtx_settings', (response) => {
                var _datatemp = response.value || false;
                window.dataTagTeamSettings = response.value || false;
                // Load
                var _object = {};
                if(_datatemp) {
                    _object = _datatemp;
                }

                 // STEP 1: Load object to element 
                 
                if(_datatemp !== false) {
                    _panel.querySelectorAll('input[data-infosetting][type="checkbox"]').forEach(function(elm){
                        elm.checked = false;
                    });
                }

                for (const property in _object) {
                    // console.log(`${property}: ${_object[property]}`);

                    loadInfoSettingsInnerTextElm(_panel, `${property}`, `${_object[property]}`);
                }

                // Other forcheckbox

                // loadInfoSettingsInnerTextElm(_panel, `${property}`, `${_object[property]}`);
            });
            
        }
        
        // =============
        // loadInputCase
        // =============
        function loadInputCase(_panel, _datatemp) {
            clearInput();
            validationCase(_datatemp, _panel);

            // Hide Process bar
            panel_div.classList.remove('is-progress');
            
            // Set Attribute
            panel_div.setAttribute("data-drive", JSON.stringify(_datatemp));
            
            // Load
            var _object = {};
            if(_datatemp) {
                _object = _datatemp;
            }

            if(_object.customer_gmeet == "") {
                getChromeStorage("cdtx_listmeetlink", (response) => {
                    var casesmeet = response.value || {};
                    if(casesmeet[_object.case_id]) {
                        _object.customer_gmeet = casesmeet[_object.case_id];
                        _panel.querySelector('[name="customer_gmeet"]').value = casesmeet[_object.case_id];
                        _panel.querySelector('[data-infocase_link="customer_gmeet"]').setAttribute("href", casesmeet[_object.case_id]);
                    }
                });
            }
            // STEP 1: Load object to element 
            for (const property in _object) {
                // console.log(`${property}: ${_object[property]}`);

                loadInfoCaseInnerTextElm(_panel, `${property}`, `${_object[property]}`);
            }

            // STEP 2: Special display
            _panel.querySelector('[data-infocase_link="case_id"]').setAttribute("href", "https://cases.connect.corp.google.com/#/case/" + _datatemp.case_id);
            _panel.querySelector('[data-infocase_link="customer_ocid"]').setAttribute("href", "https://adwords.corp.google.com/aw/overview?ocid=" + _datatemp.customer_ocid);
            
            

            _panel.querySelector('[data-infocase="customer_website"]').setAttribute("href", _datatemp.customer_website);


            loadInfoCaseInnerTextElm(_panel, 'am_isgcc', '---');
            _panel.querySelector(`[data-panel="script-reading"]`).setAttribute('data-isgcc', '0');
            if(_datatemp.am_isgcc) {
                loadInfoCaseInnerTextElm(_panel, 'am_isgcc', 'GCC');
                _panel.querySelector('[name="am_isgcc"]').checked = true;
                _panel.querySelector(`[data-panel="script-reading"]`).setAttribute('data-isgcc', '1');
            }

            if(_datatemp.qlus_status) {
                loadInfoCaseInnerTextElm(_panel, 'qlus_status', _datatemp.qlus_status);
                _panel.querySelector(`[data-panel="email-template"]`).setAttribute('data-qlus_status', _datatemp.qlus_status);    
            }

            if(_datatemp.est_setup) {
                loadInfoCaseInnerTextElm(_panel, 'est_setup', _datatemp.est_setup);
            }

            if(_datatemp.customer_adsid) {
                loadInfoCaseInnerTextElm(_panel, 'customer_adsid_format', reformatAdsId(_datatemp.customer_adsid));
            }


            // STEP 3: Load condition to script reading
            _panel.querySelector('._panel__script');
        }


        // ======
        // loadCaseList
        // ======
        function loadCaseList(elm_caselist){
            var case_list = dataStatus.case_list;
            elm_caselist.innerHTML = _TrustScript("");
            
            // Sort
            case_list.sort((a, b) => (a.meeting_time < b.meeting_time) ? 1 : ((b.meeting_time < a.meeting_time) ? -1 : 0));

            // Display
            var once_todaystr = true;
            case_list.forEach(function(item){

                // Time
                const date1 = new Date();
                const date2 = new Date(item.meeting_time);
                const diffTime = (date2 - date1);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                const date1date = date1.getDate(); 
                const date1month = date1.getMonth() + 1; 
                const date1year = date1.getFullYear(); 
                const date1fullnum = +`${date1year}${date1month}${date1date < 10 ? "0" + date1date : date1date}`;
                const date2date = date2.getDate(); 
                const date2month = date2.getMonth() + 1; 
                const date2year = date2.getFullYear(); 
                const date2fullnum = +`${date2year}${date2month}${date2date < 10 ? "0" + date2date : date2date}`;

                const is_today = date1fullnum === date2fullnum;
                const str_today = is_today ? "Today" : "";

                var itemstr = "";
                if(once_todaystr) {
                    if(date2fullnum < date1fullnum) {
                        itemstr += `<li data-titletoday="Today ${date1date}/${date1month}" ></li>`;
                        once_todaystr = false;
                    }
                }

                itemstr += `<li data-caseid="${item.case_id}" class="${item.case_id === dataStatus.case_current ? 'active': ''} ${(item.qlus_status ? '_has_qlus_status' : "")}">
                    <span>${item.case_id} - <small>${item.customer_name}(${item.customer_gender})</small> </span>
                    <span class="_bottom">
                        ${(item.qlus_status ? '<small class="_qlus_status" data-status="' + item.qlus_status + '">' + item.qlus_status + '</small>' : "")}
                        ${(item.assignee ? '<small class="_assignee">' + item.assignee + '</small>' : "")}
                        ${'<small class="_meeting_time" data-status="' + str_today + '">' + (!is_today?  date2date + "/" + date2month : "Today")  + '</small>'}
                    </span>
                    <span class="_right">
                        ${'<small data-action="remove_case" >Delete</small>'}
                    </span>
                </li>`;

                const staticHtmlPolicyv2 = trustedTypes.createPolicy('foo-static', {createHTML: () => itemstr}); 
                elm_caselist.insertAdjacentHTML("beforeEnd", staticHtmlPolicyv2.createHTML(''));
            });

            
            var lst_caseid = elm_caselist.querySelectorAll("[data-caseid]");
            lst_caseid.forEach(function(elm){
                elm.addEventListener("click", function(e){
                    const _caseid = this.getAttribute("data-caseid");
                    
                    loadDataStatusCaseList(() => {
                        var caseload = loadCaseDatabaseByID(_caseid);
                        if(caseload) {
                            loadInputCase(panel_div, caseload);
                            
                            elm_caselist.querySelectorAll("[data-caseid]").forEach(function(_elm){
                                _elm.classList.remove("active");
                            });
                            this.classList.add("active");
                        }
                    });

                });
            });

            var lst_caseid = elm_caselist.querySelectorAll("[data-action]");
            lst_caseid.forEach(function(elm){
                elm.addEventListener("click", function(e){
                    const itemelm = this.closest('li[data-caseid]');
                    const _caseid = itemelm.getAttribute("data-caseid");
                    const _type = elm.getAttribute("data-action");

                    if(_type === "remove_case") {
                        if (confirm("You sure remove case: " + _caseid)) {
                            const formData = new FormData();
                            formData.append('action', "remove_case");
                            formData.append('case_id', _caseid);
    
                            removeChromeStorage("cdtx_caseid_" + _caseid, function(){
                                itemelm.remove();
                                    
                                Toastify({
                                    text: 'Removed: ' + _caseid,
                                    duration: 3000,
                                    callback: function(){
                                        this.remove();
                                    }
                                }).showToast();
                            });
                        } 

                    }
                    
                });
            });
        }

        // Load Email Template 
        function loadEmailTemplateAction(){                
            panel_div.querySelectorAll("._panel_btn--addtemplate").forEach(function(elm) {
                elm.addEventListener("click", function() {
                    console.log(1, "Here");
                    
                    // 0. ready
                    var _insertmailbox = (_this) => {
                    
                        var template_title = _this.closest("._emailtemp-item").querySelector("._emailtemp-item__title");
                        var template_body = _this.closest("._emailtemp-item").querySelector("._emailtemp-item__content");
                        
                        // Wait and insert
                        wait4Elem('.write-cards-wrapper:not([style*="display:none"]):not([style*="display: none"]) card.write-card.is-top[card-type="compose"] #email-body-content-top').then(function (elm) {
                            checkInputEmailInbox();
                            
                            var _card_istop = document.querySelector('.write-cards-wrapper:not([style*="display:none"]):not([style*="display: none"]) card.write-card.is-top');

                            
                            var subject = _card_istop.querySelector("input.subject");
                            var body_content = _card_istop.querySelector("#email-body-content-top");

                            // Insert value
                            subject.value = template_title.innerText;
                            body_content.innerHTML = template_body.innerHTML;
                            
                            // action save status
                                subject.dispatchEvent(new Event('input'));
                                body_content.dispatchEvent(new Event('input'));
                                _card_istop.querySelector('[debug-id="add_highlight"]').click();
                            
                            // Click offer
                                if(_this.closest("._emailtemp-item").getAttribute("data-type") === "SO - Verified" ||
                                    _this.closest("._emailtemp-item").getAttribute("data-type") === "SO - Verification Not Needed"
                                ) {
                                
                                    if(_card_istop.querySelector('[debug-id="solution_offered_checkbox"].disabled')) {
                                        alert("Please update Tracking Issue Time");
                                        document.querySelector('[debug-id="dock-item-issue"]').click();
                                    }
                                    
                                    _card_istop.querySelector('[debug-id="solution_offered_checkbox"]:not(.disabled):not(._active)').click();
                                    _card_istop.querySelector('[debug-id="solution_offered_checkbox"]:not(.disabled)').classList.add('_active');
                                }
        
                            // Open document doc list
                                document.querySelector('compose-card-content-wrapper').click();
                                document.querySelector('compose-card-content-wrapper').focus();
                                
                            // Open document doc list
                                document.querySelector('[debug-id="dock-item-issue"]').click();
                        });
                        
                    }

                    // 1.1 Open dial
                    if(document.querySelector('.write-cards-wrapper:not([style*="display:none"]):not([style*="display: none"]) card.write-card.is-top[card-type="compose"] #email-body-content-top')) {
                        _insertmailbox(this);
                    } else {
                        document.querySelector("material-fab-speed-dial").dispatchEvent(new Event('mouseenter'));
                        document.querySelector("material-fab.themeable.action-2.compose").addEventListener("click", () => {
                            var n_card = document.querySelectorAll("card[casesanimate].write-card").length || 0;
                            var myTimeCheck = setInterval(() => {
                                var n_card_2 = document.querySelectorAll("card[casesanimate].write-card").length || 0;
                                if(n_card_2 > n_card) {
                                    clearInterval(myTimeCheck);
                                    _insertmailbox(this);
    
                                    // Close dial
                                    document.querySelector("material-fab-speed-dial").dispatchEvent(new Event('mouseenter'));
    
                                }
                            }, 1000)
                            
                        });
                        
                        // 1.2
                        document.querySelector("material-fab.themeable.action-2.compose").click();
                        
                    }

                });
            });
        }


        // Load Data Status Case List
        function loadDataStatusCaseList(_callback) {
            // Get Case List
            // 1. load all
            chrome.storage.local.get(null, function(results) {
                dataStatus.case_list = [];
                for (let key in results) {
                    // 2. load only caselist
                    if(key.includes("cdtx_caseid_")) {
                        dataStatus.case_list.push(results[key]);
                    }
                }

                // Load case
                _callback();
            });
        }


        // Load Data Status Case List
        // autoLoadCode('auto_loadcode_vanbo');
        autoLoadCode('auto_loadgtmid');
        function autoLoadCode(keyaction) {
            getChromeStorage('cdtx_settings', (response) => {
                var _datatemp = response.value || false;
                window.dataTagTeamSettings = response.value || false;
                
                // Load
                var _object = {};
                if(_datatemp) {
                    _object = _datatemp;
                }

                switch (keyaction) {
                    case 'auto_loadcode_vanbo':
                        if(typeof _datatemp.auto_loadcode_vanbo === "undefined") {
                            window.dataTagteam.tagteamFocusCase();
                        }
                        break;
    
                    case 'auto_loadgtmid':
                        if(typeof _datatemp.auto_loadcode_vanbo === "undefined") {
                            tagteam_showGTMID();
                        }
                        break;
                
                    default:
                        break;
                }
            });
        }

        // ===
        // ACTION
        // ===
        var load_script_action = () => {
            panel_div.querySelectorAll(`[data-btnaction]`).forEach(function(elm) {
                elm.addEventListener('click', function(e){
                    var _action = this.getAttribute("data-btnaction");
                    panel_div.setAttribute("data-btnaction_status", _action);
                    
                    // open main
                    if(_action === 'openmain') {
                        // 1. Remove class
                            panel_div.classList.remove("hide_main");

                        // 2. Save
                            setChromeStorage('cdtx_hidepanel-' + location.hostname, true , () => {
                                // Empty
                            });
                    }
                    
                    // opentoolbar
                    if(_action === 'opentoolbar') {
                        // 2. Save
                            setChromeStorage('cdtx_hidetoolbar-' + location.hostname, toggleClass("hide_toolbar", panel_div) , () => {
                                // Empty
                            });
                    }
                    
                    // emailtemplate
                    if(_action === 'openemailtemplate') {
                        // 2. Click Step2step
                            document.querySelector('[data-btnaction="openmain"]').click();
                            document.querySelector('[data-btnaction="email-template"]').click();
                            
                    }
                    
                    // emailtemplate
                    if(_action === 'crawl_case') {
                        console.log("crawl_case")
                        // 2. Click Step2step
                        unmark_all_and_crawl();
                            
                    }
                    
                    // emailtemplate
                    if(_action === 'sync_panel') {
                        _body = {
                            action: "get_paneldivhtml"
                        };
                        panel_div.classList.add('is-progress');
                        load_fetch_post_content(window.dataTagteam.api_blog, _body, (response) => {
                            if(response.rs) {
                                setChromeStorage('cdtx_paneldivhtml', response.content);

                                panel_div.remove();
                                loadDataStatusCaseList(() => {
                                    loadpanel(true);
                                });
                            }
                            panel_div.classList.remove('is-progress');
                        });
                            
                    }

                    // opentiptutorial
                    if(_action === 'opentiptutorial') {
                        // 2. Save
                        toggleClass("hide_opentiptutorial", panel_div);
                        
                        var _blogs = panel_div.querySelector("._panel__blogs.empty");
                        if(_blogs) {
                            
                            panel_div.classList.add('is-progress');

                            load_fetch_content(window.dataTagteam.api_blog, (response) => {

                                if(response.body) {
                                    var itemLi = '';
                                    response.body.forEach((item) => {
                                        itemLi += `<div data-blogs>`;
                                        if(item.image) {
                                            itemLi += `<div data-blogs_image style='background-image: url("${item.image}")'></div>`;
                                        }
                                        itemLi += `<div data-blogs_title>${item.title}</div>`;
                                        itemLi += `<div data-blogs_content_expect>${item.content_expect}</div>`;
                                        itemLi += `<div data-blogs_content>${item.content}</div>`;
                                        itemLi += `<div data-blogs_expand>Expand</div>`;
                                        itemLi += `</div>`;
                                    });
                                    _blogs.innerHTML = itemLi;

                                    panel_div.querySelectorAll(`[data-blogs_expand]`).forEach(function(elm){
                                        elm.addEventListener('click', function(ev) {
                                            var elmblogs = this.closest('[data-blogs]');
                                            toggleClass("full", elmblogs);
                                        }, false);
                                    });
                                   
                                    panel_div.querySelector('#_panel__blogs-search').addEventListener("keyup", (e) => {
                                        var _search = panel_div.querySelector('#_panel__blogs-search').innerText.toLowerCase();
                                        panel_div.querySelectorAll('[data-blogs]').forEach((elm) => {
                                            // elm
                                            elm.hidden = true;
                                            if(elm.innerText.toLowerCase().includes(_search)) {
                                                elm.hidden = false;
                                            }
                                        });
                                    });
                                }


                                // All OK => remove class empty
                                _blogs.classList.remove('empty');
                                panel_div.classList.remove('is-progress');

                            });
                        }
                            // getChromeStorage('cdtx_opentiptutorial-date', () => {
                            //     // Empty
                                
                            //     setChromeStorage('cdtx_opentiptutorial-date', '' , () => {
                            //         // Empty
                            //     });
                            // });
                    }
                    
                    // opensetting
                    if(_action === 'opensetting') {
                        // 2. Save
                            setChromeStorage('cdtx_opensetting-' + location.hostname, toggleClass("hide_opensetting", panel_div) , () => {
                                // Empty
                            });
                    }
                    
                    // opensetting
                    if(_action === 'firstemail') {
                        // 2. Save
                        window.dataTagteam.sendFirstEmail();
                    }
                    
                    // open tip and tutorial
                    if(_action === 'open tip and tutorial') {
                        // 1. Remove class
                            panel_div.classList.remove("hide_tiptutorial");

                        // 2. Save
                            setChromeStorage('cdtx_hidetiptutorial-' + location.hostname, true , () => {
                                // Empty
                            });
                    }

                    if(_action === 'pushto_casesummary') {
                        var case_sumary = document.querySelector('material-input[debug-id="case-summary-input"] textarea');
                        if(case_sumary && location.host.includes('cases.connect.corp.google.com')) {
                            case_sumary.value = new Date(panel_div.querySelector('input[name="meeting_time"]').value).toLocaleDateString('en-GB') + " " + panel_div.querySelector('textarea[name="note"]').value;
                            case_sumary.dispatchEvent(new Event('input'));
                        }
                    }

                    // Case pin
                    if(_action === 'case_pin') {
                        var case_id = panel_div.querySelector('[name="case_id"]').value;
                        case_id = getOnlyCaseId(case_id);
                        if(case_id) {
                            setChromeStorage('cdtx_casecurrent', case_id , (response) => {
                                dataStatus.cdtx_casecurrent = case_id;
                                
                                Toastify({
                                    text: 'Have PIN case',
                                    duration: 3000,
                                    class: "success",
                                    callback: function(){
                                        this.remove();
                                    }
                                }).showToast();
                            });
                        }
                    }

                    if(_action === 'hide_panel') {
                        // 1. Add class
                            panel_div.classList.add("hide_main");
                        
                        // 2. Save
                            setChromeStorage('cdtx_hidepanel-' + location.hostname, false , () => {
                                // Empty
                            });
                    }
                    
                    // reload panel
                    if(_action === 'reload_panel') {
                        panel_div.remove();
                        loadDataStatusCaseList(() => {
                            loadpanel(true);
                        });
                    }

                    // toggle_minisize_panel
                    if(_action === 'toggle_minisize_panel') {
                        
                        setChromeStorage('cdtx_minisize-' + location.hostname, toggleClass("minisize", panel_div) , () => {
                            // Empty
                        });
                    }

                    // toggle_minisize_panel
                    if(_action === 'toggle_panel_darkmode') {
                        
                        setChromeStorage('cdtx_setting-darkmode', toggleClass("_panel_darkmode", panel_div) , () => {
                            // Empty
                        });
                    }

                    // toggle_minisize_panel
                    if(_action === 'toggle_panel_horizon') {
                        
                        setChromeStorage('cdtx_setting-horizon', toggleClass("_panel__horizon", panel_div) , () => {
                            // Empty
                        });
                    }


                    if(_action === 'close_panel') {
                        this.closest("[data-panel]").classList.remove("active");
                        if(this.closest('[data-panel="list-case"]')) {
                            if(panel_div.classList.contains("list-case__active")) {
                                panel_div.classList.remove("list-case__active");
                            }
                        }
                    }

                    if(_action === 'loadscript') {
                        var _panel_elm = panel_div.querySelector(`[data-panel="script-reading"]`);
                        toggleClass("active", _panel_elm);
                    }

                    if(_action === 'email-template') {
                        var _panel_elm = panel_div.querySelector(`[data-panel="email-template"]`);
                        toggleClass("active", _panel_elm);
                    }

                    if(_action === 'list-case') {
                        var _panel_elm = panel_div.querySelector(`[data-panel="list-case"]`);
                        toggleClass("active", _panel_elm);
                        toggleClass("list-case__active", panel_div);
                        

                    }

                    if(_action === 'form-case') {
                        var _panel_elm = panel_div.querySelector(`[data-panel="form-case"]`);
                        toggleClass("active", _panel_elm);
                    }

                    if(_action === 'load_casecurrent') {
                        
                        getChromeStorage('cdtx_casecurrent', (response) => {
                            // Empty
                            var itemelm = panel_div.querySelector(`._panel__caselist [data-caseid="${response.value}"]`);
                            if(itemelm) {
                                itemelm.click();
                            }
                        });
                    }
                });
            });
        }

        

        // 0.0 unmark all before crawl
        var s_crawl_case = (_caseid) => {
            var _datatemp = _datatemp || {};

            _datatemp.case_id = _caseid;
            // Ads ID
            var dataList = [];
            var dataListTemp = [];
            var customer_adsid = "EMPTY!!!";
            document.querySelectorAll("configurable-signals home-data-item").forEach(function(elm){
                dataList = elm.innerText.split("\n");
                if(dataList[0] === window.dataTagteam.language.google_ads_external_customer_id) {
                    _datatemp.customer_adsid = dataList[1];
                }
            });

            document.querySelectorAll("card.read-card:not(.hidden) cuf-form-field").forEach(function(elm){
                dataList = elm.innerText.split("\n");
                if(dataList[0] === "Website") {
                    _datatemp.customer_website = dataList[1];
                }
                
                if(dataList[0] === "Appointment Time") {
                    // _datatemp.appointment_time = _datatemp.appointment_time ? _datatemp.appointment_time + "  " + dataList[1] : dataList[1];

                    // Recall value
                    _datatemp.appointment_time = window.dataTagteam.appointment_time;
                    _datatemp.meeting_time = getDataTimeFormat(_datatemp.appointment_time);
                    _datatemp.meeting_ontime = getDataTimeFormat(_datatemp.appointment_time);
                }
                
                if(dataList[0] === "Tasks") {
                    dataListTemp = dataList;
                    delete dataListTemp[0];
                    dataListTemp = dataListTemp.filter(n => n);

                    _datatemp.tasks = dataListTemp.join("\n");
                }

                if(dataList[0] === "Instructions for the Implementation (Guide)") {
                    dataListTemp = dataList;
                    delete dataListTemp[0];
                    dataListTemp = dataListTemp.filter(n => n);
                    _datatemp.request = dataListTemp.join("\n");
                }
                
                if(dataList[0] === "Sales Program") {
                    _datatemp.sales_program = dataList[1];
                    
                    // Is GCC
                    if(dataList.join(" ").includes("GCC")){
                        _datatemp.am_isgcc = 1;
                        
                        Toastify({
                            text: 'HAVE GCC => EMAIL SEND: <br>TO BCC',
                            duration: 3000,
                            class: "warning"
                        }).showToast();
                    }
                }
                
                
                if(dataList[0] === "Accounts") {
                    _datatemp.customer_ocid = dataList[1];
                }

                if(dataList[0] === "Attribution Model for the New Conversion Action") {
                    _datatemp.customer_attributionmodel = dataList[1];
                }
                
                
                if(dataList[0] === "Contact") {
                    if(dataList[1].includes(window.dataTagteam.language.phone_prefix)) {
                        _datatemp.customer_contact = dataList[1];
                    }
                }
                

            });

            // Customer 
            document.querySelectorAll("internal-user-info").forEach(function(elm){
                if(elm.querySelector(".email").innerText.includes("@google.com") === false) {
                    _datatemp.customer_name = elm.querySelector(".name").innerText;
                    _datatemp.customer_email = elm.querySelector(".email").innerText;
                }
            });
            
            // AM
            _datatemp.am_name = document.querySelector("internal-user-info .name").innerText;
            _datatemp.am_email = document.querySelector("internal-user-info .email").innerText;

            // Assign to
            if(document.querySelector(`[debug-id="assignee"]`)) {
                _datatemp.assignee = document.querySelector(`[debug-id="assignee"]`).innerText;
            } else {
                alert(window.dataTagteam.language.please_assign_this_task || "please_assign_this_task");
            }
            
            

            document.querySelectorAll('#read-card-tab-panel-case-log .activities > div').forEach(function(elm){
                if(elm.innerText.includes('Review case in Connect Sales')) {            
                    // console.log(elm.querySelector("table"))

                        var _tableinfo = elm.querySelectorAll("table tr"); 
                        if(_tableinfo.length) {
                            _tableinfo.forEach((elm) => {   
                                var _td_1 = elm.querySelector("td:nth-child(1)");
                                var _td_2 = elm.querySelector("td:nth-child(2)"); 
                                if(_td_1 &&  _td_2) {
                                    // console.log(_td_1.innerText, _td_2.innerText);
                                    
                                    if(_td_1.innerText.includes("Website")) {
                                        _datatemp.customer_website = _td_2.innerText;
                                    }
                                    
                                    if(_td_1.innerText.includes("Contact")) {
                                        var _temp_now = _td_2.innerHTML.split("<br>");
                                        _temp_now.forEach(function(str_item){
                                            str_item = str_item.replace(/(<([^>]+)>)/gi, "");

                                            if(str_item.includes("Name: ")) {
                                                _datatemp.customer_name = str_item.split("Name: ")[1];
                                            }

                                            if(str_item.includes("Email: ")) {
                                                _datatemp.customer_email = str_item.split("Email: ")[1];
                                            }

                                            if(str_item.includes("Phone: ")) {
                                                _datatemp.customer_contact = str_item.split("Phone: ")[1];
                                            }

                                        });
                                    }

                                    if(_td_1.innerText.includes("Instructions for the Implementation (Guide)")) {
                                        _datatemp.request = _td_2.innerText;
                                    }

                                    if(_td_1.innerText.includes("Account")) {
                                        _datatemp.customer_ocid = _td_2.innerText;
                                    }
                                }
                                
                            });
                        }
                }
            });

            // == Load case
            var elm = panel_div.querySelector('form#formCase');
            loadInputCase(elm, _datatemp);
        };
        
    // 0.1 Unmark all element and crawl
        var unmark_all_and_crawl = (n_time = 0) => {
            if(!document.querySelector(".case-id")) {
                
                Toastify({
                    text: 'Not found Case ID / Is Not connect case ...',
                    duration: 3000
                }).showToast();
                
                return false;
            }

            // Hide Process bar
            panel_div.classList.add('is-progress');

            // Get Case ID
            var _caseid = document.querySelector(".case-id").innerText;
            var caseload = loadCaseDatabaseByID(_caseid);
            
            if(caseload) {
                console.log("Has Data =========", caseload);
                var elm = panel_div.querySelector('form#formCase');
                loadInputCase(elm, caseload);

            } else {
                console.log("New Crawl Data From Case Connent =========", caseload);

                // console.log(n_time_dkneed_compare, n_time_dkneed);
                
                // 1. open all unmark
                    document.querySelector('[aria-controls="read-card-tab-panel-home"]').click();
                    document.querySelector('[aria-controls="read-card-tab-panel-case-log"]').click();
                    document.querySelector('[aria-controls="read-card-tab-panel-home"]').click();
        
                    // Expand all mask button
                    if(document.querySelectorAll('[id="read-card-tab-panel-home"] .unmask-button').length) {
                        var my_timerecheck = () => {
                            var unmaskbutton = document.querySelectorAll('[id="read-card-tab-panel-home"] .unmask-button');

                            // 2. open all unmark
                            if(unmaskbutton.length) {
                                unmaskbutton.forEach(function (elm) {
                                    elm.click();

                                    // test demo
                                    if(_global_status.test) {
                                        elm.classList.remove("unmask-button");
                                    }
                                });
                            } else {
                                // Expand show more button
                                var more_less_button = document.querySelectorAll(`.more-less-button:not(.show-more)`);
                                if(more_less_button.length) {
                                    more_less_button.forEach(function (elm) {
                                        elm.click();
                                    });
                                } 
                                
                                clearInterval(my_timerecheck_interval);

                                // 3. If all READY => Crawl data
                                    s_crawl_case(_caseid);
                            }
                        };

                        // Run Interval Recheck Loop 
                        my_timerecheck();
                        var my_timerecheck_interval = setInterval(function(){
                            my_timerecheck();
                        }, 1000);
                    } else {
                        s_crawl_case(_caseid);
                    }
            }
        }

        var set_init_load = () => {
            panel_div = document.querySelector("#_panel_div");
            
            if(panel_div) {

                // Draggie
                    draggie = new Draggabilly( '#_panel_div', {
                        handle: [ panel_div.querySelector('[data-btnaction="move"]'), panel_div.querySelector('._panel__heading') ]
                    });
        
                    draggie.on( 'dragEnd', function( event, pointer, moveVector ) {
                        var position_x = draggie.position.x;
                        var position_y = draggie.position.y;

                        // Panel
                        setChromeStorage('cdtx_pos-' + location.hostname, {
                            "position_x": position_x,
                            "position_y": position_y,
                        });
                    });


                    // 1. Set position
                    // Left
                        getChromeStorage('cdtx_pos-' + location.hostname, (response) => {                        
                            if(response.value) {
                                var data = response.value;
                                var position_x = (data.position_x > 0 ? data.position_x : 50);
                                var position_y = (data.position_y > 0 ? data.position_y : 0);
                                
                                if(position_x > window.innerWidth) {
                                    position_x = window.innerWidth - 50;
                                }
                                if(position_y > window.innerHeight) {
                                    position_y = window.innerHeight - 50;
                                }

                                panel_div.style.left = `${position_x}px`;
                                panel_div.style.top = `${position_y}px`;
                            }
                        });

                    // 2. ====
                    // 2. Form
                        // 2.1 form Submit
                        var _formCase = panel_div.querySelector('form#formCase');

                        loadCase(_formCase);
                        _formCase.addEventListener('submit', function(e){
                            e.preventDefault();
                            const formData = new FormData(e.target);
                            let formDataObj = {};

                            formData.append('action', "case_save");
                            
                            Toastify({
                                text: 'PROCCESS ...',
                                duration: 3000
                            }).showToast();

                            formData.forEach((value, key) => (formDataObj[key] = value));


                            // Is OK
                            if(getOnlyCaseId(formDataObj.case_id) !== false) {
                                
                                _formCase.querySelector(`[action="save"]`).innerText = "PROCCESS ... ";

                                saveCase2Storage(formDataObj, (response) => {
                                    loadDataStatusCaseList(() => {
                                        
                                        var caseload = loadCaseDatabaseByID(response.case_id);

                                        Toastify({
                                            text: 'SAVED',
                                            duration: 3000,
                                            callback: function(){
                                                this.remove();
                                            }
                                        }).showToast();
                                        
                                        // Load case
                                        loadInputCase(panel_div, caseload);
                                        // Load list
                                        loadCaseList(panel_div.querySelector("._panel__caselist"));

                                        _formCase.querySelector(`[action="save"]`).innerText = "SAVED";

                                        // Check is has current case is empty?
                                        getChromeStorage('cdtx_casecurrent', (response) => {
                                            if(typeof response.value === 'undefined') {
                                                panel_div.querySelector('[data-btnaction="case_pin"]').click();
                                            }
                                        });
                                    });
                                });
                            } else {
                                Toastify({
                                    text: 'ID CASE EMPTY -> FALSE',
                                    duration: 3000,
                                    class: "warning",
                                    callback: function(){
                                        this.remove();
                                    }
                                }).showToast();

                            }
                            
                        });

                        // 2.1 formchanger
                        _formCase.addEventListener('change', function() {
                            _formCase.querySelector(`[action="save"]`).click();
                        });

                        // 2.3 Form Settings
                        try {
                            var _formSettings = panel_div.querySelector('form#formSettings');
                            _formSettings.addEventListener('submit', function(e){
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                let formDataObj = {};
    
                                formData.forEach((value, key) => (formDataObj[key] = value));
    
                                saveSettings2Storage(formDataObj, (response) => {
                                    Toastify({
                                        text: 'SETTIGNS SAVED',
                                        duration: 3000,
                                        callback: function(){
                                            this.remove();
                                        }
                                    }).showToast();
                                    
                                    loadInputSettings(panel_div);
                                });
                                
                            });
    
                            // 2.1 formchanger
                            _formSettings.addEventListener('change', function() {
                                _formSettings.querySelector(`[action="save"]`).click();
                            });
                        } catch (error) {
                            
                        }

                // 3. load case list
                    loadCaseList(panel_div.querySelector('._panel__caselist'));

                // 4. Email template
                    loadEmailTemplateAction();
                
                // 5. load Script Action 
                    load_script_action();
                
                // 6. Load minisize
                    getChromeStorage('cdtx_minisize-' + location.hostname, (response) => {
                        if(response.value) {
                            panel_div.classList.add("minisize");
                            toggleClass("_panel_minisize", document.documentElement);
                        }
                    });
                
                // 6. Load minisize
                    getChromeStorage('cdtx_setting-darkmode', (response) => {
                        if(response.value) {
                            panel_div.classList.add("_panel_darkmode");
                        }
                    });
                
                // 6. Load minisize
                    getChromeStorage('cdtx_setting-horizon', (response) => {
                        if(response.value) {
                            panel_div.classList.add("_panel__horizon");
                        }
                    });

                // 7. Show Panel Default 
                    getChromeStorage('cdtx_hidepanel-' + location.hostname, (response) => {
                        if(response.value) {
                            panel_div.classList.remove("hide_main");
                        } else {
                            panel_div.classList.add("hide_main");
                        }
                    });

                // 8. Load current for other case connect
                    if(location.href.includes("cases.connect.corp.google.com/#/case") === false) {
                        getChromeStorage('cdtx_casecurrent', (response) => {
                            // Empty
                            var itemelm = panel_div.querySelector(`._panel__caselist [data-caseid="${response.value}"]`);
                            if(itemelm) {
                                itemelm.click();
                            }
                        });
                    }

                // 9. Recheck Realtime
                    var myRecheckRealtime = setInterval(() => {
                        try {
                            getChromeStorage('cdtx_lastupdate', (response) => {
                                if(dataStatus.cdtx_lastupdate !== response.value) {
                                    dataStatus.cdtx_lastupdate = response.value;
                                    
                                    getChromeStorage('cdtx_lastupdate_caseid', (response) => {
                                        var case_currentopen = panel_div.querySelector(`[name="case_id"]`).value;

                                        if(case_currentopen == response.value) {
                                            var itemelm = panel_div.querySelector(`._panel__caselist [data-caseid="${response.value}"]`);
                                            
                                            if(itemelm) {
                                                itemelm.click();
                                                loadInputSettings(panel_div);
                                                
                                                Toastify({
                                                    text: 'Has Sync Update',
                                                    duration: 1500,
                                                    callback: function(){
                                                        this.remove();
                                                    }
                                                }).showToast();
                                            }
                                        }
                                    });
                                }
                            });

                            if(location.hostname === 'meet.google.com') {
                                getChromeStorage('cdtx_casecurrent', (response) => {
                                    if(dataStatus.cdtx_casecurrent !== response.value) {
                                        var itemelm = panel_div.querySelector(`._panel__caselist [data-caseid="${response.value}"]`);
                                        if(itemelm) {
                                            itemelm.click();
                                            dataStatus.cdtx_casecurrent = response.value;
                                            
                                            Toastify({
                                                text: 'Has Sync',
                                                duration: 1500,
                                                callback: function(){
                                                    this.remove();
                                                }
                                            }).showToast();
                                        }
                                    }
                                });
                            }
                            
                        } catch (error) {
                            console.log("===== New Version Tag VN Extension -> Please refresh page ....");
                            clearInterval(myRecheckRealtime);
                        }
                    }, 2000);

                // 10. Autoresize Textare
                    textareaAutoResize();


                // 11. Load action toolbar
                    load_script_toolaction()


                // 12. load setting
                    loadInputSettings(panel_div);
                
                // 12. XXXX
                
                // 12. XXXX
                
            }
        }

        var loadpanel = (is_reload = false) => {
            if(window.dataTagTeamSettings.sync_enable) {
                getChromeStorage('cdtx_paneldivhtml', (response) => {

                    var cdtx_paneldivhtml = response.value || window.dataTagteam.panel_div;
                    
                    // SHOW content 
                    const staticHtmlPolicyV1 = trustedTypes.createPolicy(
                        'foo-static', {createHTML: () => cdtx_paneldivhtml}
                    );
                    var cdtx_paneldivhtml = staticHtmlPolicyV1.createHTML('');
                    document.body.insertAdjacentHTML("beforeEnd", cdtx_paneldivhtml);

                    set_init_load();
                });
            } else {
                // SHOW content 
                const staticHtmlPolicyV1 = trustedTypes.createPolicy(
                    'foo-static', {createHTML: () => window.dataTagteam.panel_div}
                );
                var cdtx_paneldivhtml = staticHtmlPolicyV1.createHTML('');
                document.body.insertAdjacentHTML("beforeEnd", cdtx_paneldivhtml);
    
                // Load drag panel
                set_init_load();
            }
        }
        

        var load_script_toolaction = () => {
            panel_div.querySelectorAll(`[data-btntoolaction]`).forEach(function(elm) {
                elm.addEventListener('click', function(e){
                    var _action = this.getAttribute("data-btntoolaction");
                    panel_div.setAttribute("data-btntoolaction_status", _action);
                    
                    // open main
                    if(_action === 'focus_case') {
                        tagteamFocusCase();
                    }
                    // open main
                    if(_action === 'extract_gtm_id') {
                        tagteam_showGTMID();
                    }
                });
            });
        };

        // ============
        // LOAD CASE
        // ============
        
        getChromeStorage('cdtx_settings', (response) => {
            window.dataTagTeamSettings = response.value || false;
            
            getChromeStorage("cdtx_datastatus", (response) => {
                dataStatus = response.value || dataStatus;
                loadDataStatusCaseList(() => {
                    loadpanel();
                });
    
                // Load code van bo
                is_ready4codevanbo(() => {
                    autoLoadCode('auto_loadcode_vanbo')
                });
                var hashchange_oncevanbo = hashchange_oncevanbo || false;
                if(hashchange_oncevanbo === false) {
                    hashchange_oncevanbo = true;
                    window.addEventListener('hashchange', () => { 
                        if(location.href.includes("cases.connect.corp.google.com/#/case")) {
                            is_ready4codevanbo(() => {
                                autoLoadCode('auto_loadcode_vanbo')
                            });
                        }
                    }, false);
                }
            });
        });
        
        
// ==============
// Show and Hide
// ==============
    if(location.hostname.includes("cases.connect.corp.google.com") === false) {
        wait4Elem('[data-btntoolaction="focus_case"]').then(() => {
            panel_div = document.querySelector("#_panel_div");
            panel_div.querySelector('[data-btntoolaction="focus_case"]').hidden = true;
        });
    }





// ==============
// BACKDOOR
// ==============
    // Get Case List
    // 1. load all
    function backdoor_manage_keystorage() {
        wait4Elem(".list_keystorage").then(() => {
            chrome.storage.local.get(null, function(results) {
                var li = "";
                for (let key in results) {
                    li += `<li>${key} <span data-btnremovekeystorage="${key}">Remove</span></li> `;
                    console.log(key, results[key]);
                }
    
                panel_div.querySelector("ul.list_keystorage").innerHTML = _TrustScript(li);
    
                document.querySelectorAll("ul.list_keystorage [data-btnremovekeystorage]").forEach((elm) => {
                    elm.addEventListener("click", (e) => {
                        var key = elm.getAttribute('data-btnremovekeystorage');
                        
                        if (confirm("You sure remove: " + key)) {
                            removeChromeStorage(key, () => {
                                Toastify({
                                    text: `Remove ${key} success`,
                                    duration: 3000,
                                    callback: function(){
                                        this.remove();
                                    }
                                }).showToast();
    
                                elm.closest("li").remove();
                            });
                        }
                    });
                });
            });
        });

    }

}