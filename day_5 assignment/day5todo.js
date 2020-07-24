 //promises, async and await.

const text = [];
async function textUpload(){
    let status = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            text.push('Promises, async and await');
            resolve('text Updated');
        },3000)
    })

    let result = await status;
    console.log(text.length);
}

textUpload();
textUpload();

console.log('Fetch API, aync and await');

//Making a get request

fetch('https://jsonplaceholder.typicode.com/todos ')
.then(response=>response.json())
.then(data=>console.log(data))


// todo api

async function fetchtodo(){
    const response = await fetch('https://jsonplaceholder.typicode.com/todos ');
    const data = await response.json();

    console.log(data);
}

fetchtodo();




