import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'

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
}

export default router 