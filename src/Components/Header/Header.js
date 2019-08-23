import React from 'react'
import styled from 'styled-components'

export default function Header() {
    return (
        <Nav>
            <h3>Color Palette Creator</h3>
        
        </Nav>
    )
}


const Nav= styled.header`
@import url('https://fonts.googleapis.com/css?family=Rubik&display=swap')
width: 100%;
height: 6em;
background-color: #3DA5D9;
color: white;
font-size: 2em;
font-family: 'Rubik', sans-serif;
display: flex;
justify-content: center;
align-items: center;
`