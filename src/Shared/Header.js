import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png';
import './Header.css'
import resume from '../Assets/Resume.pdf'
import { useState } from 'react';
import { BsFillArrowDownSquareFill } from "react-icons/bs";



const Header = () => {
    const [color, setColor] = useState(false);

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)


    return (
        <div className={color ? 'menubar menubar-bg' : 'menubar'}>
            <div className='navbar w-[85%] mx-auto'>
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn text-white btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='\home'>Home</Link></li>
                            <li><Link to='\about'>About</Link></li>
                            <li><Link to='\service'>Service</Link></li>
                            <li><Link to='\portfolio'>Portfolio</Link></li>
                            <li><Link to='\contact'>Contact</Link></li>
                            <li><Link to='\blog'>Blog</Link></li>
                        </ul>
                    </div>
                    <a href='\'><img src={logo} className='w-20' alt="" /></a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0 text-white">
                        <li><Link to='\home'>Home</Link></li>
                        <li><Link to='\about'>About</Link></li>
                        <li><Link to='\service'>Service</Link></li>
                        <li><Link to='\portfolio'>Portfolio</Link></li>
                        <li><Link to='\contact'>Contact</Link></li>
                        <li><Link to='\blog'>Blog</Link></li>

                    </ul>
                </div>
                <div class="navbar-end">
                    <a class="btn btn-primary text-white" href={resume}><span className='mr-2'>Download Resume</span> <BsFillArrowDownSquareFill></BsFillArrowDownSquareFill></a>
                </div>
            </div>
        </div>
    );
};

export default Header;