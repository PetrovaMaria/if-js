export const sum = function (a) {
  return function (b) {
    return a + b;
  };
};

console.log('-----------------');

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

export const f1 = function () {
  let k = 0;
  return function () {
    this.style.color = colors[k];
    k++;
    if (k === colors.length) {
      k = 0;
    }
  };
};

text1.addEventListener('click', f1());
text2.addEventListener('click', f1());
text3.addEventListener('click', f1());
