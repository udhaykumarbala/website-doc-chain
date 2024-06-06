// import HeroBackgroundBlur from "./HeroBackground";
// import heroImage from "../assets/heroImage.png";

export const Hero = () => {
   return (
      <>
         <section className='relative pt-12 overflow-hidden bg-black sm:pt-16'>
            <div className='relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
               <div className='max-w-4xl mx-auto text-center relative z-10'>
                  <p className='text-sm font-normal tracking-widest uppercase'>
                     <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>
                        {" "}
                        Unleashing the Power of AI & Blockchain{" "}
                     </span>
                  </p>
                  <h1 className='mt-8 text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl'>
                     Next-Generation DMS Solutions for Enterprises
                  </h1>

                  <div className='flex flex-col items-center justify-center px-8 mt-12 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row'>
                     <div className='relative inline-flex items-center justify-center w-full sm:w-auto group'>
                        <div className='absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50'></div>
                        <a
                           href='mailto:hello@docchain.cloud'
                           title=''
                           className='relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full sm:w-auto'
                           role='button'
                        >
                           {" "}
                           Connect to Us{" "}
                        </a>
                     </div>
                  </div>
               </div>

               <div className='relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24'>
                  {/* <div className='absolute transform -translate-x-1/2 left-1/2 w-full top-[-75px] lg:top-[-150px] '>
                     <HeroBackgroundBlur />
                  </div>

                  <div className='absolute inset-0'>
                     <img
                        className='object-cover w-full h-full opacity-50'
                        src='https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png'
                        alt=''
                     />
                  </div>

                  <img
                     className='relative w-full max-w-5xl mx-auto'
                     src={heroImage}
                     alt=''
                  /> */}
               </div>
            </div>
         </section>
      </>
   );
};
