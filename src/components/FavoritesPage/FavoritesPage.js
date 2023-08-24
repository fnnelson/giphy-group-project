import React from 'react';
import axios from 'axios';


export function FavoritesPage() {
    
    const getFavorites = () => {
        axios.get('/api/favorite')
        .then(response => {
            
        })
    }
    
    
    return <div>
    <h1>Favorites</h1>

    

    </div>
}
