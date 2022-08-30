// Saves options to chrome.storage
function save_options() {
  var country = document.getElementById('country').value;
  var youremail = document.getElementById('youremail').value;
  document.getElementById('c_country').innerHTML = country;
  console.log(country);
  chrome.runtime.sendMessage({message: country});
  
  	if(country == "Vietnam") {
		
		chrome.browserAction.setBadgeText({text: "VN"}); 
				
	}else if (country == "Thailand") {
		
		chrome.browserAction.setBadgeText({text: 'TH' });
		
		
	}else if (country == "China") {
		
		chrome.browserAction.setBadgeText({text: 'CN' });
		
	
	}else if (country == "Japan") {
		
		chrome.browserAction.setBadgeText({text: 'JP' });
		
	}else if (country == "Korea") {
		
		chrome.browserAction.setBadgeText({text: 'KR' });
		
	}
  

  chrome.storage.sync.set({
    mycountry: country, ouremail: youremail
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved, refresh your SF' ;
	setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}


function restore_options() {
	
	var y = "";

  chrome.storage.sync.get({mycountry: 'Thailand',ouremail: 'xxx@google.com'}, function(items) {
    document.getElementById('country').value = items.mycountry;
	document.getElementById('youremail').value = items.ouremail;
	console.log(items.ouremail);
	y = items.mycountry;
	window.superx = y;
	console.log(superx);
    document.getElementById('c_country').innerHTML = superx;
	chrome.runtime.sendMessage({message: country});	
	});
	}



document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
	



