// app/index.js

const Pairings = require('./pairings');
const Person = require('./person');
const Family = require('./family');
const consult = require('./consultPairs');

var family = Family.getFamily();
do{
    var pairedFamily = Pairings.makePairings(family);
} while(pairedFamily == false);

consult.consultPairs(pairedFamily);

