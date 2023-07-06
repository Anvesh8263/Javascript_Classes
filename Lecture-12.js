let ele = document.querySelector('h1')
ele.innerText='byeeee'
for(let item of ele){
  item.style.color='red'
}

console.log(ele)

let ele = document.querySelectorAll('h1')
for(let item of ele){
  item.style.color='red'
}
console.log(ele)

let ele = document.querySelectorAll('h1')
ele.style.color='red'
console.log(ele)

let ele = document.querySelectorAll('h1')
// ele.style.color='red'
// console.log(ele)
console.log(window)

const fun1=()=>{
  alert('Submit Successfully')

}
