const objetos = () => {

    const pikachu = {
        ojitos: 2,
        popote: 1,
        agua: true,
        color: 'amarillo',
        frase: () => console.log('pika pika')
    }

    const messi = {
        nombre: 'Lionel Messi',
        edad: 38,
        soltero: false
    }

    const juan = {
        nombre: 'Juan',
        edad: 21,
        soltero: true
    }

    const a = 'agua'

    console.log(pikachu)
    console.log('Pikachu tiene', pikachu.ojitos, 'ojitos')
    console.log('Y es de color:', pikachu['color'])
    console.log('Tiene agua?', pikachu[a])

    pikachu.frase()

    console.warn(messi.nombre)
    console.error(juan.nombre)

    function Objeto(numero, cadena, booleano) {
        this.numero = numero
        this.nombre = cadena
        this.booleano = booleano
    }

    const persona = new Objeto(123, 'Luis', true)
    console.log(persona)

    const persona2 = new Objeto(456, 'Marta', false)
    console.log(persona2)

    console.log(`El nombre de la persona es ${persona.nombre}`)
    console.log(`El nombre de la persona es ${persona2.nombre}`)
}