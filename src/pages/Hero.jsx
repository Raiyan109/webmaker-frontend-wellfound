import img1 from '../assets/zapier.png'
import img2 from '../assets/spotify.jpeg'
import img3 from '../assets/zoom.png'
import img4 from '../assets/slack.png'
import img5 from '../assets/amazon.png'
import img6 from '../assets/adobe.png'
const Hero = () => {
    const images = [
        {
            id: 1,
            image: img1
        },
        {
            id: 2,
            image: img2
        },
        {
            id: 3,
            image: img3
        },
        {
            id: 4,
            image: img4
        },
        {
            id: 5,
            image: img5
        },
        {
            id: 6,
            image: img6
        },
    ]
    return (
        <div>
            <div className="">
                <div className="flex flex-col justify-center items-center mx-auto px-10 py-20 ">
                    <div className="flex flex-col items-center space-y-5  pb-20">
                        <div>
                            <h1 className="heading1">Elevate Your Presence with
                            </h1>
                            <h1 className="heading1"> Seamless Design and Innovation.</h1>
                        </div>
                        <p className="text-sm text-[#667085]">From strategic planning to digital presence, we&apos;re your dedicated partner in achieving solo success.</p>
                        <button className="button-primary bg-[#1F2937] text-[#F9FAFB]">View Pricing</button>
                    </div>

                    <div>
                        <p className="text-xs text-[#667085] text-center">Trusted By 250+ Companies</p>
                        <div className='grid grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-20'>
                            {
                                images.map(({ id, image }) => (
                                    <div key={id}>
                                        <img className='w-12 h-12 object-contain grayscale' src={image} alt="" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;