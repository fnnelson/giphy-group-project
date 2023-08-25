import axios from "axios"

function FavItem({ fav }) {
    console.log('fav in favItem:', fav.url)

    const handleCategory = (id, category) => {

        let newCategory;
        switch (category) {
            case 'funny':
                newCategory = 1;
                break;
            case 'cohort':
                newCategory = 2;
                break;
            case 'cartoon':
                newCategory = 3;
                break;
            case 'nsfw':
                newCategory = 4;
                break;
            case 'meme':
                newCategory = 5;
                break;
            default:
                break;
        }
        console.log('fav id is:', id);
        console.log('category is', category)
        axios.put(`/api/category/${id}/${newCategory}`)
            .then(response => {
                console.log("success on PUT:", response)
            })
            .catch(error => {
                console.log("error")
            })
    }

    return (<>
        <div>
            <img src={fav.url} />
        </div>
        <button onClick={() => handleCategory(fav.id, 'funny')}>Funny</button>
        <button onClick={() => handleCategory(fav.id, 'cohort')}>Cohort</button>
        <button onClick={() => handleCategory(fav.id, 'cartoon')}>Cartoon</button>
        <button onClick={() => handleCategory(fav.id, 'nsfw')}>NSFW</button>
        <button onClick={() => handleCategory(fav.id, 'meme')}>Meme</button>
    </>
    )
}

export default FavItem