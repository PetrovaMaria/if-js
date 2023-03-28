const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = {
  data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
  [Symbol.iterator]() {
    return this;
  },
  next(id) {
    if (this[id] === undefined || this[id] === this.data.length - 1) {
      this[id] = 0;
    } else {
      this[id]++;
    }
    return {
      value: this.data[this[id]],
      done: false,
    };
  },
};

text1.addEventListener('click', (event) => {
  event.target.style.color = colors.next('id1').value;
});

text2.addEventListener('click', (event) => {
  event.target.style.color = colors.next('id2').value;
});

text3.addEventListener('click', (event) => {
  event.target.style.color = colors.next('id3').value;
});

console.log('__________');

const getCalendar = function (daysInMonth, daysInWeek, dayOfWeek) {
  let elementOfArr = {};
  const calendar = [[]];
  calendar[0].fill(0);
  let row = 0;
  for (let i = 0; i < dayOfWeek; i++) {
    elementOfArr = {
      dayOfMonth: daysInMonth - dayOfWeek + 1 + i,
      notCurrentMonth: false,
      selectedDay: false,
    };
    calendar[0][i] = elementOfArr;
    elementOfArr = {};
  }
  for (let i = 1; i <= daysInMonth; i++) {
    if (dayOfWeek < daysInWeek) {
      elementOfArr = {
        dayOfMonth: i,
        notCurrentMonth: true,
        selectedDay: false,
      };
      calendar[row][dayOfWeek] = elementOfArr;
      elementOfArr = {};
      dayOfWeek++;
    } else {
      calendar.push([]);
      row += 1;
      dayOfWeek = 0;
      elementOfArr = {
        dayOfMonth: i,
        notCurrentMonth: true,
        selectedDay: false,
      };
      calendar[row][dayOfWeek] = elementOfArr;
      elementOfArr = {};
      dayOfWeek++;
    }
  }

  let dayOfNextMonth = 1;
  while (dayOfWeek < daysInWeek) {
    elementOfArr = {
      dayOfMonth: dayOfNextMonth,
      notCurrentMonth: false,
      selectedDay: false,
    };
    calendar[calendar.length - 1][dayOfWeek] = elementOfArr;
    elementOfArr = {};
    dayOfNextMonth++;
    dayOfWeek++;
  }
  return calendar;
};

const today = new Date();
const FirstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);

function howMuchDays(year, month) {
  const date1 = new Date(year, month, 1);
  const date2 = new Date(year, month + 1, 1);
  return Math.round((date2 - date1) / 1000 / 3600 / 24);
}

const daysInMonth = howMuchDays(today.getFullYear(), today.getMonth());
const daysInWeek = 7;
const dayOfWeek = FirstDayOfMonth.getDay();
const calendarMonth = getCalendar(daysInMonth, daysInWeek, dayOfWeek);

for (let i = 0; i < calendarMonth.length; i++) {
  for (let j = 0; j < calendarMonth[i].length; j++) {
    calendarMonth[i][j].dayOfMonth === today.getDate()
      ? (calendarMonth[i][j].currentDay = true)
      : (calendarMonth[i][j].currentDay = false);
  }
}

console.log(calendarMonth);
