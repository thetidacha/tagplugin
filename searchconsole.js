$( document ).ready(function() {
    
        chrome.storage.sync.get({ mytext: "test" }, function(thetext) {
            var stext = thetext.mytext;
            console.log("serach console test");
            $("#phSearchInput").val(stext);
            $("#phSearchInput").focus();
            $('#phSearchInput_autoCompleteBoxId').css("display", "block")
            $('#phSearchInput_autoCompleteRowId_0 > span > span.queryText').trigger('click');
          });
    

});

