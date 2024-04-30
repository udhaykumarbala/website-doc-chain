import { Icon1,Icon2,Icon3,Icon4 } from './Icon';

const Features = () => {
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Why Choose Us</h2>
            <p className="mt-6 text-lg font-normal text-gray-400">Elevating Your Business, Tailored to Your Vision</p>
        </div>

        <div className="grid items-start grid-cols-1 gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16 lg:mt-20">
            <div className="bg-base-900 rounded-md overflow-hidden">
                <div className="p-6 lg:p-8">
                <div className='flex w-full justify-center'> 
                    <Icon2 />
                 </div>
                    <h3 className="mt-6 text-xl font-bold text-white">Customized Approach</h3>
                    <p className="mt-4 text-xl font-normal text-white lg:mt-4">We believe every business is unique, and our solutions are customized to align with your vision and goals.</p>
                </div>
            </div>

            <div className="bg-base-900 rounded-md overflow-hidden lg:mt-12">
                <div className="p-6 lg:p-8">
                <div className='flex w-full justify-center'> 
                    <Icon1 />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-white">Expert Team</h3>
                    <p className="mt-4 text-xl font-normal text-white lg:mt-4">Our team comprises seasoned professionals with extensive experience in eCommerce development and business consulting.</p>
                </div>
            </div>

            <div className="bg-base-900 rounded-md overflow-hidden">
                <div className="p-6 lg:p-8">
                <div className='flex w-full justify-center'> 
                    <Icon3 />
                    </div>
                    <h3 className="mt-6 text-xl font-bold text-white">Innovative Solutions</h3>
                    <p className="mt-4 text-xl font-normal text-white lg:mt-4">We leverage cutting-edge technologies to deliver innovative solutions that set you apart in the marketplace.</p>
                </div>
            </div>

            <div className="bg-base-900 rounded-md overflow-hidden lg:mt-12">
                <div className="p-6 lg:p-8">
                <div className='flex w-full justify-center'> 
                <Icon4 />
                </div>
                    <h3 className="mt-6 text-xl font-bold text-white">End-to-End Support</h3>
                    <p className="mt-4 text-xl font-normal text-white lg:mt-4">From ideation to international expansion, we offer end-to-end services to ensure your business flourishes.</p>
                </div>
            </div>
        </div>
    </div>
</section>

    );
}

export default Features;