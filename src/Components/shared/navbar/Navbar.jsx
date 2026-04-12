import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/books", label: "Listed Books" },
    { to: "/pages-to-read", label: "Pages to Read" },
  ];

  const navLinks = links.map(({ to, label }) => (
    <li key={to}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
            isActive
              ? "text-amber-500 bg-amber-500/10 border-b-2 border-amber-500"
              : "text-neutral-content/70 hover:text-neutral-content hover:bg-neutral-content/10"
          }`
        }
      >
        {label}
      </NavLink>
    </li>
  ));

  return (
    <div className="bg-neutral shadow-lg border-b border-neutral-content/10">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost text-neutral-content">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-neutral border border-neutral-content/10 rounded-box z-50 mt-3 w-52 p-2 shadow-xl gap-1"
            >
              {navLinks}
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="3" y="2" width="8" height="14" rx="1.5" fill="white" opacity=".9"/>
                <rect x="7" y="2" width="8" height="14" rx="1.5" fill="white" opacity=".5"/>
                <rect x="4" y="5" width="5" height="1" rx=".5" fill="#f59e0b"/>
                <rect x="4" y="7.5" width="4" height="1" rx=".5" fill="#f59e0b" opacity=".6"/>
              </svg>
            </div>
            <span
              className="text-xl font-bold text-neutral-content"
              style={{ fontFamily: "'Lora', serif" }}
            >
              Book<span className="text-amber-500">Vibe</span>
            </span>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 p-0">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end gap-2">
          <button className="btn btn-ghost btn-sm text-neutral-content/70 hover:text-neutral-content border border-neutral-content/15 hover:border-neutral-content/30 rounded-lg">
            Sign In
          </button>
          <button className="btn btn-sm bg-amber-500 hover:bg-amber-400 text-neutral border-none rounded-lg font-semibold shadow-md shadow-amber-500/20">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;