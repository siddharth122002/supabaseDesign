import Sidebar from './Sidebar';
import React, { useEffect } from 'react';
import { CiSearch } from "react-icons/ci";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Dashboard() {
    useEffect(() => {
        gsap.from('.up', {
            y: -50,
            opacity: 0,
            duration: 1,
        });
    }, [])
    return (
        <div className="flex h-screen bg-zinc-900 text-zinc-400  w-screen flex-row bg-dash-bg">
            <Sidebar />
            <div className="flex flex-col flex-1 ">
                <div className="flex-1 overflow-auto">
                    <div className="w-full border-b-[1px] border-zinc-700 p-4">
                        <h1 className="md:text-2xl text-xl text-white font-bold up">Welcome to your Dashboard</h1>
                    </div>
                    <div>
                        <button className='bg-green-800 text-zinc-200 m-4 text-sm px-4 rounded-md border-green-400 border-[1px] transition-all duration-300 hover:bg-green-600 hover:text-white up'>New Project</button>
                        <button className='bg-zinc-800 text-zinc-200 m-4 text-sm px-4 rounded-md border-zinc-400 border-[1px] hover:bg-zinc-600 transition-all duration-300  hover:text-white up'>New Organiztion</button>


                        <div className=' inline-block relative'>
                            <input className='bg-zinc-800 text-zinc-200 m-4 up text-sm px-4 rounded-md border-zinc-400 border-[1px] transition-all duration-300   focus:outline-none w-full'
                                placeholder='Search for a project' />
                            <CiSearch className='absolute top-[2vh] right-0 hover:cursor-pointer' />
                        </div>
                    </div>
                    <div>
                        <h1 className='text-white md:text-xl font-semibold px-8 md:py-8 '>siddharth122002's Org</h1>
                        <div className='p-2 rounded-lg h-32 mx-8  border-[1px] border-dashed flex flex-col justify-center items-center border-zinc-700'>
                            <h1 className='font-semibold text-white'>No Projects</h1>
                            <p className='hidden md:block'>Get started by creating a new project.</p>
                            <button className='bg-green-800 text-zinc-200 m-4 text-sm px-4 rounded-md border-green-400 border-[1px] transition-all duration-300 hover:bg-green-600 hover:text-white'><span className='text-green-400 hover:text-white up'>+ </span> New Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
