import React, { Component } from 'react'
import styled from 'styled-components'

export default class SelectedColors extends Component {

    constructor(){
        super()
        this.state={
            SelectedColors: []
        }
    }
    render() {
        return (
            
            <div>
                {this.state.SelectedColors.length === 0 
                ?
                <div>
                <p>Colors will go here</p>
                   
                </div>
                :
                <div>
                </div>}
                
            </div>
        )
    }
}


