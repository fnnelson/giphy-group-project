import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GifItem from './GifItem';
import axios from 'axios';

export function SearchPage() {
    const [newSearch, setNewSearch] = useState('');
    const dispatch = useDispatch();
    const giphyList = useSelector(store => store.giphyList)
    // const [favorites, setFavorites] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: 'FETCH_SEARCH', payload: newSearch })
    }



    const handleFavorites = () => {


        history.push('/favorites');
    }

    return (
        <div>
            <h1>Giphy Search!</h1>;

            <form onSubmit={handleSubmit}>
                <input type='text'
                    placeholder='Search for GIFs! '
                    value={newSearch}
                    onChange={(event) => setNewSearch(event.target.value)}
                />
                <button type='submit'>Search
                </button>
            </form>

            <div>
                {giphyList.map((gif) => {
                    return <GifItem key={gif.id} gif={gif.images.original.url} />
                })}
            </div>
            <button onClick={handleFavorites}>
                Go To Favorites
            </button>


        </div>


    )
}
