export function replaceUrlLanguagePath(url, replacement) {
    const firstSplit = url.split("learn.microsoft.com");
    const secondSplit = firstSplit[1].split("/");
    secondSplit[1] = replacement;
    const modifiedSecondSplit = secondSplit.join("/");
    return `${firstSplit[0]}learn.microsoft.com${modifiedSecondSplit}`;
}