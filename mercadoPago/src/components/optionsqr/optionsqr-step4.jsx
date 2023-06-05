import { TbDownload } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { handleImageFromElement } from "../../utils/downloadImage/downloadImage";
import { useSelector } from "react-redux";

const OptionsQrStep4 = ({ scannedData, currentDateTime, dataTranfer }) => {
  const { user, mount } = scannedData;
  const { fullname, cvu } = user;
  const { update } = useSelector((state) => state.auth.user);
  const myfullname = update?.fullname;
  const mycvu = update?.cvu;
  const printRef = useRef(null);
  const handlePrintQRCode = (download = true) => {
    if (printRef.current) {
      handleImageFromElement(
        printRef.current,
        `${myfullname?.toLowerCase().replaceAll(" ", "-")}-comprobante.png`,
        "image/png",
        download
      );
    }
  };

  return (
    <section className="flex flex-col items-center">
      <div
        ref={printRef}
        className="w-[328px] h-[592px] shadow-cardShadow rounded-[10px] bg-white mt-4"
      >
        <div className="h-[72px] flex justify-center items-center bg-white border-b-[1px]">
          <p className="font-semibold text-lg leading-[22px]">
            Comprobante de transferencia
          </p>
        </div>
        <div className="h-[64px] flex justify-start items-center border-b-[1px] bg-white">
          <p className="font-medium text-xs leading-[15px] pl-8">
            {currentDateTime}
          </p>
        </div>
        <div className="h-[80px] flex justify-start items-center border-b-[1px] bg-white">
          <p className="font-bold text-[28px] leading-[34px] pl-8">${mount}</p>
        </div>
        <div className="h-[288px] flex flex-col items-start justify-center border-b-[1px] pl-8 gap-4 bg-white">
          <div className="flex flex-col justify-center gap-3">
            <p className="font-medium text-xs leading-[15px] text-[#ADADAD]">
              De
            </p>
            <p className="text-base font-semibold leading-5">{myfullname}</p>
            <p className="font-medium text-xs leading-[15px]">
              <span className="text-[#ADADAD]">CVU: </span>
              {mycvu}
            </p>
            <p className="font-medium text-xs leading-[15px]">
              Cuenta WalletPay
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <p className="font-medium text-xs leading-[15px] text-[#ADADAD]">
              Para
            </p>
            <p className="text-base font-semibold leading-5">{fullname}</p>
            <p className="font-medium text-xs leading-[15px]">
              <span className="text-[#ADADAD]">CVU: </span>
              {cvu}
            </p>
            <p className="font-medium text-xs leading-[15px]">
              Cuenta WalletPay
            </p>
          </div>
        </div>
        <div className="h-[88px] flex flex-col items-start justify-center pl-8 gap-4 bg-white">
          <p className="font-medium text-xs leading-[15px] text-[#ADADAD]">
            Código de transferencia
          </p>
          <p className="font-medium text-xs leading-[15px]">
            {dataTranfer.operationNumber}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 my-4">
        <div
          onClick={() => handlePrintQRCode()}
          className="relative w-[328px] h-[48px] rounded-[10px] bg-[#10224D] flex justify-center items-center cursor-pointer"
        >
          <TbDownload className="absolute w-8 h-8 text-white left-4 top-2" />
          <p className="text-base font-semibold leading-5 text-white">
            Descargar comprobante
          </p>
        </div>
        <Link to="/home">
          <div className="w-[328px] h-[48px] flex justify-center items-center cursor-pointer">
            <p className="text-base font-semibold leading-5 text-[#10224D]">
              Ir al inicio
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default OptionsQrStep4;
