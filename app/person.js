// app/Person.js

function Person(name)
{
    this.name = name;
    this.spouse = null;
};

Person.prototype.makeSpouse = function(spouse)
{
    this.spouse = spouse;
    spouse.spouse = this;
};

Person.prototype.showData = function() 
{
    console.log(this.name, (this.spouse != null) ? this.spouse.name : '- no spouse');
};

module.exports = Person;