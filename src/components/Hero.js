import React from 'react';
import './Hero.css';
import Carousel  from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Reviews from './Reviews';
import Button from 'react-bootstrap/Button';


const Hero = ({ movies }) => {
  // console.log(movies);

  const navigate = useNavigate();

  function goToReviews(movieId) {
    navigate(`/reviews/${movieId}`)
  }

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
                      <div className="movie__buttons__container">
                        <Link
                          to={`/Trailer/${movie?.trailerLink.substring(movie?.trailerLink.length-11)}`}
                        >
                          <div className="play__button__icon__container">
                            <FontAwesomeIcon    className='play__button__icon'
                              icon={faCirclePlay}
                            />
                          </div>
                        </Link>
                        <div className="movie__review__button__container">
                          <Button 
                            variant="info"
                            onClick={() => goToReviews(movie.imdbId)}
                          >Reviews</Button>
                        </div>
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