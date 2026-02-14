import type { Person } from './Creature.type';

function PersonCard({ name, age, gender, status }: Person) {
  return (
    <div>
      <h3>Person</h3>
      <p>
        Name: {name} | Age: {age} | Gender: {gender}
      </p>
      {status && <p>Status: {status}</p>}
    </div>
  );
}

export default PersonCard;
