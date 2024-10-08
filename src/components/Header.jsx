import { Link } from "react-router-dom"
import Navbar from '../assets/navbar.png'

const Header = () => {
  return (
    <div className="w-full sticky flex items-center justify-between px-10 py-8 bg-no-repeat bg-cover" style={{backgroundImage: `url(${Navbar})`}}>
        <h1 className="text-white font-bold text-5xl uppercase font-robotech">CUBE<span className="text-orange-400">1ST</span>Studio</h1>
        <div className="flex items-center gap-12 text-white">
            <Link to={`/`}>Products</Link>
            <Link to={`/portfolio`}>Portfolio</Link>
            <Link to={`/contact`}>Contact</Link>
            <Link to={`/location`}>Location</Link>
        </div>
    </div>
  )
}

export default Header