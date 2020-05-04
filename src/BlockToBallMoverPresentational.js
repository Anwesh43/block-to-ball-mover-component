import {useStyle} from './hooks'
import React from 'react'

const BlockToBallMoverPresentational = ({w, h, scale, onClick}) => {
    const style = useStyle(w, h, scale)
    return <div onClick = {onClick} style = {style}></div>
}

export default BlockToBallMoverPresentational
