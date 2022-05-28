import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [post, setPost] = useState([])


  useEffect(() => {
  fetch('http://127.0.0.1/get', {
    'method':'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))
  }, [])



  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
