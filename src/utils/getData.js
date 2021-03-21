const API = 'https://rickandmortyapi.com/api/character/'

const getData = async (id) => {

    //si el id no se especifica o no existe trae toda la api de personajes
    const apiURL = id ? `${API}${id}` : API

    try {
        const response = await fetch(apiURL)
        const data = await response.json()
        return data
    }catch(error){
        console.log('Fetch error', error);
    }
}

export default getData