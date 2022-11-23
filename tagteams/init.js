chrome.storage.sync.get({ mycountry: "thailand", ouremail: "xxx@google.com" },
function (result) {

    if (result.mycountry == "Vietnam") {
        window.dataTagteam.language = vi_language;
        window.dataTagteam.panel_div = vi_panel_div;
        window.dataTagteam.api_blog = vi_api_blog;

        // Focus case code vanbo
        window.dataTagteam.tagteamFocusCase = () => { vi_TagteamFocusCase() } ;
        window.dataTagteam.sendFirstEmail = () => { vi_sendFirstEmail() } ;

        tagTeamTDCXLoad();
    }

    // // Update file overwrite /tagteams/groups
    // if (result.mycountry == "Japan") {
        // window.dataTagteam.language = ja_language;
        // window.dataTagteam.panel_div = ja_panel_div;
        // window.dataTagteam.api_blog = ja_api_blog;

        // // Focus case code vanbo
        // window.dataTagteam.tagteamFocusCase = () => { ja_TagteamFocusCase() } ;
        // window.dataTagteam.sendFirstEmail = () => { ja_sendFirstEmail() } ;
        
        // tagTeamTDCXLoad();
    // }


    // // Update file overwrite /tagteams/groups
    // if (result.mycountry == "Thailan") {
        // window.dataTagteam.language = ja_language;
        // window.dataTagteam.panel_div = ja_panel_div;
        // window.dataTagteam.api_blog = ja_api_blog;

        // // Focus case code vanbo
        // window.dataTagteam.tagteamFocusCase = () => { ja_TagteamFocusCase() } ;
        // window.dataTagteam.sendFirstEmail = () => { ja_sendFirstEmail() } ;
        
        // tagTeamTDCXLoad();
    // }
    
}
);