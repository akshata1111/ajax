//1
let pro = new Promise (function(resolve, reject) {
    let a = 10
    let b = 3
    if(a==b){
        resolve("Hello")  
    } 
else {
reject("Bye")
}
})

//2

pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})

//3

pro
.then(function (str) {
    console.log(str)
})
.catch(function(str){
    console.log(str)
})


//4

pro
.then(function (str) {
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always run")
})

//5

pro
.then(function (str) {
    console.log(str)
    return "hello2"
})
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always run")
})

//6

function userCreated(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("user created")
        },3000)
    })
}

function getId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get id")
        },2000)
    })
}

function getInfo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("get info")
        },1000)
    })
}

//7

userCreated()
.then(function(str){
    console.log(str)
    return getId()
})
.then(function(str){
    console.log(str)
    return getInfo()
})
.then(function(str){
    console.log(str)
})

async function getUserInfo(){
    let a = await userCreated()
    console.log(a)
    let b = await getId()
    console.log(b)
    let c  = await getInfo()
    console.log(c)

}
getUserInfo()