import React from 'react';

interface HeaderTitleProps {
  title: string;
  // userCount: number;
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({ title }) => {
  return (
    <div className=" px-0">
      <p className='text-[1rem] font-bold'>{title}</p>
{/* 
      {userCount > 0 && (
        <div className="ml-2 text-xs font-medium rounded-[50px] bg-primary50 text-primary700 py-0.5 px-2">
          {userCount > 1 ? (
            <span>
              {userCount} <span className="ml-0.5"></span>
            </span>
          ) : (
            <span>
              {userCount} <span className="ml-0.5"></span>
            </span>
          )}
        </div>
      )} */}
    </div>
  );
};

export default HeaderTitle;
