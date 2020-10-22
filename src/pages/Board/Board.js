import React, {useEffect, useRef, useState} from 'react'
import './Board.css'
import {BoardHeader} from '../../components/BoardHeader/BoardHeader'
import {Tables} from '../../components/Tables/Tables'
import {connect} from 'react-redux'
import {createTable, loadTables} from '../../actions'
import {useParams, useHistory} from 'react-router-dom'

const mapStateToProps = ({tables}) => ({tables})

export const Board = connect(mapStateToProps)(({tables, dispatch}) => {

    const {boardId} = useParams()
    const [isAdding, setIsAdding] = useState(false)
    const [tableName, setTableName] = useState('')
    const [loading, setLoading] = useState(true)

    const inputRef = useRef()

    const history = useHistory()

    const closeAdding = () => {
      setIsAdding(false)
    }

    const closeAdd = (e) => {
      e.stopPropagation()
      setIsAdding(false)
      setTableName('')
    }

    useEffect(() => {
      dispatch(loadTables(boardId))
        .then(()=>setLoading(false))
        .catch(() => {
          history.push('/boards')
        })
      window.addEventListener('click', closeAdding)
      window.addEventListener('selectstart', (e) => e.preventDefault())
      return () => {
        window.removeEventListener('click', closeAdding)
      }
    }, [])

    const addTable = (e) => {
      setIsAdding(true)
      setTimeout(() => {
        inputRef.current.focus()
      })
      e.stopPropagation()
    }

    const appendTable = (e) => {
      if (tableName.trim()) {
        e.stopPropagation()
        dispatch(createTable(boardId, tableName))
        setIsAdding(false)
        setTableName('')
      }
    }

    const keyDownHandler = (e) => {
      if (e.key === 'Enter') {
        appendTable(e)
      }
    }

   
    return (
      <div>
        <div className="board">
          <BoardHeader/>
          <div className="board-content">
            <Tables tables={tables}/>
            {
              !isAdding
                ? <div className="add-board hovered" onClick={addTable}>
              <span className="material-icons plus-icon">
              add
             </span>
                  <p>{tables.length > 0 ? 'Add another column' : 'Add list'}</p>
                </div>
                : <div className="add-board-open" onClick={addTable}>
                  <input type="text"
                         ref={inputRef}
                         value={tableName}
                         onKeyDown={keyDownHandler}
                         onChange={({target: {value}}) => setTableName(value)}
                         placeholder="Enter a title for the list"/>
                  <div className="add-actions">
                    <div className="add-list hovered"
                         onClick={appendTable}>
                      <p>Add list</p>
                    </div>
                    <span className="material-icons close-add-icon hovered"
                          onClick={closeAdd}
                    >clear</span>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    )
  }
)