const palindromes = function (string) {
    const stringLower = string.toLowerCase();
    const stringRemoveNonAlphas = stringLower.replace(/[^a-z0-9]/gi, '');
    const stringReverse = stringRemoveNonAlphas.split('').reverse().join('');
    return stringReverse === stringRemoveNonAlphas;
  };

// Do not edit below this line
module.exports = palindromes;
