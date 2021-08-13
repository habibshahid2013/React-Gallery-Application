import React from 'react';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';


function App() {

  let [galleryList, setGalleryList] = useState([])

  useEffect(() =>{
    //Similar to onReady running doe on load
    FetchGallery();

  })

  const FetchGallery = () => {
    //when declaring a FetchGallery that will be responsible for 
    //fetching gallery from the servers
    axios.get('/gallery').then((response) => {
      //Axios.get is requesting data from the server which becomes the response.data
      console.log('this is the response from fetchGallery', response.data);
      //Logging data to test the response data
      setGalleryList(response.data)
      // take the data from the response and assign it to the setGalleryList
    }).catch(error => {
      console.log('GET /Gallery', error);
    });
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
