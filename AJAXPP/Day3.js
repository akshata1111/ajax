//promises - pending , resolve, reject

let pro = new Promise((resolve, reject) => {
    let a = 10;
    let b = 20;

    if(a==b){
        console.log("Hello")
    }
    else{
        console.log("Bye")
    }
})

//program 1
pro.then(function(str){
    console.log(str)
}, function(str){
    console.log(str)
})

//program 2

pro
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})

//program 3

pro
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("I will always run")
})

//program 4

.then(function(str){
    console.log(str)
    return "Hello2"
})

.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("I will always run")
})

function UserCreated(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve("User Created")
        },3000  )
    })
}

function GetID(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve("GetId")
        },2000)
    })
}

function GetInfo(){
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            resolve("GetInfo")
        },1000)
    })
}

//promise consume

usercreated()
.then(function(str){
    console.log(str)
    return GetID()
})

.then(function(str){
    console.log(str)
    return GetInfo()
})

.then(function(str){
    console.log(str)
})

async function getUserInfo(){
    
}
