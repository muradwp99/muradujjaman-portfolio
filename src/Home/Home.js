import React, { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FaWordpressSimple, FaReact } from "react-icons/fa";
import { GiFlyingTrout } from "react-icons/gi";
import { BsFillArrowDownSquareFill, BsFacebook, BsTwitter, BsLinkedin, BsArrowRight, BsTelephoneForward } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineLocationMarker, HiOutlineMail, } from "react-icons/hi";
import logo from '../Assets/logo.png';
import resume from '../Assets/Resume.pdf'
import banner from '../Assets/Muradbanner.png';
import pcuniverse from '../Assets/pcuniverse.png'
import motoflix from '../Assets/motoflix.png'
import career from '../Assets/careeer.png'
import Evofelogo from '../Assets/Evofe Logo.jpg.png'
import Fiverrlogo from '../Assets/fiverr.png'
import emailjs from "emailjs-com"





const Home = () => {
    const [color, setColor] = useState(false);
    const form = useRef();

    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        }
        else {
            setColor(false)
        }
    }


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8jcetoj', 'template_0ysulto', form.current, 'IMR2IYzjm8PrV3GLX')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    window.addEventListener('scroll', changeColor)
    return (
        <div>

            <header>
                <div className={color ? 'menubar menubar-bg' : 'menubar'}>
                    <div className='navbar w-[85%] mx-auto'>
                        <div class="navbar-start">
                            <div class="dropdown z-50">
                                <label tabindex="0" class="btn text-white btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><a href='/'>Home</a></li>
                                    <li><a href='#about'>About</a></li>
                                    <li><a href='#service'>Service</a></li>
                                    <li><a href='#portfolio'>Portfolio</a></li>
                                    <li><a href='#contact'>Contact</a></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                </ul>
                            </div>
                            <a href='/'><img src={logo} className='w-20' alt="" /></a>
                        </div>
                        <div class="navbar-center hidden lg:flex">
                            <ul class="menu menu-horizontal p-0 text-white">
                                <li><a href='/'>Home</a></li>
                                <li><a href='#about'>About</a></li>
                                <li><a href='#service'>Service</a></li>
                                <li><a href='#portfolio'>Portfolio</a></li>
                                <li><a href='#contact'>Contact</a></li>
                                <li><Link to='/blog'>Blog</Link></li>

                            </ul>
                        </div>
                        <div class="navbar-end">
                            <a class="btn btn-primary hidden lg:flex text-white" href={resume}><span className='mr-2'>Download Resume</span> <BsFillArrowDownSquareFill></BsFillArrowDownSquareFill></a>
                            <a class="btn btn-primary btn-sm lg:hidden text-white" href={resume}><span className='mr-2'>Resume</span> <BsFillArrowDownSquareFill></BsFillArrowDownSquareFill></a>
                        </div>
                    </div>
                </div>
            </header>

            <div id="banner">
                <div class="hero min-h-screen hero-section bg-base-200 lg:pt-52 pt-32" >
                    <div class="hero-content flex-col lg:flex-row">

                        <div className='lg:mb-0 mb-16 '>
                            <h1 class="pb-2 lg:text-7xl text-4xl text-warning font-bold">Hello!</h1>
                            <h2 class="lg:text-8xl text-5xl text-white font-bold">I'm Murad</h2>
                            <p class=" lg:text-3xl text-lg text-primary font-bold">Full-Stack Developer (MERN)</p>
                            <p class="pb-4 lg:text-lg text-base text-white">Welcome! Are you looking for a react Web Developer for your company. Here I'm a full stack web developer with a skill set of MongoDB, Express js, react js, and Node js. Let's talk together.</p>
                            <a href='tel:+8801789181646' class="btn btn-primary rounded-3xl text-white text-base"><span className='capitalize pr-2'>Hire Me</span> <BsArrowRight></BsArrowRight></a>
                        </div>
                        <img src={banner} class="lg:max-w-xl max-w-xs rounded-lg shadow-2xl" alt='' />
                    </div>
                </div>
            </div>
            <section id='about'>
                <div style={{
                    background: "rgba(46,42,15,1)",
                    background: "linear-gradient(59deg, rgba(46,42,15,1) 0%, rgba(32,30,23,1) 39%, rgba(38,22,46,1) 100%)"
                }} className=''>
                    <div class="hero min-h-screen">
                        <div class="hero-content grid grid-cols-1 lg:grid-cols-2">
                            <div style={{
                                background: "#2e2c1f",
                                background: "linear-gradient(180deg,#2e2c1f,#1b1b19)"
                            }} className='text-white px-16 py-28 lg:w-[60%] rounded-lg'>

                                <div>
                                    <h2 className='text-7xl font-bold text-secondary'>MERN</h2>
                                    <p className='text-xl font-semibold'>FAST</p>
                                    <p className='text-xl font-semibold'>SECURE</p>
                                    <p className='text-xl font-semibold'>QUALITY</p>
                                </div>

                                <div className='bg-[#ffffff80] relative lg:left-[80%] top-16 rounded-lg px-1 py-1 '>
                                    <div className='bg-[#363429] px-2 py-1 items-center grid grid-cols-2 rounded-lg'>
                                        <h2 className='text-4xl font-bold w-[50%] text-primary font-sans'>100%</h2>
                                        <p className='text-base w-[50%]'>Client <br /> Satisfaction</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 class="lg:text-5xl text-4xl text-white font-bold">My Advantage</h1>
                                <p class="py-6 text-white">Some Skills I'm still polishing by working through and some skills I have mastered.</p>
                                <div className="skill-section grid grid-cols-2 lg:grid-cols-3">
                                    <div className='skills1'>
                                        <div className='skill'>
                                            <h2 className='text-white text-3xl font-bold font-sans'>90%</h2>
                                            <p className='text-secondary text-lg mt-2'>Figma</p>
                                        </div>
                                    </div>
                                    <div className='skills2'>
                                        <div className='skill'>
                                            <h2 className='text-white text-3xl font-bold font-sans'>80%</h2>
                                            <p className='text-secondary text-lg mt-2'>MongoDB</p>
                                        </div>
                                    </div>
                                    <div className='skills3'>
                                        <div className='skill'>
                                            <h2 className='text-white text-3xl font-bold font-sans'>80%</h2>
                                            <p className='text-secondary text-lg mt-2'>ExpressJs</p>
                                        </div>
                                    </div>
                                    <div className='skills4'>
                                        <div className='skill'>
                                            <h2 className='text-white text-3xl font-bold font-sans'>90%</h2>
                                            <p className='text-secondary text-lg mt-2'>ReactJs</p>
                                        </div>
                                    </div>
                                    <div className='skills5'>
                                        <div className='skill'>
                                            <h2 className='text-white text-3xl font-bold font-sans'>85%</h2>
                                            <p className='text-secondary text-lg mt-2'>NodeJs</p>
                                        </div>
                                    </div>
                                    <div className='skills6'>
                                        <div className='skill'>
                                            <h2 className='text-white text-3xl font-bold font-sans'>90%</h2>
                                            <p className='text-secondary text-lg mt-2'>Firebase</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div id="service">
                <div style={{
                    background: "rgb(52,49,30)",
                    background: "linear-gradient(90deg, rgba(52,49,30,1) 0%, rgba(34,33,33,1) 100%)"
                }} className='pt-24 pb-24'>
                    <h2 className='lg:text-5xl text-3xl font-bold text-center font-bold text-white'>Popular Services</h2>
                    <p className='text-white text-center lg:w-[40%] lg:w-96 mx-auto lg:mb-16 lg:mt-8 my-4'>Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system</p>

                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 w-[85%] mx-auto '>
                        <div class="card lg:w-96 bg-base-100 shadow-xl bg-[#24242389]">
                            <figure class="px-8 py-8 mt-7 rounded-full text-warning lg:text-5xl text-4xl hover:bg-warning hover:duration-300 hover:text-white bg-stone-700 my-auto mx-auto">
                                <FaWordpressSimple></FaWordpressSimple>
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title text-white text-2xl font-bold py-3">WordPress Development</h2>
                                <p className='text-white'>I believe this the most easiest and fastest way to build a website with it's built in functionality. Less Cost, Less work and trusted</p>
                                <div class="flex font-semibold text-white items-center">
                                    <BsArrowRight></BsArrowRight>
                                    <a class="text-white ml-3" href=''>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:w-96 bg-base-100 shadow-xl bg-[#24242389]">
                            <figure class="px-8 py-8 mt-7 rounded-full text-warning lg:text-5xl text-4xl hover:bg-warning hover:duration-300 hover:text-white bg-stone-700 my-auto mx-auto">
                                <CgWebsite></CgWebsite>
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title text-white text-2xl font-bold py-3">Website Design</h2>
                                <p className='text-white'>User interaction in short UI or UX is one of the most important factor to reach or pull more audience in your website. I covered all of that with professionally</p>
                                <div class="flex font-semibold text-white items-center">
                                    <BsArrowRight></BsArrowRight>
                                    <a class="text-white ml-3" href=''>Learn More</a>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:w-96 bg-base-100 shadow-xl bg-[#24242389]">
                            <div class="px-8 py-8 mt-7 rounded-full text-warning lg:text-5xl text-4xl hover:bg-warning hover:duration-300 hover:text-white bg-stone-700 my-auto mx-auto">
                                <FaReact></FaReact>
                            </div>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title text-white text-2xl font-bold py-3">React Development</h2>
                                <p className='text-white'>Not so easy to build a website using react and others language which we call MERN. But React website is superfast because it's uses route to change between one page to another. Our Expertise is here in REact Development</p>
                                <div class="flex font-semibold text-white items-center">
                                    <BsArrowRight></BsArrowRight>
                                    <a class="text-white ml-3" href=''>Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="experience">
                <div style={{
                    background: "rgba(36,4,4,1)",
                    background: "linear-gradient(59deg, rgba(25,25,25,1) 26%, rgba(36,4,4,1) 49%, rgba(17,17,17,1) 86%)"
                }} className='pb-24'>
                    <h2 className='lg:text-5xl text-3xl text-white font-bold text-center pt-24 pb-4'>Work Experience</h2>
                    <p className='text-center lg:w-96 w-[70%] text-white mx-auto pb-6'>I'm New To React Development but I have worked as a senior WordPress developer in some minor company and also as freelancer in some popular marketplace</p>

                    <div className='grid grid-cols-2 lg:grid-cols-4 text-white items-center w-[85%] mx-auto mb-8 px-8 py-5 rounded-xl bg-[#333333]'>
                        <div>
                            <h2 className='lg:text-3xl text-2xl font-semibold'><span className='text-lg'>May</span> 2020 - Present</h2>
                        </div>
                        <div className=''>
                            <img className='lg:w-20 w-24 ml-14' src={Fiverrlogo} alt="" />
                        </div>
                        <div className='lg:ml-[-50px] lg:mt-0 mt-5'>
                            <h2 className='lg:text-3xl text-xl font-bold'>WordPress Developer</h2>
                            <p className='text-error'>Fiverr Co.</p>
                        </div>
                        <div>
                            <a href="https://www.fiverr.com/muradwp99" className='float-right flex items-center gap-3'><BsArrowRight></BsArrowRight> Go to website</a>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 text-white items-center w-[85%] mx-auto px-8 py-5 rounded-xl bg-[#333333]'>
                        <div>
                            <h2 className='lg:text-3xl text-2xl font-semibold'><span className='text-lg'>April</span> 2021 - <span className='text-lg'>August</span> 2021</h2>
                        </div>
                        <div className=''>
                            <img className='lg:w-16 w-20 bg-white rounded-full px-3 lg:py-6 py-7 ml-16' src={Evofelogo} alt="" />
                        </div>
                        <div className='lg:ml-[-50px] lg:mt-0 mt-5'>
                            <h2 className='lg:text-3xl text-xl font-bold'> WordPress Developer</h2>
                            <p className='text-error'>Evofe, Dhaka, BD</p>
                        </div>
                        <div>
                            <a href="https://www.fiverr.com/muradwp99" className='float-right flex items-center gap-3'><BsArrowRight></BsArrowRight> Go to website</a>
                        </div>
                    </div>

                </div>
            </div>
            <div id="portfolio">
                <div style={{
                    background: "rgb(52,49,30)",
                    background: "linear-gradient(90deg, rgba(52,49,30,1) 0%, rgba(34,33,33,1) 100%)"
                }} className='pt-24 pb-24'>
                    <div className=' lg:w-[85%] mx-auto grid grid-cols-2 justify-between items-center'>

                        <div>
                            <h2 className='text-white text-3xl lg:text-5xl font-bold'>Recent Projects</h2>
                            <p className='text-white w-80'>Some Exposure of my Recent works as WordPress and React Developer is given below. </p>
                        </div>
                    </div>
                    <div className='w-[85%] mx-auto mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3'>
                        <div class="card lg:w-96 bg-[#5c4201] text-white shadow-xl">
                            <figure><img className=' hover:scale-110 hover:duration-300 ease-out h-[400px] object-cover px-4 pt-4' src={pcuniverse} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    PC Univers

                                </h2>
                                <div>
                                    <p className='mb-5'>Users or Customers Can view Products or inventory with accurate details. Also, a blog page was added for every user...</p>
                                    <a href="" className='font-bold border-2 py-2 px-2 rounded-full hover:bg-warning hover:border-warning  hover:duration-300'>See More</a>
                                </div>
                                <br />
                                <div class="card-actions lg:justify-end justify-center mt-10">
                                    <a href='https://perlic-tools.web.app/' class="badge bg-white text-black border-white">Live Link</a>
                                    <a href='https://github.com/muradwp99/pc-universe' class="badge bg-white text-black border-white">Github Link</a>
                                    <a href='https://github.com/muradwp99/pc-universe-server' class="badge bg-white text-black border-white">Server Github</a>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:w-96 bg-[#5c4201] text-white shadow-xl">
                            <figure><img className='hover:scale-110 hover:duration-300 ease-out h-[400px] object-cover px-4 pt-4' src={motoflix} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    MotoFlix WAREHOUSE

                                </h2>

                                <div>
                                    <p className='mb-5'>Social login like Google, Facebook, Instagram, and email-password login allowed every user with proper verification...</p>
                                    <a href="" className='font-bold border-2 py-2 px-2 rounded-full hover:bg-warning hover:border-warning  hover:duration-300'>See More</a>
                                </div>
                                <div class="card-actions lg:justify-end justify-center  mt-10">
                                    <a href='https://motoflix-69da7.web.app/' class="badge bg-white text-black border-white">Live Link</a>
                                    <a href='https://github.com/muradwp99/Motoflix-client-side' class="badge bg-white text-black border-white">Github Link</a>
                                    <a href='https://github.com/muradwp99/Motoflix-server-side' class="badge bg-white text-black border-white">Server Link</a>
                                </div>
                            </div>
                        </div>
                        <div class="card lg:w-96 bg-[#5c4201] text-white shadow-xl">
                            <figure><img className='hover:scale-110 hover:duration-300 ease-out h-[400px] object-cover px-4' src={career} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title">
                                    Career Pathway

                                </h2>

                                <div>
                                    <p className='mb-5'>People Can view the inventory of products and register users can update Quantity and more details...</p>
                                    <a href="" className='font-bold border-2 py-2 px-2 rounded-full hover:bg-warning hover:border-warning  hover:duration-300'>See More</a>
                                </div>
                                <div class="card-actions lg:justify-end justify-center mt-10">
                                    <a href='https://career-way.web.app/' class="badge bg-white text-black border-white">Live Link</a>
                                    <a href='https://github.com/muradwp99/career-path-way' class="badge bg-white text-black border-white">Github Link</a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div id="contact" style={{

                background: "linear-gradient(59deg, rgba(33,24,23,1) 26%, rgba(33,24,23,1) 86%)"
            }} >
                <div className='text-center mx-auto w-[80%] py-24'>
                    <h1 className='text-center text-white font-bold py-2 lg:text-5xl text-3xl'>Let's Talk</h1>
                    <p className='text-white text-base lg:w-[50%] w-[80%] mx-auto py-3'>Please contact me with any kinds of query I will try my best to answer them all. Don't hesitate to contact on phone or email me. Thank you</p>
                    <div className='grid lg:grid-cols-2 grid-cols-1 '>
                        <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1 justify-items-center items-center gap-3 bg-[#222121] lg:w-[90%] lg:ml-auto lg:px-0 px-8 mb-5 py-10 rounded-xl shadow-lg'>
                            <h2 className='text-white lg:text-3xl font-bold pb-7'>Get in Touch</h2>
                            <input type="name" name='name' placeholder="Name" class=" bg-transparent w-full max-w-sm h-[50%] border-0 border-b border-solid border-[#464646] py-6 focus:outline-none text-white" />
                            <input type="email" name='user_email' placeholder="Email Address" class="bg-transparent w-full max-w-sm h-[50%] border-0 border-b border-solid border-[#464646] py-6 focus:outline-none text-white" />
                            <input type="phone" name='phone' placeholder="Phone Number" class="bg-transparent w-full max-w-sm h-[50%] border-0 border-b border-solid border-[#464646] py-6 focus:outline-none text-white" />
                            <input type="text" name='service' placeholder="Service" class="bg-transparent w-full max-w-sm h-[50%] border-0 border-b border-solid border-[#464646] py-6 focus:outline-none text-white" />
                            <textarea class="bg-transparent w-full max-w-sm h-32 border-0 border-b border-solid border-[#464646] py-6 focus:outline-none text-white" name='message' placeholder="Enter your message"></textarea>
                            <input type="submit" value="Send Message" class="btn btn-primary text-white mt-4 w-44 lg:ml-28 lg:mr-auto" />
                        </form>
                        <div className='lg:mr-auto lg:ml-6'>

                            <div className='bg-[#222121] py-8 px-4 rounded-lg mx-auto'>
                                <h2 className='text-white text-2xl font-semibold'>Uttara, Dhaka, Bangladesh</h2>
                                <div className='grid grid-cols-2 justify-items-start items-center pt-5'>
                                    <div className='bg-[#3d3d3d] text-warning p-6 rounded-full text-4xl mr-auto ml-5'>
                                        <HiOutlineLocationMarker></HiOutlineLocationMarker>
                                    </div>
                                    <span className='text-white text-xl ml-[-15%]'>Office Address</span>
                                </div>
                            </div>
                            <div className='mt-6 bg-[#222121] py-8 px-4 rounded-lg mx-auto'>
                                <h2 className='text-white text-2xl font-semibold font-sans'>muradmd107@gmail.com</h2>
                                <div className='grid grid-cols-2 justify-items-start items-center pt-5'>
                                    <div className='bg-[#3d3d3d] text-warning p-6 rounded-full text-4xl mr-auto ml-5'>
                                        <HiOutlineMail></HiOutlineMail>
                                    </div>
                                    <span className='text-white text-xl ml-[-15%]'>Office Mail</span>
                                </div>
                            </div>
                            <div className='mt-6 bg-[#222121] py-8 px-4 rounded-lg mx-auto'>
                                <h2 className='text-white text-2xl font-semibold font-sans'>+8801789181646</h2>
                                <div className='grid grid-cols-2 justify-items-start items-center pt-5'>
                                    <div className='bg-[#3d3d3d] text-warning p-6 rounded-full text-4xl mr-auto ml-5'>
                                        <BsTelephoneForward></BsTelephoneForward>
                                    </div>
                                    <span className='text-white text-xl ml-[-15%]'>Office Phone</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{

                background: "linear-gradient(59deg, rgba(22,16,15,1) 18%, rgba(5,38,2,1) 86%)"
            }} class="">
                <div className='p-10 w-[85%] text-base-content mx-auto grid lg:grid-cols-4 grid-cols-1'>
                    <div className=''>
                        <div className='grid grid-cols-2 items-center justify-items-start'>
                            <img className='w-20' src={logo} alt="" />
                            <span className='text-xl text-left ml-[-30%] font-bold text-white'>M.Murad</span>
                        </div>
                        <p className='text-white'>Welcome to my portfolio website here I provide all the listed services. I worked as a WordPress Developer, React Developer, MERN Developer. I always focus on my client satisfaction and complete on time</p>
                    </div>
                    <div className='lg:w-[60%] text-white my-3 lg:mx-auto grid grid-cols-1'>
                        <span class="footer-title">Services</span>
                        <a class="link link-hover">Branding</a>
                        <a class="link link-hover">Design</a>
                        <a class="link link-hover">Marketing</a>
                        <a class="link link-hover">Advertisement</a>
                    </div>
                    <div className='lg:w-[60%] text-white my-3 lg:mx-auto grid grid-cols-1'>
                        <span class="footer-title">Company</span>
                        <a href='#about' class="link link-hover">About us</a>
                        <a href='#contact' class="link link-hover">Contact</a>
                        <a href='#portfolio' class="link link-hover">Portfolio</a>
                        <a href='#experience' class="link link-hover">Experience</a>
                    </div>

                    <div>
                        <span class="footer-title text-white">Newsletter</span>
                        <div class="form-control lg:w-80">
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


        </div >
    );
};

export default Home;