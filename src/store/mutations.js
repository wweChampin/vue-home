/**
 * Created by bennettyw on 2018/8/10.
 */
import * as types from  './mutation-types'

const matutaions = {
    [types.SET_SINGER](state, singer) {
        state.singer = singer
    }
}

export default matutaions