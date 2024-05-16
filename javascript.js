function showValues() {
    var value1 = 10;
    console.log("showValues -> Value is => " + value1);
  }
  
  showValues();
  
  function getName() {
    return "Amali";
  }
  
  let myName = getName();
  console.log("getName -> My name is " + myName);
  
  // this is an arrow function
  const getName2 = () => {
    return "Amali";
  };
  console.log("getName2 -> My Name is " + getName2());
  
  
  function getName(name) {
    return name;
  }
  
  console.log(getName(213123));
  
  let getName1 = (name) => {
    return name;
  };
  
  console.log(getName1("Anu"));
  
  // write an simple function which accpets any number as a parameter
  // and return an output which multiplied by 10
  
  function multiplyNum(num, multiplier){
    return num * multiplier
  }
  
  console.log('The value is ' + multiplyNum(2, 5))
  
  
  
  
  // function getValue() {
  //   let num = 1
  //   console.log(`value is: ${num} and ${num2}`)
  //   let num2 = 10
  //   console.log(`value is: ${num} and ${num2}`)
  // }
  
  // getValue()
  
  // var num3 = 10
  // function getValue1() {
  //   var num4 = 1
  //   console.log(`value is: ${num3} and ${num4}`)
  // }
  
  // getValue1()
  
  let name = 'Amali'
  console.log(`Type of: ${typeof name}`)
  
  let num = 1
  console.log(`Type of: ${typeof num}`)
  
  let num1 
  console.log(`Type of: ${typeof num1}`)
  
  let a = [1,2,3,4] 
  console.log(`Type of: ${typeof a}`)
  
  let isExists = true
  console.log(`Type of: ${typeof isExists}`)
  
  let value = null
  console.log(`Type of: ${typeof value}`)
  
  let userObj = {
    name: "qwe"
  }
  console.log(`Type of: ${typeof userObj}`)
  
  
  
  
  
  let userObj1= {
    name: "qwe",
    age : 12
  }
  
  let Father = {
    age: 55
  }
  
  let Child = {
    age: 10
  }
  
  function getName(user) {
      return typeof user.name
  }
  
  function getAge(father, child) {
    return father.age + child.age
  }
  
  console.log(getName(userObj1))
  console.log(getAge(Father, Child))
  
  