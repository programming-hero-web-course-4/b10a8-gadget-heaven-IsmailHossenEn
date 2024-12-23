import React from "react";

const Footer = () => {
  return (
    <div className="bg-white pt-20">
      <div className="pb-9 border-b border-b-[#09080F]/10 w-3/5 mx-auto">
        <h2 className="text-3xl font-bold text-[#09080F] text-center">
          Gadget Heaven
        </h2>
        <p className="text-[#09080F]/60 text-md text-center">
          Leading the way in cutting age technology and innovation.
        </p>
      </div>
      <footer className=" flex items-start justify-between max-w-7xl mx-auto  text-base-content p-10">
        <nav className="flex flex-col gap-3 ">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col gap-3">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col gap-3">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
