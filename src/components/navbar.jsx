import logo from "../assets/SiddhantSarLogo.jpg"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"

const Navbar= ()=>{
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" className="h-50 w-40 p-7"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/siddhant-sar/">
            <FaLinkedin/></a>
            <a href="https://github.com/siddhantsar345">
            <FaGithub/></a>
            <a href="https://www.instagram.com/siddhant__sar/">
            <FaInstagram/></a>
            <a href="https://x.com/sar_siddhant">
            <FaSquareXTwitter/></a>
        </div>
    </nav>
};

export default Navbar;