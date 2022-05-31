import './App.css';
import { useState, useEffect } from 'react';
import Post from './components/Posts';
import Form from './components/Form';

function App() {
  const [post, setPost] = useState([])
  const [editedPost, setEditPost] = useState(null)



  useEffect(() => {
  fetch('http://127.0.0.1:5000/', {
    'method':'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(res => setPost(res))
  .catch(err => console.log(err))
  }, [])

  const editPost = (post) => {
    setEditPost(post)
  }

  const newData = (onePost) => {
    const newPost = post.map(myPost => {
      if (myPost.id === onePost.id) {
        return onePost
      }
      else {
        return myPost
      }
    })
    setPost(newPost)
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Post post = {post} editPost = {editPost}/>
      {editedPost ?  <Form post = {editedPost} newData={newData} />: null}
     
          </div>
  );
}

export default App;
