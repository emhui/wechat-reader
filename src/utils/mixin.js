import { ThemeList } from './book'

import {
    mapGetters,
    mapActions
} from 'vuex'

export const ebookMixin = {
    computed: {
        ...mapGetters([
            'fileName',
            'menuVisible',
            'settingVisible',
            'defaultFontSize',
            'currentBook',
            'fontFamilyVisible',
            'defaultFontFamily',
            'defaultTheme'
        ]),
        themeList: () => {
            return ThemeList(this)
        }
    },
    methods: {
        ...mapActions([
            'setFileName',
            'setMenuVisible',
            'setSettingVisible',
            'setDefaultFontSize',
            'setCurrentBook',
            'setFontFamilyVisible',
            'setDefaultFontFamily',
            'setDefaultTheme'
        ])
    }
}