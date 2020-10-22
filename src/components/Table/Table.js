import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react'
import './Table.css'
import {CardActions} from '../CardActions/CardActions'
import {CardsItems} from '../CardItems/CardItems'
import {connect} from 'react-redux'
import {createTableItem, editTable} from '../../actions'
import {debounce} from '../../helpers/debounce'

export const Table = connect()(({table, dispatch}) => {

    const [isAddingCart, setIsAddingCart] = useState(false)
    const [isActions, setIsActions] = useState(false)
    const [name, setName] = useState(table.name)
    const [itemText, setItemText] = useState('')

    const inputRef = useRef()

    const addingHandler = (e) => {
      e.stopPropagation()
      setIsAddingCart(true)
      setTimeout(() => {
        inputRef.current.focus()
      })
    }

    const menuHandler = () => {
      setIsActions(!isActions)
    }

    const closeAdd = () => {
      setIsAddingCart(false)
    }

    const addItem = () => {
      if (itemText.trim()) {
        dispatch(createTableItem(table._id, itemText))
        setItemText('')
      }
    }

    const keyHandler = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault()
        addItem()
      }
    }

    useEffect(() => {
      window.addEventListener('click', closeAdd)
      return () => {
        window.removeEventListener('click', closeAdd)
      }
    }, [])

    const debouncedInput = useCallback(debounce((value) => {
      dispatch(editTable(table._id, value))
    }, 1000), [])

    const tableNameHandler = ({target: {value}}) => {
      setName(value)
      if (value.trim()) {
        debouncedInput(value)
      }
    }

    return (
      <div className="board-table hovered" key={table._id}>
        <div className="table-top">
          <div className="table-name-menu">
            <input type="text" className="board-table-name hovered"
                   value={name}
                   onChange={tableNameHandler}
            />
            <div className="table-menu"
                 onClick={menuHandler}
            >
              <span className="material-icons table-menu-icon">more_horiz</span>
            </div>
            {
              isActions && <CardActions close={() => setIsActions(false)}/>
            }
          </div>
          {
            <CardsItems tableId={table.id} items={table.items}/>
          }
          {
            !isAddingCart
              ? <div className="add-table-item hovered"
                     onClick={addingHandler}
              >
                <span className="material-icons add-item">add</span>
                <p>{table.items.length > 0
                  ? 'Add another card'
                  : 'Add card'}</p>
              </div>
              : <div className="add-table-item-open"
                     onClick={(e) => e.stopPropagation()}
              >
              <textarea spellCheck="false"
                        placeholder="Enter a title for this card"
                        onKeyDown={keyHandler}
                        value={itemText}
                        ref={inputRef}
                        onChange={(e) => setItemText(e.target.value)}
              />
                <div className="actions-add">
                  <div className="add-table-cart" onClick={addItem}>
                    <p>Add card</p>
                  </div>
                  <span className="material-icons cancel-add-item"
                        onClick={addingHandler}
                  >close</span>
                  <div className="menu-add-item">
                    <span className="material-icons menu-add-item-icon">more_horiz</span>
                  </div>
                </div>
              </div>
          }
        </div>
      </div>
    )
  }
)
