
function isPalindrome(str) {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}



function isPalidromeNoArrayMethods(str) {
    if (str === undefined|| str.length < 3) {return false;}
    if (typeof(str) !== 'string') {return false;}
    let arr = str.split('')
    let left = '';
    let right = '';
    for (let i = 0, j = arr.length-1; i < j; i++, j--) {
        left += arr[i].toLowerCase();
        right += arr[j].toLowerCase();
    }
    return left === right;
}

module.exports = { isPalidromeNoArrayMethods, isPalindrome };

