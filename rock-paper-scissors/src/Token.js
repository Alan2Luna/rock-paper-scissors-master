import React from 'react';
import styled from 'styled-components';

const TokenStyled = styled.div`
    width: 130px;
    height: 125px;
    border: 16px solid ${({color}) => color.base};
    padding: ${({ name }) => name === 'default' ? '16px' : '0'};
    box-sizing: border-box;
    border-radius: 50%;
    display: flex;
    cursor: pointer;
    box-shadow: 0 5px 0 ${({color}) => color.border};
    position: relative;
    z-index: 2;
    &:active {
        transform: scale(.9);
    }
    .box {
        background-color: ${({ name }) => name === 'default' ? '#122343' : 'white'};
        box-shadow: 0 -4px 0 ${({ name })=> name === 'default' ? 'transparent' : '{#babfd4};'};
        flex: 1;
        align-self: stretch;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

const colors = {
    paper: {
        base: '#516ef4',
        border: '#2543c3',
    },
    rock: {
        base:'#de3a54',
        border:'#980e31',
    },
    scissors: {
        base:'#eca81e',
        border:'#c76c14',
    },
    default: {
        base: 'transparent',
        border: 'transparent',
    }
}

function Token({ name = 'default', onClick }) {
    function handleClick() {
        onClick(name);
    }
    const color = colors[name];
    return (
        <TokenStyled color={color} onClick={handleClick} name={name}>
            <div className="box">
                <img src={`./images/icon-${name}.svg`} alt=""/>
            </div>
        </TokenStyled>
    )
}

export default Token;