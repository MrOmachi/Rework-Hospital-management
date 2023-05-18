import React from 'react'

interface button {
 styles: string,
 text: string,
 fn: any
}

export default function Button({
 styles,
 text,
 fn
}: button) {
  return (
    <button
    onClick={fn}
    className={styles}
    >
    {text}
    </button>
  )
}
