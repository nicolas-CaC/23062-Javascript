const arrays = () => {

    const array = [1, 2]
    console.log(array)

    console.log(array[0])

    array[1] = 45
    console.log(array[1])

    array[2] = true
    console.log(array[2])

    array[3] = 'tas re loco'
    console.log(array)

    array.push('hola')
    console.log(array)

    array.push('chau')
    console.log(array)

    array.pop()
    console.log(array)

    array.shift()
    console.log(array)

    array.unshift(345)
    console.log(array)


    // For In
    for (let index in array)
        console.log(typeof (array[index] * 3))

    // For Of
    console.log(array)

    for (let value of array)
        console.log(value * 5)


    // ForEach
    array.forEach((item, index, array) => console.log(array, index, item * 5))

    const foreach = array.forEach((item) => item * 2)


    // Map
    const map = [0, 2, 4, 5, 8].map((item, index) => {
        return item % 2 === 0
            ? `Esta posición (${index}) es par`
            : 'Esta posición es impar'
    })
    console.log({ map })


    // // Find
    // const find = [1, 2, 3, 4, 3, 2, 4, 2, 3, 1, 2].find((value) => value === 2)
    // console.log({ find })

    // // Filter
    // const filter = [1, 2, 3, 4, 3, 2, 4, 2, 3, 1, 2].filter((value) => value === 2)
    // console.log({ filter })


    const persona1 = { nombre: 'juan', edad: 15 }
    const persona2 = { nombre: 'jose', edad: 18 }
    const persona3 = { nombre: 'susana', edad: 12 }
    const persona4 = { nombre: 'noelia', edad: 21 }

    const personas = [persona1, persona2, persona3, persona4]

    const find = personas.find((persona) =>
        persona.edad > 15 && persona.edad < 20)
    console.log(find)

    const filter = personas.filter((persona) =>
        persona.edad > 15 && persona.edad < 20)
    console.log(filter[0])



    const array2 = ['Ba', 'Aa', 'a', 'b', 'bA', 'AA']

    // Reduce
    const reduce = array2.reduce((accum, value) => {
        console.log('accum:', accum, 'valor:', value)
        return accum * value
    }, 100)
    console.log({ reduce })



    // At
    console.log(array2.at(-1))


    // Sort
    console.log({ array2 })
    // Menor a Mayor:
    // console.log(array2.sort())

    // Mayor a Menor:
    const sortMaxMin = array2.sort((a, b) => a < b ? 1 : -1)
    console.log(sortMaxMin)



    //Some
    const array3 = ['a', 'b', 'c', 1, 2, 3, 4, true]

    const some = array3.some(value => value >= 4)
    console.log({ some })



    // Every 
    const every = array3.every(value => typeof value != 'object')
    console.log({ every })


    // Concat
    console.log(array2)
    console.log(array)
    const concat = array.concat(array2)
    console.log({ concat })



    // Includes
    const includes = array.includes(345)
    console.log({ includes })



    // Join
    const join = array.join(' separacion ')
    console.log(array)
    console.log({ join })


    console.clear();
    // Split
    const split = 'Hola mundo'.split('o')
    console.log({ split })


    const a = [0, 1, 2, 'a', true]

    console.clear();
    // Slice
    const slice = a.slice(1, 3)
    console.log(slice)

    // Splice
    a.splice(2, 2)
    console.log(a)

}
