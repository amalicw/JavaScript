console.log("hello world")

/*
var a = 2
var (let,const) ES6
*/

//data types
let a = 4
console.log(a)
console.log(typeof a)

let reguired = true
console.log(typeof reguired)
console.log(!reguired)

let c = "Amali"
console.log(typeof c)

let d = null
console.log(typeof d)

let e
console.log(typeof e)

//let c = a+b
// we can not re declare variables with let but can with var
//but we can re assign with let
c = a + d
// var can both redeclare and reassign

const f = 3
console.log(f)

//const value cant reassign
//f = a+d

//ifcondition
const flag = true

if (flag) {
  console.log("Condition is satisfied")
} else console.log("condition is not satisfied")

//while loop
//ex:validate only 10 links

let i = 0

while (i < 10) {
  i++
  console.log(i)
}

//do while
//execute code once and then run the loop

let z = 0
do {
  z++
} while (z>10);
console.log(z)

//for loop

for(let k=0;k<10;k++)
{
  console.log(k)
}

//difference between while and for
//if u know how many times u repeat value u go for for loop otherwise to check specific condition go for while loop
