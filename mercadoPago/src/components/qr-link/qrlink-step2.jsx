import { TbDownload } from "react-icons/tb";
import { MdContentCopy } from "react-icons/md";
import { useSelector } from "react-redux";
import useQr from "../../hooks/useQr";
import { useRef } from "react";
import { handleImageFromElement } from "../../utils/downloadImage/downloadImage";
import copy from "../../utils/copy";
import { ThreeDots } from "react-loader-spinner";

const QrLinkStep2 = ({ onNext, dataForm }) => {
  const { user } = useSelector((state) => state.auth);
  const { alias, fullname, _id } = user.update;
  const { data, isLoading, error } = useQr(`/auth/qr/${alias}/${dataForm}`);
  const printRef = useRef(null);
  const API_URL = import.meta.env.VITE_PUBLIC_API_URL;
  const url = `https://react-node-mp.vercel.app/payperlink/${_id}/${dataForm}`;
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
        <div
          ref={printRef}
          className="h-[264px] w-[264px] flex justify-center items-center"
        >
          {isLoading ? (
            <ThreeDots
              height="60"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={isLoading}
            />
          ) : (
            <img className="w-full h-full" src={data?.url} alt="" />
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
      <div className="relative w-[328px] h-[56px] shadow-cardShadow rounded-[10px] mt-[16px] bg-white flex justify-start items-center text-ellipsis overflow-hidden ">
        <p className="font-semibold text-lg leading-[21px] pl-4">{url}</p>
        <div
          onClick={() => copy(url)}
          className="absolute h-[56px] w-[56px] bg-[#10224D] shadow-cardShadow rounded-[10px] top-0 right-0 flex justify-center items-center cursor-pointer"
        >
          <MdContentCopy className="w-8 h-8 text-white" />
        </div>
      </div>
    </section>
  );
};

export default QrLinkStep2;
