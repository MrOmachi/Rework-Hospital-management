import React from 'react'

interface button {
  styles: string,
  text: string,
  fn: any,
  status: boolean
}

export default function Button({
  styles,
  text,
  fn,
  status
}: button) {
  return (
    <button
      onClick={fn}
      className={styles}
      disabled={status}
    >
      {text}
    </button>
  )
}
