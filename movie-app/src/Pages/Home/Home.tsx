import Card from '../Card/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from 'react';
import BookmarkContainer from '../Bookmark/Bookmark';
import Footer from '../Footer/Footer';
import Banner from './Banner';


type Movie = {
  id: number;
  mainImage: string;
  type: string;
  rating: number;
  bannerImage: string;
  title: string;
  duration: string;
  rottenTomatoesRating: string;
  imdb: string;
  year: string;
}

const Home = () => {
  const [moviesOrSeries, setMoviesOrSeries] = useState<Movie[] | null>(null);

  useEffect(() => {
    fetch('./api/movies')
      .then(res => res.json())
      .then(json => setMoviesOrSeries(json.movies))
      .catch(err => console.log(err));
  }, []);

  const filteredMovies = moviesOrSeries && moviesOrSeries.filter((movie) => movie.type.includes("movie"));

  const filteredSeries = moviesOrSeries && moviesOrSeries.filter((series) => series.type.includes("tvseries"));

  const filterOnRating = moviesOrSeries && moviesOrSeries.filter((moviesOrSeries) => moviesOrSeries.rating >= 8 && moviesOrSeries.rating <= 10);
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 3
    }
  };

  const banner = {
    AllDisplay: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  return (
    <div className="Home-container-wrapper mt-4">
      <div className="Home-container">
          <div className='Banner-section pt-8'>
            <div className='Banner-content-wrapper m-auto sm:w-full md:full lg:full xl:w-3/4 '> 
              <div className='Popular-section m-auto border-2 border-black overflow-contain w-full'>
              <Carousel 
              responsive={banner} 
              infinite={true} 
              showDots={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              arrows={false}
              >
                {
                  filterOnRating && filterOnRating.length > 0 ? (
                    filterOnRating.map((ratingFilter: Movie) => (
                        <Banner 
                        mainImage={ratingFilter.bannerImage} 
                        title={ratingFilter.title} 
                        id={ratingFilter.id}
                        duration={ratingFilter.duration}
                        imdb={ratingFilter.imdb}
                        rottenTomatoesRating={ratingFilter.rottenTomatoesRating}
                        year={ratingFilter.year}
                        />
                    ))
                  ) : (
                    <h1>Loading...</h1>
                  )
                }
                </Carousel>
              </div>
            </div>
          </div>
          <div className='Movie-section'>
            <h1 className='sm:text-[12px] md:text-[13px] lg:text-[15px] xl:[18px] sm:pt-2 w-11/12 m-auto home-header'>Movies</h1>
            <div className="movie-container-wrapper">
              <div className="movie-container">
              <div className="movie-content sm:w-full sm:p-2  md:w-[768px] lg:w-[1020px] xl:w-[1200px] 2xl:w-11/12 m-auto py-8 px-10 gap-4 ">
              <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} className='w-auto'>
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
              </Carousel>
              </div>
              </div>
            </div>
          </div>
          <div className='Tvseries-container'>
            <h1 className='sm:text-[12px] md:text-[13px] lg:text-[15px] xl:[18px] sm:pt-2 w-11/12 m-auto home-header'>Tv Series</h1>
            <div className="series-container-wrapper">
              <div className="series-container">
              <div className="series-content sm:w-full sm:p-2  md:w-[768px] lg:w-[1020px] xl:w-[1200px] 2xl:w-11/12 m-auto py-8 px-10 gap-4 ">
                <Carousel responsive={responsive} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} className='w-auto'>
                  {filteredSeries && filteredSeries.length > 0 ? (
                      filteredSeries.map((series: Movie) => (
                              <Card 
                                  key={series.id} 
                                  id={series.id} 
                                  mainImage={series.mainImage} 
                              />
                      
                      ))
                  ) : (
                      <div>Loading...</div>
                  )} 
                </Carousel>
                </div>
              </div>
            </div>
          </div>
          <div className='Bookmark-container'>
            <div className='bookmark-content w-full'>
            <h1 className="sm:text-[12px] md:text-[13px] lg:text-[15px] xl:[18px] sm:pt-2 w-11/12 m-auto home-header">Bookmarks</h1>
                <BookmarkContainer />
            </div>
          </div>
          <div className='footer-container-wrapper'>
            <Footer />
          </div>
      </div>
    </div>
  );
};

export default Home;
