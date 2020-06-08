import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';

const RulesStyled = styled.div`
    .close-button {
        margin-top: 2em;
    }
    text-align: center;
    .rules-overlay {
        background-color: white;
        padding: 4em 0;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        h2{
            color: #3B4262;
            text-transform: uppercase;
            font-weight: 700;
            font-family: Arial;
            letter-spacing: -2px;
            margin-bottom: 1em;
        }
    }
`

function Rules() {
    const [visible, setVisible] = useState(false);
    function handleToggleClick() {
        setVisible(!visible)
    }
    return (
        <RulesStyled>
            {
                (visible) && (
                    <div className="rules-overlay">
                        <h2>Rules</h2>
                        <img src="./images/image-rules.svg" alt="rules"/>
                        <img className="close-button" onClick={handleToggleClick} src="./images/icon-close.svg" alt="close rules"/>
                    </div>
                )
            }
            <Button onClick={handleToggleClick} />
        </RulesStyled>
    )
}

export default Rules;