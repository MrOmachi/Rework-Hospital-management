import React from 'react';

interface TimelineStepProps {
  time: string;
  label: string;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ time, label }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
      <div className="ml-4 text-sm">
        <div className="font-semibold">{time}</div>
        <div>{label}</div>
      </div>
    </div>
  );
};

export default TimelineStep;
