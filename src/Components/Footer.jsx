import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p className="font-medium text-[18px]">
            © {new Date().getFullYear()} - All rights reserved. Developed by <a href="https://www.linkedin.com/in/theanikislam1/" target="_blank">Anik</a>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
