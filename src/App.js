
import { useState } from 'react';
import './App.css';
import axios from 'axios'; //axios library connects to backend

function App() {

  const [cakeName, setCakeName] = useState('');
  const [cakeReview, setReview] = useState('');

  const submitReview = () => {
    axios.post('http://localhost:3001/api/insert', {
      cakeName: cakeName, 
      cakeReview: cakeReview,
    }).then(()=>{
      alert("successful insert!");
    });

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
