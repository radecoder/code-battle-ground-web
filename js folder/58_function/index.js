function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}
nice("Mohd Sahil")

console.log("")

function sum(a,b,c=6){
    return a+b+c
}
result = sum (12,12)
console.log("sum is :",result)

console.log("")


// function sum(a, b, c = 3) {
//     // console.log(a + b)
//     console.log(a, b, c)
//     return a + b + c
// }


result1 = sum(3, 1)
result2 = sum(7, 2)
result3 = sum(3, 13, 4)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

console.log("")

const summation =(a,b,c=5) => {
    return a+b+c;

}
r1 = summation(5,5)
console.log(r1)
console.log("")


console.log("Arrow Func- ")
console.log("convinent way to write fun")
// here func1 is variable that can be used in other func
const func1 = (x)=>{  
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);




console.log("")

const Arrow = (x) => {
    console.log("This is First Arrow Func :",x)
}
Arrow(10);
Arrow(20);
Arrow(30);




