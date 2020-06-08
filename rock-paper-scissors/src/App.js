import React from 'react';
import './App.css';
import Header from './Header';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Table from './Table';
import Rules from './Rules';

const AppStyled = styled.main`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
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
  return (
    <AppStyled>
      <Wrapper>
        <div className="app-content">
          <Header />
          <Table />
          <Rules />
        </div>
      </Wrapper>
    </AppStyled>
  );
}

export default App;
