import { useState } from "react";

const ProdDescription = () => {
  const [details, setdetails] = useState(true);

  const hideDeatils = () => {
    setdetails(!details);
  };
  return (
    <>
      <main className="my-8">
        <ul className="flex justify-center items-center gap-4">
          <li className="text-[#979797] text-xl cursor-pointer" onClick={hideDeatils}>
            Description
          </li>
          <li className="text-[#000000] text-xl font-semibold cursor-pointer" onClick={hideDeatils}>Details</li>
          <li className="text-[#000000] text-xl font-semibold cursor-pointer" onClick={hideDeatils}>Reviews(0)</li>
        </ul>
        <div className=" flex justify-center items-center w-[1290px]">
          {details && (
            <p className="text-[#000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              ornare euismod arcu, ac laoreet metus pulvinar feugiat. Praesent
              in feugiat ante, a dictum nunc. Pellentesque convallis tortor quis
              purus finibus aliquet. In hac habitasse platea dictumst. Proin
              vestibulum ante ac faucibus tristique. Integer quis efficitur
              dolor, at dignissim dolor.
            </p>
          )}
        </div>
      </main>
    </>
  );
};
export default ProdDescription;
