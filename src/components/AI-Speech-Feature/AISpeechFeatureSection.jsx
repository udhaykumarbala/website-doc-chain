import Nav from "../Nav";
import { AISpeechFeatureHeading } from "./AISpeechFeatureHeading";
import { AISpeechFeatureHero } from "./AISpeechFeatureHero";
import { SpeechRecognition } from "./SpeechRecognition";
import { TextToSpeech } from "./TextToSpeech";

export const AISpeechFeatureSection = () => {
   return (
      <>
         <Nav />
         <AISpeechFeatureHero />
         <TextToSpeech />
         <SpeechRecognition />
         <AISpeechFeatureHeading
            title={"Why Choose us for TTS & ASR?"}
            tagLine={
               "At DocChain, we combine innovation with reliability. Our AI-powered TTS and ASR services are designed to seamlessly integrate with your workflow, offering unmatched accuracy and performance. Whether you are looking to enhance customer interactions, automate processes, or provide more accessible content, we have the solutions to fit your needs."
            }
         />
      </>
   );
};
