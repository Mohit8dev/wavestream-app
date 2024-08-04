
import {Link} from 'react-router-dom';

type CardProps = {
    id: number;
    mainImage: string;
    title?: string;
}

const Card = (props: CardProps) => {
    const {id , mainImage} = props;

  return (
    <div className='card-wrapper hover:scale-105 ease-linear transition'>
        <div className='card-content cursor-pointer'>
        <Link to={`/detailPage/${id}`}>
            <div className='card-image sm:w-36 sm:h-48 md:w-44 md:h-60 xl:w-56 xl:h-80 object-cover' key={id}>
                <img  className='image w-full h-full m-2' src={mainImage} alt='mainImage'/>
            </div>
        </Link>
        </div>
    </div>
  )
}

export default Card;