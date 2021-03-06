import React from 'react';
import styled from 'styled-components';
import Score from './Score.js'

const HeaderStyled = styled.div`
    border: 3px solid rgba(255, 255, 255, .29);
    border-radius: .5em;
    color: white;
    padding: 12px 12px 12px 23px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin: 0;
      font-size: 18px;
      line-height: 16px;
      font-weight: 700;
      text-transform: uppercase;
    }
    @media screen and (min-width: 768px) {
        padding: 24px;
        h1 {
            font-size: 2em;
            line-height: .9;
        }
    }
`

function Header() {
    return (
        <HeaderStyled>
            <h1>
                Rock<br/> Paper<br/> Scissors
            </h1>
            <Score />
        </HeaderStyled>
    )
}

export default Header;