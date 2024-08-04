
import {Link} from 'react-router-dom';

type BookmarkCardProps = {
    id: number;
    bannerImage: string;
    title?: string;
}

const BookmarkCard = (props: BookmarkCardProps) => {
    const {id , bannerImage, title} = props;

  return (
    <div className='card-wrapper duration-1000 ease-linear transition'>
        <div className='card-content cursor-pointer'>
        <Link to={`/detailPage/${id}`}>
            <div className='card-image sm:w-48 sm:h-28 md:w-56 md:h-32 lg:w-72 lg:h-40 xl:w-80 xl:h-44 rounded-lg overflow-hidden hover:border-2 border-white object-cover relative' key={id}>
                <img  className='image w-full h-full overflow-hidden' src={bannerImage} alt='mainImage'/>
                <h2 className='absolute opacity-80 bottom-0 right-1'>{title}</h2>
            </div>
        </Link>
        </div>
    </div>  
  )
}

export default BookmarkCard;