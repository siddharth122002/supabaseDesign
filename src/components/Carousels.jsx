import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
function Carousels() {
    return (
        <div className='w-[450px] bg-white h-[23vh] mt-4 rounded-xl '>
            <Carousel className="h-full">
                <CarouselContent className="h-full">
                    <CarouselItem className="h-full">
                        <img src="https://supabase.com/images/product/functions/functions-og.jpg" className='object-cover w-full h-full' />

                    </CarouselItem>
                    <CarouselItem><img src="https://supabase.com/images/blog/launch-week-three/realtime-row-level-security-in-postgresql/realtime-row-level-security-in-postgresql-og.png" className='object-contain w-full h-full' /></CarouselItem>
                    <CarouselItem>
                        <img src="https://supabase.com/docs/img/supabase-og-image.png" className='object-contain w-full h-full' />

                    </CarouselItem>

                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>


        </div>
    )
}

export default Carousels