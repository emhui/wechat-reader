<template>
    <div>
        <transition name="slide-up">
            <div class="setting-wrapper" v-show="menuVisible &&   settingVisible === 0">
                <div class="setting-font" >
                    <div class="preview" :style="{fontSize: fontSizeList[0].fontSize + 'px'}">A</div>
                    <div class="select-wrapper" v-for="(item, index) in fontSizeList" :key="index" @click="setFontSize(item.fontSize)">
                        <div class="line"></div>
                        <div class="point-wrapper">
                            <div class="point" v-show="defaultFontSize === item.fontSize">
                                <div class="small"></div>
                            </div>
                        </div>
                        <div class="line"></div>
                    </div>
                    <div class="preview" :style="{fontSize: fontSizeList[fontSizeList.length - 1].fontSize + 'px'}">A</div>
                </div>

                <div class="setting-font-family" @click="showSettingFontFamily">
                    {{ defaultFontFamily }}
                <span class="icon-chevron-small-right"></span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import { FONT_SIZE_LIST } from '../../utils/book'
import { saveFontSize } from '../../utils/localstorage'

export default {
    mixins: [ebookMixin],
    data() {
        return {
            fontSizeList: FONT_SIZE_LIST
        }
    },
    methods: {
        setFontSize(fontSize) {
            this.setDefaultFontSize(fontSize)
            this.currentBook.rendition.themes.fontSize(fontSize + 'px')
            saveFontSize(this.fileName, fontSize)
        },
        showSettingFontFamily() {
            console.log('字体')
            this.setFontFamilyVisible(!this.fontFamilyVisible)
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/style/globe.scss';
    .setting-wrapper{
        position: absolute;
        bottom: px2rem(100);
        left: 0;
        z-index: 100;
        width: 100%;
        height: px2rem(150);
        background: white;
        box-shadow: 0 px2rem(-4) px2rem(8) rgba($color: #000000, $alpha: 0.15);
        display: flex;
        flex-direction: column;
        .setting-font{
            display: flex;
            height: 100%;
            .preview{
                flex: 0 0 px2rem(40);
                margin: 0 px2rem(40);
                @include center;
            }

            .select-wrapper{
                flex: 1;
                display: flex;
                align-items: center;

                .line{
                    flex: 1;
                    height: 0;
                    border-top: px2rem(1) solid;
                    color: #ccc;
                }

                .point-wrapper{
                    flex: 0 0 0;
                    width: 0;
                    height: px2rem(10);
                    border-left: px2rem(1) solid;
                    color: #ccc;
                    position: relative;
                    .point{
                        position: absolute;
                        top: px2rem(-10);
                        left: px2rem(-6);
                        width: px2rem(40);
                        height: px2rem(40);
                        border-radius: 50%;
                        background: white;
                        border: px2rem(1) #ccc solid;
                        box-shadow: px2rem(1) px2rem(1) px2rem(10) rgba(0,0,0,.15);
                        @include center;
                        .small{
                            width: px2rem(8);
                            height: px2rem(8);
                            background: black;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }
        .setting-font-family{
            flex: 1;
            @include center;
            color: #999;
        }
    }
</style>