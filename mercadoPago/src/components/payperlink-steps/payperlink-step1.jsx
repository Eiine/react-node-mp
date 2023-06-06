import { AiOutlineClockCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import useTranfer from "../../hooks/useTranfer";
import { useSelector } from "react-redux";

const PayPerLinkStep1 = ({
  onNext,
  data,
  dataLink,
  Loading,
  setDataTranfer,
}) => {
  const { update } = useSelector((state) => state.auth.user);
  const { _id } = update;
  const {
    error: loginError,
    isLoading,
    postData,
  } = useTranfer({
    onSuccess: (data) => {
      console.log(data);
      setDataTranfer(data);
      onNext();
    },
    onError: (_error) => {
      setError("Error en la operación...");
    },
  });

  const handleTranfer = () => {
    postData("/auth/activity/transfer", {
      UserAccountId: _id,
      amount: Number(dataLink.mount),
      description: "Tranferencia por Qr",
      alias: data.user.alias,
    });
  };

  return (
    <section className="flex flex-col items-center">
      <div className="w-[328px] h-[420px] my-4 shadow-cardShadow rounded-[10px] flex flex-col justify-center items-center">
        {Loading ? (
          <ThreeDots
            height="60"
            width="80"
            radius="9"
            color="#4fa94d"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={Loading}
          />
        ) : (
          <div className="w-full h-[332px]">
            <div className="bg-white text-center h-[72px] rounded-t-[10px] flex justify-center items-center border-b-2">
              <p className="font-semibold text-lg leading-[22px]">
                Revisá si está todo bien
              </p>
            </div>
            <div className="h-[104px] bg-white flex flex-col justify-center items-start pl-[32px] gap-2 border-b-2">
              <p className="font-medium text-xs leading-[15px] text-[#ADADAD]">
                Vas a transferir
              </p>
              <p className="font-bold text-[28px] leading-[34px]">
                ${dataLink?.mount}
              </p>
            </div>
            <div className="h-[156px] bg-white flex flex-col justify-center items-start pl-[32px] gap-3 border-b-2">
              <p className="font-medium text-xs leading-[15px] text-[#ADADAD]">
                Para
              </p>
              <p className="text-base font-semibold leading-5">
                {data?.user.fullname}
              </p>
              <p className="font-medium text-xs leading-[15px]">
                <span className="text-[#ADADAD]">CVU: </span>
                {data?.user.cvu}
              </p>
            </div>
          </div>
        )}

        <div className="h-[88px] bg-[#EBEBEB] flex justify-center items-center gap-[14px] rounded-b-[10px]">
          <div className="relative flex items-center justify-center w-10 h-10 bg-white rounded-full">
            <AiOutlineClockCircle className="w-6 h-6 text-[#39528D]" />
            <span className="h-[10px] w-[10px] bg-[#39528D] rounded-full absolute bottom-0 right-0"></span>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-base font-medium leading-5">
              Se realiza al instante.
            </p>
            <p className="text-base font-medium leading-5">
              Revisala, no es cancelable.
            </p>
          </div>
          <AiOutlineInfoCircle className="w-6 h-6 text-gray-500" />
        </div>
      </div>
      {isLoading ? (
        <ThreeDots
          height="40"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={isLoading}
        />
      ) : (
        ""
      )}
      <div className="flex flex-col items-center justify-center gap-2">
        <div
          onClick={handleTranfer}
          className="bg-[#10224D] h-[48px] w-[328px] rounded-[10px] flex justify-center items-center cursor-pointer"
        >
          <p className="text-base font-semibold leading-5 text-white">
            Transferir
          </p>
        </div>
        <Link to="/home">
          <div className="bg-[#AACCFF] h-[48px] w-[328px] rounded-[10px] flex justify-center items-center cursor-pointer">
            <p className="font-semibold text-base leading-5 text-[#10224D]">
              Cancelar transferencia
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PayPerLinkStep1;
