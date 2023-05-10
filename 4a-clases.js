function clases() {
    class Desarrollador {

        static id = 0

        #dni
        trabajo = 'Dev'
        #codigoDeTrabajo = 'a12s3d45f'

        constructor(nombre, edad, soltero, dni) {
            this.nombre = nombre
            this.age = edad
            this.soltero = soltero
            this.#dni = dni
            this.id = ++Desarrollador.id
        }

        frase = (mensaje) => console.log(mensaje)
        saludo = () => console.log(`Hola, mi nombre es ${this.nombre}
    Y mi código de trabajo es: ${this.#codigoDeTrabajo}`)

        #saludoSecreto = () => console.log('soy un saludo secreto')
        metodoSecreto = () => this.#saludoSecreto()

        static cantidadDesarrolladores = () => console.log(Desarrollador.id)

        getDni = () => this.#dni
        setNombre = (nombre) => this.nombre = nombre

        get getEdad() { return this.age }
        set setEdad(age) { this.age = age }

    }


    const nico = new Desarrollador('Nico', 30, true, 456456456)
    console.log(nico)
    nico.frase('Soy Nico')
    nico.saludo()

    const eliana = new Desarrollador('Eliana', 26, false, 789789789)
    console.log(eliana)
    eliana.frase('Soy Eliana')
    eliana.frase(eliana.trabajo)
    eliana.saludo()
    eliana.metodoSecreto()

    console.log(nico.id)
    console.log(eliana.id)

    const juan = new Desarrollador('juan', 30, true, 456456456)
    const rodolfo = new Desarrollador('rodolfo', 30, true, 456456456)
    const ruben = new Desarrollador('ruben', 30, true, 456456456)
    const sandra = new Desarrollador('sandra', 30, true, 456456456)
    const maria = new Desarrollador('maria', 30, true, 456456456)

    console.log(juan.id)
    console.log(rodolfo.id)
    console.log(ruben.id)
    console.log(sandra.id)
    console.log(maria.id)

    Desarrollador.cantidadDesarrolladores()

    nico.setNombre('Nicolas')
    console.log(nico)

    console.log(nico.getEdad)
    nico.setEdad = 35
    console.log(nico)
}