import { AiFillThunderbolt } from "react-icons/ai";
import person from '../assets/1.jpeg'

const Quote = () => {
    return (
        <div className="bg-[#F9FAFB]">
            <div className="flex justify-center items-center mx-auto px-10 py-20">
                <div className="flex flex-col items-center space-y-10">
                    <div className="flex gap-2 items-center">
                        <AiFillThunderbolt color="green" fill="currentColor" />
                        <h5 className="font-semibold">Sisyphus</h5>
                    </div>
                    <div className="max-w-[750px]">
                        <h1 className="text-3xl text-[#1F2937] font-semibold text-center">We’ve been with unicraft to kick start every new project and can’t imagine working without it.</h1>
                    </div>
                    <div className="flex flex-col items-center">
                        <img className="w-14 h-14 rounded-full object-cover" src={person} alt="" />
                        <p className="text-sm text-[#101828]">Candice Wu</p>
                        <p className="text-xs text-[#667085]">Product Manager, Sisyphus</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quote;