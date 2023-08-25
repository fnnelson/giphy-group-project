import React from 'react';
import axios from 'axios';
import FavItem from './FavItem';
import { useState, useEffect } from 'react';

export function FavoritesPage() {

    useEffect(() => {
        getFavorites();
    }, [])

    const [favList, setFavList] = useState([]);

    const getFavorites = () => {
        axios.get('/api/favorite')
            .then(response => {
                setFavList(response.data);
                console.log('Success getting favList:', favList)
            })
            .catch(error => {
                console.log('Error getting favorites,', error)
            })
    }

    console.log("favList is", favList)

    return <div>
        <h1>Favorites</h1>
        <div>
            {favList.map((fav) => {
                console.log('fav in map:', fav)
                return <div key={fav.id} >
                    <FavItem fav={fav}/>
                    </div>
            })}
                </div>


    </div>
}
