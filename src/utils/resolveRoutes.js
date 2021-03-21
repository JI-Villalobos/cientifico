//conectar las rutas con los templates
const resolveRoutes = (route) => {
    //la cantidad de personajes es < 1000
    //por lo tanto la longitud de caracteres no supera 3
    if(route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id'
        return validRoute
    }

    //si no cumple con la condición retorna /about
    return `/${route}`
}

export default resolveRoutes