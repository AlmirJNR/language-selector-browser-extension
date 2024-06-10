import Tab = browser.tabs.Tab;
import {Website} from "../types/website.js";

async function changeTabLanguage(tab: Tab, website: Website, languageIndex: number) {
    console.debug(tab, website, languageIndex);
    if (tab.id === undefined || tab.url === undefined)
        throw new Error();

    const url = new URL(tab.url);
    const paths = url.pathname.split("/").filter(x => x !== "");

    const language = website.languages[languageIndex];
    if (website.replaceInPathAt !== undefined && language.path !== undefined) {
        if (paths.some(x => website.languages.map(x => x.path).includes(x))) {
            paths[website.replaceInPathAt] = language.path;
        } else {
            paths.splice(website.replaceInPathAt, 0, language.path);
        }
    } else if (website.insertInPathAt !== undefined && language.path === undefined) {
        paths.splice(website.insertInPathAt, 1, "");
    }

    url.pathname = paths.join("/");
    await browser.tabs.update(tab.id, {url: url.toString()});
}

export {
    changeTabLanguage
};