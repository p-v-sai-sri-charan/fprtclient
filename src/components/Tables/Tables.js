import React from 'react'
import './Tables.css'
import {Table} from '../Table/Table'
import {SortableContainer, SortableElement} from 'react-sortable-hoc'
import {moveTables} from '../../actions'
import {connect} from 'react-redux'

export const Tables = connect()(({dispatch, tables}) => {

    const onSortEnd = ({oldIndex, newIndex}) => {
      dispatch(moveTables(1, 1, oldIndex, newIndex))
    }

    const SortableItem = SortableElement(({table}) =>
      <Table table={table}/>
    )

    const SortableList = SortableContainer(({items}) => {
      return (
        <>
          <div className="wrapper">
            {
              items.map((table, index) => (
                <div key={table._id}>
                  <SortableItem key={`item-${table._id}`} index={index} table={table}/>
                </div>
              ))
            }
          </div>
        </>
      )
    })

    return (
      <SortableList distance={15} items={tables} axis={'x'}
                    onSortEnd={onSortEnd}/>
    )
  }
)