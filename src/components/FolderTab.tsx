import { NavLink } from 'react-router-dom';
import Tab1 from '../assets/tabs/tab1.svg?react';
import Tab2 from '../assets/tabs/tab2.svg?react';
import Tab3 from '../assets/tabs/tab3.svg?react';
import Tab4 from '../assets/tabs/tab4.svg?react';
import Tab5 from '../assets/tabs/tab5.svg?react';

interface FolderTabProps {
  to: string;
  label: string;
  tabIndex?: 1 | 2 | 3 | 4 | 5;
  end?: boolean;
}

const FolderTab = ({ to, label, tabIndex = 1, end = false }: FolderTabProps) => {
  // Logic to cycle through the 5 distinct shapes
  const renderTabIcon = () => {
    switch (tabIndex) {
      case 2: 
        return <Tab2 className="tab-svg" />;
      case 3: 
        return <Tab3 className="tab-svg" />;
      case 4: 
        return <Tab4 className="tab-svg" />;
      case 5: 
        return <Tab5 className="tab-svg" />;
      default: 
        return <Tab1 className="tab-svg" />;
    }
  };

  return (
    <NavLink 
      to={to} 
      end={end}
      className={({ isActive }) => isActive ? 'folder-tab active' : 'folder-tab'}
    >
      {/* The Background SVG */}
      <div className="tab-graphic">
        {renderTabIcon()}
      </div>
      
      {/* The Text Label */}
      <span className="tab-label">{label}</span>
    </NavLink>
  );
};

export default FolderTab;
