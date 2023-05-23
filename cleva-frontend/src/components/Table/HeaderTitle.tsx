import React from 'react';

interface HeaderTitleProps {
  title: string;
  userCount: number;
  countTitle: string;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title, userCount, countTitle }) => {
  return (
    <div className="flex items-center">
      <div>{title}</div>

      {userCount > 0 && (
        <div className="ml-2 text-xs font-medium rounded-[50px] bg-primary50 text-primary700 py-0.5 px-2">
          {userCount > 1 ? (
            <span>
              {userCount} <span className="ml-0.5">{countTitle}</span>
            </span>
          ) : (
            <span>
              {userCount} <span className="ml-0.5">{countTitle}</span>
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderTitle;
