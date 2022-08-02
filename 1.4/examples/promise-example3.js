const moviePlanets = function(movieNum) {
    const url = 'https://swapi.dev/api/films/'

    $.getJSON(url  + movieNum + '/')
    .then(function(response){
        console.log(response.title)

        response.planets.forEach(p => $.getJSON(p)
        .then(pl => console.log(pl.name)))
    })
    .catch(error => console.log(error))
}

moviePlanets(1)