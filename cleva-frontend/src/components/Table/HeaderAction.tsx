import React, { ReactNode } from 'react';

interface HeaderActionProps {
  actionMemo: ReactNode;
  columnBtn: ReactNode;
}

const HeaderAction: React.FC<HeaderActionProps> = ({ actionMemo, columnBtn }) => {
  return (
    <div className="flex">
      <div className="mr-4">{columnBtn}</div>
      <div>{actionMemo}</div>
    </div>
  );
};

export default HeaderAction;
