import React from 'react'
import { posts } from './posts'
import Post from './Post'


export default function ContainerPost() {
  return (
    <div>
        {
            posts.map(item =><Post {...item} key={item.id}/> )
        }
    </div>
  )
}
