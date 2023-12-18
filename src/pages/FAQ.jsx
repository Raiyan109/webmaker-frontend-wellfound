import { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci"
const FAQ = () => {
    const [open, setOpen] = useState(false)
    const faqData = [
        {
            id: 1,
            title: 'Is there a free trial available?',
            desc: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.'
        },
        {
            id: 2,
            title: 'Can I change my plan later?',
            desc: 'Yes, you can try us for free for 30 days.'
        },
        {
            id: 3,
            title: 'What is your cancellation policy?',
            desc: 'Yes, you can try us for free for 30 days.'
        },
        {
            id: 4,
            title: 'Can other info be added to an invoice?',
            desc: 'Yes, you can try us for free for 30 days.'
        },
        {
            id: 5,
            title: 'How does billing work?',
            desc: 'Yes, you can try us for free for 30 days.'
        },
        {
            id: 6,
            title: 'How do I change my account email?',
            desc: 'Yes, you can try us for free for 30 days.'
        },
    ]
    return (
        <div>
            <div className="flex flex-col justify-center items-center mx-auto px-10 pt-20">
                <div className="flex flex-col items-center space-y-5  pb-20">
                    <h1 className="text-5xl text-[#1F2937] font-bold text-center">Frequently asked questions
                    </h1>
                    <div className="max-w-lg">
                        <p className="text-sm text-[#667085] text-center">Everything you need to know about the product and billing.</p>
                    </div>
                </div>

                <div className="w-full max-w-screen-sm">
                    {faqData.map((data, i) => (
                        <button
                            onClick={() => setOpen(!open)}
                            key={data.id} className="w-full border-b border-gray-300 pb-6 mb-4 text-left group focus:outline-none">
                            <div className="flex justify-between">
                                <div className="text-md text-[#1F2937] font-semibold">{data.title}
                                </div>
                                <div>
                                    {open ? <CiCirclePlus /> : <CiCircleMinus />}
                                </div>
                            </div>
                            <div className="mt-3 hidden text-sm text-[#6B7280] group-focus:flex">
                                <p>{data.desc}</p>
                            </div>
                        </button>
                    ))}
                    {/* <button className="w-full border-b-2 border-gray-300 pb-6 text-left group mt-6 focus:outline-none">
                        <div className="text-lg font-semibold">Q: What is the tragedy of Darth Plagueis the Wise?</div>
                        <div className="mt-3 hidden text-gray-700 group-focus:flex">
                            <p>Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life… He had such a knowledge of the dark side, he could even keep the ones he cared about from dying. He became so powerful… the only thing he was afraid of was losing his power, which eventually, of course, he did.</p>
                        </div>
                    </button>
                    <button className="w-full border-b-2 border-gray-300 pb-6 text-left group mt-6 focus:outline-none">
                        <div className="text-lg font-semibold">Q: Why did the Fellowship of the Ring not fly to Mordor with the Eagles?</div>
                        <div className="mt-3 hidden text-gray-700 group-focus:flex">
                            <p>Basically if they had attempted to fly in earlier, they would've been seen by the eye and then utterly demolished by the still strong forces within Mordor as Sauron was still very powerful and his armies were definitely a force to be reckoned with. That being said it is conceivable that a mission that bold could've been completed if the elves had also gotten involved, but they didn't care too much for the whole ordeal.</p>
                        </div>
                    </button> */}
                </div>
            </div>


        </div>
    );
};

export default FAQ;