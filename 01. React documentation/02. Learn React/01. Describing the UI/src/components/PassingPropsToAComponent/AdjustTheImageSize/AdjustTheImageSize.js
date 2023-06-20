export default function AdjustTheImageSize() {
  return (
    <>
      <h2>Challenge 2 of 3: Adjust the image size based on a prop</h2>
      <Profile />
    </>
  );
}

function Profile() {
  return (
    <>
      <Avatar
        size={40}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />

      <Avatar
        size={90}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />

      <Avatar
        size={160}
        person={{
          name: "Gregorio Y. Zara",
          imageId: "7vQD0fP",
        }}
      />
    </>
  );
}

function Avatar({ person, size }) {
  let pictureMaxSize = "";
  if (size <= 90) {
    pictureMaxSize = "s";
  } else {
    pictureMaxSize = "b";
  }
  return (
    <img
      style={{ margin: "20px", borderRadius: "50%" }}
      src={getImageUrl(person, pictureMaxSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function getImageUrl(person, size) {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}
