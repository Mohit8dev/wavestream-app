import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Auth from './Pages/Auth/Auth'
import Home from './Pages/Home/Home';
import './movieServer';
import TVSeries from './Pages/TVSeries/tvseries';
import Movies from './Pages/Movies/movies';
import DetailPage from './Pages/Home/DetailPage';
import BookmarkPage from './Pages/Bookmark/BookmarkPage';

function App() {

  return (
    <div className='App bg-windowgray text-white'>
      <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/tvseries' element={<TVSeries />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/bookmark' element={<BookmarkPage />} />
            <Route path='/detailPage/:id' element={<DetailPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
 