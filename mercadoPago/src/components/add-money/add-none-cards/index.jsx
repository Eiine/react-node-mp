import { FiPlus } from "react-icons/fi";
import cactus from "../../../assets/cactus.svg";

const AddNoneCards = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 mt-[54px]">
        <img src={cactus} alt="" />
      </div>
      <div className="w-[328px] h-[48px] bg-white rounded-[10px] shadow-cardShadow flex justify-center items-center mb-4">
        <p className="text-sm leading-[17px] font-medium">
          No tenés ninguna tarjeta guardada.
        </p>
      </div>
      <div className="w-[328px] h-[48px] bg-[#AACCFF] rounded-[10px] flex justify-center items-center gap-2 cursor-pointer">
        <FiPlus className="w-6 h-6 text-[#10224D]" />
        <p className="text-[#10224D] text-base leading-[20px] font-semibold">
          Agregar una nueva tarjeta
        </p>
      </div>
    </div>
  );
};

export default AddNoneCards;
