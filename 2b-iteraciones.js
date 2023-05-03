function iteraciones() {

    let alumnos = ['Pepe', 'Juan', 'Rodolfo', 'Gonzalo', 'Roman']

    // FOR

    for (let i = 0; i < alumnos.length; i++) {
        console.log(alumnos[i])
    }

    console.log('finalizó el for')

    // WHILE

    let i = 0;
    while (i < 10) {
        console.log('i en while:', ++i)
    }

    console.log('finalizó el while')

    // DO while

    i = 10
    do {
        console.log('i en do:', i)
        i++
    } while (i < 10)

    // SWITCH

    console.log('\n')

    i = 2
    switch (i) {
        case 'a':
            console.log('a')
            break
        case 'b':
            console.log('b')
            break
        case 1:
            console.log(1)
            break
        case 2:
            console.log(2)
            break
        default:
            console.log('default')
            break
    }

}