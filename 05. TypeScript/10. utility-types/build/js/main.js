"use strict";
// Utility types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'someId123',
    title: 'Final Project',
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
// Required  and Readonly
// all the properties are required
const recordAssignment = (assign) => {
    // send to database, etc;
    return assign;
};
// Argument of type '{}' is not assignable to parameter of type 'Required<Assignment>'.
// Type '{}' is missing the following properties from type 'Required<Assignment>':
// studentId, title, grade, verified
// console.log(recordAssignment({}))
console.log(recordAssignment({
    studentId: 'someId12345',
    title: 'Another project',
    grade: 66,
    verified: true,
}));
const assignGraded = updateAssignment(assign1, { grade: 95 });
const assignedVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
// Cannot assign to 'grade' because it is a read-only property.ts(2540)
// assignedVerified.grade = 34
// Record type
const hexColorMap = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF',
};
const finalGrades = {
    Sara: 'A',
    Kelly: 'C',
};
const gradeData = {
    Sara: { assign1: 86, assign2: 97 },
    Kelly: { assign1: 88, assign2: 76 },
};
const score = {
    studentId: 'someId123456',
    grade: 87,
};
const preview = {
    studentId: 'someId123',
    title: 'Final project',
};
// https://www.youtube.com/watch?v=gieEQFIfgYc&t=8582s
