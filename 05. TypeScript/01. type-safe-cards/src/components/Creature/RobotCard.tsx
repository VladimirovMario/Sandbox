import type { Robot } from './Creature.type';

function RobotCard({ model, releasedDate, isAvailable }: Robot) {
  return (
    <div>
      <h3>Robot</h3>
      <p>
        Model: {model} | Released: {releasedDate}
      </p>
      <p>{isAvailable ? 'Available' : 'Busy'}</p>
    </div>
  );
}

export default RobotCard;
