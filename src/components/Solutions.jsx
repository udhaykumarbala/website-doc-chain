const Solutions = () => {
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24" id="solutions">
            <div className="px-4 mx-auto sm:px-6 lg:px-16 max-w-7xl">
                <div className="max-w-md mx-auto text-center pb-16">
                    <h2 className="text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Our solutions</h2>
                    <p className="mt-6 text-lg font-normal text-gray-400">Our DMS is not just a tool, but a smart assistant that learns and adapts to your document handling patterns</p>
                </div>
                <div className="grid max-w-sm grid-cols-1 px-8 mx-auto text-center md:text-left gap-y-8 md:max-w-none md:mx-0 md:px-0 md:grid-cols-3">
                    <div className="lg:pr-20 md:pr-10">
                        <img className="w-auto mx-auto h-14 md:mx-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/2/feature-1.png" alt="" />
                        <h3 className="mt-8 text-xl font-normal text-white">Our DMS transcends traditional tools, intuitively adapting to streamline your document workflows.</h3>
                    </div>

                    <div className="w-48 h-px mx-auto bg-gray-900 md:hidden"></div>

                    <div className="md:border-gray-900 md:border-l md:px-10 lg:px-20">
                        <img className="w-auto mx-auto h-14 md:mx-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/2/feature-2.png" alt="" />
                        <h3 className="mt-8 text-xl font-normal text-white">Leveraging AI, our system intelligently categorizes and retrieves documents, enhancing with use.</h3>
                    </div>

                    <div className="w-48 h-px mx-auto bg-gray-900 md:hidden"></div>

                    <div className="md:border-gray-900 md:border-l md:pl-10 lg:pl-20">
                        <img className="w-auto mx-auto h-14 md:mx-0" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/2/feature-3.png" alt="" />
                        <h3 className="mt-8 text-xl font-normal text-white">Employing blockchain, we ensure the utmost security and integrity for your document repository.</h3>
                    </div>
                </div>
            </div>
        </section>

    );
}


export default Solutions;