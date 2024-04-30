import HeroBackgroundBlur from "./HeroBackground";

import chat from "../assets/chat.png";
import verified from "../assets/blockchain.png";
import summary from "../assets/summary.png";
import ocr from "../assets/ocr.png";

const Feature1 = () => {
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl">
                <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24 xl:gap-x-48 gap-y-12">
                    <div>
                        <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl">Document Security</h2>
                        <p className="mt-8 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Secure your work with cutting-edge protection. </span> Never worry about document safety again.</p>
                        <p className="mt-8 text-lg font-normal text-gray-400">DocChain ensures that your valuable documents are protected with a robust cloud-based infrastructure, fortified by the latest in blockchain encryption. Your confidential files are safeguarded against unauthorized breaches, alteration, or destruction.</p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0">
                            <HeroBackgroundBlur />
                        </div>

                        <img className="relative w-full mx-auto" src={verified} alt="" />
                    </div>
                </div>
            </div>
        </section>

    );
}

const Feature2 = () => {
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl">
                <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24 xl:gap-x-48 gap-y-12">
                    
                    <div className="order-first md:order-last">
                        <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl">Conversational Interface</h2>
                        <p className="mt-8 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Engage with your files in a groundbreaking way. </span>Experience simplicity and clarity with every command.</p>
                        <p className="mt-8 text-lg font-normal text-gray-400">Our platform revolutionizes document interaction by leveraging advanced Natural Language Processing (NLP). This allows for unprecedented, human-like dialogues with your digital files. Pose inquiries, request explanations, or seek out specific information—all through a user-friendly chat interface that delivers instant responses.</p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0">
                            <HeroBackgroundBlur />
                        </div>

                        <img className="relative w-1/2 mx-auto" src={chat} alt="" />
                    </div>


                </div>
            </div>
        </section>
    );
}

const Feature3 = () => {
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl">
                <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24 xl:gap-x-48 gap-y-12">
                    <div>
                        <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl">Cutting-Edge OCR Technology</h2>
                        <p className="mt-8 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Transform handwritten notes into digital data with unparalleled precision.  </span>Streamline your workflow effortlessly.

                        </p>
                        <p className="mt-8 text-lg font-normal text-gray-400">Experience the pinnacle of Optical Character Recognition (OCR) technology. Our system is equipped with an AI-driven OCR that collaborates seamlessly with the AI OCR Engine to transcribe handwritten documents into digital text. It produces precise, searchable results, paving the way for the easy conversion of all your paper-based content into digital archives.</p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0">
                            <HeroBackgroundBlur />
                        </div>

                        <img className="relative w-full mx-auto" src={ocr} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}

const Feature4 = () => {
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl">
                <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24 xl:gap-x-48 gap-y-12">
                    
                    <div className="order-first md:order-last">
                        <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl">Intelligent Summarization</h2>
                        <p className="mt-8 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Elevate your efficiency with AI that distills documents to their essence. </span>A single click reveals key insights.

                        </p>
                        <p className="mt-8 text-lg font-normal text-gray-400">Our AI engine is a master of brevity, adept at analyzing and extracting critical information to create compact summaries of your documents. Instantly call up these abridged versions with a simple action, or opt for the auto-summarization feature which crafts and archives these executive overviews for immediate retrieval whenever you need them.

                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0">
                            <HeroBackgroundBlur />
                        </div>

                        <img className="relative w-full mx-auto" src={summary} alt="" />
                    </div>


                </div>
            </div>
        </section>
    );
}

export { Feature1, Feature2, Feature3, Feature4 };