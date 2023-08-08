//enhaced object literals

function newUser(user, age, country){
    return {
        user,
        age,
        country
    }
}

console.log(newUser('Ed', 32, 'MX'))