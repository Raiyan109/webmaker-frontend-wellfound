import Navbar from '../components/Navbar';
import FAQ from './FAQ';
import Footer from './Footer';
import Hero from './Hero';
import How from './How';
import Pricing from './Pricing';
import Quote from './Quote';
import WorkSlider from './WorkSlider';

const Home = () => {
    return (
        <div>
            <div className='headerBg'>
                <Navbar />
                <Hero />
            </div>
            <WorkSlider />
            <How />
            <Quote />
            <Pricing />
            <FAQ />
            <Footer />
        </div>
    );
};

export default Home;