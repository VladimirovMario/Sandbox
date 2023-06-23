import styles from "./StoryTray.module.css";

export default function StoryTray({ stories }) {
  let updatedStories = [];

  updatedStories.push(...stories, {
    id: "create",
    label: "Create story",
  });

  return (
    <ul className={styles.desc}>
      {updatedStories.map((story) => (
        <li key={story.id}>{story.label}</li>
      ))}
    </ul>
  );
}
