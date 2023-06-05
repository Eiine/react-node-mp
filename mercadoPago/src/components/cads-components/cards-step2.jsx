import { useState } from "react";
import CardInputStep1 from "./card-input-step/card-input-step1";
import CardInputStep2 from "./card-input-step/card-input-step2";
import CardInputStep3 from "./card-input-step/card-input-step3";
import CardInputStep4 from "./card-input-step/card-input-step4";
import { useNavigate } from "react-router-dom";
import useTranfer from "../../hooks/useTranfer";
import { useSelector } from "react-redux";

import { ThreeDots } from "react-loader-spinner";

const CardsStep2 = ({ dataForm, setDataForm }) => {
  const [inputActual, setInputActual] = useState(1);
  const { update } = useSelector((state) => state.auth.user);
  const { _id } = update;
  const navigate = useNavigate();
  const {
    error: loginError,
    isLoading,
    postData,
  } = useTranfer({
    onSuccess: (data) => {
      console.log(data);
      navigate("/home");
    },
    onError: (_error) => {
      setError("Error en la operacion...");
    },
  });

  const handleNext = () => {
    if (inputActual < 4) {
      setInputActual(inputActual + 1);
    }
    if (inputActual == 4) {
      const { numbercard, cvv, namecard, vencimiento } = dataForm;
      postData(`/auth/card/${_id}`, {
        type: "debit",
        bank_emisor: "macro",
        bank: "visa",
        expiration_date: vencimiento,
        user_name: namecard,
        cvv: Number(cvv),
        user_card: namecard,
        user_number: Number(numbercard),
      });
    }
  };
  const handlePrev = () => {
    if (inputActual > 0) {
      setInputActual(inputActual - 1);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center">
      {inputActual === 1 && (
        <CardInputStep1 dataForm={dataForm} setDataForm={setDataForm} />
      )}
      {inputActual === 2 && (
        <CardInputStep2 dataForm={dataForm} setDataForm={setDataForm} />
      )}
      {inputActual === 3 && (
        <CardInputStep3 dataForm={dataForm} setDataForm={setDataForm} />
      )}
      {inputActual === 4 && (
        <CardInputStep4 dataForm={dataForm} setDataForm={setDataForm} />
      )}
      <div className="flex gap-2 mt-10">
        <button
          onClick={handlePrev}
          type="button"
          disabled={inputActual > 1 ? "" : true}
          className="h-[48px] w-[160px] bg-[#AACCFF] text-[#10224D] font-semibold text-sm leading-[17px] rounded-[10px] disabled:bg-[#DAD9E3] disabled:text-[#97969C]"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          type="button"
          className="h-[48px] w-[160px] bg-[#AACCFF] text-[#10224D] font-semibold text-sm leading-[17px] rounded-[10px]"
        >
          Siguiente
        </button> 
      </div>
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
    </section>
  );
};

export default CardsStep2;
