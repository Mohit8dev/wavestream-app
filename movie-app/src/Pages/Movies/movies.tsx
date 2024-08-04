import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import 'react-multi-carousel/lib/styles.css';
import Footer from '../Footer/Footer';

type Movie = {
  id: number;
  mainImage: string;
  type: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    fetch('./api/movies')
      .then(res => res.json())
      .then(json => setMovies(json.movies))
      .catch(err => console.log(err));
  }, []);

  const filteredMovies = movies && movies.filter((movie) => movie.type.includes("movie"));

  return (
    <div className="movie-container-wrapper mt-12">
      <div className="movie-container">
      <h1 className='w-11/12 sm:text-sm md:text-md lg:text-lg xl:text-xl sm:py-2 lg:py-4 m-auto home-header border-b-2'>Movies</h1>  
      <div className="movie-content w-11/12 m-auto p-8 flex flex-wrap justify-center gap-2">
            {filteredMovies && filteredMovies.length > 0 ? (
                filteredMovies.map((movie: Movie) => (
                        <Card 
                            key={movie.id} 
                            id={movie.id} 
                            mainImage={movie.mainImage} 
                        />
                ))
            ) : (
                <div>Loading...</div>
            )} 
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Movies;
