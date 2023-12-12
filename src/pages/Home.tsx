import type { FC } from 'react';
import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Product from '../components/Home/Product';
import Projects from '../components/Home/Projects';
import Collections from '../components/Home/Collections';
import Showroom from '../components/Home/Showroom';
import Footer from '../components/Home/Footer';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
        return (
            <>
            
                <Header/>
                <Hero/>
                <Product/>
                <Projects/>
                <Collections/>
                <Showroom/>
                <Footer/>
            </>
        );
}
export default Home;