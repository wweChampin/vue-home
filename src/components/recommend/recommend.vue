<template>
    <div class="recommend" ref="recommend">
        <scroll ref="scroll" class="recommend-content" :data="discList">
            <div>
                <div v-if="recommends.length" class="slider-wrapper">
                    <silder>
                        <div v-for="item in recommends">
                            <a :href="item.linkUrl">
                                <img class="needsclick" @load="loadImage" :src="item.picUrl">
                            </a>
                        </div>
                    </silder>
                </div>
                <div class="recommend-list">
                    <h1 class="list-title">热门歌单推荐</h1>
                    <ul>
                        <li v-for="item in discList" class="item">
                            <div class="icon">
                                <img width="60" height="60"  v-lazy="item.picUrl"/>
                            </div>
                            <div class="text">
                                <h2 class="name" v-html="item.topTitle"></h2>
                                <p class="desc" v-html="item.listenCount +'人听过'"></p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="loading-container" v-show="!discList.length">
                <loading></loading>
            </div>
        </scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import Scroll from 'base/scroll/scroll'
    import Silder from 'base/slider/slider'
    import Loading from 'base/loading/loading'
    import {getRecommend, getDiscList} from '@/api/recommend'
    import {ERR_OK} from '@/api/config'
    export default {
        components: {
            Silder,
            Scroll,
            Loading
        },
        data() {
            return {
                recommends: [],
                discList: []
            }
        },
        created() {
            this._getRecommend()
            setTimeout(() => {
                this._getDiscList()
            },1000)
        },
        methods: {
            _getRecommend() {
                getRecommend().then((res) => {
                    if (res.code === ERR_OK) {
                        this.recommends = res.data.slider
                        console.log(this.recommends)
                    }
                })
            },
            _getDiscList() {
                getDiscList().then((res) => {
                    if (res.code === ERR_OK) {
                        this.discList = res.data.topList
                        console.log(res.data.topList)
                    }
                })
            },
            loadImage() {
                if (!this.checkLoaded) {
                    this.$refs.scroll.refresh()
                    this.checkLoaded = true
                }

            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "~common/stylus/variable"

    .recommend
        position: fixed
        width: 100%
        top: 88px
        bottom: 0
        .recommend-content
            height: 100%
            overflow hidden
            overflow: hidden
            .slider-wrapper
                position: relative
                width: 100%
                overflow: hidden
            .recommend-list
                .list-title
                    height: 65px
                    line-height: 65px
                    text-align: center
                    font-size: $font-size-medium
                    color: $color-theme
                .item
                    display: flex
                    box-sizing: border-box
                    align-items: center
                    padding: 0 20px 20px 20px
                    .icon
                        flex: 0 0 60px
                        width: 60px
                        padding-right: 20px
                    .text
                        display: flex
                        flex-direction: column
                        justify-content: center
                        flex: 1
                        line-height: 20px
                        overflow: hidden
                        font-size: $font-size-medium
                        .name
                            text-align left
                            margin-bottom: 10px
                            color: $color-text
                        .desc
                            text-align left
                            color: $color-text-d
            .loading-container
                position: absolute
                width: 100%
                top: 50%
                transform: translateY(-50%)
</style>
