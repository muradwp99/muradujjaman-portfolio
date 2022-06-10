import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { FaWordpressSimple, FaReact } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";


const PopularService = () => {
    return (
        <div style={{
            background: "rgb(52,49,30)",
            background: "linear-gradient(90deg, rgba(52,49,30,1) 0%, rgba(34,33,33,1) 100%)"
        }} className='pt-24 pb-24'>
            <h2 className='lg:text-5xl text-3xl font-bold text-center font-bold text-white'>Popular Services</h2>
            <p className='text-white text-center lg:w-[40%] w-96 mx-auto lg:mb-16 lg:mt-8 my-4'>Must explain to you how all this mistaken idea of denouncing pleasure born and give you a complete account the system</p>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 w-[85%] mx-auto '>
                <div class="card w-96 bg-base-100 shadow-xl bg-[#24242389]">
                    <figure class="px-8 py-8 mt-7 rounded-full text-warning text-5xl hover:bg-warning hover:duration-300 hover:text-white bg-stone-700 my-auto mx-auto">
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
                <div class="card w-96 bg-base-100 shadow-xl bg-[#24242389]">
                    <figure class="px-8 py-8 mt-7 rounded-full text-warning text-5xl hover:bg-warning hover:duration-300 hover:text-white bg-stone-700 my-auto mx-auto">
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
                <div class="card w-96 bg-base-100 shadow-xl bg-[#24242389]">
                    <div class="px-8 py-8 mt-7 rounded-full text-warning text-5xl hover:bg-warning hover:duration-300 hover:text-white bg-stone-700 my-auto mx-auto">
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
    );
};

export default PopularService;