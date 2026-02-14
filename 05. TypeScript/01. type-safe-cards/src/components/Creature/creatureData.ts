import type { Subject } from './Creature.type';

const creatureData: Subject[] = [
  {
    id: 'person-1',
    type: 'person',
    name: 'Peter',
    age: 36,
    gender: 'male',
    status: 'married',
  },
  {
    id: 'person-2',
    type: 'person',
    name: 'Jane',
    age: 24,
    gender: 'female',
    status: 'single',
  },
  {
    id: 'person-3',
    type: 'person',
    name: 'Nike',
    age: 21,
    gender: 'other',
  },
  {
    id: 'robot-1',
    type: 'robot',
    model: 'GPT-5.2',
    releasedDate: '2025-12-11',
    isAvailable: true,
  },
];

export { creatureData };
