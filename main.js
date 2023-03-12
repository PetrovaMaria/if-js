class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }
 get course() {
    const date = new Date();
    return date.getFullYear() - this.admissionYear;
  }
}

const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  },
];

class Students {
  constructor(studentsData) {
    this.studentsData = studentsData;
  }

  getInfo() {
    studentsData.sort((a,b) => a.admissionYear < b.admissionYear ? 1 : -1);
    const arr =  this.studentsData.map(
      (element) =>
        ` ${new User(element.firstName, element.lastName).fullName} - ${
          element.courseName
        }, ${
          new Student(
            element.firstName,
            element.lastName,
            element.admissionYear,
            element.courseName,
          ).course
        } курс`,
    );
    return arr;
  }
}

const students = new Students(studentsData);
console.log(students.getInfo());
