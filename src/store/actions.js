/**
 * Created by bennettyw on 2018/8/10.
 */

import * as types from '@/store/mutation-types'

export const selectPlay = function ({commit,state}, {list, index}) {
    commit(types.SET_SEQUENCE_LIST, list)
    commit(types.SET_PLAYLIST, list)
    commit(types.SET_CURRENT_INDEX,index)
    commit(types.SET_FULL_SCREEN, true)
    commit(types.SET_PLAYING_STATE,true)
}