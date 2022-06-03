import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from 'react-scroll'

import logo from '../assets/logo.svg'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    return(
        <div className='fixed w-full h-20 flex justify-between items-center px-4'>
            <div className='w-[50px] z-10'>
                <img src={logo} alt="logoImg"/>
            </div>

            {/* Menu */}
                <ul className='hidden md:flex'>
                    <li className='hover:text-light-green duration-300'>
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='hover:text-light-green duration-300'>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li className='hover:text-light-green duration-300'>
                        <Link to="skills" smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li className='hover:text-light-green duration-300'>
                        <Link to="work" smooth={true} duration={500}>Work</Link>
                    </li>
                    <li className='hover:text-light-green duration-300'>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>

            {/* Hamburger */}
            <div className='md:hidden z-10' onClick={handleNav}>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile menu */}
            <ul className={ !nav
                    ? 'hidden'
                    : 'absolute top-0 left-0 w-full h-screen bg-dark-blue flex flex-col justify-center items-center'}
            >
                <li className='py-6 text-4xl hover:text-light-green duration-300'>
                    <Link onClick={handleNav} to="home" smooth={true} duration={500}>Home</Link>
                </li>
                <li className='py-6 text-4xl hover:text-light-green duration-300'>
                    <Link onClick={handleNav} to="about" smooth={true} duration={500}>About</Link>
                </li>
                <li className='py-6 text-4xl hover:text-light-green duration-300'>
                    <Link onClick={handleNav} to="skills" smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='py-6 text-4xl hover:text-light-green duration-300'>
                    <Link onClick={handleNav} to="work" smooth={true} duration={500}>Work</Link>
                </li>
                <li className='py-6 text-4xl hover:text-light-green duration-300'>
                    <Link onClick={handleNav} to="contact" smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            {/*  Social icons  */}
            <div className='hidden lg:flex flex-col fixed top-[35%] left-0'>
                <ul>
                    <li className='w-40 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-linkedin'>
                        <a className='w-full items-center flex justify-between' href="https://www.linkedin.com/in/saidakbarz/">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-40 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-github'>
                        <a className='w-full items-center flex justify-between' href="https://github.com/saidakbar99">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-40 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-telegram'>
                        <a className='w-full items-center flex justify-between' href="https://t.me/saidakbarz">
                            Telegram <FaTelegram size={30}/>
                        </a>
                    </li>
                    <li className='w-40 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-mail'>
                        <a className='w-full items-center flex justify-between' href="mailto:saidakbar.dev@gmail.com">
                            Mail <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-40 h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-resume'>
                        <a className='w-full items-center flex justify-between' href="/">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar