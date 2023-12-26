import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Form = () => {
  return (
    <>
      <main className="my-4 p-4 max-xl:m-auto bg-[#FAFAFA]">
        <form action="" className="flex flex-col gap-y-4">
          <div className="flex items-center text-sm">
            <button className="border bg-[#000] text-[#FFF] py-2 px-4">
              Mrs.
            </button>
            <button className="border bg-[#FFF] text-[#000] py-2 px-4">
              Mr.
            </button>
          </div>
          <input
            type="text"
            placeholder="Firstname*"
            className="border w-[362px] h-[45px]"
          />
          <input
            type="text"
            placeholder="Lastname*"
            className="border w-[362px] h-[45px]"
          />
          <input
            type="text"
            placeholder="Email*"
            className="border w-[362px] h-[45px]"
          />
          <label htmlFor="" className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Street*"
              className="border w-[239px] h-[45px]"
            />
            <input
              type="text"
              placeholder="Houses*"
              className="border w-[116px] h-[45px]"
            />
          </label>
          <label htmlFor="" className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Postcode*"
              className="border w-[158px] h-[45px]"
            />
            <input
              type="text"
              placeholder="Location*"
              className="border w-[195px] h-[45px]"
            />
          </label>
          <select
            name="languages"
            id="lang"
            className="border w-[362px] h-[45px]"
          >
            <input type="text" placeholder="Select Country*" />
            <option value="javascript"></option>
          </select>
          <input
            type="text"
            placeholder="Phone Number*"
            className="border w-[362px] h-[45px]"
          />
          <div className=" flex items-start gap-1">
            <CheckBoxOutlineBlankIcon />
            <p className="text-[#000] w-80">
              Create a customer account now and benefit from many advantages.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <CheckBoxIcon />
            <p className="text-[#000]">Shipping Address is Different</p>
          </div>

          <input
            type="text"
            placeholder="Firstname*"
            className="border w-[362px] h-[45px]"
          />
          <input
            type="text"
            placeholder="Lastname*"
            className="border w-[362px] h-[45px]"
          />
          <input
            type="text"
            placeholder="Email*"
            className="border w-[362px] h-[45px]"
          />
          <label htmlFor="" className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Street*"
              className="border w-[239px] h-[45px]"
            />
            <input
              type="text"
              placeholder="Houses*"
              className="border w-[116px] h-[45px]"
            />
          </label>
          <label htmlFor="" className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Postcode*"
              className="border w-[158px] h-[45px]"
            />
            <input
              type="text"
              placeholder="Location*"
              className="border w-[195px] h-[45px]"
            />
          </label>
          <select
            name="languages"
            id="lang"
            className="border w-[362px] h-[45px]"
          >
            <input type="text" placeholder="Select Country*" />
            <option value="javascript"></option>
          </select>
        </form>
      </main>
    </>
  );
};
export default Form;
