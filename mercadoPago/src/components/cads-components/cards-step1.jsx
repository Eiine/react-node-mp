import { FiPlus } from "react-icons/fi";
import AddTarjetas from "./addTarjetas";
import { useSelector } from "react-redux";
import cactus from "../../assets/cactus.svg";

const CardsStep1 = ({ onNext }) => {
  const { update } = useSelector((state) => state.auth.user);
  const { cards } = update;
  return (
    <>
      {cards ? (
        <div className="flex flex-col items-center">
          <div className="mb-8 mt-[54px]">
            <img src={cactus} alt="" />
          </div>
          <div className="w-[328px] h-[48px] bg-white rounded-[10px] shadow-cardShadow flex justify-center items-center mb-4">
            <p className="text-sm leading-[17px] font-medium">
              No tenés ninguna tarjeta guardada.
            </p>
          </div>
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
      ) : (
        <div className="flex flex-col items-center justify-between w-full h-full">
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
      )}
    </>
  );
};

export default CardsStep1;
