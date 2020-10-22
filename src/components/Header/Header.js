import React, {useEffect, useState} from 'react'
import './Header.css'
import {connect} from 'react-redux'
import {useHistory,Link} from 'react-router-dom'
import {logout} from '../../actions'
import { Avatar } from '@material-ui/core'

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
    const logouthandle =()=>{
      dispatch(logout())
      window.location.replace("/");
    }
    return (
      <div className="header">
        <div className="left">
          <div className="header-button home"
               onClick={() => history.push('/boards')}
          >
          <Link to={"/boards"}><span className="material-icons  icon">
              home
           </span></Link>
          </div>
          
          
        </div>
        <div className="header-button logo">
        <Link to={"/boards"}><span className="material-icons logo-icon">
             developer_board
           </span>
          <i>Boards</i></Link>
        </div>
        <div className="right">
          <Avatar className="material-icons  icon"
               onClick={handleMenu}
               alt="profile"
               src=""/>
        </div>
        {
          isMenuOpen && <div className="menu-profile">
            <div className="menu-item hovered"
                 onClick={logouthandle}
            >
              
              <p>Logout</p>
            </div>
            <div className="menu-item hovered"
                 
            >
              <Link to={"/profile"}><p>Profile</p></Link>
            </div>
          </div>
        }
      </div>
    )
  }
)
