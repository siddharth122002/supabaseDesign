import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function Navbar() {
    useEffect(() => {
        gsap.from('.test', {
            scaleX: -1,
            duration: 2,
        })


    }, [])
    return (
        <div className=' top-0 z-50 fixed w-[100vw] bg-zinc-900'>
            <nav className='flex  container  top-0 justify-between p-4'>
                <div className='flex items-center gap-8 w-24 md:w-2/3'>
                    <Link to={'/'}> <img
                        className="md:h-8 test"
                        src="https://supabase.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsupabase-logo-wordmark--dark.b36ebb5f.png&w=256&q=75"
                        alt="Supabase Logo"
                    />
                    </Link>
                    <NavigationMenu className="p-0 m-0 hidden md:block">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-zinc-900 text-zinc-400 p-0 hover:text-white hover:bg-zinc-900 ml-4 flip">Resources</NavigationMenuTrigger>

                                <NavigationMenuContent className="p-8 flex flex-col gap-4  text-white font-semibold bg-green-800 hover:cursor-pointer">
                                    <NavigationMenuLink>blogs</NavigationMenuLink>
                                    <NavigationMenuLink>notion academy</NavigationMenuLink>
                                    <NavigationMenuLink>API docs</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-zinc-900 text-zinc-400 p-0 hover:text-white hover:bg-zinc-900 ml-4 flip">Solutions</NavigationMenuTrigger>
                                <NavigationMenuContent className="p-8 flex flex-col gap-4  text-white font-semibold bg-green-800 hover:cursor-pointer">
                                    <NavigationMenuLink>Enterprice</NavigationMenuLink>
                                    <NavigationMenuLink>Solo</NavigationMenuLink>
                                    <NavigationMenuLink>agency</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-zinc-900 text-zinc-400 p-0 hover:text-white hover:bg-zinc-900 ml-4 flip">Download</NavigationMenuTrigger>
                                <NavigationMenuContent className="p-8 flex flex-col gap-4  text-white font-semibold bg-green-800 hover:cursor-pointer">
                                    <NavigationMenuLink>web clipper</NavigationMenuLink>
                                    <NavigationMenuLink>extension</NavigationMenuLink>
                                    <NavigationMenuLink>calendar</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>



                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className='flex gap-4 text-zinc-400 text-md font-semibold justify-center items-center'>
                    <Link to={'/pricing'}> <h1 className='hover:text-white hover:cursor-pointer flip'>Pricing</h1></Link>
                    <Link to={'/dashboard'}> <button className='bg-green-800 text-zinc-200 text-sm px-4 rounded-md border-green-400 border-[1px] transition-all duration-300 hover:bg-green-600 hover:text-white  '>Dashboard</button></Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar