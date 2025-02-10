import React from 'react'
import SkillBadge from './skill-badge'
import react from "@/public/images/react-logo.png"
import nodejs from "@/public/images/nodejs-logo.png"
import nextjs from "@/public/images/nextjs-logo.svg"
import postgresql from "@/public/images/postgresql-logo.png"
import mongodb from "@/public/images/mongodb-logo.svg"
import github from "@/public/images/github-logo.png"
import aws from "@/public/images/aws-logo.png"
import postman from "@/public/images/postman-logo.webp"
import typescript from "@/public/images/typescript-logo.png"
import javascript from "@/public/images/javascript-logo.svg"
import tailwindcss from "@/public/images/tailwindcss-logo.png"
import shadcn from "@/public/images/shadcn-logo.png"
const Skills = () => {
  return (
    <div className='p-4 bg-gray-950 min-h-screen'>
      <p className='text-4xl md:text-2xl font-bold flex-shrink-0 uppercase'>Skills</p>
      <div className="">
        <div className="py-2">
          <p className='text-lg font-semibold'>Frontend</p>
          <div className="space-x-2 flex items-center">
            <SkillBadge name="Javascript" icon={javascript} />
            <SkillBadge name="React" icon={react} />
            <SkillBadge name="Nextjs" icon={nextjs} />
          </div>
        </div>
        <div className="py-2">
          <p className='text-lg font-semibold'>Backend</p>
          <SkillBadge name="Nodejs" icon={nodejs} />
        </div>
        <div className="py-2">
          <p className='text-lg font-semibold'>Database</p>
          <div className="space-x-2 flex items-center">
            <SkillBadge name="PostgreSQL" icon={postgresql} />
            <SkillBadge name="Mongo DB" icon={mongodb} />
          </div>
        </div>
        <div className="py-2">
          <p className='text-lg font-semibold'>Frameworks / Libraries</p>
          <div className="gap-1 flex items-center flex-wrap">
            <SkillBadge name="Typescript" icon={typescript} />
            <SkillBadge name="Shadcn" icon={shadcn} />
            <SkillBadge name="Tailwind CSS" icon={tailwindcss} />
          </div>
        </div>
        <div className="py-2">
          <p className='text-lg font-semibold'>Tools</p>
          <div className="space-x-2 flex items-center">
            <SkillBadge name="Postman" icon={postman} />
            <SkillBadge name="AWS" icon={aws} />
          </div>
        </div>
        <div className="py-2">
          <p className='text-lg font-semibold'>Version Control Tool</p>
          <div className="space-x-2 flex items-center">
            <SkillBadge name="Github" icon={github} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills