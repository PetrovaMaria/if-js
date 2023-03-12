const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = function (object1, object2) {
  const property1 = Object.keys(object1);
  const property2 = Object.keys(object2);

  if (property1.length !== property2.length) {
    return false;
  }

  for (let i = 0; i < property1.length; i += 1) {
    const prop = property1[i];
    const bothAreObjects =
      typeof object1[prop] === 'object' && typeof object2[prop] === 'object';

    if (
      (!bothAreObjects && object1[prop] !== object2[prop]) ||
      (bothAreObjects && !deepEqual(object1[prop], object2[prop]))
    ) {
      return false;
    }
  }

  return true;
};

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // true

console.log('----------');

const getCalendarMonth = function (daysInMonth, daysInWeek, dayOfWeek) {
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

const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 4;
const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);

console.log(calendarMonth);
