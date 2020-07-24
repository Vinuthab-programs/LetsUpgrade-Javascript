console.log('This is day 4 assignment');

//Question 1 Printing fizz,buzz and fizzbuzz on  given conditions.

let f=[];
let b=[];
let fb=[];
for(let i=0; i<=100; i++)
{
     if(i%3==0)
       f.push('fizz');

     if(i%5==0)
        b.push('Buzz');

    if((i%3==0) && (i%5==0))
    {
        fb.push("Fizznuzz");
    }
}
console.log('\n'+f+'\n Number of fizz are ' +f.length);
console.log('\n'+b+'\n Number of buzz are ' +b.length);
console.log('\n'+fb+'\n Number of fizzbuzz are ' +fb.length);

//Question 2 , Destructuring the object
const student={
    name: "Helsinki",
    age:24,
    Projects:{
        diceGame : " Two player dice game using Javascript"
    }
};


const {name,age, Projects:{diceGame}} = student;


console.log(name);
console.log(age);
console.log(`${diceGame}`);

//Question 3 shoppinglist array.

let  shoppingList=['friuts','vegetables','dhals','spices'];
let shoppingbasket=shoppingList;
shoppingbasket.push('Juice mix','Rasna Powder');
console.log(shoppingbasket);


//Question 5

let sales=prompt("Enter the sales made by you");

function salescal(sales){
    
     let c=0;
    if(sales>0 && sales<=5000)
        c=(sales*2)/100;
    else if(sales>=5001 && sales<=10000)
        c=(sales*5)/100;
    else if(sales>=10001 && sales<=20000)
        c=(sales*7)/100;
    else 
        c=(sales*10)/10;
    
    return c;
}

let result=salescal(sales)
console.log(`The total commission earned by you his :  ${result}`)


//Question 6

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100);

Question 7

let n1=prompt("Enter the first number ");


function prime(n1){
for (var counter = 2; counter <= n1; counter++) {

    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}
}

console.log(prime(n1));

//Question 8

var ask = (question,yes,no) => {
    (confirm(question))?yes():no();
}

ask(
    "do you agree?",
    ()=>{alert("you agreed");},
    ()=>{alert("you canceled the execution");}
)


