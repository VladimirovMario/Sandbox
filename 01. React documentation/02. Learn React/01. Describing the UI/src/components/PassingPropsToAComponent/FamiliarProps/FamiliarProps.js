export default function Profile() {
  return (
    <>
      <Avatar person={{ name: "Lin Lanying", imageId: "1bX5QH6" }} size={100} />
      <Avatar
        person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
        size={80}
      />
      <Avatar person={{ name: "Aklilu Lemma", imageId: "OKS67lh" }} size={50} />
    </>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function getImageUrl(person, size = "s") {
  return `https://i.imgur.com/${person.imageId}${size}.jpg`;
}
