//////////////////////////////////////////////////////////////////////////////
// iife (Immediate Invoked Function Expression) - Function Expression, которая моментально исполняется
//////////////////////////////////////////////////////////////////////////////

let result = []
/* for (var i = 0; i < 5; i++) {
    result.push(function() {
        console.log(i)
    })
} 

result[2]() // 5
result[4]() // 5 */

// как исправить? c использованием iife


for (var i = 0; i < 5; i++) {
    (function(j) {
        //var j = i
        result.push(function() {
            console.log(j)
        })
    })(i)
}

result[2]() // 5
result[4]() // 5