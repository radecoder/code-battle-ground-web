/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

console.log("Falti calculator") 
console.log()

let a =3
let b =2
console.log(a,b)
let c = Math.random() 
console.log(c)

if (c>0.1){
    console.log("Addition is:", a+b)
    console.log("Multiplication is:", a*b)
    console.log("Subtract is:", a-b)
    console.log("Division is:", a/b)
    
}
else{
    console.log("Addition is:", a-b)
    console.log("Multiplication is:", a+b)
    console.log("Subtract is:", a/b)
    console.log("Division is:", a**b)
    

}
// console.log()