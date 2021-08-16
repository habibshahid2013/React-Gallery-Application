import React from 'react';
import {useState} from 'react';

//useState is being imported because of the use of it within the image. 

function GalleryItem ({item, setLikes}){

    //brought in needed props for the item ID & path
  let [useImage, setUseImage] = useState(true)
   
  function toggleImg(){
    //since the useState is set to true by default. we will proceed to use the toggle function to change the boolean 
    //for 4 seconds so that the return will run the conditional for the describtion for a brief while
      setUseImage(false)
      setTimeout(() => {
          setUseImage(true);
      }, 4000);

  }

  //We leverage the If statement to use a conditional rendering. we pass through the State and alter the default boolean. 
  //providing two different returns for the outcome of the rending  
  if (useImage){

    return (
        //from here we pulled the key and the path from the server to render it to the dom. 
        <>
        <div>
                <img className="structureThings" onClick={() => toggleImg() }key ={item.id} src= {item.path} />
        
            <p>{item.likes} people love this</p>
                <button onClick={() => setLikes(item.id)}> I love it</button>
        </div>{/* the button onClick passes through the props with the setlikes(item.id) being activated */ }
        </>

    );
}
    //added the className to provide various CSS from the class
    return(
        <>
            <div>
               <div className="structureThings">{item.description}</div>
                <p>{item.likes} people love this</p>
                <button onClick={() => setLikes(item.id)}> I love it</button>
            </div>{/* the button onClick passes through the props with the setlikes(item.id) being activated */}
        </>
    )


}


export default GalleryItem;