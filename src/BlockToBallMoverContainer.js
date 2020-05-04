import {useAnimatedScale, useDimension} from './hooks'
import React from 'react'

const BlockToBallMoverContainer = ({}) => {
    const {scale, start} = useAnimatedScale(0.02, 20)
    const {w, h} = useDimension()
    return <BlockToBallMoverPresentational w = {w} h = {h} scale = {scale} onClick = {start}>
          </BlockToBallMoverPresentational>
}

export default BlockToBallMoverContainer
