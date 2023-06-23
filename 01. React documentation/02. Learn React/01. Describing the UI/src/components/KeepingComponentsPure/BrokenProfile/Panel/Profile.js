import Panel from "./Panel";
import { getImageUrl } from "../../../../utils/getImageUrl";

export default function Profile({ person }) {
  return (
    <Panel>
      <Header person={person} />
      <Avatar person={person} />
    </Panel>
  );
}

function Header({ person }) {
  return <h1>{person.name}</h1>;
}

function Avatar({ person }) {
  return (
    <img
      style={{ margin: "5px", borderRadius: "50%" }}
      src={getImageUrl(person)}
      alt={person.name}
      width={50}
      height={50}
    />
  );
}
