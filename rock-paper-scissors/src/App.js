import React from 'react';
import './App.css';
import Header from './Header';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import Table from './Table';

const AppStyled = styled.main`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap');
    font-family: 'Barlow Semi Condensed', sans-serif;
  }
  min-height: 100vh;
  padding: 2em;
  color: white;
  background-image: radial-gradient(circle at top, hsl(214, 47%, 23%) 20%, hsl(237, 49%, 15%) 50%);
`

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <Header />
        <Table />
      </Wrapper>
    </AppStyled>
  );
}

export default App;
