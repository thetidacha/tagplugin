chrome.storage.sync.get({mycountry: 'thailand',ouremail: 'xxx@google.com'}, function(result) {
console.log('Value currently is ' + result.mycountry);

	if(result.mycountry == "Vietnam") {
		
		
		console.log('Value currently is ' + result.mycountry + 'in IF ELSE') ;
		var myemail = result.ouremail;
		var x = document.createElement("p");
		x.setAttribute("id", "myspanemail");
		document.body.appendChild(x); 
		document.getElementById("myspanemail").innerHTML = myemail;
		
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-T5B9283');
		
	}else if (result.mycountry == "Thailand") {
		
		
		console.log('Value currently is ' + result.mycountry + 'in IF ELSE') ;
		var myemail = result.ouremail;
		var x = document.createElement("p");
		x.setAttribute("id", "myspanemail");
		document.body.appendChild(x); 
		document.getElementById("myspanemail").innerHTML = myemail;
		
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-5GHNQX3');

	}else if (result.mycountry == "China") {

		console.log('Value currently is ' + result.mycountry + 'in IF ELSE') ;
		var myemail = result.ouremail;
		var x = document.createElement("p");
		x.setAttribute("id", "myspanemail");
		document.body.appendChild(x); 
		document.getElementById("myspanemail").innerHTML = myemail;
		
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-N4C9XG8');

	}else if (result.mycountry == "Japan") {
		
		
		console.log('Value currently is ' + result.mycountry + 'in IF ELSE') ;
		var myemail = result.ouremail;
		var x = document.createElement("p");
		x.setAttribute("id", "myspanemail");
		document.body.appendChild(x); 
		document.getElementById("myspanemail").innerHTML = myemail;
		
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-T67C9ZK');

	}else if (result.mycountry == "Korea") {
		
		
		console.log('Value currently is ' + result.mycountry + 'in IF ELSE') ;
		var myemail = result.ouremail;
		var x = document.createElement("p");
		x.setAttribute("id", "myspanemail");
		document.body.appendChild(x); 
		document.getElementById("myspanemail").innerHTML = myemail;
		
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-TBMND42');

	}else if (result.mycountry == "Indonesia") {
		
		
		console.log('Value currently is ' + result.mycountry + 'in IF ELSE') ;
		var myemail = result.ouremail;
		var x = document.createElement("p");
		x.setAttribute("id", "myspanemail");
		document.body.appendChild(x); 
		document.getElementById("myspanemail").innerHTML = myemail;
		
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-NG2RK43');

	}else if (result.mycountry == "Other") {
		
		
		console.log('Value currently is ' + result.mycountry + 'in IF ELSE') ;
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer','GTM-THHTK2M');	

	}
			  
		  
});
		






var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
var s2 = document.createElement('script');
s2.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s2);
s2.onload = function() {
var s3 = document.createElement('script');
s3.src = chrome.extension.getURL('script.js');
(document.head||document.documentElement).appendChild(s3);
};
};


if (window.location.hostname === "cases.connect.corp.google.com" && window.location.href.indexOf("#/case/") > - 1) {


function createDomWithText(domText, text, id) {
    const dom = document.createElement("button");
    dom.innerText = domText
    dom.id = id
    document.querySelector(".case-note").prepend(dom);

    dom.addEventListener("click", () => {
        document.querySelector(".editor > div > div").innerHTML += text;
    })
}


// Select the node that will be observed for mutations
var targetNode = document.body;

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
var callback = function(mutationList, observer) {
    for (var i = 0; i < mutationList.length; i++) {
        if (mutationList[i].addedNodes.length > 0) {
            for (var j = 0; j < mutationList[i].addedNodes.length; j++) {
                if (mutationList[i].addedNodes[j]) {
                 if (mutationList[i].addedNodes[j].classList.length > 0) {
                     var classes = Array(mutationList[i].addedNodes[j].classList);
                     if (classes.indexOf("case-note")) {
                         if (document.querySelector("#pre-call") === null && document.querySelector("#on-call") === null) {
                           createDomWithText("Precall", `<ul dir="auto"><li>Emails or feedback from Advertiser/Seller (including seller request to join the call)[C]&nbsp;</li><li>Call being made in business hours[C]</li><li>Program ,task type (including special instructions),advertiser need and readiness [C]</li><li>Related cases [C]</li><li>CMS being used  [C]</li><li>Gtag/GTM/GA already exists  [C] (NA applicable only for Shopping or OCT cases)</li></ul>`, "pre-call");
createDomWithText("OnCall", `<p dir="auto">* Speakeasy ID :&nbsp;<br>OnCall/note :&nbsp;<br>* Conversion ID:&nbsp;<br>Survey pitched<br>=================================================<br>* Q+ update:Sub-status:&nbsp;<br>* Notes: (in case code already implemented)<br>Guidelines:&nbsp;<br>Track tasks for IP cases&nbsp;<br>Track multiple CIDs:&nbsp;<br>Follow up with:&nbsp;<br>* Date: dd/mm/yyyy<br>Next cause of action:&nbsp;<br></p>`, "on-call");
                         }
                     }
                         
                 }
                }
            }
        }
            
        
    }
};

// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observe
}


