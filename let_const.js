//////////////////////////////////////////////////////////////////////////////
// let (изменяемые переменные)
//////////////////////////////////////////////////////////////////////////////

/* let a = 'variable a'
let b = 'variable b'

//scope 
{
    a = 'update variable a'
    let b = 'New Local variable b'
    console.log('scope a =>', a)
    console.log('scope b =>', b)
}


console.log('global a =>', a)
console.log('global b =>', b) */




//////////////////////////////////////////////////////////////////////////////
// const (неизменяемые)
//////////////////////////////////////////////////////////////////////////////

const port = 8080
port = 2000 // error


const array = [0, 1, 2, 3]

array.push(4)  // [0, 1, 2, 3, 4]
array[0] = 'js' // ['js', 1, 2, 3, 4]
array = '' // error

const obj = {}
obj.name = 'Egor'
obj.name = 'Egor2'

delete obj.name

obj = '' // error