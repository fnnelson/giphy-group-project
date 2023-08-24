import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";



function GifItem({ gif}) {
   
    const favClick = () => {
        axios.post ('/api/favorite', gif)
        console.log('favorites in handle favorites:', gif)
        .then(response => {
            dispatchEvent({type: 'FETCH_SEARCH'})
        })
    }
   
  
    return (
        <>
            <div><img src={gif} />
            </div>

            <div>
                <button onClick={favClick()}>Favorite

                </button>
            </div>

        </>

    )


}

export default GifItem