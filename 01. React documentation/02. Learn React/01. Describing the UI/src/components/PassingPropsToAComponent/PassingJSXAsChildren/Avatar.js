import { getImageUrl } from "./utils";

export default function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      style={{margin: '20px'}}
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
