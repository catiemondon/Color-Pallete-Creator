import React from 'react'

export default function Color(props) {
    const {color}= props
    const divStyle={
        background: color,
        height: '4em',
        width: '6em',
        margin: '.2em'
    }
    return (
        <div style={divStyle}>
            
        </div>
    )
}

