const clases2 = () => {

    class Padre {

        #apellido

        constructor(apellido) {
            this.#apellido = apellido
        }

        getApellido = () => console.log(this.#apellido)
    }

    class Hijo extends Padre {

        #nombre

        constructor(nombre, apellido) {
            super(apellido)
            this.#nombre = nombre
        }

        getNombre = () => console.log(this.#nombre)
    }

    // const padre = new Padre('Perez')
    // console.log(padre)

    const hijo = new Hijo('Juan', 'Perez')
    console.log(hijo)

    hijo.getNombre()
    hijo.getApellido()
}