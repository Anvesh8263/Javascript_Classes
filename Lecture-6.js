// Sum is grater than 10(Question of the day )
let arr= [12,45,64,0,3,7,59,76,]
let sum=0;
 for(let i=0;i<arr.length;i++){
 if(arr[i]>10){
        sum = sum+arr[i];
   }
 }
 console.log(sum);

let arr1= [12,45,64,0,3,7,59,76,]
const newa1  = arr1.reduce((a, b)=>{
     return a+b
 })
 console.log(newa1)


let userName = 'GLA'
let userId=1234

function add(){


    let name1="GLA is a Best University"
    console.log(name1)
}
console.log(userName)
add()
