$(window).on('load', function() {
    console.log("ready");

 
setInterval(function refreshme() {
$("#00B1Q000008M6UL_refresh").trigger("click");
    console.log("clicked");
    var d = new Date();
    var h = d.getHours() * 60;
    var m = d.getMinutes();
    var current_time = h + m;
    console.log(current_time);
    
        $("div[id *= '00N3600000O1kkk']").each(function(index) {

        var Time = jQuery(this).text();
        var Time_tmp0 = Time.split(" ");
        var Time_tmp = Time_tmp0[1].substr(0, Time_tmp0[1].indexOf(":"));
        var Time_int = parseInt(Time_tmp, 10);
        var Time_min = Time_int * 60;
        var mycall = Time_min - current_time;
        console.log(mycall + " " + Time_min + " " + current_time);
        console.log("pushmelater");

        if (mycall < 15 && mycall > 11) {
		  console.log("pushmenow");
		  chrome.runtime.sendMessage({textyou: "15min"});
		  
        }
        if (mycall < 11 && mycall > 6) {
          console.log("pushmenow");
		  chrome.runtime.sendMessage({textyou: "10min"});

        }
        if (mycall < 6 && mycall > -1) {
          console.log("pushmenow");
		  chrome.runtime.sendMessage({textyou: "5min"});
         
        }

      });
  
return refreshme;
}(), 300000);

});

/* chrome.runtime.onMessage.addListener (
    function (request, sender, sendResponse) {
        console.log("test2");
        if (request.Message == "HelloThere") {
            console.log("gotit");
			var found = false;
			var tabId;
			chrome.tabs.query({}, function (tabs) {
				for (var i = 0; i < tabs.length; i++) {
					if (tabs[i].url.search("smbsalesimplementation.my.salesforce.com/console") > -1){
						found = true;
						tabId = tabs[i].id;
					}
				}
				if (found == false){
					alert("wrong");
				} else {
					chrome.tabs.update(tabId, {drawAttention: true});
				}
    });
            
        }
        else {
            console.log("Did not receive the response!!!")
        }
    }
); */