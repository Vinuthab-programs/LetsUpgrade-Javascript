console.log("Day 5 Assisgnment");

//Question 1

// let n=prompt("Enter the number of array elements: ");
// let arr=[]
// for(let i=1; i<=n; i++)
// {
//      let item=prompt(`Enter ${i}st element `);
//      arr.push(item);
// }

// console.log(arr);

// function findcube(arr)
// {
//     let oddnum=arr.filter((item)=>item%2==1);

//     let cube=oddnum.map(item=>item**3);
//     console.log(cube);
// }

//  findcube(arr) ;  

//Question 2

class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;

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

class Moderator extends User{
    constructor(name,age,email,luCoins){
        super(name,age,email);
        this.luCoins = luCoins;
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
    removeCoins(){
        this.luCoins--;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;
    }
}

class Admin extends Moderator{
   addCourse(user,course){
       user.courses.push(course);
       console.log(user);
   }
   delCourse(user,course){
    user.courses.filter(course);
    console.log(user);
}
}
