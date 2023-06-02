import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import { TbDownload } from "react-icons/tb";
import { MdContentCopy } from "react-icons/md";
import { useSelector } from "react-redux";
import useQr from "../../hooks/useQr";
import { useRef } from "react";
import { handleImageFromElement } from "../../utils/downloadImage/downloadImage";

const QrLinkStep2 = ({ onNext, dataForm }) => {
  const { user } = useSelector((state) => state.auth);
  const { alias, fullname } = user.update;
  const { data, isLoading, error } = useQr(`/auth/qr/${alias}/${dataForm}`);
  const printRef = useRef(null);

  const handlePrintQRCode = (download = true) => {
    if (printRef.current) {
      handleImageFromElement(
        printRef.current,
        `${fullname?.toLowerCase().replaceAll(" ", "-")}-qrcode.png`,
        "image/png",
        download
      );
    }
  };

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-[328px] h-[328px] bg-white shadow-cardShadow rounded-[10px] mt-6 flex justify-center items-center">
        <div ref={printRef} className="h-[264px] w-[264px]">
          {isLoading ? (
            <p>Cargando imagen</p>
          ) : (
            // <a href={data?.url} download>
            <img
              ref={printRef}
              className="w-full h-full"
              src={data?.url}
              alt=""
            />
          )}
        </div>
      </div>
      <div className="flex justify-center items-center mt-[32px]">
        <div
          onClick={() => handlePrintQRCode()}
          className="h-[64px] w-[64px] bg-[#10224D] shadow-cardShadow rounded-[10px] flex justify-center items-center cursor-pointer"
        >
          <TbDownload className="w-10 h-10 text-white" />
        </div>
      </div>
      <div className="relative w-[328px] h-[56px] shadow-cardShadow rounded-[10px] mt-[16px] bg-white flex justify-start items-center">
        <p className="font-semibold text-lg leading-[21px] pl-4">
          http:/www.cobro-wp-user...
        </p>
        <div className="absolute h-[56px] w-[56px] bg-[#10224D] shadow-cardShadow rounded-[10px] top-0 right-0 flex justify-center items-center">
          <MdContentCopy className="w-8 h-8 text-white" />
        </div>
      </div>
    </section>
  );
};

export default QrLinkStep2;
