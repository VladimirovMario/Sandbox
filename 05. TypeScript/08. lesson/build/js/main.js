"use strict";
// Index Signatures
// interface TransactionObj {
//   Pizza: number;
//   Books: number;
//   Job: number;
// }
const todayTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50,
};
let prop = 'Pizza';
console.log(todayTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (let transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todayTransactions));
console.log("todayTransactions['Dave']", todayTransactions['Dave']);
const student = {
    name: 'Jane',
    GPA: 3.5,
    classes: [100, 200],
};
// console.log('student.test', student.test);
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
Object.keys(student).map((key) => {
    // if we did not knot the type
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 0,
};
for (let revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
