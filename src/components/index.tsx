import React from "react";

interface TOCItem {
  id: string;
  text: string;
  level?: number; // Optional: defaults to 2
}

interface TOCProps {
  contents: TOCItem[];
}

const Index = ({ contents }: TOCProps) => {
  return (
    <aside className="sticky top-20 max-h-[80vh] overflow-y-auto px-4 py-6 text-sm hidden lg:block">
      <h2 className="font-semibold mb-4 text-gray-800 dark:text-gray-50">Table of Contents</h2>
      <ul className="space-y-2">
        {contents.map((item) => (
          <li
            key={item.id}
            className={`ml-${
              item.level && item.level > 2 ? (item.level - 2) * 4 : 0
            } text-gray-600 dark:text-gray-100 hover:text-black transition`}>
            <a href={`#${item.id}`} className="block">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export { Index };
