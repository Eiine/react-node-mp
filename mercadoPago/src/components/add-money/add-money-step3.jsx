import { AiOutlineClockCircle, AiOutlineInfoCircle } from "react-icons/ai";
import useTranfer from "../../hooks/useTranfer";
import { ThreeDots } from "react-loader-spinner";
import { useSelector } from "react-redux";

const AddMoneyStep3 = ({ onNext, dataForm, setDataForm }) => {
  const { update } = useSelector((state) => state.auth.user);
  const { _id } = update;

  const { cardNumber, bank } = dataForm;
  const ultimosCuatro = String(cardNumber).slice(-4);
  const {
    error: loginError,
    isLoading,
    postData,
  } = useTranfer({
    onSuccess: (data) => {
      setDataForm((prev) => ({
        ...prev,
        operationNumber: data.operationNumber,
      }));
      onNext();
    },
    onError: (_error) => {
      setError("Error en la operacion...");
    },
  });
  // const handleNextStep = ()=>{

  // }
  const handleAddMoney = () => {
    const { cardNumber, cvv, balance } = dataForm;
    postData(`/auth/addMoney/${_id}`, {
      cardNumber: Number(`${cardNumber}`),
      cvv: Number(`${cvv}`),
      balance: Number(`${balance}`),
    });
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="w-[328px] h-[368px] shadow-cardShadow rounded-[10px] mt-6">
        <div className="h-[72px] w-full rounded-t-[10px] border-b-[1px] flex items-center justify-center bg-white">
          <p className="font-semibold text-lg leading-[22px]">
            Revisá si está todo bien
          </p>
        </div>
        <div className="h-[104px] border-b-[1px] pl-8 bg-white gap-2 flex flex-col justify-center">
          <p className="text-[#ADADAD] font-medium text-xs leading-[15px]">
            Vas a ingresar
          </p>
          <p className="font-bold text-[28px] leading-[34px]">
            ${dataForm.balance}
          </p>
        </div>
        <div className="h-[104px] border-b-[1px] pl-8 bg-white gap-2 flex flex-col justify-center">
          <p className="text-[#ADADAD] font-medium text-xs leading-[15px]">
            Tarjeta usada
          </p>
          <p className="font-bold text-[28px] leading-[34px]">
            {bank} *****{ultimosCuatro}
          </p>
        </div>
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

      <button
        onClick={handleAddMoney}
        type="button"
        className="bg-[#10224D] rounded-[10px] h-[48px] w-[328px] text-white font-semibold text-base leading-5 disabled:bg-[#DAD9E3] disabled:text-[#97969C] "
      >
        Ingresar dinero
      </button>
      <ThreeDots
        height="60"
        width="80"
        radius="9"
        color="#1e6bb9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={isLoading}
      />
    </section>
  );
};

export default AddMoneyStep3;
