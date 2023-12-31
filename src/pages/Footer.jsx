import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className="footerBg lg:bg-[#F9FAFB]">
                <div className="flex flex-col justify-center items-center mx-auto px-10 py-20 ">
                    <div className="flex flex-col items-center space-y-5  pb-20">

                        <div>
                            <h1 className="heading1">No long-term contracts.
                            </h1>
                            <h1 className="heading1">No catches. Simple.</h1>
                        </div>
                        <div className="max-w-[290px] md:max-w-none text-center">
                            <p className="text-lg md:text-sm text-[#667085] font-medium md:font-normal">Start your 30-day free trial. Cancel anytime.</p>
                        </div>
                        <button className="hidden md:block button-primary bg-[#1F2937] text-[#F9FAFB]">Contact us</button>
                    </div>

                </div>
                <div className="flex flex-col px-20 py-6 border-t space-y-4">
                    <div className="flex flex-col justify-start items-start">
                        <h1 className="font-semibold">UniCraft</h1>
                        <div className="max-w-[200px]">
                            <p className="text-xs text-[#667085]">Design amazing digital experiences that
                                create more happy in the world.</p>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="max-w-[130px] md:max-w-none">
                            <p className="text-md md:text-xs text-[#667085]">© 2077 Untitled UI. All rights reserved.</p>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 text-[#667085]">
                            <p><FaTwitter /></p>
                            <p><FaLinkedin /></p>
                            <p><FaFacebook /></p>
                            <p><FaGithub /></p>
                            <p><FaGithub /></p>
                            <p><FaDribbble /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;