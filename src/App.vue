<template>
    <div id="app">
        <section class="main-banner">
            <h1 style="margin-top: 0; padding-top: 20px;">Scroll down ⬇</h1>
        </section>
        <div class="main-placeholder" :class="{'hide': scrollTop > bannerHeight}" :style="{height: placeholderHeihgt + 'px'}"></div>
        <div class="main-container" :class="scrollTop > bannerHeight ? 'show' : 'fixed'">
            <section id="section1">
                <div class="section-container">
                    <div class="c1">
                        <img src="https://www1.djicdn.com/dps/eaa83b0faa6c24fbd917d7885bec683f.png" data-0="transform[swing]: translate3d(0, -20%, 0);" data--100p-top-bottom="transform[swing]: translate3d(0, 0%, 0);">
                    </div>
                    <div class="c2">
                        <img src="https://www1.djicdn.com/dps/493bbfbf0610fabef8fa84a47a6fda85.png" data-0="transform[swing]: translate3d(0, 30%, 0);" data--100p-top-bottom="transform[swing]: translate3d(0, -20%, 0);">
                    </div>
                    <div class="c3">
                        <img src="https://www1.djicdn.com/dps/424a2c2500a1b4bbdd6b68bc597ad0aa.svg">
                    </div>
                    <div id="section1-footer" class="c4">
                        <div class="feature">
                            <img src="https://www1.djicdn.com/dps/c7a5f451b4904a10b44b43083205ea3e.svg">
                            <p>双彩屏</p>
                        </div>
                        <div class="feature">
                            <img src="https://www1.djicdn.com/dps/d6249c1c3777464e4fec78f27e9101d8.svg">
                            <p>超强增稳</p>
                        </div>
                        <div class="feature">
                            <img src="https://www1.djicdn.com/dps/af664bcedcc3a9c078ea609089be61f2.svg">
                            <p>4K HDR 视频</p>
                        </div>
                        <div class="feature">
                            <img src="https://www1.djicdn.com/dps/3af21901acdc0ab89893c03c0c04c437.svg">
                            <p>8 倍慢动作</p>
                        </div>
                        <div class="feature">
                            <img src="https://www1.djicdn.com/dps/ad0f76b0fd0b411f35c2f201da9c3f52.svg">
                            <p>超清画质</p>
                        </div>
                        <div class="feature">
                            <img src="https://www1.djicdn.com/dps/309e3e0cc17b50898822d4b124450912.svg">
                            <p>裸机防水</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section2">
                <div class="section-container">
                    <img class="s2-image" src="https://www1.djicdn.com/dps/9a4bdc174727a0ebed671af42fcd9a17.jpg" data-2020="transform: matrix(4, 0, 0, 4, 0, 0);margin-left: 500px;margin-top: 500px;" data-2520="transform: transform: matrix(1, 0, 0, 1, 0, 0);margin-left: 0px;margin-top: 0px;">
                    <div class="s2-content">
                        <h2 class="s2-title">双彩屏运动相机，正反俱佳</h2>
                        <p class="s2-desc">前置彩屏让自拍构图更精准，从此告别盲拍，自拍更有型，时刻展现好状态。640 × 360 分辨率背屏显示清晰细腻，触控灵敏高速，只需轻点、滑动屏幕即可轻松操控相机。</p>
                    </div>
                </div>
            </section>
            <section id="bottom">
                <h1 style="margin-top: 0; padding-top: 20px;">Bottom</h1>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            bannerHeight: 0,
            placeholderHeihgt: 0,
            scrollTop: 0
        }
    },
    mounted() {
        require(['@/utils/skrollr.min.js'], (skrollr) => {
            let s = skrollr.init({
                forceHeight: false
            })
            document.addEventListener('scroll', () => {
                this.scrollTop = s.getScrollTop()
            })
            this.bannerHeight = document.querySelector('.main-banner').offsetHeight
            this.placeholderHeihgt = document.querySelector('.main-container').offsetHeight
            window.onresize = () => {
                this.bannerHeight = document.querySelector('.main-banner').offsetHeight
                this.placeholderHeihgt = document.querySelector('.main-container').offsetHeight
                s.refresh()
            }
        })
    }
}
</script>

<style lang="stylus">
#app {
    position: relative;
    width: 100%;
    min-height: 100%;
    section {
        position: relative;
        width: 100%;
        height: 1080px;
        text-align: center;
        .section-container {
            position: relative;
            width: 1200px;
            height: 100%;
            margin: 0 auto;
            overflow: hidden;
        }
        img {
            display: block;
            max-width: 100%;
            height: auto;
        }
    }
    .main-banner {
        position: relative;
        background: #ff0;
        z-index: 2;
    }
    .main-placeholder {
        &.hide {
            display: none;
        }
    }
    .main-container {
        z-index: 1;
        &.show {
            position: relative;
            width: 100%;
        }
        &.fixed {
            position: fixed;
            top: 0;
            min-width: 100%;
        }
    }
    #section1 {
        position: relative;
        height: 1080px;
        .c1 {
            position: absolute;
            top: 5%;
            left: 215px !important;
            width: 592px;
            z-index: 30;
        }
        .c2 {
            position: absolute;
            top: 50%;
            left: initial !important;
            right: 196px !important;
            width: 288px;
            z-index: 10;
        }
        .c3 {
            position: absolute;
            top: 50%;
            transform: translate3d(0, -50%, 0);
            z-index: 20;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .c4 {
            position: absolute;
            width: 1019px;
            bottom: 140px;
            left: 50%;
            transform: translate(-50%);
            display: flex;
            justify-content: space-between;
            .feature {
                width: 150px;
                img {
                    display: block;
                    margin: 0 auto 8px;
                    width: 64px;
                    height: 64px;
                }
                p {
                    text-align: center;
                    word-wrap: break-word;
                    font-weight: 500;
                    color: rgba(0, 0, 0, 0.85);
                    font-size: 16px;
                    margin: 0;
                }
            }
        }
    }
    #section2 {
        position: relative;
        margin-bottom: 280px;
        .s2-image {
        }
        .s2-content {
            position: absolute;
            bottom: 150px;
            width: 720px;
            left: 50%;
            transform: translateX(-50%);
            .s2-title {
                text-align: center;
                width: 100%;
                margin-bottom: 16px;
                line-height: 48px;
                font-size: 32px;
                color: #fff;
            }
            .s2-desc {
                word-wrap: break-word;
                text-align: center;
                color: #fff;
                font-size: 16px;
                line-height: 24px;
            }
        }
    }
    #bottom {
        background: #79f;
    }
}
</style>
