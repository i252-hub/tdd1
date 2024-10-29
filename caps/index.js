function capitalize(str){
    if(typeof str !== 'string'){
        throw new Error('Invalid Input, Not Capitalized :(');
    }

    if(str == ''){
        throw new Error('Empty String, Not Capitalized :(');
    }
return str.charAt(0).toUpperCase() + str.slice(1);

}

module.exports = capitalize;