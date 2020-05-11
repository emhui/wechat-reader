const book = {
    fileName: state => state.book.fileName,
    menuVisible: state => state.book.menuVisible,
    settingVisible: state => state.book.settingVisible,
    defaultFontSize: state => state.book.defaultFontSize,
    currentBook: state => state.book.currentBook,
    fontFamilyVisible: state => state.book.fontFamilyVisible,
    defaultFontFamily: state => state.book.defaultFontFamily,
    defaultTheme: state => state.book.defaultTheme
}

export default book