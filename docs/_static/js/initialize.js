// Dependencies: ./utils.js

let mode = getColorMode()
const loadedSvgs = {}

const onDOMContentLoaded = () => {
  preloadFonts();
  rearrangeDom();
  updateEditButtonLabel();
  preloadColorModeIcons();
  cleanSearchInput();
  addHrUnderSearchForm();
  updateMode();
  buildHeader();
  addFooterNote();
  updateFooterButtonIcons();
  toggleMobileMenu({ expanded: false });
  setTimeout(updateFlyoverMenu, 100);
}

function main() {
  document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
  document.addEventListener("click", handleGeneralClick);
  document.addEventListener("keydown", handleKeyDown);
}

main()
