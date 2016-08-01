import React, { Component } from 'react'
import { Link } from 'react-router'

import './app.scss'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          <li><Link activeClassName='active' onlyActiveOnIndex={true} to='/'>Главная</Link></li>
          <li><Link activeClassName='active' to='/admin'>Админка</Link></li>
          <li><Link activeClassName='active' to='/list'>Список жанров</Link></li>
          <li><Link activeClassName='active' to='/login'>Войти</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
