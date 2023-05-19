boton1.addEventListener('click', () => cambiarColor(bloque1))

boton2.addEventListener('mouseover', () => cambiarColor(bloque2))
boton2.addEventListener('mouseleave', () => sacarColor(bloque2))

boton3.addEventListener('dragenter', () => console.log('DRAG ENTER'))
boton3.addEventListener('dragleave', () => console.log('DRAG LEAVE'))

botonSubmit.addEventListener('click', submit)

input.addEventListener('keyup', teclaApretada)

// input.addEventListener('keypress', () => console.log('KEYPRESS'))
// input.addEventListener('keydown', () => console.log('KEYDOWN'))
// input.addEventListener('keyup', () => console.log('KEYUP'))


