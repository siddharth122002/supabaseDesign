import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LiaDatabaseSolid } from "react-icons/lia";
import { CiUnlock } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineSdStorage } from "react-icons/md";
import { TbVectorTriangle } from "react-icons/tb";
function Features() {
    return (
        <Tabs defaultValue="Database" className="w-[70vw]  md:flex flex-col  hidden mt-8">
            <TabsList className="bg-zinc-900 text-zinc-400 mb-8" >
                <TabsTrigger
                    className="w-[10vw]"
                    value="Database">Database</TabsTrigger>
                <TabsTrigger
                    className="w-[10vw]" value="Authentication">Authentication</TabsTrigger>
                <TabsTrigger
                    className="w-[10vw]" value="Edgefunctions">Edge functions</TabsTrigger>
                <TabsTrigger
                    className="w-[10vw]" value="Storage">Storage</TabsTrigger>
                <TabsTrigger
                    className="w-[10vw]" value="Realtime">Realtime</TabsTrigger>
                <TabsTrigger
                    className="w-[10vw]" value="Vector">Vector</TabsTrigger>
            </TabsList>
            <TabsContent value="Database">
                <div className='flex flex-col justify-center items-center '>

                    <h1 className='text-4xl font-semibold flex justify-center items-center'><LiaDatabaseSolid className='text-3xl text-green-400 hover:text-green-700 trandition-all duration-300 mr-4' />Database</h1>
                    <h1 className='text-zinc-400 m-2'>Every project is a full Postgres database, the world's most trusted relational database.</h1>
                </div>
                <img
                    className='h-[25vw] w-[25vw] m-auto object-cover  relative'
                    src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase.png&w=3840&q=100" alt="" />
            </TabsContent>

            <TabsContent value="Authentication">
                <div className='flex flex-col justify-center items-center '>

                    <h1 className='text-4xl font-semibold flex justify-center items-center'><CiUnlock className='text-3xl text-green-400 hover:text-green-700 trandition-all duration-300 mr-4' />Authentication</h1>
                    <h1 className='text-zinc-400 m-2'>Add user sign ups and logins, securing your data with Row Level Security.</h1>
                </div>
                <img
                    className='h-[25vw] w-[25vw] m-auto object-cover  relative'
                    src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fauth-active.svg&w=1080&q=100" alt="" />
            </TabsContent>
            <TabsContent value="Edgefunctions">
                <div className='flex flex-col justify-center items-center '>

                    <h1 className='text-4xl font-semibold flex justify-center items-center'><FaRegCircle className='text-3xl text-green-400 hover:text-green-700 trandition-all duration-300 mr-4' />Edge Functions</h1>
                    <h1 className='text-zinc-400 m-2'>Easily write custom code without deploying or scaling servers.</h1>
                </div>
                <img
                    className='h-[25vw] w-[25vw] m-auto object-cover  relative'
                    src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fedge-functions.png&w=1080&q=100" alt="" />
            </TabsContent>
            <TabsContent value="Storage">
                <div className='flex flex-col justify-center items-center '>

                    <h1 className='text-4xl font-semibold flex justify-center items-center'><MdOutlineSdStorage className='text-3xl text-green-400 hover:text-green-700 trandition-all duration-300 mr-4' />Storage</h1>
                    <h1 className='text-zinc-400 m-2'>Store,organize and serve large files, from videos to images.</h1>
                </div>
                <img
                    className='h-[25vw] w-[25vw] m-auto object-cover  relative'
                    src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fdatabase.png&w=3840&q=100" alt="" />
            </TabsContent>
            <TabsContent value="Realtime">
                <div className='flex flex-col justify-center items-center '>

                    <h1 className='text-4xl font-semibold flex justify-center items-center'><CiTimer className='text-3xl text-green-400 hover:text-green-700 trandition-all duration-300 mr-4' />Realtime</h1>
                    <h1 className='text-zinc-400 m-2'>Build multiplayer experiences with realtime data synchronization.</h1>
                </div>
                <img
                    className='h-[25vw] w-[25vw] m-auto object-cover  relative'
                    src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Frealtime-bg.svg&w=1080&q=100" alt="" />
            </TabsContent>
            <TabsContent value="Vector">
                <div className='flex flex-col justify-center items-center '>

                    <h1 className='text-4xl font-semibold flex justify-center items-center'><TbVectorTriangle className='text-3xl text-green-400 hover:text-green-700 trandition-all duration-300 mr-4' />Vector</h1>
                    <h1 className='text-zinc-400 m-2'>Integrate your favorite ML-models to store, index and search vector embeddings.</h1>
                </div>
                <img
                    className='h-[25vw] w-[25vw] m-auto object-cover  relative'
                    src="https://supabase.com/_next/image?url=%2Fimages%2Findex%2Fproducts%2Fvector.svg&w=1080&q=100" alt="" />
            </TabsContent>


        </Tabs>
    )
}

export default Features