import React, {useState} from 'react'
import './ChangeLabelsModal.css'

export const ChangeLabelsModal = ({onClose}) => {

  const [labels, setLabels] = useState([
    {
      color: '#7777bc',
      id: '1232'
    },
    {
      color: '#80d27a',
      id: '#80d27a'
    },
    {
      color: '#ea8630',
      id: '#ea8630'
    },
    {
      color: '#b220be',
      id: '#b220be'
    }
  ])

  const blurColor = (color) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color)
    return `rgb(${Math.min(parseInt(result[1], 16) + 30, 255)},
    ${parseInt(result[2], 16)},${parseInt(result[3], 16)})`
  }

  return (
    <div className="change-labels-modal">
      <p className="labels-logo">Tags</p>
      <span className="material-icons change-labels-close-icon"
            onClick={onClose}
      >close</span>
      <hr className="hr-actions"/>
      <input type="text" className="search-labels-input"/>
      <p className="labels">LABELS</p>
      <div className="labels-container">
        {
          labels.map(label => (
            <div key={label.id} className="label-color-item">
              <div className="label-color"
                   style={{backgroundColor: label.color}}>
                <div style={{backgroundColor: blurColor(label.color)}}
                     className="label-color-hovered"></div>
              </div>
              <div className="edit-label">
            <span className="material-icons edit-label-icon"
            >edit</span>
              </div>
            </div>
          ))
        }
      </div>
      <div className="create-label">
        <p>Create a new label</p>
      </div>
    </div>
  )
}
