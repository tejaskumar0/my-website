import React, { useEffect, useRef } from 'react';

const VantaWaves = () => {
  const vantaRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    const loadScripts = async () => {
      // Load Three.js
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      threeScript.async = true;
      document.body.appendChild(threeScript);

      // Load Vanta Waves
      const vantaScript = document.createElement('script');
      vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.waves.min.js';
      vantaScript.async = true;
      document.body.appendChild(vantaScript);

      threeScript.onload = () => {
        vantaScript.onload = () => {
          if (window.VANTA && window.VANTA.WAVES) {
            effectRef.current = window.VANTA.WAVES({
              el: vantaRef.current,
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.0,
              minWidth: 200.0,
              scale: 1.0,
              scaleMobile: 1.0,
              color: 0x5c7c91,
              shininess: 30,
              waveHeight: 15,
              waveSpeed: 1,
              zoom: 1,
            });
          }
        };
      };
    };

    loadScripts();

    return () => {
      if (effectRef.current) effectRef.current.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0
  }} />;
};

export default VantaWaves;