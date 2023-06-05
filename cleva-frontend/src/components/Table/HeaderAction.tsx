import React, { ReactNode } from 'react';

interface HeaderActionProps {
  actionMemo: ReactNode;
}

const HeaderAction: React.FC<HeaderActionProps> = ({ actionMemo }) => {
  return (
    <div className="flex">
      <div className="mr-4"></div>
      <div>{actionMemo}</div>
    </div>
  );
};

export default HeaderAction;
