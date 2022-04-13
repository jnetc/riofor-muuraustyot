// Insert extra css, to check LocalStorage before DOM is loaded
export const setInitialTheme = `
  function getUserPreference() {
    if(window.localStorage.getItem('theme')) {
      return window.localStorage.getItem('theme')
    }
    window.localStorage.setItem('theme', 'light')
    return 'light'
  }
  document.documentElement.dataset.theme = getUserPreference();
`;
// Insert extra css, to prevent flash when DOM is loaded
export const extraCSS = `
  html[data-theme=dark] {
    background-color: #1a1e1e;
    color: #9caab2;
  }
  html[data-theme=light] {
    background-color: #929ea5;
    color: #060d0c;
  }
`;
