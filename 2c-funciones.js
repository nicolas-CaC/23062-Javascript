function funciones() {

    function miPrimerFuncion() {
        console.log('Funcion clásica')
    }
    miPrimerFuncion()


    // void
    function miSegundaFuncion(numero1, numero2 = 1) {
        const suma = numero1 + numero2
        console.log('El resultado de la suma es:', suma)
    }
    miSegundaFuncion(2, 3)
    miSegundaFuncion(2, 8)
    miSegundaFuncion(2)


    // Argumentos Infinitos y Return
    function miTerceraFuncion(...args) {

        let total = 0

        for (let i = 0; i < args.length; i++)
            total += args[i]

        return total
    }

    console.log(miTerceraFuncion(1, 2))

    const total = miTerceraFuncion(1, 2, 3, 4, 5)
    console.log(total)

    console.log(miTerceraFuncion(1, 2, 3, 4, 5, 6, 7, 8, 9))


    // Tipos de funciones
    function clasica(nro) {
        console.log({ nro })
    }
    clasica(7)

    // anonima
    const anonima = function (nro2) {
        console.log({ nro2 })
    }
    anonima(8)


    // flecha
    const flecha = (nro3) => {
        console.log({ nro3 })
    }
    flecha(9)

    const flecha2 = (nro3) =>
        console.log('flecha2:', nro3);
    flecha2(9)

    const flecha3 = (nro3) => nro3 + 10;

    const x = flecha3(5)
    console.log({ x })
    console.log(flecha3(4))

    console.log('\n')




    // Funciones generadoras

    function* generadora() {
        const numero = 1
        yield numero + 10
        yield numero + 100
        yield numero + 1000
    }

    const fnGen = generadora()

    console.log(fnGen.next()) // 11, done: false
    console.log(fnGen.next()) // 101, done: false
    console.log(fnGen.next()) // 1001, done: false
    console.log(fnGen.next()) // undefined, done: true


    function* generadora2(limite) {

        let i = 0
        while (i > -1) {
            yield i++
        }
    }

    const fnGen2 = generadora2(3)

    console.log('fnGen2:', fnGen2.next()) // 0
    console.log('fnGen2:', fnGen2.next()) // 1
    console.log('fnGen2:', fnGen2.next()) // 2
    console.log('fnGen2:', fnGen2.next()) // 3
    console.log('fnGen2:', fnGen2.next()) // 4
}