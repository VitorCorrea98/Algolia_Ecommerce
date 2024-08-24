'use client'
import { useState } from "react";
import Header from "./_components/Header";

// async function getPhones() {
//   const response = await fetch('http://localhost:3001/products');
//   const data = await response.json() as ICellPhone[]

//   return data;
// }

export default function Example() {
  const [open, setOpen] = useState(false)

  return (
    <div className="">
      {/* <Header /> */}
    </div>
  )
}