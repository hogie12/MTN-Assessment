import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCard from './component/card';
import {Container} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  return (
    <Container className="App">
      <PostCard tittle="test tittle" body="test body"/>
    </Container>
  );
}

export default App;
