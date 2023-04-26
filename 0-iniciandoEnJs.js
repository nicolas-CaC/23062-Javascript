// Declaramos una función con la palabra 'function'
// La misma guarda una serie de instrucciones a procesar
function holamundo() {

    // Tenemos tipos de variables let y const
    // También var pero no se recomienda su uso
    let a = 2456789
    let b = 33527357

    // las variables const no se pueden modificar
    const c = 'sadfasdf987987sadfasdf'

    // El código comentado nunca se ejecuta por el lenguaje
    // var d = '234234'
    let d = '234234'

    a = 10
    b = 'hola'

    let x = true
    let y = false

    // Console es un objeto de Javascript, el cual tiene métodos
    // Los métodos son lo mismo que las funciones, pero cambia el contexto
    // Las funciones se ejecutan en cualquier lado
    // Los métodos sólo se ejecutan con el objeto propietario de los mismos
    // Por eso que log se ejecuta sólo con console (console.log)

    // Uno de los métodos de console es .log
    // Éste recibe entre paréntesis el valor que queremos mostrar en consola
    // ATENCIÓN A LAS MAYÚSCULAS Y MINÚSCULAS
    console.log(c)
    console.log(b)

    console.log(x)
    console.log(typeof x)
    console.log(a)
    console.log(d)

    // Console tiene muchos más métodos, aquí vemos warn y error
    // Anímense a jugar con otros métodos existentes
    // Escriban 'console.' y vean los métodos que les ofrece VSCode
    // Sino escriban 'console.' y luego aprieten ctrl + espacio
    console.warn(a + d)
    console.error('hola' + ' ' + 'chicos')
}

// El código guardado en ella se ejecuta sólo cuando la ejecutamos
// La ejecutamos así
// holamundo()

// No tiene que estar todo dentro de una función
// El código puede estar libre, como el siguiente console.log
// console.log('Nos vemos en la próxima!')