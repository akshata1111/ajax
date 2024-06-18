async function getUser(id){
    try {
        const response = await fetch(`https://reqres.in/api/users/${id}`)
        if(!response.ok){
            throw new Error("Failed fetch the users")   
        }
        let data  = await response.json()
        return data.data
    }
    catch(err){
        console.error('Error while fetching the reponse',err)
        throw err;
    }
}
function raceP(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('function called..race!')
        },2)
    })
}

Promise.All()
async function PromiseAll(){
    try {
        let [user1,user2,user3] = await Promise.all([
            getUser(1),
            getUser(2),
            getUser(3)
        ])
        console.log(user1)
        console.log(user2)
        console.log(user3)
    }
    catch(err){
        console.log('Err while fetching users : ',err)
    }
}
PromiseAll()