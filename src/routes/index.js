import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'contact'
}

//manejador de rutas
const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')

    //traer el header
    header.innerHTML = await Header()

    let hash = getHash()

    let route = await resolveRoutes(hash)

    //compara el valor de las rutas con el hash que obtenemos
    let render = routes[route] ? routes[route] : Error404

    content.innerHTML = await render()
}

export default router 