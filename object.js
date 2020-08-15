const name = "james";
const age = 4;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
}

const james = { name: "james", age: 3 };

function print2(person) {
  console.log(person.name);
  console.log(person.age);
}
print2(james);

const obj1 = {}; //object literal
const obj2 = new Object(); //object constructor

james.hasjob = true; //js 의 동적인 특징 (유지보수에는 힘듦, 가능하면 사용하지 않아야함)
delete james.hasjob;
console.log(james.hasjob); //삭제도 가능 다른 언어에서는 허용하지 않음

console.log(james.name);
console.log(james["name"]);
james["hasjob"] = true;
console.log(james.hasjob);

// . 을 통하여 값을 가져올 때는 정확히 값을 가져올때, 후자는 런타임으로 가져오게 될때(실시간으로 받아오고자 하는 값)
function printvalue(obj, key) {
  // console.log(obj.key);
  console.log(obj[key]);
}
printvalue(james, "name");
printvalue(james, "age");

const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "tom", age: 4 };

// class 와 유사, 과거 class 가 구현되기 전에는 이를 사용
function makePerson(name, age) {
  return {
    name,
    age,
  };
}

const person4 = makePerson("jamess", 4);
console.log(person4);

// Constructor Function
function makePerson2(name, age) {
  this.name = name;
  this.age = age;
}

const person5 = new makePerson2("summer", 5);
console.log(person5);

console.log("name" in james);
console.log("gender" in james);
console.log(james.gender);

console.clear();
for (key in james) {
  console.log(key);
}

const array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
for (value of array) {
  console.log(value);
}

const user = { name: "james", age: 4 };
const user2 = user;
user2.name = "test";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way
const user4 = {};
Object.assign(user4, user);
console.log(user4);
const user5 = Object.assign({}, user);
console.log(user5);

const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);
