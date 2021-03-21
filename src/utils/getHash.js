//encargado de obtener el hash de la ruta
//slice(1) elimina el #
//split('/')elimina los slash
const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'


export default getHash    
