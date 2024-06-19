// function Additiona(){
//     console.log("A")
// }

// function Additionb(){
//     console.log("B")
// }

// Additiona()
// Additionb()

// function Addc(){
//     setTimeout(function(){
//         console.log("C")
//     },1000)
// }

// function Addd(){
//     setTimeout(function(){
//         console.log("D")
//     },2000)
// }

// Addc()
// Addd()

// function GetInfo(){

//     setTimeout(function(){
//         console.log("User Created")
//     },3000)

//     setTimeout(function(){
//         console.log("Get Id")
//     },2000)

//     setTimeout(function(){
//         console.log("Get Info")
//     },1000)
// }

// GetInfo()

// function getInfo(){
//     setTimeout(function(){
//         console.log("User created"),
//         setTimeout(function(){
//             console.log("Get id"),
//             setTimeout(function(){
//                 console.log("Get info")
//             },1000)
//         },2000)
//     },3000)
// }

// getInfo()

let pro = new Promise((resolve, reject) => {
    let a = 10
    let b = 20

    if(a==b){
        resolve("Hello")
    }
    else{
        reject("Bye")
    }
})

pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})