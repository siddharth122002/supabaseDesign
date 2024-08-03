import React from 'react'
import { CgUnavailable } from "react-icons/cg";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { FaCheckCircle } from "react-icons/fa";
function Tables() {
    return (
        <div className=' container'>
            <h1 className='text-center text-5xl mt-16 font-semibold'>Plans and features</h1>
            <Table className="mt-8 text-zinc-400">
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-white text-lg font-semibold">Feature</TableHead>
                        <TableHead className="text-white text-lg font-semibold">Free<br />$0/ month<br /><button className="bg-green-800 text-zinc-200  text-sm px-4 rounded-md border-green-400 border-[1px] transition-all duration-300 hover:bg-green-600 hover:text-white">Start for Free</button></TableHead>
                        <TableHead className="text-white text-lg font-semibold">Pro<br />$25/ month<br /><button className="bg-green-800 text-zinc-200  text-sm px-4 rounded-md border-green-400 border-[1px] transition-all duration-300 hover:bg-green-600 hover:text-white">Get Started</button></TableHead>
                        <TableHead className="text-white text-lg font-semibold">Team<br />$599/ month<br /><button className="bg-green-800 text-zinc-200  text-sm px-4 rounded-md border-green-400 border-[1px] transition-all duration-300 hover:bg-green-600 hover:text-white">Get Started</button></TableHead>
                        <TableHead className="text-white text-lg font-semibold">Enterprise<br />Custom<br /><button className="bg-green-800 text-zinc-200  text-sm px-4 rounded-md border-green-400 border-[1px] transition-all duration-300 hover:bg-green-600 hover:text-white">Contact Us</button></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium text-white">Dedicated Postgres Database</TableCell>
                        <TableCell><FaCheckCircle className='text-green-500' /></TableCell>
                        <TableCell><FaCheckCircle className='text-green-500' /></TableCell>
                        <TableCell><FaCheckCircle className='text-green-500' /></TableCell>
                        <TableCell><FaCheckCircle className='text-green-500' /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-white">Unlimited API requests</TableCell>
                        <TableCell><FaCheckCircle className='text-green-500' /></TableCell>
                        <TableCell><FaCheckCircle className='text-green-500' /></TableCell>
                        <TableCell><FaCheckCircle className='text-green-500' /></TableCell>
                        <TableCell><FaCheckCircle className='text-green-500' /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-white">Database size</TableCell>
                        <TableCell>500 MB included</TableCell>
                        <TableCell>8 GB included<br />then $0.125 per GB</TableCell>
                        <TableCell>8 GB included<br />then $0.125 per GB</TableCell>
                        <TableCell>Custom</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-white">Automatic backups</TableCell>
                        <TableCell><CgUnavailable className="text-zinc-100 cursor-pointer" /></TableCell>
                        <TableCell>7 days<br /><span className="text-green-500 cursor-pointer">Info</span></TableCell>
                        <TableCell>14 days<br /><span className="text-green-500 cursor-pointer">Info</span></TableCell>
                        <TableCell>Custom</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-white">Point in time recovery</TableCell>
                        <TableCell><CgUnavailable className="text-zinc-100 cursor-pointer" /></TableCell>
                        <TableCell>$100 per 7 days</TableCell>
                        <TableCell>$100 per 7 days</TableCell>
                        <TableCell>$100 per 7 days, 28 days available</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-white">Pausing</TableCell>
                        <TableCell>After 1 week of inactivity</TableCell>
                        <TableCell><CgUnavailable className="text-zinc-100 cursor-pointer" /></TableCell>
                        <TableCell><CgUnavailable className="text-zinc-100 cursor-pointer" /></TableCell>
                        <TableCell><CgUnavailable className="text-zinc-100 cursor-pointer" /></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-white">Branching</TableCell>
                        <TableCell><CgUnavailable className="text-zinc-100 cursor-pointer" /></TableCell>
                        <TableCell>$0.32 per branch, per day</TableCell>
                        <TableCell>$0.32 per branch, per day</TableCell>
                        <TableCell>Custom</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium text-white">Bandwidth</TableCell>
                        <TableCell>5 GB included</TableCell>
                        <TableCell>250 GB included<br />then $0.09 per GB</TableCell>
                        <TableCell>250 GB included<br />then $0.09 per GB</TableCell>
                        <TableCell>Custom</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}

export default Tables