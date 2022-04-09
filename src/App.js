
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'; //axios library connects to backend

function App() {

  const [cakeName, setCakeName] = useState('');
  const [cakeReview, setReview] = useState('');
  const [cakeReviewList, setCakeList] = useState([]); //set as [] as map function only allows array

  //GET DATA FROM DATABASE
  useEffect(() => {
    axios.get('http://localhost:3001').then((response) => {
      console.log(response.data);
      setCakeList(response.data);
    });
  }, []);

  //INSERT DATA FROM SUBMIT BUTTON
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


        {cakeReviewList.map((val, key) => {
          return (
            <div className='card'>
              <h1> Cake Awesome name: {val.name} </h1>
              <p>| Cake Review: {val.review} </p>

            
              <input type="text" id="updateInput" />

              <button>Update</button>

              <button>Delete</button>
              


            </div>
          )
          

        })}


        
        

      </div>

      

    </div>

  );
}

export default App;

//npm start
