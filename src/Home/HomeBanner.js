import React from 'react';
import banner from '../Assets/Muradbanner.png';
import { BsArrowRight } from "react-icons/bs";


const HomeBanner = () => {
    return (
        <div>
            <div class="hero min-h-screen hero-section bg-base-200 pt-52" >
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
    );
};

export default HomeBanner;