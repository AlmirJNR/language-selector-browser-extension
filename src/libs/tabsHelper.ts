async function getActiveTab() {
    const queriedTabs = await browser.tabs.query({active: true, currentWindow: true});
    return queriedTabs[0];
}

export {
    getActiveTab
}