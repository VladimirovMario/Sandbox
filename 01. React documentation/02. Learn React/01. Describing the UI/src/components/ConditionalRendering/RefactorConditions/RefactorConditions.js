export default function RefactorConditions() {
  return (
    <>
      <h2>Challenge 3 of 3: Refactor a series of ? : to if and variables</h2>
      <DrinkList />
    </>
  );
}

function Drink({ name }) {
  let partOfPlant = "";
  let caffeineContent = "";
  let age = "";

  if (name === "tea") {
    partOfPlant = "leaf";
    caffeineContent = "15-70 mg/cup";
    age = "4,000+ years";
  } else if (name === "coffee") {
    partOfPlant = "bean";
    caffeineContent = "80-185 mg/cup";
    age = "1,000+ years";
  }
  return (
    <section>
      <h3>{name}</h3>
      <dl>
        <dt>Part of plant</dt>
        <dd>{partOfPlant}</dd>
        <dt>Caffeine content</dt>
        <dd>{caffeineContent}</dd>
        <dt>Age</dt>
        <dd>{age}</dd>
      </dl>
    </section>
  );
}

function DrinkList() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
