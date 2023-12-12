import ViewColumnIcon from "@mui/icons-material/ViewColumn";
import ViewListIcon from "@mui/icons-material/ViewList";
import TuneIcon from '@mui/icons-material/Tune';
import Search from "@mui/icons-material/Search";
import ViewColumn from "@mui/icons-material/ViewColumn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const CatalogSearch = () => {
  return (
    <>
      <main className=" flex justify-between items-center mx-8 ">
        <p className="text-sm text-[#808080]">Showing 1 - 15 of 22 results</p>
        <section className="flex justify-normal items-center gap-3">
          <div className="flex justify-center items-center gap-2">
            <p className="text-sm text-[#252525] flex items-center">
              filter <TuneIcon fontSize="small"/>
            </p>
            <p className="text-sm text-[#252525] flex items-center">
              Sort by place <ArrowDropDownIcon />
            </p>
          </div>
          <div className="">
            <Search fontSize="small" />
            <ViewListIcon fontSize="small" />
            <ViewColumnIcon fontSize="small" />
            <ViewColumn fontSize="small" />
            <ViewColumn fontSize="small" />
          </div>
        </section>
      </main>
    </>
  );
};
export default CatalogSearch;
