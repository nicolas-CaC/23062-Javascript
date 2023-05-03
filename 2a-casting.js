function casteo() {

    let a = 1
    let b = '2'
    let c = true

    console.log(typeof a)

    // Cadenas

    a = a.toString()
    console.log(a)
    console.log(typeof a)

    console.log('\n')

    // Booleanos

    a = Boolean(a)
    console.log(a)
    console.log(typeof a)

    console.log('\n')

    // Numberos (Number, parseInt, parseFloat)

    b = Number(b)
    console.log({ b })
    console.log(typeof b)

    console.log('\n')

    b = '2.45'
    c = parseInt(b)
    c = parseFloat(b)
    console.log({ c })
    console.log(typeof c)
}