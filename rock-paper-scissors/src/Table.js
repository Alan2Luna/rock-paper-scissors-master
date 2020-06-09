import React, { useState } from 'react';
import styled from 'styled-components';
import Token from './Token';
import { WhiteButton } from './Button';

const TableStyled = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
    grid-gap: 30px 50px;
    margin: 2em 0;
    position: relative;
    & div:nth-of-type(3) {
        grid-column: span 2;
    }
    .in-game {
        text-align: center;
        text-transform: uppercase;
        font-size: .8em;
        font-weight: 700;
        letter-spacing: 1px;
    }
    .results {
        text-align: center;
    }
    .line {
        display: ${({ playing }) => !playing ? 'block' : 'none'} ;
        height: 14px;
        background-color: rgba(0, 0, 0, .2);
        position: absolute;
        left: 60px;
        right: 60px;
        top: 58px;
        &:before {
            content: '';
            height: 14px;
            background-color: rgba(0, 0, 0, .2);
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            transform: rotate(60deg);
            transform-origin: left top;
        }
        &:after {
            content: '';
            height: 14px;
            background: rgba(0, 0, 0, .2);
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            transform: rotate(-60deg);
            transform-origin: right top;
        }
    }
`
const elements = [
    'paper',
    'scissors',
    'rock',
]

function Table() {
    const [playing, setPlaying] = useState(false);
    const [pick, setPick] = useState('');
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    function onClick(name) {
        setPlaying(true);
        setPick(name);
        const housePick = elements[getRandomInt(0,3)]
        console.log('la casa elegió ', housePick);
        const results = playWithIA(name, housePick);
        console.log(results);
    }
    function playWithIA(pick, housePick) {
        if(housePick === pick) {
            return 'draw';
        }
        if (pick === 'paper') {
            if (housePick === 'scissors') {
                return 'lose';
            }
            if (housePick === 'rock') {
                return 'win';
            }
        }
        if (pick === 'scissors') {
            if (housePick === 'paper') {
                return 'win';
            }
            if (housePick === 'rock') {
                return 'lose';
            }
        }
        if (pick === 'rock') {
            if(housePick === 'paper') {
                return 'lose';
            }
            if (housePick === 'scissors') {
                return 'win';
            }
        }
    }
    function handleTryAgainClick() {
        setPlaying(false);
    }
    return (
        <TableStyled playing={playing}>
            <span className="line"></span>
            {
                !playing ? (
                    <>
                        <Token name="paper" onClick={onClick}/>
                        <Token name="scissors" onClick={onClick}/>
                        <Token name="rock" onClick={onClick}/>
                    </>
                ) : (
                    <>
                        <div className="in-game">
                            <Token name={pick}/>
                            <p>You Picked</p>
                        </div>
                        <div className="in-game">
                        <Token />
                            <p>The house Picked</p>
                        </div>
                        <div className="results">
                            <h2>You ???</h2>
                            <WhiteButton onClick={handleTryAgainClick}>
                                Try Again
                            </WhiteButton>
                        </div>
                    </>
                )
            }
        </TableStyled>
    )
}

export default Table;