browser.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    console.log(`MESSAGE: ${message}`);
    console.log(`SENDER: ${sender}`);

    return "Hi from popup script";
});