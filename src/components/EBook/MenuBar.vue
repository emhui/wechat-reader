<template>
    <div class="menu-bar">
        <transition name="slide-up">
            <div class="bottom-wrapper" v-show="menuVisible"
            >
                <div class="icon-wrapper">
                    <span class="icon-menu icon" @click="showSetting(3)"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-swap icon" @click="showSetting(2)" ></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-adjust icon" @click="showSetting(1)"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon-a icon" @click="showSetting(0)">A</span>
                </div>
            </div>
        </transition>
        <setting-font-size></setting-font-size>
        <setting-font-family></setting-font-family>
        <setting-theme></setting-theme>
    </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin'

export default {
    mixins: [ebookMixin],
    methods: {
        showSetting(tag) {
            console.log(tag)
            this.setSettingVisible(tag)
            console.log(this.settingVisible)
        }
    },
    components: {
        SettingFontSize: () => import('./SettingFont'),
        SettingFontFamily: () => import('./SettingFontFamily'),
        SettingTheme: () => import('./SettingTheme')
    }
}
</script>

<style lang="scss" scoped>
@import 'src/assets/style/globe.scss';

.menu-bar{
    .bottom-wrapper{
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: px2rem(100);
        background: white;
        box-shadow: 0 px2rem(-4) px2rem(8) rgba($color: #000000, $alpha: 0.15);
        display: flex;

        &.hide-box-shadow{
            box-shadow: none;
        }

        .icon-wrapper{
            flex: 1;
            @include center;
        }
    }
}
</style>