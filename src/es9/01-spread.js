const user = { username: 'gndx', age: 24, country: 'CO'};
const { username, ...values} = user;
console.log(username);
console.log(values)