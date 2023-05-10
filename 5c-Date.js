const date = () => {

    const a = new Date('12-09-01')
    console.log(a)

    console.log('LocaleString:', a.toLocaleString())
    console.log('toString:', a.toString())
    console.log('getFullYear:', a.getFullYear())
    console.log('getMonth:', a.getMonth())
    console.log('getDate:', a.getDate())

    const b = new Date(2002, 0, 23)
    console.log('\nnew Date con parámetros:', b)

    const c = new Date()
    console.log(c)
    console.log('\n')
    console.log('toLocaleString:', c.toLocaleString())
    console.log('milisegundos pasados desde 01-01-1970', c.getTime())
    console.log('getHours:', c.getHours())
    console.log('getMinutes:', c.getMinutes())
    console.log('getSeconds:', c.getSeconds())
    console.log('getUTCMilliseconds', c.getUTCMilliseconds())
    console.log('getUTCHours:', c.getUTCHours())

    const nacimiento = new Date(2000, 01, 01)
    console.log('\n')
    console.log(`Nací el ${nacimiento.toLocaleString()}\nHan pasado ${c.getFullYear() - nacimiento.getFullYear()} años desde esa fecha`)

    const d = new Date().toTimeString()
    console.log('Hora actual:', d)
}