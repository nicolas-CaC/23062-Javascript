const arrays = () => {

    const array = [1, 2]
    console.log(array)

    console.log(array[0])

    array[1] = 45
    console.log(array[1])

    array[2] = true
    console.log(array[2])

    array[3] = 'tas re loco'
    console.log(array)

    array.push('hola')
    console.log(array)

    array.push('chau')
    console.log(array)

    array.pop()
    console.log(array)

    array.shift()
    console.log(array)

    array.unshift(345)
    console.log(array)
}