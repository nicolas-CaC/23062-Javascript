function funcion() {
    console.log('Soy la función')
}

// setTimeout(() => {
//     funcion()
// }, 1500)

// setInterval(() => {
// funcion()
// }, 3000);

const condicion = false

const promesa = () => new Promise((resolve, rejected) => {

    setTimeout(() => {
        condicion
            ? resolve('a')
            : rejected('b')
    }, 3000);
})


// promesa()
//     .then(res => console.log(res))
//     .catch(err => console.log('Hubo un error', err))
//     .finally(() => console.log('Finalizado'))

const url = (pokemon) => `https://pokeapi.co/api/v2/pokemon/${pokemon}`



const mostrarPokemon = (data) => {
    const mainTag = document.getElementsByTagName('main')[0]

    const img = document.createElement('img')
    img.src = data.sprites.other.home.front_default

    mainTag.append(img)
}



fetch(url('pikachu'))
    .then(res => res.json())
    .then(data => mostrarPokemon(data))
    .catch(err => alert('problemas con la api'))

fetch(url('farfetchd'))
    .then(res => res.json())
    .then(data => mostrarPokemon(data))
    .catch(err => alert('problemas con la api'))




const getPokemon = async (pokemon) => {
    try {
        const res = await fetch(url(pokemon))
        const data = await res.json()
        mostrarPokemon(data)
    }
    catch (error) {
        alert('Ups! NO SE PUDO CARGAR =)')
    }
}

getPokemon('charmander')
getPokemon('squirtle')

