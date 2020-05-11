<template>
    <div>
        <title-bar></title-bar>
        <menu-bar></menu-bar>
        <div id="read"
        ></div>

<!--         <div class="mask"
            v-touch:tap="toggleTitleAndMenu"
            v-touch:left="nextPage"
            v-touch:right="prevPage"
        ></div> -->
    </div>
</template>

<script>
import ePub from 'epubjs'
import { ebookMixin } from '../../utils/mixin'
import { getFontFamily, getFontSize, getTheme } from '../../utils/localstorage'
export default {
    data() {
        return {
            fileUrl: 'http://127.0.0.1:9090/ePub/Free_Nonfiction_2020.epub'
        }
    },
    mixins: [ebookMixin],
    mounted() {
        this.loadEpub()
    },
    methods: {
        loadEpub() {
            this.book = ePub(this.fileUrl)
            this.rendtition = this.book.renderTo('read', {
                methods: 'default',
                width: window.innerWidth,
                height: window.innerHeight
            })
            this.rendtition.display().then(() => {
                this.setCurrentBook(this.book)
                this.registerTheme()
                this.initTheme()
                this.initGesture()
                this.initFontFamily()
                this.initFontSize()
            })
        },
        initGesture() {
            this.rendtition.on('touchstart', event => {
                this.touchStartX = event.changedTouches[0].clientX
                this.touchStartTime = event.timeStamp
            })
            this.rendtition.on('touchend', event => {
                const offsetX = event.changedTouches[0].clientX - this.touchStartX

                const offsetTime = event.timeStamp - this.touchStartTime

                if (offsetTime < 500 && offsetX > 40) {
                    this.prevPage()
                } else if (offsetTime < 500 && offsetX < -40) {
                    this.nextPage()
                } else {
                    this.toggleTitleAndMenu()
                }

                event.stopPropagation()
            })
        },
        initFontFamily() {
            this.rendtition.hooks.content.register(contents => {
                contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/cabin.css`)
                contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`)
                contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`)
                contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`)
            })

            let fontFamily = getFontFamily(this.fileName)
            if (fontFamily) {
                this.setDefaultFontFamily(fontFamily)
                this.currentBook.rendition.themes.font(fontFamily)
            } else {
                this.setDefaultFontFamily('Default')
                this.currentBook.rendition.themes.font('Default')
            }
        },
        initFontSize() {
            let fontSize = getFontSize(this.fileName)
            if (fontSize) {
                this.setDefaultFontSize(fontSize)
                this.currentBook.rendition.themes.fontSize(fontSize + 'px')
            } else {
                this.currentBook.rendition.themes.fontSize(this.defaultFontSize + 'px')
            }
        },
        registerTheme() {
            this.themeList.forEach(theme => {
                this.currentBook.rendition.themes.register(theme.name, theme.style)
            })
        },
        initTheme() {
            let theme = getTheme(this.fileName)
            if (theme) {
                this.setDefaultTheme(theme)
                this.currentBook.rendition.themes.select(theme)
            } else {
                this.setDefaultTheme('Default')
                this.currentBook.rendition.themes.select('Default')
            }
        },
        prevPage() {
            if (this.rendtition) {
                this.rendtition.prev()
            }
        },
        nextPage() {
            if (this.rendtition) {
                this.rendtition.next()
            }
        },
        toggleTitleAndMenu() {
            this.setMenuVisible(!this.menuVisible)
            if (!this.menuVisible) {
                this.setSettingVisible(-1)
                this.setFontFamilyVisible(false)
            }
        }
    },
    components: {
        TitleBar: () => import('../../components/EBook/TitleBar'),
        MenuBar: () => import('../../components/EBook/MenuBar')
    }
}
</script>

<style lang="scss" scoped>
.mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>