const desestructurar = () => {

    console.clear();

    // Desestructuracion Objeto

    const pikachu = { a: 1, b: 2, name: 'Quique', direccion: { whatsapp: '', domicilioCasa: '', domicilioTrabajo: { direccion: '', telefonos: { numeroFijo: '' } } } }
    const objeto = { a: 3, b: 2, name: 'Rodolfo' }

    const { a, b, name } = pikachu

    console.log(name)
    console.log(a)
    console.log(b)
    console.log(name)
    console.log(a)
    console.log(b)

    // Desestructuracion Funcion

    function mostrarNombre({ name, a }) {
        console.log('Valor de name:', name)
        console.log('Valor de name:', name)
        console.log('Valor de name:', name)
        console.log('Valor de name:', name)
        console.log('Valor de a:', a)
    }

    mostrarNombre(pikachu)
    mostrarNombre(objeto)

    // Desestructuracion Array
    const array = [1, 2, 3, 4, 5, 6]

    const [pos1, pos2, , pos4] = array

    console.log(pos1, pos2, pos4)

    console.clear();

    // Spread Operator

    const array2 = array
    const arraySpread = [...array]
    array2[8] = 10
    console.log({ array2 })
    console.log({ array })
    console.log({ arraySpread })

    const objetoSpread = { ...objeto, id: 2, a: 12 }
    console.log({ objeto })
    console.log({ objetoSpread })




}
