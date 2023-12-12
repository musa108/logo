import bathroom from '/src/assets/images/prod-bathroom.png'
import sittingroom from '/src/assets/images/prod-sittingroom.png'
import outdoor from '/src/assets/images/prod-outdoor.png'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProdCarousel = () => {
        return (
            <>
            <main>
                <Carousel>
                    <img src={bathroom} alt="" className='w-[910px] '/>
                    <img src={sittingroom} alt="" className='w-[910px] '/>
                    <img src={outdoor} alt="" className='w-[910px]'/>
                </Carousel>
            </main>
            </>
        );
}
export default ProdCarousel;