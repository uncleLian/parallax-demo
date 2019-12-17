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
                        <img src="https://www1.djicdn.com/dps/eaa83b0faa6c24fbd917d7885bec683f.png" data-0="transform[quadratic]: translate3d(0, -25%, 0);" data-1600="transform[quadratic]: translate3d(0, 0%, 0);">
                    </div>
                    <div class="c2">
                        <img src="https://www1.djicdn.com/dps/493bbfbf0610fabef8fa84a47a6fda85.png" data-0="transform[quadratic]: translate3d(0, 30%, 0);" data-1650="transform[quadratic]: translate3d(0, -20%, 0);">
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
            <section id="section3" data-3000="background-position-y[quadratic]: 0px" data-4100="background-position-y[quadratic]: -80px;" data-4900="background-position-y[quadratic]: -140px;">
                <div class="section-container">
                    <div class="s3-content">
                        <div class="text-wrapper">
                            <h2 class="section-title">增稳非凡，无惧抖动</h2>
                            <p class="section-desc">全新 RockSteady 增稳技术采用 DJI 大疆最新的智能抖动补偿算法，可自主检测机身各个方向的抖动并进行有效抵消，保持画面稳定。独特的滤波算法在滤除抖动的同时，还能保留相机的转向运动，带来稳定流畅的拍摄画面。</p>
                        </div>
                        <div class="video-wrapper">
                            <span class="video-desc desc1">非 RockSteady</span>
                            <span class="video-desc desc2">RockSteady</span>
                            <video id="s3-video" type="video/mp4" src="https://www1.djicdn.com/assets/uploads/367aeda57cc2ddasd/3f1df242da2cb0aeb81cef1469694eb8.mp4" poster="https://www1.djicdn.com/dps/ef8e9d029bb05daa2e53f5ca8564b46b.jpg" muted>
                            </video>
                            <div class="video-reload-btn" v-show="s3ReloadBtn" @click="handleVideoReload('#s3-video')"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section4">
                <div class="section-container">
                    <div class="text-wrapper">
                        <h2 class="section-title">4K HDR 视频，尽显充沛细节</h2>
                        <p class="section-desc">HDR 视频可提升最高 3 档动态范围，还原亮部及暗部细节，并让明暗过渡更加自然，无论身处强光还是逆光环境，你都能通过 HDR 视频功能记录色彩饱满、层次分明的 4K 画面。</p>
                    </div>
                    <div class="video-wrapper">
                        <video id="s4-video" type="video/mp4" src="https://www1.djicdn.com/assets/uploads/367aeda57cc2ddasd/9b114f77f4906dfca2acfd6b7d60f984.mp4" poster="https://www1.djicdn.com/dps/cb65c4aaac455b0d22add5ead0ed1729.jpg" muted>
                        </video>
                        <div class="video-reload-btn" v-show="s4ReloadBtn" @click="handleVideoReload('#s4-video')"></div>
                    </div>
                </div>
            </section>
            <section id="section5">
                <div class="section-container">
                    <div class="text-wrapper" data-6000="transform[quadratic]: translate3d(0, 0px, 0);" data-6150="transform[quadratic]: translate3d(0, -150px, 0);">
                        <h2 class="section-title">4K/60fps，精彩逼真</h2>
                        <p class="section-desc">4K/60fps 视频清晰流畅还原每一个运动瞬间，100Mbps 高码流助力记录更多丰富细节，配合高解析镜头和出色的声音录制性能，轻松记录声音清晰、画面细腻的流畅影像。</p>
                    </div>
                    <div class="video-wrapper">
                        <div class="video-scroll-placeholder"></div>
                        <div class="video-scroll-container">
                            <video id="s5-video" type="video/mp4" src="https://www1.djicdn.com/assets/uploads/367aeda57cc2ddasd/3be2854c5013b4dd923681e6c00e1ae3.mp4" poster="https://www1.djicdn.com/dps/cb71f25617c06ed53455ce098f724c67.jpg" muted>
                            </video>
                            <div class="video-reload-btn" v-show="s5ReloadBtn" @click="handleVideoReload('#s5-video')"></div>
                        </div>
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
            s: null,
            videoList: [
                {
                    id: '#s3-video',
                    reloadBtn: 's3ReloadBtn',
                    start: 3800,
                    end: 4600
                },
                {
                    id: '#s4-video',
                    reloadBtn: 's4ReloadBtn',
                    start: 4700,
                    end: 5850
                },
                {
                    id: '#s5-video',
                    reloadBtn: 's5ReloadBtn',
                    start: 5350,
                    end: 6780
                }
            ],
            bannerHeight: 0,
            placeholderHeihgt: 0,
            scrollTop: 0,
            s3ReloadBtn: false,
            s4ReloadBtn: false,
            s5ReloadBtn: false
        }
    },
    mounted() {
        require(['@/utils/skrollr.min.js'], (skrollr) => {
            this.s = skrollr.init({
                forceHeight: false
            })
            this.bannerHeight = document.querySelector('.main-banner').offsetHeight
            this.placeholderHeihgt = document.querySelector('.main-container').offsetHeight
            window.onresize = () => {
                this.bannerHeight = document.querySelector('.main-banner').offsetHeight
                this.placeholderHeihgt = document.querySelector('.main-container').offsetHeight
                this.s.refresh()
            }
            document.addEventListener('scroll', () => {
                this.scrollTop = this.s.getScrollTop()
                this.handleVideoPlay()
            })
        })
    },
    methods: {
        handleVideoPlay(videoList) {
            this.videoList.forEach(item => {
                if (this.scrollTop >= item.start && this.scrollTop <= item.end) {
                    const video = document.querySelector(item.id)
                    if (video) {
                        video.play()
                        video.onplay = () => {
                            this[item.reloadBtn] = false
                        }
                        video.onended = () => {
                            this[item.reloadBtn] = true
                        }
                    }
                }
            })
        },
        handleVideoReload(id) {
            const video = document.querySelector(id)
            if (video) {
                video.load()
                video.play()
            }
        }
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
        .section-title {
            color: rgba(0, 0, 0, 0.85);
            font-size: 32px;
            font-weight: 500;
            line-height: 48px;
            vertical-align: middle;
            word-wrap: break-word;
            text-align: center;
        }
        .section-desc {
            color: rgba(0, 0, 0, 0.65);
            font-size: 16px;
            line-height: 24px;
            vertical-align: middle;
            word-wrap: break-word;
            margin: 16px auto 32px;
            width: 640px;
        }
        .video-wrapper {
            position: relative;
            margin: 0 auto;
            .video-reload-btn {
                background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDBweCIgaGVpZ2h0PSI0MHB4IiB2aWV3Qm94PSIwIDAgNDAgNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjIgKDY3MTQ1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uX3JlcGxheTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0yNy43NTQ2MTk5LDEyLjUgTDI2LjM2ODMzMzMsMTIuNSBDMjYuMTY3OTUzMiwxMi41IDI2LjAwODI3NDksMTIuNjY3ODQxOCAyNi4wMTc4NjU1LDEyLjg2ODM3ODkgTDI2LjEzMzgzMDQsMTUuMjkyOTU5IEMyNC44MDM4MzA0LDEzLjcyNzUwOTggMjIuODIzMDExNywxMi43MzQzNzUgMjAuNjEwNDA5NCwxMi43MzQzNzUgQzE2LjYxNDQ3MzcsMTIuNzM0Mzc1IDEzLjM1NTk2NDksMTYuMDAxNzM4MyAxMy4zNTg5MTgxLDIwLjAwNTQ3ODUgQzEzLjM2MTg3MTMsMjQuMDE1NjY0MSAxNi42MDczMzkyLDI3LjI2NTYyNSAyMC42MTAzODAxLDI3LjI2NTYyNSBDMjIuNDc5NTYxNCwyNy4yNjU2MjUgMjQuMTgzNTM4LDI2LjU1NzAyMTUgMjUuNDY5Mzg2LDI1LjM5MzMyMDMgQzI1LjYxODg4ODksMjUuMjU4MDI3MyAyNS42MjU5MzU3LDI1LjAyNTMyMjMgMjUuNDgzNDc5NSwyNC44ODI1ODc5IEwyNC40OTAxNzU0LDIzLjg4NzM0MzcgQzI0LjM1OTU5MDYsMjMuNzU2NTAzOSAyNC4xNDk4MjQ2LDIzLjc0OTE1MDQgMjQuMDExMjI4MSwyMy44NzE0MzU1IEMyMy4xMDQ3NjYxLDI0LjY3MTMyODEgMjEuOTE0NjQ5MSwyNS4xNTYyNSAyMC42MTAzODAxLDI1LjE1NjI1IEMxNy43NjYzMTU4LDI1LjE1NjI1IDE1LjQ2NDE4MTMsMjIuODUwMTE3MiAxNS40NjQxODEzLDIwIEMxNS40NjQxODEzLDE3LjE1MDM4MDkgMTcuNzY1ODE4NywxNC44NDM3NSAyMC42MTAzODAxLDE0Ljg0Mzc1IEMyMi4zOTA4NDgsMTQuODQzNzUgMjMuOTU4NTA4OCwxNS43NDc3OTMgMjQuODgyMjgwNywxNy4xMjMwNDY5IEwyMS45MTM3MTM1LDE2Ljk4MDUxNzYgQzIxLjcxMzU2NzMsMTYuOTcwOTA4MiAyMS41NDYwNTI2LDE3LjEzMDg5ODQgMjEuNTQ2MDUyNiwxNy4zMzE2Njk5IEwyMS41NDYwNTI2LDE4LjcyMDY2NDEgQzIxLjU0NjA1MjYsMTguOTE0ODE0NSAyMS43MDMxNTc5LDE5LjA3MjIyNjYgMjEuODk2OTI5OCwxOS4wNzIyMjY2IEwyNy43NTQ2MTk5LDE5LjA3MjIyNjYgQzI3Ljk0ODM5MTgsMTkuMDcyMjI2NiAyOC4xMDU0OTcxLDE4LjkxNDgxNDUgMjguMTA1NDk3MSwxOC43MjA2NjQxIEwyOC4xMDU0OTcxLDEyLjg1MTU2MjUgQzI4LjEwNTQ5NzEsMTIuNjU3NDEyMSAyNy45NDgzOTE4LDEyLjUgMjcuNzU0NjE5OSwxMi41IFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJpY29uX3JlcGxheSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBpZD0iTWFzay0yIiBmaWxsPSIjMDAwMDAwIiBvcGFjaXR5PSIwLjMiIGN4PSIyMCIgY3k9IjIwIiByPSIyMCI+PC9jaXJjbGU+CiAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8dXNlIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iI0ZGRkZGRiIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICA8L2c+Cjwvc3ZnPg==');
                position: absolute;
                width: 48px;
                height: 48px;
                background-size: cover;
                background-repeat: no-repeat;
                right: 24px;
                bottom: 24px;
                cursor: pointer;
            }
        }
        video {
            width: 100%;
        }
        img {
            display: block;
            max-width: 100%;
            height: auto;
        }
        h2 {
            margin: 0;
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
    #section3 {
        background-image: url('https://www1.djicdn.com/dps/c57cf4857eeadff830d014fde9a340ca.jpg');
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 2760px 1543px;
        background-position-y: 0;
        height: 1400px;
        .s3-content {
            position: absolute;
            top: 600px;
            width: 100%;
            .video-wrapper {
                position: relative;
                width: 1200px;
                height: 450px;
                .video-desc {
                    position: absolute;
                    font-size: 24px;
                    line-height: 33px;
                    color: #fff;
                    top: 16px;
                    &.desc1 {
                        left: 32px;
                    }
                    &.desc2 {
                        right: 32px;
                    }
                }
            }
        }
    }
    #section4 {
        height: auto;
        .section-container {
            margin-top: 160px;
            margin-bottom: 160px;
            .video-wrapper {
                width: 1104px !important;
            }
        }
    }
    #section5 {
        .video-wrapper {
            width: 1104px !important;
        }
    }
    #bottom {
        background: #79f;
    }
}
</style>
