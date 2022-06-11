import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Assets/logo.png';
import resume from './Assets/Resume.pdf'
import { BsFillArrowDownSquareFill, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

const Blog = () => {
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }
    return (
        <div>
            <header>
                <div className={color ? 'menubar menubar-bg' : 'bg-[#131313]'}>
                    <div className='navbar w-[85%] mx-auto'>
                        <div class="navbar-start">
                            <div class="dropdown">
                                <label tabindex="0" class="btn text-white btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a href='/'>Home</a></li>
                                    <li><a href='/'>About</a></li>
                                    <li><a href='/'>Service</a></li>
                                    <li><a href='/'>Portfolio</a></li>
                                    <li><a href='/'>Contact</a></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                </ul>
                            </div>
                            <a href='/'><img src={logo} className='w-20' alt="" /></a>
                        </div>
                        <div class="navbar-center hidden lg:flex">
                            <ul class="menu menu-horizontal p-0 text-white">
                                <li><a href='/'>Home</a></li>
                                <li><a href='/'>About</a></li>
                                <li><a href='/'>Service</a></li>
                                <li><a href='/'>Portfolio</a></li>
                                <li><a href='/'>Contact</a></li>
                                <li><Link to='/blog'>Blog</Link></li>

                            </ul>
                        </div>
                        <div class="navbar-end">
                            <a class="btn btn-primary text-white" href={resume}><span className='mr-2'>Download Resume</span> <BsFillArrowDownSquareFill></BsFillArrowDownSquareFill></a>
                        </div>
                    </div>
                </div>
            </header>
            <div >

                <h2 className='mt-10 py-24 text-7xl text-center'>Coming Soon</h2>
            </div>

            <div style={{

                background: "linear-gradient(59deg, rgba(22,16,15,1) 18%, rgba(5,38,2,1) 86%)"
            }} class="">
                <div className='p-10 w-[85%] text-base-content mx-auto grid grid-cols-4'>
                    <div className=''>
                        <div className='grid grid-cols-2 items-center justify-items-start'>
                            <img className='w-20' src={logo} alt="" />
                            <span className='text-xl text-left ml-[-30%] font-bold text-white'>M.Murad</span>
                        </div>
                        <p className='text-white'>Welcome to my portfolio website here I provide all the listed services. I worked as a WordPress Developer, React Developer, MERN Developer. I always focus on my client satisfaction and complete on time</p>
                    </div>
                    <div className='w-[60%] text-white mx-auto grid grid-cols-1'>
                        <span class="footer-title">Services</span>
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </div>
                    <div className='w-[60%] text-white mx-auto grid grid-cols-1'>
                        <span class="footer-title">Company</span>
                        <a href='#about' class="link link-hover">About us</a>
                        <a href='#contact' class="link link-hover">Contact</a>
                        <a href='#portfolio' class="link link-hover">Portfolio</a>
                        <a href='#experience' class="link link-hover">Experience</a>
                    </div>

                    <div>
                        <span class="footer-title text-white">Newsletter</span>
                        <div class="form-control w-80">
                            <label class="label">
                                <span class="label-text text-white">Enter your email address</span>
                            </label>
                            <div class="relative">
                                <input type="text" placeholder="username@site.com" class="input input-bordered w-full pr-16" />
                                <button class="btn btn-primary absolute top-0 right-0 rounded-l-none text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div style={{

                background: "linear-gradient(59deg, rgba(22,16,15,1) 18%, rgba(17,13,2,1) 47%, rgba(1,6,1,1) 86%)"
            }} class=" ">
                <div className='footer w-[85%] mx-auto items-center p-4 text-neutral-content'>
                    <div class="items-center text-white grid-flow-col">
                        <p>Copyright © 2022 - All right reserved</p>
                    </div>
                    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <a><BsFacebook></BsFacebook>
                        </a>
                        <a><BsTwitter></BsTwitter></a>
                        <a><BsLinkedin></BsLinkedin></a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Blog;