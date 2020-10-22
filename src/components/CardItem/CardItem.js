import React, {useEffect, useState} from 'react'
import './CardItem.css'
import {ItemActionsModal} from '../ItemActionsModal/ItemActionsModal'

export const CardItem = ({cardItem}) => {

  const [isActions, setIsActions] = useState(false)

  useEffect(() => {
    window.addEventListener('click', () => setIsActions(false))
  }, [])


  const openActions = (e) => {
    e.stopPropagation()
    setIsActions(true)
  }

  return (
    <div className="card-item" key={cardItem._id}>
      <p>{cardItem.text}</p>
      <div className="item-edit" onClick={openActions}>
          <span className="material-icons item-edit-icon"
          >create</span>
      </div>
      {
        isActions &&
        <ItemActionsModal name={cardItem.text}/>
      }
    </div>
  )
}