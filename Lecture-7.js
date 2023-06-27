var a 
console.log(a)
a=5

console.log(a)  //undefined
var a=50


//Scope

var a=5
function add(){
console.log(a)

}
add()


function a(fn){
console.log('inside a')
fn()
}

function b(){
    console.log('inside b')

}
a(b)

function a(){
    console.log('inside a')
    function b(){
        console.log('inside b')
    }
    return b
}
a(b)
