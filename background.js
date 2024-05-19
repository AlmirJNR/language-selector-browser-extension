browser.runtime.onInstalled.addListener(async () => {
    browser.contextMenus.create({
        id: "en-us",
        title: "English",
        contexts: ["all"],
        documentUrlPatterns: ["*://learn.microsoft.com/*"],
        type: "radio"
    });
    browser.contextMenus.create({
        id: "pt-br",
        title: "Português",
        contexts: ["all"],
        documentUrlPatterns: ["*://learn.microsoft.com/*"],
        type: "radio"
    });

    await browser.contextMenus.update(navigator.language.toLowerCase(), {checked: true});
});

browser.contextMenus.onClicked.addListener(async (info, tab) => {
    let firstSplit = tab.url.split("learn.microsoft.com");
    let secondSplit = firstSplit[1].split("/");
    secondSplit[1] = info.menuItemId;
    let modifiedSecondSplit = secondSplit.join("/");
    await browser.tabs.update(tab.id, {url: `${firstSplit[0]}learn.microsoft.com${modifiedSecondSplit}`});
});