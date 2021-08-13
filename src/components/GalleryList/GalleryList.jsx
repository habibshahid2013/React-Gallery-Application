import React from 'react'

function GalleryList() {
    return(
        <>
        <div>
         <img {galleryList.map(item =>
         <GalleryItem item = {item}/>)}/>
        </div>

        </>
    )
}

export default GalleryList;