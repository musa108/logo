import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProductNav = () => {
        return (
            <>
            <nav className=" bg-[#111010] py-4 my-4 max-lg:py-2 max-lg:my-2">
                <ul className='flex items-center text-[#FFFFFF] ml-32 max-lg:ml-16'>
                    <li className='text-xl max-xl:text-base'>Home <ArrowForwardIosIcon/> </li>
                    <li className='text-xl max-xl:text-base'>Table <ArrowForwardIosIcon/></li>
                    <li className='text-xl border-b-2 max-xl:text-base'>Product</li>
                </ul>
            </nav>
            </>
        );
}
export default ProductNav;