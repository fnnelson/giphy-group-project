

function FavItem({fav}) {
    console.log('fav in favItem:', fav.url)

    return (
        <div><img src={fav.url}/>
        </div>
    )
}

export default FavItem