async function changeTabLanguage(tab, replacement) {
    const firstSplit = tab.url.split("learn.microsoft.com");
    const secondSplit = firstSplit[1].split("/");
    secondSplit[1] = replacement;
    const modifiedSecondSplit = secondSplit.join("/");
    await browser.tabs.update(tab.id, {url: `${firstSplit[0]}learn.microsoft.com${modifiedSecondSplit}`});
}

export {
    changeTabLanguage
};