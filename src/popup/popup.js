import {changeTabLanguage} from "../libs/urlHelper.mjs";
import * as constants from "../libs/constants.mjs";

const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
    button.addEventListener("click", async event => {
        const tabs = await browser.tabs.query({active: true, currentWindow: true});
        const contextMenuId = event.target.id;
        await changeTabLanguage(tabs[0], contextMenuId);

        for (const id of constants.CONTEXT_MENU_IDS) {
            await browser.contextMenus.update(id, {checked: id === contextMenuId});
        }
    });
}