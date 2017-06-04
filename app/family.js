// app/family.js

const readline = require('readline');
const Person = require('./person');
const fs = require('fs');
const filename = 'family.txt';

function getFamily()
{
    var family = [];

    var lines = require('fs').readFileSync(filename, 'utf-8')
    .split('\n');
    
    lines.forEach(function(line){
        var names = line.split(',');
        var member = new Person(names[0]);
        family.push(member);
        if(names.length > 1)
        {
            var spouse = new Person(names[1]);
            member.makeSpouse(spouse);
            family.push(spouse);
        }
    }, this);

    return family;
}

module.exports.getFamily = getFamily;