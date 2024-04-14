function getUserPage(pageNumber) {

    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (response) {
        console.log(response.data[3].id)
            return response.data[3].id
        })
}


function getUserbyemail(email) {
    return fetch(`https://reqres.in/api/users/${email}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
        console.log(response.data)
           return response.data
        })
}

function renderHtml(el) {
    document.write(`<h1>${el.first_name}</h1>`)
    document.write(`<h2>${el.last_name}</h2>`)
    document.write(`<p>${el.email}</p>`)
    document.write(`<h1>${el.id}<h1>`)
    document.write(`<img src=${el.avatar}>`)

}
getUserPage(2)
.then(function(email){
    return getUserPage(email)
})

.then(function(obj){
console.log(el)
    renderHtml(obj)
})

async function getUserInfo(pageNumber){
   let id =  await getUserPage(pageNumber)
   let user   = await getUserById(id)
   let email = await getUserbyemail(email)
   renderHtml(user)
}   

getUserInfo(1)