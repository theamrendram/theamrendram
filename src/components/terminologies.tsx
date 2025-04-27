"use client";

import React from "react";

interface TerminologyProps {
  title: string;
  description?: React.ReactNode;
  list?: string[];
}

const Terminology: React.FC<TerminologyProps> = ({
  title,
  description,
  list,
}) => {
  return (
    <div className="my-4 bg-gray-100 dark:bg-gray-800 border-l-4 border-blue-500 p-4 rounded">
      <p className="font-bold text-gray-800 dark:text-gray-100 mb-2">{title}</p>
      {description && (
        <div className="text-gray-700 dark:text-gray-300 mb-2">
          {description}
        </div>
      )}
      {list && list.length > 0 && (
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Terminology;
