import React from "react";

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary-40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="#"
            className="text-xl font-bold transition-colors text-netural-400 hover:text-white"
          >
            Kumar
          </a>
          <button>
            <img src="assets/menu.svg" alt="toggle" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
