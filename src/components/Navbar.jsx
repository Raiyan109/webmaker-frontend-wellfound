const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                        <span className="ml-3 logo">UniCraft</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">How it works</a>
                        <a className="mr-5 hover:text-gray-900">Pricing</a>
                        <a className="mr-5 hover:text-gray-900">Work</a>
                    </nav>
                    <div className=''>
                        <button className='button-outline'>Contact us</button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;