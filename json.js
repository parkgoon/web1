let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthdate: new Date(),
  //   symbol: Symbol("id"),
  jump: () => {
    console.log(`${name} can jump`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key}, value:${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);

console.clear();
json = JSON.stringify(rabbit);

// const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key:${key}, value:${value}`);
  //   return value;
  return key === "birthdate" ? new Date(value) : value;
});
console.log(obj);
console.log(json);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthdate.getDate());
console.log(obj.birthdate.getDate());
console.log(obj.birthdate);

// http://www.jsondiff.com/ JSON 비교 사이트
// https://jsonbeautifier.org/ JSON 포맷을 맞춰주는 아이
