import { FiPlus } from "react-icons/fi";
import AddNoneCards from "../add-money/add-none-cards";
import AddTarjetas from "./addTarjetas";

const CardsStep1 = ({ onNext }) => {
  return (
    <>
      {/* <AddNoneCards /> */}
      <div className="w-full h-full flex flex-col items-center justify-between">
        <AddTarjetas />
        <div className="h-[96px] w-full bg-white shadow-cardShadow flex justify-center items-center">
          <div
            onClick={onNext}
            className="w-[328px] h-[48px] bg-[#AACCFF] rounded-[10px] flex justify-center items-center gap-2 cursor-pointer"
          >
            <FiPlus className="w-6 h-6 text-[#10224D]" />
            <p className="text-[#10224D] text-base leading-[20px] font-semibold">
              Agregar una nueva tarjeta
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsStep1;
