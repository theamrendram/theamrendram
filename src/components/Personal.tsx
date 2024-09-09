import React from "react";
import Image from "next/image";
import profile from "../public/images/profile.jpeg";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
const Personal = () => {
  return (
    <div className="flex items-center justify-center md:justify-start flex-col p-4 lg:p-10 h-screen lg:h-auto">
      <div className="flex justify-center">
        <Image
          src={profile}
          alt="avatar"
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <p className="text-3xl font-semibold">Kumar Amrendram</p>
      <p className="text-lg py-4">
        The Tech enthusiastic guy with the CHUL to do something greater, Web
        Development is bae.
      </p>
      <div className="flex gap-4 items-center">
        <Link
          href={"mailto:amrendamkumar@gmail.com"}
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-primary font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Let&#39;s Connect
        </Link>
        <div className="flex gap-2">
          <div className="border p-2 border-zinc-400 rounded-lg">
            <Github />
          </div>
          <div className="border p-2 border-zinc-400 rounded-lg">
            <Linkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
