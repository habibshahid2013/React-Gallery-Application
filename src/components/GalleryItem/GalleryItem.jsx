import React from 'react';
import {useState} from 'react';

function GalleryItem ({item, setLikes}){

    //brought in needed props for the item ID & path
  let [useImage, setUseImage] = useState(true)
   
  function toggleImg(){

      setUseImage(false)
      setTimeout(() => {
          setUseImage(true);
      }, 4000);

  }
   
  if (useImage){

    return (
        //from here we pulled the key and the path from the server to render it to the dom. 
        <>
        <div>
                <img className="structureThings" onClick={() => toggleImg() }key ={item.id} src= {item.path} />
        
            <p>{item.likes}</p>
                <button onClick={() => setLikes(item.id)}> I love it</button>
        </div>{/* the button onClick passes through the props with the setlikes(item.id) being activated */ }
        </>

    );
}
    return(
        <>
            <div>
               <div className="structureThings">{item.description}</div>
                <p>{item.likes}</p>
                <button onClick={() => setLikes(item.id)}> I love it</button>
            </div>{/* the button onClick passes through the props with the setlikes(item.id) being activated */}
        </>
    )


}


export default GalleryItem;