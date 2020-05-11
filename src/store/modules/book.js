const book = {
  state: {
    fileName: 'hello',
    menuVisible: false,
    settingVisible: -1,
    defaultFontSize: 16,
    currentBook: null,
    fontFamilyVisible: false,
    defaultFontFamily: 'Default',
    defaultTheme: 'Default'
  },
  mutations: {
    SET_FILENAME(state, fileName) {
      state.fileName = fileName
    },
    SET_MENU_VISIBLE(state, menuVisible) {
      state.menuVisible = menuVisible
    },
    SET_SETTING_VISIBLE(state, visible) {
      state.settingVisible = visible
    },
    SET_DEFAULT_FONT_SIZE(state, defaultFontSize) {
      state.defaultFontSize = defaultFontSize
    },
    SET_CURRENT_BOOK(state, book) {
      state.currentBook = book
    },
    SET_FONT_FAMILY_VISIBLE(state, fontFamilyVisible) {
      state.fontFamilyVisible = fontFamilyVisible
    },
    SET_DEFAULT_FONT_FAMILY(state, defaultFontFamily) {
      state.defaultFontFamily = defaultFontFamily
    },
    SET_DEFAULT_THEME(state, defaultTheme) {
      state.defaultTheme = defaultTheme
    }
  }
}

export default book