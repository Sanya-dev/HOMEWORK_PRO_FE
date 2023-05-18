import React from 'react'
import CoffeItem from '../CoffeeItem/CoffeItem'
import s from './CoffeeContainer.module.css'

export default function CofeeContainer({data, delete_card}) {
  return (
    <div className={s.wrapper}>
        {
          data.map(item => <CoffeItem key={item.id} {...item} delete_card={delete_card} /> )
        }
    </div>
  )
}
