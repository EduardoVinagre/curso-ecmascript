class user {
    //Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Nuevo usuario');
    }

    //methods
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    #speak(){
        return 'Hello';
    }

    get #uAge(){
        return this.age;
    }

    set #uAge(n){
        this.age = n;
    }
}

const bebeloper = new user('David', 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 20);