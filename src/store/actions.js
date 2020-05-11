const actions = {
    setMenuVisible: ({ commit }, visible) => {
        return commit('SET_MENU_VISIBLE', visible)
    },
    setSettingVisible: ({ commit }, visible) => {
        return commit('SET_SETTING_VISIBLE', visible)
    },
    setDefaultFontSize: ({ commit }, defaultFontSize) => {
        return commit('SET_DEFAULT_FONT_SIZE', defaultFontSize)
    },
    setCurrentBook: ({ commit }, book) => {
        return commit('SET_CURRENT_BOOK', book)
    },
    setFontFamilyVisible: ({ commit }, visible) => {
        return commit('SET_FONT_FAMILY_VISIBLE', visible)
    },
    setDefaultFontFamily: ({ commit }, defaultFontFamily) => {
        return commit('SET_DEFAULT_FONT_FAMILY', defaultFontFamily)
    },
    setDefaultTheme: ({ commit }, defaultTheme) => {
        return commit('SET_DEFAULT_THEME', defaultTheme)
    }
}

export default actions