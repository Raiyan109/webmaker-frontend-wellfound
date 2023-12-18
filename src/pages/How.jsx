
const How = () => {
    return (
        <div className="px-32 py-10 hidden lg:block">
            <div className="bg-[#FFFFFF] rounded-xl shadow-lg border">
                <div className="flex justify-center items-center mx-auto px-10 py-20">
                    <div className="flex flex-col items-center space-y-10">
                        <div className="">
                            <h1 className="text-3xl text-[#1F2937] font-semibold text-center">How it works</h1>
                            <p className="text-sm text-[#667085]">Premium designs, unlimited requests, super fast delivery, for one flat monthly fee.</p>
                        </div>
                        <div className="flex gap-72 h-[200px]">
                            <div className="relative">
                                <h1 className="text-[200px] font-bold text-purple-300 absolute -top-20">1</h1>
                                <div className="absolute top-20 w-48 text-center -right-40">
                                    <h1 className="text-3xl text-[#1F2937] font-semibold">Subscribe</h1>
                                    <p className="text-sm text-[#667085]">Subscribe to a plan & you’ll get an instant access to your private Slack channel.</p>
                                </div>
                            </div>
                            <div className="relative">
                                <h1 className="text-[200px] font-bold text-purple-300 absolute -top-20">2</h1>
                                <div className="absolute top-20 w-48 text-center -right-40">
                                    <h1 className="text-3xl text-[#1F2937] font-semibold">Request</h1>
                                    <p className="text-sm text-[#667085]">Submit any number of requests. We&apos;ll work through them, one at a time, ensuring consistent updates every 24-48 hours</p>
                                </div>
                            </div>
                            <div className="relative">
                                <h1 className="text-[200px] font-bold text-purple-300 absolute -top-20">3</h1>
                                <div className="absolute top-20 w-48 text-center -right-40">
                                    <h1 className="text-3xl text-[#1F2937] font-semibold">Revise</h1>
                                    <p className="text-sm text-[#667085]">Need changes? We guarantee unlimited revisions until you&apos;re 200% satisfied.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default How;