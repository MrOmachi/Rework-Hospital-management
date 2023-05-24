import React from 'react';
import DownloadIcon from '../../images/export.svg';

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
      className="flex items-center py-1.5 rounded-lg bg-cleva-gold px-8 mb-3 text-sm"
      onClick={handleClick}
    >
      <img src={DownloadIcon} className="mr-2 text-primary700" alt="export" />
      Export
    </button>
  );
};

export default ExportButton;
