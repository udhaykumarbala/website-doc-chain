import Singapore from '../assets/Singapore.png';
import Malaysia from '../assets/Malaysia.png';

const Partners = () => {
    return (
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center">
            <p className="text-sm font-normal tracking-widest uppercase">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> We grow fast with a reason </span>
            </p>
            <h2 className="mt-6 text-3xl font-normal text-white sm:text-4xl lg:text-5xl xl:text-6xl">Our Partners</h2>
        </div>

        <div className="max-w-2xl mx-auto mt-12 space-y-12 sm:mt-16 lg:mt-20">
            <div className="items-start sm:flex">
                <img className="object-cover rounded-full w-44 h-44 shrink-0 mx-auto" src={Singapore} alt="" />
                <div className="mt-6 sm:ml-10">
                    <div className="sm:items-center sm:flex">
                        <p className="text-2xl font-normal text-white">Zelkova Serrata (S) Private Limited</p>
                        {/* <p className="mt-2 text-base font-normal text-gray-400 sm:mt-0 sm:ml-4">Co-Founder, CEO</p> */}
                    </div>
                    <p className="mt-5 text-base font-normal text-gray-400">
                    705, Sims Drive #01-17 -Shun Li Industrial Complex Singapore
                    </p>
                </div>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>

            <div className="items-start sm:flex">
                <img className="object-cover rounded-full w-44 h-44 shrink-0 mx-auto" src={Malaysia} alt="" />
                <div className="mt-6 sm:ml-10">
                    <div className="sm:items-center sm:flex">
                        <p className="text-2xl font-normal text-white">Asiankom Communication (M) Sdn Bhd</p>
                        {/* <p className="mt-2 text-base font-normal text-gray-400 sm:mt-0 sm:ml-4">Co-Founder, CTO</p> */}
                    </div>
                    <p className="mt-5 text-base font-normal text-gray-400">
                    5-1, Jalan Damai Niaga, Alam Damai, 56000 Kuala Lumpur, Wilayah Persekutuan 
Kuala Lumpur, Malaysia
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

    );
}


export default Partners;