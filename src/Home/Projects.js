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
                    <h2 className='text-white text-4xl font-bold'>Recent Projects</h2>
                    <p className='text-white w-80'>Some Exposure of my Recent works as WordPress and React Developer is given below. </p>
                </div>

                <div className='text-warning text-6xl bg-[#3f3f3f] py-4 px-4 rounded-full'>
                    <GiFlyingTrout></GiFlyingTrout>
                </div>
            </div>
            <div className='w-[85%] mx-auto mt-10 grid grid-cols-3'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-[400px] object-cover px-4 pt-4' src={pcuniverse} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            PC Univers

                        </h2>
                        <p>Users or Customers Can view Products or inventory with accurate details. Also, a blog page was added for every user...</p> <br />
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Live Link</div>
                            <div class="badge badge-outline">Github Link</div>
                            <div class="badge badge-outline">Server Link</div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-[400px] object-cover px-4 pt-4' src={motoflix} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            MotoFlix WAREHOUSE

                        </h2>
                        <p>Social login like Google, Facebook, Instagram, and email-password login allowed every user with proper verification...</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Live Link</div>
                            <div class="badge badge-outline">Github Link</div>
                            <div class="badge badge-outline">Server Link</div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-[400px] object-cover px-4' src={career} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Career Pathway

                        </h2>
                        <p>People Can view the inventory of products and register users can update Quantity and more details...</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Live Link</div>
                            <div class="badge badge-outline">Github Link</div>
                            <div class="badge badge-outline">Server Link</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;