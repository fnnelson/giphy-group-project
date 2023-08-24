import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";


function GifItem({gif}) {
    
    const [favorites, setFavorites] = useState([]);

    const favClick = () => {
setFavorites([...favorites, gif])
    }
    
    return(
        <>
        <div><img src={gif}/>
        </div>

        <div>
            <button onClick={favClick}>Favorite

            </button>
        </div>

        </>

    )


}

export default GifItem