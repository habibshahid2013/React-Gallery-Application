function GalleryItem ({item}){

    return (
        <>
        <div>
            <img key ={item.id} src= {item.path} />
        </div>

        </>

    );
}
export default GalleryItem;