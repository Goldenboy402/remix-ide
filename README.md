# Browser-Solidity

Browser solidity is a browser based solidity compiler and IDE.

Visit [https://ethereum.github.io/browser-solidity](https://ethereum.github.io/browser-solidity) to use,
it will always deliver the latest version.

# Offline Usage

Full offline usage is currently not supported because the compiler is always
loaded via http. If you clone / download the repository, use the
`gh-pages` branch (otherwise you still have to build the application).

# Building

Many dependencies are only provided via npm:

    npm install    # fetch dependencies
	npm run build  # build application into build/app.js

Now point your browser to `index.html` to open the application.  

## Usage as as Chrome Extension

Browse to chrome://extensions/

Make sure 'Developer mode' has been checked. Then click 'Load unpacked extension...' to pop up a file-selection dialog. Select the `browser-solidity` folder, wherever it is placed on your computer.
