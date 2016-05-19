var subTab = null;

browser.tabs.onCreated.addListener(function (tab) {
    subTab = tab;
});

browser.tabs.onUpdated.addListener(function (tab, changeInfo, tab) {
    if (tab == subTab && changeInfo.status == "complete") {
        browser.tabs.update(
            tab.id,
            {
                url: browser.extension.getURL(
                    "addon/index.html"
                )
            }
        );
    }
});