const palindrome = function (word) {
  for (let i = 0; i < word.length; ) {
    if (word[i] === word[word.length - i - 1]) {
      i++;
      if (i === word.length) {
        return true;
      }
    } else {
      return false;
    }
  }
};

console.log(palindrome('шалаш'));

console.log('----------');

const min = function (a, b) {
  if (a < b) {
    return a;
  }
  return b;
};

const max = function (a, b) {
  if (a > b) {
    return a;
  }
  return b;
};

console.log(min(1, 2));
console.log(max(1, 2));

const min1 = function (a, b) {
  return a < b ? a : b;
};

const max1 = function (a, b) {
  return a > b ? a : b;
};

console.log(min1(3, 4));
console.log(max1(3, 4));

console.log('----------');

const arr = [10, 2, 36, 15, 69, 100, 58, 78, 45, 60];

for (let i = 0; i < arr.length; i++) {
  let new_str = '';
  const str = String(arr[i]);
  for (let j = 0; j < str.length; j++) {
    if (str[j] === '0') {
      new_str = new_str + 'zero';
    } else {
      new_str = new_str + str[j];
    }
    arr[i] = new_str;
  }
}

console.log(arr);
