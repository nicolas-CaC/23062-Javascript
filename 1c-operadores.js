function operadores() {

    let a = 1
    let b = 2

    // Operadores binarios
    console.log(a + b) // 3
    console.log(b + 2) // 4

    a = a + 4
    console.log(a) // 5

    a += 5
    console.log(a) // 10


    // Operadores unarios
    console.log(a++) // 10
    console.log(++a) // 12

    // negación
    console.log(!true) // false

    a === 3

    if (a === 3) console.log('XX')
    else console.log('YY')





    // Operador Ternario
    a === 2
        ? console.log('XX')
        : console.log('YY')

    console.log(a === 3 ? 'aa' : 'bb')

    a = 3
    b = 4

    // operador AND &&
    if (a === 2 && b === 5) console.log('a y b coinciden en la comparativa')
    else console.log('las variables no coinciden')

    // operador OR ||
    if (a === 2 || b === 5) console.log('a o b coinciden en la comparativa')
    else console.log('las variables no coinciden--')

    // cortocircuito
    a === 2 && b === 5 && console.log('dd')
}