// app/makePairings

function Pairing(giver, reciever)
{
    this.giver = giver;
    this.reciever = reciever;
};


function makePairings (personArr)
{
    var arr = personArr.slice(0);

    pairedArr = [];
    for(var i = 0; i < personArr.length; i++)
    {
        var rand = Math.floor(Math.random() * arr.length);
        
        // Used for testing
        //console.log(personArr[i].name, 'picked ', arr[rand].name, 'from the hat');

        if(personArr[i].name == arr[rand].name 
            || (personArr[i].spouse != null && personArr[i].spouse.name == arr[rand].name))
        {
            return false;
        }
        else
        {
            pairedArr.push(new Pairing(personArr[i].name, arr[rand].name));
        }
        arr.splice(rand, 1);
    } 
    return pairedArr;
};

module.exports = Pairing;
module.exports.makePairings = makePairings;