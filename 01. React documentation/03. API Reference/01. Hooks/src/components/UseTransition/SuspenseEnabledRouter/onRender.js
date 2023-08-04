export function onRender(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime
) {
  console.log(
    'id:',
    id,
    'phase:',
    phase,
    'actualDuration:',
    actualDuration,
    'baseDuration:',
    baseDuration,
    'startTime:',
    startTime,
    'commitTime:',
    commitTime
  );
}
