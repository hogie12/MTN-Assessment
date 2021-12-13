import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostCard from './component/card';
import {Container} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [post, setPost] = useState([])
  const getData = async() =>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    const data = res.data
    setPost(data)
  }
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <Container className="App pt-5 d-flex flex-wrap justify-content-center">
      {post.map((data) => (
        <PostCard tittle={data.title} body={data.body}/>
      ))}
    </Container>
  );
}

export default App;
