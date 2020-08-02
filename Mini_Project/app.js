var element=[];

//To add into into local storage
window.onload=function(){
    if(this.JSON.parse(localStorage.getItem("todo-elements"))!=null){
        element = JSON.parse(localStorage.getItem("todo-elements"));
        display();
    }
};

//To add the elements
function addElement(){
    if(document.querySelector(".addtxt").value.trim()!=""){
       element.push(document.querySelector(".addtxt").value.trim());
    //    if(localStorage.getItem("todo-elements")!=null){
    //        localStorage.setItem("todo-elements",JSON.stringify(element));
    //    }
    //    else{
    //     localStorage.setItem("todo-elements",JSON.stringify(element));
    //    }
        display();
    }
}

//To display the elements 
function display() 
{
    document.querySelector(".list").innerHTML = "";
    for(var i=0; i<element.length; i++)
        document.querySelector(".list").innerHTML += "<center><div class='elements'>" + element[i] + "<img class='remove'src='https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/user-trash-full-icon.png' onclick='del("+ i +")'></div></center> "  ;
}

//To remove the element
function del(index){
    element.splice(index, 1);
    display();
}


