var vi_panel_div = `
<div id="_panel_div" class="_panel active hide_main hide_toolbar hide_opentiptutorial hide_opensetting hide_emailtemplate hide_firstemail">
    <style>
@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap);._panel{--scrollbar-track-bg:#f0f0f0;--scrollbar-thumb-bg:#ccc;font-family:Roboto,Arial;position:fixed;width:80%;max-width:1024px;height:0;background-color:#fff;top:45px;left:auto;right:0;opacity:0;transform:translateX(100%);transition:opacity .3s ease;z-index:9999999;color:#000;font-size:14px}._panel form{margin:0}._panel *,._panel :after,._panel :before{box-sizing:border-box}._panel.minisize{width:100%;max-width:500px}._panel ._panel_group{position:relative;z-index:9;transition:opacity .3s ease-in-out,transform .3s ease-in-out;opacity:1;transform:scale(1);transform-origin:left top}._panel.hide_main ._panel_group[data-group=main]{opacity:0;transform:scale(0);pointer-events:none}._panel.hide_main [data-btnaction=openmain]{background-size:60%}._panel_darkmode{filter:invert(1)}._panel_darkmode [data-blogs_content] img,._panel_darkmode [data-blogs_image],._panel_darkmode img[src*="Google_2015_logo.svg"]{filter:invert(1)}._panel.hide_toolbar ._panel_group[data-group=toolbar]{opacity:0;transform:scale(0);pointer-events:none}._panel.hide_toolbar [data-btnaction=opentoolbar]{background-size:60%}._panel.hide_emailtemplate ._panel_group[data-group=emailtemplate]{opacity:0;transform:scale(0);pointer-events:none}._panel.hide_emailtemplate [data-btnaction=openemailtemplate]{background-size:60%}._panel.hide_opentiptutorial ._panel_group[data-group=opentiptutorial]{opacity:0;transform:scale(0);pointer-events:none}._panel.hide_opentiptutorial [data-btnaction=opentiptutorial]{background-size:60%}._panel.hide_opensetting ._panel_group[data-group=opensetting]{opacity:0;transform:scale(0);pointer-events:none}._panel.hide_opensetting [data-btnaction=opensetting]{background-size:60%}._panel.hide_firstemail ._panel_group[data-group=firstemail]{opacity:0;transform:scale(0);pointer-events:none}._panel.hide_firstemail [data-btnaction=firstemail]{background-size:60%}._panel :not(.no-custom-scrollbar)::-webkit-scrollbar{width:12px;height:12px}._panel :not(.no-custom-scrollbar)::-webkit-scrollbar:horizontal{width:9px;height:9px}._panel :not(.no-custom-scrollbar)::-webkit-scrollbar-track{background-color:var(--scrollbar-track-bg)}._panel :not(.no-custom-scrollbar)::-webkit-scrollbar-track:horizontal{border-radius:8px}._panel :not(.no-custom-scrollbar)::-webkit-scrollbar-thumb{border-radius:8px;border:3px solid var(--scrollbar-track-bg);background-color:var(--scrollbar-thumb-bg)}._panel :not(.no-custom-scrollbar)::-webkit-scrollbar-thumb:horizontal{border:0}._panel :not(.no-custom-scrollbar)::-webkit-scrollbar-corner{border-radius:8px;background-color:var(--scrollbar-track-bg)}._panel a{text-decoration:none;color:#009688}._panel a:hover{color:red}._panel ul{list-style:none;margin:0;padding:0}._panel input,._panel textarea{border:1px solid #eee;border-radius:0;line-height:1.5;margin:4px 0;font-family:Roboto,Arial;font-size:100%}._panel input[type=text],._panel textarea[type=text]{padding:3px}._panel input[type=date],._panel textarea[type=date]{padding:3px}._panel input[type=checkbox],._panel textarea[type=checkbox]{margin:0 5px}._panel input:focus,._panel input:focus-visible,._panel textarea:focus,._panel textarea:focus-visible{outline:0}._panel textarea{padding:3px;font-family:Roboto,Arial}._panel select{font-size:100%;width:100%;border:1px solid #eee;padding:5px;border-radius:0;cursor:pointer}._panel select#qlus_status{font-weight:700;border:0;background:0 0;outline:0;display:inline;width:154px;padding-left:0;font-size:87%}._panel select.select_inline{display:inline;width:auto;border:0;background:0 0;padding:0}._panel ._gr_qlus_status{display:inline-flex}._panel ._gr_qlus_status [data-infocase=qlus_status],._panel ._gr_qlus_status select option{font-size:12px}._panel [for=qlus_status]{position:relative;overflow:hidden;display:inline-block!important;margin:0;margin-bottom:-5px!important;padding:0}._panel [for=qlus_status]:hover{background:#ccc}._panel [for=qlus_status] img{width:20px;height:20px}._panel [for=qlus_status] select[name=qlus_status]{position:absolute;left:0;top:0;height:100%;width:100%;opacity:0}._panel input[type=text],._panel textarea{width:100%}@keyframes progressLinearMovement{0%{left:-100%}50%{left:100%}100%{left:100%}}._panel:not(.is-progress) ._panel__linear-progress{display:none}._panel.is-progress ._panel__linear-progress{background:#bbdefb;height:10px;position:relative;width:100%;margin:0 auto;overflow:hidden;animation:start .3s ease-in}._panel.is-progress ._panel__linear-progress.small{width:100%;height:2px}._panel.is-progress ._panel__linear-progress .bar{position:absolute;background:#1565c0;transition:transform .2s linear;left:0;top:0;bottom:0;width:100%}._panel.is-progress ._panel__linear-progress .bar1{animation:progressLinearMovement 2.5s infinite;-webkit-animation-delay:0;animation-delay:0}._panel.is-progress ._panel__linear-progress .bar2{left:-100%;animation:progressLinearMovement 2.5s infinite;animation-delay:.7s}._panel__notification_alert,._panel__notification_proccess{border-radius:3px;background-color:#ff5722;padding:2px 10px;font-size:80%;color:#fff;margin-top:0}._panel__notification_alert:not(:last-child),._panel__notification_proccess:not(:last-child){margin-bottom:10px}._panel__notification_proccess{background-color:#ffc107}._panel__topsticky_toolbar{position:sticky;top:45px;left:0;background:#fff;padding:5px;z-index:999;display:flex;flex-wrap:nowrap;justify-content:space-between;align-items:flex-start}._panel__topsticky_toolbar ._panel_btn{margin-right:6px;margin-bottom:6px}._panel__topsticky_toolbar-gr{display:flex;flex-wrap:wrap;align-items:center}._panel_toastify{padding:6px 18px;color:#fff;display:inline-block;box-shadow:0 0 34px #d4d4d4;background:#00bcd4;position:fixed;top:-150px;right:15px;opacity:0;transition:all .4s cubic-bezier(.215,.61,.355,1);border-radius:2px;cursor:pointer;z-index:99999;font-family:Roboto,Arial;font-size:12px}._panel_toastify.warning{background:#ff5722}._panel_toastify.success{background:#4caf50}._panel_toastify.on{opacity:1}._panel__form{font-size:90%;display:flex;justify-content:space-between}._panel__form label{display:flex;flex-direction:row;align-content:center;justify-content:flex-start;flex-wrap:wrap;-webkit-user-select:none;user-select:none;align-items:center}._panel__form label:not(:last-child){margin-bottom:10px}._panel__form--label_inputcenter{align-items:center}._panel__form ._gr50{flex:calc(50% - 10px)}._panel__form ._gr50:not(:last-child){margin-right:10px}._panel__form--panel{border:1px solid #eee;padding:10px;margin-bottom:10px}._panel__form--column{flex-basis:0;flex-grow:1;max-width:100%}._panel__form--column:not(:last-child){margin-right:10px}._panel.active{opacity:.9;transform:translateX(0)}._panel__heading{height:45px;border-bottom:1px solid #ccc;display:flex;justify-content:space-between;align-items:center;padding:0 16px;position:sticky;top:0;background:#fff;-webkit-user-select:none;user-select:none;z-index:2}._panel__heading img{max-height:24px}._panel__heading--group{height:45px;display:flex;align-items:center}._panel__heading--title{margin-left:8px;font-size:10px}._panel__heading--close{cursor:pointer;margin-right:12px}._panel_btn{font-size:90%;font-weight:700;padding:6px 10px;background-color:#fff;border-radius:4px;display:inline-flex;color:#333;cursor:pointer;user-select:none;border:1px solid #c8c8c8;line-height:1;font-weight:400;white-space:nowrap;align-items:center}._panel_btn--small{font-size:10px}._panel_btn--group{margin-bottom:6px}._panel_btn--fullwidth{width:100%}._panel_btn--mb6px{margin-bottom:6px}._panel_btn:not(:last-child){margin-right:6px}._panel_btn:hover{background-color:rgba(0,150,135,.5725490196)}._panel_btn--success{background-color:#4caf50;color:#fff}._panel_btn--svg{padding:2px 10px}._panel_btn svg{height:16px;width:16px}._panel_btn._panel_btn--icon{margin-right:10px}._panel_btn._panel_btn--icon svg{margin-right:10px}._panel_btn._panel_btn--icon img{width:auto;height:10px;transform:scale(1.6);margin-right:7px}._panel_btn>*{pointer-events:none}._panel_btn._notchange{opacity:.5;background-color:#ccc;pointer-events:none}._panel__tabs-header{display:flex;flex-wrap:nowrap;align-items:center;justify-content:flex-start;flex-direction:row;border-bottom:2px solid #eee}._panel__tabs-header [data-tabs]{padding:8px 16px;font-weight:700;border-bottom:2px solid transparent;cursor:pointer;margin-bottom:-2px;margin-right:10px}._panel__tabs-header [data-tabs].active,._panel__tabs-header [data-tabs]:hover{border-bottom-color:#573838}._panel__tabs-content [data-tabs]{padding:16px;overflow:auto;max-height:calc(100vh - 90px)}._panel__tabs-content [data-tabs]:not(.active){display:none}._panel__tabs--area{border:1px solid #eee;padding:10px}._panel__tabs--allcolumn{display:flex;flex-wrap:wrap;flex-direction:row;align-items:flex-start}._panel__tabs--allcolumn_detail,._panel__tabs--allcolumn_list{flex:50%}._panel__tabs--allcolumn_list{padding:16px}._panel__script p{margin-top:0;margin-bottom:0}._panel__script--header{position:sticky;top:45px;color:red;padding:10px;z-index:999;background:#fff}._panel__script--elm{background-color:rgba(76,175,80,.2);padding:10px;line-height:1.3;position:relative;padding-top:30px;font-size:14px}._panel__script--elm:before{content:attr(data-title);font-size:10px;background-color:#ccc;width:100%;position:absolute;top:0;left:0;padding:6px;cursor:pointer}._panel__script--elm:not(:last-child){margin-bottom:10px}._panel__script--elm [data-infocase]{font-weight:700;user-select:all}._panel__script--elm.hide{height:45px;overflow:hidden}._panel__caseview{font-size:100%;line-height:1.8}._panel__caseview [data-infocase_link=case_id] svg,._panel__caseview [data-infocase_link=customer_gmeet] svg,._panel__caseview [data-infocase_link=customer_ocid] svg{width:18px;height:18px}._panel__caseview [data-infocase=case_id],._panel__caseview [data-infocase=qlus_status]{font-weight:700}._panel__caseview [data-infocase=case_id]{color:#673ab7}._panel__caseview [data-infocase=customer_contact]{font-size:120%}._panel__caseview [data-infocase=am_email],._panel__caseview [data-infocase=case_id],._panel__caseview [data-infocase=customer_adsid_format],._panel__caseview [data-infocase=customer_contact],._panel__caseview [data-infocase=customer_email],._panel__caseview [data-infocase=qlus_status]{user-select:all}._panel__caseview [data-infocase=note],._panel__caseview [data-infocase=request],._panel__caseview [name=note],._panel__caseview [name=request]{display:block;border:1px dashed;padding:6px;font-style:italic;font-size:90%;overflow:hidden;resize:none}._panel__caseview [data-infocase_link=customer_gmeet][href*="meet.google.com/"]:before{content:"Link Google Meet"}._panel__caselist li{cursor:pointer;font-size:100%;position:relative;padding:6px}._panel__caselist li:not(:hover) [data-action=remove_case]{opacity:0;pointer-events:none}._panel__caselist li:not(:last-child){margin-bottom:12px}._panel__caselist li.active{box-shadow:0 0 29px inset rgba(233,30,99,.5);background-color:#fff}._panel__caselist li:hover{background-color:#eee}._panel__caselist li._has_qlus_status{padding-bottom:14px}._panel__caselist li._has_qlus_status ._bottom{top:calc(100% - 14px)}._panel__caselist li ._bottom{position:absolute;top:calc(100% - 10px);left:6px}._panel__caselist li ._bottom small{font-size:60%;background:#9e9e9e;color:#fff;border-radius:3px;padding:2px 6px}._panel__caselist li ._right{position:absolute;right:10px;top:50%;transform:translateY(-50%)}._panel__caselist li ._meeting_time[data-status=Today]{background-color:#673ab7}._panel__caselist li ._qlus_status[data-status="SO - Verification Not Needed"],._panel__caselist li ._qlus_status[data-status="SO - Verified"]{background-color:#8ad68d}._panel__caselist li ._qlus_status[data-status="AS - Reschedule 1"]{background-color:#2196f3}._panel__caselist li ._qlus_status[data-status="NI - Attempted Contact"],._panel__caselist li ._qlus_status[data-status="NI - Awaiting Validation"]{background-color:#00bcd4}._panel__caselist li ._qlus_status[data-status="AS - Work in Progress"]{background-color:#2196f3}._panel__caselist li[data-titletoday]{background:#ff9800;padding:1px;position:relative;pointer-events:none}._panel__caselist li[data-titletoday]:before{content:attr(data-titletoday);position:absolute;border-radius:5px;font-size:70%;right:0;top:50%;transform:translateY(-50%);background:#fff;padding:2px 10px;border:1px solid #ccc}._panel [data-panel]{position:fixed;width:100%;max-height:100vh;height:600px;overflow:auto;background:#fff;right:0;transition:.3s ease-in-out;transform:translateX(0);box-shadow:0 0 50px #ccc}._panel [data-panel]:not(:first-child){width:95%;z-index:2;background:#fff}._panel [data-panel]:not(.active){transform:translateX(100%);box-shadow:0 0 0 #ccc;opacity:0;pointer-events:none}._panel [data-panel][data-panel=form-case]{width:70%}._panel [data-panel][data-panel=list-case]{width:50%}._panel [data-panel][data-panel=toolbar]{bottom:0;left:45px;height:auto;width:fit-content}._panel [data-panel][data-panel=opentiptutorial]{top:45px;left:135px;max-width:600px}._panel [data-panel][data-panel=opensetting]{top:45px;left:180px;height:auto}._panel.list-case__active:not(.minisize) [data-panel=main]{padding-right:48%}._panel.list-case__active:not(.minisize) [data-panel=list-case]{width:50%}._panel [data-panel=script-reading]:not([data-isgcc="1"]) [data-am_donvi=GCC]{display:none}._panel [data-panel=script-reading][data-isgcc="1"] [data-am_donvi]:not([data-am_donvi=GCC]){display:none}._panel [data-qlus_status="AS - Reschedule 1"] ._emailtemp-item[data-type="AS - Reschedule 1"],._panel [data-qlus_status="AS - Work in Progress"] ._emailtemp-item[data-type="AS - Work in Progress"],._panel [data-qlus_status="IN - Not Reachable"] ._emailtemp-item[data-type="IN - Not Reachable"],._panel [data-qlus_status="NI - Attempted Contact"] ._emailtemp-item[data-type="NI - Attempted Contact"],._panel [data-qlus_status="NI - Awaiting Validation"] ._emailtemp-item[data-type="NI - Awaiting Validation"],._panel [data-qlus_status="SO - Verification Not Needed"] ._emailtemp-item[data-type="SO - Verification Not Needed"],._panel [data-qlus_status="SO - Verified"] ._emailtemp-item[data-type="SO - Verified"]{order:0;border:1px dashed green}._panel__inner{padding:16px;z-index:1;position:relative}._panel_btntinhnang{display:inline-block;position:absolute;right:100%;background-color:#fff;outline:1px solid #ccc;width:45px;height:45px;padding:6px;z-index:999999}._panel_btntinhnang svg{width:100%;height:100%}._panel_btntinhnang *{pointer-events:none}._panel_btntinhnang[data-btnaction]{background-size:100%}._panel_btntinhnang[data-btnaction=move]{cursor:move}._panel_btntinhnang[data-btnaction=move] svg path{fill:#777}._panel_btntinhnang[data-btnaction=firstemail],._panel_btntinhnang[data-btnaction=openemailtemplate],._panel_btntinhnang[data-btnaction=openmain],._panel_btntinhnang[data-btnaction=opensetting],._panel_btntinhnang[data-btnaction=opentiptutorial],._panel_btntinhnang[data-btnaction=opentoolbar]{left:0;z-index:2;background-repeat:no-repeat;background-position:center;cursor:pointer;border-left:0;transition:background-size .3s ease}._panel_btntinhnang[data-btnaction=firstemail] img,._panel_btntinhnang[data-btnaction=openemailtemplate] img,._panel_btntinhnang[data-btnaction=openmain] img,._panel_btntinhnang[data-btnaction=opensetting] img,._panel_btntinhnang[data-btnaction=opentiptutorial] img,._panel_btntinhnang[data-btnaction=opentoolbar] img{max-width:100%;max-height:100%}._panel_btntinhnang[data-btnaction=opentoolbar]{left:45px}._panel_btntinhnang[data-btnaction=firstemail]{left:90px}._panel_btntinhnang[data-btnaction=openemailtemplate]{left:135px}._panel_btntinhnang[data-btnaction=opentiptutorial]{left:180px}._panel_btntinhnang[data-btnaction=opensetting]{left:225px}._panel ul.list_keystorage{padding:10px;border:1px solid #ccc;margin-top:10px;max-height:200px;overflow:auto;font-size:90%}._panel ul.list_keystorage li{margin-bottom:6px;position:relative;display:flex;justify-content:space-between;align-items:center}._panel ul.list_keystorage li:nth-child(odd){background-color:#ebebeb}._panel ul.list_keystorage [data-btnremovekeystorage]{cursor:pointer;font-size:80%}._panel__blogs{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}._panel__blogs-search{display:block;background:#e5e5e5;margin-bottom:10px;padding:6px;border-bottom:1px dashed #777;outline:0}._panel__blogs-search-search:after{content:"Search";position:absolute;bottom:89%;pointer-events:none;font-size:58%;background:#ccc;color:#000;padding:2px 10px;display:inline-block;border-radius:4px;filter:invert(1)}._panel__blogs [data-blogs]{max-width:calc(50% - 5px);flex:calc(50% - 5px);border:1px solid #ccc;padding:10px;border-radius:10px;margin-bottom:10px;word-break:break-word;overflow:hidden}._panel__blogs [data-blogs]:not(.full) [data-blogs_content]{display:none}._panel__blogs [data-blogs].full [data-blogs_content_expect]{display:none}._panel__blogs [data-blogs].full{max-width:100%;flex:100%;border-color:green}._panel__blogs [data-blogs_image]{height:110px;margin-bottom:10px;background-size:cover;background-position:center;margin-top:-10px;margin-left:-10px;margin-right:-10px}._panel__blogs [data-blogs_title]{font-weight:700;margin-bottom:10px;font-size:90%}._panel__blogs [data-blogs_content_expect]{font-size:80%}._panel__blogs [data-blogs_expand]{display:inline-block;margin-top:10px;border:1px solid #ccc;padding:3px 8px;border-radius:3px;font-size:78%;cursor:pointer;user-select:none}._panel__ghost [ng-value="$ctrl.JustificationType.SALES_REASON"]{text-decoration:line-through}._panel [data-blogs_content]{word-break:break-word;line-height:1.6;font-size:100%}._panel [data-blogs_content] h1,._panel [data-blogs_content] h2,._panel [data-blogs_content] h3,._panel [data-blogs_content] h4,._panel [data-blogs_content] h5,._panel [data-blogs_content] h6{margin-bottom:18px}._panel [data-blogs_content] h1:not(:first-of-type),._panel [data-blogs_content] h2:not(:first-of-type),._panel [data-blogs_content] h3:not(:first-of-type),._panel [data-blogs_content] h4:not(:first-of-type),._panel [data-blogs_content] h5:not(:first-of-type),._panel [data-blogs_content] h6:not(:first-of-type){margin-top:24px}._panel [data-blogs_content] dl,._panel [data-blogs_content] ul{margin:0 auto;margin-bottom:30px;background:0 0}._panel [data-blogs_content] ol li,._panel [data-blogs_content] ul li{position:relative;padding-left:25px;list-style-type:none}._panel [data-blogs_content] ol li>p,._panel [data-blogs_content] ul li>p{position:relative;display:initial;margin-left:-5px}._panel [data-blogs_content] em{font-style:italic}._panel [data-blogs_content] strong{font-weight:600}._panel [data-blogs_content] [data-up_1stletter]>p:nth-of-type(1):first-letter{font-size:412%;float:left;line-height:1;font-weight:800;position:relative;margin-right:10px;margin-top:-5px;text-transform:uppercase}._panel [data-blogs_content] .wp-caption{max-width:100%}._panel [data-blogs_content] .wp-caption img{margin-bottom:0}._panel [data-blogs_content] .wp-caption .wp-caption-text{line-height:1.3;font-size:80%;opacity:.8;text-align:center;font-style:italic}._panel [data-blogs_content] __iwrap{position:relative;height:0;overflow:hidden;display:block}._panel [data-blogs_content] __iwrap-11{padding-bottom:100%}._panel [data-blogs_content] __iwrap-43{padding-bottom:75%}._panel [data-blogs_content] __iwrap-32{padding-bottom:66.66%}._panel [data-blogs_content] __iwrap-169{padding-bottom:56.25%}._panel [data-blogs_content] __iwrap iframe{position:absolute;top:0;left:0;width:100%;height:100%}._panel [data-blogs_content] img{max-width:100%;height:auto;margin-bottom:14px;border-radius:12px;overflow:hidden}@media screen and (min-width:481px){._panel [data-blogs_content] img.alignleft,._panel [data-blogs_content] img.alignright{max-width:40%}}@media screen and (min-width:1025px){._panel [data-blogs_content] img.alignleft,._panel [data-blogs_content] img.alignright{max-width:60%}}@media screen and (min-width:481px){._panel [data-blogs_content] img.alignleft{float:left;margin-right:10px}}@media screen and (min-width:1025px){._panel [data-blogs_content] img.alignleft{margin:12px 48px 24px -160px}}@media screen and (min-width:481px){._panel [data-blogs_content] img.alignright{float:right;margin-left:10px}}@media screen and (min-width:1025px){._panel [data-blogs_content] img.alignright{margin:12px -160px 24px 48px}}._panel [data-blogs_content] img.aligncenter{display:block;display:contents;margin-right:auto;margin-left:auto}._panel [data-blogs_content] img.hasboxshadow{-webkit-box-shadow:0 34px 69px rgba(0,0,0,.3);box-shadow:0 34px 69px rgba(0,0,0,.3)}._panel [data-blogs_content] ol{padding:0;padding-left:0;margin:0 auto;margin-bottom:30px;background:0 0}._panel [data-blogs_content] ol li{margin-left:30px;padding-left:10px;list-style-type:decimal}._panel [data-blogs_content] ol li:not(:last-child){margin-bottom:15px}._panel [data-blogs_content] iframe{max-width:100%}._panel [data-blogs_content] ul{padding:0;padding-left:0}._panel [data-blogs_content] ul ul{margin:10px 0}._panel [data-blogs_content] ul li:before{position:relative;top:-3px;display:inline-block;width:5px;height:5px;margin-right:15px;margin-left:-20px;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='50'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:bottom;background-size:100%;font-size:5px;content:""}._panel [data-blogs_content] ul li:not(:last-child){margin-bottom:15px}._panel [data-blogs_content] h1,._panel [data-blogs_content] h2,._panel [data-blogs_content] h3,._panel [data-blogs_content] h4,._panel [data-blogs_content] h5,._panel [data-blogs_content] h6{font-weight:500;line-height:1.2}._panel [data-blogs_content] h1{font-size:190%}._panel [data-blogs_content] h2{font-size:170%}._panel [data-blogs_content] h3{font-size:130%}._panel [data-blogs_content] h4{font-size:120%}._panel [data-blogs_content] h5{font-size:110%}._panel [data-blogs_content] h6{font-size:100%}._panel [data-blogs_content] p:not(:last-of-type){margin-top:0;margin-bottom:1em}._panel [data-blogs_content] pre{background:#f2f2f2;font-size:90%;line-height:1.18;margin-bottom:2.3em;white-space:pre-wrap;padding:20px;font-family:Menlo,Monaco,"Courier New",Courier,monospace}._panel [data-blogs_content] blockquote{margin-left:-20px;padding-left:20px;-webkit-box-shadow:inset 3px 0 0 0 #292929;box-shadow:inset 3px 0 0 0 #292929;margin-bottom:2em;font-style:italic}._panel [data-blogs_content] a{padding-top:2px;padding-bottom:2px;color:#ff001e;text-decoration:none}._panel [data-blogs_content] a:hover{color:#000;text-decoration:underline}._panel [data-blogs_content] aside{margin-bottom:10px;padding:10px;background:#eee;border:1px dotted #ccc}._panel [data-blogs_content] details{margin:1em 0;background:#fff;background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f9f9f9' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E");border:1px solid #ddd;border-radius:3px;-webkit-box-shadow:-5px -5px 0 #e0e0e0;box-shadow:-5px -5px 0 #e0e0e0}._panel [data-blogs_content] details p{padding:10px}._panel [data-blogs_content] details div{padding:10px}._panel [data-blogs_content] details summary{padding:15px 10px;background:#ff8337;border-radius:0;outline:0;color:#fff;cursor:pointer}._panel [data-blogs_content] dl{overflow:inherit;border:none}._panel [data-blogs_content] dl dt{position:relative;z-index:1;margin:0 auto;padding:10px 0 10px 15px;background:#000;border:1px solid #333;color:#fff;font-size:120%;letter-spacing:1.5px}._panel [data-blogs_content] dl dd{margin-bottom:20px;padding:10px;background-color:#fff;background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f9f9f9' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E") strong;background-image-color:#7e0bbf;border-right:1px solid #333;border-bottom:1px solid #333;border-left:1px solid #333;color:#222;font-size:14px}._panel [data-blogs_content] table{position:relative;border-collapse:collapse;border-spacing:1px;width:100%;margin:0 auto;margin-top:16px;margin-bottom:20px;overflow:hidden;border:1px solid #efefef;border-radius:0;-webkit-box-shadow:0 12px 40px 0 rgba(0,0,0,.04);box-shadow:0 12px 40px 0 rgba(0,0,0,.04)}._panel [data-blogs_content] table *{position:relative}._panel [data-blogs_content] table td{vertical-align:top;padding:16px;text-align:left;min-width:100px}._panel [data-blogs_content] table td.l{text-align:right}._panel [data-blogs_content] table td.c{text-align:center}._panel [data-blogs_content] table td.r{text-align:center}._panel [data-blogs_content] table th{padding-left:8px;text-align:left}._panel [data-blogs_content] table th.l{text-align:right}._panel [data-blogs_content] table th.c{text-align:center}._panel [data-blogs_content] table th.r{text-align:center}._panel [data-blogs_content] table thead tr{background:#36304a;color:#fff}._panel [data-blogs_content] table thead tr th{padding:20px 10px}._panel [data-blogs_content] table tbody tr{height:50px}._panel [data-blogs_content] table tbody tr:last-child{border:0}._panel [data-blogs_content] table tbody tr:nth-child(even){background-color:rgba(0,0,0,.1)}._panel [data-blogs_content] table tbody tr:hover{background-color:rgba(0,0,0,.1);cursor:pointer}._panel [data-blogs_content] details[open] summary{color:#fff}@media screen and (max-width:768px){._panel [data-blogs_content] .tb_rep{position:relative;display:block;width:-moz-calc(100% + 2rem);width:calc(100% + 2rem);max-width:-moz-calc(100vw - 2rem);max-width:calc(100vw - 2rem);margin-right:-2rem;overflow:auto}}._panel__horizon ._panel_btntinhnang{left:auto;right:100%}._panel__horizon [data-btnaction=openmain]{top:45px}._panel__horizon [data-btnaction=opentoolbar]{top:90px}._panel__horizon [data-btnaction=openemailtemplate]{top:135px}._panel__horizon [data-btnaction=opentiptutorial]{top:180px}._panel__horizon [data-btnaction=opensetting]{top:225px}._panel__horizon [data-btnaction=firstemail]{top:270px}._panel__horizon [data-panel][data-panel=main]{left:-45px;bottom:auto;top:45px}._panel__horizon [data-panel][data-panel=email-template],._panel__horizon [data-panel][data-panel=list-case],._panel__horizon [data-panel][data-panel=script-reading]{top:45px}._panel__horizon [data-panel][data-panel=toolbar]{left:0;bottom:auto;top:90px}._panel__horizon [data-panel][data-panel=opentiptutorial]{left:0;bottom:auto;top:180px}._panel__horizon [data-panel][data-panel=opensetting]{left:0;bottom:auto;top:225px}._panel [data-panel_title="Sync Panel"] [name=sync_enable]:not(:checked)+[data-btnaction=sync_panel]{display:none}._emailtemp{display:flex;flex-wrap:wrap}._emailtemp-item{flex:0 0 calc(33.33% - 10px);max-height:300px;overflow:hidden;text-overflow:ellipsis;border:1px solid #eee;padding:10px;order:2;margin-right:10px;margin-bottom:10px}._emailtemp-item::before{content:attr(data-type);display:block;background:#2a2a2a;margin-bottom:10px;padding:5px;color:#fff;border-radius:4px;font-size:11px}.minisize ._emailtemp-item{flex:0 0 100%}._emailtemp-item__title{margin-top:10px}

    </style>
    <span class="_panel_btntinhnang" data-btnaction="move"><svg width="48px" height="48px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="48" height="48" fill="white" fill-opacity="0.01" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19 10.3075C19 12.6865 17.2091 14.615 15 14.615C12.7909 14.615 11 12.6865 11 10.3075C11 7.92854 12.7909 6 15 6C17.2091 6 19 7.92854 19 10.3075ZM15 28.615C17.2091 28.615 19 26.6865 19 24.3075C19 21.9285 17.2091 20 15 20C12.7909 20 11 21.9285 11 24.3075C11 26.6865 12.7909 28.615 15 28.615ZM15 42.615C17.2091 42.615 19 40.6865 19 38.3075C19 35.9285 17.2091 34 15 34C12.7909 34 11 35.9285 11 38.3075C11 40.6865 12.7909 42.615 15 42.615Z" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M37 10.3075C37 12.6865 35.2091 14.615 33 14.615C30.7909 14.615 29 12.6865 29 10.3075C29 7.92854 30.7909 6 33 6C35.2091 6 37 7.92854 37 10.3075ZM33 28.615C35.2091 28.615 37 26.6865 37 24.3075C37 21.9285 35.2091 20 33 20C30.7909 20 29 21.9285 29 24.3075C29 26.6865 30.7909 28.615 33 28.615ZM33 42.615C35.2091 42.615 37 40.6865 37 38.3075C37 35.9285 35.2091 34 33 34C30.7909 34 29 35.9285 29 38.3075C29 40.6865 30.7909 42.615 33 42.615Z" fill="black" />
        </svg>
    </span>
    <span class="_panel_btntinhnang" data-btnaction="openmain" style="background-image: url('https://www.svgrepo.com/show/355037/google.svg')"></span>
    <span class="_panel_btntinhnang" data-btnaction="opentoolbar" style="background-image: url('https://www.svgrepo.com/show/332179/tool.svg')"></span>
    <span class="_panel_btntinhnang" data-btnaction="firstemail" style="background-image: url('https://www.svgrepo.com/show/67628/email.svg')"></span>
    <span class="_panel_btntinhnang" data-btnaction="openemailtemplate" style="background-image: url('https://www.svgrepo.com/show/194000/mail.svg')"></span>
    <span class="_panel_btntinhnang" data-btnaction="opentiptutorial" style="background-image: url('https://www.svgrepo.com/show/372881/java.svg')"></span>
    <span class="_panel_btntinhnang" data-btnaction="opensetting" style="background-image: url('https://www.svgrepo.com/show/418085/setting.svg')"></span>
    <form action="" method="post" id="formCase">
        <div class="_panel_group" data-group="main">
            <div data-panel="main" class="active">
                <div class="_panel__heading">
                    <div class="_panel__heading--group">
                        <span class="_panel__heading--close" data-btnaction="hide_panel"><img src="https://www.svgrepo.com/show/315851/close.svg" alt="" srcset=""></span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="" srcset="">
                    </div>
                    <div class="_panel__heading--group">
                        <span class="_panel_btn _panel_btn--small" data-btnaction="toggle_minisize_panel">Mini</span>
                        <span class="_panel_btn _panel_btn--small" data-btnaction="toggle_panel_darkmode">Darkmode</span>
                        <span class="_panel_btn _panel_btn--small" data-btnaction="toggle_panel_horizon">Horizon</span>
                    </div>
                </div>
                <div class="_panel__inner">
                    <div class="btn--group _panel__topsticky_toolbar">
                        <div class="_panel__topsticky_toolbar-gr">
                            <span class="_panel_btn _panel_btn--small btn--svg" data-btnaction="case_pin" title="Pin Case">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.879px" height="122.867px" viewBox="0 0 122.879 122.867" enable-background="new 0 0 122.879 122.867" xml:space="preserve">
                                    <g>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M83.88,0.451L122.427,39c0.603,0.601,0.603,1.585,0,2.188l-13.128,13.125 c-0.602,0.604-1.586,0.604-2.187,0l-3.732-3.73l-17.303,17.3c3.882,14.621,0.095,30.857-11.37,42.32 c-0.266,0.268-0.535,0.529-0.808,0.787c-1.004,0.955-0.843,0.949-1.813-0.021L47.597,86.48L0,122.867l36.399-47.584L11.874,50.76 c-0.978-0.98-0.896-0.826,0.066-1.837c0.24-0.251,0.485-0.503,0.734-0.753C24.137,36.707,40.376,32.917,54.996,36.8l17.301-17.3 l-3.733-3.732c-0.601-0.601-0.601-1.585,0-2.188L81.691,0.451C82.295-0.15,83.279-0.15,83.88,0.451L83.88,0.451z" />
                                    </g>
                                </svg>
                            </span>
                            <span class="_panel_btn _panel_btn--small" data-btnaction="load_casecurrent" title="Load Current">Current</span>
                            <span class="_panel_btn _panel_btn--small" data-btnaction="loadscript" title="Script Reading">Script</span>
                            <span class="_panel_btn _panel_btn--small" data-btnaction="email-template" title="Email Template">Email</span>
                            <span class="_panel_btn _panel_btn--small" data-btnaction="list-case" title="List Case">List case</span>
                        </div>
                        <div class="_panel__topsticky_toolbar-gr">
                            <span class="_panel_btn _panel_btn--small _panel_btn--icon" data-btnaction="crawl_case" title="Load Current">
                                <img src="https://www.svgrepo.com/show/105981/reload.svg" alt="" srcset="">
                            </span>
                            <button type="submit" action="save" class="_panel_btn _panel_btn--small">SAVE</button>
                        </div>
                    </div>
                    <div class="_panel__linear-progress small">
                        <div class="bar bar1"></div>
                        <div class="bar bar2"></div>
                    </div>
                    <div class="_panel__tabs--allcolumn">
                        <div class="_panel__tabs--allcolumn_detail">
                            <div class="_panel__tabs--area">
                                <div class="_panel__notification">
                                </div>
                                <div class="_panel__caseview">
                                    <div class="_panel__form">
                                        <div class="_panel__form--column">
                                            <div class="_panel__form--panel">
                                                Case ID: <span data-infocase="case_id">CASEID</span>
                                                <a href="#" data-infocase_link="case_id" target="_blank">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489.3 489.3" style="enable-background:new 0 0 489.3 489.3;" xml:space="preserve">
                                                        <g>
                                                            <path d="M476.95,0H12.35c-6.8,0-12.2,5.5-12.2,12.2V235c0,6.8,5.5,12.2,12.2,12.2s12.3-5.5,12.3-12.2V24.5h440.2v440.2h-211.9 c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h224c6.8,0,12.3-5.5,12.3-12.3V12.3C489.25,5.5,483.75,0,476.95,0z" />
                                                            <path d="M0.05,476.9c0,6.8,5.5,12.3,12.2,12.3h170.4c6.8,0,12.3-5.5,12.3-12.3V306.6c0-6.8-5.5-12.3-12.3-12.3H12.35 c-6.8,0-12.2,5.5-12.2,12.3v170.3H0.05z M24.55,318.8h145.9v145.9H24.55V318.8z" />
                                                            <path d="M222.95,266.3c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l138.6-138.7v79.9c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3 V98.1c0-6.8-5.5-12.3-12.3-12.3h-109.5c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h79.9L222.95,249 C218.15,253.8,218.15,261.5,222.95,266.3z" />
                                                        </g>
                                                    </svg>
                                                </a>
                                                <br>
                                                Ads ID: <strong>
                                                    <span data-infocase="customer_adsid_format">123-321-0000</span>
                                                </strong>
                                                <a href="#" data-infocase_link="customer_ocid" target="_blank">
                                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 489.3 489.3" style="enable-background:new 0 0 489.3 489.3;" xml:space="preserve">
                                                        <g>
                                                            <path d="M476.95,0H12.35c-6.8,0-12.2,5.5-12.2,12.2V235c0,6.8,5.5,12.2,12.2,12.2s12.3-5.5,12.3-12.2V24.5h440.2v440.2h-211.9 c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h224c6.8,0,12.3-5.5,12.3-12.3V12.3C489.25,5.5,483.75,0,476.95,0z" />
                                                            <path d="M0.05,476.9c0,6.8,5.5,12.3,12.2,12.3h170.4c6.8,0,12.3-5.5,12.3-12.3V306.6c0-6.8-5.5-12.3-12.3-12.3H12.35 c-6.8,0-12.2,5.5-12.2,12.3v170.3H0.05z M24.55,318.8h145.9v145.9H24.55V318.8z" />
                                                            <path d="M222.95,266.3c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l138.6-138.7v79.9c0,6.8,5.5,12.3,12.3,12.3s12.3-5.5,12.3-12.3 V98.1c0-6.8-5.5-12.3-12.3-12.3h-109.5c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h79.9L222.95,249 C218.15,253.8,218.15,261.5,222.95,266.3z" />
                                                        </g>
                                                    </svg>
                                                </a>
                                                <br>
                                                <a href="#" data-infocase_link="customer_gmeet" target="_blank"></a>
                                            </div>
                                            <div class="_panel__form--panel">
                                                Customer: <strong><span data-infocase="customer_name">CUSTOMER_NAME</span></strong> (<select name="customer_gender" class="select_inline">
                                                    <option value="bạn">Bạn</option>
                                                    <option value="anh">Anh</option>
                                                    <option value="chị">Chị</option>
                                                </select>) (<span data-infocase="customer_email">zzz@ccc.com</span>)
                                                <br>
                                                Website: <a href="#" data-infocase="customer_website" target="_blank">CUSTOMER_WEBSITE</a><br>
                                                Contact: <strong><span data-infocase="customer_contact">CUSTOMER_CONTACT</span></strong><br>
                                                <br>
                                                Status+:
                                                <div class="_gr_qlus_status">
                                                    <span data-infocase="qlus_status">QLUS_STATUS</span>
                                                    <label for="qlus_status" ><img src="https://www.svgrepo.com/show/414882/chevron-down-arrow.svg" >
                                                        <select name="qlus_status" id="qlus_status">
                                                            <option value="AS - Work in Progress">AS - Work in Progress</option>
                                                            <option value="AS - Reschedule 1">AS - Reschedule 1</option>
                                                            <option value="AS - Reschedule 2">AS - Reschedule 2</option>
                                                            <option value="AS - Acceptable Reschedule">AS - Acceptable Reschedule</option>
                                                            <option value="NI - Awaiting Inputs">NI - Awaiting Inputs</option>
                                                            <option value="NI - In Consult">NI - In Consult</option>
                                                            <option value="NI - Awaiting Validation">NI - Awaiting Validation</option>
                                                            <option value="NI - Attempted Contact">NI - Attempted Contact</option>
                                                            <option value="NI - Other">NI - Other</option>
                                                            <option value="SO - Verified">SO - Verified</option>
                                                            <option value="SO - Unverified">SO - Unverified</option>
                                                            <option value="SO - Verification Not Needed">SO - Verification Not Needed</option>
                                                            <option value="IN - Infeasible">IN - Infeasible</option>
                                                            <option value="IN - Out of Scope - Rerouted">IN - Out of Scope - Rerouted</option>
                                                            <option value="IN - Not Reachable">IN - Not Reachable</option>
                                                            <option value="IN - Not Interested">IN - Not Interested</option>
                                                            <option value="IN - Not Ready">IN - Not Ready</option>
                                                            <option value="IN - Reschedule Limit Exceeded">IN - Reschedule Limit Exceeded</option>
                                                            <option value="IN - Other">IN - Other</option>
                                                            <option value="DC - Not Needed">DC - Not Needed</option>
                                                            <option value="DC - Test Case">DC - Test Case</option>
                                                            <option value="DC - Out of Scope - Rerouted">DC - Out of Scope - Rerouted</option>
                                                            <option value="AS - Agent Reschedule">AS - Agent Reschedule</option>
                                                            <option value="Other">Other</option>
                                                        </select>
                                                    </label>
                                                </div>
                                                
                                                <br>
                                                <span class="_panel__form--label">Schedule:</span>
                                                <input type="datetime-local" name="meeting_time">
                                            </div>
                                            <div class="_panel__form--panel">
                                                AM: <strong><span data-infocase="am_name">AM_NAME</span></strong> (<span data-infocase="am_email">zzz@ccc.com</span>)
                                                <br>
                                                Đơn vị: <span data-infocase="am_isgcc">ZZZZZ</span> <span data-infocase="sales_program"> Sales program </span>
                                                <br>
                                                Meeting_time: <span data-infocase="meeting_ontime">MEETING_TIME</span>
                                                <br>
                                                Assign to: <a href="#" data-infocase="assignee">JOINX</a>,
                                            </div>
                                        </div>
                                        <div class="_panel__form--column">
                                            <div class="_panel__form--panel">
                                                Note: <span class="_panel_btn _panel_btn--small" data-btnaction="pushto_casesummary" title="Push to case summary">Push to case summary</span>
                                                <textarea name="note" class="autoresize" cols="30" rows="5" placeholder="NOTE"></textarea>
                                                Tasks: <span data-infocase="tasks">TASKS</span><br>
                                                Attribution Model: <strong><span data-infocase="customer_attributionmodel">customer_attributionmodel</span></strong><br>
                                                <br>
                                                Request:
                                                <textarea name="request" class="autoresize" cols="30" rows="2" placeholder="REQUEST"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <h3>OTHER</h3>
                                    <div class="_panel__form">
                                        <div class="_panel__form--column">
                                            <div class="_panel__form--panel" data-panel_title="">
                                                <span class="_panel__form--label">Case ID: </span>
                                                <input type="text" name="case_id">
                                                <span class="_panel__form--label"><small>Ads ID: </small></span>
                                                <input type="text" name="customer_adsid">
                                            </div>
                                            <div class="_panel__form--panel" data-panel_title="AM">
                                                <span class="_panel__form--label">AM: </span>
                                                <input type="text" name="am_name">
                                                <span class="_panel__form--label"><small>Email: </small></span>
                                                <input type="text" name="am_email">
                                                <span class="_panel__form--label"><small>Sales Program: </small></span>
                                                <input type="text" name="sales_program">
                                                <label class="_panel__form--label_inputcenter">
                                                    <small>Is GCC? </small>
                                                    <input type="checkbox" name="am_isgcc">
                                                </label>
                                            </div>
                                            <div class="_panel__form--panel" data-panel_title="Tasks">
                                                <span class="_panel__form--label">Task: </span>
                                                <textarea name="tasks" id="" cols="30" rows="3"></textarea>
                                                <span class="_panel__form--label"><small>Attribution Model: </small></span>
                                                <input type="text" name="customer_attributionmodel">
                                            </div>
                                            <div class="_panel__form--panel" data-panel_title="AM">
                                            </div>
                                        </div>
                                        <div class="_panel__form--column">
                                            <div class="_panel__form--panel" data-panel_title="Customer">
                                                <span class="_panel__form--label">Customer: </span>
                                                <input type="text" name="customer_name">
                                                <span class="_panel__form--label"><small>Website: </small></span>
                                                <input type="text" name="customer_website">
                                                <span class="_panel__form--label"><small>Email: </small></span>
                                                <input type="text" name="customer_email">
                                                <span class="_panel__form--label"><small>Phone: </small></span>
                                                <input type="text" name="customer_contact">
                                                <span class="_panel__form--label"><small>OCID: </small></span>
                                                <input type="text" name="customer_ocid">
                                                <span class="_panel__form--label"><small>Meet: </small></span>
                                                <input type="text" name="customer_gmeet">
                                                <span class="_panel__form--label"><small>Meeting time: </small></span>
                                                <input type="datetime-local" name="meeting_ontime">
                                            </div>
                                            <div class="_panel__form--panel" data-panel_title="Case Detail">
                                                <span class="_panel__form--label">Est: </span>
                                                <select name="est_setup">
                                                    <option value="25 phút">25 phút</option>
                                                    <option value="30 phút">30 phút</option>
                                                    <option value="45 phút">45 phút</option>
                                                    <option value="Hơn 1 giờ">Hơn 1 giờ</option>
                                                </select>
                                            </div>
                                            <div class="_panel__form--panel" data-panel_title="Case Detail">
                                                <span class="_panel__form--label">CMS / Platform: </span>
                                                <select name="platform">
                                                    <option value="--------">CMS / Platform: </option>
                                                    <option value="Wordpress">Wordpress</option>
                                                    <option value="Ladipage">Shopify</option>
                                                    <option value="Ladipage">Ladipage</option>
                                                    <option value="Bizweb">Bizweb</option>
                                                    <option value="Haravan">Haravan</option>
                                                    <option value="Drupal">Drupal</option>
                                                    <option value="Custom">Custom</option>
                                                </select>
                                            </div>
                                            <div class="_panel__form--panel" data-panel_title="Assignee">
                                                <span class="_panel__form--label"><small>Assignee: </small></span>
                                                <input type="text" name="assignee">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-panel="script-reading">
                <div class="_panel__heading">
                    <div class="_panel__heading--group">
                        <span class="_panel__heading--close" data-btnaction="close_panel"><img src="https://www.svgrepo.com/show/315851/close.svg" alt="" srcset=""></span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="" srcset="">
                        <span class="_panel__heading--title">Script Reading</span>
                    </div>
                </div>
                <div class=" _panel__inner">
                    <div class="_panel__script--header"><span data-infocase="customer_gender">C2</span> <span data-infocase="customer_name">B2</span></div>
                    <div class="_panel__script"> <br>
                        <div class="_panel__script--elm" data-title="1. Chào hỏi xác nhận thông Adv"> <br>Dạ em chào <span data-infocase="customer_gender">C2</span>, em là <span data-infosetting="your-shortname">Your shortname</span> đến từ đội giải pháp kỹ thuật đại diện Google
                            <br>có phải em <span data-infosetting="your-shortname">Your shortname</span> đang nghe máy với <span data-infocase="customer_gender">C2</span> <span data-infocase="customer_name">B2</span> đó không?
                            <br>// KH: đúng rồi em!
                            <br> <br>
                            <p data-am_donvi="GCC">Em nhận được yêu cầu từ đội hỗ trợ Google Ads, là hôm nay hỗ trợ cài đặt <span data-infocase="request">E2</span> cho website <span data-infocase="customer_website">F2</span>, phải không <span data-infocase="customer_gender">C2</span> ạ?
                                <br>// KH: đúng rồi em!</p> <br>
                            <p data-am_donvi="OTHER">Em có nhận được yêu cầu từ bạn <strong><span data-infocase="am_name">C2</span></strong> (người quản lý của Google)hôm nay sẽ hỗ trợ <span data-infocase="customer_gender">C2</span> cài đặt <span data-infocase="request">E2</span> cho trang web <span data-infocase="customer_website">F2</span>. phải không ạ?
                                <br>// KH: đúng rồi em!</p> <br>dạ, Ước tính thời gian cài đặt này là <span data-infocase="est_setup">G2</span> phút, vậy mình có đang ngồi máy tính để tiện cài đặt không <span data-infocase="customer_gender">C2</span>?
                            <br>// KH: Có em
                            <br>
                        </div>
                        <div class="_panel__script--elm" data-title="2. Thủ tục"> <br>Trước khi bắt đầu cài đặt <span data-infocase="customer_gender">C2</span> lưu ý giúp em cuộc gọi này sẽ được ghi âm nhằm nâng cao chất lượng dịch vụ [cho] khách hàng , <span data-infocase="customer_gender">C2</span> nha!
                            <br>// KH: Ok em
                            <br>Nếu sảy sự cố mất kết nối, <span data-infocase="customer_gender">C2</span> vui lòng không liên hệ qua số này, em sẽ chủ động gọi lại cho <span data-infocase="customer_gender">C2</span> <br>// KH: Ok em
                            <br>em <span data-infosetting="your-shortname">Your shortname</span> có gởi cho <span data-infocase="customer_gender">C2</span> một email có link google meet [á] để chia sẽ màn hình với em, <span data-infocase="customer_gender">C2</span> truy cập vào giúp em nha
                            <br>// KH: OK em
                            <br>// Chờ KH truy cập link, xong chưa
                            <br>[Rôi]Tại đây <span data-infocase="customer_gender">C2</span> giúp em tắt camera và đóng tất cả các thông tin riêng tư mà <span data-infocase="customer_gender">C2</span> không muốn chia sẽ <br> <br>[Rồi] sau đó nhấn vào nút [tham gia ngay], tiếp theo, <span data-infocase="customer_gender">C2</span> nhấn vào nút chia sẽ màn hình có dấu mũi tên hướng lên nằm bên dưới chính giữa của google meet, sau đó chọn [toàn bộ màn hình của bạn], nếu có nhiều màn hình thì <span data-infocase="customer_gender">C2</span> chọn cái đầu tiên
                            <br>// KH: OK em
                            <br> <br>// Me: em đã thấy màn hình của <span data-infocase="customer_gender">C2</span> rồi,
                            <br> <br></div>
                        <div class="_panel__script--elm" data-title="3. Điều khoản"> <br>à <span data-infocase="customer_gender">C2</span>! Bên em trước đó có gởi cho <span data-infocase="customer_gender">C2</span> một email xác nhận lịch hẹn ngày hôm nay [á], mình đã đọc qua nội dung bên trong rồi đúng không ạ?
                            <br>// KH: có rồi
                            <br>Nếu như <span data-infocase="customer_gender">C2</span> thấy mọi vấn đề nêu trên <span data-infocase="customer_gender">C2</span> cảm thấy thỏa, thì mình tiến hành cài đặt luôn nha!
                            <br> <br>// KH: Chưa
                            <br>Thế thì em sẽ mô tả sơ nội dung về điều mình cần chuẩn bị cho việc cài đặt code trên website của mình nha
                            <br>Trước tiên là mình cần đủ quyền truy cập cho Google Ads, Analytics, GTM, quản trị admin website.
                            <br>Nếu như <span data-infocase="customer_gender">C2</span> thấy mọi vấn đề nêu trên <span data-infocase="customer_gender">C2</span> cảm thấy thỏa, thì mình tiến hành cài đặt luôn nha!
                            <br> <br>// KH: OK em
                            <br>.............
                            <br>.............
                            <br></div>
                        <div class="_panel__script--elm" data-title="4. Đọc báo cáo"> <br>Hướng dẫn KH đọc báo cáo
                            <br></div>
                        <div class="_panel__script--elm" data-title="5. Tóm tắt và thông báo theo dõi"> <br>Dạ em <span data-infosetting="your-shortname">Your shortname</span> đã hoàn thành việc hỗ trợ <span data-infocase="request">E2</span> <br> <br>Về trường hợp của mình hôm nay, Bên em sẽ theo dõi trong 7 ngày để đảm bảo dữ liệu được ghi nhận đúng. Nếu không có vấn đề gì thì em sẽ gửi cho <span data-infocase="customer_gender">C2</span> 1 email thông báo ghi nhận cài đặt thành công có kèm phần đánh giá chất lượng dịch vụ cho em. <span data-infocase="customer_gender">C2</span> có thời gian thì phản hồi giúp em.
                            <br>Việc cài đặt đã thành công. Sau cuộc gọi này bên em sẽ gởi email thông báo thành công có kèm phần đánh giá chất lượng dịch vụ. <span data-infocase="customer_gender">C2</span> có thời gian thì phản hồi giúp em.
                            <br> <br>Bên em sẽ theo dõi trong 2 ngày tới để đảm bảo dữ liệu được ghi nhận đúng. Nếu không có vấn đề gì thì sau 2 ngày bên em sẽ gửi 1 email thông báo thành công có kèm phần đánh giá chất lượng dịch vụ. <span data-infocase="customer_gender">C2</span> có thời gian thì phản hồi giúp em.
                            <br>Bên em sẽ theo dõi thêm 2 ngày để đảm bảo dữ liệu được ghi nhận đúng. Nếu không có vấn đề gì thì trong vòng 2 ngày bên em sẽ gửi 1 email thông báo thành công có kèm phần đánh giá chất lượng dịch vụ. <span data-infocase="customer_gender">C2</span> có thời gian thì phản hồi giúp em.
                            <br> <br>Tạm ngưng phần hỗ trợ tại đây và sẽ tiếp tục trong sau 24h. <span data-infocase="customer_gender">C2</span> có thể sắp xếp lịch hẹn vào <span data-infocase="next_timeinstall">ZZZZZ</span> <br> <br></div>
                        <div class="_panel__script--elm" data-title="6. Xác nhận giải đáp thắc mắc, dừng chia sẽ màn hình và KẾT THÚC"> <br>Mình còn thắc mắc nào trong quá trình cài đặt không <span data-infocase="customer_gender">C2</span> <span data-infocase="customer_name">B2</span> ơi!
                            <br>// Không
                            <br> <br>Vậy mình đã hoàn tất và có thể kết thúc cuộc gọi tại đây á <span data-infocase="customer_gender">C2</span> <br>Trước khi mình kết thúc, <span data-infocase="customer_gender">C2</span> giúp em dừng chia sẽ màn hình giúp em!
                            <br> <br>chúc <span data-infocase="customer_gender">C2</span> một ngày làm việc vui vẻ,
                            <br>Dạ em chào <span data-infocase="customer_gender">C2</span> <br></div> <br>
                    </div> <br> <br>
                </div>
            </div>
            <div data-panel="email-template">
                <div class="_panel__heading">
                    <div class="_panel__heading--group">
                        <span class="_panel__heading--close" data-btnaction="close_panel"><img src="https://www.svgrepo.com/show/315851/close.svg" alt="" srcset=""></span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="" srcset="">
                        <span class="_panel__heading--title">Email Template</span>
                    </div>
                </div>
                <div class=" _panel__inner">
                    <div class="_emailtemp">
                        <div class="_emailtemp-item" data-type="Send Google Meet Link">
                            <span class="_panel_btn _panel_btn--small _panel_btn--addtemplate">Insert</span>
                            <div class="_emailtemp-item__title">Đội giải pháp kỹ thuật - Link cuộc họp Google Meet cho trường hợp [<span data-infocase="case_id">5-6594000033737</span>]</div>
                            <div class="_emailtemp-item__content">
                                <div id="email-body-content-top" style="width:100%" dir="auto">
                                    <div id="email-body-content-top-content" style="font:normal 13px/17px Roboto,sans-serif;display:block" dir="auto">
                                        <p dir="auto">Xin chào <span data-infocase="customer_gender">anh</span> <span data-infocase="customer_name">CUSTOMER NAME</span><br></p>
                                        <p dir="auto">Gửi <span data-infocase="customer_gender">anh</span> link cuộc họp trên Google Meet!</p>
                                        <p dir="auto">Truy cập link google cuộc họp <a href="#" data-infocase_link="customer_gmeet">tại đây</a>
                                            Hoặc qua: <a href="#" data-infocase_link="customer_gmeet" data-infocase="customer_gmeet">LINK</a></p>
                                        <p dir="auto">Xin cảm ơn!</p>
                                        <p dir="auto">Trân trọng!</p>
                                        <p dir="auto"><span data-infosetting="your-name">Dong Mai</span> <br><i>Đội giải pháp kỹ thuật</i> <br><i>TDCX đại diện của Google</i></p>
                                    </div>
                                    <div style="font:normal 13px/17px Roboto,sans-serif;display:block"><em>Lưu ý: Nếu bạn cần tham chiếu tới vé hỗ trợ này trong tương lai, vui lòng sử dụng mã <span data-infocase="case_id">5-6594000033737</span>.</em></div>
                                </div>
                            </div>
                        </div>
                        <div class="_emailtemp-item" data-type="Hướng dẫn chèn mã GTM và xác nhận lịch hẹn">
                            <span class="_panel_btn _panel_btn--small _panel_btn--addtemplate">Insert</span>
                            <div class="_emailtemp-item__title">Đội giải pháp kỹ thuật - Hướng dẫn chèn mã GTM và xác nhận lịch hẹn cho trường hợp [<span data-infocase="case_id">5-6594000033737</span>]</div>
                            <div class="_emailtemp-item__content">
                                <div id="email-body-content-top" style="width:100%" dir="auto">
                                    <div id="email-body-content-top-content" style="font:normal 13px/17px Roboto,sans-serif;display:block" dir="auto">
                                        <p dir="auto">Xin chào <span data-infocase="customer_gender">anh</span> <span data-infocase="customer_name">CUSTOMER name</span><br></p>
                                        <p dir="auto">Đầu tiên là xin chúc <span data-infocase="customer_gender">anh</span> một ngày tràn đầy niềm vui.</p>
                                        <p dir="auto">Như qua trao đổi thì cần phía đội ngũ phát triển website giúp đỡ về việc chèn mã theo dõi vào website:</p>
                                        <ol dir="auto">
                                            <li>Mã theo dõi của mình là <b>GTM-MZL8JS7</b></li>
                                            <li>Có thể copy theo dõi GTM (Google tag manager) dành cho <b>&lt;head&gt;</b><b> </b>vui lòng truy cập: <a href="https://jsfiddle.net/dongmx/pew7Lhbk/" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;">https://jsfiddle.net/dongmx/pew7Lhbk/</a><br>
                                                <small>Lưu ý: Thay thế GTM-XXXXXXX bằng mã ở trên của bạn</small>
                                            </li>
                                            <li>Xem hướng dẫn chèn mã tại: <a href="https://developers.google.com/tag-platform/tag-manager/web" target="_blank" style="color: rgb(26, 115, 232); text-decoration-line: none;" class="ignore-globals">https://developers.google.com/tag-platform/tag-manager/web</a><br></li>
                                        </ol>
                                        <p dir="auto">Cuộc hẹn tiếp theo để hướng dẫn <span data-infocase="customer_gender">anh</span> sẽ <b>vào lúc 4 giờ chiều ngày 1/11/2022 theo giờ Việt Nam. </b>Rất mong sự có mặt của anh để hoàn thành quá trình cài đặt cho trường hợp này.</p>
                                        <p dir="auto">Xin cảm ơn!</p>
                                        <p dir="auto">Trân trọng!</p>
                                        <p dir="auto"><span data-infosetting="your-name">Dong Mai</span> <br><i>Đội giải pháp kỹ thuật</i> <br><i>TDCX đại diện của Google</i></p>
                                    </div>
                                    <div style="font:normal 13px/17px Roboto,sans-serif;display:block"><em>Lưu ý: Nếu bạn cần tham chiếu tới vé hỗ trợ này trong tương lai, vui lòng sử dụng mã <span data-infocase="case_id">5-6594000033737</span>.</em></div>
                                </div>
                            </div>
                        </div>
                        <div class="_emailtemp-item" data-type="AS - Reschedule 1">
                            <span class="_panel_btn _panel_btn--small _panel_btn--addtemplate">Insert</span>
                            <div class="_emailtemp-item__title">Đội giải pháp kỹ thuật - Đặt lại lịch hẹn lần 2 cho trường hợp [<span data-infocase="case_id">5-6594000033737</span>]</div>
                            <div class="_emailtemp-item__content">
                                <div id="email-body-content-top" style="width: 100%;">
                                    <div id="email-body-content-top-content" style=" font-style: normal; font-variant: normal; font-stretch: normal; font-size: 13px; line-height: 17px; font-family: Roboto, sans-serif; display: block; " dir="auto">
                                        <p dir="auto"> <span style="font-weight: normal;"><span data-infocase="customer_gender" style="text-transform: capitalize;">Anh</span> <span data-infocase="customer_name">CUSTOMER NAME</span></span> thân mến!<br /> <br /> Chúng tôi đã nhận được yêu cầu của anh về việc dời lịch cho cuộc gọi hỗ trợ triển khai <b><span data-infocase="request">ZZZ</span> </b> cho <span><b><span data-infocase="customer_website">nhuahuongchi.com</span></b></span>. </p>
                                        <p dir="auto" style="font-weight: normal;"></p>
                                        <p style="font-weight: normal;" dir="auto"> Chúng tôi rất mong được trợ giúp <span data-infocase="customer_gender">anh</span>! Xin lưu ý rằng do nhu cầu sử dụng dịch vụ của chúng tôi đang ở mức cao, nên chúng tôi không có nhiều thời gian rảnh. Chúng tôi hiểu rằng việc triển khai này rất quan trọng đối với <span data-infocase="customer_gender">anh</span>, vì vậy,<strong> điều quan trọng là <span data-infocase="customer_gender">anh</span> có thể tham gia cuộc gọi vào thời điểm đã lên lịch để tránh bỏ lỡ cơ hội này. Đây là lần dời lịch cuối cùng và chúng tôi sẽ không thể tiếp tục dời lịch hẹn nữa.</strong> </p>
                                        <p style="font-weight: normal;" dir="auto"> <br /> <strong>Lịch hẹn đã được dời sang <font color="#9c166b"><span>11 giờ ngày 19/10/2022 theo giờ Việt Nam</span></font> và chúng tôi sẽ gọi cho <span data-infocase="customer_gender">anh</span> theo số điện thoại mà <span data-infocase="customer_gender">anh</span> đã cung cấp: </strong> <strong><span data-infocase="customer_contact">+84 96 693 19 48</span></strong><br /> <br /> Nếu <span data-infocase="customer_gender">anh</span> không rảnh vào thời gian này vì bất cứ lý do gì, vui lòng cho chúng tôi biết bằng cách trả lời email này.<br /> <br /> Chúng tôi rất mong được trò chuyện với <span data-infocase="customer_gender">anh</span>! </p>
                                        <p dir="auto">Trân trọng!</p>
                                        <p dir="auto"><span data-infosetting="your-name">Dong Mai</span> <br><i>Đội giải pháp kỹ thuật</i> <br><i>TDCX đại diện của Google</i></p>
                                    </div>
                                    <div style="font: normal 13px/17px Roboto, sans-serif; display: block;"> &nbsp; </div>
                                    <div style="font: normal 13px/17px Roboto, sans-serif; display: block;"> <em>Lưu ý: Nếu <span data-infocase="customer_gender" style="text-transform: capitalize;">anh</span> cần tham chiếu tới vé hỗ trợ này trong tương lai, vui lòng sử dụng mã <span class="replaced">5-6594000033737</span>.</em> </div>
                                </div>
                            </div>
                        </div>
                        <div class="_emailtemp-item" data-type="SO - Verified">
                            <span class="_panel_btn _panel_btn--small _panel_btn--addtemplate">Insert</span>
                            <div class="_emailtemp-item__title">Đội giải pháp kỹ thuật – Đã xác minh lượt hiển thị/lượt chuyển đổi cho trường hợp [<span data-infocase="case_id">5-6594000033737</span>]</div>
                            <div class="_emailtemp-item__content">
                                <div id="email-body-content-top" style="width:100%">
                                    <div id="email-body-content-top-content" style="font-style: normal; font-variant: normal; font-stretch: normal; font-size: 13px; line-height: 17px; font-family: Roboto, sans-serif; display: block;" dir="auto">
                                        <p dir="auto" style="font-weight: normal;"><span data-infocase="customer_gender" style="text-transform: capitalize;">Anh</span> <span data-infocase="customer_name">CUSTOMER name</span>&nbsp;thân mến!</p>
                                        <p style="font-weight: normal;"><strong>Xin chúc mừng!&nbsp;</strong></p>
                                        <p style="font-weight: normal;">Đối với trường hợp<strong> </strong>
                                            <span data-infocase="case_id">5-6594000033737</span>, chúng tôi rất vui mừng được thông báo rằng quá trình triển khai đã hoàn tất thành công. Chúng tôi đang ghi nhận các lượt hiển thị đã xác minh, nên có thể xác nhận rằng chiến dịch của <span data-infocase="customer_gender">anh</span> đang hoạt động đúng cách và như dự kiến!
                                        </p>
                                        <p style="font-weight: normal;">Điều này có nghĩa là trường hợp <span data-infocase="case_id">5-6594000033737</span><strong> </strong>hiện đã được đóng thành công. Nếu <span data-infocase="customer_gender">anh</span> gặp vấn đề, có mối lo ngại hay câu hỏi chung, thì nhóm của chúng tôi luôn sẵn sàng và rất mong được trợ giúp <span data-infocase="customer_gender">anh</span>!</p>
                                        <p style="font-weight: normal;"><span data-infocase="customer_gender" style="text-transform: capitalize;">anh</span> nên liên hệ với Người quản lý tài khoản của Google nếu cần đặt lại lịch hẹn với chúng tôi trong tương lai.</p>
                                        <p dir="auto" style="font-weight: normal;">
                                        </p>
                                        <p style="font-weight: normal;">Cảm ơn <span data-infocase="customer_gender">anh</span> đã hợp tác lâu dài với Google!&nbsp;</p>
                                        <br>
                                        <p dir="auto">Trân trọng!</p>
                                        <p dir="auto"><span data-infosetting="your-name">Dong Mai</span> <br><i>Đội giải pháp kỹ thuật</i> <br><i>TDCX đại diện của Google</i></p>
                                    </div>
                                    <div style="font:normal 13px/17px Roboto,sans-serif;display:block">&nbsp;</div>
                                    <div style="font:normal 13px/17px Roboto,sans-serif;display:block"><em>Lưu ý: Nếu <span data-infocase="customer_gender">anh</span> cần tham chiếu tới vé hỗ trợ này trong tương lai, vui lòng sử dụng mã <span data-infocase="case_id">5-6594000033737</span>.</em></div>
                                </div>
                            </div>
                        </div>
                        <div class="_emailtemp-item" data-type="NI - Attempted Contact">
                            <span class="_panel_btn _panel_btn--small _panel_btn--addtemplate">Insert</span>
                            <div class="_emailtemp-item__title">Đội giải pháp kỹ thuật - Thông báo không thể liên hệ được lần 1 [<span data-infocase="case_id">5-6594000033737</span>]</div>
                            <div class="_emailtemp-item__content">
                                <div id="email-body-content-top" style="width:100%">
                                    <div id="email-body-content-top-content" style="font-style: normal; font-variant: normal; font-stretch: normal; font-size: 13px; line-height: 17px; font-family: Roboto, sans-serif; display: block;" dir="auto">
                                        <p dir="auto"><span data-infocase="customer_gender" style="text-transform: capitalize;">Anh</span> <span data-infocase="customer_name">CUSTOMER NAME</span>
                                            thân mến!<br>
                                            <br>
                                            Đầu thư, chúng tôi xin chúc <span data-infocase="customer_gender">anh</span> có một ngày tốt lành!&nbsp;<br>
                                            <br>
                                            Hôm nay, nhóm giải pháp kỹ thuật của chúng tôi đã cố gắng gọi điện cho <span data-infocase="customer_gender">anh</span> để trao đổi về yêu cầu <b><span data-infocase="request">ZZZ</span> </b>cho
                                            <b><span data-infocase="customer_website">nhuahuongchi.com</span></b>.&nbsp;<br>
                                            Chúng tôi đã thử gọi cho bạn một lần nữa sau 10 phút, nhưng rất tiếc vẫn không thể gặp được <span data-infocase="customer_gender">anh</span>.&nbsp;<br>
                                            <br>
                                            Chúng tôi sẽ thử gọi cho <span data-infocase="customer_gender">anh</span> một lần cuối vào ngày làm việc tiếp theo. Nếu vẫn không thể liên lạc với <span data-infocase="customer_gender">anh</span>, chúng tôi sẽ đóng trường hợp này.&nbsp;<br>
                                            <br>
                                            <span data-infocase="customer_gender">anh</span> có thể mở lại trường hợp này bất cứ lúc nào theo một trong các cách sau:
                                        </p>
                                        <ul style="font-weight: normal;">
                                            <li>Trả lời email này để cho biết ngày và giờ thuận tiện cho <span data-infocase="customer_gender">anh</span>.</li>
                                            <li>Liên hệ với Người quản lý tài khoản của Google để nhờ họ giúp <span data-infocase="customer_gender">anh</span> liên hệ lại với chúng tôi.&nbsp;</li>
                                        </ul>
                                        <p style="font-weight: normal;">Cảm ơn <span data-infocase="customer_gender">anh</span>!</p>
                                        <p dir="auto">Trân trọng!</p>
                                        <p dir="auto"><span data-infosetting="your-name">Dong Mai</span> <br><i>Đội giải pháp kỹ thuật</i> <br><i>TDCX đại diện của Google</i></p>
                                    </div>
                                    <div style="font:normal 13px/17px Roboto,sans-serif;display:block">&nbsp;</div>
                                    <div style="font:normal 13px/17px Roboto,sans-serif;display:block"><em>Lưu ý: Nếu <span data-infocase="customer_gender">anh</span> cần tham chiếu tới vé hỗ trợ này trong tương lai, vui lòng sử dụng mã <span data-infocase="case_id">5-6594000033737</span>.</em></div>
                                </div>
                            </div>
                        </div>
                        <div class="_emailtemp-item" data-type="IN - Not Reachable">
                            <span class="_panel_btn _panel_btn--small _panel_btn--addtemplate">Insert</span>
                            <div class="_emailtemp-item__title">Đội giải pháp kỹ thuật - Thông báo đóng hỗ trợ kỹ thuật cho trường hợp [<span data-infocase="case_id">5-6594000033737</span>]</div>
                            <div class="_emailtemp-item__content">
                                <div id="email-body-content-top" style="width:100%">
                                    <div id="email-body-content-top-content" style="font:normal 13px/17px Roboto,sans-serif;display:block" dir="auto">
                                        <p><strong> </strong><span data-infocase="customer_gender" style="text-transform: capitalize;">Anh</span> <span data-infocase="customer_name">CUSTOMER NAME</span> thân mến!</p>
                                        <p>Đối với trường hợp <span data-infocase="case_id">5-6594000033737</span> cho <strong><span data-infocase="customer_website">nhuahuongchi.com</span></strong>, chúng tôi đã chờ <span data-infocase="customer_gender">anh</span> phản hồi để tiến hành việc triển khai.&nbsp; Rất tiếc, vì <span data-infocase="customer_gender">anh</span> không phản hồi, nên chúng tôi hiện đã đóng trường hợp này.&nbsp;</p>
                                        <p>Nếu vẫn muốn tiến hành việc triển khai này, <span data-infocase="customer_gender">anh</span> có thể tham khảo <a href="https://support.google.com/google-ads/gethelp" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;"><u>Trung tâm trợ giúp của Google</u></a> hoặc liên hệ với Người quản lý tài khoản của Google bất cứ lúc nào. Họ luôn sẵn sàng trợ giúp <span data-infocase="customer_gender">anh</span>!&nbsp;<br>
                                            Chúng tôi rất mong được tiếp tục hợp tác với <span data-infocase="customer_gender">anh</span> trong tương lai!&nbsp;
                                        </p>
                                        <div>
                                            <p><em>Nếu <span data-infocase="customer_gender">anh</span> muốn tìm hiểu thêm về tính năng Theo dõi lượt chuyển đổi ngoại tuyến, thì sau đây là một số đường liên kết đến các tài nguyên có giá trị mà <span data-infocase="customer_gender">anh</span> có thể thấy hữu ích!&nbsp;</em></p>
                                            <ul>
                                                <li aria-level="1"><a href="https://support.google.com/google-ads/answer/2998031" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;"><em><u>Giới thiệu về tính năng theo dõi lượt chuyển đổi ngoại tuyến</u></em></a></li>
                                                <li aria-level="1"><a href="https://support.google.com/google-ads/answer/7012522" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;"><em><u>Thiết lập tính năng theo dõi lượt chuyển đổi ngoại tuyến</u></em></a></li>
                                                <li aria-level="1"><a href="https://support.google.com/google-ads/answer/7014069" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;"><em><u>Nhập lượt chuyển đổi từ lượt nhấp vào quảng cáo trên Google Ads</u></em></a></li>
                                            </ul>
                                        </div>
                                        <p dir="auto">Trân trọng!</p>
                                        <p dir="auto"><span data-infosetting="your-name">Dong Mai</span> <br><i>Đội giải pháp kỹ thuật</i> <br><i>TDCX đại diện của Google</i></p>
                                    </div>
                                    <div style="font:normal 13px/17px Roboto,sans-serif;display:block">&nbsp;</div>
                                    <div style="font:normal 13px/17px Roboto,sans-serif;display:block"><em>Lưu ý: Nếu <span data-infocase="customer_gender">anh</span> cần tham chiếu tới vé hỗ trợ này trong tương lai, vui lòng sử dụng mã <span data-infocase="case_id">5-6594000033737</span>.</em></div>
                                </div>
                            </div>
                        </div>
                        <div class="_emailtemp-item" data-type="SO - Verification Not Needed">
                            <span class="_panel_btn _panel_btn--small _panel_btn--addtemplate">Insert</span>
                            <div class="_emailtemp-item__title">Đội giải pháp kỹ thuật - Thông báo cài đặt thành công cho trường hợp [<span data-infocase="case_id">5-6594000033737</span>]</div>
                            <div class="_emailtemp-item__content">
                                <div id="email-body-content-top" style="width:100%">
                                    <div id="email-body-content-top-content" style="font-variant: normal; font-weight: normal; font-stretch: normal; font-size: 13px; line-height: 17px; font-family: Roboto, sans-serif; display: block;" dir="auto">
                                        <p style="font-style: normal;"><span data-infocase="customer_gender" style="text-transform: capitalize;">Anh</span> <span data-infocase="customer_name">CUSTOMER NAME</span>&nbsp;
                                            thân mến!
                                        </p>
                                        <p style="font-style: normal;"><strong>Xin chúc mừng!&nbsp;</strong></p>
                                        <p dir="auto" style="font-style: normal;">Đối với trường hợp&nbsp; <span data-infocase="case_id">5-6594000033737</span>, chúng tôi rất vui mừng được thông báo rằng chúng tôi đã triển khai thành công <span data-infocase="request">ZZZ</span> trên trang web của <span data-infocase="customer_gender">anh</span> là <span data-infocase="customer_website">nhuahuongchi.com</span> và cũng nhận thấy thẻ này đang hoạt động theo thời gian thực.</p>
                                        <p style="font-style: normal;">Chúng tôi sẽ đóng yêu cầu này. Tuy nhiên, nếu tình hình của <span data-infocase="customer_gender">anh</span> thay đổi, vui lòng liên hệ với Người quản lý tài khoản của Google hoặc tham khảo <a href="https://support.google.com/" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;"><u>trung tâm trợ giúp</u></a>. Họ luôn sẵn sàng trợ giúp <span data-infocase="customer_gender">anh</span>!</p>
                                        <p style="font-style: normal;">Cảm ơn <span data-infocase="customer_gender">anh</span> đã hợp tác lâu dài với Google!&nbsp;</p>
                                        <p style="" dir="auto"><span style="font-style: normal;">Nếu <span data-infocase="customer_gender">anh</span> muốn tìm hiểu thêm, thì sau đây là một số đường liên kết dẫn đến các tài nguyên có giá trị liên quan đến việc Triển khai thẻ và nguồn cấp dữ liệu mua sắm. Các tài nguyên này có thể hữu ích để <span data-infocase="customer_gender">anh</span> sử dụng trong tương lai!</span></p>
                                        <p style="font-style: normal;"><em>Thẻ liên quan</em></p>
                                        <ul style="font-style: normal;">
                                            <li aria-level="1"><a href="https://developers.google.com/gtagjs" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;"><em><u>Hỗ trợ triển khai thẻ</u></em></a></li>
                                            <li aria-level="1"><a href="https://www.youtube.com/user/learnwithgoogle/playlists" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;"><em><u>Google Ads</u></em></a></li>
                                            <li aria-level="1"><a href="https://www.youtube.com/user/googleanalytics" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;"><em><u>Google Analytics&nbsp;</u></em></a></li>
                                        </ul>
                                        <p style="font-style: normal;"><em>Nguồn cấp dữ liệu mua sắm liên quan</em></p>
                                        <ul style="font-style: normal;">
                                            <li aria-level="1"><a href="https://www.google.com/retail/" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;"><em><u>Google cho Nhà bán lẻ&nbsp;</u></em></a></li>
                                            <li aria-level="1"><a href="https://www.google.com/retail/solutions/merchant-center/" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;"><em><u>Google Merchant Center</u></em></a></li>
                                            <li aria-level="1"><a href="https://support.google.com/merchants/answer/188924" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;"><em><u>Thiết lập tài khoản và nguồn cấp dữ liệu</u></em></a><em>&nbsp;</em></li>
                                            <li aria-level="1"><a href="https://support.google.com/merchants/topic/7294606" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;"><em><u>Tối ưu hoá nguồn cấp dữ liệu&nbsp;</u></em></a></li>
                                            <li aria-level="1"><a href="https://support.google.com/merchants/answer/9199328" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;"><em><u>Các nền tảng của Google</u></em></a></li>
                                        </ul>
                                        <p dir="auto" style="font-style: normal;">
                                        </p>
                                        <p style="font-style: normal;">Cảm ơn <span data-infocase="customer_gender">anh</span>!<br></p>
                                        <p dir="auto">Trân trọng!</p>
                                        <p dir="auto"><span data-infosetting="your-name">Dong Mai</span> <br><i>Đội giải pháp kỹ thuật</i> <br><i>TDCX đại diện của Google</i></p>
                                    </div>
                                    <div style="font:normal 13px/17px Roboto,sans-serif;display:block">&nbsp;</div>
                                    <div style="font:normal 13px/17px Roboto,sans-serif;display:block"><em>Lưu ý: Nếu <span data-infocase="customer_gender">anh</span> cần tham chiếu tới vé hỗ trợ này trong tương lai, vui lòng sử dụng mã <span data-infocase="case_id">5-6594000033737</span>.</em></div>
                                </div>
                            </div>
                        </div>
                        <div class="_emailtemp-item" data-type="NI - Awaiting Validation">
                            <span class="_panel_btn _panel_btn--small _panel_btn--addtemplate">Insert</span>
                            <div class="_emailtemp-item__title">Đội giải pháp kỹ thuật – Đợi xác minh luợt chuyển đổi - dữ liệu cho trường hợp [<span data-infocase="case_id">5-6594000033737</span>]</div>
                            <div class="_emailtemp-item__content">
                                <div id="email-body-content-top" style="width:100%">
                                    <div id="email-body-content-top-content" style="font-style: normal; font-variant: normal; font-stretch: normal; font-size: 13px; line-height: 17px; font-family: Roboto, sans-serif; display: block;" dir="auto">
                                        <p dir="auto"><span class="" style="font-weight: normal;"><span data-infocase="customer_gender" style="text-transform: capitalize;">Anh</span> <span data-infocase="customer_name">CUSTOMER NAME</span></span>
                                            thân mến!<br>
                                            <br>
                                            Cảm ơn <span data-infocase="customer_gender">anh</span> đã liên hệ với Nhóm giải pháp kỹ thuật về việc <b><span data-infocase="request">ZZZ</span></b>&nbsp;cho
                                            <b><span data-infocase="customer_website">nhuahuongchi.com</span></b>
                                        </p>
                                        <ul style="font-weight: normal;"></ul>
                                        <p style="font-weight: normal;">Hiện tại, chúng tôi đã hoàn tất việc triển khai và đang theo dõi trường hợp này để đảm bảo mọi thứ hoạt động đúng như dự kiến và mang lại kết quả mong muốn.<br>
                                            <br>
                                            <u><strong>Các bước tiếp theo</strong></u><br>
                                            Việc cài đặt sẽ được coi là <strong>đã hoàn tất thành công</strong> sau khi chúng tôi ghi nhận lượt hiển thị/lượt chuyển đổi đúng như dự kiến.&nbsp;<br>
                                            <br>
                                            Nếu việc triển khai không diễn ra như dự kiến, chúng tôi sẽ cố gắng giải quyết/điều tra vấn đề và liên hệ với <span data-infocase="customer_gender">anh</span> nếu cần.<br>
                                            <br>
                                            <em>Nếu <span data-infocase="customer_gender">anh</span> muốn tìm hiểu thêm, thì sau đây là một số đường liên kết dẫn đến các tài nguyên có giá trị liên quan đến việc Triển khai thẻ và nguồn cấp dữ liệu mua sắm. Các tài nguyên này có thể hữu ích để <span data-infocase="customer_gender">anh</span> sử dụng trong tương lai!<br>
                                                <br>
                                                Thẻ liên quan</em>
                                        </p>
                                        <ul style="font-weight: normal;">
                                            <li><u><em><a href="https://developers.google.com/gtagjs" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;">Hỗ trợ triển khai thẻ</a></em></u></li>
                                            <li><u><em><a href="https://www.youtube.com/user/learnwithgoogle/playlists" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;">Google Ads</a></em></u></li>
                                            <li><u><em><a href="https://www.youtube.com/user/googleanalytics" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;">Google Analytics</a></em></u></li>
                                        </ul>
                                        <p style="font-weight: normal;"><em>Nguồn cấp dữ liệu mua sắm liên quan</em></p>
                                        <ul style="font-weight: normal;">
                                            <li><u><em><a href="https://www.google.com/retail/" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;">Google cho Nhà bán lẻ</a></em></u></li>
                                            <li><u><em><a href="https://www.google.com/retail/solutions/merchant-center/" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;">Google Merchant Center</a></em></u></li>
                                            <li><u><em><a href="https://support.google.com/merchants/answer/188924" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;">Thiết lập tài khoản và nguồn cấp dữ liệu</a></em></u></li>
                                            <li><u><em><a href="https://support.google.com/merchants/topic/7294606?ref_topic=7294771" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;">Tối ưu hoá nguồn cấp dữ liệu</a>&nbsp;</em></u></li>
                                            <li><u><em><a href="https://support.google.com/merchants/answer/9199328" rel="noopener" target="_blank" class="ignore-globals" style="color: rgb(26, 115, 232); text-decoration-line: none;">Các nền tảng của Google</a></em></u></li>
                                        </ul>
                                        <p dir="auto" style="font-weight: normal;">
                                        </p>
                                        <p style="font-weight: normal;">Cảm ơn <span data-infocase="customer_gender">anh</span>!</p>
                                        <p dir="auto">Trân trọng!</p>
                                        <p dir="auto"><span data-infosetting="your-name">Dong Mai</span> <br><i>Đội giải pháp kỹ thuật</i> <br><i>TDCX đại diện của Google</i></p>
                                    </div>
                                    <div style="font:normal 13px/17px Roboto,sans-serif;display:block" dir="auto">&nbsp;</div>
                                    <div style="font:normal 13px/17px Roboto,sans-serif;display:block"><em>Lưu ý: Nếu <span data-infocase="customer_gender">anh</span> cần tham chiếu tới vé hỗ trợ này trong tương lai, vui lòng sử dụng mã <span data-infocase="case_id">5-6594000033737</span>.</em></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-panel="list-case">
                <div class="_panel__heading">
                    <div class="_panel__heading--group">
                        <span class="_panel__heading--close" data-btnaction="close_panel"><img src="https://www.svgrepo.com/show/315851/close.svg" alt="" srcset=""></span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="" srcset="">
                        <span class="_panel__heading--title">List Case</span>
                    </div>
                </div>
                <div class=" _panel__inner">
                    <ul class="_panel__caselist">
                    </ul>
                </div>
            </div>
        </div>
        <div class="_panel_group" data-group="toolbar">
            <div data-panel="toolbar" class="active">
                <div class="_panel__heading">
                    <div class="_panel__heading--group">
                        <span class="_panel__heading--close" data-btnaction="opentoolbar"><img src="https://www.svgrepo.com/show/315851/close.svg" alt="" srcset=""></span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="" srcset="">
                        <span class="_panel__heading--title">Toolbar</span>
                    </div>
                </div>
                <div class=" _panel__inner">
                    <span class="_panel_btn _panel_btn--small" data-btntoolaction="focus_case" title="High light and Mail in case">Focus Case <small> [Bo] </small></span>
                    <span class="_panel_btn _panel_btn--small" data-btntoolaction="extract_gtm_id" title="Get GTM ID in tagmanager.google.com">GTM ID</span>
                </div>
            </div>
        </div>
        <div class="_panel_group" data-group="opentiptutorial">
            <div data-panel="opentiptutorial" class="active">
                <div class="_panel__heading">
                    <div class="_panel__heading--group">
                        <span class="_panel__heading--close" data-btnaction="opentiptutorial"><img src="https://www.svgrepo.com/show/315851/close.svg" alt="" srcset=""></span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="" srcset="">
                        <span class="_panel__heading--title">Tip and Tutorial</span>
                    </div>
                </div>
                <div class=" _panel__inner">
                    <span id="_panel__blogs-search" class="_panel__blogs-search" contenteditable="true"></span>
                    <div class="_panel__blogs empty">
                        <div class="_panel__linear-progress small">
                            <div class="bar bar1"></div>
                            <div class="bar bar2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <form action="" method="post" id="formSettings">
        <div class="_panel_group" data-group="opensetting">
            <div data-panel="opensetting" class="active">
                <div class="_panel__heading">
                    <div class="_panel__heading--group">
                        <span class="_panel__heading--close" data-btnaction="opensetting"><img src="https://www.svgrepo.com/show/315851/close.svg" alt="" srcset=""></span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="" srcset="">
                        <span class="_panel__heading--title">Setting</span>
                    </div>
                </div>
                <div class=" _panel__inner">
                    <div class="_panel__linear-progress small">
                        <div class="bar bar1"></div>
                        <div class="bar bar2"></div>
                    </div>
                    <div class="_panel__form">
                        <div class="_panel__form--column">
                            <div class="_panel__topsticky_toolbar">
                                <div class="_panel__topsticky_toolbar-gr">
                                    <span class="_panel_btn _panel_btn--small _panel_btn--icon" data-btnaction="reload_panel">
                                        <img src="https://www.svgrepo.com/show/240005/sync.svg" alt="" srcset="">
                                        Update UI
                                    </span>
                                    <span class="_panel_btn _panel_btn--small" data-btnaction="toggle_minisize_panel">Mini</span>
                                    <span class="_panel_btn _panel_btn--small" data-btnaction="toggle_panel_darkmode">Darkmode</span>
                                    <span class="_panel_btn _panel_btn--small" data-btnaction="toggle_panel_horizon">Horizon</span>
                                </div>
                            </div>
                            <div class="_panel__form--panel" data-panel_title="Auto load code">
                                <label><input type="checkbox" name="auto_loadcode_vanbo" data-infosetting="auto_loadcode_vanbo" value="Focus cases"> Disable auto load code <small>(Author: Văn Bộ)</small></label>
                            </div>
                            <div class="_panel__form--panel" data-panel_title="Auto load GTM ID">
                                <label title="Show ID in tagmanager.google.com"><input type="checkbox" name="auto_loadgtmid" data-infosetting="auto_loadgtmid" value="Show GTM ID"> Disable Show GTM ID</label>
                            </div>
                        </div>
                    </div>
                    <div class="_panel__form">
                        <div class="_panel__form--column">
                            <div class="_panel__form--panel" data-panel_title="Your name">
                                <span class="_panel__form--label"><small>Your name: </small></span>
                                <input type="text" name="your-name" value="YOUR FULL NAME" data-infosetting="your-name">
                            </div>
                            <div class="_panel__form--panel" data-panel_title="Name">
                                <span class="_panel__form--label"><small>Name: </small></span>
                                <input type="text" name="your-shortname" value="YOUR SHORT NAME" data-infosetting="your-shortname">
                            </div>
                        </div>
                        <div class="_panel__form--column">
                            <div class="_panel__form--panel" data-panel_title="Sync Panel">
                                <span class="_panel__form--label"><small>Sync Enable: </small></span>
                                <input type="checkbox" name="sync_enable" data-infosetting="sync_enable" value="sync_enable">
                                <span class="_panel_btn _panel_btn--small" data-btnaction="sync_panel">Sync</span>
                            </div>
                        </div>
                    </div>
                    <div class="_panel__form">
                        <div class="_panel__form--column">
                            <div class="_panel__form--panel" data-panel_title="List keystorage">
                                <span class="_panel__form--label"><small>List keystorage: </small></span>
                                <ul class="list_keystorage">
                                    empty
                                </ul>
                            </div>
                            <div class="_panel__form--panel" data-panel_title="Save">
                                <button type="submit" action="save" class="_panel_btn _panel_btn--small">SAVE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
`;
