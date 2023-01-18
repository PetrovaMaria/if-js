let user = 'John Doe';
console.log(user);

const student = 'Masha';
console.log(student);

user = student;
console.log(user);

let test = 1;
test += 1;
test += '1';
console.log(test);
test -= 1;
console.log(test);
test = Boolean(test);
console.log(test);

const array = [2, 3, 5, 8];
let result = 1;

// eslint-disable-next-line for-direction
for (let i=0; i<4; i++){
  result *= array[i];
}

console.log(result);

console.log('------------------');

const array2 = [2, 5, 8, 15, 0, 6, 20, 3];

// eslint-disable-next-line for-direction
for (let i=0; i<8; i++){
  if(array2[i]>5 && array2[i]<10){
    console.log(array2[i]);
  }
}

console.log('------------------');

const array3 = [2, 5, 8, 15, 0, 6, 20, 3];

// eslint-disable-next-line for-direction
for (let i=0; i<8; i++){
  if(array3[i] %2 === 0){
    console.log(array3[i]);
  }
}
