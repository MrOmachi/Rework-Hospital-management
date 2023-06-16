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

const TabButtons: React.FC<TabButtonProps> = ({ id, name, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <>
      <div className="">
        <nav className="flex -mb-px space-x-8" aria-label="Tabs">
          <button
            key={id}
            onClick={handleClick}
            className={classNames(
              activeTab === id
                ? 'rounded-lg bg-black  text-white'
                : 'tab-child border-transparent text-gray500 hover:text-gray-700 hover:border-gray-300 ',
              'whitespace-nowrap py-2  w-full font-bold text-sm bg-[##EBF0F0]'
            )}
          >
            {name}
          </button>
        </nav>
      </div>
    </>
  );
};

export default TabButtons;
