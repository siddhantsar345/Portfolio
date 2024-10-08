import logo from "../assets/SiddhantSarLogo.jpg"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"

const Navbar= ()=>{
    return (
        <nav className="mb-20 flex flex-col md:flex-row items-center justify-between py-6">
          {/* Logo Section */}
          <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="h-12 w-auto p-3 md:h-16 md:w-auto md:p-0" />
          </div>
          
          {/* Social Icons Section */}
          <div className="mt-4 md:mt-0 flex items-center justify-center gap-4 text-xl md:text-2xl">
            <a href="https://www.linkedin.com/in/siddhant-sar/">
              <FaLinkedin />
            </a>
            <a href="https://github.com/siddhantsar345">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/siddhant__sar/">
              <FaInstagram />
            </a>
            <a href="https://x.com/sar_siddhant">
              <FaSquareXTwitter />
            </a>
          </div>
        </nav>
      );
    }
export default Navbar;