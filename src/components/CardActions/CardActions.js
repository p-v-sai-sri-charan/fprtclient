import React, {useEffect} from 'react'
import './CardActions.css'

export const CardActions = ({close}) => {

  const closeActions = () => {
    close()
  }

  useEffect(() => {
    window.addEventListener('click', closeActions)
    return () => {
      window.removeEventListener('click', closeActions)
    }
  }, [])

  return (
    <div className="card-actions-menu"
         onClick={(e)=>e.stopPropagation()}>
      <p className="actions-logo">List actions</p>
      <span className="material-icons table-actions-close-icon"
      onClick={closeActions}
      >close</span>
      <hr className="hr-actions"/>
      <div className="card-actions-buttons">
        <div className="card-action-button">
          <p>Add card ...</p>
        </div>
        <div className="card-action-button">
          <p>Copy list ...</p>
        </div>
        <div className="card-action-button">
          <p>Move list ...</p>
        </div>
        <div className="card-action-button">
          <p>Subscribe</p>
        </div>
        <hr className="hr-actions"/>
        <div className="card-action-button">
          <p>Move all cards in the list ...</p>
        </div>
        <div className="card-action-button">
          <p>Archive all cards in the list ...</p>
        </div>
        <hr className="hr-actions"/>
        <div className="card-action-button">
          <p>Archive list ...</p>
        </div>
      </div>
    </div>
  )
}