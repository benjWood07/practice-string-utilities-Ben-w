// stringUtils.js - Custom String Utilities Module

function capitalize(str) {       //converts the first letter of a string to uppercase
    if (typeof str !== 'string') {     //handle edge cases
        return '';
    }
    if (str.length === 0) {
        return str;
    } 
    return str.charAt(0).toUpperCase() + str.slice(1);      //capitalize first letter and keep the rest as is
}
function reverse(str) {        //reverses the characters in a string
    if (typeof str !== 'string') {
        return '';
    }  
    return str.split('').reverse().join('');         //convert to array, reverse, then join back to string
}
function contains(str, substr) {          //checks if a substring exists within a string
    if (typeof str !== 'string' || typeof substr !== 'string') {
        return false;
    } 
    return str.includes(substr);       //use includes method to check if substring exists
}
module.exports = {       //export all functions to make them available to other files
    capitalize,
    reverse,
    contains
};


