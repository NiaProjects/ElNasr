import React from 'react'
import img from "../../assets/images/Image-21-1.png.png"
import svgheart from "../../assets/images/svgheart.svg"
import svgface from "../../assets/images/svgface.svg"
import svgline from "../../assets/images/svgline.svg"
export default function Questions() {
  return <> 
  
  
  <section className='bg-sec'>
  
  <div className='container py-14'>
    


        <div className='grid md:grid-cols-2 gap-10'>

            <div className='relative rounded-lg'>
                <img src={svgline} className='absolute top-1/4 -left-28' alt="" />
                <div className='absolute top-56 right-6 w-20 h-20 flex items-center justify-center shadow-lg bg-white rounded-full'>
                    <img src={svgheart} alt="" />
                </div>
                <div className='flex  gap-8 items-center absolute bg-white p-6 shadow-lg rounded-xl top-96 left-2'>
                    <img src={svgface} alt="" />
                    <div>
                        <h6 className='text-3xl font-bold text-sec'>84k+</h6>
                        <p className='text-gray-400 text-lg'>happy patients</p>
                    </div>
                </div>
                <img src={img} className='w-full' alt="" />
            </div>

            <div className='flex items-center'>



            <div id="accordion-open" className='w-full ' data-accordion="open">
<div className='question mb-4' >
<h2 id="accordion-open-heading-1">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:textRight text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 bg-white hover:bg-gray-100  gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
    <span className="flex items-center"><svg className="w-5 h-5 me-2 text-main shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>Is there a Figma file available?</span>
    <svg data-accordion-icon className="w-3 h-3 text-main rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-1" className="hidden bg-blue-200 text-sec font-semibold" aria-labelledby="accordion-open-heading-1">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
</div>
<div className='question mb-4'>
<h2 id="accordion-open-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:textRight text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 bg-white hover:bg-gray-100 hover:bg-gray- gap-3" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
      <span className="flex items-center"><svg className="w-5 text-main h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>Is there a Figma file available?</span>
      <svg data-accordion-icon className="w-3 h-3 text-main rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-2" className="hidden bg-blue-200 text-sec font-semibold" aria-labelledby="accordion-open-heading-2">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
</div>
<div className='question mb-4'>
<h2 id="accordion-open-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:textRight text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 bg-white hover:bg-gray-100 gap-3" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
      <span className="flex items-center"><svg className="w-5 text-main h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>Is there a Figma file available?</span>
      <svg data-accordion-icon className="w-3 h-3 text-main rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-3" className="hidden bg-blue-200 text-sec font-semibold" aria-labelledby="accordion-open-heading-3">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
</div>
<div className='question mb-4'>
<h2 id="accordion-open-heading-4">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:textRight text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 bg-white hover:bg-gray-100 gap-3" data-accordion-target="#accordion-open-body-4" aria-expanded="false" aria-controls="accordion-open-body-4">
      <span className="flex items-center"><svg className="w-5 text-main h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>Is there a Figma file available?</span>
      <svg data-accordion-icon className="w-3 h-3 text-main rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-open-body-4" className="hidden bg-blue-200 text-sec font-semibold" aria-labelledby="accordion-open-heading-4">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classNamees from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
</div>

</div>



            </div>

        </div>


    
    
     </div>
  </section>
  
  </>
}
