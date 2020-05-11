<template>
  <div>
    <transition name="slide-up">
      <div class="setting-wrapper" v-show="menuVisible &&   settingVisible === 1">
        <div class="setting-theme">
          <div
            class="setting-theme-item"
            v-for="(item, index) in themeList"
            :key="index"
            @click="setTheme(index)"
          >
            <div class="preview" :style="{'background': item.style.body.background}"></div>
            <div class="text" :class="{'selected': index === defaultTheme}">{{item.name}}</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'
import { saveTheme } from '../../utils/localstorage'

export default {
    mixins: [ebookMixin],
    methods: {
        setTheme(index) {
            let theme = this.themeList[index].name
            this.currentBook.rendition.themes.select(theme)
            this.setDefaultTheme(theme)
            saveTheme(this.fileName, theme)
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
        z-index: 101;
        width: 100%;
        height: px2rem(150);
        background: white;
        box-shadow: 0 px2rem(-4) px2rem(8) rgba($color: #000000, $alpha: 0.15);
        display: flex;
        flex-direction: column;
        .setting-theme{
            display: flex;
            height: 100%;
            width: 100%;
            &-item{
                flex: 1;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                padding: px2rem(10);
                .preview{
                    flex: 1;
                    box-sizing: border-box;
                    border: px2rem(1) solid #ccc;

                }

                .text{
                    font-size: px2rem(10);
                    color: #999;
                    @include center;

                    &.selected{
                        color: #333;
                    }
                }
            }
        }
    }
</style>