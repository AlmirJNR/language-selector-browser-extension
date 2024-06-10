# Build

1. Run `npm i`
2. Run `npm run build`

# Development

1. Run `npm run dev -- START_URL`
   - example values for START_URL:
     - https://www.freecodecamp.org/learn
     - https://learn.microsoft.com/en-us/training/

# Installation

1. Open Firefox
2. Go to this url: [about:config](about:config)
3. Search for `xpinstall.signatures.required` and change to `false`
4. Go to this url: [about:addons](about:addons)
5. Go to `Extensions`
6. Click on the `Gear` icon
7. Click on `Install Add-on From File...`
8. Select the `.zip` file located in the folder [web-ext-artifacts](/web-ext-artifacts)

# Usage

1. Open Firefox
2. Go to [learn microsoft](https://learn.microsoft.com/en-us/)
3. There are two usage options:
    - Right-click on the page, and you should see the option to change your language
    - Click on the extension icon, and you should see the option to change your language