// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
/*   chrome.storage.sync.set({'sfqc': []}, function() {
    console.log('Salesforce QC array', chrome.storage.sync.get(['sfqc'], function(){}));
  }); */
    chrome.storage.local.set({'authEmail': []}, function() {
chrome.storage.local.get(['authEmail'], function(e){console.log('auth email', e)});
  });
     chrome.storage.local.set({'sfqc': []}, function() {
    console.log('Salesforce QC array', chrome.storage.local.get(['sfqc'], function(){}));
  });
      setUpContextMenus();

/*     chrome.storage.sync.set({'impqc': []}, function() {
    console.log('Implementation QC array', chrome.storage.sync.get(['impqc'], function(){}));
  }); */

/*   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  }); */
});

// Holds the data structure for all the context menus used in the app
var CONTEXT_MENU_CONTENTS = {
  forSelection: [
    'SFsearch','icsSearch','gCasesSearch', 'gCasesSearch wide'
  ]
}

function setUpContextMenus() {


  CONTEXT_MENU_CONTENTS.forSelection.forEach(function(commandId) {

    chrome.contextMenus.create( {
      title: 'Open "%s" in '+commandId,
      id: commandId,
      contexts: ['selection']
    });
  });


}





chrome.contextMenus.onClicked.addListener(function(itemData) {
 		 if(itemData.menuItemId == 'SFsearch'){
			 console.log('infomenuitem match');
			 chrome.tabs.create({'url': 'https://smbsalesimplementation.my.salesforce.com/_ui/search/ui/UnifiedSearchResults?searchType=2&sen=0F9&sen=a04&sen=a0s&sen=a1W&sen=a0X&sen=a0z&sen=a09&sen=00O&sen=001&sen=003&sen=a0D&sen=500&sen=005&sen=a0l&str='+itemData.selectionText}, function(tab) {
                 
                 chrome.tabs.update(tab.id, {active : true}, function(){})
        // Tab opened.
    });
			 
		 }
    		 if(itemData.menuItemId == 'icsSearch'){
			 				   document.execCommand("copy", false, null);

			 console.log('infomenuitem match');
			 chrome.tabs.create({'url': 'https://awics.corp.google.com/ics/go?destPage=campaignSummary&bestGuess='+itemData.selectionText}, function(tab) {
				 var createdtab = tab.id;

        // Tab opened.
		chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){
                 chrome.tabs.update(tab.id, {active : true}, function(){})
/* 			if(createdtab == tabId && tab.status == 'complete'){console.log(tabId, tab);
			        chrome.tabs.executeScript(createdtab, { 
            code: 'alert("'+'hello'+'")'
        });

			
			
			} */
			
			
		});

		
		
    });
			 
		 }
    		 if(itemData.menuItemId == 'gCasesSearch'){
			 				   document.execCommand("copy", false, null);

			 console.log('infomenuitem match');
			 chrome.tabs.create({'url': 'https://cases.corp.google.com/Client.html#e'+itemData.selectionText}, function(tab) {
				 var createdtab = tab.id;

        // Tab opened.
                 chrome.tabs.update(tab.id, {active : true}, function(){})
		chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){			
			
		});

		
		
    });
			 
		 }
			if(itemData.menuItemId == 'gCasesSearch wide'){
			 				   document.execCommand("copy", false, null);

			 console.log('infomenuitem match');
			 chrome.tabs.create({'url': 'https://cases.corp.google.com/Client.html#c*'+itemData.selectionText+'*'}, function(tab) {
				 var createdtab = tab.id;

        // Tab opened.
                 chrome.tabs.update(tab.id, {active : true}, function(){})
		chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab){			
			
		});

		
		
    });
			 
		 }
});
var tab2id;
var casesTabId;
var advName;
var advWebsites, taskTypes;
var authtext = '尊敬的'+advName+' ，<br>您好！恭喜您已成功在 '+advWebsites+' 上设置了 '+taskTypes+'。这样做有助于您跟踪自己的广告系列带来的销售额和转化次数。<br><br>通话时，我确保了相应代码已成功放到正确的位置上。<br><br>如果您想详细了解 Google Ads，您可以随时咨询您的 Google 客户经理。<br><br><br>此致<br><br>Hui Shen Tin<br>代码执行团队敬上';

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "casesConnect");
  port.onMessage.addListener(function(msg) {
    if (msg.request == "authEmail"){
		
	chrome.storage.local.get(['authEmail','gCasesID','cid','advEmail','amEmail','emailSubject'], function(e){console.log(e);port.postMessage({from: "background", type: 'authEmail', object: e});});
      
		
		
	}

  });

});
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
	console.log('backgroundjs ', message.from, message.message)

    if (message.from == "script1" && message.message == 'generateAuth'){		
        //chrome.tabs.sendMessage(tab2id,message);
		advName = message.advName;
		advWebsites = message.advWebsites;
		taskTypes = message.taskTypes;
			chrome.storage.local.set({'authEmail': authtext,'cid':message.cid, amEmail:message.amEmail,advEmail: message.advEmail,'gCasesID':message.gCasesID, 'emailSubject':'['+message.cid.substring(0,7)+'-XXXX]'+' 代码已经成功安装'}, function() {
chrome.storage.local.get(['authEmail','gCasesID','cid','advEmail','gCasesID','amEmail'], function(e){console.log('data from case', e)});
	

  });
		chrome.tabs.query({url : 'https://cases.corp.google.com/*'}, function(tab){
			console.log(tab);
			if(tab.length == 0){
						chrome.tabs.create({url:message.url}, function(tab) {
			casesTabId = tab.id;

    });
			}else if(Array.isArray(tab)){			chrome.tabs.update(tab[0].id, {active : true}, function(){}) }

		})


	chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // make sure the status is 'complete' and it's the right tab
	//console.log(changeInfo, tab);
	if(typeof changeInfo.title != 'undefined'){
		    if (tab.url.indexOf('cases.corp') != -1 && changeInfo.title.indexOf('Cases - ') != -1) {
        chrome.tabs.executeScript(null, { 
            code: ''
        });
    }
	}
});
		
    }else if(message.from == "script1" && message.message == 'storeData'){
					chrome.storage.local.set({'authEmail': 'Authorization Email start for ' + message.cid,'cid':message.cid, amEmail:message.amEmail,advEmail: message.advEmail,'gCasesID':message.gCasesID}, function() {
				chrome.storage.local.get(['authEmail','gCasesID','cid','advEmail','gCasesID','amEmail'], function(e){console.log('data from case', e)});
	

			});
		
		
	}else if(message.from == "script1" && message.message == 'hello!'){
				chrome.tabs.query({url : message.url}, function(tab){
			console.log(tab);
			if(tab.length == 0){
						chrome.tabs.create({url:message.url}, function(tab) {
			//casesTabId = tab.id;

			});
			}else if(Array.isArray(tab)){			chrome.tabs.update(tab[0].id, {active : true}, function(){}) }

		});
		
		
	}
});
