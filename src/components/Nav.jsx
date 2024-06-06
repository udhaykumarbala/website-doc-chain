/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.svg";

function Nav() {
   const [expanded, setExpanded] = useState(false);
   return (
      <section className='py-4 bg-black sm:py-6' x-data='{expanded: false}'>
         <div className='px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between'>
               <div className='shrink-0'>
                  <a href='#' title='' className='flex'>
                     <img className='w-auto h-9' src={logo} alt='' />
                  </a>
               </div>

               <div className='flex md:hidden'>
                  <button type='button' className='text-white'>
                     {expanded ? (
                        <CloseIcon onClick={() => setExpanded(false)} />
                     ) : (
                        <MenuIcon onClick={() => setExpanded(true)} />
                     )}
                  </button>
               </div>

               <nav className='hidden space-x-10 md:flex md:items-center md:justify-center lg:space-x-12'>
                  <a
                     href='/#solutions'
                     title=''
                     className='text-base font-normal text-gray-400 transition-all duration-200 hover:text-white'
                  >
                     {" "}
                     Our solutions{" "}
                  </a>

                  <a
                     href='/#features'
                     title=''
                     className='text-base font-normal text-gray-400 transition-all duration-200 hover:text-white'
                  >
                     {" "}
                     Features{" "}
                  </a>

                  <a
                     href='/services'
                     title=''
                     className='text-base font-normal text-gray-400 transition-all duration-200 hover:text-white'
                  >
                     {" "}
                     Services{" "}
                  </a>

                  {/* <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"> Support </a> */}
               </nav>

               <div className='relative hidden md:justify-center md:items-center md:inline-flex group'>
                  <div className='absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50'></div>
                  <a
                     href='mailto:hello@docchain.cloud'
                     title=''
                     className='relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full'
                     role='button'
                  >
                     {" "}
                     Connect to Us{" "}
                  </a>
               </div>
            </div>

            {
               /* <!-- Mobile menu --> */
               expanded && (
                  <nav>
                     <div className='flex flex-col pt-8 pb-4 space-y-6'>
                        <a
                           href='/#solutions'
                           title=''
                           className='text-base font-normal text-gray-400 transition-all duration-200 hover:text-white'
                        >
                           {" "}
                           Our solutions{" "}
                        </a>

                        <a
                           href='/#features'
                           title=''
                           className='text-base font-normal text-gray-400 transition-all duration-200 hover:text-white'
                        >
                           {" "}
                           Features{" "}
                        </a>

                        <a
                           href='/services'
                           title=''
                           className='text-base font-normal text-gray-400 transition-all duration-200 hover:text-white'
                        >
                           {" "}
                           Services{" "}
                        </a>

                        {/* <a href="#" title="" className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">  </a> */}

                        <div className='relative inline-flex items-center justify-center group'>
                           <div className='absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50'></div>
                           <a
                              href='mailto:hello@docchain.cloud'
                              title=''
                              className='relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full'
                              role='button'
                           >
                              {" "}
                              Connect to Us{" "}
                           </a>
                        </div>
                     </div>
                  </nav>
               )
            }
         </div>
      </section>
   );
}

export default Nav;
