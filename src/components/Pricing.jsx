import React, { useEffect } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Cards from './Cards';
import Tables from './Tables';
import Qa from './Qa';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function Pricing() {
    useEffect(() => {
        gsap.to('.mover', {
            xPercent: -95,
            duration: 10,
            repeat: -1,
            ease: "linear",
            yoyo: true
        });
    }, [])
    return (
        <div className="bg-zinc-900 py-12 min-h-screen text-white">
            <Navbar />
            <div className="mt-8 mx-auto px-4 overflow-hidden sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-4xl text-white font-semibold">
                        One platform for all your data needs.
                    </h2>
                    <h2 className="text-4xl font-semibold text-white ">
                        Free for teams to get started.
                    </h2>
                    <div className='mover  flex justify-around p-4 mt-20 gap-40 '>
                        <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fmozilla.svg&w=32&q=75" alt="" />
                        <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2F1password.svg&w=32&q=75" alt="" />
                        <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fpwc.svg&w=32&q=75" alt="" />
                        <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fpika.svg&w=32&q=75" alt="" />
                        <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fhumata.svg&w=32&q=75" alt="" />
                        <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fkrea.svg&w=32&q=75" alt="" />
                        <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fudio.svg&w=32&q=75" alt="" />
                        <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fmozilla.svg&w=32&q=75" alt="" />
                        <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2F1password.svg&w=32&q=75" alt="" />
                        <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fpwc.svg&w=32&q=75" alt="" />
                        <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fpika.svg&w=32&q=75" alt="" />
                        <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fhumata.svg&w=32&q=75" alt="" />
                        <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fkrea.svg&w=32&q=75" alt="" />
                        <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fudio.svg&w=32&q=75" alt="" />
                    </div>

                    <button className='text-white flex bg-zinc-800 m-auto gap-4 px-4 rounded-full h-8 items-center mt-8'>
                        <p className='flex text-gray-300'>Pay monthly</p>
                        <div className='bg-zinc-600 rounded-xl px-2  left-2'>
                            <p className='text-white'>Pay yearly <span className='text-green-200'>save 20%</span></p>
                        </div>
                    </button>
                </div>

                <Cards />
            </div>

            <Tables />

            <Qa />
            <div className='flex flex-col items-center mt-2'>
                <h1 className='text-xl  text-zinc-400'>Still have more questions?</h1>
                <h1 className='text-xl  text-zinc-400'>Learn more in our <span className='underline hover:cursor-pointer hover:text-white'>help center.</span></h1>
            </div>
            <div className='flex justify-center flex-col items-center mt-24'>
                <img
                    className="h-10"
                    src="https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ebb5f.png&w=256&q=75"
                    alt="Supabase Logo"
                />
                <div className='text-center flex flex-col gap-4'>
                    <h1 className='text-5xl font-semibold mt-4'>Try Supabase today</h1>
                    <h1 className='text-xl p-2 text-zinc-400'>Get started for free.</h1>
                    <h1 className='text-xl p-2 text-zinc-400'>Scale with your team as your needs grow.</h1>
                    <button className=' rounded-lg mx-auto bg-green-800 text-zinc-200  text-sm px-4  border-green-400 border-[1px] transition-all duration-300 hover:bg-green-600 hover:text-white p-2'>Try Supabase free</button>
                    <h1 className='text-xl p-2 text-zinc-400'>On a big team? <span className='underline hover:cursor-pointer hover:text-white'>Request a demo</span></h1>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Pricing;
