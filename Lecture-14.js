//append child for single value
//append for multiple value

let ele=document.querySelector('div')
let h1=document.createElement('h1')
let h2=document.createElement('h1')
ele.append(h1,h2)
console.log(ele)

let inputE = document.querySelector('input')
inputE.addEventListener('input',function(event){
  console.log(event.target.value)
})

let inputE = document.querySelector('input')
let h1 = document.querySelector('h1')
inputE.addEventListener('input',function(event){
  h1.innerText=event.target.value
  console.log(event.target.value)
})
