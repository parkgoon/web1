"use strict";

// let (ES6 에 추가, mutalbe type)
// var 는 사용하면 안됨 (var 는 선언하기 전에 할당/출력이 가능, hoisting(끌어올려주다) 선언을 맨 위로 올려버림)
let name;
name = 5;
console.log(name);

// constant const (immutable)
const char = "c";
const brendad = "brendan";
const greeting = "hello" + brendad;
console.log(`value:${greeting}, type:${typeof greeting}`);
console.log("value:" + brendad + "type:" + typeof brendad);
const statement = `hi ${brendad}, ${greeting}`;
console.log(statement);
