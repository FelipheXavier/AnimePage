import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
        <Link to='/'>
        <h1>React Animes</h1>
        </Link>
    </header>
  )
}


