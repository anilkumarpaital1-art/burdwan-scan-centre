import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.png";

import "../../styles/navbar.css";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Packages",
    path: "/packages",
  },
  {
    name: "Notice Board",
    path: "/notice-board",
  },
  {
    name: "Jobs",
    path: "/job-vacancies",
  },
];

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 30);

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  useEffect(() => {

    setMenuOpen(false);

  }, [location.pathname]);

  return (

    <header
      className={`navbar ${
        scrolled ? "scrolled" : ""
      }`}
    >

      <div className="nav-container">

        {/* LOGO */}

        <Link
  to="/"
  className="logo"
  onClick={() => {

    if (location.pathname === "/") {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }

  }}
>

          <img
            src={logo}
            alt="Burdwan Scan Centre"
            className="logo-img"
          />

          <div className="logo-text">

            <span>
              Burdwan Scan Centre
            </span>


          </div>

        </Link>

        {/* NAVIGATION */}

        <nav
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >

          {navLinks.map((link) => (

            <Link
              key={link.path}
              to={link.path}
              className={
                location.pathname ===
                link.path
                  ? "active-link"
                  : ""
              }
            >
              {link.name}
            </Link>

          ))}

          {/* CONTACT */}

          <a
            href="/#contact"
            className="contact-link"
          >
            Contact
          </a>

          {/* CTA */}

          <Link
            to="/appointment"
            className="nav-btn"
          >
            Book Appointment
          </Link>

        </nav>

        {/* MOBILE MENU */}

        <button
          className={
            menuOpen
              ? "hamburger open"
              : "hamburger"
          }
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          aria-label="Menu"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>

    </header>

  );
}