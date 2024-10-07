// 1.Encapsulation (public, private, protected)
// 2 Inheritance
// 3 Polymorphism
// 4 Аbstraction

class Person {
  name: string;
  age: number;

  constructor(name: string, age?: number) {
    this.name = name;
    if (age) {
      this.age = age;
    }
  }

  eat() {
    console.log(`What's for dinner?`);
  }

  speak() {
    console.log(`My name is ${this.name}, I am ${this.age} years old`);
  }
}

const person = new Person('asd', 2011);
console.log(person);

// inheritance tinh ke thua
class Chef extends Person {
  rate: number;
  constructor(name: string, age: number, rate: number) {
    super(name, age);
    this.rate = rate;
  }

  cook() {
    console.log('sd');
  }
}

// Polymorphism tinh da hinh
class User implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`What's for dinner?`);
  }

  speak() {
    console.log(`My name is ${this.name}, I am ${this.age} years old`);
  }
}

interface Shape {
  calculated(): string;
}

class Circle implements Shape {
  calculated() {
    return '';
  }
}
const chef = new Chef('hung', 10, 3.5);

abstract class Animal {
  name: string;

  constructor(name) {
    this.name = name;
  }
  eat() {
    return 'asdasd';
  }

  abstract makeSound(): string;
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  makeSound(): string {
    return 'hoho';
  }
}
