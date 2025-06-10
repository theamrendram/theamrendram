import React from "react";
import { BookOpenIcon } from "lucide-react";
import { StaticImageData } from "next/image";

interface BlogMetaProps {
  author: string;
  date: string;
  readingTime: string;
  tags: string[];
  thumbnail: StaticImageData
}

const BlogMeta: React.FC<BlogMetaProps> = ({
  author,
  date,
  readingTime,
  tags,
  thumbnail
}) => {
  return (
    <div className="flex flex-col items-center font-bold gap-4 p-4 rounded-lg">
      {/* Thumbnail */}
      <img
        src={thumbnail.src}
        alt="Blog Thumbnail"
        className="w-full rounded-lg object-cover"
      />

      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-300 text-sm font-normal">
        <p>{author}</p>
        <span className="text-gray-400 dark:text-gray-500">·</span>
        <p>{date}</p>
        <span className="text-gray-400 dark:text-gray-500">·</span>
        <div className="flex items-center gap-1">
          <BookOpenIcon
            size={16}
            className="text-gray-600 dark:text-gray-300"
          />
          <p>{readingTime}</p>
        </div>
      </div>

      {/* Tags */}
      {/* <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
            {tag}
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default BlogMeta;
