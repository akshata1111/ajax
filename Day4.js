//1 Promise.all

Promise.all([
Promise.resolve("Hello"),
Promise.resolve("Bye"),
Promise.reject("Hello C")
])
.then(function(arr){
console.log(arr)
})
.catch(function(){
    console.log("All not resolved")
})

//2 Promise.allSettled

Promise.allSettled([
Promise.resolve("Hello"),
Promise.resolve("Bye"),
Promise.reject("Hello C")
])

.then(function(arr){
    console.log(arr)
    })

//3 Promise.race()

function proOne(){
    return new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve("Hello")
}, 3000)
})
}

function proTwo(){
    return new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve("Bye")
}, 3000)
})
}

//4 Promise.race

Promise.race([
    proOne(),
    proTwo()
])

.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})

//5 Promise.any()

Promise.any([
Promise.reject("Bye"),
Promise.reject("Bye2"),
Promise.reject("Bye3")
])