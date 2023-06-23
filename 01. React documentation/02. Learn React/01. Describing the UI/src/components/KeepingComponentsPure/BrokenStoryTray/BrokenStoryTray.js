import { useState } from "react";
import useTime from "../../../hooks/useTime";
import StoryTray from "./StoryTray/StoryTray";

export default function BrokenStoryTray() {
  return (
    <>
      <h2>Challenge 3 of 3: Fix a broken story tray </h2>
      <App />
    </>
  );
}

let initialStories = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" },
];

function App() {
  let [stories, setStories] = useState([...initialStories]);

  // HACK: Prevent the memory from growing forever while you read docs.
  // We're breaking our own rules here.
  if (stories.length > 100) {
    stories.length = 100;
  }

  return (
    <div style={{ width: "100%", height: "100%", textAlign: "center" }}>
      <h2>It is {useTime().toLocaleTimeString()} now.</h2>
      <StoryTray stories={stories} />
    </div>
  );
}
