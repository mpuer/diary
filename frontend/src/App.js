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

  const openForm = () => {
    setEditPost({title:'', text:''})
  }

  const createdPost = (newPost) => {
    const newPosts = [...post, newPost]
    setPost(newPosts)
  }

  const deletePost = (onePost) => {
    const newPost = post.filter(myPost => {
      if (myPost.id === onePost.id) {
        return false;
      }

      return true;
    })

    setPost(newPost)

  }
  return (
    <div className="App">
      <div className='row'>
        <div className='col'>
      <h1>Hello World!</h1>

        </div>

        <div className='col'>
        <button className='btn btn-success' onClick={openForm}>New Post!</button>

        </div>
      </div>
      <Post post = {post} editPost = {editPost} deletePost = {deletePost}/>
      {editedPost ?  <Form post = {editedPost} newData={newData} createdPost={createdPost}/>: null}
     
          </div>
  );
}

export default App;
