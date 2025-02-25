import Navbar from '@/components/Navbar'
import Link from 'next/link'
import React from 'react'

const page = () => {

    return (<>
        <section className='bg-neutral-200 min-h-screen'>
            <Navbar />
            <div className="p-10">
                <p>Every Week, I write blogs on some of the topics that interest me.</p>

                <div className="">
                    <ul>
                        <li className='flex gap-4'>
                            <p className='text-blue-500'>25/02/2025</p>
                            <Link href="/blog/a-guide-to-state-management-in-react" className='text-blue-900'>A Guide to State Management in React
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    </>

    )
}

export default page