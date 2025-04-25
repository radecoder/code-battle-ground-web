let a = [1, 93, 5, 6, 88]


for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}

console.log("")

a.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

console.log("")

let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key]; 
        console.log(key, element)
    }
}

console.log("")

for (const iterator of a) {
    console.log(iterator)
}