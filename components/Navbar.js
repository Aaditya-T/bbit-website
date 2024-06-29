import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="..\BBIT\bbit-website\public\home\bbit.png" alt="Logo" className="logo" />
      <ul className="navbar">
        <li className="home"><a href="/">Home</a></li>
        <li className="admission"><a href="/admission">Admission</a></li>
        <li className="placement"><a href="/placement">Placement</a></li>
        <li className="about"><a href="/about">About</a></li>
        <li className="contact"><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};