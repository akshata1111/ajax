//1 program

// function additionA(){
//     console.log("A is executed")
// }

// function additionB(){
//     console.log("B is executed")
// }

// additionA()
// additionB()

//2

// function additionA(){
//     setTimeout(function(){
//         console.log("A is executed") 
//     },3000)
// }

// function additionB(){
//     console.log("B is executed")
// }

// additionA()
// additionB()

//3

/*function getInfo(){
  setTimeout (function(){
    console.log("user created") 
   },3000)
  

  setTimeout (function(){
    console.log("get ID") 
   },2000)


  setTimeout (function(){
    console.log("get info") 
   },1000)
}*/

//4

function getInfo(){
    setTimeout (function(){
        console.log("user created") 
        setTimeout (function(){
            console.log("get ID") 
            setTimeout (function(){
                console.log("get info") 
            },1000)
        },2000)
    },3000)
}

getInfo()