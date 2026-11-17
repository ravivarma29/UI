// var fname="ravi"
// var lname="A";

// console.log(fname + " " + lname);

// fname="Pavan";
// console.log(fname);


// 

// Adding two numbers using function
// function addNumber(a,b){
//     var result=a+b;
//     console.log(result);
// }

// addNumber(10,20);

//  For Loop

// for(var x=1;x<=5;x++){
//     console.log(x);
// }

// While Loop -> when we don't don't know the number of iterations.

// var fileSize=1024;
// var currentFilwDownload=0;
// while(currentFilwDownload<fileSize){
//     console.log("Download the file...");
//     currentFilwDownload+=currentFilwDownload+40;
// }



// Temporal Dead Zone (TDZ) -> when we try to access the variable before initialization.
/* 
age =20;

console.log(age);

var age=30;
console.log(age);

age= 65;
console.log(age);
 */

// Temporal Dead Zone (TDZ) -> when we try to access the variable before initialization. using let and const

/* age =20;

console.log(age);

let age=30;
console.log(age);

age= 65;
console.log(age); */



// function Greet(){

/* function greetUser(A,B,C){
console.log('hey',A,B,C);
} 

greetUser('ravi' ,'Anshu' ,'Priya'); */



// String Interpolation

// function greetUser(A,B,C)
// {
//     console.log(`Hey ${A} and  ${B}`)
// }

// greetUser('ravi' ,'Anshu' ,'Priya');



// Return boolean String  Number Function

/* function cartoon()
{
    function carttonInsideFunction()
    {
        return "Doraemon ";
    }
    return carttonInsideFunction();
}
const result=cartoon();
console.log(result); */


// another way of function

/* age=45;

console.log('isallowedToVote');
console.log(`value of age is`, age, `is allowed?` ,isallowedToVote(age));

var age=24;

var isallowedToVote= function(age){
return age>=18;
} */


//  Arrow Function

const fruits = ['apple', 'banana', 'mango', 1, 'orange', true, 'kiwi',false];
// console.log(fruits);
// fruits.push('grapes');
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits.includes('banana'));
// console.log(fruits.pop());
// console.log(fruits);
// console.log(fruits.indexOf('kiwi'));
// console.log(fruits.reverse());
// console.log(fruits.sort());
// console.log(fruits.join(' '));
// console.log(`------`);
// console.log(fruits.slice(1,4));
// console.log(fruits);
// const fruit=fruits.slice(2);
// console.log(fruit);



//  Higher Order Fuction

/* function doSomething(operation)
{
    operation();
}
function sayHello()
{
    console.log('Hello');
}
doSomething(sayHello); */

const fruits1 = ['apple', 'banana', 'mango', 1, 'orange', true, 'kiwi',false];
/* 
    for(let i=0;i<fruits1.length;i++){
        console.log(fruits1[i]);
    }

console.log(`Example     1 of Fruits`);
fruits1.forEach((A)=> console.log(A));  */



/* let numbers =[10,20,30,40,50];
console.log(`Example 2 of Numbers`);
numbers.forEach(function(num)
{
    
    console.log(num);
}); */

// EXCERCISE 1
const nums=[3,1,24,90];
const result = nums.map((n)=> n*10+1);
console.log(result);

// EXCERCISE 2

const num2=[3,10,24,90];
const result2 = num2.forEach(function(e){
    if(e%2==0){ 
        console.log(e);
    }
});
console.log(result2);   