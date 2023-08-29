 export class person {
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
  
   about(){
    const userId = `CC ${Math.floor(Math.random() * 5000)}`;
    console.log(`Hello ${this.firstName} your userId is ${userId}`)
   }
}
// const person1 = new person("firstName", "lastName", "email", "password");
// person1.about();