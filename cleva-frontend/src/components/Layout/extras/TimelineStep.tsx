import React from "react";

interface TimelineStepProps {
  date: string;
  description: string;
  isActive?: boolean;
}

const TimelineStep: React.FC<TimelineStepProps> = ({ date, description, isActive }) => {
  const dotClasses = isActive ? "bg-blue-500" : "bg-gray-300";

  return (
    <div className="flex items-center mb-8">
      <div className={`w-8 h-8 rounded-full ${dotClasses}`} />
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-600">{date}</p>
        <p className="text-sm text-gray-900">{description}</p>
      </div>
    </div>
  );
};

export default TimelineStep;
