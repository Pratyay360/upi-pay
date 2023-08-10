"use client"
import Image from 'next/image'
import Body from './qrandcomponent/index';
export default function Home() {
  return (
   <>
   <header>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="description" content="Upi donation" />
    </header>
    <div>
      <Body />
    </div>
    
   </>
  )
}
