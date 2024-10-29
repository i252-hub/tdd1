function analyzeArray(...arr){
    
if (arr.length === 0) {
        return {
            average: null,
            min: null,
            max: null,
            length: 0
        };
    }
const sum = arr.reduce((accumulator, currentValue)=>{
return accumulator + currentValue;
}, 0);

const avr = sum / arr.length;
const minValue = Math.min(...arr);
const maxValue = Math.max(...arr);
const length = arr.length;

return{
    average: avr,
    min: minValue,
    max: maxValue,
    length: length
}
}

module.exports = analyzeArray;

