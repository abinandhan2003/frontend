import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional icons
import Logo from '../img/Logo.png'; 

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-gold-royal shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
         
          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#FFD700] focus:outline-none"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
         
          {/* Logo */}
          <div className="tamil-logo flex items-center">
          
          <div style={{marginLeft:"20px"}} className="text-2xl text-[#FFD700] font-semibold mr-6">
            CHENNAI TALKIES USA
          </div>
          <img src={Logo} alt="Logo" className="w-14 scale-110" />
        </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-[#FFD700] hover:text-white">Home</a>
            <a href="#" className="text-[#FFD700] hover:text-white">About</a>
            <a href="#" className="text-[#FFD700] hover:text-white">Talent</a>
            <a href="#" className="text-[#FFD700] hover:text-white">Events</a>
            <a href="#" className="text-[#FFD700] hover:text-white">Contact Us</a>
            <a
              href="#"
              className="bg-[#FFD700] text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition"
            >
              Upcoming Events
            </a>
          </nav>

         
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-4 pb-4">
            <a href="#" className="text-[#FFD700] hover:text-white">Home</a>
            <a href="#" className="text-[#FFD700] hover:text-white">About</a>
            <a href="#" className="text-[#FFD700] hover:text-white">Talent</a>
            <a href="#" className="text-[#FFD700] hover:text-white">Events</a>
            <a href="#" className="text-[#FFD700] hover:text-white">Contact Us</a>
            <a
              href="#"
              className="bg-[#FFD700] text-black font-semibold px-4 py-2 rounded hover:bg-yellow-400 transition"
            >
              Upcoming Events
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
