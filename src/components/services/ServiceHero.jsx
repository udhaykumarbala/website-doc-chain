const ServiceHero = () => {
   return (
      <section className='py-12 bg-black sm:py-16 lg:py-20 xl:py-24'>
         <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='max-w-4xl mx-auto text-center'>
               <img
                  className='w-auto h-20 mx-auto'
                  src='https://landingfoliocom.imgix.net/store/collection/dusk/images/logo-symbol.svg'
                  alt=''
               />

               {/* <h2 className='mt-8 text-3xl font-normal text-white sm:mt-12  leading-10'>
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-semibold lg:text-5xl xl:text-6xl'>
                     Doc-Chain
                  </span>{" "}
                  is committed to delivering world-class technology solutions
                  that drive business transformation and sustainable growth.
                  Explore our expertise and discover how we can support your
                  digital journey with innovation, security, and seamless
                  integration.
               </h2> */}
               <h2 className='mt-8 text-3xl font-normal text-white sm:mt-12 sm:text-4xl lg:text-5xl xl:text-6xl'>
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>
                     Transform your vision.
                  </span>{" "}
                  Develop innovative solutions with our expert software
                  services.
               </h2>
               <div className='relative inline-flex items-center justify-center mt-8 sm:mt-12 group'>
                  <div className='absolute transition-all duration-200 rounded-md -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50'></div>
                  {/* <a href="#" title="" className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-md" role="button"> Get started with 14 days free trial </a> */}
               </div>
            </div>
         </div>
      </section>
   );
};

export default ServiceHero;
