import {changeTabLanguage} from "../libs/urlHelper.js";
import * as constants from "../libs/constants.js";

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    button.addEventListener("click", async event => {
        const tabs = await browser.tabs.query({active: true, currentWindow: true});
        const contextMenuId = (event.target as HTMLButtonElement).id;
        await changeTabLanguage(tabs[0], contextMenuId);

        for (const id of constants.CONTEXT_MENU_IDS) {
            await browser.contextMenus.update(id, {checked: id === contextMenuId});
        }
    });
}