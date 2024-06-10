import * as constants from "./constants.js";
import {Website} from "../types/website.js";

async function getWebsites() {
    const storageResponse = await constants.GLOBAL_STORAGE.get(constants.WEBSITES_STORAGE_KEY);
    return storageResponse[constants.WEBSITES_STORAGE_KEY] as Website[];
}

async function getWebsiteByTabUrl(tabUrl?: string) {
    const websites = await getWebsites();
    const websiteIndex = websites.findIndex(website => {
        return website.documentUrlPatterns.some(documentUrlPattern => {
            const sanitizedDocumentUrlPattern = documentUrlPattern.replaceAll("*", "").replaceAll(":", "").replaceAll("/", "");
            return tabUrl?.includes(sanitizedDocumentUrlPattern);
        });
    });
    return websites[websiteIndex];
}

async function addWebsites(toAdd: Website[]) {
    const websites = await getWebsites();
    if (websites === undefined) {
        return constants.GLOBAL_STORAGE.set({[constants.WEBSITES_STORAGE_KEY]: [...toAdd]});
    }

    return constants.GLOBAL_STORAGE.set({[constants.WEBSITES_STORAGE_KEY]: [...websites, ...toAdd]});
}

export {
    getWebsites,
    getWebsiteByTabUrl,
    addWebsites
}