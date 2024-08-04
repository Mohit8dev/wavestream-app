import { useState } from "react"
import { IoMenu, IoPersonSharp } from "react-icons/io5"
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

  const[menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <div className="Navbar-container w-full p-1 text-white bg-lightgray fixed top-0 z-50">
      <div className="Navbar-content flex justify-between items-center">
        <div className="logo-wrapper flex items-center">
          <div className="logo py-2 px-3 text-cyan-400 sm:text-lg md:text-xl lg:text-2xl xl:text-[25px] font-kalam"><Link to={'/'}>WaveStream</Link></div>
        </div>
        <div className={`menu-wrapper ${menu ? 'sm:top-12 sm:absolute sm:right-0' : 'sm:-top-44 sm:absolute sm:right-0'} md:relative md:top-auto md:right-auto transition-all duration-500`}>
          <ul className="list flex sm:text-[12px] md:text-md lg:text-[14px] xl:text-[15px] sm:pr-12 sm:pl-4 sm:pt-20 sm:pb-6 md:p-2 w-full sm:flex-col md:flex-row sm:bg-lightgray">
            <li className="px-2 hover:text-cyan-400"><NavLink to="/">Home</NavLink></li>
            <li className="px-2 hover:text-cyan-400"><NavLink to="/movies">Movies</NavLink></li>
            <li className="px-2 hover:text-cyan-400"><NavLink to="/tvseries">TV Series</NavLink></li>
            <li className="px-2 hover:text-cyan-400"><NavLink to="/bookmark">Bookmarks</NavLink></li>
          </ul>
        </div>
        <div className="flex">
          <div className={`auth-wrapper ${menu ? 'sm:top-20 sm:right-20' : 'sm:-top-44 sm:right-20'} sm:absolute md:static transition-all duration-500 delay-75`}>
            <div className="auth p-2 mr-2 sm:text-[12px] md:text:md lg:text-lg border-[1px] rounded-full">
              <Link to={'/auth'}><IoPersonSharp /></Link>
            </div>
          </div>
          <div className="hamburger-menu">
            <button className="p-2 sm:text-xl  sm:block md:hidden" onClick={toggleMenu}><IoMenu /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
