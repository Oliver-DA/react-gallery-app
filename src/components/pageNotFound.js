import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = ({ match}) => {

    //Wrong url enter by the user
    const { badUrl } = match.params

    return (

        <div>
            <h1>404 Page Not Found</h1>
            <span>Seems that <p className = "badUrl">/{ badUrl }</p> is not the page you're looking for</span>
            <Link to ="/" >Go back to the homePage</Link>
        </div>
    )
}

export default PageNotFound;