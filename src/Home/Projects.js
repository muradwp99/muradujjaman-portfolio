import React from 'react';
import { GiFlyingTrout } from "react-icons/gi";
import pcuniverse from '../Assets/pcuniverse.png'
import motoflix from '../Assets/motoflix.png'
import career from '../Assets/careeer.png'



const Projects = () => {
    return (
        <div style={{
            background: "rgb(52,49,30)",
            background: "linear-gradient(90deg, rgba(52,49,30,1) 0%, rgba(34,33,33,1) 100%)"
        }} className='pt-24 pb-24'>
            <div className=' w-[85%] mx-auto flex justify-between items-center'>

                <div>
                    <h2 className='text-white text-3xl lg:text-5xl font-bold'>Recent Projects</h2>
                    <p className='text-white w-80'>Some Exposure of my Recent works as WordPress and React Developer is given below. </p>
                </div>

                <div className='text-warning text-6xl bg-[#3f3f3f] py-4 px-4 rounded-full'>
                    <GiFlyingTrout></GiFlyingTrout>
                </div>
            </div>
            <div className='w-[85%] mx-auto mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3'>
                <div class="card w-96 bg-[#5c4201] text-white shadow-xl">
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
                        <div class="card-actions justify-end  mt-10">
                            <div class="badge bg-white text-black border-white">Live Link</div>
                            <div class="badge bg-white text-black border-white">Github Link</div>
                            <div class="badge bg-white text-black border-white">Server Link</div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-[#5c4201] text-white shadow-xl">
                    <figure><img className='hover:scale-110 hover:duration-300 ease-out h-[400px] object-cover px-4 pt-4' src={motoflix} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            MotoFlix WAREHOUSE

                        </h2>

                        <div>
                            <p className='mb-5'>Social login like Google, Facebook, Instagram, and email-password login allowed every user with proper verification...</p>
                            <a href="" className='font-bold border-2 py-2 px-2 rounded-full hover:bg-warning hover:border-warning  hover:duration-300'>See More</a>
                        </div>
                        <div class="card-actions justify-end  mt-10">
                            <div class="badge bg-white text-black border-white">Live Link</div>
                            <div class="badge bg-white text-black border-white">Github Link</div>
                            <div class="badge bg-white text-black border-white">Server Link</div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-[#5c4201] text-white shadow-xl">
                    <figure><img className='hover:scale-110 hover:duration-300 ease-out h-[400px] object-cover px-4' src={career} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Career Pathway

                        </h2>

                        <div>
                            <p className='mb-5'>People Can view the inventory of products and register users can update Quantity and more details...</p>
                            <a href="" className='font-bold border-2 py-2 px-2 rounded-full hover:bg-warning hover:border-warning  hover:duration-300'>See More</a>
                        </div>
                        <div class="card-actions justify-end mt-10">
                            <div class="badge bg-white text-black border-white">Live Link</div>
                            <div class="badge bg-white text-black border-white">Github Link</div>
                            <div class="badge bg-white text-black border-white">Server Link</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;