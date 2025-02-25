import { useState } from "react";
import { Copy } from "lucide-react";
import { toast } from "sonner"

const CodeBlock = ({ code, language = "javascript" } : { code: string, language?: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        toast.success("Code copied!");
        setTimeout(() => setCopied(false), 2000);
    };

    
    return (
        <div className="relative bg-gray-800 text-white p-4 rounded-lg overflow-x-auto">
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-gray-800 p-2 rounded-lg hover:bg-gray-500 hover:text-gray-800 transition-colors focus:outline-none"
            >
                <Copy size={18} />
            </button>
            <pre className="whitespace-pre-wrap">
                <code className={`language-${language}`}>{code}</code>
            </pre>
        </div>
    );
};

export default CodeBlock;
