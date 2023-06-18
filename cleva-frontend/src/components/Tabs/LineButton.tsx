import React from 'react';

interface TabButtonProps {
  id: string;
  name: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
}

function classNames(...classes: Array<string | boolean | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

const LineButtons: React.FC<TabButtonProps> = ({ id, name, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <>
      <div className="">
        <nav className="flex" aria-label="Tabs">
          <button
            key={id}
            onClick={handleClick}
            className={classNames(
              activeTab === id
                ? 'font-semibold  text-black border-b-2 border-black'
                : 'tab-child text-[#747A80] hover:text-gray-70 ',
              'whitespace-nowrap py-2  w-full text-sm border-min' 
            )}
          >
            {name}
          </button>
        </nav>
      </div>
    </>
  );
};

export default LineButtons;
