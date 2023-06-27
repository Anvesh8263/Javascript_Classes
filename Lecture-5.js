let arr = [1,23,3,4,5,76]

for(let i in arr){
    console.log(i)
 }
 for(let i of arr){
     console.log(i)
 }

 for(let i=0;i<5;i++){
     console.log(i)
}
 let arr = [1,23,3,4,5,76]
 arr.forEach((ele,index,arr)=>{
   console.log(ele,index,arr)
});

let arr = [1,23,3,4,5,76]

let newa = arr.map((ele,index,arr)=>{
    return index})
 console.log(newa)
 Map Reduce Filter

 let arr = [1,23,3,4,5,76]
let newa = arr.filter((ele)=>{
console.log(ele>20)
return ele>20
})
console.log(newa)
