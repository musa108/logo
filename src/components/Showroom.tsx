import showroom from '../assets/images/showroom.png'

interface item{
    header:string 
    text:string 
    button:string 
}

const Showroom = () => {

    const items:item[] = [{
        header:'Our Showrooms',
        text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry  Lorem Ipsum has been the industrys standard dummy text',
        button:"Learn more"
    }
    ]
  return <>
  <main>
    <section className=' relative my-14 mx-8'>
        <img src={showroom} alt="showroom" />
        <div className="">

          {items.map((item) =>(
            <div className=" bg-[#F9F9F9] absolute top-28 right-14 p-8 space-y-8">
                   <h1 className=" text-6xl font-bold">{item.header}</h1>
                   <p className="text-xl w-[454px]">{item.text}</p>
                   <button className="bg-[#111010] text-[#FFF] py-2 px-8 uppercase font-bold"> {item.button}</button>
            </div>
          ))}
        </div>
    </section>
  </main>
  </>;
};
export default Showroom;
