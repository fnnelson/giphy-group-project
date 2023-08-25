import React from 'react';
import axios from 'axios';
import FavItem from './FavItem';


export function FavoritesPage() {
    let favList = []; 

    const getFavorites = () => {
        axios.get('/api/favorite')
        .then(response => {
            console.log('Success getting favorites:', response)
            favList = response
        })
        .catch(error => {
            console.log('Error getting favorites,', error)
        })
    }
    
    
    return <div>
    <h1>Favorites</h1>
    <div>
            {favList.map((fav) => {
                return <FavItem key={fav.id} fav={fav}/>
            })}
        </div>
    

    </div>
}
