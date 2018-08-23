/**
 * Created by bennettyw on 2018/8/10.
 * 给 state  做映射
 */
export const singer = state => state.singer

export const playing = state  => state.playing

export const fullScreen = state  => state.fullScreen

export const playlist = state  => state.playlist

export const sequenceList = state  => state.sequenceList

export const mode = state  => state.mode

export const currentIndex = state  => state.currentIndex

export  const currentSong = (state) => {
    return state.playlist[state.currentIndex] || {}
}

