import Profile from "./Profile/Profile ";

const data = [
  {
    person: {
      name: "Maria Skłodowska-Curie",
      imgId: "szV5sdG",
      profession: "physicist and chemist",
      awards: [
        "Nobel Prize in Physics",
        "Nobel Prize in Chemistry",
        "Davy Medal",
        "Matteucci Medal",
      ],
      discovered: "polonium (element)",
    },
    imageSize: 120,
  },
  {
    person: {
      name: "Katsuko Saruhashi",
      imgId: "YfeOqp2",
      profession: "geochemist",
      awards: ["Miyake Prize for geochemistry", "Tanaka Prize"],
      discovered: "a method for measuring carbon dioxide in seawater",
    },
    imageSize: 90,
  },
];

export default function Gallery() {
  return (
    <>
      <div>
        <h1>Notable Scientists</h1>

        {data.map((props) => (
          <Profile
            key={props.person.name}
            person={props.person}
            imageSize={props.imageSize}
          />
        ))}
        
      </div>
    </>
  );
}
