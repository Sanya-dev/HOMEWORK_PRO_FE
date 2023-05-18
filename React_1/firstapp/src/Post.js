import React from 'react'


export default function Post({title, body}) {
  return (
    <div>
        <p>{title}</p>
        <p>{body}</p>
    </div>
  )
}
