//  const s ='Ruchika ksh';
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.substring(0,6).toUpperCase());
// console.log(s.split(''));
// const fruits = ['apples','oranges','banana','12','true'];

// fruits.push('mango');
// fruits.unshift('egg');
// fruits.pop();
// console.log(Array.isArray('hi'));

// console.log(fruits);
// const person={
//     firstName:'John',
//     lastName:'Mark',
//     age:30,
//     hobbies: ['music','movies','sports'],
//     address:{
//         street:'50 main st',
//         city:'boston',
//         state:'new york'
//     }
// }
// person.email='jonh@google.com'
// const todos =[
//     {
//         id:1,
//         text:'take out trash',
//         isCompleted:true
//     },
//     {
//         id:2,
//         text:'Meeting lineup',
//         isCompleted:false
//     },
//     {
//         id:3,
//         text:'Eating lunch',
//         isCompleted:true
//     },
// ];

// // console.log(todos[1].text);
// const todoJson = JSON.stringify(todos);
// console.log(todoJson);


// for(let i=0;i<todos.length;i++)
// {
//     console.log(todos[i]);
// }
// for(let todo of todos){
//     console.log(todo.text);
// }

// High order array methods: foreach,map,filter
// todos.forEach(function(todo){
//     console.log(todo.id);
// });
// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);
// const todoText = todos.filter(function(todo){
//     return todo.isCompleted==true;
// }).map(function(todo){
//     return todo.text;
// })
// console.log(todoText);
//=== matches datatypes as well and not only the value of var
//eg const x=10;
// //if(x==10){ here it returns true but if x='10' will also return true 
//     console.log('something')
// }
// if(x===10){ here it checks datatype as well
//     return something
// }
// const x=10;
// const color = x>10?'red':'blue';
// function addNums(num1,num2){
//     console.log(num1+num2);

// }
// const test =(num1=1,num2=2)=> num1+num2;
// function Person(firstName,lastName,dob){
//     this.firstName=firstName;
//     this.lastName=lastName;
//     this.dob=new Date(dob);
    
// }


//Class
// class Person{
//     constructor(firstName,lastName,dob){
//         this.firstName=firstName;
//         this.lastName=lastName;
//         this.dob=new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// const person1 = new Person('John','Doe','4-3-1980');
// console.log(person1.getFullName()); //Thu Apr 03 1980 00:00:00 GMT+0530 (India Standard Time)
// console.log(window);
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// console.log(document.getElementsByClassName('.container'));
// console.log(document.getElementsByTagName('.container'));

// const ul = document.querySelector('.items');
// //ul.remove();
// //ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Ruchi</h1>';
// const btn = document.querySelector('.btn');
// btn.style.background = 'violet';

// const btn = document.querySelector('.btn');

// btn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     document.querySelector('#my-form').style.background='red';
//     document.querySelector('body').classList.add('bg-dark');
     

// });
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const mymsg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value===''|| emailInput.value === ''){
        mymsg.classList.add('error');
        mymsg.innerHTML = 'please enter all fields';
        setTimeout(()=>mymsg.remove(),3000);
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        userList.appendChild(li);

        nameInput.value='';
        emailInput.value='';
    }
}