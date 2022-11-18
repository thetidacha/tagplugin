// ==== VARIABLE GLOBAL ====
window.dataTagteam = window.dataTagteam || {};




// ==== LIB ====
function loadCaseDatabaseByID(case_id) {
    if (dataStatus.case_list) {
        for (let index = 0; index < dataStatus.case_list.length; index++) {
            var item = dataStatus.case_list[index];
            if (item.case_id === case_id) {
                return item;
                break;
            }
        }
    }

    return false;
}


function fallbackCopyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}

// getOnlyCaseId
function getOnlyCaseId(_string) {
    try {
        var _regex = /[0-9]{1}[-][0-9]{13}/g;
        _string = _regex.exec(_string);
        if (_string[0]) {
            return _string[0];
        }
        return false;
    } catch (error) {
        return false;
        console.error(error);
    }
    return false;
}

// Format Again Ads ID
function reformatAdsId(str_adsid) {
    return str_adsid
        .replace(/\D+/g, '')
        .replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-') + "T" + [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds())
    ].join(':');
}



// Format again datetime by zone
function getDataTimeFormat(_datestring) {
    try {
        var _regex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?Z?/g;
        // var _regex = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?/g;
        _datestring = _regex.exec(_datestring);
        if (_datestring[0]) {
            var dateTime = new Date(_datestring[0]);
            return formatDate(dateTime);
            // return _datestring[0];
        }
    } catch (error) {
        return false;
    }
    return false;
}
// ====
// Toggle Class
// ====
function toggleClass(_class, _elm) {
    if (_elm.classList.contains(_class)) {
        _elm.classList.remove(_class);
        return false;
    } else {
        _elm.classList.add(_class);
        return true;
    }
}

// ====
// wait4Elem
// ====

function wait4Elem(selector) {
    return new Promise(function (resolve, reject) {
        var el = document.querySelector(selector);
        if (el) {
            resolve(el);
            return;
        }
        new MutationObserver(function (mutationRecords, observer) {
            // Query for elements matching the specified selector
            Array.from(document.querySelectorAll(selector)).forEach(function (element) {
                resolve(element);
                //Once we have resolved we don't need the observer anymore.
                observer.disconnect();
            });
        }).observe(document.documentElement, {
            childList: true,
            subtree: true
        });
    });
}

// ====
// Check Input Email Inbox
// ====
function checkInputEmailInbox(){
    var _caseid_elm = document.querySelector('[debug-id="case-id"] .case-id');
    if(_caseid_elm) {
        var caseload = loadCaseDatabaseByID(_caseid_elm.innerText);
        if(caseload) {
            console.log(caseload);
            var unmaskbutton = document.querySelectorAll('.write-cards-wrapper:not([style*="display:none"]):not([style*="display: none"]) card.write-card.is-top .unmask-button');
            if(unmaskbutton.length) {
                unmaskbutton.forEach(function (elm) {
                    elm.click();
                });
            }

            var recheckand_alert = () => {
                setTimeout(function(){
                    var unmaskbutton = document.querySelectorAll('.write-cards-wrapper:not([style*="display:none"]):not([style*="display: none"]) card.write-card.is-top .unmask-button');
                    if(unmaskbutton.length) {
                        console.log('recheckand_alert');
                        recheckand_alert();
                    }
                    
                    var _email_input_to = document.querySelector('.write-cards-wrapper:not([style*="display:none"]):not([style*="display: none"]) card.write-card.is-top email-address-input.input.to');
                    var _email_input_cc = document.querySelector('.write-cards-wrapper:not([style*="display:none"]):not([style*="display: none"]) card.write-card.is-top email-address-input.input.cc');
                    var _email_input_bcc = document.querySelector('.write-cards-wrapper:not([style*="display:none"]):not([style*="display: none"]) card.write-card.is-top email-address-input.input.bcc');

                    if(_email_input_to.innerText.includes(caseload.customer_email) === false) {
                        _email_input_to.style.backgroundColor = "red";
                        alert("To => sai / thiếu");

                    }

                    if(_email_input_cc.innerText.includes(caseload.am_email) === false) {
                        _email_input_cc.style.backgroundColor = "red";
                        alert("CC => sai / thiếu rồi");

                    }

                    if(caseload.am_isgcc) {
                        if(_email_input_bcc.innerText.includes(caseload.am_email) === false) {
                            _email_input_bcc.style.backgroundColor = "red";
                            alert("BCC => sai / thiếu rồi");

                        }
                    }

                }, 1000)
            }
            
        }
    }
}
// =====
// textAreaAdjust
// Auto height textarea
// ====
function textAreaAdjust(elm) {
    elm.style.height = "auto";
    elm.style.height = elm.scrollHeight + "px";
}

function tagteam_showGTMID() {
    console.log("tagteam_showGTMID", 1);
    wait4Elem("gtm-container-public-id").then(() => {
        
        console.log("tagteam_showGTMID", 2);
        var gtmpublish = document.querySelector("gtm-container-public-id");
        var gtmclone = document.querySelector(".gtm-clone");
        if(gtmpublish && !gtmclone) {
            console.log("tagteam_showGTMID", 3);
            var gtm_id = gtmpublish.innerText.trim();
            gtmpublish.insertAdjacentHTML("afterEnd", `<span class="gtm-clone" style="font-size: 14px;border: 1px solid #ccc;margin: 10px;padding: 10px;background: #fff;box-shadow: 0 0 17px #ccc;display: inline-block;line-height: 1;text-align: left;"><small style="user-select: none; display: block; color: #888; font-size: 70%; ">Copy below</small><span style=" user-select: all; margin: 7px 0; display: block; ">${gtm_id}</span></span>`)
        }
    });
    
}
