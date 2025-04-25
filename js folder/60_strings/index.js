console.log("This is tutorial for Strings ")

console.log("Mohd Sahil")
let a = "Mohd Sahil"
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7])
console.log(a[8])
console.log(a[9])
console.log(a.length)

let myname = "Mohd Sahil"
let frdname = "Sameer Khan"
console.log("Hey my name is " + myname + " and my friend name is " + frdname)
//or this    convinent way of writing this into variables
console.log(`Hey my name is ${myname} and my friend name is ${frdname}`)

// String methods and some function

console.log(myname.toUpperCase())   // uppercae   o/p = MOHD SAHIL
console.log(myname.toLowerCase())  // lowercase  o/p = mohd sahil
console.log(myname.length)        // length o/p = 10
console.log(myname.slice(1, 4))  // Slice  o/p = ohd   1 included and 4 not included
console.log(myname.slice(1))    // Slice  o/p = ohd Sahil      only  1 included
console.log(myname.replace("Sahil" , "Coder"))    // Replace  o/p = Mohd Coder     
console.log(myname.concat(" Rade " , "Coder"))    // Concatinate  o/p = Mohd Sahil Rade Coder    we can also use + operator 




// let b = "ShivamSh"
// console.log(b.toUpperCase())
// console.log(b.toLowerCase()) 
// console.log(b.length) 
// console.log(b.slice(1, 5)) 
// console.log(b.slice(1)) 

// console.log(b.replace("Sh", "77"))
// console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

// console.log(b)