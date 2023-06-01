import { FiChevronRight } from "react-icons/fi";

const CardDebito = ({ background1, image }) => {
  return (
    <div
      style={{ background: `${background1}` }}
      className={`w-[328px] h-[96px] rounded-[10px] shadow-cardShadow flex justify-between items-end pb-4 cursor-pointer`}
    >
      <div className="rounded-[4px] bg-[#333333]/70 font-semibold text-sm leading-[17px] text-white w-[66px] h-[32px] flex justify-center items-center ml-4">
        <p>····1234</p>
      </div>
      <div className="mr-4 flex items-end gap-4">
        <img src={image} alt="imagen-cards" />
        <FiChevronRight className="w-auto h-6 mb-1" />
      </div>
    </div>
  );
};

export default CardDebito;
