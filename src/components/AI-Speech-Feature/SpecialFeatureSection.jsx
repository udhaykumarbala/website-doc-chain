import HeroBackgroundBlur from "../HeroBackground";
import SpecialSectionImage from "../../assets/service/Deconstructed robot-amico.png";
import Title from "../Title";

export const SpecialFeatureSection = () => {
   return (
      <div>
         <Title title='TTS &  ASR' tagLine='' id={"tts-asr"} />

         <section className='pb-20 bg-black sm:py-16 '>
            <div className='px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl'>
               <div className='grid items-center  max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24  gap-y-12'>
                  <div className='order-last md:order-first  flex flex-col gap-20'>
                     <div className='flex flex-col gap-7'>
                        <div className='inline-flex gap-4 flex-wrap'>
                           <span className='text-2xl font-normal text-left text-white/50'>
                              At DocChain, we combine innovation with
                              reliability. Our AI-powered TTS and ASR services
                              are designed to seamlessly integrate with your
                              workflow, offering unmatched accuracy and
                              performance. Whether you are looking to enhance
                              customer interactions, automate processes, or
                              provide more accessible content, we have the
                              solutions to fit your needs.
                           </span>
                        </div>
                     </div>
                  </div>

                  <div className='relative '>
                     <div className='absolute inset-0 flex items-center'>
                        <HeroBackgroundBlur />
                     </div>

                     <img
                        className={"w-1/2 relative  mx-auto"}
                        src={SpecialSectionImage}
                        alt={"chat"}
                     />
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};
