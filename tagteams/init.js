chrome.storage.sync.get({ mycountry: "thailand", ouremail: "xxx@google.com" },
function (result) {
    window.dataTagteam.panel_div = vi_panel_div;
    window.dataTagteam.api_blog = vi_api_blog;
    window.dataTagteam.language = vi_language;
    window.dataTagteam.sendFirstEmail = () => { vi_sendFirstEmail() } ;

    if (result.mycountry == "Vietnam") {
        window.dataTagteam.language = vi_language;
        window.dataTagteam.panel_div = vi_panel_div;
        window.dataTagteam.api_blog = vi_api_blog;

        // Focus case code vanbo
        window.dataTagteam.tagteamFocusCase = () => { vi_TagteamFocusCase() } ;
        window.dataTagteam.sendFirstEmail = () => { vi_sendFirstEmail() } ;
    }

    if (result.mycountry == "Japan") {
        window.dataTagteam.language = ja_language;
        window.dataTagteam.panel_div = ja_panel_div;
        
        // Focus case code vanbo
        window.dataTagteam.tagteamFocusCase = () => { ja_TagteamFocusCase() } ;
    }
    tagTeamTDCXLoad();
}
);