//function with objects
function add()

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
