import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';

type Series = {
  id: number;
  mainImage: string;
  type: string;
}

const TVSeries = () => {
    const [series, setSeries] = useState<Series[] | null>(null);

    useEffect(() => {
      fetch('./api/movies')
        .then(res => res.json())
        .then(json => setSeries(json.movies))
        .catch(err => console.log(err));
    }, []);
  
    const filteredSeries = series && series.filter((series) => series.type.includes("tvseries"));
  
    return (
      <div className="series-container-wrapper mt-12">
        <div className="series-container">
        <h1 className='w-11/12 sm:text-sm md:text-md lg:text-lg xl:text-xl sm:py-2 lg:py-4 m-auto home-header border-b-2'>TV Shows</h1> 
          <div className="movie-content w-11/12 m-auto p-8 flex flex-wrap justify-center gap-2">
              {filteredSeries && filteredSeries.length > 0 ? (
                  filteredSeries.map((series: Series) => (
                          <Card 
                              key={series.id} 
                              id={series.id} 
                              mainImage={series.mainImage} 
                          />
                  
                  ))
              ) : (
                  <div>No Series</div>
              )} 
          </div>
        </div>
        <div className='footer'>
          <Footer/>
        </div>
      </div>
    );
};

export default TVSeries;
