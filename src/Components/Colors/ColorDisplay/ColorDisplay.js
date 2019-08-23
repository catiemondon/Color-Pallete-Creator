import React, { Component } from 'react'
import Color from '../Color/Color';
import styled from 'styled-components'
import axios from 'axios'

export default class ColorDisplay extends Component {
    constructor(){
        super()
        this.state={
            colors: []
        }
    }

    componentDidMount=()=>{
        axios.get('/api/colors')
        .then((res)=>{
            this.setState({
                colors: res.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render() {
        
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