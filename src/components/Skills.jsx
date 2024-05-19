import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import HeroBackgroundBlur from "./HeroBackground";
import chat from "../assets/chat.png";
import verified from "../assets/blockchain.png";



const logos = [
    { src: "https://landingfoliocom.imgix.net/store/collection/dusk/images/integration/2/spotify.svg", alt: "Spotify" },
    { src: "https://landingfoliocom.imgix.net/store/collection/dusk/images/integration/2/zoom.svg", alt: "Zoom" },
    { src: "https://landingfoliocom.imgix.net/store/collection/dusk/images/integration/2/slack.svg", alt: "Slack" },
    { src: "https://landingfoliocom.imgix.net/store/collection/dusk/images/integration/2/hotjar.svg", alt: "Hotjar" },
    { src: "https://landingfoliocom.imgix.net/store/collection/dusk/images/integration/2/hubspot.svg", alt: "HubSpot" },
    { src: "https://landingfoliocom.imgix.net/store/collection/dusk/images/integration/2/shopify.svg", alt: "Shopify" },
    { src: "https://landingfoliocom.imgix.net/store/collection/dusk/images/integration/2/whatsapp.svg", alt: "WhatsApp" }
];

const services = [
    { title: "Frontend Development", description: "Building responsive and interactive user interfaces using the latest web technologies like React, Angular, and Vue." },
    { title: "Backend Development", description: "Creating robust server-side applications and APIs with Node.js, Django, Ruby on Rails, and more to ensure seamless performance and scalability." },
    { title: "AI Development", description: "Implementing artificial intelligence and machine learning solutions to automate processes and enhance decision-making capabilities." },
    { title: "Blockchain Development", description: "Developing decentralized applications and smart contracts on blockchain platforms such as Ethereum, Hyperledger, and Solana." }
];

const LogoCarousel = () => {
    return (
        <div className="w-full py-6 bg-black text-white p-10">
            <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false}}
                pagination={{ clickable: true, el: '.swiper-pagination', renderBullet: (index, className) => `<span class="${className} bg-white"></span>` }}
                navigation={{ nextEl: '.custom-button-next', prevEl: '.custom-button-prev' }}
                breakpoints={{
                    370: { slidesPerView: 3, spaceBetween: 20 },
                    640: { slidesPerView: 4, spaceBetween: 20 },
                    768: { slidesPerView: 5, spaceBetween: 30 },
                    1024: { slidesPerView: 6, spaceBetween: 40 }
                }}
                className="w-full py-6 relative"
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center h-full p-4">
                            <img className="object-contain max-w-full h-10 sm:h-12" src={logo.src} alt={logo.alt} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false , reverseDirection: true}}
                pagination={{ clickable: true, el: '.swiper-pagination', renderBullet: (index, className) => `<span class="${className} bg-white"></span>` }}
                navigation={{ nextEl: '.custom-button-next', prevEl: '.custom-button-prev' }}
                breakpoints={{
                    370: { slidesPerView: 3, spaceBetween: 20 },
                    640: { slidesPerView: 4, spaceBetween: 20 },
                    768: { slidesPerView: 5, spaceBetween: 30 },
                    1024: { slidesPerView: 6, spaceBetween: 40 }
                }}
                className="w-full py-6 relative"
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center h-full p-4">
                            <img className="object-contain max-w-full h-10 sm:h-12" src={logo.src} alt={logo.alt} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='m-[5.2%]'>
            {services.map((service, index) => (
                index % 2 === 0 ? (
                    <section key={index} className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
                        <div className="px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl">
                            <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24 xl:gap-x-48 gap-y-12">
                                <div>
                                    <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl">{service.title}</h2>
                                    <p className="mt-8 text-xl font-normal text-white">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                                            Secure your work with cutting-edge protection. 
                                        </span> 
                                        Never worry about document safety again.
                                    </p>
                                    <p className="mt-8 text-lg font-normal text-gray-400">{service.description}</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0">
                                        <HeroBackgroundBlur />
                                    </div>
                                    <img className="relative w-[190px] mx-auto" src={chat} alt="" />
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <section key={index} className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
                        <div className="px-4 mx-auto sm:px-6 lg:px-12 max-w-7xl">
                            <div className="grid items-center max-w-md grid-cols-1 mx-auto lg:max-w-none lg:mx-0 lg:grid-cols-2 gap-x-24 xl:gap-x-48 gap-y-12">
                                <div className="order-first md:order-last">
                                    <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-3xl xl:text-4xl">{service.title}</h2>
                                    <p className="mt-8 text-xl font-normal text-white">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                                            Engage with your files in a groundbreaking way.
                                        </span>
                                        Experience simplicity and clarity with every command.
                                    </p>
                                    <p className="mt-8 text-lg font-normal text-gray-400">{service.description}</p>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0">
                                        <HeroBackgroundBlur />
                                    </div>
                                    <img className="relative w-[450px] mx-auto" src={verified} alt="Chat" />
                                </div>
                            </div>
                        </div>
                    </section>
                )
            ))}
        </div>

        </div>
    );
};

export default LogoCarousel;
