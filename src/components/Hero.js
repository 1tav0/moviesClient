import React from 'react';
import './Hero.css';
import Carousel  from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({ movies }) => {
  // console.log(movies);
  return (
    <div className='movie__carousel__container'>
      <Carousel>
        {
          movies?.map((movie) => {
            return (
              <Paper key={movie?.imdbId}>
                <div className="movie__card__container">
                  <div className="movie__card"
                    style={{
                      "--img": `url(${movie?.backdrops[0]})`
                    }}
                  >
                    <div className="movie__detail">
                      <div className="movie__poster">
                        <img src={movie?.poster} atl="" />
                      </div>
                      <div className="movie__title">
                        <h4>{movie?.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Hero