import { Link, NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const { pathname } = useLocation();

  const isDashboard = () =>
    pathname === "/dashboard" ||
    pathname === "/dashboard/wishlist" ||
    pathname === "/dashboard/cart" ||
    /^\/product\/\d+$/.test(pathname) ||
    pathname === "/statistics"||
    pathname === "/contact";

  const isCategory = () => /^\/category\/[^/]+$/.test(pathname);
  const isHome = () => pathname === "/";

  return (
    <div
      className={`${isDashboard() ? "bg-[#F7F7F7] " : ""} 
                  ${isHome() ? "bg-[#9538E2] md:mx-9" : ""} 
                  md:mt-9 md:rounded-tr-2xl md:rounded-tl-2xl relative 
                  2xl:container 2xl:mx-auto
                  ${isCategory() ? "bg-[#9538E2] md:mx-9" : ""}`}
    >
      <div className="navbar container mx-auto py-5">
        <div className="navbar-start">
         
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-7 w-7 ${isDashboard() ? "text-black" : "text-white"}`} 
               
                
               
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {["Home", "Statistics", "Dashboard", "Contact"].map((text) => (
                <li key={text}>
                  <NavLink
                    to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive ? "bg-gray-400 text-white px-4 py-2 rounded-lg" : "text-inherit"
                    }
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

         
          <Link to="/" className={`${isDashboard() ? "text-black" : "text-white"} font-bold text-xl`}>
            Gadget Heaven
          </Link>
        </div>

       
        <div className="navbar-center hidden lg:flex">
          <ul
            className={`${isDashboard() ? "text-black" : "text-white"} 
                        menu menu-horizontal px-1 font-semibold`}
          >
            {["Home", "Statistics", "Dashboard", "Contact"].map((text) => (
              <li key={text}>
                <NavLink
                  to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive ? "bg-gray-400 text-white px-4 py-2 rounded-lg" : "text-inherit"
                  }
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        
        <div className="navbar-end flex text-black gap-3 text-xl">
          <button className="size-10 rounded-full border-black border p-2 flex justify-center items-center bg-white">
            <IoCartOutline />
          </button>
          <button className="size-10 rounded-full border-black border p-2 flex justify-center items-center bg-white">
            <i className="ri-heart-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
