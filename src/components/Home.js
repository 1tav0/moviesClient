import React from 'react'
import Hero from './Hero'

const Home = ({ movies }) => {
  // console.log(movies);
  if (!movies) {
    return <div>Loading...</div>
  }
  
  return (
    <Hero movies={movies} />
  )
}

export default Home