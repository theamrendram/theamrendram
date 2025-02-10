import React from 'react'

const Resume = () => {
  return (
    <section className="flex flex-col justify-center items-center mx-auto py-8 bg-gray-50 text-gray-800">
      <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        {/* Introduction Section */}
        <div className="intro text-center border-b pb-6">
          <h1 className="text-3xl font-bold text-gray-900">Kumar Amrendram</h1>
          <p className="text-lg text-gray-600">Fullstack Web Developer</p>
          <a
            href="mailto:amrendramkumar@gmail.com"
            className="text-blue-500 hover:underline"
          >
            amrendramkumar@gmail.com
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-6">
          {/* Left Section */}
          <div className="flex-1">
            {/* Professional Experience */}
            <div className="section mb-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
                Professional Experience
              </h2>
              <div className="sub_section mb-4">
                <p className="font-medium text-gray-900">
                  Full-Stack Developer | SyncSales (Self-Initiated Project)
                </p>
                <p className="text-sm text-gray-600">📍 Remote | 2024 - Present</p>
                <ul className="list-disc ml-6 text-gray-700 mt-2">
                  <li>
                    Designed and implemented a SaaS platform to streamline sales
                    data synchronization.
                  </li>
                  <li>
                    Leveraged React.js, Node.js, and PostgreSQL for a seamless user
                    experience and efficient backend operations.
                  </li>
                  <li>
                    Integrated Clerk authentication and customized onboarding
                    workflows to gather user information post-signup.
                  </li>
                  <li>
                    Engineered webhook-based APIs to forward leads and automate
                    business processes.
                  </li>
                </ul>
              </div>
            </div>

            {/* Projects */}
            <div className="section mb-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
                Projects
              </h2>
              <div className="sub_section mb-4">
                <p className="font-medium text-gray-900">
                  Full-Stack Developer | SyncSales (Self-Initiated Project)
                </p>
                <p className="text-sm text-gray-600">📍 Remote | 2024 - Present</p>
                <ul className="list-disc ml-6 text-gray-700 mt-2">
                  <li>
                    Designed and implemented a SaaS platform to streamline sales
                    data synchronization.
                  </li>
                  <li>
                    Leveraged React.js, Node.js, and PostgreSQL for a seamless user
                    experience and efficient backend operations.
                  </li>
                  <li>
                    Integrated Clerk authentication and customized onboarding
                    workflows to gather user information post-signup.
                  </li>
                  <li>
                    Engineered webhook-based APIs to forward leads and automate
                    business processes.
                  </li>
                </ul>
              </div>
            </div>

            {/* Education */}
            <div className="section mb-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
                Education
              </h2>
              <div className="sub_section mb-4">
                <p className="font-medium text-gray-900">
                  Master of Computer Applications
                </p>
                <p className="text-sm text-gray-600">BVICAM, Delhi | 2024 - Present</p>
                <ul className="list-disc ml-6 text-gray-700 mt-2">
                  <li>CGPA: 8.0</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1">
            {/* Technical Skills */}
            <div className="section mb-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
                Technical Skills
              </h2>
              <ul className="list-disc ml-6 text-gray-700">
                <li>
                  <b>Frontend:</b> React.js, Next.js, Tailwind CSS
                </li>
                <li>
                  <b>Backend:</b> Node.js, Express.js
                </li>
                <li>
                  <b>Database:</b> PostgreSQL, Prisma ORM
                </li>
                <li>
                  <b>Tools:</b> Clerk Authentication, ShadCN Components, Postman
                </li>
                <li>
                  <b>Other:</b> Git, Java (beginner), REST API development
                </li>
              </ul>
            </div>

            {/* Key Achievements */}
            <div className="section mb-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
                Key Achievements
              </h2>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Coming soon...</li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="section">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-4">
                Certifications
              </h2>
              <ul className="list-disc ml-6 text-gray-700">
                <li>Coming soon...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
