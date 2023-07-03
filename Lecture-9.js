What is Synchronus?
The code runs in a particular sequence of instructions given in the program.

What is Asynchronus?
Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished.
    
    console.log('1')
      setTimeout(()=>{
       console.log('2')   
      },4000)

      setTimeout(()=>{
         console.log('10')   
     },1000)
      console.log('3')
      console.log('4')
