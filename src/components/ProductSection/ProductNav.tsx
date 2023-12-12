import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const ProductNav = () => {
        return (
            <>
            <nav className=" bg-[#111010] py-4 my-4">
                <ul className='flex items-center text-[#FFFFFF] ml-32'>
                    <li className='text-xl'>Home <ArrowForwardIosIcon/> </li>
                    <li className='text-xl'>Table <ArrowForwardIosIcon/></li>
                    <li className='text-xl border-b-2'>Product</li>
                </ul>
            </nav>
            </>
        );
}
export default ProductNav;