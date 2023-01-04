const palindromes = function (string) {
    const stringLower = string.toLowerCase();
    const stringReverse = stringLower.split('').reverse().join('');
    return stringReverse;
};

// Do not edit below this line
module.exports = palindromes;
