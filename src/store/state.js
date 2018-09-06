/**
 * Created by bennettyw on 2018/8/10.
 */
import {playMode} from  'common/js/config'
const state = {
    singer: {},
    playing: false,
    fullScreen: false,  //全屏
    playlist: [],
    sequenceList: [], //播放顺序列表
    mode: playMode.sequence,
    currentIndex: -1,   //前进后退播放
    disc: {},
    topList: {}
}

export default state