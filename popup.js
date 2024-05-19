import {replaceUrlLanguagePath} from "./shared.mjs";

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    button.addEventListener("click", async event => {
        const tabs = await browser.tabs.query({active: true, currentWindow: true});
        const tab = tabs[0];
        const urlWithPreferredLanguage = replaceUrlLanguagePath(tab.url, event.target.id);
        await browser.tabs.update(tab.id, {url: urlWithPreferredLanguage});
    });
}