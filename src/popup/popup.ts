import {changeTabLanguage} from "../libs/urlHelper.js";
import {getActiveTab} from "../libs/tabsHelper.js";
import {getWebsiteByTabUrl} from "../libs/storageHelper.js";
import {getContextMenuIdsByWebsiteId, getWebsiteIdAndLanguageIndex} from "../libs/contextMenusHelper.js";

const activeTab = await getActiveTab();
const website = await getWebsiteByTabUrl(activeTab.url);
const contextMenuIds = await getContextMenuIdsByWebsiteId(website.id);
const buttonsContainer = document.getElementById("button-container") as HTMLDivElement;
for (const contextMenuId of contextMenuIds) {
    const [_, languageIndex] = getWebsiteIdAndLanguageIndex(contextMenuId);
    const button = document.createElement("button");
    button.id = contextMenuId;
    button.innerText = website.languages[languageIndex].name;

    button.addEventListener("click", event => handleButtonClick(event, languageIndex));
    buttonsContainer.appendChild(button);
}

async function handleButtonClick(event: MouseEvent, languageIndex: number) {
    await changeTabLanguage(activeTab, website, languageIndex);
    for (const contextMenuId of contextMenuIds) {
        const eventTarget = event.target as HTMLButtonElement;
        await browser.contextMenus.update(contextMenuId, {checked: eventTarget.id === contextMenuId});
    }
}