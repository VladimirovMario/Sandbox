import { useRef } from 'react';
import { useState } from 'react';
import Tooltip from './Tooltip';

export default function ButtonWithTooltip({ tooltipContent, children }) {
  const [targetRect, setTargetRect] = useState(null);
  const buttonRef = useRef(null);

  function handlePointerEnter() {
    const rect = buttonRef.current.getBoundingClientRect();
    setTargetRect({
      left: rect.left,
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
    });
  }

  function handlePointerLeave() {
    setTargetRect(null);
  }

  return (
    <>
      <button
        ref={buttonRef}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        {children}
      </button>
      {targetRect !== null && (
        <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>
      )}
    </>
  );
}
