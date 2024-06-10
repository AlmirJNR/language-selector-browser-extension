import {changeTabLanguage} from "../libs/urlHelper.js";
import {getWebsiteIdAndLanguageIndex, initContextMenus} from "../libs/contextMenusHelper.js";
import {getWebsites} from "../libs/storageHelper.js";

browser.runtime.onInstalled.addListener(initContextMenus);
browser.runtime.onStartup.addListener(initContextMenus);

browser.contextMenus.onClicked.addListener(async (info, tab) => {
    if (tab === undefined)
        throw new Error("Invalid tab");

    const websites = await getWebsites();
    const [websiteId, languageIndex] = getWebsiteIdAndLanguageIndex(info.menuItemId);
    const website = websites.find(x => x.id === websiteId);
    if (website === undefined)
        throw new Error(`Unable to find website by id: ${websiteId}`);

    await changeTabLanguage(tab, website, languageIndex);
});