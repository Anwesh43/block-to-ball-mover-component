import {useAnimatedScale, useDimension} from './hooks'
import React from 'react'
import BlockToBallMoverPresentational from './BlockToBallMoverPresentational'

const BlockToBallMoverContainer = ({}) => {
    const {scale, start} = useAnimatedScale(0.01, 30)
    const {w, h} = useDimension()
    return <BlockToBallMoverPresentational w = {w} h = {h} scale = {scale} onClick = {start}>
          </BlockToBallMoverPresentational>
}

export default BlockToBallMoverContainer
