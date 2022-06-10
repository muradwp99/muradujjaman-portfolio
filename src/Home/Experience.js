import React from 'react';
import logo from '../Assets/Evofe Logo.jpg.png'
import Fiverrlogo from '../Assets/fiverr.png'
import { BsArrowRight } from "react-icons/bs";

const Experience = () => {
    return (
        <div style={{
            background: "rgba(36,4,4,1)",
            background: "linear-gradient(59deg, rgba(25,25,25,1) 26%, rgba(36,4,4,1) 49%, rgba(17,17,17,1) 86%)"
        }} className='pb-24'>
            <h2 className='lg:text-5xl text-3xl text-white font-bold text-center pt-24 pb-4'>Work Experience</h2>
            <p className='text-center w-96 lg:w-[50%] text-white mx-auto pb-6'>I'm New To React Development but I have worked as a senior WordPress developer in some minor company and also as freelancer in some popular marketplace</p>

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
                    <img className='lg:w-16 w-20 bg-white rounded-full px-3 lg:py-6 py-7 ml-16' src={logo} alt="" />
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
    );
};

export default Experience;