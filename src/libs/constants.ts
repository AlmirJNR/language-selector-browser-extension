const FETCH_DATA_URL = "https://raw.githubusercontent.com/AlmirJNR/language-selector-browser-extension/main/websites.json";
const WEBSITES_STORAGE_KEY = "web-sites";
const GLOBAL_STORAGE = browser.storage.local;

const NAVIGATOR_LANGUAGES = navigator.languages.map(x => x.toLowerCase());

export {
    FETCH_DATA_URL,
    WEBSITES_STORAGE_KEY,
    GLOBAL_STORAGE,
    NAVIGATOR_LANGUAGES
};