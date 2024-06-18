function AdditionA(){
    console.log("A is executed")
}

function AdditionB(){
    console.log("B is executed")
}

AdditionA()
AdditionB()

function AdditionC(){
    setTimeout(function(){
        console.log("C is executed")
    },3000)
}

function AdditionD(){
    setTimeout(function(){
        console.log("D is executed")
    },5000)
}