import React from 'react'
import s from './CoffeeItem.module.css'

export default function CoffeItem({id, title, description, image, delete_card}) {
  return (
    <div className={s.item}>
      <p className={s.deleteElem} onClick={()=>delete_card(id)}>X</p>
      <p>Title: {title}</p>
      <p>Descr: {description}</p>
      <img className={s.img} src={image} alt={title} />
    </div>
  )
}
