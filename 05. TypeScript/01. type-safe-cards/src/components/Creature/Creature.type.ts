type Gender = 'male' | 'female' | 'other';
type Status = 'single' | 'married';

type Person = {
  id: string;
  readonly type: 'person';
  name: string;
  age: number;
  gender: Gender;
  status?: Status;
};

type Robot = {
  id: string;
  readonly type: 'robot';
  model: string;
  releasedDate: string;
  isAvailable: boolean;
};

type Subject = Person | Robot;

export type { Person, Robot, Subject };
