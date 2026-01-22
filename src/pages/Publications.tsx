import { useEffect } from 'react';
import '../styles/publications.css';
import erycar4 from '../assets/photos/Herbarium/erycar_4.png';
import esccal7 from '../assets/photos/Herbarium/esccal_7.png';

export default function Publications() {
  useEffect(() => {
    // Load the publication widget script
    const script = document.createElement('script');
    script.src = 'https://pubsync.christopher-a-talbot.workers.dev/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="https://pubsync.christopher-a-talbot.workers.dev/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="publications-page">
      {/* Left vertical flower decoration */}
      <div className="publications-flower-left">
        <img
          src={erycar4}
          alt="Decorative flower specimen"
          className="vertical-flower"
        />
      </div>

      {/* Right vertical flower decoration */}
      <div className="publications-flower-right">
        <img
          src={esccal7}
          alt="Decorative flower specimen"
          className="vertical-flower"
        />
      </div>

      <div
        data-lab-id="cmjrx405l00025j35c0ge1824"
        data-api-url="https://pubsyncio-production.up.railway.app"
        data-theme="auto"
        data-widget-type="full"
        data-max-items="250"
        data-group-by="none"
        data-show-citations="true"
        data-show-abstracts="false"
        data-max-abstract-length="150"
        data-separate-highlighted-section="false"
        data-highlighted-section-title="Featured Publications"
        data-author-highlighting-enabled="true"
        data-max-authors-displayed="6"
        data-show-author-legend="bottom"
        data-google-scholar-url="https://scholar.google.com/citations?user=9vyKmwIAAAAJ&hl=en&oi=ao"
      ></div>
    </div>
  );
}

