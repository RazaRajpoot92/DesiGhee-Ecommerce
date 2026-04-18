import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex justify-center bg-green-50 fixed top-0 z-50">
      <div className="w-full max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-semibold text-emerald-700">
          Ghar Ka Ghee
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-emerald-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About Us</a>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-emerald-700 text-2xl"
        >
          ☰
        </button>

        {/* Mobile Menu */}
        {open && (
          <div
            ref={menuRef}
            className="absolute top-16 right-6 w-56 bg-white border border-emerald-100 rounded-2xl shadow-lg p-5 flex flex-col gap-4 text-emerald-800 font-medium md:hidden"
          >
            <a href="#" onClick={() => setOpen(false)}>Home</a>
            <a href="#" onClick={() => setOpen(false)}>Products</a>
            <a href="#" onClick={() => setOpen(false)}>About Us</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;