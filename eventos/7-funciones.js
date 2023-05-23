const cambiarColor = (bloque) => {
    bloque.classList.add('bloqueColor')
}

const sacarColor = (bloque) => {
    bloque.classList.remove('bloqueColor')
    // console.log('Me retiré')
}

const teclaApretada = (e) => {
    const { value } = e.target
    if (value === 'juan')
        boton2.style.backgroundColor = 'gray'
}

let nro = 0

const submit = (e) => {
    e.preventDefault()
    nro++

    const nombre = inputNombre.value
    const apellido = inputApellido.value
    const precio = Number(inputPrecio.value)

    if (precio > 0 &&
        nombre !== "" &&
        apellido !== "")
        alert('SE INGRESó CORRECTAMENTE')

    else {
        error1.style.display = 'block'
        console.log('Algunos datos están mal')
    }

    // const valorInput = input.value
    // console.log(nro, valorInput)

}
