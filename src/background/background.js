import {changeTabLanguage} from "../libs/urlHelper.mjs";
import * as constants from "../libs/constants.mjs";

browser.runtime.onInstalled.addListener(async () => {
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
    await changeTabLanguage(tab, info.menuItemId);
});