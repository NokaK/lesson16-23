let userName = "John";
const greeting = "Hello";
var message = "Hello, " + userName + "!";

let age = 25;

let isVisible = true;
let children;

let obj = {
  name: "John",
};

//დინამიური ტიპის ცვლადი
let type = "color";
type = "size";
obj[type] = "red";
obj[type] = 12;

//ობიექტები

//ცარიელი ობიექტის შექმნა
let user = {};

let student = {
  name: "John",
  age: 25,
  "likes javascript": true,
  address: {
    street: "Main street",
    city: "Boston",
  },
};

//ობიექტის შიგნით ობიექტზე წვდომა
//console.log(student.address.city);

//ობიექტზე დამატებული name მნიშვნელობის შეცვლა
// student.name = "Jane";

//ობიექტში ახალი age key-ის დამატება
// student.age = 25;

// ობიექტიდან  age key-ს წაშლა
// delete student.age;

//მასივები

//number ტიპის მასივი
let numbers = [100, 2, 30, 14, 5];
console.log(numbers[4]);

//string ტიპის მასივი
let colors = ["red", "green", "blue"];

//სხვადასხვა ტიპის მასივი
let random = ["tree", 795, [0, 1, 2], true, null, ""];

//ობიექტების მასივი
let objectArray = [
  { name: "John", age: 25 },
  { name: "Jane", age: 22 },
  { name: "Jim", age: 27 },
];

let navigation = ["home", "about", "services", "contact"];
let navigation2 = [
  { name: "home", link: "/home", hasIcon: true },
  { name: "about", link: "/about", hasIcon: false },
  { name: "services", link: "/services", hasIcon: false },
];
console.log(navigation2[0].hasIcon);

let categories = [
  {
    name: "electronics",
    icon: "https://cdn.onoff.ge/media/thumbs/058/0580707_20210209_100.png",
  },
  {
    name: "electronics",
    icon: "https://cdn.onoff.ge/media/thumbs/058/0580707_20210209_100.png",
  },
];
let person = {
  name: "John",
  age: "25",
  address: {
    street: "Main street",
    city: "Boston",
  },
  projects: ["Calculator", "Game", ["Wordpress", "React"]],
};
console.log(person.projects[2][1]);

//if else statement
// if (person.age == 25) {
//   let msssage = "Hello";
//   console.log("true");
// }
// console.log(msssage);
// message = "World";
