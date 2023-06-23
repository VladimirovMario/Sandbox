import Profile from "./Panel/Profile";

export default function FixABrokenProfile() {
  return (
    <>
      <h2>Challenge 2 of 3: Fix a broken profile</h2>
      <ProfileList />
    </>
  );
}

function ProfileList() {
  return (
    <>
      <Profile
        person={{
          imageId: "lrWQx8l",
          name: "Subrahmanyan Chandrasekhar",
        }}
      />

      <Profile
        person={{
          imageId: "MK3eW3A",
          name: "Creola Katherine Johnson",
        }}
      />
    </>
  );
}
