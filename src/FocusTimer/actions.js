import state, { isMusic } from './state.js'
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countdown()

    sounds.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
}

export function setPlus() {
    state.minutes += 5
    state.seconds = 0
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
}

export function setMinus() {
    state.minutes -= 5
    state.seconds = 0
    timer.updateDisplay()

    sounds.buttonPressAudio.play()
}

export function musicFloresta() {
    isMusic.isFloresta = document.documentElement.classList.toggle('music-on-floresta')

    if(!!isMusic.isFloresta) {
        sounds.FlorestaAudio.play()
        return
    }

    sounds.FlorestaAudio.pause()
}

export function musicChuva() {
    isMusic.isChuva= document.documentElement.classList.toggle('music-on-chuva')

    if(!!isMusic.isChuva) {
        sounds.ChuvaAudio.play()
        return
    }

    sounds.ChuvaAudio.pause()
}

export function musicCafeteria() {
    isMusic.isCafeteria = document.documentElement.classList.toggle('music-on-cafeteria')

    if(!!isMusic.isCafeteria) {
        sounds.CafeteriaAudio.play()
        return
    }

    sounds.CafeteriaAudio.pause()
}

export function musicLareira() {
    isMusic.isLareira = document.documentElement.classList.toggle('music-on-lareira')

    if(!!isMusic.isLareira) {
        sounds.LareiraAudio.play()
        return
    }

    sounds.LareiraAudio.pause()
}