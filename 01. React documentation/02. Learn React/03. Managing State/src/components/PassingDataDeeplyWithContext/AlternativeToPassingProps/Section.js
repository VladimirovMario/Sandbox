import { LevelContext } from './LevelContext';

export default function Section({ level, children }) {
  return (
    <LevelContext.Provider value={level}>
      <section className="section">{children}</section>
    </LevelContext.Provider>
  );
}
