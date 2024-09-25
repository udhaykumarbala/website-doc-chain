import HeroBackgroundBlur from "../HeroBackground";
import { AISpeechFeatureHeading } from "./AISpeechFeatureHeading";

import SpeechRecognitionImage from "../../assets/service/speechRecognition.png";

export const SpeechRecognition = () => {
   const keyFeaturesData = [
      {
         id: 1,
         title: "High Accuracy",
         description:
            "Advanced AI models ensure precise transcription even in noisy environments.",
      },
      {
         id: 2,
         title: "Real-Time Processing",
         description:
            " Instantaneous speech recognition for live applications.",
      },
      {
         id: 3,
         title: "Language Support",
         description:
            ": Multilingual recognition tailored to various dialects and accents.",
      },
      {
         id: 4,
         title: "Integration-Ready:",
         description:
            "Easy to integrate into existing applications and systems.",
      },
   ];

   return (
      <div>
         <AISpeechFeatureHeading
            title={"Automatic Speech Recognition (ASR)"}
            tagLine={
               "Our ASR services enable fast and accurate conversion of spoken language into text. This technology is ideal for transcription, voice command systems, customer service automation, and any use case where efficient speech-to-text conversion is crucial."
            }
         />

         <section className='py-12 bg-black sm:py-16 lg:py-12'>
            <div className='px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl'>
               <div className='grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24 xl:gap-x-4 gap-y-12'>
                  <div className='order-last  flex flex-col gap-20'>
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
                     <div className='absolute inset-0 flex items-center '>
                        <HeroBackgroundBlur />
                     </div>

                     <img
                        className={"w-1/2 relative  mx-auto"}
                        src={SpeechRecognitionImage}
                        alt={"chat"}
                     />
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};
