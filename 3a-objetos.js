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

}