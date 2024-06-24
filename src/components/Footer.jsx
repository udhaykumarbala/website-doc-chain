import LocationCityIcon from '@mui/icons-material/LocationCity';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../assets/logo.svg';



const Footer = () => {
    return (
        <>
            <footer className="py-12 bg-gray-900 sm:py-16 lg:py-20">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="md:flex md:items-center md:justify-between">
                        {/* <h5 className="max-w-xl text-3xl font-bold text-white sm:text-4xl xl:text-5xl font-pj"></h5> */}
                        <img src={logo} alt="DocChain Logo" className="w-1/3 h-1/3" />

                        <div className="max-w-sm mt-8 md:mt-0">
                            <ul className="space-y-7">
                                <li className="flex items-start">
                                    <LocationCityIcon className="flex-shrink-0 w-6 h-6 text-white" />
                                    <span className="ml-5 text-xl font-normal text-white font-pj">Plot no. 21, Electrical, Electronics & Instruments industries,
Perungudi, Seevaram Village, Sholinganallur Village,
Sholinganallur Taluk, Chennai 600096</span>
                                </li>

                                <li className="flex items-start">
                                    <EmailIcon className="flex-shrink-0 w-6 h-6 text-white" />
                                    <a href='mailto:hello@docchain.cloud'><span className="ml-5 text-xl font-normal text-white font-pj"> &nbsp;&nbsp;&nbsp;&nbsp;hello@docchain.cloud </span></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="mt-12 border-gray-600 md:mt-20" />

                    <div className="mt-10 lg:flex lg:items-center lg:justify-between md:mt-16">
                        <ul className="flex items-center space-x-6 sm:space-x-12">

                            <li>
                                <a href="/" title="" className="text-lg font-medium text-white transition-all duration-200 font-pj hover:text-gray-300"> Home </a>
                            </li>

                            <li>
                                <a href="/services" title="" className="text-lg font-medium text-white transition-all duration-200 font-pj hover:text-gray-300"> Services </a>
                            </li>

                            {/* <li>
                    <a href="#" title="" className="text-lg font-medium text-white transition-all duration-200 font-pj hover:text-gray-300"> Works </a>
                </li>

                <li>
                    <a href="#" title="" className="text-lg font-medium text-white transition-all duration-200 font-pj hover:text-gray-300"> Support </a>
                </li> */}
                        </ul>

                        <p className="mt-8 text-lg font-normal text-white lg:mt-0 font-pj">© Copyright 2024, All Rights Reserved</p>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default Footer;