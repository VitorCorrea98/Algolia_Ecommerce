'use client'

import { use, useEffect, useState } from "react";

export default function TextHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <p 
      className={`absolute bottom-2/4 right-1/2 w-auto text-4xl font-bold transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'} delay-1000 duration-1000 line-clamp-3`} 
    >
      Come now and get your new phone today.
    </p>
  )
}
