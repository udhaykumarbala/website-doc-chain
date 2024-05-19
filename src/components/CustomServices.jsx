import HeroBackgroundBlur from "./HeroBackground";
//ai,backend,blockchain,frontend
import ai from "../assets/service/ai.png"
import blockchain from "../assets/service/blockchain.png"
import backend from "../assets/service/backend.png"
import frontend from "../assets/service/frontend.png"

const Feature1 = () => {
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl">
                <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24 xl:gap-x-48 gap-y-12">
                    <div>
                        <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl">Frontend Development</h2>
                        <p className="mt-8 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Secure your project with top-notch frontend expertise.</span> Never worry about your application&apos;s user interface again.

</p>
                        <p className="mt-8 text-lg font-normal text-gray-400">Our frontend development services ensure that your application has an intuitive, responsive, and visually appealing user interface. Leveraging the latest technologies, we create seamless user experiences across all devices. From simple websites to complex web applications, our team delivers high-quality, user-centric designs that engage and retain users.</p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0">
                            <HeroBackgroundBlur />
                        </div>

                        <img className="relative w-[80%] mx-auto" src={frontend} alt="" />
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
                        <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl">Backend Development</h2>
                        <p className="mt-8 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Fortify your application with robust backend solutions. </span>Enjoy the peace of mind that comes with secure and scalable backend services.</p>
                        <p className="mt-8 text-lg font-normal text-gray-400">We provide robust backend development services to ensure your application is secure, scalable, and performs efficiently. Our team specializes in building powerful APIs and server-side logic to support your business needs. With our expertise in various backend technologies, we deliver solutions that can handle high traffic, complex workflows, and sensitive data with ease.

</p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0">
                            <HeroBackgroundBlur />
                        </div>

                        <img className="relative w-[80%] mx-auto" src={backend} alt="" />
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
                        <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl">Artificial Intelligence</h2>
                        <p className="mt-8 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Harness the power of AI to drive innovation.   </span>Automate processes and gain valuable insights with our cutting-edge AI solutions.

                        </p>
                        <p className="mt-8 text-lg font-normal text-gray-400">Our AI services harness the power of machine learning and data analytics to provide intelligent solutions. We help businesses automate processes, gain insights, and improve decision-making through advanced AI technologies. Whether it&apos;s predictive analytics, natural language processing, or computer vision, our AI solutions are designed to meet your unique business needs.

</p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0">
                            <HeroBackgroundBlur />
                        </div>

                        <img className="relative w-[80%] mx-auto" src={ai} alt="" />
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
                        <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl">Blockchain</h2>
                        <p className="mt-8 text-xl font-normal text-white"><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">Empower your business with secure, transparent, and decentralized blockchain solutions. </span>Never worry about data integrity and security again.



                        </p>
                        <p className="mt-8 text-lg font-normal text-gray-400">Our blockchain development services offer secure, transparent, and decentralized solutions for various applications. We specialize in building blockchain-based platforms that enhance security, traceability, and efficiency. From smart contracts to decentralized applications (DApps), our blockchain solutions are designed to transform your business operations.

                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0">
                            <HeroBackgroundBlur />
                        </div>

                        <img className="relative w-[80%] mx-auto" src={blockchain} alt="" />
                    </div>


                </div>
            </div>
        </section>
    );
}

export { Feature1, Feature2, Feature3, Feature4 };