# Build

1. Install [web-ext](https://github.com/mozilla/web-ext)
2. Run `web-ext build --overwrite-dest`

# Installation

1. Open Firefox
2. Go to this url: [about:config](about:config)
3. Search for `xpinstall.signatures.required`
4. Change `xpinstall.signatures.required` to `false`
5. Go to this url: [about:addons](about:addons)
6. Go to `Extensions`
7. Click on the `Gear` icon
8. Click on `Install Add-on From File...`
9. Select the `.zip` file located in the folder [web-ext-artifacts](/web-ext-artifacts)