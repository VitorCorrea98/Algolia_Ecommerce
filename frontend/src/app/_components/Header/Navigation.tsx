import { Tab, TabGroup, TabList } from '@headlessui/react'
import Link from 'next/link'


export default function Navigation() {
  const links = [{text:'Home', link:'/'},{text:'Brands', link:'/brands'}, {text:'About', link:'/about'}]
  return (
      <TabGroup as='nav'>
        <TabList as='ul' className='flex gap-7 text-xl'>
          {links.map(({text, link}) => (
            <Tab as='li' key={link}>
              <Link href={link}>
                {text}
              </Link>
            </Tab>
          ))}
        </TabList>
      </TabGroup>
  )
}
