import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import erycar1 from '../assets/flowers/erycar_1.png';
import dalpur1 from '../assets/flowers/dalpur_1.png';
import chafas1 from '../assets/flowers/chafas_1.png';
import rubhir1 from '../assets/flowers/rubhir_1.png';

// Define flower positions for different visual variety
const flowers = [
  {
    src: erycar1,
    alt: "Erythranthe cardinalis",
    style: {
      position: 'fixed',
      bottom: '-50px',
      left: '-30px',
      width: '200px',
      height: 'auto',
      zIndex: 0,
      opacity: 0.8,
      transform: 'rotate(15deg)',
      pointerEvents: 'none',
      filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))'
    }
  },
  {
    src: dalpur1,
    alt: "Dalbergia",
    style: {
      position: 'fixed',
      top: '100px',
      right: '-40px',
      width: '180px',
      height: 'auto',
      zIndex: 0,
      opacity: 0.7,
      transform: 'rotate(-15deg)',
      pointerEvents: 'none',
      filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))'
    }
  },
  {
    src: chafas1,
    alt: "Chamaecrista fasciculata",
    style: {
      position: 'fixed',
      bottom: '20%',
      right: '-60px',
      width: '220px',
      height: 'auto',
      zIndex: 0,
      opacity: 0.6,
      transform: 'rotate(-45deg)',
      pointerEvents: 'none',
      filter: 'sepia(0.2) drop-shadow(2px 4px 6px rgba(0,0,0,0.1))'
    }
  },
  {
    src: rubhir1,
    alt: "Rudbeckia hirta",
    style: {
      position: 'fixed',
      top: '-40px',
      left: '5%',
      width: '150px',
      height: 'auto',
      zIndex: 0,
      opacity: 0.7,
      transform: 'rotate(180deg)',
      pointerEvents: 'none',
      filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.1))'
    }
  }
];

export default function FlowerBorder() {
  const location = useLocation();
  // const [visibleFlowers, setVisibleFlowers] = useState(flowers); // Unused for now

  // Optional: Change visible flowers based on route to make pages feel distinct
  useEffect(() => {
    // Logic could go here to show different flowers on different pages
    // For now, we show them all but with a fade-in effect
  }, [location]);

  return (
    <>
      {flowers.map((flower, index) => (
        <img
          key={index}
          src={flower.src}
          alt={flower.alt}
          style={flower.style as React.CSSProperties}
          className="decorative-flower"
        />
      ))}
    </>
  );
}

