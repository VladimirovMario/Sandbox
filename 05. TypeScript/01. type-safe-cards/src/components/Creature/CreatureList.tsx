import type { Subject } from './Creature.type';
import PersonCard from './PersonCard';
import RobotCard from './RobotCard';

type CreatureProps = {
  showResult: boolean;
  creatureData: Subject[];
};

const CreatureList = ({ showResult, creatureData }: CreatureProps) => {
  if (!showResult) {
    return null;
  }

  return (
    <div>
      {creatureData.map((subject) => {
        if (subject.type === 'person') {
          return <PersonCard key={subject.id} {...subject} />;
        } else if (subject.type === 'robot') {
          return <RobotCard key={subject.id} {...subject} />;
        }
      })}
    </div>
  );
};

export default CreatureList;
