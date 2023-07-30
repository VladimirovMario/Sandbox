import { useEffect } from 'react';
import { useRef } from 'react';
import { MapWidget } from './map-widget';

export default function Map({ zoomLevel }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current === null) {
      mapRef.current = new MapWidget(containerRef.current);
    }

    const map = mapRef.current;
    map.setZoom(zoomLevel);

    return () => {};
  }, [zoomLevel]);

  return (
    <div ref={containerRef} style={{ width: '200px', height: '200px' }}></div>
  );
}
