//////////////////////////////////////////////////////////////////////////////
// В js все являются объетами
// В js наследование - прототипированное наследование
// Каждый объект имеет свой прототип, который берется у родителя объекта от которого он был создан (Object)
// Prototype - объект
// __proto__ - родительский прототип ES 6
// Object.getPrototypeOf() - родительский прототип ES 5
// prototype - свойство функции, которое нужно для передачи прототипа с помощью new
//////////////////////////////////////////////////////////////////////////////

// CLASS ES 5
/* function Cat(name, color) {
    this.name = name
    this.color = color 
}

// Расширяем функционал данное класса Cat
Cat.prototype.voice = function() {
    console.log(`Cat ${this.name} says myay`)
}
// создаем 
const cat = new Cat('KOT', 'white')


console.log(Cat.prototype) // Cat { voice: [Function] }
console.log(cat)           // Cat { name: 'KOT', color: 'white' }
// Ищет метод voice у cat, не находит его => смотрит дальше в Cat.prototype
cat.voice()                // Cat KOT says myay

console.log(Object.getPrototypeOf(cat)) // ES 5
console.log(cat.__proto__)              // ES 6 */




//////////////////////////////////////////////////////////////////////////////
// Собственный функции объектов или свойства которые доступны в прототипе
//////////////////////////////////////////////////////////////////////////////
function Persone() {
    
}
// расширили
Persone.prototype.legs = 2
Persone.prototype.skin = 'white'

const persone = new Persone()

persone.name = 'Egor'

// Цепочка прототипов проверка

/* console.log('skin' in persone) // true Есть ли такое свойство в объекте || в прототипе 
console.log(persone.legs) // true
console.log(persone.name) // true
console.log(persone.color) // false */



// Как определить какие свойства у нас есть в прототипе, а какие собственные ?

/* console.log(persone.hasOwnProperty('name')) // true у объекта
console.log(persone.hasOwnProperty('skin')) // false у прототипа */


// Object.create()
const proto = {year: 2019}
const myYear = Object.create(proto)  // первый параметр прототип, потом свойства

/* console.log(myYear.year)
console.log(myYear.hasOwnProperty('year')) // false
console.log(myYear.__proto__ === proto)    // true */

proto.year = 2020
// Изменение в прототипе ведет к изменению у объекта, от которого он был создан с помощью create()
console.log(myYear.year) //  2020 