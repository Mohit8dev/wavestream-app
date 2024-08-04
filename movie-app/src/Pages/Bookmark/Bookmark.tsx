import { useEffect, useState } from "react";
import BookmarkCard from './BookmarkCard';

type Info = {
  id: number;
  bannerImage: string;
  title: string;
};

const BookmarkContainer = () => {
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
    <div className="bookmark-wrapper h-full sm:px-0 md:p-4">
      <div className="bookmark-content flex">
        <div className="details m-auto flex justify-center gap-2 sm:w-[635px] md:w-[756px] lg:w-[930px] xl:w-11/12 2xl:w-11/12 2xl:justify-start sm:p-2 xl:gap-4 flex-wrap p-10">
            {bookmarkedMovies.map((movie) => (
              <BookmarkCard key={movie.id} id={movie.id} bannerImage={movie.bannerImage} title={movie.title} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookmarkContainer;
