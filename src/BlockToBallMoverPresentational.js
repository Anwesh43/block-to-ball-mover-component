import {useStyle} from './hooks'
import React from 'react'
import BlockToBallMoverPresentational from './BlockToBallMoverPresentational'

const BlockToBallMoverPresentational = ({w, h, scale, onClick}) => {
    const style = useStyle(w, h, scale)
    return <div onClick = {onClick} style = {style}></div>
}

export default BlockToBallMoverPresentational
