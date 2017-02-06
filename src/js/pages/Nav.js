import React from 'react'
import { Link } from 'react-router'

// Style
import Style from './style.scss'

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link className='navLink' activeClassName='active' to='/'>Todo</Link>
        <Link className='navLink' activeClassName='active' to='/history'>History</Link>
      </nav>
    )
  }
}
