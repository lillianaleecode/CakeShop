
import { useState } from 'react';
import './App.css';
import Axios from 'axios';

function App() {

  const [cakeName, setCakeName] = useState('')
  const [review, setReview] = useState('')

  const submitReview = () => {
    Axios.post('http://localhost:3000/');

  }

  return (
  
    <div className='App'>
      <h1>CRUD APPLICATION</h1>

      <div className='form'>
        <label>Cake Name</label>
        <input type="text" name="cakeName" onChange={(e)=> {
          setCakeName(e.target.value)

        }}/>

        <label>Cake Review:</label>
        <input type="text" name="review" onChange={(e)=> {
          setReview(e.target.value)

        }}/>

        <button onClick={submitReview}>Submit</button>

      </div>

      

    </div>

  );
}

export default App;

//npm start
