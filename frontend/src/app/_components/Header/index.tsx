import Image from 'next/image'
import React from 'react'
import Navigation from './Navigation'
import { Input } from '@headlessui/react'
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/16/solid'

export default function Header() {
  return (
    <header className='flex w-full items-center justify-around z-10'>
      <Image src='/Logo.png' alt='App logo' height={100} width={100} priority/>
      <Navigation />
      <div className='flex gap-4'>
        <Input 
          type='text' 
          name='search' 
          className='border data-[hover]:shadow-xl data-[focus]:outline-none rounded-lg px-2'
          autoFocus={false}
          autoComplete='off'
        />
        <UserIcon height={30} color='#456c7b'/>
        <ShoppingBagIcon height={30} color='#456c7b'/>
      </div>
    </header>
  )
}
