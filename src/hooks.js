import {useState, useEffect} from 'react'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
        start() {
            if (!animated) {
                var currScale = scale
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (currScale > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
            return () => {
                window.onresize = () => {

                }
            }
        }
    })
    return {
        w, h
    }
}

export const useStyle = (w, h, scale) => {
    const position = 'absolute'
    const sizeFactor = 5
    const sf = Math.sin(scale * Math.PI)
    const size = Math.min(w, h) / sizeFactor
    const width = `${size}px`
    const height = `${size}px`
    const borderRadius = `${50 * sf}%`
    const top = `${h / 2 - size / 2}px`
    const left = `${(w  - size) * sf}px`
    const background = '#4CAF50'
    return {position, width, height, left, top, borderRadius, background}
}
