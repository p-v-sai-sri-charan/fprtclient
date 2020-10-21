import React, {useEffect, useState} from 'react'
import './Header.css'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
//import {logout} from '../../actions'
import { Avatar } from '@material-ui/core'
const logout =""
const mapsStateToProps = ({auth}) => ({imageUrl: auth.imageUrl})

export const Header = connect(mapsStateToProps)(({dispatch}) => {

    const [isMenuOpen, setOpen] = useState(false)

    const history = useHistory()


    const handleMenu = (e) => {
      e.stopPropagation()
      setOpen(!isMenuOpen)
    }

    const closeMenu = (e) => {
      setOpen(false)
    }

    useEffect(() => {
      window.addEventListener('click', closeMenu)
      return () => {
        window.removeEventListener('click', closeMenu)
      }
    })

    return (
      <div className="header">
        <div className="left">
          <div className="header-button home"
               onClick={() => history.push('/boards')}
          >
          <span className="material-icons  icon">
              home
           </span>
          </div>
          <div className="header-button boards">
          <span className="material-icons icon">
             developer_board
           </span>
            <p>Доски</p>
          </div>
          <div>
            <input type="text" className="search"/>
            <span className="material-icons search-icon">
          search
           </span>
          </div>
        </div>
        <div className="header-button logo">
          <span className="material-icons logo-icon">
             developer_board
           </span>
          <i>Trello</i>
        </div>
        <div className="right">
          <div className="header-button add">
          <span className="material-icons  icon">
              add
           </span>
          </div>
          <Avatar className="material-icons  icon"
               onClick={handleMenu}
               alt="profile"
               src=""/>
        </div>
        {
          isMenuOpen && <div className="menu-profile">
            <div className="menu-item hovered"
                 onClick={() => dispatch(logout())}
            >
              <p>Logout</p>
            </div>
          </div>
        }
      </div>
    )
  }
)
