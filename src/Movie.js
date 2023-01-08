import React from 'react'

const Movie = ({movie, price}) => {
  return (
    <div>
    <h3>{movie}</h3>
    <h3>{price}</h3>
    </div>
  )
}

export default Movie