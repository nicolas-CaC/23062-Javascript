const math = () => {

    const pi = Math.PI
    console.log(pi)

    const x = 3.2
    const y = 3.7

    // Round
    const round = Math.round(pi)
    console.log(round) // 3

    console.log(Math.round(x)) // 3
    console.log(Math.round(y)) // 4
    console.log('\n')

    // Ceil
    const ceil = Math.ceil(pi)
    console.log(ceil) // 4

    console.log(Math.ceil(x)) // 4
    console.log(Math.ceil(y)) // 4
    console.log('\n')

    // Floor
    const floor = Math.floor(pi)
    console.log(floor) // 3

    console.log(Math.floor(x)) // 3
    console.log(Math.floor(y)) // 3
    console.log('\n')

    // Trunc => Me devuelve la parte entera del nro
    const trunc = Math.trunc(pi)
    console.log(trunc) // 3

    console.log(Math.trunc(x)) // 3
    console.log(Math.trunc(y)) // 3
    console.log('\n')

    // Random (0 al 1)
    const random = Math.random()
    console.log(random)

    const hasta10 = random * 10
    console.log('hasta 10:', hasta10)

    const hasta100 = Math.trunc(random * 100)
    console.log('hasta 100:', hasta100)

    const max = 30
    const min = 10
    const del10al30 = Math.trunc(random * (max - min) + min)
    console.log('Del 10 al 30:', del10al30)
}
