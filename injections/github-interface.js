/**
 * Gets added as preLoadScript via electron-platform
 * or devtools when url is https://*.github.com and github.com as also *github*
 */
const currentUrl = globalThis.window.location;
const currentDomain = globalThis.window.location.hostname;

const domainToAppNameMap = {
  'github.com': 'main',
  'raw.githubusercontent.com': 'raw',
};

const apps = {
  main() {
    // ....
  },
  raw() {
    // ....
  },
}
