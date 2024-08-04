import { useState, useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import imdblogo from './Images/imdb-logo.webp';
import rtlogo from './Images/Rotten_Tomatoes.webp';
import Trailor from "../../Components/trailor";
import { FaPlay } from "react-icons/fa";
import { IoBookmark, IoBookmarkOutline, IoClose } from "react-icons/io5";
import Card from "../Card/Card";

type Info = {
  id: number;
  mainImage: string;
  bannerImage?: string;
  title?: string;
  Description?: string;
  Director?: string;
  year?: string;
  rated?: string;
  type?: string;
  actors?: string[];
  video: string;
  imdb: string;
  rottenTomatoesRating: string; 
  duration: string;
  rating: number;
};

type StateType = {
  trailor: boolean;
  banner: boolean;
};

type ActionType = {
  type: string;
};

const Reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "playtrailor":
      return { trailor: true, banner: false };
    case "closetrailor":
      return { trailor: false, banner: true };
    default:
      return state;
  }
};

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [suggestions, setSuggestions] = useState<Info[] | null>(null);
  const [state, dispatch] = useReducer(Reducer, {trailor: false, banner: true})
  const [movie, setMovie] = useState<Info | null>(null);
  const [items, setItems] = useState<Info[]>(() => {
    const storedItems = localStorage.getItem("bookmarkedMovies");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    if (id) {
      fetch('/api/movies')
        .then(res => res.json())
        .then(json => {
          setSuggestions(json.movies);
          const movieDetail = json.movies.find((movie: Info) => movie.id === Number(id));
          if (movieDetail) {
            setMovie(movieDetail);
          } else {
            console.log(`Movie with id ${id} not found`);
          }
        })
        .catch(err => console.error("Error fetching movie details:", err));
    }
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const filterOnRating = suggestions && suggestions.filter((suggestions) => suggestions.rating >= 8 && suggestions.rating <= 10);

  const isBookmarked = items.some(item => item.id === movie.id);

  const bookmark = (movie: Info) => {
    let updatedItems;
    if (isBookmarked) {
      updatedItems = items.filter(item => item.id !== movie.id);
      // alert(`${movie.title} has been removed from bookmarks!`);
    } else {
      updatedItems = [...items, movie];
      // alert(`${movie.title} has been bookmarked!`);
    }
    setItems(updatedItems);
    localStorage.setItem("bookmarkedMovies", JSON.stringify(updatedItems));
  };

  return (
    <div className="detail-wrapper sm:mt-12 lg:mt-14">
      <div className="detail-content flex flex-col items-center">
        <div className="banner-image w-full relative  max-w-[1000px] m-auto">
          {state.trailor && <Trailor id={movie.id} title={movie.title} video={movie.video} />}
          {state.banner && 
              <div className="content-container max-w-[1000px] shadow-md shadow-slate-600 m-auto">
                <div className="content-image w-full relative">
                <img src={movie.bannerImage} alt={movie.title} className="w-full shadow-inner" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <button className="play-button sm:text-2xl sm:p-3 border-2 rounded-full hover:border-cyan-400  hover:text-cyan-400"><FaPlay className="pl-1" /></button>
                  </div>
                </div>
              </div>
          }
          {state.trailor && (
            <div className="close-trailor-button absolute top-3 right-0 px-2 z-10 bg-transparent rounded-full">
              <button onClick={() => dispatch({ type: "closetrailor" })} className="text-slate-400 text-xl"><IoClose /></button>
            </div>
          )}
        </div>
        <div className="details-container max-w-[1000px] m-auto p-1">
          <div className="details-content flex bg-lightgray sm:m-2 md:m-4">
            <div className="detail-poster w-1/4 flex flex-col justify-center gap-1">
              <img src={movie.mainImage} alt={movie.title} className="w-full sm:p-1 md:p-2" />
              <div className="pb-2 px-2">
                <button className="button-rating w-full flex justify-center items-center sm:text-[11px] sm:p-0 md:p-1 border-[1px] gap-1 border-white hover:text-cyan-400 hover:border-cyan-400" onClick={() => dispatch({ type: 'playtrailor' })}><FaPlay /> Play Trailor</button>
              </div>
            </div>
            <div className="details w-3/4 p-3">
              <div className="details-heading h-full sm:gap-1 md:gap-2 lg:gap-3 xl:gap-4 sm:py-0 md:py-10 flex flex-col sm:justify-center md:justify-start">
                <div className="bookmark flex sm:justify-between">
                  <h1 className="sm:text-sm md:text-md lg:text-2xl xl:text:3xl font-semibold font-raleway">{movie.title}</h1>
                  <button className="sm:text-sm md:text-md lg:text-lg xl:text-xl text-cyan-400 p-2 bg-gray-800 rounded-full" onClick={() => bookmark(movie)}>{isBookmarked ? <IoBookmark className="text-cyan-400"/> : <IoBookmarkOutline />}</button>
                </div>
                <div className="description font-raleway">
                  <h3 className="sm:text-[10px]  md:text-[12px] lg:text-[13px] text-gray-400">{movie.Description}</h3>
                </div>
                <div className="ratings">
                  <ul className="flex gap-3">
                    <li className="sm:text-[9px] sm:px-1 border-[1px]">{movie.rated}</li>
                    <li className="flex items-center">
                      <img src={imdblogo} alt='imdb' className='sm:w-[25px] sm:h-[15px] mx-1'/>
                      <p className="ratings sm:text-[10px] md:text-[11px] lg:text-[13px]">{movie.imdb}</p>
                    </li>
                    <li className="flex items-center">
                      <img src={rtlogo} alt='imdb' className=' sm:w-[15px] sm:h-[15px] w-6 mx-1'/>
                      <p className="ratings sm:text-[10px] md:text-[11px] lg:text-[13px]"> {movie.rottenTomatoesRating}</p>
                    </li>
                  </ul>
                </div>  
                <div className="details-info">
                  <ul className="sm:text-[10px] md:text-[11px] lg:text-[13px] text-cyan-500">
                    <li><span className="text-gray-400 font-raleway">Type: </span>{movie.type}</li>
                    <li><span className="text-gray-400 font-raleway">Release Year: </span>{movie.year}</li>
                    <li><span className="text-gray-400 font-raleway">Duration: </span>{movie.duration}</li>
                    <li><span className="text-gray-400 font-raleway">Director: </span>{movie.Director}</li>
                    <li><span className="text-gray-400 font-raleway">Actors: </span>{movie.actors?.join(', ')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="suggestions-container">
          <div className="suggestions-content">
            <h1 className="bg-cyan-400 sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[15px] sm:p-1 sm:rounded-sm md:p-1 lg:p-2 m-4 inline-block text-black font-raleway font-semibold">Currently Popular</h1>
            <div className="suggestion-box flex flex-wrap justify-center gap-2 max-w-[1000px] p-2">
              {filterOnRating && filterOnRating.length > 0 ? (
                filterOnRating.map((movie: Info) => (
                  <Card id={movie.id} mainImage={movie.mainImage}/>
              ))) : (
                <div>Loading...</div>
              )
              
              }
            </div>
          </div>
        </div> 
        <div className='footer-container-wrapper w-full'>
          <Footer />
        </div> 
      </div>
    </div>
  ); 
};

export default DetailPage;


