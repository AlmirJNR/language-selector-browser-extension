import * as constants from "./constants.js";
import {Website} from "../types/website.js";
import {addWebsites, getWebsites} from "./storageHelper.js";

function buildContextMenuId(websiteId: string, languageIndex: number) {
    return `${websiteId}_${languageIndex}`;
}

function getWebsiteIdAndLanguageIndex(contextMenuId: string | number): [string, number] {
    const split = contextMenuId.toString().split("_");
    const websiteId = split[0];
    const languageIndex = Number(split[1]);
    return [websiteId, languageIndex];
}

async function getContextMenuIdsByWebsiteId(websiteId: string) {
    const websites = await getWebsites();
    const website = websites.find(value => value.id === websiteId) as Website;
    if (website === undefined)
        throw new Error(`Unable to find website by id: ${websiteId}`);

    const result = website.languages.map((_, i) => buildContextMenuId(websiteId, i));
    if (result === undefined)
        throw Error(`Website ${websiteId} not found`);

    return result;
}

async function initContextMenus() {
    const abortController = new AbortController();
    const timeout = setTimeout(abortController.abort, 5_000);

    try {
        const result = await fetch(constants.FETCH_DATA_URL, {signal: abortController.signal});
        const websites = await result.json() as Website[];
        await addWebsites(websites);

        for (const website of websites) {
            for (let i = 0; i < website.languages.length; i++) {
                const language = website.languages[i];
                const createdContextMenuId = browser.contextMenus.create({
                    id: buildContextMenuId(website.id, i),
                    title: language.name,
                    contexts: ["all"],
                    documentUrlPatterns: website.documentUrlPatterns,
                    type: "radio"
                });
                const shouldCheck = constants.NAVIGATOR_LANGUAGES.some(x => language.locale.includes(x));
                await browser.contextMenus.update(createdContextMenuId, {checked: shouldCheck});
            }
        }
    } catch (e) {
        // this catch is necessary since
        // the browser extension development mode
        // will not log any errors that happens here
        console.error(e);
    } finally {
        clearTimeout(timeout);
    }
}

export {
    buildContextMenuId,
    getWebsiteIdAndLanguageIndex,
    getContextMenuIdsByWebsiteId,
    initContextMenus
}