import React from 'react'

export default function UsFlag() {
  return <> 
  
  
  <svg width="20" height="14" viewBox="0 0 19 10">
    <rect width="19" height="10" fill="#B22234" />
    <rect y="1.54" width="19" height="1.54" fill="white" />
    <rect y="4.62" width="19" height="1.54" fill="white" />
    <rect y="7.7" width="19" height="1.54" fill="white" />
    <rect width="7.6" height="5.4" fill="#3C3B6E" />
    <g fill="white">
      {[...Array(9)].map((_, i) => (
        <circle key={i} cx={(i % 2 ? 1.52 : 0.76) + (Math.floor(i / 2) * 1.52)} cy={0.54 + (i % 2) * 1.08} r="0.26" />
      ))}
    </g>
  </svg>
  </>
}
