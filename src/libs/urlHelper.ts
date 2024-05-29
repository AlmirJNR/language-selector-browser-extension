import Tab = browser.tabs.Tab;

async function changeTabLanguage(tab: Tab, replacement: string | number) {
    if (tab.id === undefined || tab.url === undefined)
        throw new Error();

    // TODO: modify splitting logic to accept URL and website type from ts
    // const url = new URL(tab.url);
    // console.log(url);

    const firstSplit = tab.url.split("learn.microsoft.com");
    const secondSplit = firstSplit[1].split("/");
    secondSplit[1] = replacement.toString();
    const modifiedSecondSplit = secondSplit.join("/");
    await browser.tabs.update(tab.id, {url: `${firstSplit[0]}learn.microsoft.com${modifiedSecondSplit}`});
}

export {
    changeTabLanguage
};