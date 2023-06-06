import PropTypes from 'prop-types';

// project imports
import { TCollection } from './collections';
import { TProductionCompany } from './companies';
import { TImage, TLanguage, TProductionCountry } from './configuration';
import { TGenre } from './genres';
import { TCredits } from 'types/credits';

export const TMovie = {
  adult: PropTypes.bool,
  backdrop_path: PropTypes.string,
  genre_ids: PropTypes.arrayOf(PropTypes.number),
  id: PropTypes.number,
  original_language: PropTypes.string,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.bool,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
};

export const TMovieImages = {
  backdrops: PropTypes.arrayOf(PropTypes.shape(TImage)),
  posters: PropTypes.arrayOf(PropTypes.shape(TImage)),
  logos: PropTypes.arrayOf(PropTypes.shape(TImage)),
};

export const TMovieDetails = {
  adult: PropTypes.bool,
  backdrop_path: PropTypes.string,
  belongs_to_collection: PropTypes.shape(TCollection),
  budget: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.shape(TGenre)),
  homepage: PropTypes.string,
  id: PropTypes.number,
  imdb_id: PropTypes.string,
  original_language: PropTypes.string,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string,
  production_companies: PropTypes.arrayOf(PropTypes.shape(TProductionCompany)),
  production_countries: PropTypes.arrayOf(PropTypes.shape(TProductionCountry)),
  release_date: PropTypes.string,
  revenue: PropTypes.number,
  runtime: PropTypes.number,
  spoken_languages: PropTypes.arrayOf(PropTypes.shape(TLanguage)),
  status: PropTypes.string,
  tagline: PropTypes.string,
  title: PropTypes.string,
  video: PropTypes.bool,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
  credits: PropTypes.shape(TCredits),
  images: PropTypes.shape(TMovieImages),
};

export const TMovieList = {
  dates: PropTypes.shape({
    maximum: PropTypes.string,
    minimum: PropTypes.string,
  }),
  page: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.shape(TMovie)),
  total_pages: PropTypes.number,
  total_results: PropTypes.number,
};
