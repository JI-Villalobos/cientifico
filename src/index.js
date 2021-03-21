import router from './routes'


window.addEventListener('load', router)

//escucha las rutas en las que nos estamos moviendo
window.addEventListener('hashchange', router)