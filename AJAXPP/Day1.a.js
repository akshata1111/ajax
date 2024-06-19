// function AdditionA(){
//     console.log("A is executed")
// }

// function AdditionB(){
//     console.log("B is executed")
// }

// AdditionA()
// AdditionB()

// function AdditionC(){
//     setTimeout(function(){
//         console.log("C is executed")
//     },3000)
// }

// function AdditionD(){
//     setTimeout(function(){
//         console.log("D is executed")
//     },5000)
// }

// AdditionC()
// AdditionD()

// function getInfo(){
//     setTimeout(function(){
//         console.log("User Created")
//     },3000)

//     setTimeout(() => {
//         console.log("Get ID")
//     }, 2000);

//     setTimeout(() => {
//         console.log("Get User")
//     }, 1000);

// }

// getInfo()

function GetInfo(){
    setTimeout(function(){
        console.log("User Created"),
        setTimeout(function(){
            console.log("Get Id"),
            setTimeout(function(){
            console.log("Get User")
            },1000)
        },2000)
    },3000)
}

GetInfo()


