import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center bg-neutral-600 bg-opacity-35 text-neutral-400 py-2 ">
      <div className="flex items-center justify-center gap-4 cursor-pointer">
        <Link to="/about">Hakkımızda</Link>
        <Link to="/contact">İletişim</Link>
      </div>
      <p className="text-sm">Created By CeyDev © </p>
    </footer>
  );
};

export default Footer;
