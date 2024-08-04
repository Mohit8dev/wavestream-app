
import {Link} from 'react-router-dom';
import imdblogo from './Images/imdb-logo.webp';
import rtlogo from './Images/Rotten_Tomatoes.webp';
import '../../App.css';
import { FaPlay } from 'react-icons/fa';

type BannerProps = {
    id: number;
    mainImage: string;
    title?: string;
    duration: string;
    imdb: string;
    rottenTomatoesRating: string;
    year: string;
}

const Banner = (props: BannerProps) => {
    const {id , mainImage, title, duration, imdb, rottenTomatoesRating, year} = props;

  return (
    <div className='banner-wrapper '>
        <div className='Banner-content relative' key={id}>
            <div className='banner-image w-full max-h-[44rem] opacity-70 object-cover'>
                <img src={mainImage} alt='banner' className='w-full h-full bg-cover' />
            </div>  
            <div className='banner-info absolute bottom-3 left-3'>
                <p className='sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-teko'>{title} ({year})</p>
                <p className='sm:text-[11px] md:text-[13px] sm:p-0 md:p-1'>{duration}</p>
                <p className='flex items-center sm:text-[11px] md:text-[13px] sm:p-0 md:p-1'><img src={imdblogo} alt='imdb' className='sm:w-4 sm:h-[12px] mx-1'/>  {imdb}</p>
                <p className='flex items-center sm:text-[11px] md:text-[13px] sm:p-0 md:p-1'><img src={rtlogo} alt='imdb' className='sm:w-4 sm:h-[15px] mx-1'/>  {rottenTomatoesRating}</p>
            </div>
            <div className='play-button absolute sm:bottom-2 sm:right-2 md:bottom-3 md:right-3'>
                <Link to={`/detailPage/${id}`} className='play z-20'>
                <button className='sm:text-[10px]  md:text-[12px] sm:px-3 sm:py-1 sm:border-[1px] px-6 py-2 flex items-center gap-1 hover:text-blue-500 hover:border-blue-500 text-white cursor-pointer border-2 border-white rounded-3xl'><FaPlay /> Watch Now </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Banner;