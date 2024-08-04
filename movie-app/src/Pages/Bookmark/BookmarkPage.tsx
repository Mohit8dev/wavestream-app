import { useEffect, useState } from "react";
import BookmarkCard from './BookmarkCard';

type Info = {
  id: number;
  bannerImage: string;
  title: string;
};

const BookmarkPage = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState<Info[]>([]);

  useEffect(() => {
    const storedMovies = localStorage.getItem("bookmarkedMovies");
    if (storedMovies) {
      setBookmarkedMovies(JSON.parse(storedMovies));
    }
  }, []);

  if (bookmarkedMovies.length === 0) {
    return <div className="p-10 font-raleway">Bookmark what you like to watch</div>;
  }
  return (
    <div className="bookmark-wrapper h-svh mt-12">
      <div className="bookmark-content m-auto">
        <div className="heading">
            <h1 className="w-11/12 sm:text-sm md:text-md lg:text-lg xl:text-xl sm:py-2 lg:py-4 m-auto home-header border-b-2">Your Bookmarks</h1>
        </div>
        <div className="details flex m-auto gap-2 justify-center xl:w-11/12 2xl:w-11/12 2xl:justify-start sm:p-2 xl:gap-4 xl:p-10 flex-wrap p-10">
                {bookmarkedMovies.map((movie) => (
                <BookmarkCard key={movie.id} id={movie.id} bannerImage={movie.bannerImage} title={movie.title} />
                ))}
            </div>  
      </div>
    </div>
  );
};

export default BookmarkPage;
