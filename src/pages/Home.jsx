import Navbar from '../components/Navbar';
import Footer from './Footer';
import How from './How';
import Quote from './Quote';
import WorkSlider from './WorkSlider';

const Home = () => {
    return (
        <div>
            <Navbar />
            <WorkSlider />
            <How />
            <Quote />
            <Footer />
        </div>
    );
};

export default Home;