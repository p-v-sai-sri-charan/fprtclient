import React, {useEffect, useRef, useState} from 'react'
import './BoardHeader.css'

export const BoardHeader = () => {

  const [stared, setStared] = useState(false)
  const [name, setName] = useState('Table')
  const nameRef=useRef()

  useEffect(()=>{
    nameRef.current.style.width=`${name.length}ch`
  },[])

  const starHandler = () => {
    setStared(!stared)
  }

  const nameHandler=({target})=>{
    target.style.width=`${target.value.length}ch`
    setName(target.value)
  }

  return (
    <>
      <div className="board-header">
        <div className="left">
          <input ref={nameRef} type="text" className="board-name hovered"
                onChange={nameHandler} value={name}/>
          <div className="stared hovered" onClick={starHandler}>
            <span className={`material-icons stared-icon ${stared&&'star-icon'}`}>
              star_outline
             </span>
          </div>
        </div>
        
      </div>
    </>
  )
}