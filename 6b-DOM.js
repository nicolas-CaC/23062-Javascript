// ByTagName
const div = document.getElementsByTagName('div')
// console.log(div[0])
div[0].innerText = 'Soy el primer div'
div[1].innerHTML = '<b>Soy el segundo div</b>'
div[2].innerHTML = '<i>Soy el tercer div</i>'

console.log(div.item(2))

for (let i = 0; i < div.length; i++) {
    // div[i].innerText = `Este es el div nro. ${i + 1}`
}

// ById
const cuartoDiv = document.getElementById('cuartoDiv')
console.log(cuartoDiv.innerText)


// ByClassName
const clase = document.getElementsByClassName('estilo1')
clase[0].innerText = 'Yo tengo clase'


// QuerySelector
const div2 = document.querySelector('div')
console.log(div2)

const tercerDiv = document.querySelector('#tercerDiv')
console.log('tercerDiv:', tercerDiv.innerText)


// QuerySelectorAll
const divAll = document.querySelectorAll('div')
console.log(divAll)
divAll.forEach(div => div.classList.add('estilo2', 'estilo3'))

//className = Reescribe el atributo class
//clasList.add('clases que quiero agregarle')

const estilo2 = document.querySelector('.estilo2')
console.log('estilo2: ', estilo2.innerHTML)


console.log(document.getElementById('ultimoDiv').innerHTML)


const boton = document.getElementById('boton')

const textos = {
    primero: 'Soy este nuevo sitio',
    segundo: 'Soy cualquier cosa',
}

const body = document.body
boton.onclick = () => {
    body.innerHTML = textos.primero
}

