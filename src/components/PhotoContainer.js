import React from 'react';
import Photo from './Photo';

const PhotoContainer = ({ photos,title }) => {

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
                {/*Here goes the photo*/}
                { results }
            </ul>
        </div>
    )
}

export default PhotoContainer;