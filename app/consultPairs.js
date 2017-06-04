// app/consultPairs
const prompt = require('prompt');

function consultPairs (pairArr) {
    prompt.start();

    prompt.get('name', function(err, answer) {
        var found = false;
        for (var i = 0; i < pairArr.length; i++)
        {
            if(pairArr[i].giver == answer.name)
            {
                console.log('You are giving', pairArr[i].reciever, 'a gift');
                found = true;
                break;
            }
        }
        if(found == false)
        {
            console.log('Sorry', answer.name, 'we could not find your name');
        }

        console.log('Search another name?')
        prompt.get('yes_no', function(err, answer) {
            if(answer.yes_no.substring(0,1).toUpperCase() == 'Y')
            {
                consultPairs(pairArr);
            }
        });
    });

    
};


module.exports.consultPairs = consultPairs;