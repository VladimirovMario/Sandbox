export default function Background({ position }) {
  function backgroundStyles() {
    return {
      position: 'absolute',
      transform: `translate(
              ${position.x}px,
              ${position.y}px
            )`,
      width: 250,
      height: 250,
      backgroundColor: 'rgba(200, 200, 0, 0.2)',
    };
  }
  return <div style={backgroundStyles()}></div>;
}
