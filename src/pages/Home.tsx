import type { FC } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Product from '../components/Product';
import Projects from '../components/Projects';
import Collections from '../components/Collections';
import Showroom from '../components/Showroom';
import Footer from '../components/Footer';

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