import React from 'react'
import ContactForm from './ContactForm'
import { IoIosCheckmark } from "react-icons/io";
import { Link } from 'react-router-dom';
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { CheckIcon } from 'lucide-react';

const bullets = ["Startups", "Service Professionals", "Investors", "Channel Partners"]

const logos = [
  { alt: "Partner 1", w: 120 },
  { alt: "Partner 2", w: 120 },
  { alt: "Partner 3", w: 120 },
  { alt: "Partner 4", w: 120 },
  { alt: "Partner 5", w: 120 },
  { alt: "Partner 6", w: 120 },
  
]

const benefitCards = [
  {
    title: "You’ve got the skills. We’ve got the startups.",
    body: "Instead of spending money on ads, pitching endlessly, or chasing unclear leads, plug into our network to list your work. Together with your exceptional skill, we grow your practice with warm intros so the right clients find you faster.",
  },
  {
    title: "You’ve got the skills. We’ve got the startups.",
    body: "Instead of spending money on ads, pitching endlessly, or chasing unclear leads, plug into our network to list your work. Together with your exceptional skill, we grow your practice with warm intros so the right clients find you faster.",
  },
  {
    title: "You’ve got the skills. We’ve got the startups.",
    body: "Instead of spending money on ads, pitching endlessly, or chasing unclear leads, plug into our network to list your work. Together with your exceptional skill, we grow your practice with warm intros so the right clients find you faster.",
  },
  
]

function Bullet({ children }) {
  return (
    <div className="flex items-center gap-4 ">
     <IoIosCheckmark className='bg-white text-[#001426] rounded-full' />
      <span className="text-lg  text-primary-foreground/80 ">{children}</span>
    </div>
  )
}

function BenefitCard({ title, body }) {
  return (
    <div className="rounded-lg bg-card text-card-foreground border border-border p-5 md:p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-sm md:text-base font-medium text-foreground/90 text-pretty">{title}</h3>
        <p className="mt-3 text-xs md:text-sm leading-6 text-foreground/70">{body}</p>
      </div>
      <div className="mt-10 flex items-center justify-between">
        <div>
          <p className="text-xs text-[#001032] font-semibold">Join once.</p>
          <p className="text-xs text-[#001032] font-semibold">Let the ecosystem work for you.</p>
        </div>
        <div className='h-18 w-[1px] bg-[#00000033]'></div>
        <button type="button" className="rounded-full   text-xs font-medium bg-[#001032] p-5 py-10 text-center text-white">
          Get Listed
        </button>
      </div>
    </div>
  )
}

const ContactSec1 = () => {
  return (
    <section className="bg-[#001426] text-primary-foreground mt-23 lg:mt-40 lg:rounded-3xl rounded-b-3xl">
      <div className="mx-auto w-full  px-4 md:px-8 py-8 md:py-20">
        {/* Top panel */}
        <div className="flex flex-col lg:flex-row justify-between items-start   ">
          {/* Left summary */}
          <div className="md:pr-6 p-3">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold  tracking-wide leading-10 lg:leading-16 w-[78%]">Connect with our experts</h1>
            <p className="py-5 text-lg  leading-8 tracking-wider w-[90%] lg:w-[80%]">
              Our experts in Artestor will support you and solve your queries in multiple domains:
            </p>

            <ul className="mt-5 space-y-3">
              {bullets.map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
            </ul>

            <p className="py-10 text-lg  leading-8 tracking-wider lg:w-[80%]">
             Get the access of 50+ investors and 500+ satrtups and 200+ service professionals
            </p>

            {/* Partner logos */}
            <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 lg:gap-6 gap-8 place-items-center gap-y-12 ">
              {logos.map((l, i) => (
                <div key={i} className="flex items-center">
                  <img
                    alt={l.alt}
                    className="h-6 md:h-8 w-auto opacity-80"
                    src={`/placeholder-icon.png?height=32&width=${l.w}&query=logo%20placeholder`}
                  />
                </div>
              ))}
            </div>
           <div className='hidden lg:block'>
             <div className='mt-20 text-[#B2BFC1] text-sm flex items-center gap-1  '>
                <p>Looking for pricing and benefits</p>
                <Link className='underline'> Explore Auxiliaries</Link>
                <BsBoxArrowInUpRight  /> 

                </div>
           </div>
          </div>

          {/* Right form card */}
          <div className="md:pl-2 lg:w-[50%] mt-14 lg:mt-0">
            <div className="rounded-lg border border-border bg-card text-card-foreground p-4 md:p-6">
              <ContactForm/>
            </div>
          </div>
        </div>

        {/* Bottom benefit cards */}
        <div className='hidden lg:block'>
          <div className="mt-10 md:mt-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-35  px-10">
            
          {benefitCards.map((c, idx) => (
           <div>
             <hr className='mb-15'/>
            <BenefitCard key={idx} title={c.title} body={c.body} />
           </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSec1
