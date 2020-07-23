console.log("Hey this is Day 3 assignment");

//Question 1

function evenodd(num)
{
    if(num%2==0)
    {
        console.log('The number entered is '+num+ ', and it is Even Number');
        
    }
    else
    {
        console.log('The number entered is '+num+ ', and it is odd Number');
    }

    
}
var number=prompt("Enter the number");
var result=evenodd(number);
console.log(result);

//Question 2

var android_name=prompt("Enter the  name and version of operating System");

const ver=android_name.split(" ");


console.log('The OS name is '+ver[0]+ ',Version is '+ver[1]);


//Question 3

let score=prompt("Enter your marks here!");

//if statement

if(score>=90)
    console.log('Marks is '+score+ ',and grade is A');
else if(score>=60 && score<=80)
     console.log('Marks is '+score+ ',and grade is B');
else if(score>=50 && score<=59)
     console.log('Marks is '+score+ ',and grade is C');
else if(score>=40 && score<=49)
     console.log('Marks is '+score+ ',and grade is D');
else  
      console.log('Marks is '+score+ ',and grade is F');


//switch case

let grade;
function grading(score){
switch(true)
{
    case (score>=90):
          grade='A';
          return grade;
          break;

    case (score>=60 && score<=80):
        grade='B';
        return grade;
        break;

    case (score>=50 && score<=59):
        grade='C';
        return grade;
        break;

    case (score>=40 && score<=49):
        grade='D';
        return grade;
        break;
   
    case (score<40):
            grade='F';
            return grade;
            break;
    default:
        console.log("Invalid score");
        break;
}
}

 console.log('Marks is '+score+ ',and grade is '+grading(score) );

//Ternary operator

let result= (score>=90) ? 'A' : (score>=60 && score<=80)? 'B' :
(score>=50 && score<=59)? 'C' :
(score>=40 && score<=49)?  'D':
'Invalid score'


console.log('Marks is '+score+ ',and grade is '+result);