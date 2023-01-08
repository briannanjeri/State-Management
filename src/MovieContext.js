import { useState, createContext } from "react"
import React from 'react'

 export const MovieContext=createContext()

 export const MovieProvider = (props) => {
    const[movies, setMovies]=useState([
        {
        name:'jackiechan',
        price:'$10',
        id:20
    },
    {
        name:'spiderman',
        price:'$40',
        id:30
    },
    {
        name:'jetli',
        price:'$10',
        id:40
    
    }])
  return (
    <MovieContext.Provider value={[movies,setMovies]}>
        {props.children}
    </MovieContext.Provider>
  )
}

