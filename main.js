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
  let obj = {};
  const arr = [[]];
  arr[0].fill(0);
  let row = 0;
  for (let i = 0; i < dayOfWeek; i++) {
    obj = {
      dayOfMonth: daysInMonth - dayOfWeek + 1 + i,
      notCurrentMonth: false,
      selectedDay: false,
    };
    arr[0][i] = obj;
    obj = {};
  }
  for (let i = 1; i <= daysInMonth; i++) {
    if (dayOfWeek < daysInWeek) {
      obj = {
        dayOfMonth: i,
        notCurrentMonth: true,
        selectedDay: false,
      };
      arr[row][dayOfWeek] = obj;
      obj = {};
      dayOfWeek++;
    } else {
      arr.push([]);
      row += 1;
      dayOfWeek = 0;
      obj = {
        dayOfMonth: i,
        notCurrentMonth: true,
        selectedDay: false,
      };
      arr[row][dayOfWeek] = obj;
      obj = {};
      dayOfWeek++;
    }
  }

  let dayOfNextMonth = 1;
  while (dayOfWeek < daysInWeek) {
    obj = {
      dayOfMonth: dayOfNextMonth,
      notCurrentMonth: false,
      selectedDay: false,
    };
    arr[arr.length - 1][dayOfWeek] = obj;
    obj = {};
    dayOfNextMonth++;
    dayOfWeek++;
  }
  return arr;
};

const daysInMonth = 30;
const daysInWeek = 7;
const dayOfWeek = 4;
const calendarMonth = getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek);

console.log(calendarMonth);
