import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";



function GifItem({ gif }) {

    const dispatch = useDispatch();

    const favClick = () => {
        console.log('favorites in handle favorites:', gif)
        const gifObj = { url: gif }
        axios.post('/api/favorite', gifObj)
            .then(response => {
            })
    }


    return (
        <>
            <div><img src={gif} />
            </div>

            <div>
                <button onClick={() => favClick()}>Favorite

                </button>
            </div>

        </>

    )


}

export default GifItem