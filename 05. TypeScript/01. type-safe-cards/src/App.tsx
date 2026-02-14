import './App.css';
import CreatureList from './components/Creature/CreatureList';
import { creatureData } from './components/Creature/creatureData';
import type { ShowResult } from './types';

function App() {
  // function addNumbers(a: number, b: number): number {
  //   return a + b;
  // }

  // function logger(fnResult: number) {
  //   return console.log(fnResult);
  // }

  // logger(addNumbers(2, 3));

  // function concatStrings(params: string[]): string {
  //   return params.join('');
  // }

  // console.log(concatStrings(['some', 'string', 'test']));

  return (
    <>
      <h1>Typescript demo</h1>
      <CreatureList showResult={true} creatureData={creatureData} />
      <GreetPerson showResult={false} />
      <TypeAnimal showResult={false} />
    </>
  );
}

export default App;

const GreetPerson = ({ showResult }: ShowResult) => {
  type Gender = 'male' | 'female' | 'other' | 'robot';

  type Person = {
    name: string;
    age: number;
    gender: Gender;
  };

  const title: Record<Gender, string> = {
    male: 'Mr',
    female: 'Mrs',
    other: 'Mx',
    robot: 'AI',
  };

  function greetPerson({ ...props }: Person): string {
    const { name, age, gender } = props;
    return `Hello ${title[gender]} ${name}, age ${age}`;
  }

  if (showResult) {
    console.log(greetPerson({ name: 'Mario', age: 42, gender: 'male' }));
    console.log(greetPerson({ name: 'Jane', age: 36, gender: 'female' }));
    console.log(greetPerson({ name: 'Jasie', age: 22, gender: 'other' }));
    console.log(greetPerson({ name: 'ChatGPT', age: 4, gender: 'robot' }));
  }

  return null;
};

const TypeAnimal = ({ showResult }: ShowResult) => {
  type Fish = {
    type: 'fish';
    species: string;
    swim: (species: string) => void;
  };
  type Bird = { type: 'bird'; fly: () => void };
  type Animal = Fish | Bird;

  function move(animal: Animal) {
    console.log(`Animal type is ${animal.type}`);
    if (animal.type === 'fish') {
      return animal.swim(animal.species);
    }

    return animal.fly();
  }

  if (showResult) {
    move({
      type: 'fish',
      species: 'Barracuda',
      swim: (species: string) => console.log(`${species} swims`),
    });
    move({ type: 'bird', fly: () => console.log('Animal flies') });
  }

  return null;
};
