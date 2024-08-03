import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
function Qa() {
    return (
        <div className='m-auto'>
            <h1 className=' text-center text-4xl mt-20'>Questions and answers</h1>
            <Accordion className='w-2/3 m-auto mt-8' type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Can I cap my usage so my bill doesn't run over?</AccordionTrigger>
                    <AccordionContent>
                        Yes. Spend caps are on by default on the Pro Plan. You can turn spend caps off for usage beyond the Plan limits to pay as you grow.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion className='w-2/3 m-auto mt-8 ' type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>I'm worried I could end up with a huge bill at the end of the month.</AccordionTrigger>
                    <AccordionContent>
                        Spend caps are on by default and you need to toggle them off from your dashboard to enable pay as you grow pricing.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion className='w-2/3 m-auto mt-8 ' type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>When will I be billed?</AccordionTrigger>
                    <AccordionContent>
                        Our Pro Plan is charged up front, and billed on a monthly basis. Additional usage costs are also billed at the end of the month.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion className='w-2/3 m-auto mt-8 ' type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>Are you going to change your pricing in the future?</AccordionTrigger>
                    <AccordionContent>
                        Our Pro Plan is charged up front, and billed on a monthly basis.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <Accordion className='w-2/3 m-auto mt-8 ' type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>When will I be billed?</AccordionTrigger>
                    <AccordionContent>
                        Our Pro Plan is charged up front, and billed on a monthly basis.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Qa