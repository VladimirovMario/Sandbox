// Utility types

// Partial
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>,
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: 'someId123',
  title: 'Final Project',
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));

// Required  and Readonly

// all the properties are required
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database, etc;
  return assign;
};

// Argument of type '{}' is not assignable to parameter of type 'Required<Assignment>'.
// Type '{}' is missing the following properties from type 'Required<Assignment>':
// studentId, title, grade, verified
// console.log(recordAssignment({}))

console.log(
  recordAssignment({
    studentId: 'someId12345',
    title: 'Another project',
    grade: 66,
    verified: true,
  }),
);

const assignGraded = updateAssignment(assign1, { grade: 95 });
const assignedVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};
// Cannot assign to 'grade' because it is a read-only property.ts(2540)
// assignedVerified.grade = 34

// Record type
const hexColorMap: Record<string, string> = {
  red: 'FF0000',
  green: '00FF00',
  blue: '0000FF',
};

type Students = 'Sara' | 'Kelly';
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U';

const finalGrades: Record<Students, LetterGrades> = {
  Sara: 'A',
  Kelly: 'C',
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 86, assign2: 97 },
  Kelly: { assign1: 88, assign2: 76 },
};

// Pick and Omit

type AssignResult = Pick<Assignment, 'studentId' | 'grade'>;

const score: AssignResult = {
  studentId: 'someId123456',
  grade: 87,
};

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>;

const preview: AssignPreview = {
  studentId: 'someId123',
  title: 'Final project',
};

// https://www.youtube.com/watch?v=gieEQFIfgYc&t=8582s
