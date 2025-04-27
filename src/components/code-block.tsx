"use client";
import { useState, useEffect } from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript.min.js";
const CodeBlock = ({
  code,
  language = "javascript",
}: {
  code: string;
  language?: string;
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  const handleCopy = () => {
    console.log(code);
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied!");
    setTimeout(() => setCopied(false), 2000);
  };


  if (!code) {
    return null;    
  }

  return (
    <div className="relative bg-gray-900 rounded-lg overflow-x-auto">
      <div className="flex justify-between items-center gap-4 bg-zinc-700 rounded-lg px-2 text-white">
        <p className="text-sm">{language}</p>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg hover:bg-gray-500 hover:text-gray-800 transition-colors focus:outline-none">
          <Copy size={18} />
        </button>
      </div>
      <pre className="whitespace-pre-wrap">
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
