let arr= [1,2,3,4,5,'string','hello',true,false]

function getString(){
    var res=[]
    for(let item of arr){
    if(typeof item === 'string'){
        res.push(item)
    }
}
return res
}
function getNumber(){
    var res=[]
    for(let item of arr){
    if(typeof item === 'number'){
        res.push(item)
    }
}
return res
}
function getBool(){
    var res=[]
    for(let item of arr){
    if(typeof item === 'boolean'){
        res.push(item)
    }
}
return res
}

console.log(getString(arr))
console.log(getNumber(arr))

console.log(getBool(arr))

function getString(){
    return typeof item==='string'
}
function getNumber(){
    return typeof item==='number'
}
function get(fun1){
    let res=[]
    for(let item of arr){
        if(fun1(item)){
            res.push(item)
        }
    }
    return res
}
console.log(get(arr,getString))
console.log(get(arr,getNumber))

function outer(){
    let user='gla'
    function inner(){
        console.log(user)
    }
    //inner()
    return inner
}
let inner = outer()
inner()
