import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Collections", to: "/collections" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="flex items-center justify-between py-5 font-medium relative">
      {/* Logo */}
      <img src={assets.logo} alt="Logo" className="w-36" />

      {/* Desktop Nav */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className="flex flex-col items-center gap-1"
              style={({ isActive }) => ({
                fontWeight: isActive ? "600" : "normal",
              })}
            >
              {({ isActive }) => (
                <>
                  <p className="uppercase">{item.name}</p>
                  {isActive && (
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700" />
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="Search"
          className="w-5 cursor-pointer"
        />

        <div className="group relative">
          <Link to="/login">
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="w-5 cursor-pointer"
            />
          </Link>

          <div className="group-hover:block hidden absolute right-0 pt-4 z-20">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-600 rounded">
              <p className="cursor-pointer hover:text-black">MY PROFILE</p>
              <p className="cursor-pointer hover:text-black">ORDERS</p>
              <p className="cursor-pointer hover:text-black">LOGOUT</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] text-center w-4 h-4 leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          alt="Menu"
          className="w-5 cursor-pointer block sm:hidden"
          onClick={() => setMobileMenuOpen(true)}
        />
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6 p-6">
          {/* Back Button */}
          <div
            className="text-gray-700 cursor-pointer text-sm font-semibold flex items-center gap-4 p-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            BACK
          </div>

          <ul className="flex flex-col gap-4 text-gray-700 text-base">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="block uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
