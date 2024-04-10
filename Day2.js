//1

// function additionA(){
//     console.log("A")
// }

// function additionB(){
//     console.log("B")
// }

// additionA()
// additionB()

//2

// function additionC(){
//     setTimeout (function(){
//         console.log("C")
//     },3000)
// }

// function additionD(){
//     console.log("D")
// }

// additionC()
// additionD()

//3

let pro = new Promise(function(resolve, reject){
    let a = 10
    let b = 10

    if(a==b){
    resolve("hello")
}
else{
reject("bye")
}
})

pro.then(function(str){
    console.log(str)
},function(str){
console.log(str)
})
    
