import { mySocials } from "../constants";
const Footer = () => {
  return (
    <footer className="w-full c-space py-6">
      {/* Separator Line */}
      <div className="mb-6 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Main Footer Content */}
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        {/* Brand Section - Top on mobile, Left on desktop */}
        <div className="flex justify-center lg:justify-start">
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Kumar
          </a>
        </div>

        {/* Social Links - Center on mobile, Right on desktop */}
        <div className="flex justify-center gap-4 lg:order-3">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              className="transition-transform hover:scale-110 hover:-translate-y-1 duration-200"
            >
              <img
                src={social.icon}
                className="w-5 h-5 md:w-6 md:h-6 hover:opacity-80 transition-opacity"
                alt={social.name}
              />
            </a>
          ))}
        </div>

        {/* Copyright - Bottom on mobile, Center on desktop */}
        <div className="flex justify-center lg:order-2">
          <p className="text-sm text-neutral-400 text-center">
            © {new Date().getFullYear()} Kuldeep. All rights reserved.
          </p>
        </div>
      </div>

      {/* Mobile Only - Additional Links */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 pt-4 border-t border-neutral-800 lg:hidden">
        <div className="flex gap-4 text-xs text-neutral-500">
          <a href="#" className="hover:text-neutral-300 transition-colors">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:text-neutral-300 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Desktop Only - Legal Links */}
      <div className="hidden lg:flex items-center justify-center gap-4 mt-4 pt-4 border-t border-neutral-800">
        <div className="flex gap-4 text-xs text-neutral-500">
          <a href="#" className="hover:text-neutral-300 transition-colors">
            Terms & Conditions
          </a>
          <span>|</span>
          <a href="#" className="hover:text-neutral-300 transition-colors">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:text-neutral-300 transition-colors">
            Made with ❤️ Kumar
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
