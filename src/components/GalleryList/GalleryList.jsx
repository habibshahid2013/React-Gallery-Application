import React from 'react'
//GalleryItem is being imported because it's being passed through the return. 
import GalleryItem from "../GalleryItem/GalleryItem";

//the props galleryList & addLikes are being passed through the function. 
//Then the state is being mapped sending the data to Gallery item to be prop over to 
//GalleryItem 
function GalleryList({galleryList, addLikes}) {
    return(
        <>
        <div>
         {galleryList.map(item =>
         //here you can see that gallery Item is being being sent data to be used in it's
         //component. 
         <GalleryItem
         key= {item.id}
          item = {item}
          setLikes={addLikes}/>)}
        </div>
        </>
    )
}

export default GalleryList