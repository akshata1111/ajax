function getuserbyID(id) {
    return fetch(`https://reqres.in/api/users(id)`)
        .then(function (response) {
            return response.json()
        })
    then(function (response) {
        return response.data
    })
}
function raceP() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('refresh')
        }, 2)
    })
}
function renderHtml(element) {
    document.write(`<h1>${element.first_name}<h1>`)
    document.write(`<h1>${element.last_name}<h1>`)
    document.write(`<h1>${element.id}<h1>`)
    document.write(`<h1>${element.email}<h1>`)
    document.write(`<img src = ${element.avatar}>`)
}

//1

Promise.all([
    getUserbyId(1),
    getUserbyId(2),
    getUserbyId(3)
])
.then(function(users){
        console.log(users) 
        users.forEach(function(element){
            renderHtml(element)
        })
    })
    .catch(function(err){
        console.log(err)
    })

//2

Promise.allSettled([
    getUserbyId(3),
    getUserbyId(2),
    getUserbyId(300)
    
])
.then(function(arr){
    console.log(arr)
})

//3

Promise.race
Promise.race([
    getUserbyId(2),
    raceP()
]).then(function(str){
    console.log(str)
})

//4

Promise.any([
    Promise.reject("Bye"),
    raceP(),
    getUserbyId(2)
])
.then(function(str){
    console.log(str)
})
