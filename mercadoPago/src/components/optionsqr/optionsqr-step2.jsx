import { AiOutlineClockCircle, AiOutlineInfoCircle } from "react-icons/ai";

const OptionsQrStep2 = ({ onNext }) => {
  return (
    <section className="flex flex-col items-center">
      <div className="w-[328px] h-[420px] my-4 shadow-cardShadow rounded-[10px]">
        <div className="bg-white text-center h-[72px] rounded-t-[10px] flex justify-center items-center border-b-2">
          <p className="font-semibold text-lg leading-[22px]">
            Revisá si está todo bien
          </p>
        </div>
        <div className="h-[104px] bg-white flex flex-col justify-center items-start pl-[32px] gap-2 border-b-2">
          <p className="font-medium text-xs leading-[15px] text-[#ADADAD]">
            Vas a transferir
          </p>
          <p className="font-bold text-[28px] leading-[34px]">$1.800</p>
        </div>
        <div className="h-[156px] bg-white flex flex-col justify-center items-start pl-[32px] gap-3 border-b-2">
          <p className="font-medium text-xs leading-[15px] text-[#ADADAD]">
            Para
          </p>
          <p className="font-semibold text-base leading-5">Juan Gyldenfeldt</p>
          <p className="font-medium text-xs leading-[15px]">
            <span className="text-[#ADADAD]">CVU: </span>0000003456000581185568
          </p>
        </div>
        <div className="h-[88px] bg-[#EBEBEB] flex justify-center items-center gap-[14px] rounded-b-[10px]">
          <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center relative">
            <AiOutlineClockCircle className="w-6 h-6 text-[#39528D]" />
            <span className="h-[10px] w-[10px] bg-[#39528D] rounded-full absolute bottom-0 right-0"></span>
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="font-medium text-base leading-5">
              Se realiza al instante.
            </p>
            <p className="font-medium text-base leading-5">
              Revisala, no es cancelable.
            </p>
          </div>
          <AiOutlineInfoCircle className="w-6 h-6 text-gray-500" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <div
          onClick={onNext}
          className="bg-[#10224D] h-[48px] w-[328px] rounded-[10px] flex justify-center items-center cursor-pointer"
        >
          <p className="font-semibold text-base leading-5 text-white">
            Transferir
          </p>
        </div>
        <div className="bg-[#AACCFF] h-[48px] w-[328px] rounded-[10px] flex justify-center items-center cursor-pointer">
          <p className="font-semibold text-base leading-5 text-[#10224D]">
            Cancelar transferencia
          </p>
        </div>
      </div>
    </section>
  );
};

export default OptionsQrStep2;
