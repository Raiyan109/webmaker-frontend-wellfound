import { TiTickOutline } from "react-icons/ti";
const Pricing = () => {
    const data = [
        {
            id: 1,
            name: 'Freebie',
            desc: 'Ideal for individuals who need quick access to basic features.',
            price: 0,
        },
        {
            id: 2,
            name: 'Professional',
            desc: 'Ideal for individuals who who need advanced features and tools for client work.',
            price: 25,
        },
        {
            id: 3,
            name: 'Enterprise',
            desc: 'Ideal for businesses who need personalized services and security for large teams. ',
            price: 100,
        }
    ]
    return (
        <div>
            <div className="pricingBg">
                <div className="flex flex-col justify-center items-center mx-auto px-10 pt-20">
                    <div className="flex flex-col items-center space-y-5  pb-20">
                        <h1 className="text-5xl text-[#1F2937] font-bold text-center">Pricing made for collaborative support.
                        </h1>
                        <div className="max-w-lg">
                            <p className="text-sm text-[#667085] text-center">Plain is made for your entire company. Only pay for users that actually message customers. Everyone else is free, forever.</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center py-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                        {data.map(({ id, name, desc, price }) => (
                            <div key={id} className="w-[378px] rounded-md p-8 odd:bg-white even:bg-[#1F2937] even:text-white space-y-8">
                                <div className="space-y-2">
                                    <h1 className="font-semibold">{name}</h1>
                                    <p className="text-sm text-[#667085]">{desc}</p>
                                </div>
                                <h1><span className="text-5xl">${price} </span><span className="text-[#667085]">/ Month</span></h1>

                                <div className=''>
                                    <button className='bg-transparent odd:bg-white text-[#4B5563] odd:text-black border border-[#4B5563] rounded-md p-1 w-full'>Get Started now</button>
                                </div>

                                <div className="p-1 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <TiTickOutline />
                                        <span className="text-sm text-[#1F2937] even:text-[#667085]">20,000+ of PNG & SVG graphics</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TiTickOutline />
                                        <span className="text-sm text-[#1F2937] even:text-[#667085]">Access to 100 million stock images</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TiTickOutline />
                                        <span className="text-sm text-[#667085]">Upload custom icons and fonts</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TiTickOutline />
                                        <span className="text-sm text-[#667085]">Unlimited Sharing</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TiTickOutline />
                                        <span className="text-sm text-[#667085]">Upload graphics & video in up to 4k</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TiTickOutline />
                                        <span className="text-sm text-[#667085]">Unlimited Projects</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TiTickOutline />
                                        <span className="text-sm text-[#667085]">Instant Access to our design system</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TiTickOutline />
                                        <span className="text-sm text-[#667085]">Create teams to collaborate on designs</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;