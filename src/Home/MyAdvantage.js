import React from 'react';
import './MyAdvantage.css'

const MyAdvantage = () => {
    return (
        <div style={{
            background: "rgba(46,42,15,1)",
            background: "linear-gradient(59deg, rgba(46,42,15,1) 0%, rgba(32,30,23,1) 39%, rgba(38,22,46,1) 100%)"
        }} className=''>
            <div class="hero min-h-screen">
                <div class="hero-content grid grid-cols-2">
                    <div style={{
                        background: "#2e2c1f",
                        background: "linear-gradient(180deg,#2e2c1f,#1b1b19)"
                    }} className='text-white px-16 py-28 w-[60%] rounded-lg'>

                        <div>
                            <h2 className='text-7xl font-bold text-secondary'>MERN</h2>
                            <p className='text-xl font-semibold'>FAST</p>
                            <p className='text-xl font-semibold'>SECURE</p>
                            <p className='text-xl font-semibold'>QUALITY</p>
                        </div>

                        <div className='bg-[#ffffff80] relative left-[80%] top-16 rounded-lg px-1 py-1'>
                            <div className='bg-[#363429] px-2 py-1 items-center grid grid-cols-2 rounded-lg'>
                                <h2 className='text-4xl font-bold w-[50%] text-primary font-sans'>100%</h2>
                                <p className='text-base w-[50%]'>Client <br /> Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 class="text-5xl text-white font-bold">My Advantage</h1>
                        <p class="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="skill-section grid grid-cols-3">
                            <div className='skills1'>
                                <div className='skill'>
                                    <h2 className='text-white text-3xl font-bold font-sans'>90%</h2>
                                    <p className='text-secondary text-lg mt-2'>Figma</p>
                                </div>
                            </div>
                            <div className='skills2'>
                                <div className='skill'>
                                    <h2 className='text-white text-3xl font-bold font-sans'>90%</h2>
                                    <p className='text-secondary text-lg mt-2'>Figma</p>
                                </div>
                            </div>
                            <div className='skills3'>
                                <div className='skill'>
                                    <h2 className='text-white text-3xl font-bold font-sans'>90%</h2>
                                    <p className='text-secondary text-lg mt-2'>Figma</p>
                                </div>
                            </div>
                            <div className='skills4'>
                                <div className='skill'>
                                    <h2 className='text-white text-3xl font-bold font-sans'>90%</h2>
                                    <p className='text-secondary text-lg mt-2'>Figma</p>
                                </div>
                            </div>
                            <div className='skills5'>
                                <div className='skill'>
                                    <h2 className='text-white text-3xl font-bold font-sans'>90%</h2>
                                    <p className='text-secondary text-lg mt-2'>Figma</p>
                                </div>
                            </div>
                            <div className='skills6'>
                                <div className='skill'>
                                    <h2 className='text-white text-3xl font-bold font-sans'>90%</h2>
                                    <p className='text-secondary text-lg mt-2'>Figma</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyAdvantage;