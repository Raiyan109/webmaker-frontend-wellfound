import Navbar from '../components/Navbar';
import Footer from './Footer';
import Quote from './Quote';
import WorkSlider from './WorkSlider';

const Home = () => {
    return (
        <div>
            <Navbar />
            <WorkSlider />
            <Quote />
            <Footer />
        </div>
    );
};

export default Home;