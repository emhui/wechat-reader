<template>
    <div>
        <transition name="slide-up">
            <div class="setting-font-family" v-show="fontFamilyVisible">
                <div class="setting-font-family-text-wrapper">
                    <div class="setting-font-family-text_icon">
                        <span class="icon-chevron-small-down" @click="onClose"></span>
                    </div>
                    <div class="setting-font-family-text_text">
                        {{ defaultFontFamily }}
                    </div>
                </div>
                <div class="setting-font-family-list-wrapper">
                    <div class="setting-font-family-item" v-for="(item, index) in fontFamilyList" :key="index" @click="selected(item.font)">
                        <div class="setting-font-family-item_text">
                            {{ item.font }}
                        </div>
                        <div class="setting-font-family-item_icon" v-show="defaultFontFamily === item.font">
                            <span class="icon-check"></span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import { FONT_FAMILY_LIST } from '../../utils/book'
import { saveFontFamily } from '../../utils/localstorage'

export default {
    mixins: [ebookMixin],
    data() {
        return {
            fontFamilyList: FONT_FAMILY_LIST
        }
    },
    methods: {
        onClose() {
            this.setFontFamilyVisible(false)
        },
        selected(font) {
            this.setDefaultFontFamily(font)
            saveFontFamily(this.fileName, font)
            if (font === 'Default') {
                this.currentBook.rendition.themes.font('Times New Roman')
            } else {
                this.currentBook.rendition.themes.font(font)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/style/globe.scss';

.setting-font-family{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40%;
        z-index: 100;
        background: white;
        flex-direction: column;
        box-shadow: 0 px2rem(-4) px2rem(8) rgba($color: #000000, $alpha: .15);
        display: flex;
        font-size: px2rem(40);
    &-text-wrapper{
        flex: 0 0 px2rem(70);
        @include center;
        display: flex;
        border-bottom: px2rem(1) solid #ccc;
        .setting-font-family-text{
            &_icon{
                margin-left: px2rem(10);
                flex: 0 0 px2rem(50);
            }

            &_text{
                flex: 1;
                @include center;
            }
        }
    }

    &-list-wrapper{
        flex: 1;
        display: flex;
        flex-direction: column;
        margin: px2rem(40) px2rem(10);
        .setting-font-family-item{
            display: flex;
            flex: 1;
            justify-content: space-between;
            &_text{

            }
            &_icon{

            }
        }
    }
}
</style>