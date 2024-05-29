import {changeTabLanguage} from "../libs/urlHelper.js";
import * as constants from "../libs/constants.js";

browser.runtime.onInstalled.addListener(async () => {
    // browser.runtime.onStartup.addListener(() => {
    // TODO: Add logic to re-fetch data from static json
    // });

    browser.contextMenus.create({
        id: constants.ENGLISH_CONTEXT_MENU_ID,
        title: "English",
        contexts: ["all"],
        documentUrlPatterns: [constants.LEARN_MICROSOFT_URL_PATTERN],
        type: "radio"
    });
    browser.contextMenus.create({
        id: constants.PORTUGUESE_CONTEXT_MENU_ID,
        title: "Português",
        contexts: ["all"],
        documentUrlPatterns: [constants.LEARN_MICROSOFT_URL_PATTERN],
        type: "radio"
    });

    if (constants.CONTEXT_MENU_IDS.includes(constants.NAVIGATOR_LANGUAGE))
        await browser.contextMenus.update(constants.NAVIGATOR_LANGUAGE, {checked: true});
});

browser.contextMenus.onClicked.addListener(async (info, tab) => {
    if (tab === undefined)
        throw new Error("Invalid tab");

    await changeTabLanguage(tab, info.menuItemId);
});