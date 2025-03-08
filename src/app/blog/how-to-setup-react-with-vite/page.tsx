"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import CodeBlock from '@/components/code-block';

const SingleBlog = () => {
    const params = useParams();
    const slug = params.slug;
    console.log(slug, params)
    return (
        <section className=''>
            <Navbar />
            <div className="p-8 md:max-w-4xl mx-auto h-screen">
                <h1 className='text-2xl text-center font-semibold'>
                    How to Set Up React with Vite
                </h1>
                <div className="">
                    <p className='py-2'>React is one of the most popular JavaScript libraries for building user interfaces, and Vite is a modern frontend build tool that provides a fast and optimized development experience. Setting up React with Vite is simple and much faster than using traditional tools like Create React App (CRA). In this guide, we&apos;ll walk through the process of setting up a React project using Vite, step by step.</p>
                </div>
                <div className="">
                    <h2 className='text-lg font-semibold pt-4'>Why Use Vite Instead of Create React App?</h2>
                    <ul className='list-disc pl-5'>
                        <li>Faster Development – Vite uses an on-demand compilation strategy, making the dev server start almost instantly.</li>
                        <li>Smaller Build Sizes – Optimized for better performance.</li>
                        <li>Hot Module Replacement (HMR) – Allows real-time updates in development without refreshing the whole page.</li>
                        <li>Better Support for Modern JavaScript – Supports ES modules and modern JS features out of the box.</li>
                    </ul>
                </div>
                <div className="">
                    <h2 className='text-lg font-semibold pt-4'>Step 1: Install Node.js</h2>
                    <p>Before setting up Vite, you need to have Node.js installed on your system. You can check if Node.js is installed by running:</p>
                    <CodeBlock code='node -v' />
                    <p>If Node.js is not installed, download and install it from the <a href="https://nodejs.org/" className='text-blue-500 underline'>official Node.js website</a>.</p>
                </div>
                <div className="">
                    <h2 className='text-lg font-semibold pt-4'>Step 2: Create a React Project with Vite</h2>
                    <p>Run the following command to create a new React project using Vite:</p>
                    <CodeBlock code='npm create vite@latest my-react-app' />
                    <p>Follow the prompts to select React as your framework and JavaScript as your variant.</p>
                </div>
                <div className="">
                    <h2 className='text-lg font-semibold pt-4'>Step 3: Install Dependencies</h2>
                    <p>Navigate into your project and install dependencies:</p>
                    <CodeBlock code='cd my-react-app && npm install' />
                </div>
                <div className="">
                    <h2 className='text-lg font-semibold pt-4'>Step 4: Run the Development Server</h2>
                    <p>Start your development server with:</p>
                    <CodeBlock code='npm run dev' />
                    <p>Open <strong>http://localhost:5173/</strong> in your browser to see your React app running.</p>
                </div>
                <div className="">
                    <h2 className='text-lg font-semibold pt-4'>Step 5: Understanding the Project Structure</h2>
                    <p>Your project will have the following structure:</p>
                    <CodeBlock code={`my-react-app
│── node_modules/
│── public/
│── src/
│   ├── App.jsx
│   ├── main.jsx
│── index.html
│── package.json
│── vite.config.js`} />
                </div>
                <div className="">
                    <h2 className='text-lg font-semibold pt-4'>Step 6: Adding CSS and Assets</h2>
                    <p>You can add styles by modifying the <code>App.css</code> file:</p>
                    <CodeBlock code={`.container {
  text-align: center;
  margin-top: 50px;
}`} />
                </div>
                <div className="">
                    <h2 className='text-lg font-semibold pt-4'>Step 7: Building for Production</h2>
                    <p>Generate an optimized build using:</p>
                    <CodeBlock code='npm run build' />
                    <p>This will create a <code>dist/</code> folder with your production-ready app.</p>
                </div>
                <div className="">
                    <h2 className='text-lg font-semibold pt-4'>Step 8: Deploying Your Vite React App</h2>
                    <p>To deploy on Vercel, run:</p>
                    <CodeBlock code='npm install -g vercel && vercel' />
                    <p>Follow the prompts to complete the deployment.</p>
                </div>
                <div className="">
                    <h2 className='text-lg font-semibold pt-4'>Conclusion</h2>
                    <p>Vite makes setting up a React project quick and efficient. Now you’re ready to build amazing React apps with Vite! 🚀</p>
                </div>
            </div>
        </section>
    )
}

const page = () => {
    return <SingleBlog />
}

export default page;
