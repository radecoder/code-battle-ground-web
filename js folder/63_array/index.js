let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
console.log(arr, typeof arr); //type
console.log(arr.length)      //length
console.log("")

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])
console.log("")

console.log(arr.toString()) //convert into string
console.log("")

console.log(arr.join(" and ")) //adding and b/w no.s
console.log("")

console.log(arr.pop())         // pop out last element
console.log("")

arr.push("Mohd Sahil")         // push ele in last
console.log(arr)
console.log("")

arr.shift()                   //pop 1st element
console.log(arr)
console.log("")

arr.unshift("Rade Coder")    // push ele in first
console.log(arr)
console.log("")

delete(arr[3])           // delete ele but memory remain
console.log(arr)
console.log("")

let a1 = [1, 2, 3]
let a2 = [14, 12, 6]   //concat to add mutiple arr
let a3 = [31, 29, 8]   //does not change existing arr
console.log(a1.concat(a2,a3)) 
console.log("")

let a4 = [23,10,12]
a4.sort()           //sort arr & modifies original arr
console.log(a4)
console.log("")

let numbers1 = [1, 2, 3, 4, 5] 
numbers1.splice(1, 2)    
console.log(numbers1)
let numbers2 = [1, 2, 3, 4, 5] 
numbers2.splice(1, 3)  
console.log(numbers2)
// numbers.splice(1, 3, 222, 333) 
// console.log(numbers)
// (4) [1, 222, 333, 5]