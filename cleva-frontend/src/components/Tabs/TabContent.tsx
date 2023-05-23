import React from 'react';

interface TabContentProps {
  id: boolean;
  activeTab: boolean;
  children: React.ReactNode;
}

const TabContent: React.FC<TabContentProps> = ({ id, activeTab, children }) => {
  return activeTab === id ? <div className="">{children}</div> : null;
};

export default TabContent;
