import { FaReddit, FaTelegram } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <div className="footer-container bg-lightgray font-sans w-full">
        <div className="footer-content flex flex-row sm:w-full sm:p-10 md:p-16 xl:w-10/12 m-auto xl:px-20 xl:py-20">
            <div className="footer w-1/3 flex flex-col justify-center">
                <h1 className="sm:text-sm md:text-md lg:text-lg xl:text-xl text-xl text-cyan-400 font-kalam">WaveStream</h1>
                <p className="sm:text-[10px] md:text-[12px] xl:text-[14px] text-gray-300">Copyright © WaveStream. All Rights Reserved.</p>
                <p className="sm:text-[10px] md:text-[12px] xl:text-[14px] text-gray-300">Disclaimer: This website is a personal project.</p>
            </div>
            <div className="footer-links w-1/3 flex justify-center">
                <ul className="sm:text-[10px] md:text-[12px] xl:text-[14px]">
                    <li className="text-gray-300"><a href="#">Help</a></li>
                    <li className="text-gray-300"><a href="#">Contact</a></li>
                    <li className="text-gray-300"><a href="#">FAQ</a></li>
                    <li className="text-gray-300"><a href="#">WaveStream App</a></li>
                </ul>
            </div>
            <div className="footer-links w-1/3 flex justify-center">
                <ul className="sm:text-[10px] md:text-[12px] xl:text-[14px]">
                    <li className="text-gray-300 font-bold"><a href="#">Types</a></li>
                    <li className="text-gray-300"><a href="#">Movies</a></li>
                    <li className="text-gray-300"><a href="#">TV Series</a></li>
                </ul>
            </div>
            <div className="footer-socials w-1/3" >
                <ul className="flex justify-center gap-2">
                    <li className="sm:text-[15px] md:text-[18px] lg:text-[25px] sm:px-1 sm:py-[2px] text-2xl px-2 py-1 text-red-600 "><a href="#Reddit"><FaReddit /></a></li>
                    <li className="sm:text-[15px] md:text-[18px] lg:text-[25px] sm:px-1 sm:py-[2px] text-2xl px-2 py-1 text-sky-600"><a href="#Telegram"><FaTelegram /></a></li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
