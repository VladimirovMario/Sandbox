import styles from './Letter.module.css';

export default function Letter({ letter, onToggle, isSelected }) {
  return (
    <li className={isSelected ? styles.selected : ''}>
      <label>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => {
            onToggle(letter.id);
          }}
        />
        {letter.subject}
      </label>
    </li>
  );
}
