//////////////////////////////////////////////////////////////////////////////
// closures (замыкания) - когда функция имеет доступ к переменным из вышестоящего scope (области видимости) || функция которая вызывает функцию
// функция, которая ничего не возвращает => возвращает undefined
//////////////////////////////////////////////////////////////////////////////

/* function sayHello(name) {
    const messages = `Hello ${name}`
    return function() {
        console.log(messages)
    }
}

const helloToEgor = sayHello('Egor')
console.log(helloToEgor())
helloToEgor() */

//////////////////////////////////////////////////////////////////////////////





// Практическое применение замыканий

/* function createFrameWorkManager() {
    const fw = ['vue', 'react']
    return {
        get: function() {
            return fw
        },
        print: function() {
            console.log(fw.join(', '))
        },
        add: function(framework) {
            fw.push(framework)
        }

    }
} 

const manager = createFrameWorkManager()
manager.print()
manager.add('angular')
manager.print() */






//////////////////////////////////////////////////////////////////////////////
// setTimeout (var)
//////////////////////////////////////////////////////////////////////////////

/* const fib = [1,2,3,5,8,13]

for(var i = 0; i < fib.length; i++) {
    setTimeout(function() {
        console.log(`fib[${i}] = ${fib[i]}`)
    }, 1500)
}  */
// RESULT:
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// fib[6] = undefined
// как исправить? Можно исправить через let || через замыкания

//////////////////////////////////////////////////////////////////////////////
// setTimeout (let)
//////////////////////////////////////////////////////////////////////////////

/* const fib = [1,2,3,5,8,13]

for(let i = 0; i < fib.length; i++) {
    setTimeout(function() {
        console.log(`fib[${i}] = ${fib[i]}`)
    }, 1500)
}  */
// RESULT:
// fib[0] = 1
// fib[1] = 2
// fib[2] = 3
// fib[3] = 5
// fib[4] = 8
// fib[5] = 13

//////////////////////////////////////////////////////////////////////////////
// setTimeout (var + замыкания)
//////////////////////////////////////////////////////////////////////////////

const fib = [1,2,3,5,8,13]

for(var i = 0; i < fib.length; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(`fib[${j}] = ${fib[j]}`)
        }, 1500)
    })(i) // <= i
    
}  
// RESULT:
// fib[0] = 1
// fib[1] = 2
// fib[2] = 3
// fib[3] = 5
// fib[4] = 8
// fib[5] = 13