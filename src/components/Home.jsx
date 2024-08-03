import React, { useEffect } from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import Options from './Options';
import Footer from './Footer';
import Navbar from './Navbar';
import Features from './Features';
import Carousels from './Carousels';
import Review from './Review';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function Home() {
    useEffect(() => {
        gsap.from('.main-text span', {

            color: "#4ade80",
            duration: 1,
            stagger: 0.1,
            repeat: -1,
            ease: "bounce.out",
            yoyo: true,
            delay: 0.5
        });
        gsap.from('.increase', {
            y: 40,
            duration: 1,
            opacity: 0,
            stagger: 0.4,
        });
        gsap.to('.mover', {
            xPercent: -95,
            duration: 10,
            repeat: -1,
            ease: "linear",
            yoyo: true
        });
        gsap.from('.scale', {
            scale: 0,
            duration: 1.3,
            scrollTrigger: {
                trigger: ".scale",

                start: "top 70%",
                end: "top 30%",
                scrub: 0.5,
            }
        });
        gsap.from('.scale2', {
            scale: 0,
            duration: 1.3,
            scrollTrigger: {
                trigger: ".scale2",

                start: "top 70%",
                end: "top 30%",
                scrub: 1,
            }
        });
        gsap.from('.scale3', {
            scale: 0,
            duration: 1.3,
            scrollTrigger: {
                trigger: ".scale3",

                start: "top 70%",
                end: "top 30%",
                scrub: 1,
            }
        });

    }, [])
    return (
        <div className="main">
            <div className='bg-zinc-900 py-12 min-h-screen text-white'>
                <Navbar />
                <div className="page1 text-white mt-28 ">
                    <div className='text flex flex-col justify-center  items-center'>
                        <h1 className='main-text md:text-6xl text-2xl font-bold bg-white bg-clip-text text-transparent md:h-24'>
                            <span>C</span><span>r</span><span>e</span><span>a</span><span>t</span><span>e</span><span>,</span>
                            <span>m</span><span>a</span><span>n</span><span>a</span><span>g</span><span>e</span><span>,</span>
                            <span>s</span><span>i</span><span>m</span><span>p</span><span>l</span><span>i</span><span>f</span><span>y</span><span>,</span>
                            <span>g</span><span>r</span><span>o</span><span>w</span>


                        </h1>
                        <p className='increase md:text-2xl mt-8'>Transform your projects with </p>
                        <p className='increase md:text-2xl'> Supabase’s powerful backend services.</p>
                        <div className='mt-10 flex'>
                            <button className='increase bg-green-700 px-4 md:py-1 rounded-md hover:bg-green-800 border-[1px] border-green-500'>Get started</button>

                            <button className='increase px-4 py-1 rounded-md flex justify-center items-center text-green-700 hover:text-green-600 '>Documentation
                                <IoIosArrowRoundForward
                                    className=' text-2xl ml-1 '
                                />
                            </button>
                        </div>

                        <div>
                            <Features />
                        </div>


                        <div className=" mt-28">
                            <div className="text flex flex-col items-center justify-center gap-3">
                                <h1 className='scale text-xl md:text-4xl font-serif'>"Your Ultimate Backend Solution."</h1>
                                <svg
                                    className='scale h-8'
                                    viewBox="0 0 200 54">
                                    <path fill='white' d="M113.3 18.2c0-5.8.1-11.2.4-16.2L98.4 4.9v1.4l1.5.2c1.1.1 1.8.5 2.2 1.1.4.7.7 1.7.9 3.2.2 2.9.4 9.5.3 19.9 0 10.3-.1 16.8-.3 19.3 5.5 1.2 9.8 1.7 13 1.7 6 0 10.7-1.7 14.1-5.2 3.4-3.4 5.2-8.2 5.2-14.1 0-4.7-1.3-8.6-3.9-11.7-2.6-3.1-5.9-4.6-9.8-4.6-2.6 0-5.3.7-8.3 2.1zm.3 30.8c-.2-3.2-.4-12.8-.4-28.5.9-.3 2.1-.5 3.6-.5 2.4 0 4.3 1.2 5.7 3.7 1.4 2.5 2.1 5.5 2.1 9.3 0 4.7-.8 8.5-2.4 11.7-1.6 3.1-3.6 4.7-6.1 4.7-.8-.2-1.6-.3-2.5-.4zM41 3H1v2l2.1.2c1.6.3 2.7.9 3.4 1.8.7 1 1.1 2.6 1.2 4.8.8 10.8.8 20.9 0 30.2-.2 2.2-.6 3.8-1.2 4.8-.7 1-1.8 1.6-3.4 1.8l-2.1.3v2h25.8v-2l-2.7-.2c-1.6-.2-2.7-.9-3.4-1.8-.7-1-1.1-2.6-1.2-4.8-.3-4-.5-8.6-.5-13.7l5.4.1c2.9.1 4.9 2.3 5.9 6.7h2V18.9h-2c-1 4.3-2.9 6.5-5.9 6.6l-5.4.1c0-9 .2-15.4.5-19.3h7.9c5.6 0 9.4 3.6 11.6 10.8l2.4-.7L41 3zm-4.7 30.8c0 5.2 1.5 9.5 4.4 12.9 2.9 3.4 7.2 5 12.6 5s9.8-1.7 13-5.2c3.2-3.4 4.7-7.7 4.7-12.9s-1.5-9.5-4.4-12.9c-2.9-3.4-7.2-5-12.6-5s-9.8 1.7-13 5.2c-3.2 3.4-4.7 7.7-4.7 12.9zm22.3-11.4c1.2 2.9 1.7 6.7 1.7 11.3 0 10.6-2.2 15.8-6.5 15.8-2.2 0-3.9-1.5-5.1-4.5-1.2-3-1.7-6.8-1.7-11.3C47 23.2 49.2 18 53.5 18c2.2-.1 3.9 1.4 5.1 4.4zm84.5 24.3c3.3 3.3 7.5 5 12.5 5 3.1 0 5.8-.6 8.2-1.9 2.4-1.2 4.3-2.7 5.6-4.5l-1-1.2c-2.2 1.7-4.7 2.5-7.6 2.5-4 0-7.1-1.3-9.2-4-2.2-2.7-3.2-6.1-3-10.5H170c0-4.8-1.2-8.7-3.7-11.8-2.5-3-6-4.5-10.5-4.5-5.6 0-9.9 1.8-13 5.3-3.1 3.5-4.6 7.8-4.6 12.9 0 5.2 1.6 9.4 4.9 12.7zm7.4-25.1c1.1-2.4 2.5-3.6 4.4-3.6 3 0 4.5 3.8 4.5 11.5l-10.6.2c.1-3 .6-5.7 1.7-8.1zm46.4-4c-2.7-1.2-6.1-1.9-10.2-1.9-4.2 0-7.5 1.1-10 3.2s-3.8 4.7-3.8 7.8c0 2.7.8 4.8 2.3 6.3 1.5 1.5 3.9 2.8 7 3.9 2.8 1 4.8 2 5.8 2.9 1 1 1.6 2.1 1.6 3.6 0 1.4-.5 2.7-1.6 3.7-1 1.1-2.4 1.6-4.2 1.6-4.4 0-7.7-3.2-10-9.6l-1.7.5.4 10c3.6 1.4 7.6 2.1 12 2.1 4.6 0 8.1-1 10.7-3.1 2.6-2 3.9-4.9 3.9-8.5 0-2.4-.6-4.4-1.9-5.9-1.3-1.5-3.4-2.8-6.4-4-3.3-1.2-5.6-2.3-6.8-3.3-1.2-1-1.8-2.2-1.8-3.7s.4-2.7 1.3-3.7 2-1.4 3.4-1.4c4 0 6.9 2.9 8.7 8.6l1.7-.5-.4-8.6zm-96.2-.9c-1.4-.7-2.9-1-4.6-1-1.7 0-3.4.7-5.3 2.1-1.9 1.4-3.3 3.3-4.4 5.9l.1-8-15.2 3v1.4l1.5.1c1.9.2 3 1.7 3.2 4.4.6 6.2.6 12.8 0 19.8-.2 2.7-1.3 4.1-3.2 4.4l-1.5.2v1.9h21.2V49l-2.7-.2c-1.9-.2-3-1.7-3.2-4.4-.6-5.8-.7-12-.2-18.4.6-1 1.9-1.6 3.9-1.8 2-.2 4.3.4 6.7 1.8l3.7-9.3z">
                                    </path>
                                </svg>
                            </div>


                            <Options />
                        </div>
                        <Carousels />
                    </div>
                    <div className='mt-32  flex flex-col justify-center items-center'>
                        <h1 className='md:text-5xl text-xl font-semibold scale2'>Millions run on Supabase every day</h1>
                        <p className='md:text-lg p-4 scale2'>Empowering developers and teams, from innovative startups to established enterprises.</p>
                        <button className='text-green-500 hover:underline scale2'>Read customer stories →</button>

                        <div className='overflow-hidden  w-full mt-12'>
                            <div className='flex mover justify-around p-4  gap-40 '>
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
                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fmozilla.svg&w=32&q=75" alt="" />

                            </div>

                            <div className='flex justify-around p-3 gap-44 mover'>
                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Flangchain.svg&w=32&q=75" alt="" />
                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fresend.svg&w=32&q=75" alt="" />

                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fbetashares.svg&w=32&q=75" alt="" />

                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fchatbase.svg&w=32&q=75" alt="" />

                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fgopuff.svg&w=32&q=75" alt="" />
                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fmobbin.svg&w=32&q=75" alt="" />
                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Floops.svg&w=32&q=75" alt="" />
                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Flangchain.svg&w=32&q=75" alt="" />
                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fresend.svg&w=32&q=75" alt="" />

                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fbetashares.svg&w=32&q=75" alt="" />

                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fchatbase.svg&w=32&q=75" alt="" />

                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fgopuff.svg&w=32&q=75" alt="" />
                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Fmobbin.svg&w=32&q=75" alt="" />
                                <img src="https://supabase.com/_next/image?url=%2Fimages%2Flogos%2Fpublicity%2Floops.svg&w=32&q=75" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center mt-16 gap-4'>
                        <h1 className='md:text-4xl  font-semibold scale3'>Join the Supabase Community. Empower Your Projects.</h1>
                        <h1 className='md:text-xl text-zinc-400 scale3'>Our dynamic community builds innovative solutions, shares knowledge, and drives events worldwide.</h1>
                        <button className='text-green-400 hover:text-green-600 scale3'>Learn more →</button>
                        <Review />
                    </div>
                    <Footer />
                </div>
            </div>
        </div >
    );
}

export default Home;



