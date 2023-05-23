import React from 'react';
import DownloadIcon from '../../img/icons/exportBtn.svg';

interface ExportButtonProps {
  onExport: (value: string) => void;
}

const ExportButton: React.FC<ExportButtonProps> = ({ onExport }) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const value = target.value;
    onExport(value);
  };

  return (
    <button
      className="flex items-center py-2.5 mb-4 mr-2 btn-export bg-primary50 text-primary700"
      onClick={handleClick}
    >
      <img src={DownloadIcon} className="mr-2 text-primary700" alt="export" />
      Export
    </button>
  );
};

export default ExportButton;
