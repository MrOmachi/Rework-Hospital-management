import React from 'react'

interface button {
 styles: string,
 text: string,
 fn: any,
 icon: any
}

export default function IconButton({
 styles,
 text,
 fn,
 icon
}: button) {
 return (
  <button
   onClick={fn}
   className={styles}
  >
   <div className='flex items-center gap-1'>
    {icon}
    {text}
   </div>
  </button>
 )
}
