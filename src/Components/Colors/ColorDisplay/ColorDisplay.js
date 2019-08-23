import React, { Component } from 'react'
import Color from '../Color/Color';
import styled from 'styled-components'

export default class ColorDisplay extends Component {
    constructor(){
        super()
        this.state={
            colors: [{color: '#F9CB40'}, {color: '#BCED09'}, {color: '#2F52E0'}, {color: '#FF715B'}]
        }
    }
    render() {
        console.log(this.state.colors)
        const mappedColors= this.state.colors.map((color, i)=>{
           return <Color color={color.color} key={i}/>
        })
        return (
            <ColorContainer>
                {mappedColors}
            </ColorContainer>
        )
    }
}


const ColorContainer= styled.div`
display: flex;

`