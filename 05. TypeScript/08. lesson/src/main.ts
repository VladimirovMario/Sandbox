// Index Signatures

interface TransactionObj {
  [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }

const todayTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50,
};

let prop: string = 'Pizza';
console.log(todayTransactions[prop]);

const todaysNet = (transactions: TransactionObj) => {
  let total = 0;
  for (let transaction in transactions) {
    total += transactions[transaction];
  }

  return total;
};

console.log(todaysNet(todayTransactions));

console.log("todayTransactions['Dave']", todayTransactions['Dave']);

//////////

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: 'Jane',
  GPA: 3.5,
  classes: [100, 200],
};

// console.log('student.test', student.test);

for (let key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

Object.keys(student).map((key) => {
  // if we did not knot the type
  console.log(student[key as keyof typeof student]);
});

const logStudentKey = (student: Student, key: keyof Student) => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, 'name');

//////////////////////////////////

// interface Incomes {
//   [key: string]: number;
// }

type Streams = 'salary' | 'bonus' | 'sidehustle';

type Incomes = Record<Streams, number>;

const monthlyIncomes: Incomes = {
  salary: 500,
  bonus: 100,
  sidehustle: 0,
};

for (let revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
