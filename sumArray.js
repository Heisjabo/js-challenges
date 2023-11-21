
const sumArray = (array1, array2) => {
    let sum = [];
    if(array1.length !== array2.length){
        return "Error: Arrays must be equal in length.";
    } else {
        for( let i = 0; i < array1.length; i++ ){
            sum.push(array1[i] + array2[i]);
        }
    }
    return sum;
}


module.exports = sumArray;