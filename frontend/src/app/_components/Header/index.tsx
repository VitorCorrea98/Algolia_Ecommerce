import Image from 'next/image'
import React from 'react'
import Navigation from './Navigation'
import { Input } from '@headlessui/react'
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/16/solid'

export default function Header() {
  return (
    <header className='flex w-full items-center justify-around'>
      <Image src='/RealLogoPhone.png' alt='App logo' width={110} height={1}/>
      <Navigation />
      <div className='flex gap-4'>
        <Input 
          type='text' 
          name='search' 
          className='border data-[hover]:shadow-xl data-[focus]:outline-none rounded-lg px-2'
          autoFocus={false}
          autoComplete='off'
        />
        <UserIcon height={30} color='#333c51'/>
        <ShoppingBagIcon height={30} color='#333c51'/>
      </div>
    </header>
  )
}
