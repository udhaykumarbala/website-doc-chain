import HeroBackgroundBlur from "../HeroBackground";
import { AISpeechFeatureHeading } from "./AISpeechFeatureHeading";

import TextToSpeechImage from "../../assets/service/textToSpeech.png";

export const TextToSpeech = () => {
   const keyFeaturesData = [
      {
         id: 1,
         title: "Natural Speech",
         description:
            " Clear, natural-sounding voices across multiple languages and accents.",
      },
      {
         id: 2,
         title: "Customization",
         description:
            "Modify pitch, speed, and voice style to match your needs.",
      },
      {
         id: 3,
         title: "Multilingual Support",
         description:
            "Available in a wide range of languages, ensuring global accessibility.",
      },
      {
         id: 4,
         title: "Scalability",
         description:
            "Whether for individual users or large-scale systems, our TTS can adapt to your needs.",
      },
   ];

   return (
      <div>
         <AISpeechFeatureHeading
            title={"Text-to-Speech (TTS)"}
            tagLine={
               "Our TTS services convert written text into natural, human-like speech in realtime, enabling improved interaction across various platforms. Whether you're automating customer service, generating audio content, or enhancing educational tools, our TTS solutions provide the versatility and high-quality audio you need."
            }
         />

         <section className='py-12 bg-black sm:py-10 lg:py-12'>
            <div className='px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl'>
               <div className='grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24 xl:gap-x-4 gap-y-12'>
                  <div className='order-last md:order-first flex flex-col gap-20'>
                     <h2 className='text-3xl font-normal text-white sm:text-4xl lg:text-4xl xl:text-4xl'>
                        Key Features
                     </h2>

                     <div className='flex flex-col gap-7'>
                        {keyFeaturesData.map((keyFeature) => (
                           <div
                              className='inline-flex gap-4 flex-wrap'
                              key={keyFeature.id}
                           >
                              <span className='text-xl flex-none font-bold text-white '>
                                 {keyFeature.title} :
                              </span>
                              <span className='text-lg font-normal text-left text-white/50'>
                                 {keyFeature.description}
                              </span>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className='relative'>
                     <div className='absolute inset-0 flex items-center'>
                        <HeroBackgroundBlur />
                     </div>

                     <img
                        className={"w-1/2 relative  mx-auto"}
                        src={TextToSpeechImage}
                        alt={"chat"}
                     />
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};
