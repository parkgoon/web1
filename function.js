"use strict";

let a;

function log(message) {
  //   console.log(message);
  message.name = "test2";
}
// log("test");
const park = { name: "park" };
log(park);
console.log(park.name);

function default2(message, from = "nono") {
  console.log(`${message}, ${from}`);
}
default2("Hi");

function question(answell, correct, wrong) {
  if (answell === "good") {
    correct();
  } else {
    wrong();
  }
}

const correct = function () {
  console.log("yes");
};

const correct2 = () => console.log("correct1 yes");
const correct3 = (a, b) => console.log(`${a} + ${b}`);
const correct4 = (a, b) => {
  console.log(`${a} + ${b}`);
  return a * b;
};

const wrong = function () {
  console.log("no");
};

question("good", correct, wrong);
question("no good", correct, wrong);

correct2();
correct3("a", "b");
a = correct4(1, 2);
console.log(a);

// IIFE
(function hello() {
  console.log("hello world");
})();
