import React, {useState, useContext} from 'react'
import { MovieContext } from './MovieContext'

const Nav = () => {
    const [movies, setMovies]=useContext(MovieContext)
  return (
    <nav>
        <h3>Kamau</h3>
        <h3>list of movies:{movies.length}</h3>

    </nav>
  )
}

export default Nav