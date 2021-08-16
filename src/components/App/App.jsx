import React from 'react';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import Header from '../App/Header/Header';



function App() {

  let [galleryList, setGalleryList] = useState([])

  useEffect(() =>{
    //Similar to onReady running doe on load
    FetchGallery();

  },[])

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
      console.log('GET /gallery', error);
    });
  }
  
  let insertLikes = (id) => {
    axios.put(`/gallery/like/${id}`
    //axios doesn't like the method: url: way. 
    ).then(response => {
      console.log('insert likes /PUT', response);
      //This sends the data to fetchGallery.
      FetchGallery();
    }).catch(error => {
      console.log('there is a catch error',error);
    })
  }


    return (
      <div className="App">
        <Header/>
        <p>This is my Gallery</p>
        <GalleryList 
        //gallerylist (state) & addlikes are both being propped through galleryLIst Component.
          galleryList = {galleryList}
          addLikes = {insertLikes}
          />
          <button> APP JSX button</button>
       
      </div>
    );
}

export default App;
