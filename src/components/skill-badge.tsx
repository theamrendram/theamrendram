import { StaticImageData } from "next/image";
import Image from "next/image";
import React from "react";

interface SkillBadgeProps {
    name: string;
    icon: StaticImageData;
    color?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, icon, color }) => {
    const backgroundStyle = color
        ? { backgroundColor: color }
        : { backgroundImage: "linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)" };

    return (
        <div
            style={backgroundStyle}
            className="inline-flex h-10 animate-shimmer items-center justify-center gap-2 rounded-md border border-slate-800 bg-[length:200%_100%] px-6 font-semibold text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
            <Image src={icon} alt={name} width={20} height={20} />
            {name}
        </div>
    );
};

export default SkillBadge;