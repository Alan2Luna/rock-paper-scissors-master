import React, { createContext, useState } from 'react';
import './App.css';
import Header from './Header';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Table from './Table';
import Rules from './Rules';

export const ScoreContext = createContext();

const AppStyled = styled.main`
  font-family: 'Barlow Semi Condensed', sans-serif;
  color: white;
  background-image: radial-gradient(circle at top, hsl(214, 47%, 23%) 20%, hsl(237, 49%, 15%) 50%);
  
  .app-content {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    padding: 2em;
    box-sizing: border-box;
  }
  `

function App() {
  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider value={{
      score,
      setScore,
    }}>
      <AppStyled>
        <Wrapper>
          <div className="app-content">
            <Header />
            <Table />
            <Rules />
          </div>
        </Wrapper>
      </AppStyled>
    </ScoreContext.Provider>

  );
}

export default App;
