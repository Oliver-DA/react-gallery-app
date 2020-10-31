import React from 'react';
import Photo from './Photo';


const PhotoContainer = ({ photos,title }) => {
    
    //Go over the photos array pass to PhotoContainer as props and display a Photo component for each element
    let results = photos.map( photo => (
        <Photo
            url = {`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            key = {photo.id}
        />
    ))

    return (

        <div className = "photo-container">
        <h2>{ title }</h2>
            <ul>
                {/*Photos are displayed here*/}
                { results }
            </ul>
        </div>
    )
}

export default PhotoContainer;