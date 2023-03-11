import React, { useState } from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
  return (
    <Container>
      <AppBar>
        <Toolbar>
          <Typography variant='h6'>
            Shopping List
          </Typography>
        </Toolbar>    
      </AppBar>
    </Container>
  );
}

export default App;
