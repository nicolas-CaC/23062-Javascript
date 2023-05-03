function condicionales() {

    // let nombre = prompt('Cómo te llamas?')

    // if (nombre === 'Nico') {
    //     console.log('La contraseña es asdfasdfasdf')
    // } else {
    //     alert('No eres bienvenido')
    // }

    let a = 1
    let b = 2

    let c = a === b

    if (c) {
        console.log('a y b tienen los mismos valores')
    } else {
        console.log('a y b tienen valores distintos')
    }

    if (a == '1') {
        console.log('se cumple la condición')
    } else {
        console.log('no se cumple')
    }

    // false = 0
    // true = 1

    // '' = false
    // ' ' = true

    a = 2
    console.log({ a })

    if (a === 3) {
        console.log('a es igual a 3')
    } else if (a === 2) {
        console.log('a es igual a 2')
    } else if (a === 1) {
        console.log('a es igual a 1')
    } else {
        console.log('a no vale ni 3, ni 2, ni 1')
    }

    if (a == '2') {
        console.log('a es igual a "2"')
    }

    console.log('fin de la función')

}