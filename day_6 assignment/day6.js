console.log("Day 6 Assignment");

//Question 1

var colors = ["red", "yellow", "blue","white"];

  function changeScreenColor() 
  {
    setTimeout(function loop() 
    {
      document.bgColor = colors.shift();
      if (colors.length) 
      {
        setTimeout(loop, 5000);
      }
    }, 5000);
  }

  function starttime() 
  {
    setInterval(changeScreenColor(), 5000);
  }

  //Question 2


var n=prompt("Enter the number to obtain its multiples");
let i,j;
for(i=1; i<=10; i++)
{
    document.write(`${n} * ${i} = ${i*n}`);
    document.write("<br/>")
}

// Question 3

var name=prompt("Enter your name","anonymous")
document.write( `Hey ${name}, web world welcomes you`)

var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

document.write(date);
document.write('<br/>')
document.write(today);

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }



