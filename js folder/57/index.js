console.log("I am a tutorial on Loops")
console.log("")


let a = 1;
console.log(a)
console.log(a+1)
console.log(a+2)
console.log("")

console.log("for")
for(let i=0; i<=10; i++){
    console.log(i);   // 0 to 100
    // console.log(a+i); // 1 to 101 
}


console.log("")

console.log("for in -> key,value ")
let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI",
    salary: "1000000"
}
   
for (const key in obj) {
    const element = obj[key];
    console.log(key, element)
}

// for (const key in obj) {
//         console.log(key)
// }

console.log("")

console.log("for of -> iterator")
for (const element of "object") {  //iteration o b j e c t 
    console.log(element);
}

// for (const c of "Harry") {
//     console.log(c)
// }

console.log("")

console.log("while")
let i = 0;
while (i<6) {
    console.log(i)
    i++;
}

console.log("")

console.log("Do while")
let j = 1;
do {
    console.log(j)
    j++;
} while (j<6);