import React from 'react';
import styled from 'styled-components';

const ScoreStyled = styled.div`
    background: white;
    text-align: center;
    padding: 10px 0;
    border-radius: 8px;
    width: 80px;
    small {
        color: hsl(229, 64%, 46%);
        text-transform: uppercase;
        font-size: 10px;
        font-weight: bold;
    }
    p {
        color: hsl(229, 25%, 31%);
        font-size: 40px;
        margin: 0;
        font-weight: 700;
        font-family: Arial;
        letter-spacing: -5px;
        position: relative;
        left: -2.5px
    }
`

function Score() {
    return (
        <ScoreStyled>
            <small>Score</small>
            <p>12</p>
        </ScoreStyled>
    )
}

export default Score;