//////////////////////////////////////////////////////////////////////////////
// Context - это не scope !!!
// Context - определяет, как функция была вызвана и указывает на this
//////////////////////////////////////////////////////////////////////////////

/* const presone = {
    surName: 'Старк',
    knows: function (what, name) {
        console.log(`Ты ${what} знаешь, ${name} ${this.surName}`)   // this === persone
    }
}

const john = {
    surName: 'Сноу',
}
presone.knows('все', 'Бран')

// Фарисированная передача контекста, привязка контекста
presone.knows.call(john, 'ничего не', 'Джон')
presone.knows.call(john, ...['ничего не', 'Джон']) // spread

presone.knows.apply(john, ['ничего не', 'Джон'])

presone.knows.bind(john, 'ничего не', 'Джон')() // bind не вызывает функцию */

// ES 5 CLASS context
/* function Persone(name, age) {
    this.name = name
    this.age = age
    console.log(this)
}

const egor = new Persone('Egor', 24) */

// Байндинг - явная (неявная) передача контекста
/* function logThis() {
    console.log(this)
}
// явная
const obj = {num: 24}
logThis.apply(obj)
logThis.call(obj)
logThis.bind(obj)() */

// неявная
/* const animal = {
    legs: 4,
    logThis: function() {
        console.log(this)
    }
}

animal.logThis() */


////////////////////////////////////////////////////////////////////////
// Стрелочные функции (не создает свой контекст)
////////////////////////////////////////////////////////////////////////
function Cat(color) {
    this.color = color
    console.log('This', this)
    ;( () => console.log('Arrow this', this))()  
}

new Cat('red')