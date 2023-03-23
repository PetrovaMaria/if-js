const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },
  next(id) {
    if (this.id === undefined) {
      this.id = id;
    }
    while (this.data.length !== -1 ) {
      if (this.id <= this.data.length) {
        return {
          done: false,
          value: this.data[this.id++],
        };
      }
      return {
        id: 0,
        value: this.data[this.id],
      };
    }
  },
};

console.log(colors.next(3).value);

const firstIndex = 1;
const secondIndex = 1;
const thirdIndex = 1;


text1.addEventListener('click', (event) => {
  event.target.style.color = colors.next(firstIndex).value;
});



text2.addEventListener('click', (event) => {
  event.target.style.color = colors.next(secondIndex).value;
});

text3.addEventListener('click', (event) => {
  event.target.style.color = colors.next(thirdIndex).value;
});




