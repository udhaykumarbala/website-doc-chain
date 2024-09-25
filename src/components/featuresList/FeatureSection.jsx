/* eslint-disable react/prop-types */
import HeroBackgroundBlur from "../HeroBackground";
import Title from "../Title";

export const FeatureSection = ({ featureItems }) => {
   //    console.log(featureItems);

   return (
      <>
         <Title
            title='Our Features'
            tagLine="Discover the power of DocChain's cutting-edge capabilities."
            id='features'
         />
         {featureItems?.map((feature) => (
            <section
               className='py-12 bg-black sm:py-16 lg:py-16 xl:py-20'
               key={feature.id}
            >
               <div className='px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl'>
                  <div className='grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24 xl:gap-x-48 gap-y-12'>
                     <div
                        className={
                           feature.isImageFirst
                              ? "order-last md:order-first"
                              : "order-last"
                        }
                     >
                        <h2 className='text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl'>
                           {feature.title}
                        </h2>
                        <p className='mt-8 text-xl font-normal text-white'>
                           <span className='text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500'>
                              {feature.glowSubTitle}
                           </span>
                           {feature.subTitle}
                        </p>
                        <p className='mt-8 text-lg font-normal text-gray-400'>
                           {feature.description}
                        </p>
                     </div>

                     <div className='relative'>
                        <div className='absolute inset-0'>
                           <HeroBackgroundBlur />
                        </div>

                        <img
                           className={
                              feature.isImageSizeHalf
                                 ? "w-1/2 relative  mx-auto"
                                 : "w-full relative  mx-auto"
                           }
                           src={feature.imgSrc}
                           alt={feature.title}
                        />
                     </div>
                  </div>
               </div>
            </section>
         ))}
      </>
   );
};
