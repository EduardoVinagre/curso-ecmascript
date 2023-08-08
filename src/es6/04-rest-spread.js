//arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a,b);
console.log(a,fruits[1]);

//object destructuring
let user = {
    username: 'Orcar',
    age: 34
}
let {username, age} = user;
console.log(username, age);
console.log(username, user.age);