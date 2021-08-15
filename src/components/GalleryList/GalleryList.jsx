import React from 'react'
import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList, addLikes}) {
    return(
        <>
        <div>
         {galleryList.map(item =>
         <GalleryItem
         key= {item.id}
          item = {item}
          setLikes={addLikes}/>)}
        </div>
        </>
    )
}

export default GalleryList