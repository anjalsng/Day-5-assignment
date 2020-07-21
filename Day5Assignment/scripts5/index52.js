
class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.remCoins = 0;
      this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}
let user1 = new User('Dipshi',20,'dipshi@gmail.com')
user1.login();
user1.logout();

class Moderator extends User{ 
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    removeCoins(){
        this.remCoins--;
        console.log(`${this.name} has ${this.remCoins} coins`);
        return this;
    }
}

class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }
 }

 //let user1 = new User('Dipshi',20,'dipshi@gmail.com')
let user2 = new User('Raina',18,'r@gmail.com')
let user3 = new User('kartik',14,'k@gmail.com')
let mod = new Moderator('Kohali',34,'k@gmail.com','Moderator');
let admin = new Admin('Dhoni',25,'d@gmail.com');
let users = [user1,user2,user3,mod,admin];
console.log(users);
console.log(user2);
console.log(user3);
mod.addCoins();
mod.addCoins();
mod.addCoins();
admin.addCourse(user2,'JavaScripts');
admin.deleteUser(user1);
console.log(users)


