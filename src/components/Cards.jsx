import React from 'react'
import { FaCheck } from "react-icons/fa";
function Cards() {
    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-zinc-800 shadow-lg rounded-lg p-6 flex flex-col text-zinc-400">
                <h3 className="text-2xl font-semibold text-white">Free</h3>
                <p className="mt-4 text-zinc-400">For individuals.</p>
                <div className="mt-6">
                    <span className="text-4xl font-extrabold text-white">$0</span>
                    <span className="text-base font-medium text-zinc-400">/month</span>
                </div>
                <ul className="mt-6 space-y-4 flex-grow">
                    <li className="flex items-center">
                        <span className="material-icons text-green-500 mr-2"><FaCheck /></span>
                        Unlimited pages and blocks
                    </li>
                    <li className="flex items-center">
                        <span className="material-icons text-green-500 mr-2"><FaCheck /></span>
                        Share with 5 guests
                    </li>
                    <li className="flex items-center">
                        <span className="material-icons text-green-500 mr-2"><FaCheck /></span>
                        Sync across devices
                    </li>
                </ul>
                <button className="mt-8 w-full py-2 bg-green-800 text-zinc-200  rounded-md border-green-400 border-[1px] transition-all duration-300 hover:bg-green-600 hover:text-white">
                    Choose Free
                </button>
            </div>

            {/* Personal Pro Plan */}
            <div className="bg-zinc-800 shadow-lg rounded-lg p-6 flex flex-col text-zinc-400">
                <h3 className="text-2xl font-semibold text-white">Personal Pro</h3>
                <p className="mt-4 text-zinc-400">For power users.</p>
                <div className="mt-6">
                    <span className="text-4xl font-extrabold text-white">$4</span>
                    <span className="text-base font-medium text-zinc-400">/month</span>
                </div>
                <ul className="mt-6 space-y-4 flex-grow">
                    <li className="flex items-center">
                        <span className="material-icons text-green-500 mr-2"><FaCheck /></span>
                        Unlimited pages and blocks
                    </li>
                    <li className="flex items-center">
                        <span className="material-icons text-green-500 mr-2"><FaCheck /></span>
                        Share with unlimited guests
                    </li>
                    <li className="flex items-center">
                        <span className="material-icons text-green-500 mr-2"><FaCheck /></span>
                        30-day version history
                    </li>
                </ul>
                <button className="mt-8 w-full py-2 bg-green-800 text-zinc-200  rounded-md border-green-400 border-[1px] transition-all duration-300 hover:bg-green-600 hover:text-white">
                    Choose Personal Pro
                </button>
            </div>

            {/* Team Plan */}
            <div className="bg-zinc-800 shadow-lg rounded-lg p-6 flex flex-col text-zinc-400">
                <h3 className="text-2xl font-semibold text-white">Team</h3>
                <p className="mt-4 text-zinc-400">For teams.</p>
                <div className="mt-6">
                    <span className="text-4xl font-extrabold text-white">$8</span>
                    <span className="text-base font-medium text-zinc-400">/user/month</span>
                </div>
                <ul className="mt-6 space-y-4 flex-grow">
                    <li className="flex items-center">
                        <span className="material-icons text-green-500 mr-2"><FaCheck /></span>
                        Unlimited pages and blocks
                    </li>
                    <li className="flex items-center">
                        <span className="material-icons text-green-500 mr-2"><FaCheck /></span>
                        Collaborative workspace
                    </li>
                    <li className="flex items-center">
                        <span className="material-icons text-green-500 mr-2"><FaCheck /></span>
                        Admin tools
                    </li>
                </ul>
                <button className="mt-8 w-full py-2 bg-green-800 text-zinc-200  rounded-md border-green-400 border-[1px] transition-all duration-300 hover:bg-green-600 hover:text-white">
                    Choose Team
                </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-zinc-800 text-zinc-400 shadow-lg rounded-lg p-6 flex flex-col">
                <h3 className="text-2xl font-semibold text-white">Enterprise</h3>
                <p className="mt-4 text-zinc-400">For enterprises.</p>
                <div className="mt-6">
                    <span className="text-4xl font-extrabold text-white">Custom</span>
                </div>
                <ul className="mt-6 space-y-4 flex-grow">
                    <li className="flex items-center">
                        <span className="material-icons text-green-500 mr-2"><FaCheck /></span>
                        Unlimited pages and blocks
                    </li>
                    <li className="flex items-center">
                        <span className="material-icons text-green-500 mr-2"><FaCheck /></span>
                        SAML & SCIM
                    </li>
                    <li className="flex items-center">
                        <span className="material-icons text-green-500 mr-2"><FaCheck /></span>
                        Advanced security
                    </li>
                </ul>
                <button className="mt-8 w-full py-2 bg-green-800 text-zinc-200  rounded-md border-green-400 border-[1px] transition-all duration-300 hover:bg-green-600 hover:text-white">
                    Contact Sales
                </button>
            </div>

        </div>
    )
}

export default Cards