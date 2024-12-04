import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import abc from "../../assets/image/images-removebg-preview (3).png";

const Navbar = () => {
    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5 gap-10">
            {/* Home */}
            <li>
                <Link to={'/'} className="font-bold text-white">Home</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'} className="font-bold text-white">All Product</Link>
            </li>
            <li>
                <Link to={'/cart'} className="font-bold text-white">
                    Cart(0)
                </Link>
            </li>
            {/* Signup */}
            <li>
                <Link to={'/signup'} className="font-bold text-white">Signup</Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-[#2874f0] sticky top-0">
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3">
                {/* left */}
                <div className="left flex items-center py-3 lg:py-0">
                    <Link to={'/'} className="flex items-center">
                        {/* Add the image */}
                        <img 
                            src={abc} 
                            alt="" 
                            className="w-15 h-10 ml-8"
                        />
                        {/* <h2 className="font-bold text-white text-2xl">Shopease</h2> */}
                    </Link>
                </div>

                {/* middle - Search Bar */}
                <div className="hidden lg:flex flex-1 justify-center">
                    <SearchBar />
                </div>

                {/* right */}
                <div className="right flex justify-end lg:space-x-4">
                    {navList}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
