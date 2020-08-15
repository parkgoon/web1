"use strict";

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name}: hello`);
  }
}

const ohdury = new Person("ohdury", 30);
console.log(ohdury.name);
ohdury.speak();

class User {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }
    // this._age = value;

    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("ohdury", "park", -1);
console.log(user1.age);

class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); //최신 반영 내용, 따라서 쓰려면 Babel 이용 필요

//최신 반영 내용, 따라서 쓰려면 Babel 이용 필요 (static)
class Article {
  static publisher = "Dream";
  constructor(articleNum) {
    this.articleNum = articleNum;
  }
  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher);
console.log(Article.publisher);
Article.printPublisher();

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("ㅇㅇ");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(2, 3, "red");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(2, 3, "blue");
triangle.draw();
console.log(triangle.getArea());

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
