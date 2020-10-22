import React from 'react'
import './CardItems.css'
import {SortableContainer, SortableElement} from 'react-sortable-hoc'
import {CardItem} from '../CardItem/CardItem'
import {connect} from 'react-redux'
import {moveTableItems} from '../../actions'

export const CardsItems = connect()(({tableId, items, dispatch}) => {

    const onEnd = ({oldIndex, newIndex}) => {
      dispatch(moveTableItems(
        1, 1, oldIndex, newIndex, tableId)
      )
    }

    const SortableItem = SortableElement(({item}) =>
      <CardItem cardItem={item}/>
    )

    const SortableList = SortableContainer(({items}) => {
      return (
        <>
          <div className="items-wrapper">
            {
              items.map((item, index) => (
                <>
                  <SortableItem key={`item-${item.id}`} index={index} item={item}/>
                </>
              ))
            }
          </div>
        </>
      )
    })

    return (
      <SortableList distance={15} items={items} axis={'y'} onSortEnd={onEnd}/>
    )
  }
)