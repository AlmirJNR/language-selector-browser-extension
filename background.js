import {replaceUrlLanguagePath} from "./shared.mjs";

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
    const urlWithPreferredLanguage = replaceUrlLanguagePath(tab.url, info.menuItemId);
    await browser.tabs.update(tab.id, {url: urlWithPreferredLanguage});
});