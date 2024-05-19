import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

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
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true, el: '.swiper-pagination', renderBullet: (index, className) => `<span class="${className} bg-white"></span>` }}
                navigation={{ nextEl: '.custom-button-next', prevEl: '.custom-button-prev' }}
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 30 },
                    1024: { slidesPerView: 4, spaceBetween: 40 }
                }}
                className="w-full py-6 relative"
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center h-full p-4 bg-gray-900 border border-gray-800 rounded-xl">
                            <img className="object-contain max-w-full h-10 sm:h-12" src={logo.src} alt={logo.alt} />
                        </div>
                    </SwiperSlide>
                ))}
                {/* Custom navigation buttons */}
                <div className="custom-button-next custom-arrow absolute top-1/2 right-0 transform -translate-y-1/2 p-2 cursor-pointer z-10 lg:p-10 xl:p-6">
                    <img src="https://cdn-icons-png.freepik.com/512/5689/5689648.png" alt="Next" style={{ width: '45px' }} />
                </div>
                <div className="custom-button-prev custom-arrow absolute top-1/2 left-0 transform -translate-y-1/2 p-2 cursor-pointer z-10">
                    <img src="https://cdn-icons-png.freepik.com/512/5689/5689648.png" alt="Previous" style={{ width: '45px', transform: 'scaleX(-1)' }} />
                </div>
            </Swiper>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service, index) => (
                    <div key={index} className="p-6 bg-gray-800 border border-gray-700 rounded-xl shadow">
                        <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                        <p className="text-gray-300 text-justify">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;
