// app/Testing.js

var Person = require('./person');
var Pairings = require('./pairings');

var person1 = new Person("Ben");
var person2 = new Person("Emily");
var person3 = new Person("Sara");
var person4 = new Person("George");
var person5 = new Person("Darcy");
var person6 = new Person("Jordan");
var person7 = new Person("Allison");
var person8 = new Person("Ken");

person1.makeSpouse(person2);

person4.makeSpouse(person7);

var perArr = [person1, person2, person3, person4, person5, person6, person7, person8];

perArr.forEach(function(element) {
    element.showData();
}, this);

do{
    var pairedArr = Pairings.makePairings(perArr);
} while(pairedArr == false);

pairedArr.forEach(function(element) {
    console.log(element);
}, this);