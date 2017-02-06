import React from 'react'
import { Link } from 'react-router'

// Style
import Style from './style.scss'

export default class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link to='/'>Todo</Link>
        <Link to='/history'>History</Link>
      </nav>
    )
  }
}
