import React, { useEffect } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function Review() {
    useEffect(() => {
        gsap.from(".card", {
            x: -600,
            opacity: 0,
            duration: 2,
            scrollTrigger: {
                trigger: ".card",

                start: "top 70%",
                end: "top 30%",

            }
        })
    }, [])
    return (
        <div>
            <div className="flex flex-wrap gap-4 justify-center">
                <div className="card max-w-sm border-[1px] border-zinc-400 text-white rounded-lg shadow-md p-4 bg-zinc-900">
                    <div className="flex items-center mb-4">
                        <img className="w-12 h-12 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFuaQWiuGJEie7ZxemO4bjBvNAnNzKd3R5A&s" alt="John Doe" />
                        <div className="text-left">
                            <h2 className="text-lg font-semibold text-white">John Doe</h2>
                        </div>
                    </div>
                    <p className="text-zinc-400">
                        Supabase has transformed the way we build our applications. It's fast, reliable, and the community is amazing.
                    </p>
                </div>

                <div className="card max-w-sm bg-zinc-900 border-[1px] border-zinc-400 rounded-lg shadow-md p-4">
                    <div className="flex items-center mb-4">
                        <img className="w-12 h-12 rounded-full mr-4" src="https://via.placeholder.com/150" alt="Jane Smith" />
                        <div className="text-left">
                            <h2 className="text-lg font-semibold ">Jane Smith</h2>
                        </div>
                    </div>
                    <p className="text-zinc-400">
                        I love how easy it is to integrate Supabase with our existing tech stack. The support team is also incredibly helpful.
                    </p>
                </div>

                <div className="card max-w-sm bg-zinc-900 border-[1px] border-zinc-400 rounded-lg shadow-md p-4">
                    <div className="flex items-center mb-4">
                        <img className="w-12 h-12 rounded-full mr-4" src="https://www.notion.so/cdn-cgi/image/format=webp,width=48,quality=100/front-static/pages/product/avatars/twitter-avatar-andre.png" alt="Alex Johnson" />
                        <div className="text-left">
                            <h2 className="text-lg font-semibold">Alex Johnson</h2>
                        </div>
                    </div>
                    <p className="text-zinc-400">
                        The best part about Supabase is the real-time functionality. It makes our apps feel more dynamic and responsive.
                    </p>
                </div>
                <div className="card max-w-sm bg-zinc-900 border-[1px] border-zinc-400 rounded-lg shadow-md p-4">
                    <div className="flex items-center mb-4">
                        <img className="w-12 h-12 rounded-full mr-4" src="https://www.notion.so/cdn-cgi/image/format=webp,width=48,quality=100/front-static/pages/product/avatars/twitter-avatar-oliver.png" alt="Alex Johnson" />
                        <div className="text-left">
                            <h2 className="text-lg font-semibold">Alex Johnson</h2>
                        </div>
                    </div>
                    <p className="text-zinc-400">
                        The best part about Supabase is the real-time functionality. It makes our apps feel more dynamic and responsive.
                    </p>
                </div>
                <div className="card max-w-sm bg-zinc-900 border-[1px] border-zinc-400 rounded-lg shadow-md p-4">
                    <div className="flex items-center mb-4">
                        <img className="w-12 h-12 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s" alt="Alex Johnson" />
                        <div className="text-left">
                            <h2 className="text-lg font-semibold">Johnson</h2>
                        </div>
                    </div>
                    <p className="text-zinc-400">
                        The best part about Supabase is the real-time functionality. It makes our apps feel more dynamic and responsive.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Review