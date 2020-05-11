import Storage from 'web-storage-cache'

const localStorage = new Storage()

export function setLocalStorage(key, value) {
    return localStorage.set(key, value)
}

export function getLocalStorage(key) {
    return localStorage.get(key)
}

export function removeLocalStorage(key) {
    return localStorage.delete(key)
}

export function clearLocalStorage() {
    return localStorage.clear()
}

export function getBookObj(fileName, key) {
    let book = getLocalStorage(`${fileName}-info`)
    if (book) {
        return book[key]
    } else {
        return null
    }
}

export function setBookObj(fileName, key, value) {
    let book = getLocalStorage(`${fileName}-info`)
    if (!book) {
        book = {}
    }
    book[key] = value
    setLocalStorage(`${fileName}-info`, book)
}

export function saveFontFamily(fileName, font) {
    return setBookObj(fileName, 'font-family', font)
}

export function getFontFamily(fileName) {
    return getBookObj(fileName, 'font-family')
}

export function saveFontSize(fileName, font) {
    return setBookObj(fileName, 'font-size', font)
}

export function getFontSize(fileName) {
    return getBookObj(fileName, 'font-size')
}

export function saveTheme(fileName, theme) {
    return setBookObj(fileName, 'theme', theme)
}

export function getTheme(fileName) {
    return getBookObj(fileName, 'theme')
}

export function saveLocale(value) {
    return setLocalStorage('locale', value)
}

export function getLocale() {
    return getLocalStorage('locale')
}