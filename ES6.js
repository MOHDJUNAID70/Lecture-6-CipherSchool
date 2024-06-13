// var x=15;

// {    
//     let x=5;
//     console.log(x);
// }

// console.log(x);

// var x=15;

// {    
//     const x=5;
//     console.log(x);
//     x=6;
//     console.log(x);
// }

// console.log(x);

// Arrow Function

// var x=function(x,y){
//     return x+y;
// }

// const a=(x,y)=> x+y;
// console.log(a(5,5));

// spread operator 

// const a=["jan", "feb","march"]
// const b=["jan1", "feb1","march1"]
// const c=["jan2", "feb2","march2"]

// const year=[...a, ...b, ...c]

// console.log(year);

// const num=[25,45,14,-4]
// let a=Math.max(...num)
// console.log(a);

// const num=[25,45,14,-4]
// let sum=0;
// for(let a of num){
//     sum=sum+a;
// }
// console.log(sum);

// const name="CipherSchool"
// let text=""
// for(let sum of name){
//     text=text+sum+" "
// }
// console.log(text);

// Map

// const fruit=new Map([["banana",500],["apple",200],["mango",300]])
// console.log(fruit);
// console.log(fruit.get("mango"));

// set

// const letter=new Set();
// letter.add("a");
// letter.add("c");
// letter.add("a");

// console.log(letter);

// class car{
//     constructor(name, year){
//         this.name=name;
//         this.year=year;
//     }
// }
// const c1=new car("mercedes",2000)
// const c2=new car("porsche",2100);
// console.log(c1);
// console.log(c2);

// promise

// const myfunc=()=>{
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             console.log("it is inside promise");
//             res();
//         },1500);
//     })
// };

// myfunc()
// .then(()=>{
//     console.log("resolved");
// })
// .catch(()=>{
//     console.log("rejected");
// })

// const person={
//     firstname:"mohd",
//     lastname:"junaid",
//     age:20
// };
// let id=Symbol("id");
// person[id]=12217701;
// console.log(person);

// const num=(x,y=15)=>x+y;
// console.log(num(10));

// rest operator
// const num=(...args)=>{
//     console.log(args);
// }
// console.log(num(2,4,5,6,8,7));

// const num=(...args)=>{
//     let sum=0;
//     for(let a of args){
//         sum+=a;
//     }
//     return sum;
// }
// console.log(num(2,4,5,6,8,7));

