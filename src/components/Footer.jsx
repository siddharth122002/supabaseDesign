import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
function Footer() {
    return (
        <footer className="bg-zinc-900 text-white py-8 mt-8 border-t-[1px] border-gray-600 font-semibold">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                    <div className="mb-8 md:mb-0">
                        <img
                            className="h-8 mb-4"
                            src="https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ebb5f.png&w=256&q=75"
                            alt="Supabase Logo"
                        />
                        <p className="text-gray-400">© 2024 Supabase Inc.</p>
                        <div className='flex justify-center items-center gap-4 text-xl text-zinc-400 m-2 hover:cursor-pointer'>
                            <FaXTwitter className='hover:text-white' />
                            <FaGithub className='hover:text-white' />
                            <FaYoutube className='hover:text-white' />
                            <FaDiscord className='hover:text-white' />
                        </div>
                    </div>
                    <div className="flex md:gap-0 gap-8 w-2/3 justify-around">
                        <div className="mb-8 md:mb-0">
                            <h5 className="text-lg font-semibold mb-4">Docs</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white text-md">Overview</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white ">Guides</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">API Reference</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Tutorials</a></li>
                            </ul>
                        </div>
                        <div className="mb-8 md:mb-0">
                            <h5 className="text-lg font-semibold mb-4">Company</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div className="mb-8 md:mb-0">
                            <h5 className="text-lg font-semibold mb-4">Community</h5>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Forums</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Slack</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer